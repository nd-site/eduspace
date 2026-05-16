// data.js – KIỂM TRA CUỐI KÌ II – CÔNG NGHỆ 12 (ĐIỆN - ĐIỆN TỬ) – KNTT 2025-2026
// Chương trình GDPT 2018 | Sách Kết Nối Tri Thức với Cuộc Sống
// Nội dung HK2: Linh kiện điện tử (Diode, Transistor, IC), Vi điều khiển cơ bản, Hệ thống điện quốc gia, Mạng điện sản xuất quy mô nhỏ
// 28 câu TN (×0,25đ = 7đ) + 3 câu TL (×1đ = 3đ) | 45 phút

window.quizData = {
    title: "Kiểm tra Cuối Học Kì II – Công nghệ 12 Điện - Điện tử (Kết nối tri thức) 2025-2026",
    config: {
        testDuration: 2700,
        examLayout: {
            multiple: { count: 28, pointsPerQ: 0.25 },
            essay: { count: 3, pointsPerQ: 1.0 }
        }
    },
    questions: [
        // ── LINH KIỆN ĐIỆN TỬ CƠ BẢN ──────────────────────────────────────
        {
            type: "multiple",
            question: "Điện trở (Resistor) có công dụng chính là gì trong mạch điện tử?",
            options: [
                "Lưu trữ năng lượng dưới dạng từ trường",
                "Hạn chế dòng điện và phân chia điện áp trong mạch",
                "Biến đổi dòng điện xoay chiều thành một chiều",
                "Khuếch đại tín hiệu điện"
            ],
            correct: 1,
            explanation: "Điện trở cản trở dòng điện đi qua nó, dùng để hạn dòng, sụt áp, phân áp."
        },
        {
            type: "multiple",
            question: "Linh kiện điện tử nào có khả năng tích lũy năng lượng dưới dạng điện trường?",
            options: ["Điện trở", "Cuộn cảm", "Tụ điện", "Diode"],
            correct: 2,
            explanation: "Tụ điện (Capacitor) tích lũy năng lượng điện trường, có tác dụng ngăn dòng một chiều (DC) và cho dòng xoay chiều (AC) đi qua."
        },
        {
            type: "multiple",
            question: "Đặc điểm nổi bật nhất của Diode chỉnh lưu là gì?",
            options: [
                "Khuếch đại dòng điện hàng trăm lần",
                "Chỉ cho dòng điện đi qua theo một chiều (từ Anode sang Cathode)",
                "Biến đổi cơ năng thành điện năng",
                "Ngăn chặn hoàn toàn dòng điện xoay chiều"
            ],
            correct: 1,
            explanation: "Diode có tính dẫn điện một chiều, được ứng dụng rộng rãi trong các mạch chỉnh lưu (biến AC thành DC)."
        },
        {
            type: "multiple",
            question: "Transistor loại BJT (Bipolar Junction Transistor) có mấy cực?",
            options: ["2 cực (A, K)", "3 cực (B, C, E)", "3 cực (G, S, D)", "4 cực"],
            correct: 1,
            explanation: "Transistor BJT có 3 cực: Base (B - Cực nền), Collector (C - Cực góp), Emitter (E - Cực phát)."
        },
        {
            type: "multiple",
            question: "Chức năng quan trọng nhất của Transistor trong mạch điện tử là gì?",
            options: [
                "Lọc nhiễu tín hiệu",
                "Khuếch đại tín hiệu và đóng cắt mạch điện (như một công tắc điện tử)",
                "Phát sáng khi có dòng điện chạy qua",
                "Đổi tần số dòng điện"
            ],
            correct: 1,
            explanation: "Transistor là linh kiện bán dẫn cốt lõi, có khả năng khuếch đại dòng điện/điện áp và hoạt động như công tắc trong mạch logic."
        },
        {
            type: "multiple",
            question: "IC (Integrated Circuit - Vi mạch tích hợp) là gì?",
            options: [
                "Một linh kiện rời rạc chỉ chứa 1 transistor",
                "Mạch điện tử chứa hàng ngàn đến hàng tỉ linh kiện bán dẫn nhỏ xíu (transistor, điện trở...) được tích hợp trên một phiến silicon",
                "Một bảng mạch in (PCB) lớn",
                "Một loại dây dẫn điện đặc biệt"
            ],
            correct: 1,
            explanation: "IC giúp thu nhỏ kích thước thiết bị điện tử, tăng độ tin cậy và giảm giá thành."
        },
        // ── VI ĐIỀU KHIỂN & MẠCH ĐIỆN TỬ CHUYÊN DỤNG ───────────────────────
        {
            type: "multiple",
            question: "Vi điều khiển (Microcontroller) khác với Vi xử lí (Microprocessor) ở điểm cơ bản nào?",
            options: [
                "Vi điều khiển không có bộ nhớ",
                "Vi điều khiển tích hợp sẵn cả CPU, bộ nhớ (RAM, ROM) và các cổng vào/ra trên cùng một con chip",
                "Vi điều khiển chỉ dùng cho máy tính để bàn",
                "Vi xử lí kích thước nhỏ hơn Vi điều khiển"
            ],
            correct: 1,
            explanation: "Vi điều khiển như một máy tính siêu nhỏ hoàn chỉnh, được dùng để điều khiển các thiết bị cụ thể (máy giặt, điều hòa, robot...)."
        },
        {
            type: "multiple",
            question: "Trong bo mạch Arduino Uno (sử dụng vi điều khiển ATmega328P), cổng Analog (A0-A5) dùng để làm gì?",
            options: [
                "Cấp nguồn điện 5V",
                "Chỉ xuất tín hiệu bật/tắt bóng đèn",
                "Đọc các tín hiệu tương tự (liên tục) từ các cảm biến (như cảm biến nhiệt độ, ánh sáng)",
                "Kết nối với mạng Wifi"
            ],
            correct: 2,
            explanation: "Chân Analog (A) dùng để đọc điện áp thay đổi liên tục và chuyển đổi thành tín hiệu số (ADC) cho vi điều khiển xử lí."
        },
        {
            type: "multiple",
            question: "Một mạch khuếch đại thuật toán (Op-Amp) lí tưởng có đặc điểm điện trở vào (R_in) và điện trở ra (R_out) như thế nào?",
            options: [
                "R_in = 0, R_out = vô cùng",
                "R_in = vô cùng lớn, R_out = xấp xỉ 0",
                "Cả hai đều bằng 0",
                "Cả hai đều vô cùng lớn"
            ],
            correct: 1,
            explanation: "Op-Amp lí tưởng có hệ số khuếch đại vô cùng, trở kháng vào vô cùng (không hút dòng đầu vào) và trở kháng ra bằng 0 (dẫn dòng đầu ra tối đa)."
        },
        {
            type: "multiple",
            question: "Trong mạch tạo xung đa hài tự dao động dùng transistor, người ta dùng linh kiện nào để tạo ra thời gian trễ (chu kì dao động)?",
            options: ["Điện trở và Cuộn cảm", "Điện trở và Tụ điện (Mạch RC)", "Chỉ dùng Diode", "Biến áp"],
            correct: 1,
            explanation: "Sự nạp và phóng điện của tụ điện qua điện trở quyết định thời gian luân phiên đóng cắt của 2 transistor (tạo xung vuông)."
        },
        // ── HỆ THỐNG ĐIỆN QUỐC GIA ────────────────────────────────────────
        {
            type: "multiple",
            question: "Hệ thống điện quốc gia bao gồm các thành phần chính nào?",
            options: [
                "Các nhà máy phát điện và các hộ tiêu thụ điện",
                "Nguồn điện (nhà máy điện), lưới điện (trạm biến áp, đường dây) và các hộ tiêu thụ điện trên toàn quốc",
                "Đường dây 500kV Bắc - Nam",
                "Các trạm biến áp hạ áp và lưới điện sinh hoạt"
            ],
            correct: 1,
            explanation: "Hệ thống điện quốc gia là một thể thống nhất gồm sản xuất (nguồn), truyền tải, phân phối (lưới) và tiêu thụ điện."
        },
        {
            type: "multiple",
            question: "Vì sao phải truyền tải điện năng đi xa bằng điện áp cao (ví dụ 500kV)?",
            options: [
                "Để dòng điện chạy nhanh hơn",
                "Để giảm hao phí điện năng dưới dạng nhiệt tỏa ra trên đường dây truyền tải",
                "Để ngăn chặn người dân câu trộm điện",
                "Để an toàn hơn cho người sử dụng"
            ],
            correct: 1,
            explanation: "Công suất hao phí tỏa nhiệt tỉ lệ nghịch với bình phương điện áp truyền tải. Điện áp càng cao, dòng điện càng nhỏ, hao phí tỏa nhiệt (I^2.R) càng giảm."
        },
        {
            type: "multiple",
            question: "Lưới điện truyền tải ở Việt Nam thường có điện áp từ bao nhiêu trở lên?",
            options: ["220V và 380V", "Từ 110 kV đến 500 kV", "Từ 22 kV đến 35 kV", "Dưới 1000V"],
            correct: 1,
            explanation: "Lưới điện phân phối có cấp điện áp từ 35kV trở xuống, lưới điện truyền tải (đi xa) là 110kV, 220kV, 500kV."
        },
        {
            type: "multiple",
            question: "Trong máy biến áp điện lực 3 pha, nếu muốn lấy ra cả nguồn 3 pha (380V) và nguồn 1 pha (220V) cho sinh hoạt, cuộn thứ cấp thường được nối theo hình gì?",
            options: ["Nối hình tam giác", "Nối hình sao có dây trung tính (Y/yo)", "Nối nối tiếp", "Nối song song"],
            correct: 1,
            explanation: "Nối hình sao có dây trung tính (dây mát) cho phép lấy ra điện áp dây (380V, giữa 2 dây pha) và điện áp pha (220V, giữa 1 dây pha và dây trung tính)."
        },
        // ── MẠCH ĐIỆN SẢN XUẤT QUY MÔ NHỎ ─────────────────────────────────
        {
            type: "multiple",
            question: "Mạng điện sản xuất quy mô nhỏ thường nhận điện năng từ lưới điện phân phối có điện áp là bao nhiêu?",
            options: ["500 kV", "220 kV", "Từ 22 kV đến 35 kV, sau đó hạ áp xuống 380V/220V", "12V"],
            correct: 2,
            explanation: "Các cơ sở sản xuất nhỏ thường dùng trạm biến áp hạ áp riêng biệt, nhận điện trung thế (22kV) hạ xuống hạ thế (380V 3 pha) cho máy móc."
        },
        {
            type: "multiple",
            question: "Trong tủ điện phân phối của xưởng sản xuất, thiết bị nào có chức năng đóng cắt nguồn điện tổng và bảo vệ ngắn mạch, quá tải?",
            options: ["Khởi động từ (Contactor)", "Rơ le nhiệt", "Cầu dao tự động (Aptomat/ MCCB, MCB)", "Cầu chì"],
            correct: 2,
            explanation: "Aptomat (CB) là thiết bị đóng cắt tự động khi dòng điện vượt ngưỡng an toàn."
        },
        {
            type: "multiple",
            question: "Động cơ điện không đồng bộ 3 pha có cấu tạo gồm 2 phần chính là gì?",
            options: [
                "Bugi và Piston",
                "Stator (phần đứng yên) và Rotor (phần quay)",
                "Cuộn sơ cấp và cuộn thứ cấp",
                "Cổ góp và chổi than"
            ],
            correct: 1,
            explanation: "Đây là cấu tạo cơ bản của mọi động cơ điện AC."
        },
        {
            type: "multiple",
            question: "Ưu điểm lớn nhất của động cơ điện không đồng bộ 3 pha rôto lồng sóc là:",
            options: [
                "Cấu tạo đơn giản, giá rẻ, vận hành bền bỉ, dễ bảo trì",
                "Dễ dàng điều chỉnh tốc độ bằng điện trở phụ",
                "Sử dụng dòng điện một chiều DC",
                "Có mômen khởi động lớn nhất trong các loại động cơ"
            ],
            correct: 0,
            explanation: "Nhờ kết cấu rôto lồng sóc (không có chổi than, vành trượt), động cơ này cực kì bền, rẻ và được dùng rộng rãi nhất trong công nghiệp."
        },
        {
            type: "multiple",
            question: "Thiết bị nào thường được dùng kết hợp với Aptomat để bảo vệ động cơ 3 pha khỏi bị cháy khi quá tải lâu dài?",
            options: ["Cầu chì", "Khởi động từ (Contactor)", "Rơ le nhiệt", "Tụ điện"],
            correct: 2,
            explanation: "Rơ le nhiệt có thanh lưỡng kim, khi quá tải sinh nhiệt làm thanh kim loại cong đi, ngắt mạch điều khiển để dừng động cơ."
        },
        {
            type: "multiple",
            question: "Để đổi chiều quay của động cơ điện không đồng bộ 3 pha, ta thực hiện thao tác nào?",
            options: [
                "Tăng điện áp nguồn",
                "Đổi chiều cắm phích điện",
                "Đổi vị trí 2 trong 3 pha điện cấp vào stator của động cơ",
                "Lắp thêm tụ điện"
            ],
            correct: 2,
            explanation: "Khi đổi vị trí 2 dây pha bất kì, từ trường quay trong stator sẽ đảo chiều, kéo theo rotor quay ngược lại."
        },
        // ── AN TOÀN ĐIỆN VÀ KHÁC ──────────────────────────────────────────
        {
            type: "multiple",
            question: "Biện pháp 'nối đất bảo vệ' (tiếp địa) vỏ kim loại của thiết bị điện có tác dụng gì?",
            options: [
                "Tiết kiệm điện năng",
                "Đưa dòng điện rò rỉ truyền xuống đất, giữ điện áp ở vỏ máy ở mức an toàn, bảo vệ người khi chạm vào không bị điện giật",
                "Làm tăng công suất của máy",
                "Bảo vệ thiết bị không bị sét đánh"
            ],
            correct: 1,
            explanation: "Nối đất vỏ máy tạo ra một điện trở rất nhỏ nối song song với người, dòng điện rò sẽ đi qua dây nối đất thay vì đi qua cơ thể người."
        },
        {
            type: "multiple",
            question: "Cảm biến (Sensor) trong các hệ thống tự động hóa có vai trò giống với bộ phận nào của con người?",
            options: ["Não bộ", "Cơ bắp", "Các giác quan (mắt, tai, da...)", "Hệ tiêu hóa"],
            correct: 2,
            explanation: "Cảm biến thu nhận thông tin từ môi trường (nhiệt độ, ánh sáng, vật cản...) chuyển thành tín hiệu điện gửi về bộ điều khiển."
        },
        {
            type: "multiple",
            question: "Trong kĩ thuật số, cổng logic AND cho tín hiệu đầu ra ở mức CAO (1) khi nào?",
            options: [
                "Khi có ít nhất 1 đầu vào ở mức 1",
                "Khi tất cả các đầu vào đều ở mức CAO (1)",
                "Khi các đầu vào đều ở mức 0",
                "Khi các đầu vào khác nhau"
            ],
            correct: 1,
            explanation: "Cổng AND thực hiện phép nhân logic: 1 AND 1 = 1. Các trường hợp khác đều bằng 0."
        },
        {
            type: "multiple",
            question: "Mạch điện tử điều khiển là mạch:",
            options: [
                "Chỉ dùng để biến đổi nguồn xoay chiều thành một chiều",
                "Xử lí các tín hiệu điện tử để đưa ra lệnh điều khiển hoạt động của các máy móc, thiết bị (ví dụ: board mạch máy giặt)",
                "Tạo ra dòng điện xoay chiều tần số cao",
                "Dẫn điện 3 pha"
            ],
            correct: 1,
            explanation: "Mạch điều khiển là 'bộ não' của các thiết bị điện tử hiện đại, sử dụng IC, vi điều khiển để tự động hóa công việc."
        },
        {
            type: "multiple",
            question: "Dòng điện xoay chiều 3 pha có đặc điểm gì?",
            options: [
                "Gồm 3 dòng điện một chiều đi trên 3 dây",
                "Gồm 3 dòng điện xoay chiều 1 pha cùng biên độ, cùng tần số nhưng lệch pha nhau góc 120 độ (2π/3)",
                "Gồm 1 dòng điện nhưng đi qua 3 dây khác nhau",
                "Tần số của 3 pha khác nhau"
            ],
            correct: 1,
            explanation: "Đây là định nghĩa chuẩn của dòng điện xoay chiều 3 pha sinh ra từ máy phát điện 3 pha."
        },
        // ── TỰ LUẬN ──────────────────────────────────────────────────────
        {
            type: "essay",
            question: "Hãy phân biệt dòng điện xoay chiều (AC) và dòng điện một chiều (DC) về đặc điểm, nguồn tạo ra và ứng dụng cơ bản.",
            suggested: "1. Đặc điểm:\n- AC (Alternating Current): Chiều và trị số biến đổi theo thời gian (thường theo quy luật hình sin). Có đặc tính tần số (VD: lưới điện VN là 50Hz).\n- DC (Direct Current): Chiều không đổi, trị số thường cố định theo thời gian.\n\n2. Nguồn tạo ra:\n- AC: Tạo ra từ máy phát điện xoay chiều (ở các nhà máy thủy điện, nhiệt điện...).\n- DC: Tạo ra từ Pin, Ắc quy, pin mặt trời, hoặc dùng mạch chỉnh lưu biến AC thành DC.\n\n3. Ứng dụng:\n- AC: Dùng để truyền tải điện năng đi xa (vì dễ dàng thay đổi điện áp bằng máy biến áp), cấp nguồn cho các thiết bị sinh hoạt, động cơ công nghiệp.\n- DC: Cấp nguồn cho các mạch điện tử, thiết bị cầm tay (điện thoại, laptop), xe điện.",
            points: 25,
            explanation: "AI chấm: Nêu được sự khác biệt về chiều dòng điện (10đ); Kể đúng nguồn tạo ra (AC từ máy phát, DC từ pin/ắc quy) (7đ); Nêu được ứng dụng (AC truyền tải/sinh hoạt, DC mạch điện tử/pin) (8đ)."
        },
        {
            type: "essay",
            question: "Trình bày các bước cơ bản để thiết kế một mạch điện tử đơn giản. Tại sao hiện nay Vi điều khiển (Microcontroller) lại được ứng dụng rộng rãi thay thế cho các mạch logic rời rạc?",
            suggested: "1. Các bước thiết kế mạch điện tử:\n- B1: Xác định yêu cầu kĩ thuật, chức năng của mạch.\n- B2: Lên phương án, chọn sơ đồ khối và thiết kế sơ đồ nguyên lí.\n- B3: Tính toán, lựa chọn linh kiện điện tử phù hợp.\n- B4: Thiết kế sơ đồ lắp ráp (vẽ mạch in PCB) và thi công, thử nghiệm.\n\n2. Lí do Vi điều khiển được ứng dụng rộng rãi:\n- Kích thước siêu nhỏ nhưng tích hợp đầy đủ CPU, bộ nhớ, cổng vào/ra (như một máy tính thu nhỏ).\n- Lập trình linh hoạt: Thay vì phải thay đổi phần cứng (nhổ/hàn linh kiện) như mạch logic cũ, người ta chỉ cần viết lại đoạn mã phần mềm (code) để thay đổi chức năng điều khiển.\n- Giúp mạch điện tử gọn gàng, độ tin cậy cao, dễ nâng cấp và giá thành rẻ.",
            points: 25,
            explanation: "AI chấm: Liệt kê tối thiểu 3 bước thiết kế (Xác định yêu cầu -> Vẽ nguyên lí -> Tính chọn linh kiện -> Mạch in/Thử nghiệm) (12đ). Giải thích được tính linh hoạt, lập trình bằng phần mềm và thu gọn phần cứng của Vi điều khiển (13đ)."
        },
        {
            type: "essay",
            question: "Lưới điện quốc gia có vai trò gì đối với sự phát triển kinh tế - xã hội? Việc sử dụng điện tiết kiệm và hiệu quả mang lại những lợi ích thiết thực nào?",
            suggested: "1. Vai trò của lưới điện quốc gia:\n- Cung cấp năng lượng huyết mạch cho mọi ngành kinh tế (công nghiệp, nông nghiệp, dịch vụ).\n- Nâng cao đời sống vật chất, tinh thần của nhân dân (phục vụ sinh hoạt, giáo dục, y tế).\n- Đảm bảo an ninh năng lượng và phát triển đồng đều giữa các vùng miền miền núi, hải đảo.\n\n2. Lợi ích của tiết kiệm điện:\n- Lợi ích cá nhân/doanh nghiệp: Giảm chi phí hóa đơn tiền điện hàng tháng, tăng tuổi thọ thiết bị.\n- Lợi ích quốc gia: Giảm áp lực đầu tư xây dựng nhà máy điện mới, hạn chế cắt điện luân phiên trong giờ cao điểm.\n- Lợi ích môi trường: Giảm thiểu khai thác tài nguyên (than đá, khí đốt) và giảm phát thải khí nhà kính (CO2), bảo vệ môi trường, chống biến đổi khí hậu.",
            points: 25,
            explanation: "AI chấm: Nêu vai trò lưới điện (huyết mạch kinh tế, dân sinh) (10đ). Nêu lợi ích tiết kiệm điện trên 3 phương diện: Kinh tế gia đình, Kinh tế quốc gia, Bảo vệ môi trường sinh thái (15đ)."
        }
    ]
};
