/**
 * Dữ liệu câu hỏi ôn tập Lịch sử 10 - Học kì I (2025-2026)
 * Chủ đề: Văn minh thế giới thời cổ - trung đại & Cách mạng công nghiệp
 */

const quizData = {
    title: "ÔN TẬP LỊCH SỬ 10 - CUỐI HỌC KÌ I",
    config: {
        testDuration: 2700, // 45 phút
        allowReview: true,
        shuffleQuestions: true
    },
    questions: [
        {
            id: 1,
            type: "multiple",
            question: "Hệ thống chữ viết cổ nhất của người Ai Cập được gọi là gì?",
            options: ["Chữ tượng thanh", "Chữ tượng hình", "Chữ tượng ý", "Chữ cái Rô-ma"],
            correct: 1,
            points: 0.25,
            explanation: "Người Ai Cập cổ đại đã sáng tạo ra chữ tượng hình (khoảng hơn 3000 năm TCN), vẽ lại các vật thực để diễn đạt ý nghĩ."
        },
        {
            id: 2,
            type: "multiple",
            question: "Công trình kiến trúc nổi tiếng nhất của văn minh Ai Cập thời cổ đại là gì?",
            options: ["Vạn Lý Trường Thành", "Kim tự tháp và tượng Nhân sư ở Ghi-da", "Tháp nghiêng Pisa", "Quần thể đền Ăng-co"],
            correct: 1,
            points: 0.25,
            explanation: "Kim tự tháp là những lăng mộ của các Pharaon, thể hiện quyền uy và trình độ kiến trúc vượt bậc của người Ai Cập cổ đại."
        },
        {
            id: 3,
            type: "multiple",
            question: "Tiêu biểu nhất cho nền văn học Trung Hoa thời cổ - trung đại là loại hình nào?",
            options: ["Truyền thuyết, truyện ngắn", "Thơ Đường, tiểu thuyết", "Thơ ca, truyện ngụ ngôn", "Văn học viết, thần thoại"],
            correct: 1,
            points: 0.25,
            explanation: "Văn học Trung Hoa phát triển rực rỡ nhất với thơ Đường (thời Đường) và các bộ tiểu thuyết chương hồi (thời Minh - Thanh)."
        },
        {
            id: 4,
            type: "multiple",
            question: "Chọn từ thích hợp điền vào chỗ trống: '........ là sự tiến bộ về vật chất và tinh thần của xã hội loài người; là trạng thái phát triển cao của nền văn hóa...'",
            options: ["Văn minh", "Văn tự", "Văn vật", "Văn hiến"],
            correct: 0,
            points: 0.25,
            explanation: "Đây là khái niệm chuẩn về 'Văn minh', dùng để phân biệt với thời kì 'Dã man' trong tiến trình phát triển của nhân loại."
        },
        {
            id: 5,
            type: "multiple",
            question: "Bốn trung tâm văn minh lớn ở phương Đông thời kì cổ đại là những nơi nào?",
            options: [
                "Trung Hoa, Ai Cập, Lưỡng Hà và La Mã",
                "Hy Lạp, La Mã, Lưỡng Hà và Ấn Độ",
                "Ai Cập, Ấn Độ, Trung Hoa và Hy Lạp",
                "Ai Cập, Lưỡng Hà, Ấn Độ và Trung Hoa"
            ],
            correct: 3,
            points: 0.25,
            explanation: "Bốn nền văn minh này đều hình thành trên lưu vực các con sông lớn tại phương Đông (sông Ninh, sông Ấn - Hằng, sông Hoàng Hà - Trường Giang, sông Ti-grơ và Ơ-phrát)."
        },
        {
            id: 6,
            type: "multiple",
            question: "Những tôn giáo nào sau đây có nguồn gốc từ Ấn Độ?",
            options: ["Phật giáo và Hin-đu giáo", "Hồi giáo và Ki-tô giáo", "Đạo giáo và Hồi giáo", "Nho giáo và Phật giáo"],
            correct: 0,
            points: 0.25,
            explanation: "Ấn Độ là nơi khai sinh ra nhiều tôn giáo lớn, trong đó Phật giáo và Hin-đu giáo (Ấn Độ giáo) có ảnh hưởng sâu rộng nhất."
        },
        {
            id: 7,
            type: "multiple",
            question: "Nho giáo, Đạo giáo, Mặc gia... là những học thuyết thuộc nền văn minh nào?",
            options: ["Ấn Độ", "Trung Hoa", "Ai Cập", "Lưỡng Hà"],
            correct: 1,
            points: 0.25,
            explanation: "Đây là các học thuyết tư tưởng tiêu biểu ra đời vào thời kì Xuân Thu - Chiến Quốc tại Trung Hoa."
        },
        {
            id: 8,
            type: "multiple",
            question: "Tác phẩm văn học nổi tiếng thời Minh – Thanh của Trung Hoa là gì?",
            options: ["Ramayana", "Truyện Kiều", "Tam quốc diễn nghĩa", "I-li-át"],
            correct: 2,
            points: 0.25,
            explanation: "Tam quốc diễn nghĩa (La Quán Trung) là một trong 'Tứ đại danh tác' tiêu biểu cho tiểu thuyết chương hồi thời Minh - Thanh."
        },
        {
            id: 9,
            type: "multiple",
            question: "Bốn phát minh lớn về kĩ thuật của người Trung Hoa thời cổ - trung đại là gì?",
            options: [
                "Giấy, bút, mực, nghiên",
                "Làm giấy, kĩ thuật in, la bàn, thuốc súng",
                "Toán học, địa lí, y học, thiên văn",
                "Đạo giáo, Nho giáo, Pháp gia, Mặc gia"
            ],
            correct: 1,
            points: 0.25,
            explanation: "Đây được gọi là 'Tứ đại phát minh' của Trung Quốc, có ảnh hưởng to lớn đến lịch sử nhân loại."
        },
        {
            id: 10,
            type: "multiple",
            question: "Những công trình kiến trúc nổi tiếng nhất của Trung Hoa cổ - trung đại là gì?",
            options: [
                "Tháp nghiêng Pisa, Kim tự tháp Ghi-da",
                "Quần thể đền Ăng-co, Tượng Nhân sư",
                "Vạn Lý Trường Thành, Tử Cấm Thành, Di Hòa Viên",
                "Thánh đường Sophia, Đấu trường La Mã"
            ],
            correct: 2,
            points: 0.25,
            explanation: "Vạn Lý Trường Thành là kỳ quan thế giới, còn Tử Cấm Thành và Di Hòa Viên là các tuyệt tác kiến trúc cung đình."
        },
        {
            id: 11,
            type: "multiple",
            question: "Nói đến nền văn minh cổ đại phương Tây là nói đến nền văn minh của quốc gia nào?",
            options: ["Trung Quốc", "Hy Lạp - La Mã", "Ấn Độ", "Ai Cập"],
            correct: 1,
            points: 0.25,
            explanation: "Văn minh Hy Lạp và La Mã cổ đại là nền tảng cốt lõi của văn minh phương Tây hiện đại."
        },
        {
            id: 12,
            type: "multiple",
            question: "Đến khoảng cuối thế kỉ IV TCN, bảng chữ cái Hy Lạp hoàn thiện với bao nhiêu chữ cái?",
            options: ["22", "23", "24", "25"],
            correct: 2,
            points: 0.25,
            explanation: "Người Hy Lạp đã dựa trên chữ cái Phoenicia để phát triển thành hệ thống 24 chữ cái hoàn chỉnh."
        },
        {
            id: 13,
            type: "multiple",
            question: "Chữ La-tinh được xây dựng dựa trên cơ sở của chữ viết nào?",
            options: ["Chữ tượng hình Ai Cập", "Chữ Hy Lạp", "Chữ Ba Tư", "Chữ Hán"],
            correct: 1,
            points: 0.25,
            explanation: "Người La Mã đã tiếp thu và cải biến hệ thống chữ cái của người Hy Lạp để tạo ra chữ La-tinh (A, B, C...)."
        },
        {
            id: 14,
            type: "multiple",
            question: "Hai bộ sử thi đặt nền móng cho văn học Hy Lạp – La Mã thời cổ đại là gì?",
            options: [
                "I-li-át và Ô-đi-xê",
                "Chiến tranh và hòa bình và I-li-át",
                "Ô-đi-xê và Prometheus",
                "I-li-át và Thần khúc"
            ],
            correct: 0,
            points: 0.25,
            explanation: "Đây là hai bộ sử thi nổi tiếng của Homère, kể về cuộc chiến thành Troy và cuộc hành trình của Ulysse."
        },
        {
            id: 15,
            type: "multiple",
            question: "Đấu trường Cô-li-dê là công trình kiến trúc tiêu biểu của nền văn minh nào?",
            options: ["Hy Lạp", "Ba Tư", "La Mã", "Ai Cập"],
            correct: 2,
            points: 0.25,
            explanation: "Đấu trường Colosseum (Cô-li-dê) tại Rome là biểu tượng cho sự vĩ đại của kiến trúc La Mã cổ đại."
        },
        {
            id: 16,
            type: "multiple",
            question: "Tác phẩm nghệ thuật 'Lực sĩ ném đĩa' thuộc thể loại nào?",
            options: ["Hội họa", "Văn học", "Kịch", "Điêu khắc"],
            correct: 3,
            points: 0.25,
            explanation: "Tác phẩm của Myron là một trong những kiệt tác điêu khắc Hy Lạp cổ đại, mô tả vẻ đẹp hình thể con người."
        },
        {
            id: 17,
            type: "multiple",
            question: "Trong văn minh phương Tây thời cổ - trung đại, người La Mã đã tính được một năm có bao nhiêu ngày?",
            options: ["364 ngày", "365 ngày", "365 ngày và 1/4 ngày", "366 ngày"],
            correct: 2,
            points: 0.25,
            explanation: "Lịch Julius của La Mã đã tính toán thời gian Trái Đất quay quanh Mặt Trời là 365,25 ngày."
        },
        {
            id: 18,
            type: "multiple",
            question: "Ai là người được xem là “cha đẻ của nền Y học phương Tây'?",
            options: ["Ta-lét", "Hi-pô-crát", "Pi-ta-go", "Pli-ni-út"],
            correct: 1,
            points: 0.25,
            explanation: "Hippocrates đặt nền móng y khoa thực hành và đạo đức ngành y qua 'Lời thề Hippocrates'."
        },
        {
            id: 19,
            type: "multiple",
            question: "Các nhà khoa học Hy Lạp như Pi-ta-go, Ơ-clit... có đóng góp nổi bật nhất trong ngành nào?",
            options: ["Sinh học", "Địa lí", "Toán học", "Hóa học"],
            correct: 2,
            points: 0.25,
            explanation: "Pythagoras nổi tiếng với định lý tam giác vuông, Euclide là cha đẻ của hình học sơ cấp."
        },
        {
            id: 20,
            type: "multiple",
            question: "Ai là người chế tạo kính thiên văn để quan sát bầu trời trong thời Phục hưng?",
            options: ["Ni-cô-lai Cô-péc-ních", "Gioóc-đa-nô Bru-nô", "Ga-li-lê-ô Ga-li-lê", "Đê-các-tơ"],
            correct: 2,
            points: 0.25,
            explanation: "Galileo Galilei dùng kính thiên văn tự chế để quan sát thiên thể và bảo vệ thuyết Nhật tâm."
        },
        {
            id: 21,
            type: "multiple",
            question: "Danh họa nào đã vẽ bức tranh “Nàng Mô-na Li-sa'?",
            options: ["Mi-ken-lăng-giơ", "Ra-pha-en", "Bô-ca-xi-ô", "Lê-ô-na đờ Vanh-xi"],
            correct: 3,
            points: 0.25,
            explanation: "Leonardo da Vinci là thiên tài toàn năng thời Phục hưng, tác giả của bức chân dung bí ẩn Mona Lisa."
        },
        {
            id: 22,
            type: "multiple",
            question: "Tư tưởng thời Phục hưng đã góp phần thực hiện điều gì?",
            options: [
                "Tạo nền tảng cho cách mạng tư sản",
                "Thúc đẩy chế độ phong kiến phát triển",
                "Làm tăng quyền lực Giáo hội",
                "Cản trở sự phát triển khoa học"
            ],
            correct: 0,
            points: 0.25,
            explanation: "Phong trào Phục hưng giải phóng tư tưởng, phê phán giáo hội phong kiến, mở đường cho CNTB."
        },
        {
            id: 23,
            type: "multiple",
            question: "Những thể loại nào tạo nguồn cảm hứng phong phú cho nền văn học cổ đại Hy Lạp - La Mã?",
            options: ["Thần thoại, thơ, văn xuôi, kịch", "Kí sự, thần thoại, truyện cười", "Văn học dân gian, truyện ngắn", "Tiểu thuyết, thơ ca, kịch"],
            correct: 0,
            points: 0.25,
            explanation: "Văn học Hy Lạp - La Mã cực kỳ phong phú, trong đó Thần thoại là nguồn chất liệu chủ đạo."
        },
        {
            id: 24,
            type: "multiple",
            question: "Trong nghệ thuật, người Hy Lạp – La Mã cổ đại đã đạt được những thành tựu rực rỡ nhất trong lĩnh vực nào?",
            options: ["Xây chùa", "Kiến trúc", "Sân khấu", "Dân gian"],
            correct: 1,
            points: 0.25,
            explanation: "Đỉnh cao về kỹ thuật kiến trúc cột (Doric, Ionic, Corinthian) và mái vòm La Mã."
        },
        {
            id: 25,
            type: "multiple",
            question: "Năm 776 TCN, tại đền thờ thần Dớt ở Ô-lim-pi-a (Hy Lạp) đã diễn ra sự kiện gì?",
            options: [
                "Cơ Đốc giáo được công nhận",
                "Cuộc đấu tranh của nô lệ bùng nổ",
                "Đại hội thể thao Pa-na-the-nai-a",
                "Đại hội Ô-lim-píc định kì 4 năm 1 lần"
            ],
            correct: 3,
            points: 0.25,
            explanation: "Đây là mốc thời gian diễn ra kỳ Thế vận hội Olympic đầu tiên trong lịch sử."
        },
        {
            id: 26,
            type: "multiple",
            question: "Người Hy Lạp cổ đại đã có hiểu biết như thế nào về Trái Đất và hệ Mặt Trời?",
            options: [
                "Trái Đất hình đĩa dẹt và quay quanh Mặt Trời",
                "Trái Đất hình cầu và Mặt Trời quay quanh Trái Đất",
                "Trái Đất hình cầu và quay quanh Mặt Trăng",
                "Trái Đất hình đĩa dẹt và quay quanh Mặt Trời"
            ],
            correct: 1,
            points: 0.25,
            explanation: "Họ nhận thức được Trái Đất hình cầu nhưng vẫn tin vào thuyết Địa tâm (Mặt Trời quay quanh Trái Đất)."
        },
        {
            id: 27,
            type: "multiple",
            question: "Ý nào KHÔNG phản ánh đúng nguyên nhân xuất hiện của phong trào Văn hóa Phục hưng?",
            options: [
                "Giáo lí của Giáo hội Cơ Đốc mang nặng quan điểm lỗi thời",
                "Tầng lớp tư sản mới có thế lực kinh tế nhưng chưa có địa vị xã hội tương ứng",
                "Con người có nhận thức khoa học về bản chất thế giới",
                "Sự xuất hiện trào lưu Triết học Ánh sáng thế kỉ XVIII"
            ],
            correct: 3,
            points: 0.25,
            explanation: "Triết học Ánh sáng diễn ra vào thế kỷ XVIII, sau phong trào Phục hưng, nên không thể là tiền đề."
        },
        {
            id: 28,
            type: "multiple",
            question: "Đặc điểm nổi bật của triết học Hy Lạp - La Mã cổ đại là gì?",
            options: [
                "Gắn liền với cuộc đấu tranh giữa duy vật và duy tâm",
                "Chỉ tập trung vào thần thoại phương Tây",
                "Không có ảnh hưởng đến văn học cận đại",
                "Chỉ ra đời trong bối cảnh hòa bình"
            ],
            correct: 0,
            points: 0.25,
            explanation: "Triết học cổ đại phương Tây là cuộc đấu tranh giữa trường phái duy vật và duy tâm."
        },
        {
            id: 29,
            type: "multiple",
            question: "Lê-ô-na đờ Vanh-xi là danh họa nổi tiếng của thời kì văn hóa nào?",
            options: ["Cổ đại Hy Lạp - La Mã", "Phục hưng", "Phương Tây hiện đại", "Phương Đông cổ đại"],
            correct: 1,
            points: 0.25,
            explanation: "Ông là đại diện tiêu biểu nhất cho trào lưu văn hóa Phục hưng tại Ý."
        },
        {
            id: 30,
            type: "multiple",
            question: "Phong trào văn hóa Phục hưng được hiểu chính xác nhất là gì?",
            options: [
                "Khôi phục văn hóa phương Đông cổ đại",
                "Khôi phục tinh hoa văn hóa các quốc gia cổ đại",
                "Phục hưng đơn thuần giá trị cũ",
                "Phục hưng giá trị cổ đại và sáng tạo nền văn hóa mới của giai cấp tư sản"
            ],
            correct: 3,
            points: 0.25,
            explanation: "Đây là quá trình dùng cái cũ để xây dựng hệ tư tưởng mới chống lại phong kiến."
        },
        {
            id: 31,
            type: "multiple",
            question: "Thành tựu kĩ thuật nổi bật của thời Phục hưng là gì?",
            options: [
                "Sử dụng sức nước trong sản xuất, cải tiến lò rèn",
                "Sản xuất vũ khí hạt nhân",
                "Phát minh ra giấy",
                "Phát minh tàu thủy chạy bằng điện"
            ],
            correct: 0,
            points: 0.25,
            explanation: "Thời kỳ này cải tiến guồng nước, máy ép, lò rèn để nâng cao hiệu suất thủ công."
        },
        {
            id: 32,
            type: "multiple",
            question: "Quan điểm tư tưởng nổi bật của các nhà tư tưởng thời Phục hưng là gì?",
            options: ["Thờ ơ với chính trị", "Tôn vinh thần linh", "Bảo vệ chế độ phong kiến", "Đề cao con người, tự do cá nhân"],
            correct: 3,
            points: 0.25,
            explanation: "Chủ nghĩa nhân văn đặt con người vào vị trí trung tâm thay cho thần thánh."
        },
        {
            id: 33,
            type: "multiple",
            question: "Ý nghĩa to lớn nhất của những cống hiến khoa học, kĩ thuật Hy Lạp – La Mã là gì?",
            options: [
                "Đặt nền tảng cho sự phát triển khoa học thế giới sau này",
                "Chỉ giúp các nhà khoa học nổi tiếng",
                "Chỉ áp dụng trong thời cổ đại",
                "Không có giá trị thực tiễn"
            ],
            correct: 0,
            points: 0.25,
            explanation: "Các định lý, nguyên lý thời cổ đại vẫn là nền tảng khoa học hiện đại."
        },
        {
            id: 34,
            type: "multiple",
            question: "Các nền văn minh cổ đại phương Đông và phương Tây ĐỀU có điểm chung nào?",
            options: [
                "Chỉ tập trung vào toán học",
                "Để lại những giá trị lớn cho nền văn minh nhân loại",
                "Đều bắt nguồn từ lưu vực sông lớn",
                "Có độ chính xác tuyệt đối như hiện đại"
            ],
            correct: 1,
            points: 0.25,
            explanation: "Cả hai đều đóng góp rực rỡ vào kho tàng tri thức chung của loài người."
        },
        {
            id: 35,
            type: "multiple",
            question: "Vì sao phong trào Văn hóa Phục hưng được đánh giá là 'Cuộc cách mạng tiến bộ vĩ đại'?",
            options: [
                "Là cuộc đấu tranh công khai đầu tiên của tư sản chống phong kiến",
                "Mở ra những vùng đất mới",
                "Thúc đẩy hàng hải phát triển",
                "Làm tan rã chủ nghĩa tư bản"
            ],
            correct: 0,
            points: 0.25,
            explanation: "Đây là bước đột phá tư tưởng, dọn đường cho giai cấp tư sản vươn lên."
        },
        {
            id: 36,
            type: "multiple",
            question: "Quốc gia khởi đầu trong cuộc cách mạng công nghiệp lần thứ nhất là quốc gia nào?",
            options: ["Anh", "Mỹ", "Đức", "Pháp"],
            correct: 0,
            points: 0.25,
            explanation: "Nước Anh có đủ vốn, nhân công, kỹ thuật và thị trường để bắt đầu từ giữa thế kỷ XVIII."
        },
        {
            id: 37,
            type: "multiple",
            question: "Ở thế kỉ XVIII, những tiến bộ kĩ thuật ở Anh chủ yếu diễn ra trong ngành nào?",
            options: [
                "Dệt, luyện kim và phát minh máy móc",
                "Luyện kim, khai thác mỏ",
                "Dệt và giao thông",
                "Khai thác mỏ và dệt"
            ],
            correct: 0,
            points: 0.25,
            explanation: "Bắt đầu từ dệt, lan sang luyện kim chế tạo máy và cuối cùng là giao thông."
        },
        {
            id: 38,
            type: "multiple",
            question: "Ngành ĐẦU TIÊN có tiến bộ kĩ thuật trong Cách mạng công nghiệp lần thứ nhất là ngành nào?",
            options: ["Luyện kim", "Dệt", "Giao thông vận tải", "Nông nghiệp"],
            correct: 1,
            points: 0.25,
            explanation: "Ngành dệt có nhu cầu cao, thu hồi vốn nhanh nên được ưu tiên cải tiến."
        },
        {
            id: 39,
            type: "multiple",
            question: "Ai là người phát minh ra máy kéo sợi Gien-ni (Jenny)?",
            options: ["Giêm Oát", "Ri-chác Ác-rai", "Ét-mơn Các-rai", "Giêm Ha-gri-vơ"],
            correct: 3,
            points: 0.25,
            explanation: "Năm 1764, James Hargreaves chế tạo máy kéo sợi mang tên con gái ông (Jenny)."
        },
        {
            id: 40,
            type: "multiple",
            question: "Ai là người phát minh ra máy hơi nước trong Cách mạng công nghiệp lần thứ nhất?",
            options: ["Giêm Oát (James Watt)", "Tô-mát Ê-đi-xon", "Ri-chác Ác-rai", "Hen-ri Pho"],
            correct: 0,
            points: 0.25,
            explanation: "Năm 1784, James Watt hoàn thiện máy hơi nước, tạo động lực cho sản xuất máy móc."
        },
        {
            id: 41,
            type: "multiple",
            question: "Năm 1807, Rô-bớt Phơn-tơn đã chế tạo thành công thành tựu nào?",
            options: ["Đầu máy xe lửa", "Tàu thủy chở khách", "Máy kéo sợi", "Máy bay xăng"],
            correct: 1,
            points: 0.25,
            explanation: "Robert Fulton lắp máy hơi nước vào tàu thủy, tạo bước ngoặt giao thông thủy."
        },
        {
            id: 42,
            type: "multiple",
            question: "Cách mạng công nghiệp lần thứ hai bắt đầu vào khoảng thời gian nào?",
            options: ["Nửa sau thế kỉ XIX", "Đầu thế kỉ XIX", "Nửa sau thế kỉ XVIII", "Cuối thế kỉ XX"],
            correct: 0,
            points: 0.25,
            explanation: "Diễn ra từ khoảng năm 1870 đến 1914, gắn liền với điện lực và động cơ đốt trong."
        },
        {
            id: 43,
            type: "multiple",
            question: "Cách mạng công nghiệp lần thứ nhất bắt đầu vào khoảng thời gian nào?",
            options: ["Nửa sau thế kỉ XIX", "Đầu thế kỉ XIX", "Nửa sau thế kỉ XVIII", "Cuối thế kỉ XX"],
            correct: 2,
            points: 0.25,
            explanation: "Bắt đầu từ những năm 1760 (thế kỷ XVIII) tại Anh."
        },
        {
            id: 44,
            type: "multiple",
            question: "Mai-cơn Pha-ra-đây có đóng góp lớn nhất trong lĩnh vực nào?",
            options: ["Động cơ đốt trong", "Hóa học", "Luyện kim", "Phát minh về điện"],
            correct: 3,
            points: 0.25,
            explanation: "Phát minh hiện tượng cảm ứng điện từ, cơ sở cho sự ra đời của máy phát điện."
        },
        {
            id: 45,
            type: "multiple",
            question: "Hai anh em nhà Rai nổi tiếng với phát minh nào?",
            options: ["Xe lửa", "Tàu thủy điện", "Xe đạp", "Máy bay động cơ xăng"],
            correct: 3,
            points: 0.25,
            explanation: "Năm 1903, anh em nhà Wright (Mỹ) thực hiện chuyến bay đầu tiên có động cơ."
        },
        {
            id: 46,
            type: "multiple",
            question: "Cuộc cách mạng công nghiệp thời cận đại đã hình thành hai giai cấp đối kháng nào?",
            options: ["Phong kiến và nông dân", "Tư sản và vô sản", "Quý tộc và bình dân", "Tăng lữ và nô lệ"],
            correct: 1,
            points: 0.25,
            explanation: "Sự phát triển nhà máy tạo ra tầng lớp chủ (Tư sản) và người làm thuê (Vô sản)."
        },
        {
            id: 47,
            type: "multiple",
            question: "Phát minh kĩ thuật nào tạo ra bước chuyển CĂN BẢN trong nền sản xuất tư bản chủ nghĩa?",
            options: ["Lò cao luyện kim", "Máy kéo sợi Jenny", "Máy bay xăng", "Máy hơi nước"],
            correct: 3,
            points: 0.25,
            explanation: "Máy hơi nước giúp con người thoát khỏi lệ thuộc sức cơ bắp và thiên nhiên."
        },
        {
            id: 48,
            type: "multiple",
            question: "Nội dung nào KHÔNG phản ánh đúng ý nghĩa máy hơi nước ở Anh (1784)?",
            options: [
                "Lao động tay chân được thay bằng máy móc",
                "Tăng năng suất lao động vượt bậc",
                "Khởi đầu quá trình công nghiệp hóa",
                "Biến nước Anh thành 'công xưởng thế giới'"
            ],
            correct: 3,
            points: 0.25,
            explanation: "Hệ quả 'công xưởng thế giới' là kết quả của toàn bộ cuộc cách mạng, không chỉ riêng máy hơi nước."
        },
        {
            id: 49,
            type: "multiple",
            question: "Tác dụng của phương pháp lò cao trong luyện kim ở cách mạng công nghiệp lần thứ hai là gì?",
            options: ["Ứng dụng điện lực", "Ra đời các nguyên liệu mới (thép)", "Phát triển động cơ học", "Sử dụng công nghệ số"],
            correct: 1,
            points: 0.25,
            explanation: "Sản xuất thép số lượng lớn, bền, rẻ tạo vật liệu cơ bản cho chế tạo máy."
        },
        {
            id: 50,
            type: "multiple",
            question: "Nội dung nào KHÔNG phản ánh đúng hệ quả tích cực của cách mạng công nghiệp cận đại?",
            options: [
                "Phát triển lực lượng sản xuất",
                "Hình thành trung tâm công nghiệp",
                "Chuyển biến trong nông nghiệp",
                "Giải quyết triệt để mâu thuẫn xã hội tư bản"
            ],
            correct: 3,
            points: 0.25,
            explanation: "Ngược lại, nó làm mâu thuẫn giữa tư sản và vô sản ngày càng sâu sắc hơn."
        },
        {
            id: 51,
            type: "multiple",
            question: "Đặc trưng cơ bản của cuộc cách mạng công nghiệp lần thứ NHẤT là gì?",
            options: [
                "Sử dụng năng lượng nước, hơi nước và cơ giới hóa",
                "Ứng dụng điện tử và tự động hóa",
                "Sử dụng công nghệ in 3D",
                "Tối ưu hóa nền tảng số"
            ],
            correct: 0,
            points: 0.25,
            explanation: "Năng lượng hơi nước và cơ giới hóa là đặc điểm chính của lần thứ nhất."
        },
        {
            id: 52,
            type: "multiple",
            question: "Những điều kiện CẦN và ĐỦ để nước Anh tiến hành cách mạng công nghiệp là gì?",
            options: [
                "Vốn và nhân công làm thuê",
                "Vốn và máy móc hiện đại",
                "Kĩ thuật và công nhân đông",
                "Vốn (tư bản), nhân công và sự phát triển kĩ thuật"
            ],
            correct: 3,
            points: 0.25,
            explanation: "Cần đủ ba yếu tố: Vốn (Tư bản), Sức lao động (Nhân công) và Công cụ sản xuất (Kỹ thuật)."
        },
        {
            id: 53,
            type: "essay",
            question: "Trình bày suy nghĩ của bạn về tác động của Cách mạng công nghiệp đối với đời sống con người hiện nay.",
            suggested: "Cải thiện mức sống, thay đổi phương thức lao động, nhưng cũng tạo ra thách thức về môi trường và việc làm.",
            points: 2,
            explanation: "Câu hỏi yêu cầu học sinh liên hệ hệ quả lịch sử với thực tế cuộc sống hiện đại."
        }
    ]
};
