/**
 * HƯỚNG DẪN NHẬP LIỆU:
 * - type: 'quiz' (màu xanh dương) hoặc 'lesson' (màu xanh lá)
 * - class: Số lớp (vd: "10")
 * - subject: Tên môn học
 * - buttonText: Tên nút tùy biến (để trống sẽ dùng mặc định theo type)
 * - isHot: true (nếu muốn đánh dấu "HOT" cho mục này)
 * - isComingSoon: true (nếu muốn đánh dấu "SẮP RA MẮT" cho mục này)
 */
const quizList = [
    /**
    {
        title: "Mẫu",
        url: "/eduspace/mau",
        description: "Bài kiểm tra mẫu để bạn tham khảo cách tạo đề.",
        tag: "Mẫu",
        type: "quiz",
        isHot: true
    }
    */

    {
        title: "Đề cương Địa Lý 10 - Học kỳ 1 năm học 2025-2026.",
        url: "/eduspace/dialy/10/on-tap-hk1-2526-v1/index.html",
        tag: "Địa Lý",
        type: "quiz",
        isHot
    },
    {
        title: "Học bảng tuần hoàn các nguyên tố hóa học",
        url: "/eduspace/hoc-bang-tuan-hoan-hoa-hoc",
        description: "Bài học tương tác giúp bạn nắm vững bảng tuần hoàn các nguyên tố hóa học một cách dễ dàng và thú vị với 'chuỗi kỷ lục'.",
        tag: "Hóa Học",
        type: "quiz",
        buttonText: "Tạo 'chuỗi kỷ lục' ngay!",
        isHot: true
    },
    {
        title: "Thử thách trí nhớ của bạn!",
        url: "/eduspace/memo",
        description: "Bài kiểm tra giúp bạn rèn luyện và thử thách trí nhớ của mình qua các câu hỏi thú vị.",
        tag: "Trí nhớ",
        type: "quiz",
        buttonText: "Bắt đầu thử thách",
        isHot: true
    },
    {
        title: "Đề kiểm tra viết Tiếng Anh 10 - Học kỳ I năm học 2025-2026",
        url: "/eduspace/tienganh/10/de-viet-doan-van-hk1-2526-v1",
        description: "Đề kiểm tra viết Tiếng Anh lớp 10 học kỳ I năm học 2025-2026 với yêu cầu viết đoạn văn về lợi ích của một phát minh.",
        tag: "Tiếng Anh",
        type: "quiz",
        class: "10",
        subject: "Tiếng Anh",
        buttonText: "Kiểm tra viết",
    },
    {
        title: "Đề cương Lịch Sử 10 - Học kỳ I năm học 2025-2026",
        url: "/eduspace/lichsu/10/on-tap-hk1-2526-v1",
        description: "Tổng hợp các câu hỏi ôn tập học kỳ I môn Lịch Sử lớp 10 năm học 2025-2026 'Bản 1'",
        tag: "Lịch Sử",
        type: "quiz",
        class: "10",
        subject: "Lịch Sử",
    },
    {
        title: "Đề cương Sinh Học 10 - Học kỳ I năm học 2025-2026",
        url: "/eduspace/sinhhoc/10/on-tap-hk1-2526-v1",
        description: "Tổng hợp các câu hỏi ôn tập học kỳ I môn Sinh Học lớp 10 năm học 2025-2026 'Bản 1'",
        tag: "Sinh Học",
        type: "quiz",
        class: "10",
        subject: "Sinh Học",
        isHot: true
    },
    {
        title: "Đề cương GDQP-AN 10 - Học kỳ I năm học 2025-2026",
        url: "/eduspace/gdqp/10/on-tap-hk1-2526-v1",
        description: "Tổng hợp các câu hỏi ôn tập học kỳ I môn Giáo dục Quốc phòng và An ninh lớp 10 năm học 2025-2026 'Bản 1'",
        tag: "GDQP-AN",
        type: "quiz",
        class: "10",
        subject: "GDQP-AN"
    },
    {
        title: "Đề cương KTPL 10 - Học kỳ I năm học 2025-2026",
        url: "/eduspace/ktpl/10/hk1/on-tap-1",
        description: "Tổng hợp các câu hỏi ôn tập học kỳ I môn Kinh tế Pháp luật lớp 10 năm học 2025-2026 'Bản 1'",
        tag: "KTPL",
        type: "quiz",
        class: "10",
        subject: "KTPL"
    },
    {
        title: "Hành trình văn minh nhân loại - Lịch Sử 10",
        url: "/eduspace/lichsu/10/hanh-trinh-van-minh-nhan-loai",
        tag: "Lịch Sử",
        type: "lesson",
        class: "10",
        subject: "Lịch Sử",
        buttonText: "Xem bài học"
    },
    {
        title: "Bài tập Hành trình văn minh nhân loại - Lịch Sử 10",
        url: "/eduspace/lichsu/10/hanh-trinh-van-minh-nhan-loai/bai-tap",
        tag: "Lịch Sử",
        type: "quiz",
        class: "10",
        subject: "Lịch Sử",
        buttonText: "Thử sức ngay"
    },
    {
        title: "Đề cương Hóa Học 10 - Học kỳ I năm học 2025-2026",
        url: "/eduspace/hoahoc/10/tinh-luong-ion-du-1",
        description: "Tổng hợp các câu hỏi 'Tính lượng ion dư 1' ôn tập học kỳ I môn Hóa Học lớp 10 năm học 2025-2026",
        tag: "Hóa Học",
        type: "quiz",
        class: "10",
        subject: "Hóa Học"
    },
    {
        title: "Đề cương Hóa Học 10 - Học kỳ I năm học 2025-2026",
        url: "/eduspace/hoahoc/10/tinh-luong-ion-du-2",
        description: "Tổng hợp các câu hỏi 'Tính lượng ion dư 2' ôn tập học kỳ I môn Hóa Học lớp 10 năm học 2025-2026",
        tag: "Hóa Học",
        type: "quiz",
        class: "10",
        subject: "Hóa Học"
    },
    {
        title: "Đề cương Hóa Học 10 - Học kỳ I năm học 2025-2026",
        url: "/eduspace/hoahoc/10/tinh-luong-ion-du-3",
        description: "Tổng hợp các câu hỏi 'Tính lượng ion dư 3' ôn tập học kỳ I môn Hóa Học lớp 10 năm học 2025-2026",
        tag: "Hóa Học",
        type: "quiz",
        class: "10",
        subject: "Hóa Học"
    },
    {
        title: "Đề cương Hóa Học 10 - Học kỳ I năm học 2025-2026",
        url: "/eduspace/hoahoc/10/tinh-luong-ion-du-4",
        description: "Tổng hợp các câu hỏi 'Tính lượng ion dư 4' ôn tập học kỳ I môn Hóa Học lớp 10 năm học 2025-2026",
        tag: "Hóa Học",
        type: "quiz",
        class: "10",
        subject: "Hóa Học"
    },
    {
        title: "Đề cương Tin Học 10 - Học kỳ I năm học 2025-2026",
        url: "/eduspace/tinhoc/10/on-tap-hk1-2526-v1",
        description: "Tổng hợp các câu hỏi ôn tập học kỳ I môn Tin Học lớp 10 năm học 2025-2026 'Bản 1'",
        tag: "Tin Học",
        type: "quiz",
        class: "10",
        subject: "Tin Học",
        isComingSoon: true
    },
    {
        title: "Kiểm tra Hành trình văn minh nhân loại - Lịch Sử 10",
        url: "/eduspace/lichsu/10/hanh-trinh-van-minh-nhan-loai/kiem-tra",
        tag: "Lịch Sử",
        type: "quiz",
        class: "10",
        subject: "Lịch Sử",
    },
];

