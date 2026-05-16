// data.js – KIỂM TRA CUỐI KÌ II – HÓA HỌC 10 (KNTT) – 2025-2026
// Chương trình GDPT 2018 | Sách Kết Nối Tri Thức với Cuộc Sống
// Nội dung: Halogen – Tốc độ phản ứng – Năng lượng hóa học
// 28 câu TN (×0,25đ = 7đ) + 3 câu TL (×1đ = 3đ) | 50 phút

window.quizData = {
    title: "Kiểm tra Cuối Học Kì II – Hóa Học 10 (Kết nối tri thức) 2025-2026",
    config: {
        testDuration: 3000,
        examLayout: {
            multiple: { count: 28, pointsPerQ: 0.25 },
            essay: { count: 3, pointsPerQ: 1.0 }
        }
    },
    questions: [
        // ── HALOGEN ──────────────────────────────────────────────
        {
            type: "multiple",
            question: "Trong nhóm halogen, từ F đến I, bán kính nguyên tử biến đổi như thế nào?",
            options: ["Giảm dần", "Tăng dần", "Không đổi", "Tăng giảm không có quy luật"],
            correct: 1,
            explanation: "Đi từ F đến I, số lớp electron tăng dần nên bán kính nguyên tử tăng dần."
        },
        {
            type: "multiple",
            question: "Tính oxi hóa của các halogen biến đổi như thế nào từ F đến I?",
            options: ["Giảm dần", "Tăng dần", "Không đổi", "Lúc tăng lúc giảm"],
            correct: 0,
            explanation: "Đi từ F đến I, độ âm điện giảm dần, khả năng nhận electron giảm nên tính oxi hóa giảm dần."
        },
        {
            type: "multiple",
            question: "Trạng thái tự nhiên của nguyên tố Fluorine chủ yếu là:",
            options: ["Dạng đơn chất", "Trong các khoáng vật như fluorite (CaF2)", "Hòa tan trong nước biển", "Trong cơ thể sống"],
            correct: 1,
            explanation: "Fluorine rất hoạt động nên trong tự nhiên chỉ tồn tại ở dạng hợp chất, chủ yếu là khoáng vật fluorite, cryolite."
        },
        {
            type: "multiple",
            question: "Trong phòng thí nghiệm, khí Clo (Cl2) thường được điều chế bằng cách cho HCl đặc tác dụng với:",
            options: ["NaCl", "MnO2", "CaCO3", "H2SO4"],
            correct: 1,
            explanation: "MnO2 oxi hóa HCl đặc tạo ra khí Cl2: MnO2 + 4HCl -> MnCl2 + Cl2 + 2H2O."
        },
        {
            type: "multiple",
            question: "Dung dịch nào sau đây dùng để nhận biết ion halide (Cl-, Br-, I-)?",
            options: ["BaCl2", "AgNO3", "NaOH", "H2SO4"],
            correct: 1,
            explanation: "AgNO3 tạo kết tủa với các ion halide: AgCl (trắng), AgBr (vàng nhạt), AgI (vàng đậm)."
        },
        {
            type: "multiple",
            question: "Khi cho khí clo vào nước, thu được nước clo có tính tẩy màu. Chất gây ra tính tẩy màu là:",
            options: ["Cl2", "HCl", "HClO", "H2O"],
            correct: 2,
            explanation: "Cl2 + H2O <-> HCl + HClO. HClO có tính oxi hóa mạnh nên có tính tẩy màu."
        },
        {
            type: "multiple",
            question: "Halogen nào ở trạng thái lỏng ở điều kiện thường?",
            options: ["Fluorine", "Chlorine", "Bromine", "Iodine"],
            correct: 2,
            explanation: "Ở điều kiện thường, F2 và Cl2 là chất khí, Br2 là chất lỏng, I2 là chất rắn."
        },
        {
            type: "multiple",
            question: "Dãy axit nào sau đây sắp xếp theo chiều tính axit giảm dần?",
            options: ["HI > HBr > HCl > HF", "HF > HCl > HBr > HI", "HCl > HBr > HI > HF", "HBr > HCl > HF > HI"],
            correct: 0,
            explanation: "Từ HF đến HI, độ dài liên kết H-X tăng làm độ bền liên kết giảm, H+ dễ tách ra hơn nên tính axit tăng dần."
        },
        {
            type: "multiple",
            question: "Iot có tính chất thăng hoa. Hiện tượng thăng hoa là:",
            options: ["Chất rắn chuyển sang chất lỏng", "Chất rắn chuyển thẳng sang chất khí", "Chất khí chuyển sang chất lỏng", "Chất lỏng chuyển sang chất khí"],
            correct: 1,
            explanation: "Thăng hoa là quá trình chuyển trạng thái trực tiếp từ rắn sang khí không qua trạng thái lỏng."
        },
        {
            type: "multiple",
            question: "Phản ứng của I2 với hồ tinh bột tạo ra hợp chất có màu:",
            options: ["Đỏ", "Vàng", "Xanh đen", "Không màu"],
            correct: 2,
            explanation: "Iot tạo hợp chất màu xanh đen đặc trưng với hồ tinh bột, dùng để nhận biết Iot."
        },
        // ── NĂNG LƯỢNG HÓA HỌC ────────────────────────────────────────────────
        {
            type: "multiple",
            question: "Phản ứng tỏa nhiệt là phản ứng:",
            options: ["Giải phóng năng lượng dưới dạng nhiệt", "Hấp thụ năng lượng dưới dạng nhiệt", "Không có sự thay đổi năng lượng", "Xảy ra ở nhiệt độ thấp"],
            correct: 0,
            explanation: "Phản ứng tỏa nhiệt là phản ứng giải phóng nhiệt năng ra môi trường."
        },
        {
            type: "multiple",
            question: "Biến thiên enthalpy chuẩn của phản ứng (ΔrH°298) có giá trị âm (<0) cho biết điều gì?",
            options: ["Phản ứng thu nhiệt", "Phản ứng tỏa nhiệt", "Phản ứng không xảy ra", "Hệ đạt trạng thái cân bằng"],
            correct: 1,
            explanation: "ΔrH < 0 ứng với phản ứng tỏa nhiệt."
        },
        {
            type: "multiple",
            question: "Enthalpy tạo thành chuẩn (ΔfH°298) của các đơn chất ở dạng bền vững nhất bằng:",
            options: ["0", "1", "< 0", "> 0"],
            correct: 0,
            explanation: "Theo quy ước, enthalpy tạo thành chuẩn của các đơn chất bền vững nhất bằng 0."
        },
        {
            type: "multiple",
            question: "Đại lượng đặc trưng cho nhiệt lượng trao đổi của một phản ứng hóa học ở áp suất không đổi gọi là:",
            options: ["Nhiệt độ", "Nhiệt dung", "Biến thiên enthalpy", "Nội năng"],
            correct: 2,
            explanation: "Biến thiên enthalpy (ΔrH) chính là nhiệt lượng tỏa ra hay thu vào của phản ứng ở áp suất không đổi."
        },
        {
            type: "multiple",
            question: "Cho phản ứng: C(s) + O2(g) -> CO2(g) có ΔrH°298 = -393,5 kJ. Phát biểu nào đúng?",
            options: ["Phản ứng thu nhiệt", "Đốt cháy 1 mol C(s) tỏa ra nhiệt lượng 393,5 kJ", "Sự hình thành 1 mol CO2 cần 393,5 kJ", "Phản ứng tự xảy ra ở mọi nhiệt độ"],
            correct: 1,
            explanation: "ΔrH°298 < 0 nên phản ứng tỏa nhiệt, 1 mol C phản ứng tỏa ra 393,5 kJ."
        },
        {
            type: "multiple",
            question: "Cho phương trình nhiệt hóa học: N2(g) + O2(g) -> 2NO(g) ; ΔrH°298 = +180,6 kJ. Phát biểu nào sau đây đúng?",
            options: ["Phản ứng tỏa nhiệt", "Nhiệt tạo thành của NO là +180,6 kJ/mol", "Phản ứng thu nhiệt", "Nhiệt tạo thành của N2 là 180,6 kJ/mol"],
            correct: 2,
            explanation: "ΔrH°298 > 0 nên phản ứng thu nhiệt."
        },
        {
            type: "multiple",
            question: "Khi biết năng lượng liên kết, ta có thể tính biến thiên enthalpy của phản ứng bằng công thức:",
            options: ["Tổng năng lượng liên kết sản phẩm - Tổng năng lượng liên kết chất đầu", "Tổng năng lượng liên kết chất đầu - Tổng năng lượng liên kết sản phẩm", "Tổng năng lượng liên kết chất đầu + Tổng năng lượng liên kết sản phẩm", "Không thể tính được"],
            correct: 1,
            explanation: "ΔrH = ∑Eb(chất đầu) - ∑Eb(sản phẩm)."
        },
        {
            type: "multiple",
            question: "Điều kiện chuẩn là:",
            options: ["Áp suất 1 bar, nồng độ 1 mol/L, nhiệt độ thường là 25°C (298K)", "Áp suất 1 atm, nồng độ 1 mol/L, nhiệt độ 0°C", "Áp suất 1 bar, nồng độ 1 mol/L, nhiệt độ 0K", "Áp suất 1 atm, nồng độ 0,1 mol/L, nhiệt độ 25°C"],
            correct: 0,
            explanation: "Điều kiện chuẩn theo quy ước hiện hành: P = 1 bar, nhiệt độ 25°C (298,15K)."
        },
        {
            type: "multiple",
            question: "Phản ứng đốt cháy cồn (ethanol) là phản ứng:",
            options: ["Thu nhiệt", "Tỏa nhiệt", "Không tỏa cũng không thu nhiệt", "Phản ứng phân hủy"],
            correct: 1,
            explanation: "Phản ứng đốt cháy luôn là phản ứng tỏa nhiệt mạnh."
        },
        // ── TỐC ĐỘ PHẢN ỨNG ────────────────────────────────────────────
        {
            type: "multiple",
            question: "Tốc độ phản ứng đặc trưng cho:",
            options: ["Mức độ tỏa nhiệt của phản ứng", "Sự thay đổi nồng độ chất phản ứng hoặc sản phẩm trong một đơn vị thời gian", "Sự chuyển dịch cân bằng hóa học", "Nhiệt độ tối đa của hệ phản ứng"],
            correct: 1,
            explanation: "Tốc độ phản ứng là đại lượng biểu thị sự biến thiên nồng độ chất phản ứng/sản phẩm theo thời gian."
        },
        {
            type: "multiple",
            question: "Yếu tố nào sau đây KHÔNG ảnh hưởng đến tốc độ phản ứng?",
            options: ["Nhiệt độ", "Nồng độ chất phản ứng", "Chất xúc tác", "Thể tích bình chứa đối với phản ứng pha lỏng"],
            correct: 3,
            explanation: "Thể tích bình chứa chủ yếu ảnh hưởng đến áp suất (với chất khí). Với pha lỏng thì không thay đổi nồng độ nên ít ảnh hưởng."
        },
        {
            type: "multiple",
            question: "Chất xúc tác là chất:",
            options: ["Làm tăng tốc độ phản ứng và bị tiêu hao sau phản ứng", "Làm giảm tốc độ phản ứng và không bị biến đổi hóa học", "Làm tăng tốc độ phản ứng và được phục hồi nguyên vẹn về chất và lượng sau phản ứng", "Chỉ ảnh hưởng đến cân bằng hóa học"],
            correct: 2,
            explanation: "Chất xúc tác làm tăng tốc độ nhưng không bị tiêu hao sau phản ứng."
        },
        {
            type: "multiple",
            question: "Tăng diện tích bề mặt tiếp xúc của chất rắn làm tốc độ phản ứng:",
            options: ["Tăng", "Giảm", "Không đổi", "Lúc tăng lúc giảm"],
            correct: 0,
            explanation: "Diện tích tiếp xúc càng lớn, số va chạm hiệu quả giữa các phân tử càng nhiều nên tốc độ tăng."
        },
        {
            type: "multiple",
            question: "Hệ số nhiệt độ γ (Van't Hoff) cho biết tốc độ phản ứng tăng lên bao nhiêu lần khi nhiệt độ tăng thêm:",
            options: ["1°C", "10°C", "100°C", "273 K"],
            correct: 1,
            explanation: "Hệ số Van't Hoff (γ) là số lần tốc độ phản ứng tăng khi nhiệt độ tăng 10°C."
        },
        {
            type: "multiple",
            question: "Tốc độ trung bình của phản ứng trong một khoảng thời gian được tính bằng:",
            options: ["Biến thiên nồng độ chia cho thời gian", "Biến thiên nhiệt độ chia cho thời gian", "Tổng nồng độ chia cho thời gian", "Thời gian chia cho biến thiên nồng độ"],
            correct: 0,
            explanation: "v = |ΔC| / Δt."
        },
        {
            type: "multiple",
            question: "Bảo quản thực phẩm trong tủ lạnh giúp giữ thực phẩm tươi lâu hơn vì:",
            options: ["Tăng tốc độ phản ứng phân hủy", "Giảm tốc độ phản ứng phân hủy do vi khuẩn gây ra ở nhiệt độ thấp", "Tiêu diệt hoàn toàn vi khuẩn", "Thay đổi bản chất thực phẩm"],
            correct: 1,
            explanation: "Nhiệt độ thấp làm giảm tốc độ của hầu hết các phản ứng hóa học và sinh hóa."
        },
        {
            type: "multiple",
            question: "Cho phản ứng: A + B -> C. Tốc độ phản ứng v = k[A][B]. Khi nồng độ A tăng 2 lần, nồng độ B tăng 2 lần thì tốc độ phản ứng tăng:",
            options: ["2 lần", "4 lần", "6 lần", "8 lần"],
            correct: 1,
            explanation: "v' = k(2[A])(2[B]) = 4k[A][B] = 4v."
        },
        {
            type: "multiple",
            question: "Để giảm tốc độ phản ứng (ví dụ chống rỉ sét sắt thép), người ta thường:",
            options: ["Sơn phủ bề mặt", "Tăng nhiệt độ", "Thêm chất xúc tác", "Nghiền nhỏ sắt thép"],
            correct: 0,
            explanation: "Sơn phủ giúp cách ly sắt với môi trường (O2, H2O), làm giảm diện tích tiếp xúc hóa học và giảm tốc độ rỉ sét."
        },
        // ── TỰ LUẬN ──────────────────────────────────────────────────────
        {
            type: "essay",
            question: "Viết phương trình hóa học chứng minh tính oxi hóa giảm dần trong dãy halogen: Cl2 > Br2 > I2.",
            suggested: "Sử dụng phản ứng đẩy halogen yếu hơn ra khỏi muối:\n1. Cl2 đẩy Br2: Cl2 + 2NaBr -> 2NaCl + Br2\n2. Br2 đẩy I2: Br2 + 2NaI -> 2NaBr + I2\nTừ đó suy ra Cl2 mạnh hơn Br2, Br2 mạnh hơn I2. Tính oxi hóa: Cl2 > Br2 > I2.",
            points: 25,
            explanation: "AI chấm: Phương trình Cl2 + 2NaBr và Br2 + 2NaI."
        },
        {
            type: "essay",
            question: "Cho phản ứng đốt cháy methane: CH4(g) + 2O2(g) -> CO2(g) + 2H2O(g).\nBiết năng lượng liên kết trung bình: Eb(C-H) = 414 kJ/mol, Eb(O=O) = 498 kJ/mol, Eb(C=O) = 799 kJ/mol, Eb(O-H) = 464 kJ/mol.\nTính biến thiên enthalpy (ΔrH) của phản ứng và cho biết phản ứng tỏa nhiệt hay thu nhiệt.",
            suggested: "ΔrH = Tổng năng lượng liên kết đứt - Tổng năng lượng liên kết tạo thành.\n= [4×Eb(C-H) + 2×Eb(O=O)] - [2×Eb(C=O) + 4×Eb(O-H)]\n= [4×414 + 2×498] - [2×799 + 4×464]\n= [1656 + 996] - [1598 + 1856]\n= 2652 - 3454 = -802 kJ.\nPhản ứng tỏa nhiệt vì ΔrH < 0.",
            points: 25,
            explanation: "AI chấm: ΔrH = -802 kJ, phản ứng tỏa nhiệt."
        },
        {
            type: "essay",
            question: "Giải thích tại sao trong công nghiệp tổng hợp amoniac (NH3) theo phản ứng: N2(g) + 3H2(g) ⇌ 2NH3(g), người ta lại sử dụng sắt (Fe) xốp làm chất xúc tác và nghiền nhỏ nó ra?",
            suggested: "Sắt (Fe) đóng vai trò là chất xúc tác, giúp phản ứng diễn ra nhanh hơn và mau đạt trạng thái cân bằng. Việc nghiền nhỏ (dạng xốp) giúp tăng diện tích bề mặt tiếp xúc của Fe với các khí N2 và H2, từ đó làm tăng số lượng các trung tâm hoạt động trên bề mặt chất xúc tác, giúp tốc độ phản ứng diễn ra nhanh nhất có thể.",
            points: 25,
            explanation: "AI chấm: Nêu được Fe làm chất xúc tác tăng tốc độ. Nghiền nhỏ tăng diện tích bề mặt tiếp xúc."
        }
    ]
};
