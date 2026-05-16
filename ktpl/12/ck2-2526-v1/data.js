// data.js – KIỂM TRA CUỐI KÌ II – KTPL 12 (KNTT) – 2025-2026
// Chương trình GDPT 2018 | Sách Kết Nối Tri Thức với Cuộc Sống
// Nội dung HK2: Hội nhập kinh tế quốc tế, Pháp luật về an sinh xã hội, bảo vệ môi trường, quốc phòng an ninh
// 28 câu TN (×0,25đ = 7đ) + 3 câu TL (×1đ = 3đ) | 45 phút

window.quizData = {
    title: "Kiểm tra Cuối Học Kì II – Kinh tế và Pháp luật 12 (Kết nối tri thức) 2025-2026",
    config: {
        testDuration: 2700,
        examLayout: {
            multiple: { count: 28, pointsPerQ: 0.25 },
            essay: { count: 3, pointsPerQ: 1.0 }
        }
    },
    questions: [
        // ── HỘI NHẬP KINH TẾ QUỐC TẾ ───────────────────────────────────────
        {
            type: "multiple",
            question: "Hội nhập kinh tế quốc tế là quá trình quốc gia gắn kết nền kinh tế của mình với:",
            options: [
                "Nền kinh tế của một tỉnh lân cận",
                "Nền kinh tế khu vực và thế giới thông qua các nỗ lực tự do hóa thương mại, mở cửa nền kinh tế",
                "Hệ thống chính trị của các nước lớn",
                "Chỉ các nước xã hội chủ nghĩa"
            ],
            correct: 1,
            explanation: "Hội nhập kinh tế quốc tế là sự gắn kết vào kinh tế thế giới, loại bỏ dần các rào cản thương mại."
        },
        {
            type: "multiple",
            question: "Tổ chức thương mại lớn nhất thế giới mà Việt Nam gia nhập năm 2007 là:",
            options: ["ASEAN", "APEC", "WTO", "IMF"],
            correct: 2,
            explanation: "WTO (Tổ chức Thương mại Thế giới) là tổ chức chi phối phần lớn thương mại toàn cầu, Việt Nam gia nhập năm 2007 (thành viên thứ 150)."
        },
        {
            type: "multiple",
            question: "Tác động TÍCH CỰC của hội nhập kinh tế quốc tế đối với Việt Nam là:",
            options: [
                "Làm suy yếu hoàn toàn các doanh nghiệp trong nước",
                "Tăng cường thu hút vốn đầu tư nước ngoài (FDI), mở rộng thị trường xuất khẩu, tiếp thu công nghệ tiên tiến",
                "Gia tăng nguy cơ chiến tranh",
                "Đánh mất hoàn toàn bản sắc văn hóa dân tộc"
            ],
            correct: 1,
            explanation: "Hội nhập mang lại nhiều cơ hội về vốn, công nghệ, kinh nghiệm quản lý và thị trường."
        },
        {
            type: "multiple",
            question: "Thách thức lớn nhất đối với các doanh nghiệp Việt Nam khi hội nhập kinh tế quốc tế là gì?",
            options: [
                "Thiếu nguồn lao động phổ thông",
                "Áp lực cạnh tranh gay gắt từ các doanh nghiệp nước ngoài ngay trên sân nhà",
                "Thị trường tiêu thụ thu hẹp lại",
                "Không được phép xuất khẩu hàng hóa"
            ],
            correct: 1,
            explanation: "Khi mở cửa, hàng rào thuế quan giảm, hàng hóa nước ngoài tràn vào gây sức ép lớn cho doanh nghiệp nội địa."
        },
        {
            type: "multiple",
            question: "Mục đích của việc kí kết các Hiệp định Thương mại Tự do (FTA) là gì?",
            options: [
                "Tăng thuế xuất nhập khẩu để bảo vệ sản xuất trong nước",
                "Cắt giảm và tiến tới xóa bỏ hàng rào thuế quan và phi thuế quan nhằm tạo thuận lợi cho thương mại và đầu tư",
                "Cấm nhập khẩu các mặt hàng xa xỉ",
                "Phân chia lãnh thổ kinh tế"
            ],
            correct: 1,
            explanation: "FTA (Free Trade Agreement) nhằm tự do hóa thương mại, giảm hoặc xóa bỏ thuế quan giữa các nước kí kết."
        },
        // ── PHÁP LUẬT VỀ AN SINH XÃ HỘI ────────────────────────────────────
        {
            type: "multiple",
            question: "An sinh xã hội là hệ thống các chính sách của Nhà nước nhằm mục đích gì?",
            options: [
                "Tăng thu ngân sách nhà nước",
                "Bảo vệ người dân trước những rủi ro, giảm sút thu nhập, đảm bảo mức sống tối thiểu",
                "Khuyến khích người dân làm giàu nhanh chóng",
                "Xây dựng quân đội tinh nhuệ"
            ],
            correct: 1,
            explanation: "An sinh xã hội (bảo hiểm, trợ cấp...) giúp bảo vệ những người yếu thế, gặp rủi ro (ốm đau, thai sản, tai nạn, thất nghiệp...)."
        },
        {
            type: "multiple",
            question: "Trụ cột cơ bản và quan trọng nhất của hệ thống an sinh xã hội ở nước ta hiện nay là:",
            options: ["Bảo hiểm xã hội và bảo hiểm y tế", "Cứu trợ thiên tai", "Hỗ trợ nhà ở", "Giảm nghèo đa chiều"],
            correct: 0,
            explanation: "Bảo hiểm xã hội (BHXH) và bảo hiểm y tế (BHYT) là hai trụ cột chính đảm bảo an sinh lâu dài."
        },
        {
            type: "multiple",
            question: "Loại bảo hiểm nào bắt buộc áp dụng đối với người lao động làm việc theo hợp đồng lao động từ đủ 1 tháng trở lên?",
            options: ["Bảo hiểm nhân thọ", "Bảo hiểm xã hội bắt buộc", "Bảo hiểm tài sản", "Bảo hiểm hưu trí tự nguyện"],
            correct: 1,
            explanation: "Luật BHXH quy định người lao động có hợp đồng từ 1 tháng trở lên phải tham gia BHXH bắt buộc."
        },
        {
            type: "multiple",
            question: "Chế độ nào sau đây KHÔNG thuộc Bảo hiểm xã hội bắt buộc?",
            options: ["Ốm đau, thai sản", "Tai nạn lao động, bệnh nghề nghiệp", "Bảo hiểm xe cơ giới", "Hưu trí, tử tuất"],
            correct: 2,
            explanation: "Bảo hiểm xe cơ giới là bảo hiểm tài sản/trách nhiệm dân sự, không thuộc BHXH."
        },
        {
            type: "multiple",
            question: "Hành vi nào sau đây vi phạm pháp luật về an sinh xã hội?",
            options: [
                "Người lao động tự nguyện tham gia BHXH",
                "Doanh nghiệp trốn đóng, chậm đóng BHXH cho người lao động",
                "Khai báo trung thực để nhận tiền trợ cấp thất nghiệp",
                "Chăm sóc sức khỏe định kỳ bằng BHYT"
            ],
            correct: 1,
            explanation: "Doanh nghiệp có nghĩa vụ đóng BHXH, việc trốn đóng là vi phạm pháp luật, xâm phạm quyền lợi người lao động."
        },
        // ── PHÁP LUẬT VỀ BẢO VỆ MÔI TRƯỜNG ────────────────────────────────
        {
            type: "multiple",
            question: "Theo pháp luật Việt Nam, bảo vệ môi trường là sự nghiệp của ai?",
            options: [
                "Chỉ là trách nhiệm của Nhà nước",
                "Chỉ là trách nhiệm của Bộ Tài nguyên và Môi trường",
                "Là sự nghiệp của toàn dân, quyền và trách nhiệm của mọi cơ quan, tổ chức, cộng đồng dân cư và cá nhân",
                "Là trách nhiệm của các doanh nghiệp"
            ],
            correct: 2,
            explanation: "Luật Bảo vệ môi trường quy định đây là trách nhiệm chung của toàn xã hội."
        },
        {
            type: "multiple",
            question: "Nguyên tắc 'Người gây ô nhiễm phải trả tiền' trong bảo vệ môi trường có ý nghĩa gì?",
            options: [
                "Bất kì ai có tiền đều được quyền gây ô nhiễm",
                "Người xả thải phải nộp phí bảo vệ môi trường, người gây thiệt hại phải bồi thường",
                "Chính phủ sẽ trả tiền để xử lí ô nhiễm thay cho doanh nghiệp",
                "Khuyến khích gây ô nhiễm để thu được nhiều tiền phạt"
            ],
            correct: 1,
            explanation: "Đây là nguyên tắc cốt lõi: tổ chức/cá nhân hưởng lợi từ khai thác môi trường hoặc gây ô nhiễm phải chịu chi phí khắc phục."
        },
        {
            type: "multiple",
            question: "Hành vi nào sau đây bị NGHIÊM CẤM theo Luật Bảo vệ môi trường?",
            options: [
                "Phân loại rác thải tại nguồn",
                "Sử dụng năng lượng tái tạo (gió, mặt trời)",
                "Xả nước thải chưa qua xử lí đạt quy chuẩn kĩ thuật ra môi trường",
                "Trồng cây xanh ở nơi công cộng"
            ],
            correct: 2,
            explanation: "Nước thải công nghiệp, sinh hoạt phải được xử lí đạt chuẩn trước khi xả ra môi trường tự nhiên."
        },
        {
            type: "multiple",
            question: "Hoạt động 'Đánh giá tác động môi trường (ĐTM)' được thực hiện khi nào?",
            options: [
                "Sau khi nhà máy đã hoạt động được 5 năm",
                "Khi nhà máy bị phát hiện gây ô nhiễm",
                "Trong giai đoạn chuẩn bị (trước khi phê duyệt/cấp phép) của một dự án đầu tư có nguy cơ tác động xấu đến môi trường",
                "Khi dự án đã hoàn thành và chuẩn bị giải thể"
            ],
            correct: 2,
            explanation: "ĐTM (EIA) là công cụ phòng ngừa, phải làm trước khi triển khai dự án để dự báo và đề xuất biện pháp giảm thiểu ô nhiễm."
        },
        {
            type: "multiple",
            question: "Để giảm thiểu rác thải nhựa, pháp luật khuyến khích công dân thực hiện hành động nào?",
            options: [
                "Đốt rác thải nhựa ngoài trời",
                "Chôn lấp rác thải nhựa xuống đất",
                "Thực hiện nguyên tắc 3R (Giảm thiểu - Tái sử dụng - Tái chế)",
                "Vứt rác xuống sông suối cho trôi đi"
            ],
            correct: 2,
            explanation: "3R (Reduce - Reuse - Recycle) là chiến lược hiệu quả nhất để quản lý rác thải nhựa."
        },
        // ── PHÁP LUẬT VỀ QUỐC PHÒNG, AN NINH ──────────────────────────────
        {
            type: "multiple",
            question: "Bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa là sự nghiệp của ai?",
            options: ["Của riêng Quân đội nhân dân", "Của riêng Công an nhân dân", "Của toàn dân", "Của lực lượng dân quân tự vệ"],
            correct: 2,
            explanation: "Hiến pháp quy định: Bảo vệ Tổ quốc là sự nghiệp của toàn dân. Quân đội và Công an là lực lượng nòng cốt."
        },
        {
            type: "multiple",
            question: "Nội dung nào sau đây phản ánh đúng bản chất của nền quốc phòng toàn dân ở nước ta?",
            options: [
                "Là nền quốc phòng mang tính chất hiếu chiến, đe dọa các nước khác",
                "Là nền quốc phòng mang tính chất hòa bình, tự vệ, do nhân dân xây dựng và bảo vệ nhân dân",
                "Chỉ dựa vào sự viện trợ quân sự của nước ngoài",
                "Tập trung toàn bộ nguồn lực kinh tế để mua sắm vũ khí"
            ],
            correct: 1,
            explanation: "Việt Nam thực hiện chính sách quốc phòng mang tính chất hòa bình, tự vệ, không đe dọa sử dụng vũ lực trong quan hệ quốc tế."
        },
        {
            type: "multiple",
            question: "Luật Nghĩa vụ quân sự quy định độ tuổi gọi công dân nhập ngũ trong thời bình bình thường là:",
            options: ["Từ đủ 18 tuổi đến hết 25 tuổi", "Từ đủ 17 tuổi đến hết 27 tuổi", "Từ đủ 18 tuổi đến hết 30 tuổi", "Từ đủ 20 tuổi đến hết 25 tuổi"],
            correct: 0,
            explanation: "Độ tuổi gọi nhập ngũ bình thường là 18-25. Nếu học cao đẳng/đại học và đã được tạm hoãn thì kéo dài đến hết 27 tuổi."
        },
        {
            type: "multiple",
            question: "Hành vi nào sau đây vi phạm pháp luật về quốc phòng, an ninh?",
            options: [
                "Khám sức khỏe nghĩa vụ quân sự đúng lịch",
                "Tự ý phát tán bí mật nhà nước, bí mật quân sự lên mạng xã hội",
                "Tham gia lực lượng dân quân tự vệ ở địa phương",
                "Học tập môn Giáo dục Quốc phòng - An ninh tại trường"
            ],
            correct: 1,
            explanation: "Tiết lộ bí mật quân sự, an ninh quốc gia là tội phạm đặc biệt nghiêm trọng."
        },
        {
            type: "multiple",
            question: "An ninh mạng là sự bảo đảm hoạt động trên không gian mạng không gây phương hại đến:",
            options: [
                "Quyền tự do phát ngôn tuyệt đối của cá nhân",
                "An ninh quốc gia, trật tự an toàn xã hội, quyền và lợi ích hợp pháp của cơ quan, tổ chức, cá nhân",
                "Tốc độ truy cập Internet",
                "Lợi nhuận của các công ty viễn thông"
            ],
            correct: 1,
            explanation: "Luật An ninh mạng (2018) quy định không gian mạng phải an toàn, không xâm phạm lợi ích quốc gia và hợp pháp của công dân."
        },
        {
            type: "multiple",
            question: "Trong bối cảnh hội nhập quốc tế, chiến lược bảo vệ Tổ quốc của Đảng ta kết hợp chặt chẽ giữa hai yếu tố nào?",
            options: [
                "Quân sự và ngoại giao",
                "Kinh tế với quốc phòng, an ninh",
                "Văn hóa và giáo dục",
                "Công nghiệp và nông nghiệp"
            ],
            correct: 1,
            explanation: "Mỗi bước phát triển kinh tế - xã hội phải gắn liền với củng cố tiềm lực quốc phòng, an ninh (kinh tế mạnh thì quốc phòng mới vững)."
        },
        {
            type: "multiple",
            question: "Tình huống: Anh B (đủ 19 tuổi) có lệnh gọi nhập ngũ nhưng cố tình dùng hóa chất làm tổn thương mắt để trốn tránh. Hành vi của B bị xử lý thế nào?",
            options: [
                "Được miễn nghĩa vụ vì bị thương",
                "Bị xử lí kỉ luật, xử phạt hành chính, nếu nghiêm trọng có thể bị truy cứu trách nhiệm hình sự về tội trốn tránh nghĩa vụ quân sự",
                "Chỉ bị nhắc nhở",
                "Giao cho gia đình giáo dục"
            ],
            correct: 1,
            explanation: "Gian dối, tự làm tổn thương sức khỏe để trốn nghĩa vụ quân sự là vi phạm pháp luật, bị xử phạt nghiêm minh."
        },
        // ── TỔNG HỢP & ỨNG DỤNG ───────────────────────────────────────────
        {
            type: "multiple",
            question: "Chính sách bảo hiểm y tế toàn dân của Nhà nước ta thể hiện rõ nhất bản chất gì của chế độ?",
            options: ["Tính nhân đạo, ưu việt và công bằng xã hội của chế độ XHCN", "Sự phát triển của y tế tư nhân", "Sự bắt buộc áp đặt", "Cơ chế thị trường tự do tuyệt đối"],
            correct: 0,
            explanation: "BHYT toàn dân (Nhà nước hỗ trợ người nghèo, trẻ em...) thể hiện tính nhân văn sâu sắc của nhà nước XHCN."
        },
        {
            type: "multiple",
            question: "Một trong những điều kiện quan trọng để Việt Nam hội nhập kinh tế quốc tế thành công là:",
            options: [
                "Đóng cửa các ngành công nghiệp non trẻ",
                "Nâng cao năng lực cạnh tranh của doanh nghiệp và chất lượng nguồn nhân lực",
                "Chỉ xuất khẩu tài nguyên thô",
                "Bảo hộ tuyệt đối sản xuất trong nước"
            ],
            correct: 1,
            explanation: "Khi hàng rào thuế quan gỡ bỏ, chỉ có chất lượng sản phẩm và nguồn nhân lực cao mới giúp doanh nghiệp tồn tại và phát triển."
        },
        {
            type: "multiple",
            question: "Để bảo vệ môi trường trong phát triển kinh tế, Việt Nam đang hướng tới mô hình kinh tế nào?",
            options: [
                "Kinh tế tuyến tính (khai thác - sản xuất - thải bỏ)",
                "Kinh tế tuần hoàn (tái tạo, tái chế, tái sử dụng)",
                "Kinh tế tự cung tự cấp",
                "Kinh tế dựa hoàn toàn vào khai khoáng"
            ],
            correct: 1,
            explanation: "Kinh tế tuần hoàn (Circular Economy) giúp tối ưu hóa tài nguyên và giảm triệt để rác thải ra môi trường."
        },
        // ── TỰ LUẬN ──────────────────────────────────────────────────────
        {
            type: "essay",
            question: "Công ty M (doanh nghiệp sản xuất dệt may) kí hợp đồng xuất khẩu sang thị trường châu Âu (EU) nhờ Hiệp định EVFTA. Tuy nhiên, công ty lại xả lén nước thải nhuộm chưa qua xử lí ra con mương gần đó để tiết kiệm chi phí.\n\na) Em hãy đánh giá hành vi của Công ty M dưới góc độ pháp luật bảo vệ môi trường và hội nhập kinh tế quốc tế.\nb) Nêu 2 chế tài (hình thức xử lí) mà công ty M có thể phải chịu theo quy định pháp luật.",
            suggested: "a) Đánh giá:\n- Về môi trường: Hành vi xả thải lén lút là vi phạm nghiêm trọng Luật Bảo vệ môi trường, gây ô nhiễm nguồn nước, ảnh hưởng sức khỏe cộng đồng.\n- Về hội nhập: Các hiệp định như EVFTA yêu cầu rất cao về phát triển bền vững và bảo vệ môi trường. Hành vi này làm xấu hình ảnh doanh nghiệp Việt, có nguy cơ bị đối tác EU hủy hợp đồng, tẩy chay hàng hóa.\n\nb) Chế tài xử lí:\n- Bị phạt tiền (xử phạt vi phạm hành chính) với mức rất cao, có thể bị đình chỉ hoạt động có thời hạn.\n- Bị buộc phải thực hiện các biện pháp khắc phục hậu quả (khôi phục lại tình trạng môi trường ban đầu, bồi thường thiệt hại cho người dân xung quanh). Nếu nghiêm trọng có thể bị truy cứu trách nhiệm hình sự (Tội gây ô nhiễm môi trường).",
            points: 25,
            explanation: "AI chấm: Đánh giá đúng vi phạm luật môi trường (8đ), vi phạm cam kết hội nhập/mất uy tín (7đ). Nêu được chế tài phạt tiền/đình chỉ (5đ) và buộc khắc phục hậu quả/bồi thường (5đ)."
        },
        {
            type: "essay",
            question: "Hội nhập kinh tế quốc tế mang lại những cơ hội và thách thức gì cho học sinh, thanh niên Việt Nam hiện nay? Là một học sinh lớp 12, em cần chuẩn bị những hành trang gì để đáp ứng yêu cầu của thời kì hội nhập?",
            suggested: "1. Cơ hội và thách thức:\n- Cơ hội: Có nhiều cơ hội việc làm tại các tập đoàn đa quốc gia; được tiếp cận nền giáo dục, khoa học công nghệ tiên tiến của thế giới; nâng cao thu nhập và mức sống.\n- Thách thức: Áp lực cạnh tranh gay gắt về trình độ, kĩ năng với lao động nước ngoài ngay trên sân nhà; nguy cơ thất nghiệp nếu không có chuyên môn; dễ bị ảnh hưởng bởi văn hóa độc hại nếu thiếu bản lĩnh.\n\n2. Hành trang cần chuẩn bị:\n- Trau dồi kiến thức chuyên môn vững vàng, đặc biệt là kĩ năng thực hành.\n- Học tốt ngoại ngữ (tiếng Anh) và tin học (công nghệ thông tin).\n- Rèn luyện 'kĩ năng mềm' (giao tiếp, làm việc nhóm, tư duy phản biện, kĩ năng hội nhập).\n- Giữ gìn bản sắc văn hóa dân tộc, có đạo đức, ý thức kỉ luật và lòng yêu nước.",
            points: 25,
            explanation: "AI chấm: Phân tích được Cơ hội (việc làm, tiếp cận tri thức) (6đ) và Thách thức (cạnh tranh, đào thải) (6đ). Nêu đủ các hành trang: Kiến thức, Ngoại ngữ/Tin học, Kĩ năng mềm, Đạo đức/Bản sắc (13đ)."
        },
        {
            type: "essay",
            question: "Giải thích tại sao bảo vệ môi trường và bảo đảm an sinh xã hội lại là điều kiện bắt buộc để thực hiện mục tiêu 'Phát triển bền vững' của quốc gia?",
            suggested: "Phát triển bền vững là sự phát triển đáp ứng nhu cầu hiện tại mà không làm tổn hại đến khả năng đáp ứng nhu cầu của thế hệ tương lai. Nó dựa trên 3 trụ cột: Kinh tế, Xã hội, Môi trường.\n- Về Môi trường: Nếu tăng trưởng kinh tế bằng mọi giá, hủy hoại tài nguyên, ô nhiễm môi trường thì trong tương lai sẽ không còn tài nguyên để sản xuất, con người sẽ tốn chi phí khổng lồ để chữa bệnh và khắc phục thiên tai. Do đó, bảo vệ môi trường là điều kiện sống còn.\n- Về An sinh xã hội: Tăng trưởng kinh tế phải đi đôi với tiến bộ, công bằng xã hội. An sinh xã hội giúp xóa đói giảm nghèo, bảo vệ người yếu thế, rút ngắn khoảng cách giàu nghèo. Nếu kinh tế phát triển mà xã hội bất bình đẳng, nhiều người bần cùng hóa thì sẽ gây bất ổn chính trị, xã hội, phá vỡ sự bền vững.",
            points: 25,
            explanation: "AI chấm: Định nghĩa được Phát triển bền vững (3 trụ cột) (5đ). Giải thích vai trò của Môi trường (tránh cạn kiệt tài nguyên, hậu quả sinh thái) (10đ) và An sinh xã hội (công bằng, ổn định chính trị - xã hội) (10đ)."
        }
    ]
};
