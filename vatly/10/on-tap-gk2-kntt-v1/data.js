// data.js – ÔN TẬP GIỮA HỌC KÌ II – VẬT LÝ 10 (KNTT) – 2025-2026
// Bài 21 → 26 | 60 câu TN + 6 bài Tự luận
// examLayout: 14 câu TN (×0,5đ = 7đ) + 3 câu TL (×1đ = 3đ) | 45 phút

window.quizData = {
    title: "Ôn tập Giữa Học Kì II – Vật Lý 10 (Kết nối tri thức) 2025-2026",
    config: {
        testDuration: 2700,  // 45 phút
        examLayout: {
            multiple: { count: 14, pointsPerQ: 0.5 },
            essay: { count: 3, pointsPerQ: 1.0 }
        }
    },
    questions: [

        // ══════════════════════════════════════════════════════════════════
        //  BÀI 21: MOMENT LỰC – CÂN BẰNG CỦA VẬT RẮN (Câu 1 – 10)
        // ══════════════════════════════════════════════════════════════════
        {
            type: "multiple",
            question: "Moment lực đối với một trục quay là đại lượng đặc trưng cho tác dụng nào của lực?",
            options: [
                "Làm vật chuyển động thẳng đều.",
                "Làm vật biến dạng đàn hồi.",
                "Làm vật quay quanh trục.",
                "Làm vật thay đổi khối lượng."
            ],
            correct: 2,
            points: 5,
            explanation: "Moment lực đặc trưng cho tác dụng làm quay của lực đối với một trục quay cố định."
        },
        {
            type: "multiple",
            question: "Trong hệ đơn vị SI, đơn vị của moment lực là:",
            options: [
                "N/m.",
                "N.m.",
                "J/s.",
                "kg.m/s."
            ],
            correct: 1,
            points: 5,
            explanation: "Đơn vị của moment lực là tích của đơn vị lực (N) và khoảng cách (m), tức là N.m."
        },
        {
            type: "multiple",
            question: "Công thức xác định moment lực M đối với một trục quay là:",
            options: [
                "M = F/d.",
                "M = F.d².",
                "M = F.d.",
                "M = F².d."
            ],
            correct: 2,
            points: 5,
            explanation: "Công thức định nghĩa moment lực là M = F.d, với d là cánh tay đòn."
        },
        {
            type: "multiple",
            question: "Cánh tay đòn của lực (d) được xác định chính xác là:",
            options: [
                "Khoảng cách từ trục quay đến điểm đặt của lực trên vật.",
                "Khoảng cách hạ vuông góc từ trục quay đến giá của lực.",
                "Độ dài từ trục quay đến trọng tâm của vật rắn.",
                "Khoảng cách giữa hai điểm đầu và cuối của vật."
            ],
            correct: 1,
            points: 5,
            explanation: "Cánh tay đòn d là đoạn thẳng ngắn nhất từ trục quay đến giá của lực, tức là đường vuông góc hạ từ trục quay đến giá lực."
        },
        {
            type: "multiple",
            question: "Trong trường hợp nào sau đây, lực tác dụng vào vật quay quanh một trục cố định nhưng KHÔNG làm vật quay?",
            options: [
                "Lực có phương vuông góc với trục quay.",
                "Lực có giá đi qua trục quay.",
                "Lực có điểm đặt ở xa trục quay.",
                "Lực có độ lớn rất lớn."
            ],
            correct: 1,
            points: 5,
            explanation: "Khi giá của lực đi qua trục quay, cánh tay đòn d = 0 nên M = F.d = 0, lực không gây tác dụng quay."
        },
        {
            type: "multiple",
            question: "Để tăng tác dụng làm quay của lực lên một chiếc cờ lê mà không cần tăng độ lớn của lực, người thợ nên:",
            options: [
                "Cầm tay vào vị trí sát đầu cờ lê.",
                "Cầm tay vào vị trí xa nhất của cán cờ lê.",
                "Đặt lực song song với cán cờ lê.",
                "Giảm chiều dài của cán cờ lê."
            ],
            correct: 1,
            points: 5,
            explanation: "Tăng cánh tay đòn d bằng cách cầm tay xa trục quay giúp tăng moment lực M = F.d."
        },
        {
            type: "multiple",
            question: "Một vật rắn có trục quay cố định chịu tác dụng của nhiều moment lực. Vật sẽ ở trạng thái cân bằng khi:",
            options: [
                "Tổng các moment lực làm vật quay cùng chiều kim đồng hồ bằng tổng các moment lực làm vật quay ngược chiều kim đồng hồ.",
                "Hai lực tác dụng vào vật phải là hai lực cân bằng.",
                "Hợp lực của tất cả các lực tác dụng lên vật bằng không.",
                "Giá của các lực tác dụng phải cùng nằm trên một đường thẳng."
            ],
            correct: 0,
            points: 5,
            explanation: "Đây là nội dung của quy tắc moment lực: vật đứng yên khi tổng moment thuận chiều bằng tổng moment ngược chiều."
        },
        {
            type: "multiple",
            question: "Khi một người đẩy cửa, tác dụng làm quay của lực đẩy sẽ lớn nhất nếu người đó:",
            options: [
                "Đẩy vào vị trí sát bản lề của cửa.",
                "Đẩy vuông góc với bề mặt cửa tại mép ngoài.",
                "Đẩy song song với bề mặt của cánh cửa.",
                "Đẩy với một góc rất nhỏ so với phương của bản lề."
            ],
            correct: 1,
            points: 5,
            explanation: "Đẩy vuông góc ở mép ngoài giúp cánh tay đòn d đạt giá trị lớn nhất, tối ưu hóa moment lực."
        },
        {
            type: "multiple",
            question: "Moment lực tác dụng lên một vật có trục quay cố định sẽ thay đổi như thế nào nếu giá của lực dịch chuyển lại gần trục quay?",
            options: [
                "Moment lực tăng lên.",
                "Moment lực giảm xuống do cánh tay đòn giảm.",
                "Moment lực không thay đổi vì lực không đổi.",
                "Moment lực bằng không ngay lập tức."
            ],
            correct: 1,
            points: 5,
            explanation: "Khi giá của lực tiến gần trục quay, d giảm dẫn đến moment lực M = F.d giảm."
        },
        {
            type: "multiple",
            question: "Một vật rắn đang quay quanh một trục cố định. Nếu tăng độ lớn của lực lên 3 lần và giảm khoảng cách từ trục quay đến giá của lực đi 3 lần thì moment lực sẽ:",
            options: [
                "Tăng 9 lần.",
                "Giảm 9 lần.",
                "Không thay đổi giá trị.",
                "Tăng 3 lần."
            ],
            correct: 2,
            points: 5,
            explanation: "M' = (3F).(d/3) = F.d, do đó moment lực không thay đổi giá trị."
        },

        // ══════════════════════════════════════════════════════════════════
        //  BÀI 22: NGẪU LỰC (Câu 11 – 20)
        // ══════════════════════════════════════════════════════════════════
        {
            type: "multiple",
            question: "Ngẫu lực là hệ gồm hai lực có đặc điểm:",
            options: [
                "Song song, cùng chiều và cùng độ lớn.",
                "Song song, ngược chiều, cùng độ lớn và cùng tác dụng vào một vật.",
                "Cùng giá, ngược chiều và cùng độ lớn.",
                "Song song, ngược chiều và khác nhau về độ lớn."
            ],
            correct: 1,
            points: 5,
            explanation: "Ngẫu lực là hệ hai lực song song, ngược chiều, độ lớn bằng nhau cùng tác dụng lên một vật."
        },
        {
            type: "multiple",
            question: "Biểu thức tính moment của ngẫu lực là:",
            options: [
                "M = F.d (với d là khoảng cách giữa hai giá của hai lực).",
                "M = F.d (với d là khoảng cách từ trục quay đến điểm đặt lực).",
                "M = F/d.",
                "M = 2.F.d."
            ],
            correct: 0,
            points: 5,
            explanation: "Công thức moment ngẫu lực M = F.d, trong đó d là khoảng cách giữa hai giá của lực."
        },
        {
            type: "multiple",
            question: "Trường hợp nào sau đây là ứng dụng của ngẫu lực trong thực tế?",
            options: [
                "Một người dùng tay đẩy một chiếc xe lăn.",
                "Người lái xe dùng hai tay vặn vô lăng ô tô.",
                "Một vận động viên đang kéo cung.",
                "Một vật rơi tự do trong trọng trường."
            ],
            correct: 1,
            points: 5,
            explanation: "Dùng hai tay vặn vô lăng tạo ra hai lực song song ngược chiều lên vô lăng – đây là ví dụ điển hình về ngẫu lực."
        },
        {
            type: "multiple",
            question: "Moment của ngẫu lực có tính chất đặc biệt nào sau đây?",
            options: [
                "Phụ thuộc vào vị trí của trục quay được chọn.",
                "Không phụ thuộc vào vị trí của trục quay đối với vật.",
                "Luôn làm vật chuyển động tịnh tiến.",
                "Chỉ xuất hiện khi vật có trục quay cố định nằm ở giữa hai lực."
            ],
            correct: 1,
            points: 5,
            explanation: "Đặc điểm của ngẫu lực là moment của nó không phụ thuộc vào vị trí chọn trục quay trên vật."
        },
        {
            type: "multiple",
            question: "Tác dụng của ngẫu lực lên một vật rắn chỉ làm vật:",
            options: [
                "Chuyển động tịnh tiến.",
                "Chuyển động quay.",
                "Vừa quay vừa chuyển động tịnh tiến.",
                "Đứng yên tuyệt đối."
            ],
            correct: 1,
            points: 5,
            explanation: "Ngẫu lực làm vật quay quanh trục nhưng hợp lực bằng 0 nên không gây chuyển động tịnh tiến."
        },
        {
            type: "multiple",
            question: "Nếu đồng thời tăng độ lớn của mỗi lực trong ngẫu lực lên 2 lần và giảm khoảng cách giữa hai giá của hai lực đi 2 lần thì moment ngẫu lực:",
            options: [
                "Tăng 4 lần.",
                "Giảm 4 lần.",
                "Không thay đổi.",
                "Tăng 2 lần."
            ],
            correct: 2,
            points: 5,
            explanation: "M' = (2F).(d/2) = F.d, moment ngẫu lực không đổi."
        },
        {
            type: "multiple",
            question: "Một vật không có trục quay cố định, khi chịu tác dụng của một ngẫu lực, vật sẽ quay quanh:",
            options: [
                "Điểm đặt của lực lớn hơn.",
                "Trọng tâm của vật.",
                "Một điểm bất kì nằm ngoài vật.",
                "Một trong hai giá của ngẫu lực."
            ],
            correct: 1,
            points: 5,
            explanation: "Vật tự do khi chịu tác dụng của ngẫu lực sẽ quay quanh trục đi qua trọng tâm của vật."
        },
        {
            type: "multiple",
            question: "Moment ngẫu lực được đo bằng đơn vị nào?",
            options: [
                "Joule (J).",
                "Watt (W).",
                "Newton mét (N.m).",
                "Pascal (Pa)."
            ],
            correct: 2,
            points: 5,
            explanation: "Đơn vị đo moment lực và moment ngẫu lực đều là Newton mét (N.m)."
        },
        {
            type: "multiple",
            question: "Một ngẫu lực gồm hai lực có độ lớn F = 10 N, khoảng cách giữa hai giá của lực là d = 30 cm. Moment ngẫu lực là:",
            options: [
                "300 N.m.",
                "3 N.m.",
                "30 N.m.",
                "0,3 N.m."
            ],
            correct: 1,
            points: 5,
            explanation: "Đổi 30 cm = 0,3 m. M = F.d = 10 × 0,3 = 3 N.m."
        },
        {
            type: "multiple",
            question: "Nhận định nào sau đây về ngẫu lực là ĐÚNG?",
            options: [
                "Ngẫu lực có hợp lực khác không.",
                "Hai lực của ngẫu lực là hai lực cân bằng.",
                "Hai lực của ngẫu lực không thể thay thế bằng một lực duy nhất.",
                "Moment ngẫu lực phụ thuộc vào điểm đặt của trục quay."
            ],
            correct: 2,
            points: 5,
            explanation: "Hai lực của ngẫu lực không cùng giá nên không thể là lực cân bằng và không có hợp lực đơn nhất thay thế được."
        },

        // ══════════════════════════════════════════════════════════════════
        //  BÀI 23: NĂNG LƯỢNG – CÔNG CƠ HỌC (Câu 21 – 30)
        // ══════════════════════════════════════════════════════════════════
        {
            type: "multiple",
            question: "Năng lượng không tự sinh ra hoặc tự mất đi mà chỉ:",
            options: [
                "Biến thành vật chất.",
                "Chuyển hóa từ dạng này sang dạng khác hoặc truyền từ vật này sang vật khác.",
                "Tiêu hao hoàn toàn sau một thời gian.",
                "Tồn tại dưới một dạng duy nhất là nhiệt năng."
            ],
            correct: 1,
            points: 5,
            explanation: "Đây là nội dung định luật bảo toàn và chuyển hóa năng lượng."
        },
        {
            type: "multiple",
            question: "Việc truyền năng lượng cho vật bằng cách tác dụng lực lên vật làm vật thay đổi trạng thái chuyển động được gọi là:",
            options: [
                "Truyền nhiệt.",
                "Thực hiện công cơ học.",
                "Bức xạ năng lượng.",
                "Phóng xạ."
            ],
            correct: 1,
            points: 5,
            explanation: "Việc thực hiện công là phương thức truyền năng lượng gắn liền với tác dụng của lực."
        },
        {
            type: "multiple",
            question: "Trong hệ SI, đơn vị của công là:",
            options: [
                "Oát (W).",
                "Niutơn (N).",
                "Jun (J).",
                "Mã lực (HP)."
            ],
            correct: 2,
            points: 5,
            explanation: "Đơn vị của công là Jun (J), 1 J = 1 N.m."
        },
        {
            type: "multiple",
            question: "Công cơ học được tính bởi biểu thức A = F.s.cosα. Trong đó góc α là góc hợp bởi:",
            options: [
                "Lực tác dụng và phương ngang.",
                "Lực tác dụng và hướng dịch chuyển của vật.",
                "Hướng dịch chuyển và phương thẳng đứng.",
                "Lực tác dụng và mặt chân đế của vật."
            ],
            correct: 1,
            points: 5,
            explanation: "Góc α được xác định giữa vector lực và vector độ dịch chuyển theo định nghĩa công cơ học."
        },
        {
            type: "multiple",
            question: "Lực thực hiện công cản khi góc α thỏa mãn điều kiện:",
            options: [
                "0 ≤ α < 90°.",
                "α = 0°.",
                "90° < α ≤ 180°.",
                "α = 90°."
            ],
            correct: 2,
            points: 5,
            explanation: "Công cản xuất hiện khi cosα < 0, tức là α là góc tù (lớn hơn 90°)."
        },
        {
            type: "multiple",
            question: "Một người cố sức đẩy một chiếc xe tải nhưng xe vẫn đứng yên. Công mà người đó đã thực hiện bằng:",
            options: [
                "Một giá trị dương rất lớn.",
                "Một giá trị âm.",
                "Bằng không.",
                "Không xác định được vì chưa biết lực đẩy."
            ],
            correct: 2,
            points: 5,
            explanation: "Công A = F.s.cosα, vì xe đứng yên nên s = 0 dẫn đến công bằng không."
        },
        {
            type: "multiple",
            question: "Khi một vật chuyển động trên mặt phẳng ngang, trọng lực tác dụng lên vật sinh công bằng bao nhiêu?",
            options: [
                "A = P.s.",
                "A = −P.s.",
                "A = 0.",
                "A = m.g.h."
            ],
            correct: 2,
            points: 5,
            explanation: "Trọng lực vuông góc với phương ngang (α = 90°), cos90° = 0 nên trọng lực không sinh công."
        },
        {
            type: "multiple",
            question: "Một vật trượt trên sàn nhà, lực ma sát trượt tác dụng lên vật sinh:",
            options: [
                "Công phát động.",
                "Công cản.",
                "Công bằng không.",
                "Công suất tức thời."
            ],
            correct: 1,
            points: 5,
            explanation: "Lực ma sát ngược chiều chuyển động (α = 180°), cos180° = −1 sinh công âm là công cản."
        },
        {
            type: "multiple",
            question: "Kéo một vật đi được quãng đường 10 m bằng một lực F = 40 N hợp với hướng dịch chuyển một góc 60°. Công của lực kéo là:",
            options: [
                "400 J.",
                "200 J.",
                "$$200\\sqrt{3}$$ J.",
                "0 J."
            ],
            correct: 1,
            explanation: "A = F.s.cos60° = 40 × 10 × 0,5 = 200 J."
        },
        {
            type: "multiple",
            question: "Trường hợp nào sau đây lực tác dụng không thực hiện công (A = 0)?",
            options: [
                "Vật rơi tự do từ trên cao xuống.",
                "Vệ tinh chuyển động tròn đều quanh Trái Đất dưới tác dụng của lực hướng tâm.",
                "Xe máy đang tăng tốc trên đường thẳng.",
                "Người vận động viên đang cử tạ đứng yên tại chỗ."
            ],
            correct: 1,
            points: 5,
            explanation: "Lực hướng tâm luôn vuông góc với vận tốc tức thời nên không sinh công trong chuyển động tròn đều."
        },

        // ══════════════════════════════════════════════════════════════════
        //  BÀI 24: CÔNG SUẤT (Câu 31 – 40)
        // ══════════════════════════════════════════════════════════════════
        {
            type: "multiple",
            question: "Công suất là đại lượng đặc trưng cho:",
            options: [
                "Khả năng thực hiện công lớn hay nhỏ.",
                "Tốc độ thực hiện công của vật hay thiết bị.",
                "Năng lượng tiềm tàng của vật.",
                "Độ lớn của lực tác dụng lên vật."
            ],
            correct: 1,
            points: 5,
            explanation: "Công suất cho biết tốc độ nhanh chậm khi thực hiện một công nhất định."
        },
        {
            type: "multiple",
            question: "Đơn vị đo công suất là Oát (W). Một Oát tương đương với:",
            options: [
                "1 J.s.",
                "1 J/s.",
                "1 N.m.",
                "1 N/s."
            ],
            correct: 1,
            points: 5,
            explanation: "Theo công thức P = A/t, đơn vị W = J/s."
        },
        {
            type: "multiple",
            question: "Đại lượng nào sau đây không đổi khi nói về công suất định mức của một máy móc?",
            options: [
                "Công mà máy thực hiện.",
                "Thời gian máy làm việc.",
                "Khả năng thực hiện công tối đa trong một đơn vị thời gian.",
                "Vận tốc của máy."
            ],
            correct: 2,
            points: 5,
            explanation: "Công suất định mức ghi trên máy là khả năng làm việc tối đa trong điều kiện tiêu chuẩn."
        },
        {
            type: "multiple",
            question: "Biểu thức liên hệ giữa công suất P, lực F và vận tốc v trong trường hợp lực không đổi và cùng hướng chuyển động là:",
            options: [
                "P = F/v.",
                "P = F.v.",
                "P = F.s.",
                "P = A.t."
            ],
            correct: 1,
            points: 5,
            explanation: "P = A/t = (F.s)/t = F.v là biểu thức liên hệ quan trọng trong kĩ thuật."
        },
        {
            type: "multiple",
            question: "Một động cơ có công suất không đổi. Để tăng lực kéo của động cơ lên vật, người vận hành cần:",
            options: [
                "Tăng vận tốc chuyển động.",
                "Giảm vận tốc chuyển động.",
                "Giữ nguyên vận tốc chuyển động.",
                "Tăng thời gian thực hiện công."
            ],
            correct: 1,
            points: 5,
            explanation: "Vì P = F.v, nếu P không đổi, muốn lực F tăng thì phải giảm vận tốc v (sang số thấp khi lên dốc)."
        },
        {
            type: "multiple",
            question: "Ý nghĩa vật lý của số ghi 1000 W trên một máy bơm nước là:",
            options: [
                "Máy bơm thực hiện một công 1000 J trong mỗi giây.",
                "Máy bơm có thể bơm được 1000 lít nước trong một giờ.",
                "Lực đẩy của máy bơm là 1000 N.",
                "Máy bơm tiêu thụ 1000 J năng lượng trong suốt quá trình sử dụng."
            ],
            correct: 0,
            points: 5,
            explanation: "Số 1000 W cho biết tốc độ máy thực hiện công là 1000 Jun trong mỗi giây làm việc."
        },
        {
            type: "multiple",
            question: "Sự khác biệt giữa công suất trung bình và công suất tức thời là:",
            options: [
                "Công suất trung bình đặc trưng cho một thời điểm, công suất tức thời đặc trưng cho một khoảng thời gian.",
                "Công suất trung bình tính bằng A/t, công suất tức thời tính bằng F.v (với v là vận tốc tại thời điểm đang xét).",
                "Công suất tức thời luôn lớn hơn công suất trung bình.",
                "Chúng hoàn toàn giống nhau về mặt ý nghĩa."
            ],
            correct: 1,
            points: 5,
            explanation: "Công suất trung bình tính cho cả quãng đường, công suất tức thời tính tại một vận tốc cụ thể."
        },
        {
            type: "multiple",
            question: "Một cần cẩu nâng một vật có trọng lượng 2 000 N lên cao 10 m trong thời gian 5 giây. Công suất của cần cẩu là:",
            options: [
                "4 000 W.",
                "1 000 W.",
                "20 000 W.",
                "400 W."
            ],
            correct: 0,
            points: 5,
            explanation: "A = 2000 × 10 = 20 000 J. Công suất P = A/t = 20 000 / 5 = 4 000 W."
        },
        {
            type: "multiple",
            question: "Một ô tô chuyển động thẳng đều trên đường nằm ngang với vận tốc 72 km/h. Biết công suất động cơ là 40 kW. Lực kéo của động cơ là:",
            options: [
                "2 000 N.",
                "555 N.",
                "2 880 N.",
                "40 000 N."
            ],
            correct: 0,
            points: 5,
            explanation: "Đổi 72 km/h = 20 m/s. F = P/v = 40 000 / 20 = 2 000 N."
        },
        {
            type: "multiple",
            question: "Hai máy cơ có công suất P₁ = 2.P₂. Nếu hai máy thực hiện cùng một công A thì thời gian thực hiện công t₁ và t₂ liên hệ với nhau là:",
            options: [
                "t₁ = 2.t₂.",
                "t₂ = 2.t₁.",
                "t₁ = t₂.",
                "t₁ = 4.t₂."
            ],
            correct: 1,
            points: 5,
            explanation: "P₁ = 2P₂ ⇒ A/t₁ = 2A/t₂ ⇒ t₂ = 2t₁. Máy công suất lớn tốn ít thời gian hơn."
        },

        // ══════════════════════════════════════════════════════════════════
        //  BÀI 25: ĐỘNG NĂNG – THẾ NĂNG (Câu 41 – 50)
        // ══════════════════════════════════════════════════════════════════
        {
            type: "multiple",
            question: "Động năng của một vật khối lượng m chuyển động với vận tốc v được xác định bằng công thức:",
            options: [
                "$$W_d = mv^2$$.",
                "$$W_d = \\frac{1}{2}mv^2$$.",
                "$$W_d = mgh$$.",
                "$$W_d = \\frac{1}{2}m^2v$$."
            ],
            correct: 1,
            explanation: "Động năng là dạng năng lượng do chuyển động, tỉ lệ thuận với m và bình phương v."
        },
        {
            type: "multiple",
            question: "Thế năng trọng trường của một vật phụ thuộc vào các yếu tố nào?",
            options: [
                "Khối lượng và vận tốc của vật.",
                "Khối lượng và vị trí của vật so với mốc chọn thế năng.",
                "Vận tốc và gia tốc trọng trường.",
                "Hình dạng và kích thước của vật."
            ],
            correct: 1,
            points: 5,
            explanation: "Thế năng trọng trường phụ thuộc khối lượng m, gia tốc g và độ cao h so với mốc."
        },
        {
            type: "multiple",
            question: "Công thức tính thế năng trọng trường là:",
            options: [
                "$$W_t = \\frac{1}{2}mgh$$.",
                "$$W_t = mgh$$.",
                "$$W_t = mvh$$.",
                "$$W_t = \\frac{1}{2}mv^2$$."
            ],
            correct: 1,
            explanation: "Công thức chuẩn xác trong SGK Kết nối tri thức: Wt = mgh."
        },
        {
            type: "multiple",
            question: "Khi vận tốc của vật tăng lên 3 lần thì động năng của vật sẽ thay đổi như thế nào?",
            options: [
                "Tăng 3 lần.",
                "Tăng 6 lần.",
                "Tăng 9 lần.",
                "Không đổi."
            ],
            correct: 2,
            points: 5,
            explanation: "Động năng tỉ lệ với bình phương vận tốc, v tăng 3 thì Wd tăng 3² = 9 lần."
        },
        {
            type: "multiple",
            question: "Một vật đang nằm yên tại mốc chọn thế năng trọng trường thì vật đó có:",
            options: [
                "Động năng bằng không, thế năng bằng không.",
                "Động năng khác không, thế năng bằng không.",
                "Động năng bằng không, thế năng khác không.",
                "Cả động năng và thế năng đều khác không."
            ],
            correct: 0,
            points: 5,
            explanation: "Tại mốc thế năng h = 0 nên Wt = 0; vật nằm yên v = 0 nên Wd = 0."
        },
        {
            type: "multiple",
            question: "Độ biến thiên động năng của một vật bằng:",
            options: [
                "Công của các lực thế tác dụng lên vật.",
                "Công của hợp lực tác dụng lên vật.",
                "Thế năng ban đầu của vật.",
                "Công suất của động cơ."
            ],
            correct: 1,
            points: 5,
            explanation: "Định lý biến thiên động năng: công của hợp lực làm thay đổi động năng của vật."
        },
        {
            type: "multiple",
            question: "\"Lực thế\" là lực mà công của nó thực hiện khi vật di chuyển giữa hai điểm:",
            options: [
                "Phụ thuộc vào hình dạng đường đi.",
                "Không phụ thuộc vào hình dạng đường đi, chỉ phụ thuộc vào vị trí đầu và cuối.",
                "Luôn bằng không.",
                "Tỉ lệ thuận với thời gian chuyển động."
            ],
            correct: 1,
            points: 5,
            explanation: "Trọng lực là một loại lực thế vì công của nó không phụ thuộc quỹ đạo, chỉ phụ thuộc độ cao đầu – cuối."
        },
        {
            type: "multiple",
            question: "Thế năng trọng trường của một vật có giá trị âm khi:",
            options: [
                "Vật nằm tại mốc thế năng.",
                "Vật nằm phía dưới mốc thế năng.",
                "Vật đang chuyển động lên cao.",
                "Khối lượng của vật nhỏ hơn 0."
            ],
            correct: 1,
            points: 5,
            explanation: "Giá trị h mang dấu âm khi vật ở dưới gốc tọa độ được chọn làm mốc thế năng."
        },
        {
            type: "multiple",
            question: "Một cánh cung bị kéo căng dự trữ dạng năng lượng nào dưới đây?",
            options: [
                "Động năng.",
                "Thế năng đàn hồi.",
                "Thế năng trọng trường.",
                "Điện năng."
            ],
            correct: 1,
            points: 5,
            explanation: "Cánh cung bị biến dạng dự trữ thế năng đàn hồi theo đặc tính vật lý của vật liệu đàn hồi."
        },
        {
            type: "multiple",
            question: "Một vật khối lượng 1 kg có động năng 8 J. Vận tốc của vật là:",
            options: [
                "4 m/s.",
                "8 m/s.",
                "16 m/s.",
                "2 m/s."
            ],
            correct: 0,
            explanation: "$$v = \\sqrt{\\frac{2W_d}{m}} = \\sqrt{\\frac{2 \\times 8}{1}} = 4 \\text{ m/s}$$."
        },

        // ══════════════════════════════════════════════════════════════════
        //  BÀI 26: CƠ NĂNG – ĐỊNH LUẬT BẢO TOÀN CƠ NĂNG (Câu 51 – 60)
        // ══════════════════════════════════════════════════════════════════
        {
            type: "multiple",
            question: "Cơ năng của một vật chuyển động trong trọng trường là:",
            options: [
                "Hiệu số giữa động năng và thế năng.",
                "Tổng của động năng và thế năng trọng trường của vật.",
                "Tích của động năng và thế năng.",
                "Năng lượng do vật biến dạng đàn hồi."
            ],
            correct: 1,
            points: 5,
            explanation: "Cơ năng bao gồm cả năng lượng chuyển động (Wd) và năng lượng vị trí (Wt)."
        },
        {
            type: "multiple",
            question: "Định luật bảo toàn cơ năng chỉ được áp dụng khi vật:",
            options: [
                "Chuyển động thẳng đều.",
                "Chỉ chịu tác dụng của lực thế (như trọng lực, lực đàn hồi).",
                "Chịu tác dụng của lực ma sát rất lớn.",
                "Chuyển động trong chân không tuyệt đối."
            ],
            correct: 1,
            points: 5,
            explanation: "Cơ năng chỉ bảo toàn khi hệ không có lực cản, lực ma sát (chỉ có lực thế sinh công)."
        },
        {
            type: "multiple",
            question: "Khi một vật rơi tự do (bỏ qua lực cản không khí), đại lượng nào sau đây KHÔNG đổi?",
            options: [
                "Động năng.",
                "Thế năng.",
                "Cơ năng.",
                "Vận tốc."
            ],
            correct: 2,
            points: 5,
            explanation: "Trong rơi tự do, Wd tăng và Wt giảm nhưng tổng cơ năng W không đổi."
        },
        {
            type: "multiple",
            question: "Trong quá trình một vật được ném thẳng đứng lên cao (bỏ qua lực cản), sự chuyển hóa năng lượng diễn ra như thế nào?",
            options: [
                "Động năng chuyển hóa thành thế năng.",
                "Thế năng chuyển hóa thành động năng.",
                "Cơ năng chuyển hóa thành nhiệt năng.",
                "Năng lượng mất dần theo độ cao."
            ],
            correct: 0,
            points: 5,
            explanation: "Khi lên cao h tăng (Wt tăng), v giảm (Wd giảm), động năng chuyển dần sang thế năng."
        },
        {
            type: "multiple",
            question: "Tại vị trí thấp nhất của con lắc đơn đang dao động (bỏ qua ma sát):",
            options: [
                "Động năng cực đại, thế năng cực tiểu.",
                "Động năng bằng không, thế năng cực đại.",
                "Thế năng bằng động năng.",
                "Cơ năng bằng không."
            ],
            correct: 0,
            points: 5,
            explanation: "Tại vị trí cân bằng h min nên Wt min, v max nên động năng cực đại theo bảo toàn cơ năng."
        },
        {
            type: "multiple",
            question: "Một vật trượt có ma sát từ đỉnh mặt phẳng nghiêng xuống chân dốc. Cơ năng của vật tại chân dốc sẽ:",
            options: [
                "Bằng cơ năng tại đỉnh dốc.",
                "Nhỏ hơn cơ năng tại đỉnh dốc do công của lực ma sát.",
                "Lớn hơn cơ năng tại đỉnh dốc.",
                "Luôn bằng không."
            ],
            correct: 1,
            points: 5,
            explanation: "Lực ma sát là lực không thế, công ma sát âm làm giảm tổng cơ năng của hệ."
        },
        {
            type: "multiple",
            question: "Khi động năng của một vật bảo toàn cơ năng tăng lên 20 J thì thế năng của nó sẽ:",
            options: [
                "Tăng thêm 20 J.",
                "Giảm đi 20 J.",
                "Không thay đổi.",
                "Giảm đi 10 J."
            ],
            correct: 1,
            points: 5,
            explanation: "Nếu cơ năng bảo toàn, sự tăng của động năng phải bằng sự giảm của thế năng: ΔWt = −20 J."
        },
        {
            type: "multiple",
            question: "Một vật rơi tự do từ độ cao h. Tại độ cao nào thì động năng bằng thế năng?",
            options: [
                "Tại mặt đất.",
                "Tại độ cao h/2.",
                "Tại độ cao h/4.",
                "Tại vị trí bắt đầu rơi."
            ],
            correct: 1,
            points: 5,
            explanation: "Tại h/2: Wt = mg(h/2) = ½W_ban_đầu. Phần ½ còn lại chính là động năng → Wd = Wt."
        },
        {
            type: "multiple",
            question: "Con lắc chuyển động từ vị trí biên về vị trí cân bằng, thế năng trọng trường của nó:",
            options: [
                "Tăng dần.",
                "Giảm dần và chuyển hóa thành động năng.",
                "Không thay đổi.",
                "Chuyển hóa thành hóa năng."
            ],
            correct: 1,
            points: 5,
            explanation: "Khi về vị trí cân bằng h giảm nên thế năng giảm, vận tốc tăng nên thế năng chuyển thành động năng."
        },
        {
            type: "multiple",
            question: "Nếu bỏ qua mọi lực cản, cơ năng của hệ vật và Trái Đất là một đại lượng:",
            options: [
                "Luôn bằng không.",
                "Luôn biến thiên theo thời gian.",
                "Bảo toàn (không đổi).",
                "Tỉ lệ thuận với vận tốc."
            ],
            correct: 2,
            points: 5,
            explanation: "Đây là phát biểu cốt lõi của định luật bảo toàn cơ năng trong trường trọng lực."
        },

        // ══════════════════════════════════════════════════════════════════
        //  TỰ LUẬN – VẬN DỤNG CAO (6 bài tổng hợp)
        // ══════════════════════════════════════════════════════════════════
        {
            type: "essay",
            question: "Một người tác dụng lực F = 40 N vuông góc vào tay nắm cửa để mở cửa. Khoảng cách từ tay nắm đến bản lề (trục quay) là d = 0,75 m. Khi cửa quay được một góc 90°, điểm đặt lực di chuyển theo một cung tròn. Tính moment lực và công thực hiện bởi người đó.",
            suggested: "1. Moment lực tác dụng:\nM = F.d = 40 × 0,75 = 30 (N.m).\n\n2. Quãng đường điểm đặt lực đi được (1/4 chu vi đường tròn bán kính d):\ns = (1/4) × 2πd = (1/2) × π × 0,75 ≈ 1,178 (m).\n\n3. Vì lực luôn vuông góc với cánh cửa, phương lực trùng hướng dịch chuyển tức thời → α = 0° → cos0° = 1.\n\n4. Công thực hiện:\nA = F.s = 40 × 1,178 ≈ 47,1 (J).",
            points: 25,
            explanation: "AI chấm dựa trên: M = F.d = 30 N.m; s = πd/2 ≈ 1,178 m; A = F.s ≈ 47,1 J."
        },
        {
            type: "essay",
            question: "Một ô tô khối lượng 1 200 kg đang chạy với vận tốc 15 m/s thì tài xế hãm phanh. Xe trượt một đoạn s trên đường ngang rồi dừng lại. Hệ số ma sát trượt giữa lốp và đường là μ = 0,5. Lấy g = 10 m/s². Tính quãng đường xe trượt trước khi dừng hẳn.",
            suggested: "1. Áp dụng định lý biến thiên động năng: ΔWd = Ams.\n\n2. Động năng ban đầu:\nWd1 = ½mv² = ½ × 1200 × 15² = 135 000 (J).\nWd2 = 0 (xe dừng lại).\n\n3. Lực ma sát trượt:\nFms = μ.m.g = 0,5 × 1200 × 10 = 6 000 (N).\n\n4. Công của lực ma sát (công cản):\nAms = −Fms.s = −6 000.s.\n\n5. Từ ΔWd = Ams:\n0 − 135 000 = −6 000.s\n⟹ s = 135 000 / 6 000 = 22,5 (m).",
            points: 25,
            explanation: "AI chấm dựa trên: Fms = μmg = 6 000 N; định lý biến thiên động năng; kết quả s = 22,5 m."
        },
        {
            type: "essay",
            question: "Một vật được thả rơi tự do từ độ cao h = 20 m. Chọn gốc thế năng tại đất. Tìm độ cao z mà tại đó thế năng bằng 1/3 lần động năng.",
            suggested: "1. Cơ năng tại vị trí thả:\nW1 = mgh.\n\n2. Tại vị trí có độ cao z, điều kiện:\nWt2 = (1/3)Wd2 ⟹ Wd2 = 3Wt2.\n\n3. Cơ năng tại vị trí 2:\nW2 = Wd2 + Wt2 = 3Wt2 + Wt2 = 4Wt2 = 4mgz.\n\n4. Bảo toàn cơ năng (W1 = W2):\nmgh = 4mgz ⟹ z = h/4 = 20/4 = 5 (m).",
            points: 25,
            explanation: "AI chấm dựa trên: lập điều kiện Wt = Wd/3; áp dụng bảo toàn cơ năng; kết quả z = h/4 = 5 m."
        },
        {
            type: "essay",
            question: "Một ô tô khối lượng 1,5 tấn lên một dốc dài l = 100 m, cao h = 10 m với vận tốc không đổi v = 54 km/h. Hệ số ma sát là μ = 0,02. Tính công suất của động cơ. (g = 10 m/s²)",
            suggested: "1. Đổi: 1,5 tấn = 1500 kg; v = 54 km/h = 15 m/s.\n\n2. Góc nghiêng: sinα = h/l = 10/100 = 0,1; cosα ≈ 0,995.\n\n3. Lực kéo cân bằng:\nFk = mg.sinα + μ.mg.cosα\n   = 1500×10×0,1 + 0,02×1500×10×0,995\n   = 1500 + 298,5 = 1798,5 (N).\n\n4. Công suất:\nP = Fk.v = 1798,5 × 15 ≈ 26 978 (W) ≈ 27 kW.",
            points: 25,
            explanation: "AI chấm dựa trên: phân tích lực trên dốc (Fk = mg.sinα + μ.mg.cosα); tính P = Fk.v ≈ 27 kW."
        },
        {
            type: "essay",
            question: "Một máy nâng có công suất 1,5 kW nâng vật nặng 150 kg lên cao 10 m trong 12 s. Tính hiệu suất máy. (g = 10 m/s²)",
            suggested: "1. Công toàn phần máy thực hiện:\nAtp = P.t = 1500 × 12 = 18 000 (J).\n\n2. Công có ích (nâng vật):\nAich = mgh = 150 × 10 × 10 = 15 000 (J).\n\n3. Hiệu suất:\nH = (Aich / Atp) × 100% = (15 000 / 18 000) × 100% ≈ 83,3%.",
            points: 25,
            explanation: "AI chấm dựa trên: Atp = P.t = 18 000 J; Aich = mgh = 15 000 J; H ≈ 83,3%."
        },
        {
            type: "essay",
            question: "Một vật nhỏ được ném ngang từ độ cao 45 m với vận tốc đầu v₀ = 20 m/s. Bỏ qua lực cản không khí. Sử dụng định luật bảo toàn cơ năng tính vận tốc của vật khi chạm đất. (g = 10 m/s²)",
            suggested: "1. Chọn gốc thế năng tại mặt đất.\n\n2. Cơ năng tại điểm ném:\nW1 = ½mv₀² + mgh.\n\n3. Cơ năng tại mặt đất:\nW2 = ½mv² + 0.\n\n4. Bảo toàn cơ năng (W1 = W2):\n½mv₀² + mgh = ½mv²\n⟹ v² = v₀² + 2gh = 20² + 2 × 10 × 45 = 400 + 900 = 1300.\n\n5. Vận tốc khi chạm đất:\nv = √1300 ≈ 36,1 (m/s).",
            points: 25,
            explanation: "AI chấm dựa trên: áp dụng bảo toàn cơ năng W1 = W2; công thức v² = v₀² + 2gh; kết quả v ≈ 36,1 m/s."
        }
    ]
};
