// data.js mẫu - EduSpace by ND Labs
// Bao gồm đủ 4 loại câu hỏi: multiple, truefalse, short, essay

window.quizData = {
    title: "Kiểm tra tổng hợp - Mẫu đầy đủ 4 dạng",
    config: {
        testDuration: 1800  // 30 phút (tính bằng giây)
    },
    questions: [
        // 1. Câu trắc nghiệm (multiple) - chọn 1 đáp án
        {
            type: "multiple",
            question: "Hành tinh nào trong Hệ Mặt Trời có khối lượng lớn nhất?",
            options: [
                "Trái Đất",
                "Sao Hỏa",
                "Sao Mộc",
                "Sao Thổ"
            ],
            correct: 2,  // chỉ số bắt đầu từ 0 → Sao Mộc
            points: 10,
            explanation: "Sao Mộc là hành tinh lớn nhất và nặng nhất trong Hệ Mặt Trời, với khối lượng gấp khoảng 318 lần Trái Đất."
        },

        // 2. Câu đúng/sai nhiều phát biểu (truefalse) - 4 ý
        {
            type: "truefalse",
            question: "Hãy đánh giá tính đúng/sai của các phát biểu sau về sinh học lớp 10:",
            statements: [
                "Tế bào động vật có thành tế bào làm bằng cellulose.",
                "Ribosome là nơi tổng hợp protein trong tế bào.",
                "ADN chỉ tồn tại trong nhân tế bào.",
                "Quang hợp chỉ xảy ra ở lá cây."
            ],
            correctAnswers: [false, true, false, false],
            points: 20,
            explanation: "A sai: thành tế bào động vật không có cellulose (chỉ có ở thực vật). B đúng. C sai: ADN còn có trong ty thể và lục lạp. D sai: quang hợp có thể xảy ra ở thân, rễ một số loài."
        },

        // 3. Câu trả lời ngắn (short) - nhập chuỗi ngắn
        {
            type: "short",
            question: "Nhập mã số bí mật của bài kiểm tra hôm nay (4 chữ số):",
            correct: "2510",
            points: 10,
            explanation: "Mã số đúng là 2510."
        },

        // 4. Câu tự luận (essay) - chấm bằng AI
        {
            type: "essay",
            question: "Giải thích hiện tượng quang hợp ở thực vật và nêu ý nghĩa của nó đối với sự sống trên Trái Đất.",
            suggested: "Quang hợp là quá trình thực vật sử dụng ánh sáng mặt trời, nước và CO2 để tạo ra glucose và oxy. Phương trình: 6CO2 + 6H2O → C6H12O6 + 6O2 (dưới tác dụng của ánh sáng và diệp lục). Ý nghĩa: cung cấp oxy cho hô hấp, tạo chất hữu cơ làm thức ăn cho chuỗi thức ăn, giảm khí CO2 gây hiệu ứng nhà kính.",
            points: 30,
            explanation: "Câu trả lời sẽ được AI chấm điểm dựa trên độ chính xác, đầy đủ và rõ ràng."
        },

        // Thêm một câu multiple nữa để đủ 5 câu ví dụ
        {
            type: "multiple",
            question: "Đơn vị đo lực trong hệ SI là gì?",
            options: [
                "Joule",
                "Newton",
                "Watt",
                "Pascal"
            ],
            correct: 1,
            points: 10,
            explanation: "Lực được đo bằng Newton (N). 1 N = 1 kg·m/s²."
        }
    ]
};
