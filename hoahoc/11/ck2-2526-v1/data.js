// data.js – KIỂM TRA CUỐI KÌ II – HÓA HỌC 11 (KNTT) – 2025-2026
// Chương trình GDPT 2018 | Sách Kết Nối Tri Thức với Cuộc Sống
// Nội dung: Dẫn xuất Halogen - Alcohol - Phenol - Hợp chất Carbonyl - Carboxylic Acid
// 28 câu TN (×0,25đ = 7đ) + 3 câu TL (×1đ = 3đ) | 50 phút

window.quizData = {
    title: "Kiểm tra Cuối Học Kì II – Hóa Học 11 (Kết nối tri thức) 2025-2026",
    config: {
        testDuration: 3000,
        examLayout: {
            multiple: { count: 28, pointsPerQ: 0.25 },
            essay: { count: 3, pointsPerQ: 1.0 }
        }
    },
    questions: [
        // ── DẪN XUẤT HALOGEN - ALCOHOL - PHENOL ────────────────────────────────
        {
            type: "multiple",
            question: "Công thức chung của dẫn xuất monohalogen no, mạch hở là:",
            options: ["CnH2n+1X (n ≥ 1)", "CnH2nX2 (n ≥ 1)", "CnH2n-1X (n ≥ 2)", "CnH2n-7X (n ≥ 6)"],
            correct: 0,
            explanation: "Dẫn xuất monohalogen no, mạch hở được tạo ra khi thay 1 H của alkane bằng 1 X, có CT chung CnH2n+1X."
        },
        {
            type: "multiple",
            question: "Alcohol là những hợp chất hữu cơ trong phân tử có nhóm chức:",
            options: ["-OH liên kết trực tiếp với nguyên tử carbon no", "-OH liên kết trực tiếp với nguyên tử carbon vòng benzene", "-CHO", "-COOH"],
            correct: 0,
            explanation: "Alcohol là hợp chất hữu cơ có nhóm hydroxy (-OH) liên kết trực tiếp với carbon no."
        },
        {
            type: "multiple",
            question: "Chất nào sau đây là alcohol bậc II?",
            options: ["CH3-CH2-OH", "CH3-CH(OH)-CH3", "(CH3)3C-OH", "CH3-OH"],
            correct: 1,
            explanation: "CH3-CH(OH)-CH3 (propan-2-ol) có nhóm -OH gắn vào carbon bậc II."
        },
        {
            type: "multiple",
            question: "Glycerol (C3H5(OH)3) tác dụng với Cu(OH)2 tạo ra dung dịch có màu:",
            options: ["Đỏ gạch", "Xanh lam", "Tím", "Vàng"],
            correct: 1,
            explanation: "Alcohol đa chức có các nhóm -OH kề nhau (như glycerol) tác dụng với Cu(OH)2 tạo phức chất màu xanh lam."
        },
        {
            type: "multiple",
            question: "Oxi hóa không hoàn toàn propan-1-ol (CH3-CH2-CH2-OH) bằng CuO nung nóng, sản phẩm thu được là:",
            options: ["CH3-CH2-CHO", "CH3-CO-CH3", "CH3-CH2-COOH", "CH3-CH=CH2"],
            correct: 0,
            explanation: "Oxi hóa alcohol bậc I bằng CuO (to) tạo ra aldehyde (propanal)."
        },
        {
            type: "multiple",
            question: "Phenol có công thức phân tử là:",
            options: ["C6H6", "C6H5OH", "C6H5CH3", "C2H5OH"],
            correct: 1,
            explanation: "Phenol đơn giản nhất có công thức C6H5OH."
        },
        {
            type: "multiple",
            question: "Phenol tác dụng với dung dịch nào sau đây chứng tỏ phenol có tính axit yếu?",
            options: ["Na", "NaOH", "Br2", "HNO3"],
            correct: 1,
            explanation: "Phenol tác dụng với dung dịch bazơ (NaOH) tạo muối natri phenolate và nước, chứng tỏ có tính axit."
        },
        {
            type: "multiple",
            question: "Hiện tượng xảy ra khi nhỏ nước bromine vào dung dịch phenol là:",
            options: ["Có kết tủa trắng", "Có kết tủa vàng", "Có khí thoát ra", "Dung dịch mất màu đỏ nâu, không kết tủa"],
            correct: 0,
            explanation: "Phenol phản ứng với nước bromine tạo kết tủa trắng 2,4,6-tribromophenol."
        },
        {
            type: "multiple",
            question: "Nhiệt độ sôi của ethanol (C2H5OH) cao hơn so với dimethyl ether (CH3-O-CH3) có cùng phân tử khối là do:",
            options: ["Ethanol có liên kết ion", "Ethanol có liên kết hydrogen liên phân tử", "Ethanol có khối lượng riêng lớn hơn", "Ethanol có nhiều carbon hơn"],
            correct: 1,
            explanation: "Liên kết hydrogen liên phân tử giữa các phân tử ethanol làm tăng nhiệt độ sôi."
        },
        // ── HỢP CHẤT CARBONYL ──────────────────────────────────────────────────
        {
            type: "multiple",
            question: "Nhóm chức đặc trưng của aldehyde là:",
            options: ["-OH", "-O-", "-CHO", "-COOH"],
            correct: 2,
            explanation: "Nhóm chức của aldehyde là nhóm formyl (-CHO)."
        },
        {
            type: "multiple",
            question: "Chất nào sau đây thuộc loại ketone?",
            options: ["HCHO", "CH3CHO", "CH3COCH3", "CH3COOH"],
            correct: 2,
            explanation: "CH3COCH3 (acetone) là ketone vì có nhóm carbonyl >C=O liên kết với 2 gốc hydrocarbon."
        },
        {
            type: "multiple",
            question: "Tên thay thế của HCHO là:",
            options: ["Methanal", "Ethanal", "Methanol", "Formic acid"],
            correct: 0,
            explanation: "HCHO có 1 C, nhóm chức aldehyde đuôi -al => methanal."
        },
        {
            type: "multiple",
            question: "Để nhận biết aldehyde, người ta thường dùng thuốc thử nào sau đây?",
            options: ["Dung dịch AgNO3/NH3", "Quỳ tím", "Nước bromine", "Dung dịch NaOH"],
            correct: 0,
            explanation: "Aldehyde có phản ứng tráng bạc với thuốc thử Tollens (AgNO3/NH3), tạo kết tủa Ag sáng bóng."
        },
        {
            type: "multiple",
            question: "Phản ứng cộng H2 vào CH3CHO (xúc tác Ni, to) thu được sản phẩm là:",
            options: ["CH3CH2OH", "CH3COOH", "CH3CH3", "C2H5OH"],
            correct: 0,
            explanation: "Khử aldehyde bằng H2 tạo ra alcohol bậc I: CH3CHO + H2 -> CH3CH2OH."
        },
        {
            type: "multiple",
            question: "Formaldehyde (HCHO) được ứng dụng phổ biến để:",
            options: ["Làm gia vị thức ăn", "Ngâm tiêu bản sinh học (cồn, formalin)", "Sản xuất xà phòng", "Làm dung môi pha sơn"],
            correct: 1,
            explanation: "Dung dịch formaldehyde 37-40% gọi là formalin, dùng để ngâm tiêu bản động thực vật do tính diệt khuẩn."
        },
        {
            type: "multiple",
            question: "Acetone (CH3COCH3) không có phản ứng nào sau đây?",
            options: ["Phản ứng cộng H2", "Phản ứng tráng bạc", "Phản ứng cháy", "Tác dụng với HCN"],
            correct: 1,
            explanation: "Ketone không có tính khử như aldehyde nên không tham gia phản ứng tráng bạc."
        },
        {
            type: "multiple",
            question: "Hợp chất tạo được kết tủa vàng với I2 trong dung dịch NaOH (phản ứng iodoform) phải có nhóm:",
            options: ["CH3-CO-", "-CHO", "-COOH", "-OH"],
            correct: 0,
            explanation: "Phản ứng iodoform đặc trưng cho các hợp chất có nhóm CH3-CO- (methyl ketone) hoặc CH3-CH(OH)-."
        },
        {
            type: "multiple",
            question: "Oxi hóa hoàn toàn một hợp chất carbonyl bằng O2 thu được carboxylic acid có cùng số nguyên tử C. Hợp chất đó là:",
            options: ["Ketone", "Aldehyde", "Alcohol bậc I", "Alcohol bậc II"],
            correct: 1,
            explanation: "Aldehyde dễ bị oxi hóa tạo thành carboxylic acid tương ứng (RCHO -> RCOOH)."
        },
        // ── CARBOXYLIC ACID ────────────────────────────────────────────────────
        {
            type: "multiple",
            question: "Nhóm chức của carboxylic acid là:",
            options: ["-OH", "-CHO", "-COOH", "-COO-"],
            correct: 2,
            explanation: "Nhóm chức đặc trưng là nhóm carboxyl (-COOH)."
        },
        {
            type: "multiple",
            question: "Acetic acid (CH3COOH) là thành phần chính của:",
            options: ["Nước chanh", "Giấm ăn", "Rượu vang", "Mật ong"],
            correct: 1,
            explanation: "Giấm ăn là dung dịch acetic acid có nồng độ 2% - 5%."
        },
        {
            type: "multiple",
            question: "Tính axit của carboxylic acid mạnh hơn alcohol và phenol là do:",
            options: ["Phân tử có khối lượng lớn hơn", "Có liên kết hidro liên phân tử mạnh hơn", "Sự phân cực của liên kết O-H trong nhóm -COOH mạnh hơn nhờ hiệu ứng hút electron của nhóm >C=O", "Có khả năng phản ứng với kim loại"],
            correct: 2,
            explanation: "Nhóm >C=O hút electron làm liên kết O-H trong -COOH phân cực mạnh hơn, H+ dễ đứt ra hơn."
        },
        {
            type: "multiple",
            question: "Giấy quỳ tím chuyển sang màu gì khi nhúng vào dung dịch CH3COOH?",
            options: ["Đỏ", "Xanh", "Vàng", "Không đổi màu"],
            correct: 0,
            explanation: "CH3COOH là một axit (yếu) nên làm quỳ tím hóa đỏ."
        },
        {
            type: "multiple",
            question: "Phản ứng este hóa giữa carboxylic acid và alcohol cần xúc tác nào?",
            options: ["H2SO4 loãng", "H2SO4 đặc, đun nóng", "Ni, to", "NaOH"],
            correct: 1,
            explanation: "Phản ứng este hóa thường dùng H2SO4 đặc vừa làm xúc tác, vừa hút nước để chuyển dịch cân bằng."
        },
        {
            type: "multiple",
            question: "CH3COOH phản ứng được với dãy các chất nào sau đây?",
            options: ["Mg, Cu, NaOH", "CaCO3, NaOH, C2H5OH", "NaCl, NaOH, Mg", "Ag, KOH, CH3OH"],
            correct: 1,
            explanation: "CH3COOH có tính axit, tác dụng được với muối của axit yếu hơn (CaCO3), bazơ (NaOH) và alcohol (C2H5OH)."
        },
        {
            type: "multiple",
            question: "Trong tự nhiên, formic acid (HCOOH) có nhiều trong:",
            options: ["Quả nho", "Sữa chua", "Nọc kiến, ong", "Cây chua me đất"],
            correct: 2,
            explanation: "Formic acid có trong nọc của kiến (formica) và ong."
        },
        {
            type: "multiple",
            question: "Carboxylic acid nào sau đây có phản ứng tráng bạc?",
            options: ["CH3COOH", "HCOOH", "C2H5COOH", "C6H5COOH"],
            correct: 1,
            explanation: "HCOOH (formic acid) trong phân tử còn có nhóm -CHO nên có tính khử, tham gia phản ứng tráng bạc."
        },
        {
            type: "multiple",
            question: "Nhiệt độ sôi của CH3COOH cao hơn C2H5OH có cùng số carbon là do:",
            options: ["CH3COOH có phân tử khối lớn hơn", "Liên kết hydrogen giữa các phân tử axit bền vững hơn liên phân tử alcohol", "Axit có tính axit mạnh hơn", "Axit ở trạng thái rắn"],
            correct: 1,
            explanation: "Liên kết hydrogen liên phân tử của carboxylic acid mạnh hơn alcohol (tạo dạng dimer) làm nhiệt độ sôi cao hơn."
        },
        {
            type: "multiple",
            question: "Dung dịch làm quỳ tím hóa đỏ và có thể phản ứng với dung dịch Na2CO3 sinh ra khí CO2 là:",
            options: ["Phenol", "Ethanol", "Acetic acid", "Acetaldehyde"],
            correct: 2,
            explanation: "Acetic acid có tính axit mạnh hơn H2CO3 nên có thể đẩy CO2 ra khỏi muối Na2CO3."
        },
        // ── TỰ LUẬN ──────────────────────────────────────────────────────
        {
            type: "essay",
            question: "Hoàn thành các phương trình hóa học sau (ghi rõ điều kiện nếu có):\na) CH3CH2OH + CuO -> ...\nb) HCHO + AgNO3 + NH3 + H2O -> ...",
            suggested: "a) CH3CH2OH + CuO ->(t°) CH3CHO + Cu + H2O\nb) HCHO + 4AgNO3 + 6NH3 + 2H2O -> (NH4)2CO3 + 4Ag↓ + 4NH4NO3",
            points: 25,
            explanation: "AI chấm: HCHO tráng bạc ra 4Ag và (NH4)2CO3; CH3CH2OH oxh ra CH3CHO."
        },
        {
            type: "essay",
            question: "Viết phương trình hóa học giải thích hiện tượng: Khi bị kiến cắn hoặc ong đốt, người ta thường bôi vôi (Ca(OH)2) hoặc xà phòng vào vết đốt để giảm sưng tấy.",
            suggested: "Trong nọc kiến, ong có chứa formic acid (HCOOH) gây rát, sưng tấy. Vôi (Ca(OH)2) có tính bazơ, sẽ trung hòa lượng axit này, làm giảm đau và sưng:\n2HCOOH + Ca(OH)2 -> (HCOO)2Ca + 2H2O",
            points: 25,
            explanation: "AI chấm: Nêu được nọc kiến có axit HCOOH và PTHH trung hòa bởi Ca(OH)2."
        },
        {
            type: "essay",
            question: "Đốt cháy hoàn toàn 6,0 gam một carboxylic acid no, đơn chức, mạch hở (X). Toàn bộ sản phẩm cháy được dẫn qua bình đựng nước vôi trong dư, thấy khối lượng bình tăng 12,4 gam và có kết tủa tạo thành.\na) Xác định công thức phân tử của X.\nb) Viết phương trình phản ứng este hóa giữa X và ethanol (có H2SO4 đặc, t°).",
            suggested: "a) Gọi CT của X là CnH2nO2 (n ≥ 1).\nPhương trình cháy: CnH2nO2 + O2 -> nCO2 + nH2O\nSản phẩm cháy gồm CO2 và H2O. Khối lượng bình tăng = mCO2 + mH2O = 12,4g.\nVì X no đơn chức mạch hở -> nCO2 = nH2O = a mol.\nTa có: 44a + 18a = 12,4 -> 62a = 12,4 -> a = 0,2 mol.\nSố mol X = nCO2 / n = 0,2 / n.\nM(X) = 6,0 / (0,2 / n) = 30n.\nTa có: 14n + 32 = 30n -> 16n = 32 -> n = 2.\nCTPT của X là C2H4O2 (hay CH3COOH - acetic acid).\n\nb) CH3COOH + C2H5OH <->(H2SO4 đặc, t°) CH3COOC2H5 + H2O",
            points: 25,
            explanation: "AI chấm: Xác định n=2 (C2H4O2), viết đúng PTHH este hóa tạo ethyl acetate."
        }
    ]
};
