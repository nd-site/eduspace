const quizData = {
    config: {
        subject: "GIÁO DỤC QUỐC PHÒNG AN NINH 10",
        info: "Học kỳ I (2025 - 2026) - Đầy đủ các bài 4, 5, 6"
    },
    questions: [
        // --- BÀI 4: PHÒNG CHỐNG VI PHẠM PHÁP LUẬT VỀ TRẬT TỰ ATGT ---
        {
            type: "multiple",
            question: "Hệ thống văn bản quy phạm pháp luật về trật tự an toàn giao thông do chủ thể nào ban hành?",
            options: ["Các tổ chức xã hội", "Nhà nước", "Lực lượng công an", "Các trường học"],
            correct: 1,
            explanation: "Nhà nước là chủ thể duy nhất có quyền ban hành văn bản quy phạm pháp luật."
        },
        {
            type: "multiple",
            question: "Pháp luật về trật tự an toàn giao thông điều chỉnh hoạt động trên các loại hình giao thông nào sau đây?",
            options: ["Đường bộ, đường sắt, đường thủy, đường hàng không", "Đường bộ, đường sắt, đường biển, đường vũ trụ", "Đường bộ, đường hầm, đường thủy nội địa, đường hàng không", "Đường bộ, đường sắt, đường ống, đường hàng không"],
            correct: 0,
            explanation: "Điều chỉnh 4 loại hình giao thông chính: đường bộ, đường sắt, đường thủy và đường hàng không."
        },
        {
            type: "multiple",
            question: "Vi phạm pháp luật về trật tự an toàn giao thông là hành vi trái pháp luật, có lỗi và do người có năng lực nào thực hiện?",
            options: ["Năng lực tài chính", "Năng lực thể chất", "Năng lực trách nhiệm pháp lý", "Năng lực chuyên môn"],
            correct: 2,
            explanation: "Người thực hiện phải có năng lực trách nhiệm pháp lý theo quy định của pháp luật."
        },
        {
            type: "multiple",
            question: "Đâu không phải là một dấu hiệu để xác định hành vi vi phạm pháp luật về trật tự an toàn giao thông?",
            options: ["Hành vi trái với quy định của pháp luật", "Có lỗi của người thực hiện hành vi", "Người thực hiện phải có thu nhập cao", "Hành vi của người tham gia giao thông có thể nhận biết được"],
            correct: 2,
            explanation: "Thu nhập cao không phải là dấu hiệu để xác định vi phạm pháp luật."
        },
        {
            type: "multiple",
            question: "Hoạt động hướng đến việc triệt tiêu các nguyên nhân, điều kiện của vi phạm pháp luật về trật tự an toàn giao thông được gọi là gì?",
            options: ["Đấu tranh chống vi phạm", "Phòng ngừa vi phạm", "Xử lý vi phạm", "Cưỡng chế thi hành"],
            correct: 1,
            explanation: "Phòng ngừa là hoạt động nhằm loại bỏ các nguyên nhân dẫn đến vi phạm trước khi nó xảy ra."
        },
        {
            type: "multiple",
            question: "Hoạt động nào sau đây thuộc về 'Đấu tranh chống vi phạm pháp luật về trật tự an toàn giao thông'?",
            options: ["Tuyên truyền giáo dục pháp luật", "Giảng dạy luật giao thông trong trường học", "Áp dụng các biện pháp xử lý hành vi vi phạm", "Vận động người thân đội mũ bảo hiểm"],
            correct: 2,
            explanation: "Đấu tranh bao gồm việc phát hiện và áp dụng các biện pháp xử lý đối với hành vi vi phạm."
        },
        {
            type: "multiple",
            question: "Một trong những trách nhiệm của học sinh khi tham gia giao thông là gì?",
            options: ["Tự ý thay đổi kết cấu xe để đi nhanh hơn", "Tuyên truyền, vận động người thân tham gia phòng ngừa vi phạm", "Tham gia điều tiết giao thông thay cho cảnh sát", "Truy đuổi người vi phạm giao thông trên đường"],
            correct: 1,
            explanation: "Học sinh có trách nhiệm tuyên truyền và vận động người thân chấp hành luật lệ."
        },
        {
            type: "multiple",
            question: "Người tham gia giao thông phải đảm bảo điều kiện nào về mặt nhận thức theo quy định?",
            options: ["Có trình độ đại học trở lên", "Không mắc bệnh tâm thần và nhận thức được hậu quả hành vi", "Đã từng tham gia các khóa huấn luyện quân sự", "Phải là người đứng đầu hộ gia đình"],
            correct: 1,
            explanation: "Cần có năng lực hành vi dân sự và nhận thức đầy đủ về hành vi của mình."
        },
        {
            type: "multiple",
            question: "Biển báo hiệu giao thông đường bộ thuộc về nhóm thiết bị nào trong dạy học?",
            options: ["Học liệu", "Thiết bị dạy học", "Tài liệu tham khảo", "Văn bản pháp luật"],
            correct: 1,
            explanation: "Biển báo là công cụ hỗ trợ trực quan trong quá trình giảng dạy ATGT."
        },
        {
            type: "multiple",
            question: "Đối tượng tuyên truyền về an toàn giao thông của học sinh bao gồm những ai?",
            options: ["Chỉ các bạn cùng lớp", "Chỉ bố mẹ và anh chị em", "Người thân trong gia đình và bạn bè", "Lực lượng cảnh sát giao thông"],
            correct: 2,
            explanation: "Học sinh tuyên truyền rộng rãi cho cả bạn bè và người thân."
        },
        {
            type: "multiple",
            question: "Sự khác biệt cơ bản nhất giữa 'Phòng ngừa' và 'Đấu tranh' trong vi phạm trật tự an toàn giao thông là gì?",
            options: ["Phòng ngừa là việc của công an, đấu tranh là việc của học sinh", "Phòng ngừa tập trung vào triệt tiêu nguyên nhân, Đấu tranh tập trung vào xử lý hành vi đã xảy ra", "Phòng ngừa dùng vũ lực, Đấu tranh dùng lời nói", "Cả hai hoạt động đều giống hệt nhau về phương pháp"],
            correct: 1,
            explanation: "Phòng ngừa mang tính ngăn chặn từ xa, đấu tranh mang tính xử lý trực tiếp."
        },
        {
            type: "multiple",
            question: "Tại sao người thực hiện hành vi vi phạm giao thông phải là người 'có lỗi'?",
            options: ["Vì nếu không có lỗi (do sự kiện bất khả kháng) thì không coi là vi phạm hành chính", "Vì người có lỗi mới có tiền nộp phạt", "Vì lỗi là yếu tố duy nhất cấu thành vi phạm", "Vì pháp luật chỉ phạt những người cố ý vi phạm"],
            correct: 0,
            explanation: "Lỗi là yếu tố chủ quan bắt buộc để xác định một hành vi là vi phạm pháp luật."
        },
        {
            type: "multiple",
            question: "Hành vi nào sau đây thể hiện 'Văn hóa giao thông' của học sinh?",
            options: ["Bấm còi liên tục để xin đường khi tắc đường", "Giúp đỡ người già và trẻ em khi qua đường", "Đi hàng ba để nói chuyện cho vui", "Vượt đèn vàng để tiết kiệm thời gian"],
            correct: 1,
            explanation: "Văn hóa giao thông thể hiện qua những hành động đẹp và tinh thần hỗ trợ người khác."
        },
        {
            type: "multiple",
            question: "Câu nào giải thích đúng về 'Hành vi có thể nhận biết được' trong các dấu hiệu vi phạm?",
            options: ["Là hành vi suy nghĩ trong đầu của người lái xe", "Là hành vi thể hiện ra bên ngoài thế giới khách quan (như vượt đèn đỏ, lạng lách)", "Là hành vi được ghi lại trong sách giáo khoa", "Là hành vi dự định sẽ làm trong tương lai"],
            correct: 1,
            explanation: "Chỉ những hành động biểu hiện ra bên ngoài mới có thể xác định là vi phạm."
        },
        {
            type: "multiple",
            question: "Việc học sinh nhắc nhở người thân đội mũ bảo hiểm khi đi xe máy có ý nghĩa gì?",
            options: ["Giúp người thân tránh bị công an bắt", "Thể hiện quyền lực của học sinh trong gia đình", "Là biện pháp phòng ngừa, góp phần giảm thiểu rủi ro và vi phạm", "Là hành động đấu tranh trấn áp tội phạm"],
            correct: 2,
            explanation: "Nhắc nhở là hình thức tuyên truyền và phòng ngừa tai nạn hiệu quả."
        },
        {
            type: "multiple",
            question: "Theo bài học, tại sao cần phải phối hợp với các lực lượng chức năng?",
            options: ["Để được miễn trừ trách nhiệm khi vi phạm", "Để bảo đảm trật tự an toàn giao thông hiệu quả hơn", "Để lấy thành tích thi đua cho lớp", "Để được nổi tiếng trên mạng xã hội"],
            correct: 1,
            explanation: "Sự phối hợp giúp nâng cao hiệu quả quản lý và đảm bảo an toàn chung."
        },
        {
            type: "multiple",
            question: "Biện pháp nào dưới đây là hình thức 'Sân khấu hóa' trong tuyên truyền giao thông?",
            options: ["Phát tờ rơi tại ngã tư", "Dán áp phích lên tường", "Diễn kịch, hò, vè về chủ đề an toàn giao thông", "Đọc loa phát thanh của xã"],
            correct: 2,
            explanation: "Sân khấu hóa là dùng nghệ thuật biểu diễn để truyền tải thông điệp."
        },
        {
            type: "multiple",
            question: "Tại sao học sinh cần 'mặc trang phục phù hợp, gọn gàng' khi tham gia giao thông?",
            options: ["Để tránh vướng víu, đảm bảo khả năng quan sát và điều khiển phương tiện an toàn", "Để đẹp đội hình khi đi cùng các bạn", "Để người đi đường chú ý đến mình", "Để thể hiện phong cách thời trang cá nhân"],
            correct: 0,
            explanation: "Trang phục gọn gàng giúp người lái xe dễ dàng thao tác và quan sát."
        },
        {
            type: "multiple",
            question: "Nội dung nào phản ánh đúng mối quan hệ giữa các quy định pháp luật và hành vi của người tham gia giao thông?",
            options: ["Hành vi của người dân luôn đúng, pháp luật phải chạy theo hành vi", "Pháp luật điều chỉnh hành vi, hành vi trái pháp luật sẽ bị xử lý", "Pháp luật chỉ mang tính chất tham khảo, không bắt buộc", "Hành vi giao thông không liên quan đến pháp luật"],
            correct: 1,
            explanation: "Pháp luật đóng vai trò điều chỉnh hành vi của mọi người dân."
        },
        {
            type: "multiple",
            question: "Ý nghĩa của việc 'Tự giác tuân thủ quy định pháp luật' đối với học sinh là gì?",
            options: ["Giúp học sinh không phải học bài môn GDQP", "Hình thành thói quen tốt, bảo vệ tính mạng bản thân và cộng đồng", "Để đối phó với sự kiểm tra của thầy cô giáo", "Để chứng tỏ mình hiểu biết hơn các bạn khác"],
            correct: 1,
            explanation: "Ý nghĩa cao nhất là bảo vệ tính mạng và tạo thói quen tuân thủ pháp luật."
        },
        {
            type: "multiple",
            question: "Trên đường đi học về, bạn A thấy một nhóm thanh niên đang tổ chức đua xe trái phép. Hành động đúng đắn nhất của A là gì?",
            options: ["Đứng lại cổ vũ và quay video đăng lên Facebook", "Tham gia đua cùng cho vui", "Tránh xa khu vực nguy hiểm và báo ngay cho công an hoặc người lớn", "Chạy ra giữa đường chặn xe để khuyên ngăn"],
            correct: 2,
            explanation: "An toàn bản thân là trên hết, sau đó mới đến việc báo cáo cơ quan chức năng."
        },
        {
            type: "multiple",
            question: "Trong một buổi sinh hoạt lớp, em sẽ chọn phương án nào hưởng ứng tháng An toàn giao thông hiệu quả nhất?",
            options: ["Tổ chức cuộc thi 'Rung chuông vàng' tìm hiểu Luật Giao thông", "Yêu cầu tất cả học sinh nghỉ học để đi diễu hành", "Đề nghị nhà trường cấm học sinh đi xe đến trường", "Tổ chức thu tiền phạt các bạn vi phạm để làm quỹ lớp"],
            correct: 0,
            explanation: "Thi tìm hiểu luật là hoạt động giáo dục thiết thực nhất."
        },

        // --- BÀI 5: BẢO VỆ AN NINH QUỐC GIA VÀ BẢO ĐẢM TRẬT TỰ, AN TOÀN XÃ HỘI ---
        {
            type: "multiple",
            question: "Tuyệt đối không thực hiện các hành vi nào dưới đây?",
            options: ["Đe dọa, lừa đảo, trộm cắp, hủy hoại tài sản người khác", "Mượn, vay của bạn bè tiền bạc để tiêu xài cá nhân", "Viết giấy mời họp, đưa thư cho người thân", "Giúp đỡ người khác làm bài tập"],
            correct: 0,
            explanation: "Đây là những hành vi vi phạm pháp luật nghiêm trọng."
        },
        {
            type: "multiple",
            question: "Phạm quyền nào có thể xử lý kịp thời vi phạm pháp luật về an ninh trật tự?",
            options: ["Pháp luật về an ninh trật tự", "Quyết định của chính quyền địa phương", "Tất cả các câu trên", "Không câu nào đúng"],
            correct: 2,
            explanation: "Hệ thống pháp luật và các quyết định hành chính địa phương đều là cơ sở xử lý vi phạm."
        },
        {
            type: "multiple",
            question: "Hành vi nào dưới đây vi phạm pháp luật?",
            options: ["Ăn trộm", "Học tập nghiêm túc", "Tham gia bảo vệ môi trường", "Giúp đỡ người khác"],
            correct: 0,
            explanation: "Ăn trộm là hành vi xâm phạm tài sản và vi phạm pháp luật hình sự/hành chính."
        },
        {
            type: "multiple",
            question: "Công an nhân dân thực hiện nhiệm vụ gì?",
            options: ["Áp dụng pháp luật", "Công an nhân dân", "Dân quân tự vệ", "Kiểm lâm"],
            correct: 0,
            explanation: "Công an nhân dân thực thi và áp dụng pháp luật để bảo vệ an ninh trật tự."
        },
        {
            type: "multiple",
            question: "Trong hệ thống chính trị, chủ thể nào lãnh đạo công tác bảo vệ an ninh quốc gia?",
            options: ["Nhà nước", "Đảng Cộng sản Việt Nam", "Mặt trận Tổ quốc", "Các tổ chức xã hội"],
            correct: 1,
            explanation: "Đảng Cộng sản Việt Nam lãnh đạo tuyệt đối và trực tiếp công tác bảo vệ an ninh quốc gia."
        },
        {
            type: "multiple",
            question: "Nhà nước thực hiện vai trò gì trong công tác bảo vệ an ninh quốc gia?",
            options: ["Lãnh đạo tuyệt đối", "Quản lý xã hội bằng pháp luật", "Trực tiếp chiến đấu vũ trang", "Tuyên truyền miệng"],
            correct: 1,
            explanation: "Nhà nước thực hiện chức năng quản lý, cụ thể hóa đường lối của Đảng thành luật pháp."
        },
        {
            type: "multiple",
            question: "Lực lượng nào làm nòng cốt cùng toàn dân đánh giặc ở địa phương, cơ sở khi có chiến tranh?",
            options: ["Bộ đội chủ lực", "Công an nhân dân", "Dân quân tự vệ", "Bộ đội biên phòng"],
            correct: 2,
            explanation: "Dân quân tự vệ là lực lượng tại chỗ bảo vệ địa phương."
        },
        {
            type: "multiple",
            question: "Một trong những nhiệm vụ cụ thể của công dân là phát hiện và cung cấp kịp thời thông tin liên quan đến hoạt động xâm phạm an ninh quốc gia cho ai?",
            options: ["Bạn bè và người thân", "Chính quyền hoặc cơ quan chuyên trách nơi gần nhất", "Các trang mạng xã hội", "Báo chí nước ngoài"],
            correct: 1,
            explanation: "Công dân cần báo cho cơ quan có thẩm quyền để xử lý kịp thời."
        },
        {
            type: "multiple",
            question: "Hoạt động làm thất bại các hoạt động xâm phạm an ninh quốc gia được gọi là gì?",
            options: ["Bảo bảo trật tự xã hội", "Bảo vệ an ninh quốc gia", "Giữ gìn trật tự công cộng", "Phòng chống tệ nạn xã hội"],
            correct: 1,
            explanation: "Đây là khái niệm cơ bản về bảo vệ an ninh quốc gia."
        },
        {
            type: "multiple",
            question: "Tại sao tình hình bảo vệ an ninh quốc gia hiện nay được đánh giá là diễn biến phức tạp?",
            options: ["Do các nước trên thế giới đã ngừng giao thương", "Do các thế lực thù địch tìm cách xóa bỏ vai trò lãnh đạo của Đảng và chế độ XHCN", "Do dân số thế giới giảm mạnh", "Do không còn xung đột vũ trang"],
            correct: 1,
            explanation: "Sự chống phá của các thế lực thù địch khiến tình hình an ninh luôn tiềm ẩn phức tạp."
        },
        {
            type: "multiple",
            question: "Đặc điểm nổi bật về phương thức hoạt động của các loại tội phạm hiện nay là gì?",
            options: ["Hoạt động công khai", "Chỉ ở vùng sâu vùng xa", "Thủ đoạn ngày càng tinh vi, xảo quyệt", "Giảm dần số lượng"],
            correct: 2,
            explanation: "Tội phạm hiện nay thường sử dụng công nghệ cao và thủ đoạn tinh vi để lẩn tránh."
        },
        {
            type: "multiple",
            question: "Nhiệm vụ của Dân quân tự vệ khác với Quân đội nhân dân ở điểm cơ bản nào?",
            options: ["Trang bị vũ khí", "Hoạt động bảo vệ Đảng, chính quyền và tài sản địa phương, cơ sở", "Chỉ làm nhiệm vụ kinh tế", "Không chịu sự lãnh đạo của Đảng"],
            correct: 1,
            explanation: "Dân quân tự vệ gắn liền với địa phương và cơ sở sản xuất."
        },
        {
            type: "multiple",
            question: "Ý nghĩa của việc công dân phối hợp với chính quyền khắc phục sơ hở, thiếu sót trong thực hiện pháp luật là gì?",
            options: ["Gây khó khăn cơ quan nhà nước", "Thể hiện hành vi vi phạm", "Ngăn chặn hành vi vi phạm pháp luật", "Để lấy tiền thưởng"],
            correct: 2,
            explanation: "Sự giám sát của nhân dân giúp pháp luật được thực thi nghiêm minh hơn."
        },
        {
            type: "multiple",
            question: "Sự khác biệt giữa 'An ninh quốc gia' và 'Trật tự an toàn xã hội' nằm ở đâu?",
            options: ["An ninh quốc gia tập trung chống xâm lược và phá hoại chế độ; trật tự an toàn xã hội tập trung phòng chống tội phạm xã hội", "Để được nhận tiền thưởng", "An ninh quốc gia là việc quân đội; trật tự là việc của dân", "An ninh quốc gia chỉ lo biên giới"],
            correct: 0,
            explanation: "An ninh quốc gia hướng đến sự ổn định chính trị; trật tự an toàn xã hội hướng đến cuộc sống yên bình hàng ngày."
        },
        {
            type: "multiple",
            question: "Khi phát hiện một nhóm người đang tuyên truyền các nội dung sai lệch, chống phá Nhà nước trên mạng, học sinh nên làm gì?",
            options: ["Chia sẻ bài viết", "Vào bình luận tranh cãi", "Tố cáo với cơ quan chức năng hoặc thầy cô, bố mẹ", "Không quan tâm"],
            correct: 2,
            explanation: "Học sinh cần báo cáo kịp thời thay vì tự mình giải quyết hoặc lan truyền thêm."
        },

        // --- BÀI 6: MỘT SỐ HIỂU BIẾT VỀ AN NINH MẠNG ---
        {
            type: "multiple",
            question: "Khái niệm 'An ninh mạng' được hiểu là bảo đảm không gây điều gì cho quốc gia?",
            options: ["Ảnh hưởng", "Thiệt hại", "Nguy hại", "Biến động"],
            correct: 2,
            explanation: "An ninh mạng bảo đảm không gây 'nguy hại' cho an ninh quốc gia."
        },
        {
            type: "multiple",
            question: "Khái niệm 'Mạng' theo bài học dùng để chỉ hệ thống nào sau đây?",
            options: ["Mạng lưới giao thông", "Mạng lưới điện quốc gia", "Hệ thống cơ sở hạ tầng thông tin", "Mạng lưới kênh rạch"],
            correct: 2,
            explanation: "Mạng trong ngữ cảnh này là hạ tầng viễn thông và internet."
        },
        {
            type: "multiple",
            question: "Hành vi nào sau đây bị xem là vi phạm pháp luật về an ninh mạng?",
            options: ["Đăng ảnh cá nhân lên Facebook", "Tham gia các diễn đàn học thuật", "Tuyên truyền, xuyên tạc lịch sử", "Tra cứu tài liệu trên Google"],
            correct: 2,
            explanation: "Tuyên truyền xuyên tạc lịch sử trên không gian mạng là hành vi bị pháp luật nghiêm cấm."
        },
        {
            type: "multiple",
            question: "Mục đích của việc các thế lực thù địch sử dụng không gian mạng là để thực hiện chiến lược gì?",
            options: ["Chiến tranh kinh tế", "Diễn biến hòa bình", "Hợp tác quốc tế", "Bảo vệ môi trường"],
            correct: 1,
            explanation: "Các thế lực phản động sử dụng mạng internet làm công cụ thực hiện Diễn biến hòa bình."
        },
        {
            type: "multiple",
            question: "Mục tiêu cơ bản của Luật An ninh mạng là bảo vệ an ninh quốc gia và đảm bảo điều gì?",
            options: ["An toàn giao thông", "An toàn thông tin", "An ninh lương thực", "An ninh biên giới"],
            correct: 1,
            explanation: "Luật An ninh mạng đi đôi với việc bảo vệ an toàn thông tin."
        },
        {
            type: "multiple",
            question: "Khi sử dụng mạng xã hội, công dân có trách nhiệm gì đối với thông tin cá nhân?",
            options: ["Công khai tất cả", "Cung cấp mật khẩu cho bạn thân", "Bảo mật thông tin cá nhân", "Bán thông tin cho công ty quảng cáo"],
            correct: 2,
            explanation: "Bảo mật thông tin là quyền và nghĩa vụ để tự bảo vệ mình trên không gian mạng."
        },
        {
            type: "multiple",
            question: "Đâu là nội dung bị Luật An ninh mạng nghiêm cấm?",
            options: ["Truyền bá văn hóa ẩm thực", "Thông tin có nội dung khiêu dâm, bạo lực", "Chia sẻ bài giảng trực tuyến", "Đăng tải kết quả học tập"],
            correct: 1,
            explanation: "Các nội dung khiêu dâm, bạo lực, xúc phạm danh dự bị cấm hoàn toàn."
        },
        {
            type: "multiple",
            question: "Các đối tượng sử dụng mạng để lôi kéo học sinh tham gia tệ nạn xã hội nhằm mục đích gì?",
            options: ["Gây dựng phong trào văn nghệ", "Làm tha hóa đạo đức, lối sống, gây mất trật tự xã hội", "Tăng cường kỹ năng sống", "Giải tỏa căng thẳng"],
            correct: 1,
            explanation: "Mục tiêu là làm suy đồi lối sống và gây bất ổn xã hội."
        },
        {
            type: "multiple",
            question: "Tại sao các đối tượng phạm tội lại tập trung vào việc lôi kéo học sinh?",
            options: ["Vì học sinh giàu có", "Vì học sinh dễ bị kích động, thiếu kinh nghiệm xã hội", "Vì học sinh dùng mạng nhiều nhất", "Vì học sinh không bị phạt"],
            correct: 1,
            explanation: "Học sinh là đối tượng tâm lý chưa vững vàng, dễ bị lôi kéo bằng cảm xúc."
        },
        {
            type: "multiple",
            question: "Việc công dân phải cung cấp thông tin liên quan đến việc sử dụng không gian mạng cho cơ quan chức năng khi cần thiết có ý nghĩa gì?",
            options: ["Để bị theo dõi tư nhân", "Phục vụ điều tra, xử lý hành vi vi phạm pháp luật", "Để quảng cáo sản phẩm", "Để thu phí dịch vụ"],
            correct: 1,
            explanation: "Đây là sự hỗ trợ cần thiết để truy tìm và xử lý tội phạm mạng."
        },
        {
            type: "multiple",
            question: "Học sinh không nên tin tưởng tuyệt đối vào nguồn thông tin nào?",
            options: ["Trang web của Chính phủ", "Sách giáo khoa", "Các tài khoản mạng xã hội ẩn danh, không rõ nguồn gốc", "Kênh truyền hình quốc gia"],
            correct: 2,
            explanation: "Thông tin từ nguồn ẩn danh thường chứa nội dung tin giả, lừa đảo hoặc chống phá."
        },
        {
            type: "multiple",
            question: "Tự ý sửa đổi, sao chép, chia sẻ thông tin riêng của người khác mà chưa được phép gây hậu quả gì?",
            options: ["Giúp thông tin nổi tiếng hơn", "Xâm phạm quyền riêng tư và gây thiệt hại uy tín cho người khác", "Tiết kiệm thời gian tìm kiếm", "Được pháp luật khuyến khích"],
            correct: 1,
            explanation: "Đây là hành vi xâm phạm đời tư và có thể bị truy cứu trách nhiệm."
        }
    ]
};