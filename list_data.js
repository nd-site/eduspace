/* HƯỚNG DẪN NHẬP LIỆU:
 * - type: 'quiz' (màu xanh dương) hoặc 'lesson' (màu xanh lá)
 * - class: Số lớp (vd: "10")
 * - subject: Tên môn học
 * - buttonText: Tên nút tùy biến (để trống sẽ dùng mặc định theo type)
 * - isHot: true (nếu muốn đánh dấu "HOT" cho mục này)
 * - isComingSoon: true (nếu muốn đánh dấu "SẮP RA MẮT" cho mục này)
 */
const quizList = [
    /** Mẫu */
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

    // ── isComingSoon example (commented out) ─────────────
    /**
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
    */

    // ── Coming Soon ───────────────────────────────────────
    /*{
        title: "Học tất cả các nguyên tố hóa học trong bảng tuần hoàn",
        url: "/eduspace/BTH/",
        description: "Bài học tương tác giúp bạn nắm vững bảng tuần hoàn các nguyên tố hóa học một cách dễ dàng và thú vị với 'chuỗi kỷ lục'.",
        tag: "Công Cụ",
        type: "quiz",
        subject: "Hóa Học",
        buttonText: "Tạo 'chuỗi kỷ lục' ngay!",
    },*/

    // ── HOT ───────────────────────────────────────────────
    {
        title: "Scan2Word by ND Labs",
        url: "https://scan2word.vercel.app/",
        description: "Scan2Word by ND Labs - Ứng dụng chuyển đổi hình ảnh thành văn bản bằng AI",
        tag: "Công Cụ",
        buttonText: "Trải nghiệm ngay!",
        isHot: true
    },

    // ── Lessons & Quizzes ─────────────────────────────────
    {
        title: "Học bài viết Tiếng Anh 10 - Học kỳ II năm học 2025-2026",
        url: "/eduspace/tienganh/10/hoc-bai-viet-ck2-2526",
        description: "Học bài viết Tiếng Anh 10 - Học kỳ II năm học 2025-2026",
        tag: "Tiếng Anh",
        type: "lesson",
        class: "10",
        subject: "Tiếng Anh"
    },
    {
        title: "Đề cương Lịch Sử 10 - Học kỳ II năm học 2025-2026",
        url: "/eduspace/lichsu/10/on-tap-hk2-2526-v1",
        description: "Tổng hợp các câu hỏi ôn tập học kỳ II môn Lịch Sử lớp 10 năm học 2025-2026 'Bản 1'",
        tag: "Lịch Sử",
        type: "quiz",
        class: "10",
        subject: "Lịch Sử"
    },
    {
        title: "Lịch sử bài 8 - Kết Nối Tri Thức",
        url: "/eduspace/lichsu/10/bai8-kntt",
        description: "Lịch sử bài 8: Hành trình phát triển và thành tựu của văn minh Đông Nam Á thời cổ, trung đại - Kết Nối Tri Thức",
        tag: "Lịch Sử",
        type: "lesson",
        subject: "Lịch Sử",
        class: "10"
    },
    {
        title: "Moment lực - Vật Lý 10 KNTT",
        url: "/eduspace/vatly/10/moment-luc",
        description: "Moment Lực. Cân bằng của vật rắn - Vật Lý 10 sách Kết Nối Tri Thức với Cuộc Sống - EduSpace by ND Labs",
        tag: "Vật Lý",
        type: "quiz",
        subject: "Vật Lý",
        class: "10"
    },
    {
        title: "Học thơ - EduSpace by ND Labs",
        url: "/eduspace/nguvan/hoc-tho",
        description: "Học thơ với nhiều tính năng thú vị - EduSpace by ND Labs",
        tag: "Ngữ Văn",
        type: "lesson",
        subject: "Ngữ Văn",
        buttonText: "Học thuộc thơ",
    },
    {
        title: "Học Lịch Sử 10 bài 7 - Kết nối tri thức",
        url: "/eduspace/lichsu/10/bai7-kntt",
        description: "Học Lịch Sử 10 bài 7 - Các cuộc Cách mạng Công nghiệp thời hiện đại - Sách Kết nối tri thức",
        tag: "Lịch Sử",
        type: "lesson",
        subject: "Lịch Sử",
        class: "10",
    },
    {
        title: "Kiểm tra Lịch Sử 10 bài 7 - Kết nối tri thức",
        url: "/eduspace/lichsu/10/bai7-kntt",
        description: "100 câu kiểm tra Lịch Sử 10 bài 7 - Các cuộc Cách mạng Công nghiệp thời hiện đại - Sách Kết nối tri thức",
        tag: "Lịch Sử",
        type: "quiz",
        subject: "Lịch Sử",
        class: "10",
        buttonText: "Làm bài kiểm tra",
    },
    {
        title: "EduVoc by ND Labs - Học từ vựng tiếng Anh thú vị",
        url: "/eduspace/tienganh/voc",
        description: "EduVoc by ND Labs giúp bạn học từ vựng tiếng Anh thú vị hơn bằng nhiều tính năng như flashcard, thử thách nhanh tay, ...",
        tag: "Công Cụ",
        type: "lesson",
        subject: "Tiếng Anh",
        buttonText: "Học ngay!",
    },
    {
        title: "Học các nguyên tố hóa học phổ biến",
        url: "/eduspace/BTH/phobien",
        description: "Bài học tương tác giúp bạn nắm vững bảng tuần hoàn các nguyên tố hóa học một cách dễ dàng và thú vị với 'chuỗi kỷ lục'.",
        tag: "Công Cụ",
        type: "quiz",
        subject: "Hóa Học",
        buttonText: "Tạo 'chuỗi kỷ lục' ngay!",
    },
    {
        title: "EduAI Assistant by ND Labs - Trợ lý AI về Giáo dục",
        url: "/eduspace/assistant",
        description: "EduAI Assistant by ND Labs là trợ lý ảo AI về lĩnh vực Giáo dục.",
        tag: "Công Cụ",
        buttonText: "Trò chuyện với EduAI",
    },
    {
        title: "Đề cương ôn tập Vật lý 10 - Học kì I năm học 2025-2026",
        url: "/eduspace/vatly/10/on-tap-hk1-2526-v1",
        description: "Tổng hợp các câu hỏi ôn tập học kỳ I môn Vật Lý lớp 10 năm học 2025-2026 'Bản 1'",
        tag: "Vật Lý",
        type: "quiz",
        class: "10",
        subject: "Vật Lý"
    },
    {
        title: "Đề cương Địa Lý 10 - Học kỳ 1 năm học 2025-2026.",
        url: "/eduspace/dialy/10/on-tap-hk1-2526-v1/index.html",
        tag: "Địa Lý",
        type: "quiz",
        subject: "Địa Lý",
        class: "10",
    },
    {
        title: "Thử thách trí nhớ của bạn!",
        url: "/eduspace/memo",
        description: "Bài kiểm tra giúp bạn rèn luyện và thử thách trí nhớ của mình qua các câu hỏi thú vị.",
        tag: "Trí nhớ",
        type: "quiz",
        buttonText: "Bắt đầu thử thách",
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
        title: "Đề cương Hóa Học 10 - Tính lượng ion dư (Bài 1)",
        url: "/eduspace/hoahoc/10/tinh-luong-ion-du-1",
        description: "Tổng hợp các câu hỏi 'Tính lượng ion dư 1' ôn tập học kỳ I môn Hóa Học lớp 10 năm học 2025-2026",
        tag: "Hóa Học",
        type: "quiz",
        class: "10",
        subject: "Hóa Học"
    },
    {
        title: "Đề cương Hóa Học 10 - Tính lượng ion dư (Bài 2)",
        url: "/eduspace/hoahoc/10/tinh-luong-ion-du-2",
        description: "Tổng hợp các câu hỏi 'Tính lượng ion dư 2' ôn tập học kỳ I môn Hóa Học lớp 10 năm học 2025-2026",
        tag: "Hóa Học",
        type: "quiz",
        class: "10",
        subject: "Hóa Học"
    },
    {
        title: "Đề cương Hóa Học 10 - Tính lượng ion dư (Bài 3)",
        url: "/eduspace/hoahoc/10/tinh-luong-ion-du-3",
        description: "Tổng hợp các câu hỏi 'Tính lượng ion dư 3' ôn tập học kỳ I môn Hóa Học lớp 10 năm học 2025-2026",
        tag: "Hóa Học",
        type: "quiz",
        class: "10",
        subject: "Hóa Học"
    },
    {
        title: "Đề cương Hóa Học 10 - Tính lượng ion dư (Bài 4)",
        url: "/eduspace/hoahoc/10/tinh-luong-ion-du-4",
        description: "Tổng hợp các câu hỏi 'Tính lượng ion dư 4' ôn tập học kỳ I môn Hóa Học lớp 10 năm học 2025-2026",
        tag: "Hóa Học",
        type: "quiz",
        class: "10",
        subject: "Hóa Học"
    },
    {
        title: "Kiểm tra Hành trình văn minh nhân loại - Lịch Sử 10",
        url: "/eduspace/lichsu/10/hanh-trinh-van-minh-nhan-loai/kiem-tra",
        tag: "Lịch Sử",
        type: "quiz",
        class: "10",
        subject: "Lịch Sử",
    },
    {
        title: "ÔN TẬP GIỮA HỌC KÌ II - MÔN: CÔNG NGHỆ 10 (2025-2026)",
        url: "/eduspace/congnghe/10/on-tap-gk2-2526-cncn-v1",
        description: "Tổng hợp các câu hỏi ôn tập giữa học kỳ II môn Thiết kế và Công nghệ lớp 10 năm học 2025-2026",
        tag: "Công Nghệ",
        type: "quiz",
        class: "10",
        subject: "Công Nghệ",
    },
    {
        title: "Ôn tập Giữa học kỳ II - Môn: Lịch Sử 10 (2025-2026)",
        url: "/eduspace/lichsu/10/on-tap-gk2-2526-v1",
        description: "Tổng hợp các câu hỏi ôn tập giữa học kỳ II môn Lịch Sử lớp 10 năm học 2025-2026",
        tag: "Lịch Sử",
        type: "quiz",
        class: "10",
        subject: "Lịch Sử",
    },
    {
        title: "Ôn tập Giữa học kỳ II - Môn: Vật Lý 10 (Kết nối tri thức) 2025-2026",
        url: "/eduspace/vatly/10/on-tap-gk2-kntt-v1",
        description: "Tổng hợp 60 câu trắc nghiệm và 6 bài tự luận ôn tập giữa học kỳ II môn Vật Lý lớp 10 (Kết nối tri thức) năm học 2025-2026. Bài 21–26.",
        tag: "Vật Lý",
        type: "quiz",
        class: "10",
        subject: "Vật Lý",
    },
    {
        title: "Ôn tập Giữa học kỳ II - Môn: Lịch Sử 9 (2025-2026) v1",
        url: "/eduspace/lichsu/9/on-tap-gk2-2526-v1",
        description: "Tổng hợp các câu hỏi ôn tập giữa học kỳ II môn Lịch Sử lớp 9 biên soạn bởi EduSpace by ND Labs theo sách Chân Trời Sáng Tạo năm học 2025-2026",
        tag: "Lịch Sử",
        type: "quiz",
        class: "9",
        subject: "Lịch Sử"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Vật Lý 10 (Kết nối tri thức) 2025-2026",
        url: "/eduspace/vatly/10/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Vật Lý lớp 10 theo chương trình GDPT 2018 (sách Kết nối tri thức). Gồm trắc nghiệm và tự luận.",
        tag: "Vật Lý",
        type: "quiz",
        class: "10",
        subject: "Vật Lý"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Vật Lý 11 (Kết nối tri thức) 2025-2026",
        url: "/eduspace/vatly/11/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Vật Lý lớp 11 theo chương trình GDPT 2018 (sách Kết nối tri thức). Gồm trắc nghiệm và tự luận.",
        tag: "Vật Lý",
        type: "quiz",
        class: "11",
        subject: "Vật Lý"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Vật Lý 12 (Kết nối tri thức) 2025-2026",
        url: "/eduspace/vatly/12/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Vật Lý lớp 12 theo chương trình GDPT 2018 (sách Kết nối tri thức). Gồm trắc nghiệm và tự luận.",
        tag: "Vật Lý",
        type: "quiz",
        class: "12",
        subject: "Vật Lý"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Hóa Học 10 (Kết nối tri thức) 2025-2026",
        url: "/eduspace/hoahoc/10/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Hóa Học lớp 10 theo chương trình GDPT 2018 (sách Kết nối tri thức). Gồm trắc nghiệm và tự luận.",
        tag: "Hóa Học",
        type: "quiz",
        class: "10",
        subject: "Hóa Học"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Hóa Học 11 (Kết nối tri thức) 2025-2026",
        url: "/eduspace/hoahoc/11/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Hóa Học lớp 11 theo chương trình GDPT 2018 (sách Kết nối tri thức). Gồm trắc nghiệm và tự luận.",
        tag: "Hóa Học",
        type: "quiz",
        class: "11",
        subject: "Hóa Học"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Hóa Học 12 (Kết nối tri thức) 2025-2026",
        url: "/eduspace/hoahoc/12/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Hóa Học lớp 12 theo chương trình GDPT 2018 (sách Kết nối tri thức). Gồm trắc nghiệm và tự luận.",
        tag: "Hóa Học",
        type: "quiz",
        class: "12",
        subject: "Hóa Học"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Toán 10 (Kết nối tri thức) 2025-2026",
        url: "/eduspace/toan/10/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Toán lớp 10 theo chương trình GDPT 2018 (sách Kết nối tri thức). Gồm trắc nghiệm và tự luận.",
        tag: "Toán",
        type: "quiz",
        class: "10",
        subject: "Toán"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Toán 11 (Kết nối tri thức) 2025-2026",
        url: "/eduspace/toan/11/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Toán lớp 11 theo chương trình GDPT 2018 (sách Kết nối tri thức). Gồm trắc nghiệm và tự luận.",
        tag: "Toán",
        type: "quiz",
        class: "11",
        subject: "Toán"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Toán 12 (Kết nối tri thức) 2025-2026",
        url: "/eduspace/toan/12/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Toán lớp 12 theo chương trình GDPT 2018 (sách Kết nối tri thức). Gồm trắc nghiệm và tự luận.",
        tag: "Toán",
        type: "quiz",
        class: "12",
        subject: "Toán"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Tin Học 10 (Kết nối tri thức) 2025-2026",
        url: "/eduspace/tinhoc/10/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Tin Học lớp 10 theo chương trình GDPT 2018 (sách Kết nối tri thức).",
        tag: "Tin Học",
        type: "quiz",
        class: "10",
        subject: "Tin Học"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Tin Học 11 (Kết nối tri thức) 2025-2026",
        url: "/eduspace/tinhoc/11/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Tin Học lớp 11 theo chương trình GDPT 2018 (sách Kết nối tri thức).",
        tag: "Tin Học",
        type: "quiz",
        class: "11",
        subject: "Tin Học"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Tin Học 12 (Kết nối tri thức) 2025-2026",
        url: "/eduspace/tinhoc/12/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Tin Học lớp 12 theo chương trình GDPT 2018 (sách Kết nối tri thức).",
        tag: "Tin Học",
        type: "quiz",
        class: "12",
        subject: "Tin Học"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Địa Lí 10 (Kết nối tri thức) 2025-2026",
        url: "/eduspace/diali/10/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Địa Lí lớp 10 theo chương trình GDPT 2018 (sách Kết nối tri thức).",
        tag: "Địa Lí",
        type: "quiz",
        class: "10",
        subject: "Địa Lí"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Địa Lí 11 (Kết nối tri thức) 2025-2026",
        url: "/eduspace/diali/11/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Địa Lí lớp 11 theo chương trình GDPT 2018 (sách Kết nối tri thức).",
        tag: "Địa Lí",
        type: "quiz",
        class: "11",
        subject: "Địa Lí"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Địa Lí 12 (Kết nối tri thức) 2025-2026",
        url: "/eduspace/diali/12/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Địa Lí lớp 12 theo chương trình GDPT 2018 (sách Kết nối tri thức).",
        tag: "Địa Lí",
        type: "quiz",
        class: "12",
        subject: "Địa Lí"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Lịch Sử 10 (Kết nối tri thức) 2025-2026",
        url: "/eduspace/lichsu/10/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Lịch Sử lớp 10 theo chương trình GDPT 2018 (sách Kết nối tri thức).",
        tag: "Lịch Sử",
        type: "quiz",
        class: "10",
        subject: "Lịch Sử"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Lịch Sử 11 (Kết nối tri thức) 2025-2026",
        url: "/eduspace/lichsu/11/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Lịch Sử lớp 11 theo chương trình GDPT 2018 (sách Kết nối tri thức).",
        tag: "Lịch Sử",
        type: "quiz",
        class: "11",
        subject: "Lịch Sử"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Lịch Sử 12 (Kết nối tri thức) 2025-2026",
        url: "/eduspace/lichsu/12/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Lịch Sử lớp 12 theo chương trình GDPT 2018 (sách Kết nối tri thức).",
        tag: "Lịch Sử",
        type: "quiz",
        class: "12",
        subject: "Lịch Sử"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Kinh tế và Pháp luật 10 (Kết nối tri thức) 2025-2026",
        url: "/eduspace/ktpl/10/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Kinh tế và Pháp luật lớp 10 theo chương trình GDPT 2018 (sách Kết nối tri thức).",
        tag: "KTPL",
        type: "quiz",
        class: "10",
        subject: "GD KTPL"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Kinh tế và Pháp luật 11 (Kết nối tri thức) 2025-2026",
        url: "/eduspace/ktpl/11/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Kinh tế và Pháp luật lớp 11 theo chương trình GDPT 2018 (sách Kết nối tri thức).",
        tag: "KTPL",
        type: "quiz",
        class: "11",
        subject: "GD KTPL"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Kinh tế và Pháp luật 12 (Kết nối tri thức) 2025-2026",
        url: "/eduspace/ktpl/12/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Kinh tế và Pháp luật lớp 12 theo chương trình GDPT 2018 (sách Kết nối tri thức).",
        tag: "KTPL",
        type: "quiz",
        class: "12",
        subject: "GD KTPL"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Công nghệ 10 Nông nghiệp (Kết nối tri thức) 2025-2026",
        url: "/eduspace/congnghe-nongnghiep/10/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Công nghệ lớp 10 (Nông nghiệp trồng trọt) theo chương trình GDPT 2018.",
        tag: "Công nghệ",
        type: "quiz",
        class: "10",
        subject: "Công nghệ Nông nghiệp"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Công nghệ 11 Chăn nuôi (Kết nối tri thức) 2025-2026",
        url: "/eduspace/congnghe-nongnghiep/11/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Công nghệ lớp 11 (Chăn nuôi) theo chương trình GDPT 2018.",
        tag: "Công nghệ",
        type: "quiz",
        class: "11",
        subject: "Công nghệ Nông nghiệp"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Công nghệ 12 Lâm nghiệp - Thủy sản (Kết nối tri thức) 2025-2026",
        url: "/eduspace/congnghe-nongnghiep/12/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Công nghệ lớp 12 (Lâm nghiệp - Thủy sản) theo chương trình GDPT 2018.",
        tag: "Công nghệ",
        type: "quiz",
        class: "12",
        subject: "Công nghệ Nông nghiệp"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Công nghệ 10 (Thiết kế và Công nghệ) 2025-2026",
        url: "/eduspace/congnghe-congnghiep/10/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Công nghệ lớp 10 (Thiết kế và Công nghệ) theo chương trình GDPT 2018.",
        tag: "Công nghệ",
        type: "quiz",
        class: "10",
        subject: "Công nghệ Công nghiệp"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Công nghệ 11 Cơ khí động lực (Kết nối tri thức) 2025-2026",
        url: "/eduspace/congnghe-congnghiep/11/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Công nghệ lớp 11 (Cơ khí động lực) theo chương trình GDPT 2018.",
        tag: "Công nghệ",
        type: "quiz",
        class: "11",
        subject: "Công nghệ Công nghiệp"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Công nghệ 12 Điện - Điện tử (Kết nối tri thức) 2025-2026",
        url: "/eduspace/congnghe-congnghiep/12/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Công nghệ lớp 12 (Điện - Điện tử) theo chương trình GDPT 2018.",
        tag: "Công nghệ",
        type: "quiz",
        class: "12",
        subject: "Công nghệ Công nghiệp"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Ngữ Văn 10 (Kết nối tri thức) 2025-2026",
        url: "/eduspace/nguvan/10/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Ngữ Văn lớp 10 theo chương trình GDPT 2018 (sách Kết nối tri thức).",
        tag: "Ngữ Văn",
        type: "quiz",
        class: "10",
        subject: "Ngữ Văn"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Ngữ Văn 11 (Kết nối tri thức) 2025-2026",
        url: "/eduspace/nguvan/11/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Ngữ Văn lớp 11 theo chương trình GDPT 2018 (sách Kết nối tri thức).",
        tag: "Ngữ Văn",
        type: "quiz",
        class: "11",
        subject: "Ngữ Văn"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Ngữ Văn 12 (Kết nối tri thức) 2025-2026",
        url: "/eduspace/nguvan/12/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Ngữ Văn lớp 12 theo chương trình GDPT 2018 (sách Kết nối tri thức).",
        tag: "Ngữ Văn",
        type: "quiz",
        class: "12",
        subject: "Ngữ Văn"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Sinh Học 10 (Kết nối tri thức) 2025-2026",
        url: "/eduspace/sinhhoc/10/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Sinh Học lớp 10 theo chương trình GDPT 2018 (sách Kết nối tri thức). Gồm trắc nghiệm và tự luận.",
        tag: "Sinh Học",
        type: "quiz",
        class: "10",
        subject: "Sinh Học"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Sinh Học 11 (Kết nối tri thức) 2025-2026",
        url: "/eduspace/sinhhoc/11/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Sinh Học lớp 11 theo chương trình GDPT 2018 (sách Kết nối tri thức). Gồm trắc nghiệm và tự luận.",
        tag: "Sinh Học",
        type: "quiz",
        class: "11",
        subject: "Sinh Học"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Sinh Học 12 (Kết nối tri thức) 2025-2026",
        url: "/eduspace/sinhhoc/12/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Sinh Học lớp 12 theo chương trình GDPT 2018 (sách Kết nối tri thức). Gồm trắc nghiệm và tự luận.",
        tag: "Sinh Học",
        type: "quiz",
        class: "12",
        subject: "Sinh Học"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Tiếng Anh 10 (Global Success) 2025-2026",
        url: "/eduspace/tienganh/10/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Tiếng Anh lớp 10 theo chương trình GDPT 2018 (sách Global Success).",
        tag: "Tiếng Anh",
        type: "quiz",
        class: "10",
        subject: "Tiếng Anh"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Tiếng Anh 11 (Global Success) 2025-2026",
        url: "/eduspace/tienganh/11/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Tiếng Anh lớp 11 theo chương trình GDPT 2018 (sách Global Success).",
        tag: "Tiếng Anh",
        type: "quiz",
        class: "11",
        subject: "Tiếng Anh"
    },
    {
        title: "Kiểm tra Cuối Học Kì II – Tiếng Anh 12 (Global Success) 2025-2026",
        url: "/eduspace/tienganh/12/ck2-2526-kntt-v1",
        description: "Đề kiểm tra cuối học kì II môn Tiếng Anh lớp 12 theo chương trình GDPT 2018 (sách Global Success).",
        tag: "Tiếng Anh",
        type: "quiz",
        class: "12",
        subject: "Tiếng Anh"
    }
]
