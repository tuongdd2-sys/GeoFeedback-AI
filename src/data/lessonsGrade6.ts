import { GeoLessonData } from '../types';

export const LESSONS_GRADE_6: Record<string, GeoLessonData> = {
  'G6-L0': {
    lessonId: 'G6-L0',
    grade: 6,
    chapterId: 'G6-C0',
    chapterTitle: 'Mở đầu',
    lessonTitle: 'Bài mở đầu: Những điều kì thú của môn Địa lí',
    sgkPageRange: 'Trang 98 – 101',
    pdfPageRange: 'Trang 100 – 103',
    objectives: [
      'Nêu được đối tượng và ý nghĩa thiết thực của việc học môn Địa lí đối với đời sống.',
      'Khám phá được những điều kì thú của Trái Đất và môi trường xung quanh.',
      'Rèn luyện các kĩ năng địa lí cơ bản: quan sát tranh ảnh, bản đồ và liên hệ thực tiễn.'
    ],
    knowledgeCards: [
      {
        id: 'KC-600-1',
        cardIndex: 1,
        title: 'Thẻ 1: Đối tượng và ý nghĩa môn Địa lí',
        concept: 'Bề mặt Trái Đất, mối quan hệ giữa con người và thiên nhiên',
        coreDefinition: 'Môn Địa lí nghiên cứu các hiện tượng tự nhiên và hoạt động kinh tế – xã hội trên bề mặt Trái Đất.',
        keyPoints: [
          'Giải thích các hiện tượng tự nhiên kì thú: vì sao có ngày và đêm, các mùa trong năm, núi lửa, động đất, triều cường.',
          'Hiểu cách thức con người sống hòa hợp với thiên nhiên và khai thác hợp lí tài nguyên.',
          'Hình thành kĩ năng thiết yếu: đọc bản đồ, định vị phương hướng, quan sát hiện tượng thời tiết để tự bảo vệ bản thân.'
        ],
        visualExample: 'Hình ảnh Trái Đất xanh nhìn từ vệ tinh không gian (SGK tr. 99).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 99, pdfPage: 101, section: 'Mục 1. Ý nghĩa môn Địa lí' },
        commonTrapAlert: 'Môn Địa lí không phải môn học vẹt địa danh, mà là môn khoa học khám phá quy luật tự nhiên và rèn luyện kĩ năng thực tiễn.',
        iconName: 'Compass'
      }
    ],
    mindmap: {
      id: 'mm-600-root',
      label: 'Khám phá Địa lí 6',
      summary: 'Khám phá Trái Đất | Hiểu quy luật tự nhiên | Kĩ năng đọc bản đồ | Chung sống bền vững với thiên nhiên',
      children: [
        { id: 'mm-600-kithu', label: 'Hiện tượng kì thú', summary: 'Ngày đêm, mùa, bão lụt, núi lửa' },
        { id: 'mm-600-kinang', label: 'Kĩ năng địa lí', summary: 'Đọc bản đồ, định vị phương hướng' }
      ]
    },
    comparisons: [
      {
        id: 'comp-600-1',
        conceptA: 'Học Địa lí truyền thống',
        conceptB: 'Học Địa lí hiện đại (phát triển năng lực)',
        keyDifferences: [
          { criteria: 'Mục tiêu', conceptAVal: 'Ghi nhớ số liệu và tên địa danh máy móc', conceptBVal: 'Hiểu nguyên nhân hiện tượng, đọc bản đồ và ứng dụng vào cuộc sống thực tế' },
          { criteria: 'Kĩ năng', conceptAVal: 'Chủ yếu đọc chép', conceptBVal: 'Khám phá qua biểu đồ, lược đồ và thực địa' }
        ],
        commonConfusion: 'Học sinh nhầm môn Địa lí chỉ cần học thuộc lòng.',
        memoryRule: 'Địa lí là khoa học thực tiễn: Quan sát - Giải thích - Ứng dụng.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-600-1',
        questionText: 'Môn Địa lí lớp 6 giúp học sinh hình thành kĩ năng thực tiễn quan trọng nào dưới đây?',
        options: [
          { id: 'A', text: 'Kĩ năng sử dụng bản đồ, định hướng và giải thích các hiện tượng thiên nhiên' },
          { id: 'B', text: 'Kĩ năng giải phương trình bậc hai' },
          { id: 'C', text: 'Kĩ năng phối màu hội họa' },
          { id: 'D', text: 'Kĩ năng lập trình máy tính' }
        ],
        correctAnswer: 'A',
        explanation: 'Địa lí rèn luyện năng lực sử dụng bản đồ, xác định vị trí và phương hướng, hiểu các hiện tượng tự nhiên quanh ta.',
        hint: 'Kĩ năng gắn với bản đồ và định hướng không gian.',
        knowledgeCardId: 'KC-600-1'
      }
    ]
  },
  'G6-L1': {
    lessonId: 'G6-L1',
    grade: 6,
    chapterId: 'G6-C1',
    chapterTitle: 'Chương 1. Bản đồ – Phương tiện thể hiện bề mặt Trái Đất',
    lessonTitle: 'Bài 1: Hệ thống kinh, vĩ tuyến. Tọa độ địa lí',
    sgkPageRange: 'Trang 102 – 105',
    pdfPageRange: 'Trang 104 – 107',
    objectives: [
      'Xác định được kinh tuyến, vĩ tuyến, kinh tuyến gốc (0°), vĩ tuyến gốc (Xích đạo) và các bán cầu.',
      'Hiểu được quy ước ghi tọa độ địa lí của một điểm trên bản đồ và quả Địa Cầu.',
      'Thực hành xác định tọa độ địa lí đúng chuẩn: Vĩ độ ghi trước, Kinh độ ghi sau.'
    ],
    knowledgeCards: [
      {
        id: 'KC-601-1',
        cardIndex: 1,
        title: 'Thẻ 1: Khái niệm Kinh tuyến và Vĩ tuyến',
        concept: 'Kinh tuyến là nửa đường tròn bằng nhau; Vĩ tuyến là vòng tròn vuông góc',
        coreDefinition: 'Kinh tuyến nối hai cực; Vĩ tuyến vuông góc với kinh tuyến, lớn nhất ở Xích đạo.',
        keyPoints: [
          'Kinh tuyến: Các nửa đường tròn nối liền cực Bắc và cực Nam trên bề mặt quả Địa Cầu. Tất cả các kinh tuyến đều có độ dài bằng nhau.',
          'Vĩ tuyến: Các vòng tròn nằm ngang vuông góc với kinh tuyến. Vĩ tuyến có độ dài khác nhau, dài nhất ở Xích đạo (40 075 km) và nhỏ dần về hai cực.',
          'Kinh tuyến gốc (0°): Đi qua đài thiên văn Grin-uých (Luân Đôn, nước Anh).',
          'Vĩ tuyến gốc (0° - Xích đạo): Vòng tròn lớn nhất chia Trái Đất thành Bán cầu Bắc và Bán cầu Nam.'
        ],
        visualExample: 'Kinh tuyến nối dọc Bắc - Nam; Vĩ tuyến nằm ngang song song Xích đạo (SGK tr. 102).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 102, pdfPage: 104, section: 'Mục 1. Hệ thống kinh vĩ tuyến' },
        commonTrapAlert: 'Kinh tuyến là "nửa đường tròn" bằng nhau, còn vĩ tuyến là "vòng tròn" có độ dài khác nhau.',
        iconName: 'Globe'
      },
      {
        id: 'KC-601-2',
        cardIndex: 2,
        title: 'Thẻ 2: Tọa độ địa lí và quy tắc ghi chuẩn',
        concept: 'Vĩ độ trước, Kinh độ sau; Tọa độ điểm A (Vĩ độ, Kinh độ)',
        coreDefinition: 'Tọa độ địa lí của một điểm là kinh độ và vĩ độ của điểm đó trên bản đồ.',
        keyPoints: [
          'Vĩ độ: Khoảng cách tính bằng số độ từ vĩ tuyến đi qua điểm đó đến Xích đạo (Vĩ độ Bắc: B; Vĩ độ Nam: N).',
          'Kinh độ: Khoảng cách tính bằng số độ từ kinh tuyến đi qua điểm đó đến kinh tuyến gốc (Kinh độ Đông: Đ; Kinh độ Tây: T).',
          'Quy tắc ghi chuẩn: Luôn ghi VĨ ĐỘ TRƯỚC, KINH ĐỘ SAU. Ví dụ: Điểm C (20°B, 105°Đ).'
        ],
        visualExample: 'Lưới kinh vĩ tuyến và cách đọc tọa độ các điểm A, B, C (SGK tr. 104).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 104, pdfPage: 106, section: 'Mục 2. Tọa độ địa lí' },
        commonTrapAlert: 'Bẫy thường gặp: Ghi ngược Kinh độ trước Vĩ độ sau; nhầm Xích đạo chia bán cầu Đông - Tây.',
        iconName: 'Compass'
      }
    ],
    mindmap: {
      id: 'mm-601-root',
      label: 'Kinh vĩ tuyến & Tọa độ',
      summary: 'Kinh tuyến (dọc, bằng nhau) | Vĩ tuyến (ngang, Xích đạo lớn nhất) | Quy tắc tọa độ: Vĩ độ trước, Kinh độ sau',
      children: [
        { id: 'mm-601-kinh', label: 'Kinh tuyến 0°', summary: 'Đài Grin-uých Luân Đôn, chia Bán cầu Đông - Tây' },
        { id: 'mm-601-vi', label: 'Vĩ tuyến 0° (Xích đạo)', summary: 'Vòng tròn lớn nhất, chia Bán cầu Bắc - Nam' },
        { id: 'mm-601-toado', label: 'Tọa độ địa lí', summary: 'Điểm (Vĩ độ, Kinh độ)' }
      ]
    },
    comparisons: [
      {
        id: 'comp-601-1',
        conceptA: 'Kinh tuyến',
        conceptB: 'Vĩ tuyến',
        keyDifferences: [
          { criteria: 'Hình dạng hình học', conceptAVal: 'Các nửa đường tròn nối liền hai cực', conceptBVal: 'Các vòng tròn khép kín vuông góc với kinh tuyến' },
          { criteria: 'Độ dài', conceptAVal: 'Tất cả các kinh tuyến đều bằng nhau (~20 000 km)', conceptBVal: 'Khác nhau: dài nhất ở Xích đạo, nhỏ dần về hai cực' },
          { criteria: 'Đường gốc 0°', conceptAVal: 'Kinh tuyến 0° đi qua đài thiên văn Greenwich', conceptBVal: 'Vĩ tuyến 0° là đường Xích đạo' }
        ],
        commonConfusion: 'Học sinh hay nhầm kinh tuyến là vòng tròn khép kín hoặc nhầm vĩ tuyến dài bằng nhau.',
        memoryRule: 'Kinh tuyến: Dọc nối 2 cực, dài bằng nhau. Vĩ tuyến: Ngang song song Xích đạo.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-601-1',
        questionText: 'Cách ghi tọa độ địa lí của một điểm nào dưới đây là đúng quy chuẩn địa lí?',
        options: [
          { id: 'A', text: 'A (20°B, 105°Đ)' },
          { id: 'B', text: 'A (105°Đ, 20°B)' },
          { id: 'C', text: 'A (105°B, 20°Đ)' },
          { id: 'D', text: 'A (Kinh độ 105°, Vĩ độ 20°)' }
        ],
        correctAnswer: 'A',
        explanation: 'Quy chuẩn khoa học địa lí bắt buộc phải ghi Vĩ độ trước (20°B) rồi mới đến Kinh độ sau (105°Đ).',
        hint: 'Vĩ độ trước, Kinh độ sau.',
        knowledgeCardId: 'KC-601-2'
      }
    ]
  },
  'G6-L2': {
    lessonId: 'G6-L2',
    grade: 6,
    chapterId: 'G6-C1',
    chapterTitle: 'Chương 1. Bản đồ – Phương tiện thể hiện bề mặt Trái Đất',
    lessonTitle: 'Bài 2: Bản đồ. Một số lưới kinh, vĩ tuyến. Phương hướng trên bản đồ',
    sgkPageRange: 'Trang 106 – 109',
    pdfPageRange: 'Trang 108 – 111',
    objectives: [
      'Hiểu được bản đồ là hình vẽ thu nhỏ tương đối chính xác của bề mặt Trái Đất lên mặt phẳng.',
      'Nhận biết được một số dạng lưới kinh vĩ tuyến trên các phép chiếu bản đồ khác nhau.',
      'Xác định được 8 hướng chính trên bản đồ dựa vào lưới kinh vĩ tuyến hoặc kim chỉ nam.'
    ],
    knowledgeCards: [
      {
        id: 'KC-602-1',
        cardIndex: 1,
        title: 'Thẻ 1: Khái niệm bản đồ và các dạng lưới kinh vĩ tuyến',
        concept: 'Bản đồ thu nhỏ trên mặt phẳng, Phép chiếu hình bản đồ',
        coreDefinition: 'Bản đồ là hình vẽ thu nhỏ tương đối chính xác bề mặt Trái Đất hoặc một bộ phận bề mặt Trái Đất lên mặt phẳng theo quy tắc toán học.',
        keyPoints: [
          'Vì bề mặt Trái Đất hình cầu nên khi chiếu lên mặt phẳng phẳng luôn có sự sai số nhất định về diện tích, góc hoặc khoảng cách.',
          'Một số dạng lưới: Kinh vĩ tuyến là đường thẳng song song; Kinh vĩ tuyến là đường cong; Kinh tuyến nan quạt.',
          'Các yếu tố của bản đồ: Tên bản đồ, tỉ lệ, bảng chú giải, phương hướng và hệ thống kinh vĩ tuyến.'
        ],
        visualExample: 'Hình vẽ quả địa cầu được trải phẳng ra bản đồ thế giới (SGK tr. 106).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 106, pdfPage: 108, section: 'Mục 1. Khái niệm bản đồ' },
        commonTrapAlert: 'Không có bản đồ phẳng nào chính xác 100% mọi yếu tố, luôn có biến dạng ở các mức độ khác nhau.',
        iconName: 'Map'
      },
      {
        id: 'KC-602-2',
        cardIndex: 2,
        title: 'Thẻ 2: Xác định 8 hướng chính trên bản đồ',
        concept: 'Bắc, Nam, Đông, Tây và 4 hướng trung gian; Quy tắc kinh vĩ tuyến',
        coreDefinition: 'Xác định phương hướng trên bản đồ dựa vào lưới kinh vĩ tuyến hoặc mũi tên chỉ hướng Bắc.',
        keyPoints: [
          'Dựa vào kinh tuyến: Đầu phía trên chỉ hướng Bắc, đầu phía dưới chỉ hướng Nam.',
          'Dựa vào vĩ tuyến: Bên phải chỉ hướng Đông, bên trái chỉ hướng Tây.',
          'Tám hướng chính: Bắc, Nam, Đông, Tây; Đông Bắc, Đông Nam, Tây Bắc, Tây Nam.',
          'Với bản đồ không có kinh vĩ tuyến: Dựa vào mũi tên chỉ hướng Bắc (kim chỉ nam) để định vị.'
        ],
        visualExample: 'Hoa gió 8 hướng với chữ N (North - Bắc) ở trên cùng (SGK tr. 108).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 108, pdfPage: 110, section: 'Mục 2. Phương hướng' },
        commonTrapAlert: 'Trên bản đồ có kinh vĩ tuyến dạng đường cong, phải uốn lượn theo chiều cong của kinh vĩ tuyến để tìm hướng.',
        iconName: 'Navigation'
      }
    ],
    mindmap: {
      id: 'mm-602-root',
      label: 'Bản đồ & Phương hướng',
      summary: 'Hình vẽ thu nhỏ lên mặt phẳng | Lưới kinh vĩ tuyến | 8 hướng: Bắc (trên), Nam (dưới), Đông (phải), Tây (trái)',
      children: [
        { id: 'mm-602-khainiem', label: 'Khái niệm bản đồ', summary: 'Thu nhỏ theo quy tắc toán học, có biến dạng chiếu' },
        { id: 'mm-602-huong', label: '8 Hướng chính', summary: 'Bắc - Nam dọc kinh tuyến, Đông - Tây ngang vĩ tuyến' }
      ]
    },
    comparisons: [
      {
        id: 'comp-602-1',
        conceptA: 'Bản đồ có lưới kinh vĩ tuyến',
        conceptB: 'Bản đồ không có lưới kinh vĩ tuyến',
        keyDifferences: [
          { criteria: 'Cách xác định hướng', conceptAVal: 'Đầu trên kinh tuyến là Bắc, đầu dưới là Nam; phải là Đông, trái là Tây', conceptBVal: 'Phải dựa vào mũi tên chỉ hướng Bắc (kim chỉ nam) vẽ ở góc bản đồ' },
          { criteria: 'Độ chính xác tọa độ', conceptAVal: 'Đọc được tọa độ số học chính xác', conceptBVal: 'Chỉ xác định được vị trí tương đối' }
        ],
        commonConfusion: 'Học sinh nhầm mọi bản đồ đều mặc định phía trên là hướng Bắc mà không kiểm tra kim chỉ nam.',
        memoryRule: 'Kinh tuyến: Trên Bắc - Dưới Nam. Vĩ tuyến: Trái Tây - Phải Đông.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-602-1',
        questionText: 'Trên bản đồ có lưới kinh, vĩ tuyến, hướng nào nằm ở phía bên phải của đường vĩ tuyến?',
        options: [
          { id: 'A', text: 'Hướng Đông' },
          { id: 'B', text: 'Hướng Tây' },
          { id: 'C', text: 'Hướng Bắc' },
          { id: 'D', text: 'Hướng Nam' }
        ],
        correctAnswer: 'A',
        explanation: 'Quy tắc chuẩn: Đầu trên kinh tuyến là hướng Bắc, dưới Nam; bên phải vĩ tuyến là hướng Đông, bên trái là hướng Tây.',
        hint: 'Mặt trời mọc ở hướng Đông, nằm bên tay phải.',
        knowledgeCardId: 'KC-602-2'
      }
    ]
  },
  'G6-L3': {
    lessonId: 'G6-L3',
    grade: 6,
    chapterId: 'G6-C1',
    chapterTitle: 'Chương 1. Bản đồ – Phương tiện thể hiện bề mặt Trái Đất',
    lessonTitle: 'Bài 3: Tỉ lệ bản đồ. Tính khoảng cách thực tế dựa vào tỉ lệ bản đồ',
    sgkPageRange: 'Trang 110 – 113',
    pdfPageRange: 'Trang 112 – 115',
    objectives: [
      'Hiểu được ý nghĩa của tỉ lệ bản đồ: Tỉ lệ số và tỉ lệ thước.',
      'Biết cách đo và tính khoảng cách trên thực địa dựa vào tỉ lệ bản đồ.',
      'Nắm vững quy tắc đổi đơn vị: từ centimét (cm) sang mét (m) hoặc kilômét (km).'
    ],
    knowledgeCards: [
      {
        id: 'KC-603-1',
        cardIndex: 1,
        title: 'Thẻ 1: Khái niệm Tỉ lệ số và Tỉ lệ thước',
        concept: 'Tỉ số thu nhỏ 1 : M; Thước đo tỉ lệ',
        coreDefinition: 'Tỉ lệ bản đồ chỉ rõ mức độ thu nhỏ khoảng cách trên bản đồ so với khoảng cách tương ứng ngoài thực địa.',
        keyPoints: [
          'Tỉ lệ số: Là phân số có tử số là 1 (ví dụ 1 : 100 000; nghĩa là 1 cm trên bản đồ bằng 100 000 cm trên thực địa).',
          'Mẫu số càng lớn thì tỉ lệ bản đồ càng nhỏ (mức độ chi tiết giảm). Mẫu số càng nhỏ thì tỉ lệ càng lớn (mức độ chi tiết tăng).',
          'Tỉ lệ thước: Thước đo vẽ sẵn dưới dạng đoạn thẳng, mỗi đoạn ghi rõ khoảng cách thực tế (ví dụ 0 - 1 - 2 km).'
        ],
        visualExample: 'Hình ảnh thước tỉ lệ và tỉ lệ số ghi ở chân bản đồ (SGK tr. 110).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 110, pdfPage: 112, section: 'Mục 1. Ý nghĩa tỉ lệ bản đồ' },
        commonTrapAlert: 'Tỉ lệ 1 : 50 000 lớn hơn tỉ lệ 1 : 500 000 vì mẫu số 50 000 nhỏ hơn 500 000.',
        iconName: 'Ruler'
      },
      {
        id: 'KC-603-2',
        cardIndex: 2,
        title: 'Thẻ 2: Công thức tính khoảng cách thực địa',
        concept: 'D = d × M; Quy tắc đổi 100 000 cm = 1 km',
        coreDefinition: 'Khoảng cách thực tế bằng khoảng cách đo được trên bản đồ nhân với mẫu số tỉ lệ.',
        keyPoints: [
          'Công thức: D (thực tế) = d (trên bản đồ) × M (mẫu số tỉ lệ).',
          'Ví dụ: Khoảng cách giữa 2 điểm trên bản đồ tỉ lệ 1 : 200 000 là 5 cm. Khoảng cách thực tế là: 5 cm × 200 000 = 1 000 000 cm = 10 000 m = 10 km.',
          'Quy tắc đổi nhanh: Khi đổi từ cm sang km, bỏ đi 5 chữ số 0 (chia cho 100 000).'
        ],
        visualExample: 'Cách dùng compa hoặc sợi chỉ đo đường cong ngoằn ngoèo rồi áp vào thước tỉ lệ (SGK tr. 112).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 112, pdfPage: 114, section: 'Mục 2. Tính khoảng cách' },
        commonTrapAlert: 'Bẫy tính toán: Quên đổi đơn vị hoặc nhầm chia cho 1 000 thay vì 100 000 khi đổi từ cm sang km.',
        iconName: 'Calculator'
      }
    ],
    mindmap: {
      id: 'mm-603-root',
      label: 'Tỉ lệ bản đồ',
      summary: 'Tỉ lệ số (1:M) & Tỉ lệ thước | D = d × M | Đổi 1 km = 100 000 cm (bỏ 5 số 0)',
      children: [
        { id: 'mm-603-loai', label: 'Phân loại tỉ lệ', summary: 'Tỉ lệ số (phân số 1:M) và Tỉ lệ thước kẻ sẵn' },
        { id: 'mm-603-tinh', label: 'Cách tính khoảng cách', summary: 'Đo cm trên bản đồ × Mẫu số, đổi sang km' }
      ]
    },
    comparisons: [
      {
        id: 'comp-603-1',
        conceptA: 'Bản đồ tỉ lệ lớn (ví dụ 1 : 10 000)',
        conceptB: 'Bản đồ tỉ lệ nhỏ (ví dụ 1 : 1 000 000)',
        keyDifferences: [
          { criteria: 'Mẫu số tỉ lệ', conceptAVal: 'Mẫu số nhỏ (10 000)', conceptBVal: 'Mẫu số rất lớn (1 000 000)' },
          { criteria: 'Mức độ chi tiết', conceptAVal: 'Rất chi tiết, thấy rõ từng con đường, ngôi nhà', conceptBVal: 'Khái quát hóa cao, chỉ thể hiện các đô thị lớn' }
        ],
        commonConfusion: 'Học sinh nhầm số 1 000 000 to hơn 10 000 nên nghĩ tỉ lệ 1:1 000 000 lớn hơn.',
        memoryRule: 'Mẫu số càng nhỏ -> Tỉ lệ càng lớn -> Càng chi tiết rõ ràng.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-603-1',
        questionText: 'Nếu trên bản đồ tỉ lệ 1 : 500 000, khoảng cách đo được giữa hai thành phố là 4 cm, thì khoảng cách thực tế ngoài thực địa là bao nhiêu kilômét?',
        options: [
          { id: 'A', text: '20 km' },
          { id: 'B', text: '2 km' },
          { id: 'C', text: '200 km' },
          { id: 'D', text: '2 000 km' }
        ],
        correctAnswer: 'A',
        explanation: 'Khoảng cách thực tế = 4 cm × 500 000 = 2 000 000 cm. Đổi sang km: 2 000 000 / 100 000 = 20 km.',
        hint: '4 nhân với 500 000 rồi chia cho 100 000.',
        knowledgeCardId: 'KC-603-2'
      }
    ]
  },
  'G6-L4': {
    lessonId: 'G6-L4',
    grade: 6,
    chapterId: 'G6-C1',
    chapterTitle: 'Chương 1. Bản đồ – Phương tiện thể hiện bề mặt Trái Đất',
    lessonTitle: 'Bài 4: Kí hiệu và bảng chú giải bản đồ. Tìm đường đi trên bản đồ',
    sgkPageRange: 'Trang 114 – 117',
    pdfPageRange: 'Trang 116 – 119',
    objectives: [
      'Phân biệt được 3 loại kí hiệu bản đồ: Kí hiệu điểm, kí hiệu đường và kí hiệu diện tích.',
      'Hiểu được vai trò của bảng chú giải bản đồ như chiếc chìa khóa để giải mã bản đồ.',
      'Thực hành tìm đường đi ngắn nhất, thuận lợi nhất giữa các địa điểm trên bản đồ giao thông.'
    ],
    knowledgeCards: [
      {
        id: 'KC-604-1',
        cardIndex: 1,
        title: 'Thẻ 1: Ba loại kí hiệu và bảng chú giải',
        concept: 'Kí hiệu điểm, đường, diện tích; Bảng chú giải giải mã',
        coreDefinition: 'Kí hiệu bản đồ là các dấu hiệu quy ước dùng để thể hiện các đối tượng địa lí lên bản đồ.',
        keyPoints: [
          'Kí hiệu điểm: Thể hiện các đối tượng phân bố theo điểm riêng biệt như: sân bay (hình máy bay), cảng biển (mỏ neo), đỉnh núi (tam giác đen), mỏ khoáng sản.',
          'Kí hiệu đường: Thể hiện đối tượng kéo dài theo tuyến như: đường sắt, ranh giới quốc gia, sông ngòi, đường ô tô.',
          'Kí hiệu diện tích: Thể hiện đối tượng chiếm diện tích bề mặt lớn như: đầm lầy, rừng rậm, vùng trồng lúa, diện tích đất mặn.',
          'Bảng chú giải: Giải thích rõ ý nghĩa của tất cả các kí hiệu và màu sắc dùng trên bản đồ.'
        ],
        visualExample: 'Bảng chú giải bản đồ khoáng sản và giao thông Việt Nam (SGK tr. 115).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 114, pdfPage: 116, section: 'Mục 1. Kí hiệu bản đồ' },
        commonTrapAlert: 'Sông ngòi là kí hiệu ĐƯỜNG (không phải kí hiệu diện tích, dù chứa nước).',
        iconName: 'List'
      },
      {
        id: 'KC-604-2',
        cardIndex: 2,
        title: 'Thẻ 2: Phương pháp tìm đường đi trên bản đồ',
        concept: 'Xác định điểm đi, điểm đến, hướng di chuyển và đo khoảng cách',
        coreDefinition: 'Tìm đường đi là kĩ năng sử dụng bản đồ du lịch, giao thông để lựa chọn lộ trình tối ưu.',
        keyPoints: [
          'Bước 1: Xác định điểm xuất phát và điểm đích đến trên bản đồ.',
          'Bước 2: Tìm các tuyến đường nối hai điểm, xem xét các điểm rẽ và hướng di chuyển (Đông, Tây, Nam, Bắc).',
          'Bước 3: Dùng thước đo chiều dài cung đường và đối chiếu tỉ lệ bản đồ để tính khoảng cách thực tế.',
          'Bước 4: Chọn cung đường ngắn nhất, tránh các đoạn đường một chiều hoặc đang cấm.'
        ],
        visualExample: 'Sơ đồ bản đồ khu du lịch phố cổ Hà Nội hoặc TP. Hồ Chí Minh (SGK tr. 116).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 116, pdfPage: 118, section: 'Mục 2. Tìm đường đi' },
        commonTrapAlert: 'Đường chim bay (đường thẳng nối 2 điểm) ngắn hơn khoảng cách thực tế phải đi theo mạng lưới đường sá ngoằn ngoèo.',
        iconName: 'Navigation'
      }
    ],
    mindmap: {
      id: 'mm-604-root',
      label: 'Kí hiệu & Tìm đường đi',
      summary: '3 loại kí hiệu: Điểm, Đường, Diện tích | Bảng chú giải giải mã | 4 bước tìm đường tối ưu',
      children: [
        { id: 'mm-604-kihieu', label: '3 Loại kí hiệu', summary: 'Điểm (sân bay), Đường (sông, đường sắt), Diện tích (rừng)' },
        { id: 'mm-604-timduong', label: 'Tìm đường đi', summary: 'Xác định điểm đi/đến, chọn tuyến ngắn và an toàn' }
      ]
    },
    comparisons: [
      {
        id: 'comp-604-1',
        conceptA: 'Kí hiệu điểm (ví dụ: sân bay, cảng biển)',
        conceptB: 'Kí hiệu diện tích (ví dụ: bãi lúa, rừng cây)',
        keyDifferences: [
          { criteria: 'Không gian phân bố', conceptAVal: 'Tập trung tại một tọa độ vị trí cụ thể, không theo tỉ lệ diện tích', conceptBVal: 'Lan tỏa chiếm một khoảng không gian bề mặt thực tế rộng lớn' },
          { criteria: 'Cách thể hiện', conceptAVal: 'Hình vẽ biểu tượng (máy bay, mỏ neo, tam giác)', conceptBVal: 'Vùng màu sắc, kẻ sọc hoặc chấm hoa văn bao quanh ranh giới' }
        ],
        commonConfusion: 'Học sinh nhầm khu công nghiệp là kí hiệu điểm (thực tế khu công nghiệp chiếm diện tích).',
        memoryRule: 'Điểm: 1 chấm/1 hình. Đường: Tuyến dài. Diện tích: Mảng màu.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-604-1',
        questionText: 'Biểu tượng hình "Mỏ neo" thể hiện trên bản đồ giao thông thuộc loại kí hiệu nào?',
        options: [
          { id: 'A', text: 'Kí hiệu điểm' },
          { id: 'B', text: 'Kí hiệu đường' },
          { id: 'C', text: 'Kí hiệu diện tích' },
          { id: 'D', text: 'Kí hiệu khối' }
        ],
        correctAnswer: 'A',
        explanation: 'Kí hiệu mỏ neo đại diện cho một cảng biển cụ thể tại một tọa độ xác định, thuộc nhóm kí hiệu điểm.',
        hint: 'Thể hiện một cảng biển cụ thể.',
        knowledgeCardId: 'KC-604-1'
      }
    ]
  },
  'G6-L5': {
    lessonId: 'G6-L5',
    grade: 6,
    chapterId: 'G6-C1',
    chapterTitle: 'Chương 1. Bản đồ – Phương tiện thể hiện bề mặt Trái Đất',
    lessonTitle: 'Bài 5: Lược đồ trí nhớ',
    sgkPageRange: 'Trang 118 – 121',
    pdfPageRange: 'Trang 120 – 123',
    objectives: [
      'Hiểu được thế nào là lược đồ trí nhớ và ý nghĩa của nó trong cuộc sống.',
      'Biết cách phác thảo lược đồ trí nhớ từ nhà đến trường hoặc một không gian quen thuộc.',
      'Sử dụng lược đồ trí nhớ để định hướng và giới thiệu không gian địa phương cho người khác.'
    ],
    knowledgeCards: [
      {
        id: 'KC-605-1',
        cardIndex: 1,
        title: 'Thẻ 1: Khái niệm và giá trị của Lược đồ trí nhớ',
        concept: 'Hình ảnh không gian trong tâm trí, Bản đồ tư duy không gian',
        coreDefinition: 'Lược đồ trí nhớ là hình ảnh về một không gian hoặc một tuyến đường được lưu giữ trong trí óc con người và được phác họa lại.',
        keyPoints: [
          'Không đòi hỏi tỉ lệ toán học tuyệt đối hay độ chính xác trắc địa cao.',
          'Dựa vào các điểm mốc nhận biết nổi bật: ngã tư, cây cổ thụ, tòa nhà cao tầng, cây xăng, cây cầu, trường học.',
          'Ý nghĩa: Giúp con người định hướng nhanh chóng trong không gian thực tế, chỉ đường cho người khác và ghi nhớ vị trí dễ dàng.'
        ],
        visualExample: 'Hình vẽ lược đồ trí nhớ đường từ nhà đến trường của học sinh (SGK tr. 119).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 118, pdfPage: 120, section: 'Mục 1. Khái niệm' },
        commonTrapAlert: 'Lược đồ trí nhớ không cần thước đo vẽ tỉ lệ số chuẩn mực, quan trọng là đúng thứ tự các điểm mốc và hướng rẽ.',
        iconName: 'Compass'
      }
    ],
    mindmap: {
      id: 'mm-605-root',
      label: 'Lược đồ trí nhớ',
      summary: 'Hình ảnh không gian trong tâm trí | Dựa trên điểm mốc quen thuộc | Định hướng và chỉ đường dễ dàng',
      children: [
        { id: 'mm-605-khainiem', label: 'Bản chất', summary: 'Hình ảnh tinh thần, không cần tỉ lệ toán học khắt khe' },
        { id: 'mm-605-cachve', label: 'Cách vẽ', summary: 'Xác định điểm mốc (ngã ba, cầu, trường) và hướng di chuyển' }
      ]
    },
    comparisons: [
      {
        id: 'comp-605-1',
        conceptA: 'Bản đồ địa lí chính thức',
        conceptB: 'Lược đồ trí nhớ',
        keyDifferences: [
          { criteria: 'Tỉ lệ và phép chiếu', conceptAVal: 'Bắt buộc có tỉ lệ số/thước chính xác, tuân thủ phép chiếu toán học', conceptBVal: 'Không cần tỉ lệ toán học khắt khe, phác họa tương đối' },
          { criteria: 'Nguồn thông tin', conceptAVal: 'Đo đạc thực địa và ảnh vệ tinh quy chuẩn', conceptBVal: 'Dựa vào ấn tượng và trải nghiệm cá nhân của người vẽ' }
        ],
        commonConfusion: 'Học sinh nhầm lược đồ trí nhớ phải đo bằng thước chính xác từng milimét.',
        memoryRule: 'Bản đồ cần thước đo tỉ lệ; Lược đồ trí nhớ cần điểm mốc rõ ràng.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-605-1',
        questionText: 'Yếu tố quan trọng hàng đầu để vẽ một lược đồ trí nhớ đường đi hiệu quả là gì?',
        options: [
          { id: 'A', text: 'Xác định đúng các điểm mốc nhận biết (ngã rẽ, cây xăng, cây cầu) và hướng di chuyển' },
          { id: 'B', text: 'Phải đo đạc bằng máy kinh vĩ chuyên dụng' },
          { id: 'C', text: 'Phải dùng hệ tọa độ vệ tinh GPS toàn cầu' },
          { id: 'D', text: 'Phải vẽ bằng phần mềm đồ họa 3D' }
        ],
        correctAnswer: 'A',
        explanation: 'Lược đồ trí nhớ phụ thuộc vào việc ghi nhớ các mốc không gian nhận dạng then chốt để dẫn đường.',
        hint: 'Điểm mốc nhận biết trên cung đường.',
        knowledgeCardId: 'KC-605-1'
      }
    ]
  },
  'G6-L6': {
    lessonId: 'G6-L6',
    grade: 6,
    chapterId: 'G6-C2',
    chapterTitle: 'Chương 2. Trái Đất – Hành tinh của Hệ Mặt Trời',
    lessonTitle: 'Bài 6: Trái Đất trong hệ Mặt Trời',
    sgkPageRange: 'Trang 122 – 125',
    pdfPageRange: 'Trang 124 – 127',
    objectives: [
      'Xác định được vị trí của Trái Đất trong Hệ Mặt Trời (hành tinh thứ 3 theo thứ tự xa dần Mặt Trời).',
      'Mô tả được hình dạng hình cầu và kích thước khổng lồ của Trái Đất (bán kính xích đạo ~6378 km).',
      'Hiểu được vì sao Trái Đất là hành tinh duy nhất có sự sống được biết đến trong Hệ Mặt Trời.'
    ],
    knowledgeCards: [
      {
        id: 'KC-606-1',
        cardIndex: 1,
        title: 'Thẻ 1: Vị trí của Trái Đất trong Hệ Mặt Trời',
        concept: 'Hành tinh thứ 3, Khoảng cách 150 triệu km, Điều kiện vàng sinh sống',
        coreDefinition: 'Hệ Mặt Trời gồm Mặt Trời ở trung tâm và 8 hành tinh quay quanh. Trái Đất đứng ở vị trí thứ ba.',
        keyPoints: [
          'Thứ tự 8 hành tinh từ trong ra ngoài: Thủy tinh, Kim tinh, Trái Đất, Hỏa tinh, Mộc tinh, Thổ tinh, Thiên Vương tinh, Hải Vương tinh.',
          'Khoảng cách: Trái Đất cách Mặt Trời khoảng 150 triệu km (1 đơn vị thiên văn - AU).',
          'Vùng có thể sống được (Goldilocks zone): Khoảng cách tối ưu giúp Trái Đất nhận lượng nhiệt và ánh sáng vừa đủ để nước tồn tại ở thể lỏng và duy trì sự sống.'
        ],
        visualExample: 'Sơ đồ Hệ Mặt Trời với Mặt Trời phát sáng và quỹ đạo 8 hành tinh (SGK tr. 122).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 122, pdfPage: 124, section: 'Mục 1. Vị trí trong Hệ Mặt Trời' },
        commonTrapAlert: 'Thứ tự từ Mặt Trời ra: Thủy, Kim, TRÁI ĐẤT (thứ ba), Hỏa, Mộc, Thổ, Thiên Vương, Hải Vương.',
        iconName: 'Sun'
      },
      {
        id: 'KC-606-2',
        cardIndex: 2,
        title: 'Thẻ 2: Hình dạng hình cầu và kích thước của Trái Đất',
        concept: 'Hình cầu, Bán kính xích đạo 6378 km, Chu vi xích đạo 40075 km',
        coreDefinition: 'Trái Đất có dạng hình cầu hơi dẹt ở hai cực và phình to ở Xích đạo (hình Geoid).',
        keyPoints: [
          'Bán kính Xích đạo: 6 378 km; Bán kính Cực: 6 357 km (chênh lệch 21 km do lực ly tâm tự quay).',
          'Chu vi đường Xích đạo: Xấp xỉ 40 075 km.',
          'Diện tích bề mặt Trái Đất: Khoảng 510 triệu km² (đại dương chiếm gần 71%, đất liền chiếm 29%).'
        ],
        visualExample: 'Ảnh chụp Trái Đất hình viên ngọc xanh lơ từ tàu vũ trụ Apollo 17 (SGK tr. 124).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 124, pdfPage: 126, section: 'Mục 2. Hình dạng và kích thước' },
        commonTrapAlert: 'Trái Đất có hình cầu (không phải mặt phẳng dẹt như quan niệm cổ xưa).',
        iconName: 'Globe'
      }
    ],
    mindmap: {
      id: 'mm-606-root',
      label: 'Trái Đất & Hệ Mặt Trời',
      summary: 'Hành tinh thứ 3 từ Mặt Trời (150 triệu km) | Hình cầu hơi dẹt 2 cực | Bán kính 6378 km | Duy nhất có sự sống',
      children: [
        { id: 'mm-606-vt', label: 'Vị trí thứ 3', summary: 'Cách Mặt Trời 150 triệu km, nhận nhiệt vừa đủ cho sự sống' },
        { id: 'mm-606-kichthuoc', label: 'Hình dạng & Kích thước', summary: 'Hình cầu, bán kính 6378 km, diện tích 510 triệu km²' }
      ]
    },
    comparisons: [
      {
        id: 'comp-606-1',
        conceptA: 'Vị trí Trái Đất (thứ 3)',
        conceptB: 'Vị trí Thủy tinh (thứ 1) hoặc Hải Vương tinh (thứ 8)',
        keyDifferences: [
          { criteria: 'Nhiệt độ bề mặt', conceptAVal: 'Ôn hòa (+15°C trung bình), nước ở thể lỏng thuận lợi cho sự sống', conceptBVal: 'Quá thiêu đốt (>400°C ở Thủy tinh) hoặc quá băng giá âm độ ở Hải Vương tinh' },
          { criteria: 'Khí quyển', conceptAVal: 'Giàu oxy và nitơ, có tầng ozon bảo vệ', conceptBVal: 'Gần như không có khí quyển hoặc chỉ toàn khí độc' }
        ],
        commonConfusion: 'Học sinh nhầm Trái Đất ở vị trí trung tâm của Hệ Mặt Trời.',
        memoryRule: 'Mặt Trời ở trung tâm; Trái Đất là hành tinh thứ 3 quay quanh Mặt Trời.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-606-1',
        questionText: 'Tính từ Mặt Trời ra ngoài, Trái Đất nằm ở vị trí thứ mấy trong số 8 hành tinh?',
        options: [
          { id: 'A', text: 'Vị trí thứ ba' },
          { id: 'B', text: 'Vị trí thứ nhất' },
          { id: 'C', text: 'Vị trí thứ hai' },
          { id: 'D', text: 'Vị trí thứ năm' }
        ],
        correctAnswer: 'A',
        explanation: 'Thứ tự từ trong ra: Thủy tinh (1), Kim tinh (2), Trái Đất (3), Hỏa tinh (4)...',
        hint: 'Sau Thủy tinh và Kim tinh.',
        knowledgeCardId: 'KC-606-1'
      }
    ]
  },
  'G6-L7': {
    lessonId: 'G6-L7',
    grade: 6,
    chapterId: 'G6-C2',
    chapterTitle: 'Chương 2. Trái Đất – Hành tinh của Hệ Mặt Trời',
    lessonTitle: 'Bài 7: Chuyển động tự quay quanh trục của Trái Đất và hệ quả',
    sgkPageRange: 'Trang 126 – 129',
    pdfPageRange: 'Trang 128 – 131',
    objectives: [
      'Mô tả được chuyển động tự quay quanh trục của Trái Đất (hướng từ Tây sang Đông, chu kì 24 giờ).',
      'Giải thích được hiện tượng ngày đêm luân phiên và nguyên nhân sinh ra giờ trên Trái Đất (24 múi giờ).',
      'Phân tích được sự lệch hướng chuyển động của các vật thể do lực Cô-ri-ô-lít (Bắc lệch phải, Nam lệch trái).'
    ],
    knowledgeCards: [
      {
        id: 'KC-607-1',
        cardIndex: 1,
        title: 'Thẻ 1: Hiện tượng ngày đêm luân phiên và Giờ Trái Đất',
        concept: 'Tự quay Tây sang Đông, 24 múi giờ, Việt Nam múi giờ số 7',
        coreDefinition: 'Trái Đất tự quay quanh một trục tưởng tượng nghiêng 66°33\' so với mặt phẳng quỹ đạo.',
        keyPoints: [
          'Chu kì và hướng quay: Tự quay từ Tây sang Đông, thời gian quay hết một vòng là 24 giờ (1 ngày đêm).',
          'Ngày đêm luân phiên: Vì Trái Đất hình cầu nên Mặt Trời chỉ chiếu sáng được một nửa (ngày), nửa đối diện trong bóng tối (đêm). Nhờ tự quay liên tục nên mọi nơi trên Trái Đất lần lượt có ngày và đêm.',
          'Múi giờ: Bề mặt Trái Đất được chia thành 24 khu vực giờ (múi giờ), mỗi múi rộng 15 kinh độ. Múi số 0 chứa kinh tuyến gốc Grin-uých (GMT/UTC). Việt Nam nằm ở múi giờ số 7.'
        ],
        visualExample: 'Sơ đồ Trái Đất quay tạo đường phân chia sáng tối và bản đồ 24 múi giờ (SGK tr. 127).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 126, pdfPage: 128, section: 'Mục 1 & 2. Tự quay và ngày đêm' },
        commonTrapAlert: 'Nếu Trái Đất không tự quay: Một nửa sẽ là ngày vĩnh viễn nóng bỏng, một nửa là đêm vĩnh viễn đóng băng.',
        iconName: 'RotateCw'
      },
      {
        id: 'KC-607-2',
        cardIndex: 2,
        title: 'Thẻ 2: Sự lệch hướng chuyển động (Lực Cô-ri-ô-lít)',
        concept: 'Lực Cô-ri-ô-lít; Bán cầu Bắc lệch PHẢI, Bán cầu Nam lệch TRÁI',
        coreDefinition: 'Lực Cô-ri-ô-lít làm lệch hướng chuyển động của tất cả các vật thể di chuyển trên bề mặt Trái Đất.',
        keyPoints: [
          'Nguyên nhân: Do vận tốc tự quay dài theo đường tròn vĩ tuyến khác nhau (lớn nhất ở Xích đạo và bằng 0 ở hai cực).',
          'Quy tắc lệch hướng: Nhìn theo hướng chuyển động ban đầu: Ở Bán cầu Bắc vật thể bị lệch về BÊN PHẢI; Ở Bán cầu Nam vật thể bị lệch về BÊN TRÁI.',
          'Biểu hiện thực tế: Làm lệch hướng các luồng gió (gió Tín phong, gió Tây ôn đới), các dòng hải lưu và làm bờ sông bên phải bị xói mòn nhiều hơn ở Bắc bán cầu.'
        ],
        visualExample: 'Hình vẽ đường đạn bắn hoặc dòng sông bị lệch hướng ở hai bán cầu (SGK tr. 129).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 128, pdfPage: 130, section: 'Mục 3. Lực Cô-ri-ô-lít' },
        commonTrapAlert: 'Bẫy nhớ ngược: Bán cầu Bắc lệch sang PHẢI; Bán cầu Nam lệch sang TRÁI.',
        iconName: 'Wind'
      }
    ],
    mindmap: {
      id: 'mm-607-root',
      label: 'Tự quay của Trái Đất',
      summary: 'Tự quay Tây -> Đông (24h) | Ngày đêm luân phiên | 24 múi giờ (Việt Nam GMT+7) | Lực Cô-ri-ô-lít (Bắc phải, Nam trái)',
      children: [
        { id: 'mm-607-ngaydem', label: 'Ngày đêm luân phiên', summary: 'Do hình cầu và tự quay liên tục' },
        { id: 'mm-607-gio', label: '24 Múi giờ', summary: 'Mỗi múi 15° kinh tuyến, Việt Nam múi số 7' },
        { id: 'mm-607-coriolis', label: 'Lực Cô-ri-ô-lít', summary: 'Bán cầu Bắc lệch phải, Bán cầu Nam lệch trái' }
      ]
    },
    comparisons: [
      {
        id: 'comp-607-1',
        conceptA: 'Lệch hướng ở Bán cầu Bắc',
        conceptB: 'Lệch hướng ở Bán cầu Nam',
        keyDifferences: [
          { criteria: 'Quy tắc hướng lệch', conceptAVal: 'Lệch về phía BÊN PHẢI so với hướng chuyển động ban đầu', conceptBVal: 'Lệch về phía BÊN TRÁI so với hướng chuyển động ban đầu' },
          { criteria: 'Hướng xoáy của bão', conceptAVal: 'Bão xoáy ngược chiều kim đồng hồ', conceptBVal: 'Bão xoáy cùng chiều kim đồng hồ' }
        ],
        commonConfusion: 'Học sinh rất dễ nhớ ngược quy tắc lệch phải / lệch trái.',
        memoryRule: 'Mẹo nhớ: Bắc - Phải (BP: Bút Phù), Nam - Trái (NT: Nhà Trắng).'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-607-1',
        questionText: 'Do tác động của lực Cô-ri-ô-lít, một vật thể chuyển động ở Bán cầu Bắc sẽ bị lệch theo hướng nào so với hướng chuyển động ban đầu?',
        options: [
          { id: 'A', text: 'Lệch về phía bên phải' },
          { id: 'B', text: 'Lệch về phía bên trái' },
          { id: 'C', text: 'Không bị lệch hướng' },
          { id: 'D', text: 'Lệch ngược chiều 180 độ' }
        ],
        correctAnswer: 'A',
        explanation: 'Theo quy luật của lực Cô-ri-ô-lít: Ở Bán cầu Bắc, mọi vật thể chuyển động đều bị lệch về phía bên phải theo hướng di chuyển ban đầu.',
        hint: 'Bán cầu Bắc lệch bên phải.',
        knowledgeCardId: 'KC-607-2'
      }
    ]
  },
  'G6-L8': {
    lessonId: 'G6-L8',
    grade: 6,
    chapterId: 'G6-C2',
    chapterTitle: 'Chương 2. Trái Đất – Hành tinh của Hệ Mặt Trời',
    lessonTitle: 'Bài 8: Chuyển động của Trái Đất quanh Mặt Trời và hệ quả',
    sgkPageRange: 'Trang 130 – 135',
    pdfPageRange: 'Trang 132 – 137',
    objectives: [
      'Mô tả được chuyển động của Trái Đất quanh Mặt Trời (quỹ đạo elip gần tròn, chu kì 365 ngày 6 giờ, trục không đổi hướng nghiêng 66°33\').',
      'Giải thích được hiện tượng các mùa trong năm và sự trái ngược mùa giữa Bán cầu Bắc và Bán cầu Nam.',
      'Phân tích được hiện tượng ngày đêm dài ngắn theo mùa và theo vĩ độ (ngày/đêm 24 giờ ở vùng cực).'
    ],
    knowledgeCards: [
      {
        id: 'KC-608-1',
        cardIndex: 1,
        title: 'Thẻ 1: Hiện tượng các mùa trong năm',
        concept: 'Xuân, Hạ, Thu, Đông; Trái ngược mùa giữa hai bán cầu',
        coreDefinition: 'Khi chuyển động quanh Mặt Trời, trục Trái Đất luôn nghiêng 66°33\' và không đổi hướng, khiến hai bán cầu lần lượt ngả về phía Mặt Trời.',
        keyPoints: [
          'Hạ chí (22/6): Bán cầu Bắc ngả nhiều nhất về phía Mặt Trời, nhận nhiều nhiệt -> Mùa hạ ở Bán cầu Bắc; cùng lúc Bán cầu Nam là mùa đông.',
          'Đông chí (22/12): Bán cầu Nam ngả nhiều nhất về phía Mặt Trời, nhận nhiều nhiệt -> Mùa hạ ở Bán cầu Nam; cùng lúc Bán cầu Bắc là mùa đông.',
          'Xuân phân (21/3) và Thu phân (23/9): Mặt Trời chiếu thẳng góc vào Xích đạo, nhiệt độ phân bố đều giữa hai bán cầu.',
          'Mùa ở hai bán cầu luôn trái ngược nhau: Khi Bán cầu Bắc là mùa hè thì Bán cầu Nam là mùa đông.'
        ],
        visualExample: 'Sơ đồ Trái Đất chuyển động quanh Mặt Trời qua 4 vị trí: Xuân phân, Hạ chí, Thu phân, Đông chí (SGK tr. 131).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 130, pdfPage: 132, section: 'Mục 1. Hiện tượng mùa' },
        commonTrapAlert: 'Mùa sinh ra là do TRỤC NGHIÊNG KHÔNG ĐỔI HƯỚNG khi quay quanh Mặt Trời (chứ không phải do Trái Đất ở gần hay xa Mặt Trời).',
        iconName: 'Sun'
      },
      {
        id: 'KC-608-2',
        cardIndex: 2,
        title: 'Thẻ 2: Hiện tượng ngày đêm dài ngắn theo mùa và vĩ độ',
        concept: 'Mùa hè ngày dài đêm ngắn, Mùa đông ngày ngắn đêm dài; Cực có ngày/đêm 6 tháng',
        coreDefinition: 'Đường phân chia sáng tối không trùng với trục Trái Đất dẫn đến độ dài ngày và đêm thay đổi theo mùa và vĩ độ.',
        keyPoints: [
          'Ở Xích đạo: Quanh năm có ngày và đêm dài bằng nhau (12 giờ ngày, 12 giờ đêm).',
          'Càng xa Xích đạo về phía cực: Sự chênh lệch độ dài ngày đêm càng lớn.',
          'Mùa hè: Bán cầu ngả về Mặt Trời có ngày dài hơn đêm ("Đêm tháng năm chưa nằm đã sáng").',
          'Mùa đông: Bán cầu chếch xa Mặt Trời có ngày ngắn hơn đêm ("Ngày tháng mười chưa cười đã tối").',
          'Từ vòng cực (66°33\') đến cực (90°): Có hiện tượng ngày hoặc đêm dài suốt 24 giờ. Tại chính hai cực có 6 tháng ngày và 6 tháng đêm liên tục.'
        ],
        visualExample: 'Hình ảnh Mặt Trời lúc nửa đêm ở Na Uy vùng vòng cực Bắc (SGK tr. 134).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 133, pdfPage: 135, section: 'Mục 2. Ngày đêm dài ngắn' },
        commonTrapAlert: 'Chỉ có tại đường Xích đạo thì quanh năm ngày mới luôn luôn bằng đêm (12h = 12h).',
        iconName: 'Clock'
      }
    ],
    mindmap: {
      id: 'mm-608-root',
      label: 'Quanh Mặt Trời & Hệ quả',
      summary: 'Quỹ đạo elip (365 ngày 6h) | Trục nghiêng 66°33\' | 4 Mùa trái ngược 2 bán cầu | Ngày đêm dài ngắn theo mùa',
      children: [
        { id: 'mm-608-mua', label: '4 Mùa trong năm', summary: 'Hạ chí (22/6 Bắc nóng); Đông chí (22/12 Nam nóng)' },
        { id: 'mm-608-ngaydem', label: 'Ngày đêm dài ngắn', summary: 'Mùa hè ngày dài đêm ngắn, Mùa đông ngày ngắn đêm dài' }
      ]
    },
    comparisons: [
      {
        id: 'comp-608-1',
        conceptA: 'Ngày Hạ chí (22/6) ở Bán cầu Bắc',
        conceptB: 'Ngày Đông chí (22/12) ở Bán cầu Bắc',
        keyDifferences: [
          { criteria: 'Góc chiếu và nhiệt độ', conceptAVal: 'Tia sáng Mặt Trời chiếu thẳng góc chí tuyến Bắc (23°27\'B), nóng nhất', conceptBVal: 'Tia sáng Mặt Trời chiếu xiên, nhận ít nhiệt nhất, lạnh giá' },
          { criteria: 'Độ dài ngày và đêm', conceptAVal: 'Ngày dài nhất trong năm, đêm ngắn nhất trong năm', conceptBVal: 'Ngày ngắn nhất trong năm, đêm dài nhất trong năm' }
        ],
        commonConfusion: 'Học sinh hay nhầm ngày Hạ chí là mùa hè ở cả hai bán cầu.',
        memoryRule: 'Hạ chí 22/6: Bắc hè ngày dài; Đông chí 22/12: Bắc đông đêm dài.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-608-1',
        questionText: 'Ở Bán cầu Bắc, vào ngày nào trong năm có thời gian ban ngày dài nhất và thời gian ban đêm ngắn nhất?',
        options: [
          { id: 'A', text: 'Ngày Hạ chí (22/6)' },
          { id: 'B', text: 'Ngày Đông chí (22/12)' },
          { id: 'C', text: 'Ngày Xuân phân (21/3)' },
          { id: 'D', text: 'Ngày Thu phân (23/9)' }
        ],
        correctAnswer: 'A',
        explanation: 'Vào ngày Hạ chí (22/6), Bán cầu Bắc ngả nhiều nhất về phía Mặt Trời nên có diện tích được chiếu sáng lớn nhất, ngày dài nhất trong năm.',
        hint: 'Ngày đỉnh điểm mùa hè ở Bắc bán cầu.',
        knowledgeCardId: 'KC-608-2'
      }
    ]
  },
  'G6-L9': {
    lessonId: 'G6-L9',
    grade: 6,
    chapterId: 'G6-C2',
    chapterTitle: 'Chương 2. Trái Đất – Hành tinh của Hệ Mặt Trời',
    lessonTitle: 'Bài 9: Xác định phương hướng ngoài thực tế',
    sgkPageRange: 'Trang 136 – 139',
    pdfPageRange: 'Trang 138 – 141',
    objectives: [
      'Biết cách xác định phương hướng ngoài thực tế bằng la bàn cầm tay.',
      'Biết cách xác định phương hướng dựa vào vị trí Mặt Trời mọc và lặn.',
      'Biết cách xác định phương hướng ban đêm dựa vào sao Bắc Cực trên chòm sao Đại Hùng hoặc chòm sao Thiên Hậu.'
    ],
    knowledgeCards: [
      {
        id: 'KC-609-1',
        cardIndex: 1,
        title: 'Thẻ 1: Xác định phương hướng bằng La bàn và Mặt Trời',
        concept: 'La bàn từ tính, Mặt Trời mọc hướng Đông lặn hướng Tây',
        coreDefinition: 'Xác định phương hướng thực tế là kĩ năng sống quan trọng khi đi dã ngoại hoặc thám hiểm.',
        keyPoints: [
          'Dùng La bàn: Đặt la bàn trên mặt phẳng nằm ngang, chờ kim ổn định; đầu kim sơn màu đỏ hoặc có chữ N luôn chỉ hướng Bắc từ trường.',
          'Dựa vào Mặt Trời: Buổi sáng giang hai tay, tay phải chỉ về phía Mặt Trời mọc (hướng Đông) -> Trước mặt là hướng Bắc, sau lưng là hướng Nam, tay trái chỉ hướng Tây.',
          'Dựa vào bóng cọc (phương pháp gậy): Cắm cọc đứng thẳng, bóng cọc buổi sáng chỉ hướng Tây, bóng cọc buổi chiều chỉ hướng Đông.'
        ],
        visualExample: 'Hình vẽ bạn học sinh giang tay đón Mặt Trời mọc để xác định 4 hướng (SGK tr. 137).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 136, pdfPage: 138, section: 'Mục 1 & 2. La bàn và Mặt Trời' },
        commonTrapAlert: 'Để la bàn gần các vật bằng sắt thép hoặc dây điện cao thế sẽ làm kim la bàn bị lệch sai.',
        iconName: 'Compass'
      },
      {
        id: 'KC-609-2',
        cardIndex: 2,
        title: 'Thẻ 2: Xác định hướng Bắc ban đêm bằng Sao Bắc Cực',
        concept: 'Sao Bắc Cực (Polaris), Chòm sao Đại Hùng (Gấu Lớn), Chòm Thiên Hậu',
        coreDefinition: 'Ban đêm ở Bán cầu Bắc, Sao Bắc Cực luôn luôn chỉ chính xác hướng Bắc địa lí.',
        keyPoints: [
          'Tìm chòm sao Đại Hùng (hình cái gáo nước khổng lồ gồm 7 ngôi sao sáng).',
          'Kéo dài đoạn thẳng nối hai ngôi sao ở mép gáo một đoạn gấp khoảng 5 lần thì sẽ gặp Sao Bắc Cực.',
          'Sao Bắc Cực nằm gần như bất động trên thiên cực Bắc, là ngọn hải đăng vũ trụ định hướng cho các thủy thủ hàng ngàn năm qua.'
        ],
        visualExample: 'Sơ đồ nối 2 sao mép gáo của chòm Đại Hùng để tìm sao Bắc Cực (SGK tr. 138).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 138, pdfPage: 140, section: 'Mục 3. Sao Bắc Cực' },
        commonTrapAlert: 'Sao Bắc Cực chỉ quan sát được ở Bán cầu Bắc (ở Bán cầu Nam không nhìn thấy được).',
        iconName: 'Sun'
      }
    ],
    mindmap: {
      id: 'mm-609-root',
      label: 'Định hướng thực tế',
      summary: 'La bàn từ tính (kim đỏ chỉ Bắc) | Mặt Trời (mọc Đông, lặn Tây) | Sao Bắc Cực (chòm sao Đại Hùng)',
      children: [
        { id: 'mm-609-laban', label: 'La bàn', summary: 'Đầu kim N chỉ hướng Bắc từ tính' },
        { id: 'mm-609-mattroi', label: 'Mặt Trời ban ngày', summary: 'Tay phải chỉ Mặt Trời mọc -> trước mặt là Bắc' },
        { id: 'mm-609-sao', label: 'Sao Bắc Cực ban đêm', summary: 'Kéo dài mép gáo chòm Đại Hùng 5 lần' }
      ]
    },
    comparisons: [
      {
        id: 'comp-609-1',
        conceptA: 'Định hướng bằng La bàn',
        conceptB: 'Định hướng bằng thiên thể (Mặt Trời, Sao)',
        keyDifferences: [
          { criteria: 'Điều kiện sử dụng', conceptAVal: 'Sử dụng được cả ngày lẫn đêm, trong mọi điều kiện mây mù hay trong hang', conceptBVal: 'Phụ thuộc vào thời tiết quang mây, cần nhìn thấy bầu trời' },
          { criteria: 'Độ nhạy nhiễu', conceptAVal: 'Dễ bị nhiễu bởi quặng sắt, nam châm, đường điện', conceptBVal: 'Chính xác tuyệt đối về hướng địa lí thiên văn' }
        ],
        commonConfusion: 'Học sinh nhầm kim la bàn chỉ về hướng Bắc địa lí tuyệt đối (thực tế chỉ về Cực Bắc từ trường).',
        memoryRule: 'Ngày nhìn Mặt Trời mọc lặn; Đêm tìm Sao Bắc Cực; Tiện nhất dùng La bàn.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-609-1',
        questionText: 'Nếu buổi sáng sớm bạn đứng giang hai tay và hướng tay phải về phía Mặt Trời mọc, thì hướng trước mặt bạn là hướng nào?',
        options: [
          { id: 'A', text: 'Hướng Bắc' },
          { id: 'B', text: 'Hướng Nam' },
          { id: 'C', text: 'Hướng Tây' },
          { id: 'D', text: 'Hướng Đông' }
        ],
        correctAnswer: 'A',
        explanation: 'Tay phải hướng Đông (Mặt Trời mọc), tay trái hướng Tây (Mặt Trời lặn) -> phía trước mặt là hướng Bắc, sau lưng là hướng Nam.',
        hint: 'Phía trước mặt vuông góc với hướng Đông bên tay phải.',
        knowledgeCardId: 'KC-609-1'
      }
    ]
  },
  'G6-L10': {
    lessonId: 'G6-L10',
    grade: 6,
    chapterId: 'G6-C3',
    chapterTitle: 'Chương 3. Cấu tạo của Trái Đất. Vỏ Trái Đất',
    lessonTitle: 'Bài 10: Cấu tạo của Trái Đất. Các mảng kiến tạo',
    sgkPageRange: 'Trang 140 – 143',
    pdfPageRange: 'Trang 142 – 145',
    objectives: [
      'Trình bày được cấu tạo bên trong của Trái Đất gồm 3 lớp: Vỏ Trái Đất, Manti và Nhân.',
      'Xác định được các mảng kiến tạo lớn của thạch quyển và sự dịch chuyển của chúng.',
      'Hiểu được hệ quả của sự tiếp xúc giữa các mảng kiến tạo (tạo núi, động đất, núi lửa).'
    ],
    knowledgeCards: [
      {
        id: 'KC-610-1',
        cardIndex: 1,
        title: 'Thẻ 1: Ba lớp cấu tạo bên trong Trái Đất',
        concept: 'Vỏ Trái Đất, Lớp Manti, Lớp Nhân (Lõi)',
        coreDefinition: 'Cấu tạo Trái Đất giống như quả trứng gồm 3 lớp đồng tâm từ ngoài vào trong.',
        keyPoints: [
          'Vỏ Trái Đất: Lớp ngoài cùng mỏng nhất (dày 5 - 70 km), vật chất ở trạng thái rắn chắc. Là nơi sinh sống của con người và muôn loài sinh vật.',
          'Lớp Manti: Dày gần 3 000 km, chiếm hơn 80% thể tích Trái Đất; phần trên quánh dẻo (quyển asthenosphere) là nơi các mảng kiến tạo trôi dạt.',
          'Lớp Nhân: Dày trên 3 000 km, nhiệt độ cực kì cao (lên tới 5 000°C); gồm nhân ngoài lỏng và nhân trong rắn cấu tạo chủ yếu từ sắt và niken.'
        ],
        visualExample: 'Hình cắt bổ cấu tạo 3 lớp Trái Đất như quả trứng luộc (SGK tr. 140).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 140, pdfPage: 142, section: 'Mục 1. Cấu tạo Trái Đất' },
        commonTrapAlert: 'Vỏ Trái Đất rất mỏng (chỉ như vỏ quả trứng gà), không phải là lớp dày nhất.',
        iconName: 'Layers'
      },
      {
        id: 'KC-610-2',
        cardIndex: 2,
        title: 'Thẻ 2: Thuyết Kiến tạo mảng và sự tiếp xúc',
        concept: '7 mảng kiến tạo lớn, Tiếp xúc xô húc và Tách dãn',
        coreDefinition: 'Vỏ Trái Đất không liền một khối mà được ghép bởi các mảng kiến tạo khổng lồ trôi dạt chậm chạp.',
        keyPoints: [
          'Bảy mảng kiến tạo lớn: Mảng Thái Bình Dương, mảng Á - Âu, mảng Ấn Độ - Ô-xtrây-li-a, mảng Phi, mảng Bắc Mỹ, mảng Nam Mỹ, mảng Nam Cực.',
          'Tiếp xúc xô húc (dồn ép): Hai mảng đâm vào nhau, uốn nếp tạo thành các dãy núi trẻ khổng lồ (ví dụ mảng Ấn Độ xô mảng Á - Âu tạo dãy Hi-ma-lay-a), rãnh đại dương sâu.',
          'Tiếp xúc tách dãn (xa nhau): Hai mảng tách xa nhau, mácma phun trào tạo thành sống núi ngầm giữa đại dương (sống núi ngầm Đại Tây Dương).',
          'Ranh giới các mảng là những vùng bất ổn nhất, thường xuyên xảy ra động đất và núi lửa.'
        ],
        visualExample: 'Bản đồ 7 mảng kiến tạo lớn và mũi tên chỉ hướng chuyển động của chúng (SGK tr. 142).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 142, pdfPage: 144, section: 'Mục 2. Các mảng kiến tạo' },
        commonTrapAlert: 'Dãy Hi-ma-lay-a hình thành do hai mảng lục địa xô húc vào nhau, không phải do núi lửa phun trào.',
        iconName: 'Globe'
      }
    ],
    mindmap: {
      id: 'mm-610-root',
      label: 'Cấu tạo Trái Đất & Mảng',
      summary: '3 lớp: Vỏ (5-70km, rắn) -> Manti (quánh dẻo) -> Nhân (>5000°C) | 7 mảng kiến tạo xô húc & tách dãn sinh động đất, núi lửa',
      children: [
        { id: 'mm-610-3lop', label: '3 Lớp cấu tạo', summary: 'Vỏ Trái Đất mỏng rắn; Manti quánh dẻo; Nhân cực nóng' },
        { id: 'mm-610-mang', label: 'Kiến tạo mảng', summary: 'Xô húc sinh núi cao (Hi-ma-lay-a); Tách dãn sinh sống núi ngầm' }
      ]
    },
    comparisons: [
      {
        id: 'comp-610-1',
        conceptA: 'Tiếp xúc xô húc giữa 2 mảng kiến tạo',
        conceptB: 'Tiếp xúc tách dãn giữa 2 mảng kiến tạo',
        keyDifferences: [
          { criteria: 'Hướng dịch chuyển', conceptAVal: 'Hai mảng dịch chuyển tiến lại gần và đâm vào nhau', conceptBVal: 'Hai mảng dịch chuyển rời xa nhau' },
          { criteria: 'Địa hình tạo thành', conceptAVal: 'Các dãy núi uốn nếp cao đồ sộ (Hi-ma-lay-a) hoặc rãnh biển sâu', conceptBVal: 'Các sống núi ngầm giữa đại dương và các thung lũng tách giãn' }
        ],
        commonConfusion: 'Học sinh nhầm tiếp xúc tách dãn cũng tạo ra núi cao uốn nếp.',
        memoryRule: 'Xô húc nén ép đẩy núi cao; Tách dãn phun trào rạch đại dương.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-610-1',
        questionText: 'Dãy núi Hi-ma-lay-a cao nhất thế giới được hình thành do hệ quả của hiện tượng kiến tạo nào?',
        options: [
          { id: 'A', text: 'Do sự xô húc dồn ép giữa mảng Ấn Độ - Ô-xtrây-li-a và mảng Á – Âu' },
          { id: 'B', text: 'Do sự tách dãn giữa mảng Phi và mảng Nam Mỹ' },
          { id: 'C', text: 'Do thiên thạch khổng lồ rơi xuống Trái Đất' },
          { id: 'D', text: 'Do gió và nước xói mòn tạo thành' }
        ],
        correctAnswer: 'A',
        explanation: 'Khi mảng Ấn Độ - Ô-xtrây-li-a trôi dạt về phía bắc đâm sầm vào mảng Á - Âu, lớp trầm tích biển Tethys cổ xưa bị nén ép uốn nếp trồi lên thành dãy núi Hi-ma-lay-a.',
        hint: 'Hai mảng lục địa xô húc nhau dồn ép đá uốn nếp vươn cao.',
        knowledgeCardId: 'KC-610-2'
      }
    ]
  },
  'G6-L11': {
    lessonId: 'G6-L11',
    grade: 6,
    chapterId: 'G6-C3',
    chapterTitle: 'Chương 3. Cấu tạo của Trái Đất. Vỏ Trái Đất',
    lessonTitle: 'Bài 11: Quá trình nội sinh và quá trình ngoại sinh. Hiện tượng tạo núi',
    sgkPageRange: 'Trang 144 – 147',
    pdfPageRange: 'Trang 146 – 149',
    objectives: [
      'Phân biệt được quá trình nội sinh (năng lượng từ trong lòng đất) và quá trình ngoại sinh (năng lượng từ bên ngoài).',
      'Hiểu được tác động đối lập nhưng đồng thời của nội sinh và ngoại sinh trong việc hình thành địa hình bề mặt Trái Đất.',
      'Trình bày được hiện tượng tạo núi uốn nếp và hiện tượng tạo núi đứt gãy.'
    ],
    knowledgeCards: [
      {
        id: 'KC-611-1',
        cardIndex: 1,
        title: 'Thẻ 1: So sánh Quá trình Nội sinh và Ngoại sinh',
        concept: 'Nội sinh nâng cao gồ ghề; Ngoại sinh san bằng mài mòn',
        coreDefinition: 'Địa hình bề mặt Trái Đất là kết quả của sự tác động đồng thời và liên tục giữa nội sinh và ngoại sinh.',
        keyPoints: [
          'Quá trình nội sinh: Do các nguồn năng lượng trong lòng Trái Đất sinh ra (sự phân rã phóng xạ, phản ứng nhiệt hạt nhân). Xu hướng: Nâng cao, gồ ghề bề mặt Trái Đất, sinh ra núi uốn nếp, đứt gãy, động đất, núi lửa.',
          'Quá trình ngoại sinh: Do các nguồn năng lượng từ bên ngoài sinh ra (năng lượng bức xạ Mặt Trời, gió, mưa, nước chảy, sinh vật). Xu hướng: Phá hủy, bóc mòn, vận chuyển, bồi tụ, san bằng các chỗ gồ ghề.'
        ],
        visualExample: 'Hình ảnh nếp uốn uốn lượn do nội sinh và khối đá bị gió cát mài mòn dạng nấm do ngoại sinh (SGK tr. 145).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 144, pdfPage: 146, section: 'Mục 1. Nội sinh và ngoại sinh' },
        commonTrapAlert: 'Nội sinh và ngoại sinh luôn diễn ra đồng thời, đối lập nhau: một bên làm gồ ghề, một bên san phẳng.',
        iconName: 'Mountain'
      }
    ],
    mindmap: {
      id: 'mm-611-root',
      label: 'Nội sinh & Ngoại sinh',
      summary: 'Nội sinh (trong lòng đất, làm gồ ghề nâng cao) <-> Ngoại sinh (Mặt Trời, gió nước, san bằng bồi tụ)',
      children: [
        { id: 'mm-611-noisinh', label: 'Quá trình Nội sinh', summary: 'Tạo núi uốn nếp, đứt gãy, động đất núi lửa' },
        { id: 'mm-611-ngoaisinh', label: 'Quá trình Ngoại sinh', summary: 'Phong hóa, xói mòn, bồi tụ đồng bằng' }
      ]
    },
    comparisons: [
      {
        id: 'comp-611-1',
        conceptA: 'Quá trình Nội sinh',
        conceptB: 'Quá trình Ngoại sinh',
        keyDifferences: [
          { criteria: 'Nguồn năng lượng', conceptAVal: 'Năng lượng bên trong lòng đất (phóng xạ, áp suất magma)', conceptBVal: 'Năng lượng bức xạ Mặt Trời, gió, nước chảy, băng hà' },
          { criteria: 'Xu hướng tác động', conceptAVal: 'Làm bề mặt Trái Đất thêm gồ ghề, nâng cao hoặc hạ lún', conceptBVal: 'San phẳng các chỗ gồ ghề, mài mòn đỉnh núi, lấp đầy thung lũng' }
        ],
        commonConfusion: 'Học sinh nhầm gió và dòng chảy là quá trình nội sinh.',
        memoryRule: 'Nội sinh trong lòng đẩy lên gồ ghề; Ngoại sinh bên ngoài gọt dũa san bằng.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-611-1',
        questionText: 'Hiện tượng nào dưới đây là kết quả tác động trực tiếp của quá trình ngoại sinh?',
        options: [
          { id: 'A', text: 'Nước mưa hòa tan đá vôi tạo thành các hang động kì vĩ' },
          { id: 'B', text: 'Núi lửa phun trào dung nham đỏ rực' },
          { id: 'C', text: 'Các mảng kiến tạo xô húc nhau tạo nếp uốn' },
          { id: 'D', text: 'Đứt gãy địa chất sinh ra động đất' }
        ],
        correctAnswer: 'A',
        explanation: 'Nước mưa hòa tan đá vôi (quá trình carxtơ) được cung cấp năng lượng từ khí quyển và vòng tuần hoàn nước, là quá trình ngoại sinh thuần túy.',
        hint: 'Tác nhân do nước mưa trên bề mặt Trái Đất.',
        knowledgeCardId: 'KC-611-1'
      }
    ]
  },
  'G6-L12': {
    lessonId: 'G6-L12',
    grade: 6,
    chapterId: 'G6-C3',
    chapterTitle: 'Chương 3. Cấu tạo của Trái Đất. Vỏ Trái Đất',
    lessonTitle: 'Bài 12: Núi lửa và động đất',
    sgkPageRange: 'Trang 148 – 151',
    pdfPageRange: 'Trang 150 – 153',
    objectives: [
      'Trình bày được khái niệm, nguyên nhân và cấu tạo của núi lửa (miệng núi lửa, ống dẫn, lò mácma).',
      'Giải thích được hiện tượng động đất, sóng thần và nguyên nhân phát sinh.',
      'Nắm vững các kĩ năng phòng tránh và tự bảo vệ khi xảy ra động đất.'
    ],
    knowledgeCards: [
      {
        id: 'KC-612-1',
        cardIndex: 1,
        title: 'Thẻ 1: Cấu tạo núi lửa và Vành đai lửa Thái Bình Dương',
        concept: 'Lò mácma, Ống dẫn, Miệng núi lửa, Vành đai lửa',
        coreDefinition: 'Núi lửa là nơi mácma từ trong lòng Trái Đất phun trào lên bề mặt qua miệng núi lửa.',
        keyPoints: [
          'Cấu tạo núi lửa: Lò mácma sâu trong vỏ Trái Đất -> Ống dẫn -> Miệng núi lửa (có thể tạo hồ miệng núi lửa khi ngưng hoạt động như Biển Hồ Pleiku).',
          'Tro bụi và dung nham khi nguội đi phân hủy thành đất đỏ ba-dan cực kì phì nhiêu cho cây công nghiệp (cà phê, cao su).',
          'Vành đai lửa Thái Bình Dương: Khu vực tập trung hơn 75% núi lửa đang hoạt động và 90% các trận động đất trên toàn thế giới.'
        ],
        visualExample: 'Sơ đồ mặt cắt cấu tạo một ngọn núi lửa đang phun trào tro bụi và dung nham (SGK tr. 148).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 148, pdfPage: 150, section: 'Mục 1. Núi lửa' },
        commonTrapAlert: 'Mácma ở dưới lòng đất gọi là mácma; khi đã phun trào lên mặt đất chảy tràn gọi là dung nham (lava).',
        iconName: 'Flame'
      },
      {
        id: 'KC-612-2',
        cardIndex: 2,
        title: 'Thẻ 2: Hiện tượng Động đất và Kĩ năng ứng phó',
        concept: 'Rung chuyển vỏ Trái Đất, Tâm chấn, Kĩ năng cúi xuống che chắn',
        coreDefinition: 'Động đất là hiện tượng rung chuyển đột ngột của bề mặt Trái Đất do sự giải phóng năng lượng dưới lòng đất.',
        keyPoints: [
          'Tâm chấn: Điểm trên bề mặt Trái Đất thẳng đứng phía trên tâm chấn ngầm, chịu chấn động mạnh nhất.',
          'Sóng thần (Tsunami): Động đất ngầm dưới đáy biển làm xáo trộn cột nước khổng lồ tạo nên những đợt sóng thần cao hàng chục mét tàn phá bờ biển.',
          'Kĩ năng an toàn khi có động đất: Cúi thấp người, chui xuống gầm bàn kiên cố, dùng tay hoặc cặp sách che đầu (quy tắc Drop - Cover - Hold on); tránh xa cửa kính, cột điện cao thế; không sử dụng thang máy.'
        ],
        visualExample: 'Hình ảnh hướng dẫn học sinh chui xuống gầm bàn vững chắc khi lớp học rung lắc (SGK tr. 150).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 150, pdfPage: 152, section: 'Mục 2. Động đất' },
        commonTrapAlert: 'Khi xảy ra động đất tuyệt đối không được dùng thang máy vì nguy cơ mất điện và kẹt trong thang máy.',
        iconName: 'Shield'
      }
    ],
    mindmap: {
      id: 'mm-612-root',
      label: 'Núi lửa & Động đất',
      summary: 'Núi lửa (dung nham phun trào, đất bazan màu mỡ) | Động đất & Sóng thần | Vành đai lửa TBD | Quy tắc Drop-Cover-Hold on',
      children: [
        { id: 'mm-612-nuilua', label: 'Núi lửa', summary: 'Mácma phun từ lòng đất, đất đỏ ba-dan màu mỡ' },
        { id: 'mm-612-dongdat', label: 'Động đất', summary: 'Rung chấn đột ngột, nguy cơ sóng thần ven biển' },
        { id: 'mm-612-kynang', label: 'Kĩ năng phòng tránh', summary: 'Chui dưới gầm bàn vững chắc, tránh cửa kính, không đi thang máy' }
      ]
    },
    comparisons: [
      {
        id: 'comp-612-1',
        conceptA: 'Mácma (Magma)',
        conceptB: 'Dung nham (Lava)',
        keyDifferences: [
          { criteria: 'Vị trí tồn tại', conceptAVal: 'Nằm sâu dưới lòng đất, trong lò mácma và ống dẫn', conceptBVal: 'Đã phun trào thoát ra khỏi miệng núi lửa, chảy tràn trên bề mặt đất' },
          { criteria: 'Khí và áp suất', conceptAVal: 'Chứa hàm lượng khí hòa tan rất cao dưới áp suất lớn', conceptBVal: 'Các bọt khí đã thoát ra phần lớn vào khí quyển' }
        ],
        commonConfusion: 'Học sinh hay gọi dung nham là mácma ngay cả khi nó đã chảy tràn trên đường.',
        memoryRule: 'Mácma ở sâu trong lòng; Dung nham phun tràn mặt đất.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-612-1',
        questionText: 'Hành động nào dưới đây là đúng đắn và an toàn nhất khi bạn đang ở trong phòng học mà xảy ra trận động đất rung chuyển?',
        options: [
          { id: 'A', text: 'Nhanh chóng cúi xuống, chui vào gầm bàn học kiên cố và dùng tay/cặp che đầu' },
          { id: 'B', text: 'Chạy ngay vào thang máy để xuống tầng trệt' },
          { id: 'C', text: 'Đứng sát vào cửa sổ bằng kính để nhìn ra ngoài' },
          { id: 'D', text: 'Nhảy từ ban công tầng lầu xuống đất' }
        ],
        correctAnswer: 'A',
        explanation: 'Quy tắc Drop, Cover and Hold On: Bảo vệ phần đầu và cổ dưới vật che chắn kiên cố chống mảnh vỡ rơi.',
        hint: 'Cúi xuống và che chắn phần đầu dưới bàn học.',
        knowledgeCardId: 'KC-612-2'
      }
    ]
  },
  'G6-L13': {
    lessonId: 'G6-L13',
    grade: 6,
    chapterId: 'G6-C3',
    chapterTitle: 'Chương 3. Cấu tạo của Trái Đất. Vỏ Trái Đất',
    lessonTitle: 'Bài 13: Các dạng địa hình chính trên Trái Đất. Khoáng sản',
    sgkPageRange: 'Trang 152 – 155',
    pdfPageRange: 'Trang 154 – 157',
    objectives: [
      'Phân biệt được 4 dạng địa hình chính: Núi, Đồi, Cao nguyên, Đồng bằng (về độ cao, đỉnh, sườn, thung lũng).',
      'Hiểu được khoáng sản là gì và phân loại khoáng sản thành 3 nhóm (năng lượng, kim loại, phi kim loại).',
      'Nêu được ý nghĩa của việc sử dụng tiết kiệm và hợp lí tài nguyên khoáng sản.'
    ],
    knowledgeCards: [
      {
        id: 'KC-613-1',
        cardIndex: 1,
        title: 'Thẻ 1: Bốn dạng địa hình chính trên Trái Đất',
        concept: 'Núi (>500m), Đồi (<200m), Cao nguyên (sườn dốc), Đồng bằng (bằng phẳng)',
        coreDefinition: 'Bề mặt lục địa gồm 4 dạng địa hình chính phân biệt nhau qua độ cao và hình thái.',
        keyPoints: [
          'Núi: Nhô cao rõ rệt trên mặt đất, độ cao tuyệt đối thường trên 500 m; có đỉnh nhọn, sườn dốc và thung lũng sâu.',
          'Đồi: Dạng địa hình nhô cao, đỉnh tròn, sườn thoải, độ cao tương đối không quá 200 m so với vùng đất xung quanh.',
          'Cao nguyên: Bề mặt tương đối bằng phẳng hoặc lượn sóng, độ cao tuyệt đối trên 500 m, sườn dốc đứng chia tách với vùng đất thấp.',
          'Đồng bằng (bình nguyên): Địa hình thấp, bề mặt bằng phẳng hoặc gợn sóng nhẹ, độ cao tuyệt đối thường dưới 200 m (chủ yếu do phù sa bồi đắp).'
        ],
        visualExample: 'Hình vẽ minh họa lát cắt so sánh 4 dạng địa hình: Núi, Đồi, Cao nguyên, Đồng bằng (SGK tr. 153).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 152, pdfPage: 154, section: 'Mục 1. Các dạng địa hình' },
        commonTrapAlert: 'Cao nguyên có độ cao lớn (>500m) giống núi nhưng bề mặt lại bằng phẳng hoặc lượn sóng chứ không có đỉnh nhọn.',
        iconName: 'Mountain'
      },
      {
        id: 'KC-613-2',
        cardIndex: 2,
        title: 'Thẻ 2: Khái niệm và phân loại khoáng sản',
        concept: 'Khoáng sản năng lượng, kim loại, phi kim loại',
        coreDefinition: 'Khoáng sản là những khoáng vật và đất đá có ích trong vỏ Trái Đất được con người khai thác sử dụng.',
        keyPoints: [
          'Khoáng sản năng lượng (nhiên liệu): Than đá, dầu mỏ, khí đốt tự nhiên (làm chất đốt, nhiệt điện, hóa dầu).',
          'Khoáng sản kim loại: Kim loại đen (sắt, man-gan, crôm) và kim loại màu (đồng, chì, kẽm, nhôm, thiếc, vàng).',
          'Khoáng sản phi kim loại: Muối mỏ, thạch anh, đá vôi, cát, kim cương (vật liệu xây dựng, phân bón hóa chất).',
          'Sử dụng tiết kiệm: Khoáng sản là tài nguyên không thể phục hồi, cần khai thác hợp lí và bảo vệ môi trường.'
        ],
        visualExample: 'Bảng phân loại khoáng sản với các mẫu vật than đá, quặng sắt và muối mỏ (SGK tr. 154).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 154, pdfPage: 156, section: 'Mục 2. Khoáng sản' },
        commonTrapAlert: 'Than đá và dầu mỏ là khoáng sản NĂNG LƯỢNG (nhiên liệu), không phải khoáng sản kim loại.',
        iconName: 'Gem'
      }
    ],
    mindmap: {
      id: 'mm-613-root',
      label: 'Địa hình & Khoáng sản',
      summary: '4 dạng địa hình: Núi, Đồi, Cao nguyên, Đồng bằng | 3 nhóm khoáng sản: Năng lượng, Kim loại, Phi kim loại',
      children: [
        { id: 'mm-613-dh', label: '4 Dạng địa hình', summary: 'Núi (đỉnh nhọn sườn dốc); Cao nguyên (cao, mặt phẳng); Đồng bằng (thấp bằng)' },
        { id: 'mm-613-ks', label: '3 Nhóm khoáng sản', summary: 'Năng lượng (than, dầu); Kim loại (sắt, đồng); Phi kim (đá vôi, muối)' }
      ]
    },
    comparisons: [
      {
        id: 'comp-613-1',
        conceptA: 'Cao nguyên',
        conceptB: 'Đồng bằng (Bình nguyên)',
        keyDifferences: [
          { criteria: 'Độ cao tuyệt đối', conceptAVal: 'Độ cao lớn, thường trên 500 m so với mực nước biển', conceptBVal: 'Độ cao thấp, thường dưới 200 m' },
          { criteria: 'Hình thái sườn', conceptAVal: 'Sườn dốc đứng ngăn cách rõ rệt với các vùng xung quanh', conceptBVal: 'Thoai thoải, tiếp nối nhẹ nhàng với biển hoặc đồi' }
        ],
        commonConfusion: 'Học sinh nhầm cao nguyên và đồng bằng giống nhau vì bề mặt cùng tương đối bằng phẳng.',
        memoryRule: 'Đồng bằng: Thấp bằng phẳng; Cao nguyên: Ở trên cao nhưng bề mặt bằng phẳng.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-613-1',
        questionText: 'Than đá, dầu mỏ và khí đốt tự nhiên thuộc nhóm khoáng sản nào?',
        options: [
          { id: 'A', text: 'Khoáng sản năng lượng (nhiên liệu)' },
          { id: 'B', text: 'Khoáng sản kim loại đen' },
          { id: 'C', text: 'Khoáng sản kim loại màu' },
          { id: 'D', text: 'Khoáng sản phi kim loại' }
        ],
        correctAnswer: 'A',
        explanation: 'Than đá, dầu mỏ và khí thiên nhiên là nhiên liệu cháy sinh năng lượng, thuộc nhóm khoáng sản năng lượng.',
        hint: 'Cung cấp năng lượng đốt cháy và phát điện.',
        knowledgeCardId: 'KC-613-2'
      }
    ]
  },
  'G6-L14': {
    lessonId: 'G6-L14',
    grade: 6,
    chapterId: 'G6-C3',
    chapterTitle: 'Chương 3. Cấu tạo của Trái Đất. Vỏ Trái Đất',
    lessonTitle: 'Bài 14: Thực hành: Đọc lược đồ địa hình tỉ lệ lớn và lát cắt địa hình đơn giản',
    sgkPageRange: 'Trang 156 – 157',
    pdfPageRange: 'Trang 158 – 159',
    objectives: [
      'Đọc được đường đồng mức trên lược đồ địa hình tỉ lệ lớn để xác định độ cao và hình thái địa hình.',
      'Hiểu được quy luật: Các đường đồng mức càng nằm gần nhau thì sườn núi càng dốc; càng xa nhau sườn càng thoải.',
      'Đọc được lát cắt địa hình đơn giản theo tuyến cắt cho trước.'
    ],
    knowledgeCards: [
      {
        id: 'KC-614-1',
        cardIndex: 1,
        title: 'Thẻ 1: Đường đồng mức và độ dốc của sườn núi',
        concept: 'Đường đồng mức nối các điểm cùng độ cao; Khoảng cách phản ánh độ dốc',
        coreDefinition: 'Đường đồng mức là đường nối liền tất cả các điểm có cùng độ cao tuyệt đối trên mặt phẳng bản đồ.',
        keyPoints: [
          'Hai đường đồng mức liền kề có khoảng cao đều nhất định (ví dụ cách nhau 50 m hoặc 100 m).',
          'Độ dốc địa hình: Nơi các đường đồng mức nằm KHÍT NHAU (khoảng cách hẹp) là nơi sườn núi RẤT DỐC. Nơi các đường đồng mức nằm THƯA NHAU (khoảng cách rộng) là nơi sườn THOẢI.',
          'Đỉnh núi thường được thể hiện bằng vòng tròn đồng mức nhỏ nhất ở trung tâm kèm dấu chấm ghi chỉ số độ cao.'
        ],
        visualExample: 'Hình vẽ quả đồi thực tế được biểu diễn bằng các vòng tròn đồng mức (SGK tr. 156).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 156, pdfPage: 158, section: 'Mục 1. Đường đồng mức' },
        commonTrapAlert: 'Đường đồng mức sít nhau = Sườn dốc; Đường đồng mức thưa nhau = Sườn thoải.',
        iconName: 'TrendingUp'
      }
    ],
    mindmap: {
      id: 'mm-614-root',
      label: 'Đường đồng mức & Lát cắt',
      summary: 'Nối các điểm cùng độ cao | Khít nhau = Dốc đứng | Thưa nhau = Thoai thoải | Lát cắt thể hiện mặt nghiêng',
      children: [
        { id: 'mm-614-dm', label: 'Quy tắc đường đồng mức', summary: 'Càng gần nhau càng dốc, càng xa nhau càng thoải' },
        { id: 'mm-614-latcat', label: 'Đọc lát cắt', summary: 'Nhìn thấy đỉnh cao, sườn dốc và thung lũng theo tuyến' }
      ]
    },
    comparisons: [
      {
        id: 'comp-614-1',
        conceptA: 'Sườn núi có đường đồng mức nằm sát khít nhau',
        conceptB: 'Sườn núi có đường đồng mức nằm cách xa nhau',
        keyDifferences: [
          { criteria: 'Độ dốc', conceptAVal: 'Sườn núi rất dốc, hiểm trở, vách đá dựng đứng', conceptBVal: 'Sườn núi thoai thoải, dốc nhẹ' },
          { criteria: 'Di chuyển ngoài thực tế', conceptAVal: 'Leo trèo cực kì khó khăn, nguy hiểm', conceptBVal: 'Dễ dàng đi bộ và canh tác làm nương rẫy' }
        ],
        commonConfusion: 'Học sinh nhầm đường đồng mức thưa là núi cao hơn.',
        memoryRule: 'Đồng mức khít dày -> Dốc đứng; Đồng mức thưa thớt -> Sườn thoải.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-614-1',
        questionText: 'Trên bản đồ địa hình, khi quan sát thấy các đường đồng mức nằm rất gần nhau và dày đặc, điều đó chứng tỏ địa hình ở đó như thế nào?',
        options: [
          { id: 'A', text: 'Sườn núi rất dốc' },
          { id: 'B', text: 'Sườn núi rất thoải' },
          { id: 'C', text: 'Vùng đồng bằng bằng phẳng' },
          { id: 'D', text: 'Hồ nước sâu' }
        ],
        correctAnswer: 'A',
        explanation: 'Khoảng cách giữa các đường đồng mức tỉ lệ nghịch với độ dốc: càng sít nhau thì độ dốc càng lớn.',
        hint: 'Càng gần nhau càng dốc.',
        knowledgeCardId: 'KC-614-1'
      }
    ]
  },
  'G6-L15': {
    lessonId: 'G6-L15',
    grade: 6,
    chapterId: 'G6-C4',
    chapterTitle: 'Chương 4. Khí hậu và biến đổi khí hậu',
    lessonTitle: 'Bài 15: Lớp vỏ khí của Trái Đất. Khí áp và gió',
    sgkPageRange: 'Trang 158 – 163',
    pdfPageRange: 'Trang 160 – 165',
    objectives: [
      'Trình bày được thành phần của không khí (khí nitơ 78%, oxy 21%, hơi nước và khí khác 1%).',
      'Mô tả được các tầng của khí quyển: Tầng đối lưu, tầng bình lưu và các tầng cao khí quyển.',
      'Hiểu được khí áp là gì, sự phân bố các đai áp cao, áp thấp và các loại gió thổi thường xuyên (gió Tín phong, gió Tây ôn đới, gió Đông cực).'
    ],
    knowledgeCards: [
      {
        id: 'KC-615-1',
        cardIndex: 1,
        title: 'Thẻ 1: Các tầng của lớp vỏ khí (Khí quyển)',
        concept: 'Tầng đối lưu (chứa 80% không khí, sinh thời tiết), Tầng bình lưu (chứa tầng ozon)',
        coreDefinition: 'Khí quyển bao bọc quanh Trái Đất dày hàng nghìn kilômét gồm nhiều tầng khác nhau.',
        keyPoints: [
          'Thành phần không khí: Khí Nitơ chiếm 78%, khí Oxy chiếm 21%, hơi nước và các khí khác chiếm 1% (nhưng hơi nước sinh ra mây, mưa, bão).',
          'Tầng đối lưu: Sát mặt đất dày đến 16 km, chứa 80% khối lượng không khí, nơi diễn ra toàn bộ hiện tượng mây, mưa, sấm sét. Càng lên cao nhiệt độ càng giảm (cứ lên cao 100 m nhiệt độ giảm 0,6°C).',
          'Tầng bình lưu: Nằm trên tầng đối lưu đến độ cao 50 km; chứa tầng ô-dôn (ozone) hấp thụ tia cực tím độc hại từ Mặt Trời bảo vệ sự sống.'
        ],
        visualExample: 'Sơ đồ các tầng khí quyển và biểu đồ thành phần không khí hình tròn (SGK tr. 159).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 158, pdfPage: 160, section: 'Mục 1. Lớp vỏ khí' },
        commonTrapAlert: 'Toàn bộ hiện tượng mây mưa, gió bão chỉ diễn ra ở TẦNG ĐỐI LƯU; tầng bình lưu không có mây mưa.',
        iconName: 'Wind'
      },
      {
        id: 'KC-615-2',
        cardIndex: 2,
        title: 'Thẻ 2: Khí áp và các loại gió thổi thường xuyên',
        concept: 'Gió thổi từ Áp Cao về Áp Thấp; Gió Tín phong, Gió Tây ôn đới',
        coreDefinition: 'Gió là sự chuyển động của các khối không khí từ nơi khí áp cao về nơi khí áp thấp.',
        keyPoints: [
          'Khí áp: Là sức nén của không khí lên bề mặt Trái Đất. Các đai khí áp xen kẽ nhau: Áp thấp Xích đạo, Áp cao chí tuyến (30°), Áp thấp ôn đới (60°), Áp cao cực (90°).',
          'Gió Tín phong (Mậu dịch): Thổi từ hai đai áp cao chí tuyến về áp thấp Xích đạo quanh năm khô ráo.',
          'Gió Tây ôn đới: Thổi từ hai đai áp cao chí tuyến về hai đai áp thấp ôn đới (60°), mang nhiều hơi ẩm từ đại dương gây mưa nhiều.'
        ],
        visualExample: 'Sơ đồ các đai khí áp và hoàn lưu các loại gió thổi thường xuyên trên Trái Đất (SGK tr. 162).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 161, pdfPage: 163, section: 'Mục 2 & 3. Khí áp và gió' },
        commonTrapAlert: 'Gió luôn luôn thổi từ ÁP CAO về ÁP THẤP, không bao giờ thổi ngược lại.',
        iconName: 'Navigation'
      }
    ],
    mindmap: {
      id: 'mm-615-root',
      label: 'Khí quyển & Gió',
      summary: 'Thành phần: Nitơ 78%, Oxy 21% | Tầng đối lưu (mây mưa) & Tầng bình lưu (ozon) | Gió thổi từ Cao -> Thấp | Gió Tín phong & Tây ôn đới',
      children: [
        { id: 'mm-615-tang', label: 'Các tầng khí quyển', summary: 'Đối lưu (sinh hiện tượng thời tiết); Bình lưu (chứa tầng ozon)' },
        { id: 'mm-615-gio', label: 'Khí áp & Gió', summary: 'Gió thổi từ Áp cao về Áp thấp; Gió Tín phong, Tây ôn đới' }
      ]
    },
    comparisons: [
      {
        id: 'comp-615-1',
        conceptA: 'Gió Tín phong (Mậu dịch)',
        conceptB: 'Gió Tây ôn đới',
        keyDifferences: [
          { criteria: 'Phạm vi hoạt động', conceptAVal: 'Thổi từ áp cao chí tuyến (30°) về áp thấp Xích đạo (0°)', conceptBVal: 'Thổi từ áp cao chí tuyến (30°) về áp thấp ôn đới (60°)' },
          { criteria: 'Tính chất độ ẩm', conceptAVal: 'Thổi từ vĩ độ cao xuống thấp nên nóng khô, ít mưa', conceptBVal: 'Thổi qua đại dương mang nhiều hơi nước, ẩm ướt mưa nhiều' }
        ],
        commonConfusion: 'Học sinh nhầm hướng thổi của gió Tín phong và gió Tây ôn đới.',
        memoryRule: 'Gió luôn đi từ Áp Cao về Áp Thấp.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-615-1',
        questionText: 'Khí quyển Trái Đất có thành phần khí nào chiếm tỉ lệ lớn nhất (khoảng 78% thể tích không khí)?',
        options: [
          { id: 'A', text: 'Khí Nitơ' },
          { id: 'B', text: 'Khí Oxy' },
          { id: 'C', text: 'Khí Các-bô-níc (CO2)' },
          { id: 'D', text: 'Hơi nước' }
        ],
        correctAnswer: 'A',
        explanation: 'Khí Nitơ chiếm 78%, khí Oxy chiếm 21%, còn lại 1% là hơi nước và các khí khác.',
        hint: 'Chiếm gần 4/5 bầu khí quyển.',
        knowledgeCardId: 'KC-615-1'
      }
    ]
  },
  'G6-L16': {
    lessonId: 'G6-L16',
    grade: 6,
    chapterId: 'G6-C4',
    chapterTitle: 'Chương 4. Khí hậu và biến đổi khí hậu',
    lessonTitle: 'Bài 16: Nhiệt độ không khí. Mây và mưa',
    sgkPageRange: 'Trang 164 – 167',
    pdfPageRange: 'Trang 166 – 169',
    objectives: [
      'Giải thích được vì sao không khí có nhiệt độ và sự thay đổi nhiệt độ theo vĩ độ và theo độ cao.',
      'Nắm vững quy luật: Cứ lên cao 100 m, nhiệt độ không khí giảm 0,6°C.',
      'Trình bày được quá trình hình thành mây và mưa, sự phân bố lượng mưa trên Trái Đất.'
    ],
    knowledgeCards: [
      {
        id: 'KC-616-1',
        cardIndex: 1,
        title: 'Thẻ 1: Sự thay đổi nhiệt độ theo độ cao và vĩ độ',
        concept: 'Lên cao 100m giảm 0,6°C; Từ Xích đạo về cực nhiệt độ giảm dần',
        coreDefinition: 'Nhiệt độ không khí là độ nóng lạnh của không khí do bức xạ nhiệt Mặt Trời chiếu xuống mặt đất rồi phản hồi vào không khí.',
        keyPoints: [
          'Theo độ cao: Càng lên cao không khí càng loãng, bụi và hơi nước càng ít nên hấp thụ nhiệt kém -> Cứ lên cao 100 m, nhiệt độ giảm 0,6°C (lên 1000 m giảm 6°C).',
          'Theo vĩ độ: Vùng Xích đạo góc chiếu lớn nên nhận nhiều nhiệt, nóng quanh năm; càng về hai cực góc chiếu càng nhỏ nên nhiệt độ càng giảm dần.',
          'Theo vị trí gần hay xa biển: Mùa hạ nước biển hấp thụ nhiệt chậm nên mát hơn đất liền; mùa đông nước biển tỏa nhiệt chậm nên ấm hơn đất liền.'
        ],
        visualExample: 'Hình minh họa chân núi 25°C, đỉnh núi cao 2000 m nhiệt độ chỉ còn 13°C (SGK tr. 165).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 164, pdfPage: 166, section: 'Mục 1. Nhiệt độ không khí' },
        commonTrapAlert: 'Quy tắc vàng tính toán: ΔT = (Độ cao chênh lệch / 100) × 0,6°C.',
        iconName: 'Sun'
      },
      {
        id: 'KC-616-2',
        cardIndex: 2,
        title: 'Thẻ 2: Quá trình hình thành Mây và Mưa',
        concept: 'Bốc hơi nước -> Ngưng tụ thành mây -> Hạt nước lớn rơi thành mưa',
        coreDefinition: 'Khi không khí bốc lên cao gặp lạnh, hơi nước ngưng tụ thành những hạt nước li ti tạo thành mây; các hạt nước tụ lại to dần rơi xuống thành mưa.',
        keyPoints: [
          'Phân bố mưa: Mưa nhiều nhất ở vùng Xích đạo (nắng nhiều, bốc hơi mạnh, áp thấp bốc hơi liên tục, lượng mưa >2000 mm/năm).',
          'Mưa ít ở hai vùng chí tuyến (áp cao ngự trị không khí hạ xuống không sinh mưa) và hai vùng cực (lạnh giá không bốc hơi được).'
        ],
        visualExample: 'Bản đồ phân bố lượng mưa trung bình năm của Trái Đất (SGK tr. 167).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 166, pdfPage: 168, section: 'Mục 2. Mây và mưa' },
        commonTrapAlert: 'Mưa nhiều nhất ở Xích đạo; ít nhất ở vùng chí tuyến hoang mạc và hai vùng cực.',
        iconName: 'CloudRain'
      }
    ],
    mindmap: {
      id: 'mm-616-root',
      label: 'Nhiệt độ & Mưa',
      summary: 'Lên cao 100m giảm 0,6°C | Vĩ độ cao lạnh hơn vĩ độ thấp | Hơi nước ngưng tụ thành mây và mưa | Xích đạo mưa nhiều nhất',
      children: [
        { id: 'mm-616-nhietdo', label: 'Quy luật nhiệt độ', summary: 'Càng lên cao càng lạnh (100m giảm 0,6°C), Xích đạo về cực giảm dần' },
        { id: 'mm-616-mua', label: 'Mây và Mưa', summary: 'Bốc hơi -> Ngưng tụ -> Mưa; Xích đạo >2000mm' }
      ]
    },
    comparisons: [
      {
        id: 'comp-616-1',
        conceptA: 'Lượng mưa vùng Xích đạo',
        conceptB: 'Lượng mưa vùng Chí tuyến',
        keyDifferences: [
          { criteria: 'Lượng mưa trung bình năm', conceptAVal: 'Rất lớn, thường trên 1 500 – 2 000 mm/năm', conceptBVal: 'Rất ít, thường dưới 200 – 300 mm/năm' },
          { criteria: 'Nguyên nhân khí áp', conceptAVal: 'Đai áp thấp Xích đạo, không khí bốc lên cao ngưng tụ mưa lớn', conceptBVal: 'Đai áp cao chí tuyến, không khí giáng xuống khô nóng' }
        ],
        commonConfusion: 'Học sinh nhầm vùng chí tuyến nhận nhiều nắng nên sẽ mưa nhiều (thực tế chí tuyến là hoang mạc vì áp cao).',
        memoryRule: 'Áp thấp hút gió bốc lên sinh mưa; Áp cao nén xuống khô ráo hoang mạc.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-616-1',
        questionText: 'Nếu ở chân núi (độ cao 0 m) đo được nhiệt độ là 30°C, thì ở độ cao 1 500 m trên ngọn núi đó nhiệt độ xấp xỉ bao nhiêu?',
        options: [
          { id: 'A', text: '21°C' },
          { id: 'B', text: '25°C' },
          { id: 'C', text: '15°C' },
          { id: 'D', text: '9°C' }
        ],
        correctAnswer: 'A',
        explanation: 'Cứ lên 100 m nhiệt độ giảm 0,6°C. Lên 1 500 m nhiệt độ giảm: (1 500 / 100) × 0,6 = 9°C. Nhiệt độ tại đỉnh = 30°C - 9°C = 21°C.',
        hint: '1 500 m làm giảm 9 độ C.',
        knowledgeCardId: 'KC-616-1'
      }
    ]
  },
  'G6-L17': {
    lessonId: 'G6-L17',
    grade: 6,
    chapterId: 'G6-C4',
    chapterTitle: 'Chương 4. Khí hậu và biến đổi khí hậu',
    lessonTitle: 'Bài 17: Thời tiết và khí hậu. Biến đổi khí hậu',
    sgkPageRange: 'Trang 168 – 171',
    pdfPageRange: 'Trang 170 – 173',
    objectives: [
      'Phân biệt rõ ràng giữa thời tiết (hiện tượng nhất thời) và khí hậu (quy luật lặp lại qua nhiều năm).',
      'Xác định được các đới khí hậu chính trên Trái Đất: Đới nóng (nhiệt đới), hai đới ôn hòa (ôn đới), hai đới lạnh (hàn đới).',
      'Hiểu được các biểu hiện và nguyên nhân của hiện tượng biến đổi khí hậu toàn cầu.'
    ],
    knowledgeCards: [
      {
        id: 'KC-617-1',
        cardIndex: 1,
        title: 'Thẻ 1: Phân biệt Thời tiết và Khí hậu',
        concept: 'Thời tiết biến đổi theo giờ/ngày; Khí hậu quy luật ổn định nhiều năm',
        coreDefinition: 'Thời tiết phản ánh trạng thái nhất thời của khí quyển tại một địa phương; Khí hậu phản ánh quy luật lâu dài.',
        keyPoints: [
          'Thời tiết: Sự biểu hiện của các hiện tượng khí tượng (nắng, mưa, gió, nhiệt độ) ở một nơi trong thời gian ngắn (giờ, ngày) và luôn luôn biến đổi.',
          'Khí hậu: Là sự lặp đi lặp lại của tình hình thời tiết ở một khu vực nhất định theo một quy luật qua nhiều năm (ví dụ khí hậu nhiệt đới gió mùa của Việt Nam).',
          'Năm đới khí hậu chính: 1 đới nóng (giữa 2 chí tuyến), 2 đới ôn hòa (từ chí tuyến đến vòng cực), 2 đới lạnh (từ vòng cực đến cực).'
        ],
        visualExample: 'Bản đồ 5 đới khí hậu trên Trái Đất đối xứng qua đường Xích đạo (SGK tr. 169).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 168, pdfPage: 170, section: 'Mục 1. Thời tiết và khí hậu' },
        commonTrapAlert: 'Nói "Dự báo thời tiết ngày mai" là đúng; nói "Dự báo khí hậu ngày mai" là SAI bản chất khoa học.',
        iconName: 'CloudSun'
      },
      {
        id: 'KC-617-2',
        cardIndex: 2,
        title: 'Thẻ 2: Hiện tượng Biến đổi khí hậu toàn cầu',
        concept: 'Hiệu ứng nhà kính, Trái Đất ấm lên, Băng tan và Nước biển dâng',
        coreDefinition: 'Biến đổi khí hậu là sự thay đổi của hệ thống khí hậu Trái Đất do tác động của con người làm gia tăng khí nhà kính.',
        keyPoints: [
          'Nguyên nhân: Đốt nhiên liệu hóa thạch (than đá, dầu mỏ), chặt phá rừng làm tăng nồng độ khí CO2 gây hiệu ứng nhà kính giữ nhiệt.',
          'Biểu hiện: Nhiệt độ trung bình toàn cầu tăng lên, băng ở hai cực tan nhanh làm nước biển dâng, gia tăng bão lụt, hạn hán khốc liệt.',
          'Giải pháp: Chuyển sang năng lượng tái tạo (gió, mặt trời), trồng và bảo vệ rừng, tiết kiệm điện năng.'
        ],
        visualExample: 'Tảng băng khổng lồ tan rã ở vùng cực và nước biển dâng ngập vùng trũng ven biển.',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 170, pdfPage: 172, section: 'Mục 2. Biến đổi khí hậu' },
        commonTrapAlert: 'Biến đổi khí hậu làm gia tăng cả thiên tai nóng (hạn hán) lẫn cực đoan rét buốt cục bộ.',
        iconName: 'AlertTriangle'
      }
    ],
    mindmap: {
      id: 'mm-617-root',
      label: 'Thời tiết & Khí hậu',
      summary: 'Thời tiết (ngắn hạn, biến động) vs Khí hậu (dài hạn, quy luật) | 5 Đới khí hậu | Biến đổi khí hậu do CO2, băng tan',
      children: [
        { id: 'mm-617-so-sanh', label: 'Thời tiết vs Khí hậu', summary: 'Thời tiết theo giờ/ngày; Khí hậu lặp lại nhiều năm' },
        { id: 'mm-617-bdkh', label: 'Biến đổi khí hậu', summary: 'Hiệu ứng nhà kính CO2, Trái Đất nóng lên, nước biển dâng' }
      ]
    },
    comparisons: [
      {
        id: 'comp-617-1',
        conceptA: 'Hiện tượng Thời tiết',
        conceptB: 'Hiện tượng Khí hậu',
        keyDifferences: [
          { criteria: 'Khung thời gian', conceptAVal: 'Ngắn hạn: tính theo giờ, ngày, buổi', conceptBVal: 'Dài hạn: tổng kết và lặp lại qua hàng chục, hàng trăm năm' },
          { criteria: 'Tính ổn định', conceptAVal: 'Rất linh hoạt, biến đổi nhanh chóng trong ngày', conceptBVal: 'Tương đối ổn định và mang tính chu kì quy luật rõ rệt' }
        ],
        commonConfusion: 'Học sinh rất hay nhầm lẫn hai thuật ngữ này trong văn nói hàng ngày.',
        memoryRule: 'Thời tiết: Hôm nay nắng hay mưa. Khí hậu: Mùa đông năm nào cũng lạnh.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-617-1',
        questionText: 'Câu nào sau đây mô tả đúng về "Thời tiết" thay vì "Khí hậu"?',
        options: [
          { id: 'A', text: 'Hôm nay Hà Nội trời nhiều mây, buổi chiều có mưa dông' },
          { id: 'B', text: 'Miền Bắc nước ta có mùa đông lạnh kéo dài từ tháng 11 đến tháng 4 năm sau' },
          { id: 'C', text: 'Châu Phi có khí hậu nóng khô bậc nhất thế giới' },
          { id: 'D', text: 'Vùng Xích đạo có mưa ẩm quanh năm' }
        ],
        correctAnswer: 'A',
        explanation: 'Trạng thái nhiều mây, chiều mưa dông của một ngày cụ thể là biểu hiện của thời tiết nhất thời.',
        hint: 'Mô tả diễn biến cụ thể của một ngày.',
        knowledgeCardId: 'KC-617-1'
      }
    ]
  },
  'G6-L18': {
    lessonId: 'G6-L18',
    grade: 6,
    chapterId: 'G6-C4',
    chapterTitle: 'Chương 4. Khí hậu và biến đổi khí hậu',
    lessonTitle: 'Bài 18: Thực hành: Phân tích biểu đồ nhiệt độ, lượng mưa',
    sgkPageRange: 'Trang 172 – 173',
    pdfPageRange: 'Trang 174 – 175',
    objectives: [
      'Đọc và khai thác được số liệu trên biểu đồ kết hợp nhiệt độ và lượng mưa.',
      'Biết cách xác định tháng nóng nhất, tháng lạnh nhất, biên độ nhiệt năm.',
      'Biết cách xác định mùa mưa và mùa khô dựa trên các cột lượng mưa của 12 tháng.'
    ],
    knowledgeCards: [
      {
        id: 'KC-618-1',
        cardIndex: 1,
        title: 'Thẻ 1: Các bước đọc biểu đồ nhiệt độ và lượng mưa',
        concept: 'Đường nhiệt độ màu đỏ (°C), Cột lượng mưa màu xanh (mm), 12 tháng',
        coreDefinition: 'Biểu đồ nhiệt độ và lượng mưa kết hợp thể hiện đặc trưng khí hậu của một địa điểm trong năm.',
        keyPoints: [
          'Trục dọc bên trái: Thường là chỉ số nhiệt độ (°C), thể hiện bằng ĐƯỜNG biểu diễn màu đỏ.',
          'Trục dọc bên phải: Thường là chỉ số lượng mưa (mm), thể hiện bằng các CỘT màu xanh.',
          'Trục ngang: Thể hiện 12 tháng trong năm (từ tháng 1 đến tháng 12).',
          'Cách tính: Biên độ nhiệt năm = Nhiệt độ tháng cao nhất trừ đi Nhiệt độ tháng thấp nhất; Tổng lượng mưa năm = Tổng lượng mưa của cả 12 tháng.'
        ],
        visualExample: 'Biểu đồ nhiệt độ lượng mưa trạm Láng (Hà Nội) và trạm Tân Sơn Hòa (TP. HCM) - SGK tr. 172.',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 172, pdfPage: 174, section: 'Mục 1 & 2. Kĩ năng đọc biểu đồ' },
        commonTrapAlert: 'Không nhìn nhầm số liệu nhiệt độ sang trục lượng mưa hoặc ngược lại.',
        iconName: 'BarChart3'
      }
    ],
    mindmap: {
      id: 'mm-618-root',
      label: 'Đọc biểu đồ khí hậu',
      summary: 'Đường đỏ: Nhiệt độ (°C) | Cột xanh: Lượng mưa (mm) | 12 Tháng | Tính biên độ nhiệt & mùa mưa',
      children: [
        { id: 'mm-618-nhiet', label: 'Nhiệt độ', summary: 'Tháng cao nhất, tháng thấp nhất, biên độ nhiệt' },
        { id: 'mm-618-mua', label: 'Lượng mưa', summary: 'Các tháng mùa mưa (>100mm) và mùa khô' }
      ]
    },
    comparisons: [
      {
        id: 'comp-618-1',
        conceptA: 'Đường biểu diễn màu đỏ trên biểu đồ',
        conceptB: 'Các cột hình chữ nhật màu xanh',
        keyDifferences: [
          { criteria: 'Yếu tố thể hiện', conceptAVal: 'Diễn biến nhiệt độ không khí trung bình các tháng (°C)', conceptBVal: 'Lượng mưa trung bình tích lũy của từng tháng (mm)' },
          { criteria: 'Trục đối chiếu', conceptAVal: 'Đối chiếu với trục thang đo nhiệt độ (thường bên trái)', conceptBVal: 'Đối chiếu với trục thang đo lượng mưa (thường bên phải)' }
        ],
        commonConfusion: 'Học sinh nhầm đường đỏ thể hiện lượng mưa.',
        memoryRule: 'Đường đỏ đo Nhiệt độ (°C); Cột xanh đo Lượng mưa (mm).'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-618-1',
        questionText: 'Trên biểu đồ khí hậu kết hợp, yếu tố nhiệt độ của các tháng trong năm thường được thể hiện bằng hình thức nào?',
        options: [
          { id: 'A', text: 'Đường biểu diễn màu đỏ' },
          { id: 'B', text: 'Các hình cột màu xanh' },
          { id: 'C', text: 'Các hình tròn đồng mức' },
          { id: 'D', text: 'Các mũi tên chỉ hướng' }
        ],
        correctAnswer: 'A',
        explanation: 'Quy chuẩn bản đồ học: Nhiệt độ biểu diễn bằng đường nét liền màu đỏ; lượng mưa biểu diễn bằng cột màu xanh.',
        hint: 'Đường màu đỏ đối chiếu trục độ C.',
        knowledgeCardId: 'KC-618-1'
      }
    ]
  },
  'G6-L19': {
    lessonId: 'G6-L19',
    grade: 6,
    chapterId: 'G6-C5',
    chapterTitle: 'Chương 5. Nước trên Trái Đất',
    lessonTitle: 'Bài 19: Thuỷ quyển và vòng tuần hoàn lớn của nước',
    sgkPageRange: 'Trang 174 – 177',
    pdfPageRange: 'Trang 176 – 179',
    objectives: [
      'Nêu được khái niệm thuỷ quyển và thành phần của thuỷ quyển (nước biển 97,5%, nước ngọt 2,5%).',
      'Mô tả được các khâu của vòng tuần hoàn lớn của nước trên Trái Đất (bốc hơi, mây, mưa, dòng chảy).',
      'Ý thức được sự quý giá của tài nguyên nước ngọt và trách nhiệm bảo vệ nguồn nước sạch.'
    ],
    knowledgeCards: [
      {
        id: 'KC-619-1',
        cardIndex: 1,
        title: 'Thẻ 1: Khái niệm Thuỷ quyển và thành phần nước',
        concept: 'Toàn bộ nước trên Trái Đất; Nước mặn 97,5%, Nước ngọt chỉ 2,5%',
        coreDefinition: 'Thuỷ quyển là toàn bộ lớp nước bao quanh Trái Đất gồm nước biển, đại dương, nước trên lục địa và hơi nước trong khí quyển.',
        keyPoints: [
          'Nước mặn: Chiếm tới 97,5% tổng lượng nước toàn cầu (ở các biển và đại dương).',
          'Nước ngọt: Chỉ chiếm vỏn vẹn 2,5% tổng lượng nước. Trong 2,5% nước ngọt ít ỏi này, gần 70% bị đóng băng ở hai cực và đỉnh núi cao, gần 30% là nước ngầm sâu; lượng nước mặt sông hồ con người dễ tiếp cận chỉ chiếm chưa đầy 1%!'
        ],
        visualExample: 'Biểu đồ tròn cơ cấu thành phần nước trên Trái Đất (SGK tr. 174).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 174, pdfPage: 176, section: 'Mục 1. Thuỷ quyển' },
        commonTrapAlert: 'Nước ngọt trên Trái Đất cực kì quý hiếm (chỉ 2,5%), phần lớn lại nằm ở băng tuyết vùng cực.',
        iconName: 'Droplet'
      },
      {
        id: 'KC-619-2',
        cardIndex: 2,
        title: 'Thẻ 2: Vòng tuần hoàn lớn của nước',
        concept: 'Bốc hơi từ đại dương -> Gió đưa vào lục địa -> Mưa -> Dòng chảy trở về biển',
        coreDefinition: 'Nước trên Trái Đất không tự sinh ra và không tự mất đi mà tuần hoàn liên tục không ngừng.',
        keyPoints: [
          'Vòng tuần hoàn nhỏ: Nước bốc hơi từ biển -> tạo mây -> mưa ngay trên biển.',
          'Vòng tuần hoàn lớn: Nước bốc hơi từ biển và đại dương -> gió đưa mây sâu vào lục địa -> gặp lạnh tạo mưa hoặc tuyết -> nước ngấm thành nước ngầm và tạo thành sông suối -> chảy trở lại đại dương khép kín chu trình.'
        ],
        visualExample: 'Sơ đồ vòng tuần hoàn lớn của nước qua các khâu bốc hơi, mây, ngưng tụ, dòng chảy (SGK tr. 176).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 176, pdfPage: 178, section: 'Mục 2. Vòng tuần hoàn nước' },
        commonTrapAlert: 'Vòng tuần hoàn lớn đưa nước ngọt nuôi sống sự sống trên toàn bộ các lục địa.',
        iconName: 'RotateCw'
      }
    ],
    mindmap: {
      id: 'mm-619-root',
      label: 'Thuỷ quyển & Tuần hoàn nước',
      summary: 'Thuỷ quyển gồm nước mặn 97,5% & nước ngọt 2,5% | Vòng tuần hoàn lớn kết nối biển và lục địa',
      children: [
        { id: 'mm-619-tph', label: 'Thành phần nước', summary: 'Biển mặn 97,5%, Nước ngọt chỉ 2,5% (phần lớn là băng)' },
        { id: 'mm-619-tuanhoan', label: 'Vòng tuần hoàn lớn', summary: 'Bốc hơi biển -> Mây vào lục địa -> Mưa -> Sông ngòi về biển' }
      ]
    },
    comparisons: [
      {
        id: 'comp-619-1',
        conceptA: 'Vòng tuần hoàn nhỏ của nước',
        conceptB: 'Vòng tuần hoàn lớn của nước',
        keyDifferences: [
          { criteria: 'Không gian diễn ra', conceptAVal: 'Chỉ diễn ra hoàn toàn trên biển (hoặc hoàn toàn trên lục địa)', conceptBVal: 'Diễn ra xuyên suốt kết nối giữa đại dương và đất liền lục địa' },
          { criteria: 'Ý nghĩa đối với con người', conceptAVal: 'Không cung cấp nước ngọt cho đất liền', conceptBVal: 'Đem lượng nước ngọt dồi dào cung cấp cho sông hồ và đời sống' }
        ],
        commonConfusion: 'Học sinh nhầm hai vòng tuần hoàn có cùng quy mô.',
        memoryRule: 'Tuần hoàn nhỏ: Tại chỗ; Tuần hoàn lớn: Đại dương <-> Lục địa.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-619-1',
        questionText: 'Trong tổng lượng nước ngọt ít ỏi của Trái Đất (chiếm 2,5%), bộ phận nào chiếm tỉ trọng lớn nhất?',
        options: [
          { id: 'A', text: 'Băng và tuyết ở hai vùng cực và các đỉnh núi cao (gần 70%)' },
          { id: 'B', text: 'Nước trong các dòng sông lớn' },
          { id: 'C', text: 'Hơi nước trong khí quyển' },
          { id: 'D', text: 'Nước trong các hồ nhân tạo' }
        ],
        correctAnswer: 'A',
        explanation: 'Gần 70% nước ngọt của Trái Đất đang bị đóng băng vĩnh cửu tại Nam Cực, Greenland và các đỉnh núi cao hiểm trở.',
        hint: 'Đóng băng ở vùng cực.',
        knowledgeCardId: 'KC-619-1'
      }
    ]
  },
  'G6-L20': {
    lessonId: 'G6-L20',
    grade: 6,
    chapterId: 'G6-C5',
    chapterTitle: 'Chương 5. Nước trên Trái Đất',
    lessonTitle: 'Bài 20: Sông và hồ. Nước ngầm và băng hà',
    sgkPageRange: 'Trang 178 – 183',
    pdfPageRange: 'Trang 180 – 185',
    objectives: [
      'Mô tả được các bộ phận của một hệ thống sông (sông chính, phụ lưu, chi lưu) và lưu vực sông.',
      'Phân biệt được hồ tự nhiên và hồ nhân tạo, nguồn gốc hình thành một số loại hồ (hồ móng ngựa, hồ miệng núi lửa).',
      'Hiểu được vai trò của nước ngầm và băng hà đối với cân bằng thủy văn và nguồn nước ngọt.'
    ],
    knowledgeCards: [
      {
        id: 'KC-620-1',
        cardIndex: 1,
        title: 'Thẻ 1: Hệ thống sông và chế độ nước',
        concept: 'Sông chính, Phụ lưu, Chi lưu; Lưu vực sông và Thủy chế',
        coreDefinition: 'Sông là dòng nước chảy thường xuyên tương đối ổn định trong lòng dẫn trên bề mặt lục địa.',
        keyPoints: [
          'Hệ thống sông gồm: Sông chính (thu nhận dòng chảy), Phụ lưu (cung cấp nước cho sông chính), Chi lưu (chia bớt nước từ sông chính đổ ra biển/hồ).',
          'Lưu vực sông: Toàn bộ diện tích đất đai cung cấp nước thường xuyên cho con sông đó.',
          'Chế độ nước (thủy chế): Nhịp điệu thay đổi lưu lượng nước của sông trong 1 năm (mùa lũ và mùa cạn).'
        ],
        visualExample: 'Sơ đồ cấu tạo một hệ thống sông hoàn chỉnh (SGK tr. 179).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 178, pdfPage: 180, section: 'Mục 1. Sông và lưu vực' },
        commonTrapAlert: 'Phụ lưu = CẤP nước vào sông chính; Chi lưu = CHIA bớt nước sông chính ra ngoài.',
        iconName: 'Droplet'
      },
      {
        id: 'KC-620-2',
        cardIndex: 2,
        title: 'Thẻ 2: Hồ, Nước ngầm và Băng hà',
        concept: 'Hồ tự nhiên và nhân tạo; Nước ngầm dưới đất; Băng hà',
        coreDefinition: 'Hồ, nước ngầm và băng hà là những kho chứa nước ngọt quan trọng trên lục địa.',
        keyPoints: [
          'Hồ: Khoảng nước đọng tương đối rộng và sâu trong đất liền không thông trực tiếp ra biển (hồ móng ngựa do khúc sông uốn cắt dòng, hồ miệng núi lửa, hồ thủy điện nhân tạo).',
          'Nước ngầm: Nằm trong các tầng đất đá ngậm nước dưới lòng đất, được thấm từ nước mưa; là nguồn nước sạch sinh hoạt quan trọng.',
          'Băng hà: Các con sông băng di chuyển chậm chạp trên núi cao, dự trữ nguồn nước ngọt khổng lồ.'
        ],
        visualExample: 'Hình ảnh hồ Ba Bể tự nhiên và hồ thủy điện Hòa Bình nhân tạo (SGK tr. 181).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 181, pdfPage: 183, section: 'Mục 2 & 3. Hồ và nước ngầm' },
        commonTrapAlert: 'Khai thác nước ngầm quá mức sẽ dẫn đến sụt lún mặt đất và cạn kiệt tầng ngậm nước.',
        iconName: 'Compass'
      }
    ],
    mindmap: {
      id: 'mm-620-root',
      label: 'Sông, Hồ & Nước ngầm',
      summary: 'Hệ thống sông (chính, phụ lưu, chi lưu) | Hồ móng ngựa, hồ thủy điện | Nước ngầm dự trữ nước sạch | Băng hà nguồn nước ngọt',
      children: [
        { id: 'mm-620-song', label: 'Hệ thống sông', summary: 'Phụ lưu cấp nước, chi lưu chia nước, lưu vực gom nước' },
        { id: 'mm-620-ho', label: 'Hồ & Nước ngầm', summary: 'Hồ tự nhiên & nhân tạo; Nước ngầm sạch dưới lòng đất' }
      ]
    },
    comparisons: [
      {
        id: 'comp-620-1',
        conceptA: 'Phụ lưu của sông',
        conceptB: 'Chi lưu của sông',
        keyDifferences: [
          { criteria: 'Vai trò đối với sông chính', conceptAVal: 'Cung cấp, đổ thêm nước vào dòng sông chính', conceptBVal: 'Chia bớt, thoát nước từ sông chính ra các cửa biển' },
          { criteria: 'Vị trí thường gặp', conceptAVal: 'Thường ở vùng thượng lưu và trung lưu', conceptBVal: 'Thường ở vùng hạ lưu đồng bằng châu thổ' }
        ],
        commonConfusion: 'Học sinh hay nhầm phụ lưu và chi lưu.',
        memoryRule: 'Phụ = Thêm vào (cấp nước); Chi = Chia ra (thoát nước).'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-620-1',
        questionText: 'Trong một hệ thống sông, các dòng sông làm nhiệm vụ "chia bớt nước" từ sông chính để đổ ra biển hoặc hồ gọi là gì?',
        options: [
          { id: 'A', text: 'Chi lưu' },
          { id: 'B', text: 'Phụ lưu' },
          { id: 'C', text: 'Lưu vực sông' },
          { id: 'D', text: 'Sông chính' }
        ],
        correctAnswer: 'A',
        explanation: 'Chi lưu là các nhánh sông phân chia dòng chảy từ sông chính thoát nước ra ngoài.',
        hint: 'Chi có nghĩa là chia bớt.',
        knowledgeCardId: 'KC-620-1'
      }
    ]
  },
  'G6-L21': {
    lessonId: 'G6-L21',
    grade: 6,
    chapterId: 'G6-C5',
    chapterTitle: 'Chương 5. Nước trên Trái Đất',
    lessonTitle: 'Bài 21: Biển và đại dương',
    sgkPageRange: 'Trang 184 – 187',
    pdfPageRange: 'Trang 186 – 189',
    objectives: [
      'Nêu được độ muối trung bình của nước biển và đại dương (~35‰) và nguyên nhân độ muối thay đổi.',
      'Phân biệt được 3 hình thức vận động của nước biển: Sóng biển, Thủy triều và Dòng biển (hải lưu).',
      'Hiểu được nguyên nhân sinh ra sóng, thủy triều (do lực hấp dẫn Mặt Trăng và Mặt Trời) và dòng biển.'
    ],
    knowledgeCards: [
      {
        id: 'KC-621-1',
        cardIndex: 1,
        title: 'Thẻ 1: Độ muối và ba vận động của nước biển',
        concept: 'Độ muối trung bình 35‰; Sóng biển, Thủy triều, Dòng biển',
        coreDefinition: 'Đại dương chiếm 71% diện tích Trái Đất và luôn vận động không ngừng nghỉ.',
        keyPoints: [
          'Độ muối trung bình: Khoảng 35‰ (trong 1 lít nước biển có 35 gam muối khoáng hòa tan, chủ yếu là muối ăn NaCl). Biển kín, bốc hơi nhiều có độ muối cao (biển Đỏ 41‰).',
          'Sóng biển: Là dao động tại chỗ của các phân tử nước theo chiều thẳng đứng, sinh ra chủ yếu do GIÓ.',
          'Thủy triều: Hiện tượng nước biển dâng lên và hạ xuống có chu kì trong ngày do SỨC HÚT CỦA MẶT TRĂNG VÀ MẶT TRỜI. Có triều cường (khi Trăng tròn hoặc không Trăng) và triều kém (Trăng khuyết).',
          'Dòng biển (hải lưu): Các dòng nước chảy như sông lớn trong lòng đại dương, sinh ra do các loại gió thổi thường xuyên (gió Tín phong, Tây ôn đới).'
        ],
        visualExample: 'Sơ đồ Mặt Trăng, Trái Đất và Mặt Trời thẳng hàng tạo triều cường lớn nhất (SGK tr. 185).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 184, pdfPage: 186, section: 'Mục 1 & 2. Vận động nước biển' },
        commonTrapAlert: 'Sóng biển là dao động TẠI CHỖ (nước không di chuyển tịnh tiến theo sóng; chỉ có bọt sóng cuộn ở bờ).',
        iconName: 'Droplet'
      }
    ],
    mindmap: {
      id: 'mm-621-root',
      label: 'Biển & Đại dương',
      summary: 'Độ muối 35‰ | Sóng biển (do gió) | Thủy triều (do Mặt Trăng & Mặt Trời) | Dòng biển nóng & lạnh',
      children: [
        { id: 'mm-621-song', label: 'Sóng & Thủy triều', summary: 'Sóng do gió; Thủy triều do sức hút Mặt Trăng (triều cường & triều kém)' },
        { id: 'mm-621-hailluu', label: 'Dòng hải lưu', summary: 'Dòng biển nóng & lạnh ảnh hưởng khí hậu ven bờ' }
      ]
    },
    comparisons: [
      {
        id: 'comp-621-1',
        conceptA: 'Sóng biển',
        conceptB: 'Thủy triều',
        keyDifferences: [
          { criteria: 'Nguyên nhân sinh ra', conceptAVal: 'Chủ yếu do GIÓ thổi trên bề mặt nước biển', conceptBVal: 'Do LỰC HẤP DẪN (sức hút) của Mặt Trăng và Mặt Trời' },
          { criteria: 'Tính chu kì', conceptAVal: 'Ngẫu nhiên theo từng đợt gió mạnh yếu', conceptBVal: 'Chu kì chặt chẽ lặp lại đều đặn theo ngày và tuần trăng' }
        ],
        commonConfusion: 'Học sinh nhầm thủy triều do gió bão sinh ra.',
        memoryRule: 'Gió sinh ra Sóng; Mặt Trăng sinh ra Thủy triều.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-621-1',
        questionText: 'Hiện tượng thủy triều nước biển dâng lên và hạ xuống đều đặn hàng ngày được sinh ra do nguyên nhân chủ yếu nào?',
        options: [
          { id: 'A', text: 'Do sức hút (lực hấp dẫn) của Mặt Trăng và Mặt Trời' },
          { id: 'B', text: 'Do các cơn bão mạnh ngoài đại dương' },
          { id: 'C', text: 'Do cá voi khổng lồ di chuyển' },
          { id: 'D', text: 'Do động đất ngầm đáy biển' }
        ],
        correctAnswer: 'A',
        explanation: 'Thủy triều sinh ra do lực hấp dẫn tương hỗ của Mặt Trăng (gần nhất) và Mặt Trời tác động lên khối nước lỏng của Trái Đất.',
        hint: 'Lực hấp dẫn của thiên thể vũ trụ.',
        knowledgeCardId: 'KC-621-1'
      }
    ]
  },
  'G6-L22': {
    lessonId: 'G6-L22',
    grade: 6,
    chapterId: 'G6-C6',
    chapterTitle: 'Chương 6. Đất và sinh vật trên Trái Đất',
    lessonTitle: 'Bài 22: Lớp đất trên Trái Đất',
    sgkPageRange: 'Trang 188 – 191',
    pdfPageRange: 'Trang 190 – 193',
    objectives: [
      'Nêu được khái niệm lớp đất (thổ nhưỡng) và đặc tính quan trọng nhất của đất là độ phì.',
      'Trình bày được 2 thành phần chính của đất: Thành phần khoáng và thành phần hữu cơ (mùn).',
      'Phân tích được các nhân tố hình thành đất: Đá mẹ, khí hậu, sinh vật, địa hình, thời gian và con người.'
    ],
    knowledgeCards: [
      {
        id: 'KC-622-1',
        cardIndex: 1,
        title: 'Thẻ 1: Khái niệm lớp đất và thành phần của đất',
        concept: 'Độ phì nhiêu, Chất khoáng, Chất hữu cơ (chất mùn)',
        coreDefinition: 'Lớp đất (thổ nhưỡng) là lớp vật chất mỏng, tơi xốp bao phủ trên bề mặt các lục địa.',
        keyPoints: [
          'Độ phì của đất: Khả năng cung cấp nước, chất dinh dưỡng, nhiệt và không khí cho cây trồng sinh trưởng và phát triển.',
          'Thành phần khoáng: Chiếm khối lượng lớn nhất, do đá mẹ phong hóa tạo thành, cung cấp chất vô cơ.',
          'Thành phần hữu cơ (chất mùn): Chiếm tỉ lệ nhỏ nhưng đóng vai trò quyết định độ phì nhiêu của đất, do xác động thực vật phân hủy tạo thành.'
        ],
        visualExample: 'Hình vẽ phẫu diện đất gồm các tầng: tầng thảm mục, tầng mùn, tầng tích tụ, tầng đá mẹ (SGK tr. 189).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 188, pdfPage: 190, section: 'Mục 1. Khái niệm lớp đất' },
        commonTrapAlert: 'Đặc tính quan trọng nhất phân biệt đất với đá mẹ là ĐỘ PHÌ (đá mẹ không có độ phì nuôi cây).',
        iconName: 'Sprout'
      },
      {
        id: 'KC-622-2',
        cardIndex: 2,
        title: 'Thẻ 2: Các nhân tố hình thành đất',
        concept: 'Đá mẹ, Khí hậu, Sinh vật, Địa hình, Thời gian, Con người',
        coreDefinition: 'Đất được hình thành từ sự kết hợp của 6 nhân tố tự nhiên và nhân tạo.',
        keyPoints: [
          'Đá mẹ: Cung cấp nguồn chất khoáng, quyết định màu sắc và tính chất cơ học của đất.',
          'Khí hậu (nhiệt và ẩm): Thúc đẩy quá trình phong hóa đá và phân giải xác sinh vật.',
          'Sinh vật: Động thực vật và vi sinh vật cung cấp chất hữu cơ và làm tơi xốp đất.',
          'Địa hình và thời gian: Địa hình dốc đất dễ bị xói mòn trơ sỏi đá; thời gian thể hiện tuổi của đất.',
          'Con người: Có thể làm tăng độ phì (bón phân, cày xới, thau chua rửa mặn) hoặc làm đất bạc màu, thoái hóa.'
        ],
        visualExample: 'Sơ đồ 6 nhân tố tương tác hình thành nên lớp đất thổ nhưỡng (SGK tr. 190).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 190, pdfPage: 192, section: 'Mục 2. Nhân tố hình thành đất' },
        commonTrapAlert: 'Đá mẹ cung cấp chất KHOÁNG; Sinh vật cung cấp chất HỮU CƠ (mùn).',
        iconName: 'Layers'
      }
    ],
    mindmap: {
      id: 'mm-622-root',
      label: 'Lớp đất (Thổ nhưỡng)',
      summary: 'Lớp tơi xốp có độ phì | Thành phần: Khoáng + Hữu cơ (mùn) | 6 nhân tố: Đá mẹ, Khí hậu, Sinh vật, Địa hình, Thời gian, Con người',
      children: [
        { id: 'mm-622-dophi', label: 'Đặc tính độ phì', summary: 'Nuôi dưỡng cây trồng, chất mùn quyết định dinh dưỡng' },
        { id: 'mm-622-nhanto', label: '6 Nhân tố', summary: 'Đá mẹ (khoáng), Sinh vật (hữu cơ), Khí hậu (nhiệt ẩm)' }
      ]
    },
    comparisons: [
      {
        id: 'comp-622-1',
        conceptA: 'Thành phần Khoáng của đất',
        conceptB: 'Thành phần Hữu cơ (Mùn) của đất',
        keyDifferences: [
          { criteria: 'Nguồn gốc hình thành', conceptAVal: 'Do đá mẹ bị phong hóa vỡ vụn sinh ra', conceptBVal: 'Do xác động thực vật bị vi sinh vật phân giải sinh ra' },
          { criteria: 'Tỉ lệ và vai trò', conceptAVal: 'Chiếm phần lớn khối lượng và thể tích của đất', conceptBVal: 'Chiếm tỉ lệ nhỏ nhưng quyết định trực tiếp độ phì nhiêu' }
        ],
        commonConfusion: 'Học sinh nhầm khoáng chất có nguồn gốc từ sinh vật.',
        memoryRule: 'Đá mẹ sinh ra Khoáng; Sinh vật sinh ra Mùn.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-622-1',
        questionText: 'Đặc tính quan trọng nhất phân biệt lớp đất (thổ nhưỡng) với đá mẹ và các lớp đất đá vô cơ khác là gì?',
        options: [
          { id: 'A', text: 'Độ phì nhiêu' },
          { id: 'B', text: 'Màu sắc sặc sỡ' },
          { id: 'C', text: 'Độ cứng chắc' },
          { id: 'D', text: 'Kích thước hạt cát' }
        ],
        correctAnswer: 'A',
        explanation: 'Độ phì là đặc tính duy nhất giúp đất có khả năng cung cấp nước và chất dinh dưỡng nuôi cây xanh phát triển.',
        hint: 'Khả năng nuôi sống cây trồng.',
        knowledgeCardId: 'KC-622-1'
      }
    ]
  },
  'G6-L23': {
    lessonId: 'G6-L23',
    grade: 6,
    chapterId: 'G6-C6',
    chapterTitle: 'Chương 6. Đất và sinh vật trên Trái Đất',
    lessonTitle: 'Bài 23: Sự sống trên Trái Đất',
    sgkPageRange: 'Trang 192 – 195',
    pdfPageRange: 'Trang 194 – 197',
    objectives: [
      'Nêu được giới hạn của sinh quyển (nơi có sự sống tồn tại).',
      'Giải thích được các nhân tố ảnh hưởng đến sự phân bố của thực vật và động vật (khí hậu, địa hình, đất, con người).',
      'Hiểu được mối quan hệ gắn bó và chuỗi thức ăn giữa các loài sinh vật.'
    ],
    knowledgeCards: [
      {
        id: 'KC-623-1',
        cardIndex: 1,
        title: 'Thẻ 1: Khái niệm Sinh quyển và các nhân tố ảnh hưởng',
        concept: 'Nơi có sự sống; Khí hậu là nhân tố quyết định phân bố sinh vật',
        coreDefinition: 'Sinh quyển là quyển chứa toàn bộ các sinh vật sống trên Trái Đất, xen kẽ trong khí quyển, thuỷ quyển và thạch quyển.',
        keyPoints: [
          'Giới hạn sinh quyển: Từ đáy vực sâu đại dương đến tầng đối lưu của khí quyển.',
          'Khí hậu (nhiệt độ và lượng mưa): Là nhân tố quyết định trực tiếp đến sự phân bố của thực vật. Nơi nhiệt ẩm dồi dào (nhiệt đới) có sinh vật phong phú nhất; nơi khô hạn (hoang mạc) hoặc giá lạnh (vùng cực) sinh vật nghèo nàn.',
          'Động vật ít phụ thuộc vào khí hậu hơn thực vật vì có khả năng di chuyển hoặc ngủ đông tránh rét.'
        ],
        visualExample: 'Hình ảnh thảm thực vật rừng rậm xanh tốt ở nhiệt đới đối lập với thực vật rêu địa y vùng cực (SGK tr. 193).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 192, pdfPage: 194, section: 'Mục 1 & 2. Sinh quyển' },
        commonTrapAlert: 'Khí hậu quyết định thảm thực vật; thực vật lại quyết định thức ăn và nơi ở của các loài động vật.',
        iconName: 'Sprout'
      }
    ],
    mindmap: {
      id: 'mm-623-root',
      label: 'Sự sống & Sinh quyển',
      summary: 'Giới hạn sinh quyển | Khí hậu quyết định thực vật | Động vật di chuyển thích nghi | Con người bảo vệ đa dạng sinh học',
      children: [
        { id: 'mm-623-khainiem', label: 'Sinh quyển', summary: 'Nơi có sinh vật sống từ biển sâu đến tầng đối lưu' },
        { id: 'mm-623-nhanto', label: 'Nhân tố quyết định', summary: 'Nhiệt ẩm khí hậu quyết định độ phong phú của rừng' }
      ]
    },
    comparisons: [
      {
        id: 'comp-623-1',
        conceptA: 'Sự thích nghi của thực vật',
        conceptB: 'Sự thích nghi của động vật',
        keyDifferences: [
          { criteria: 'Khả năng di chuyển', conceptAVal: 'Bám rễ cố định tại chỗ, biến đổi lá thành gai, rễ dài hút nước', conceptBVal: 'Chủ động di chuyển tìm thức ăn, di cư tránh rét hoặc ngủ đông' },
          { criteria: 'Mức độ phụ thuộc khí hậu', conceptAVal: 'Phụ thuộc trực tiếp và tuyệt đối vào ánh sáng và nhiệt ẩm', conceptBVal: 'Ít phụ thuộc trực tiếp hơn do có lớp lông dày, lớp mỡ cách nhiệt' }
        ],
        commonConfusion: 'Học sinh nghĩ thực vật và động vật chịu tác động của khí hậu như nhau.',
        memoryRule: 'Cây cối bám rễ tại chỗ; Thú rừng di chuyển tránh rét.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-623-1',
        questionText: 'Nhân tố tự nhiên nào đóng vai trò quyết định hàng đầu đối với sự phân bố và độ phát triển phong phú của thảm thực vật?',
        options: [
          { id: 'A', text: 'Khí hậu (nhiệt độ và lượng mưa)' },
          { id: 'B', text: 'Độ sâu của đáy biển' },
          { id: 'C', text: 'Tốc độ quay của Trái Đất' },
          { id: 'D', text: 'Độ mặn của nước biển' }
        ],
        correctAnswer: 'A',
        explanation: 'Khí hậu cung cấp nhiệt và nước trực tiếp cho cây quang hợp và sinh trưởng, tạo nên các đới rừng khác nhau.',
        hint: 'Nhiệt độ và nguồn nước mưa tưới tiêu.',
        knowledgeCardId: 'KC-623-1'
      }
    ]
  },
  'G6-L24': {
    lessonId: 'G6-L24',
    grade: 6,
    chapterId: 'G6-C6',
    chapterTitle: 'Chương 6. Đất và sinh vật trên Trái Đất',
    lessonTitle: 'Bài 24: Rừng nhiệt đới',
    sgkPageRange: 'Trang 196 – 199',
    pdfPageRange: 'Trang 198 – 201',
    objectives: [
      'Trình bày được đặc điểm của rừng nhiệt đới: Cấu trúc nhiều tầng tán (4 - 5 tầng), xanh quanh năm, đa dạng sinh học cao nhất Trái Đất.',
      'Phân biệt được rừng mưa nhiệt đới (ẩm quanh năm) và rừng nhiệt đới gió mùa (có mùa rụng lá).',
      'Nhận thức được vai trò sống còn của rừng nhiệt đới đối với việc bảo vệ khí hậu toàn cầu.'
    ],
    knowledgeCards: [
      {
        id: 'KC-624-1',
        cardIndex: 1,
        title: 'Thẻ 1: Cấu trúc nhiều tầng của Rừng nhiệt đới',
        concept: 'Cấu trúc 4 - 5 tầng, Cây vượt tán, Dây leo thân gỗ, Đa dạng loài cao nhất',
        coreDefinition: 'Rừng nhiệt đới là hệ sinh thái rừng rậm rạp phân bố ở vành đai nhiệt đới giữa hai chí tuyến.',
        keyPoints: [
          'Cấu trúc tầng tán: Chia thành 4 - 5 tầng rõ rệt: Tầng cây vượt tán (cao trên 40 m), tầng tán chính (20 - 30 m), tầng dưới tán, tầng cây bụi và tầng cỏ quyết mục sát mặt đất.',
          'Đặc điểm thực vật: Cây xanh tốt quanh năm, nhiều tầng rậm rạp, xuất hiện nhiều dây leo chằng chịt, cây phong lan bì sinh và rễ bạnh vè khổng lồ chống đỡ thân cây.',
          'Động vật: Cực kì phong phú, nhiều loài sống trên cây (khỉ, vượn, chim, sóc bay) và bò sát côn trùng dưới đất.'
        ],
        visualExample: 'Sơ đồ mặt cắt cấu trúc 5 tầng của rừng mưa nhiệt đới (SGK tr. 197).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 196, pdfPage: 198, section: 'Mục 1. Cấu trúc rừng nhiệt đới' },
        commonTrapAlert: 'Rừng nhiệt đới phân thành nhiều tầng tán vì các loài cây cạnh tranh nhau ánh sáng Mặt Trời.',
        iconName: 'Sprout'
      },
      {
        id: 'KC-624-2',
        cardIndex: 2,
        title: 'Thẻ 2: Rừng mưa nhiệt đới vs Rừng nhiệt đới gió mùa',
        concept: 'Rừng mưa ẩm quanh năm; Rừng gió mùa có mùa khô rụng lá',
        coreDefinition: 'Rừng nhiệt đới chia làm 2 kiểu chính tùy thuộc vào chế độ mưa trong năm.',
        keyPoints: [
          'Rừng mưa nhiệt đới: Khí hậu nóng ẩm quanh năm, mưa đều đặn (lưu vực A-ma-dôn, bồn địa Công-gô, các đảo Đông Nam Á); rừng luôn xanh tốt rậm rạp.',
          'Rừng nhiệt đới gió mùa: Có mùa khô rõ rệt (Việt Nam, Ấn Độ); vào mùa khô nhiều loài cây rụng lá để tránh thoát hơi nước (như rừng khộp, rừng tếch), rừng thưa thoáng hơn.'
        ],
        visualExample: 'Hình ảnh rừng khộp rụng lá vào mùa khô ở Tây Nguyên (SGK tr. 198).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 198, pdfPage: 200, section: 'Mục 2. Các kiểu rừng' },
        commonTrapAlert: 'Rừng nhiệt đới gió mùa có mùa khô rụng lá, khác với rừng mưa xích đạo luôn luôn xanh tốt.',
        iconName: 'Wind'
      }
    ],
    mindmap: {
      id: 'mm-624-root',
      label: 'Rừng nhiệt đới',
      summary: '4 - 5 tầng tán cạnh tranh ánh sáng | Đa dạng sinh học cao nhất | Rừng mưa xích đạo (xanh quanh năm) vs Rừng gió mùa (rụng lá mùa khô)',
      children: [
        { id: 'mm-624-cautruc', label: 'Cấu trúc tầng tán', summary: 'Cây vượt tán, tán chính, cây bụi, dây leo rễ bạnh' },
        { id: 'mm-624-kieu', label: '2 Kiểu rừng', summary: 'Rừng mưa (ẩm đều quanh năm); Rừng gió mùa (rụng lá mùa khô)' }
      ]
    },
    comparisons: [
      {
        id: 'comp-624-1',
        conceptA: 'Rừng mưa nhiệt đới',
        conceptB: 'Rừng nhiệt đới gió mùa',
        keyDifferences: [
          { criteria: 'Đặc điểm mùa khô', conceptAVal: 'Không có mùa khô rõ rệt, mưa rào quanh năm, luôn xanh mướt', conceptBVal: 'Có mùa khô rõ rệt, nhiều loại cây rụng lá vào mùa khô' },
          { criteria: 'Mật độ tầng tán', conceptAVal: 'Cực kì rậm rạp, tối tăm dưới mặt đất, 5 tầng tán', conceptBVal: 'Thưa thoáng hơn, ánh sáng lọt được xuống tầng dưới' }
        ],
        commonConfusion: 'Học sinh nhầm tất cả rừng nhiệt đới đều không rụng lá.',
        memoryRule: 'Rừng mưa: Xanh quanh năm; Rừng gió mùa: Mùa khô trút lá.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-624-1',
        questionText: 'Tại sao rừng mưa nhiệt đới lại phát triển cấu trúc thành nhiều tầng tán cây (từ 4 đến 5 tầng)?',
        options: [
          { id: 'A', text: 'Do các loài thực vật cạnh tranh nhau để vươn lên đón nhận ánh sáng Mặt Trời' },
          { id: 'B', text: 'Do con người cắt tỉa theo tầng' },
          { id: 'C', text: 'Do gió bão thổi gãy các cành trên' },
          { id: 'D', text: 'Do các loài thú rừng yêu cầu' }
        ],
        correctAnswer: 'A',
        explanation: 'Trong rừng nhiệt đới rậm rạp, ánh sáng bị che khuất nên cây phải phân tầng cao thấp để tối ưu hóa khả năng quang hợp.',
        hint: 'Cạnh tranh ánh sáng Mặt Trời trong tán lá rậm.',
        knowledgeCardId: 'KC-624-1'
      }
    ]
  },
  'G6-L25': {
    lessonId: 'G6-L25',
    grade: 6,
    chapterId: 'G6-C6',
    chapterTitle: 'Chương 6. Đất và sinh vật trên Trái Đất',
    lessonTitle: 'Bài 25: Sự phân bố các đới thiên nhiên trên Trái Đất',
    sgkPageRange: 'Trang 200 – 203',
    pdfPageRange: 'Trang 202 – 205',
    objectives: [
      'Xác định được 3 đới thiên nhiên chính trên Trái Đất: Đới nóng, Đới ôn hòa và Đới lạnh.',
      'Trình bày được cảnh quan tiêu biểu của từng đới: Rừng nhiệt đới, Thảo nguyên & Rừng lá kim Taiga, Đài nguyên (Tundra).',
      'Hiểu được sự phân bố đới thiên nhiên phụ thuộc vào sự phân bố nhiệt độ và lượng mưa từ Xích đạo về cực.'
    ],
    knowledgeCards: [
      {
        id: 'KC-625-1',
        cardIndex: 1,
        title: 'Thẻ 1: Ba đới thiên nhiên chính của Trái Đất',
        concept: 'Đới nóng (Rừng rậm, Xavan); Đới ôn hòa (Rừng Taiga, Thảo nguyên); Đới lạnh (Đài nguyên Tundra)',
        coreDefinition: 'Các đới thiên nhiên phân bố đối xứng qua đường Xích đạo theo sự thay đổi của khí hậu.',
        keyPoints: [
          'Đới nóng: Giữa hai chí tuyến; nhiệt độ cao quanh năm; cảnh quan gồm rừng mưa nhiệt đới, rừng gió mùa, xavan đồng cỏ và hoang mạc.',
          'Đới ôn hòa: Từ chí tuyến đến vòng cực ở cả hai bán cầu; 4 mùa rõ rệt; cảnh quan gồm rừng lá rộng, rừng lá kim (Taiga) bạt ngàn và thảo nguyên.',
          'Đới lạnh: Từ vòng cực đến hai cực; khí hậu giá lạnh băng tuyết quanh năm; cảnh quan đài nguyên (Tundra) rêu và địa y, hoang mạc băng.'
        ],
        visualExample: 'Bản đồ các đới thiên nhiên trên thế giới (SGK tr. 201).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 200, pdfPage: 202, section: 'Mục 1. Các đới thiên nhiên' },
        commonTrapAlert: 'Rừng lá kim Taiga là cảnh quan đặc trưng của ĐỚI ÔN HÒA (không phải đới lạnh).',
        iconName: 'Globe'
      }
    ],
    mindmap: {
      id: 'mm-625-root',
      label: 'Các đới thiên nhiên',
      summary: 'Đới nóng (rừng nhiệt đới, xavan) | Đới ôn hòa (rừng Taiga, thảo nguyên) | Đới lạnh (đài nguyên rêu, băng tuyết)',
      children: [
        { id: 'mm-625-nong', label: 'Đới nóng', summary: 'Giữa 2 chí tuyến, sinh vật phong phú nhất thế giới' },
        { id: 'mm-625-onhoa', label: 'Đới ôn hòa', summary: 'Rừng lá rộng, rừng lá kim Taiga, 4 mùa rõ rệt' },
        { id: 'mm-625-lanh', label: 'Đới lạnh', summary: 'Đài nguyên rêu và địa y, băng tuyết vùng cực' }
      ]
    },
    comparisons: [
      {
        id: 'comp-625-1',
        conceptA: 'Cảnh quan Rừng lá kim Taiga (Đới ôn hòa)',
        conceptB: 'Cảnh quan Đài nguyên Tundra (Đới lạnh)',
        keyDifferences: [
          { criteria: 'Khí hậu và cây cối', conceptAVal: 'Khí hậu ôn đới lạnh, cây lá kim thân gỗ cao lớn (thông, tùng, linh sam)', conceptBVal: 'Khí hậu cực băng giá, không có cây thân gỗ, chỉ có rêu và địa y sát mặt đất' },
          { criteria: 'Thời gian mùa hạ', conceptAVal: 'Mùa hạ ấm áp đủ dài để cây rừng phát triển', conceptBVal: 'Mùa hạ quá ngắn và lạnh, đất đóng băng vĩnh cửu bên dưới' }
        ],
        commonConfusion: 'Học sinh nhầm đài nguyên Tundra có nhiều cây gỗ to.',
        memoryRule: 'Taiga: Rừng thông lá kim; Tundra: Đồng rêu địa y đới lạnh.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-625-1',
        questionText: 'Rừng lá kim Taiga bạt ngàn (với các loài cây thông, tùng, linh sam) là cảnh quan tiêu biểu của đới thiên nhiên nào?',
        options: [
          { id: 'A', text: 'Đới ôn hòa' },
          { id: 'B', text: 'Đới nóng' },
          { id: 'C', text: 'Đới lạnh' },
          { id: 'D', text: 'Đới xích đạo' }
        ],
        correctAnswer: 'A',
        explanation: 'Rừng lá kim Taiga bao phủ rộng lớn ở vùng ôn đới Bắc Mỹ và Bắc Á thuộc đới ôn hòa.',
        hint: 'Khu vực rừng thông đới ôn hòa.',
        knowledgeCardId: 'KC-625-1'
      }
    ]
  },
  'G6-L26': {
    lessonId: 'G6-L26',
    grade: 6,
    chapterId: 'G6-C6',
    chapterTitle: 'Chương 6. Đất và sinh vật trên Trái Đất',
    lessonTitle: 'Bài 26: Thực hành: Tìm hiểu môi trường tự nhiên địa phương',
    sgkPageRange: 'Trang 204 – 205',
    pdfPageRange: 'Trang 206 – 207',
    objectives: [
      'Thu thập và xử lí thông tin về địa hình, khí hậu, sông ngòi, đất và sinh vật tại địa phương em sinh sống.',
      'Nhận xét được những thuận lợi và khó khăn của điều kiện tự nhiên đối với sản xuất và đời sống.',
      'Viết báo cáo ngắn gọn giới thiệu về môi trường tự nhiên của quê hương.'
    ],
    knowledgeCards: [
      {
        id: 'KC-626-1',
        cardIndex: 1,
        title: 'Thẻ 1: Khung tìm hiểu môi trường tự nhiên địa phương',
        concept: 'Vị trí, địa hình, thời tiết, sông hồ, đất trồng và sinh vật bản địa',
        coreDefinition: 'Tìm hiểu tự nhiên địa phương giúp học sinh liên hệ lí thuyết Địa lí với thực tế quê hương.',
        keyPoints: [
          'Địa hình địa phương: Đồng bằng phẳng, vùng đồi trung du hay vùng núi cao dốc.',
          'Khí hậu: Nhiệt độ trung bình, mùa mưa tập trung vào những tháng nào, các thiên tai thường gặp (bão, ngập lụt, sương muối).',
          'Sông ngòi: Con sông hoặc kênh rạch chảy qua, vai trò tưới tiêu và thoát nước.',
          'Đất và sinh vật: Loại đất chính (đất phù sa, đất feralit), cây trồng vật nuôi chủ lực của địa phương.'
        ],
        visualExample: 'Khung đề cương báo cáo thu hoạch thực hành địa lí địa phương (SGK tr. 204).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 204, pdfPage: 206, section: 'Mục 1 & 2. Đề cương thực hành' },
        commonTrapAlert: 'Báo cáo cần số liệu và dẫn chứng thực tế tại địa phương, không chép sách giáo khoa chung chung.',
        iconName: 'FileText'
      }
    ],
    mindmap: {
      id: 'mm-626-root',
      label: 'Tự nhiên địa phương',
      summary: 'Địa hình (đồng bằng/núi) | Khí hậu & Thiên tai | Sông ngòi tưới tiêu | Đất & Cây trồng chủ lực',
      children: [
        { id: 'mm-626-tnh', label: 'Tự nhiên quê hương', summary: 'Địa hình, sông hồ, khí hậu thời tiết' },
        { id: 'mm-626-ungdung', label: 'Ứng dụng đời sống', summary: 'Cây trồng phù hợp, phòng chống thiên tai tại chỗ' }
      ]
    },
    comparisons: [
      {
        id: 'comp-626-1',
        conceptA: 'Môi trường tự nhiên vùng đồng bằng',
        conceptB: 'Môi trường tự nhiên vùng đồi núi',
        keyDifferences: [
          { criteria: 'Địa hình và đất đai', conceptAVal: 'Bằng phẳng, đất phù sa màu mỡ, tiện giao thông và trồng lúa nước', conceptBVal: 'Địa hình dốc, chia cắt, đất feralit thích hợp trồng cây lâu năm và rừng' },
          { criteria: 'Thiên tai thường gặp', conceptAVal: 'Ngập lụt, triều cường, xâm nhập mặn ven biển', conceptBVal: 'Lũ quét, sạt lở đất, xói mòn khi mưa lớn' }
        ],
        commonConfusion: 'Học sinh nhầm giải pháp ứng phó thiên tai vùng núi giống hệt vùng đồng bằng.',
        memoryRule: 'Đồng bằng phòng ngập úng; Vùng núi phòng lũ quét sạt lở.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-626-1',
        questionText: 'Khi viết báo cáo tìm hiểu về môi trường tự nhiên của một địa phương vùng đồng bằng, yếu tố nào dưới đây là thế mạnh nổi bật?',
        options: [
          { id: 'A', text: 'Địa hình bằng phẳng, đất phù sa màu mỡ thuận lợi phát triển trồng trọt' },
          { id: 'B', text: 'Đỉnh núi cao quanh năm có tuyết phủ' },
          { id: 'C', text: 'Khí hậu khô cằn hoang mạc hoàn toàn' },
          { id: 'D', text: 'Nhiều quặng than đá nằm lộ thiên trên vách đá' }
        ],
        correctAnswer: 'A',
        explanation: 'Đồng bằng có địa hình bằng phẳng và đất phù sa phì nhiêu bồi đắp bởi các con sông, là thế mạnh hàng đầu cho nông nghiệp.',
        hint: 'Đất phù sa màu mỡ bằng phẳng.',
        knowledgeCardId: 'KC-626-1'
      }
    ]
  },
  'G6-L27': {
    lessonId: 'G6-L27',
    grade: 6,
    chapterId: 'G6-C7',
    chapterTitle: 'Chương 7. Con người và thiên nhiên',
    lessonTitle: 'Bài 27: Dân số và sự phân bố dân cư trên thế giới',
    sgkPageRange: 'Trang 206 – 211',
    pdfPageRange: 'Trang 208 – 213',
    objectives: [
      'Trình bày được quy mô dân số thế giới (đạt mốc 8 tỉ người năm 2022) và xu hướng gia tăng dân số.',
      'Phân tích được sự phân bố dân cư không đều trên Trái Đất thông qua bản đồ mật độ dân số.',
      'Nhận biết được một số siêu đô thị có quy mô trên 10 triệu dân trên thế giới.'
    ],
    knowledgeCards: [
      {
        id: 'KC-627-1',
        cardIndex: 1,
        title: 'Thẻ 1: Quy mô dân số và sự phân bố dân cư',
        concept: 'Dân số đạt 8 tỉ người, Mật độ dân số = Dân số / Diện tích (người/km²)',
        coreDefinition: 'Dân số thế giới tăng nhanh và phân bố rất không đồng đều trên các lục địa.',
        keyPoints: [
          'Quy mô: Dân số thế giới vượt mốc 8 tỉ người (tháng 11/2022).',
          'Mật độ dân số: Thể hiện số người trung bình sống trên 1 km² lãnh thổ: Mật độ = Số dân / Diện tích.',
          'Nơi đông dân: Các đồng bằng châu thổ phì nhiêu, vùng ven biển khí hậu ấm áp, mạng lưới giao thông thuận lợi (Đông Á, Nam Á, Tây Âu).',
          'Nơi thưa dân: Các vùng núi cao hiểm trở, hoang mạc khô cằn hoặc vùng cực băng giá (Bắc cực, Nam cực, sa mạc Sahara).'
        ],
        visualExample: 'Bản đồ phân bố dân cư thế giới với các vùng chấm đỏ đậm đặc ở Đông Á và Nam Á (SGK tr. 208).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 206, pdfPage: 208, section: 'Mục 1. Dân số và phân bố' },
        commonTrapAlert: 'Công thức mật độ dân số: Lấy Dân số (người) chia cho Diện tích (km²), đơn vị bắt buộc là người/km².',
        iconName: 'Users'
      },
      {
        id: 'KC-627-2',
        cardIndex: 2,
        title: 'Thẻ 2: Đô thị hoá và các Siêu đô thị trên thế giới',
        concept: 'Đô thị trên 10 triệu dân; Tô-ki-ô, Đê-li, Thượng Hải',
        coreDefinition: 'Siêu đô thị là các thành phố khổng lồ có quy mô dân số từ 10 triệu người trở lên.',
        keyPoints: [
          'Xu hướng đô thị hoá: Tỉ lệ dân sống trong các đô thị ngày càng tăng nhanh trên phạm vi toàn cầu.',
          'Siêu đô thị hàng đầu: Tô-ki-ô (Nhật Bản - trên 37 triệu người, siêu đô thị đông nhất thế giới), Đê-li (Ấn Độ), Thượng Hải (Trung Quốc), Sao Paulo (Bra-xin), Niu Oóc (Hoa Kỳ).',
          'Thách thức đô thị: Ùn tắc giao thông, ô nhiễm môi trường, thiếu nhà ở và gánh nặng xử lí rác thải.'
        ],
        visualExample: 'Hình ảnh dòng người đông đúc tại giao lộ Shibuya nổi tiếng ở siêu đô thị Tô-ki-ô (SGK tr. 210).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 210, pdfPage: 212, section: 'Mục 2. Siêu đô thị' },
        commonTrapAlert: 'Siêu đô thị chuẩn quốc tế phải có từ 10 triệu dân trở lên.',
        iconName: 'Building'
      }
    ],
    mindmap: {
      id: 'mm-627-root',
      label: 'Dân số & Siêu đô thị',
      summary: 'Dân số >8 tỉ người | Phân bố không đều (Đông ở đồng bằng châu thổ, thưa ở núi và hoang mạc) | Siêu đô thị >10 triệu dân (Tô-ki-ô đứng đầu)',
      children: [
        { id: 'mm-627-phanbo', label: 'Phân bố dân cư', summary: 'Mật độ = Dân / Diện tích; đông ở châu thổ ven biển' },
        { id: 'mm-627-dothi', label: 'Siêu đô thị', summary: 'Quy mô >10 triệu dân; Tô-ki-ô, Đê-li, Thượng Hải' }
      ]
    },
    comparisons: [
      {
        id: 'comp-627-1',
        conceptA: 'Vùng châu thổ ven biển',
        conceptB: 'Vùng hoang mạc và miền núi cao',
        keyDifferences: [
          { criteria: 'Mật độ dân số', conceptAVal: 'Rất cao (hàng trăm đến hàng nghìn người/km²)', conceptBVal: 'Cực kì thưa thớt (dưới 1 – 10 người/km²)' },
          { criteria: 'Điều kiện sinh sống', conceptAVal: 'Đất phù sa phì nhiêu, nguồn nước ngọt dồi dào, giao thông thuận lợi', conceptBVal: 'Khô hạn thiếu nước trầm trọng hoặc dốc đứng rét buốt' }
        ],
        commonConfusion: 'Học sinh nhầm các nước có diện tích rộng nhất thì mật độ dân số cũng cao nhất.',
        memoryRule: 'Mật độ = Dân số chia cho Diện tích.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-627-1',
        questionText: 'Thành phố nào dưới đây hiện là siêu đô thị có quy mô dân số đông nhất thế giới (trên 37 triệu người tính cả vùng phụ cận)?',
        options: [
          { id: 'A', text: 'Tô-ki-ô (Nhật Bản)' },
          { id: 'B', text: 'Luân Đôn (Anh)' },
          { id: 'C', text: 'Pa-ri (Pháp)' },
          { id: 'D', text: 'Xít-ni (Ô-xtrây-li-a)' }
        ],
        correctAnswer: 'A',
        explanation: 'Vùng đô thị Tokyo (Nhật Bản) tập trung trên 37 triệu người, là siêu đô thị đông đúc nhất hành tinh.',
        hint: 'Thủ đô của đất nước mặt trời mọc.',
        knowledgeCardId: 'KC-627-2'
      }
    ]
  },
  'G6-L28': {
    lessonId: 'G6-L28',
    grade: 6,
    chapterId: 'G6-C7',
    chapterTitle: 'Chương 7. Con người và thiên nhiên',
    lessonTitle: 'Bài 28: Mối quan hệ giữa con người và thiên nhiên',
    sgkPageRange: 'Trang 212 – 215',
    pdfPageRange: 'Trang 214 – 217',
    objectives: [
      'Trình bày được tác động hai chiều giữa con người và thiên nhiên.',
      'Phân tích được vai trò của thiên nhiên trong việc cung cấp tài nguyên, không gian sống và nguồn thức ăn.',
      'Đánh giá được các tác động tiêu cực của hoạt động kinh tế làm ô nhiễm và suy thoái thiên nhiên.'
    ],
    knowledgeCards: [
      {
        id: 'KC-628-1',
        cardIndex: 1,
        title: 'Thẻ 1: Tác động hai chiều giữa con người và tự nhiên',
        concept: 'Thiên nhiên nuôi dưỡng con người; Con người biến đổi thiên nhiên',
        coreDefinition: 'Con người là một bộ phận của thiên nhiên, chịu tác động của thiên nhiên và ngược lại cũng tác động mạnh mẽ lên thiên nhiên.',
        keyPoints: [
          'Thiên nhiên đối với con người: Cung cấp không gian sinh sống, nguồn thức ăn, nước uống, không khí thở và các tài nguyên khoáng sản cho sản xuất.',
          'Con người tích cực: Cải tạo đất phèn đất mặn, trồng rừng phủ xanh đất trống đồi trọc, thành lập các khu bảo tồn thiên nhiên.',
          'Con người tiêu cực: Xả rác thải, khí thải gây ô nhiễm nước và không khí, săn bắt động vật hoang dã làm suy giảm đa dạng sinh học.'
        ],
        visualExample: 'Hình ảnh đối lập: Một bên là cánh đồng điện gió sạch, một bên là bãi rác thải nhựa đại dương (SGK tr. 213).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 212, pdfPage: 214, section: 'Mục 1. Mối quan hệ hai chiều' },
        commonTrapAlert: 'Tự nhiên không phải là nguồn tài nguyên vô tận để con người bóc lột tùy tiện.',
        iconName: 'Globe'
      }
    ],
    mindmap: {
      id: 'mm-628-root',
      label: 'Con người & Thiên nhiên',
      summary: 'Quan hệ hai chiều | Tự nhiên cho tài nguyên & không gian sống | Con người cần bảo vệ, tránh tàn phá',
      children: [
        { id: 'mm-628-tunhien', label: 'Tự nhiên cho con người', summary: 'Không khí, nước uống, thức ăn, khoáng sản' },
        { id: 'mm-628-connguoi', label: 'Tác động con người', summary: 'Tích cực (trồng rừng) <-> Tiêu cực (ô nhiễm, phá rừng)' }
      ]
    },
    comparisons: [
      {
        id: 'comp-628-1',
        conceptA: 'Khai thác tài nguyên hủy diệt',
        conceptB: 'Khai thác tài nguyên bền vững',
        keyDifferences: [
          { criteria: 'Phương thức tiến hành', conceptAVal: 'Chặt trắng rừng, dùng kích điện bắt cá, xả thải trực tiếp không xử lí', conceptBVal: 'Khai thác có chọn lọc, nuôi trồng bổ sung, xử lí 100% chất thải' },
          { criteria: 'Hệ quả lâu dài', conceptAVal: 'Cạn kiệt tài nguyên, ô nhiễm môi trường, gánh chịu thiên tai khốc liệt', conceptBVal: 'Tài nguyên phục hồi, bảo tồn môi trường cho thế hệ tương lai' }
        ],
        commonConfusion: 'Học sinh nhầm bảo vệ thiên nhiên là ngừng mọi hoạt động sản xuất kinh tế.',
        memoryRule: 'Khai thác thông minh đi đôi với bảo tồn và tái tạo.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-628-1',
        questionText: 'Hành động nào dưới đây thể hiện sự tác động tích cực của con người đối với môi trường tự nhiên?',
        options: [
          { id: 'A', text: 'Trồng rừng ngập mặn chắn sóng và bảo vệ bãi biển' },
          { id: 'B', text: 'Xả nước thải chưa qua xử lí ra sông hồ' },
          { id: 'C', text: 'Săn bắt chim thú quý hiếm để buôn bán' },
          { id: 'D', text: 'Đốt rừng làm nương rẫy bừa bãi' }
        ],
        correctAnswer: 'A',
        explanation: 'Trồng rừng ngập mặn giúp phục hồi hệ sinh thái ven biển, chắn gió bão và giảm thiểu xói lở bờ biển.',
        hint: 'Hành động bảo vệ và phục hồi màu xanh.',
        knowledgeCardId: 'KC-628-1'
      }
    ]
  },
  'G6-L29': {
    lessonId: 'G6-L29',
    grade: 6,
    chapterId: 'G6-C7',
    chapterTitle: 'Chương 7. Con người và thiên nhiên',
    lessonTitle: 'Bài 29: Bảo vệ tự nhiên và khai thác thông minh các tài nguyên thiên nhiên vì sự phát triển bền vững',
    sgkPageRange: 'Trang 216 – 219',
    pdfPageRange: 'Trang 218 – 221',
    objectives: [
      'Hiểu được khái niệm phát triển bền vững (đáp ứng nhu cầu hiện tại mà không làm tổn hại đến tương lai).',
      'Phân biệt được tài nguyên tái tạo (năng lượng mặt trời, gió, nước) và tài nguyên không thể tái tạo (khoáng sản hóa thạch).',
      'Đề xuất được các hành động cụ thể để bảo vệ thiên nhiên (tiết kiệm điện nước, giảm rác thải nhựa, phân loại rác).'
    ],
    knowledgeCards: [
      {
        id: 'KC-629-1',
        cardIndex: 1,
        title: 'Thẻ 1: Khái niệm Phát triển bền vững và Tài nguyên',
        concept: 'Phát triển bền vững, Tài nguyên tái tạo và không thể tái tạo',
        coreDefinition: 'Phát triển bền vững là sự phát triển kết hợp hài hòa giữa tăng trưởng kinh tế, công bằng xã hội và bảo vệ môi trường.',
        keyPoints: [
          'Tài nguyên tái tạo: Có thể tự phục hồi nếu khai thác hợp lí (năng lượng mặt trời, sức gió, nước, đất, rừng).',
          'Tài nguyên không thể tái tạo: Mất hàng triệu năm địa chất để hình thành, một khi khai thác là cạn kiệt vĩnh viễn (than đá, dầu mỏ, quặng kim loại).',
          'Khai thác thông minh: Chuyển dịch từ năng lượng hóa thạch sang năng lượng xanh, thúc đẩy mô hình kinh tế tuần hoàn.'
        ],
        visualExample: 'Sơ đồ tam giác phát triển bền vững gồm 3 trụ cột: Kinh tế - Xã hội - Môi trường (SGK tr. 217).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 216, pdfPage: 218, section: 'Mục 1. Phát triển bền vững' },
        commonTrapAlert: 'Than đá và dầu mỏ là tài nguyên KHÔNG THỂ TÁI TẠO; dùng hết là cạn kiệt.',
        iconName: 'Shield'
      },
      {
        id: 'KC-629-2',
        cardIndex: 2,
        title: 'Thẻ 2: Hành động bảo vệ tự nhiên của học sinh',
        concept: 'Nguyên tắc 3R (Reduce - Reuse - Recycle), Tiết kiệm năng lượng',
        coreDefinition: 'Mỗi học sinh đều có thể đóng góp thiết thực vào việc bảo vệ môi trường từ những việc làm nhỏ nhất.',
        keyPoints: [
          'Giảm thiểu (Reduce): Giảm sử dụng đồ nhựa dùng một lần, túi ni-lông.',
          'Tái sử dụng (Reuse): Sử dụng bình nước cá nhân, hộp đựng nhiều lần.',
          'Tái chế (Recycle): Phân loại rác tại nguồn (rác hữu cơ, rác tái chế, rác thải nguy hại).',
          'Tắt các thiết bị điện khi không sử dụng, khóa chặt vòi nước tránh rò rỉ.'
        ],
        visualExample: 'Thùng rác phân loại 3 màu ở trường học và phong trào trồng cây xanh (SGK tr. 218).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 218, pdfPage: 220, section: 'Mục 2. Hành động của chúng ta' },
        commonTrapAlert: 'Bảo vệ môi trường bắt đầu từ thói quen phân loại rác và tiết kiệm năng lượng hàng ngày.',
        iconName: 'Sprout'
      }
    ],
    mindmap: {
      id: 'mm-629-root',
      label: 'Phát triển bền vững',
      summary: '3 trụ cột: Kinh tế - Xã hội - Môi trường | Năng lượng tái tạo xanh | Nguyên tắc 3R phân loại rác',
      children: [
        { id: 'mm-629-tn', label: 'Tài nguyên', summary: 'Tái tạo (mặt trời, gió) & Không tái tạo (than đá, dầu mỏ)' },
        { id: 'mm-629-3r', label: 'Nguyên tắc 3R', summary: 'Reduce (Giảm thiểu) - Reuse (Tái dùng) - Recycle (Tái chế)' }
      ]
    },
    comparisons: [
      {
        id: 'comp-629-1',
        conceptA: 'Tài nguyên tái tạo (Gió, Mặt Trời)',
        conceptB: 'Tài nguyên không thể tái tạo (Than đá, Dầu mỏ)',
        keyDifferences: [
          { criteria: 'Khả năng phục hồi', conceptAVal: 'Vô tận, liên tục được tái tạo từ tự nhiên', conceptBVal: 'Có hạn, một khi khai thác hết sẽ cạn kiệt vĩnh viễn' },
          { criteria: 'Khí thải môi trường', conceptAVal: 'Năng lượng sạch, hầu như không phát thải khí CO2', conceptBVal: 'Đốt cháy phát thải lượng lớn khí nhà kính và bụi mịn' }
        ],
        commonConfusion: 'Học sinh nhầm khoáng sản kim loại có thể tự sinh sôi trong lòng đất.',
        memoryRule: 'Nắng gió vô tận sạch sẽ; Than dầu cạn kiệt ô nhiễm.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-629-1',
        questionText: 'Nguồn tài nguyên năng lượng nào dưới đây là tài nguyên tái tạo sạch, thân thiện với môi trường?',
        options: [
          { id: 'A', text: 'Năng lượng ánh sáng Mặt Trời và năng lượng gió' },
          { id: 'B', text: 'Năng lượng từ than đá' },
          { id: 'C', text: 'Năng lượng từ dầu mỏ' },
          { id: 'D', text: 'Khí đốt tự nhiên' }
        ],
        correctAnswer: 'A',
        explanation: 'Ánh sáng Mặt Trời và sức gió là nguồn năng lượng vô tận, không cạn kiệt và không phát thải khí nhà kính.',
        hint: 'Năng lượng xanh vô tận từ thiên nhiên.',
        knowledgeCardId: 'KC-629-1'
      }
    ]
  },
  'G6-L30': {
    lessonId: 'G6-L30',
    grade: 6,
    chapterId: 'G6-C7',
    chapterTitle: 'Chương 7. Con người và thiên nhiên',
    lessonTitle: 'Bài 30: Thực hành: Tìm hiểu mối quan hệ giữa con người và thiên nhiên ở địa phương',
    sgkPageRange: 'Trang 220 – 221',
    pdfPageRange: 'Trang 222 – 223',
    objectives: [
      'Khảo sát các hoạt động khai thác tự nhiên tiêu biểu tại địa phương (nông nghiệp, làng nghề, công nghiệp hoặc du lịch).',
      'Chỉ ra các vấn đề môi trường đang xảy ra ở địa phương (ô nhiễm rác thải, ô nhiễm kênh mương, suy thoái rừng).',
      'Đề xuất thông điệp hoặc giải pháp xanh để bảo vệ môi trường quê hương.'
    ],
    knowledgeCards: [
      {
        id: 'KC-630-1',
        cardIndex: 1,
        title: 'Thẻ 1: Khảo sát thực trạng môi trường địa phương',
        concept: 'Hoạt động kinh tế địa phương, Điểm nóng ô nhiễm và Giải pháp xanh',
        coreDefinition: 'Bài thực hành tổng kết giúp học sinh đóng vai những tuyên truyền viên bảo vệ môi trường quê hương.',
        keyPoints: [
          'Các hoạt động sản xuất: Trồng lúa, nuôi trồng thủy sản, chăn nuôi gia súc hoặc làng nghề truyền thống.',
          'Vấn đề rác thải: Xử lí bao bì thuốc bảo vệ thực vật, rác thải nhựa sinh hoạt, nước thải chăn nuôi.',
          'Hành động cộng đồng: Phong trào "Ngày Chủ nhật xanh", thu gom rác trên các tuyến đường làng, trồng hoa ven đường giao thông.'
        ],
        visualExample: 'Học sinh tham gia dọn dẹp vệ sinh bờ biển và trồng cây xanh sân trường (SGK tr. 221).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức', bookPage: 220, pdfPage: 222, section: 'Mục 1 & 2. Kế hoạch hành động' },
        commonTrapAlert: 'Giải pháp cần thiết thực, bắt đầu từ trường học và khu dân cư nơi em đang sinh sống.',
        iconName: 'FileText'
      }
    ],
    mindmap: {
      id: 'mm-630-root',
      label: 'Môi trường quê hương',
      summary: 'Khảo sát sản xuất địa phương | Nhận diện điểm nóng ô nhiễm | Giải pháp xanh & Ngày Chủ nhật xanh',
      children: [
        { id: 'mm-630-thuctrang', label: 'Thực trạng địa phương', summary: 'Rác thải nông nghiệp, nước thải kênh mương' },
        { id: 'mm-630-hanhdong', label: 'Hành động xanh', summary: 'Ngày Chủ nhật xanh, hạn chế đồ nhựa dùng 1 lần' }
      ]
    },
    comparisons: [
      {
        id: 'comp-630-1',
        conceptA: 'Vứt rác bừa bãi ra kênh mương',
        conceptB: 'Phân loại rác tại nguồn và tái chế',
        keyDifferences: [
          { criteria: 'Tác động môi trường', conceptAVal: 'Làm tắc nghẽn dòng chảy, bốc mùi hôi thối, ô nhiễm nguồn nước ngầm', conceptBVal: 'Giảm tải cho bãi rác, tái sinh tài nguyên, môi trường trong lành' },
          { criteria: 'Ý thức công dân', conceptAVal: 'Vô trách nhiệm, vi phạm pháp luật môi trường', conceptBVal: 'Văn minh, xây dựng quê hương xanh sạch đẹp' }
        ],
        commonConfusion: 'Học sinh nghĩ rác vứt xuống sông sẽ tự trôi đi hết và không gây hại.',
        memoryRule: 'Không xả rác bừa bãi; Chung tay giữ sạch dòng sông quê hương.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-630-1',
        questionText: 'Để góp phần bảo vệ nguồn nước các con kênh mương ở địa phương, hành động nào sau đây là thiết thực nhất?',
        options: [
          { id: 'A', text: 'Tuyệt đối không vứt rác thải, xác súc vật và bao bì thuốc bảo vệ thực vật xuống dòng nước' },
          { id: 'B', text: 'Đổ toàn bộ nước thải chưa qua xử lí xuống kênh mương vào ban đêm' },
          { id: 'C', text: 'Vứt túi nilon xuống kênh để nước cuốn đi xa' },
          { id: 'D', text: 'Lấp toàn bộ các dòng kênh' }
        ],
        correctAnswer: 'A',
        explanation: 'Bảo vệ nguồn nước kênh mương bằng cách không xả rác và hóa chất nông nghiệp giúp giữ gìn nguồn nước tưới tiêu sạch sẽ.',
        hint: 'Bảo vệ nguồn nước và không xả rác xuống lòng kênh.',
        knowledgeCardId: 'KC-630-1'
      }
    ]
  }
};
