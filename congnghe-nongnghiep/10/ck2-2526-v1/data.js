// data.js – KIỂM TRA CUỐI KÌ II – CÔNG NGHỆ 10 (NÔNG NGHIỆP TRỒNG TRỌT) – KNTT 2025-2026
// Chương trình GDPT 2018 | Sách Kết Nối Tri Thức với Cuộc Sống
// Nội dung HK2: Phân bón, Phòng trừ sâu bệnh hại cây trồng, Thu hoạch, bảo quản và chế biến sản phẩm trồng trọt
// 28 câu TN (×0,25đ = 7đ) + 3 câu TL (×1đ = 3đ) | 45 phút

window.quizData = {
    title: "Kiểm tra Cuối Học Kì II – Công nghệ 10 Nông nghiệp (Kết nối tri thức) 2025-2026",
    config: {
        testDuration: 2700,
        examLayout: {
            multiple: { count: 28, pointsPerQ: 0.25 },
            essay: { count: 3, pointsPerQ: 1.0 }
        }
    },
    questions: [
        // ── PHÂN BÓN TRONG TRỒNG TRỌT ──────────────────────────────────────
        {
            type: "multiple",
            question: "Phân bón hóa học (phân vô cơ) có đặc điểm nào sau đây?",
            options: [
                "Tác dụng chậm, hiệu quả kéo dài",
                "Chứa ít chất dinh dưỡng, tỉ lệ các chất không ổn định",
                "Chứa nhiều chất dinh dưỡng, dễ hòa tan, cây dễ hấp thụ, tác dụng nhanh",
                "Giúp cải tạo đất rất tốt"
            ],
            correct: 2,
            explanation: "Phân vô cơ dễ tan, tác dụng nhanh nhưng nếu bón nhiều và liên tục sẽ làm đất chai cứng, chua hóa."
        },
        {
            type: "multiple",
            question: "Phân hữu cơ trước khi bón cho cây trồng cần phải làm gì để đảm bảo an toàn và hiệu quả?",
            options: [
                "Phơi khô dưới nắng",
                "Ủ hoai mục",
                "Hòa tan vào nước sôi",
                "Bón trực tiếp ngay sau khi thu gom"
            ],
            correct: 1,
            explanation: "Phân hữu cơ tươi chứa nhiều mầm bệnh và hạt cỏ dại, cần ủ hoai mục để tiêu diệt mầm bệnh và chuyển hóa dinh dưỡng."
        },
        {
            type: "multiple",
            question: "Cách bón phân nào thường được áp dụng cho phân bón lót?",
            options: ["Bón qua lá", "Phun lên thân cây", "Bón rải đều trên mặt ruộng rồi cày bừa vùi xuống đất", "Hòa vào nước tưới nhỏ giọt"],
            correct: 2,
            explanation: "Bón lót (trước khi gieo trồng) thường dùng phân hữu cơ hoặc lân, bón rải và vùi sâu vào đất."
        },
        {
            type: "multiple",
            question: "Phân vi sinh vật có ưu điểm nổi bật nào so với phân hóa học?",
            options: [
                "Tác dụng cực nhanh",
                "Giá thành rất cao",
                "Thân thiện với môi trường, không làm thoái hóa đất, an toàn cho nông sản",
                "Cung cấp đa lượng N-P-K với hàm lượng cực lớn"
            ],
            correct: 2,
            explanation: "Phân vi sinh chứa các vi sinh vật sống có ích, giúp phân giải chất khó tiêu thành dễ tiêu, cố định đạm... rất an toàn sinh thái."
        },
        {
            type: "multiple",
            question: "Loại phân bón nào được sử dụng chủ yếu để bón thúc?",
            options: ["Phân chuồng tươi", "Phân đạm và phân kali", "Phân xanh", "Phân rác"],
            correct: 1,
            explanation: "Bón thúc cần cung cấp dinh dưỡng nhanh cho cây trong các thời kì sinh trưởng mạnh, nên dùng phân đạm, kali (dễ tan)."
        },
        // ── SÂU BỆNH HẠI CÂY TRỒNG ────────────────────────────────────────
        {
            type: "multiple",
            question: "Nguyên nhân chủ yếu gây ra bệnh hại cây trồng là gì?",
            options: [
                "Do các loài côn trùng ăn lá",
                "Do chuột và chim",
                "Do vi sinh vật gây bệnh (nấm, vi khuẩn, virus) và điều kiện ngoại cảnh bất lợi",
                "Do cỏ dại cạnh tranh dinh dưỡng"
            ],
            correct: 2,
            explanation: "Bệnh hại do nấm, vi khuẩn, virus hoặc điều kiện sống không thuận lợi (nhiệt độ, nước, dinh dưỡng) gây ra."
        },
        {
            type: "multiple",
            question: "Đâu là dấu hiệu đặc trưng của cây bị sâu cắn phá?",
            options: [
                "Lá bị thủng lỗ, khuyết mép, đứt thân",
                "Lá bị đốm vàng, đốm nâu",
                "Thân cây có lớp phấn trắng hoặc mốc đen",
                "Rễ cây bị thối nhũn"
            ],
            correct: 0,
            explanation: "Sâu có miệng nhai thường cắn phá các bộ phận của cây để lại các vết khuyết, lỗ thủng."
        },
        {
            type: "multiple",
            question: "Biện pháp phòng trừ sâu, bệnh hại mang tính chất chủ động, hiệu quả lâu dài và an toàn nhất là:",
            options: [
                "Biện pháp hóa học (phun thuốc)",
                "Biện pháp thủ công (bắt sâu bằng tay)",
                "Biện pháp canh tác và sử dụng giống chống chịu",
                "Biện pháp sinh học"
            ],
            correct: 2,
            explanation: "Biện pháp canh tác (vệ sinh đồng ruộng, luân canh...) và dùng giống kháng bệnh giúp phòng ngừa sâu bệnh ngay từ đầu một cách bền vững."
        },
        {
            type: "multiple",
            question: "Ưu điểm lớn nhất của biện pháp sinh học trong phòng trừ sâu, bệnh là gì?",
            options: [
                "Tiêu diệt sâu bệnh ngay lập tức",
                "Rất dễ sản xuất và giá rẻ",
                "An toàn cho con người, vật nuôi và không gây ô nhiễm môi trường",
                "Không cần kiến thức chuyên môn vẫn làm được"
            ],
            correct: 2,
            explanation: "Biện pháp sinh học (dùng thiên địch, chế phẩm sinh học) rất an toàn và bảo vệ cân bằng sinh thái."
        },
        {
            type: "multiple",
            question: "Sử dụng thuốc hóa học bảo vệ thực vật cần tuân thủ nguyên tắc '4 đúng'. Đó là những đúng nào?",
            options: [
                "Đúng thuốc, Đúng lúc, Đúng nồng độ và liều lượng, Đúng cách",
                "Đúng người, Đúng tội, Đúng lúc, Đúng chỗ",
                "Đúng thuốc, Đúng giờ, Đúng mùa, Đúng loại cây",
                "Đúng cách, Đúng ngày, Đúng lượng, Đúng giá"
            ],
            correct: 0,
            explanation: "Nguyên tắc 4 đúng là bắt buộc để đảm bảo hiệu quả phòng trừ và hạn chế độc hại."
        },
        {
            type: "multiple",
            question: "Hậu quả của việc lạm dụng thuốc bảo vệ thực vật hóa học là gì?",
            options: [
                "Giúp cây trồng tăng năng suất gấp 10 lần",
                "Gây ô nhiễm môi trường đất, nước, không khí; tiêu diệt thiên địch và tồn dư chất độc trong nông sản",
                "Làm tăng sức đề kháng của con người",
                "Cải tạo độ phì nhiêu của đất"
            ],
            correct: 1,
            explanation: "Thuốc hóa học là con dao hai lưỡi, lạm dụng sẽ gây hậu quả khôn lường cho sức khỏe và sinh thái."
        },
        {
            type: "multiple",
            question: "Ứng dụng công nghệ sinh học trong bảo vệ thực vật nhằm mục đích gì?",
            options: [
                "Tạo ra các loại thuốc hóa học cực mạnh",
                "Tạo ra các chế phẩm sinh học (nấm đối kháng, vi khuẩn trừ sâu) an toàn và hiệu quả",
                "Tiêu diệt hoàn toàn các loại côn trùng trên Trái Đất",
                "Thay thế hoàn toàn việc bón phân"
            ],
            correct: 1,
            explanation: "Công nghệ sinh học nhân nuôi các vi sinh vật có ích để tiêu diệt sâu, nấm bệnh hại."
        },
        // ── THU HOẠCH, BẢO QUẢN SẢN PHẨM TRỒNG TRỌT ────────────────────────
        {
            type: "multiple",
            question: "Mục đích chính của việc bảo quản sản phẩm trồng trọt là gì?",
            options: [
                "Tăng thêm độ chín của nông sản",
                "Duy trì chất lượng, hạn chế hao hụt về số lượng và kéo dài thời gian sử dụng của nông sản",
                "Tạo ra các sản phẩm mới có giá trị cao hơn",
                "Làm cho nông sản nhẹ hơn để dễ vận chuyển"
            ],
            correct: 1,
            explanation: "Bảo quản giúp kìm hãm các quá trình sinh lí, sinh hóa và sự xâm nhập của vi sinh vật để giữ nông sản tươi lâu."
        },
        {
            type: "multiple",
            question: "Yêu cầu kĩ thuật quan trọng nhất đối với thu hoạch các loại hạt (lúa, ngô, đậu) là:",
            options: [
                "Thu hoạch khi hạt còn xanh để dễ bảo quản",
                "Thu hoạch đúng độ chín, phơi sấy đến độ ẩm an toàn (thường 12-14%)",
                "Thu hoạch vào lúc trời mưa để hạt không bị nứt",
                "Không cần phân loại hạt trước khi lưu kho"
            ],
            correct: 1,
            explanation: "Hạt phải khô (độ ẩm thấp) mới không bị mốc, mọt trong quá trình bảo quản."
        },
        {
            type: "multiple",
            question: "Phương pháp bảo quản lạnh (trong kho lạnh) thường được áp dụng cho loại nông sản nào?",
            options: ["Lúa gạo", "Đậu tương", "Rau, củ, quả tươi", "Cà phê, hồ tiêu"],
            correct: 2,
            explanation: "Rau quả tươi chứa nhiều nước, rất dễ hỏng nên cần bảo quản ở nhiệt độ thấp để ức chế hô hấp và vi sinh vật."
        },
        {
            type: "multiple",
            question: "Khi bảo quản nông sản bằng phương pháp kín (trong chum vại, kho xilo kín), yếu tố nào bị hạn chế đến mức tối đa?",
            options: ["Ánh sáng", "Nhiệt độ", "Khí Oxygen (O2)", "Áp suất"],
            correct: 2,
            explanation: "Bảo quản kín làm giảm lượng O2 và tăng lượng CO2, khiến hạt nông sản chuyển sang hô hấp yếm khí mức độ nhẹ, kéo dài tuổi thọ."
        },
        {
            type: "multiple",
            question: "Một trong những nguyên nhân sinh học làm hư hỏng nông sản trong quá trình bảo quản là do:",
            options: ["Nhiệt độ trong kho quá thấp", "Sự hoạt động của vi sinh vật (nấm mốc, vi khuẩn) và côn trùng, chuột bọ", "Thiếu ánh sáng mặt trời", "Không có gió thông thoáng"],
            correct: 1,
            explanation: "Vi sinh vật và dịch hại là nguyên nhân trực tiếp làm thối hỏng, mốc nông sản."
        },
        {
            type: "multiple",
            question: "Phương pháp bảo quản CAS (Cells Alive System) có ưu điểm gì vượt trội?",
            options: [
                "Bảo quản bằng hóa chất siêu mạnh",
                "Đóng băng nông sản nhưng không phá vỡ màng tế bào, giúp giữ nguyên hương vị và độ tươi ngon sau khi rã đông",
                "Bảo quản trong môi trường chân không tuyệt đối",
                "Sấy khô nông sản trong 1 giây"
            ],
            correct: 1,
            explanation: "Công nghệ CAS sử dụng từ trường trong quá trình làm lạnh nhanh, giúp nước trong tế bào không tạo thành tinh thể băng lớn xé rách tế bào."
        },
        // ── CHẾ BIẾN SẢN PHẨM TRỒNG TRỌT ──────────────────────────────────
        {
            type: "multiple",
            question: "Chế biến nông sản nhằm mục đích gì?",
            options: [
                "Làm tăng khối lượng của nông sản",
                "Chuyển nông sản thành các sản phẩm khác biệt, tăng giá trị kinh tế, tiện lợi cho sử dụng và đa dạng hóa sản phẩm",
                "Tiêu diệt hoàn toàn dinh dưỡng để bảo quản lâu",
                "Giữ nông sản ở trạng thái tươi sống nguyên bản"
            ],
            correct: 1,
            explanation: "Chế biến tạo ra các sản phẩm tinh (đồ hộp, sấy khô, nước ép) có giá trị gia tăng cao."
        },
        {
            type: "multiple",
            question: "Công nghệ sấy thăng hoa là phương pháp sấy:",
            options: [
                "Sấy bằng nhiệt độ cực cao (trên 200 độ C)",
                "Làm lạnh đông sản phẩm rồi rút chân không để nước thăng hoa từ thể rắn sang thể khí",
                "Phơi nắng trực tiếp",
                "Sấy bằng quạt gió tự nhiên"
            ],
            correct: 1,
            explanation: "Sấy thăng hoa giữ nguyên hình dáng, màu sắc và cấu trúc tế bào của sản phẩm, chất lượng cực kì cao."
        },
        {
            type: "multiple",
            question: "Trong công nghệ sản xuất nước quả, bước thanh trùng (Pasteurization) có tác dụng gì?",
            options: [
                "Tạo màu sắc đẹp cho nước quả",
                "Tiêu diệt phần lớn các vi sinh vật gây hại, nấm men, nấm mốc để kéo dài thời gian bảo quản",
                "Làm nước quả đặc lại",
                "Tạo ga cho nước quả"
            ],
            correct: 1,
            explanation: "Thanh trùng dùng nhiệt độ (khoảng 70-90 độ C) để diệt vi sinh vật nhưng ít làm mất đi hương vị tự nhiên."
        },
        {
            type: "multiple",
            question: "Sản xuất gạo đồ (parboiled rice) khác với gạo trắng thông thường ở công đoạn nào?",
            options: [
                "Lúa được ngâm nước, hấp chín bằng hơi nước rồi mới đem sấy khô và xát vỏ",
                "Gạo được nhuộm màu hóa học",
                "Lúa không cần xát vỏ trấu",
                "Gạo được luộc chín rồi mang phơi"
            ],
            correct: 0,
            explanation: "Gạo đồ giúp hạt gạo cứng hơn, giữ được nhiều vitamin ở lớp cám thấm vào trong hạt."
        },
        {
            type: "multiple",
            question: "Phương pháp muối chua (làm dưa, cà) dựa trên cơ sở khoa học nào?",
            options: [
                "Lên men rượu",
                "Lên men lactic nhờ vi khuẩn lactic hoạt động trong môi trường kị khí, tạo axit ức chế vi khuẩn gây thối",
                "Lên men axetic",
                "Sự phân giải protein"
            ],
            correct: 1,
            explanation: "Axit lactic sinh ra làm độ pH giảm, giúp bảo quản rau quả và tạo hương vị đặc trưng."
        },
        // ── KHÁC ─────────────────────────────────────────────────────────
        {
            type: "multiple",
            question: "Việc sử dụng thiên địch (như ong mắt đỏ, bọ rùa) để tiêu diệt sâu hại gọi là phương pháp gì?",
            options: ["Phòng trừ hóa học", "Phòng trừ vật lí", "Phòng trừ sinh học", "Phòng trừ thủ công"],
            correct: 2,
            explanation: "Sử dụng sinh vật có ích để kiểm soát sinh vật gây hại là cốt lõi của phòng trừ sinh học."
        },
        {
            type: "multiple",
            question: "Bẫy đèn, bẫy dính màu vàng được sử dụng để bắt côn trùng dựa trên nguyên lí nào?",
            options: [
                "Dùng mùi hương hóa học để thu hút",
                "Dùng sóng âm thanh",
                "Lợi dụng tính hướng sáng và hướng màu sắc của một số loài côn trùng",
                "Lợi dụng tập tính tìm kiếm thức ăn"
            ],
            correct: 2,
            explanation: "Đây là biện pháp vật lí - cơ giới, an toàn cho môi trường."
        },
        {
            type: "multiple",
            question: "Chế phẩm Bt (Bacillus thuringiensis) là một loại:",
            options: ["Phân bón hóa học", "Thuốc trừ sâu sinh học (chứa vi khuẩn có lợi gây bệnh cho sâu)", "Chất điều hòa sinh trưởng", "Thuốc diệt cỏ"],
            correct: 1,
            explanation: "Vi khuẩn Bt sinh ra độc tố làm tê liệt hệ tiêu hóa của sâu bướm, rất an toàn với người và môi trường."
        },
        {
            type: "multiple",
            question: "Công nghệ đóng gói màng biến đổi khí quyển (MAP - Modified Atmosphere Packaging) dùng để:",
            options: [
                "Đóng gói gạo xuất khẩu",
                "Thay đổi tỉ lệ các loại khí (giảm O2, tăng CO2 hoặc N2) bên trong bao bì để kéo dài tuổi thọ rau quả tươi",
                "Hút chân không tuyệt đối",
                "Bọc màng nhựa sinh học"
            ],
            correct: 1,
            explanation: "MAP ức chế hô hấp của rau quả tươi, giữ chúng tươi lâu hơn trong siêu thị."
        },
        {
            type: "multiple",
            question: "Nhược điểm của phương pháp sấy khô bằng phơi nắng tự nhiên là gì?",
            options: [
                "Tốn nhiều chi phí điện năng",
                "Phụ thuộc nhiều vào thời tiết, tốn diện tích sân phơi và dễ bị nhiễm bẩn",
                "Nông sản bị chín quá mức",
                "Không thể áp dụng cho hạt lúa"
            ],
            correct: 1,
            explanation: "Phơi nắng rẻ tiền nhưng năng suất thấp, mất vệ sinh và không kiểm soát được độ ẩm."
        },
        // ── TỰ LUẬN ──────────────────────────────────────────────────────
        {
            type: "essay",
            question: "Vì sao trong nông nghiệp hiện đại người ta khuyến khích tăng cường sử dụng phân bón hữu cơ và phân vi sinh, đồng thời hạn chế lạm dụng phân bón hóa học? Trình bày tác dụng của phân hữu cơ đối với đất trồng.",
            suggested: "1. Khuyến khích hữu cơ, vi sinh vì:\n- An toàn cho sức khỏe con người, tạo ra nông sản sạch.\n- Thân thiện với môi trường, không làm ô nhiễm đất và nước ngầm.\n- Giúp hệ sinh thái vi sinh vật trong đất phát triển bền vững.\n\n2. Hạn chế phân hóa học vì: Lạm dụng sẽ làm đất bị chua hóa, chai cứng, thoái hóa; diệt vi sinh vật có ích; tồn dư nitrat gây độc cho người.\n\n3. Tác dụng của phân hữu cơ với đất:\n- Cung cấp chất mùn, làm đất tơi xốp, giữ nước và giữ phân tốt.\n- Cải tạo kết cấu đất, tăng độ phì nhiêu.\n- Cung cấp thức ăn cho vi sinh vật đất hoạt động.",
            points: 25,
            explanation: "AI chấm: Giải thích được lí do khuyến khích (an toàn, bền vững) (10đ); Lí do hạn chế hóa học (thoái hóa đất, ô nhiễm) (5đ); Tác dụng của phân hữu cơ (tạo mùn, tơi xốp, cải tạo đất) (10đ)."
        },
        {
            type: "essay",
            question: "Hãy trình bày nguyên tắc '4 đúng' trong việc sử dụng thuốc bảo vệ thực vật hóa học. Lấy ví dụ minh họa cho nguyên tắc 'Đúng lúc'.",
            suggested: "Nguyên tắc 4 đúng gồm:\n1. Đúng thuốc: Xác định đúng loại sâu/bệnh để mua đúng loại thuốc đặc trị. Không dùng thuốc cấm.\n2. Đúng lúc: Phun khi sâu non mới nở (tuổi 1, 2) sức đề kháng yếu; phun vào lúc trời mát (sáng sớm hoặc chiều tối), không phun khi trời mưa to hay nắng gắt.\n3. Đúng nồng độ và liều lượng: Pha đúng tỉ lệ hướng dẫn trên bao bì, không tự ý tăng liều gây độc hại hay giảm liều gây lờn thuốc.\n4. Đúng cách: Phun đều lên lá, thân hoặc những nơi sâu bệnh tập trung. Đảm bảo trang bị đồ bảo hộ.\n\n- Ví dụ 'Đúng lúc': Phun thuốc trị rầy nâu khi rầy mới nở (rầy cám) sẽ hiệu quả cao nhất. Đồng thời, phải tuân thủ 'thời gian cách li' (ngừng phun thuốc trước khi thu hoạch 10-15 ngày) để đảm bảo an toàn thực phẩm.",
            points: 25,
            explanation: "AI chấm: Nêu đầy đủ và giải thích ngắn gọn 4 nguyên tắc (Đúng thuốc, lúc, liều lượng, cách) (16đ). Cho ví dụ đúng lúc/thời gian cách li hợp lí (9đ)."
        },
        {
            type: "essay",
            question: "Nông sản sau khi thu hoạch nếu không được bảo quản đúng cách sẽ rất nhanh bị hư hỏng.\nHãy cho biết các nguyên nhân gây hư hỏng nông sản. Trình bày những ưu điểm của công nghệ bảo quản lạnh đối với rau, hoa, quả tươi.",
            suggested: "1. Nguyên nhân gây hư hỏng:\n- Do hô hấp của bản thân nông sản (tiêu hao dinh dưỡng, sinh nhiệt, thoát hơi nước làm nông sản héo).\n- Do vi sinh vật (nấm mốc, vi khuẩn) xâm nhập gây thối rữa.\n- Do côn trùng, dịch hại (chuột, mọt) cắn phá.\n- Do điều kiện môi trường bất lợi (nhiệt độ cao, độ ẩm cao).\n\n2. Ưu điểm của công nghệ bảo quản lạnh:\n- Nhiệt độ thấp (từ 0 đến 5 độ C) giúp kìm hãm mạnh mẽ quá trình hô hấp của tế bào thực vật.\n- Ức chế sự sinh sản và phát triển của hầu hết các vi sinh vật và nấm bệnh gây thối hỏng.\n- Giữ được màu sắc, độ tươi, hương vị tự nhiên và giá trị dinh dưỡng của rau quả trong thời gian dài.\n- Dễ dàng ứng dụng ở quy mô công nghiệp (kho lạnh) và hộ gia đình (tủ lạnh).",
            points: 25,
            explanation: "AI chấm: Nêu được các nguyên nhân (hô hấp sinh lí, vi sinh vật, dịch hại) (12đ). Nêu ưu điểm bảo quản lạnh (ức chế hô hấp, ức chế vi sinh vật, giữ độ tươi) (13đ)."
        }
    ]
};
