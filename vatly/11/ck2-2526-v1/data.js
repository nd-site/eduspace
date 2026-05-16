// data.js – KIỂM TRA CUỐI KÌ II – VẬT LÝ 11 (KNTT) – 2025-2026
// Chương trình GDPT 2018 | Sách Kết Nối Tri Thức với Cuộc Sống
// Nội dung: Điện trường – Dòng điện – Từ trường – Cảm ứng điện từ
// 28 câu TN (×0,25đ = 7đ) + 3 câu TL (×1đ = 3đ) | 50 phút

window.quizData = {
    title: "Kiểm tra Cuối Học Kì II – Vật Lý 11 (Kết nối tri thức) 2025-2026",
    config: {
        testDuration: 3000,
        examLayout: {
            multiple: { count: 28, pointsPerQ: 0.25 },
            essay: { count: 3, pointsPerQ: 1.0 }
        }
    },
    questions: [
        // ── ĐIỆN TRƯỜNG ───────────────────────────────────────────────────
        {
            type: "multiple",
            question: "Cường độ điện trường E tại một điểm được xác định bằng:",
            options: [
                "Lực điện tác dụng lên điện tích thử q đặt tại điểm đó",
                "$$E = F/q$$, tỉ số lực điện trên điện tích thử dương q",
                "Điện tích của nguồn gây ra điện trường",
                "Điện thế tại điểm đó"
            ],
            correct: 1,
            explanation: "E = F/q; đơn vị V/m. E đặc trưng cho điện trường, không phụ thuộc q thử."
        },
        {
            type: "multiple",
            question: "Điện trường đều là điện trường mà cường độ điện trường:",
            options: [
                "Tăng dần theo khoảng cách",
                "Bằng 0 tại mọi điểm",
                "Có độ lớn và hướng như nhau tại mọi điểm",
                "Chỉ xuất hiện trong chân không"
            ],
            correct: 2,
            explanation: "Điện trường đều: E = const (độ lớn và hướng không đổi), ví dụ giữa hai bản tụ phẳng."
        },
        {
            type: "multiple",
            question: "Công của lực điện trường khi dịch chuyển điện tích q qua hiệu điện thế U là:",
            options: ["A = U/q", "A = q.U", "A = q/U", "A = q².U"],
            correct: 1,
            explanation: "Công lực điện: A = q.U = q(V₁ − V₂)."
        },
        {
            type: "multiple",
            question: "Tụ điện phẳng có điện dung C. Khi tích điện đến hiệu điện thế U, năng lượng tích trữ là:",
            options: [
                "$$W = CU$$",
                "$$W = \\frac{1}{2}CU^2$$",
                "$$W = \\frac{CU^2}{4}$$",
                "$$W = C^2U$$"
            ],
            correct: 1,
            explanation: "Năng lượng tụ: W = ½CU²."
        },
        {
            type: "multiple",
            question: "Điện dung của tụ điện phẳng phụ thuộc vào:",
            options: [
                "Điện tích và hiệu điện thế",
                "Diện tích bản tụ, khoảng cách giữa hai bản và hằng số điện môi",
                "Chỉ vật liệu điện cực",
                "Nhiệt độ môi trường"
            ],
            correct: 1,
            explanation: "C = ε₀εS/d; phụ thuộc S, d và ε của điện môi."
        },
        {
            type: "multiple",
            question: "Đường sức điện có đặc điểm nào sau đây?",
            options: [
                "Là đường cong khép kín",
                "Không bao giờ cắt nhau",
                "Chiều từ âm sang dương",
                "Mật độ giảm chỗ điện trường mạnh"
            ],
            correct: 1,
            explanation: "Đường sức không cắt nhau; xuất phát từ điện tích dương, tận cùng ở âm."
        },
        {
            type: "multiple",
            question: "Hai điện tích q₁ = q₂ = 2×10⁻⁶ C đặt cách nhau 0,1 m trong chân không. Lực Cu-lông giữa chúng (k = 9×10⁹ N.m²/C²) là:",
            options: ["3,6 N", "36 N", "0,36 N", "0,036 N"],
            correct: 0,
            explanation: "F = kq₁q₂/r² = 9×10⁹×(2×10⁻⁶)²/0,01 = 9×10⁹×4×10⁻¹²/10⁻² = 3,6 N."
        },
        // ── DÒNG ĐIỆN – MẠCH ĐIỆN ────────────────────────────────────────
        {
            type: "multiple",
            question: "Định luật Ôm cho đoạn mạch: cường độ dòng điện I qua đoạn mạch tỉ lệ thuận với:",
            options: [
                "Điện trở R",
                "Hiệu điện thế U giữa hai đầu đoạn mạch",
                "Bình phương điện áp",
                "Nghịch đảo điện áp"
            ],
            correct: 1,
            explanation: "I = U/R; I tỉ lệ thuận với U và tỉ lệ nghịch với R."
        },
        {
            type: "multiple",
            question: "Điện trở của dây dẫn phụ thuộc vào:",
            options: [
                "Cường độ dòng điện qua dây",
                "Chiều dài, tiết diện và điện trở suất của vật liệu",
                "Chỉ nhiệt độ môi trường",
                "Màu sắc và hình dạng bên ngoài"
            ],
            correct: 1,
            explanation: "R = ρL/S; phụ thuộc điện trở suất ρ, chiều dài L và tiết diện S."
        },
        {
            type: "multiple",
            question: "Công suất điện tiêu thụ trên điện trở R khi có dòng I chạy qua là:",
            options: ["P = I/R", "P = I²R", "P = IR", "P = R/I²"],
            correct: 1,
            explanation: "P = I²R = U²/R = UI."
        },
        {
            type: "multiple",
            question: "Định luật Ôm cho toàn mạch với nguồn EMF ξ, điện trở trong r và ngoài R là:",
            options: [
                "I = ξ/(R + r)",
                "I = ξ/R",
                "I = ξ.r/R",
                "I = ξ/(R − r)"
            ],
            correct: 0,
            explanation: "I = ξ/(R + r): suất điện động chia tổng điện trở."
        },
        {
            type: "multiple",
            question: "Nguồn điện có ξ = 12 V, r = 1 Ω, mắc với R = 5 Ω. Cường độ dòng điện mạch chính là:",
            options: ["2 A", "12 A", "2,4 A", "10 A"],
            correct: 0,
            explanation: "I = ξ/(R+r) = 12/6 = 2 A."
        },
        {
            type: "multiple",
            question: "Nhiệt lượng tỏa ra trên điện trở R khi dòng I chạy qua trong thời gian t là:",
            options: ["Q = I²Rt", "Q = IRt", "Q = I²R/t", "Q = IR²t"],
            correct: 0,
            explanation: "Định luật Jun-Lenxơ: Q = I²Rt."
        },
        {
            type: "multiple",
            question: "Mắc song song hai điện trở R₁ = 6 Ω và R₂ = 3 Ω. Điện trở tương đương là:",
            options: ["9 Ω", "2 Ω", "4,5 Ω", "18 Ω"],
            correct: 1,
            explanation: "1/R = 1/6 + 1/3 = 1/2 → R = 2 Ω."
        },
        // ── TỪ TRƯỜNG ────────────────────────────────────────────────────
        {
            type: "multiple",
            question: "Lực từ tác dụng lên đoạn dây dẫn mang dòng điện trong từ trường đều được tính theo công thức:",
            options: [
                "F = qvB",
                "F = BIl.sinα",
                "F = BIl.cosα",
                "F = B²Il"
            ],
            correct: 1,
            explanation: "Lực Am-pe: F = BIl.sinα, α là góc giữa dây và véctơ B."
        },
        {
            type: "multiple",
            question: "Quy tắc xác định chiều lực từ tác dụng lên dây dẫn mang dòng điện là:",
            options: [
                "Quy tắc vặn nút chai",
                "Quy tắc bàn tay trái",
                "Quy tắc bàn tay phải",
                "Quy tắc đinh ốc"
            ],
            correct: 1,
            explanation: "Quy tắc bàn tay trái: đặt bàn tay trái sao cho B xuyên lòng bàn tay, 4 ngón theo chiều I → ngón cái chỉ chiều F."
        },
        {
            type: "multiple",
            question: "Cảm ứng từ B tại tâm vòng dây tròn bán kính R, mang dòng I là:",
            options: [
                "$$B = \\frac{\\mu_0 I}{2R}$$",
                "$$B = \\frac{\\mu_0 I}{2\\pi R}$$",
                "$$B = \\mu_0 I R$$",
                "$$B = \\frac{\\mu_0 I}{4R}$$"
            ],
            correct: 0,
            explanation: "Cảm ứng từ tại tâm vòng dây: B = μ₀I/(2R)."
        },
        {
            type: "multiple",
            question: "Lực Lo-ren-xơ tác dụng lên điện tích q chuyển động với vận tốc v trong từ trường B là:",
            options: [
                "F = qvBcosα",
                "F = qvBsinα",
                "F = qB/v",
                "F = mv²/B"
            ],
            correct: 1,
            explanation: "Lực Lorentz: f = qvBsinα, vuông góc với v và B."
        },
        {
            type: "multiple",
            question: "Cảm ứng từ B trong lòng ống dây (solenoid) có n vòng/m, mang dòng I là:",
            options: [
                "B = μ₀nI",
                "B = μ₀I/(2πr)",
                "B = nI/μ₀",
                "B = μ₀n/I"
            ],
            correct: 0,
            explanation: "Solenoid: B = μ₀nI, phân bố đều trong lòng ống."
        },
        {
            type: "multiple",
            question: "Từ thông Φ qua diện tích S trong từ trường đều B là:",
            options: [
                "Φ = B.S.sinα",
                "Φ = B.S.cosα",
                "Φ = B/S",
                "Φ = B²S"
            ],
            correct: 1,
            explanation: "Φ = B.S.cosα, α là góc giữa véctơ B và pháp tuyến mặt S."
        },
        // ── CẢM ỨNG ĐIỆN TỪ ──────────────────────────────────────────────
        {
            type: "multiple",
            question: "Định luật Fa-ra-đây về cảm ứng điện từ: suất điện động cảm ứng e bằng:",
            options: [
                "Độ biến thiên từ thông",
                "Tốc độ biến thiên từ thông (về độ lớn)",
                "Tích từ thông và thời gian",
                "Từ thông chia điện trở"
            ],
            correct: 1,
            explanation: "|e| = |ΔΦ/Δt|; chiều xác định bởi định luật Len-xơ."
        },
        {
            type: "multiple",
            question: "Định luật Len-xơ phát biểu: chiều dòng điện cảm ứng có tác dụng:",
            options: [
                "Tăng cường sự biến thiên từ thông",
                "Cùng chiều với từ thông ban đầu",
                "Chống lại sự biến thiên từ thông đã sinh ra nó",
                "Vuông góc với từ thông"
            ],
            correct: 2,
            explanation: "Định luật Len-xơ: dòng cảm ứng chống lại nguyên nhân sinh ra nó."
        },
        {
            type: "multiple",
            question: "Suất điện động tự cảm e trong cuộn cảm L khi dòng điện biến thiên ΔI/Δt là:",
            options: [
                "e = L.ΔI/Δt",
                "e = −L.ΔI/Δt",
                "e = L²ΔI/Δt",
                "e = ΔI/(L.Δt)"
            ],
            correct: 1,
            explanation: "e = −L.ΔI/Δt; dấu trừ thể hiện tính chống lại sự thay đổi dòng."
        },
        {
            type: "multiple",
            question: "Năng lượng từ trường tích trữ trong cuộn cảm L có dòng I là:",
            options: [
                "W = LI",
                "W = ½LI²",
                "W = LI²",
                "W = ½L²I"
            ],
            correct: 1,
            explanation: "Năng lượng từ trường: W = ½LI²."
        },
        {
            type: "multiple",
            question: "Máy biến áp lý tưởng có tỉ số biến áp n₁/n₂ = 5. Điện áp sơ cấp U₁ = 220 V. Điện áp thứ cấp U₂ là:",
            options: ["44 V", "1 100 V", "22 V", "440 V"],
            correct: 0,
            explanation: "U₁/U₂ = n₁/n₂ → U₂ = U₁×n₂/n₁ = 220×1/5 = 44 V."
        },
        {
            type: "multiple",
            question: "Từ trường xoáy (không đổi theo thời gian) không thể sinh ra:",
            options: [
                "Lực từ lên dây dẫn",
                "Điện trường xoáy",
                "Dòng điện cảm ứng khi từ thông không đổi",
                "Từ thông qua mạch kín"
            ],
            correct: 2,
            explanation: "Dòng cảm ứng chỉ xuất hiện khi từ thông qua mạch BIẾN THIÊN (ΔΦ ≠ 0)."
        },
        {
            type: "multiple",
            question: "Khi từ thông qua một khung dây tăng đều từ 0,02 Wb đến 0,08 Wb trong 0,1 s. Suất điện động cảm ứng là:",
            options: ["0,6 V", "6 V", "0,06 V", "60 V"],
            correct: 0,
            explanation: "|e| = |ΔΦ/Δt| = (0,08−0,02)/0,1 = 0,6 V."
        },
        {
            type: "multiple",
            question: "Cuộn cảm L = 0,2 H có dòng điện giảm đều từ 4 A xuống 0 trong 0,4 s. Suất điện động tự cảm là:",
            options: ["2 V", "0,2 V", "8 V", "0,5 V"],
            correct: 0,
            explanation: "|e| = L|ΔI/Δt| = 0,2×(4/0,4) = 0,2×10 = 2 V."
        },
        // ── TỰ LUẬN ──────────────────────────────────────────────────────
        {
            type: "essay",
            question: "Nguồn điện có suất điện động ξ = 12 V, điện trở trong r = 2 Ω mắc với điện trở ngoài R = 10 Ω.\n\na) Tính cường độ dòng điện trong mạch.\nb) Tính hiệu điện thế hai đầu nguồn (điện áp đầu cực).\nc) Tính công suất tỏa nhiệt trên R.",
            suggested: "a) I = ξ/(R+r) = 12/(10+2) = 1 A.\n\nb) U = ξ − I.r = 12 − 1×2 = 10 V.\n\nc) P = I²R = 1²×10 = 10 W.",
            points: 25,
            explanation: "AI chấm: I = 1 A; U = 10 V; P_R = 10 W."
        },
        {
            type: "essay",
            question: "Một cuộn dây (L = 0,5 H) nối tiếp điện trở R = 100 Ω. Dòng điện giảm từ I₁ = 3 A xuống I₂ = 1 A trong Δt = 0,05 s.\n\na) Tính suất điện động tự cảm.\nb) Tính điện áp rơi trên R khi dòng điện I₂ = 1 A.\nc) Năng lượng ban đầu tích trữ trong cuộn cảm (khi I₁ = 3 A) là bao nhiêu?",
            suggested: "a) |e_tc| = L|ΔI/Δt| = 0,5×(3−1)/0,05 = 0,5×40 = 20 V.\n\nb) U_R = I₂×R = 1×100 = 100 V.\n\nc) W = ½LI₁² = ½×0,5×9 = 2,25 J.",
            points: 25,
            explanation: "AI chấm: e_tc = 20 V; U_R = 100 V; W = 2,25 J."
        },
        {
            type: "essay",
            question: "Một khung dây phẳng diện tích S = 200 cm² đặt trong từ trường đều B = 0,5 T, pháp tuyến của khung hợp với B một góc 30°.\n\na) Tính từ thông qua khung dây.\nb) Nếu B tăng đều đến 0,8 T trong 0,2 s (hướng không đổi, góc không đổi), tính suất điện động cảm ứng trong khung.",
            suggested: "a) S = 200 cm² = 200×10⁻⁴ m² = 0,02 m².\nΦ₁ = B.S.cosα = 0,5×0,02×cos30° = 0,01×(√3/2) ≈ 0,00866 Wb.\n\nb) Φ₂ = 0,8×0,02×cos30° ≈ 0,01386 Wb.\n|e| = |ΔΦ/Δt| = (0,01386−0,00866)/0,2 = 0,0052/0,2 = 0,026 V.",
            points: 25,
            explanation: "AI chấm: Φ₁ ≈ 8,66×10⁻³ Wb; |e| ≈ 0,026 V."
        }
    ]
};
