// data.js – KIỂM TRA CUỐI KÌ II – LỊCH SỬ 10 (KNTT) – 2025-2026
// Chương trình GDPT 2018 | Sách Kết Nối Tri Tri thức với Cuộc Sống
// Nội dung HK2: Văn minh Đông Nam Á, Các nền văn minh cổ trên đất nước VN, Khởi nghĩa giành độc lập, Công cuộc bảo vệ Tổ quốc
// 28 câu TN (×0,25đ = 7đ) + 3 câu TL (×1đ = 3đ) | 45 phút

window.quizData = {
    title: "Kiểm tra Cuối Học Kì II – Lịch Sử 10 (Kết nối tri thức) 2025-2026",
    config: {
        testDuration: 2700,
        examLayout: {
            multiple: { count: 28, pointsPerQ: 0.25 },
            essay: { count: 3, pointsPerQ: 1.0 }
        }
    },
    questions: [
        // ── VĂN MINH ĐÔNG NAM Á ──────────────────────────────────────────
        {
            type: "multiple",
            question: "Cơ sở tự nhiên nào đóng vai trò quan trọng nhất đối với sự hình thành văn minh Đông Nam Á?",
            options: [
                "Khí hậu nhiệt đới gió mùa và hệ thống sông ngòi dày đặc",
                "Khí hậu ôn đới và đồng cỏ rộng lớn",
                "Địa hình đồi núi cao, khô hạn",
                "Bờ biển bị đóng băng quanh năm"
            ],
            correct: 0,
            explanation: "Khí hậu nhiệt đới gió mùa, nóng ẩm mưa nhiều rất thuận lợi cho nền nông nghiệp lúa nước - cơ sở của văn minh ĐNÁ."
        },
        {
            type: "multiple",
            question: "Văn minh Đông Nam Á chịu ảnh hưởng sâu sắc nhất từ hai nền văn minh lớn nào?",
            options: ["Ai Cập và Lưỡng Hà", "Hy Lạp và La Mã", "Ấn Độ và Trung Hoa", "Ả Rập và Tây Âu"],
            correct: 2,
            explanation: "Đông Nam Á nằm giữa Ấn Độ và Trung Hoa, nên tiếp thu mạnh mẽ tôn giáo, chữ viết, tư tưởng từ hai nền văn minh này."
        },
        {
            type: "multiple",
            question: "Công trình kiến trúc tôn giáo nào sau đây là biểu tượng nổi bật của văn minh Campuchia cổ đại?",
            options: ["Tháp Chàm", "Đền Bô-rô-bu-đua (Borobudur)", "Quần thể Ăng-co (Angkor)", "Chùa Vàng"],
            correct: 2,
            explanation: "Quần thể Angkor (Angkor Wat, Angkor Thom) là đỉnh cao của nghệ thuật kiến trúc, điêu khắc Khmer."
        },
        {
            type: "multiple",
            question: "Tôn giáo nào có nguồn gốc từ Ấn Độ đã ảnh hưởng rộng lớn đến đời sống tâm linh của cư dân Đông Nam Á?",
            options: ["Hồi giáo và Đạo giáo", "Phật giáo và Hin-đu giáo", "Thiên Chúa giáo và Nho giáo", "Đạo Mẫu"],
            correct: 1,
            explanation: "Phật giáo và Hin-đu giáo (Ấn Độ giáo) lan truyền mạnh mẽ và để lại dấu ấn sâu đậm trong văn hóa ĐNÁ."
        },
        // ── CÁC NỀN VĂN MINH CỔ TRÊN ĐẤT NƯỚC VIỆT NAM ─────────────────────
        {
            type: "multiple",
            question: "Văn minh Văn Lang - Âu Lạc hình thành chủ yếu trên lưu vực của các con sông nào?",
            options: [
                "Sông Tiền và sông Hậu",
                "Sông Mã và sông Cả",
                "Sông Hồng, sông Mã và sông Cả",
                "Sông Đồng Nai và sông Sài Gòn"
            ],
            correct: 2,
            explanation: "Văn minh Văn Lang - Âu Lạc (Đông Sơn) gắn liền với lưu vực sông Hồng, sông Mã, sông Cả (Bắc Bộ và Bắc Trung Bộ)."
        },
        {
            type: "multiple",
            question: "Hiện vật tiêu biểu nhất chứng minh trình độ kĩ thuật đúc đồng đỉnh cao của cư dân Văn Lang - Âu Lạc là:",
            options: ["Rìu đá", "Mũi tên đồng", "Trống đồng Đông Sơn", "Gốm sứ"],
            correct: 2,
            explanation: "Trống đồng Đông Sơn không chỉ là nhạc khí mà còn là biểu tượng quyền lực và nghệ thuật đúc đồng xuất sắc."
        },
        {
            type: "multiple",
            question: "Nền văn minh Chăm-pa hình thành và phát triển ở khu vực nào của Việt Nam hiện nay?",
            options: ["Bắc Bộ", "Trung Bộ", "Nam Bộ", "Tây Nguyên"],
            correct: 1,
            explanation: "Văn minh Chăm-pa phát triển rực rỡ dải đất miền Trung (Trung Bộ) Việt Nam ngày nay."
        },
        {
            type: "multiple",
            question: "Biểu tượng kiến trúc và điêu khắc nổi bật nhất của nền văn minh Chăm-pa là:",
            options: ["Chùa chiền", "Đền tháp bằng gạch nung", "Nhà sàn", "Thành lũy bằng đá"],
            correct: 1,
            explanation: "Hệ thống đền tháp Chăm (như Thánh địa Mỹ Sơn) xây bằng gạch nung với kĩ thuật độc đáo là di sản văn hóa thế giới."
        },
        {
            type: "multiple",
            question: "Văn minh Phù Nam hình thành và phát triển gắn liền với khu vực nào?",
            options: ["Đồng bằng sông Hồng", "Vùng núi Tây Bắc", "Châu thổ sông Cửu Long (Nam Bộ)", "Duyên hải miền Trung"],
            correct: 2,
            explanation: "Văn minh Phù Nam (Óc Eo) phát triển ở lưu vực hạ lưu sông Mê Công (Nam Bộ)."
        },
        // ── KHỞI NGHĨA VÀ CHIẾN TRANH GIẢI PHÓNG DÂN TỘC ──────────────────
        {
            type: "multiple",
            question: "Cuộc khởi nghĩa nào đã mở đầu cho thời kì đấu tranh giành độc lập của nhân dân ta thời Bắc thuộc?",
            options: ["Khởi nghĩa Hai Bà Trưng (năm 40)", "Khởi nghĩa Bà Triệu (năm 248)", "Khởi nghĩa Lý Bí (năm 542)", "Khởi nghĩa Mai Thúc Loan (năm 722)"],
            correct: 0,
            explanation: "Khởi nghĩa Hai Bà Trưng (năm 40) là cuộc nổi dậy quy mô lớn đầu tiên chống lại ách đô hộ nhà Hán."
        },
        {
            type: "multiple",
            question: "Chiến thắng nào đã chấm dứt hoàn toàn ách đô hộ hơn nghìn năm của phong kiến phương Bắc, mở ra kỉ nguyên độc lập lâu dài?",
            options: ["Chiến thắng Bạch Đằng năm 938", "Chiến thắng Như Nguyệt năm 1077", "Chiến thắng Chi Lăng - Xương Giang năm 1427", "Chiến thắng Ngọc Hồi - Đống Đa năm 1789"],
            correct: 0,
            explanation: "Chiến thắng Bạch Đằng (938) do Ngô Quyền lãnh đạo đã kết thúc thời kì Bắc thuộc."
        },
        {
            type: "multiple",
            question: "Cuộc khởi nghĩa Lam Sơn (1418 - 1427) do Lê Lợi lãnh đạo nhằm chống lại quân xâm lược nào?",
            options: ["Quân Tống", "Quân Mông - Nguyên", "Quân Minh", "Quân Thanh"],
            correct: 2,
            explanation: "Lê Lợi và Nguyễn Trãi lãnh đạo khởi nghĩa Lam Sơn đánh đuổi quân Minh xâm lược."
        },
        {
            type: "multiple",
            question: "Nghệ thuật quân sự nổi bật trong cuộc khởi nghĩa Lam Sơn là gì?",
            options: [
                "Đánh nhanh thắng nhanh",
                "Lấy ít địch nhiều, lấy yếu chống mạnh, kết hợp quân sự và ngoại giao (tâm công)",
                "Xây dựng phòng tuyến kiên cố",
                "Dùng hải quân làm chủ lực"
            ],
            correct: 1,
            explanation: "Tư tưởng 'lấy đại nghĩa thắng hung tàn, lấy chí nhân thay cường bạo' và nghệ thuật 'tâm công' (đánh vào lòng người)."
        },
        {
            type: "multiple",
            question: "Phong trào Tây Sơn bùng nổ (1771) xuất phát từ nguyên nhân sâu xa nào?",
            options: [
                "Sự xâm lược của quân Thanh",
                "Sự suy tàn, thối nát của chính quyền Đàng Trong (chúa Nguyễn)",
                "Mâu thuẫn giữa chúa Trịnh và nhà Lê",
                "Yêu cầu mở rộng lãnh thổ"
            ],
            correct: 1,
            explanation: "Chính quyền chúa Nguyễn ở Đàng Trong khủng hoảng, tham nhũng, đời sống nhân dân cực khổ → Khởi nghĩa nông dân Tây Sơn nổ ra."
        },
        {
            type: "multiple",
            question: "Chiến công vĩ đại nhất của Quang Trung - Nguyễn Huệ trong năm 1789 là:",
            options: [
                "Đánh tan quân Xiêm ở Rạch Gầm - Xoài Mút",
                "Lật đổ chính quyền chúa Trịnh",
                "Đánh tan 29 vạn quân Thanh xâm lược (Ngọc Hồi - Đống Đa)",
                "Thống nhất đất nước"
            ],
            correct: 2,
            explanation: "Trận Ngọc Hồi - Đống Đa (Tết Kỷ Dậu 1789) đánh tan quân Thanh, bảo vệ độc lập."
        },
        // ── CÔNG CUỘC BẢO VỆ TỔ QUỐC ──────────────────────────────────────
        {
            type: "multiple",
            question: "Tư tưởng chỉ đạo xuyên suốt của nhà Trần trong 3 lần kháng chiến chống Mông - Nguyên là gì?",
            options: [
                "Tử thủ tại kinh thành",
                "Tích cực chủ động tiến công trước để tự vệ",
                "Toàn dân đánh giặc, thực hiện 'vườn không nhà trống'",
                "Cầu viện các nước láng giềng"
            ],
            correct: 2,
            explanation: "Nhà Trần dùng chiến thuật 'Thanh dã' (vườn không nhà trống), tránh thế giặc mạnh, phản công khi giặc suy yếu, phát huy sức mạnh toàn dân."
        },
        {
            type: "multiple",
            question: "Tác giả của bài thơ 'Nam quốc sơn hà' - được coi là bản Tuyên ngôn Độc lập đầu tiên của dân tộc ta là ai?",
            options: ["Nguyễn Trãi", "Lý Thường Kiệt", "Trần Hưng Đạo", "Ngô Quyền"],
            correct: 1,
            explanation: "Bài thơ thần trên sông Như Nguyệt gắn liền với cuộc kháng chiến chống Tống (1075-1077) do Lý Thường Kiệt lãnh đạo."
        },
        {
            type: "multiple",
            question: "Hội nghị Diên Hồng (1284) do Thượng hoàng Trần Thánh Tông triệu tập có ý nghĩa gì?",
            options: [
                "Bàn kế sách tấn công quân Chăm-pa",
                "Hỏi ý kiến các bô lão về việc nên hòa hay đánh khi quân Nguyên sang xâm lược",
                "Tuyển chọn quan lại",
                "Ban hành bộ luật mới"
            ],
            correct: 1,
            explanation: "Hội nghị Diên Hồng thể hiện tinh thần dân chủ, đoàn kết quân dân nhất trí một lòng 'Sát Thát' (đánh giặc)."
        },
        {
            type: "multiple",
            question: "Nguyên nhân chủ quan quan trọng nhất dẫn đến thắng lợi của các cuộc kháng chiến bảo vệ Tổ quốc thời phong kiến là:",
            options: [
                "Địa hình nước ta hiểm trở",
                "Tinh thần yêu nước, đoàn kết của toàn dân tộc và sự lãnh đạo tài tình của các tướng lĩnh",
                "Quân giặc không quen khí hậu, thủy thổ",
                "Quân đội nước ta được trang bị vũ khí hiện đại nhất thế giới"
            ],
            correct: 1,
            explanation: "Lòng yêu nước, đoàn kết ('vua tôi đồng tâm, anh em hòa mục, cả nước góp sức') là sức mạnh vô địch bảo vệ Tổ quốc."
        },
        {
            type: "multiple",
            question: "Sự thất bại của nhà Hồ trong cuộc kháng chiến chống quân Minh (1407) để lại bài học lịch sử sâu sắc nhất là gì?",
            options: [
                "Không nên xây dựng thành lũy kiên cố",
                "Phải biết dựa vào dân, đoàn kết toàn dân ('khoan thư sức dân')",
                "Phải chủ động tấn công sang đất địch",
                "Chỉ dựa vào sức mạnh của quân đội chính quy"
            ],
            correct: 1,
            explanation: "Nhà Hồ thất bại vì không được lòng dân, để mất sự ủng hộ của nhân dân (như Hồ Nguyên Trừng nói: 'Thần không sợ đánh, chỉ sợ lòng dân không theo')."
        },
        // ── KHÁC ─────────────────────────────────────────────────────────
        {
            type: "multiple",
            question: "Bình Ngô đại cáo của Nguyễn Trãi được viết vào năm nào?",
            options: ["1427", "1428", "1077", "1789"],
            correct: 1,
            explanation: "Năm 1428, sau khi đại thắng quân Minh, Nguyễn Trãi thừa lệnh Lê Lợi viết Bình Ngô đại cáo tuyên bố độc lập."
        },
        {
            type: "multiple",
            question: "Truyền thống yêu nước của dân tộc Việt Nam được hun đúc chủ yếu thông qua quá trình nào?",
            options: [
                "Quá trình giao lưu văn hóa với phương Tây",
                "Quá trình dựng nước và giữ nước, đấu tranh chống ngoại xâm liên tục",
                "Quá trình phát triển thương mại",
                "Quá trình bành trướng lãnh thổ"
            ],
            correct: 1,
            explanation: "Lịch sử chống ngoại xâm liên tục là nhân tố quyết định hình thành và hun đúc lòng yêu nước."
        },
        {
            type: "multiple",
            question: "Việc tiếp thu các thành tựu văn hóa nước ngoài (Trung Hoa, Ấn Độ, Pháp...) của người Việt có đặc điểm gì?",
            options: [
                "Sao chép nguyên bản không chọn lọc",
                "Tiếp thu có chọn lọc và 'Việt hóa' cho phù hợp với bản sắc dân tộc",
                "Bác bỏ hoàn toàn để bảo vệ văn hóa bản địa",
                "Chỉ tiếp thu văn hóa vật chất, từ chối văn hóa tinh thần"
            ],
            correct: 1,
            explanation: "Người Việt luôn biết cách tiếp thu tinh hoa nhân loại và biến đổi cho phù hợp với truyền thống dân tộc."
        },
        {
            type: "multiple",
            question: "Cơ sở kinh tế chủ yếu của nhà nước Âu Lạc là:",
            options: ["Thương nghiệp đường biển", "Nông nghiệp trồng lúa nước", "Thủ công nghiệp (đúc đồng)", "Khai thác lâm sản"],
            correct: 1,
            explanation: "Cũng như Văn Lang, nền tảng kinh tế của Âu Lạc là nông nghiệp lúa nước dùng sức kéo trâu bò."
        },
        {
            type: "multiple",
            question: "Vị anh hùng dân tộc nào gắn liền với hai chữ 'Sát Thát' được thích trên cánh tay của binh sĩ?",
            options: ["Lê Lợi", "Trần Hưng Đạo", "Quang Trung", "Lý Thường Kiệt"],
            correct: 1,
            explanation: "Trần Hưng Đạo (Trần Quốc Tuấn) là Quốc công tiết chế chỉ huy kháng chiến chống Mông-Nguyên. Binh sĩ thích chữ 'Sát Thát' (giết giặc Thát Đát - Mông Cổ)."
        },
        {
            type: "multiple",
            question: "Đâu KHÔNG phải là ý nghĩa của cuộc khởi nghĩa Tây Sơn?",
            options: [
                "Lật đổ các tập đoàn phong kiến Trịnh, Nguyễn, Lê",
                "Bước đầu thống nhất đất nước",
                "Đánh đuổi quân xâm lược Xiêm, Thanh",
                "Mở ra thời kì Bắc thuộc lần thứ 2"
            ],
            correct: 3,
            explanation: "Tây Sơn có công lớn trong việc bảo vệ độc lập và thống nhất đất nước, không liên quan đến Bắc thuộc."
        },
        {
            type: "multiple",
            question: "Đại Cồ Việt là quốc hiệu của nước ta thời kì nào?",
            options: ["Thời Đinh - Tiền Lê", "Thời Lý", "Thời Trần", "Thời Lê sơ"],
            correct: 0,
            explanation: "Năm 968, Đinh Bộ Lĩnh lên ngôi Hoàng đế, đặt quốc hiệu là Đại Cồ Việt."
        },
        {
            type: "multiple",
            question: "Ai là người có công dẹp loạn 12 sứ quân, thống nhất đất nước?",
            options: ["Ngô Quyền", "Đinh Bộ Lĩnh", "Lê Hoàn", "Lý Công Uẩn"],
            correct: 1,
            explanation: "Đinh Bộ Lĩnh (Đinh Tiên Hoàng) đã dẹp loạn 12 sứ quân, lập ra nhà Đinh."
        },
        // ── TỰ LUẬN ──────────────────────────────────────────────────────
        {
            type: "essay",
            question: "Hãy phân tích những đặc điểm chung của ba nền văn minh cổ trên đất nước Việt Nam (Văn Lang - Âu Lạc, Chăm-pa, Phù Nam).",
            suggested: "Đặc điểm chung:\n- Thời gian hình thành: Đều hình thành từ rất sớm (vào khoảng thiên niên kỉ I TCN đến những thế kỉ đầu CN).\n- Cơ sở tự nhiên: Đều hình thành trên lưu vực các con sông lớn, gần biển, khí hậu nhiệt đới gió mùa.\n- Cơ sở kinh tế: Đều lấy nông nghiệp lúa nước làm nền tảng, kết hợp với thủ công nghiệp và thương nghiệp.\n- Giao lưu văn hóa: Đều có sự tiếp xúc, giao lưu với các nền văn minh lớn (Trung Hoa, Ấn Độ) nhưng vẫn giữ được bản sắc văn hóa bản địa.",
            points: 25,
            explanation: "AI chấm: Phân tích được sự tương đồng về cơ sở tự nhiên (10đ), cơ sở kinh tế nông nghiệp (10đ), và giao lưu văn hóa (5đ)."
        },
        {
            type: "essay",
            question: "So sánh nghệ thuật quân sự trong cuộc kháng chiến chống Tống thời Lý (1075-1077) và kháng chiến chống Mông - Nguyên thời Trần (thế kỉ XIII).",
            suggested: "- Giống nhau: Đều phát huy sức mạnh toàn dân; lợi dụng địa hình hiểm trở để đánh giặc (sông Bạch Đằng, Như Nguyệt); kết hợp quân sự và ngoại giao.\n- Khác nhau:\n  + Thời Lý (chống Tống): Tư tưởng 'Tiên phát chế nhân' - chủ động tiến công trước để chặn thế mạnh của giặc (đánh sang đất Tống), sau đó lùi về phòng thủ vững chắc tại tuyến sông Như Nguyệt.\n  + Thời Trần (chống Mông-Nguyên): Kế sách 'Thanh dã' (vườn không nhà trống), chủ động rút lui bảo toàn lực lượng khi giặc đang mạnh, chờ khi giặc cạn kiệt lương thực, mệt mỏi thì mới phản công tiêu diệt.",
            points: 25,
            explanation: "AI chấm: Nêu điểm giống nhau (toàn dân, tận dụng địa hình) (10đ). Phân tích đúng điểm khác biệt cốt lõi: Lý - Tiên phát chế nhân (chủ động tấn công trước) (8đ); Trần - Vườn không nhà trống (rút lui chiến lược, phản công sau) (7đ)."
        },
        {
            type: "essay",
            question: "Vai trò của phong trào Tây Sơn và người anh hùng áo vải Nguyễn Huệ (Quang Trung) trong lịch sử dân tộc cuối thế kỉ XVIII là gì?",
            suggested: "1. Về đối nội (Thống nhất đất nước):\n- Lần lượt lật đổ các tập đoàn phong kiến thối nát (chúa Nguyễn ở Đàng Trong, chúa Trịnh và nhà Lê ở Đàng Ngoài).\n- Xóa bỏ ranh giới chia cắt đất nước (sông Gianh), đặt cơ sở nền tảng cho việc thống nhất quốc gia.\n\n2. Về đối ngoại (Bảo vệ độc lập dân tộc):\n- Đánh tan 5 vạn quân Xiêm xâm lược ở Rạch Gầm - Xoài Mút (1785).\n- Đánh tan 29 vạn quân Thanh xâm lược với chiến thắng Ngọc Hồi - Đống Đa oanh liệt (1789), bảo vệ vững chắc nền độc lập nước nhà.",
            points: 25,
            explanation: "AI chấm: Nêu rõ 2 vai trò chính: Lật đổ phong kiến, bước đầu thống nhất đất nước (12đ) và Đánh đuổi ngoại xâm Xiêm, Thanh bảo vệ độc lập (13đ)."
        }
    ]
};
