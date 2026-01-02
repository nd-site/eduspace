/**
 * Dữ liệu mẫu cho AI Smart Quiz
 * Cấu trúc bao gồm:
 * - title: Tiêu đề của bộ đề
 * - config: Các cấu hình thời gian, điểm số
 * - questions: Danh sách các câu hỏi
 */

const quizData = {
    title: "Kiểm tra Kiến thức Tổng hợp & AI",
    config: {
        testDuration: 1200, // 20 phút (tính bằng giây)
        allowReview: true,
        shuffleQuestions: false
    },
    questions: [
        {
            id: 1,
            type: "multiple",
            question: "Trong toán học, đạo hàm của hàm số $f(x) = x^2$ là gì?",
            options: ["$x$", "$2x$", "$x^2$", "$2x^2$"],
            correct: 1,
            points: 1,
            explanation: "Theo công thức tính đạo hàm cơ bản: $(x^n)' = n \cdot x^{n-1}$."
        },
        {
            id: 2,
            type: "truefalse",
            question: "Thủ đô của Việt Nam là thành phố Hồ Chí Minh. Đúng hay Sai?",
            correct: 1,
            points: 1,
            explanation: "Thủ đô của Việt Nam là Hà Nội."
        },
        {
            id: 3,
            type: "short",
            question: "Tính giá trị của biểu thức: $15 + 5 \\times 2 - 3$.",
            correct: "22",
            points: 1,
            explanation: "Thứ tự thực hiện phép tính: Nhân chia trước, cộng trừ sau. $15 + 10 - 3 = 22$."
        },
        {
            id: 4,
            type: "essay",
            question: "Theo bạn, trí tuệ nhân tạo (AI) sẽ thay đổi giáo dục như thế nào trong 5 năm tới?",
            suggested: "AI sẽ cá nhân hóa lộ trình học tập, hỗ trợ giáo viên chấm bài, tạo học liệu tự động và giải đáp thắc mắc của học sinh 24/7.",
            points: 5,
            explanation: "Câu hỏi này được chấm điểm bởi AI dựa trên khả năng lập luận về tính cá nhân hóa và hiệu quả của AI trong giáo dục."
        },
        {
            id: 5,
            type: "essay",
            question: "Trình bày suy nghĩ của bạn về tầm quan trọng của việc bảo vệ môi trường trong kỷ nguyên số hiện nay.",
            suggested: "Bảo vệ môi trường giúp duy trì hệ sinh thái bền vững; kỷ nguyên số giúp lan tỏa thông tin nhanh nhưng cũng tạo ra rác thải điện tử cần được xử lý.",
            points: 5,
            explanation: "AI sẽ đánh giá dựa trên sự kết nối giữa bảo vệ môi trường và bối cảnh công nghệ hiện đại."
        },
        {
            id: 6,
            type: "essay",
            question: "Giải thích khái niệm 'Phát triển bền vững' và cho ví dụ cụ thể trong thực tế.",
            suggested: "Phát triển bền vững là sự phát triển đáp ứng nhu cầu hiện tại mà không làm tổn hại đến khả năng đáp ứng nhu cầu của các thế hệ tương lai. Ví dụ: Sử dụng năng lượng tái tạo, nông nghiệp hữu cơ.",
            points: 5,
            explanation: "Yêu cầu nêu rõ định nghĩa và có ví dụ minh họa sát thực tế."
        },
        {
            id: 7,
            type: "multiple",
            question: "Mô hình ngôn ngữ lớn nào dưới đây là sản phẩm của Google?",
            options: ["GPT-4", "Claude", "Gemini", "Llama"],
            correct: 2,
            points: 1,
            explanation: "Gemini là mô hình AI tiên tiến nhất của Google hiện nay."
        }
    ]
};
