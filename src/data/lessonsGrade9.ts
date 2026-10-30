import { GeoLessonData } from '../types';

export const LESSONS_GRADE_9: Record<string, GeoLessonData> = {
  'G9-L1': {
    lessonId: 'G9-L1',
    grade: 9,
    chapterId: 'G9-C1',
    chapterTitle: 'Chương 1. Địa lí dân cư Việt Nam',
    lessonTitle: 'Bài 1: Dân tộc và dân số',
    sgkPageRange: 'Trang 117 – 121',
    pdfPageRange: 'Trang 119 – 123',
    objectives: [
      'Trình bày được đặc điểm các dân tộc ở Việt Nam và sự phân bố của các dân tộc.',
      'Phân tích được quy mô dân số, tình hình gia tăng dân số và cơ cấu dân số theo tuổi và giới tính.',
      'Hiểu được cơ hội của thời kì cơ cấu dân số vàng và thách thức của xu hướng già hóa dân số.'
    ],
    knowledgeCards: [
      {
        id: 'KC-901-1',
        cardIndex: 1,
        title: 'Thẻ 1: Các dân tộc ở Việt Nam và sự phân bố',
        concept: '54 dân tộc, Kinh chiếm 85,3%, phân bố dân tộc',
        coreDefinition: 'Việt Nam là quốc gia đa dân tộc với 54 dân tộc anh em cùng chung sống đoàn kết.',
        keyPoints: [
          'Dân tộc Kinh (Việt) chiếm 85,3% dân số (năm 2021), cư trú chủ yếu ở vùng đồng bằng, duyên hải và trung du.',
          '53 dân tộc thiểu số chiếm 14,7% dân số, cư trú chủ yếu ở vùng đồi núi và biên giới (Tày, Thái, Mường, H\'Mông, Dao, Gia-rai, Ba-na, Khơ-me, Chăm...).',
          'Đồng bào các dân tộc có kinh nghiệm sản xuất phong phú và bản sắc văn hóa đa dạng.',
          'Người Việt Nam định cư ở nước ngoài là một bộ phận không tách rời của cộng đồng các dân tộc Việt Nam.'
        ],
        visualExample: 'Biểu đồ cơ cấu thành phần dân tộc Việt Nam (SGK tr. 118).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 118, pdfPage: 120, section: 'Mục 1. Dân tộc' },
        commonTrapAlert: 'Bẫy tỉ lệ: Nhầm dân tộc Kinh chiếm 90% (tỉ lệ chuẩn SGK là 85,3%).',
        iconName: 'Users'
      },
      {
        id: 'KC-901-2',
        cardIndex: 2,
        title: 'Thẻ 2: Quy mô, gia tăng và cơ cấu dân số vàng',
        concept: '101,3 triệu dân, Tỉ lệ sinh giảm, Cơ cấu dân số vàng và già hóa',
        coreDefinition: 'Nước ta đông dân, đang trong thời kì cơ cấu dân số vàng nhưng có tốc độ già hóa nhanh.',
        keyPoints: [
          'Quy mô: Dân số nước ta đạt hơn 100 triệu người (đứng thứ 3 Đông Nam Á và thứ 15 trên thế giới).',
          'Gia tăng: Tốc độ gia tăng dân số tự nhiên giảm dần, duy trì ở mức khoảng 0,9% - 1,0%/năm.',
          'Cơ cấu dân số vàng: Tỉ lệ người trong độ tuổi lao động (15 - 64 tuổi) chiếm trên 65% dân số (gấp đôi nhóm phụ thuộc), tạo nguồn nhân lực khổng lồ.',
          'Xu hướng già hóa: Tuổi thọ trung bình tăng lên (73,7 tuổi) và tỉ lệ người trên 65 tuổi tăng nhanh, đặt ra thách thức về y tế và an sinh xã hội.'
        ],
        visualExample: 'Tháp dân số Việt Nam năm 1999 và 2021 (SGK tr. 120).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 120, pdfPage: 122, section: 'Mục 2. Dân số' },
        commonTrapAlert: 'Bẫy khái niệm: Nhầm "dân số vàng" là dân số giàu có (đúng là cơ cấu tuổi có số người lao động gấp đôi người phụ thuộc).',
        iconName: 'TrendingUp'
      }
    ],
    mindmap: {
      id: 'mm-901-root',
      label: 'Dân tộc & Dân số Việt Nam',
      summary: '54 dân tộc (Kinh 85,3%) | Quy mô >100 triệu dân | Cơ cấu dân số vàng (>65% lao động) và xu hướng già hóa',
      children: [
        { id: 'mm-901-dt', label: 'Cộng đồng dân tộc', summary: 'Kinh ở đồng bằng (85,3%), 53 dân tộc thiểu số ở miền núi (14,7%)' },
        { id: 'mm-901-quymo', label: 'Quy mô dân số', summary: 'Hơn 100 triệu dân (thứ 3 ĐNÁ, thứ 15 thế giới)' },
        { id: 'mm-901-vang', label: 'Cơ cấu dân số vàng', summary: 'Nhóm 15-64 tuổi chiếm >65%, cơ hội vàng phát triển kinh tế' },
        { id: 'mm-901-giahoa', label: 'Già hóa dân số', summary: 'Tuổi thọ bình quân 73,7 tuổi, tỉ lệ người cao tuổi tăng nhanh' }
      ]
    },
    comparisons: [
      {
        id: 'comp-901-1',
        conceptA: 'Cơ cấu dân số vàng',
        conceptB: 'Xu hướng già hóa dân số',
        comparisonTable: [
          { criteria: 'Đặc trưng cấu trúc tuổi', conceptAVal: 'Tỉ lệ nhóm 15 - 64 tuổi chiếm trên 65%, người lao động gấp đôi phụ thuộc', conceptBVal: 'Tỉ lệ nhóm trên 65 tuổi tăng nhanh vượt mốc 7% - 10%' },
          { criteria: 'Cơ hội mang lại', conceptAVal: 'Nguồn lao động dồi dào, thu hút đầu tư nước ngoài, bứt phá kinh tế', conceptBVal: 'Kinh nghiệm và tri thức của lực lượng lao động cao tuổi' },
          { criteria: 'Thách thức đối mặt', conceptAVal: 'Sức ép giải quyết việc làm và nâng cao trình độ đào tạo', conceptBVal: 'Gia tăng chi phí bảo hiểm y tế, hệ thống dưỡng lão, thiếu lao động trẻ tương lai' }
        ],
        commonConfusion: 'Học sinh thường nhầm Việt Nam đã qua thời kì dân số vàng hoặc chưa bước vào giai đoạn già hóa (hai quá trình này đang đan xen).',
        memoryRule: 'Mẹo nhớ: Dân số vàng là cơ hội lao động dồi dào; Già hóa dân số là thách thức an sinh y tế.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-901-1',
        questionText: 'Trong thời kì "cơ cấu dân số vàng", nhóm tuổi từ 15 đến 64 tuổi chiếm tỉ lệ bao nhiêu trong tổng dân số nước ta?',
        options: [
          { id: 'A', text: 'Chiếm trên 65% tổng dân số' },
          { id: 'B', text: 'Chiếm dưới 40% tổng dân số' },
          { id: 'C', text: 'Chiếm đúng 50% tổng dân số' },
          { id: 'D', text: 'Chiếm trên 90% tổng dân số' }
        ],
        correctAnswer: 'A',
        explanation: 'Cơ cấu dân số vàng được định nghĩa khi nhóm tuổi lao động (15 - 64 tuổi) chiếm từ 65% trở lên trong tổng dân số.',
        hint: 'Trên 65% dân số.',
        knowledgeCardId: 'KC-901-2'
      }
    ]
  },

  'G9-L2': {
    lessonId: 'G9-L2',
    grade: 9,
    chapterId: 'G9-C1',
    chapterTitle: 'Chương 1. Địa lí dân cư Việt Nam',
    lessonTitle: 'Bài 2: Phân bố dân cư và các loại hình quần cư',
    sgkPageRange: 'Trang 122 – 125',
    pdfPageRange: 'Trang 124 – 127',
    objectives: [
      'Trình bày được đặc điểm phân bố dân cư nước ta (mật độ cao, phân bố không đều).',
      'Phân biệt được đặc điểm của hai loại hình quần cư: quần cư nông thôn và quần cư thành thị.',
      'Nêu được xu hướng đô thị hóa hiện nay ở Việt Nam.'
    ],
    knowledgeCards: [
      {
        id: 'KC-902-1',
        cardIndex: 1,
        title: 'Thẻ 1: Mật độ dân số cao và phân bố không đều',
        concept: 'Mật độ ~300 người/km², Chênh lệch đồng bằng - miền núi',
        coreDefinition: 'Mật độ dân số nước ta thuộc loại cao trên thế giới và có sự chênh lệch lớn giữa các vùng.',
        keyPoints: [
          'Mật độ trung bình: Khoảng 300 người/km² (gấp gần 5 lần mức trung bình của thế giới).',
          'Chênh lệch giữa đồng bằng và miền núi: Đồng bằng châu thổ chỉ chiếm 1/4 diện tích nhưng tập trung tới 75% dân số (ĐBSH có mật độ cao nhất >1 000 người/km²). Miền núi chiếm 3/4 diện tích nhưng chỉ có 25% dân số (Tây Bắc chỉ 80 - 130 người/km²).',
          'Chênh lệch giữa thành thị và nông thôn: Dân cư nông thôn vẫn chiếm tỉ lệ lớn (~63%), dân thành thị chiếm ~37% (năm 2021) nhưng đang tăng nhanh.'
        ],
        visualExample: 'Lược đồ mật độ dân số và các đô thị ở Việt Nam (SGK tr. 123).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 123, pdfPage: 125, section: 'Mục 1. Phân bố dân cư' },
        commonTrapAlert: 'Bẫy vùng: Nhầm Tây Nguyên có mật độ thấp nhất (vùng có mật độ dân số thấp nhất là Tây Bắc).',
        iconName: 'Users'
      },
      {
        id: 'KC-902-2',
        cardIndex: 2,
        title: 'Thẻ 2: Quần cư nông thôn, quần cư thành thị và đô thị hóa',
        concept: 'Làng/ấp, phố phường, tỉ lệ dân thành thị tăng',
        coreDefinition: 'Nước ta có hai loại hình quần cư chính, quá trình đô thị hóa diễn ra nhanh chóng.',
        keyPoints: [
          'Quần cư nông thôn: Nhà cửa phân tán theo thôn, làng, ấp, bản; gắn liền với hoạt động sản xuất nông, lâm, ngư nghiệp.',
          'Quần cư thành thị: Mật độ dân số rất cao, nhà cửa san sát, cao tầng; gắn với sản xuất công nghiệp, thương mại và dịch vụ.',
          'Đô thị hóa: Tỉ lệ dân thành thị tăng nhanh (đạt trên 38% năm 2023), mở rộng không gian đô thị, hình thành các đô thị đặc biệt (Hà Nội, TP. Hồ Chí Minh) và các đô thị vệ tinh.'
        ],
        visualExample: 'Hình ảnh đô thị hiện đại TP. Hồ Chí Minh và làng quê Bắc Bộ (SGK tr. 124).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 124, pdfPage: 126, section: 'Mục 2. Các loại hình quần cư' },
        commonTrapAlert: 'Bẫy tỉ lệ: Dân thành thị nước ta hiện nay đã chiếm gần 40%, không còn là mức 20% như các giai đoạn trước.',
        iconName: 'Building'
      }
    ],
    mindmap: {
      id: 'mm-902-root',
      label: 'Phân bố dân cư & Quần cư',
      summary: 'Mật độ ~300 người/km², chênh lệch ĐBSH (>1 000 ng/km²) và Tây Bắc (thấp nhất) | Quần cư nông thôn vs Thành thị',
      children: [
        { id: 'mm-902-matdo', label: 'Mật độ dân số', summary: 'Cao ~300 ng/km², gấp 5 lần thế giới' },
        { id: 'mm-902-chenhlech', label: 'Chênh lệch vùng', summary: 'Đồng bằng 75% dân, miền núi chỉ 25% dân' },
        { id: 'mm-902-nongthon', label: 'Quần cư nông thôn', summary: 'Thôn, làng, bản, gắn với nông nghiệp (~63% dân)' },
        { id: 'mm-902-dothi', label: 'Quần cư thành thị', summary: 'Mật độ cao, công nghiệp - dịch vụ, tỉ lệ đô thị hóa >38%' }
      ]
    },
    comparisons: [
      {
        id: 'comp-902-1',
        conceptA: 'Quần cư nông thôn',
        conceptB: 'Quần cư thành thị',
        comparisonTable: [
          { criteria: 'Mật độ dân số & nhà cửa', conceptAVal: 'Mật độ thấp, nhà cửa phân tán gắn với ruộng vườn, nương rẫy', conceptBVal: 'Mật độ rất cao, nhà cửa cao tầng san sát, giao thông đông đúc' },
          { criteria: 'Hoạt động kinh tế chính', conceptAVal: 'Nông nghiệp, lâm nghiệp, nuôi trồng thủy hải sản', conceptBVal: 'Công nghiệp, thương mại, tài chính, dịch vụ công nghệ' },
          { criteria: 'Chức năng hành chính', conceptAVal: 'Cấp xã, thôn, làng, bản, ấp', conceptBVal: 'Trung tâm kinh tế, chính trị, văn hóa cấp huyện, tỉnh, quốc gia' }
        ],
        commonConfusion: 'Học sinh thường nhầm lẫn lối sống giữa đô thị và nông thôn khi các vùng nông thôn mới đang hiện đại hóa.',
        memoryRule: 'Mẹo nhớ: Nông thôn làm nông nhà phân tán; Thành thị công thương nhà cao tầng san sát.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-902-1',
        questionText: 'Vùng nào ở nước ta có mật độ dân số cao nhất cả nước (trên 1 000 người/km²)?',
        options: [
          { id: 'A', text: 'Đồng bằng sông Hồng' },
          { id: 'B', text: 'Đồng bằng sông Cửu Long' },
          { id: 'C', text: 'Đông Nam Bộ' },
          { id: 'D', text: 'Tây Nguyên' }
        ],
        correctAnswer: 'A',
        explanation: 'Đồng bằng sông Hồng có lịch sử khai thác lãnh thổ lâu đời, nông nghiệp thâm canh và mạng lưới đô thị dày đặc nên mật độ dân số cao nhất nước (>1 000 người/km²).',
        hint: 'Vùng châu thổ phía bắc.',
        knowledgeCardId: 'KC-902-1'
      }
    ]
  },

  'G9-L3': {
    lessonId: 'G9-L3',
    grade: 9,
    chapterId: 'G9-C1',
    chapterTitle: 'Chương 1. Địa lí dân cư Việt Nam',
    lessonTitle: 'Bài 3: Lao động và việc làm',
    sgkPageRange: 'Trang 126 – 128',
    pdfPageRange: 'Trang 128 – 130',
    objectives: [
      'Nêu được đặc điểm của nguồn lao động nước ta (dồi dào, cần cù, tỉ lệ lao động qua đào tạo tăng).',
      'Trình bày được sự chuyển dịch cơ cấu lao động theo ngành kinh tế và theo thành phần kinh tế.',
      'Phân tích được vấn đề việc làm và các hướng giải quyết việc làm ở nước ta.'
    ],
    knowledgeCards: [
      {
        id: 'KC-903-1',
        cardIndex: 1,
        title: 'Thẻ 1: Đặc điểm nguồn lao động nước ta',
        concept: 'Quy mô hơn 51 triệu người, Cần cù, Tỉ lệ qua đào tạo tăng',
        coreDefinition: 'Nguồn lao động nước ta rất dồi dào, tăng bình quân khoảng 1 triệu người mỗi năm.',
        keyPoints: [
          'Thế mạnh: Lực lượng lao động đạt trên 51 triệu người (chiếm hơn 50% dân số); người lao động cần cù, sáng tạo, tiếp thu nhanh khoa học kĩ thuật hiện đại.',
          'Chất lượng nâng cao: Tỉ lệ lao động qua đào tạo có bằng cấp, chứng chỉ tăng dần (hiện đạt trên 26% - 28%).',
          'Hạn chế: Tỉ lệ lao động chưa qua đào tạo chuyên môn kĩ thuật còn cao; phân bố lao động không đều giữa các vùng (thiếu lao động trình độ cao ở miền núi, nông thôn).'
        ],
        visualExample: 'Biểu đồ cơ cấu lao động phân theo trình độ đào tạo ở nước ta (SGK tr. 126).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 126, pdfPage: 128, section: 'Mục 1. Nguồn lao động' },
        commonTrapAlert: 'Bẫy nhận định: Nhầm tưởng phần lớn lao động nước ta đã có chứng chỉ đào tạo bài bản (thực tế tỉ lệ có bằng cấp mới đạt gần 30%).',
        iconName: 'Users'
      },
      {
        id: 'KC-903-2',
        cardIndex: 2,
        title: 'Thẻ 2: Chuyển dịch cơ cấu lao động và Vấn đề việc làm',
        concept: 'Giảm nông nghiệp, tăng công nghiệp - dịch vụ, thất nghiệp và thiếu việc làm',
        coreDefinition: 'Cơ cấu lao động chuyển dịch tích cực nhưng giải quyết việc làm vẫn là vấn đề xã hội gay gắt.',
        keyPoints: [
          'Chuyển dịch ngành: Tỉ trọng lao động trong ngành nông - lâm - thủy sản giảm nhanh (từ >60% xuống dưới 30%); tỉ trọng lao động trong công nghiệp - xây dựng và dịch vụ tăng mạnh.',
          'Vấn đề việc làm: Ở thành thị tỉ lệ thất nghiệp còn cao; ở nông thôn tình trạng thiếu việc làm vào thời kì nông nhàn còn phổ biến.',
          'Hướng giải quyết: Đẩy mạnh công nghiệp hóa, hiện đại hóa; phát triển các ngành nghề dịch vụ và tiểu thủ công nghiệp; đào tạo nghề gắn với nhu cầu thị trường; xuất khẩu lao động.'
        ],
        visualExample: 'Biểu đồ chuyển dịch cơ cấu lao động theo 3 nhóm ngành kinh tế (SGK tr. 127).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 127, pdfPage: 129, section: 'Mục 2. Cơ cấu lao động & việc làm' },
        commonTrapAlert: 'Bẫy phân biệt: Thất nghiệp là đặc trưng hay gặp ở THÀNH THỊ; Thiếu việc làm là đặc trưng ở NÔNG THÔN.',
        iconName: 'Briefcase'
      }
    ],
    mindmap: {
      id: 'mm-903-root',
      label: 'Lao động & Việc làm',
      summary: 'Lực lượng >51 triệu người, chuyển dịch giảm nông nghiệp sang công nghiệp - dịch vụ | Thất nghiệp thành thị, thiếu việc làm nông thôn',
      children: [
        { id: 'mm-903-nguon', label: 'Nguồn lao động', summary: 'Dồi dào (>51 triệu), cần cù, tỉ lệ qua đào tạo ~28%' },
        { id: 'mm-903-cơcau', label: 'Chuyển dịch cơ cấu', summary: 'Giảm tỉ trọng nông nghiệp, tăng công nghiệp và dịch vụ' },
        { id: 'mm-903-vieclam', label: 'Vấn đề việc làm', summary: 'Thất nghiệp ở đô thị, thiếu việc làm ở nông thôn' },
        { id: 'mm-903-giaiphap', label: 'Giải pháp', summary: 'Đào tạo nghề, đa dạng kinh tế, phát triển dịch vụ, xuất khẩu lao động' }
      ]
    },
    comparisons: [
      {
        id: 'comp-903-1',
        conceptA: 'Vấn đề việc làm ở Đô thị (Thành thị)',
        conceptB: 'Vấn đề việc làm ở Nông thôn',
        comparisonTable: [
          { criteria: 'Biểu hiện gay gắt nhất', conceptAVal: 'Tình trạng THẤT NGHIỆP của người trong độ tuổi lao động', conceptBVal: 'Tình trạng THIẾU VIỆC LÀM trong thời gian nông nhàn' },
          { criteria: 'Nguyên nhân chủ yếu', conceptAVal: 'Lao động nông thôn di cư ra phố lớn, công nghệ tự động hóa thay thế', conceptBVal: 'Sản xuất nông nghiệp có tính mùa vụ, đất canh tác bình quân đầu người ít' },
          { criteria: 'Giải pháp then chốt', conceptAVal: 'Phát triển dịch vụ chất lượng cao, khởi nghiệp sáng tạo, FDI', conceptBVal: 'Khôi phục làng nghề truyền thống, đa dạng cây trồng vật nuôi, chế biến nông sản' }
        ],
        commonConfusion: 'Học sinh thường nhầm nông thôn có tỉ lệ thất nghiệp cao hơn thành thị (nông thôn chủ yếu là thiếu việc làm).',
        memoryRule: 'Mẹo nhớ: Thành thị thất nghiệp; Nông thôn thiếu việc làm mùa vụ.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-903-1',
        questionText: 'Ở nước ta, tình trạng "thiếu việc làm" là vấn đề việc làm gay gắt nhất ở khu vực nào?',
        options: [
          { id: 'A', text: 'Khu vực nông thôn' },
          { id: 'B', text: 'Khu vực thành thị đô thị đặc biệt' },
          { id: 'C', text: 'Khu công nghiệp công nghệ cao' },
          { id: 'D', text: 'Các khu trung tâm thương mại tài chính' }
        ],
        correctAnswer: 'A',
        explanation: 'Do tính chất mùa vụ của sản xuất nông nghiệp và diện tích đất canh tác bình quân hạn hẹp, tình trạng thiếu việc làm diễn ra phổ biến nhất ở khu vực nông thôn.',
        hint: 'Nông thôn thời kì nông nhàn.',
        knowledgeCardId: 'KC-903-2'
      }
    ]
  },

  'G9-L5': {
    lessonId: 'G9-L5',
    grade: 9,
    chapterId: 'G9-C2',
    chapterTitle: 'Chương 2. Địa lí các ngành kinh tế',
    lessonTitle: 'Bài 5: Nông nghiệp',
    sgkPageRange: 'Trang 131 – 136',
    pdfPageRange: 'Trang 133 – 138',
    objectives: [
      'Trình bày được tình hình phát triển và phân bố ngành trồng trọt (cây lương thực, cây công nghiệp, cây ăn quả).',
      'Trình bày được tình hình phát triển và phân bố ngành chăn nuôi (lợn, gia cầm, bò).',
      'Nhận thức được xu hướng phát triển nông nghiệp hàng hóa công nghệ cao.'
    ],
    knowledgeCards: [
      {
        id: 'KC-905-1',
        cardIndex: 1,
        title: 'Thẻ 1: Ngành Trồng trọt: Cây lương thực và Cây công nghiệp',
        concept: 'Lúa gạo ở ĐBSCL và ĐBSH, Cà phê Tây Nguyên, Cao su Đông Nam Bộ',
        coreDefinition: 'Trồng trọt là ngành trụ cột trong nông nghiệp, chuyển dịch mạnh theo hướng nông sản hàng hóa chất lượng cao.',
        keyPoints: [
          'Cây lương thực (lúa gạo): Sản lượng lúa đạt trên 43 triệu tấn/năm. ĐBSCL là vựa lúa lớn nhất (chiếm >50% sản lượng và >90% lượng gạo xuất khẩu); ĐBSH là vùng thâm canh lúa năng suất cao nhất.',
          'Cây công nghiệp lâu năm: Việt Nam là quốc gia xuất khẩu hàng đầu thế giới về cà phê (số 2 thế giới, vùng trồng lớn nhất là Tây Nguyên), hồ tiêu (số 1 thế giới), điều (số 1 thế giới), cao su (vùng Đông Nam Bộ).',
          'Cây ăn quả: Phát triển mạnh ở ĐBSCL, Trung du miền núi Bắc Bộ và Đông Nam Bộ (xoài, sầu riêng, thanh long, vải thiều).'
        ],
        visualExample: 'Bản đồ nông nghiệp Việt Nam và hình ảnh thu hoạch cà phê Buôn Ma Thuột (SGK tr. 133).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 133, pdfPage: 135, section: 'Mục 1. Ngành trồng trọt' },
        commonTrapAlert: 'Bẫy xuất khẩu gạo: Nhầm ĐBSH xuất khẩu gạo nhiều nhất (ĐBSCL mới là vựa lúa xuất khẩu chủ lực).',
        iconName: 'Wheat'
      },
      {
        id: 'KC-905-2',
        cardIndex: 2,
        title: 'Thẻ 2: Ngành Chăn nuôi hiện đại',
        concept: 'Chăn nuôi trang trại, đàn lợn, gia cầm, bò sữa',
        coreDefinition: 'Chăn nuôi đang chuyển mạnh từ phân tán gia đình sang phương thức trang trại công nghiệp tập trung.',
        keyPoints: [
          'Chăn nuôi lợn và gia cầm: Tập trung đông nhất ở vùng Đồng bằng sông Hồng và Đồng bằng sông Cửu Long (nhờ nguồn lương thực phụ phẩm dồi dào và thị trường tiêu thụ thịt lớn).',
          'Chăn nuôi trâu, bò: Trâu nuôi nhiều nhất ở Trung du miền núi Bắc Bộ (ưa ẩm, chịu rét giỏi); Bò thịt nuôi nhiều ở Duyên hải miền Trung; Bò sữa phát triển mạnh gần các đô thị lớn (Mộc Châu, Củ Chi, Ba Vì, Lâm Đồng).',
          'Xu hướng: Ứng dụng công nghệ cao, chuỗi cung ứng khép kín an toàn sinh học.'
        ],
        visualExample: 'Trang trại bò sữa công nghệ cao tại Mộc Châu và Đơn Dương (SGK tr. 135).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 135, pdfPage: 137, section: 'Mục 2. Ngành chăn nuôi' },
        commonTrapAlert: 'Bẫy phân bố: Trâu thích hợp khí hậu ẩm lạnh núi cao phía Bắc; Bò thích hợp khí hậu khô ráo duyên hải miền Trung.',
        iconName: 'TrendingUp'
      }
    ],
    mindmap: {
      id: 'mm-905-root',
      label: 'Nông nghiệp Việt Nam',
      summary: 'Trồng trọt (lúa ĐBSCL, cà phê Tây Nguyên, cao su Đông Nam Bộ) | Chăn nuôi trang trại công nghệ cao (lợn, gia cầm, bò sữa)',
      children: [
        { id: 'mm-905-lua', label: 'Cây lúa', summary: 'ĐBSCL (>50% sản lượng, >90% xuất khẩu) & ĐBSH năng suất cao' },
        { id: 'mm-905-cn', label: 'Cây công nghiệp', summary: 'Cà phê Tây Nguyên (số 2 TG), Cao su Đông Nam Bộ, Tiêu, Điều' },
        { id: 'mm-905-lon-cam', label: 'Lợn & Gia cầm', summary: 'Đồng bằng sông Hồng và ĐBSCL nhiều thức ăn' },
        { id: 'mm-905-trau-bo', label: 'Trâu & Bò', summary: 'Trâu ở miền núi Bắc Bộ, Bò ở miền Trung, Bò sữa ven đô thị' }
      ]
    },
    comparisons: [
      {
        id: 'comp-905-1',
        conceptA: 'Vùng trồng Lúa ĐBSCL',
        conceptB: 'Vùng trồng Lúa ĐBSH',
        comparisonTable: [
          { criteria: 'Quy mô sản lượng & xuất khẩu', conceptAVal: 'Lớn nhất cả nước (>50% sản lượng, >90% lượng gạo xuất khẩu)', conceptBVal: 'Lớn thứ hai cả nước, chủ yếu tiêu thụ nội địa tại chỗ' },
          { criteria: 'Trình độ thâm canh', conceptAVal: 'Quy mô ruộng lớn, cơ giới hóa cao, cánh đồng mẫu lớn', conceptBVal: 'Thâm canh truyền thống tinh tế, năng suất lúa bình quân cao nhất nước' },
          { criteria: 'Khó khăn tự nhiên', conceptAVal: 'Khô hạn và xâm nhập mặn vào mùa khô, lũ lụt mùa mưa', conceptBVal: 'Đất trong đê không được bồi phù sa, rét đậm rét hại vụ đông xuân' }
        ],
        commonConfusion: 'Học sinh thường nhầm ĐBSH có sản lượng gạo xuất khẩu lớn hơn ĐBSCL.',
        memoryRule: 'Mẹo nhớ: ĐBSCL là vựa lúa xuất khẩu số 1; ĐBSH là vùng thâm canh lúa năng suất cao nhất.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-905-1',
        questionText: 'Vùng nào sau đây là vùng sản xuất cây cà phê lớn nhất nước ta, đưa Việt Nam trở thành quốc gia xuất khẩu cà phê thứ hai thế giới?',
        options: [
          { id: 'A', text: 'Vùng Tây Nguyên' },
          { id: 'B', text: 'Vùng Đồng bằng sông Hồng' },
          { id: 'C', text: 'Vùng Đồng bằng sông Cửu Long' },
          { id: 'D', text: 'Vùng Bắc Trung Bộ' }
        ],
        correctAnswer: 'A',
        explanation: 'Tây Nguyên có diện tích đất đỏ bazan màu mỡ và khí hậu cận xích đạo hai mùa mưa - khô, là vùng chuyên canh cà phê lớn nhất nước ta (thủ phủ cà phê Buôn Ma Thuột).',
        hint: 'Vùng đất đỏ bazan cao nguyên.',
        knowledgeCardId: 'KC-905-1'
      }
    ]
  },

  'G9-L6': {
    lessonId: 'G9-L6',
    grade: 9,
    chapterId: 'G9-C2',
    chapterTitle: 'Chương 2. Địa lí các ngành kinh tế',
    lessonTitle: 'Bài 6: Lâm nghiệp và thuỷ sản',
    sgkPageRange: 'Trang 137 – 141',
    pdfPageRange: 'Trang 139 – 143',
    objectives: [
      'Trình bày được tình hình phát triển và phân bố ngành lâm nghiệp (quản lí, trồng và khai thác rừng).',
      'Phân tích được tiềm năng, tình hình phát triển và phân bố ngành thủy sản (nuôi trồng và khai thác).',
      'Hiểu được ý nghĩa của phát triển lâm nghiệp và thủy sản bền vững.'
    ],
    knowledgeCards: [
      {
        id: 'KC-906-1',
        cardIndex: 1,
        title: 'Thẻ 1: Ngành Lâm nghiệp: Trồng, bảo vệ và chế biến gỗ',
        concept: '3 loại rừng: Rừng phòng hộ, đặc dụng, sản xuất',
        coreDefinition: 'Lâm nghiệp có vai trò to lớn về kinh tế và bảo vệ môi trường sinh thái.',
        keyPoints: [
          'Phân loại 3 loại rừng: Rừng phòng hộ (chắn sóng ven biển, giữ đất nguồn nước đầu nguồn); Rừng đặc dụng (Vườn quốc gia, khu bảo tồn bảo vệ nguồn gen); Rừng sản xuất (cung cấp gỗ và lâm sản cho chế biến xuất khẩu).',
          'Trồng và bảo vệ rừng: Độ che phủ rừng toàn quốc đạt trên 42%, đẩy mạnh trồng rừng gỗ lớn và cấp chứng chỉ rừng bền vững (FSC).',
          'Chế biến gỗ: Việt Nam nằm trong nhóm các nước xuất khẩu đồ gỗ và lâm sản hàng đầu thế giới.'
        ],
        visualExample: 'Hình ảnh rừng trồng keo, tràm nguyên liệu giấy và nhà máy chế biến gỗ xuất khẩu (SGK tr. 138).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 138, pdfPage: 140, section: 'Mục 1. Lâm nghiệp' },
        commonTrapAlert: 'Bẫy phân loại: Cấm khai thác gỗ tuyệt đối trong Rừng đặc dụng và Rừng phòng hộ xung yếu; chỉ được khai thác theo kế hoạch trong Rừng sản xuất.',
        iconName: 'Trees'
      },
      {
        id: 'KC-906-2',
        cardIndex: 2,
        title: 'Thẻ 2: Ngành Thủy sản: Nuôi trồng và Khai thác',
        concept: 'Nuôi tôm, cá tra ở ĐBSCL; 4 ngư trường đánh bắt lớn',
        coreDefinition: 'Thủy sản là ngành kinh tế mũi nhọn với kim ngạch xuất khẩu đạt trên 10 tỉ USD.',
        keyPoints: [
          'Nuôi trồng thủy sản: Phát triển vượt bậc, sản lượng nuôi trồng hiện đã vượt sản lượng khai thác. Đồng bằng sông Cửu Long là vùng nuôi trồng lớn nhất cả nước, nổi bật là cá tra, cá ba sa (An Giang, Đồng Tháp) và tôm nước lợ/mặn (Cà Mau, Bạc Liêu, Sóc Trăng).',
          'Khai thác hải sản: Sản lượng đánh bắt hàng triệu tấn/năm tại 4 ngư trường trọng điểm, đẩy mạnh đánh bắt xa bờ.',
          'Xu hướng: Chống khai thác hải sản bất hợp pháp (IUU), nuôi trồng thủy sản công nghệ cao tuần hoàn nước.'
        ],
        visualExample: 'Mô hình bè nuôi cá tra trên sông Tiền và tàu đánh bắt xa bờ (SGK tr. 140).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 140, pdfPage: 142, section: 'Mục 2. Thủy sản' },
        commonTrapAlert: 'Bẫy số liệu: Sản lượng NUÔI TRỒNG hiện nay đã lớn hơn sản lượng KHAI THÁC.',
        iconName: 'Fish'
      }
    ],
    mindmap: {
      id: 'mm-906-root',
      label: 'Lâm nghiệp & Thủy sản',
      summary: 'Lâm nghiệp: 3 loại rừng (sản xuất, phòng hộ, đặc dụng), che phủ >42% | Thủy sản: Nuôi trồng vượt khai thác, ĐBSCL là trung tâm tôm cá',
      children: [
        { id: 'mm-906-ln-3rung', label: '3 loại rừng', summary: 'Phòng hộ (đầu nguồn, ven biển), Đặc dụng (Vườn QG), Sản xuất' },
        { id: 'mm-906-ln-go', label: 'Chế biến gỗ', summary: 'Xuất khẩu đồ gỗ top đầu thế giới' },
        { id: 'mm-906-ts-nuoi', label: 'Nuôi trồng thủy sản', summary: 'Sản lượng vượt khai thác, tôm và cá tra ở ĐBSCL' },
        { id: 'mm-906-ts-danhbat', label: 'Khai thác hải sản', summary: 'Đẩy mạnh đánh bắt xa bờ, gỡ thẻ vàng IUU' }
      ]
    },
    comparisons: [
      {
        id: 'comp-906-1',
        conceptA: 'Ngành Nuôi trồng thủy sản',
        conceptB: 'Ngành Khai thác (đánh bắt) hải sản',
        comparisonTable: [
          { criteria: 'Tỉ trọng sản lượng', conceptAVal: 'Chiếm tỉ trọng LỚN HƠN (>55% tổng sản lượng thủy sản)', conceptBVal: 'Chiếm tỉ trọng NHỎ HƠN (<45% tổng sản lượng thủy sản)' },
          { criteria: 'Mức độ chủ động', conceptAVal: 'Chủ động về con giống, thời vụ, sản lượng và truy xuất nguồn gốc', conceptBVal: 'Phụ thuộc vào thời tiết biển, mùa vụ di cư của đàn cá' },
          { criteria: 'Địa bàn trọng điểm', conceptAVal: 'Vùng ĐBSCL (Cà Mau, Bạc Liêu, Đồng Tháp, An Giang)', conceptBVal: 'Các tỉnh ven biển duyên hải miền Trung, Nam Bộ, 4 ngư trường' }
        ],
        commonConfusion: 'Học sinh hay nghĩ ngành đánh bắt hải sản tự nhiên có sản lượng lớn hơn nuôi trồng.',
        memoryRule: 'Mẹo nhớ: Nuôi trồng tôm cá đã vượt đánh bắt tự nhiên; ĐBSCL là vựa thủy sản số 1.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-906-1',
        questionText: 'Vùng nào ở nước ta dẫn đầu cả nước về diện tích và sản lượng nuôi trồng thủy sản, đặc biệt là tôm và cá tra xuất khẩu?',
        options: [
          { id: 'A', text: 'Đồng bằng sông Cửu Long' },
          { id: 'B', text: 'Đồng bằng sông Hồng' },
          { id: 'C', text: 'Bắc Trung Bộ' },
          { id: 'D', text: 'Tây Nguyên' }
        ],
        correctAnswer: 'A',
        explanation: 'Đồng bằng sông Cửu Long có diện tích mặt nước nuôi trồng trù phú, là cái nôi nuôi cá tra, cá ba sa và tôm nước lợ xuất khẩu lớn nhất cả nước.',
        hint: 'Vùng châu thổ tận cùng phía nam.',
        knowledgeCardId: 'KC-906-2'
      }
    ]
  },

  'G9-L8': {
    lessonId: 'G9-L8',
    grade: 9,
    chapterId: 'G9-C2',
    chapterTitle: 'Chương 2. Địa lí các ngành kinh tế',
    lessonTitle: 'Bài 8: Công nghiệp',
    sgkPageRange: 'Trang 144 – 149',
    pdfPageRange: 'Trang 146 – 151',
    objectives: [
      'Trình bày được cơ cấu và vai trò của các ngành công nghiệp trọng điểm (điện tử, dệt may, da giày, chế biến thực phẩm, năng lượng).',
      'Xác định được sự phân bố công nghiệp theo lãnh thổ (hai trung tâm lớn nhất là TP.HCM và Hà Nội).',
      'Nêu được xu hướng chuyển dịch cơ cấu công nghiệp theo hướng hiện đại, công nghệ cao và kinh tế xanh.'
    ],
    knowledgeCards: [
      {
        id: 'KC-908-1',
        cardIndex: 1,
        title: 'Thẻ 1: Các ngành công nghiệp trọng điểm ở Việt Nam',
        concept: 'Điện tử tin học, Dệt may - da giày, Chế biến lương thực, Điện năng',
        coreDefinition: 'Công nghiệp nước ta đang chuyển dịch mạnh mẽ sang các ngành chế biến, chế tạo giá trị cao.',
        keyPoints: [
          'Sản xuất sản phẩm điện tử, máy tính: Ngành phát triển thần tốc, thu hút vốn FDI hàng tỉ USD (Samsung, LG, Foxconn, Intel), là mặt hàng xuất khẩu số 1 của nước ta (tập trung ở Bắc Ninh, Bắc Giang, Thái Nguyên, TP.HCM, Hải Phòng).',
          'Sản xuất dệt, may và giày da: Chiếm tỉ trọng xuất khẩu lớn, tận dụng nguồn lao động dồi dạo khéo léo.',
          'Chế biến lương thực, thực phẩm: Tận dụng nguồn nguyên liệu nông nghiệp phong phú, phân bố rộng khắp gắn với vùng nguyên liệu.',
          'Sản xuất và phân phối điện: Thủy điện (Sơn La, Hòa Bình), nhiệt điện than (Quảng Ninh), điện khí (Phú Mỹ, Cà Mau), năng lượng tái tạo (điện gió, điện mặt trời).'
        ],
        visualExample: 'Khu công nghệ cao TP. Hồ Chí Minh và tổ hợp sản xuất điện tử Bắc Ninh (SGK tr. 146).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 146, pdfPage: 148, section: 'Mục 1. Các ngành công nghiệp' },
        commonTrapAlert: 'Bẫy xuất khẩu: Mặt hàng xuất khẩu kim ngạch lớn nhất hiện nay của nước ta là Điện thoại, máy tính và linh kiện điện tử (không phải nông sản).',
        iconName: 'Cpu'
      },
      {
        id: 'KC-908-2',
        cardIndex: 2,
        title: 'Thẻ 2: Phân bố công nghiệp và các trung tâm công nghiệp lớn',
        concept: 'Đông Nam Bộ, ĐBSH, TP. Hồ Chí Minh, Hà Nội',
        coreDefinition: 'Công nghiệp phân bố tập trung cao độ ở hai vùng kinh tế đầu tàu: Đông Nam Bộ và Đồng bằng sông Hồng.',
        keyPoints: [
          'Vùng Đông Nam Bộ: Chiếm tỉ trọng giá trị sản xuất công nghiệp cao nhất cả nước; TP. Hồ Chí Minh là trung tâm công nghiệp lớn nhất cả nước và khu vực.',
          'Vùng Đồng bằng sông Hồng: Vùng công nghiệp lớn thứ hai cả nước với trung tâm công nghiệp Hà Nội và tam giác kinh tế Hà Nội - Hải Phòng - Quảng Ninh.',
          'Vùng đồi núi và vùng sâu: Mức độ tập trung công nghiệp thưa thớt, chủ yếu là khai thác khoáng sản và thủy điện.'
        ],
        visualExample: 'Bản đồ các trung tâm công nghiệp Việt Nam (SGK tr. 148).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 148, pdfPage: 150, section: 'Mục 2. Phân bố công nghiệp' },
        commonTrapAlert: 'Bẫy vị trí: TP. Hồ Chí Minh là trung tâm công nghiệp lớn nhất nước, Hà Nội lớn thứ hai.',
        iconName: 'Factory'
      }
    ],
    mindmap: {
      id: 'mm-908-root',
      label: 'Công nghiệp Việt Nam',
      summary: 'Ngành trọng điểm: Điện tử FDI số 1, Dệt may, Chế biến thực phẩm, Điện | Phân bố tập trung: Đông Nam Bộ (TP.HCM số 1) & ĐBSH (Hà Nội)',
      children: [
        { id: 'mm-908-dientu', label: 'Điện tử tin học', summary: 'Xuất khẩu số 1, FDI lớn ở Bắc Ninh, Thái Nguyên, TP.HCM' },
        { id: 'mm-908-detmay-tp', label: 'Dệt may & Thực phẩm', summary: 'Dệt may xuất khẩu mạnh; Thực phẩm gắn vùng nguyên liệu' },
        { id: 'mm-908-dien', label: 'Sản xuất điện', summary: 'Thủy điện Sơn La, điện khí Phú Mỹ, điện mặt trời' },
        { id: 'mm-908-trungtam', label: '2 trung tâm lớn nhất', summary: 'TP. Hồ Chí Minh (lớn nhất) & Hà Nội (lớn thứ hai)' }
      ]
    },
    comparisons: [
      {
        id: 'comp-908-1',
        conceptA: 'Trung tâm công nghiệp TP. Hồ Chí Minh',
        conceptB: 'Trung tâm công nghiệp Hà Nội',
        comparisonTable: [
          { criteria: 'Quy mô giá trị', conceptAVal: 'Lớn nhất cả nước, đầu tàu công nghiệp năng động nhất', conceptBVal: 'Lớn thứ hai cả nước, trung tâm vùng kinh tế phía Bắc' },
          { criteria: 'Cơ cấu ngành mũi nhọn', conceptAVal: 'Công nghệ cao, hóa chất, cơ khí chính xác, dệt may, vật liệu', conceptBVal: 'Chế tạo máy, điện tử, viễn thông, cơ khí ô tô, hóa dược' },
          { criteria: 'Vùng gắn kết', conceptAVal: 'Hạt nhân của Vùng kinh tế trọng điểm phía Nam (Bình Dương, Đồng Nai)', conceptBVal: 'Hạt nhân của Vùng kinh tế trọng điểm phía Bắc (Hải Phòng, Quảng Ninh)' }
        ],
        commonConfusion: 'Học sinh hay nhầm Hà Nội là trung tâm công nghiệp có quy mô lớn nhất.',
        memoryRule: 'Mẹo nhớ: TP. Hồ Chí Minh là trung tâm công nghiệp số 1; Hà Nội là số 2.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-908-1',
        questionText: 'Ngành công nghiệp chế biến, chế tạo nào hiện nay đóng góp kim ngạch xuất khẩu lớn nhất của nước ta?',
        options: [
          { id: 'A', text: 'Sản xuất sản phẩm điện tử, máy tính và điện thoại' },
          { id: 'B', text: 'Khai thác dầu thô và khí đốt' },
          { id: 'C', text: 'Khai thác than đá Quảng Ninh' },
          { id: 'D', text: 'Sản xuất xi măng và vật liệu xây dựng' }
        ],
        correctAnswer: 'A',
        explanation: 'Nhờ làn sóng đầu tư FDI công nghệ cao, sản phẩm điện thoại, máy tính và linh kiện điện tử đã trở thành mặt hàng xuất khẩu có giá trị lớn nhất Việt Nam.',
        hint: 'Công nghệ cao vi mạch và điện thoại.',
        knowledgeCardId: 'KC-908-1'
      }
    ]
  },

  'G9-L10': {
    lessonId: 'G9-L10',
    grade: 9,
    chapterId: 'G9-C2',
    chapterTitle: 'Chương 2. Địa lí các ngành kinh tế',
    lessonTitle: 'Bài 10: Dịch vụ',
    sgkPageRange: 'Trang 153 – 158',
    pdfPageRange: 'Trang 155 – 160',
    objectives: [
      'Nêu được cơ cấu và vai trò ngày càng tăng của ngành dịch vụ trong nền kinh tế.',
      'Trình bày được đặc điểm phát triển các ngành giao thông vận tải, bưu chính viễn thông, thương mại và du lịch.',
      'Xác định được các đầu mối giao thông và trung tâm du lịch lớn nhất nước ta.'
    ],
    knowledgeCards: [
      {
        id: 'KC-910-1',
        cardIndex: 1,
        title: 'Thẻ 1: Giao thông vận tải và Bưu chính viễn thông',
        concept: 'Đường bộ, đường sắt Bắc Nam, cảng biển nước sâu, viễn thông 5G',
        coreDefinition: 'Giao thông vận tải và viễn thông là huyết mạch liên kết các vùng kinh tế và hội nhập quốc tế.',
        keyPoints: [
          'Đường bộ (ô tô): Chiếm tỉ trọng khối lượng vận chuyển hàng hóa và hành khách lớn nhất; các tuyến huyết mạch: Quốc lộ 1A, Đường Hồ Chí Minh, hệ thống đường cao tốc Bắc - Nam.',
          'Đường sắt: Tuyến đường sắt Thống Nhất Bắc - Nam dài 1 726 km chạy song song với Quốc lộ 1.',
          'Đường biển: Phát triển cảng cửa ngõ quốc tế nước sâu Hải Phòng (Lạch Huyện) và Bà Rịa - Vũng Tàu (Cái Mép - Thị Vải).',
          'Đường hàng không: Nâng cấp các sân bay quốc tế Nội Bài, Tân Sơn Nhất, Đà Nẵng, Long Thành.',
          'Viễn thông: Tốc độ phát triển thần tốc, mạng internet cáp quang phủ sóng rộng khắp và đang thử nghiệm mạng 5G.'
        ],
        visualExample: 'Sơ đồ mạng lưới giao thông vận tải Việt Nam và cụm cảng Cái Mép (SGK tr. 154).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 154, pdfPage: 156, section: 'Mục 1. Giao thông & Viễn thông' },
        commonTrapAlert: 'Bẫy tỉ trọng: Đường bộ vận chuyển KHỐI LƯỢNG HÀNG HÓA lớn nhất; Đường biển có CỰ LI VẬN CHUYỂN TRUNG BÌNH dài nhất.',
        iconName: 'Truck'
      },
      {
        id: 'KC-910-2',
        cardIndex: 2,
        title: 'Thẻ 2: Thương mại và Du lịch',
        concept: 'Xuất nhập khẩu, Du lịch là ngành kinh tế mũi nhọn',
        coreDefinition: 'Thương mại và du lịch phát triển năng động, đưa Việt Nam hội nhập sâu rộng toàn cầu.',
        keyPoints: [
          'Nội thương: Thị trường trong nước sôi động, hệ thống siêu thị, trung tâm thương mại và thương mại điện tử bùng nổ.',
          'Ngoại thương: Tổng kim ngạch xuất nhập khẩu vượt mốc 700 tỉ USD; Việt Nam liên tục xuất siêu; các bạn hàng lớn: Hoa Kỳ, Trung Quốc, EU, ASEAN, Hàn Quốc.',
          'Du lịch: Ngành kinh tế mũi nhọn, tài nguyên du lịch tự nhiên (Vịnh Hạ Long, Phong Nha, Phú Quốc) và nhân văn (Hội An, Cố đô Huế, Tràng An); đón hàng chục triệu lượt khách quốc tế.',
          'Hai trung tâm dịch vụ lớn nhất: Hà Nội và TP. Hồ Chí Minh.'
        ],
        visualExample: 'Hình ảnh quần thể di sản thế giới Vịnh Hạ Long và phố cổ Hội An (SGK tr. 157).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 157, pdfPage: 159, section: 'Mục 2. Thương mại & Du lịch' },
        commonTrapAlert: 'Bẫy thị trường: Thị trường xuất khẩu lớn nhất của Việt Nam là Hoa Kỳ; Thị trường nhập khẩu lớn nhất là Trung Quốc.',
        iconName: 'ShoppingBag'
      }
    ],
    mindmap: {
      id: 'mm-910-root',
      label: 'Ngành Dịch vụ Việt Nam',
      summary: 'GTVT (Đường bộ khối lượng lớn nhất, đường biển cự li xa nhất) | Ngoại thương >700 tỉ USD | Du lịch mũi nhọn (Hạ Long, Hội An, Phú Quốc)',
      children: [
        { id: 'mm-910-gtvt', label: 'Giao thông vận tải', summary: 'Quốc lộ 1, Cao tốc Bắc Nam, Cảng Cái Mép, Sân bay Long Thành' },
        { id: 'mm-910-vienthong', label: 'Bưu chính viễn thông', summary: 'Phủ sóng internet cáp quang toàn quốc, mạng 5G' },
        { id: 'mm-910-thuongmai', label: 'Ngoại thương', summary: 'Xuất siêu, thị trường xuất khẩu lớn nhất là Hoa Kỳ' },
        { id: 'mm-910-dulich', label: 'Du lịch mũi nhọn', summary: 'Di sản thế giới Hạ Long, Phong Nha, Huế, Hội An' }
      ]
    },
    comparisons: [
      {
        id: 'comp-910-1',
        conceptA: 'Vận tải Đường bộ (ô tô)',
        conceptB: 'Vận tải Đường biển',
        comparisonTable: [
          { criteria: 'Khối lượng vận chuyển', conceptAVal: 'Chiếm tỉ trọng LỚN NHẤT trong các loại hình vận tải nội địa', conceptBVal: 'Khối lượng vận chuyển nội địa nhỏ hơn đường bộ' },
          { criteria: 'Cự li vận chuyển trung bình', conceptAVal: 'Ngắn và trung bình, tính cơ động linh hoạt cao', conceptBVal: 'RẤT DÀI, đặc biệt là các tuyến hàng hải quốc tế xuyên đại dương' },
          { criteria: 'Ưu thế cạnh tranh', conceptAVal: 'Giao hàng tận nơi ("door-to-door"), thích hợp hàng hóa nhỏ lẻ', conceptBVal: 'Vận chuyển hàng rời, siêu trường siêu trọng (dầu mỏ, than, container) giá cước rẻ' }
        ],
        commonConfusion: 'Học sinh hay nhầm đường biển vận chuyển khối lượng hàng hóa nội địa lớn nhất.',
        memoryRule: 'Mẹo nhớ: Đường bộ khối lượng vận chuyển nhiều nhất; Đường biển cự li vận chuyển xa nhất.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-910-1',
        questionText: 'Loại hình giao thông vận tải nào ở nước ta hiện nay đảm nhận khối lượng vận chuyển hàng hóa và hành khách lớn nhất?',
        options: [
          { id: 'A', text: 'Giao thông đường bộ (đường ô tô)' },
          { id: 'B', text: 'Giao thông đường sắt' },
          { id: 'C', text: 'Giao thông đường hàng không' },
          { id: 'D', text: 'Giao thông đường ống' }
        ],
        correctAnswer: 'A',
        explanation: 'Đường bộ có tính cơ động cao, thích nghi với mọi dạng địa hình và có thể đến tận nơi các bản làng, ngõ xóm nên luôn chiếm tỉ trọng khối lượng vận chuyển lớn nhất cả nước.',
        hint: 'Phương tiện ô tô cơ động.',
        knowledgeCardId: 'KC-910-1'
      }
    ]
  },

  'G9-L12': {
    lessonId: 'G9-L12',
    grade: 9,
    chapterId: 'G9-C3',
    chapterTitle: 'Chương 3. Địa lí các vùng kinh tế – xã hội',
    lessonTitle: 'Bài 12: Vùng Trung du và miền núi phía Bắc',
    sgkPageRange: 'Trang 160 – 165',
    pdfPageRange: 'Trang 162 – 167',
    objectives: [
      'Xác định được vị trí địa lí và phạm vi lãnh thổ của vùng Trung du và miền núi phía Bắc.',
      'Phân tích được 4 thế mạnh kinh tế nổi trội: thủy điện, khoáng sản, cây công nghiệp cận nhiệt và kinh tế biển/cửa khẩu.',
      'Nêu được ý nghĩa của phát triển kinh tế - xã hội đối với an ninh quốc phòng vùng biên giới.'
    ],
    knowledgeCards: [
      {
        id: 'KC-912-1',
        cardIndex: 1,
        title: 'Thẻ 1: Thế mạnh Thủy điện và Khai khoáng hàng đầu cả nước',
        concept: 'Thủy điện Sơn La 2 400 MW, Than Quảng Ninh, Apatit Lào Cai',
        coreDefinition: 'Vùng có tiềm năng thủy điện và tài nguyên khoáng sản giàu có nhất Việt Nam.',
        keyPoints: [
          'Tiềm năng thủy điện lớn nhất nước: Tập trung trên hệ thống sông Đà (Thủy điện Sơn La 2 400 MW lớn nhất Đông Nam Á, Thủy điện Hòa Bình 1 920 MW, Thủy điện Lai Châu).',
          'Khoáng sản phong phú nhất nước: Than đá Quảng Ninh (trữ lượng lớn nhất), quặng sắt Yên Bái, thiếc Tĩnh Túc (Cao Bằng), apatit Lào Cai, đồng Sin Quyền (Lào Cai).',
          'Ý nghĩa: Cung cấp năng lượng điện và nguyên liệu luyện kim, hóa chất cho sự nghiệp công nghiệp hóa cả nước.'
        ],
        visualExample: 'Hình ảnh đập Thủy điện Sơn La hùng vĩ trên sông Đà (SGK tr. 162).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 162, pdfPage: 164, section: 'Mục 1. Thế mạnh công nghiệp' },
        commonTrapAlert: 'Bẫy nhà máy: Nhà máy thủy điện có công suất lớn nhất nước ta là Thủy điện Sơn La (2 400 MW), không phải Hòa Bình.',
        iconName: 'Zap'
      },
      {
        id: 'KC-912-2',
        cardIndex: 2,
        title: 'Thẻ 2: Cây công nghiệp cận nhiệt, ôn đới và Du lịch sinh thái',
        concept: 'Chè Thái Nguyên, Mộc Châu, Rau quả ôn đới Sa Pa, Vịnh Hạ Long',
        coreDefinition: 'Khí hậu có mùa đông lạnh vùng núi tạo thế mạnh độc đáo về nông nghiệp cận nhiệt và du lịch.',
        keyPoints: [
          'Vùng chuyên canh chè lớn nhất nước ta: Chè búp Thái Nguyên, Mộc Châu (Sơn La), Yên Bái, Phú Thọ.',
          'Cây dược liệu và cây ăn quả ôn đới: Tam thất, hồi, quế, đào, mận, lê, táo mèo; rau quả xuất khẩu Sa Pa.',
          'Kinh tế cửa khẩu và du lịch: Cửa khẩu quốc tế Móng Cái, Hữu Nghị, Lào Cai; Di sản thiên nhiên thế giới Vịnh Hạ Long (Quảng Ninh) và khu du lịch quốc gia Sa Pa.'
        ],
        visualExample: 'Đồi chè Tân Cương Thái Nguyên và cáp treo Fansipan Sa Pa (SGK tr. 164).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 164, pdfPage: 166, section: 'Mục 2. Nông nghiệp & Dịch vụ' },
        commonTrapAlert: 'Bẫy nông sản: Chè là cây công nghiệp chủ lực của Trung du miền núi Bắc Bộ (cà phê mới là của Tây Nguyên).',
        iconName: 'Mountain'
      }
    ],
    mindmap: {
      id: 'mm-912-root',
      label: 'Trung du & Miền núi phía Bắc',
      summary: 'Thủy điện sông Đà số 1 (Sơn La 2 400 MW) | Khoáng sản phong phú (Than Quảng Ninh, Apatit) | Chè lớn nhất nước | Cửa khẩu & Hạ Long',
      children: [
        { id: 'mm-912-thuy-dien', label: 'Thủy điện số 1', summary: 'Sơn La (2 400 MW), Hòa Bình, Lai Châu trên sông Đà' },
        { id: 'mm-912-khoang-san', label: 'Khoáng sản số 1', summary: 'Than đá Quảng Ninh, Apatit Lào Cai, Đồng Sin Quyền' },
        { id: 'mm-912-che-duoclieu', label: 'Cây cận nhiệt & ôn đới', summary: 'Chè Thái Nguyên số 1, đào mận Sa Pa, sâm dược liệu' },
        { id: 'mm-912-dulich-ck', label: 'Du lịch & Cửa khẩu', summary: 'Vịnh Hạ Long di sản thế giới, Sa Pa, cửa khẩu Hữu Nghị' }
      ]
    },
    comparisons: [
      {
        id: 'comp-912-1',
        conceptA: 'Thế mạnh Trung du miền núi phía Bắc',
        conceptB: 'Thế mạnh Vùng Tây Nguyên',
        comparisonTable: [
          { criteria: 'Cây công nghiệp chủ lực', conceptAVal: 'Cây chè (nguồn gốc cận nhiệt), cây ăn quả ôn đới, dược liệu', conceptBVal: 'Cây cà phê (nhiệt đới), cao su, hồ tiêu, điều' },
          { criteria: 'Khoáng sản mũi nhọn', conceptAVal: 'Than đá (Quảng Ninh), quặng sắt, quặng thiếc, apatit', conceptBVal: 'Quặng bô-xít nhôm (trữ lượng lớn nhất cả nước)' },
          { criteria: 'Khí hậu đặc trưng', conceptAVal: 'Nhiệt đới ẩm có mùa đông lạnh buốt kéo dài 3 - 4 tháng', conceptBVal: 'Cận xích đạo nóng quanh năm với hai mùa mưa - khô rõ rệt' }
        ],
        commonConfusion: 'Học sinh thường nhầm cây công nghiệp lâu năm của hai vùng (nhớ rõ: Bắc Bộ là Chè; Tây Nguyên là Cà phê).',
        memoryRule: 'Mẹo nhớ: Miền núi Bắc Bộ mùa đông lạnh trồng Chè; Tây Nguyên bazan nóng ẩm trồng Cà phê.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-912-1',
        questionText: 'Nhà máy thủy điện nào có công suất lớn nhất nước ta và khu vực Đông Nam Á (2 400 MW) nằm ở vùng Trung du và miền núi phía Bắc?',
        options: [
          { id: 'A', text: 'Nhà máy thủy điện Sơn La' },
          { id: 'B', text: 'Nhà máy thủy điện Hòa Bình' },
          { id: 'C', text: 'Nhà máy thủy điện Trị An' },
          { id: 'D', text: 'Nhà máy thủy điện Y-a-ly' }
        ],
        correctAnswer: 'A',
        explanation: 'Thủy điện Sơn La khánh thành năm 2012 trên dòng sông Đà có công suất 2 400 MW, là công trình thủy điện lớn nhất Đông Nam Á.',
        hint: 'Công suất 2 400 MW trên sông Đà.',
        knowledgeCardId: 'KC-912-1'
      }
    ]
  },

  'G9-L13': {
    lessonId: 'G9-L13',
    grade: 9,
    chapterId: 'G9-C3',
    chapterTitle: 'Chương 3. Địa lí các vùng kinh tế – xã hội',
    lessonTitle: 'Bài 13: Vùng Đồng bằng sông Hồng',
    sgkPageRange: 'Trang 166 – 171',
    pdfPageRange: 'Trang 168 – 173',
    objectives: [
      'Trình bày được vị trí địa lí và vai trò đầu tàu chính trị, văn hóa, khoa học của vùng.',
      'Phân tích được thế mạnh thâm canh lúa, công nghiệp chế biến và hệ thống đê điều kiên cố.',
      'Nêu được vấn đề dân số đông, mật độ cao nhất nước và định hướng phát triển tam giác kinh tế.'
    ],
    knowledgeCards: [
      {
        id: 'KC-913-1',
        cardIndex: 1,
        title: 'Thẻ 1: Vị trí chiến lược và Thế mạnh tự nhiên - kinh tế',
        concept: 'Đất phù sa sông Hồng, Đê sông dài hàng nghìn km, Thâm canh lúa cao nhất',
        coreDefinition: 'Đồng bằng sông Hồng là trung tâm chính trị, văn hóa, giáo dục và khoa học kĩ thuật của cả nước.',
        keyPoints: [
          'Vị trí: Nằm ở hạ lưu sông Hồng và sông Thái Bình, tiếp giáp vịnh Bắc Bộ; thủ đô Hà Nội là trái tim của cả nước.',
          'Đất đai và hệ thống đê điều: Hệ thống đê sông dài hơn 2 700 km kiên cố ngăn lũ từ thời phong kiến. Đất trong đê không được bồi đắp phù sa hàng năm nên bị bạc màu; đất ngoài đê được bồi phù sa định kì.',
          'Nông nghiệp: Vùng thâm canh lúa có trình độ cao và năng suất lúa bình quân cao nhất nước; vụ đông trở thành vụ sản xuất chính đem lại hiệu quả kinh tế lớn.'
        ],
        visualExample: 'Hình ảnh hệ thống đê sông Hồng và cánh đồng lúa thâm canh trù phú (SGK tr. 167).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 167, pdfPage: 169, section: 'Mục 1. Vị trí và tự nhiên' },
        commonTrapAlert: 'Bẫy đất đai: Đất trong đê của Đồng bằng sông Hồng KHÔNG được bồi đắp phù sa hàng năm do đê ngăn chặn dòng lũ.',
        iconName: 'Shield'
      },
      {
        id: 'KC-913-2',
        cardIndex: 2,
        title: 'Thẻ 2: Công nghiệp, Dịch vụ và Áp lực Dân số',
        concept: 'Mật độ >1 000 người/km², Tam giác kinh tế Hà Nội - Hải Phòng - Quảng Ninh',
        coreDefinition: 'Vùng có mật độ dân số cao nhất nước và mạng lưới công nghiệp, cảng biển phát triển mạnh.',
        keyPoints: [
          'Dân số: Mật độ dân số cao nhất cả nước (>1 000 người/km², gấp hơn 3 lần trung bình cả nước), tạo sức ép lớn về việc làm, nhà ở, y tế và môi trường đô thị.',
          'Tam giác tăng trưởng kinh tế: Hà Nội (trung tâm chính trị công nghệ) - Hải Phòng (cảng biển cửa ngõ quốc tế Lạch Huyện) - Quảng Ninh (du lịch và than).',
          'Công nghiệp: Chế tạo ô tô, điện tử viễn thông, đóng tàu, dệt may chất lượng cao.'
        ],
        visualExample: 'Bản đồ kinh tế vùng Đồng bằng sông Hồng (SGK tr. 169).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 169, pdfPage: 171, section: 'Mục 2. Kinh tế - xã hội' },
        commonTrapAlert: 'Bẫy số liệu: Mật độ dân số cao nhất nước là Đồng bằng sông Hồng, không phải Đông Nam Bộ.',
        iconName: 'Building'
      }
    ],
    mindmap: {
      id: 'mm-913-root',
      label: 'Đồng bằng sông Hồng',
      summary: 'Thủ đô Hà Nội | Mật độ dân số cao nhất nước (>1 000 ng/km²) | Đê sông Hồng >2 700km | Tam giác kinh tế Hà Nội - Hải Phòng - Quảng Ninh',
      children: [
        { id: 'mm-913-de', label: 'Hệ thống đê sông', summary: 'Dài >2 700 km, đất trong đê không bồi phù sa hàng năm' },
        { id: 'mm-913-nn-vudong', label: 'Nông nghiệp thâm canh', summary: 'Năng suất lúa cao nhất nước, rau màu vụ đông phong phú' },
        { id: 'mm-913-dansodan', label: 'Mật độ dân số', summary: 'Cao nhất nước (>1 000 người/km²), sức ép việc làm lớn' },
        { id: 'mm-913-tamgiac', label: 'Tam giác kinh tế', summary: 'Hà Nội (trung tâm) - Hải Phòng (cảng biển) - Quảng Ninh' }
      ]
    },
    comparisons: [
      {
        id: 'comp-913-1',
        conceptA: 'Đồng bằng sông Hồng (ĐBSH)',
        conceptB: 'Đồng bằng sông Cửu Long (ĐBSCL)',
        comparisonTable: [
          { criteria: 'Hệ thống đê ngăn lũ', conceptAVal: 'Có đê sông kiên cố dài >2 700 km ngăn lũ, chia cắt đồng bằng', conceptBVal: 'Không có hệ thống đê lớn ngăn lũ, chỉ có bờ bao sống chung với lũ' },
          { criteria: 'Bồi đắp phù sa hàng năm', conceptAVal: 'Đất trong đê không được bồi phù sa định kì, dễ bạc màu', conceptBVal: 'Phù sa bồi đắp rộng khắp theo con nước lũ hàng năm' },
          { criteria: 'Mật độ dân cư', conceptAVal: 'Cao nhất cả nước (>1 000 người/km²)', conceptBVal: 'Thấp hơn nhiều (khoảng 400 - 450 người/km²)' }
        ],
        commonConfusion: 'Học sinh thường nghĩ Đồng bằng sông Cửu Long cũng có hệ thống đê sông kiên cố như sông Hồng.',
        memoryRule: 'Mẹo nhớ: Sông Hồng có đê ngăn lũ chia ô trũng; Sông Cửu Long không đê sống chung với lũ thuận thiên.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-913-1',
        questionText: 'Đặc điểm tự nhiên nổi bật của đất nông nghiệp ở vùng Đồng bằng sông Hồng do sự tồn tại của hệ thống đê sông là gì?',
        options: [
          { id: 'A', text: 'Đất trong đê không được phù sa bồi đắp hàng năm nên dần bị bạc màu' },
          { id: 'B', text: 'Đất bị nhiễm mặn nghiêm trọng quanh năm' },
          { id: 'C', text: 'Toàn bộ diện tích là đất đỏ bazan phì nhiêu' },
          { id: 'D', text: 'Đất cát pha không thể trồng trọt cây lương thực' }
        ],
        correctAnswer: 'A',
        explanation: 'Do hệ thống đê kiên cố ngăn không cho nước sông tràn vào ruộng, đất trong đê của Đồng bằng sông Hồng không được bồi đắp phù sa hàng năm.',
        hint: 'Đê ngăn lũ không cho phù sa vào ruộng.',
        knowledgeCardId: 'KC-913-1'
      }
    ]
  },

  'G9-L14': {
    lessonId: 'G9-L14',
    grade: 9,
    chapterId: 'G9-C3',
    chapterTitle: 'Chương 3. Địa lí các vùng kinh tế – xã hội',
    lessonTitle: 'Bài 14: Vùng Bắc Trung Bộ',
    sgkPageRange: 'Trang 172 – 176',
    pdfPageRange: 'Trang 174 – 178',
    objectives: [
      'Xác định được vị trí địa lí kéo dài và hẹp ngang của vùng Bắc Trung Bộ.',
      'Phân tích được thế mạnh kinh tế biển, rừng và phát triển công nghiệp cảng biển (Nghi Sơn, Vũng Áng).',
      'Đánh giá được các khó khăn thiên tai (bão lũ, hạn hán, cát bay, phơn khô nóng) và giải pháp khắc phục.'
    ],
    knowledgeCards: [
      {
        id: 'KC-914-1',
        cardIndex: 1,
        title: 'Thẻ 1: Vị trí hẹp ngang và Phân hóa tự nhiên Đông - Tây',
        concept: 'Nơi hẹp nhất nước (Quảng Bình <50 km), Núi - Gò đồi - Đồng bằng - Biển',
        coreDefinition: 'Bắc Trung Bộ có hình thể kéo dài, hẹp ngang nhất cả nước, thiên nhiên phân hóa rõ nét từ tây sang đông.',
        keyPoints: [
          'Vị trí: Cầu nối giữa các tỉnh phía bắc và phía nam; nơi hẹp nhất theo chiều tây - đông là tỉnh Quảng Bình (chưa đầy 50 km).',
          'Lát cắt Đông - Tây: Phía tây là núi cao Trường Sơn Bắc (rừng đầu nguồn) -> vùng gò đồi (chăn nuôi bò, trồng cao su, tiêu) -> dải đồng bằng nhỏ hẹp ven biển (lúa, rau màu) -> bờ biển và đảo (nuôi trồng thủy sản, du lịch).',
          'Khó khăn thiên tai: Chịu ảnh hưởng gay gắt của bão lũ, cát bay lấn đồng ruộng và gió phơn Tây Nam khô nóng (gió Lào).'
        ],
        visualExample: 'Lược đồ tự nhiên và lát cắt địa hình Đông - Tây vùng Bắc Trung Bộ (SGK tr. 173).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 173, pdfPage: 175, section: 'Mục 1. Vị trí & Tự nhiên' },
        commonTrapAlert: 'Bẫy địa danh: Nơi hẹp nhất nước ta là tỉnh Quảng Bình (<50 km từ biên giới Lào ra biển).',
        iconName: 'Compass'
      },
      {
        id: 'KC-914-2',
        cardIndex: 2,
        title: 'Thẻ 2: Phát triển Kinh tế biển và Công nghiệp',
        concept: 'Khu kinh tế Nghi Sơn, Vũng Áng, Du lịch Cố đô Huế, Phong Nha',
        coreDefinition: 'Kinh tế biển và phát triển các khu kinh tế ven biển là động lực tăng trưởng mới của vùng.',
        keyPoints: [
          'Khu kinh tế ven biển: Nghi Sơn (Thanh Hóa - lọc hóa dầu, xi măng, cảng biển), Vũng Áng (Hà Tĩnh - luyện thép, nhiệt điện, cảng nước sâu), Chân Mây (Thừa Thiên Huế).',
          'Du lịch: Di sản văn hóa Cố đô Huế, Nhã nhạc cung đình Huế; Di sản thiên nhiên thế giới Vườn quốc gia Phong Nha - Kẻ Bàng (Quảng Bình); bãi tắm Sầm Sơn, Cửa Lò, Thiên Cầm.',
          'Giải pháp thiên tai: Trồng rừng phòng hộ ven biển chống cát bay; xây dựng hồ chứa cắt lũ đầu nguồn.'
        ],
        visualExample: 'Cảng nước sâu Vũng Áng và khu liên hợp gang thép (SGK tr. 175).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 175, pdfPage: 177, section: 'Mục 2. Kinh tế biển & Du lịch' },
        commonTrapAlert: 'Bẫy giải pháp: Trồng rừng phi lao chắn gió cát ven biển là giải pháp sinh thái hữu hiệu nhất chống cát bay ở Bắc Trung Bộ.',
        iconName: 'Anchor'
      }
    ],
    mindmap: {
      id: 'mm-914-root',
      label: 'Vùng Bắc Trung Bộ',
      summary: 'Kéo dài, hẹp ngang (<50 km ở Quảng Bình) | Phân hóa Đông - Tây | Gió Lào & bão lũ | Kinh tế biển: Nghi Sơn, Vũng Áng | Di sản Huế, Phong Nha',
      children: [
        { id: 'mm-914-hepngang', label: 'Hình thể hẹp ngang', summary: 'Quảng Bình <50 km, cầu nối Bắc - Nam' },
        { id: 'mm-914-thientai', label: 'Thiên tai khắc nghiệt', summary: 'Gió phơn Tây Nam khô nóng, bão lũ, cát bay lấn ruộng' },
        { id: 'mm-914-kkt-bien', label: 'Kinh tế ven biển', summary: 'Khu kinh tế Nghi Sơn (Thanh Hóa), Vũng Áng (Hà Tĩnh)' },
        { id: 'mm-914-disan', label: 'Du lịch di sản', summary: 'Cố đô Huế, Phong Nha - Kẻ Bàng, Sầm Sơn, Cửa Lò' }
      ]
    },
    comparisons: [
      {
        id: 'comp-914-1',
        conceptA: 'Đồng bằng Bắc Trung Bộ',
        conceptB: 'Đồng bằng sông Hồng',
        comparisonTable: [
          { criteria: 'Quy mô diện tích', conceptAVal: 'Nhỏ hẹp, bị các nhánh núi đâm ngang ra biển chia cắt', conceptBVal: 'Rộng lớn, màu mỡ, bằng phẳng thứ hai cả nước' },
          { criteria: 'Nguồn gốc hình thành', conceptAVal: 'Chủ yếu do biển bồi đắp nên nhiều cát, đất kém phì nhiêu hơn', conceptBVal: 'Do phù sa sông Hồng và sông Thái Bình bồi đắp dày đặc' },
          { criteria: 'Khó khăn thời tiết', conceptAVal: 'Chịu gió phơn khô nóng gay gắt và cát lấn bờ biển', conceptBVal: 'Chịu rét đậm rét hại và sương muối vào mùa đông' }
        ],
        commonConfusion: 'Học sinh hay nghĩ đất đồng bằng ven biển Bắc Trung Bộ cũng màu mỡ như đồng bằng sông Hồng.',
        memoryRule: 'Mẹo nhớ: Đồng bằng Bắc Trung Bộ đất cát nhỏ hẹp; ĐBSH châu thổ phù sa màu mỡ.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-914-1',
        questionText: 'Tỉnh nào ở vùng Bắc Trung Bộ có chiều ngang lãnh thổ từ biên giới phía tây ra biển hẹp nhất nước ta (chưa đầy 50 km)?',
        options: [
          { id: 'A', text: 'Tỉnh Quảng Bình' },
          { id: 'B', text: 'Tỉnh Hà Tĩnh' },
          { id: 'C', text: 'Tỉnh Quảng Trị' },
          { id: 'D', text: 'Tỉnh Thanh Hóa' }
        ],
        correctAnswer: 'A',
        explanation: 'Quảng Bình là tỉnh có bề ngang hẹp nhất Việt Nam, nơi hẹp nhất tính từ biên giới Việt - Lào ra Biển Đông chỉ khoảng 49 - 50 km.',
        hint: 'Nơi hẹp nhất dải đất hình chữ S.',
        knowledgeCardId: 'KC-914-1'
      }
    ]
  },

  'G9-L16': {
    lessonId: 'G9-L16',
    grade: 9,
    chapterId: 'G9-C3',
    chapterTitle: 'Chương 3. Địa lí các vùng kinh tế – xã hội',
    lessonTitle: 'Bài 16: Vùng Duyên hải Nam Trung Bộ và Tây Nguyên',
    sgkPageRange: 'Trang 182 – 188',
    pdfPageRange: 'Trang 184 – 190',
    objectives: [
      'Phân tích được thế mạnh cây công nghiệp lâu năm (cà phê, cao su, tiêu) và khoáng sản bô-xít ở Tây Nguyên.',
      'Trình bày được thế mạnh kinh tế biển (đánh bắt nuôi trồng thủy sản, muối Sa Huỳnh, Cà Ná, cảng biển) ở Duyên hải Nam Trung Bộ.',
      'Nêu được ý nghĩa của việc kết nối hạ tầng giao thông Đông - Tây giữa Tây Nguyên và duyên hải.'
    ],
    knowledgeCards: [
      {
        id: 'KC-916-1',
        cardIndex: 1,
        title: 'Thẻ 1: Thế mạnh Tây Nguyên: Cà phê số 1, Cao su và Bô-xít',
        concept: 'Đất đỏ bazan cao nguyên xếp tầng, Buôn Ma Thuột, Thủy điện Sê San',
        coreDefinition: 'Tây Nguyên là vùng duy nhất không giáp biển, có thế mạnh nổi bật về cây công nghiệp lâu năm và khoáng sản nhôm.',
        keyPoints: [
          'Cây công nghiệp số 1: Đất đỏ bazan màu mỡ trên các cao nguyên (Pleiku, Đắk Lắk, Di Linh) thích hợp trồng CÀ PHÊ số 1 cả nước (thủ phủ Buôn Ma Thuột), cao su, hồ tiêu, chè (Lâm Đồng).',
          'Khoáng sản Bô-xít: Trữ lượng lớn nhất cả nước tại Đắk Nông, Lâm Đồng (hàng tỉ tấn) phục vụ luyện nhôm.',
          'Tiềm năng thủy điện: Bậc thang thủy điện lớn trên sông Sê San (Y-a-ly), sông Srêpôk, sông Đồng Nai.',
          'Bảo tồn văn hóa: Không gian văn hóa Cồng chiêng Tây Nguyên là di sản văn hóa phi vật thể của nhân loại.'
        ],
        visualExample: 'Hình ảnh đồi cà phê bạt ngàn Buôn Ma Thuột và nhà máy luyện bô-xít Tân Rai (SGK tr. 184).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 184, pdfPage: 186, section: 'Mục 1. Tây Nguyên' },
        commonTrapAlert: 'Bẫy địa lí: Tây Nguyên là vùng duy nhất ở nước ta KHÔNG có bờ biển tiếp giáp Biển Đông.',
        iconName: 'Mountain'
      },
      {
        id: 'KC-916-2',
        cardIndex: 2,
        title: 'Thẻ 2: Thế mạnh Duyên hải Nam Trung Bộ: Kinh tế biển và Du lịch',
        concept: 'Ngư trường Hoàng Sa - Trường Sa, Muối Cà Ná, Du lịch Nha Trang, Đà Nẵng',
        coreDefinition: 'Duyên hải Nam Trung Bộ có thế mạnh vượt trội về kinh tế biển toàn diện.',
        keyPoints: [
          'Đánh bắt thủy sản: Gần hai ngư trường lớn Ninh Thuận - Bình Thuận và quần đảo Hoàng Sa, Trường Sa.',
          'Sản xuất muối: Điều kiện nắng gió quanh năm, độ mặn cao thuận lợi làm muối công nghiệp: Sa Huỳnh (Quảng Ngãi), Cà Ná (Ninh Thuận).',
          'Cảng biển và Du lịch: Bờ biển khúc khuỷu nhiều vụng biển kín gió xây dựng cảng nước sâu (Đà Nẵng, Dung Quất, Cam Ranh, Vân Phong); bãi biển tuyệt đẹp tại Đà Nẵng, Nha Trang, Mũi Né.'
        ],
        visualExample: 'Hình ảnh cánh đồng muối Cà Ná và bãi biển vịnh Nha Trang (SGK tr. 186).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 186, pdfPage: 188, section: 'Mục 2. Duyên hải Nam Trung Bộ' },
        commonTrapAlert: 'Bẫy khí hậu: Tỉnh Ninh Thuận và Bình Thuận là vùng khô hạn nhất nước ta do lượng mưa thấp nhất cả nước.',
        iconName: 'Sun'
      }
    ],
    mindmap: {
      id: 'mm-916-root',
      label: 'Nam Trung Bộ & Tây Nguyên',
      summary: 'Tây Nguyên (không giáp biển, bazan cà phê số 1, bô-xít Đắk Nông) | Duyên hải Nam Trung Bộ (kinh tế biển, muối Cà Ná, du lịch Nha Trang)',
      children: [
        { id: 'mm-916-tn-caphe', label: 'Tây Nguyên: Cà phê', summary: 'Đất đỏ bazan, Buôn Ma Thuột, cao su, hồ tiêu, thủy điện Y-a-ly' },
        { id: 'mm-916-tn-boxit', label: 'Tây Nguyên: Bô-xít', summary: 'Trữ lượng lớn nhất cả nước ở Đắk Nông, Lâm Đồng' },
        { id: 'mm-916-dh-bien', label: 'Nam Trung Bộ: Biển', summary: 'Ngư trường lớn, muối Sa Huỳnh, Cà Ná nắng gió' },
        { id: 'mm-916-dh-cang-dl', label: 'Cảng biển & Du lịch', summary: 'Cảng Cam Ranh, Dung Quất, du lịch Nha Trang, Mũi Né' }
      ]
    },
    comparisons: [
      {
        id: 'comp-916-1',
        conceptA: 'Vùng Tây Nguyên',
        conceptB: 'Vùng Duyên hải Nam Trung Bộ',
        comparisonTable: [
          { criteria: 'Tiếp giáp biển', conceptAVal: 'KHÔNG giáp biển (vùng nội địa duy nhất của cả nước)', conceptBVal: 'Giáp biển hoàn toàn về phía đông, bờ biển dài nhiều vũng vịnh' },
          { criteria: 'Thế mạnh kinh tế trụ cột', conceptAVal: 'Trồng cây công nghiệp lâu năm (cà phê, cao su), bô-xít, thủy điện', conceptBVal: 'Kinh tế biển: đánh bắt nuôi trồng hải sản, cảng biển, du lịch, muối' },
          { criteria: 'Địa hình chủ yếu', conceptAVal: 'Các cao nguyên bazan xếp tầng rộng lớn ở độ cao 500 - 1 500 m', conceptBVal: 'Đồng bằng hẹp ven biển bị các nhánh núi đâm ngang chia cắt' }
        ],
        commonConfusion: 'Học sinh thường quên Tây Nguyên hoàn toàn không giáp biển.',
        memoryRule: 'Mẹo nhớ: Tây Nguyên cao nguyên bazan không giáp biển; Duyên hải Nam Trung Bộ bờ biển dài muối và cá tôm.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-916-1',
        questionText: 'Điểm khác biệt lớn nhất về vị trí địa lí của vùng Tây Nguyên so với tất cả các vùng kinh tế khác ở nước ta là gì?',
        options: [
          { id: 'A', text: 'Là vùng duy nhất ở nước ta không giáp biển' },
          { id: 'B', text: 'Là vùng có đường bờ biển dài nhất' },
          { id: 'C', text: 'Có diện tích đồng bằng châu thổ lớn nhất' },
          { id: 'D', text: 'Tiếp giáp trực tiếp với 4 quốc gia' }
        ],
        correctAnswer: 'A',
        explanation: 'Tây Nguyên là vùng kinh tế duy nhất của Việt Nam nằm hoàn toàn ở nội địa, không tiếp giáp với biển.',
        hint: 'Không tiếp giáp với bờ biển.',
        knowledgeCardId: 'KC-916-1'
      }
    ]
  },

  'G9-L17': {
    lessonId: 'G9-L17',
    grade: 9,
    chapterId: 'G9-C3',
    chapterTitle: 'Chương 3. Địa lí các vùng kinh tế – xã hội',
    lessonTitle: 'Bài 17: Vùng Đông Nam Bộ',
    sgkPageRange: 'Trang 189 – 195',
    pdfPageRange: 'Trang 191 – 197',
    objectives: [
      'Khẳng định được vai trò đầu tàu kinh tế dẫn đầu cả nước về GDP, công nghiệp, FDI và xuất khẩu.',
      'Phân tích được thế mạnh công nghiệp, dịch vụ và cây công nghiệp lâu năm (cao su).',
      'Đánh giá được vai trò trung tâm của TP. Hồ Chí Minh và cụm cảng Cái Mép - Thị Vải.'
    ],
    knowledgeCards: [
      {
        id: 'KC-917-1',
        cardIndex: 1,
        title: 'Thẻ 1: Đầu tàu kinh tế số 1 cả nước',
        concept: 'Đóng góp >31% GDP, Thu hút FDI lớn nhất, TP. Hồ Chí Minh',
        coreDefinition: 'Đông Nam Bộ là vùng kinh tế phát triển năng động nhất, giữ vai trò đầu tàu tăng trưởng của Việt Nam.',
        keyPoints: [
          'Đóng góp kinh tế: Chiếm khoảng 31% - 32% GDP cả nước, dẫn đầu về giá trị sản xuất công nghiệp và kim ngạch xuất nhập khẩu.',
          'Thu hút FDI: Thu hút nguồn vốn đầu tư trực tiếp nước ngoài (FDI) lớn nhất cả nước nhờ cơ chế thông thoáng và hạ tầng đồng bộ.',
          'TP. Hồ Chí Minh: Đô thị đặc biệt, trung tâm kinh tế, tài chính, khoa học công nghệ và đổi mới sáng tạo lớn nhất Việt Nam.',
          'Cây công nghiệp: Là vùng chuyên canh cây CAO SU lớn nhất cả nước (Bình Phước, Bình Dương, Tây Ninh, Đồng Nai).'
        ],
        visualExample: 'Hình ảnh trung tâm tài chính TP. Hồ Chí Minh và rừng cao su bạt ngàn Bình Phước (SGK tr. 191).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 191, pdfPage: 193, section: 'Mục 1. Vị trí và vai trò kinh tế' },
        commonTrapAlert: 'Bẫy tỉ trọng: Vùng đóng góp tỉ trọng GDP lớn nhất cả nước là Đông Nam Bộ (không phải ĐBSH hay ĐBSCL).',
        iconName: 'TrendingUp'
      },
      {
        id: 'KC-917-2',
        cardIndex: 2,
        title: 'Thẻ 2: Cụm cảng Cái Mép - Thị Vải và Dầu khí',
        concept: 'Cảng nước sâu Cái Mép, Khai thác dầu khí thềm lục địa Bà Rịa - Vũng Tàu',
        coreDefinition: 'Cụm cảng quốc tế và công nghiệp dầu khí tạo thế mạnh vượt trội cho vùng.',
        keyPoints: [
          'Khai thác dầu khí: Tỉnh Bà Rịa - Vũng Tàu là trung tâm khai thác dầu mỏ và khí đốt lớn nhất nước tại các mỏ Bạch Hổ, Rồng, Đại Hùng, Lan Tây; phát triển công nghiệp lọc hóa dầu và phân đạm Phú Mỹ.',
          'Cụm cảng nước sâu Cái Mép - Thị Vải: Là một trong những cảng biển nước sâu hiện đại nhất thế giới, có khả năng đón tàu container siêu trọng tải đi thẳng sang châu Âu và châu Mỹ mà không cần trung chuyển.',
          'Liên kết vùng: Gắn kết tam giác kinh tế TP.HCM - Bình Dương - Đồng Nai - Bà Rịa Vũng Tàu thành hành lang công nghiệp logistics liên hoàn.'
        ],
        visualExample: 'Hình ảnh tàu container khổng lồ cập cảng nước sâu Cái Mép (SGK tr. 193).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 193, pdfPage: 195, section: 'Mục 2. Công nghiệp & Cảng biển' },
        commonTrapAlert: 'Bẫy cảng biển: Cụm cảng Cái Mép - Thị Vải thuộc tỉnh Bà Rịa - Vũng Tàu (không thuộc TP. Hồ Chí Minh).',
        iconName: 'Anchor'
      }
    ],
    mindmap: {
      id: 'mm-917-root',
      label: 'Vùng Đông Nam Bộ',
      summary: 'Đầu tàu kinh tế >31% GDP, dẫn đầu FDI | TP.HCM số 1 | Vùng cao su lớn nhất | Dầu khí Vũng Tàu & Cụm cảng Cái Mép',
      children: [
        { id: 'mm-917-dautau', label: 'Đầu tàu GDP', summary: 'Đóng góp >31% GDP, xuất khẩu và công nghiệp dẫn đầu' },
        { id: 'mm-917-tphcm', label: 'TP. Hồ Chí Minh', summary: 'Đô thị đặc biệt, trung tâm tài chính và công nghệ cao' },
        { id: 'mm-917-caosu', label: 'Cao su số 1', summary: 'Bình Phước, Bình Dương, Đồng Nai đất badan và xám' },
        { id: 'mm-917-cang-dau', label: 'Cảng Cái Mép & Dầu khí', summary: 'Cảng nước sâu đón tàu siêu trọng, dầu khí Bạch Hổ' }
      ]
    },
    comparisons: [
      {
        id: 'comp-917-1',
        conceptA: 'Vùng Đông Nam Bộ',
        conceptB: 'Vùng Đồng bằng sông Hồng',
        comparisonTable: [
          { criteria: 'Tỉ trọng đóng góp GDP', conceptAVal: 'Cao nhất cả nước (trên 31% GDP)', conceptBVal: 'Lớn thứ hai cả nước (khoảng 22% - 24% GDP)' },
          { criteria: 'Cây công nghiệp chủ đạo', conceptAVal: 'Cây công nghiệp lâu năm nhiệt đới: Cao su (số 1), điều, tiêu', conceptBVal: 'Cây vụ đông ngắn ngày: ngô, khoai tây, rau màu ôn đới' },
          { criteria: 'Mức độ thu hút FDI', conceptAVal: 'Đứng đầu cả nước về quy mô vốn đầu tư nước ngoài', conceptBVal: 'Tăng trưởng rất nhanh trong lĩnh vực điện tử, công nghệ cao' }
        ],
        commonConfusion: 'Học sinh thường nhầm Đồng bằng sông Hồng đóng góp GDP cao hơn Đông Nam Bộ.',
        memoryRule: 'Mẹo nhớ: Đông Nam Bộ là đầu tàu kinh tế dẫn đầu cả nước về GDP và FDI.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-917-1',
        questionText: 'Vùng kinh tế nào sau đây dẫn đầu cả nước về tỉ trọng đóng góp GDP (trên 31%) và thu hút vốn đầu tư nước ngoài (FDI)?',
        options: [
          { id: 'A', text: 'Vùng Đông Nam Bộ' },
          { id: 'B', text: 'Vùng Đồng bằng sông Hồng' },
          { id: 'C', text: 'Vùng Đồng bằng sông Cửu Long' },
          { id: 'D', text: 'Vùng Bắc Trung Bộ' }
        ],
        correctAnswer: 'A',
        explanation: 'Đông Nam Bộ là vùng kinh tế năng động và là đầu tàu kinh tế lớn nhất cả nước, đóng góp hơn 31% tổng GDP quốc gia.',
        hint: 'Vùng có TP. Hồ Chí Minh.',
        knowledgeCardId: 'KC-917-1'
      }
    ]
  },

  'G9-L19': {
    lessonId: 'G9-L19',
    grade: 9,
    chapterId: 'G9-C3',
    chapterTitle: 'Chương 3. Địa lí các vùng kinh tế – xã hội',
    lessonTitle: 'Bài 19: Vùng Đồng bằng sông Cửu Long',
    sgkPageRange: 'Trang 205 – 212',
    pdfPageRange: 'Trang 207 – 214',
    objectives: [
      'Xác định được vị trí địa lí và phạm vi lãnh thổ vùng châu thổ sông Cửu Long.',
      'Phân tích được thế mạnh vựa lúa, vựa thủy sản và cây ăn quả lớn nhất cả nước.',
      'Đánh giá được các thách thức do biến đổi khí hậu (khô hạn, xâm nhập mặn, sụt lún) và định hướng phát triển "thuận thiên".'
    ],
    knowledgeCards: [
      {
        id: 'KC-919-1',
        cardIndex: 1,
        title: 'Thẻ 1: Vựa lúa, vựa thủy sản và cây ăn quả lớn nhất cả nước',
        concept: 'Lúa gạo >50%, Gạo xuất khẩu >90%, Thủy sản nuôi trồng, Cây ăn trái',
        coreDefinition: 'Đồng bằng sông Cửu Long là vùng sản xuất nông nghiệp, thủy sản hàng hóa lớn nhất Việt Nam.',
        keyPoints: [
          'Vựa lúa số 1: Chiếm hơn 50% diện tích và sản lượng lúa cả nước, đóng góp hơn 90% lượng gạo xuất khẩu quốc gia (vựa lúa An Giang, Kiên Giang, Đồng Tháp).',
          'Vựa thủy sản số 1: Chiếm hơn 50% sản lượng thủy sản nuôi trồng cả nước, dẫn đầu về cá tra, cá ba sa và tôm nước lợ xuất khẩu.',
          'Vựa cây ăn quả số 1: Chiếm hơn 60% diện tích cây ăn quả cả nước với nhiều giống đặc sản nổi tiếng (xoài cát Hòa Lộc, sầu riêng Cái Mơn, vú sữa Lò Rèn).',
          'Mạng lưới sông rạch: Kênh rạch chằng chịt, giao thông thủy đặc sắc với các chợ nổi (Cái Răng, Ngã Bảy).'
        ],
        visualExample: 'Hình ảnh cánh đồng lúa chín vàng bao la và chợ nổi Cái Răng Cần Thơ (SGK tr. 208).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 208, pdfPage: 210, section: 'Mục 1. Thế mạnh kinh tế' },
        commonTrapAlert: 'Bẫy thường gặp: Nhầm lẫn Đồng bằng sông Hồng xuất khẩu gạo nhiều nhất (Đồng bằng sông Cửu Long mới là vựa lúa xuất khẩu chính).',
        iconName: 'Wheat'
      },
      {
        id: 'KC-919-2',
        cardIndex: 2,
        title: 'Thẻ 2: Thách thức biến đổi khí hậu và Tư duy phát triển "Thuận thiên"',
        concept: 'Khô hạn, xâm nhập mặn, mô hình lúa - tôm thích ứng',
        coreDefinition: 'Phát triển kinh tế vùng ĐBSCL phải chuyển từ tư duy "can thiệp chống lại thiên nhiên" sang "thuận thiên".',
        keyPoints: [
          'Thách thức nghiêm trọng: Nước biển dâng, khô hạn và xâm nhập mặn sâu vào đất liền trong mùa khô; sạt lở bờ sông bờ biển; thiếu nước ngọt sinh hoạt.',
          'Nghị quyết 120/NQ-CP: Định hướng phát triển bền vững ĐBSCL thích ứng với biến đổi khí hậu theo phương châm "thuận thiên".',
          'Mô hình kinh tế thích ứng: Chuyển đổi đất lúa kém hiệu quả sang nuôi tôm nước lợ; mô hình xen canh một vụ lúa (nước ngọt) - một vụ tôm (nước mặn); bảo vệ rừng ngập mặn Cà Mau.'
        ],
        visualExample: 'Mô hình xen canh tôm - lúa thích ứng hạn mặn tại Bạc Liêu (SGK tr. 211).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 211, pdfPage: 213, section: 'Mục 2. Thích ứng biến đổi khí hậu' },
        commonTrapAlert: 'Bẫy thích ứng: Mô hình "thuận thiên" không phải là bỏ mặc không làm gì, mà là chủ động biến mặn - lợ thành tài nguyên phát triển kinh tế.',
        iconName: 'ShieldCheck'
      }
    ],
    mindmap: {
      id: 'mm-919-root',
      label: 'Đồng bằng sông Cửu Long',
      summary: 'Vựa lúa số 1 (>50% lúa, >90% xuất khẩu) | Vựa thủy sản & cây ăn quả | Sống chung với lũ & thích ứng hạn mặn thuận thiên',
      children: [
        { id: 'mm-919-vualua', label: 'Vựa lúa số 1', summary: 'Chiếm >50% sản lượng, >90% gạo xuất khẩu cả nước' },
        { id: 'mm-919-thuysan-qua', label: 'Thủy sản & Trái cây', summary: 'Cá tra, tôm nước lợ; cây ăn quả nhiệt đới chiếm 60%' },
        { id: 'mm-919-thachthuc', label: 'Thách thức BĐKH', summary: 'Khô hạn, xâm nhập mặn mùa khô, sạt lở bờ sông' },
        { id: 'mm-919-thuanthien', label: 'Mô hình thuận thiên', summary: 'Nghị quyết 120, mô hình lúa - tôm, sống chung với lũ' }
      ]
    },
    comparisons: [
      {
        id: 'comp-919-1',
        conceptA: 'Đồng bằng sông Cửu Long (ĐBSCL)',
        conceptB: 'Đồng bằng sông Hồng (ĐBSH)',
        comparisonTable: [
          { criteria: 'Diện tích đồng bằng', conceptAVal: 'Khoảng 40 000 km² (đồng bằng châu thổ lớn nhất cả nước)', conceptBVal: 'Khoảng 15 000 km² (đồng bằng lớn thứ hai cả nước)' },
          { criteria: 'Vai trò sản xuất lúa gạo', conceptAVal: 'Vựa lúa xuất khẩu lớn nhất (>90% lượng gạo xuất khẩu)', conceptBVal: 'Vùng thâm canh lúa năng suất cao phục vụ tiêu dùng nội địa' },
          { criteria: 'Thích ứng nguồn nước', conceptAVal: 'Không có đê lớn, "sống chung với lũ" và thích ứng "thuận thiên"', conceptBVal: 'Có đê sông kiên cố dài >2 700 km ngăn chặn triệt để nước lũ' }
        ],
        commonConfusion: 'Học sinh thường nhầm ĐBSH xuất khẩu gạo nhiều hơn ĐBSCL.',
        memoryRule: 'Mẹo nhớ: ĐBSCL vựa lúa xuất khẩu số 1 không đê; ĐBSH thâm canh năng suất cao có đê kiên cố.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-919-1',
        questionText: 'Mô hình kinh tế nông nghiệp nào sau đây thể hiện rõ tư duy "thuận thiên" thích ứng với tình trạng xâm nhập mặn ở ĐBSCL?',
        options: [
          { id: 'A', text: 'Mô hình luân canh một vụ tôm (nước lợ/mặn) và một vụ lúa (nước ngọt)' },
          { id: 'B', text: 'Xây đập bê tông ngăn chặn tất cả các cửa sông đổ ra biển' },
          { id: 'C', text: 'Chặt phá rừng ngập mặn để xây khu nghỉ dưỡng' },
          { id: 'D', text: 'Khai thác tối đa nước ngầm tầng sâu vào mùa khô' }
        ],
        correctAnswer: 'A',
        explanation: 'SGK Địa lí 9 trang 211 nêu rõ: Mô hình tôm - lúa vừa thích ứng với sự thay đổi mùa mặn - ngọt, vừa bảo vệ môi trường sinh thái bền vững.',
        hint: 'Tận dụng mùa nước lợ mặn để nuôi tôm, mùa nước ngọt để cấy lúa.',
        knowledgeCardId: 'KC-919-2'
      }
    ]
  },

  'G9-L21': {
    lessonId: 'G9-L21',
    grade: 9,
    chapterId: 'G9-C3',
    chapterTitle: 'Chương 3. Địa lí các vùng kinh tế – xã hội',
    lessonTitle: 'Bài 21: Phát triển tổng hợp kinh tế và bảo vệ tài nguyên, môi trường biển, đảo',
    sgkPageRange: 'Trang 218 – 223',
    pdfPageRange: 'Trang 220 – 225',
    objectives: [
      'Trình bày được 4 hoạt động phát triển tổng hợp kinh tế biển (thủy sản, du lịch, khoáng sản, hàng hải).',
      'Đánh giá được ý nghĩa chiến lược của biển đảo đối với an ninh quốc phòng Tổ quốc.',
      'Đề xuất được các biện pháp bảo vệ tài nguyên và môi trường biển đảo bền vững.'
    ],
    knowledgeCards: [
      {
        id: 'KC-921-1',
        cardIndex: 1,
        title: 'Thẻ 1: Bốn ngành phát triển tổng hợp kinh tế biển',
        concept: 'Thủy sản, Du lịch biển đảo, Khai thác khoáng sản dầu khí, Hàng hải',
        coreDefinition: 'Phát triển tổng hợp kinh tế biển là khai thác đa ngành, hỗ trợ lẫn nhau và bảo vệ môi trường biển.',
        keyPoints: [
          'Khai thác và nuôi trồng thủy sản: Đẩy mạnh đánh bắt xa bờ tại các ngư trường Hoàng Sa, Trường Sa; nuôi trồng hải sản biển công nghệ cao (nuôi cá biển, tôm hùm, rong biển).',
          'Du lịch biển - đảo: Hình thành các trung tâm du lịch biển tầm cỡ quốc tế: vịnh Hạ Long, Đà Nẵng, Nha Trang, Phú Quốc.',
          'Khai thác và chế biến khoáng sản biển: Dầu khí thềm lục địa phía nam; công nghiệp hóa dầu và khí hóa lỏng; nghề làm muối sạch.',
          'Giao thông vận tải biển: Phát triển đội tàu biển quốc gia và hệ thống cảng biển nước sâu cửa ngõ quốc tế.'
        ],
        visualExample: 'Sơ đồ các ngành kinh tế biển và hình ảnh giàn khoan dầu khí ngoài khơi (SGK tr. 219).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 219, pdfPage: 221, section: 'Mục 1. Phát triển tổng hợp kinh tế biển' },
        commonTrapAlert: 'Bẫy khái niệm: Phát triển tổng hợp kinh tế biển đòi hỏi các ngành phải hỗ trợ nhau (không được để khai thác dầu khí hay du lịch làm ô nhiễm hủy diệt nguồn lợi thủy sản).',
        iconName: 'Anchor'
      },
      {
        id: 'KC-921-2',
        cardIndex: 2,
        title: 'Thẻ 2: Bảo vệ tài nguyên, môi trường và Giữ vững chủ quyền biển đảo',
        concept: 'Chiến lược biển Việt Nam đến 2030, Chống suy thoái san hô, Quần đảo thiêng liêng',
        coreDefinition: 'Việt Nam kiên quyết giữ vững chủ quyền biển đảo gắn liền với bảo vệ tài nguyên môi trường biển.',
        keyPoints: [
          'Chiến lược biển: Nghị quyết số 36-NQ/TW xác định mục tiêu đưa Việt Nam trở thành quốc gia biển mạnh, phát triển bền vững, thịnh vượng, an ninh an toàn.',
          'Bảo vệ tài nguyên: Ngăn chặn triệt để đánh bắt mang tính hủy diệt; bảo tồn phục hồi rạn san hô, thảm cỏ biển và rừng ngập mặn ven bờ.',
          'An ninh chủ quyền: Tăng cường tuần tra của lực lượng cảnh sát biển, hải quân; phát triển dân sự trên các đảo tiền tiêu giữ vững toàn vẹn lãnh thổ Tổ quốc.'
        ],
        visualExample: 'Hình ảnh chiến sĩ hải quân bảo vệ cột mốc chủ quyền tại quần đảo Trường Sa (SGK tr. 222).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 222, pdfPage: 224, section: 'Mục 2. Bảo vệ môi trường & an ninh biển đảo' },
        commonTrapAlert: 'Bẫy chủ quyền: Hoàng Sa thuộc TP. Đà Nẵng, Trường Sa thuộc tỉnh Khánh Hòa là chủ quyền bất khả xâm phạm.',
        iconName: 'Shield'
      }
    ],
    mindmap: {
      id: 'mm-921-root',
      label: 'Kinh tế & Chủ quyền Biển đảo',
      summary: '4 ngành kinh tế biển tổng hợp | Nghị quyết 36 đưa VN thành quốc gia biển mạnh | Bảo vệ san hô, rừng ngập mặn | Chủ quyền Hoàng Sa, Trường Sa',
      children: [
        { id: 'mm-921-4nganh', label: '4 ngành kinh tế biển', summary: 'Thủy sản, du lịch biển đảo, dầu khí thềm lục địa, cảng biển' },
        { id: 'mm-921-tonghop', label: 'Tính tổng hợp', summary: 'Các ngành cùng phát triển hỗ trợ nhau, không làm hại môi trường' },
        { id: 'mm-921-baove-mt', label: 'Bảo vệ môi trường biển', summary: 'Cấm đánh bắt hủy diệt, bảo vệ san hô, chống ô nhiễm dầu' },
        { id: 'mm-921-chuyenquyen', label: 'Chủ quyền thiêng liêng', summary: 'Quần đảo Hoàng Sa (Đà Nẵng), Trường Sa (Khánh Hòa)' }
      ]
    },
    comparisons: [
      {
        id: 'comp-921-1',
        conceptA: 'Khai thác kinh tế biển đơn ngành',
        conceptB: 'Phát triển tổng hợp kinh tế biển',
        comparisonTable: [
          { criteria: 'Mục tiêu & tầm nhìn', conceptAVal: 'Chỉ tập trung vào một ngành riêng lẻ (ví dụ chỉ khai thác dầu hoặc chỉ đánh cá)', conceptBVal: 'Phát triển đa ngành đồng bộ: thủy sản, du lịch, khoáng sản, hàng hải' },
          { criteria: 'Tác động môi trường', conceptAVal: 'Dễ gây xung đột tài nguyên, ô nhiễm và hủy hoại môi trường chung', conceptBVal: 'Hài hòa lợi ích, bảo tồn sinh thái và tài nguyên cho tương lai lâu dài' },
          { criteria: 'Hiệu quả kinh tế', conceptAVal: 'Hiệu quả cục bộ, ngắn hạn, thiếu bền vững', conceptBVal: 'Tạo chuỗi giá trị liên hoàn, phát triển bền vững và giữ vững an ninh quốc gia' }
        ],
        commonConfusion: 'Học sinh thường nhầm phát triển tổng hợp kinh tế biển đơn thuần là mở rộng quy mô đánh bắt cá.',
        memoryRule: 'Mẹo nhớ: Phát triển tổng hợp kinh tế biển là kết hợp đa ngành cùng có lợi và bảo vệ biển bền vững.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-921-1',
        questionText: 'Tại sao trong phát triển kinh tế biển ở nước ta, chúng ta bắt buộc phải phát triển theo hướng "tổng hợp"?',
        options: [
          { id: 'A', text: 'Vì môi trường biển là một thể thống nhất, các hoạt động kinh tế biển tác động qua lại chặt chẽ với nhau' },
          { id: 'B', text: 'Vì nước ta không có tàu thuyền đánh cá chuyên dụng' },
          { id: 'C', text: 'Vì vùng biển nước ta quá nhỏ hẹp' },
          { id: 'D', text: 'Vì quốc tế bắt buộc chỉ được khai thác một ngành duy nhất' }
        ],
        correctAnswer: 'A',
        explanation: 'Môi trường biển không thể chia cắt, ô nhiễm ở một nơi sẽ lan rộng toàn vùng; nếu phát triển đơn ngành sẽ triệt tiêu ngành khác (ví dụ rò rỉ dầu sẽ giết chết tôm cá và phá hủy bãi tắm du lịch).',
        hint: 'Môi trường biển liên thông thống nhất.',
        knowledgeCardId: 'KC-921-1'
      }
    ]
  },
  'G9-L4': {
    lessonId: 'G9-L4',
    grade: 9,
    chapterId: 'G9-C1',
    chapterTitle: 'Chương 1. Địa lí dân cư Việt Nam',
    lessonTitle: 'Bài 4: Thực hành: Tìm hiểu vấn đề việc làm ở địa phương và phân hoá thu nhập theo vùng',
    sgkPageRange: 'Trang 129 – 130',
    pdfPageRange: 'Trang 131 – 132',
    objectives: [
      'Thu thập và xử lí được thông tin về vấn đề việc làm tại địa phương hoặc qua bảng số liệu.',
      'Nhận xét được sự phân hoá thu nhập bình quân đầu người giữa các vùng kinh tế của nước ta.',
      'Đề xuất được một số giải pháp thiết thực nhằm tăng thu nhập và giải quyết việc làm.'
    ],
    knowledgeCards: [
      {
        id: 'KC-904-1',
        cardIndex: 1,
        title: 'Thẻ 1: Sự phân hoá thu nhập theo vùng kinh tế',
        concept: 'Phân hoá thu nhập bình quân đầu người giữa các vùng',
        coreDefinition: 'Thu nhập bình quân đầu người có sự chênh lệch đáng kể giữa các vùng kinh tế của nước ta do trình độ phát triển kinh tế và cơ cấu ngành nghề.',
        keyPoints: [
          'Vùng có thu nhập cao nhất cả nước: Đông Nam Bộ và Đồng bằng sông Hồng (tập trung nhiều khu công nghiệp, đô thị lớn, dịch vụ phát triển).',
          'Vùng có thu nhập thấp hơn: Trung du và miền núi phía Bắc, Tây Nguyên (kinh tế còn phụ thuộc nhiều vào nông nghiệp truyền thống, địa hình hiểm trở).',
          'Xu hướng: Thu nhập bình quân của tất cả các vùng đều tăng theo thời gian, khoảng cách đang từng bước được thu hẹp nhờ chính sách an sinh và đầu tư hạ tầng.'
        ],
        visualExample: 'Bảng số liệu thu nhập bình quân đầu người theo tháng phân theo vùng (SGK tr. 130).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 130, pdfPage: 132, section: 'Mục 2. Phân hoá thu nhập' },
        commonTrapAlert: 'Nhầm lẫn vùng có thu nhập cao nhất: Đông Nam Bộ luôn dẫn đầu cả nước về thu nhập bình quân đầu người.',
        iconName: 'TrendingUp'
      },
      {
        id: 'KC-904-2',
        cardIndex: 2,
        title: 'Thẻ 2: Giải quyết việc làm và nâng cao thu nhập',
        concept: 'Kĩ năng thu thập số liệu và định hướng giải pháp việc làm',
        coreDefinition: 'Giải quyết việc làm tại địa phương đòi hỏi gắn liền với chuyển dịch cơ cấu kinh tế và đào tạo nghề.',
        keyPoints: [
          'Đẩy mạnh công nghiệp hóa, tiểu thủ công nghiệp và dịch vụ ngay tại nông thôn.',
          'Nâng cao trình độ nghề và ứng dụng công nghệ thông tin trong sản xuất.',
          'Thu hút đầu tư doanh nghiệp và khuyến khích xuất khẩu lao động có trình độ cao.'
        ],
        visualExample: 'Sơ đồ các kênh tạo việc làm mới tại địa phương.',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 129, pdfPage: 131, section: 'Mục 1. Tìm hiểu việc làm' },
        commonTrapAlert: 'Tránh đề xuất giải pháp chung chung mà cần bám vào đặc thù kinh tế vùng.',
        iconName: 'Briefcase'
      }
    ],
    mindmap: {
      id: 'mm-904-root',
      label: 'Việc làm & Phân hoá thu nhập',
      summary: 'Đông Nam Bộ dẫn đầu thu nhập | Chênh lệch giữa thành thị & nông thôn | Giải pháp đào tạo nghề và chuyển dịch cơ cấu',
      children: [
        { id: 'mm-904-thunhap', label: 'Phân hoá thu nhập', summary: 'Đông Nam Bộ cao nhất, miền núi thấp hơn' },
        { id: 'mm-904-giaiphap', label: 'Giải pháp việc làm', summary: 'Chuyển dịch cơ cấu, đào tạo nghề, khởi nghiệp' }
      ]
    },
    comparisons: [
      {
        id: 'comp-904-1',
        conceptA: 'Thu nhập vùng Đông Nam Bộ',
        conceptB: 'Thu nhập vùng Trung du và miền núi phía Bắc',
        keyDifferences: [
          { criteria: 'Mức thu nhập', conceptAVal: 'Cao nhất cả nước, gắn với công nghiệp hiện đại và dịch vụ', conceptBVal: 'Thuộc nhóm thấp, gắn với nông lâm nghiệp và địa bàn khó khăn' },
          { criteria: 'Cơ cấu việc làm', conceptAVal: 'Chủ yếu công nghiệp và dịch vụ chất lượng cao', conceptBVal: 'Nông nghiệp và lâm nghiệp chiếm tỉ lệ lớn' }
        ],
        commonConfusion: 'Học sinh hay nhầm vùng có diện tích lớn nhất thì thu nhập cao nhất.',
        memoryRule: 'Đông Nam Bộ là đầu tàu kinh tế -> Thu nhập bình quân đầu người cao nhất.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-904-1',
        questionText: 'Vùng nào có mức thu nhập bình quân đầu người cao nhất nước ta hiện nay?',
        options: [
          { id: 'A', text: 'Đông Nam Bộ' },
          { id: 'B', text: 'Trung du và miền núi phía Bắc' },
          { id: 'C', text: 'Bắc Trung Bộ' },
          { id: 'D', text: 'Tây Nguyên' }
        ],
        correctAnswer: 'A',
        explanation: 'Vùng Đông Nam Bộ tập trung các đô thị phát triển, khu công nghiệp và dịch vụ hiện đại nhất cả nước nên thu nhập bình quân đầu người đứng đầu.',
        hint: 'Khu vực Đông Nam Bộ có TP. Hồ Chí Minh, Bình Dương.',
        knowledgeCardId: 'KC-904-1'
      }
    ]
  },
  'G9-L7': {
    lessonId: 'G9-L7',
    grade: 9,
    chapterId: 'G9-C2',
    chapterTitle: 'Chương 2. Địa lí các ngành kinh tế Việt Nam',
    lessonTitle: 'Bài 7: Thực hành: Viết báo cáo về một mô hình sản xuất nông nghiệp có hiệu quả',
    sgkPageRange: 'Trang 143 – 144',
    pdfPageRange: 'Trang 145 – 146',
    objectives: [
      'Lựa chọn được một mô hình sản xuất nông nghiệp tiêu biểu, hiệu quả cao.',
      'Trình bày được đặc điểm, điều kiện hình thành và quy trình vận hành của mô hình.',
      'Đánh giá được hiệu quả kinh tế, xã hội và môi trường của mô hình sản xuất nông nghiệp.'
    ],
    knowledgeCards: [
      {
        id: 'KC-907-1',
        cardIndex: 1,
        title: 'Thẻ 1: Các mô hình sản xuất nông nghiệp tiên tiến',
        concept: 'Nông nghiệp công nghệ cao, nông nghiệp hữu cơ, kinh tế tuần hoàn',
        coreDefinition: 'Các mô hình nông nghiệp hiện đại tích hợp công nghệ, giảm phát thải, tận dụng phế phụ phẩm để nâng cao giá trị gia tăng.',
        keyPoints: [
          'Mô hình công nghệ cao: Trồng trọt trong nhà lưới, tưới nhỏ giọt Israel, nuôi tôm siêu thâm canh công nghệ Biofloc.',
          'Mô hình kinh tế tuần hoàn (VAC cải tiến): Chất thải chăn nuôi dùng làm khí Biogas và bón cây trồng; phụ phẩm nông nghiệp làm thức ăn cho gia súc.',
          'Mô hình nông nghiệp hữu cơ: Không sử dụng phân bón hóa học và thuốc trừ sâu hóa học, tạo nông sản sạch đạt tiêu chuẩn VietGAP, GlobalGAP.'
        ],
        visualExample: 'Sơ đồ dòng chu chuyển vật chất trong mô hình kinh tế tuần hoàn nông nghiệp.',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 143, pdfPage: 145, section: 'Mục 1. Lựa chọn mô hình' },
        commonTrapAlert: 'Mô hình hiệu quả phải bảo đảm cả 3 trụ cột: Kinh tế, Xã hội và Môi trường sinh thái.',
        iconName: 'Sprout'
      }
    ],
    mindmap: {
      id: 'mm-907-root',
      label: 'Mô hình nông nghiệp hiệu quả',
      summary: 'Công nghệ cao | Tuần hoàn sinh thái | Tiêu chuẩn VietGAP',
      children: [
        { id: 'mm-907-loai', label: 'Các mô hình tiêu biểu', summary: 'Nhà kính, tưới tiết kiệm, nuôi tôm Biofloc' },
        { id: 'mm-907-hieuqua', label: 'Hiệu quả 3 trụ cột', summary: 'Kinh tế cao, tạo việc làm, bảo vệ môi trường' }
      ]
    },
    comparisons: [
      {
        id: 'comp-907-1',
        conceptA: 'Nông nghiệp truyền thống',
        conceptB: 'Nông nghiệp công nghệ cao',
        keyDifferences: [
          { criteria: 'Kĩ thuật và năng suất', conceptAVal: 'Phụ thuộc nhiều vào thiên nhiên, năng suất bấp bênh', conceptBVal: 'Chủ động kiểm soát nhiệt độ, dinh dưỡng, năng suất gấp 3 - 5 lần' },
          { criteria: 'Tác động môi trường', conceptAVal: 'Dễ lạm dụng phân bón vô cơ, ô nhiễm đất và nước', conceptBVal: 'Tiết kiệm nước, giảm phát thải khí nhà kính' }
        ],
        commonConfusion: 'Nhầm nông nghiệp công nghệ cao chỉ dành cho các trang trại khổng lồ.',
        memoryRule: 'Công nghệ cao: Chủ động - Năng suất vượt trội - Thân thiện môi trường.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-907-1',
        questionText: 'Mô hình nông nghiệp tuần hoàn mang lại lợi ích nổi bật nhất nào dưới đây?',
        options: [
          { id: 'A', text: 'Tận dụng phế phụ phẩm, giảm chi phí đầu vào và giảm thiểu ô nhiễm môi trường' },
          { id: 'B', text: 'Sử dụng tối đa thuốc bảo vệ thực vật hóa học' },
          { id: 'C', text: 'Khai thác kiệt quệ tài nguyên đất đai' },
          { id: 'D', text: 'Chỉ sản xuất một loại cây trồng duy nhất' }
        ],
        correctAnswer: 'A',
        explanation: 'Kinh tế tuần hoàn trong nông nghiệp tái sử dụng chất thải và phế phụ phẩm làm phân bón hoặc năng lượng, vừa giảm chi phí vừa bảo vệ môi trường.',
        hint: 'Chu trình khép kín, biến chất thải thành tài nguyên.',
        knowledgeCardId: 'KC-907-1'
      }
    ]
  },
  'G9-L9': {
    lessonId: 'G9-L9',
    grade: 9,
    chapterId: 'G9-C2',
    chapterTitle: 'Chương 2. Địa lí các ngành kinh tế Việt Nam',
    lessonTitle: 'Bài 9: Thực hành: Xác định một số hình thức tổ chức lãnh thổ công nghiệp ở nước ta',
    sgkPageRange: 'Trang 151 – 152',
    pdfPageRange: 'Trang 153 – 154',
    objectives: [
      'Xác định được trên bản đồ công nghiệp các hình thức tổ chức lãnh thổ công nghiệp chủ yếu: Điểm công nghiệp, Khu công nghiệp, Trung tâm công nghiệp.',
      'Phân tích được vai trò của các khu công nghiệp và trung tâm công nghiệp lớn đối với sự phát triển kinh tế.',
      'Đọc và khai thác bảng số liệu về số lượng khu công nghiệp phân theo vùng.'
    ],
    knowledgeCards: [
      {
        id: 'KC-909-1',
        cardIndex: 1,
        title: 'Thẻ 1: Các hình thức tổ chức lãnh thổ công nghiệp',
        concept: 'Điểm CN, Khu CN tập trung, Trung tâm CN',
        coreDefinition: 'Tổ chức lãnh thổ công nghiệp là sự sắp xếp, phối hợp các ngành và cơ sở công nghiệp trên một không gian lãnh thổ nhất định nhằm đạt hiệu quả kinh tế cao nhất.',
        keyPoints: [
          'Điểm công nghiệp: Hình thức đơn giản nhất, gồm 1 - 2 xí nghiệp đơn lẻ, không có ranh giới riêng biệt, phân bố gần nguồn nguyên liệu.',
          'Khu công nghiệp (KCN): Khu vực có ranh giới địa lí xác định, chuyên sản xuất công nghiệp và cung ứng dịch vụ cho sản xuất công nghiệp, không có dân cư sinh sống, hưởng cơ chế ưu đãi đầu tư.',
          'Trung tâm công nghiệp (TTCN): Hình thức tổ chức trình độ cao, gắn liền với các đô thị lớn, gồm nhiều khu công nghiệp và xí nghiệp có mối liên hệ mật thiết, có các ngành chuyên môn hóa (Hà Nội, TP. Hồ Chí Minh, Hải Phòng, Đà Nẵng, Cần Thơ...).'
        ],
        visualExample: 'Bản đồ các trung tâm công nghiệp của Việt Nam với các vòng tròn quy mô lớn, rất lớn, vừa và nhỏ (SGK tr. 149).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 151, pdfPage: 153, section: 'Mục 1 & 2. Thực hành tổ chức lãnh thổ' },
        commonTrapAlert: 'Bẫy đặc điểm: Khu công nghiệp tập trung KHÔNG có dân cư sinh sống (khác với đô thị công nghiệp).',
        iconName: 'Factory'
      }
    ],
    mindmap: {
      id: 'mm-909-root',
      label: 'Tổ chức lãnh thổ công nghiệp',
      summary: 'Điểm CN -> Khu CN tập trung -> Trung tâm CN',
      children: [
        { id: 'mm-909-diem', label: 'Điểm công nghiệp', summary: '1 - 2 xí nghiệp lẻ, gần nguyên liệu' },
        { id: 'mm-909-khu', label: 'Khu công nghiệp', summary: 'Ranh giới rõ ràng, không dân cư sinh sống' },
        { id: 'mm-909-tt', label: 'Trung tâm công nghiệp', summary: 'Gắn với đô thị, ngành chuyên môn hóa sâu' }
      ]
    },
    comparisons: [
      {
        id: 'comp-909-1',
        conceptA: 'Khu công nghiệp',
        conceptB: 'Trung tâm công nghiệp',
        keyDifferences: [
          { criteria: 'Quy mô và gắn kết đô thị', conceptAVal: 'Có ranh giới xác định, không có dân cư sinh sống', conceptBVal: 'Gắn liền với các đô thị vừa và lớn, có dân cư sinh sống' },
          { criteria: 'Cấu trúc', conceptAVal: 'Tập hợp các xí nghiệp công nghiệp trong một khu vực ranh giới', conceptBVal: 'Bao gồm nhiều điểm CN, khu CN và các xí nghiệp bổ trợ' }
        ],
        commonConfusion: 'Học sinh nhầm Khu công nghiệp có dân cư sinh sống.',
        memoryRule: 'Khu công nghiệp: Ranh giới khép kín, không dân cư. Trung tâm công nghiệp: Gắn liền đô thị lớn.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-909-1',
        questionText: 'Đặc điểm nào dưới đây là điểm phân biệt then chốt của Khu công nghiệp tập trung?',
        options: [
          { id: 'A', text: 'Có ranh giới địa lí xác định và không có dân cư sinh sống' },
          { id: 'B', text: 'Chỉ bao gồm một xí nghiệp duy nhất' },
          { id: 'C', text: 'Tập trung chủ yếu dân cư và các trường học' },
          { id: 'D', text: 'Không cần hệ thống xử lí nước thải' }
        ],
        correctAnswer: 'A',
        explanation: 'Theo quy định pháp luật và kiến thức SGK Địa lí 9, Khu công nghiệp là khu vực có ranh giới rõ ràng, chuyên sản xuất công nghiệp và tuyệt đối không có dân cư sinh sống thường trú.',
        hint: 'Ranh giới phân cách và mục đích sản xuất thuần túy.',
        knowledgeCardId: 'KC-909-1'
      }
    ]
  },
  'G9-L11': {
    lessonId: 'G9-L11',
    grade: 9,
    chapterId: 'G9-C2',
    chapterTitle: 'Chương 2. Địa lí các ngành kinh tế Việt Nam',
    lessonTitle: 'Bài 11: Thực hành: Tìm hiểu xu hướng phát triển ngành thương mại, du lịch',
    sgkPageRange: 'Trang 160 – 161',
    pdfPageRange: 'Trang 162 – 163',
    objectives: [
      'Phân tích được xu hướng chuyển đổi số trong ngành thương mại (thương mại điện tử, thanh toán số).',
      'Nhận biết được xu hướng phát triển du lịch xanh, du lịch sinh thái và bền vững ở nước ta.',
      'Khai thác biểu đồ doanh thu thương mại điện tử và lượng khách du lịch quốc tế đến Việt Nam.'
    ],
    knowledgeCards: [
      {
        id: 'KC-911-1',
        cardIndex: 1,
        title: 'Thẻ 1: Xu hướng phát triển thương mại và du lịch số',
        concept: 'Thương mại điện tử, Du lịch xanh, Chuyển đổi số',
        coreDefinition: 'Thương mại và du lịch nước ta đang chuyển mình mạnh mẽ theo hướng số hóa và bền vững.',
        keyPoints: [
          'Thương mại điện tử (E-commerce): Tăng trưởng bùng nổ, mua sắm đa kênh (Omnichannel), thanh toán không dùng tiền mặt qua ví điện tử và ngân hàng số.',
          'Hệ thống siêu thị, trung tâm thương mại hiện đại mở rộng thay thế dần chợ truyền thống tại các đô thị.',
          'Du lịch xanh và bền vững: Phát triển các sản phẩm du lịch sinh thái, du lịch cộng đồng, giảm rác thải nhựa tại các điểm du lịch nổi tiếng (Hạ Long, Phú Quốc, Sa Pa, Hội An...).'
        ],
        visualExample: 'Biểu đồ quy mô thị trường thương mại điện tử B2C Việt Nam tăng trưởng nhanh (SGK tr. 161).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 160, pdfPage: 162, section: 'Mục 1 & 2. Xu hướng phát triển' },
        commonTrapAlert: 'Nhầm lẫn du lịch xanh chỉ là trồng cây: Du lịch xanh bao hàm tiết kiệm năng lượng, bảo vệ di sản và tôn trọng văn hóa bản địa.',
        iconName: 'ShoppingBag'
      }
    ],
    mindmap: {
      id: 'mm-911-root',
      label: 'Xu hướng Thương mại & Du lịch',
      summary: 'Thương mại điện tử bùng nổ | Chợ số hóa | Du lịch xanh và cộng đồng',
      children: [
        { id: 'mm-911-tm', label: 'Thương mại số', summary: 'Mua sắm trực tuyến, thanh toán không dùng tiền mặt' },
        { id: 'mm-911-dl', label: 'Du lịch xanh', summary: 'Bảo vệ môi trường, du lịch sinh thái di sản' }
      ]
    },
    comparisons: [
      {
        id: 'comp-911-1',
        conceptA: 'Thương mại truyền thống',
        conceptB: 'Thương mại điện tử (E-commerce)',
        keyDifferences: [
          { criteria: 'Không gian giao dịch', conceptAVal: 'Tại cửa hàng, chợ vật lí, phụ thuộc vị trí địa lí', conceptBVal: 'Trên nền tảng số, website, ứng dụng không giới hạn không gian' },
          { criteria: 'Phương thức thanh toán', conceptAVal: 'Chủ yếu tiền mặt trực tiếp', conceptBVal: 'Thanh toán trực tuyến, chuyển khoản, ví điện tử' }
        ],
        commonConfusion: 'Học sinh nhầm thương mại điện tử sẽ xóa bỏ hoàn toàn chợ truyền thống.',
        memoryRule: 'Thương mại điện tử: Không giới hạn không gian - Tiện lợi - Thanh toán số.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-911-1',
        questionText: 'Xu hướng nổi bật nhất trong thương mại nội địa của nước ta những năm gần đây là gì?',
        options: [
          { id: 'A', text: 'Sự phát triển mạnh mẽ của thương mại điện tử và thanh toán số' },
          { id: 'B', text: 'Chỉ mua bán bằng hình thức đổi hàng lấy hàng' },
          { id: 'C', text: 'Đóng cửa toàn bộ các siêu thị hiện đại' },
          { id: 'D', text: 'Chấm dứt việc buôn bán hàng hóa qua mạng Internet' }
        ],
        correctAnswer: 'A',
        explanation: 'Thương mại điện tử nước ta có tốc độ tăng trưởng hàng đầu khu vực Đông Nam Á, thay đổi thói quen mua sắm của người dân.',
        hint: 'Mua sắm trực tuyến và thanh toán không tiền mặt.',
        knowledgeCardId: 'KC-911-1'
      }
    ]
  },
  'G9-L15': {
    lessonId: 'G9-L15',
    grade: 9,
    chapterId: 'G9-C3',
    chapterTitle: 'Chương 3. Sự phân hoá lãnh thổ',
    lessonTitle: 'Bài 15: Thực hành: Tìm hiểu vấn đề phòng, chống thiên tai và ứng phó với biến đổi khí hậu ở vùng Bắc Trung Bộ',
    sgkPageRange: 'Trang 178 – 179',
    pdfPageRange: 'Trang 180 – 181',
    objectives: [
      'Xác định được các loại thiên tai thường xảy ra ở vùng Bắc Trung Bộ: bão, lũ quét, sạt lở đất, gió phơn Tây Nam khô nóng, nạn cát bay cát chảy.',
      'Phân tích được nguyên nhân và hậu quả của các thiên tai đối với đời sống và sản xuất.',
      'Trình bày được các giải pháp phòng chống thiên tai và thích ứng với biến đổi khí hậu (trồng rừng phòng hộ đầu nguồn và ven biển, hồ chứa nước).'
    ],
    knowledgeCards: [
      {
        id: 'KC-915-1',
        cardIndex: 1,
        title: 'Thẻ 1: Đặc điểm thiên tai ở vùng Bắc Trung Bộ',
        concept: 'Bão, lũ lụt, sạt lở, gió Tây Nam khô nóng, cát bay cát chảy',
        coreDefinition: 'Bắc Trung Bộ là dải đất hẹp ngang, sườn dốc hướng ra biển nên chịu tác động dữ dội của nhiều loại thiên tai nhiệt đới.',
        keyPoints: [
          'Bão và lũ lụt: Bắc Trung Bộ là tâm bão của cả nước vào các tháng 9, 10, 11; kết hợp dải hội tụ nhiệt đới và địa hình đón gió gây mưa lớn dồn dập, lũ quét sạt lở đất ở miền núi và ngập lụt ven biển.',
          'Gió phơn Tây Nam (gió Lào): Khô nóng gay gắt vào đầu mùa hạ khi vượt qua dãy Trường Sơn Bắc gây hạn hán và nguy cơ cháy rừng cao.',
          'Hiện tượng cát bay, cát chảy lấn chiếm đồng ruộng và làng mạc ở vùng cồn cát ven biển.'
        ],
        visualExample: 'Hình ảnh sạt lở đất trên sườn dốc miền núi Bắc Trung Bộ và rừng ngập mặn chắn sóng ven biển.',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 178, pdfPage: 180, section: 'Mục 1. Thiên tai Bắc Trung Bộ' },
        commonTrapAlert: 'Gió phơn Tây Nam không mang mưa mà gây khô nóng tột độ cho sườn Đông Trường Sơn.',
        iconName: 'AlertTriangle'
      },
      {
        id: 'KC-915-2',
        cardIndex: 2,
        title: 'Thẻ 2: Giải pháp phòng chống và ứng phó biến đổi khí hậu',
        concept: 'Rừng phòng hộ đầu nguồn, rừng phi lao chắn cát, hồ thủy lợi',
        coreDefinition: 'Bảo vệ và phát triển rừng là giải pháp then chốt để giảm nhẹ thiên tai tại Bắc Trung Bộ.',
        keyPoints: [
          'Trồng và bảo vệ rừng phòng hộ đầu nguồn ở miền núi phía tây để giữ đất, điều tiết dòng chảy, giảm nguy cơ lũ quét và sạt lở đất.',
          'Trồng dải rừng phi lao phòng hộ ven biển nhằm chắn gió, ngăn chặn nạn cát bay cát chảy lấn sâu vào đồng ruộng làng mạc.',
          'Quy hoạch các hồ chứa thủy lợi (như hồ Tả Trạch, Cửa Đạt...) điều tiết nước mùa lũ và cung cấp nước tưới chống hạn vào mùa khô phơn.'
        ],
        visualExample: 'Mô hình dải rừng phi lao phòng hộ chắn cát duyên hải miền Trung (SGK tr. 179).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 179, pdfPage: 181, section: 'Mục 2. Giải pháp ứng phó' },
        commonTrapAlert: 'Cần phân biệt rõ: Rừng phi lao chắn cát ở ven biển; rừng đầu nguồn giữ nước ở vùng núi.',
        iconName: 'Shield'
      }
    ],
    mindmap: {
      id: 'mm-915-root',
      label: 'Thiên tai & Ứng phó Bắc Trung Bộ',
      summary: 'Bão lũ, gió Lào, cát bay | Giải pháp rừng đầu nguồn và rừng chắn cát | Hồ thủy lợi điều tiết',
      children: [
        { id: 'mm-915-tt', label: 'Các loại thiên tai', summary: 'Bão lụt tháng 9-11, phơn Tây Nam khô nóng, cát lấn' },
        { id: 'mm-915-gp', label: 'Giải pháp then chốt', summary: 'Rừng phòng hộ đầu nguồn & rừng phi lao ven biển' }
      ]
    },
    comparisons: [
      {
        id: 'comp-915-1',
        conceptA: 'Rừng phòng hộ đầu nguồn',
        conceptB: 'Rừng phòng hộ chắn cát ven biển (phi lao)',
        keyDifferences: [
          { criteria: 'Vị trí phân bố', conceptAVal: 'Vùng đồi núi cao phía tây của Bắc Trung Bộ', conceptBVal: 'Dọc dải cồn cát ven biển phía đông' },
          { criteria: 'Tác dụng chủ yếu', conceptAVal: 'Giữ đất, cắt lũ, chống xói mòn lũ quét', conceptBVal: 'Chắn gió bão, ngăn nạn cát bay cát chảy lấn làng mạc' }
        ],
        commonConfusion: 'Học sinh hay nhầm vị trí và vai trò giữa 2 loại rừng phòng hộ này.',
        memoryRule: 'Đầu nguồn giữ nước chống lũ; Ven biển chắn cát ngăn bão.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-915-1',
        questionText: 'Để ngăn chặn hiện tượng cát bay, cát chảy lấn chiếm đồng ruộng ở dải ven biển Bắc Trung Bộ, biện pháp hiệu quả nhất là gì?',
        options: [
          { id: 'A', text: 'Trồng rừng chắn cát (như rừng phi lao) dọc ven biển' },
          { id: 'B', text: 'Đắp đê bê tông cao hàng chục mét trên bãi biển' },
          { id: 'C', text: 'Khai thác triệt để toàn bộ cát ven bờ' },
          { id: 'D', text: 'Phá bỏ các cồn cát tự nhiên' }
        ],
        correctAnswer: 'A',
        explanation: 'Dải rừng phi lao chắn cát có bộ rễ giữ cát, tán lá cản gió mạnh từ biển thổi vào, chặn đứng quá trình di chuyển của cát lấn vào nội đồng.',
        hint: 'Biện pháp sinh học tự nhiên chắn gió ven biển.',
        knowledgeCardId: 'KC-915-2'
      }
    ]
  },
  'G9-L18': {
    lessonId: 'G9-L18',
    grade: 9,
    chapterId: 'G9-C3',
    chapterTitle: 'Chương 3. Sự phân hoá lãnh thổ',
    lessonTitle: 'Bài 18: Thực hành: Phân tích ý nghĩa của việc tăng cường kết nối liên vùng đối với sự phát triển của vùng Đông Nam Bộ',
    sgkPageRange: 'Trang 191 – 192',
    pdfPageRange: 'Trang 193 – 194',
    objectives: [
      'Phân tích được tầm quan trọng của hệ thống giao thông huyết mạch kết nối Đông Nam Bộ với các vùng lân cận.',
      'Đánh giá được mối quan hệ hợp tác kinh tế giữa Đông Nam Bộ với Tây Nguyên, Đồng bằng sông Cửu Long và Duyên hải Nam Trung Bộ.',
      'Hiểu được vai trò của cụm cảng Cái Mép – Thị Vải và sân bay quốc tế Long Thành trong mạng lưới logistics quốc tế.'
    ],
    knowledgeCards: [
      {
        id: 'KC-918-1',
        cardIndex: 1,
        title: 'Thẻ 1: Vai trò đầu tàu kết nối liên vùng của Đông Nam Bộ',
        concept: 'Hạ tầng cao tốc, Cảng Cái Mép - Thị Vải, Sân bay Long Thành',
        coreDefinition: 'Đông Nam Bộ là trung tâm kinh tế năng động nhất cả nước, kết nối chặt chẽ với các vùng qua mạng lưới hạ tầng hiện đại.',
        keyPoints: [
          'Kết nối với Đồng bằng sông Cửu Long: Cung cấp nguồn nông sản, thủy sản dồi dào cho công nghiệp chế biến và tiêu thụ của Đông Nam Bộ; ngược lại Đông Nam Bộ cung cấp máy móc, vật tư nông nghiệp và dịch vụ tài chính.',
          'Kết nối với Tây Nguyên: Đông Nam Bộ tiếp nhận nguyên liệu cây công nghiệp (cà phê, cao su, hồ tiêu) và cung cấp dịch vụ logistics xuất khẩu qua cụm cảng biển.',
          'Hạ tầng đột phá: Cao tốc Bắc – Nam phía Đông, đường vành đai TP. Hồ Chí Minh, cảng nước sâu Cái Mép – Thị Vải và sân bay Long Thành tạo hành lang kinh tế xuyên suốt mở ra thế giới.'
        ],
        visualExample: 'Sơ đồ mạng lưới kết nối giao thông liên vùng của vùng Đông Nam Bộ (SGK tr. 191).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 191, pdfPage: 193, section: 'Mục 1 & 2. Ý nghĩa liên kết vùng' },
        commonTrapAlert: 'Kết nối liên vùng là mối quan hệ hỗ trợ hai chiều, cùng thúc đẩy phát triển chứ không phải một chiều.',
        iconName: 'Network'
      }
    ],
    mindmap: {
      id: 'mm-918-root',
      label: 'Kết nối liên vùng Đông Nam Bộ',
      summary: 'Đầu tàu kinh tế | Kết nối ĐBSCL & Tây Nguyên | Cảng Cái Mép & Sân bay Long Thành',
      children: [
        { id: 'mm-918-dbscl', label: 'Với ĐBSCL', summary: 'Lương thực thực phẩm <-> Công nghiệp hỗ trợ' },
        { id: 'mm-918-tn', label: 'Với Tây Nguyên', summary: 'Nông sản cây công nghiệp <-> Xuất khẩu logistics' },
        { id: 'mm-918-hatang', label: 'Hạ tầng kết nối', summary: 'Cao tốc, vành đai, Cái Mép - Thị Vải, Long Thành' }
      ]
    },
    comparisons: [
      {
        id: 'comp-918-1',
        conceptA: 'Đông Nam Bộ hỗ trợ các vùng',
        conceptB: 'Các vùng hỗ trợ Đông Nam Bộ',
        keyDifferences: [
          { criteria: 'Hàng hóa / Nguồn lực cung cấp', conceptAVal: 'Vốn đầu tư, công nghệ, hàng công nghiệp tiêu dùng, dịch vụ cảng biển', conceptBVal: 'Nông thủy sản, nguyên liệu thô, điện năng, nguồn lao động dồi dào' },
          { criteria: 'Vai trò', conceptAVal: 'Động lực lôi kéo, lan tỏa công nghệ và dịch vụ', conceptBVal: 'Hậu phương cung cấp tài nguyên, lương thực và thị trường tiêu thụ' }
        ],
        commonConfusion: 'Học sinh nhầm Đông Nam Bộ tự cung tự cấp được toàn bộ nguồn nông sản cho chế biến.',
        memoryRule: 'Đông Nam Bộ: Đầu tàu công nghệ, logistics; Vùng lân cận: Hậu phương nguyên liệu lương thực.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-918-1',
        questionText: 'Việc xây dựng cảng nước sâu Cái Mép – Thị Vải và sân bay quốc tế Long Thành có ý nghĩa chiến lược gì đối với vùng Đông Nam Bộ?',
        options: [
          { id: 'A', text: 'Nâng cao năng lực logistics quốc tế, đưa vùng trở thành trung tâm giao thương toàn cầu' },
          { id: 'B', text: 'Chỉ phục vụ cho việc vận chuyển cát đá xây dựng' },
          { id: 'C', text: 'Hạn chế tàu thuyền nước ngoài vào Việt Nam' },
          { id: 'D', text: 'Thay thế hoàn toàn ngành sản xuất công nghiệp của vùng' }
        ],
        correctAnswer: 'A',
        explanation: 'Cảng nước sâu Cái Mép – Thị Vải có thể tiếp nhận tàu container lớn nhất thế giới đi thẳng sang Âu - Mỹ, kết hợp sân bay Long Thành tạo cực trung chuyển hàng không và hàng hải tầm cỡ quốc tế.',
        hint: 'Cửa ngõ hội nhập thương mại và logistics xuyên lục địa.',
        knowledgeCardId: 'KC-918-1'
      }
    ]
  },
  'G9-L20': {
    lessonId: 'G9-L20',
    grade: 9,
    chapterId: 'G9-C3',
    chapterTitle: 'Chương 3. Sự phân hoá lãnh thổ',
    lessonTitle: 'Bài 20: Thực hành: Tìm hiểu về tác động của biến đổi khí hậu đối với vùng Đồng bằng sông Cửu Long',
    sgkPageRange: 'Trang 200 – 201',
    pdfPageRange: 'Trang 202 – 203',
    objectives: [
      'Xác định được các biểu hiện chính của biến đổi khí hậu tại Đồng bằng sông Cửu Long: nước biển dâng, xâm nhập mặn, sạt lở bờ sông bờ biển, hạn hán mùa khô.',
      'Phân tích được hậu quả của xâm nhập mặn đối với nông nghiệp, nuôi trồng thủy sản và nước sinh hoạt.',
      'Trình bày được các giải pháp thích ứng thông minh ("sống chung với mặn", chuyển đổi cơ cấu mùa vụ, trữ nước ngọt).'
    ],
    knowledgeCards: [
      {
        id: 'KC-920-1',
        cardIndex: 1,
        title: 'Thẻ 1: Tác động của Biến đổi khí hậu tại ĐBSCL',
        concept: 'Xâm nhập mặn, khô hạn, sạt lở bờ sông bờ biển, nước biển dâng',
        coreDefinition: 'Đồng bằng sông Cửu Long có địa hình thấp trũng nên là một trong những đồng bằng chịu tổn thương nặng nề nhất thế giới do biến đổi khí hậu.',
        keyPoints: [
          'Xâm nhập mặn: Mùa khô dòng chảy sông Mê Công suy giảm, thủy triều đẩy nước mặn vào sâu các cửa sông chính từ 50 - 90 km làm nhiễm mặn đất nông nghiệp và thiếu nước ngọt sinh hoạt.',
          'Hạn hán và sụt lún: Khai thác nước ngầm quá mức kết hợp mùa khô kéo dài làm đất bị sụt lún nhanh hơn tốc độ dâng của nước biển.',
          'Sạt lở bờ sông, bờ biển diễn ra nghiêm trọng làm mất đất đai, nhà cửa và các dải rừng ngập mặn chắn sóng.'
        ],
        visualExample: 'Bản đồ dự báo nguy cơ ngập do nước biển dâng và ranh giới mặn 4‰ tại ĐBSCL (SGK tr. 200).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 200, pdfPage: 202, section: 'Mục 1. Biểu hiện và tác động' },
        commonTrapAlert: 'Xâm nhập mặn nghiêm trọng nhất vào mùa khô (tháng 2 - 5) chứ không phải mùa lũ.',
        iconName: 'Droplet'
      },
      {
        id: 'KC-920-2',
        cardIndex: 2,
        title: 'Thẻ 2: Giải pháp thích ứng thông minh "Thuận thiên"',
        concept: 'Chủ động thích ứng, mô hình Lúa - Tôm, công trình cống ngăn mặn',
        coreDefinition: 'Chuyển từ tư duy "chống chọi" sang chủ động thích ứng theo nguyên tắc "thuận thiên" tại vùng châu thổ.',
        keyPoints: [
          'Chuyển đổi cơ cấu cây trồng, vật nuôi: Áp dụng mô hình lúa - tôm, lúa - cá; mùa mưa trồng lúa ngọt, mùa khô mặn chuyển sang nuôi tôm nước lợ mang lại giá trị kinh tế cao.',
          'Xây dựng các công trình kiểm soát mặn ngọt: Tiêu biểu là siêu cống Cái Lớn – Cái Bé giúp ngăn mặn, giữ ngọt, điều tiết nguồn nước liên vùng.',
          'Trữ nước ngọt quy mô hộ gia đình và hồ chứa tự nhiên; bảo vệ và trồng lại rừng ngập mặn phòng hộ ven biển.'
        ],
        visualExample: 'Hình ảnh cống thủy lợi ngăn mặn Cái Lớn – Cái Bé và mô hình sản xuất sinh thái Lúa – Tôm (SGK tr. 201).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 9 – Kết nối tri thức', bookPage: 201, pdfPage: 203, section: 'Mục 2. Giải pháp thích ứng' },
        commonTrapAlert: 'Tránh quan niệm chỉ có ngăn mặn triệt để; vùng ven biển tận dụng nước lợ để phát triển nuôi trồng thủy sản giá trị cao.',
        iconName: 'Compass'
      }
    ],
    mindmap: {
      id: 'mm-920-root',
      label: 'BĐKH tại Đồng bằng sông Cửu Long',
      summary: 'Xâm nhập mặn & sạt lở mùa khô | Nước biển dâng | Mô hình thích ứng Lúa - Tôm & Cống Cái Lớn - Cái Bé',
      children: [
        { id: 'mm-920-td', label: 'Tác động chính', summary: 'Mặn vào sâu 50-90km, sụt lún, thiếu nước sinh hoạt' },
        { id: 'mm-920-tuongthien', label: 'Giải pháp thuận thiên', summary: 'Mô hình Lúa - Tôm luân canh, bảo vệ rừng ngập mặn' },
        { id: 'mm-920-congtrinh', label: 'Giải pháp công trình', summary: 'Cống Cái Lớn - Cái Bé điều tiết mặn ngọt' }
      ]
    },
    comparisons: [
      {
        id: 'comp-920-1',
        conceptA: 'Chống mặn triệt để (ngăn mặn hoàn toàn)',
        conceptB: 'Chủ động thích ứng (thuận thiên)',
        keyDifferences: [
          { criteria: 'Tư duy ứng phó', conceptAVal: 'Coi mặn là kẻ thù, tốn kém chi phí ngăn chặn mọi nơi', conceptBVal: 'Tôn trọng quy luật tự nhiên, coi nước mặn - lợ là tài nguyên để nuôi trồng thủy sản' },
          { criteria: 'Hiệu quả kinh tế', conceptAVal: 'Độc canh cây lúa dễ rủi ro khi thiếu nước ngọt', conceptBVal: 'Đa dạng sinh kế: Lúa - Tôm, Tôm - Rừng, thu nhập nông dân cao gấp nhiều lần' }
        ],
        commonConfusion: 'Học sinh nhầm nhiễm mặn luôn luôn là thiệt hại mà không biết mô hình thích ứng lúa - tôm mang lại lợi nhuận cao.',
        memoryRule: 'Thuận thiên: Nước ngọt trồng lúa mùa mưa, nước mặn nuôi tôm mùa khô.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-920-1',
        questionText: 'Mô hình sản xuất nông nghiệp thích ứng hiệu quả với tình trạng xâm nhập mặn theo mùa ở vùng ven biển ĐBSCL là gì?',
        options: [
          { id: 'A', text: 'Mô hình luân canh một vụ lúa (mùa ngọt) – một vụ tôm (mùa mặn)' },
          { id: 'B', text: 'Ép trồng lúa 3 vụ quanh năm bằng mọi giá' },
          { id: 'C', text: 'Bỏ hoang toàn bộ đất đai trong cả năm' },
          { id: 'D', text: 'Chặt phá hết rừng ngập mặn ven biển' }
        ],
        correctAnswer: 'A',
        explanation: 'Mô hình Lúa – Tôm là sáng kiến tiêu biểu của ĐBSCL: Mùa mưa có lũ nước ngọt thì gieo cấy lúa; mùa khô nước biển xâm nhập thì đưa nước lợ vào nuôi tôm, vừa thích ứng vừa cho giá trị kinh tế rất cao.',
        hint: 'Biến bất lợi xâm nhập mặn thành thời cơ nuôi thủy sản nước lợ.',
        knowledgeCardId: 'KC-920-2'
      }
    ]
  }
};

