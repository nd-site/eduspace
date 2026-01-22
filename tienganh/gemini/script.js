// EduSpace Vocabulary App Logic
// Version: 5.0 - Dynamic Model Discovery & Auto-Healing

// --- Constants & Config ---
const GEMINI_MODELS_TEXT = [
    'gemini-1.5-flash-8b', // Fastest & cheapest
    'gemini-1.5-flash',
    'gemini-2.0-flash-exp',
    'gemini-1.5-flash-latest',
    'gemini-1.5-pro',
    'gemini-1.0-pro'
];

const GEMINI_MODELS_VISION = [
    'gemini-1.5-flash',
    'gemini-1.5-flash-latest',
    'gemini-1.5-pro',
    'gemini-1.5-pro-latest'
];

// --- Global State ---
let vocabData = [];
let gameData = {
    currentQuestionIndex: 0,
    score: 0,
    streak: 0,
    questions: [],
    mode: '',
    isRunning: false,
    stopCount: 20,
    repeatCount: 0,
    processedCount: 0
};

// Chat State
let chatHistory = [];
let currentAttachments = [];

// DOM Elements Container
let dom = {};

// Session Model Cache to avoid repeated 404/429
let sessionModel = {
    model: null,
    version: null
};


// --- Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    console.log("App Initializing v5...");

    // Initialize DOM references
    dom = {
        tabs: document.querySelectorAll('.nav-item'),
        tabContents: document.querySelectorAll('.tab-content'),

        apiKeyInput: document.getElementById('gemini-api-key'),
        saveApiBtn: document.getElementById('save-api-btn'),
        vocabTableBody: document.querySelector('#vocab-table tbody'),
        fillAiBtn: document.getElementById('fill-ai-btn'),
        importFile: document.getElementById('import-file'),
        importBtn: document.getElementById('import-btn'),
        exportBtn: document.getElementById('export-btn'),
        addRowBtn: document.getElementById('add-row-btn'),
        resetDataBtn: document.getElementById('reset-data-btn'),

        gameModeSelect: document.getElementById('game-mode'),
        repeatCountInput: document.getElementById('repeat-count'),
        stopCountInput: document.getElementById('stop-count'),
        startGameBtn: document.getElementById('start-game-btn'),

        configSection: document.getElementById('config-section'),
        gameSection: document.getElementById('game-section'),
        streakCounter: document.getElementById('streak-counter'),
        progressText: document.getElementById('progress-text'),
        progressBar: document.getElementById('progress-bar'),
        stopGameBtn: document.getElementById('stop-game-btn'),
        questionArea: document.getElementById('question-area'),
        questionText: document.getElementById('question-text'),
        questionHint: document.getElementById('question-hint'),
        optionsArea: document.getElementById('options-area'),
        inputArea: document.getElementById('input-area'),
        answerInput: document.getElementById('answer-input'),
        submitAnswerBtn: document.getElementById('submit-answer-btn'),
        feedbackArea: document.getElementById('feedback-area'),
        feedbackMessage: document.getElementById('feedback-message'),
        correctAnswerDisplay: document.getElementById('correct-answer-display'),
        correctText: document.getElementById('correct-text'),
        nextQuestionBtn: document.getElementById('next-question-btn'),

        chatMessages: document.getElementById('chat-messages'),
        chatInput: document.getElementById('chat-input'),
        sendChatBtn: document.getElementById('send-chat-btn'),
        chatImageUpload: document.getElementById('ai-image-upload'),
        attachmentPreview: document.getElementById('attachment-preview'),
        vocabSearch: document.getElementById('vocab-search'),
        aiChatPopup: document.getElementById('ai-chat-popup')
    };

    loadData();
    renderTable();
    setupEventListeners();
    setupTabs();

    console.log("App Ready!");
});

// --- Core Logic: Navigation & Events ---

function setupTabs() {
    dom.tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            dom.tabs.forEach(t => t.classList.remove('active'));
            dom.tabContents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            const tabId = tab.getAttribute('data-tab');
            const content = document.getElementById(tabId);
            if (content) content.classList.add('active');
        });
    });
}

function setupEventListeners() {
    // Data Management
    if (dom.addRowBtn) dom.addRowBtn.addEventListener('click', addRow);
    if (dom.vocabTableBody) dom.vocabTableBody.addEventListener('input', saveData);
    if (dom.resetDataBtn) dom.resetDataBtn.addEventListener('click', resetAllData);

    // API Key
    // API Key Auto-save
    if (dom.apiKeyInput) dom.apiKeyInput.addEventListener('input', handleSaveApiKeySilent);


    // Import/Export
    if (dom.importBtn) dom.importBtn.addEventListener('click', () => dom.importFile.click());
    if (dom.importFile) dom.importFile.addEventListener('change', handleImport);
    if (dom.exportBtn) dom.exportBtn.addEventListener('click', handleExport);

    // Auto-fill AI
    if (dom.fillAiBtn) dom.fillAiBtn.addEventListener('click', fillDataWithAI);

    // Search
    if (dom.vocabSearch) dom.vocabSearch.addEventListener('input', () => renderTable(dom.vocabSearch.value));

    // Spreadsheet Navigation
    if (dom.vocabTableBody) dom.vocabTableBody.addEventListener('keydown', handleSpreadsheetNav);

    // Game Control
    if (dom.startGameBtn) dom.startGameBtn.addEventListener('click', startGame);
    if (dom.stopGameBtn) dom.stopGameBtn.addEventListener('click', stopGame);
    if (dom.nextQuestionBtn) dom.nextQuestionBtn.addEventListener('click', nextQuestion);
    if (dom.submitAnswerBtn) dom.submitAnswerBtn.addEventListener('click', checkInputAnswer);
    if (dom.answerInput) {
        dom.answerInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') checkInputAnswer();
        });
    }

    if (dom.chatImageUpload) dom.chatImageUpload.addEventListener('change', handleChatImageUpload);

    // Chat AI Interaction
    if (dom.sendChatBtn) dom.sendChatBtn.addEventListener('click', sendChatMessage);
    if (dom.chatInput) {
        dom.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendChatMessage();
            }
        });
    }

    // AI FAB toggle (Fix: ensure it opens)
    if (dom.aiFab) dom.aiFab.onclick = toggleAIChat;
    if (dom.closeChatBtn) dom.closeChatBtn.onclick = toggleAIChat;
}

function toggleAIChat() {
    if (!dom.aiChatPopup) return;
    dom.aiChatPopup.classList.toggle('hidden');
    if (!dom.aiChatPopup.classList.contains('hidden')) {
        dom.chatInput.focus();
    }
}

function handleSpreadsheetNav(e) {
    if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) return;

    const input = e.target;
    if (input.tagName !== 'INPUT') return;

    const td = input.parentElement;
    const tr = td.parentElement;
    const allInputsInRow = Array.from(tr.querySelectorAll('input'));
    const colIndex = allInputsInRow.indexOf(input);

    let targetInput;

    if (e.key === 'ArrowRight' && input.selectionEnd === input.value.length) {
        targetInput = allInputsInRow[colIndex + 1];
    } else if (e.key === 'ArrowLeft' && input.selectionStart === 0) {
        targetInput = allInputsInRow[colIndex - 1];
    } else if (e.key === 'ArrowDown') {
        const trRows = Array.from(dom.vocabTableBody.querySelectorAll('tr'));
        const nextTr = trRows[trRows.indexOf(tr) + 1];
        if (nextTr) targetInput = nextTr.querySelectorAll('input')[colIndex];
    } else if (e.key === 'ArrowUp') {
        const trRows = Array.from(dom.vocabTableBody.querySelectorAll('tr'));
        const prevTr = trRows[trRows.indexOf(tr) - 1];
        if (prevTr) targetInput = prevTr.querySelectorAll('input')[colIndex];
    }

    if (targetInput) {
        e.preventDefault();
        targetInput.focus();
        setTimeout(() => targetInput.select(), 10);
    }
}

// --- API Handling (Dynamic Discovery) ---

async function getBestModel(apiKey) {
    // Check cache
    const cached = localStorage.getItem('gemini_discovery_list');
    if (cached) {
        const { models, timestamp } = JSON.parse(cached);
        // Cache valid for 1 hour
        if (Date.now() - timestamp < 3600000) return models;
    }

    console.log("🔍 Lấy danh sách model khả dụng...");
    const versions = ['v1beta', 'v1'];
    let discoveredModels = [];

    for (const ver of versions) {
        try {
            const resp = await fetch(`https://generativelanguage.googleapis.com/${ver}/models?key=${apiKey}`);
            const data = await resp.json();
            if (data.models && data.models.length > 0) {
                const capable = data.models
                    .filter(m => m.supportedGenerationMethods?.includes('generateContent'))
                    .map(m => m.name.split('/').pop()); // Get the ID

                discoveredModels = [...new Set([...discoveredModels, ...capable])];
            }
        } catch (e) {
            console.warn(`Discovery failed for ${ver}:`, e);
        }
    }

    if (discoveredModels.length > 0) {
        // Priority sorting - Prioritize the models the user wants
        const priority = [
            'gemini-2.0-flash',
            'gemini-1.5-flash-8b',
            'gemini-1.5-flash',
            'gemini-1.5-pro',
            'gemini-pro'
        ];
        discoveredModels.sort((a, b) => {
            const aIdx = priority.findIndex(p => a.includes(p));
            const bIdx = priority.findIndex(p => b.includes(p));
            if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx;
            if (aIdx !== -1) return -1;
            if (bIdx !== -1) return 1;
            return a.localeCompare(b);
        });

        localStorage.setItem('gemini_discovery_list', JSON.stringify({
            models: discoveredModels,
            timestamp: Date.now()
        }));
        return discoveredModels;
    }


    return null;
}


async function callGeminiAPI(payload, hasImages = false) {
    const inputKey = document.getElementById('gemini-api-key')?.value?.trim();
    const storedKey = localStorage.getItem('gemini_api_key');
    const apiKey = inputKey || storedKey;

    if (!apiKey) throw new Error('Thiếu API Key!');

    // 0. Use Session Cached Model if available
    if (sessionModel.model && sessionModel.version) {
        try {
            return await executeRequest(sessionModel.model, sessionModel.version, apiKey, payload);
        } catch (e) {
            console.warn(`Session model ${sessionModel.model} failed, re-discovering...`);
            sessionModel.model = null;
        }
    }

    // 1. Discovery
    let discovered = await getBestModel(apiKey);
    if (!discovered || discovered.length === 0) {
        discovered = ['gemini-1.5-flash', 'gemini-1.5-pro', 'gemini-pro'];
    }

    // Filter out trash
    const filteredModels = discovered.filter(m =>
        !m.includes('deep-research') && !m.includes('vision') && !m.includes('thinking')
    );

    let lastError = null;

    for (const model of filteredModels) {
        // Try v1 first for 2.x models if requested, or based on model name
        const endpoints = model.includes('2.') || model.includes('1.5') ? ['v1', 'v1beta'] : ['v1beta', 'v1'];

        for (const apiVer of endpoints) {
            try {
                const result = await executeRequest(model, apiVer, apiKey, payload);
                // Success! Cache it for this session
                sessionModel.model = model;
                sessionModel.version = apiVer;
                return result;
            } catch (e) {
                if (e.message?.includes('429')) {
                    lastError = e;
                    console.log(`429 on ${model}. Trying next model...`);
                    break; // Try next MODEL on 429
                }
                lastError = e;
            }
        }
    }

    throw lastError || new Error("Không thể kết nối với AI.");
}

async function executeRequest(model, apiVer, apiKey, payload) {
    const url = `https://generativelanguage.googleapis.com/${apiVer}/models/${model}:generateContent?key=${apiKey}`;
    console.log(`📡 Request: ${model} (${apiVer})`);

    // UI Feedback if possible
    if (dom.fillAiBtn && dom.fillAiBtn.disabled) {
        dom.fillAiBtn.textContent = `⏳ Đang dùng ${model.replace('gemini-', '')}...`;
    }

    const activePayload = JSON.parse(JSON.stringify(payload));
    if (activePayload.generationConfig) delete activePayload.generationConfig.response_mime_type;

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            ...activePayload,
            safetySettings: [
                { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
                { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
                { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
                { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }
            ]
        })
    });

    if (response.status === 429) throw new Error("429");

    const data = await response.json();
    if (data.error) throw new Error(data.error.message);

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) throw new Error("Empty response");

    return text;
}




function handleSaveApiKeySilent() {
    const key = dom.apiKeyInput.value.trim();
    if (!key) return;

    localStorage.setItem('gemini_api_key', key);
    // Clear cached model to force re-discovery with new key
    localStorage.removeItem('gemini_working_model');

    // Auto-trigger AI when key is entered
    debouncedAutoFill();
}

let autoFillTimer = null;
function debouncedAutoFill() {
    // Prevent loop if AI is already running
    if (dom.fillAiBtn && dom.fillAiBtn.disabled) return;

    // Only run if we have an API key
    if (!dom.apiKeyInput || !dom.apiKeyInput.value.trim()) return;

    clearTimeout(autoFillTimer);
    autoFillTimer = setTimeout(() => {
        fillDataWithAI();
    }, 2500); // Wait 2.5s after last change
}


// --- Feature: Auto-fill AI ---

async function fillDataWithAI() {
    if (dom.fillAiBtn.disabled) return;

    // 1. Lọc các hàng có dữ liệu (ít nhất có EN hoặc VI)
    const itemsToProcess = vocabData
        .map((item, index) => ({ ...item, _id: index }))
        .filter(item => (item.en && item.en.trim()) || (item.vi && item.vi.trim()));

    if (itemsToProcess.length === 0) {
        const originalText = dom.fillAiBtn.textContent;
        dom.fillAiBtn.textContent = '⚠️ Trống dữ liệu';
        setTimeout(() => { if (dom.fillAiBtn) dom.fillAiBtn.textContent = originalText; }, 2000);
        return;
    }

    dom.fillAiBtn.disabled = true;
    const originalBtnText = dom.fillAiBtn.textContent;
    dom.fillAiBtn.textContent = `⏳ Đang xử lý ${itemsToProcess.length} từ...`;

    console.log(`🚀 Gửi toàn bộ ${itemsToProcess.length} từ cho AI xử lý hàng loạt...`);

    const prompt = `
    You are an expert English-Vietnamese lexicographer.
    Task: Review and complete the missing information for the following vocabulary list.
    
    Data List: ${JSON.stringify(itemsToProcess.map(it => ({ id: it._id, en: it.en, vi: it.vi, ipa: it.ipa, type: it.type, usage: it.usage })))}
    
    Requirements for each entry:
    1. 'en': Correct English word. Always CAPITALIZE the first letter.
    2. 'vi': Accurate Vietnamese translation. Always CAPITALIZE the first letter.
    3. 'ipa': Standard IPA transcription.
    4. 'type': Part of speech (n, v, adj, adv).
    5. 'usage': English sentence (Tiếng Việt dịch)
    
    Return the result as a JSON array of objects, where each object MUST include the original "id".
    Format: [{"id": 0, "en": "...", "vi": "...", "ipa": "...", "type": "...", "usage": "..."}, ...]
    Return ONLY the raw JSON array.
    `;

    try {
        const resultText = await callGeminiAPI({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { temperature: 0.2 }
        });

        const match = resultText.match(/\[[\s\S]*\]/);
        if (match) {
            const results = JSON.parse(match[0]);
            let successCount = 0;

            results.forEach(res => {
                const targetEntry = vocabData[res.id];
                if (targetEntry) {
                    if (res.en) targetEntry.en = autoCapitalize(String(res.en).trim());
                    if (res.vi) targetEntry.vi = autoCapitalize(String(res.vi).trim());
                    if (res.ipa) targetEntry.ipa = String(res.ipa).trim();
                    if (res.type) targetEntry.type = String(res.type).trim();
                    if (res.usage) targetEntry.usage = autoCapitalize(String(res.usage).trim());
                    successCount++;

                    // Cập nhật UI ngay lập tức cho hàng tương ứng
                    const row = dom.vocabTableBody.querySelector(`tr[data-original-index="${res.id}"]`);
                    if (row) {
                        const inputs = row.querySelectorAll('input, textarea');
                        if (inputs.length >= 5) {
                            inputs[0].value = targetEntry.en;
                            inputs[1].value = targetEntry.ipa;
                            inputs[2].value = targetEntry.type;
                            inputs[3].value = targetEntry.vi;
                            inputs[4].value = targetEntry.usage;
                            inputs.forEach(tx => autoHeight(tx));
                        }
                    }
                }
            });

            localStorage.setItem('eduspace_vocab', JSON.stringify(vocabData));
            dom.fillAiBtn.textContent = `✅ Thành công ${successCount} từ!`;
        } else {
            dom.fillAiBtn.textContent = `❌ Lỗi định dạng AI`;
        }
    } catch (e) {
        console.error("Lỗi AI Batch:", e);
        dom.fillAiBtn.textContent = `❌ Lỗi kết nối`;
    }

    setTimeout(() => {
        dom.fillAiBtn.textContent = originalBtnText;
        dom.fillAiBtn.disabled = false;
    }, 2000);
}


// --- Feature: Chat AI ---

function handleChatImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        const base64Data = e.target.result.split(',')[1];
        currentAttachments.push({
            inlineData: { mimeType: file.type, data: base64Data },
            preview: e.target.result
        });
        renderAttachments();
    };
    reader.readAsDataURL(file);
    event.target.value = '';
}

function renderAttachments() {
    dom.attachmentPreview.innerHTML = '';

    if (currentAttachments.length > 0) {
        dom.attachmentPreview.classList.remove('hidden');
        currentAttachments.forEach((att, index) => {
            const div = document.createElement('div');
            div.className = 'preview-item';
            div.innerHTML = `<img src="${att.preview}"><div class="remove-att" onclick="removeAttachment(${index})">✕</div>`;
            dom.attachmentPreview.appendChild(div);
        });
    } else {
        dom.attachmentPreview.classList.add('hidden');
    }
}

window.removeAttachment = function (index) {
    currentAttachments.splice(index, 1);
    renderAttachments();
};

async function sendChatMessage() {
    const text = dom.chatInput.value.trim();
    if (!text && currentAttachments.length === 0) return;

    const hasImages = currentAttachments.length > 0;

    // UI Update
    appendMessage(text, 'user', currentAttachments.map(a => a.preview));
    dom.chatInput.value = '';

    // Prepare Payload
    const currentParts = [];
    if (text) currentParts.push({ text });
    const attachmentsToSend = [...currentAttachments];
    attachmentsToSend.forEach(att => currentParts.push({ inlineData: att.inlineData }));

    // Reset Attachment UI
    currentAttachments = [];
    renderAttachments();

    // History
    chatHistory.push({ role: "user", parts: currentParts });

    const loadingId = 'loading-' + Date.now();
    appendLoading(loadingId);

    try {
        const aiText = await callGeminiAPI({
            contents: chatHistory,
            generationConfig: { maxOutputTokens: 2048, temperature: 0.7 }
        }, hasImages);

        if (document.getElementById(loadingId)) document.getElementById(loadingId).remove();

        appendMessage(aiText || "...", 'bot');
        chatHistory.push({ role: 'model', parts: [{ text: aiText }] });

    } catch (e) {
        if (document.getElementById(loadingId)) document.getElementById(loadingId).remove();
        appendMessage(`⚠️ Lỗi: ${e.message}`, 'bot');
    }
}

function appendMessage(text, role, images = []) {
    const div = document.createElement('div');
    div.className = `message ${role}`;

    let contentHtml = '';
    if (images.length > 0) {
        images.forEach(img => {
            contentHtml += `<img src="${img}" style="max-height: 150px; display: block; margin-bottom: 5px;">`;
        });
    }

    if (role === 'bot') {
        contentHtml += typeof marked !== 'undefined' ? marked.parse(text) : text;
    } else {
        contentHtml += `<p>${text ? text.replace(/\n/g, '<br>') : ''}</p>`;
    }

    const botSvg = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`;
    const userSvg = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;

    div.innerHTML = `
        <div class="avatar ${role === 'user' ? 'bg-amber-100 text-amber-600' : 'bg-blue-600 text-white'} w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100">
            ${role === 'user' ? userSvg : botSvg}
        </div>
        <div class="msg-content">${contentHtml}</div>
    `;

    dom.chatMessages.appendChild(div);
    if (window.renderMathInElement && role === 'bot') {
        try {
            renderMathInElement(div, { delimiters: [{ left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }] });
        } catch (e) { console.warn("Math/Katex render error", e); }
    }
    dom.chatMessages.scrollTop = dom.chatMessages.scrollHeight;
}

function appendLoading(id) {
    const div = document.createElement('div');
    div.id = id;
    div.className = 'message bot';
    div.innerHTML = `<div class="avatar">🤖</div><div class="msg-content">...</div>`;
    dom.chatMessages.appendChild(div);
    dom.chatMessages.scrollTop = dom.chatMessages.scrollHeight;
}

window.toggleAIChat = function () {
    if (!dom.aiChatPopup) return;
    const isHidden = dom.aiChatPopup.classList.contains('hidden');
    if (isHidden) {
        dom.aiChatPopup.classList.remove('hidden');
        dom.aiChatPopup.classList.add('flex');
        if (dom.chatInput) dom.chatInput.focus();
    } else {
        dom.aiChatPopup.classList.add('hidden');
        dom.aiChatPopup.classList.remove('flex');
    }
}

// --- Feature: Data Management ---

function loadData() {
    const savedVocab = localStorage.getItem('eduspace_vocab');
    if (savedVocab) {
        vocabData = JSON.parse(savedVocab);
    } else {
        vocabData = [{ en: '', ipa: '', type: '', vi: '', usage: '' }];
    }

    const savedKey = localStorage.getItem('gemini_api_key');
    if (savedKey && dom.apiKeyInput) {
        dom.apiKeyInput.value = savedKey;
    }
}

function autoCapitalize(str) {
    if (!str || typeof str !== 'string') return str;
    return str.trim().charAt(0).toUpperCase() + str.trim().slice(1);
}

// Auto-adjust textarea height
window.autoHeight = function (element) {
    element.style.height = "auto"; // Reset to auto first
    element.style.height = (element.scrollHeight + 5) + "px"; // Thêm buffer rộng hơn (5px)
}

window.speak = function (text) {
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
}

function saveData(skipAutoFill = false) {
    if (!dom.vocabTableBody) return;

    // Nếu đang lọc, ta chỉ cập nhật những phần tử đang hiển thị vào vocabData gốc
    const rows = Array.from(dom.vocabTableBody.querySelectorAll('tr'));

    rows.forEach(row => {
        const index = parseInt(row.getAttribute('data-original-index'));
        if (isNaN(index) || !vocabData[index]) return;

        const inputs = row.querySelectorAll('input, textarea');
        if (inputs.length >= 5) {
            vocabData[index].en = autoCapitalize(inputs[0].value);
            vocabData[index].ipa = inputs[1].value;
            vocabData[index].type = inputs[2].value;
            vocabData[index].vi = autoCapitalize(inputs[3].value);
            vocabData[index].usage = autoCapitalize(inputs[4].value);
        }
    });

    localStorage.setItem('eduspace_vocab', JSON.stringify(vocabData));

    // Auto-trigger AI when data changes
    if (!skipAutoFill) debouncedAutoFill();
}

function renderTable(filterQuery = '') {
    if (!dom.vocabTableBody) return;
    dom.vocabTableBody.innerHTML = '';

    const query = filterQuery ? filterQuery.toLowerCase().trim() : (dom.vocabSearch ? dom.vocabSearch.value.toLowerCase().trim() : '');

    vocabData.forEach((item, index) => {
        if (query) {
            const matchEn = (item.en || '').toLowerCase().includes(query);
            const matchVi = (item.vi || '').toLowerCase().includes(query);
            const matchIpa = (item.ipa || '').toLowerCase().includes(query);
            if (!matchEn && !matchVi && !matchIpa) return;
        }
        addRowToDom(item, index);
    });
}

function addRow() {
    const newItem = { en: '', ipa: '', type: '', vi: '', usage: '' };
    vocabData.push(newItem);
    addRowToDom(newItem, vocabData.length - 1);
    saveData();
}

function addRowToDom(item, index) {
    const tr = document.createElement('tr');
    tr.className = 'hover:bg-indigo-50/10 transition-colors group border-b border-slate-50';
    tr.setAttribute('data-original-index', index);
    tr.innerHTML = `
        <td class="col-en px-4 py-1 border-r border-slate-100">
            <div class="flex items-start gap-1">
                <textarea placeholder="English" class="vocab-input" oninput="autoHeight(this)" rows="1">${item.en || ''}</textarea>
                <button class="mt-3 p-1 text-slate-300 hover:text-indigo-500 transition-colors" onclick="speak('${item.en || ''}')">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                </button>
            </div>
        </td>
        <td class="col-ipa px-4 py-1 border-r border-slate-100">
            <textarea placeholder="/.../" class="vocab-input" oninput="autoHeight(this)" rows="1">${item.ipa || ''}</textarea>
        </td>
        <td class="col-type px-4 py-1 border-r border-slate-100">
            <textarea placeholder="type" class="vocab-input" oninput="autoHeight(this)" rows="1">${item.type || ''}</textarea>
        </td>
        <td class="col-vi px-4 py-1 border-r border-slate-100">
            <textarea placeholder="Tiếng Việt" class="vocab-input" oninput="autoHeight(this)" rows="1">${item.vi || ''}</textarea>
        </td>
        <td class="col-usage px-4 py-1 border-r border-slate-100">
            <textarea placeholder="Example sentence..." class="vocab-input" oninput="autoHeight(this)" rows="1">${item.usage || ''}</textarea>
        </td>
        <td class="px-2 py-1 text-center">
            <button class="delete-row-btn p-2 text-slate-200 hover:text-red-500 transition-all transform hover:scale-110" onclick="deleteRow(event, ${index})">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        </td>
    `;
    dom.vocabTableBody.appendChild(tr);

    // Trigger autoHeight after adding to DOM
    tr.querySelectorAll('textarea').forEach(tx => autoHeight(tx));
}

window.deleteRow = function (event, index) {
    if (event) event.stopPropagation();
    // Safely remove from array
    vocabData.splice(index, 1);
    // Directly save array to storage to avoid sync issues with DOM
    localStorage.setItem('eduspace_vocab', JSON.stringify(vocabData));
    // Re-render
    renderTable();
};

function resetAllData() {
    if (confirm('Xóa toàn bộ dữ liệu?')) {
        localStorage.removeItem('eduspace_vocab');
        vocabData = [{ en: '', ipa: '', type: '', vi: '', usage: '' }];
        renderTable();
        alert('Đã reset.');
    }
}

function handleExport() {
    saveData();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(vocabData));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "eduspace_vocab_data.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function handleImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const importedData = JSON.parse(e.target.result);
            if (Array.isArray(importedData)) {
                vocabData = importedData;
                saveData();
                renderTable();
                alert('Nhập thành công!');
            } else throw new Error('Format sai');
        } catch (error) { alert('Lỗi file: ' + error.message); }
    };
    reader.readAsText(file);
}

// --- Feature: Game Logic ---

function startGame() {
    saveData();
    const validVocab = vocabData.filter(v => v.en && v.vi);
    if (validVocab.length < 1) { alert('Cần ít nhất 1 từ vựng!'); return; }

    gameData.questions = JSON.parse(JSON.stringify(validVocab));
    gameData.mode = dom.gameModeSelect.value;
    gameData.stopCount = parseInt(dom.stopCountInput.value) || 20;
    gameData.repeatCount = parseInt(dom.repeatCountInput.value) || 0;
    gameData.currentQuestionIndex = 0;
    gameData.score = 0;
    gameData.streak = 0;
    gameData.isRunning = true;
    gameData.processedCount = 0;

    shuffleArray(gameData.questions);

    const settingsCard = document.querySelector('#practice-tab .settings-card') || document.querySelector('.settings-card');
    if (settingsCard) settingsCard.classList.add('hidden');

    dom.gameSection.classList.remove('hidden');
    updateProgress();
    loadQuestion();
}

function stopGame() {
    gameData.isRunning = false;
    dom.gameSection.classList.add('hidden');
    const settingsCard = document.querySelector('#practice-tab .settings-card') || document.querySelector('.settings-card');
    if (settingsCard) settingsCard.classList.remove('hidden');
    alert(`Kết thúc! Điểm: ${gameData.score}/${gameData.processedCount}`);
}

function loadQuestion() {
    if (!gameData.isRunning) return;

    if (gameData.processedCount >= gameData.stopCount) { stopGame(); return; }

    if (gameData.currentQuestionIndex >= gameData.questions.length) {
        if (gameData.repeatCount > 0 && Math.floor(gameData.processedCount / gameData.questions.length) >= gameData.repeatCount) {
            stopGame(); return;
        }
        gameData.currentQuestionIndex = 0;
        shuffleArray(gameData.questions);
    }

    const currentWord = gameData.questions[gameData.currentQuestionIndex];
    gameData.currentWord = currentWord;

    renderQuestionUI(currentWord);
}

function renderQuestionUI(word) {
    dom.optionsArea.innerHTML = '';
    dom.optionsArea.classList.add('hidden');
    dom.inputArea.classList.add('hidden');
    dom.feedbackArea.classList.add('hidden');
    dom.answerInput.value = '';
    dom.correctAnswerDisplay.classList.add('hidden');
    dom.questionHint.textContent = '';

    let question = '';
    let mode = gameData.mode;

    if (mode === 'mc-mixed' || mode.startsWith('mc-')) dom.optionsArea.classList.remove('hidden');
    else {
        dom.inputArea.classList.remove('hidden');
        dom.answerInput.focus();
    }

    // Logic for mixed mode
    let effectiveMode = mode === 'mc-mixed'
        ? ['mc-eng-viet', 'mc-viet-eng', 'mc-ipa-viet'][Math.floor(Math.random() * 3)]
        : mode;

    gameData.effectiveMode = effectiveMode;

    switch (effectiveMode) {
        case 'mc-eng-viet':
        case 'input-eng-viet':
            question = word.en;
            dom.questionHint.textContent = word.type ? `(${word.type})` : '';
            if (effectiveMode.includes('mc')) generateOptions(word, 'vi');
            break;
        case 'mc-viet-eng':
        case 'input-viet-eng':
            question = word.vi;
            if (effectiveMode.includes('mc')) generateOptions(word, 'en');
            break;
        case 'mc-ipa-viet':
        case 'input-ipa-viet':
            question = word.ipa || word.en;
            dom.questionHint.textContent = "Phiên âm";
            if (effectiveMode.includes('mc')) generateOptions(word, 'vi');
            break;
    }
    dom.questionText.textContent = question;
}

function generateOptions(correctWord, answerKey) {
    const otherWords = vocabData.filter(w => w !== correctWord);
    shuffleArray(otherWords);
    const distractors = otherWords.slice(0, 3);
    const options = [correctWord, ...distractors];
    shuffleArray(options);

    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt[answerKey];
        btn.onclick = () => checkMCAnswer(opt, correctWord);
        dom.optionsArea.appendChild(btn);
    });
}

function checkMCAnswer(selected, correct) {
    if (!dom.feedbackArea.classList.contains('hidden')) return;
    const isCorrect = selected === correct;
    handleFeedback(isCorrect);

    const key = gameData.effectiveMode.includes('viet-eng') ? 'en' : 'vi';
    const buttons = dom.optionsArea.querySelectorAll('button');
    buttons.forEach(btn => {
        if (btn.textContent === correct[key]) btn.classList.add('correct');
        else if (btn.textContent === selected[key] && !isCorrect) btn.classList.add('wrong');
    });
}

function checkInputAnswer() {
    if (!dom.feedbackArea.classList.contains('hidden')) return;
    const input = dom.answerInput.value.trim().toLowerCase();
    const key = gameData.effectiveMode.includes('viet-eng') ? 'en' : 'vi';
    const correctVal = gameData.currentWord[key].toLowerCase();
    const isCorrect = input === correctVal || (input.length > 2 && correctVal.includes(input));
    handleFeedback(isCorrect);
}

function handleFeedback(isCorrect) {
    gameData.processedCount++;
    if (isCorrect) {
        gameData.score++;
        gameData.streak++;
        dom.feedbackMessage.textContent = "Chính xác! 🎉";
        dom.feedbackMessage.style.color = 'var(--success-color)';
    } else {
        gameData.streak = 0;
        dom.feedbackMessage.textContent = "Sai rồi! 😔";
        dom.feedbackMessage.style.color = 'var(--error-color)';
        dom.correctAnswerDisplay.classList.remove('hidden');
        const key = gameData.effectiveMode.includes('viet-eng') ? 'en' : 'vi';
        dom.correctText.textContent = gameData.currentWord[key];
    }
    updateProgress();
    dom.feedbackArea.classList.remove('hidden');
}

function nextQuestion() {
    gameData.currentQuestionIndex++;
    loadQuestion();
}

function updateProgress() {
    dom.streakCounter.textContent = `🔥 Chuỗi: ${gameData.streak}`;
    dom.progressText.textContent = `Câu: ${gameData.processedCount}/${gameData.stopCount}`;
    const percent = Math.min((gameData.processedCount / gameData.stopCount) * 100, 100);
    dom.progressBar.style.width = `${percent}%`;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
