// data.js – KIỂM TRA CUỐI KÌ II – HÓA HỌC 10 (KNTT) – 2025-2026
// Chương trình GDPT 2018 | Sách Kết Nối Tri Thức với Cuộc Sống
// Nội dung HK2: Liên kết hóa học (tiếp) – Phản ứng oxi hóa-khử – Năng lượng phản ứng – Halogen – Oxygen – Sulfur
// 28 câu TN (×0,25đ = 7đ) + 3 câu TL (×1đ = 3đ) | 45 phút

window.quizData = {
    title: "Kiểm tra Cuối Học Kì II – Hóa Học 10 (Kết nối tri thức) 2025-2026",
    config: {
        testDuration: 2700,
        examLayout: {
            multiple: { count: 28, pointsPerQ: 0.25 },
            essay: { count: 3, pointsPerQ: 1.0 }
        }
    },
    questions: [
        // ── PHẢN ỨNG OXI HÓA – KHỬ ──────────────────────────────────────
        {
            type: "multiple",
            question: "Chất khử là chất:",
            options: [
                "Nhận electron trong phản ứng",
                "Nhường electron trong phản ứng",
                "Không thay đổi số oxi hóa",
                "Luôn là kim loại"
            ],
            correct: 1,
            explanation: "Chất khử nhường electron (bị oxi hóa, số oxi hóa tăng)."
        },
        {
            type: "multiple",
            question: "Trong phản ứng: Fe + 2HCl → FeCl₂ + H₂, chất oxi hóa là:",
            options: ["Fe", "HCl", "FeCl₂", "H₂"],
            correct: 1,
            explanation: "H⁺ trong HCl nhận electron từ Fe (H: 0→ +1 sai, thực ra H: +1→0), Fe là chất khử (0→+2). H⁺ là chất oxi hóa."
        },
        {
            type: "multiple",
            question: "Số oxi hóa của lưu huỳnh trong H₂SO₄ là:",
            options: ["+4", "+6", "-2", "+2"],
            correct: 1,
            explanation: "H₂SO₄: 2(+1) + x + 4(-2) = 0 → x = +6."
        },
        {
            type: "multiple",
            question: "Phản ứng nào sau đây là phản ứng oxi hóa – khử?",
            options: [
                "CaCO₃ → CaO + CO₂",
                "NaOH + HCl → NaCl + H₂O",
                "2Mg + O₂ → 2MgO",
                "CaO + H₂O → Ca(OH)₂"
            ],
            correct: 2,
            explanation: "2Mg + O₂ → 2MgO: Mg: 0→+2 (bị oxi hóa); O: 0→-2 (bị khử). Có thay đổi số oxi hóa."
        },
        {
            type: "multiple",
            question: "Trong phản ứng: MnO₂ + 4HCl → MnCl₂ + Cl₂ + 2H₂O, MnO₂ đóng vai trò:",
            options: ["Chất khử", "Chất oxi hóa", "Vừa oxi hóa vừa khử", "Môi trường"],
            correct: 1,
            explanation: "Mn: +4→+2 (nhận 2e), nên MnO₂ là chất oxi hóa. Cl⁻: -1→0 (chất khử)."
        },
        {
            type: "multiple",
            question: "Phương trình ion rút gọn của phản ứng: Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂ là:",
            options: [
                "Na⁺ + Cl⁻ → NaCl",
                "CO₃²⁻ + 2H⁺ → H₂O + CO₂",
                "Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂",
                "2Na⁺ + 2Cl⁻ → 2NaCl"
            ],
            correct: 1,
            explanation: "Phương trình ion rút gọn giữ lại các chất không tan, kết tủa, và chất khí."
        },
        {
            type: "multiple",
            question: "Số oxi hóa của Cr trong K₂Cr₂O₇ là:",
            options: ["+3", "+6", "+7", "+4"],
            correct: 1,
            explanation: "K₂Cr₂O₇: 2(+1) + 2x + 7(-2) = 0 → 2x = 12 → x = +6."
        },
        // ── NĂNG LƯỢNG PHẢN ỨNG HÓA HỌC ─────────────────────────────────
        {
            type: "multiple",
            question: "Biến thiên enthalpy chuẩn (ΔH°) của phản ứng là:",
            options: [
                "Nhiệt độ của phản ứng ở điều kiện chuẩn",
                "Nhiệt lượng tỏa ra hoặc thu vào ở điều kiện chuẩn",
                "Tốc độ phản ứng ở 25°C",
                "Năng lượng hoạt hóa của phản ứng"
            ],
            correct: 1,
            explanation: "ΔH° là nhiệt tỏa/thu (kJ/mol) ở 25°C, 1 atm. ΔH° < 0: tỏa nhiệt; ΔH° > 0: thu nhiệt."
        },
        {
            type: "multiple",
            question: "Phản ứng tỏa nhiệt có ΔH:",
            options: ["ΔH > 0", "ΔH < 0", "ΔH = 0", "ΔH không xác định"],
            correct: 1,
            explanation: "Phản ứng tỏa nhiệt: hệ giải phóng nhiệt ra môi trường → ΔH < 0."
        },
        {
            type: "multiple",
            question: "Theo định luật Hess, ΔH của phản ứng:",
            options: [
                "Phụ thuộc vào đường đi của phản ứng",
                "Chỉ phụ thuộc trạng thái đầu và cuối, không phụ thuộc đường đi",
                "Luôn bằng 0",
                "Phụ thuộc vào nhiệt độ tuyến tính"
            ],
            correct: 1,
            explanation: "Định luật Hess: ΔH chỉ phụ thuộc trạng thái đầu và cuối."
        },
        {
            type: "multiple",
            question: "Năng lượng liên kết là năng lượng cần thiết để:",
            options: [
                "Tạo thành 1 mol liên kết từ các nguyên tử",
                "Phá vỡ 1 mol liên kết trong pha khí",
                "Hòa tan 1 mol chất vào nước",
                "Đốt cháy hoàn toàn 1 mol chất"
            ],
            correct: 1,
            explanation: "Năng lượng liên kết (E_b) = năng lượng phá vỡ 1 mol liên kết trong pha khí ở 25°C."
        },
        {
            type: "multiple",
            question: "ΔH = ΣE_b (phá vỡ) − ΣE_b (tạo thành). Nếu năng lượng tạo liên kết lớn hơn phá vỡ, phản ứng sẽ:",
            options: ["Thu nhiệt (ΔH > 0)", "Tỏa nhiệt (ΔH < 0)", "Trung hòa nhiệt (ΔH = 0)", "Không xảy ra"],
            correct: 1,
            explanation: "ΣE_b tạo > ΣE_b phá → ΔH < 0 → tỏa nhiệt."
        },
        // ── HALOGEN ───────────────────────────────────────────────────────
        {
            type: "multiple",
            question: "Dãy halogen theo thứ tự tăng dần tính oxi hóa là:",
            options: [
                "F < Cl < Br < I",
                "I < Br < Cl < F",
                "Cl < F < Br < I",
                "I < F < Cl < Br"
            ],
            correct: 1,
            explanation: "Tính oxi hóa tăng từ I → F (tăng độ âm điện, giảm bán kính nguyên tử)."
        },
        {
            type: "multiple",
            question: "Khí clo tác dụng với dung dịch NaOH loãng, nguội tạo ra:",
            options: [
                "NaCl và NaClO₃",
                "NaCl và NaClO",
                "NaClO₃ và HCl",
                "Chỉ tạo NaCl"
            ],
            correct: 1,
            explanation: "Cl₂ + 2NaOH (nguội) → NaCl + NaClO + H₂O (nước Javel)."
        },
        {
            type: "multiple",
            question: "Dung dịch nhận biết ion halide Cl⁻, Br⁻, I⁻ dùng thuốc thử:",
            options: [
                "Dung dịch AgNO₃",
                "Dung dịch NaOH",
                "Dung dịch HCl",
                "Quỳ tím"
            ],
            correct: 0,
            explanation: "AgNO₃: Cl⁻→AgCl↓ trắng; Br⁻→AgBr↓ vàng nhạt; I⁻→AgI↓ vàng tươi."
        },
        {
            type: "multiple",
            question: "Phản ứng điều chế HCl trong công nghiệp chủ yếu bằng phương pháp:",
            options: [
                "Tổng hợp trực tiếp: H₂ + Cl₂ → 2HCl",
                "Cho NaCl rắn tác dụng với H₂SO₄ đặc, nóng",
                "Điện phân NaCl nóng chảy",
                "Cho Cl₂ tác dụng với nước"
            ],
            correct: 0,
            explanation: "Phương pháp tổng hợp trực tiếp H₂ + Cl₂ → 2HCl được dùng trong công nghiệp (hiệu suất cao, nguyên liệu từ điện phân nước muối)."
        },
        {
            type: "multiple",
            question: "Tính chất vật lý nào sau đây ĐÚNG với flo (F₂)?",
            options: [
                "Khí màu vàng lục, mùi hắc",
                "Khí không màu, mùi xốc đặc trưng",
                "Chất lỏng màu đỏ nâu, dễ bay hơi",
                "Chất rắn màu tím đen"
            ],
            correct: 1,
            explanation: "F₂: khí màu vàng lục nhạt (gần không màu), mùi xốc; Cl₂: vàng lục; Br₂: lỏng đỏ nâu; I₂: rắn tím đen."
        },
        {
            type: "multiple",
            question: "Clo phản ứng với nước theo phương trình: Cl₂ + H₂O ⇌ HCl + HClO. Trong phản ứng này Cl₂ đóng vai trò:",
            options: [
                "Chỉ là chất oxi hóa",
                "Chỉ là chất khử",
                "Vừa là chất oxi hóa vừa là chất khử",
                "Không xảy ra oxi hóa khử"
            ],
            correct: 2,
            explanation: "Cl: 0→−1 (trong HCl, bị khử) và 0→+1 (trong HClO, bị oxi hóa). Đây là phản ứng tự oxi hóa khử (dị phân)."
        },
        // ── OXYGEN – SULFUR ───────────────────────────────────────────────
        {
            type: "multiple",
            question: "Ozone (O₃) khác oxy (O₂) về:",
            options: [
                "Thành phần nguyên tố",
                "Cấu tạo phân tử và tính chất hóa học",
                "Trạng thái vật lý ở điều kiện thường",
                "Khả năng hòa tan trong nước"
            ],
            correct: 1,
            explanation: "O₃ và O₂ đều cấu tạo từ oxygen nhưng cấu trúc khác nhau; O₃ có tính oxi hóa mạnh hơn O₂ nhiều."
        },
        {
            type: "multiple",
            question: "Sulfuric acid đặc (H₂SO₄ đặc) có tính chất đặc trưng nào sau đây?",
            options: [
                "Tính axit yếu, không ăn mòn da",
                "Tính oxi hóa mạnh khi đặc và nóng, háo nước",
                "Chất lỏng màu vàng, bay hơi mạnh",
                "Tác dụng được với tất cả kim loại khi nguội"
            ],
            correct: 1,
            explanation: "H₂SO₄ đặc: tính oxi hóa mạnh (oxi hóa được Cu, S, C...), háo nước (gây bỏng da)."
        },
        {
            type: "multiple",
            question: "Sản phẩm khi đốt cháy lưu huỳnh trong không khí là:",
            options: ["SO₃", "SO₂", "H₂S", "S₂O₃"],
            correct: 1,
            explanation: "S + O₂ → SO₂ (điều kiện thường); SO₂ là nguyên nhân gây mưa axit."
        },
        {
            type: "multiple",
            question: "Dung dịch H₂SO₄ loãng không tác dụng được với:",
            options: ["Zn", "Fe", "Cu", "Mg"],
            correct: 2,
            explanation: "Cu không tan trong H₂SO₄ loãng (đứng sau H trong dãy hoạt động). Chỉ tan trong H₂SO₄ đặc nóng."
        },
        {
            type: "multiple",
            question: "Phản ứng tổng hợp SO₃ từ SO₂ trong công nghiệp sản xuất H₂SO₄:",
            options: [
                "SO₂ + H₂O → H₂SO₃",
                "2SO₂ + O₂ ⇌ 2SO₃ (xúc tác V₂O₅, 450°C)",
                "SO₃ + H₂O → H₂SO₄",
                "S + O₂ → SO₂"
            ],
            correct: 1,
            explanation: "Đây là bước quan trọng trong sản xuất H₂SO₄ (phương pháp tiếp xúc), xúc tác V₂O₅, 450–500°C."
        },
        {
            type: "multiple",
            question: "Số oxi hóa của S trong các hợp chất H₂S, S, SO₂, H₂SO₄ lần lượt là:",
            options: [
                "−2, 0, +4, +6",
                "−2, 0, +6, +4",
                "+2, 0, +4, +6",
                "−2, −1, +4, +6"
            ],
            correct: 0,
            explanation: "H₂S: S = −2; S đơn chất = 0; SO₂: S = +4; H₂SO₄: S = +6."
        },
        {
            type: "multiple",
            question: "Khí H₂S có mùi đặc trưng là:",
            options: ["Mùi hắc của clo", "Mùi trứng thối", "Mùi khét của lưu huỳnh", "Không mùi"],
            correct: 1,
            explanation: "H₂S là khí không màu, có mùi trứng thối, rất độc."
        },
        {
            type: "multiple",
            question: "Thuốc thử nhận biết ion SO₄²⁻ trong dung dịch là:",
            options: [
                "Dung dịch NaCl",
                "Dung dịch BaCl₂ (hoặc Ba(NO₃)₂)",
                "Quỳ tím",
                "Dung dịch AgNO₃"
            ],
            correct: 1,
            explanation: "Ba²⁺ + SO₄²⁻ → BaSO₄↓ trắng, không tan trong HCl, HNO₃ loãng."
        },
        {
            type: "multiple",
            question: "Trong phòng thí nghiệm, khí clo được điều chế bằng cách:",
            options: [
                "Điện phân dung dịch NaCl",
                "Cho MnO₂ tác dụng với dung dịch HCl đặc, đun nóng",
                "Cho NaCl tác dụng với H₂SO₄ loãng",
                "Đốt cháy kim loại trong khí clo"
            ],
            correct: 1,
            explanation: "PTN: MnO₂ + 4HCl (đặc) → MnCl₂ + Cl₂↑ + 2H₂O."
        },
        // ── TỰ LUẬN ──────────────────────────────────────────────────────
        {
            type: "essay",
            question: "Cân bằng phương trình oxi hóa – khử sau theo phương pháp thăng bằng electron:\n\nKMnO₄ + HCl → KCl + MnCl₂ + Cl₂ + H₂O",
            suggested: "Xác định sự thay đổi số oxi hóa:\n• Mn: +7 → +2 (nhận 5e) → chất oxi hóa\n• Cl⁻: −1 → 0 (nhường 1e) → chất khử\n\nBội số chung: 5 và 1 → 1Mn nhận 5e, 5Cl nhường 5e:\n• 1 KMnO₄ ↔ 5 HCl (tham gia oxi hóa khử)\n\nCân bằng:\n2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 5Cl₂↑ + 8H₂O\n\nKiểm tra: K: 2=2 ✓; Mn: 2=2 ✓; Cl: 16=2+4+10=16 ✓; H: 16=16 ✓; O: 8=8 ✓.",
            points: 25,
            explanation: "AI chấm: 2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 5Cl₂ + 8H₂O."
        },
        {
            type: "essay",
            question: "Cho 6,5 g Zn tan hoàn toàn trong dung dịch H₂SO₄ loãng, dư.\n(Zn = 65; H = 1; S = 32; O = 16)\n\na) Viết phương trình hóa học.\nb) Tính thể tích khí H₂ sinh ra ở đktc (1 mol khí = 22,4 L).\nc) Tính khối lượng H₂SO₄ đã phản ứng.",
            suggested: "a) Zn + H₂SO₄ → ZnSO₄ + H₂↑\n\nb) n_Zn = 6,5/65 = 0,1 mol.\nTheo PT: n_H₂ = n_Zn = 0,1 mol.\nV_H₂ = 0,1 × 22,4 = 2,24 L.\n\nc) n_H₂SO₄ = n_Zn = 0,1 mol.\nm_H₂SO₄ = 0,1 × 98 = 9,8 g.",
            points: 25,
            explanation: "AI chấm: V_H₂ = 2,24 L; m_H₂SO₄ = 9,8 g."
        },
        {
            type: "essay",
            question: "Cho 100 mL dung dịch BaCl₂ 0,2 M tác dụng với 100 mL dung dịch H₂SO₄ 0,15 M.\n(Ba = 137; S = 32; O = 16; H = 1)\n\na) Viết phương trình ion rút gọn.\nb) Tính khối lượng kết tủa thu được.\nc) Xác định dung dịch sau phản ứng còn chứa chất gì (dư)?",
            suggested: "a) Ba²⁺ + SO₄²⁻ → BaSO₄↓\n\nb) n_BaCl₂ = 0,1 × 0,2 = 0,02 mol → n_Ba²⁺ = 0,02 mol.\nn_H₂SO₄ = 0,1 × 0,15 = 0,015 mol → n_SO₄²⁻ = 0,015 mol.\nSo sánh: n_Ba²⁺/1 = 0,02 > n_SO₄²⁻/1 = 0,015 → SO₄²⁻ hết, Ba²⁺ dư.\nn_BaSO₄ = 0,015 mol.\nm_BaSO₄ = 0,015 × 233 = 3,495 g.\n\nc) Dung dịch còn: BaCl₂ dư (Ba²⁺ dư = 0,005 mol) và HCl (từ H₂SO₄ phân li ra H⁺, không phản ứng).",
            points: 25,
            explanation: "AI chấm: m_BaSO₄ = 3,495 g; BaCl₂ dư sau phản ứng."
        }
    ]
};
