// data.js – KIỂM TRA CUỐI KÌ II – TIN HỌC 10 (KNTT) – 2025-2026
// Chương trình GDPT 2018 | Sách Kết Nối Tri Thức với Cuộc Sống
// Nội dung HK2: Lập trình Python cơ bản (Kiểu dữ liệu, Câu lệnh điều kiện, Vòng lặp, List, String, Hàm)
// 28 câu TN (×0,25đ = 7đ) + 3 câu TL (×1đ = 3đ) | 45 phút

window.quizData = {
    title: "Kiểm tra Cuối Học Kì II – Tin Học 10 (Kết nối tri thức) 2025-2026",
    config: {
        testDuration: 2700,
        examLayout: {
            multiple: { count: 28, pointsPerQ: 0.25 },
            essay: { count: 3, pointsPerQ: 1.0 }
        }
    },
    questions: [
        // ── KIỂU DỮ LIỆU – BIẾN – PHÉP TOÁN ──────────────────────────────
        {
            type: "multiple",
            question: "Trong Python, để khai báo biến số nguyên, cách viết nào sau đây ĐÚNG?",
            options: ["int x = 5", "x = 5", "x := 5", "x == 5"],
            correct: 1,
            explanation: "Python không cần khai báo kiểu dữ liệu một cách tường minh, chỉ cần gán giá trị: x = 5."
        },
        {
            type: "multiple",
            question: "Kết quả của phép toán `15 // 4` trong Python là:",
            options: ["3.75", "4", "3", "15/4"],
            correct: 2,
            explanation: "`//` là phép chia lấy phần nguyên. 15 chia 4 được 3 dư 3, nên phần nguyên là 3."
        },
        {
            type: "multiple",
            question: "Để nhập một số nguyên từ bàn phím, ta dùng lệnh nào?",
            options: ["input()", "int(input())", "float(input())", "print(input())"],
            correct: 1,
            explanation: "`input()` trả về chuỗi (string), cần dùng `int()` để chuyển sang số nguyên."
        },
        {
            type: "multiple",
            question: "Tên biến nào sau đây hợp lệ trong Python?",
            options: ["1_dem", "dem so", "dem_1", "class"],
            correct: 2,
            explanation: "Tên biến không được bắt đầu bằng số, không chứa dấu cách, không trùng từ khóa."
        },
        {
            type: "multiple",
            question: "Kiểu dữ liệu của biểu thức `5.0 + 2` là:",
            options: ["int", "float", "str", "bool"],
            correct: 1,
            explanation: "Số thực cộng số nguyên sẽ ra số thực (`float`)."
        },
        // ── CẤU TRÚC RẼ NHÁNH ───────────────────────────────────────────
        {
            type: "multiple",
            question: "Cú pháp câu lệnh điều kiện rẽ nhánh trong Python là:",
            options: [
                "if <điều kiện> then <câu lệnh>",
                "if <điều kiện>: <câu lệnh>",
                "if (<điều kiện>) { <câu lệnh> }",
                "if <điều kiện>; <câu lệnh>"
            ],
            correct: 1,
            explanation: "Cú pháp Python dùng dấu hai chấm `:` sau điều kiện và thụt lề cho khối lệnh."
        },
        {
            type: "multiple",
            question: "Đoạn lệnh sau in ra kết quả gì?\n```python\nx = 5\nif x % 2 == 0:\n    print('A')\nelse:\n    print('B')\n```",
            options: ["A", "B", "Không in gì", "Lỗi"],
            correct: 1,
            explanation: "5 chia 2 dư 1 (khác 0), nên lệnh chuyển sang nhánh `else` in ra B."
        },
        {
            type: "multiple",
            question: "Phép toán logic 'VÀ' trong Python được viết là:",
            options: ["&&", "AND", "and", "&"],
            correct: 2,
            explanation: "Python dùng từ khóa viết thường `and`, `or`, `not` cho logic."
        },
        {
            type: "multiple",
            question: "Đoạn lệnh sau bị lỗi ở đâu?\n```python\nif x > 0\n    print('Dương')\n```",
            options: ["Không có ngoặc đơn ở điều kiện", "Thiếu dấu `:` sau điều kiện", "Sai chữ print", "Không có lỗi"],
            correct: 1,
            explanation: "Lệnh `if` trong Python bắt buộc phải kết thúc bằng dấu `:`."
        },
        // ── VÒNG LẶP ─────────────────────────────────────────────────────
        {
            type: "multiple",
            question: "Hàm `range(5)` sẽ tạo ra dãy số nào?",
            options: ["1, 2, 3, 4, 5", "0, 1, 2, 3, 4", "0, 1, 2, 3, 4, 5", "1, 2, 3, 4"],
            correct: 1,
            explanation: "`range(n)` tạo dãy từ 0 đến n-1."
        },
        {
            type: "multiple",
            question: "Vòng lặp `for i in range(1, 6, 2): print(i)` in ra:",
            options: ["1 2 3 4 5", "1 3 5", "2 4", "1 4"],
            correct: 1,
            explanation: "Bắt đầu từ 1, bước nhảy là 2, kết thúc trước 6. Kết quả: 1, 3, 5."
        },
        {
            type: "multiple",
            question: "Lệnh nào dùng để thoát khỏi vòng lặp ngay lập tức?",
            options: ["continue", "exit", "break", "return"],
            correct: 2,
            explanation: "`break` kết thúc vòng lặp hiện tại, `continue` bỏ qua bước lặp hiện tại để sang bước tiếp theo."
        },
        {
            type: "multiple",
            question: "Vòng lặp `while` sẽ dừng khi nào?",
            options: [
                "Khi số lần lặp đạt mức tối đa",
                "Khi điều kiện của while trở thành False",
                "Khi lặp đủ 10 lần",
                "Khi nhấn phím Enter"
            ],
            correct: 1,
            explanation: "Vòng lặp `while` lặp chừng nào điều kiện còn `True`, và dừng khi `False`."
        },
        // ── DANH SÁCH (LIST) ──────────────────────────────────────────────
        {
            type: "multiple",
            question: "Để khởi tạo một danh sách (list) rỗng, ta viết:",
            options: ["A = ()", "A = []", "A = {}", "A = list"],
            correct: 1,
            explanation: "List trong Python được định nghĩa bằng cặp ngoặc vuông `[]`."
        },
        {
            type: "multiple",
            question: "Cho list `A = [10, 20, 30, 40]`. Giá trị của `A[1]` là:",
            options: ["10", "20", "30", "40"],
            correct: 1,
            explanation: "Chỉ số mảng bắt đầu từ 0. `A[0]`=10, `A[1]`=20."
        },
        {
            type: "multiple",
            question: "Phương thức nào dùng để thêm một phần tử vào cuối danh sách?",
            options: ["add()", "insert()", "append()", "push()"],
            correct: 2,
            explanation: "Trong Python, dùng phương thức `append(giá_trị)` để thêm vào cuối list."
        },
        {
            type: "multiple",
            question: "Cho `A = [1, 2, 3]`. Lệnh `len(A)` trả về giá trị bao nhiêu?",
            options: ["1", "2", "3", "4"],
            correct: 2,
            explanation: "`len()` trả về số lượng phần tử của list, trong trường hợp này là 3."
        },
        {
            type: "multiple",
            question: "Để lấy phần tử cuối cùng của list `A`, ta dùng:",
            options: ["A[-1]", "A[0]", "A[len(A)]", "A[last]"],
            correct: 0,
            explanation: "Chỉ số âm cho phép lấy từ cuối list ngược lên. `-1` là phần tử cuối cùng."
        },
        {
            type: "multiple",
            question: "Toán tử `in` dùng với list có tác dụng gì?",
            options: [
                "Nối hai list lại với nhau",
                "Kiểm tra một phần tử có nằm trong list hay không",
                "Xóa một phần tử trong list",
                "Lặp qua list"
            ],
            correct: 1,
            explanation: "`x in A` trả về `True` nếu `x` có mặt trong danh sách `A`, ngược lại trả về `False`."
        },
        // ── XÂU KÝ TỰ (STRING) ────────────────────────────────────────────
        {
            type: "multiple",
            question: "Đặc điểm nào sau đây KHÔNG đúng với xâu ký tự (string) trong Python?",
            options: [
                "Được bao quanh bởi nháy đơn hoặc nháy kép",
                "Có thể thay đổi nội dung của một ký tự trong xâu (mutable)",
                "Có thể truy cập từng ký tự qua chỉ số",
                "Có thể dùng phép cộng (+) để nối 2 xâu"
            ],
            correct: 1,
            explanation: "Xâu ký tự trong Python là không thể thay đổi (immutable). Ta không thể gán kiểu `s[0] = 'A'`."
        },
        {
            type: "multiple",
            question: "Đoạn lệnh `print('Python' * 3)` in ra gì?",
            options: [
                "Python3",
                "Python Python Python",
                "PythonPythonPython",
                "Lỗi"
            ],
            correct: 2,
            explanation: "Phép nhân xâu với số nguyên sẽ lặp lại xâu đó n lần viết liền nhau."
        },
        {
            type: "multiple",
            question: "Phương thức nào chuyển toàn bộ xâu s thành chữ in hoa?",
            options: ["s.Upper()", "s.upper()", "upper(s)", "s.uppercase()"],
            correct: 1,
            explanation: "`s.upper()` trả về xâu viết hoa toàn bộ."
        },
        {
            type: "multiple",
            question: "Cho `s = 'ABCDEF'`. Biểu thức `s[1:4]` sẽ cho kết quả là:",
            options: ["ABC", "BCD", "CDE", "BCDE"],
            correct: 1,
            explanation: "Cắt xâu từ chỉ số 1 (bao gồm, ký tự 'B') đến chỉ số 4 (không bao gồm, trước 'E'), nên lấy chỉ số 1, 2, 3 là 'BCD'."
        },
        // ── HÀM (FUNCTION) ────────────────────────────────────────────────
        {
            type: "multiple",
            question: "Từ khóa nào dùng để định nghĩa một hàm trong Python?",
            options: ["function", "def", "func", "define"],
            correct: 1,
            explanation: "Cú pháp: `def ten_ham(tham_so):`."
        },
        {
            type: "multiple",
            question: "Hàm có thể trả về giá trị cho chương trình gọi nó thông qua từ khóa nào?",
            options: ["print", "yield", "return", "output"],
            correct: 2,
            explanation: "`return` kết thúc hàm và trả về một giá trị."
        },
        {
            type: "multiple",
            question: "Mục đích chính của việc xây dựng hàm là gì?",
            options: [
                "Làm chương trình chạy nhanh hơn",
                "Giảm bớt bộ nhớ",
                "Tái sử dụng mã lệnh, chia nhỏ bài toán phức tạp",
                "Để dễ in ra màn hình"
            ],
            correct: 2,
            explanation: "Hàm giúp mã lệnh gọn gàng, có tính module, dễ bảo trì và tái sử dụng (Code Reusability)."
        },
        {
            type: "multiple",
            question: "Biến được khai báo bên trong hàm được gọi là:",
            options: ["Biến toàn cục (global)", "Biến cục bộ (local)", "Hằng số", "Tham số"],
            correct: 1,
            explanation: "Biến cục bộ chỉ tồn tại và được sử dụng trong phạm vi của hàm đó."
        },
        {
            type: "multiple",
            question: "Lỗi 'IndentationError' thường xảy ra khi nào?",
            options: [
                "Viết sai tên biến",
                "Thụt lề (khoảng trắng đầu dòng) không đúng quy tắc",
                "Chia một số cho 0",
                "Gọi hàm chưa định nghĩa"
            ],
            correct: 1,
            explanation: "Python dùng thụt lề để xác định các khối lệnh. Thụt lề sai sẽ sinh lỗi `IndentationError`."
        },
        // ── TỰ LUẬN ──────────────────────────────────────────────────────
        {
            type: "essay",
            question: "Viết chương trình Python nhập vào một số nguyên n từ bàn phím. Kiểm tra và in ra màn hình thông báo số n là số chẵn hay số lẻ.",
            suggested: "Sử dụng hàm input() và int(). Dùng cấu trúc if-else và phép chia lấy dư (%).\n\nCode mẫu:\nn = int(input('Nhập số n: '))\nif n % 2 == 0:\n    print(n, 'là số chẵn')\nelse:\n    print(n, 'là số lẻ')",
            points: 25,
            explanation: "AI chấm: Đọc đúng số nguyên (10đ), dùng đúng lệnh if-else và n % 2 == 0 (15đ)."
        },
        {
            type: "essay",
            question: "Viết một hàm `def TinhTong(n)` nhận đầu vào là số nguyên dương n và trả về tổng các số tự nhiên từ 1 đến n (S = 1 + 2 + ... + n).\n\nSau đó viết lệnh gọi hàm để tính và in ra tổng với n = 10.",
            suggested: "Code mẫu:\ndef TinhTong(n):\n    S = 0\n    for i in range(1, n + 1):\n        S += i\n    return S\n\nprint('Tổng là:', TinhTong(10))",
            points: 25,
            explanation: "AI chấm: Định nghĩa đúng hàm `def`, vòng lặp tính tổng `range(1, n+1)` (15đ), dùng từ khóa `return` và gọi hàm đúng (10đ)."
        },
        {
            type: "essay",
            question: "Cho một mảng (list) các số nguyên: `A = [5, 12, 7, 20, 8, 3]`.\nViết chương trình Python (hoặc chỉ đoạn lệnh) duyệt qua danh sách A và in ra màn hình các số lớn hơn 10 có trong danh sách.",
            suggested: "Dùng vòng lặp for duyệt list A và lệnh if.\n\nCode mẫu:\nA = [5, 12, 7, 20, 8, 3]\nfor x in A:\n    if x > 10:\n        print(x)\n\n# Kết quả in ra: 12, 20",
            points: 25,
            explanation: "AI chấm: Duyệt list đúng `for x in A:` hoặc `for i in range(len(A)):` (10đ), điều kiện so sánh `> 10` đúng (15đ)."
        }
    ]
};
