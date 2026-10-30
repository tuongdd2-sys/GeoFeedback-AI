import { GeoLessonData } from '../types';

export const LESSONS_GRADE_7: Record<string, GeoLessonData> = {
  'G7-L1': {
    lessonId: 'G7-L1',
    grade: 7,
    chapterId: 'G7-C1',
    chapterTitle: 'Chương 1. Châu Âu',
    lessonTitle: 'Bài 1: Vị trí địa lí, đặc điểm tự nhiên châu Âu',
    sgkPageRange: 'Trang 96 – 101',
    pdfPageRange: 'Trang 98 – 103',
    objectives: [
      'Trình bày được đặc điểm vị trí địa lí, hình dạng và kích thước châu Âu.',
      'Phân tích được các khu vực địa hình chính: Đồng bằng châu Âu, miền núi già và miền núi trẻ (dãy An-pơ).',
      'Giải thích được đặc điểm phân hoá khí hậu và hệ thống sông ngòi (sông Đa-nuýp, Rai-nơ, Vôn-ga).'
    ],
    knowledgeCards: [
      {
        id: 'KC-701-1',
        cardIndex: 1,
        title: 'Thẻ 1: Vị trí địa lí và phạm vi châu Âu',
        concept: 'Bán đảo Á - Âu, ba mặt giáp biển, diện tích 10,5 triệu km²',
        coreDefinition: 'Châu Âu là bộ phận phía tây của lục địa Á - Âu, ngăn cách với châu Á bởi dãy U-ran.',
        keyPoints: [
          'Diện tích: Khoảng 10,5 triệu km² (chỉ lớn hơn châu Đại Dương).',
          'Vị trí: Nằm ở đới ôn hòa bán cầu Bắc, kéo dài từ khoảng vĩ tuyến 36°B đến 71°B.',
          'Hình dạng: Đường bờ biển bị cắt xẻ dữ dội, tạo thành nhiều bán đảo (Xcan-đi-na-vi, I-bê-rích, I-ta-li-a...) và các biển, vịnh ăn sâu vào đất liền.'
        ],
        visualExample: 'Bản đồ tự nhiên châu Âu với dãy An-pơ ở phía nam và đồng bằng rộng lớn ở trung tâm.',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 97, pdfPage: 99, section: 'Mục 1. Vị trí địa lí' },
        commonTrapAlert: 'Châu Âu và Châu Á cùng chung một khối lục địa Á - Âu, ranh giới tự nhiên là dãy U-ran.',
        iconName: 'Compass'
      },
      {
        id: 'KC-701-2',
        cardIndex: 2,
        title: 'Thẻ 2: Địa hình và khoáng sản châu Âu',
        concept: 'Đồng bằng chiếm 2/3 diện tích, Dãy An-pơ, núi già và núi trẻ',
        coreDefinition: 'Địa hình châu Âu gồm hai khu vực chính: khu vực đồng bằng và khu vực miền núi.',
        keyPoints: [
          'Đồng bằng: Chiếm 2/3 diện tích châu lục, trải dài từ tây sang đông (Đồng bằng Bắc Âu, Đông Âu).',
          'Miền núi già: Phía bắc và trung tâm (dãy Xcan-đi-na-vi, U-ran), đỉnh tròn sườn thoải, thung lũng rộng.',
          'Miền núi trẻ: Phía nam (dãy An-pơ, Các-pát), đỉnh nhọn sườn dốc hiểm trở; đỉnh Mon Blanc (An-pơ) cao nhất châu Âu (4807 m).',
          'Khoáng sản: Than đá, sắt, dầu mỏ và khí tự nhiên (biển Bắc).'
        ],
        visualExample: 'Đỉnh núi tuyết phủ quanh năm trên dãy An-pơ (SGK tr. 98).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 98, pdfPage: 100, section: 'Mục 2. Địa hình' },
        commonTrapAlert: 'Nhầm núi già và núi trẻ: Núi già đỉnh tròn thoải; núi trẻ An-pơ đỉnh nhọn sắc nhọn và cao hiểm trở.',
        iconName: 'Mountain'
      },
      {
        id: 'KC-701-3',
        cardIndex: 3,
        title: 'Thẻ 3: Khí hậu và sông ngòi châu Âu',
        concept: 'Khí hậu ôn đới hải dương, ôn đới lục địa, sông Đa-nuýp và Rai-nơ',
        coreDefinition: 'Đại bộ phận châu Âu có khí hậu ôn đới, chịu ảnh hưởng sâu sắc của dòng biển nóng Bắc Đại Tây Dương và gió Tây ôn đới.',
        keyPoints: [
          'Phía Tây: Khí hậu ôn đới hải dương, mùa hạ mát, mùa đông không lạnh lắm, mưa quanh năm.',
          'Phía Đông: Càng vào sâu đất liền tính chất lục địa tăng dần, mùa hạ nóng, mùa đông rất lạnh có tuyết rơi.',
          'Phía Nam: Khí hậu Địa Trung Hải, mùa hạ nóng khô, mùa đông ấm và mưa nhiều.',
          'Sông ngòi: Mạng lưới sông ngòi dày đặc. Sông Vôn-ga dài nhất châu Âu; sông Đa-nuýp và sông Rai-nơ là trục giao thông thủy huyết mạch.'
        ],
        visualExample: 'Biểu đồ nhiệt độ lượng mưa trạm Brét (ôn đới hải dương) và Ca-dan (ôn đới lục địa).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 100, pdfPage: 102, section: 'Mục 3 & 4. Khí hậu và sông ngòi' },
        commonTrapAlert: 'Khí hậu Địa Trung Hải mưa vào mùa đông khô vào mùa hạ (ngược với khí hậu nhiệt đới gió mùa của Việt Nam).',
        iconName: 'CloudRain'
      }
    ],
    mindmap: {
      id: 'mm-701-root',
      label: 'Tự nhiên Châu Âu',
      summary: 'Diện tích 10,5 triệu km² | Đồng bằng 2/3 diện tích & Dãy An-pơ | Khí hậu ôn đới hải dương & lục địa | Sông Đa-nuýp, Rai-nơ',
      children: [
        { id: 'mm-701-vt', label: 'Vị trí & Phạm vi', summary: 'Bán đảo tây lục địa Á - Âu, bờ biển xẻ khúc' },
        { id: 'mm-701-dh', label: 'Địa hình', summary: 'Đồng bằng Bắc Âu, Đông Âu; Núi trẻ An-pơ đỉnh nhọn' },
        { id: 'mm-701-kh', label: 'Khí hậu & Sông ngòi', summary: 'Ôn đới hải dương tây, ôn đới lục địa đông; sông Đa-nuýp' }
      ]
    },
    comparisons: [
      {
        id: 'comp-701-1',
        conceptA: 'Khí hậu ôn đới hải dương (Tây Âu)',
        conceptB: 'Khí hậu ôn đới lục địa (Đông Âu)',
        keyDifferences: [
          { criteria: 'Nhiệt độ mùa đông', conceptAVal: 'Ấm áp hơn, hiếm khi đóng băng nhờ dòng biển nóng', conceptBVal: 'Rất lạnh giá, nhiệt độ xuống âm, có tuyết rơi dày' },
          { criteria: 'Chế độ mưa', conceptAVal: 'Mưa quanh năm, độ ẩm cao', conceptBVal: 'Lượng mưa ít hơn, mưa tập trung vào mùa hạ' }
        ],
        commonConfusion: 'Học sinh hay cho rằng toàn bộ châu Âu đều có mùa đông băng tuyết lạnh buốt giống nhau.',
        memoryRule: 'Tây Âu: Hải dương ẩm ướt mát mẻ; Đông Âu: Lục địa khô và đông băng giá.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-701-1',
        questionText: 'Dãy núi trẻ cao và đồ sộ nhất châu Âu, có đỉnh Mon Blanc cao 4807 m là dãy núi nào?',
        options: [
          { id: 'A', text: 'Dãy An-pơ' },
          { id: 'B', text: 'Dãy U-ran' },
          { id: 'C', text: 'Dãy Xcan-đi-na-vi' },
          { id: 'D', text: 'Dãy A-pa-lat' }
        ],
        correctAnswer: 'A',
        explanation: 'Dãy An-pơ là dãy núi trẻ cao và uốn lượn hùng vĩ nhất ở Nam Âu, có đỉnh Mon Blanc quanh năm phủ tuyết trắng.',
        hint: 'Dãy núi biểu tượng của Thụy Sĩ, Pháp, Ý.',
        knowledgeCardId: 'KC-701-2'
      }
    ]
  },
  'G7-L2': {
    lessonId: 'G7-L2',
    grade: 7,
    chapterId: 'G7-C1',
    chapterTitle: 'Chương 1. Châu Âu',
    lessonTitle: 'Bài 2: Đặc điểm dân cư, xã hội châu Âu',
    sgkPageRange: 'Trang 102 – 105',
    pdfPageRange: 'Trang 104 – 107',
    objectives: [
      'Trình bày được đặc điểm quy mô dân số và cơ cấu dân số già của châu Âu.',
      'Phân tích được đặc điểm đô thị hoá và sự phát triển của mạng lưới đô thị ở châu Âu.',
      'Nhận xét được tình trạng nhập cư và tác động đối với kinh tế - xã hội châu Âu.'
    ],
    knowledgeCards: [
      {
        id: 'KC-702-1',
        cardIndex: 1,
        title: 'Thẻ 1: Quy mô dân số và hiện tượng già hóa',
        concept: 'Dân số khoảng 747 triệu người, Tỉ lệ người cao tuổi cao, Thiếu hụt lao động',
        coreDefinition: 'Châu Âu có tỉ suất gia tăng tự nhiên rất thấp và cơ cấu dân số già nhất thế giới.',
        keyPoints: [
          'Quy mô dân số: Đạt khoảng 747 triệu người (năm 2020), gia tăng tự nhiên rất thấp, một số nước âm.',
          'Cơ cấu dân số già: Nhóm dưới 15 tuổi giảm xuống chỉ còn khoảng 16%; nhóm từ 65 tuổi trở lên tăng nhanh đạt gần 19%.',
          'Hệ quả: Thiếu hụt nguồn lao động tương lai, gia tăng chi phí phúc lợi an sinh xã hội và chăm sóc y tế cho người cao tuổi.'
        ],
        visualExample: 'Tháp dân số châu Âu dạng thu hẹp ở đáy và phình to ở đỉnh (SGK tr. 103).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 103, pdfPage: 105, section: 'Mục 1. Dân cư' },
        commonTrapAlert: 'Châu Âu có cơ cấu dân số già, không phải cơ cấu dân số trẻ.',
        iconName: 'Users'
      },
      {
        id: 'KC-702-2',
        cardIndex: 2,
        title: 'Thẻ 2: Đô thị hoá và dòng người nhập cư',
        concept: 'Đô thị hóa sớm, tỉ lệ thị dân >75%, Dòng nhập cư bổ sung lao động',
        coreDefinition: 'Châu Âu là cái nôi của cuộc cách mạng công nghiệp nên có mức độ đô thị hoá cao và tiếp nhận nhiều lao động nhập cư.',
        keyPoints: [
          'Đô thị hoá diễn ra sớm từ thế kỉ XVIII, hiện có trên 75% dân số sống trong các đô thị.',
          'Mạng lưới đô thị phát triển bền vững, hạ tầng đồng bộ, nhiều chùm đô thị liên kết xuyên quốc gia.',
          'Nhập cư: Châu Âu thu hút lượng lớn lao động từ châu Phi, châu Á và Trung Đông, giúp bổ sung nguồn lao động nhưng cũng đặt ra vấn đề hòa nhập xã hội và an ninh.'
        ],
        visualExample: 'Bản đồ các đô thị lớn của châu Âu (Pa-ri, Luân Đôn, Mát-xcơ-va...).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 104, pdfPage: 106, section: 'Mục 2. Đô thị hoá' },
        commonTrapAlert: 'Đô thị hóa châu Âu là đô thị hóa gắn liền công nghiệp hóa thực chất, không phải đô thị hóa tự phát.',
        iconName: 'Building'
      }
    ],
    mindmap: {
      id: 'mm-702-root',
      label: 'Dân cư & Xã hội Châu Âu',
      summary: 'Dân số ~747 triệu | Cơ cấu dân số già (>65 tuổi chiếm ~19%) | Đô thị hóa >75% | Lao động nhập cư',
      children: [
        { id: 'mm-702-giahoa', label: 'Cơ cấu già hóa', summary: 'Sinh thấp, tuổi thọ cao, thiếu hụt lao động' },
        { id: 'mm-702-dothi', label: 'Đô thị hoá cao', summary: 'Trên 75% dân thành thị, đô thị cổ kính kết hợp hiện đại' },
        { id: 'mm-702-nhapcu', label: 'Lao động nhập cư', summary: 'Bổ sung nguồn lực nhưng tạo sức ép xã hội' }
      ]
    },
    comparisons: [
      {
        id: 'comp-702-1',
        conceptA: 'Cơ cấu dân số trẻ (như châu Phi)',
        conceptB: 'Cơ cấu dân số già (như châu Âu)',
        keyDifferences: [
          { criteria: 'Tỉ lệ nhóm dưới 15 tuổi', conceptAVal: 'Rất cao (trên 35% - 40%), đáy tháp mở rộng', conceptBVal: 'Thấp (dưới 16%), đáy tháp thu hẹp' },
          { criteria: 'Thách thức xã hội', conceptAVal: 'Áp lực về trường học, việc làm cho giới trẻ', conceptBVal: 'Thiếu hụt lao động, áp lực viện dưỡng lão và quỹ lương hưu' }
        ],
        commonConfusion: 'Học sinh hay nhầm dân số già là nước kém phát triển (châu Âu là các nước phát triển có tuổi thọ cao).',
        memoryRule: 'Châu Âu dân số già: Tuổi thọ cao, sinh ít, thiếu lao động.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-702-1',
        questionText: 'Thách thức lớn nhất đối với lực lượng lao động của châu Âu do cơ cấu dân số già gây ra là gì?',
        options: [
          { id: 'A', text: 'Thiếu hụt nguồn lao động trong độ tuổi sản xuất' },
          { id: 'B', text: 'Bùng nổ dân số quá nhanh không kiểm soát được' },
          { id: 'C', text: 'Tỉ lệ trẻ em đến tuổi đi học quá đông' },
          { id: 'D', text: 'Thừa thãi quá nhiều lao động trẻ tuổi' }
        ],
        correctAnswer: 'A',
        explanation: 'Do tỉ lệ sinh quá thấp kéo dài qua nhiều thế hệ, số người bước vào độ tuổi lao động ít hơn nhiều so với số người nghỉ hưu dẫn đến thiếu lao động.',
        hint: 'Ít trẻ em lớn lên để thay thế lớp người về hưu.',
        knowledgeCardId: 'KC-702-1'
      }
    ]
  },
  'G7-L3': {
    lessonId: 'G7-L3',
    grade: 7,
    chapterId: 'G7-C1',
    chapterTitle: 'Chương 1. Châu Âu',
    lessonTitle: 'Bài 3: Khai thác, sử dụng và bảo vệ thiên nhiên ở châu Âu',
    sgkPageRange: 'Trang 106 – 109',
    pdfPageRange: 'Trang 108 – 111',
    objectives: [
      'Trình bày được các vấn đề môi trường không khí và nước ở châu Âu và các biện pháp bảo vệ.',
      'Hiểu được phương thức bảo vệ rừng và đa dạng sinh học tại châu Âu.',
      'Phân tích được xu hướng chuyển dịch sang năng lượng tái tạo (gió, mặt trời, thủy điện).'
    ],
    knowledgeCards: [
      {
        id: 'KC-703-1',
        cardIndex: 1,
        title: 'Thẻ 1: Bảo vệ môi trường không khí và nước',
        concept: 'Kiểm soát khí thải CO2, phục hồi nguồn nước các dòng sông',
        coreDefinition: 'Châu Âu tiên phong ban hành các tiêu chuẩn môi trường nghiêm ngặt nhất thế giới để phục hồi môi trường sau công nghiệp hóa.',
        keyPoints: [
          'Không khí: Giảm phát thải khí nhà kính (CO2, SO2), đánh thuế phát thải các-bon, ưu tiên phương tiện giao thông công cộng và xe điện.',
          'Nguồn nước: Kiểm soát nghiêm ngặt nước thải công nghiệp và nông nghiệp; phục hồi thành công hệ sinh thái sông Rai-nơ và sông Đa-nuýp từng bị ô nhiễm nặng.',
          'Hạn chế tối đa rác thải nhựa và tái chế kinh tế tuần hoàn.'
        ],
        visualExample: 'Hình ảnh cá hồi bơi trở lại dòng sông Rai-nơ sau hàng thập kỉ nỗ lực xử lí nước thải (SGK tr. 107).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 107, pdfPage: 109, section: 'Mục 1. Bảo vệ nước và không khí' },
        commonTrapAlert: 'Trước đây sông Rai-nơ từng là "cống thoát nước của châu Âu", nay đã được phục hồi sinh thái.',
        iconName: 'Droplet'
      },
      {
        id: 'KC-703-2',
        cardIndex: 2,
        title: 'Thẻ 2: Bảo vệ rừng và chuyển đổi năng lượng xanh',
        concept: 'Trồng rừng Taiga, điện gió ngoài khơi, năng lượng mặt trời',
        coreDefinition: 'Châu Âu tăng độ che phủ rừng và đặt mục tiêu trung hòa các-bon bằng năng lượng sạch.',
        keyPoints: [
          'Bảo vệ rừng: Ban hành luật bảo vệ rừng ngặt nghèo, trồng rừng mới kết hợp khai thác gỗ bền vững có chứng chỉ quốc tế FSC.',
          'Chuyển đổi năng lượng: Đóng cửa dần các nhà máy nhiệt điện than gây ô nhiễm, thay thế bằng điện gió ngoài khơi (biển Bắc), điện mặt trời và năng lượng sinh khối.',
          'Mục tiêu Thỏa thuận Xanh châu Âu: Đạt mức trung hòa phát thải các-bon vào năm 2050.'
        ],
        visualExample: 'Các cánh đồng điện gió ngoài khơi tại Đan Mạch và Hà Lan.',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 108, pdfPage: 110, section: 'Mục 2. Năng lượng tái tạo' },
        commonTrapAlert: 'Châu Âu phát triển điện gió biển Bắc mạnh nhất thế giới do có gió Tây ôn đới hoạt động ổn định.',
        iconName: 'Sun'
      }
    ],
    mindmap: {
      id: 'mm-703-root',
      label: 'Bảo vệ thiên nhiên Châu Âu',
      summary: 'Làm sạch sông Rai-nơ | Đánh thuế phát thải các-bon | Điện gió biển Bắc | Trung hòa các-bon 2050',
      children: [
        { id: 'mm-703-nuoc', label: 'Bảo vệ nước & khí', summary: 'Xử lí 100% nước thải, giảm phát thải khí nhà kính' },
        { id: 'mm-703-nl', label: 'Năng lượng xanh', summary: 'Điện gió biển Bắc, mặt trời, thay thế nhiệt điện than' }
      ]
    },
    comparisons: [
      {
        id: 'comp-703-1',
        conceptA: 'Nhiệt điện than truyền thống',
        conceptB: 'Điện gió ngoài khơi và năng lượng sạch',
        keyDifferences: [
          { criteria: 'Khí thải và ô nhiễm', conceptAVal: 'Thải lượng lớn khí CO2 gây hiệu ứng nhà kính và bụi mịn', conceptBVal: 'Hầu như không phát thải khí nhà kính, năng lượng vô tận' },
          { criteria: 'Xu hướng ở châu Âu', conceptAVal: 'Bị hạn chế và đóng cửa dần', conceptBVal: 'Được trợ cấp mạnh mẽ và là trụ cột tương lai' }
        ],
        commonConfusion: 'Học sinh nhầm châu Âu vẫn chủ yếu dựa vào nhiệt điện than.',
        memoryRule: 'Châu Âu xanh: Đóng cửa điện than, đón đầu điện gió và mặt trời.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-703-1',
        questionText: 'Mục tiêu chiến lược quan trọng của "Thỏa thuận Xanh châu Âu" (European Green Deal) là gì?',
        options: [
          { id: 'A', text: 'Đạt mức trung hòa phát thải khí nhà kính (Net Zero) vào năm 2050' },
          { id: 'B', text: 'Tăng cường khai thác than đá tối đa' },
          { id: 'C', text: 'Chặt phá toàn bộ rừng để làm nông nghiệp' },
          { id: 'D', text: 'Ngừng sử dụng hoàn toàn điện năng' }
        ],
        correctAnswer: 'A',
        explanation: 'Thỏa thuận Xanh châu Âu đặt mục tiêu đưa châu Âu trở thành châu lục đầu tiên trên thế giới đạt trung hòa khí hậu vào năm 2050.',
        hint: 'Không phát thải ròng các-bon vào năm 2050.',
        knowledgeCardId: 'KC-703-2'
      }
    ]
  },
  'G7-L4': {
    lessonId: 'G7-L4',
    grade: 7,
    chapterId: 'G7-C1',
    chapterTitle: 'Chương 1. Châu Âu',
    lessonTitle: 'Bài 4: Liên minh châu Âu',
    sgkPageRange: 'Trang 110 – 113',
    pdfPageRange: 'Trang 112 – 115',
    objectives: [
      'Xác định được quy mô và các mốc hình thành, phát triển của Liên minh châu Âu (EU).',
      'Phân tích được bốn mặt tự do lưu thông trong thị trường chung châu Âu.',
      'Hiểu được vai trò của đồng tiền chung châu Âu (Euro) và vị thế của EU trong nền kinh tế thế giới.'
    ],
    knowledgeCards: [
      {
        id: 'KC-704-1',
        cardIndex: 1,
        title: 'Thẻ 1: Khái quát và quy mô của Liên minh châu Âu (EU)',
        concept: '27 quốc gia thành viên, Tiền thân Cộng đồng Than Thép châu Âu 1951, Trụ sở Bruyn-xen',
        coreDefinition: 'Liên minh châu Âu (EU) là tổ chức liên kết khu vực thành công và toàn diện nhất trên thế giới.',
        keyPoints: [
          'Quá trình hình thành: Bắt đầu từ Cộng đồng Than Thép châu Âu (1951), Cộng đồng Kinh tế châu Âu (1957) và chính thức mang tên Liên minh châu Âu (EU) theo Hiệp ước Ma-xtrích (năm 1993).',
          'Quy mô: Tính đến nay gồm 27 quốc gia thành viên (sau khi Vương quốc Anh rời EU - Brexit năm 2020).',
          'Trụ sở chính: Đặt tại thủ đô Bruyn-xen (Bỉ).',
          'Vị thế: Là một trong bốn trung tâm kinh tế lớn nhất hành tinh cùng với Hoa Kỳ, Trung Quốc và Nhật Bản.'
        ],
        visualExample: 'Bản đồ các nước thành viên Liên minh châu Âu (EU) có biểu tượng cờ xanh 12 ngôi sao vàng (SGK tr. 111).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 111, pdfPage: 113, section: 'Mục 1. Khái quát EU' },
        commonTrapAlert: 'Bẫy số liệu: EU hiện có 27 thành viên (không còn là 28 thành viên sau sự kiện Brexit năm 2020).',
        iconName: 'Globe'
      },
      {
        id: 'KC-704-2',
        cardIndex: 2,
        title: 'Thẻ 2: Bốn mặt tự do lưu thông và đồng tiền chung Euro',
        concept: 'Tự do di chuyển con người, hàng hóa, dịch vụ, tiền vốn; Đồng tiền Euro',
        coreDefinition: 'Thị trường chung duy nhất châu Âu cho phép bốn mặt tự do lưu thông hoàn toàn và sử dụng đồng Euro chung.',
        keyPoints: [
          'Bốn mặt tự do: Tự do lưu thông con người (công dân đi lại, cư trú, làm việc không cần thị thực theo Hiệp ước Schengen); Tự do lưu thông hàng hóa; Tự do dịch vụ; Tự do tiền vốn.',
          'Đồng tiền chung Euro (€): Chính thức đưa vào lưu thông từ năm 2002, xóa bỏ chi phí đổi ngoại tệ, thúc đẩy thương mại nội khối và là đồng tiền dự trữ quốc tế mạnh chỉ sau Đô la Mỹ.',
          'Sức mạnh kinh tế: Chiếm tỉ trọng lớn trong GDP toàn cầu và là nhà tài trợ hỗ trợ phát triển chính thức (ODA) hàng đầu.'
        ],
        visualExample: 'Hình ảnh đồng tiền giấy và tiền xu Euro với các biểu tượng kiến trúc cầu nối châu Âu (SGK tr. 112).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 112, pdfPage: 114, section: 'Mục 2. Thị trường chung và đồng Euro' },
        commonTrapAlert: 'Bẫy nhận định: Không phải mọi nước EU đều dùng đồng Euro (chỉ các nước thuộc khu vực đồng Eurozone), nhưng Euro là đồng tiền chung biểu trưng của khối.',
        iconName: 'CreditCard'
      }
    ],
    mindmap: {
      id: 'mm-704-root',
      label: 'Liên minh châu Âu (EU)',
      summary: '27 quốc gia thành viên | 4 mặt tự do lưu thông (Người, Hàng hóa, Dịch vụ, Tiền vốn) | Đồng Euro | Trung tâm kinh tế lớn',
      children: [
        { id: 'mm-704-thanhlap', label: 'Quá trình thành lập', summary: '1951 Than Thép -> 1993 EU Ma-xtrích -> 27 thành viên' },
        { id: 'mm-704-tudoluuthong', label: '4 Tự do lưu thông', summary: 'Tự do di chuyển người, hàng hóa, dịch vụ, vốn' },
        { id: 'mm-704-euro', label: 'Đồng tiền Euro', summary: 'Đồng tiền chung từ 2002, thanh toán thuận tiện toàn khối' }
      ]
    },
    comparisons: [
      {
        id: 'comp-704-1',
        conceptA: 'Khu vực mậu dịch tự do thông thường',
        conceptB: 'Thị trường chung duy nhất EU',
        keyDifferences: [
          { criteria: 'Mức độ liên kết', conceptAVal: 'Chỉ xóa bỏ thuế quan đối với hàng hóa buôn bán lẫn nhau', conceptBVal: 'Liên kết sâu rộng: Xóa bỏ biên giới, tự do đi lại con người, vốn, dùng đồng tiền chung Euro' },
          { criteria: 'Cơ quan điều hành', conceptAVal: 'Chủ yếu đàm phán song phương hoặc hiệp định thương mại', conceptBVal: 'Có Nghị viện châu Âu, Ngân hàng Trung ương châu Âu (ECB), Tòa án công lý chung' }
        ],
        commonConfusion: 'Học sinh hay nhầm EU chỉ là một tổ chức buôn bán thông thường thay vì một liên minh kinh tế - chính trị thống nhất.',
        memoryRule: 'EU là tổ chức liên kết khu vực chặt chẽ và sâu rộng nhất thế giới.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-704-1',
        questionText: 'Thị trường chung duy nhất của Liên minh châu Âu (EU) bảo đảm quyền tự do nào dưới đây?',
        options: [
          { id: 'A', text: 'Tự do di chuyển của con người, hàng hóa, dịch vụ và tiền vốn' },
          { id: 'B', text: 'Chỉ tự do xuất khẩu than đá' },
          { id: 'C', text: 'Bắt buộc người dân phải dùng hộ chiếu khi qua biên giới từng nước nội khối' },
          { id: 'D', text: 'Cấm chuyển tiền qua lại giữa các quốc gia thành viên' }
        ],
        correctAnswer: 'A',
        explanation: 'Thị trường chung EU được xây dựng trên 4 trụ cột tự do căn bản: tự do di chuyển con người, tự do lưu thông hàng hóa, tự do dịch vụ và tự do lưu chuyển tiền vốn.',
        hint: 'Bốn mặt tự do cơ bản của EU.',
        knowledgeCardId: 'KC-704-2'
      }
    ]
  },
  'G7-L5': {
    lessonId: 'G7-L5',
    grade: 7,
    chapterId: 'G7-C2',
    chapterTitle: 'Chương 2. Châu Á',
    lessonTitle: 'Bài 5: Vị trí địa lí, đặc điểm tự nhiên châu Á',
    sgkPageRange: 'Trang 114 – 119',
    pdfPageRange: 'Trang 116 – 121',
    objectives: [
      'Trình bày được đặc điểm vị trí địa lí, kích thước khổng lồ của châu Á (châu lục lớn nhất thế giới).',
      'Phân tích được các khu vực địa hình chính: Dãy Hi-ma-lay-a, cao nguyên Tây Tạng, các đồng bằng châu thổ phì nhiêu.',
      'Giải thích được đặc điểm khí hậu gió mùa và mạng lưới sông ngòi đồ sộ của châu Á.'
    ],
    knowledgeCards: [
      {
        id: 'KC-705-1',
        cardIndex: 1,
        title: 'Thẻ 1: Vị trí địa lí và kích thước khổng lồ',
        concept: '44,4 triệu km² (kể cả đảo), Trải dài từ cực Bắc đến Xích đạo, Châu lục lớn nhất',
        coreDefinition: 'Châu Á là châu lục có diện tích lớn nhất thế giới, trải rộng trên nhiều vĩ độ ở bán cầu Bắc.',
        keyPoints: [
          'Diện tích: Khoảng 44,4 triệu km² (gồm cả các đảo), chiếm gần 30% diện tích đất nổi toàn cầu.',
          'Vị trí: Tiếp giáp ba đại dương lớn: Bắc Băng Dương, Thái Bình Dương và Ấn Độ Dương; tiếp giáp hai châu lục: châu Âu và châu Phi (qua kênh đào Xuy-ê).',
          'Kích thước vĩ đại khiến thiên nhiên châu Á phân hóa đa dạng thành nhiều đới cảnh quan sâu sắc.'
        ],
        visualExample: 'Bản đồ tự nhiên châu Á đồ sộ tiếp giáp ba đại dương (SGK tr. 115).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 115, pdfPage: 117, section: 'Mục 1. Vị trí địa lí' },
        commonTrapAlert: 'Châu Á có diện tích lớn nhất thế giới, gấp hơn 4 lần diện tích châu Âu.',
        iconName: 'Globe'
      },
      {
        id: 'KC-705-2',
        cardIndex: 2,
        title: 'Thẻ 2: Địa hình và khoáng sản châu Á',
        concept: 'Nóc nhà thế giới Everest (8848,86 m), Cao nguyên Tây Tạng, Đồng bằng lớn',
        coreDefinition: 'Địa hình châu Á rất hiểm trở, trung tâm là các dãy núi và sơn nguyên cao đồ sộ nhất hành tinh.',
        keyPoints: [
          'Núi và cao nguyên: Chiếm 3/4 diện tích châu lục. Các dãy núi chạy theo hai hướng chính (Đông - Tây và Bắc - Nam), tập trung ở trung tâm: dãy Hi-ma-lay-a với đỉnh Everest cao nhất thế giới (8848,86 m), cao nguyên Tây Tạng đồ sộ.',
          'Đồng bằng châu thổ: Rộng lớn, màu mỡ do phù sa sông bồi đắp (Đồng bằng Lưỡng Hà, Ấn - Hằng, Hoa Bắc, Hoa Trung, Mê Công...).',
          'Khoáng sản: Trữ lượng khổng lồ dầu mỏ, khí đốt (Tây Á, Đông Nam Á), than đá, sắt, thiếc...'
        ],
        visualExample: 'Dãy núi Hi-ma-lay-a hùng vĩ quanh năm tuyết phủ và đỉnh Everest (SGK tr. 116).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 116, pdfPage: 118, section: 'Mục 2. Địa hình' },
        commonTrapAlert: 'Đỉnh Everest cao 8848,86 m nằm trên dãy núi Hi-ma-lay-a, là nóc nhà thế giới.',
        iconName: 'Mountain'
      },
      {
        id: 'KC-705-3',
        cardIndex: 3,
        title: 'Thẻ 3: Khí hậu gió mùa và sông ngòi châu Á',
        concept: 'Gió mùa châu Á, Sông Trường Giang, Hoàng Hà, Mê Công',
        coreDefinition: 'Khí hậu châu Á phân hoá đa dạng thành nhiều đới và kiểu, nổi bật nhất là khí hậu gió mùa và khí hậu lục địa.',
        keyPoints: [
          'Đới khí hậu gió mùa: Phân bố ở Đông Á, Đông Nam Á và Nam Á; mùa hạ nóng ẩm mưa nhiều, mùa đông khô lạnh.',
          'Đới khí hậu lục địa: Phân bố sâu trong nội địa và Tây Á; khô hạn quanh năm, biên độ nhiệt ngày đêm rất lớn, hình thành hoang mạc Gô-bi, Rúp En Kha-li.',
          'Sông ngòi: Mạng lưới sông dày đặc, nhiều sông dài bậc nhất thế giới: Trường Giang (sông dài nhất châu Á), Hoàng Hà, sông Mê Công, sông Hằng, sông Ô-bi.'
        ],
        visualExample: 'Sông Trường Giang uốn lượn qua các hẻm núi hiểm trở ở Trung Quốc.',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 118, pdfPage: 120, section: 'Mục 3 & 4. Khí hậu và sông ngòi' },
        commonTrapAlert: 'Sông dài nhất châu Á là sông Trường Giang (Dương Tử), dài thứ 3 thế giới sau Nin và Amazon.',
        iconName: 'Wind'
      }
    ],
    mindmap: {
      id: 'mm-705-root',
      label: 'Tự nhiên Châu Á',
      summary: '44,4 triệu km² (lớn nhất thế giới) | Núi Hi-ma-lay-a & Đỉnh Everest 8848,86m | Khí hậu gió mùa & lục địa | Sông Trường Giang, Hoàng Hà',
      children: [
        { id: 'mm-705-vt', label: 'Vị trí & Quy mô', summary: 'Lớn nhất thế giới, giáp 3 đại dương lớn' },
        { id: 'mm-705-dh', label: 'Địa hình đồ sộ', summary: 'Núi cao ở trung tâm (Everest 8848,86m), đồng bằng châu thổ màu mỡ' },
        { id: 'mm-705-kh', label: 'Khí hậu & Sông ngòi', summary: 'Gió mùa Nam Á, Đông Á; Sông dài Trường Giang, Mê Công' }
      ]
    },
    comparisons: [
      {
        id: 'comp-705-1',
        conceptA: 'Khí hậu gió mùa châu Á (Đông Nam Á, Nam Á)',
        conceptB: 'Khí hậu lục địa châu Á (Nội địa & Tây Á)',
        keyDifferences: [
          { criteria: 'Lượng mưa và độ ẩm', conceptAVal: 'Mưa nhiều vào mùa hạ đón gió biển, ẩm ướt', conceptBVal: 'Rất khô hạn, lượng mưa dưới 200 mm/năm' },
          { criteria: 'Cảnh quan tương ứng', conceptAVal: 'Rừng nhiệt đới ẩm, thảo nguyên cây bụi tốt tươi', conceptBVal: 'Hoang mạc và bán hoang mạc cát rộng lớn (Gô-bi)' }
        ],
        commonConfusion: 'Học sinh nhầm Tây Á và nội địa châu Á cũng có khí hậu gió mùa ẩm ướt.',
        memoryRule: 'Gió mùa: Ven biển ẩm ướt, mưa hạ; Lục địa: Sâu trong nội địa khô hạn hoang mạc.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-705-1',
        questionText: 'Con sông nào dài nhất châu Á và đứng thứ ba trên thế giới sau sông Nin và sông A-ma-dôn?',
        options: [
          { id: 'A', text: 'Sông Trường Giang (Dương Tử)' },
          { id: 'B', text: 'Sông Hoàng Hà' },
          { id: 'C', text: 'Sông Mê Công' },
          { id: 'D', text: 'Sông Hằng' }
        ],
        correctAnswer: 'A',
        explanation: 'Sông Trường Giang ở Trung Quốc có chiều dài khoảng 6300 km, là dòng sông dài nhất châu Á và dài thứ ba trên thế giới.',
        hint: 'Dòng sông huyết mạch của vùng đất Trung Hoa.',
        knowledgeCardId: 'KC-705-3'
      }
    ]
  },
  'G7-L6': {
    lessonId: 'G7-L6',
    grade: 7,
    chapterId: 'G7-C2',
    chapterTitle: 'Chương 2. Châu Á',
    lessonTitle: 'Bài 6: Đặc điểm dân cư, xã hội châu Á',
    sgkPageRange: 'Trang 120 – 123',
    pdfPageRange: 'Trang 122 – 125',
    objectives: [
      'Trình bày được quy mô dân số khổng lồ của châu Á (đông dân nhất thế giới, gần 60% dân số toàn cầu).',
      'Phân tích được cơ cấu dân số theo độ tuổi và sự phân bố dân cư không đều.',
      'Hiểu được châu Á là cái nôi của các tôn giáo lớn trên thế giới (Phật giáo, Hồi giáo, Ki-tô giáo, Ấn Độ giáo).'
    ],
    knowledgeCards: [
      {
        id: 'KC-706-1',
        cardIndex: 1,
        title: 'Thẻ 1: Quy mô dân số và sự phân bố dân cư',
        concept: 'Hơn 4,6 tỉ người (năm 2020), Gần 60% dân số thế giới, Phân bố không đều',
        coreDefinition: 'Châu Á là châu lục đông dân nhất thế giới, tập trung hai quốc gia tỉ dân là Trung Quốc và Ấn Độ.',
        keyPoints: [
          'Quy mô dân số: Hơn 4,6 tỉ người (chiếm gần 60% dân số toàn cầu).',
          'Mật độ dân số cao: Trung bình khoảng 150 người/km², nhưng phân bố hết sức không đều.',
          'Nơi tập trung đông đúc: Các đồng bằng châu thổ ven biển Đông Á, Nam Á, Đông Nam Á (mật độ có nơi trên 1000 người/km²).',
          'Nơi thưa thớt: Vùng núi cao hiểm trở ở trung tâm, hoang mạc Tây Á và vùng băng giá Bắc Á.'
        ],
        visualExample: 'Bản đồ phân bố dân cư và các đô thị siêu lớn của châu Á (Tô-ki-ô, Niu Đê-li, Thượng Hải...).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 121, pdfPage: 123, section: 'Mục 1. Dân số và phân bố' },
        commonTrapAlert: 'Dân cư châu Á tập trung đông nhất ở các đồng bằng châu thổ hạ lưu sông, không phải trên các cao nguyên.',
        iconName: 'Users'
      },
      {
        id: 'KC-706-2',
        cardIndex: 2,
        title: 'Thẻ 2: Cái nôi của các tôn giáo lớn',
        concept: 'Ấn Độ giáo, Phật giáo, Ki-tô giáo, Hồi giáo ra đời tại châu Á',
        coreDefinition: 'Châu Á là nơi khởi nguồn của bốn tôn giáo lớn nhất thế giới, có ảnh hưởng sâu sắc đến văn hoá và đời sống xã hội.',
        keyPoints: [
          'Ấn Độ giáo (Hindu giáo): Ra đời tại Ấn Độ từ thiên niên kỉ thứ nhất trước Công nguyên.',
          'Phật giáo: Ra đời vào thế kỉ VI trước Công nguyên tại Ấn Độ bởi Thích Ca Mâu Ni, sau đó lan rộng sang Đông Á và Đông Nam Á.',
          'Ki-tô giáo: Ra đời vào đầu Công nguyên tại vùng Pa-le-xtin (Tây Á).',
          'Hồi giáo: Ra đời vào thế kỉ VII tại bán đảo A-rập (Tây Á) do nhà tiên tri Muhammad sáng lập.'
        ],
        visualExample: 'Hình ảnh chùa chiền Phật giáo Đông Nam Á, đền thờ Ấn Độ giáo và thánh đường Hồi giáo Tây Á.',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 122, pdfPage: 124, section: 'Mục 2. Tôn giáo' },
        commonTrapAlert: 'Cả bốn tôn giáo lớn (Ấn Độ giáo, Phật giáo, Ki-tô giáo, Hồi giáo) đều bắt nguồn từ châu Á, không phải châu Âu.',
        iconName: 'Compass'
      }
    ],
    mindmap: {
      id: 'mm-706-root',
      label: 'Dân cư & Tôn giáo Châu Á',
      summary: '>4,6 tỉ người (60% thế giới) | Tập trung ở đồng bằng ven biển | Cái nôi 4 tôn giáo lớn (Phật giáo, Hồi giáo, Ki-tô giáo, Hindu giáo)',
      children: [
        { id: 'mm-706-quymo', label: 'Quy mô dân số', summary: 'Đông nhất thế giới, Ấn Độ & Trung Quốc >1,4 tỉ người' },
        { id: 'mm-706-phanbo', label: 'Phân bố không đều', summary: 'Đông đúc ở châu thổ ven biển, thưa thớt ở nội địa núi cao' },
        { id: 'mm-706-tongiao', label: 'Nguồn gốc 4 tôn giáo', summary: 'Ấn Độ giáo, Phật giáo, Ki-tô giáo, Hồi giáo' }
      ]
    },
    comparisons: [
      {
        id: 'comp-706-1',
        conceptA: 'Vùng châu thổ Đông Á, Nam Á, Đông Nam Á',
        conceptB: 'Vùng nội địa và Bắc Á',
        keyDifferences: [
          { criteria: 'Mật độ dân số', conceptAVal: 'Rất đông đúc (thường >500 - 1000 người/km²)', conceptBVal: 'Cực kì thưa thớt (dưới 10 người/km²)' },
          { criteria: 'Điều kiện sinh sống', conceptAVal: 'Đất phù sa màu mỡ, nguồn nước dồi dào, thuận lợi trồng lúa nước', conceptBVal: 'Khô hạn hoang mạc hoặc băng giá khắc nghiệt quanh năm' }
        ],
        commonConfusion: 'Học sinh nhầm toàn bộ lãnh thổ châu Á đều đông đúc chật chội như nhau.',
        memoryRule: 'Châu Á: Châu thổ trù phú đông nghẹt, núi cao băng giá hoang vắng.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-706-1',
        questionText: 'Hai tôn giáo lớn nào trên thế giới có nguồn gốc ra đời từ đất nước Ấn Độ cổ đại?',
        options: [
          { id: 'A', text: 'Ấn Độ giáo và Phật giáo' },
          { id: 'B', text: 'Hồi giáo và Ki-tô giáo' },
          { id: 'C', text: 'Đạo Do Thái và Đạo Hồi' },
          { id: 'D', text: 'Đạo Tin Lành và Chính thống giáo' }
        ],
        correctAnswer: 'A',
        explanation: 'Ấn Độ giáo và Phật giáo đều được hình thành trên lãnh thổ Ấn Độ cổ đại trước khi truyền bá khắp châu Á.',
        hint: 'Gắn liền với nền văn minh sông Hằng và Thích Ca Mâu Ni.',
        knowledgeCardId: 'KC-706-2'
      }
    ]
  },
  'G7-L7': {
    lessonId: 'G7-L7',
    grade: 7,
    chapterId: 'G7-C2',
    chapterTitle: 'Chương 2. Châu Á',
    lessonTitle: 'Bài 7: Bản đồ chính trị châu Á, các khu vực của châu Á',
    sgkPageRange: 'Trang 124 – 129',
    pdfPageRange: 'Trang 126 – 131',
    objectives: [
      'Xác định được các khu vực chính của châu Á: Bắc Á, Trung Á, Tây Á, Nam Á, Đông Á, Đông Nam Á.',
      'Trình bày được đặc điểm tự nhiên và kinh tế - xã hội nổi bật của từng khu vực.',
      'Đọc bản đồ chính trị châu Á và chỉ ra các quốc gia trọng điểm.'
    ],
    knowledgeCards: [
      {
        id: 'KC-707-1',
        cardIndex: 1,
        title: 'Thẻ 1: Sáu khu vực địa lí của châu Á',
        concept: 'Bắc Á, Trung Á, Tây Á, Nam Á, Đông Á, Đông Nam Á',
        coreDefinition: 'Châu Á được chia thành sáu khu vực địa lí mang bản sắc tự nhiên và văn hoá riêng biệt.',
        keyPoints: [
          'Bắc Á (vùng Xi-bê-ri của Nga): Khí hậu băng giá lạnh buốt, rừng lá kim Taiga bạt ngàn, giàu khoáng sản.',
          'Trung Á: Nằm sâu trong nội địa, khí hậu khô hạn ôn đới lục địa, nhiều thảo nguyên và hoang mạc.',
          'Tây Á: Tiếp giáp 3 châu lục, khí hậu khô hạn, sở hữu mỏ dầu khí lớn nhất hành tinh quanh vịnh Péc-xích.',
          'Nam Á: Địa hình gồm Hi-ma-lay-a, đồng bằng Ấn - Hằng và cao nguyên Đê-can; khí hậu nhiệt đới gió mùa.',
          'Đông Á: Gồm Trung Quốc, Nhật Bản, Hàn Quốc, Triều Tiên, Đài Loan; kinh tế phát triển năng động.',
          'Đông Nam Á: 11 quốc gia (gồm Việt Nam), cầu nối Á - Úc, khí hậu nhiệt đới gió mùa, nông nghiệp lúa nước trù phú.'
        ],
        visualExample: 'Bản đồ 6 khu vực địa lí của châu Á với các màu sắc phân vùng trực quan (SGK tr. 125).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 125, pdfPage: 127, section: 'Mục 1. Phân chia khu vực' },
        commonTrapAlert: 'Việt Nam thuộc khu vực Đông Nam Á, nằm ở trung tâm đường giao thương hàng hải quốc tế.',
        iconName: 'Map'
      }
    ],
    mindmap: {
      id: 'mm-707-root',
      label: 'Các khu vực Châu Á',
      summary: '6 khu vực: Bắc Á | Trung Á | Tây Á (dầu mỏ) | Nam Á (Ấn Độ) | Đông Á (Trung, Nhật) | Đông Nam Á (ASEAN)',
      children: [
        { id: 'mm-707-bactrungtay', label: 'Bắc, Trung, Tây Á', summary: 'Bắc Á rừng Taiga; Trung Á thảo nguyên; Tây Á mỏ dầu vịnh Péc-xích' },
        { id: 'mm-707-namdong', label: 'Nam, Đông, Đông Nam Á', summary: 'Nam Á nhiệt đới gió mùa; Đông Á kinh tế đầu tàu; Đông Nam Á lúa nước' }
      ]
    },
    comparisons: [
      {
        id: 'comp-707-1',
        conceptA: 'Khu vực Tây Á',
        conceptB: 'Khu vực Đông Nam Á',
        keyDifferences: [
          { criteria: 'Khí hậu và cảnh quan', conceptAVal: 'Khô hạn hoang mạc nhiệt đới, thiếu nước ngọt', conceptBVal: 'Nhiệt đới gió mùa ẩm ướt, mạng lưới sông ngòi dày đặc' },
          { criteria: 'Thế mạnh tài nguyên', conceptAVal: 'Trữ lượng dầu mỏ và khí tự nhiên hàng đầu thế giới', conceptBVal: 'Rừng nhiệt đới, đất phù sa lúa nước, tài nguyên sinh vật biển' }
        ],
        commonConfusion: 'Học sinh nhầm Tây Á và Đông Nam Á có cùng khí hậu ẩm ướt nhiệt đới gió mùa.',
        memoryRule: 'Tây Á hoang mạc dầu mỏ; Đông Nam Á gió mùa trù phú lúa gạo.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-707-1',
        questionText: 'Khu vực nào ở châu Á có nguồn tài nguyên dầu mỏ và khí đốt phong phú bậc nhất thế giới tập trung quanh vịnh Péc-xích?',
        options: [
          { id: 'A', text: 'Tây Á' },
          { id: 'B', text: 'Bắc Á' },
          { id: 'C', text: 'Đông Nam Á' },
          { id: 'D', text: 'Nam Á' }
        ],
        correctAnswer: 'A',
        explanation: 'Khu vực Tây Á (với các quốc gia như Ả-rập Xê-út, Cô-oét, I-rắc, I-ran, UAE) sở hữu hơn một nửa trữ lượng dầu mỏ đã xác minh của toàn thế giới.',
        hint: 'Khu vực Trung Đông quanh vịnh Péc-xích.',
        knowledgeCardId: 'KC-707-1'
      }
    ]
  },
  'G7-L8': {
    lessonId: 'G7-L8',
    grade: 7,
    chapterId: 'G7-C2',
    chapterTitle: 'Chương 2. Châu Á',
    lessonTitle: 'Bài 8: Thực hành: Tìm hiểu về các nền kinh tế lớn và kinh tế mới nổi của châu Á',
    sgkPageRange: 'Trang 130 – 131',
    pdfPageRange: 'Trang 132 – 133',
    objectives: [
      'Xác định được các nền kinh tế lớn (Trung Quốc, Nhật Bản) và nền kinh tế mới nổi (Ấn Độ, Hàn Quốc...) ở châu Á.',
      'Phân tích được vai trò và đóng góp của các nền kinh tế này vào sự tăng trưởng của kinh tế toàn cầu.',
      'Vẽ và nhận xét biểu đồ cơ cấu GDP của các quốc gia châu Á.'
    ],
    knowledgeCards: [
      {
        id: 'KC-708-1',
        cardIndex: 1,
        title: 'Thẻ 1: Các nền kinh tế đầu tàu châu Á',
        concept: 'Trung Quốc (GDP thứ 2 thế giới), Nhật Bản (kinh tế phát triển), Ấn Độ (tăng trưởng nhanh)',
        coreDefinition: 'Châu Á trở thành động lực tăng trưởng kinh tế quan trọng bậc nhất của nền kinh tế toàn cầu.',
        keyPoints: [
          'Trung Quốc: Nền kinh tế quy mô thứ hai thế giới, công xưởng của nhân loại, dẫn đầu về sản xuất công nghiệp, xuất khẩu và công nghệ số.',
          'Nhật Bản: Quốc gia phát triển công nghiệp hàng đầu, đứng thứ tư thế giới về GDP, nổi bật về tự động hóa, điện tử và công nghệ cao.',
          'Ấn Độ: Nền kinh tế mới nổi có tốc độ tăng trưởng cao, cường quốc phần mềm, công nghệ thông tin và dược phẩm thế giới.',
          'Hàn Quốc, Singapore: Các nền kinh tế phát triển với công nghệ bán dẫn, cảng biển và tài chính quốc tế.'
        ],
        visualExample: 'Biểu đồ so sánh quy mô GDP của Trung Quốc, Nhật Bản, Ấn Độ so với thế giới (SGK tr. 130).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 130, pdfPage: 132, section: 'Mục 1 & 2. Thực hành kinh tế châu Á' },
        commonTrapAlert: 'Trung Quốc là nền kinh tế có quy mô GDP lớn thứ 2 thế giới (chỉ sau Hoa Kỳ).',
        iconName: 'TrendingUp'
      }
    ],
    mindmap: {
      id: 'mm-708-root',
      label: 'Kinh tế lớn Châu Á',
      summary: 'Trung Quốc (thứ 2 thế giới) | Nhật Bản (công nghệ cao) | Ấn Độ (phần mềm số) | Singapore & Hàn Quốc',
      children: [
        { id: 'mm-708-tq', label: 'Trung Quốc', summary: 'Quy mô GDP thứ 2, công xưởng chế tạo toàn cầu' },
        { id: 'mm-708-nb', label: 'Nhật Bản', summary: 'Công nghệ cao, tự động hóa, tài chính hàng đầu' },
        { id: 'mm-708-ad', label: 'Ấn Độ', summary: 'Kinh tế mới nổi, trung tâm công nghệ thông tin' }
      ]
    },
    comparisons: [
      {
        id: 'comp-708-1',
        conceptA: 'Kinh tế Nhật Bản',
        conceptB: 'Kinh tế Trung Quốc',
        keyDifferences: [
          { criteria: 'Giai đoạn phát triển', conceptAVal: 'Nền kinh tế phát triển lâu đời, mức sống bình quân rất cao', conceptBVal: 'Nền kinh tế quy mô khổng lồ, tăng trưởng nhanh, đang công nghiệp hóa hiện đại hóa' },
          { criteria: 'Thế mạnh nổi bật', conceptAVal: 'Công nghệ tinh vi, chất lượng cao, robot và tự động hóa', conceptBVal: 'Quy mô sản xuất khổng lồ, chuỗi cung ứng hoàn chỉnh, hạ tầng siêu lớn' }
        ],
        commonConfusion: 'Học sinh hay nhầm Trung Quốc có thu nhập bình quân đầu người cao hơn Nhật Bản.',
        memoryRule: 'Trung Quốc: Quy mô GDP tổng thể lớn thứ 2; Nhật Bản: Thu nhập bình quân đầu người rất cao.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-708-1',
        questionText: 'Quốc gia nào ở châu Á được mệnh danh là một trong những trung tâm phần mềm và dịch vụ công nghệ thông tin hàng đầu thế giới?',
        options: [
          { id: 'A', text: 'Ấn Độ' },
          { id: 'B', text: 'Lào' },
          { id: 'C', text: 'Mông Cổ' },
          { id: 'D', text: 'Áp-ga-ni-xtan' }
        ],
        correctAnswer: 'A',
        explanation: 'Thung lũng Silicon của Ấn Độ (Ban-ga-lo) là trung tâm phần mềm và dịch vụ IT lớn thứ hai thế giới, cung cấp kỹ sư công nghệ cho các tập đoàn toàn cầu.',
        hint: 'Đất nước Nam Á với trung tâm công nghệ Ban-ga-lo.',
        knowledgeCardId: 'KC-708-1'
      }
    ]
  },
  'G7-L9': {
    lessonId: 'G7-L9',
    grade: 7,
    chapterId: 'G7-C3',
    chapterTitle: 'Chương 3. Châu Phi',
    lessonTitle: 'Bài 9: Vị trí địa lí, đặc điểm tự nhiên châu Phi',
    sgkPageRange: 'Trang 132 – 137',
    pdfPageRange: 'Trang 134 – 139',
    objectives: [
      'Trình bày được vị trí địa lí, hình dạng và kích thước châu Phi (có đường Xích đạo đi qua chính giữa).',
      'Phân tích được đặc điểm địa hình: Toàn bộ châu lục là khối cao nguyên khổng lồ, hoang mạc Xa-ha-ra lớn nhất thế giới.',
      'Giải thích được vì sao châu Phi là châu lục khô nóng nhất hành tinh và vai trò của sông Nin, sông Công-gô.'
    ],
    knowledgeCards: [
      {
        id: 'KC-709-1',
        cardIndex: 1,
        title: 'Thẻ 1: Vị trí địa lí và địa hình khối cao nguyên',
        concept: 'Xích đạo chia đôi, Diện tích 30,3 triệu km², Khối sơn nguyên khổng lồ',
        coreDefinition: 'Châu Phi có diện tích khoảng 30,3 triệu km², đường Xích đạo chạy gần như ngang qua chính giữa châu lục.',
        keyPoints: [
          'Vị trí: Nằm cân xứng hai bên đường Xích đạo, đại bộ phận lãnh thổ nằm giữa hai đường chí tuyến (Chí tuyến Bắc và Chí tuyến Nam).',
          'Đường bờ biển ít bị cắt xẻ, ít bán đảo và vịnh biển.',
          'Địa hình: Toàn bộ châu Phi là một khối cao nguyên khổng lồ, cao trung bình trên 750 m; sườn dốc hướng ra biển, rất ít đồng bằng (chỉ có dải hẹp ven biển).',
          'Đỉnh Ki-li-man-gia-rô (5895 m) là đỉnh cao nhất châu Phi nằm gần Xích đạo nhưng có tuyết phủ.'
        ],
        visualExample: 'Bản đồ tự nhiên châu Phi với hoang mạc Xa-ha-ra vàng rực ở phía bắc (SGK tr. 133).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 133, pdfPage: 135, section: 'Mục 1 & 2. Vị trí và địa hình' },
        commonTrapAlert: 'Châu Phi có đường Xích đạo đi qua chính giữa, khiến các đới thiên nhiên phân bố đối xứng qua Xích đạo.',
        iconName: 'Compass'
      },
      {
        id: 'KC-709-2',
        cardIndex: 2,
        title: 'Thẻ 2: Khí hậu khô nóng nhất thế giới và sông ngòi',
        concept: 'Khô nóng nhất hành tinh, Hoang mạc Xa-ha-ra, Sông Nin dài nhất thế giới',
        coreDefinition: 'Châu Phi là châu lục khô hạn và nóng nhất thế giới do lãnh thổ nằm trọn trong đới nóng và địa hình dạng khối.',
        keyPoints: [
          'Nguyên nhân khô nóng: Phần lớn diện tích nằm giữa hai chí tuyến, bờ biển ít bị cắt xẻ, các dòng biển lạnh (Ben-ghê-la, Ca-na-ri) chảy ven bờ ngăn cản hơi ẩm từ biển vào đất liền.',
          'Hoang mạc Xa-ha-ra: Hoang mạc nhiệt đới lớn nhất thế giới ở Bắc Phi, nhiệt độ mùa hạ có nơi vượt trên 50°C.',
          'Sông ngòi: Sông Nin dài nhất thế giới (khoảng 6650 km), chảy qua hoang mạc đổ ra Địa Trung Hải, cung cấp nước và bồi đắp văn minh Ai Cập; Sông Công-gô lưu vực lớn thứ hai thế giới.'
        ],
        visualExample: 'Dòng sông Nin xanh ngắt chảy qua hoang mạc khô cằn của Ai Cập.',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 135, pdfPage: 137, section: 'Mục 3 & 4. Khí hậu và sông ngòi' },
        commonTrapAlert: 'Sông Nin dài nhất thế giới (6650 km), chảy từ nam lên bắc đổ vào Địa Trung Hải.',
        iconName: 'Sun'
      }
    ],
    mindmap: {
      id: 'mm-709-root',
      label: 'Tự nhiên Châu Phi',
      summary: 'Xích đạo đi qua giữa | Khối cao nguyên khổng lồ | Khí hậu nóng khô nhất hành tinh | Sông Nin dài nhất thế giới | Hoang mạc Xa-ha-ra',
      children: [
        { id: 'mm-709-vt', label: 'Vị trí cân xứng', summary: 'Xích đạo chia đôi châu lục, bờ biển ít bị cắt xẻ' },
        { id: 'mm-709-dh', label: 'Địa hình', summary: 'Khối cao nguyên khổng lồ, hoang mạc Xa-ha-ra mênh mông' },
        { id: 'mm-709-kh', label: 'Khí hậu & Sông ngòi', summary: 'Khô nóng nhất thế giới; Sông Nin bồi đắp văn minh' }
      ]
    },
    comparisons: [
      {
        id: 'comp-709-1',
        conceptA: 'Sông Nin',
        conceptB: 'Sông Công-gô',
        keyDifferences: [
          { criteria: 'Đặc điểm dòng chảy', conceptAVal: 'Chảy từ nam lên bắc xuyên qua hoang mạc Xa-ha-ra đổ ra Địa Trung Hải', conceptBVal: 'Chảy vòng cung trong bồn địa xích đạo đổ ra Đại Tây Dương' },
          { criteria: 'Chế độ nước', conceptAVal: 'Lưu lượng nước thay đổi theo mùa mưa ở thượng nguồn', conceptBVal: 'Nhiều nước quanh năm do nằm trọn trong đới khí hậu xích đạo mưa nhiều' }
        ],
        commonConfusion: 'Học sinh hay nhầm sông Nin có lưu lượng nước lớn hơn sông Công-gô (sông Nin dài nhất nhưng sông Công-gô nhiều nước hơn).',
        memoryRule: 'Sông Nin: Dài nhất thế giới. Sông Công-gô: Nhiều nước nhất châu Phi.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-709-1',
        questionText: 'Tại sao châu Phi là châu lục khô nóng nhất trên thế giới?',
        options: [
          { id: 'A', text: 'Do phần lớn lãnh thổ nằm giữa hai đường chí tuyến và bờ biển ít bị cắt xẻ, có dòng biển lạnh ven bờ' },
          { id: 'B', text: 'Do châu Phi không có dòng sông nào chảy qua' },
          { id: 'C', text: 'Do toàn bộ châu Phi nằm ở vùng cực' },
          { id: 'D', text: 'Do châu Phi có quá nhiều rừng mưa rậm rạp' }
        ],
        correctAnswer: 'A',
        explanation: 'Vị trí trọn trong vành đai nhiệt đới, kết hợp hình dạng khối ít bị vịnh biển ăn sâu và dòng biển lạnh chạy ven bờ khiến hơi ẩm đại dương khó lọt vào nội địa.',
        hint: 'Hai đường chí tuyến Bắc và Nam bao trùm phần lớn diện tích.',
        knowledgeCardId: 'KC-709-2'
      }
    ]
  },
  'G7-L10': {
    lessonId: 'G7-L10',
    grade: 7,
    chapterId: 'G7-C3',
    chapterTitle: 'Chương 3. Châu Phi',
    lessonTitle: 'Bài 10: Đặc điểm dân cư, xã hội châu Phi',
    sgkPageRange: 'Trang 138 – 141',
    pdfPageRange: 'Trang 140 – 143',
    objectives: [
      'Trình bày được đặc điểm gia tăng dân số nhanh và cơ cấu dân số rất trẻ ở châu Phi.',
      'Phân tích được các thách thức xã hội: Nạn đói, dịch bệnh, di cư và xung đột sắc tộc.',
      'Hiểu được giá trị của nền văn minh cổ đại sông Nin và di sản văn hoá phong phú của châu Phi.'
    ],
    knowledgeCards: [
      {
        id: 'KC-709-3',
        cardIndex: 1,
        title: 'Thẻ 1: Gia tăng dân số nhanh và cơ cấu dân số trẻ',
        concept: 'Quy mô hơn 1,3 tỉ người, Tỉ lệ gia tăng tự nhiên cao nhất thế giới (>2,5%)',
        coreDefinition: 'Châu Phi có tốc độ gia tăng dân số nhanh nhất hành tinh và cơ cấu dân số trẻ đặc trưng.',
        keyPoints: [
          'Quy mô: Dân số châu Phi đạt khoảng 1,34 tỉ người (năm 2020), chiếm khoảng 17% dân số thế giới.',
          'Gia tăng dân số: Tỉ suất sinh rất cao, tỉ lệ gia tăng tự nhiên thuộc hàng cao nhất thế giới.',
          'Cơ cấu tuổi: Trẻ em dưới 15 tuổi chiếm tới khoảng 40% dân số; người trên 65 tuổi chỉ chiếm khoảng 3 - 4%.',
          'Áp lực: Gánh nặng lớn về lương thực, trường học, bệnh viện, việc làm và an sinh xã hội.'
        ],
        visualExample: 'Tháp dân số châu Phi có đáy mở rất rộng và đỉnh nhọn hoắt (SGK tr. 139).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 139, pdfPage: 141, section: 'Mục 1. Dân cư' },
        commonTrapAlert: 'Châu Phi có cơ cấu dân số trẻ nhất thế giới (ngược hoàn toàn với cơ cấu dân số già của châu Âu).',
        iconName: 'Users'
      },
      {
        id: 'KC-710-2',
        cardIndex: 2,
        title: 'Thẻ 2: Các vấn đề xã hội nan giải ở châu Phi',
        concept: 'Nạn đói, dịch bệnh, nghèo đói và xung đột sắc tộc',
        coreDefinition: 'Nhiều quốc gia châu Phi đang đối mặt với những thách thức to lớn về an ninh lương thực và ổn định xã hội.',
        keyPoints: [
          'An ninh lương thực: Hạn hán kéo dài ở vùng Xa-hen (nam Xa-ha-ra) cùng nạn châu chấu diệt mùa màng khiến hàng chục triệu người thiếu đói thường xuyên.',
          'Dịch bệnh hiểm nghèo: Tỉ lệ lây nhiễm HIV/AIDS cao, dịch sốt rét, dịch tả gây tổn thất nhân mạng nghiêm trọng.',
          'Xung đột quân sự và sắc tộc: Tranh chấp đất đai, nguồn nước và quyền lực dẫn đến nội chiến và dòng người tị nạn di cư quy mô lớn.'
        ],
        visualExample: 'Hình ảnh viện trợ lương thực của Liên Hợp Quốc cho trẻ em vùng Xa-hen bị suy dinh dưỡng.',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 140, pdfPage: 142, section: 'Mục 2. Các vấn đề xã hội' },
        commonTrapAlert: 'Nguyên nhân xung đột ở châu Phi bắt nguồn từ lịch sử chia cắt biên giới thuộc địa tùy tiện trong quá khứ.',
        iconName: 'AlertTriangle'
      }
    ],
    mindmap: {
      id: 'mm-710-root',
      label: 'Dân cư & Xã hội Châu Phi',
      summary: '>1,3 tỉ người | Sinh cao, cơ cấu rất trẻ (<15 tuổi chiếm 40%) | Nạn đói vùng Xa-hen | Xung đột quân sự',
      children: [
        { id: 'mm-710-tre', label: 'Cơ cấu dân số trẻ', summary: 'Tỉ suất sinh cao nhất thế giới, đáy tháp rộng' },
        { id: 'mm-710-thachthuc', label: 'Thách thức xã hội', summary: 'Nạn đói, thiếu nước, dịch bệnh, di cư tị nạn' }
      ]
    },
    comparisons: [
      {
        id: 'comp-710-1',
        conceptA: 'Cơ cấu dân số châu Phi',
        conceptB: 'Cơ cấu dân số châu Âu',
        keyDifferences: [
          { criteria: 'Tỉ lệ nhóm dưới 15 tuổi', conceptAVal: 'Khoảng 40% (rất cao, cơ cấu dân số trẻ)', conceptBVal: 'Khoảng 16% (thấp, cơ cấu dân số già)' },
          { criteria: 'Vấn đề ưu tiên cần giải quyết', conceptAVal: 'Xóa đói giảm nghèo, trường học và tạo việc làm cho thanh thiếu niên', conceptBVal: 'Chăm sóc y tế người già và thu hút lao động nhập cư' }
        ],
        commonConfusion: 'Học sinh nhầm lẫn giữa nguyên nhân và hệ quả của gia tăng dân số nhanh ở châu Phi.',
        memoryRule: 'Châu Phi dân số trẻ bùng nổ; Châu Âu dân số già thiếu lao động.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-710-1',
        questionText: 'Khu vực chuyển tiếp giữa hoang mạc Xa-ha-ra ở phía bắc và xavan ở phía nam châu Phi, thường xuyên chịu hạn hán và nạn đói nghiêm trọng có tên là gì?',
        options: [
          { id: 'A', text: 'Vùng Xa-hen' },
          { id: 'B', text: 'Bồn địa Công-gô' },
          { id: 'C', text: 'Cao nguyên Ê-ti-ô-pi-a' },
          { id: 'D', text: 'Hoang mạc Ca-la-ha-ri' },
        ],
        correctAnswer: 'A',
        explanation: 'Vùng bán sa mạc Xa-hen (Sahel) là dải đất dễ tổn thương nhất trước hiện tượng hoang mạc hóa và hạn hán kéo dài.',
        hint: 'Dải đất khô cằn ven rìa nam sa mạc Xa-ha-ra.',
        knowledgeCardId: 'KC-710-2'
      }
    ]
  },
  'G7-L11': {
    lessonId: 'G7-L11',
    grade: 7,
    chapterId: 'G7-C3',
    chapterTitle: 'Chương 3. Châu Phi',
    lessonTitle: 'Bài 11: Phương thức con người khai thác, sử dụng và bảo vệ thiên nhiên ở châu Phi',
    sgkPageRange: 'Trang 142 – 145',
    pdfPageRange: 'Trang 144 – 147',
    objectives: [
      'Trình bày được phương thức khai thác tài nguyên khoáng sản, đất và nước ở các môi trường thiên nhiên châu Phi.',
      'Phân tích được vấn đề sa mạc hoá và sáng kiến "Vạn lí trường thành xanh".',
      'Đánh giá được vai trò của các vườn quốc gia và bảo tồn động vật hoang dã đối với phát triển du lịch sinh thái.'
    ],
    knowledgeCards: [
      {
        id: 'KC-711-1',
        cardIndex: 1,
        title: 'Thẻ 1: Khai thác khoáng sản và vấn đề sa mạc hoá',
        concept: 'Dầu mỏ, vàng, kim cương; Hiện tượng sa mạc hoá và Vạn lí trường thành xanh',
        coreDefinition: 'Khai thác tài nguyên thiên nhiên châu Phi đối mặt với nguy cơ cạn kiệt và sa mạc hoá lan rộng.',
        keyPoints: [
          'Khai thác khoáng sản: Châu Phi giàu kim loại quý (vàng, kim cương ở Nam Phi; dầu mỏ ở Bắc Phi và vịnh Ghi-nê), nhưng chủ yếu xuất khẩu thô, gây ô nhiễm đất và nước nghiêm trọng.',
          'Sa mạc hoá: Khai thác rừng lấy củi và chăn thả gia súc quá mức làm đất bạc màu, hoang mạc Xa-ha-ra mở rộng về phía nam.',
          'Dự án "Vạn lí trường thành xanh": Dải rừng phòng hộ dài 8000 km xuyên qua 11 quốc gia vùng Xa-hen nhằm ngăn chặn cát lấn và phục hồi đất đai màu mỡ.'
        ],
        visualExample: 'Sơ đồ dự án dải cây xanh "Vạn lí trường thành xanh" băng qua lục địa châu Phi (SGK tr. 144).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 144, pdfPage: 146, section: 'Mục 1 & 2. Khai thác và sa mạc hoá' },
        commonTrapAlert: 'Vạn lí trường thành xanh là vành đai trồng cây xanh chống cát lấn, không phải công trình tường thành bằng gạch đá.',
        iconName: 'Shield'
      }
    ],
    mindmap: {
      id: 'mm-711-root',
      label: 'Bảo vệ thiên nhiên Châu Phi',
      summary: 'Khai thác vàng, dầu mỏ thô | Sa mạc hóa lan rộng | Dự án Vạn lí trường thành xanh | Bảo tồn động vật hoang dã',
      children: [
        { id: 'mm-711-khoangsan', label: 'Khai thác khoáng sản', summary: 'Giàu tài nguyên vàng, kim cương, dầu mỏ nhưng xuất thô' },
        { id: 'mm-711-samachoa', label: 'Chống sa mạc hóa', summary: 'Sáng kiến Vạn lí trường thành xanh dài 8000 km' }
      ]
    },
    comparisons: [
      {
        id: 'comp-711-1',
        conceptA: 'Chăn thả gia súc quá mức ở vùng khô hạn',
        conceptB: 'Mô hình trồng rừng giữ đất "Vạn lí trường thành xanh"',
        keyDifferences: [
          { criteria: 'Tác động đến đất đai', conceptAVal: 'Lớp cỏ bị trơ trụi, móng gia súc dẫm nát tầng đất mặt làm hoang mạc hóa', conceptBVal: 'Giữ ẩm tầng đất, cản gió cát, khôi phục thảm thực vật bản địa' },
          { criteria: 'Tính bền vững', conceptAVal: 'Bị hủy hoại sau vài năm khô hạn', conceptBVal: 'Tạo sinh kế bền vững và hồi sinh hệ sinh thái toàn vùng' }
        ],
        commonConfusion: 'Học sinh nhầm sa mạc hóa hoàn toàn do biến đổi khí hậu tự nhiên mà bỏ qua nguyên nhân chăn thả quá mức.',
        memoryRule: 'Chăn thả quá mức phá hủy đất; Trồng rừng chắn cát hồi sinh màu xanh.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-711-1',
        questionText: 'Dự án "Vạn lí trường thành xanh" được các quốc gia châu Phi triển khai nhằm mục đích chính nào?',
        options: [
          { id: 'A', text: 'Trồng một dải rừng cây rộng lớn để ngăn chặn sự lấn sâu của hoang mạc Xa-ha-ra' },
          { id: 'B', text: 'Xây một bức tường bê tông chắn quân sự' },
          { id: 'C', text: 'Ngăn chặn khách du lịch quốc tế đến châu Phi' },
          { id: 'D', text: 'Khai thác toàn bộ mỏ vàng ở Nam Phi' }
        ],
        correctAnswer: 'A',
        explanation: 'Sáng kiến "Great Green Wall" tạo dải cây xanh 8000 km từ bờ biển Đỏ đến Đại Tây Dương để chống sa mạc hóa.',
        hint: 'Hàng rào sinh thái bằng cây xanh chống hoang mạc hóa.',
        knowledgeCardId: 'KC-711-1'
      }
    ]
  },
  'G7-L12': {
    lessonId: 'G7-L12',
    grade: 7,
    chapterId: 'G7-C3',
    chapterTitle: 'Chương 3. Châu Phi',
    lessonTitle: 'Bài 12: Thực hành: Tìm hiểu khái quát Cộng hoà Nam Phi',
    sgkPageRange: 'Trang 146 – 147',
    pdfPageRange: 'Trang 148 – 149',
    objectives: [
      'Xác định được vị trí địa lí chiến lược của Cộng hoà Nam Phi ở mũi cực Nam châu Phi.',
      'Phân tích được tiềm năng khoáng sản to lớn (vàng, kim cương, platin, than đá).',
      'Đánh giá được trình độ phát triển kinh tế hàng đầu châu Phi của Cộng hoà Nam Phi.'
    ],
    knowledgeCards: [
      {
        id: 'KC-712-1',
        cardIndex: 1,
        title: 'Thẻ 1: Khái quát kinh tế Cộng hoà Nam Phi',
        concept: 'Mũi Cực Nam châu Phi, Giàu vàng và kim cương, Nền kinh tế phát triển nhất lục địa',
        coreDefinition: 'Cộng hoà Nam Phi là nền kinh tế phát triển nhất châu Phi, sở hữu tài nguyên khoáng sản kim loại quý khổng lồ.',
        keyPoints: [
          'Vị trí chiến lược: Án ngữ mũi Hảo Vọng - điểm giao cắt quan trọng giữa Đại Tây Dương và Ấn Độ Dương.',
          'Khoáng sản: Đứng hàng đầu thế giới về trữ lượng và khai thác vàng, kim cương, platin (bạch kim), crôm và quặng sắt.',
          'Công nghiệp: Cơ cấu ngành công nghiệp hoàn chỉnh nhất châu Phi (luyện kim, chế tạo máy, hóa chất, khai khoáng).',
          'Nông nghiệp và du lịch: Nông nghiệp ôn đới Địa Trung Hải xuất khẩu rượu vang, hoa quả; du lịch sinh thái safari nổi tiếng.'
        ],
        visualExample: 'Khai thác vàng sâu dưới lòng đất tại mỏ vàng Witwatersrand (SGK tr. 146).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 146, pdfPage: 148, section: 'Mục 1 & 2. Tự nhiên và kinh tế Nam Phi' },
        commonTrapAlert: 'Cộng hoà Nam Phi là quốc gia phát triển nhất châu Phi, thành viên duy nhất của nhóm G20 tại lục địa đen.',
        iconName: 'Award'
      }
    ],
    mindmap: {
      id: 'mm-712-root',
      label: 'Cộng hoà Nam Phi',
      summary: 'Mũi Hảo Vọng chiến lược | Mỏ vàng & kim cương lớn nhất thế giới | Kinh tế phát triển nhất châu Phi (G20)',
      children: [
        { id: 'mm-712-vt', label: 'Vị trí địa lí', summary: 'Mũi Cực Nam châu Phi, án ngữ hải lộ quốc tế' },
        { id: 'mm-712-kt', label: 'Kinh tế & Khoáng sản', summary: 'Vàng, kim cương, luyện kim, rượu vang xuất khẩu' }
      ]
    },
    comparisons: [
      {
        id: 'comp-712-1',
        conceptA: 'Kinh tế Cộng hoà Nam Phi',
        conceptB: 'Kinh tế các nước châu Phi cận Xa-ha-ra khác',
        keyDifferences: [
          { criteria: 'Cơ cấu kinh tế', conceptAVal: 'Công nghiệp và dịch vụ hiện đại, hạ tầng giao thông và ngân hàng phát triển cao', conceptBVal: 'Chủ yếu phụ thuộc vào nông nghiệp tự cấp và xuất khẩu thô 1-2 khoáng sản' },
          { criteria: 'Vị thế quốc tế', conceptAVal: 'Thành viên các khối kinh tế lớn (BRICS, G20)', conceptBVal: 'Thuộc nhóm các nước đang phát triển hoặc chậm phát triển' }
        ],
        commonConfusion: 'Học sinh nhầm kinh tế Cộng hoà Nam Phi cũng thuần túy làm nông nghiệp tự cấp như phần lớn châu Phi.',
        memoryRule: 'Nam Phi: Đầu tàu kinh tế hiện đại của lục địa châu Phi.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-712-1',
        questionText: 'Mũi đất nổi tiếng án ngữ vị trí chiến lược hàng hải ở cực nam của Cộng hoà Nam Phi có tên là gì?',
        options: [
          { id: 'A', text: 'Mũi Hảo Vọng' },
          { id: 'B', text: 'Mũi Hạc' },
          { id: 'C', text: 'Mũi Cà Mau' },
          { id: 'D', text: 'Mũi Horn' }
        ],
        correctAnswer: 'A',
        explanation: 'Mũi Hảo Vọng (Cape of Good Hope) ở Nam Phi là điểm mốc lịch sử hàng hải nối Đại Tây Dương sang Ấn Độ Dương.',
        hint: 'Mũi đất hi vọng trên tuyến đường vòng qua châu Phi.',
        knowledgeCardId: 'KC-712-1'
      }
    ]
  },
  'G7-L13': {
    lessonId: 'G7-L13',
    grade: 7,
    chapterId: 'G7-C4',
    chapterTitle: 'Chương 4. Châu Mỹ',
    lessonTitle: 'Bài 13: Vị trí địa lí, phạm vi châu Mỹ. Sự phát kiến ra châu Mỹ',
    sgkPageRange: 'Trang 148 – 151',
    pdfPageRange: 'Trang 150 – 153',
    objectives: [
      'Trình bày được vị trí địa lí, giới hạn của châu Mỹ (nằm hoàn toàn ở Bán cầu Tây, diện tích 42 triệu km²).',
      'Phân tích được cuộc thám hiểm phát kiến ra châu Mỹ của C. Cô-lôm-bô (năm 1492).',
      'Đánh giá được ý nghĩa lịch sử to lớn của việc phát hiện ra Tân thế giới đối với địa lí học và sự phát triển kinh tế.'
    ],
    knowledgeCards: [
      {
        id: 'KC-713-1',
        cardIndex: 1,
        title: 'Thẻ 1: Lãnh thổ châu Mỹ và Bán cầu Tây',
        concept: 'Hoàn toàn ở Bán cầu Tây, 42 triệu km², Trải dài gần 139 vĩ độ',
        coreDefinition: 'Châu Mỹ là châu lục duy nhất nằm hoàn toàn ở Bán cầu Tây, rộng 42 triệu km² (đứng thứ hai thế giới sau châu Á).',
        keyPoints: [
          'Vị trí: Trải dài từ vùng cực Bắc đến cận cực Nam (từ khoảng 72°B đến 54°N), ngăn cách châu Âu và châu Á bởi Đại Tây Dương và Thái Bình Dương.',
          'Phân chia địa lí: Gồm Bắc Mỹ và Nam Mỹ, nối liền nhau bởi eo đất hẹp Trung Mỹ (bị cắt ngang bởi kênh đào Pa-na-ma).'
        ],
        visualExample: 'Bản đồ châu Mỹ nằm tách biệt ở nửa bán cầu phía tây của Trái Đất (SGK tr. 149).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 149, pdfPage: 151, section: 'Mục 1. Vị trí địa lí' },
        commonTrapAlert: 'Châu Mỹ nằm hoàn toàn ở Bán cầu Tây (được phát hiện sau nên gọi là Tân thế giới).',
        iconName: 'Compass'
      },
      {
        id: 'KC-713-2',
        cardIndex: 2,
        title: 'Thẻ 2: Chuyến thám hiểm lịch sử của C. Cô-lôm-bô (1492)',
        concept: 'C. Cô-lôm-bô, 12/10/1492, Tân thế giới',
        coreDefinition: 'Ngày 12/10/1492, đoàn thám hiểm Tây Ban Nha do Cri-xtốp Cô-lôm-bô chỉ huy đã tìm ra châu Mỹ.',
        keyPoints: [
          'Hành trình: Xuất phát từ Tây Ban Nha vượt Đại Tây Dương tìm đường sang Ấn Độ; ngày 12/10/1492 đặt chân lên quần đảo Ba-ha-ma thuộc biển Ca-ri-bê.',
          'Cô-lôm-bô tưởng nhầm là vùng ven bờ Ấn Độ nên gọi người bản địa là người Anh-điêng (Indian).',
          'Ý nghĩa: Mở ra kỉ nguyên thám hiểm hàng hải mới, mở rộng giao thương toàn cầu và chứng minh Trái Đất hình cầu.'
        ],
        visualExample: 'Đoàn thuyền Caraven của C. Cô-lôm-bô cập bến châu Mỹ năm 1492 (SGK tr. 150).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 150, pdfPage: 152, section: 'Mục 2. Sự phát kiến châu Mỹ' },
        commonTrapAlert: 'Tên "America" được đặt theo tên của nhà hàng hải A-mê-ri-gô Ve-xpu-chi (người khẳng định đây là một đại lục mới).',
        iconName: 'Award'
      }
    ],
    mindmap: {
      id: 'mm-713-root',
      label: 'Phát kiến ra Châu Mỹ',
      summary: 'Bán cầu Tây | Diện tích 42 triệu km² | C. Cô-lôm-bô tìm ra ngày 12/10/1492 | Kênh đào Pa-na-ma nối 2 đại dương',
      children: [
        { id: 'mm-713-vt', label: 'Vị trí Bán cầu Tây', summary: 'Nằm riêng biệt ở Bán cầu Tây, giáp 3 đại dương' },
        { id: 'mm-713-colombo', label: 'C. Cô-lôm-bô (1492)', summary: 'Chuyến hải trình mở ra Tân thế giới' }
      ]
    },
    comparisons: [
      {
        id: 'comp-713-1',
        conceptA: 'Cựu thế giới (Á, Âu, Phi)',
        conceptB: 'Tân thế giới (Châu Mỹ)',
        keyDifferences: [
          { criteria: 'Lịch sử biết đến', conceptAVal: 'Được người phương Đông và phương Tây biết đến từ thời cổ đại', conceptBVal: 'Chỉ được người châu Âu khám phá ra từ cuối thế kỉ XV (năm 1492)' },
          { criteria: 'Vị trí bán cầu', conceptAVal: 'Nằm chủ yếu ở Bán cầu Đông', conceptBVal: 'Nằm hoàn toàn ở Bán cầu Tây' }
        ],
        commonConfusion: 'Học sinh nhầm châu Mỹ trước năm 1492 không có con người sinh sống (thực tế có nền văn minh Maya, Inca cổ đại).',
        memoryRule: 'Châu Mỹ = Tân thế giới ở Bán cầu Tây, tìm ra năm 1492.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-713-1',
        questionText: 'Năm nào nhà hàng hải Cri-xtốp Cô-lôm-bô đã dẫn đầu đoàn tàu vượt Đại Tây Dương và phát kiến ra châu Mỹ?',
        options: [
          { id: 'A', text: 'Năm 1492' },
          { id: 'B', text: 'Năm 1945' },
          { id: 'C', text: 'Năm 1789' },
          { id: 'D', text: 'Năm 1215' }
        ],
        correctAnswer: 'A',
        explanation: 'Ngày 12 tháng 10 năm 1492, C. Cô-lôm-bô đã đặt chân đến quần đảo Ba-ha-ma, đánh dấu phát kiến ra châu lục mới.',
        hint: 'Cuối thế kỉ XV.',
        knowledgeCardId: 'KC-713-2'
      }
    ]
  },
  'G7-L14': {
    lessonId: 'G7-L14',
    grade: 7,
    chapterId: 'G7-C4',
    chapterTitle: 'Chương 4. Châu Mỹ',
    lessonTitle: 'Bài 14: Đặc điểm tự nhiên Bắc Mỹ',
    sgkPageRange: 'Trang 152 – 157',
    pdfPageRange: 'Trang 154 – 159',
    objectives: [
      'Phân tích được cấu trúc ba khu vực địa hình rõ rệt của Bắc Mỹ: Hệ thống Cooc-đi-e, Đồng bằng trung tâm, Dãy núi già A-pa-lat.',
      'Giải thích được đặc điểm phân hoá khí hậu Bắc Mỹ theo chiều bắc - nam và tây - đông.',
      'Trình bày được hệ thống sông Mi-xi-xi-pi và hệ thống Ngũ Hồ khổng lồ.'
    ],
    knowledgeCards: [
      {
        id: 'KC-714-1',
        cardIndex: 1,
        title: 'Thẻ 1: Ba khu vực địa hình song song của Bắc Mỹ',
        concept: 'Cooc-đi-e đồ sộ phía tây, Đồng bằng trung tâm hình lòng máng, A-pa-lat phía đông',
        coreDefinition: 'Địa hình Bắc Mỹ chia làm ba khu vực rõ rệt kéo dài theo hướng kinh tuyến từ bắc xuống nam.',
        keyPoints: [
          'Phía Tây: Hệ thống Cooc-đi-e trẻ và đồ sộ, dài 9000 km, cao trung bình 3000 - 4000 m gồm nhiều dãy núi song song xen kẽ các cao nguyên và bồn địa khô hạn.',
          'Ở Giữa: Đồng bằng trung tâm khổng lồ dạng lòng máng, rộng lớn từ Bắc Băng Dương xuống vịnh Mê-hi-cô, chứa nhiều hồ lớn và đất phù sa màu mỡ.',
          'Phía Đông: Miền núi già A-pa-lat và sơn nguyên cổ, địa hình thoai thoải, chứa nhiều mỏ than đá và sắt.'
        ],
        visualExample: 'Lát cắt địa hình Bắc Mỹ từ tây sang đông: Cooc-đi-e -> Đồng bằng trung tâm -> A-pa-lat (SGK tr. 153).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 153, pdfPage: 155, section: 'Mục 1. Địa hình' },
        commonTrapAlert: 'Hệ thống Cooc-đi-e nằm ở phía TÂY, dãy A-pa-lat nằm ở phía ĐÔNG Bắc Mỹ.',
        iconName: 'Mountain'
      },
      {
        id: 'KC-714-2',
        cardIndex: 2,
        title: 'Thẻ 2: Khí hậu và hệ thống sông hồ khổng lồ',
        concept: 'Lòng máng đón gió rét và nóng, Sông Mi-xi-xi-pi, Hệ thống Ngũ Hồ',
        coreDefinition: 'Khí hậu Bắc Mỹ phân hoá phức tạp, có hệ thống sông Mi-xi-xi-pi và Ngũ Hồ nước ngọt lớn nhất thế giới.',
        keyPoints: [
          'Khí hậu phân hoá: Đồng bằng trung tâm cấu trúc lòng máng khiến các khối khí lạnh cực bắc dễ dàng tràn sâu xuống nam và khối khí nóng vịnh Mê-hi-cô tràn ngược lên bắc gây thời tiết biến động đột ngột.',
          'Sông Mi-xi-xi-pi: Hệ thống sông lớn thứ tư thế giới, bồi đắp đồng bằng phù sa màu mỡ và là đường thủy huyết mạch.',
          'Hệ thống Ngũ Hồ (Great Lakes): Gồm 5 hồ lớn thông nhau (Thượng, Hu-rôn, Mi-chi-gân, E-ri, Ôn-ta-ri-ô), là nguồn nước ngọt khổng lồ bậc nhất hành tinh.'
        ],
        visualExample: 'Bản đồ hệ thống Ngũ Hồ và dòng chảy sông Mi-xi-xi-pi đồ sộ (SGK tr. 155).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 155, pdfPage: 157, section: 'Mục 2 & 3. Khí hậu và sông hồ' },
        commonTrapAlert: 'Hồ Thượng (Lake Superior) trong hệ thống Ngũ Hồ là hồ nước ngọt có diện tích mặt nước lớn nhất thế giới.',
        iconName: 'CloudRain'
      }
    ],
    mindmap: {
      id: 'mm-714-root',
      label: 'Tự nhiên Bắc Mỹ',
      summary: '3 dải địa hình: Cooc-đi-e tây | Đồng bằng lòng máng giữa | Núi già A-pa-lat đông | Sông Mi-xi-xi-pi & Ngũ Hồ',
      children: [
        { id: 'mm-714-dh', label: '3 khu vực địa hình', summary: 'Tây núi Cooc-đi-e đồ sộ, Giữa đồng bằng lòng máng, Đông A-pa-lat' },
        { id: 'mm-714-songho', label: 'Sông & Ngũ Hồ', summary: 'Sông Mi-xi-xi-pi dài lớn, Ngũ Hồ trữ lượng nước ngọt khổng lồ' }
      ]
    },
    comparisons: [
      {
        id: 'comp-714-1',
        conceptA: 'Hệ thống núi Cooc-đi-e (phía Tây Bắc Mỹ)',
        conceptB: 'Dãy núi A-pa-lat (phía Đông Bắc Mỹ)',
        keyDifferences: [
          { criteria: 'Tuổi địa chất và độ cao', conceptAVal: 'Núi trẻ, rất cao đồ sộ hiểm trở (3000 - 4000 m), đỉnh nhọn', conceptBVal: 'Núi già, độ cao trung bình thấp (khoảng 1000 - 1500 m), sườn thoải' },
          { criteria: 'Khoáng sản chủ yếu', conceptAVal: 'Kim loại màu, đồng, vàng, chì, kẽm', conceptBVal: 'Nhiều than đá và quặng sắt chất lượng cao' }
        ],
        commonConfusion: 'Học sinh nhầm dãy núi A-pa-lat ở phía tây.',
        memoryRule: 'Tây Cooc-đi-e núi trẻ cao vút; Đông A-pa-lat núi già thoai thoải.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-714-1',
        questionText: 'Khu vực địa hình nào ở Bắc Mỹ có cấu trúc dạng "lòng máng" khổng lồ, tạo điều kiện cho các khối khí lạnh cực bắc tràn sâu xuống phía nam?',
        options: [
          { id: 'A', text: 'Miền đồng bằng trung tâm' },
          { id: 'B', text: 'Hệ thống núi Cooc-đi-e' },
          { id: 'C', text: 'Dãy núi già A-pa-lat' },
          { id: 'D', text: 'Bán đảo La-bra-đo' }
        ],
        correctAnswer: 'A',
        explanation: 'Đồng bằng trung tâm nằm kẹp giữa hệ thống Cooc-đi-e ở phía tây và dãy A-pa-lat ở phía đông, tạo thành lòng máng hút gió từ hai cực tràn qua.',
        hint: 'Khu vực lòng máng nằm ở giữa Bắc Mỹ.',
        knowledgeCardId: 'KC-714-2'
      }
    ]
  },
  'G7-L15': {
    lessonId: 'G7-L15',
    grade: 7,
    chapterId: 'G7-C4',
    chapterTitle: 'Chương 4. Châu Mỹ',
    lessonTitle: 'Bài 15: Đặc điểm dân cư, xã hội, phương thức khai thác tự nhiên bền vững ở Bắc Mỹ',
    sgkPageRange: 'Trang 158 – 161',
    pdfPageRange: 'Trang 160 – 163',
    objectives: [
      'Trình bày được đặc điểm thành phần dân cư đa văn hoá do nguồn gốc nhập cư của Bắc Mỹ.',
      'Phân tích được trình độ đô thị hoá cao và quy mô của các dải siêu đô thị (Bô-Oa, Chi-Pít).',
      'Đánh giá được phương thức khai thác nông nghiệp công nghệ cao và bảo vệ môi trường bền vững.'
    ],
    knowledgeCards: [
      {
        id: 'KC-715-1',
        cardIndex: 1,
        title: 'Thẻ 1: Dân cư nhập cư và các dải siêu đô thị',
        concept: 'Thành phần đa dạng từ châu Âu, Phi, Á; Đô thị hoá >80%, Dải siêu đô thị',
        coreDefinition: 'Bắc Mỹ có thành phần dân cư đa dạng do lịch sử nhập cư và là khu vực có mức độ đô thị hoá hàng đầu thế giới.',
        keyPoints: [
          'Dân nhập cư: Người gốc Âu chiếm đa số, người gốc Phi, gốc Á và người Mỹ Latinh tạo nên xã hội đa sắc tộc, đa văn hoá.',
          'Đô thị hoá cao: Tỉ lệ dân thành thị đạt trên 82% (năm 2020).',
          'Dải siêu đô thị: Chuỗi các thành phố lớn liên kết thành dải đô thị khổng lồ như dải Bô-Oa (từ Bô-xtơn đến Oa-sinh-tơn), dải Chi-Pít quanh vùng Ngũ Hồ.'
        ],
        visualExample: 'Hình ảnh chuỗi đô thị sầm uất Niu Oóc với các tòa nhà chọc trời Manhattan.',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 159, pdfPage: 161, section: 'Mục 1 & 2. Dân cư và đô thị' },
        commonTrapAlert: 'Người Anh-điêng và người Ét-ki-mô là thổ dân bản địa, nhưng hiện nay chỉ chiếm tỉ lệ nhỏ trong dân số Bắc Mỹ.',
        iconName: 'Building'
      },
      {
        id: 'KC-715-2',
        cardIndex: 2,
        title: 'Thẻ 2: Khai thác tự nhiên bền vững trong nông nghiệp',
        concept: 'Nông nghiệp hàng hóa quy mô lớn, Vành đai chuyên canh, Công nghệ cao',
        coreDefinition: 'Bắc Mỹ có nền nông nghiệp hàng hóa phát triển ở trình độ rất cao, hiện đại và hướng tới bền vững.',
        keyPoints: [
          'Quy mô lớn: Hình thành các vành đai chuyên canh nông sản khổng lồ (vành đai ngô, lúa mì, đậu tương, chăn nuôi bò sữa).',
          'Công nghệ cao: Sử dụng máy móc hiện đại, máy bay phun tưới, định vị GPS trên máy cày, công nghệ sinh học và hệ thống tưới tự động.',
          'Khai thác bền vững: Chuyển đổi sang nông nghiệp hữu cơ, giảm phân bón hóa học, áp dụng luân canh chống xói mòn đất.'
        ],
        visualExample: 'Máy gặt đập liên hợp hiện đại thu hoạch lúa mì trên cánh đồng mẫu lớn ở Hoa Kỳ.',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 160, pdfPage: 162, section: 'Mục 3. Khai thác bền vững' },
        commonTrapAlert: 'Nông nghiệp Bắc Mỹ dùng rất ít lao động chân tay nhưng sản lượng khổng lồ nhờ cơ giới hóa 100%.',
        iconName: 'Sprout'
      }
    ],
    mindmap: {
      id: 'mm-715-root',
      label: 'Dân cư & Nông nghiệp Bắc Mỹ',
      summary: 'Dân nhập cư đa dạng | Đô thị hoá >82% (Dải siêu đô thị) | Nông nghiệp cơ giới hóa & Vành đai chuyên canh',
      children: [
        { id: 'mm-715-dancu', label: 'Dân cư & Đô thị', summary: 'Đa sắc tộc, đô thị hóa cao, các dải siêu đô thị Bô-Oa' },
        { id: 'mm-715-nongnghiep', label: 'Nông nghiệp hiện đại', summary: 'Vành đai ngô, lúa mì; cơ giới hóa và công nghệ cao' }
      ]
    },
    comparisons: [
      {
        id: 'comp-715-1',
        conceptA: 'Nông nghiệp Bắc Mỹ',
        conceptB: 'Nông nghiệp truyền thống châu Á',
        keyDifferences: [
          { criteria: 'Lực lượng lao động tham gia', conceptAVal: 'Chỉ chiếm khoảng 1 - 2% dân số nhưng năng suất cực cao', conceptBVal: 'Chiếm tỉ lệ lớn (30 - 50%), dùng nhiều lao động thủ công' },
          { criteria: 'Quy mô tổ chức', conceptAVal: 'Trang trại lớn, phân bố thành các vành đai chuyên canh khổng lồ', conceptBVal: 'Manh mún, ruộng nhỏ hộ gia đình' }
        ],
        commonConfusion: 'Học sinh nhầm tỉ lệ lao động nông nghiệp ít nghĩa là sản lượng nông sản thấp.',
        memoryRule: 'Nông nghiệp Bắc Mỹ: Ít người làm - Máy móc hiện đại - Năng suất số 1.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-715-1',
        questionText: 'Đặc điểm nổi bật nhất của nền nông nghiệp các nước Bắc Mỹ (Hoa Kỳ, Ca-na-đa) là gì?',
        options: [
          { id: 'A', text: 'Cơ giới hóa đồng bộ, áp dụng công nghệ cao và hình thành các vành đai chuyên canh quy mô lớn' },
          { id: 'B', text: 'Chủ yếu dựa vào sức kéo của trâu bò thủ công' },
          { id: 'C', text: 'Sản xuất manh mún tự cung tự cấp là chính' },
          { id: 'D', text: 'Phụ thuộc hoàn toàn vào nguồn lương thực nhập khẩu' }
        ],
        correctAnswer: 'A',
        explanation: 'Nông nghiệp Bắc Mỹ là nền nông nghiệp hàng hóa hiện đại nhất thế giới với hệ thống trang trại lớn và vành đai nông nghiệp chuyên môn hóa sâu.',
        hint: 'Cơ giới hóa và chuyên canh quy mô khổng lồ.',
        knowledgeCardId: 'KC-715-2'
      }
    ]
  },
  'G7-L16': {
    lessonId: 'G7-L16',
    grade: 7,
    chapterId: 'G7-C4',
    chapterTitle: 'Chương 4. Châu Mỹ',
    lessonTitle: 'Bài 16: Đặc điểm tự nhiên Trung và Nam Mỹ',
    sgkPageRange: 'Trang 162 – 167',
    pdfPageRange: 'Trang 164 – 169',
    objectives: [
      'Phân tích được cấu trúc địa hình Nam Mỹ: Hệ thống núi An-đét phía tây, chuỗi đồng bằng ở giữa và các sơn nguyên phía đông.',
      'Giải thích được đặc điểm rừng mưa nhiệt đới A-ma-dôn (lá phổi xanh của Trái Đất).',
      'Trình bày được đặc điểm sông A-ma-dôn (dòng sông có lưu lượng nước lớn nhất thế giới).'
    ],
    knowledgeCards: [
      {
        id: 'KC-716-1',
        cardIndex: 1,
        title: 'Thẻ 1: Cấu trúc ba khu vực địa hình Nam Mỹ',
        concept: 'Dãy An-đét trẻ đồ sộ phía tây, Đồng bằng ở giữa, Sơn nguyên phía đông',
        coreDefinition: 'Địa hình Nam Mỹ gồm ba khu vực chính tương phản sâu sắc kéo dài từ tây sang đông.',
        keyPoints: [
          'Phía Tây: Dãy núi trẻ An-đét dài nhất thế giới (khoảng 9000 km), cao trung bình 3000 - 5000 m, nhiều đỉnh băng tuyết và núi lửa đang hoạt động.',
          'Ở Giữa: Chuỗi đồng bằng rộng lớn nối tiếp nhau: đồng bằng Ô-ri-nô-cô, đồng bằng A-ma-dôn (đồng bằng bồi tụ lớn nhất thế giới), đồng bằng La Pla-ta và Pam-pa.',
          'Phía Đông: Các sơn nguyên cổ Gu-i-a-na và Bra-xin, bề mặt lượn sóng thoai thoải, giàu khoáng sản sắt, man-gan, bô-xít.'
        ],
        visualExample: 'Lát cắt địa hình Nam Mỹ từ tây sang đông: An-đét -> Đồng bằng A-ma-dôn -> Sơn nguyên Bra-xin (SGK tr. 163).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 163, pdfPage: 165, section: 'Mục 1. Địa hình' },
        commonTrapAlert: 'Dãy An-đét là dãy núi trên cạn dài nhất hành tinh (khoảng 9000 km).',
        iconName: 'Mountain'
      },
      {
        id: 'KC-716-2',
        cardIndex: 2,
        title: 'Thẻ 2: Rừng mưa và sông ngòi A-ma-dôn',
        concept: 'Sông A-ma-dôn nhiều nước nhất thế giới, Rừng mưa xích đạo lớn nhất hành tinh',
        coreDefinition: 'Đồng bằng A-ma-dôn chứa đựng dòng sông hùng vĩ nhất và khu rừng nhiệt đới trù phú nhất Trái Đất.',
        keyPoints: [
          'Sông A-ma-dôn: Dòng sông có lưu lượng nước lớn nhất thế giới (chiếm khoảng 20% tổng lượng nước sông toàn cầu đổ ra biển), lưu vực rộng hơn 7 triệu km².',
          'Rừng mưa xích đạo A-ma-dôn: Rộng trên 5 triệu km², sinh cảnh đa dạng sinh học vô song với hàng triệu loài động thực vật, là lá phổi xanh khổng lồ điều hòa khí hậu toàn cầu.'
        ],
        visualExample: 'Dòng sông A-ma-dôn cuồn cuộn chảy giữa bạt ngàn rừng rậm nhiệt đới (SGK tr. 165).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 165, pdfPage: 167, section: 'Mục 2 & 3. Rừng và sông A-ma-dôn' },
        commonTrapAlert: 'Sông Nin dài nhất thế giới, nhưng sông A-ma-dôn là sông có lưu lượng nước và diện tích lưu vực lớn nhất thế giới.',
        iconName: 'Droplet'
      }
    ],
    mindmap: {
      id: 'mm-716-root',
      label: 'Tự nhiên Trung & Nam Mỹ',
      summary: 'Dãy núi An-đét dài nhất thế giới | Đồng bằng A-ma-dôn rộng nhất | Sông A-ma-dôn nhiều nước nhất | Sơn nguyên Bra-xin',
      children: [
        { id: 'mm-716-dh', label: '3 khu vực địa hình', summary: 'Tây An-đét, Giữa đồng bằng A-ma-dôn, Đông sơn nguyên Bra-xin' },
        { id: 'mm-716-amaxon', label: 'Rừng & Sông A-ma-dôn', summary: 'Lưu lượng nước số 1 thế giới, rừng mưa lá phổi xanh của Trái Đất' }
      ]
    },
    comparisons: [
      {
        id: 'comp-716-1',
        conceptA: 'Sông Nin (châu Phi)',
        conceptB: 'Sông A-ma-dôn (Nam Mỹ)',
        keyDifferences: [
          { criteria: 'Kỉ lục thế giới', conceptAVal: 'Dòng sông có CHIỀU DÀI lớn nhất thế giới (6650 km)', conceptBVal: 'Dòng sông có LƯU LƯỢNG NƯỚC và LƯU VỰC lớn nhất thế giới' },
          { criteria: 'Khí hậu lưu vực', conceptAVal: 'Chảy qua hoang mạc khô hạn Xa-ha-ra ở hạ lưu', conceptBVal: 'Chảy trọn vẹn trong vùng xích đạo ẩm ướt mưa rào quanh năm' }
        ],
        commonConfusion: 'Học sinh hay nhầm sông A-ma-dôn là sông dài nhất thế giới.',
        memoryRule: 'Sông Nin: Dài nhất; Sông A-ma-dôn: Nhiều nước và rộng nhất.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-716-1',
        questionText: 'Dãy núi trẻ nào chạy dọc bờ tây Nam Mỹ, được coi là dãy núi trên cạn dài nhất hành tinh (khoảng 9000 km)?',
        options: [
          { id: 'A', text: 'Dãy An-đét' },
          { id: 'B', text: 'Dãy Hi-ma-lay-a' },
          { id: 'C', text: 'Dãy An-pơ' },
          { id: 'D', text: 'Dãy A-pa-lat' }
        ],
        correctAnswer: 'A',
        explanation: 'Dãy An-đét chạy dọc theo bờ biển tây của lục địa Nam Mỹ với chiều dài xấp xỉ 9000 km.',
        hint: 'Dãy núi chạy dọc Nam Mỹ phía tây.',
        knowledgeCardId: 'KC-716-1'
      }
    ]
  },
  'G7-L17': {
    lessonId: 'G7-L17',
    grade: 7,
    chapterId: 'G7-C4',
    chapterTitle: 'Chương 4. Châu Mỹ',
    lessonTitle: 'Bài 17: Đặc điểm dân cư, xã hội Trung và Nam Mỹ, khai thác, sử dụng và bảo vệ rừng A-ma-dôn',
    sgkPageRange: 'Trang 168 – 171',
    pdfPageRange: 'Trang 170 – 173',
    objectives: [
      'Trình bày được đặc điểm thành phần dân cư đa dạng và tỉ lệ người lai cao ở Trung và Nam Mỹ.',
      'Phân tích được hiện tượng đô thị hoá mang tính tự phát và các vấn đề đô thị nảy sinh.',
      'Đánh giá được thực trạng tàn phá rừng A-ma-dôn và các biện pháp bảo vệ lá phổi xanh toàn cầu.'
    ],
    knowledgeCards: [
      {
        id: 'KC-717-1',
        cardIndex: 1,
        title: 'Thẻ 1: Dân cư đa sắc tộc và đô thị hoá tự phát',
        concept: 'Tỉ lệ người lai chiếm đa số, Đô thị hoá tự phát, Khu ổ chuột (Favela)',
        coreDefinition: 'Trung và Nam Mỹ là khu vực có nền văn hoá Mỹ Latinh độc đáo với tỉ lệ người lai cao và hiện tượng đô thị hoá tự phát.',
        keyPoints: [
          'Thành phần dân cư: Sự hòa huyết giữa người Anh-điêng bản địa, người gốc Âu (Tây Ban Nha, Bồ Đào Nha) và người gốc Phi tạo thành cộng đồng người lai chiếm đa số.',
          'Đô thị hoá tự phát: Tỉ lệ dân đô thị cao (khoảng 80%), nhưng tốc độ đô thị hóa nhanh hơn nhiều so với tốc độ phát triển công nghiệp.',
          'Hệ quả: Nông dân mất đất di cư ồ ạt ra thành phố, hình thành các khu ổ chuột khổng lồ (như các favela ở Bra-xin) thiếu hạ tầng, thất nghiệp và ô nhiễm.'
        ],
        visualExample: 'Hình ảnh khu ổ chuột favela nằm san sát bên cạnh các khu chung cư cao cấp ở Rio de Janeiro (SGK tr. 169).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 169, pdfPage: 171, section: 'Mục 1. Dân cư và đô thị' },
        commonTrapAlert: 'Đô thị hóa Trung và Nam Mỹ là "đô thị hóa tự phát" (khác với đô thị hóa gắn với công nghiệp hóa ở Bắc Mỹ và châu Âu).',
        iconName: 'Building'
      },
      {
        id: 'KC-717-2',
        cardIndex: 2,
        title: 'Thẻ 2: Khai thác và bảo vệ rừng nhiệt đới A-ma-dôn',
        concept: 'Cháy rừng, Phá rừng làm trang trại bò và đậu tương, Hiệp ước bảo vệ A-ma-dôn',
        coreDefinition: 'Rừng A-ma-dôn đang bị đe dọa nghiêm trọng do các hoạt động kinh tế thiếu bền vững.',
        keyPoints: [
          'Thực trạng: Đốt rừng lấy đất trồng đậu tương và chăn thả bò thịt quy mô lớn; khai thác gỗ bất hợp pháp và đào vàng làm ô nhiễm thủy ngân.',
          'Hậu quả: Làm suy giảm diện tích rừng nhanh chóng, đe dọa đa dạng sinh học và giảm khả năng hấp thụ khí CO2 toàn cầu.',
          'Giải pháp: Tăng cường tuần tra vệ tinh, lập khu bảo tồn thiên nhiên, thúc đẩy nông lâm kết hợp và hỗ trợ tài chính quốc tế cho người dân bản địa.'
        ],
        visualExample: 'Ảnh vệ tinh cho thấy các mảng rừng A-ma-dôn bị chặt phá hình xương cá dọc tuyến quốc lộ xuyên rừng.',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 170, pdfPage: 172, section: 'Mục 2. Bảo vệ rừng A-ma-dôn' },
        commonTrapAlert: 'Rừng A-ma-dôn hấp thụ lượng khổng lồ CO2 và cung cấp oxy, hủy hoại rừng này sẽ đẩy nhanh biến đổi khí hậu toàn cầu.',
        iconName: 'AlertTriangle'
      }
    ],
    mindmap: {
      id: 'mm-717-root',
      label: 'Dân cư & Rừng A-ma-dôn',
      summary: 'Dân cư người lai chiếm ưu thế | Đô thị hoá tự phát sinh khu ổ chuột | Báo động cháy rừng & Phá rừng A-ma-dôn',
      children: [
        { id: 'mm-717-dothi', label: 'Đô thị hoá tự phát', summary: 'Đô thị hóa nhanh hơn công nghiệp hóa, xuất hiện nhiều khu ổ chuột' },
        { id: 'mm-717-amaxon', label: 'Bảo vệ rừng A-ma-dôn', summary: 'Ngăn chặn đốt rừng làm trang trại bò, bảo vệ lá phổi xanh' }
      ]
    },
    comparisons: [
      {
        id: 'comp-717-1',
        conceptA: 'Đô thị hoá ở Bắc Mỹ (Hoa Kỳ, Ca-na-đa)',
        conceptB: 'Đô thị hoá ở Trung và Nam Mỹ',
        keyDifferences: [
          { criteria: 'Nguyên nhân thúc đẩy', conceptAVal: 'Gắn liền với quá trình công nghiệp hóa và dịch vụ hiện đại', conceptBVal: 'Chủ yếu do nông dân nghèo mất đất di cư tự phát ra thành phố' },
          { criteria: 'Vấn đề xã hội', conceptAVal: 'Quy hoạch hạ tầng đồng bộ, nhiều việc làm trong dịch vụ', conceptBVal: 'Xuất hiện các khu ổ chuột dày đặc, thất nghiệp cao, tội phạm' }
        ],
        commonConfusion: 'Học sinh nhầm tỉ lệ đô thị hóa cao ở Nam Mỹ đồng nghĩa với kinh tế phát triển cao.',
        memoryRule: 'Bắc Mỹ: Đô thị hóa thực chất gắn công nghiệp; Nam Mỹ: Đô thị hóa tự phát sinh khu ổ chuột.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-717-1',
        questionText: 'Nguyên nhân hàng đầu khiến rừng mưa nhiệt đới A-ma-dôn bị chặt phá và đốt cháy với tốc độ báo động trong những năm gần đây là gì?',
        options: [
          { id: 'A', text: 'Chặt đốt rừng lấy đất làm trang trại chăn nuôi gia súc và trồng trọt cây công nghiệp' },
          { id: 'B', text: 'Do biến đổi khí hậu tự làm biến mất toàn bộ rừng' },
          { id: 'C', text: 'Do các loài thú ăn sạch cây cối' },
          { id: 'D', text: 'Do người dân trồng thêm nhiều cây gỗ quý' }
        ],
        correctAnswer: 'A',
        explanation: 'Hoạt động phá rừng mở rộng các đồng cỏ chăn nuôi bò và nông trường trồng đậu tương xuất khẩu là nguyên nhân chiếm hơn 70% diện tích rừng A-ma-dôn bị phá hủy.',
        hint: 'Mục đích nông nghiệp chăn thả bò và trồng trọt quy mô lớn.',
        knowledgeCardId: 'KC-717-2'
      }
    ]
  },
  'G7-L18': {
    lessonId: 'G7-L18',
    grade: 7,
    chapterId: 'G7-C5',
    chapterTitle: 'Chương 5. Châu Đại Dương và châu Nam Cực',
    lessonTitle: 'Bài 18: Châu Đại Dương',
    sgkPageRange: 'Trang 172 – 177',
    pdfPageRange: 'Trang 174 – 179',
    objectives: [
      'Xác định được vị trí địa lí và phạm vi châu Đại Dương: Lục địa Ô-xtrây-li-a và các chuỗi đảo Thái Bình Dương.',
      'Phân tích được đặc điểm tự nhiên độc đáo: Khí hậu khô hạn nội địa, sinh vật cổ xưa (thú có túi Cang-gu-ru, thú mỏ vịt).',
      'Đánh giá được rạn san hô Great Barrier và vấn đề bảo vệ môi trường biển đảo.'
    ],
    knowledgeCards: [
      {
        id: 'KC-718-1',
        cardIndex: 1,
        title: 'Thẻ 1: Vị trí và giới sinh vật đặc hữu độc nhất vô nhị',
        concept: 'Lục địa Ô-xtrây-li-a, Thú có túi (Cang-gu-ru, Koala), Thú mỏ vịt',
        coreDefinition: 'Châu Đại Dương bao gồm lục địa Ô-xtrây-li-a và hàng ngàn hòn đảo nằm giữa Thái Bình Dương mênh mông.',
        keyPoints: [
          'Vị trí: Nằm ở Bán cầu Nam, gồm lục địa Ô-xtrây-li-a và 4 nhóm đảo (Mê-la-nê-di, Mi-crô-nê-di, Pô-li-nê-di và Niu Di-len).',
          'Khí hậu: Phần lớn lục địa Ô-xtrây-li-a có khí hậu khô hạn và hoang mạc chiếm diện tích rất lớn do chí tuyến Nam đi qua giữa và có dãy núi Đông Ô-xtrây-li-a chắn gió biển.',
          'Sinh vật đặc hữu: Tách biệt khỏi các lục địa khác từ rất sớm nên bảo tồn được nhiều loài động vật cổ sơ kì lạ: Cang-gu-ru (chuột túi), gấu túi Koala, thú mỏ vịt đẻ trứng, cây bạch đàn khổng lồ.'
        ],
        visualExample: 'Hình ảnh chuột túi Cang-gu-ru và gấu túi Koala ôm cành cây bạch đàn đặc trưng (SGK tr. 174).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 174, pdfPage: 176, section: 'Mục 1 & 2. Tự nhiên và sinh vật' },
        commonTrapAlert: 'Thú có túi (Cang-gu-ru) và thú mỏ vịt là sinh vật biểu tượng đặc hữu của nước Úc (Ô-xtrây-li-a).',
        iconName: 'Compass'
      },
      {
        id: 'KC-718-2',
        cardIndex: 2,
        title: 'Thẻ 2: Rạn san hô Great Barrier và kinh tế Ô-xtrây-li-a',
        concept: 'Rạn san hô Great Barrier dài hơn 2000 km, Nước Úc giàu tài nguyên và nông sản',
        coreDefinition: 'Rạn san hô Great Barrier ở bờ đông bắc Ô-xtrây-li-a là cấu trúc sinh vật sống lớn nhất thế giới nhìn thấy được từ vũ trụ.',
        keyPoints: [
          'Rạn san hô Great Barrier: Di sản thiên nhiên thế giới, dài trên 2000 km với hàng nghìn loài sinh vật biển rực rỡ, đang bị đe dọa hiện tượng tẩy trắng do nước biển ấm lên.',
          'Kinh tế Ô-xtrây-li-a: Nước phát triển hàng đầu, dẫn đầu thế giới về xuất khẩu quặng sắt, than đá, len cừu, thịt bò và lúa mì.',
          'Dân cư tập trung chủ yếu ở dải đồng bằng hẹp ven biển phía đông và đông nam (Xít-ni, Men-bơn).'
        ],
        visualExample: 'Toàn cảnh kì quan rạn san hô Great Barrier ngút ngàn dưới làn nước ngọc bích.',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 176, pdfPage: 178, section: 'Mục 3. Môi trường và kinh tế' },
        commonTrapAlert: 'Nội địa Ô-xtrây-li-a là hoang mạc khô cằn rất vắng vẻ; người dân sống ở bờ biển phía đông và đông nam.',
        iconName: 'Globe'
      }
    ],
    mindmap: {
      id: 'mm-718-root',
      label: 'Châu Đại Dương',
      summary: 'Lục địa Ô-xtrây-li-a & Đảo Thái Bình Dương | Thú có túi (Cang-gu-ru, Koala) | Rạn san hô Great Barrier | Xuất khẩu than, quặng sắt, len cừu',
      children: [
        { id: 'mm-718-sinhvat', label: 'Sinh vật đặc hữu', summary: 'Chuột túi Cang-gu-ru, Koala, thú mỏ vịt kì lạ' },
        { id: 'mm-718-kt', label: 'Tự nhiên & Kinh tế', summary: 'Hoang mạc nội địa, kinh tế phát triển ven biển đông nam' }
      ]
    },
    comparisons: [
      {
        id: 'comp-718-1',
        conceptA: 'Vùng ven biển Đông Nam Ô-xtrây-li-a',
        conceptB: 'Vùng nội địa và Tây Ô-xtrây-li-a',
        keyDifferences: [
          { criteria: 'Khí hậu và điều kiện sống', conceptAVal: 'Khí hậu ôn đới và cận nhiệt hải dương ấm áp, mưa nhiều, đô thị sầm uất', conceptBVal: 'Khí hậu hoang mạc khô hạn gay gắt, thưa thớt dân cư' },
          { criteria: 'Phân bố dân cư', conceptAVal: 'Tập trung trên 85% dân số cả nước (Xít-ni, Men-bơn)', conceptBVal: 'Hầu như không có người ở hoặc chỉ có các mỏ khai khoáng' }
        ],
        commonConfusion: 'Học sinh nhầm lục địa Ô-xtrây-li-a có dân cư phân bố đồng đều khắp nơi.',
        memoryRule: 'Ô-xtrây-li-a: Dân đông bờ biển đông nam; nội địa là hoang mạc cát đỏ.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-718-1',
        questionText: 'Loài động vật nào sau đây là loài thú có túi đặc hữu nổi tiếng nhất của lục địa Ô-xtrây-li-a?',
        options: [
          { id: 'A', text: 'Cang-gu-ru (Chuột túi)' },
          { id: 'B', text: 'Hươu cao cổ' },
          { id: 'C', text: 'Sư tử châu Phi' },
          { id: 'D', text: 'Chim cánh cụt hoàng đế' }
        ],
        correctAnswer: 'A',
        explanation: 'Cang-gu-ru (chuột túi) là loài thú có túi bản địa tiêu biểu xuất hiện trên quốc huy của đất nước Ô-xtrây-li-a.',
        hint: 'Biểu tượng nhảy bằng hai chân sau có túi nuôi con.',
        knowledgeCardId: 'KC-718-1'
      }
    ]
  },
  'G7-L19': {
    lessonId: 'G7-L19',
    grade: 7,
    chapterId: 'G7-C5',
    chapterTitle: 'Chương 5. Châu Đại Dương và châu Nam Cực',
    lessonTitle: 'Bài 19: Châu Nam Cực',
    sgkPageRange: 'Trang 178 – 181',
    pdfPageRange: 'Trang 180 – 183',
    objectives: [
      'Trình bày được vị trí địa lí và phạm vi châu Nam Cực (nằm trong vòng cực Nam).',
      'Giải thích được đặc điểm tự nhiên khắc nghiệt: Châu lục lạnh nhất, nhiều gió bão nhất và khô hạn nhất hành tinh (hoang mạc băng).',
      'Hiểu được tầm quan trọng của Hiệp ước Nam Cực (vì mục đích hòa bình và hợp tác nghiên cứu khoa học).'
    ],
    knowledgeCards: [
      {
        id: 'KC-719-1',
        cardIndex: 1,
        title: 'Thẻ 1: Cực lạnh của Trái Đất và hoang mạc băng',
        concept: 'Châu lục lạnh nhất thế giới, Băng dày trung bình 2000 - 3000 m, Gió bão cực đại',
        coreDefinition: 'Châu Nam Cực nằm trọn trong vòng cực Nam, là hoang mạc băng vĩnh cửu có khí hậu khắc nghiệt nhất hành tinh.',
        keyPoints: [
          'Vị trí: Bao quanh cực Nam của Trái Đất, diện tích khoảng 14,1 triệu km².',
          'Nhiệt độ cực thấp: Nhiệt độ thấp nhất từng đo được đạt tới -89,2°C (tại trạm Vô-xtốc).',
          'Tấm khiên băng: Bao phủ bởi lớp băng dày trung bình trên 2000 m, chứa gần 90% lượng băng và 70% lượng nước ngọt của toàn thế giới.',
          'Gió bão: Tốc độ gió thường xuyên trên 100 km/h, là nơi nhiều gió bão nhất thế giới.'
        ],
        visualExample: 'Hình ảnh trạm nghiên cứu khoa học kiên cố nằm giữa sa mạc băng tuyết trắng xóa (SGK tr. 179).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 179, pdfPage: 181, section: 'Mục 1 & 2. Vị trí và khí hậu' },
        commonTrapAlert: 'Châu Nam Cực lạnh hơn Bắc Cực rất nhiều vì là một lục địa cao phủ băng (Bắc Cực là đại dương đóng băng).',
        iconName: 'Compass'
      },
      {
        id: 'KC-719-2',
        cardIndex: 2,
        title: 'Thẻ 2: Sinh vật và Hiệp ước Nam Cực',
        concept: 'Chim cánh cụt, Tôm biển Krill, Hiệp ước Nam Cực năm 1959',
        coreDefinition: 'Châu Nam Cực không có dân cư định cư thường xuyên và là lục địa được bảo vệ bằng hiệp ước quốc tế đặc biệt.',
        keyPoints: [
          'Sinh vật: Thực vật trên cạn hầu như không tồn tại (chỉ có rêu, địa y ở rìa đá mép biển). Động vật chịu lạnh phong phú ven biển: chim cánh cụt (Penguin), hải cẩu, cá voi xanh, tôm nam cực (krill).',
          'Hiệp ước Nam Cực (1959): Kí kết bởi các cường quốc quy định châu Nam Cực chỉ được sử dụng cho mục đích hòa bình, cấm mọi hoạt động quân sự, thử nghiệm vũ khí hạt nhân và cấm khai thác khoáng sản thương mại.',
          'Hiện tượng băng tan: Do sự nóng lên toàn cầu, các thềm băng khổng lồ đang nứt gãy và tan rã, đe dọa dâng cao mực nước biển thế giới.'
        ],
        visualExample: 'Đàn chim cánh cụt hoàng đế tụ tập trên bờ băng tuyết châu Nam Cực.',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 7 – Kết nối tri thức', bookPage: 180, pdfPage: 182, section: 'Mục 3 & 4. Sinh vật và Hiệp ước' },
        commonTrapAlert: 'Gấu Bắc Cực sống ở BẮC CỰC; Chim cánh cụt sống ở NAM CỰC (hai loài này không bao giờ gặp nhau trong tự nhiên).',
        iconName: 'Shield'
      }
    ],
    mindmap: {
      id: 'mm-719-root',
      label: 'Châu Nam Cực',
      summary: 'Lạnh nhất thế giới (-89,2°C) | Băng dày trung bình >2000m (chứa 70% nước ngọt) | Chim cánh cụt | Hiệp ước Nam Cực vì hòa bình',
      children: [
        { id: 'mm-719-khihau', label: 'Cực lạnh & Khô', summary: 'Lạnh nhất, nhiều bão nhất, hoang mạc băng khổng lồ' },
        { id: 'mm-719-hiepuoc', label: 'Hiệp ước Nam Cực', summary: 'Cấm quân sự, chỉ nghiên cứu khoa học hòa bình' }
      ]
    },
    comparisons: [
      {
        id: 'comp-719-1',
        conceptA: 'Vùng Bắc Cực',
        conceptB: 'Châu Nam Cực',
        keyDifferences: [
          { criteria: 'Bản chất địa lí', conceptAVal: 'Là một ĐẠI DƯƠNG (Bắc Băng Dương) bao quanh bởi các lục địa', conceptBVal: 'Là một LỤC ĐỊA thực sự bao quanh bởi các đại dương' },
          { criteria: 'Động vật biểu tượng', conceptAVal: 'Gấu trắng Bắc Cực (Polar Bear), hải mã', conceptBVal: 'Chim cánh cụt (Penguin), cá voi xanh' },
          { criteria: 'Dân cư', conceptAVal: 'Có thổ dân sinh sống lâu đời (người Ét-ki-mô)', conceptBVal: 'Không có dân cư thường trú (chỉ có các nhà khoa học ở trạm nghiên cứu)' }
        ],
        commonConfusion: 'Học sinh hay nhầm gấu trắng sống ở Nam Cực hoặc nhầm Nam Cực có dân cư thường trú.',
        memoryRule: 'Bắc Băng Dương có gấu trắng; Lục địa Nam Cực có chim cánh cụt.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-719-1',
        questionText: 'Hiệp ước Nam Cực được các nước kí kết năm 1959 quy định điều khoản cốt lõi nào dưới đây?',
        options: [
          { id: 'A', text: 'Châu Nam Cực chỉ được sử dụng cho mục đích hòa bình và nghiên cứu khoa học, cấm hoạt động quân sự' },
          { id: 'B', text: 'Chia đều châu Nam Cực thành các thuộc địa để khai thác khoáng sản' },
          { id: 'C', text: 'Cho phép thử nghiệm tất cả các loại vũ khí hạt nhân' },
          { id: 'D', text: 'Di dân tự do đến Nam Cực xây dựng các đô thị lớn' }
        ],
        correctAnswer: 'A',
        explanation: 'Hiệp ước Nam Cực bảo đảm lục địa này là vùng đất trung lập phi quân sự, chỉ dành riêng cho tiến bộ khoa học của toàn nhân loại.',
        hint: 'Mục đích hòa bình và cấm quân sự.',
        knowledgeCardId: 'KC-719-2'
      }
    ]
  }
};
