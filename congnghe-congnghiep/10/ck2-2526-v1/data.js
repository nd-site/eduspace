// data.js – KIỂM TRA CUỐI KÌ II – CÔNG NGHỆ 10 (THIẾT KẾ VÀ CÔNG NGHỆ) – KNTT 2025-2026
// Chương trình GDPT 2018 | Sách Kết Nối Tri Thức với Cuộc Sống
// Nội dung HK2: Hình chiếu trục đo, Bản vẽ chi tiết, Bản vẽ lắp, Bản vẽ xây dựng (Bản vẽ nhà)
// 28 câu TN (×0,25đ = 7đ) + 3 câu TL (×1đ = 3đ) | 45 phút

window.quizData = {
    title: "Kiểm tra Cuối Học Kì II – Công nghệ 10 (Thiết kế và Công nghệ) 2025-2026",
    config: {
        testDuration: 2700,
        examLayout: {
            multiple: { count: 28, pointsPerQ: 0.25 },
            essay: { count: 3, pointsPerQ: 1.0 }
        }
    },
    questions: [
        // ── HÌNH CHIẾU TRỤC ĐO ─────────────────────────────────────────────
        {
            type: "multiple",
            question: "Hình chiếu trục đo là hình biểu diễn được xây dựng bằng phép chiếu nào?",
            options: [
                "Phép chiếu xuyên tâm",
                "Phép chiếu song song",
                "Phép chiếu vuông góc (lên một mặt phẳng tọa độ)",
                "Phép chiếu phối cảnh"
            ],
            correct: 1,
            explanation: "Hình chiếu trục đo dùng phép chiếu song song để chiếu vật thể cùng hệ trục tọa độ vuông góc lên một mặt phẳng (mặt phẳng hình chiếu)."
        },
        {
            type: "multiple",
            question: "Đặc điểm chính của hình chiếu trục đo là gì?",
            options: [
                "Chỉ thể hiện được một mặt của vật thể",
                "Thể hiện đồng thời 3 chiều (chiều dài, chiều rộng, chiều cao) của vật thể trên cùng một mặt phẳng",
                "Cho hình ảnh giống hệt như mắt người nhìn trong thực tế (có tụ điểm)",
                "Không có tỉ lệ biến dạng"
            ],
            correct: 1,
            explanation: "Hình chiếu trục đo là hình biểu diễn không gian 3 chiều của vật thể, giúp người đọc dễ hình dung hình dáng vật thể."
        },
        {
            type: "multiple",
            question: "Trong hình chiếu trục đo vuông góc đều, góc giữa các trục đo (x'O'y', y'O'z', z'O'x') bằng bao nhiêu?",
            options: ["90 độ", "120 độ", "135 độ", "180 độ"],
            correct: 1,
            explanation: "HCTĐ vuông góc đều có 3 góc trục đo bằng nhau và bằng 120 độ."
        },
        {
            type: "multiple",
            question: "Trong hình chiếu trục đo vuông góc đều, hệ số biến dạng theo các trục (p, q, r) có đặc điểm gì?",
            options: [
                "p = q = r = 1",
                "p = r = 1; q = 0.5",
                "p = 0.5; q = r = 1",
                "p = q = r = 0.5"
            ],
            correct: 0,
            explanation: "Trong HCTĐ vuông góc đều, để thuận tiện cho việc vẽ, người ta quy ước lấy hệ số biến dạng p = q = r = 1."
        },
        {
            type: "multiple",
            question: "Trong hình chiếu trục đo xiên góc cân, góc trục đo x'O'z' bằng bao nhiêu?",
            options: ["90 độ", "120 độ", "135 độ", "45 độ"],
            correct: 0,
            explanation: "HCTĐ xiên góc cân có mặt phẳng tọa độ xOz song song với mặt phẳng hình chiếu nên góc x'O'z' = 90 độ."
        },
        {
            type: "multiple",
            question: "Trong hình chiếu trục đo xiên góc cân, hệ số biến dạng theo trục O'y' (trục chiều rộng) là bao nhiêu?",
            options: ["p = 1", "q = 0.5", "q = 1", "r = 0.5"],
            correct: 1,
            explanation: "HCTĐ xiên góc cân có p = r = 1 (trục x', z') và q = 0.5 (trục y')."
        },
        // ── BẢN VẼ CHI TIẾT ───────────────────────────────────────────────
        {
            type: "multiple",
            question: "Nội dung của một bản vẽ chi tiết bao gồm những phần nào?",
            options: [
                "Hình biểu diễn, kích thước, yêu cầu kĩ thuật, khung tên",
                "Hình chiếu đứng, hình chiếu bằng, hình chiếu cạnh",
                "Bảng kê, hình biểu diễn, khung tên",
                "Hình cắt, mặt cắt, kích thước"
            ],
            correct: 0,
            explanation: "Bản vẽ chi tiết gồm 4 nội dung chính: Khung tên, Hình biểu diễn, Kích thước, Yêu cầu kĩ thuật."
        },
        {
            type: "multiple",
            question: "Công dụng của bản vẽ chi tiết là gì?",
            options: [
                "Dùng để lắp ráp các chi tiết thành cụm máy",
                "Dùng để chế tạo và kiểm tra chi tiết",
                "Dùng để giới thiệu sản phẩm cho khách hàng",
                "Dùng để thi công xây dựng công trình"
            ],
            correct: 1,
            explanation: "Bản vẽ chi tiết là tài liệu kĩ thuật thể hiện hình dáng, kích thước, vật liệu, độ nhám bề mặt... dùng để chế tạo và kiểm tra chi tiết đó."
        },
        {
            type: "multiple",
            question: "Trình tự đọc một bản vẽ chi tiết đúng nhất là:",
            options: [
                "Khung tên → Kích thước → Hình biểu diễn → Yêu cầu kĩ thuật",
                "Hình biểu diễn → Khung tên → Kích thước → Yêu cầu kĩ thuật",
                "Khung tên → Hình biểu diễn → Kích thước → Yêu cầu kĩ thuật",
                "Yêu cầu kĩ thuật → Khung tên → Hình biểu diễn → Kích thước"
            ],
            correct: 2,
            explanation: "Bước 1: Đọc khung tên để biết tên chi tiết, vật liệu, tỉ lệ. Bước 2: Hình biểu diễn. Bước 3: Kích thước. Bước 4: Yêu cầu kĩ thuật."
        },
        {
            type: "multiple",
            question: "Trên bản vẽ chi tiết, ghi chú 'Làm sạch bavia' hoặc 'Mạ kẽm' thường nằm ở phần nào?",
            options: ["Khung tên", "Hình biểu diễn", "Kích thước", "Yêu cầu kĩ thuật"],
            correct: 3,
            explanation: "Các chỉ dẫn về gia công, xử lí bề mặt, nhiệt luyện... được ghi ở phần Yêu cầu kĩ thuật."
        },
        // ── BẢN VẼ LẮP ────────────────────────────────────────────────────
        {
            type: "multiple",
            question: "Bản vẽ lắp khác bản vẽ chi tiết ở điểm nổi bật nào?",
            options: [
                "Bản vẽ lắp không có hình biểu diễn",
                "Bản vẽ lắp có bảng kê các chi tiết",
                "Bản vẽ lắp không có khung tên",
                "Bản vẽ lắp chỉ vẽ bằng hình chiếu trục đo"
            ],
            correct: 1,
            explanation: "Nội dung bản vẽ lắp gồm: Hình biểu diễn, Kích thước, Bảng kê, Khung tên. Bảng kê liệt kê số lượng, tên gọi các chi tiết để lắp ráp."
        },
        {
            type: "multiple",
            question: "Công dụng chính của bản vẽ lắp là gì?",
            options: [
                "Dùng để chế tạo từng chi tiết máy",
                "Dùng để lắp ráp các chi tiết thành sản phẩm và hướng dẫn sử dụng",
                "Dùng để thiết kế kết cấu nhà cửa",
                "Dùng để kiểm tra độ cứng của vật liệu"
            ],
            correct: 1,
            explanation: "Bản vẽ lắp thể hiện vị trí, quan hệ lắp ghép giữa các chi tiết, dùng làm tài liệu kĩ thuật cho quá trình lắp ráp."
        },
        {
            type: "multiple",
            question: "Trên bản vẽ lắp, các kích thước nào thường được ghi?",
            options: [
                "Tất cả các kích thước của từng chi tiết nhỏ nhất",
                "Kích thước chung (dài, rộng, cao lớn nhất), kích thước lắp ráp và kích thước lắp đặt",
                "Chỉ ghi kích thước đường kính lỗ",
                "Không ghi bất kì kích thước nào"
            ],
            correct: 1,
            explanation: "Bản vẽ lắp không ghi mọi kích thước, chỉ ghi kích thước choán chỗ (chung), kích thước khoảng cách giữa các chi tiết (lắp ráp)."
        },
        {
            type: "multiple",
            question: "Để đánh số vị trí các chi tiết trên bản vẽ lắp, người ta dùng:",
            options: [
                "Chữ cái A, B, C...",
                "Đường dóng và đường dẫn có vẽ dấu chấm ở đầu, cuối đường dẫn ghi số thứ tự",
                "Vẽ mũi tên chỉ thẳng vào hình chiếu",
                "Tô màu khác nhau cho từng chi tiết"
            ],
            correct: 1,
            explanation: "Đánh số chi tiết dùng đường dẫn (kẻ từ chi tiết ra ngoài), đầu có dấu chấm đen, cuối đường dẫn ghi số thứ tự tương ứng với bảng kê."
        },
        {
            type: "multiple",
            question: "Trình tự đọc bản vẽ lắp đúng nhất là:",
            options: [
                "Khung tên → Bảng kê → Hình biểu diễn → Kích thước → Phân tích chi tiết → Tổng hợp",
                "Hình biểu diễn → Bảng kê → Khung tên → Kích thước",
                "Khung tên → Phân tích chi tiết → Bảng kê → Hình biểu diễn",
                "Bảng kê → Hình biểu diễn → Khung tên → Kích thước"
            ],
            correct: 0,
            explanation: "Đọc theo thứ tự: Khung tên (tên cụm lắp) -> Bảng kê (có những chi tiết gì) -> Hình biểu diễn -> Kích thước -> Phân tích (vị trí lắp) -> Tổng hợp."
        },
        // ── BẢN VẼ XÂY DỰNG (BẢN VẼ NHÀ) ──────────────────────────────────
        {
            type: "multiple",
            question: "Bản vẽ xây dựng chủ yếu bao gồm những bản vẽ nào?",
            options: [
                "Bản vẽ chi tiết và bản vẽ lắp",
                "Bản vẽ quy hoạch, bản vẽ kiến trúc, bản vẽ kết cấu, hệ thống điện nước...",
                "Bản vẽ hình chiếu trục đo vuông góc đều",
                "Bản vẽ trải vật thể"
            ],
            correct: 1,
            explanation: "Bản vẽ xây dựng là tài liệu kĩ thuật dùng trong thiết kế, thi công các công trình xây dựng (nhà, cầu đường...)."
        },
        {
            type: "multiple",
            question: "Trong bản vẽ nhà, hình biểu diễn quan trọng nhất là:",
            options: ["Mặt đứng", "Mặt cắt", "Mặt bằng", "Hình chiếu trục đo"],
            correct: 2,
            explanation: "Mặt bằng là hình cắt bằng của ngôi nhà (cắt ngang cách sàn khoảng 1.5m), thể hiện bố trí các phòng, cửa, tường... Rất quan trọng."
        },
        {
            type: "multiple",
            question: "Mặt đứng của ngôi nhà là hình chiếu thể hiện mặt nào của công trình?",
            options: [
                "Mặt cắt ngang qua các phòng",
                "Mặt chiếu thẳng góc từ trên xuống",
                "Hình chiếu vuông góc từ ngoài nhìn vào (thường là mặt tiền), thể hiện hình dáng kiến trúc bên ngoài",
                "Mặt bằng móng"
            ],
            correct: 2,
            explanation: "Mặt đứng cho thấy vẻ đẹp kiến trúc, chiều cao các tầng, vị trí ban công, mái nhà nhìn từ ngoài vào."
        },
        {
            type: "multiple",
            question: "Mặt cắt của ngôi nhà được tạo ra bởi mặt phẳng cắt đi qua vị trí nào?",
            options: [
                "Đi ngang qua cửa sổ",
                "Đi thẳng đứng qua ngôi nhà (thường cắt qua cầu thang, cửa sổ, cửa đi)",
                "Đi chéo góc 45 độ qua mái nhà",
                "Cắt ngang móng nhà"
            ],
            correct: 1,
            explanation: "Mặt cắt (cắt đứng) giúp thấy rõ cấu tạo sàn, chiều cao cửa, cầu thang, nền móng, mái..."
        },
        {
            type: "multiple",
            question: "Kí hiệu một cung tròn kèm theo đường nét liền mảnh hình chữ nhật/vuông đứt nét trên bản vẽ mặt bằng nhà thường biểu diễn cho:",
            options: ["Cửa sổ", "Cửa đi 1 cánh có hướng mở", "Cầu thang", "Giường ngủ"],
            correct: 1,
            explanation: "Cung tròn chỉ quỹ đạo mở cửa (hướng mở) của cánh cửa đi."
        },
        {
            type: "multiple",
            question: "Kích thước trên bản vẽ nhà (như chiều rộng phòng, chiều dày tường) thường sử dụng đơn vị đo chuẩn nào (nếu không ghi rõ đơn vị)?",
            options: ["Mét (m)", "Centimét (cm)", "Milimét (mm)", "Inch"],
            correct: 2,
            explanation: "Giống như bản vẽ cơ khí, kích thước chiều dài trên bản vẽ xây dựng mặc định tính bằng milimet (mm), cao độ thì dùng mét (m)."
        },
        // ── TIÊU CHUẨN TRÌNH BÀY BẢN VẼ & KHÁC ───────────────────────────
        {
            type: "multiple",
            question: "Theo TCVN, nét liền đậm (bề rộng d) được dùng để vẽ đường nào?",
            options: [
                "Đường tâm, trục đối xứng",
                "Đường bao khuất, cạnh khuất",
                "Đường bao thấy, cạnh thấy",
                "Đường kích thước, đường dóng"
            ],
            correct: 2,
            explanation: "Nét liền đậm (0.5 - 0.7mm) dùng vẽ các đường bao thấy, cạnh thấy của vật thể."
        },
        {
            type: "multiple",
            question: "Nét đứt mảnh được dùng để vẽ:",
            options: [
                "Đường tâm hình tròn",
                "Đường kích thước",
                "Đường bao khuất, cạnh khuất",
                "Đường giới hạn hình cắt"
            ],
            correct: 2,
            explanation: "Nét đứt mảnh dùng để biểu diễn các phần bị che khuất không nhìn thấy."
        },
        {
            type: "multiple",
            question: "Tỉ lệ 1:2 ghi trên bản vẽ có ý nghĩa gì?",
            options: [
                "Kích thước trên bản vẽ lớn gấp 2 lần kích thước thật (tỉ lệ phóng to)",
                "Kích thước trên bản vẽ bằng 1/2 kích thước thật của vật thể (tỉ lệ thu nhỏ)",
                "Kích thước thật bằng 1/2 kích thước bản vẽ",
                "Hai hình vẽ có kích thước bằng nhau"
            ],
            correct: 1,
            explanation: "1:2 là tỉ lệ thu nhỏ, nghĩa là cứ 1mm trên giấy vẽ tương ứng với 2mm ở ngoài thực tế. Kích thước ghi trên bản vẽ vẫn là kích thước thật."
        },
        {
            type: "multiple",
            question: "Trong phép chiếu vuông góc, Hình chiếu bằng được chiếu lên mặt phẳng nào và nhìn từ hướng nào?",
            options: [
                "Mặt phẳng chiếu đứng, nhìn từ trước tới",
                "Mặt phẳng chiếu bằng, nhìn từ trên xuống",
                "Mặt phẳng chiếu cạnh, nhìn từ trái sang phải",
                "Mặt phẳng chiếu cạnh, nhìn từ phải sang trái"
            ],
            correct: 1,
            explanation: "Hình chiếu bằng đặt dưới hình chiếu đứng, nhìn từ trên xuống dưới."
        },
        {
            type: "multiple",
            question: "Mặt cắt (cơ khí) là hình biểu diễn phần vật thể nằm ở đâu?",
            options: [
                "Nằm trước mặt phẳng cắt",
                "Nằm ngay trên mặt phẳng cắt",
                "Nằm sau mặt phẳng cắt (bao gồm cả phần bị cắt)",
                "Nằm bên ngoài mặt phẳng chiếu"
            ],
            correct: 1,
            explanation: "Mặt cắt chỉ vẽ phần vật thể tiếp xúc (nằm trên) mặt phẳng cắt, thường gạch mặt cắt (tuyến ảnh)."
        },
        {
            type: "multiple",
            question: "Phần mềm nào sau đây là phần mềm thiết kế hỗ trợ máy tính (CAD) phổ biến nhất để vẽ bản vẽ kĩ thuật 2D?",
            options: ["Microsoft Word", "Adobe Photoshop", "AutoCAD", "Microsoft Excel"],
            correct: 2,
            explanation: "AutoCAD là phần mềm tiêu chuẩn trong vẽ kĩ thuật cơ khí và xây dựng."
        },
        // ── TỰ LUẬN ──────────────────────────────────────────────────────
        {
            type: "essay",
            question: "Trình bày sự khác nhau cơ bản giữa Hình chiếu trục đo vuông góc đều và Hình chiếu trục đo xiên góc cân (về góc trục đo và hệ số biến dạng). Ứng dụng của chúng?",
            suggested: "1. Hình chiếu trục đo vuông góc đều:\n- Góc trục đo: x'O'y' = y'O'z' = z'O'x' = 120 độ.\n- Hệ số biến dạng: p = q = r = 1.\n- Ứng dụng: Hình biểu diễn cân đối, thường dùng vẽ các vật thể có các mặt đều nhau.\n\n2. Hình chiếu trục đo xiên góc cân:\n- Góc trục đo: x'O'z' = 90 độ; x'O'y' = y'O'z' = 135 độ.\n- Hệ số biến dạng: p = r = 1; q = 0.5 (trục y' bị thu nhỏ một nửa).\n- Ứng dụng: Dùng khi vật thể có nhiều vòng tròn ở mặt trước (mặt xOz), vì khi đó hình tròn trên mặt xOz không bị biến dạng thành elip, dễ vẽ bằng compa.",
            points: 25,
            explanation: "AI chấm: Phân biệt đúng góc trục đo (10đ) và hệ số biến dạng (10đ) của hai loại. Nêu được ưu điểm vẽ đường tròn mặt trước của xiên góc cân (5đ)."
        },
        {
            type: "essay",
            question: "Bản vẽ nhà là gì? Kể tên và trình bày khái quát nội dung của 3 hình biểu diễn chính trên bản vẽ nhà (mặt bằng, mặt đứng, mặt cắt).",
            suggested: "1. Khái niệm: Bản vẽ nhà là tài liệu kĩ thuật thể hiện hình dáng, kích thước, cấu tạo của ngôi nhà, dùng để thi công xây dựng.\n2. Ba hình biểu diễn chính:\n- Mặt bằng: Là hình cắt bằng (cắt ngang nhà cách mặt sàn khoảng 1.5m). Thể hiện vị trí tường, vách ngăn, cửa đi, cửa sổ, kích thước các phòng... Đây là hình quan trọng nhất.\n- Mặt đứng: Là hình chiếu vuông góc mặt ngoài ngôi nhà lên mặt phẳng thẳng đứng. Thể hiện hình dáng bên ngoài, kiến trúc, vẻ đẹp mặt tiền.\n- Mặt cắt: Là hình cắt tạo bởi mặt phẳng cắt thẳng đứng (vuông góc mặt đất) cắt qua các phần chính yếu (cầu thang, cửa sổ). Thể hiện chiều cao các tầng, cấu tạo sàn, móng, mái nhà.",
            points: 25,
            explanation: "AI chấm: Nêu đúng khái niệm bản vẽ nhà (5đ). Giải thích đúng và đủ chức năng của Mặt bằng (8đ), Mặt đứng (6đ) và Mặt cắt (6đ)."
        },
        {
            type: "essay",
            question: "Cho một bản vẽ chi tiết cơ khí ghi tỉ lệ 1:5. Trên bản vẽ, chiều dài của một trục đo được là 40 mm. Hỏi chiều dài thật của trục đó ngoài thực tế là bao nhiêu mm? Nêu ý nghĩa của việc ghi kích thước trên bản vẽ chi tiết.",
            suggested: "1. Tính toán:\n- Tỉ lệ 1:5 nghĩa là kích thước vẽ nhỏ gấp 5 lần kích thước thật ngoài đời.\n- Kích thước đo trên giấy = 40 mm.\n- Chiều dài thật = 40 mm × 5 = 200 mm.\n*(Tuy nhiên, cần lưu ý: Con số kích thước ghi trên bản vẽ LUÔN LUÔN là kích thước thật của vật thể, không phụ thuộc vào tỉ lệ vẽ. Nếu đề hỏi 'Con số ghi trên bản vẽ là bao nhiêu' thì đáp án là 200).* \n\n2. Ý nghĩa của ghi kích thước:\n- Kích thước ghi trên bản vẽ là căn cứ duy nhất để người thợ gia công, chế tạo chi tiết đúng với yêu cầu thiết kế.\n- Giúp người kiểm tra (KCS) dùng dụng cụ đo để kiểm tra sản phẩm xem có đạt yêu cầu hay không.",
            points: 25,
            explanation: "AI chấm: Tính toán đúng chiều dài thật (200mm) hoặc giải thích hiểu đúng tỉ lệ 1:5 (15đ). Nêu được ý nghĩa để chế tạo và kiểm tra sản phẩm (10đ)."
        }
    ]
};
