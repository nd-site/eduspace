// data.js – KIỂM TRA CUỐI KÌ II – TOÁN 12 (KNTT) – 2025-2026
// Chương trình GDPT 2018 | Sách Kết Nối Tri Thức với Cuộc Sống
// Nội dung HK2: Nguyên hàm – Tích phân – Hình học Oxyz – Xác suất có điều kiện
// 28 câu TN (×0,25đ = 7đ) + 3 câu TL (×1đ = 3đ) | 90 phút

window.quizData = {
    title: "Kiểm tra Cuối Học Kì II – Toán 12 (Kết nối tri thức) 2025-2026",
    config: {
        testDuration: 5400,
        examLayout: {
            multiple: { count: 28, pointsPerQ: 0.25 },
            essay: { count: 3, pointsPerQ: 1.0 }
        }
    },
    questions: [
        // ── NGUYÊN HÀM – TÍCH PHÂN ────────────────────────────────────────
        {
            type: "multiple",
            question: "Họ nguyên hàm của hàm số f(x) = 3x² + 2x là:",
            options: ["x³ + x² + C", "6x + 2 + C", "3x³ + 2x² + C", "x³ + x + C"],
            correct: 0,
            explanation: "∫(3x² + 2x)dx = 3(x³/3) + 2(x²/2) + C = x³ + x² + C."
        },
        {
            type: "multiple",
            question: "Nguyên hàm của hàm số f(x) = e^x + 1/x (với x > 0) là:",
            options: ["e^x + ln x + C", "e^x − 1/x² + C", "e^x + ln|x| + C", "e^x + x + C"],
            correct: 2,
            explanation: "∫(e^x + 1/x)dx = e^x + ln|x| + C."
        },
        {
            type: "multiple",
            question: "Biết ∫(0→2) f(x)dx = 5 và ∫(0→2) g(x)dx = 3. Giá trị của ∫(0→2) [f(x) − 2g(x)]dx là:",
            options: ["−1", "2", "−11", "11"],
            correct: 0,
            explanation: "I = 5 − 2×3 = 5 − 6 = −1."
        },
        {
            type: "multiple",
            question: "Tích phân ∫(1→e) (1/x)dx bằng:",
            options: ["1", "e", "e−1", "0"],
            correct: 0,
            explanation: "∫(1→e) dx/x = ln|x| (từ 1 đến e) = ln e − ln 1 = 1 − 0 = 1."
        },
        {
            type: "multiple",
            question: "Diện tích S của hình phẳng giới hạn bởi đồ thị hàm số y = f(x) liên tục, trục hoành và hai đường thẳng x=a, x=b (a<b) được tính bằng:",
            options: [
                "$$S = \\int_a^b |f(x)|dx$$",
                "$$S = \\left| \\int_a^b f(x)dx \\right|$$",
                "$$S = \\pi \\int_a^b f^2(x)dx$$",
                "$$S = \\int_a^b f(x)dx$$"
            ],
            correct: 0,
            explanation: "Diện tích: S = ∫ |f(x)| dx."
        },
        {
            type: "multiple",
            question: "Thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi y = f(x), y=0, x=a, x=b quanh trục Ox là:",
            options: [
                "$$V = \\pi \\int_a^b f^2(x)dx$$",
                "$$V = \\int_a^b f^2(x)dx$$",
                "$$V = \\pi \\int_a^b |f(x)|dx$$",
                "$$V = \\pi \\left( \\int_a^b f(x)dx \\right)^2$$"
            ],
            correct: 0,
            explanation: "Thể tích: V = π.∫ f²(x)dx."
        },
        {
            type: "multiple",
            question: "Tính tích phân I = ∫(0→π/2) cos(x)dx:",
            options: ["1", "0", "−1", "π/2"],
            correct: 0,
            explanation: "∫cos(x)dx = sin(x). Tại π/2: sin(π/2) = 1; tại 0: sin(0) = 0. I = 1 − 0 = 1."
        },
        // ── HÌNH HỌC OXYZ ────────────────────────────────────────────────
        {
            type: "multiple",
            question: "Trong không gian Oxyz, khoảng cách từ điểm M(1; −2; 3) đến gốc tọa độ O là:",
            options: ["$$\\sqrt{14}$$", "14", "6", "$$\\sqrt{6}$$"],
            correct: 0,
            explanation: "OM = √(1² + (−2)² + 3²) = √(1+4+9) = √14."
        },
        {
            type: "multiple",
            question: "Trung điểm của đoạn thẳng AB với A(1; 3; 5) và B(3; −1; 1) có tọa độ là:",
            options: ["(2; 1; 3)", "(4; 2; 6)", "(1; −2; −2)", "(2; 2; 3)"],
            correct: 0,
            explanation: "I = ((1+3)/2 ; (3−1)/2 ; (5+1)/2) = (2; 1; 3)."
        },
        {
            type: "multiple",
            question: "Mặt phẳng (P): 2x − y + 3z + 5 = 0 có một vectơ pháp tuyến là:",
            options: ["n = (2; −1; 3)", "n = (2; 1; 3)", "n = (−1; 3; 5)", "n = (2; −1; 5)"],
            correct: 0,
            explanation: "Vectơ pháp tuyến n = (A; B; C) = (2; −1; 3)."
        },
        {
            type: "multiple",
            question: "Phương trình mặt cầu tâm I(1; −2; 0) bán kính R = 4 là:",
            options: [
                "(x−1)² + (y+2)² + z² = 16",
                "(x+1)² + (y−2)² + z² = 16",
                "(x−1)² + (y+2)² + z² = 4",
                "(x−1)² + (y−2)² + z² = 16"
            ],
            correct: 0,
            explanation: "(x−1)² + (y+2)² + (z−0)² = R² = 16."
        },
        {
            type: "multiple",
            question: "Đường thẳng d đi qua M(1; 2; −3) và có vectơ chỉ phương u = (2; −1; 4) có phương trình tham số là:",
            options: [
                "x = 1+2t; y = 2−t; z = −3+4t",
                "x = 2+t; y = −1+2t; z = 4−3t",
                "x = 1+t; y = 2+t; z = −3+t",
                "x = 2t; y = −t; z = 4t"
            ],
            correct: 0,
            explanation: "x = x₀+at; y = y₀+bt; z = z₀+ct."
        },
        {
            type: "multiple",
            question: "Khoảng cách từ điểm M(1; 1; 1) đến mặt phẳng (P): 2x + 2y − z + 3 = 0 là:",
            options: ["2", "6", "1", "3"],
            correct: 0,
            explanation: "d = |2×1 + 2×1 − 1 + 3| / √(2² + 2² + (−1)²) = |6| / √9 = 6/3 = 2."
        },
        {
            type: "multiple",
            question: "Tích có hướng của hai vectơ a=(1; 0; 2) và b=(−1; 1; 3) là vectơ:",
            options: ["(−2; −5; 1)", "(−2; 5; 1)", "(2; 5; 1)", "(−2; −5; −1)"],
            correct: 0,
            explanation: "[a,b] = (0×3 − 2×1; 2×(−1) − 1×3; 1×1 − 0×(−1)) = (−2; −5; 1)."
        },
        // ── XÁC SUẤT CÓ ĐIỀU KIỆN ────────────────────────────────────────
        {
            type: "multiple",
            question: "Cho A và B là 2 biến cố. Xác suất có điều kiện P(A|B) được định nghĩa là:",
            options: ["P(A ∩ B) / P(B)", "P(A ∩ B) / P(A)", "P(A) / P(B)", "P(A ∪ B) / P(B)"],
            correct: 0,
            explanation: "Công thức P(A|B) = P(A∩B)/P(B)."
        },
        {
            type: "multiple",
            question: "Nếu A và B là 2 biến cố độc lập thì P(A|B) bằng:",
            options: ["P(A)", "P(B)", "P(A).P(B)", "0"],
            correct: 0,
            explanation: "Nếu A, B độc lập thì biến cố B xảy ra không ảnh hưởng tới A, P(A|B) = P(A)."
        },
        {
            type: "multiple",
            question: "Biết P(A) = 0,5; P(B) = 0,4; P(A ∩ B) = 0,2. Tính P(B|A):",
            options: ["0,4", "0,5", "0,2", "0,8"],
            correct: 0,
            explanation: "P(B|A) = P(B∩A)/P(A) = 0,2 / 0,5 = 0,4."
        },
        {
            type: "multiple",
            question: "Công thức Bayes cho 2 biến cố A và B là:",
            options: [
                "$$P(A|B) = \\frac{P(B|A)P(A)}{P(B)}$$",
                "$$P(A|B) = \\frac{P(A|B)P(B)}{P(A)}$$",
                "$$P(A|B) = P(A)P(B)$$",
                "$$P(A|B) = \\frac{P(A \\cap B)}{P(A)}$$"
            ],
            correct: 0,
            explanation: "Bayes: P(A|B) = P(B|A)P(A)/P(B)."
        },
        // ── TỔNG HỢP / NÂNG CAO ──────────────────────────────────────────
        {
            type: "multiple",
            question: "Tính I = ∫(1→2) x.e^x dx (Sử dụng tích phân từng phần):",
            options: ["e²", "e", "e² − e", "2e² − e"],
            correct: 0,
            explanation: "u=x, dv=e^x dx → du=dx, v=e^x. I = x.e^x (1→2) − ∫(1→2) e^x dx = 2e² − e − (e² − e) = e²."
        },
        {
            type: "multiple",
            question: "Mặt cầu (S): x² + y² + z² − 2x + 4y − 6z − 2 = 0 có bán kính bằng:",
            options: ["4", "16", "2", "$$\\sqrt{14}$$"],
            correct: 0,
            explanation: "Tâm I(1; −2; 3). R = √(1² + (−2)² + 3² − (−2)) = √(1+4+9+2) = √16 = 4."
        },
        {
            type: "multiple",
            question: "Tính diện tích hình phẳng giới hạn bởi y = x² và y = 2x:",
            options: ["4/3", "2/3", "8/3", "4"],
            correct: 0,
            explanation: "Giao điểm: x²=2x → x=0, x=2. S = ∫(0→2) (2x − x²)dx = (x² − x³/3) (0→2) = 4 − 8/3 = 4/3."
        },
        {
            type: "multiple",
            question: "Phương trình mặt phẳng đi qua A(1; 0; 0), B(0; 2; 0), C(0; 0; 3) (phương trình theo đoạn chắn) là:",
            options: [
                "x/1 + y/2 + z/3 = 1",
                "x + y + z = 1",
                "x/1 + y/2 + z/3 = 0",
                "3x + 2y + z = 6"
            ],
            correct: 0,
            explanation: "PT mặt phẳng chắn 3 trục: x/a + y/b + z/c = 1."
        },
        {
            type: "multiple",
            question: "Giao điểm của d: {x=1+t; y=2-t; z=t} và (P): x + y + z − 4 = 0 có tọa độ là:",
            options: ["(2; 1; 1)", "(1; 2; 0)", "(0; 3; −1)", "(3; 0; 2)"],
            correct: 0,
            explanation: "Thay x,y,z vào (P): (1+t) + (2−t) + t − 4 = 0 → 3+t−4=0 → t=1. Điểm: x=2, y=1, z=1."
        },
        {
            type: "multiple",
            question: "Góc giữa 2 mặt phẳng (P): x + y + z = 0 và (Q): z = 0 là:",
            options: ["arccos(1/√3)", "arccos(1/3)", "30°", "45°"],
            correct: 0,
            explanation: "n_P = (1; 1; 1), n_Q = (0; 0; 1). cosα = |1.0+1.0+1.1| / (√3 . 1) = 1/√3."
        },
        {
            type: "multiple",
            question: "Tích phân I = ∫(0→π) sin(x) dx bằng:",
            options: ["2", "0", "1", "−2"],
            correct: 0,
            explanation: "I = −cos(x) (0→π) = −(cosπ − cos0) = −(−1 − 1) = 2."
        },
        {
            type: "multiple",
            question: "Khoảng cách giữa hai mặt phẳng song song (P): x+y+z−1=0 và (Q): x+y+z+2=0 là:",
            options: ["$$\\sqrt{3}$$", "1", "3", "$$\\frac{1}{\\sqrt{3}}$$"],
            correct: 0,
            explanation: "d = |−1 − 2| / √(1²+1²+1²) = 3/√3 = √3."
        },
        {
            type: "multiple",
            question: "Thể tích khối tròn xoay khi quay y = √x, trục Ox, x=0, x=4 là:",
            options: ["8π", "16π/3", "4π", "16π"],
            correct: 0,
            explanation: "V = π∫(0→4) (√x)² dx = π∫(0→4) x dx = π.(x²/2)(0→4) = π(16/2) = 8π."
        },
        {
            type: "multiple",
            question: "Chọn 1 thẻ từ 10 thẻ (1-10). A: 'Rút được thẻ chẵn', B: 'Rút được thẻ > 5'. Tính P(B|A):",
            options: ["3/5", "1/2", "3/10", "2/5"],
            correct: 0,
            explanation: "Thẻ chẵn A={2,4,6,8,10} có 5 thẻ. B∩A={6,8,10} có 3 thẻ. P(B|A) = n(B∩A)/n(A) = 3/5."
        },
        // ── TỰ LUẬN ──────────────────────────────────────────────────────
        {
            type: "essay",
            question: "Tính các tích phân sau:\n\na) I = ∫(0→1) (2x + e^x) dx\nb) K = ∫(0→π/2) x.sin(x) dx (Gợi ý: Tích phân từng phần)",
            suggested: "a) I = (x² + e^x) (từ 0→1) = (1² + e¹) − (0 + e⁰) = 1 + e − 1 = e.\n\nb) Đặt u = x → du = dx; dv = sin(x)dx → v = −cos(x).\nK = −x.cos(x) (0→π/2) − ∫(0→π/2) (−cos(x))dx\n= (0 − 0) + ∫(0→π/2) cos(x)dx = sin(x) (0→π/2) = 1 − 0 = 1.",
            points: 25,
            explanation: "AI chấm: I = e; K = 1."
        },
        {
            type: "essay",
            question: "Trong không gian Oxyz, cho 3 điểm A(1; 0; −1), B(2; 1; 1), C(0; −1; 2).\n\na) Viết phương trình tham số của đường thẳng AB.\nb) Viết phương trình tổng quát của mặt phẳng (ABC).\nc) Tính diện tích tam giác ABC.",
            suggested: "a) Vectơ chỉ phương AB = (1; 1; 2).\nPTTS của AB: x = 1 + t; y = t; z = −1 + 2t.\n\nb) Vectơ AC = (−1; −1; 3).\nVectơ pháp tuyến n = [AB, AC] = (1×3 − 2×(−1); 2×(−1) − 1×3; 1×(−1) − 1×(−1))\n= (3+2; −2−3; −1+1) = (5; −5; 0).\nChọn n = (1; −1; 0).\nPT mặt phẳng: 1(x−1) − 1(y−0) + 0 = 0 → x − y − 1 = 0.\n\nc) Diện tích tam giác S = ½|[AB, AC]| = ½√(5² + (−5)² + 0²) = ½√50 = 5√2 / 2.",
            points: 25,
            explanation: "AI chấm: PTAB: x=1+t, y=t, z=−1+2t; PT(ABC): x−y−1=0; S = (5√2)/2."
        },
        {
            type: "essay",
            question: "Một bài thi trắc nghiệm có 10 câu, mỗi câu có 4 đáp án (chỉ 1 đúng). Học sinh A làm đúng chắc chắn 7 câu, 3 câu còn lại chọn bừa.\n\na) Tính xác suất để A chọn đúng cả 3 câu làm bừa.\nb) Tính xác suất để A đạt điểm tuyệt đối 10/10.",
            suggested: "a) Mỗi câu chọn bừa có xác suất đúng là 1/4.\nXác suất đúng cả 3 câu là: P = (1/4) × (1/4) × (1/4) = 1/64 ≈ 0,0156.\n\nb) Để đạt 10/10, A phải đúng 7 câu (chắc chắn đúng, P=1) và đúng cả 3 câu chọn bừa.\nXác suất đạt 10/10 chính là xác suất đúng 3 câu bừa.\nP(10 điểm) = 1 × (1/64) = 1/64.",
            points: 25,
            explanation: "AI chấm: P(3 câu bừa đúng) = 1/64; P(10 điểm) = 1/64."
        }
    ]
};
