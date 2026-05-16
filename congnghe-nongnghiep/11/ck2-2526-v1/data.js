// data.js – KIỂM TRA CUỐI KÌ II – CÔNG NGHỆ 11 (CHĂN NUÔI) – KNTT 2025-2026
// Chương trình GDPT 2018 | Sách Kết Nối Tri Thức với Cuộc Sống
// Nội dung HK2: Phòng trị bệnh cho vật nuôi, Chuồng trại và bảo vệ môi trường, Bảo quản và chế biến sản phẩm chăn nuôi
// 28 câu TN (×0,25đ = 7đ) + 3 câu TL (×1đ = 3đ) | 45 phút

window.quizData = {
    title: "Kiểm tra Cuối Học Kì II – Công nghệ 11 Chăn nuôi (Kết nối tri thức) 2025-2026",
    config: {
        testDuration: 2700,
        examLayout: {
            multiple: { count: 28, pointsPerQ: 0.25 },
            essay: { count: 3, pointsPerQ: 1.0 }
        }
    },
    questions: [
        // ── PHÒNG TRỊ BỆNH CHO VẬT NUÔI ────────────────────────────────────
        {
            type: "multiple",
            question: "Nguyên nhân bên ngoài nào sau đây gây bệnh truyền nhiễm ở vật nuôi?",
            options: [
                "Do di truyền từ bố mẹ",
                "Do thiếu hụt vitamin trong thức ăn",
                "Do vi sinh vật (vi khuẩn, virus, nấm) xâm nhập",
                "Do ngộ độc thức ăn"
            ],
            correct: 2,
            explanation: "Bệnh truyền nhiễm do các mầm bệnh sinh học (vi khuẩn, virus...) lây lan từ con vật này sang con vật khác."
        },
        {
            type: "multiple",
            question: "Đặc điểm nổi bật của bệnh truyền nhiễm so với bệnh thông thường là gì?",
            options: [
                "Chỉ xảy ra ở một con vật duy nhất",
                "Có khả năng lây lan nhanh thành dịch và thường gây tổn thất lớn",
                "Không bao giờ gây chết vật nuôi",
                "Có thể tự khỏi mà không cần can thiệp"
            ],
            correct: 1,
            explanation: "Bệnh truyền nhiễm có tính lây lan rất mạnh (như lở mồm long móng, cúm gia cầm...)."
        },
        {
            type: "multiple",
            question: "Biện pháp hiệu quả và chủ động nhất để phòng bệnh truyền nhiễm cho vật nuôi là:",
            options: [
                "Tiêm vaccine phòng bệnh theo định kì",
                "Tăng cường cho ăn nhiều tinh bột",
                "Chỉ nhốt vật nuôi trong chuồng kín",
                "Chờ khi có dịch mới bắt đầu chữa trị"
            ],
            correct: 0,
            explanation: "Vaccine giúp cơ thể vật nuôi tạo ra kháng thể chủ động để chống lại mầm bệnh đặc hiệu."
        },
        {
            type: "multiple",
            question: "Khi phát hiện vật nuôi có dấu hiệu mắc bệnh truyền nhiễm (ví dụ: lợn tai xanh, cúm gia cầm), việc ĐẦU TIÊN người chăn nuôi cần làm là gì?",
            options: [
                "Mổ thịt ngay để bán gỡ vốn",
                "Vứt xác ra sông suối để tránh lây lan trong chuồng",
                "Cách li ngay con ốm, báo cho cán bộ thú y và thực hiện tiêu độc sát trùng",
                "Tự ý mua thuốc kháng sinh liều cao về tiêm"
            ],
            correct: 2,
            explanation: "Cách li và báo cáo thú y là biện pháp bắt buộc để khoanh vùng và dập dịch an toàn."
        },
        {
            type: "multiple",
            question: "Kháng sinh có tác dụng chủ yếu trong việc điều trị loại bệnh nào?",
            options: [
                "Bệnh do virus gây ra",
                "Bệnh do vi khuẩn gây ra",
                "Bệnh do thiếu dinh dưỡng",
                "Bệnh di truyền"
            ],
            correct: 1,
            explanation: "Kháng sinh chỉ có tác dụng tiêu diệt hoặc kìm hãm sự phát triển của vi khuẩn, không có tác dụng với virus."
        },
        {
            type: "multiple",
            question: "Hậu quả của việc sử dụng kháng sinh bừa bãi trong chăn nuôi là gì?",
            options: [
                "Vật nuôi lớn nhanh và khỏe mạnh hơn",
                "Tạo ra các chủng vi khuẩn kháng thuốc (lờn thuốc) và tồn dư kháng sinh trong thực phẩm",
                "Làm tăng giá trị dinh dưỡng của thịt",
                "Giúp thay thế hoàn toàn vaccine"
            ],
            correct: 1,
            explanation: "Tồn dư kháng sinh ảnh hưởng trực tiếp đến sức khỏe con người và làm mất tác dụng chữa bệnh của thuốc."
        },
        // ── CHUỒNG TRẠI VÀ BẢO VỆ MÔI TRƯỜNG CHĂN NUÔI ─────────────────────
        {
            type: "multiple",
            question: "Yêu cầu cơ bản về vị trí xây dựng chuồng trại chăn nuôi quy mô trang trại là:",
            options: [
                "Nằm ngay giữa trung tâm khu dân cư để tiện tiêu thụ",
                "Gần bệnh viện, trường học",
                "Cách xa khu dân cư, xa nguồn nước sinh hoạt và có nguồn nước sạch dồi dào",
                "Xây dựng ở những vùng trũng thấp, hay ngập lụt"
            ],
            correct: 2,
            explanation: "Chuồng trại phải xa khu dân cư để đảm bảo vệ sinh môi trường và an toàn dịch bệnh (an toàn sinh học)."
        },
        {
            type: "multiple",
            question: "Hướng chuồng phổ biến và tốt nhất đối với điều kiện khí hậu nước ta là hướng nào?",
            options: ["Hướng Bắc hoặc Tây Bắc", "Hướng Đông Bắc", "Hướng Nam hoặc Đông Nam", "Hướng Tây"],
            correct: 2,
            explanation: "Hướng Nam hoặc Đông Nam giúp chuồng nhận được gió mát vào mùa hè, tránh nắng gắt buổi chiều và tránh gió mùa Đông Bắc lạnh giá."
        },
        {
            type: "multiple",
            question: "Công nghệ Biogas (khí sinh học) trong chăn nuôi nhằm mục đích gì?",
            options: [
                "Sản xuất thức ăn cho vật nuôi",
                "Xử lí chất thải chăn nuôi, giảm ô nhiễm môi trường và tạo ra khí đốt (CH4) phục vụ sinh hoạt",
                "Lọc nước sạch cho vật nuôi uống",
                "Điều hòa nhiệt độ chuồng nuôi"
            ],
            correct: 1,
            explanation: "Hầm Biogas phân giải kị khí phân động vật, sinh ra khí biogas (khí đốt) và nước thải/bã đã bớt độc hại có thể làm phân bón."
        },
        {
            type: "multiple",
            question: "Sử dụng đệm lót sinh học trong chăn nuôi lợn, gà có ưu điểm nổi bật nào?",
            options: [
                "Làm chuồng trại trở nên sang trọng hơn",
                "Giảm mùi hôi thối, phân giải chất thải ngay tại chuồng, tiết kiệm nước rửa chuồng",
                "Tăng khả năng sinh sản của con cái gấp đôi",
                "Giúp vật nuôi không cần uống nước"
            ],
            correct: 1,
            explanation: "Đệm lót sinh học chứa vi sinh vật có lợi sẽ lên men và phân giải phân, nước tiểu, giữ chuồng khô ráo và không mùi."
        },
        {
            type: "multiple",
            question: "Vệ sinh phòng bệnh trong chăn nuôi tuân theo phương châm nào là tốt nhất?",
            options: ["Phòng bệnh hơn chữa bệnh", "Chữa bệnh hơn phòng bệnh", "Mắc bệnh rồi mới phòng", "Chỉ tiêm phòng khi có dịch"],
            correct: 0,
            explanation: "Phòng bệnh (bằng vệ sinh, vaccine) ít tốn kém và an toàn hơn nhiều so với việc để vật nuôi mắc bệnh rồi mới chữa."
        },
        {
            type: "multiple",
            question: "Trong quy trình vệ sinh chuồng trại, bước tiêu độc sát trùng thường sử dụng hóa chất nào?",
            options: ["Nước cất", "Dung dịch formol, nước vôi trong, thuốc tím", "Nước mắm", "Dầu ăn"],
            correct: 1,
            explanation: "Nước vôi trong, formol, iodine... là các chất sát trùng phổ biến để tiêu diệt mầm bệnh trong môi trường."
        },
        // ── BẢO QUẢN VÀ CHẾ BIẾN SẢN PHẨM CHĂN NUÔI ───────────────────────
        {
            type: "multiple",
            question: "Mục đích chính của việc bảo quản sản phẩm chăn nuôi (thịt, trứng, sữa) là:",
            options: [
                "Làm tăng khối lượng sản phẩm",
                "Ngăn chặn sự phát triển của vi sinh vật gây thối rữa, duy trì độ tươi ngon và giá trị dinh dưỡng",
                "Biến đổi hoàn toàn mùi vị gốc của sản phẩm",
                "Tăng số lượng vi khuẩn có lợi"
            ],
            correct: 1,
            explanation: "Sản phẩm chăn nuôi (giàu đạm, nước) rất dễ hỏng nên cần bảo quản để ức chế vi sinh vật."
        },
        {
            type: "multiple",
            question: "Phương pháp bảo quản thịt lợn, thịt bò phổ biến nhất trong công nghiệp và gia đình hiện nay là:",
            options: ["Ướp muối", "Sấy khô", "Bảo quản lạnh và lạnh đông", "Đóng hộp"],
            correct: 2,
            explanation: "Nhiệt độ thấp (tủ lạnh, kho lạnh) ức chế sự hoạt động của vi sinh vật và enzyme, giúp thịt tươi lâu."
        },
        {
            type: "multiple",
            question: "Sữa tươi sau khi vắt ra nếu chưa sử dụng ngay thì cần được bảo quản ở điều kiện nào?",
            options: ["Nhiệt độ phòng (25-30 độ C)", "Bảo quản lạnh ở 2-4 độ C", "Đun sôi liên tục trên bếp", "Phơi dưới ánh nắng mặt trời"],
            correct: 1,
            explanation: "Sữa tươi rất giàu dinh dưỡng, vi khuẩn phát triển cực nhanh ở nhiệt độ phòng. Cần làm lạnh ngay ở 2-4 độ C."
        },
        {
            type: "multiple",
            question: "Công nghệ Pasteurization (Thanh trùng) thường được áp dụng chủ yếu cho sản phẩm nào?",
            options: ["Thịt hun khói", "Trứng muối", "Sữa tươi", "Chả lụa"],
            correct: 2,
            explanation: "Thanh trùng (đun nóng sữa lên khoảng 72-85 độ C rồi làm lạnh đột ngột) giúp tiêu diệt mầm bệnh mà vẫn giữ hương vị tự nhiên của sữa."
        },
        {
            type: "multiple",
            question: "Làm lạp xưởng, xúc xích, giò chả là ứng dụng của việc:",
            options: [
                "Bảo quản trứng",
                "Chế biến thịt",
                "Bảo quản sữa",
                "Sản xuất thức ăn chăn nuôi"
            ],
            correct: 1,
            explanation: "Chế biến thịt tạo ra các sản phẩm đa dạng, hương vị mới, có giá trị gia tăng cao và thời gian sử dụng lâu hơn."
        },
        {
            type: "multiple",
            question: "Phương pháp làm trứng muối (ngâm trứng trong dung dịch nước muối bão hòa) dựa trên nguyên lí nào?",
            options: [
                "Nhiệt độ cao tiêu diệt vi khuẩn",
                "Áp suất thẩm thấu cao của muối làm vi sinh vật bị mất nước và chết, ức chế sự thối rữa",
                "Muối tạo ra môi trường chân không",
                "Muối lên men tạo ra rượu"
            ],
            correct: 1,
            explanation: "Nước muối bão hòa có áp suất thẩm thấu rất mạnh, rút nước khỏi tế bào vi khuẩn khiến chúng không thể hoạt động."
        },
        // ── ỨNG DỤNG CÔNG NGHỆ CAO TRONG CHĂN NUÔI ────────────────────────
        {
            type: "multiple",
            question: "Chăn nuôi thông minh (Smart farming) ứng dụng công nghệ nào để theo dõi sức khỏe vật nuôi?",
            options: [
                "Ghi chép bằng sổ tay thủ công",
                "Gắn cảm biến (chip) trên cơ thể vật nuôi kết nối với hệ thống máy tính/điện thoại",
                "Thuê nhiều người đứng quan sát 24/24",
                "Chỉ dựa vào kinh nghiệm dân gian"
            ],
            correct: 1,
            explanation: "Cảm biến điện tử có thể đo thân nhiệt, nhịp tim, lượng vận động... truyền về máy tính để phát hiện bệnh sớm."
        },
        {
            type: "multiple",
            question: "Mô hình chuồng kín (chuồng lạnh) có ưu điểm gì so với chuồng hở tự nhiên?",
            options: [
                "Chi phí đầu tư ban đầu cực kì rẻ",
                "Kiểm soát hoàn toàn nhiệt độ, độ ẩm, ánh sáng và hạn chế tối đa dịch bệnh lây từ bên ngoài",
                "Không tốn điện năng vận hành",
                "Phụ thuộc hoàn toàn vào thời tiết"
            ],
            correct: 1,
            explanation: "Chuồng kín (trang bị quạt hút, tấm làm mát) giúp tạo tiểu khí hậu lí tưởng, cho năng suất rất cao và an toàn sinh học."
        },
        {
            type: "multiple",
            question: "Phát biểu nào sau đây KHÔNG đúng về chăn nuôi VietGAP?",
            options: [
                "Đảm bảo an toàn thực phẩm, không tồn dư kháng sinh, chất cấm",
                "Bảo vệ môi trường và sức khỏe người lao động",
                "Sử dụng chất tạo nạc (Salbutamol) để heo nhanh lớn và nhiều thịt nạc",
                "Có nguồn gốc xuất xứ rõ ràng (truy xuất nguồn gốc)"
            ],
            correct: 2,
            explanation: "VietGAP nghiêm cấm tuyệt đối việc sử dụng chất cấm (như chất tạo nạc) trong chăn nuôi."
        },
        {
            type: "multiple",
            question: "Robot vắt sữa tự động mang lại lợi ích gì cho trang trại bò sữa?",
            options: [
                "Làm bò bị stress hơn",
                "Giảm năng suất sữa",
                "Tiết kiệm nhân công, bò được vắt sữa một cách thoải mái theo nhu cầu sinh lí tự nhiên",
                "Làm tăng nguy cơ nhiễm trùng bầu vú"
            ],
            correct: 2,
            explanation: "Robot vắt sữa tự động vệ sinh bầu vú, tự động vắt khi bò có nhu cầu, giúp giảm stress và tăng năng suất."
        },
        {
            type: "multiple",
            question: "Để giảm thiểu phát thải khí nhà kính từ chăn nuôi trâu bò (khí methane - CH4), người ta thường áp dụng biện pháp nào?",
            options: [
                "Chỉ cho bò ăn cỏ khô",
                "Cải thiện khẩu phần ăn, bổ sung các chế phẩm sinh học giúp tiêu hóa tốt và xử lí chất thải bằng Biogas",
                "Bỏ đói vật nuôi",
                "Sử dụng quạt gió thổi khí CH4 ra ngoài tự nhiên"
            ],
            correct: 1,
            explanation: "Thay đổi khẩu phần ăn giúp giảm sự lên men dạ cỏ sinh CH4; Biogas thu hồi CH4 từ phân để làm nhiên liệu."
        },
        // ── KHÁC ─────────────────────────────────────────────────────────
        {
            type: "multiple",
            question: "Dấu hiệu nhận biết thịt lợn tươi, ngon và an toàn là:",
            options: [
                "Thịt có màu đỏ tươi, màng ngoài khô, ấn vào có độ đàn hồi tốt (không để lại vết lõm)",
                "Thịt có màu đỏ bầm, chảy nhớt",
                "Mỡ có màu vàng sậm, thịt nhão",
                "Thịt có những đốm trắng nhỏ bằng hạt gạo trong thớ thịt"
            ],
            correct: 0,
            explanation: "Đốm trắng là ấu trùng sán; thịt chảy nhớt là đã hỏng. Thịt tươi phải đàn hồi tốt."
        },
        {
            type: "multiple",
            question: "Sản phẩm thịt đóng hộp (thịt hộp) có thể bảo quản ở nhiệt độ phòng trong nhiều tháng vì:",
            options: [
                "Được ướp rất nhiều hóa chất độc hại",
                "Được tiệt trùng ở nhiệt độ cao (trên 100 độ C) và đóng gói trong môi trường chân không, vi sinh vật không thể sống sót",
                "Được làm từ thịt giả",
                "Hộp thiếc tự động sinh ra khí bảo quản"
            ],
            correct: 1,
            explanation: "Tiệt trùng ở nhiệt độ áp suất cao diệt toàn bộ nha bào vi khuẩn, cộng với môi trường kín khí (đóng hộp) giúp bảo quản lâu dài."
        },
        {
            type: "multiple",
            question: "Sữa chua (Yogurt) được tạo ra từ sữa tươi thông qua quá trình nào?",
            options: [
                "Lên men rượu",
                "Lên men lactic nhờ vi khuẩn Streptococcus thermophilus và Lactobacillus bulgaricus",
                "Đông tụ bằng hóa chất",
                "Sấy khô thành bột"
            ],
            correct: 1,
            explanation: "Vi khuẩn lactic lên men đường lactose thành axit lactic, làm giảm pH và gây đông tụ protein sữa tạo thành sữa chua."
        },
        {
            type: "multiple",
            question: "Trong phòng trừ bệnh kí sinh trùng (như giun, sán, ve, rận) cho vật nuôi, biện pháp nào cần làm định kì?",
            options: [
                "Tẩy giun sán định kì và vệ sinh, phun thuốc diệt ve rận",
                "Tiêm vaccine phòng giun sán",
                "Sử dụng kháng sinh liên tục",
                "Cắt bỏ đuôi vật nuôi"
            ],
            correct: 0,
            explanation: "Kí sinh trùng không phòng bằng vaccine, mà phải tẩy/xổ định kì kết hợp vệ sinh môi trường."
        },
        {
            type: "multiple",
            question: "Chất thải chăn nuôi nếu không được xử lí mà xả trực tiếp ra môi trường sẽ gây hậu quả gì?",
            options: [
                "Cung cấp nước sạch cho dòng sông",
                "Ô nhiễm nguồn nước ngầm, nước mặt, phát sinh khí độc gây mùi hôi và lây lan dịch bệnh",
                "Làm không khí trong lành hơn",
                "Giúp cá dưới sông phát triển mạnh mẽ"
            ],
            correct: 1,
            explanation: "Nước thải chăn nuôi chứa nhiều mầm bệnh và chất hữu cơ chưa phân giải, gây phú dưỡng hóa và ô nhiễm nghiêm trọng."
        },
        // ── TỰ LUẬN ──────────────────────────────────────────────────────
        {
            type: "essay",
            question: "Trình bày lợi ích của việc ứng dụng công nghệ Biogas (hầm khí sinh học) trong chăn nuôi lợn quy mô nông hộ và trang trại.",
            suggested: "Lợi ích của công nghệ Biogas:\n1. Về môi trường: Xử lí triệt để phân và nước thải chăn nuôi, tiêu diệt mầm bệnh, giun sán; giảm thiểu mùi hôi thối và hiện tượng ô nhiễm nguồn nước, không khí.\n2. Về năng lượng: Sinh ra khí sinh học (CH4) dùng làm nhiên liệu đun nấu, thắp sáng hoặc chạy máy phát điện, giúp tiết kiệm chi phí năng lượng cho gia đình/trang trại.\n3. Về nông nghiệp: Phụ phẩm sau biogas (nước thải và bã cặn) chứa nhiều dinh dưỡng dễ tiêu, rất an toàn, có thể dùng làm phân bón hữu cơ chất lượng cao cho cây trồng hoặc nuôi cá.",
            points: 25,
            explanation: "AI chấm: Đủ 3 ý: Bảo vệ môi trường/giảm mùi (10đ); Tạo khí đốt tiết kiệm năng lượng (8đ); Tận dụng chất thải làm phân bón sạch (7đ)."
        },
        {
            type: "essay",
            question: "Tại sao việc lạm dụng thuốc kháng sinh trong chăn nuôi lại gây nguy hiểm cho sức khỏe con người? Em hãy đề xuất 2 biện pháp để hạn chế việc sử dụng kháng sinh trong chăn nuôi.",
            suggested: "1. Sự nguy hiểm:\n- Lạm dụng kháng sinh gây tồn dư kháng sinh trong thịt, trứng, sữa. Khi con người ăn phải sẽ bị dị ứng, ngộ độc.\n- Nguy hiểm nhất: Tạo ra các chủng siêu vi khuẩn kháng thuốc (lờn thuốc). Khi vi khuẩn này lây sang người, các loại kháng sinh y tế sẽ mất tác dụng điều trị, đe dọa trực tiếp tính mạng con người.\n\n2. Biện pháp hạn chế:\n- Đẩy mạnh phòng bệnh bằng vaccine định kì và giữ vệ sinh môi trường chăn nuôi (an toàn sinh học).\n- Bổ sung các chế phẩm sinh học (men tiêu hóa, probiotics) vào thức ăn để tăng sức đề kháng tự nhiên cho vật nuôi, giúp vật nuôi khỏe mạnh mà không cần dùng đến kháng sinh.",
            points: 25,
            explanation: "AI chấm: Phân tích được tác hại (tồn dư độc hại, tạo vi khuẩn kháng thuốc/lờn thuốc) (15đ). Nêu 2 biện pháp hợp lí (tiêm vaccine, an toàn sinh học, dùng men vi sinh) (10đ)."
        },
        {
            type: "essay",
            question: "Nêu quy trình cơ bản để sản xuất sữa chua (Yogurt) theo phương pháp công nghiệp hoặc hộ gia đình. Tác dụng của việc ăn sữa chua đối với hệ tiêu hóa là gì?",
            suggested: "1. Quy trình cơ bản:\n- Chuẩn bị nguyên liệu: Sữa tươi (hoặc sữa bột pha nước).\n- Thanh trùng: Đun nóng sữa (khoảng 80-85°C) để diệt khuẩn, sau đó làm nguội xuống khoảng 40-45°C (nhiệt độ lí tưởng cho men hoạt động).\n- Cấy men: Cho men giống (chứa vi khuẩn lactic - sữa chua mồi) vào khuấy đều.\n- ủ lên men: Giữ ấm hỗn hợp ở 40-45°C trong vòng 6-8 tiếng để vi khuẩn lên men tạo độ chua và đông đặc.\n- Làm lạnh: Đưa vào tủ lạnh (2-4°C) để dừng quá trình lên men và bảo quản.\n\n2. Tác dụng: Bổ sung lượng lớn vi khuẩn có lợi (probiotics) cho đường ruột, giúp cân bằng hệ vi sinh, kích thích tiêu hóa tốt, tăng cường hệ miễn dịch.",
            points: 25,
            explanation: "AI chấm: Nêu được các bước chính (thanh trùng -> hạ nhiệt -> cấy men -> ủ ấm -> làm lạnh) (15đ). Nêu tác dụng (bổ sung lợi khuẩn, tốt tiêu hóa) (10đ)."
        }
    ]
};
