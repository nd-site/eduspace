// data.js – KIỂM TRA CUỐI KÌ II – TOÁN 11 (KNTT) – 2025-2026
// Chương trình GDPT 2018 | Sách Kết Nối Tri Thức với Cuộc Sống
// Nội dung HK2: Đạo hàm – Quan hệ vuông góc trong không gian – Xác suất
// 28 câu TN (×0,25đ = 7đ) + 3 câu TL (×1đ = 3đ) | 90 phút

window.quizData = {
    title: "Kiểm tra Cuối Học Kì II – Toán 11 (Kết nối tri thức) 2025-2026",
    config: {
        testDuration: 5400,
        examLayout: {
            multiple: { count: 28, pointsPerQ: 0.25 },
            essay: { count: 3, pointsPerQ: 1.0 }
        }
    },
    questions: [
        // ── ĐẠO HÀM ───────────────────────────────────────────────────────
        {
            type: "multiple",
            question: "Đạo hàm của hàm số y = x³ − 3x² + 2x − 1 là:",
            options: ["y' = 3x² − 6x + 2", "y' = x² − x + 2", "y' = 3x² − 3x + 2", "y' = 3x² − 6x − 1"],
            correct: 0,
            explanation: "y' = (x³)' − (3x²)' + (2x)' − (1)' = 3x² − 6x + 2."
        },
        {
            type: "multiple",
            question: "Đạo hàm của hàm số y = sin x là:",
            options: ["y' = cos x", "y' = −cos x", "y' = sin x", "y' = −sin x"],
            correct: 0,
            explanation: "(sin x)' = cos x."
        },
        {
            type: "multiple",
            question: "Đạo hàm của hàm số y = √(2x + 1) là:",
            options: [
                "$$y' = \\frac{1}{\\sqrt{2x+1}}$$",
                "$$y' = \\frac{1}{2\\sqrt{2x+1}}$$",
                "$$y' = \\frac{2}{\\sqrt{2x+1}}$$",
                "$$y' = \\frac{x}{\\sqrt{2x+1}}$$"
            ],
            correct: 0,
            explanation: "y' = (2x+1)' / (2√(2x+1)) = 2 / (2√(2x+1)) = 1/√(2x+1)."
        },
        {
            type: "multiple",
            question: "Cho hàm số f(x) = x² − 4x. Phương trình tiếp tuyến của đồ thị hàm số tại điểm có hoành độ x₀ = 3 là:",
            options: [
                "y = 2x − 9",
                "y = 2x − 3",
                "y = x − 3",
                "y = 2x + 3"
            ],
            correct: 0,
            explanation: "x₀=3 → y₀=9−12=−3. f'(x)=2x−4 → f'(3)=2. PT: y = 2(x−3) − 3 = 2x − 9."
        },
        {
            type: "multiple",
            question: "Đạo hàm của hàm số $$y = \\frac{x+1}{x-1}$$ là:",
            options: [
                "$$y' = \\frac{-2}{(x-1)^2}$$",
                "$$y' = \\frac{2}{(x-1)^2}$$",
                "$$y' = \\frac{1}{(x-1)^2}$$",
                "$$y' = \\frac{-1}{(x-1)^2}$$"
            ],
            correct: 0,
            explanation: "y' = [1.(−1) − 1.1]/(x−1)² = −2/(x−1)²."
        },
        {
            type: "multiple",
            question: "Ý nghĩa hình học của đạo hàm: Đạo hàm f'(x₀) là:",
            options: [
                "Hệ số góc của tiếp tuyến với đồ thị (C) tại điểm M₀(x₀; f(x₀))",
                "Tung độ của điểm M₀",
                "Khoảng cách từ gốc tọa độ đến tiếp tuyến",
                "Hoành độ của đỉnh đồ thị"
            ],
            correct: 0,
            explanation: "Đạo hàm tại 1 điểm là hệ số góc của tiếp tuyến tại điểm đó."
        },
        {
            type: "multiple",
            question: "Đạo hàm cấp hai của hàm số y = x⁴ − 2x² là:",
            options: ["y'' = 12x² − 4", "y'' = 4x³ − 4x", "y'' = 12x² + 4", "y'' = 4x³ + 4x"],
            correct: 0,
            explanation: "y' = 4x³ − 4x; y'' = 12x² − 4."
        },
        // ── QUAN HỆ VUÔNG GÓC TRONG KHÔNG GIAN ──────────────────────────
        {
            type: "multiple",
            question: "Đường thẳng d vuông góc với mặt phẳng (P) khi:",
            options: [
                "d vuông góc với hai đường thẳng cắt nhau nằm trong (P)",
                "d vuông góc với một đường thẳng nằm trong (P)",
                "d vuông góc với hai đường thẳng song song nằm trong (P)",
                "d song song với một đường thẳng vuông góc với (P) hoặc d vuông góc với 2 đường thẳng bất kì"
            ],
            correct: 0,
            explanation: "Điều kiện cần và đủ: vuông góc với 2 đường thẳng cắt nhau trong (P)."
        },
        {
            type: "multiple",
            question: "Cho hình chóp S.ABCD có đáy ABCD là hình vuông, SA ⊥ (ABCD). Khẳng định nào sau đây SAI?",
            options: [
                "SA ⊥ BC",
                "BC ⊥ (SAB)",
                "SC ⊥ BD",
                "AC ⊥ BD"
            ],
            correct: 2,
            explanation: "Ta có BD ⊥ AC và BD ⊥ SA → BD ⊥ (SAC) → BD ⊥ SC (khẳng định C đúng). A,B,D đúng, vậy hỏi câu nào SAI? Khoan, SA ⊥ BC (đúng vì SA⊥ABCD). BC ⊥ AB và BC ⊥ SA → BC ⊥ (SAB) (đúng). BD ⊥ AC và SA → BD ⊥ (SAC) → BD ⊥ SC (đúng). Chờ đã, khẳng định nào sai? Sửa lại: A, B, D đều đúng. C cũng đúng. Vậy cho phương án C: SB ⊥ CD.",
            // Điều chỉnh đáp án do suy luận trên
            options: [
                "SA ⊥ BC",
                "BC ⊥ (SAB)",
                "SB ⊥ CD",
                "AC ⊥ BD"
            ],
            correct: 2, // SB ⊥ CD sai vì CD ⊥ (SAD) nên CD ⊥ SD, chứ không ⊥ SB.
            explanation: "CD ⊥ AD, CD ⊥ SA → CD ⊥ (SAD) → CD ⊥ SD. SB không vuông góc với CD."
        },
        {
            type: "multiple",
            question: "Góc giữa đường thẳng d và mặt phẳng (P) (d không vuông góc (P)) là:",
            options: [
                "Góc giữa d và hình chiếu vuông góc của nó trên (P)",
                "Góc giữa d và một đường thẳng bất kì trong (P)",
                "Góc giữa d và đường thẳng vuông góc với (P)",
                "90 độ"
            ],
            correct: 0,
            explanation: "Định nghĩa góc giữa đường thẳng và mặt phẳng."
        },
        {
            type: "multiple",
            question: "Cho hình lập phương ABCD.A'B'C'D'. Góc giữa hai đường thẳng AB và B'C' là:",
            options: ["90°", "0°", "45°", "60°"],
            correct: 0,
            explanation: "B'C' // BC. Góc giữa AB và B'C' bằng góc giữa AB và BC. Vì ABCD là hình vuông nên góc bằng 90°."
        },
        {
            type: "multiple",
            question: "Hai mặt phẳng (P) và (Q) vuông góc với nhau khi:",
            options: [
                "Góc giữa chúng bằng 90°",
                "Một mặt phẳng chứa đường thẳng vuông góc với mặt phẳng kia",
                "Góc giữa hai đường thẳng bất kì thuộc hai mp đó bằng 90°",
                "Cả A và B đều đúng"
            ],
            correct: 3,
            explanation: "(P) ⊥ (Q) khi góc bằng 90°, tương đương mp này chứa 1 đường thẳng vuông góc với mp kia."
        },
        {
            type: "multiple",
            question: "Cho hình chóp S.ABC có SA ⊥ (ABC), tam giác ABC vuông tại B. Khẳng định nào ĐÚNG?",
            options: [
                "(SBC) ⊥ (SAB)",
                "(SBC) ⊥ (SAC)",
                "(SAB) ⊥ (SAC)",
                "(ABC) ⊥ (SBC)"
            ],
            correct: 0,
            explanation: "BC ⊥ AB, BC ⊥ SA → BC ⊥ (SAB). Mà BC ⊂ (SBC) → (SBC) ⊥ (SAB)."
        },
        {
            type: "multiple",
            question: "Khoảng cách giữa hai đường thẳng chéo nhau a và b là:",
            options: [
                "Độ dài đoạn vuông góc chung của a và b",
                "Khoảng cách từ một điểm trên a đến b",
                "Khoảng cách từ a đến mặt phẳng chứa b",
                "Bằng 0"
            ],
            correct: 0,
            explanation: "Định nghĩa: khoảng cách giữa 2 đường chéo nhau bằng độ dài đoạn vuông góc chung."
        },
        // ── XÁC SUẤT ──────────────────────────────────────────────────────
        {
            type: "multiple",
            question: "Gieo đồng thời hai con xúc xắc cân đối. Xác suất để tổng số chấm bằng 7 là:",
            options: ["1/6", "1/12", "1/36", "7/36"],
            correct: 0,
            explanation: "Các kết quả (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) có 6 kết quả. Số phần tử KG mẫu là 36. P = 6/36 = 1/6."
        },
        {
            type: "multiple",
            question: "Hai biến cố A và B độc lập nếu:",
            options: [
                "P(AB) = P(A) + P(B)",
                "P(AB) = P(A).P(B)",
                "P(A ∪ B) = P(A) + P(B)",
                "A và B không cùng xảy ra"
            ],
            correct: 1,
            explanation: "Định nghĩa: A, B độc lập ↔ P(A∩B) = P(A).P(B)."
        },
        {
            type: "multiple",
            question: "Cho A và B là hai biến cố độc lập, P(A) = 0,4; P(B) = 0,5. P(A ∪ B) bằng:",
            options: ["0,9", "0,7", "0,2", "0,1"],
            correct: 1,
            explanation: "P(AB) = 0,4×0,5 = 0,2. P(A∪B) = P(A) + P(B) − P(AB) = 0,4 + 0,5 − 0,2 = 0,7."
        },
        {
            type: "multiple",
            question: "Một hộp có 4 bi đỏ và 6 bi xanh. Rút ngẫu nhiên lần lượt 2 bi (có hoàn lại). Xác suất để cả 2 bi đều đỏ là:",
            options: ["16/100", "12/90", "4/10", "2/5"],
            correct: 0,
            explanation: "Rút có hoàn lại là độc lập. P = (4/10) × (4/10) = 16/100 = 4/25 = 0,16."
        },
        {
            type: "multiple",
            question: "Xác suất có điều kiện P(A|B) được tính bởi công thức:",
            options: [
                "P(A|B) = P(A ∩ B) / P(A)",
                "P(A|B) = P(A ∩ B) / P(B)",
                "P(A|B) = P(A) / P(B)",
                "P(A|B) = P(A) . P(B)"
            ],
            correct: 1,
            explanation: "Công thức xác suất có điều kiện: P(A|B) = P(AB)/P(B) (với P(B)>0)."
        },
        // ── TỔNG HỢP / NÂNG CAO NHẸ ──────────────────────────────────────
        {
            type: "multiple",
            question: "Cho hàm số f(x) = sin(2x). f''(π/4) bằng:",
            options: ["0", "−4", "4", "2"],
            correct: 1,
            explanation: "f'(x) = 2cos(2x); f''(x) = −4sin(2x). f''(π/4) = −4sin(π/2) = −4."
        },
        {
            type: "multiple",
            question: "Hình chóp tứ giác đều S.ABCD có tất cả các cạnh bằng a. Côsin góc giữa SA và (ABCD) là:",
            options: ["1/2", "$$\\sqrt{2}/2$$", "$$\\sqrt{3}/2$$", "$$\\sqrt{2}/3$$"],
            correct: 1,
            explanation: "Gọi O là tâm đáy. Góc là ∠SAO. AO = a√2/2. cos∠SAO = AO/SA = (a√2/2)/a = √2/2."
        },
        {
            type: "multiple",
            question: "Đạo hàm của hàm số $$y = \\ln(x^2+1)$$ là:",
            options: [
                "$$y' = \\frac{1}{x^2+1}$$",
                "$$y' = \\frac{2x}{x^2+1}$$",
                "$$y' = 2x\\ln(x^2+1)$$",
                "$$y' = \\frac{x}{x^2+1}$$"
            ],
            correct: 1,
            explanation: "y' = u'/u = (x²+1)'/(x²+1) = 2x/(x²+1)."
        },
        {
            type: "multiple",
            question: "Hình hộp chữ nhật ABCD.A'B'C'D' có AB=a, AD=b, AA'=c. Độ dài đường chéo AC' là:",
            options: ["√(a²+b²+c²)", "a+b+c", "√(a²+b²)", "√(a²+c²)"],
            correct: 0,
            explanation: "Độ dài đường chéo hình hộp chữ nhật: d = √(a²+b²+c²)."
        },
        {
            type: "multiple",
            question: "Gieo 3 con xúc xắc. Xác suất để tổng số chấm bằng 18 là:",
            options: ["1/216", "1/36", "1/18", "3/216"],
            correct: 0,
            explanation: "Chỉ có 1 trường hợp (6,6,6). Không gian mẫu 6³ = 216. P = 1/216."
        },
        {
            type: "multiple",
            question: "Đạo hàm của hàm số y = e^(2x) là:",
            options: ["2e^(2x)", "e^(2x)", "2xe^(2x)", "e^(2x)/2"],
            correct: 0,
            explanation: "(e^u)' = u'.e^u = 2.e^(2x)."
        },
        {
            type: "multiple",
            question: "Khoảng cách từ một điểm M đến mặt phẳng (P) là:",
            options: [
                "Độ dài đoạn thẳng MM' với M' là hình chiếu vuông góc của M trên (P)",
                "Độ dài đoạn nối M với một điểm bất kì trên (P)",
                "Không xác định được",
                "Khoảng cách từ M đến một đường thẳng trong (P)"
            ],
            correct: 0,
            explanation: "Định nghĩa khoảng cách từ điểm đến mặt phẳng."
        },
        {
            type: "multiple",
            question: "Trong một hộp có 3 quả cầu đỏ, 4 quả cầu xanh. Rút ngẫu nhiên 2 quả. Xác suất để rút được 2 quả cùng màu là:",
            options: ["3/7", "9/21", "3/21 + 6/21 = 9/21 = 3/7", "4/7"],
            correct: 0,
            explanation: "Tổng 7 quả. n(Ω) = C(7,2) = 21. Cùng đỏ: C(3,2)=3. Cùng xanh: C(4,2)=6. Tổng kết quả thuận lợi: 9. P = 9/21 = 3/7."
        },
        {
            type: "multiple",
            question: "Phương trình tiếp tuyến của y = x³ tại O(0;0) là:",
            options: ["y = 0", "y = x", "x = 0", "y = 3x"],
            correct: 0,
            explanation: "y' = 3x² → y'(0) = 0. PT: y = 0(x−0) + 0 → y = 0 (trục Ox)."
        },
        // ── TỰ LUẬN ──────────────────────────────────────────────────────
        {
            type: "essay",
            question: "Cho hàm số f(x) = x³ − 3x² + 2.\n\na) Tính đạo hàm f'(x).\nb) Viết phương trình tiếp tuyến của đồ thị (C) tại điểm có hoành độ x₀ = 1.",
            suggested: "a) f'(x) = 3x² − 6x.\n\nb) x₀ = 1 → y₀ = 1³ − 3(1)² + 2 = 0.\nf'(1) = 3(1)² − 6(1) = −3.\nPTTT: y = f'(1)(x − x₀) + y₀ = −3(x − 1) + 0 = −3x + 3.",
            points: 25,
            explanation: "AI chấm: f'(x) = 3x² − 6x; y = −3x + 3."
        },
        {
            type: "essay",
            question: "Cho hình chóp S.ABCD có đáy ABCD là hình vuông cạnh a, cạnh bên SA vuông góc với đáy và SA = a√2.\n\na) Chứng minh BC ⊥ (SAB).\nb) Tính góc giữa đường thẳng SC và mặt phẳng (ABCD).\nc) Tính khoảng cách từ điểm A đến mặt phẳng (SBD).",
            suggested: "a) Ta có BC ⊥ AB (ABCD là hình vuông) và BC ⊥ SA (do SA ⊥ (ABCD)).\nSuy ra BC ⊥ (SAB).\n\nb) SC chiếu lên (ABCD) là AC. Góc cần tìm là ∠SCA.\nAC = a√2 (đường chéo hình vuông cạnh a).\nSA = a√2. Tam giác SAC vuông tại A có SA = AC = a√2 → tam giác vuông cân.\nGóc ∠SCA = 45°.\n\nc) Kẻ AH ⊥ SO (O là tâm đáy). \nBD ⊥ AC và BD ⊥ SA → BD ⊥ (SAC) → BD ⊥ AH.\nVậy AH ⊥ (SBD). d(A,(SBD)) = AH.\n1/AH² = 1/SA² + 1/AO² = 1/(2a²) + 1/(a²/2) = 1/(2a²) + 2/a² = 5/(2a²).\nAH = a√(2/5) = a√10 / 5.",
            points: 25,
            explanation: "AI chấm: c/m BC⊥(SAB); góc 45°; d = a√10/5."
        },
        {
            type: "essay",
            question: "Hai xạ thủ cùng bắn độc lập vào một mục tiêu. Xác suất bắn trúng của xạ thủ A là 0,8; của xạ thủ B là 0,7.\n\na) Tính xác suất để cả hai xạ thủ cùng bắn trúng.\nb) Tính xác suất để mục tiêu bị bắn trúng (ít nhất một người trúng).",
            suggested: "a) Hai biến cố độc lập. P(A ∩ B) = P(A) × P(B) = 0,8 × 0,7 = 0,56.\n\nb) Xác suất cả hai bắn trượt: P(trượt) = (1−0,8) × (1−0,7) = 0,2 × 0,3 = 0,06.\nXác suất mục tiêu bị trúng: 1 − 0,06 = 0,94.\n(Hoặc: 0,8 + 0,7 − 0,56 = 0,94).",
            points: 25,
            explanation: "AI chấm: Cả hai trúng: 0,56; Ít nhất một trúng: 0,94."
        }
    ]
};
