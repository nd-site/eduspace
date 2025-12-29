const quizData = {
    config: {
        subject: "Tên Môn Học Của Bạn", // Tiêu đề lớn ở màn hình bắt đầu
        info: "Mô tả ngắn về bài kiểm tra (ví dụ: 15 câu - 30 phút)" // Dòng chữ nhỏ bên dưới tiêu đề
    },
    questions: [
        {
            // 1. LOẠI TRẮC NGHIỆM NHIỀU LỰA CHỌN (Mặc định)
            type: "multiple", 
            question: "Mẫu",
            options: ["Sai", "Sai", "Đúng", "Sai"],
            correct: 2, // Số thứ tự đáp án đúng (bắt đầu từ 0. Ở đây 2 là Hà Nội)
            explanation: "Giải thích"
        },
        {
            // 2. LOẠI ĐÚNG / SAI
            type: "truefalse",
            question: "Mẫu (Câu này đáp án là SAI)",
            correct: 1, // 0 tương ứng với ĐÚNG, 1 tương ứng với SAI
            explanation: "Câu này đáp án là SAI."
        },
        {
            // 3. LOẠI TRẢ LỜI NGẮN (Số hoặc chữ ngắn)
            type: "short",
            question: "Mẫu (Câu trả lời là 5.1 hoặc 5,1)",
            correct: "5.1", // Hệ thống tự hiểu "5.1" và "5,1" đều đúng
            explanation: "Giải thích"
        },
        {
            // 4. LOẠI TỰ LUẬN (Không tính điểm, hiện đáp án tham khảo)
            type: "essay",
            question: "Mẫu",
            suggested: "Đáp án tham khảo", 
            // Lưu ý: Tự luận dùng 'suggested' thay cho 'explanation' để hiện nội dung tham khảo
        }
    ]
};