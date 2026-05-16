// data.js – KIỂM TRA CUỐI KÌ II – HÓA HỌC 12 (KNTT) – 2025-2026
// Chương trình GDPT 2018 | Sách Kết Nối Tri Thức với Cuộc Sống
// Nội dung: Đại cương kim loại - Kim loại kiềm, kiềm thổ, nhôm - Sắt và hợp chất
// 28 câu TN (×0,25đ = 7đ) + 3 câu TL (×1đ = 3đ) | 50 phút

window.quizData = {
    title: "Kiểm tra Cuối Học Kì II – Hóa Học 12 (Kết nối tri thức) 2025-2026",
    config: {
        testDuration: 3000,
        examLayout: {
            multiple: { count: 28, pointsPerQ: 0.25 },
            essay: { count: 3, pointsPerQ: 1.0 }
        }
    },
    questions: [
        // ── ĐẠI CƯƠNG KIM LOẠI ──────────────────────────────────────────────
        {
            type: "multiple",
            question: "Tính chất vật lí chung của kim loại (dẻo, dẫn điện, dẫn nhiệt, ánh kim) gây ra chủ yếu bởi:",
            options: ["Cấu tạo mạng tinh thể của kim loại", "Sự có mặt của các electron tự do trong mạng tinh thể", "Khối lượng riêng của kim loại", "Kích thước của ion kim loại"],
            correct: 1,
            explanation: "Các electron tự do trong mạng tinh thể kim loại là nguyên nhân chính gây ra các tính chất vật lí chung."
        },
        {
            type: "multiple",
            question: "Kim loại nào sau đây có tính dẫn điện tốt nhất?",
            options: ["Cu", "Au", "Ag", "Al"],
            correct: 2,
            explanation: "Độ dẫn điện giảm dần theo thứ tự: Ag > Cu > Au > Al > Fe."
        },
        {
            type: "multiple",
            question: "Tính chất hóa học đặc trưng của kim loại là:",
            options: ["Tính oxi hóa", "Tính khử", "Tính axit", "Tính bazơ"],
            correct: 1,
            explanation: "Nguyên tử kim loại dễ nhường electron để trở thành ion dương nên có tính khử đặc trưng."
        },
        {
            type: "multiple",
            question: "Cặp oxi hóa - khử nào sau đây có thế điện cực chuẩn (E°) lớn nhất?",
            options: ["Zn2+/Zn", "Cu2+/Cu", "Ag+/Ag", "Na+/Na"],
            correct: 2,
            explanation: "Ag có tính khử yếu nhất trong 4 kim loại trên nên cặp Ag+/Ag có thế điện cực chuẩn lớn nhất."
        },
        {
            type: "multiple",
            question: "Để bảo vệ vỏ tàu biển bằng thép, người ta thường gắn vào vỏ tàu phần chìm dưới nước những tấm kim loại nào sau đây?",
            options: ["Cu", "Zn", "Ag", "Sn"],
            correct: 1,
            explanation: "Dùng phương pháp bảo vệ điện hóa: gắn kim loại hoạt động mạnh hơn (Zn) làm anot bị ăn mòn thay cho vỏ tàu (Fe)."
        },
        {
            type: "multiple",
            question: "Phương pháp thủy luyện thường được dùng để điều chế các kim loại:",
            options: ["Hoạt động mạnh như Na, K", "Có tính khử trung bình và yếu như Cu, Ag", "Hoạt động mạnh như Al", "Kiềm thổ như Ca, Ba"],
            correct: 1,
            explanation: "Thủy luyện dùng để điều chế kim loại yếu bằng cách dùng kim loại mạnh hơn đẩy kim loại yếu ra khỏi muối."
        },
        {
            type: "multiple",
            question: "Ăn mòn hóa học là quá trình oxi hóa - khử, trong đó các electron của kim loại được chuyển trực tiếp đến:",
            options: ["Chất trong môi trường", "Cực dương của pin", "Cực âm của pin", "Kim loại khác"],
            correct: 0,
            explanation: "Ăn mòn hóa học xảy ra do phản ứng trực tiếp giữa kim loại và chất ở môi trường, không sinh ra dòng điện."
        },
        {
            type: "multiple",
            question: "Dãy điện hóa của kim loại được sắp xếp theo chiều:",
            options: ["Tính khử của kim loại giảm dần, tính oxi hóa của ion kim loại tăng dần", "Tính khử của kim loại tăng dần", "Tính oxi hóa của ion kim loại giảm dần", "Không có quy luật"],
            correct: 0,
            explanation: "Từ trái sang phải trong dãy điện hóa, tính khử của kim loại giảm, tính oxi hóa của ion kim loại tăng."
        },
        {
            type: "multiple",
            question: "Phản ứng nhiệt nhôm dùng để điều chế kim loại nào sau đây?",
            options: ["Na", "Ca", "Fe", "K"],
            correct: 2,
            explanation: "Phản ứng nhiệt nhôm dùng bột Al khử oxit của kim loại trung bình/yếu (như Fe2O3) ở nhiệt độ cao."
        },
        {
            type: "multiple",
            question: "Trong pin điện hóa Zn-Cu, quá trình xảy ra ở anot là:",
            options: ["Sự oxi hóa Zn", "Sự khử Zn2+", "Sự oxi hóa Cu", "Sự khử Cu2+"],
            correct: 0,
            explanation: "Ở anot (cực âm) xảy ra quá trình oxi hóa (nhường e): Zn -> Zn2+ + 2e."
        },
        // ── KIM LOẠI KIỀM, KIỀM THỔ, NHÔM ─────────────────────────────────────
        {
            type: "multiple",
            question: "Kim loại kiềm thuộc nhóm nào trong bảng tuần hoàn?",
            options: ["Nhóm IA", "Nhóm IIA", "Nhóm IIIA", "Nhóm VIIA"],
            correct: 0,
            explanation: "Kim loại kiềm gồm Li, Na, K, Rb, Cs thuộc nhóm IA."
        },
        {
            type: "multiple",
            question: "Cấu hình electron lớp ngoài cùng của kim loại kiềm thổ là:",
            options: ["ns1", "ns2", "ns2np1", "ns2np2"],
            correct: 1,
            explanation: "Kim loại kiềm thổ (Nhóm IIA) có 2 electron lớp ngoài cùng (ns2)."
        },
        {
            type: "multiple",
            question: "Hợp chất nào sau đây được dùng để làm mềm nước cứng vĩnh cửu?",
            options: ["Ca(OH)2", "HCl", "Na2CO3", "NaCl"],
            correct: 2,
            explanation: "Na2CO3 và Na3PO4 có thể kết tủa Ca2+ và Mg2+, dùng làm mềm mọi loại nước cứng."
        },
        {
            type: "multiple",
            question: "Trong công nghiệp, nhôm (Al) được điều chế bằng phương pháp nào?",
            options: ["Điện phân Al2O3 nóng chảy", "Điện phân dung dịch AlCl3", "Nhiệt luyện từ Al2O3", "Thủy luyện"],
            correct: 0,
            explanation: "Nhôm được sản xuất bằng cách điện phân nóng chảy quặng bauxite (Al2O3) với xúc tác cryolite."
        },
        {
            type: "multiple",
            question: "Nhôm không phản ứng với dung dịch nào sau đây?",
            options: ["NaOH", "HCl", "H2SO4 đặc, nguội", "CuSO4"],
            correct: 2,
            explanation: "Al, Fe, Cr bị thụ động hóa trong H2SO4 đặc nguội và HNO3 đặc nguội."
        },
        {
            type: "multiple",
            question: "Để bảo quản kim loại natri, người ta phải ngâm natri trong:",
            options: ["Nước", "Dầu hỏa", "Cồn", "Giấm"],
            correct: 1,
            explanation: "Na rất hoạt động, phản ứng mãnh liệt với nước và oxi nên phải ngâm chìm trong dầu hỏa để cách ly không khí."
        },
        {
            type: "multiple",
            question: "Hiện tượng thạch nhũ trong các hang động núi đá vôi là kết quả của phản ứng:",
            options: ["CaCO3 + CO2 + H2O -> Ca(HCO3)2", "Ca(HCO3)2 -> CaCO3 + CO2 + H2O", "Ca(OH)2 + CO2 -> CaCO3 + H2O", "CaO + CO2 -> CaCO3"],
            correct: 1,
            explanation: "Thạch nhũ được tạo thành do sự phân hủy chậm của Ca(HCO3)2 tạo ra CaCO3 kết tủa."
        },
        {
            type: "multiple",
            question: "Chất nào sau đây có tính lưỡng tính?",
            options: ["AlCl3", "Al2O3", "NaAlO2", "Al(NO3)3"],
            correct: 1,
            explanation: "Al2O3 và Al(OH)3 là các chất lưỡng tính, vừa tác dụng với axit vừa tác dụng với bazơ."
        },
        // ── SẮT VÀ HỢP CHẤT ───────────────────────────────────────────────────
        {
            type: "multiple",
            question: "Cấu hình electron của nguyên tử Fe (Z=26) là:",
            options: ["[Ar]3d6 4s2", "[Ar]4s2 3d6", "[Ar]3d5 4s2", "[Ar]3d7 4s2"],
            correct: 0,
            explanation: "Cấu hình của Fe là 1s2 2s2 2p6 3s2 3p6 3d6 4s2, viết gọn là [Ar]3d6 4s2."
        },
        {
            type: "multiple",
            question: "Hợp chất sắt (II) có tính chất hóa học đặc trưng là:",
            options: ["Chỉ có tính oxi hóa", "Chỉ có tính khử", "Vừa có tính oxi hóa, vừa có tính khử", "Không có tính oxi hóa, khử"],
            correct: 2,
            explanation: "Fe(II) ở mức oxi hóa trung gian (+2) nên vừa có thể giảm xuống 0 (tính oxi hóa) vừa tăng lên +3 (tính khử)."
        },
        {
            type: "multiple",
            question: "Quặng nào sau đây giàu sắt nhất nhưng hiếm trong tự nhiên?",
            options: ["Hematite đỏ (Fe2O3)", "Magnetite (Fe3O4)", "Siderite (FeCO3)", "Pyrite (FeS2)"],
            correct: 1,
            explanation: "Quặng magnetite (Fe3O4) giàu sắt nhất (chứa ~72,4% Fe) nhưng hiếm có mỏ lớn."
        },
        {
            type: "multiple",
            question: "Khi cho Fe tác dụng với dung dịch HNO3 loãng dư, sản phẩm thu được chứa muối sắt nào?",
            options: ["Fe(NO3)2", "Fe(NO3)3", "Cả hai muối", "Không phản ứng"],
            correct: 1,
            explanation: "HNO3 có tính oxi hóa mạnh sẽ đưa Fe lên mức oxi hóa cao nhất là Fe(III)."
        },
        {
            type: "multiple",
            question: "Thành phần chính của gang là:",
            options: ["Fe và C (2-5% C)", "Fe và C (<2% C)", "Fe và Si", "Fe và Mn"],
            correct: 0,
            explanation: "Gang là hợp kim của sắt và cacbon trong đó cacbon chiếm 2-5% khối lượng."
        },
        {
            type: "multiple",
            question: "Để nhận biết ion Fe3+ trong dung dịch, người ta thường dùng dung dịch thuốc thử nào sau đây để tạo kết tủa màu nâu đỏ?",
            options: ["BaCl2", "AgNO3", "NaOH", "HCl"],
            correct: 2,
            explanation: "Fe3+ + 3OH- -> Fe(OH)3 (kết tủa nâu đỏ)."
        },
        {
            type: "multiple",
            question: "Phản ứng nào sau đây dùng để sản xuất gang trong lò cao?",
            options: ["Dùng CO khử oxit sắt ở nhiệt độ cao", "Dùng H2 khử oxit sắt", "Điện phân dung dịch FeCl2", "Điện phân nóng chảy oxit sắt"],
            correct: 0,
            explanation: "Trong lò cao, CO được tạo ra từ than cốc sẽ khử các oxit sắt thành Fe."
        },
        {
            type: "multiple",
            question: "Oxit lưỡng tính của crom là:",
            options: ["CrO", "Cr2O3", "CrO3", "Cả 3 oxit"],
            correct: 1,
            explanation: "Cr2O3 là oxit lưỡng tính tương tự Al2O3. CrO là oxit bazơ, CrO3 là oxit axit."
        },
        {
            type: "multiple",
            question: "Hợp chất nào của sắt dùng làm thuốc chữa bệnh thiếu máu?",
            options: ["FeSO4", "FeCl3", "Fe2O3", "Fe(OH)3"],
            correct: 0,
            explanation: "Các hợp chất sắt (II) dễ hấp thu nên thường dùng trong y tế để bổ sung sắt (ví dụ FeSO4)."
        },
        {
            type: "multiple",
            question: "Khi nhỏ từ từ dung dịch NaOH vào dung dịch FeCl2, để ngoài không khí, hiện tượng quan sát được là:",
            options: ["Kết tủa trắng xanh, sau đó tan dần", "Kết tủa nâu đỏ", "Kết tủa trắng xanh, sau đó chuyển dần sang màu nâu đỏ", "Có khí bay ra"],
            correct: 2,
            explanation: "Tạo Fe(OH)2 màu trắng xanh, sau đó bị oxi trong không khí oxi hóa thành Fe(OH)3 màu nâu đỏ: 4Fe(OH)2 + O2 + 2H2O -> 4Fe(OH)3."
        },
        // ── TỰ LUẬN ──────────────────────────────────────────────────────
        {
            type: "essay",
            question: "Ngâm một lá đồng (Cu) trong dung dịch bạc nitrat (AgNO3). Nêu hiện tượng quan sát được và viết phương trình hóa học giải thích.",
            suggested: "Hiện tượng: Lá đồng tan dần, dung dịch từ không màu chuyển sang màu xanh lam. Có kim loại màu xám bạc bám ngoài lá đồng.\nPhương trình hóa học: Cu + 2AgNO3 -> Cu(NO3)2 + 2Ag\nGiải thích: Cu đứng trước Ag trong dãy điện hóa nên đẩy được Ag ra khỏi muối. Cu(NO3)2 tạo thành làm dung dịch có màu xanh.",
            points: 25,
            explanation: "AI chấm: Hiện tượng đúng (Ag bám, dd xanh), PTHH đúng."
        },
        {
            type: "essay",
            question: "Nhôm là kim loại hoạt động mạnh nhưng các đồ vật bằng nhôm lại rất bền trong không khí và nước. Hãy giải thích tại sao.",
            suggested: "Nhôm bền trong không khí và nước vì trên bề mặt các vật dụng bằng nhôm luôn có một lớp màng oxit (Al2O3) rất mỏng, đặc khít và bền vững bảo vệ, ngăn không cho nhôm ở bên trong tiếp xúc với oxi và nước.",
            points: 25,
            explanation: "AI chấm: Nêu được vai trò của lớp màng oxit bảo vệ (Al2O3)."
        },
        {
            type: "essay",
            question: "Hòa tan hoàn toàn 10,4 gam hỗn hợp X gồm Mg và Fe vào dung dịch HCl dư, thu được 6,72 lít khí H2 (đktc).\na) Viết các phương trình hóa học xảy ra.\nb) Tính thành phần phần trăm khối lượng mỗi kim loại trong hỗn hợp ban đầu.",
            suggested: "a) PTHH:\nMg + 2HCl -> MgCl2 + H2 (1)\nFe + 2HCl -> FeCl2 + H2 (2)\n\nb) n(H2) = 6,72 / 22,4 = 0,3 mol.\nGọi số mol Mg và Fe lần lượt là x và y.\nTa có hệ phương trình:\n24x + 56y = 10,4 (khối lượng hỗn hợp)\nx + y = 0,3 (số mol H2)\nGiải hệ: x = 0,2 mol; y = 0,1 mol.\nKhối lượng Mg: m(Mg) = 0,2 * 24 = 4,8 gam.\n%m(Mg) = (4,8 / 10,4) * 100% ≈ 46,15%.\n%m(Fe) = 100% - 46,15% = 53,85%.",
            points: 25,
            explanation: "AI chấm: Lập hệ PT, giải ra %Mg = 46.15%, %Fe = 53.85%."
        }
    ]
};
