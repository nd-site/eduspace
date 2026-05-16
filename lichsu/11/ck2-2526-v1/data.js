// data.js – KIỂM TRA CUỐI KÌ II – LỊCH SỬ 11 (KNTT) – 2025-2026
// Chương trình GDPT 2018 | Sách Kết Nối Tri Thức với Cuộc Sống
// Nội dung HK2: Cải cách ở Việt Nam (Hồ Quý Ly, Lê Thánh Tông, Minh Mạng), Lịch sử bảo vệ chủ quyền biển đảo (Hoàng Sa, Trường Sa)
// 28 câu TN (×0,25đ = 7đ) + 3 câu TL (×1đ = 3đ) | 45 phút

window.quizData = {
    title: "Kiểm tra Cuối Học Kì II – Lịch Sử 11 (Kết nối tri thức) 2025-2026",
    config: {
        testDuration: 2700,
        examLayout: {
            multiple: { count: 28, pointsPerQ: 0.25 },
            essay: { count: 3, pointsPerQ: 1.0 }
        }
    },
    questions: [
        // ── CẢI CÁCH HỒ QUÝ LY ───────────────────────────────────────────
        {
            type: "multiple",
            question: "Cuộc cải cách của Hồ Quý Ly diễn ra trong bối cảnh nào?",
            options: [
                "Đất nước thái bình, thịnh trị",
                "Nhà Trần đang suy yếu nghiêm trọng, khủng hoảng kinh tế - xã hội sâu sắc",
                "Nhà Minh vừa xâm lược nước ta",
                "Đất nước bị chia cắt thành Đàng Trong - Đàng Ngoài"
            ],
            correct: 1,
            explanation: "Cuối thế kỉ XIV, nhà Trần khủng hoảng trầm trọng, khởi nghĩa nông dân nổ ra khắp nơi, Hồ Quý Ly lên nắm quyền và tiến hành cải cách."
        },
        {
            type: "multiple",
            question: "Chính sách 'hạn điền' của Hồ Quý Ly nhằm mục đích gì?",
            options: [
                "Hạn chế diện tích ruộng đất tư của vương hầu, quý tộc, lấy ruộng đất thừa chia cho dân nghèo",
                "Tịch thu toàn bộ ruộng đất của nông dân",
                "Khuyến khích vương hầu khai hoang thêm đất mới",
                "Bán ruộng đất công cho tư nhân"
            ],
            correct: 0,
            explanation: "Chính sách hạn điền quy định mức sở hữu ruộng tối đa, nhằm tước bỏ thế lực kinh tế của quý tộc Trần và giải quyết vấn đề ruộng đất."
        },
        {
            type: "multiple",
            question: "Trong lĩnh vực tài chính, Hồ Quý Ly đã ban hành chính sách nổi bật nào?",
            options: [
                "Phát hành tiền giấy 'Thông bảo hội sao' thay thế tiền đồng",
                "Đúc tiền vàng để lưu thông",
                "Bỏ hẳn việc dùng tiền, chỉ trao đổi hàng hóa",
                "Dùng đồng bạc trắng của phương Tây"
            ],
            correct: 0,
            explanation: "Hồ Quý Ly là người đầu tiên ở nước ta phát hành tiền giấy (Thông bảo hội sao) năm 1396."
        },
        {
            type: "multiple",
            question: "Hạn chế lớn nhất trong cuộc cải cách của Hồ Quý Ly là gì?",
            options: [
                "Không đề cập đến lĩnh vực quân sự",
                "Không quan tâm đến giáo dục",
                "Gây mất đoàn kết trong nội bộ nhân dân, chưa giải quyết triệt để yêu cầu của nông dân, dẫn đến việc mất lòng dân",
                "Cải cách quá chậm chạp"
            ],
            correct: 2,
            explanation: "Cải cách có phần cứng rắn, động chạm đến nhiều thế lực và chưa đáp ứng triệt để quyền lợi nông dân, khiến nhà Hồ thất bại khi quân Minh xâm lược."
        },
        // ── CẢI CÁCH LÊ THÁNH TÔNG ────────────────────────────────────────
        {
            type: "multiple",
            question: "Trọng tâm của cuộc cải cách hành chính dưới thời vua Lê Thánh Tông là gì?",
            options: [
                "Phân quyền cho các vương hầu, quý tộc",
                "Tăng cường tính tập quyền chuyên chế cao độ của nhà nước phong kiến trung ương tập quyền",
                "Giao toàn quyền quản lí cho các địa phương",
                "Xóa bỏ các kì thi Nho học"
            ],
            correct: 1,
            explanation: "Lê Thánh Tông xóa bỏ chức Tướng quốc, lập ra 6 bộ do vua trực tiếp điều hành, chia nước thành 13 đạo thừa tuyên để tập trung quyền lực."
        },
        {
            type: "multiple",
            question: "Dưới thời Lê Thánh Tông, hệ thống chính quyền trung ương được chia thành mấy Bộ?",
            options: ["4 Bộ", "6 Bộ (Lại, Hộ, Lễ, Binh, Hình, Công)", "8 Bộ", "12 Bộ"],
            correct: 1,
            explanation: "Vua trực tiếp điều hành 6 Bộ: Lại, Hộ, Lễ, Binh, Hình, Công."
        },
        {
            type: "multiple",
            question: "Bộ luật nổi tiếng được ban hành dưới thời vua Lê Thánh Tông có tên là gì?",
            options: ["Hình thư", "Luật Gia Long", "Quốc triều hình luật (Luật Hồng Đức)", "Luật Hồng Bàng"],
            correct: 2,
            explanation: "Quốc triều hình luật (Luật Hồng Đức) là bộ luật hoàn chỉnh và tiến bộ nhất thời phong kiến Việt Nam."
        },
        {
            type: "multiple",
            question: "Một điểm tiến bộ nổi bật của Luật Hồng Đức so với các bộ luật phong kiến khác là:",
            options: [
                "Bảo vệ tuyệt đối quyền lợi của nô tì",
                "Có các điều luật bảo vệ một số quyền lợi của phụ nữ",
                "Không có hình phạt tử hình",
                "Xóa bỏ hoàn toàn sự phân biệt giai cấp"
            ],
            correct: 1,
            explanation: "Luật Hồng Đức cho phép phụ nữ được chia tài sản, được quyền xin li hôn trong một số trường hợp nhất định."
        },
        {
            type: "multiple",
            question: "Chính sách ruộng đất quan trọng nhất được thực hiện dưới thời Lê Thánh Tông là:",
            options: ["Chính sách hạn điền", "Chính sách quân điền", "Khoán hộ", "Lập đồn điền cao su"],
            correct: 1,
            explanation: "Chính sách quân điền chia ruộng đất công làng xã cho mọi người từ quan lại đến bình dân, ưu tiên người có công."
        },
        // ── CẢI CÁCH MINH MẠNG ───────────────────────────────────────────
        {
            type: "multiple",
            question: "Cuộc cải cách hành chính của vua Minh Mạng nửa đầu thế kỉ XIX chủ yếu tập trung vào việc gì?",
            options: [
                "Phân quyền mạnh mẽ cho các địa phương",
                "Thống nhất đất nước về mặt hành chính, chia cả nước thành 30 tỉnh và 1 phủ Thừa Thiên",
                "Trao quyền tự trị cho các dân tộc thiểu số",
                "Xóa bỏ hệ thống lục bộ ở trung ương"
            ],
            correct: 1,
            explanation: "Năm 1831-1832, Minh Mạng xóa bỏ các Bắc Thành và Gia Định Thành, chia cả nước thành 30 tỉnh và 1 phủ Thừa Thiên trực thuộc trung ương."
        },
        {
            type: "multiple",
            question: "Mục đích chính của việc vua Minh Mạng chia cả nước thành các tỉnh là gì?",
            options: [
                "Làm suy yếu nền kinh tế",
                "Dễ dàng hơn trong việc thu thuế",
                "Xóa bỏ thế lực cát cứ của các tổng trấn, tập trung cao độ quyền lực về tay nhà vua",
                "Nhường quyền quản lí cho các nước phương Tây"
            ],
            correct: 2,
            explanation: "Minh Mạng muốn xóa bỏ quyền lực quá lớn của Tổng trấn Bắc Thành và Gia Định Thành, trực tiếp quản lý thống nhất từ trung ương đến địa phương."
        },
        {
            type: "multiple",
            question: "Cơ quan tối cao giúp việc cho vua Minh Mạng được thành lập trong cuộc cải cách là:",
            options: ["Viện Cơ mật và Nội các", "Hội đồng Viện sĩ", "Quốc sử quán", "Thượng thư sảnh"],
            correct: 0,
            explanation: "Minh Mạng lập ra Nội các (1820) và Cơ mật viện (1834) để giúp vua giải quyết các công việc cơ mật, trọng đại."
        },
        {
            type: "multiple",
            question: "Chính sách cai trị của vua Minh Mạng đối với các vùng dân tộc thiểu số là:",
            options: [
                "Đuổi họ ra khỏi biên giới",
                "Thực hiện chính sách 'Lưu quan' (cử quan lại người Kinh lên cai trị thay cho các tù trưởng địa phương)",
                "Cho phép tự lập quốc gia riêng",
                "Không can thiệp vào công việc nội bộ"
            ],
            correct: 1,
            explanation: "Để tăng cường quản lí, Minh Mạng bãi bỏ chế độ thế tập của tù trưởng, cử quan lại triều đình lên cai trị (lưu quan)."
        },
        // ── LỊCH SỬ BẢO VỆ CHỦ QUYỀN BIỂN ĐẢO (HOÀNG SA, TRƯỜNG SA) ──────
        {
            type: "multiple",
            question: "Quốc gia đầu tiên xác lập chủ quyền và quản lí liên tục đối với quần đảo Hoàng Sa và Trường Sa là:",
            options: ["Việt Nam", "Trung Quốc", "Pháp", "Nhật Bản"],
            correct: 0,
            explanation: "Việt Nam là nhà nước đầu tiên xác lập và thực thi chủ quyền liên tục, hòa bình trên 2 quần đảo này từ thế kỉ XVII."
        },
        {
            type: "multiple",
            question: "Dưới thời các chúa Nguyễn (thế kỉ XVII - XVIII), lực lượng nào được thành lập để ra khai thác và quản lí quần đảo Hoàng Sa?",
            options: ["Hải quân Hoàng gia", "Đội Hoàng Sa và Đội Bắc Hải", "Thủy quân lục chiến", "Lực lượng tuần duyên"],
            correct: 1,
            explanation: "Chúa Nguyễn lập Đội Hoàng Sa (và sau là Đội Bắc Hải) hoạt động thường niên, đánh bắt hải sản, thu lượm hóa vật, đo đạc hải trình."
        },
        {
            type: "multiple",
            question: "Tập bản đồ nào của Đỗ Bá (thế kỉ XVII) đã ghi chép và vẽ rõ 'Bãi Cát Vàng' (Hoàng Sa) thuộc lãnh thổ Đại Việt?",
            options: ["Hồng Đức bản đồ", "Toàn tập Thiên Nam tứ chí lộ đồ thư", "Đại Nam nhất thống toàn đồ", "Đại Việt sử kí toàn thư"],
            correct: 1,
            explanation: "Toàn tập Thiên Nam tứ chí lộ đồ thư (1686) của Đỗ Bá đã vẽ và ghi chú rõ ràng về Bãi Cát Vàng."
        },
        {
            type: "multiple",
            question: "Dưới triều Nguyễn, vua nào đã sai người ra Hoàng Sa dựng bia, cắm mốc chủ quyền, đo đạc thủy trình?",
            options: ["Vua Gia Long và vua Minh Mạng", "Vua Tự Đức", "Vua Hàm Nghi", "Vua Bảo Đại"],
            correct: 0,
            explanation: "Đặc biệt là vua Minh Mạng (năm 1836) đã cử Thủy quân ra Hoàng Sa cắm cột mốc, dựng bia chủ quyền."
        },
        {
            type: "multiple",
            question: "Sau Chiến tranh thế giới thứ hai, tại Hội nghị San Francisco (1951), phái đoàn quốc gia nào đã tái khẳng định chủ quyền của Việt Nam đối với Hoàng Sa và Trường Sa mà không gặp sự phản đối nào?",
            options: ["Đoàn đại biểu Việt Nam Dân chủ Cộng hòa", "Đoàn đại biểu Chính phủ Quốc gia Việt Nam (thuộc Liên hiệp Pháp)", "Đoàn đại biểu Pháp", "Đoàn đại biểu Mĩ"],
            correct: 1,
            explanation: "Thủ tướng Trần Văn Hữu (đại diện Quốc gia VN) đã tuyên bố khẳng định chủ quyền của VN tại Hoàng Sa và Trường Sa."
        },
        {
            type: "multiple",
            question: "Cơ sở pháp lý quốc tế quan trọng nhất hiện nay để giải quyết các tranh chấp trên Biển Đông là:",
            options: [
                "Luật Hàng hải Quốc tế",
                "Công ước của Liên hợp quốc về Luật Biển năm 1982 (UNCLOS 1982)",
                "Hiệp định Paris 1973",
                "Tuyên bố chung ASEAN"
            ],
            correct: 1,
            explanation: "UNCLOS 1982 được coi là 'Hiến pháp về biển và đại dương', là cơ sở pháp lí tối cao."
        },
        {
            type: "multiple",
            question: "Năm 1974, quần đảo Hoàng Sa của Việt Nam đã bị lực lượng của quốc gia nào dùng vũ lực chiếm đóng trái phép hoàn toàn?",
            options: ["Pháp", "Mĩ", "Trung Quốc", "Nhật Bản"],
            correct: 2,
            explanation: "Tháng 1/1974, Trung Quốc dùng vũ lực đánh chiếm trái phép toàn bộ quần đảo Hoàng Sa từ tay quân đội Việt Nam Cộng hòa."
        },
        {
            type: "multiple",
            question: "Việt Nam có những bằng chứng lịch sử và pháp lí nào để khẳng định chủ quyền đối với Hoàng Sa và Trường Sa?",
            options: [
                "Các bản đồ cổ của Việt Nam và phương Tây ghi nhận Hoàng Sa, Trường Sa thuộc Việt Nam",
                "Các châu bản triều Nguyễn ghi chép hoạt động quản lí nhà nước",
                "Sự chiếm hữu, thực thi quản lí liên tục, hòa bình qua các triều đại",
                "Tất cả các ý trên"
            ],
            correct: 3,
            explanation: "Việt Nam có hệ thống chứng cứ lịch sử và pháp lí rất phong phú, liên tục và nhất quán."
        },
        // ── TỔNG HỢP ──────────────────────────────────────────────────────
        {
            type: "multiple",
            question: "Điểm chung nổi bật nhất trong các cuộc cải cách của Lê Thánh Tông và Minh Mạng là gì?",
            options: [
                "Đều diễn ra khi đất nước bị chia cắt",
                "Đều nhằm mục tiêu tăng cường quyền lực tuyệt đối của nhà vua và nhà nước phong kiến trung ương tập quyền",
                "Đều ưu tiên phát triển thương mại với phương Tây",
                "Đều thất bại do sự phản đối của quan lại"
            ],
            correct: 1,
            explanation: "Cả hai cuộc cải cách đều hoàn thiện bộ máy quản lý, xóa bỏ các chức vụ quyền lực lớn ở địa phương để tập quyền."
        },
        {
            type: "multiple",
            question: "Sự khác biệt lớn nhất giữa cải cách Hồ Quý Ly và cải cách Lê Thánh Tông là về:",
            options: [
                "Mục tiêu kinh tế",
                "Bối cảnh lịch sử: Hồ Quý Ly cải cách trong lúc khủng hoảng, Lê Thánh Tông cải cách lúc đất nước đang hưng thịnh",
                "Tư tưởng chủ đạo (Phật giáo và Nho giáo)",
                "Cơ cấu quân đội"
            ],
            correct: 1,
            explanation: "Hồ Quý Ly phải cứu vãn sự sụp đổ của nhà Trần, Lê Thánh Tông đưa nhà Lê sơ đạt đến đỉnh cao thịnh trị."
        },
        {
            type: "multiple",
            question: "Việc nhà nước phong kiến Việt Nam thường xuyên tổ chức đo đạc, vẽ bản đồ biên giới, biển đảo mang ý nghĩa gì lớn nhất?",
            options: [
                "Phục vụ cho việc thu thuế",
                "Làm tài liệu giảng dạy",
                "Khẳng định mạnh mẽ và thực thi chủ quyền lãnh thổ quốc gia",
                "Chỉ để biết diện tích đất nước"
            ],
            correct: 2,
            explanation: "Vẽ bản đồ (như Hồng Đức bản đồ) là hành động thực thi quản lí nhà nước, khẳng định chủ quyền pháp lí."
        },
        {
            type: "multiple",
            question: "DOC (Tuyên bố về ứng xử của các bên ở Biển Đông) được kí kết giữa:",
            options: ["Việt Nam và Trung Quốc", "ASEAN và Trung Quốc", "Mĩ và Trung Quốc", "ASEAN và Liên hợp quốc"],
            correct: 1,
            explanation: "Năm 2002, ASEAN và Trung Quốc kí DOC nhằm duy trì hòa bình, ổn định trên Biển Đông."
        },
        // ── TỰ LUẬN ──────────────────────────────────────────────────────
        {
            type: "essay",
            question: "Hãy phân tích những mặt tích cực và hạn chế trong cuộc cải cách của Hồ Quý Ly cuối thế kỉ XIV.",
            suggested: "1. Mặt tích cực:\n- Kinh tế: Phát hành tiền giấy, thực hiện hạn điền, hạn nô giúp giải quyết phần nào khủng hoảng ruộng đất, suy yếu thế lực quý tộc Trần.\n- Văn hóa, giáo dục: Đề cao chữ Nôm, chấn chỉnh thi cử, mở rộng giáo dục.\n- Quân sự: Xây dựng thành kiên cố (thành nhà Hồ), chế tạo súng thần cơ.\n=> Đưa đất nước thoát khỏi khủng hoảng một bước.\n\n2. Mặt hạn chế:\n- Cải cách mang tính cưỡng chế, động chạm đến nhiều thế lực.\n- Chính sách hạn nô, phân phối ruộng đất chưa triệt để, chưa giải quyết được mâu thuẫn giai cấp nông dân.\n=> Chưa thu phục được lòng dân, dẫn đến thất bại nhanh chóng khi quân Minh xâm lược.",
            points: 25,
            explanation: "AI chấm: Phân tích đủ các mặt tích cực (kinh tế, văn hóa, quân sự) (15đ) và hạn chế (cưỡng chế, mất lòng dân) (10đ)."
        },
        {
            type: "essay",
            question: "Sự phân chia hành chính nước ta thành 30 tỉnh và 1 phủ Thừa Thiên dưới thời vua Minh Mạng có ý nghĩa lịch sử như thế nào?",
            suggested: "Ý nghĩa cuộc cải cách hành chính của Minh Mạng:\n- Xóa bỏ tình trạng quyền lực phân tán ở địa phương (các Tổng trấn Bắc Thành, Gia Định Thành).\n- Thiết lập một hệ thống hành chính thống nhất, chặt chẽ từ trung ương đến địa phương trên toàn lãnh thổ quốc gia.\n- Tăng cường sức mạnh và sự tập trung quyền lực tuyệt đối của nhà nước trung ương tập quyền.\n- Để lại dấu ấn sâu đậm, là cơ sở cho việc phân chia các tỉnh ở Việt Nam cho đến tận ngày nay.",
            points: 25,
            explanation: "AI chấm: Nêu được sự xóa bỏ phân quyền (8đ), thống nhất quản lí lãnh thổ (9đ) và giá trị lâu dài đối với tổ chức hành chính (8đ)."
        },
        {
            type: "essay",
            question: "Là một học sinh, em cần làm gì để góp phần bảo vệ chủ quyền biển đảo của Tổ quốc hiện nay?",
            suggested: "- Về nhận thức: Tích cực tìm hiểu lịch sử, kiến thức pháp luật (UNCLOS 1982) và bằng chứng lịch sử về chủ quyền của Việt Nam đối với Hoàng Sa, Trường Sa.\n- Về hành động:\n+ Tuyên truyền, lan tỏa những thông tin đúng đắn về chủ quyền biển đảo đến bạn bè, người thân.\n+ Kiên quyết bác bỏ, đấu tranh chống lại các luận điệu sai trái, các đường lưỡi bò phi pháp trên mạng xã hội.\n+ Ra sức học tập, rèn luyện để xây dựng đất nước giàu mạnh, làm cơ sở vững chắc cho việc bảo vệ Tổ quốc.",
            points: 25,
            explanation: "AI chấm: Đưa ra được nhận thức đúng đắn (học tập lịch sử, luật biển) (10đ) và hành động cụ thể (tuyên truyền, đấu tranh luận điệu sai, học tập tốt) (15đ)."
        }
    ]
};
