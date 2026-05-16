// data.js – KIỂM TRA CUỐI KÌ II – KTPL 11 (KNTT) – 2025-2026
// Chương trình GDPT 2018 | Sách Kết Nối Tri Thức với Cuộc Sống
// Nội dung HK2: Quyền bình đẳng của công dân (giới, dân tộc, tôn giáo), Quyền tự do dân chủ (khiếu nại, tố cáo, bầu cử, tham gia quản lí nhà nước)
// 28 câu TN (×0,25đ = 7đ) + 3 câu TL (×1đ = 3đ) | 45 phút

window.quizData = {
    title: "Kiểm tra Cuối Học Kì II – Kinh tế và Pháp luật 11 (Kết nối tri thức) 2025-2026",
    config: {
        testDuration: 2700,
        examLayout: {
            multiple: { count: 28, pointsPerQ: 0.25 },
            essay: { count: 3, pointsPerQ: 1.0 }
        }
    },
    questions: [
        // ── QUYỀN BÌNH ĐẲNG ────────────────────────────────────────────────
        {
            type: "multiple",
            question: "Quyền bình đẳng của công dân trước pháp luật có nghĩa là mọi công dân đều bình đẳng về:",
            options: [
                "Năng lực nhận thức và hành vi",
                "Mức thu nhập và tài sản",
                "Quyền, nghĩa vụ và trách nhiệm pháp lí",
                "Đóng góp tài chính cho Nhà nước"
            ],
            correct: 2,
            explanation: "Bình đẳng trước pháp luật là bình đẳng về quyền, nghĩa vụ (hưởng quyền, làm nghĩa vụ) và trách nhiệm pháp lý (xử lí vi phạm)."
        },
        {
            type: "multiple",
            question: "Bình đẳng giới trong lĩnh vực chính trị thể hiện ở việc:",
            options: [
                "Nam và nữ có quyền bầu cử và ứng cử như nhau vào các cơ quan quyền lực nhà nước",
                "Chỉ có nữ giới mới được ứng cử vào Hội LHPN",
                "Nam giới luôn giữ các chức vụ cao hơn",
                "Nam và nữ có mức lương bằng nhau"
            ],
            correct: 0,
            explanation: "Trong lĩnh vực chính trị, nam và nữ bình đẳng tham gia quản lí nhà nước, tham gia hoạt động xã hội, bầu cử, ứng cử."
        },
        {
            type: "multiple",
            question: "Trong gia đình, vợ và chồng có quyền và nghĩa vụ ngang nhau trong việc nào sau đây?",
            options: [
                "Sở hữu, sử dụng, định đoạt tài sản chung",
                "Quyết định người vợ phải ở nhà nội trợ",
                "Người chồng có quyền quyết định mọi việc lớn",
                "Chỉ người chồng mới có quyền đứng tên sổ đỏ"
            ],
            correct: 0,
            explanation: "Luật Hôn nhân và Gia đình quy định vợ chồng bình đẳng, có quyền và nghĩa vụ ngang nhau về tài sản chung."
        },
        {
            type: "multiple",
            question: "Bình đẳng giữa các dân tộc trong lĩnh vực văn hóa thể hiện ở việc:",
            options: [
                "Bắt buộc sử dụng chung một ngôn ngữ duy nhất",
                "Các dân tộc có quyền dùng tiếng nói, chữ viết, giữ gìn bản sắc, phát huy phong tục, tập quán, truyền thống tốt đẹp của mình",
                "Chỉ bảo tồn văn hóa của dân tộc đa số",
                "Loại bỏ hoàn toàn các lễ hội truyền thống"
            ],
            correct: 1,
            explanation: "Nhà nước tôn trọng và bảo vệ bản sắc văn hóa của tất cả các dân tộc, không phân biệt đa số hay thiểu số."
        },
        {
            type: "multiple",
            question: "Nguyên tắc quan trọng nhất trong việc đảm bảo quyền bình đẳng giữa các tôn giáo là:",
            options: [
                "Tôn giáo lớn có quyền áp đặt tôn giáo nhỏ",
                "Các tôn giáo được Nhà nước đối xử bình đẳng và phải hoạt động trong khuôn khổ pháp luật",
                "Nhà nước chi trả toàn bộ kinh phí hoạt động cho các tôn giáo",
                "Người theo đạo được miễn trừ trách nhiệm hình sự"
            ],
            correct: 1,
            explanation: "Mọi tôn giáo đều bình đẳng trước pháp luật, được tự do hoạt động tín ngưỡng nhưng không được vi phạm pháp luật."
        },
        {
            type: "multiple",
            question: "Hành vi nào sau đây vi phạm quyền bình đẳng giữa các dân tộc?",
            options: [
                "Hỗ trợ học bổng cho học sinh người dân tộc thiểu số",
                "Kì thị, chia rẽ, phân biệt đối xử vì lí do dân tộc",
                "Tổ chức ngày hội văn hóa các dân tộc",
                "Xây dựng trường nội trú vùng cao"
            ],
            correct: 1,
            explanation: "Mọi hành vi kì thị, chia rẽ dân tộc đều bị nghiêm cấm theo Hiến pháp."
        },
        // ── QUYỀN BẦU CỬ, ỨNG CỬ ──────────────────────────────────────────
        {
            type: "multiple",
            question: "Quyền bầu cử và ứng cử là các quyền dân chủ cơ bản của công dân trong lĩnh vực nào?",
            options: ["Kinh tế", "Chính trị", "Văn hóa", "Xã hội"],
            correct: 1,
            explanation: "Đây là những quyền chính trị quan trọng nhất để nhân dân thực thi quyền lực nhà nước."
        },
        {
            type: "multiple",
            question: "Nguyên tắc bầu cử nào đảm bảo cho mọi công dân đủ điều kiện đều được tham gia bầu cử mà không bị phân biệt đối xử?",
            options: ["Phổ thông", "Bình đẳng", "Trực tiếp", "Bỏ phiếu kín"],
            correct: 0,
            explanation: "Nguyên tắc phổ thông đảm bảo mọi công dân đủ 18 tuổi đều có quyền bầu cử (trừ trường hợp bị tước quyền)."
        },
        {
            type: "multiple",
            question: "Nguyên tắc bầu cử 'bình đẳng' được thể hiện như thế nào?",
            options: [
                "Mọi người đều phải đi bỏ phiếu cùng một giờ",
                "Mỗi cử tri có một lá phiếu và các lá phiếu có giá trị ngang nhau",
                "Mọi ứng cử viên đều phải có cùng độ tuổi",
                "Nam giới được ưu tiên bỏ phiếu trước"
            ],
            correct: 1,
            explanation: "Bình đẳng nghĩa là mỗi người 1 phiếu, không phân biệt giàu nghèo, giới tính... giá trị phiếu là như nhau."
        },
        {
            type: "multiple",
            question: "Việc cử tri tự mình viết phiếu và tự mình bỏ phiếu vào hòm phiếu thể hiện nguyên tắc bầu cử nào?",
            options: ["Phổ thông", "Trực tiếp", "Bỏ phiếu kín", "Bình đẳng"],
            correct: 1,
            explanation: "Trực tiếp nghĩa là không được nhờ người khác bầu hộ (trừ trường hợp ốm đau có thùng phiếu phụ)."
        },
        {
            type: "multiple",
            question: "Hành vi nào sau đây VI PHẠM nguyên tắc bầu cử?",
            options: [
                "Nhờ người thân đi bỏ phiếu thay mình vì bận việc",
                "Tự tay bỏ phiếu vào hòm phiếu",
                "Giữ bí mật về người mình bầu",
                "Tìm hiểu kĩ tiểu sử ứng cử viên trước khi bầu"
            ],
            correct: 0,
            explanation: "Bầu hộ/bầu thay là vi phạm nguyên tắc trực tiếp của Luật Bầu cử."
        },
        // ── QUYỀN THAM GIA QUẢN LÍ NHÀ NƯỚC VÀ XÃ HỘI ─────────────────────
        {
            type: "multiple",
            question: "Nhân dân biểu quyết khi Nhà nước tổ chức trưng cầu ý dân là biểu hiện quyền tham gia quản lí nhà nước ở phạm vi nào?",
            options: ["Phạm vi cơ sở", "Phạm vi địa phương", "Phạm vi cả nước", "Phạm vi khu vực"],
            correct: 2,
            explanation: "Trưng cầu ý dân đối với các vấn đề trọng đại của quốc gia là thực hiện quyền dân chủ ở phạm vi cả nước."
        },
        {
            type: "multiple",
            question: "Cơ chế thực hiện quyền tham gia quản lí nhà nước và xã hội ở cơ sở được tóm tắt bằng phương châm:",
            options: [
                "Dân biết, dân bàn, dân làm, dân kiểm tra",
                "Sống và làm việc theo Hiến pháp",
                "Tự do, bình đẳng, bác ái",
                "Kỉ cương, tình thương, trách nhiệm"
            ],
            correct: 0,
            explanation: "Quy chế dân chủ ở cơ sở vận hành theo phương châm 'Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng'."
        },
        {
            type: "multiple",
            question: "Hoạt động nào sau đây thuộc quyền tham gia quản lí nhà nước và xã hội ở phạm vi cơ sở?",
            options: [
                "Đóng góp ý kiến sửa đổi Hiến pháp",
                "Bàn bạc, quyết định mức đóng góp xây dựng đường giao thông nông thôn của thôn/xã",
                "Chất vấn Bộ trưởng tại kì họp Quốc hội",
                "Biểu quyết dự án xây dựng sân bay quốc tế"
            ],
            correct: 1,
            explanation: "Những việc liên quan trực tiếp đến đời sống người dân địa phương (thôn, xã) thuộc phạm vi cơ sở."
        },
        // ── QUYỀN KHIẾU NẠI, TỐ CÁO ───────────────────────────────────────
        {
            type: "multiple",
            question: "Mục đích của quyền khiếu nại là gì?",
            options: [
                "Phát hiện và trừng trị tội phạm",
                "Khôi phục quyền và lợi ích hợp pháp của chính người khiếu nại bị xâm phạm",
                "Yêu cầu tòa án xét xử các vụ án dân sự",
                "Bảo vệ tài sản của Nhà nước"
            ],
            correct: 1,
            explanation: "Khiếu nại nhằm mục đích bảo vệ lợi ích hợp pháp của BẢN THÂN khi bị quyết định hành chính/hành vi hành chính xâm phạm."
        },
        {
            type: "multiple",
            question: "Mục đích của quyền tố cáo là gì?",
            options: [
                "Bảo vệ quyền lợi cá nhân của người làm đơn",
                "Ngăn chặn, xử lí kịp thời hành vi vi phạm pháp luật, bảo vệ lợi ích của Nhà nước, tổ chức hoặc cá nhân khác",
                "Đòi lại tiền lương bị chậm trả",
                "Yêu cầu được giải quyết tranh chấp đất đai"
            ],
            correct: 1,
            explanation: "Tố cáo là để báo cáo hành vi vi phạm pháp luật nhằm bảo vệ lợi ích CHUNG (nhà nước, xã hội, người khác)."
        },
        {
            type: "multiple",
            question: "Chủ thể nào có quyền thực hiện việc tố cáo?",
            options: ["Chỉ cán bộ, công chức", "Mọi công dân", "Cơ quan, tổ chức", "Chỉ người từ đủ 18 tuổi trở lên"],
            correct: 1,
            explanation: "Quyền tố cáo là quyền của công dân. Mọi công dân đều có quyền tố cáo."
        },
        {
            type: "multiple",
            question: "Chủ thể nào có quyền thực hiện việc khiếu nại?",
            options: [
                "Công dân, cơ quan, tổ chức có quyền và lợi ích bị xâm phạm",
                "Bất cứ cá nhân nào nhìn thấy sự bất bình",
                "Chỉ các doanh nghiệp",
                "Chỉ cán bộ quản lý"
            ],
            correct: 0,
            explanation: "Khiếu nại dành cho cả công dân và cơ quan/tổ chức là đối tượng trực tiếp của quyết định hành chính."
        },
        {
            type: "multiple",
            question: "Trong quy trình giải quyết khiếu nại, bước đầu tiên người khiếu nại cần làm là gì?",
            options: [
                "Khởi kiện ngay ra Toà án nhân dân",
                "Gửi đơn khiếu nại đến cơ quan/người đã ra quyết định hành chính đó (Khiếu nại lần đầu)",
                "Đăng bài lên mạng xã hội để đòi công bằng",
                "Gửi đơn trực tiếp cho Thủ tướng Chính phủ"
            ],
            correct: 1,
            explanation: "Quy trình chuẩn: Khiếu nại lần đầu gửi trực tiếp cho người ra quyết định. Nếu không thỏa đáng mới khiếu nại lần hai lên cấp trên hoặc khởi kiện ra tòa."
        },
        {
            type: "multiple",
            question: "Hành vi nào sau đây vi phạm pháp luật về khiếu nại, tố cáo?",
            options: [
                "Cung cấp sự thật, bằng chứng khách quan",
                "Cố ý tố cáo sai sự thật để vu khống, bôi nhọ danh dự người khác",
                "Bảo vệ bí mật thông tin của người tố cáo",
                "Rút đơn khiếu nại khi hiểu rõ vấn đề"
            ],
            correct: 1,
            explanation: "Vu khống, bịa đặt trong đơn tố cáo là hành vi vi phạm pháp luật và bị xử lí nghiêm."
        },
        {
            type: "multiple",
            question: "Anh A bị giám đốc công ty đuổi việc trái pháp luật. Để bảo vệ quyền lợi của mình, anh A nên sử dụng quyền nào?",
            options: ["Quyền tố cáo", "Quyền tự do ngôn luận", "Quyền khiếu nại", "Quyền bầu cử"],
            correct: 2,
            explanation: "Anh A khiếu nại quyết định kỉ luật/sa thải của giám đốc để khôi phục việc làm của chính mình."
        },
        {
            type: "multiple",
            question: "Phát hiện một cơ sở sản xuất kinh doanh thịt lợn bẩn ốm chết, bà B liền gọi điện báo cho quản lý thị trường. Bà B đang thực hiện quyền gì?",
            options: ["Quyền khiếu nại", "Quyền tố cáo", "Quyền quản lí xã hội", "Quyền bình đẳng"],
            correct: 1,
            explanation: "Hành vi kinh doanh thịt bẩn là vi phạm pháp luật gây hại cho xã hội, bà B báo cơ quan chức năng là thực hiện quyền tố cáo."
        },
        // ── TÌNH HUỐNG PHÁP LUẬT TỔNG HỢP ─────────────────────────────────
        {
            type: "multiple",
            question: "Tình huống: Ông M (Chủ tịch xã) ra quyết định xử phạt vi phạm hành chính đối với anh C vì cho rằng anh C lấn chiếm vỉa hè. Tuy nhiên, anh C không lấn chiếm. Trong trường hợp này, anh C có quyền gì?",
            options: [
                "Tố cáo ông M vì tội lạm dụng chức quyền",
                "Khiếu nại quyết định xử phạt của ông M",
                "Chửi bới, chống người thi hành công vụ",
                "Làm ngơ và đóng phạt"
            ],
            correct: 1,
            explanation: "Quyết định xử phạt ảnh hưởng trực tiếp đến anh C, anh C có quyền khiếu nại để yêu cầu ông M hủy bỏ quyết định đó."
        },
        {
            type: "multiple",
            question: "Ông X bị phát hiện nhận hối lộ để bao che cho lâm tặc. Hành vi của người dân cung cấp bằng chứng cho cơ quan điều tra về ông X là thực hiện quyền:",
            options: ["Khiếu nại", "Tố cáo", "Bầu cử", "Giám sát tối cao"],
            correct: 1,
            explanation: "Nhận hối lộ là hành vi vi phạm pháp luật hình sự, công dân có quyền tố cáo."
        },
        {
            type: "multiple",
            question: "Trong ngày bầu cử đại biểu Quốc hội, cụ T (80 tuổi) ốm nặng không đi đến điểm bỏ phiếu được. Tổ bầu cử đã mang hòm phiếu phụ đến tận nhà để cụ T tự tay bỏ phiếu. Việc này nhằm đảm bảo nguyên tắc nào?",
            options: ["Bình đẳng", "Trực tiếp", "Bỏ phiếu kín", "Phổ thông"],
            correct: 1,
            explanation: "Mang hòm phiếu phụ đến nhà giúp cử tri TỰ TAY bỏ phiếu, đảm bảo nguyên tắc bầu cử TRỰC TIẾP."
        },
        {
            type: "multiple",
            question: "Nữ nhân viên Y bị công ty chấm dứt hợp đồng lao động với lí do cô đang mang thai. Hành vi của công ty vi phạm quyền gì?",
            options: ["Quyền tự do kinh doanh", "Quyền bình đẳng giới trong lĩnh vực lao động", "Quyền khiếu nại", "Quyền tự do ngôn luận"],
            correct: 1,
            explanation: "Luật pháp cấm người sử dụng lao động sa thải lao động nữ vì lí do kết hôn, mang thai, nghỉ thai sản."
        },
        {
            type: "multiple",
            question: "Tại cuộc họp tổ dân phố, các hộ dân cùng thảo luận và biểu quyết mức đóng góp xây nhà văn hóa khu phố. Hoạt động này thể hiện:",
            options: [
                "Quyền tự do ngôn luận",
                "Quyền quản lí nhà nước ở trung ương",
                "Quyền tham gia quản lí nhà nước và xã hội ở cơ sở (dân bàn, dân quyết định)",
                "Quyền bình đẳng dân tộc"
            ],
            correct: 2,
            explanation: "Việc trực tiếp biểu quyết đóng góp quỹ là thực hiện dân chủ trực tiếp ở cấp cơ sở."
        },
        {
            type: "multiple",
            question: "Quyền dân chủ nào của công dân là công cụ pháp lý quan trọng để công dân bảo vệ lợi ích của Nhà nước, lợi ích công cộng?",
            options: ["Quyền khiếu nại", "Quyền tố cáo", "Quyền bầu cử", "Quyền bất khả xâm phạm về thân thể"],
            correct: 1,
            explanation: "Quyền tố cáo là công cụ để người dân tham gia phòng chống tham nhũng, tội phạm, bảo vệ lợi ích công cộng."
        },
        // ── TỰ LUẬN ──────────────────────────────────────────────────────
        {
            type: "essay",
            question: "Theo em, vì sao Hiến pháp và pháp luật lại quy định nguyên tắc bầu cử 'bỏ phiếu kín'? Nếu không thực hiện nguyên tắc này thì sẽ dẫn đến hậu quả gì?",
            suggested: "1. Tại sao quy định 'Bỏ phiếu kín':\n- Bỏ phiếu kín (cử tri tự viết phiếu trong phòng kín, không ai được xem) giúp cử tri hoàn toàn tự do thể hiện ý chí, nguyện vọng của mình mà không bị áp lực, đe dọa hay chi phối bởi người khác.\n- Đảm bảo tính khách quan, trung thực của kết quả bầu cử.\n\n2. Hậu quả nếu không thực hiện:\n- Cử tri sẽ có tâm lý e ngại, sợ bị trả thù, trù dập nếu không bầu cho người có quyền thế.\n- Dễ xảy ra nạn mua chuộc, cưỡng ép bầu cử.\n- Kết quả bầu cử không phản ánh đúng ý nguyện thực sự của nhân dân, làm mất đi tính dân chủ của Nhà nước.",
            points: 25,
            explanation: "AI chấm: Giải thích được mục đích bảo vệ tự do ý chí cử tri (10đ); Nêu được hậu quả về áp lực, trả thù, thiếu dân chủ (15đ)."
        },
        {
            type: "essay",
            question: "Tình huống: Anh A (công nhân) phát hiện Giám đốc công ty B có hành vi xả trực tiếp nước thải chưa qua xử lý ra dòng sông gần đó, gây ô nhiễm môi trường nghiêm trọng. \nHỏi: \na) Anh A có quyền sử dụng công cụ pháp lí nào (khiếu nại hay tố cáo) để xử lí vụ việc trên? Vì sao?\nb) Nếu anh A sợ bị đuổi việc nên im lặng không nói ra thì hành vi của anh A đúng hay sai? Trách nhiệm của công dân trong trường hợp này là gì?",
            suggested: "a) Anh A có quyền sử dụng quyền Tố cáo. Vì hành vi xả nước thải độc hại của Giám đốc công ty B là hành vi vi phạm pháp luật (Luật Bảo vệ môi trường), gây ảnh hưởng đến lợi ích của cộng đồng/xã hội, chứ không chỉ xâm phạm lợi ích riêng của cá nhân anh A.\n\nb) Việc anh A im lặng vì sợ bị đuổi việc là thiếu trách nhiệm công dân. Trách nhiệm của công dân là phải tích cực tham gia phòng chống vi phạm pháp luật. Việc tố cáo cái xấu là bảo vệ môi trường sống cho chính mình và xã hội. Luật pháp có cơ chế bảo vệ bí mật danh tính người tố cáo để tránh bị trả thù.",
            points: 25,
            explanation: "AI chấm: Khẳng định đúng quyền Tố cáo và giải thích do vi phạm lợi ích chung (15đ). Phê phán sự im lặng và nêu rõ trách nhiệm bảo vệ lợi ích cộng đồng, luật bảo vệ người tố cáo (10đ)."
        },
        {
            type: "essay",
            question: "Phân tích ý nghĩa của việc đảm bảo quyền bình đẳng giữa các dân tộc trong một quốc gia đa dân tộc như Việt Nam.",
            suggested: "- Về mặt chính trị: Củng cố khối đại đoàn kết toàn dân tộc, tạo sức mạnh tổng hợp để xây dựng và bảo vệ Tổ quốc. Chống lại âm mưu 'diễn biến hòa bình', chia rẽ dân tộc của các thế lực thù địch.\n- Về mặt kinh tế: Tạo điều kiện cho các vùng đồng bào dân tộc thiểu số phát triển, thu hẹp khoảng cách giàu nghèo, chênh lệch trình độ giữa các vùng miền.\n- Về mặt văn hóa - xã hội: Góp phần bảo tồn, phát huy những giá trị văn hóa truyền thống đặc sắc của từng dân tộc, làm phong phú thêm nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc.\n=> Ý nghĩa bao trùm: Là cơ sở vững chắc để xây dựng một xã hội công bằng, dân chủ, văn minh.",
            points: 25,
            explanation: "AI chấm: Nêu được ý nghĩa trên 3 mặt: Đoàn kết chính trị/an ninh (10đ), Kinh tế (rút ngắn khoảng cách) (7đ), Văn hóa (bảo tồn bản sắc) (8đ)."
        }
    ]
};
