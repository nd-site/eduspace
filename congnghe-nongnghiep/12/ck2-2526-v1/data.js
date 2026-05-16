// data.js – KIỂM TRA CUỐI KÌ II – CÔNG NGHỆ 12 (LÂM NGHIỆP - THỦY SẢN) – KNTT 2025-2026
// Chương trình GDPT 2018 | Sách Kết Nối Tri Thức với Cuộc Sống
// Nội dung HK2: Thủy sản: Môi trường nuôi trồng, Phòng trị bệnh, Thu hoạch, bảo quản chế biến và bảo vệ nguồn lợi thủy sản
// 28 câu TN (×0,25đ = 7đ) + 3 câu TL (×1đ = 3đ) | 45 phút

window.quizData = {
    title: "Kiểm tra Cuối Học Kì II – Công nghệ 12 Lâm nghiệp - Thủy sản (Kết nối tri thức) 2025-2026",
    config: {
        testDuration: 2700,
        examLayout: {
            multiple: { count: 28, pointsPerQ: 0.25 },
            essay: { count: 3, pointsPerQ: 1.0 }
        }
    },
    questions: [
        // ── MÔI TRƯỜNG NUÔI TRỒNG THỦY SẢN ────────────────────────────────
        {
            type: "multiple",
            question: "Môi trường nước nuôi trồng thủy sản có đặc điểm cơ bản nào?",
            options: [
                "Nhiệt độ nước thay đổi nhanh hơn nhiệt độ không khí",
                "Khả năng hòa tan Oxygen của nước rất cao, cao hơn không khí",
                "Nước có khả năng hòa tan nhiều chất vô cơ và hữu cơ, nhưng hàm lượng Oxygen hòa tan (DO) thấp",
                "Chế độ ánh sáng dưới nước giống hệt trên cạn"
            ],
            correct: 2,
            explanation: "Nước là dung môi hòa tan rất tốt nhưng lượng Oxygen hòa tan trong nước (DO) thấp hơn khoảng 20 lần so với không khí."
        },
        {
            type: "multiple",
            question: "Chỉ số pH thích hợp nhất cho sự sinh trưởng và phát triển của hầu hết các loài tôm, cá là bao nhiêu?",
            options: ["pH = 4 - 5 (môi trường axit mạnh)", "pH = 6.5 - 8.5 (môi trường trung tính đến hơi kiềm)", "pH = 9 - 10 (môi trường kiềm mạnh)", "pH = 1 - 3"],
            correct: 1,
            explanation: "Đa số tôm cá thích hợp ở môi trường trung tính hoặc kiềm yếu (pH 6.5 - 8.5). pH quá cao hoặc quá thấp đều gây độc."
        },
        {
            type: "multiple",
            question: "Sự hiện diện của khí độc Amonia (NH3) và Hydrogen sulfide (H2S) trong ao nuôi sinh ra từ đâu?",
            options: [
                "Do thực vật phù du quang hợp sinh ra",
                "Do sự phân hủy thức ăn dư thừa, phân tôm cá và mùn bã hữu cơ ở đáy ao trong điều kiện thiếu oxy",
                "Do nước mưa mang vào ao",
                "Do sục khí quá nhiều"
            ],
            correct: 1,
            explanation: "Chất thải hữu cơ tích tụ dưới đáy ao khi phân hủy kị khí sẽ sinh ra các khí độc NH3 và H2S làm tôm cá ngạt thở."
        },
        {
            type: "multiple",
            question: "Biện pháp nào sau đây giúp tăng cường hàm lượng Oxygen hòa tan (DO) trong ao nuôi thủy sản một cách nhanh chóng nhất?",
            options: [
                "Bón thêm nhiều phân hữu cơ",
                "Tăng lượng thức ăn công nghiệp",
                "Sử dụng quạt nước và máy sục khí",
                "Trồng thêm nhiều rong bèo che kín mặt ao"
            ],
            correct: 2,
            explanation: "Quạt nước và sục khí giúp tạo dòng chảy, xé nhỏ hạt nước để tăng diện tích tiếp xúc với không khí, hòa tan nhiều O2 hơn."
        },
        // ── PHÒNG VÀ TRỊ BỆNH THỦY SẢN ────────────────────────────────────
        {
            type: "multiple",
            question: "Bệnh Đốm trắng trên tôm sú, tôm thẻ chân trắng do tác nhân nào gây ra?",
            options: ["Vi khuẩn", "Kí sinh trùng", "Virus (WSSV)", "Nấm"],
            correct: 2,
            explanation: "Bệnh Đốm trắng là bệnh do virus rất nguy hiểm, lây lan nhanh và gây chết tôm hàng loạt, hiện chưa có thuốc đặc trị."
        },
        {
            type: "multiple",
            question: "Khi tôm, cá nuôi bị nhiễm virus, biện pháp xử lí hiệu quả nhất là gì?",
            options: [
                "Cho uống kháng sinh liều cao liên tục",
                "Bổ sung vitamin, tăng sức đề kháng và cải thiện môi trường nước (vì kháng sinh không diệt được virus)",
                "Ngừng quạt nước để virus tự lắng xuống đáy",
                "Bón vôi bột trực tiếp lên mình tôm cá"
            ],
            correct: 1,
            explanation: "Virus không bị tiêu diệt bởi kháng sinh. Chỉ có thể tăng cường sức đề kháng và xử lí môi trường để vật nuôi tự vượt qua, hoặc phải tiêu hủy nếu dịch bệnh nặng."
        },
        {
            type: "multiple",
            question: "Phương châm cơ bản trong quản lí dịch bệnh thủy sản là gì?",
            options: [
                "Chữa bệnh là chính, phòng bệnh là phụ",
                "Phòng bệnh là chính, chữa bệnh khi cần thiết",
                "Chỉ dùng kháng sinh để phòng bệnh",
                "Để vật nuôi phát triển tự nhiên, tự sinh tự diệt"
            ],
            correct: 1,
            explanation: "Do tôm cá sống dưới nước, việc phát hiện và chữa bệnh rất khó khăn, tốn kém nên phòng bệnh (an toàn sinh học) phải đặt lên hàng đầu."
        },
        {
            type: "multiple",
            question: "Việc sử dụng các chế phẩm sinh học (Probiotics) rải xuống ao nuôi có tác dụng gì?",
            options: [
                "Tiêu diệt toàn bộ vi khuẩn trong ao",
                "Phân hủy chất thải hữu cơ, làm sạch đáy ao, cạnh tranh sinh tồn và ức chế vi khuẩn gây bệnh",
                "Làm tăng độ đục của nước để cá dễ lẩn trốn",
                "Tạo ra khí độc NH3 để diệt kí sinh trùng"
            ],
            correct: 1,
            explanation: "Chế phẩm sinh học chứa các vi khuẩn có lợi giúp phân hủy bùn bã hữu cơ, hấp thụ khí độc và lấn át vi khuẩn có hại."
        },
        {
            type: "multiple",
            question: "Để phòng bệnh cho cá, người ta thường tắm cho cá bằng dung dịch nước muối (NaCl) từ 2-3% trong 5-10 phút trước khi thả. Biện pháp này nhằm mục đích gì?",
            options: [
                "Giúp cá quen với vị mặn của biển",
                "Tiêu diệt các ngoại kí sinh trùng (rận cá, trùng mỏ neo) và nấm bám trên da cá",
                "Cung cấp dinh dưỡng cho cá qua da",
                "Làm cho thịt cá săn chắc hơn"
            ],
            correct: 1,
            explanation: "Nước muối loãng có tác dụng sát trùng, diệt kí sinh trùng và nấm ngoài da rất hiệu quả."
        },
        // ── THU HOẠCH, BẢO QUẢN, CHẾ BIẾN THỦY SẢN ────────────────────────
        {
            type: "multiple",
            question: "Thu hoạch thủy sản bằng phương pháp 'thu tỉa' được áp dụng khi nào?",
            options: [
                "Khi tất cả cá trong ao đều đạt kích cỡ thương phẩm",
                "Khi cá trong ao phát triển không đồng đều, bắt những con lớn bán trước, giữ lại con nhỏ nuôi tiếp",
                "Khi muốn tát cạn ao để cải tạo",
                "Khi ao bị dịch bệnh nghiêm trọng"
            ],
            correct: 1,
            explanation: "Thu tỉa giúp giảm mật độ nuôi, con nhỏ có thêm không gian và thức ăn để lớn nhanh hơn."
        },
        {
            type: "multiple",
            question: "Một trong những nguyên nhân chính làm cho sản phẩm thủy sản nhanh bị ươn hỏng sau khi đánh bắt là gì?",
            options: [
                "Do thủy sản chứa ít nước",
                "Do hàm lượng protein và nước cao, tạo điều kiện thuận lợi cho vi sinh vật và enzyme tự phân hủy hoạt động mạnh",
                "Do thủy sản không có vỏ bọc",
                "Do tiếp xúc với ánh sáng mặt trời"
            ],
            correct: 1,
            explanation: "Thịt cá có nhiều nước và đạm rất dễ bị vi khuẩn xâm nhập và enzyme nội tại phân hủy làm ươn, thối rữa."
        },
        {
            type: "multiple",
            question: "Phương pháp bảo quản thủy sản phổ biến nhất trên các tàu đánh bắt xa bờ hiện nay là gì?",
            options: ["Ướp muối", "Sấy khô ngay trên tàu", "Ướp đá lạnh hoặc cấp đông", "Hun khói"],
            correct: 2,
            explanation: "Ướp đá (bảo quản lạnh) giúp hạ nhiệt độ nhanh, kìm hãm sự phát triển của vi khuẩn và giữ được độ tươi ngon."
        },
        {
            type: "multiple",
            question: "Sản xuất nước mắm truyền thống là quá trình gì?",
            options: [
                "Lên men rượu từ cá",
                "Lên men lactic sinh axit",
                "Sự thủy phân protein trong cá thành các acid amin nhờ enzyme (men) có sẵn trong ruột cá và vi khuẩn kị khí chịu mặn",
                "Sấy khô cá rồi xay thành bột"
            ],
            correct: 2,
            explanation: "Nước mắm là dịch chiết từ sự phân giải protein cá (ủ muối) tạo thành các acid amin dễ hấp thụ và có hương vị đặc trưng."
        },
        {
            type: "multiple",
            question: "Mục đích của việc ứng dụng công nghệ lạnh đông IQF (Individual Quick Freezing - Cấp đông siêu tốc từng cá thể) trong chế biến tôm xuất khẩu là gì?",
            options: [
                "Làm tôm bị dính chặt vào nhau thành một khối lớn",
                "Làm lạnh đông cực nhanh từng con tôm riêng biệt, giúp tinh thể đá nhỏ không phá vỡ tế bào, giữ nguyên chất lượng và hình dáng tôm",
                "Làm tôm chín một nửa trước khi bán",
                "Giảm bớt trọng lượng của tôm"
            ],
            correct: 1,
            explanation: "IQF là công nghệ hiện đại giúp cấp đông siêu nhanh, bảo toàn chất lượng và giá trị xuất khẩu của thủy sản."
        },
        // ── BẢO VỆ NGUỒN LỢI THỦY SẢN VÀ BẢO VỆ MÔI TRƯỜNG ────────────────
        {
            type: "multiple",
            question: "Nguồn lợi thủy sản ở Việt Nam đang đối mặt với nguy cơ suy giảm nghiêm trọng chủ yếu do nguyên nhân nào?",
            options: [
                "Do biến đổi khí hậu tự nhiên",
                "Khai thác quá mức, sử dụng các ngư cụ mang tính hủy diệt (mìn, xung điện, lưới mắt nhỏ) và ô nhiễm môi trường",
                "Do sự gia tăng của các loài thiên địch",
                "Do khai thác thủy sản xa bờ"
            ],
            correct: 1,
            explanation: "Đánh bắt mang tính tận diệt (kích điện, thuốc nổ) quét sạch cả cá con, làm cạn kiệt nguồn lợi."
        },
        {
            type: "multiple",
            question: "Hành vi nào sau đây bị nghiêm cấm trong Luật Thủy sản?",
            options: [
                "Sử dụng lưới có kích thước mắt lưới theo quy định",
                "Khai thác các loài thủy sản đang trong mùa sinh sản",
                "Nuôi trồng thủy sản theo tiêu chuẩn VietGAP",
                "Thành lập các khu bảo tồn biển"
            ],
            correct: 1,
            explanation: "Cấm khai thác các loài trong mùa sinh sản hoặc đánh bắt cá thể non để bảo vệ sự tái tạo đàn."
        },
        {
            type: "multiple",
            question: "Việc xây dựng các khu bảo tồn biển (như Cù Lao Chàm, Phú Quốc...) nhằm mục đích gì?",
            options: [
                "Thu tiền vé của ngư dân",
                "Bảo vệ, duy trì đa dạng sinh học, phục hồi các hệ sinh thái rạn san hô, cỏ biển và nguồn giống thủy sản",
                "Làm nơi tập kết rác thải",
                "Phát triển công nghiệp đóng tàu"
            ],
            correct: 1,
            explanation: "Khu bảo tồn biển là nơi trú ngụ và sinh sản an toàn cho nhiều loài sinh vật biển."
        },
        {
            type: "multiple",
            question: "Trong nuôi trồng thủy sản, hiện tượng 'phú dưỡng hóa' (eutrophication) ao nuôi là do đâu?",
            options: [
                "Nước ao quá trong, không có tảo",
                "Sự tích tụ quá nhiều chất dinh dưỡng (Nitơ, Photpho) từ thức ăn thừa và phân, làm tảo phát triển bùng phát (tảo nở hoa)",
                "Do sục khí quá nhiều",
                "Do nhiệt độ nước quá thấp"
            ],
            correct: 1,
            explanation: "Phú dưỡng hóa dẫn đến tảo nở hoa, sau đó tảo tàn đồng loạt gây phân hủy kị khí, rút cạn oxy làm cá chết trắng ao."
        },
        {
            type: "multiple",
            question: "Công nghệ nuôi tôm tuần hoàn nước (RAS - Recirculating Aquaculture Systems) có ưu điểm nổi bật nào về mặt môi trường?",
            options: [
                "Sử dụng rất nhiều nước từ tự nhiên mỗi ngày",
                "Xả thải trực tiếp không qua xử lí",
                "Lọc và tái sử dụng nước liên tục (tuần hoàn), hạn chế tối đa việc xả nước thải ra môi trường và tránh lây nhiễm mầm bệnh từ bên ngoài",
                "Giá thành lắp đặt cực kì rẻ"
            ],
            correct: 2,
            explanation: "RAS là công nghệ cao, khép kín, thân thiện với môi trường và an toàn sinh học cao nhất."
        },
        // ── KHÁC ─────────────────────────────────────────────────────────
        {
            type: "multiple",
            question: "Bệnh Gan tụy cấp (AHPND) ở tôm nuôi do tác nhân nào gây ra?",
            options: ["Nấm", "Kí sinh trùng", "Vi khuẩn Vibrio parahaemolyticus", "Virus"],
            correct: 2,
            explanation: "Hội chứng chết sớm (EMS/AHPND) do vi khuẩn Vibrio tiết độc tố phá hủy gan tụy tôm."
        },
        {
            type: "multiple",
            question: "Nguyên tắc cơ bản khi bảo quản thủy sản tươi sống để vận chuyển xa là gì?",
            options: [
                "Gây mê thủy sản bằng hóa chất độc",
                "Hạ nhiệt độ nước kết hợp bơm sục khí Oxygen liên tục, hoặc áp dụng kĩ thuật 'ngủ đông' nhân tạo",
                "Phơi nắng cho cá yếu đi rồi vận chuyển",
                "Bọc cá trong túi nilon kín không có nước"
            ],
            correct: 1,
            explanation: "Hạ nhiệt độ làm cá giảm trao đổi chất (ngủ đông) kết hợp bơm oxy giúp cá sống khỏe trong quá trình vận chuyển."
        },
        {
            type: "multiple",
            question: "Rừng ngập mặn (như rừng đước, sú vẹt) có vai trò rất quan trọng đối với thủy sản. Đó là vai trò gì?",
            options: [
                "Cung cấp gỗ để đóng tàu",
                "Là bãi đẻ, bãi ươm nuôi và nơi trú ẩn cho nhiều loài tôm, cua, cá; đồng thời lọc sạch nước",
                "Làm cạn kiệt nguồn nước",
                "Gây ngập lụt diện rộng"
            ],
            correct: 1,
            explanation: "Rừng ngập mặn là 'vườn ươm' tự nhiên khổng lồ cho các loài thủy sinh."
        },
        {
            type: "multiple",
            question: "Cá chép lai, cá rô phi đơn tính là kết quả của việc ứng dụng công nghệ nào trong thủy sản?",
            options: ["Công nghệ bảo quản", "Công nghệ lai tạo và chọn lọc giống sinh học", "Công nghệ chế biến", "Công nghệ sản xuất thức ăn"],
            correct: 1,
            explanation: "Chọn tạo giống giúp tạo ra các giống cá lớn nhanh, thịt ngon, kháng bệnh tốt (rô phi đơn tính đực lớn rất nhanh)."
        },
        {
            type: "multiple",
            question: "Surimi là gì?",
            options: [
                "Một loại nước mắm của Nhật Bản",
                "Thịt cá xay nhuyễn đã được rửa sạch mỡ và máu, dùng làm nguyên liệu để sản xuất chả cá, thanh cua",
                "Một loại bệnh ở cá",
                "Phương pháp sấy khô rong biển"
            ],
            correct: 1,
            explanation: "Surimi (chả cá thô) là một dạng bán thành phẩm có giá trị cao, được dùng làm chả cá viên, xúc xích cá."
        },
        // ── TỰ LUẬN ──────────────────────────────────────────────────────
        {
            type: "essay",
            question: "Tại sao trong nuôi trồng thủy sản, người ta lại nói 'Nuôi nước trước, nuôi cá sau'? Hãy nêu 2 biện pháp kĩ thuật để quản lí tốt môi trường ao nuôi.",
            suggested: "1. Ý nghĩa câu nói:\n- Cá, tôm sống hoàn toàn trong nước, mọi hoạt động hô hấp, dinh dưỡng, bài tiết đều diễn ra trong môi trường này.\n- Nếu chất lượng nước tốt (đủ oxy, pH ổn định, không có khí độc), thủy sản sẽ khỏe mạnh, ăn nhiều, lớn nhanh và kháng bệnh tốt. Ngược lại, nước bẩn sẽ làm tôm cá ngạt thở, stress và chết hàng loạt.\n=> Do đó, quản lí chất lượng nước (nuôi nước) là yếu tố quyết định thành bại.\n\n2. Biện pháp quản lí môi trường nước:\n- Lắp đặt hệ thống quạt nước/sục khí để cung cấp đủ Oxygen, đặc biệt vào ban đêm.\n- Quản lí thức ăn chặt chẽ, không cho ăn thừa; định kì sử dụng chế phẩm sinh học (vi sinh) để phân hủy mùn bã đáy ao, làm sạch nước.",
            points: 25,
            explanation: "AI chấm: Giải thích được vai trò sống còn của môi trường nước (15đ). Nêu đúng 2 biện pháp cơ bản (sục khí oxy, kiểm soát thức ăn/dùng vi sinh) (10đ)."
        },
        {
            type: "essay",
            question: "Việc sử dụng xung điện, thuốc nổ và hóa chất độc hại để khai thác thủy sản gây ra những hậu quả nghiêm trọng gì đối với môi trường và xã hội? Theo em, cần làm gì để bảo vệ nguồn lợi thủy sản bền vững?",
            suggested: "1. Hậu quả:\n- Về môi trường: Có tính tận diệt, giết chết toàn bộ thủy sinh vật ở mọi lứa tuổi (kể cả trứng, con non); phá hủy các hệ sinh thái và nơi sinh sản (như rạn san hô, thảm cỏ biển), làm cạn kiệt nguồn giống tự nhiên.\n- Về xã hội/con người: Gây nguy hiểm trực tiếp đến tính mạng của người sử dụng (tai nạn chất nổ, điện giật); đe dọa sinh kế lâu dài của cộng đồng ngư dân.\n\n2. Biện pháp bảo vệ:\n- Tuyên truyền, nâng cao nhận thức pháp luật cho ngư dân.\n- Tuần tra, xử lí nghiêm minh các hành vi đánh bắt hủy diệt.\n- Xây dựng các khu bảo tồn biển; nghiêm cấm đánh bắt trong mùa sinh sản.\n- Khuyến khích chuyển đổi nghề nghiệp cho ngư dân ven bờ, phát triển nuôi trồng thay vì đánh bắt tận thu.",
            points: 25,
            explanation: "AI chấm: Nêu được hậu quả hủy diệt sinh thái/cạn kiệt nguồn giống (10đ) và nguy hiểm tính mạng/sinh kế (5đ). Đề xuất được 2-3 biện pháp (pháp luật, bảo tồn, chuyển đổi nghề) (10đ)."
        },
        {
            type: "essay",
            question: "Trình bày nguyên lí của công nghệ cấp đông nhanh IQF trong chế biến thủy sản. Vì sao công nghệ này giúp sản phẩm thủy sản đông lạnh (như phi-lê cá tra, tôm) giữ được chất lượng gần như tôm cá tươi?",
            suggested: "1. Nguyên lí IQF (Cấp đông siêu tốc từng cá thể):\n- Sản phẩm (tôm, cá) được đưa qua hệ thống băng chuyền với luồng không khí lạnh cực sâu (âm 35 đến âm 40 độ C), làm đóng băng từng sản phẩm riêng biệt trong thời gian rất ngắn (chỉ vài phút).\n\n2. Lí do giữ được chất lượng tươi ngon:\n- Vì làm lạnh cực nhanh, nước trong tế bào thịt cá sẽ đóng băng thành những tinh thể đá có kích thước rất nhỏ (dạng vi tinh thể).\n- Các tinh thể đá nhỏ này không đâm rách màng tế bào. Khi rã đông, nước không bị chảy ra ngoài, tế bào vẫn giữ nguyên vẹn cấu trúc.\n- Do đó, thịt tôm/cá sau khi rã đông vẫn dai, ngọt, không bị mất dinh dưỡng và hao hụt trọng lượng, hương vị gần giống như lúc còn tươi sống.",
            points: 25,
            explanation: "AI chấm: Trình bày được nguyên lí lạnh cực sâu, thời gian ngắn, cấp đông rời (10đ). Giải thích được cơ chế: tạo tinh thể băng nhỏ -> không vỡ tế bào -> không chảy nước dịch khi rã đông (15đ)."
        }
    ]
};
