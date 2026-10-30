import { GeoLessonData } from '../types';

export const LESSONS_GRADE_8: Record<string, GeoLessonData> = {
  'G8-L1': {
    lessonId: 'G8-L1',
    grade: 8,
    chapterId: 'G8-C1',
    chapterTitle: 'Chương 1. Vị trí địa lí và phạm vi lãnh thổ, địa hình và khoáng sản Việt Nam',
    lessonTitle: 'Bài 1: Vị trí địa lí và phạm vi lãnh thổ Việt Nam',
    sgkPageRange: 'Trang 98 – 101',
    pdfPageRange: 'Trang 100 – 103',
    objectives: [
      'Xác định được vị trí địa lí và toạ độ các điểm cực trên đất liền nước ta.',
      'Trình bày được đặc điểm phạm vi lãnh thổ gồm vùng đất, vùng biển và vùng trời.',
      'Phân tích được ảnh hưởng của vị trí địa lí đối với tự nhiên, kinh tế - xã hội và an ninh quốc phòng.'
    ],
    knowledgeCards: [
      {
        id: 'KC-801-1',
        cardIndex: 1,
        title: 'Thẻ 1: Vị trí địa lí và tọa độ các điểm cực phần đất liền',
        concept: 'Tọa độ 4 điểm cực trên đất liền Việt Nam',
        coreDefinition: 'Việt Nam nằm ở rìa phía đông bán đảo Đông Dương, gần trung tâm khu vực Đông Nam Á, trong vùng nội chí tuyến Bắc bán cầu.',
        keyPoints: [
          'Cực Bắc: 23°23\'B tại xã Lũng Cú, huyện Đồng Văn, tỉnh Hà Giang.',
          'Cực Nam: 8°34\'B tại xã Đất Mũi, huyện Ngọc Hiển, tỉnh Cà Mau.',
          'Cực Tây: 102°09\'Đ tại xã Sín Thầu, huyện Mường Nhé, tỉnh Điện Biên.',
          'Cực Đông: 109°28\'Đ tại xã Vạn Thạnh, huyện Vạn Ninh, tỉnh Khánh Hòa.',
          'Kinh tuyến 105°Đ chạy qua lãnh thổ nước ta, nên Việt Nam hoàn toàn nằm trong múi giờ số 7 (GMT+7).'
        ],
        visualExample: 'Bản đồ vị trí địa lí và các điểm cực trên đất liền (SGK tr. 99).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 8 – Kết nối tri thức', bookPage: 99, pdfPage: 101, section: 'Mục 1. Vị trí địa lí' },
        commonTrapAlert: 'Bẫy thường gặp: Nhầm điểm cực Đông ở Mũi Điện (Phú Yên). Theo SGK chuẩn Kết nối tri thức, cực Đông là bán đảo Hòn Gốm, xã Vạn Thạnh, huyện Vạn Ninh, tỉnh Khánh Hòa (109°28\'Đ).',
        iconName: 'MapPin'
      },
      {
        id: 'KC-801-2',
        cardIndex: 2,
        title: 'Thẻ 2: Phạm vi lãnh thổ toàn vẹn của Việt Nam',
        concept: 'Vùng đất, vùng biển và vùng trời',
        coreDefinition: 'Lãnh thổ Việt Nam là một khối thống nhất và toàn vẹn, bao gồm vùng đất, vùng biển và vùng trời.',
        keyPoints: [
          'Vùng đất: Diện tích đất liền và các hải đảo là 331 344 km² (năm 2021). Đường biên giới trên đất liền dài hơn 4 600 km tiếp giáp với 3 quốc gia: Trung Quốc, Lào, Cam-pu-chia.',
          'Bờ biển hình chữ S dài 3 260 km từ Móng Cái (Quảng Ninh) đến Hà Tiên (Kiên Giang).',
          'Vùng biển: Có diện tích khoảng 1 triệu km² trên Biển Đông với hàng nghìn hòn đảo lớn nhỏ, nổi bật là hai quần đảo Hoàng Sa và Trường Sa.',
          'Vùng trời: Là khoảng không gian bao trùm lên trên lãnh thổ đất liền và vùng biển nước ta.'
        ],
        visualExample: 'Hình ảnh dải đất hình chữ S và đường bờ biển dài 3 260 km (SGK tr. 100).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 8 – Kết nối tri thức', bookPage: 100, pdfPage: 102, section: 'Mục 2. Phạm vi lãnh thổ' },
        commonTrapAlert: 'Bẫy số liệu: Nhầm diện tích lãnh thổ là 330 000 km² (số liệu chính thức chuẩn SGK mới là 331 344 km²).',
        iconName: 'Compass'
      },
      {
        id: 'KC-801-3',
        cardIndex: 3,
        title: 'Thẻ 3: Ý nghĩa tự nhiên của vị trí địa lí',
        concept: 'Quy định thiên nhiên nhiệt đới ẩm gió mùa',
        coreDefinition: 'Vị trí địa lí quy định đặc điểm cơ bản của thiên nhiên nước ta mang tính chất nhiệt đới ẩm gió mùa.',
        keyPoints: [
          'Nằm trong vùng nội chí tuyến Bắc bán cầu nên có nền nhiệt độ cao, chan hòa ánh nắng quanh năm.',
          'Tiếp giáp Biển Đông rộng lớn kết hợp gió mùa nên nhận được lượng mưa và độ ẩm dồi dào, không bị khô hạn như các nước cùng vĩ độ ở Tây Á hay Bắc Phi.',
          'Nằm trên đường di lưu, di cư của nhiều luồng sinh vật nên tài nguyên sinh vật vô cùng phong phú và đa dạng.',
          'Khó khăn: Nằm trong khu vực thường xuyên chịu ảnh hưởng của bão, áp thấp nhiệt đới, lũ lụt, sạt lở đất.'
        ],
        visualExample: 'Lược đồ hoàn lưu gió mùa và dòng di cư sinh vật qua Việt Nam (SGK tr. 101).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 8 – Kết nối tri thức', bookPage: 101, pdfPage: 103, section: 'Mục 3. Ý nghĩa vị trí địa lí' },
        commonTrapAlert: 'Bẫy so sánh: Quên mất nhờ Biển Đông và gió mùa mà Việt Nam xanh tốt trù phú, khác hẳn cảnh hoang mạc Sahara ở Bắc Phi cùng vĩ độ.',
        iconName: 'Sun'
      }
    ],
    mindmap: {
      id: 'mm-801-root',
      label: 'Vị trí địa lí & Phạm vi lãnh thổ Việt Nam',
      summary: 'Khối thống nhất toàn vẹn gồm vùng đất, vùng biển, vùng trời quy định thiên nhiên nhiệt đới ẩm',
      children: [
        {
          id: 'mm-801-toado',
          label: 'Tọa độ 4 điểm cực đất liền',
          summary: 'Bắc: Lũng Cú (23°23\'B) | Nam: Đất Mũi (8°34\'B) | Tây: Sín Thầu (102°09\'Đ) | Đông: Vạn Thạnh (109°28\'Đ)'
        },
        {
          id: 'mm-801-phamvi',
          label: 'Phạm vi lãnh thổ',
          summary: 'Đất liền: 331 344 km², bờ biển 3 260 km | Biển: ~1 triệu km² | Vùng trời bao trùm'
        },
        {
          id: 'mm-801-ynghia',
          label: 'Ý nghĩa tự nhiên',
          summary: 'Nhiệt đới ẩm gió mùa, sinh vật phong phú, tránh được khô hạn hoang mạc hóa'
        }
      ]
    },
    comparisons: [
      {
        id: 'comp-801-1',
        conceptA: 'Thiên nhiên Việt Nam',
        conceptB: 'Các nước cùng vĩ độ ở Tây Á & Bắc Phi',
        comparisonTable: [
          { criteria: 'Khí hậu và lượng mưa', conceptAVal: 'Nhiệt đới ẩm gió mùa, mưa nhiều (1 500 - 2 000 mm/năm)', conceptBVal: 'Khô hạn khắc nghiệt, lượng mưa rất thấp (<200 mm/năm)' },
          { criteria: 'Cảnh quan thực vật', conceptAVal: 'Rừng cây thường xanh tốt quanh năm, trù phú', conceptBVal: 'Hoang mạc và bán hoang mạc cát cằn cỗi (như Sahara)' },
          { criteria: 'Nguyên nhân cốt lõi', conceptAVal: 'Nằm giáp Biển Đông và chịu ảnh hưởng trực tiếp của gió mùa', conceptBVal: 'Nằm sâu trong lục địa khổng lồ hoặc có áp cao chí tuyến ngự trị' }
        ],
        commonConfusion: 'Học sinh thường nghĩ các nước cùng vĩ độ thì khí hậu và cảnh quan phải giống nhau.',
        memoryRule: 'Mẹo nhớ: Cùng vĩ độ nhưng Việt Nam giáp Biển Đông và gió mùa nên xanh tốt, không bị hoang mạc hóa.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-801-1',
        questionText: 'Điểm cực Đông trên phần đất liền của nước ta nằm ở xã, huyện và tỉnh nào?',
        options: [
          { id: 'A', text: 'Xã Vạn Thạnh, huyện Vạn Ninh, tỉnh Khánh Hòa' },
          { id: 'B', text: 'Xã Hòa Tâm, thị xã Đông Hòa, tỉnh Phú Yên' },
          { id: 'C', text: 'Xã Đất Mũi, huyện Ngọc Hiển, tỉnh Cà Mau' },
          { id: 'D', text: 'Xã Lũng Cú, huyện Đồng Văn, tỉnh Hà Giang' }
        ],
        correctAnswer: 'A',
        explanation: 'Theo SGK Địa lí 8 trang 99, điểm cực Đông trên đất liền nước ta nằm tại xã Vạn Thạnh, huyện Vạn Ninh, tỉnh Khánh Hòa (109°28\'Đ).',
        hint: 'Bán đảo Hòn Gốm, tỉnh Khánh Hòa.',
        knowledgeCardId: 'KC-801-1'
      }
    ]
  },

  'G8-L2': {
    lessonId: 'G8-L2',
    grade: 8,
    chapterId: 'G8-C1',
    chapterTitle: 'Chương 1. Vị trí địa lí và phạm vi lãnh thổ, địa hình và khoáng sản Việt Nam',
    lessonTitle: 'Bài 2: Địa hình Việt Nam',
    sgkPageRange: 'Trang 103 – 109',
    pdfPageRange: 'Trang 105 – 111',
    objectives: [
      'Trình bày được 4 đặc điểm chung của địa hình Việt Nam.',
      'Phân biệt được đặc điểm của 4 khu vực đồi núi: Đông Bắc, Tây Bắc, Trường Sơn Bắc, Trường Sơn Nam.',
      'Nêu được đặc điểm của hai đồng bằng châu thổ lớn (sông Hồng và sông Cửu Long) và đồng bằng ven biển miền Trung.'
    ],
    knowledgeCards: [
      {
        id: 'KC-802-1',
        cardIndex: 1,
        title: 'Thẻ 1: Bốn đặc điểm chung của Địa hình Việt Nam',
        concept: 'Đồi núi thấp chiếm ưu thế, phân bậc, hai hướng chính, chịu tác động nhiệt đới ẩm',
        coreDefinition: 'Địa hình nước ta đa dạng, đồi núi chiếm 3/4 diện tích nhưng chủ yếu là đồi núi thấp, có hai hướng chính.',
        keyPoints: [
          'Đồi núi chiếm 3/4 diện tích lãnh thổ, nhưng đồi núi thấp (dưới 1 000 m) chiếm tới 85%, núi cao trên 2 000 m chỉ chiếm 1%. Đỉnh Phan-xi-păng (3 143 m) cao nhất.',
          'Được nâng cao và trẻ lại trong giai đoạn Tân kiến tạo, tạo nên các bậc địa hình kế tiếp nhau từ núi cao, đồi trung du đến đồng bằng.',
          'Hai hướng chính: Hướng Tây Bắc - Đông Nam (vùng Tây Bắc, Trường Sơn Bắc) và Hướng Vòng cung (vùng Đông Bắc, Trường Sơn Nam).',
          'Tác động của khí hậu nhiệt đới ẩm gió mùa: Xâm thực mạnh ở đồi núi, bồi tụ nhanh ở hạ lưu đồng bằng; địa hình Karst đá vôi độc đáo.'
        ],
        visualExample: 'Lược đồ địa hình Việt Nam với các khối núi và lát cắt địa hình A-B (SGK tr. 104).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 8 – Kết nối tri thức', bookPage: 104, pdfPage: 106, section: 'Mục 1. Đặc điểm chung' },
        commonTrapAlert: 'Bẫy thường gặp: Nhầm địa hình nước ta chủ yếu là núi cao hiểm trở (85% là đồi núi thấp dưới 1 000 m).',
        iconName: 'Mountain'
      },
      {
        id: 'KC-802-2',
        cardIndex: 2,
        title: 'Thẻ 2: Phân hóa 4 khu vực đồi núi chính',
        concept: 'Đông Bắc, Tây Bắc, Trường Sơn Bắc, Trường Sơn Nam',
        coreDefinition: 'Khu vực đồi núi nước ta chia thành 4 vùng với đặc trưng địa hình và hướng núi khác nhau.',
        keyPoints: [
          'Vùng núi Đông Bắc: Nằm ở tả ngạn sông Hồng, chủ yếu là đồi núi thấp, hướng VÒNG CUNG với 4 cánh cung: Sông Gâm, Ngân Sơn, Bắc Sơn, Đông Triều.',
          'Vùng núi Tây Bắc: Nằm giữa sông Hồng và sông Cả, địa hình cao và hiểm trở nhất nước, hướng TÂY BẮC - ĐÔNG NAM, có dãy Hoàng Liên Sơn hùng vĩ.',
          'Vùng Trường Sơn Bắc: Từ phía nam sông Cả đến dãy Bạch Mã, địa hình hẹp ngang, nâng cao ở hai đầu, hướng TÂY BẮC - ĐÔNG NAM.',
          'Vùng Trường Sơn Nam: Từ dãy Bạch Mã đến Đông Nam Bộ, gồm các khối núi cao Kon Tum, Nam Gie và hệ thống các cao nguyên bazan xếp tầng (Pleiku, Đắk Lắk, Mơ Nông, Di Linh), hướng VÒNG CUNG.'
        ],
        visualExample: 'Bản đồ 4 vùng đồi núi và các cao nguyên bazan Tây Nguyên (SGK tr. 106).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 8 – Kết nối tri thức', bookPage: 105, pdfPage: 107, section: 'Mục 2. Các khu vực địa hình' },
        commonTrapAlert: 'Bẫy thường gặp: Nhầm hướng núi của vùng Đông Bắc thành Tây Bắc - Đông Nam (Đông Bắc có hướng vòng cung).',
        iconName: 'Layers'
      }
    ],
    mindmap: {
      id: 'mm-802-root',
      label: 'Địa hình Việt Nam',
      summary: '3/4 đồi núi thấp, phân bậc Tân kiến tạo, hướng TB-ĐN và Vòng cung, xâm thực - bồi tụ mạnh',
      children: [
        { id: 'mm-802-db', label: 'Đông Bắc', summary: 'Đồi núi thấp, 4 cánh cung chụm đầu ở Tam Đảo' },
        { id: 'mm-802-tb', label: 'Tây Bắc', summary: 'Núi cao hiểm trở nhất, hướng TB-ĐN, Hoàng Liên Sơn' },
        { id: 'mm-802-tsb', label: 'Trường Sơn Bắc', summary: 'Từ nam sông Cả đến Bạch Mã, hướng TB-ĐN' },
        { id: 'mm-802-tsn', label: 'Trường Sơn Nam', summary: 'Khối núi & các cao nguyên bazan xếp tầng, hướng vòng cung' }
      ]
    },
    comparisons: [
      {
        id: 'comp-802-1',
        conceptA: 'Vùng núi Đông Bắc',
        conceptB: 'Vùng núi Tây Bắc',
        comparisonTable: [
          { criteria: 'Vị trí giới hạn', conceptAVal: 'Tả ngạn sông Hồng (phía đông thung lũng sông Hồng)', conceptBVal: 'Nằm giữa sông Hồng và sông Cả' },
          { criteria: 'Độ cao địa hình', conceptAVal: 'Chủ yếu là đồi núi thấp dưới 1 000 m', conceptBVal: 'Cao và đồ sộ nhất cả nước, nhiều đỉnh >2 000 m' },
          { criteria: 'Hướng núi chủ đạo', conceptAVal: 'Hướng VÒNG CUNG (4 cánh cung lớn)', conceptBVal: 'Hướng TÂY BẮC - ĐÔNG NAM (dãy Hoàng Liên Sơn)' }
        ],
        commonConfusion: 'Học sinh hay nhầm lẫn hướng địa hình và độ cao giữa Đông Bắc và Tây Bắc.',
        memoryRule: 'Mẹo nhớ: Đông Bắc cánh cung núi thấp; Tây Bắc hiểm trở Hoàng Liên Sơn cao nhất.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-802-1',
        questionText: 'Bốn cánh cung núi lớn: Sông Gâm, Ngân Sơn, Bắc Sơn, Đông Triều thuộc vùng núi nào của nước ta?',
        options: [
          { id: 'A', text: 'Vùng núi Đông Bắc' },
          { id: 'B', text: 'Vùng núi Tây Bắc' },
          { id: 'C', text: 'Vùng núi Trường Sơn Bắc' },
          { id: 'D', text: 'Vùng núi Trường Sơn Nam' },
        ],
        correctAnswer: 'A',
        explanation: 'SGK Địa lí 8 trang 105 xác định 4 cánh cung lớn chụm lại ở Tam Đảo thuộc vùng núi Đông Bắc.',
        hint: 'Tả ngạn sông Hồng.',
        knowledgeCardId: 'KC-802-2'
      }
    ]
  },

  'G8-L3': {
    lessonId: 'G8-L3',
    grade: 8,
    chapterId: 'G8-C1',
    chapterTitle: 'Chương 1. Vị trí địa lí và phạm vi lãnh thổ, địa hình và khoáng sản Việt Nam',
    lessonTitle: 'Bài 3: Khoáng sản Việt Nam',
    sgkPageRange: 'Trang 110 – 114',
    pdfPageRange: 'Trang 112 – 116',
    objectives: [
      'Trình bày và giải thích được đặc điểm chung của tài nguyên khoáng sản Việt Nam.',
      'Xác định được sự phân bố của các mỏ khoáng sản chiến lược: than đá, bô-xít, dầu khí, sắt, apatit.',
      'Phân tích được vấn đề sử dụng hợp lí tài nguyên khoáng sản và bảo vệ môi trường mỏ.'
    ],
    knowledgeCards: [
      {
        id: 'KC-803-1',
        cardIndex: 1,
        title: 'Thẻ 1: Đặc điểm tài nguyên khoáng sản nước ta',
        concept: 'Phong phú về chủng loại, quy mô vừa và nhỏ',
        coreDefinition: 'Nước ta có tài nguyên khoáng sản phong phú đa dạng nhưng trữ lượng phần lớn là trung bình và nhỏ.',
        keyPoints: [
          'Nguyên nhân phong phú: Nằm ở nơi giao nhau giữa 2 vành đai sinh khoáng lớn Thái Bình Dương và Địa Trung Hải, lịch sử địa chất kiến tạo lâu dài và phức tạp.',
          'Số lượng: Đã thăm dò được hơn 5 000 mỏ và điểm quặng của khoảng 60 loại khoáng sản khác nhau.',
          'Quy mô: Phần lớn các mỏ có trữ lượng vừa và nhỏ. Một số khoáng sản có trữ lượng lớn mang tầm chiến lược: than đá, bô-xít, dầu mỏ, khí tự nhiên, titan, đất hiếm.'
        ],
        visualExample: 'Bản đồ phân bố khoáng sản Việt Nam (SGK tr. 111).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 8 – Kết nối tri thức', bookPage: 111, pdfPage: 113, section: 'Mục 1. Đặc điểm chung khoáng sản' },
        commonTrapAlert: 'Bẫy thường gặp: Nhầm tưởng tất cả các mỏ khoáng sản Việt Nam đều có trữ lượng khổng lồ.',
        iconName: 'Gem'
      },
      {
        id: 'KC-803-2',
        cardIndex: 2,
        title: 'Thẻ 2: Phân bố các khoáng sản trọng yếu',
        concept: 'Than Quảng Ninh, Bô-xít Tây Nguyên, Dầu khí thềm lục địa',
        coreDefinition: 'Các khoáng sản chiến lược phân bố gắn liền với các vùng cấu trúc địa chất đặc thù.',
        keyPoints: [
          'Than đá: Tập trung lớn nhất ở bể than Quảng Ninh (trữ lượng ~3 tỉ tấn, than antraxit chất lượng cao).',
          'Bô-xít (quặng nhôm): Tập trung ở Tây Nguyên (Đắk Nông, Lâm Đồng, Gia Lai) với trữ lượng hàng tỉ tấn.',
          'Dầu mỏ và khí đốt: Phân bố ở vùng thềm lục địa phía nam (bể trầm tích Cửu Long, Nam Côn Sơn).',
          'Quặng sắt: Phân bố ở Thái Nguyên, Yên Bái và mỏ Thạch Khê (Hà Tĩnh).',
          'Apatit: Phân bố duy nhất ở Lào Cai, dùng làm phân lân cho nông nghiệp.'
        ],
        visualExample: 'Hình ảnh khai thác than tại mỏ than Cọc Sáu Quảng Ninh (SGK tr. 112).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 8 – Kết nối tri thức', bookPage: 112, pdfPage: 114, section: 'Mục 2. Phân bố các khoáng sản' },
        commonTrapAlert: 'Bẫy địa danh: Nhầm bô-xít có nhiều nhất ở Trung du Bắc Bộ (bô-xít lớn nhất nước ta ở Tây Nguyên).',
        iconName: 'Flame'
      }
    ],
    mindmap: {
      id: 'mm-803-root',
      label: 'Khoáng sản Việt Nam',
      summary: 'Đa dạng chủng loại, trữ lượng vừa và nhỏ, than Quảng Ninh, bô-xít Tây Nguyên, dầu khí thềm lục địa',
      children: [
        { id: 'mm-803-than', label: 'Than đá', summary: 'Bể than Quảng Ninh (antraxit nhiệt lượng cao)' },
        { id: 'mm-803-boxit', label: 'Bô-xít (nhôm)', summary: 'Tây Nguyên (Đắk Nông, Lâm Đồng trữ lượng hàng tỉ tấn)' },
        { id: 'mm-803-daukhí', label: 'Dầu mỏ - Khí đốt', summary: 'Thềm lục địa phía nam (bể Cửu Long, Nam Côn Sơn)' },
        { id: 'mm-803-sat-apa', label: 'Sắt & Apatit', summary: 'Sắt Thạch Khê (Hà Tĩnh), Apatit Lào Cai' }
      ]
    },
    comparisons: [
      {
        id: 'comp-803-1',
        conceptA: 'Khoáng sản Than đá (Quảng Ninh)',
        conceptB: 'Khoáng sản Bô-xít (Tây Nguyên)',
        comparisonTable: [
          { criteria: 'Khu vực phân bố', conceptAVal: 'Tỉnh Quảng Ninh (vùng Đông Bắc)', conceptBVal: 'Các tỉnh Tây Nguyên (Đắk Nông, Lâm Đồng, Gia Lai)' },
          { criteria: 'Nhóm khoáng sản', conceptAVal: 'Khoáng sản năng lượng (nhiên liệu)', conceptBVal: 'Khoáng sản kim loại màu (luyện nhôm)' },
          { criteria: 'Ứng dụng kinh tế', conceptAVal: 'Nhiệt điện, luyện kim, xuất khẩu', conceptBVal: 'Nguyên liệu sản xuất nhôm nguyên chất' }
        ],
        commonConfusion: 'Học sinh hay nhầm bô-xít là khoáng sản nhiên liệu đốt cháy được như than.',
        memoryRule: 'Mẹo nhớ: Than đá năng lượng ở Quảng Ninh; Bô-xít kim loại nhôm ở Tây Nguyên.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-803-1',
        questionText: 'Bể than đá có trữ lượng lớn nhất và chất lượng tốt nhất nước ta phân bố ở tỉnh nào?',
        options: [
          { id: 'A', text: 'Tỉnh Quảng Ninh' },
          { id: 'B', text: 'Tỉnh Thái Nguyên' },
          { id: 'C', text: 'Tỉnh Đắk Nông' },
          { id: 'D', text: 'Tỉnh Lào Cai' }
        ],
        correctAnswer: 'A',
        explanation: 'Bể than Quảng Ninh là bể than lớn nhất cả nước và khu vực Đông Nam Á, chủ yếu là than antraxit.',
        hint: 'Vùng mỏ than Đông Bắc.',
        knowledgeCardId: 'KC-803-2'
      }
    ]
  },

  'G8-L4': {
    lessonId: 'G8-L4',
    grade: 8,
    chapterId: 'G8-C2',
    chapterTitle: 'Chương 2. Khí hậu và thuỷ văn Việt Nam',
    lessonTitle: 'Bài 4: Khí hậu Việt Nam',
    sgkPageRange: 'Trang 115 – 120',
    pdfPageRange: 'Trang 117 – 122',
    objectives: [
      'Trình bày và giải thích được tính chất nhiệt đới ẩm gió mùa của khí hậu Việt Nam.',
      'Phân tích được hoạt động của gió mùa Đông Bắc và gió mùa Tây Nam.',
      'Trình bày được sự phân hoá đa dạng của khí hậu nước ta theo Bắc - Nam và theo độ cao.'
    ],
    knowledgeCards: [
      {
        id: 'KC-804-1',
        cardIndex: 1,
        title: 'Thẻ 1: Ba tính chất nhiệt đới ẩm gió mùa của khí hậu',
        concept: 'Nhiệt độ >20°C, Mưa 1 500-2 000mm, Hai mùa gió đối lập',
        coreDefinition: 'Khí hậu nước ta có nhiệt độ cao, độ ẩm dồi dào và chế độ gió mùa luân chuyển rõ rệt.',
        keyPoints: [
          'Tính chất nhiệt đới: Nhiệt độ trung bình năm trên 20°C (trừ vùng núi cao), số giờ nắng đạt 1 400 - 3 000 giờ/năm, tổng bức xạ lớn.',
          'Tính chất ẩm: Lượng mưa trung bình năm lớn từ 1 500 đến 2 000 mm, độ ẩm tương đối của không khí cao trên 80%.',
          'Tính chất gió mùa: Nằm trong khu vực hoạt động của gió mùa châu Á, có hai mùa gió trái ngược nhau: Gió mùa mùa đông (gió Đông Bắc) và Gió mùa mùa hạ (gió Tây Nam).'
        ],
        visualExample: 'Bản đồ khí hậu Việt Nam và các trạm đo khí tượng (SGK tr. 116).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 8 – Kết nối tri thức', bookPage: 116, pdfPage: 118, section: 'Mục 1. Tính chất nhiệt đới ẩm gió mùa' },
        commonTrapAlert: 'Bẫy số liệu: Nhầm nhiệt độ trung bình năm dưới 20°C (Việt Nam luôn >20°C trên toàn bộ vùng đồng bằng và đồi núi thấp).',
        iconName: 'Sun'
      },
      {
        id: 'KC-804-2',
        cardIndex: 2,
        title: 'Thẻ 2: Hai mùa gió và sự phân hóa Bắc - Nam',
        concept: 'Gió mùa Đông Bắc, Gió mùa Tây Nam, Dãy Bạch Mã 16°B',
        coreDefinition: 'Gió mùa tạo nên sự phân hóa mùa khí hậu sâu sắc giữa miền Bắc và miền Nam.',
        keyPoints: [
          'Gió mùa Đông Bắc (tháng 11 - 4): Xuất phát từ áp cao Xi-bia. Nửa đầu mùa đông lạnh khô; nửa cuối mùa đông lạnh ẩm có mưa phùn ven biển Bắc Bộ. Bị suy yếu và chặn lại ở dãy Bạch Mã (16°B).',
          'Gió mùa Tây Nam (tháng 5 - 10): Nóng ẩm gây mưa dông lớn cho Nam Bộ, Tây Nguyên và cả nước. Khi vượt dãy Trường Sơn gây hiệu ứng phơn Tây Nam (gió Lào khô nóng) ở ven biển miền Trung.',
          'Phân hóa Bắc - Nam: Miền Bắc có mùa đông lạnh; Miền Nam nóng quanh năm với 2 mùa mưa - khô rõ rệt.'
        ],
        visualExample: 'Sơ đồ cơ chế gió phơn khô nóng vượt Trường Sơn tràn xuống đồng bằng duyên hải (SGK tr. 118).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 8 – Kết nối tri thức', bookPage: 118, pdfPage: 120, section: 'Mục 2. Sự phân hoá khí hậu' },
        commonTrapAlert: 'Bẫy thường gặp: Nhầm miền Nam cũng có gió mùa Đông Bắc gây rét buốt (dãy Bạch Mã đã chặn đứng gió lạnh).',
        iconName: 'Wind'
      }
    ],
    mindmap: {
      id: 'mm-804-root',
      label: 'Khí hậu Việt Nam',
      summary: 'Nhiệt đới ẩm gió mùa, nhiệt độ >20°C, mưa >1500mm, phân hóa sâu sắc Bắc - Nam và theo độ cao',
      children: [
        { id: 'mm-804-tchat', label: 'Tính chất cốt lõi', summary: 'Nhiệt độ cao (>20°C), bức xạ lớn, độ ẩm >80%, mưa 1 500 - 2 000 mm' },
        { id: 'mm-804-giodongbac', label: 'Gió mùa Đông Bắc', summary: 'Tháng 11-4, áp cao Xibia, lạnh khô đầu mùa, lạnh ẩm mưa phùn cuối mùa, dừng ở Bạch Mã' },
        { id: 'mm-804-giotaynam', label: 'Gió mùa Tây Nam', summary: 'Tháng 5-10, nóng ẩm mưa nhiều, phơn khô nóng ở miền Trung' },
        { id: 'mm-804-phanhoa', label: 'Phân hóa khí hậu', summary: 'Phía Bắc có mùa đông lạnh; Phía Nam nóng quanh năm mưa - khô' }
      ]
    },
    comparisons: [
      {
        id: 'comp-804-1',
        conceptA: 'Gió mùa mùa đông (Gió mùa Đông Bắc)',
        conceptB: 'Gió mùa mùa hạ (Gió mùa Tây Nam)',
        comparisonTable: [
          { criteria: 'Thời gian hoạt động', conceptAVal: 'Tháng 11 đến tháng 4 năm sau', conceptBVal: 'Tháng 5 đến tháng 10 hàng năm' },
          { criteria: 'Nguồn gốc khối khí', conceptAVal: 'Áp cao lục địa Xi-bia (phương bắc)', conceptBVal: 'Áp cao vịnh Bengan và áp cao chí tuyến Nam bán cầu' },
          { criteria: 'Tính chất thời tiết', conceptAVal: 'Đầu mùa lạnh khô, nửa cuối mùa lạnh ẩm có mưa phùn', conceptBVal: 'Nóng ẩm gây mưa dông lớn, hiệu ứng phơn khô nóng miền Trung' },
          { criteria: 'Phạm vi ảnh hưởng', conceptAVal: 'Chỉ hoạt động mạnh ở miền Bắc, dừng lại ở Bạch Mã', conceptBVal: 'Hoạt động rộng khắp trên phạm vi cả nước' }
        ],
        commonConfusion: 'Học sinh hay nhầm gió mùa Đông Bắc hoạt động trên khắp cả nước đến tận mũi Cà Mau.',
        memoryRule: 'Mẹo nhớ: Đông Bắc lạnh buốt mùa đông dừng ở Bạch Mã; Tây Nam nóng ẩm mưa rào hè sang.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-804-1',
        questionText: 'Hiện tượng thời tiết đặc trưng ở vùng đồng bằng ven biển Bắc Bộ vào nửa cuối mùa đông (tháng 2 - 3) là gì?',
        options: [
          { id: 'A', text: 'Thời tiết lạnh ẩm và có mưa phùn' },
          { id: 'B', text: 'Thời tiết nắng nóng gay gắt và khô hạn' },
          { id: 'C', text: 'Mưa rào và dông bão giật mạnh' },
          { id: 'D', text: 'Thời tiết hanh khô nứt nẻ mặt đất' }
        ],
        correctAnswer: 'A',
        explanation: 'SGK Địa lí 8 trang 117 nêu rõ: Nửa cuối mùa đông, khối khí lệch qua biển nên tăng cường hơi ẩm, gây mưa phùn lạnh ẩm ở Bắc Bộ.',
        hint: 'Gió mùa Đông Bắc lệch qua biển.',
        knowledgeCardId: 'KC-804-2'
      }
    ]
  },

  'G8-L5': {
    lessonId: 'G8-L5',
    grade: 8,
    chapterId: 'G8-C2',
    chapterTitle: 'Chương 2. Khí hậu và thuỷ văn Việt Nam',
    lessonTitle: 'Bài 5: Thực hành: Đọc biểu đồ khí hậu',
    sgkPageRange: 'Trang 121 – 122',
    pdfPageRange: 'Trang 123 – 124',
    objectives: [
      'Xác định được các yếu tố biểu diễn trên biểu đồ khí hậu (nhiệt độ, lượng mưa).',
      'Đọc và tính toán được nhiệt độ tháng cao nhất, thấp nhất, biên độ nhiệt năm.',
      'Nhận xét được sự phân hóa mùa mưa và mùa khô giữa các trạm khí tượng Hà Nội, Huế, TP. Hồ Chí Minh.'
    ],
    knowledgeCards: [
      {
        id: 'KC-805-1',
        cardIndex: 1,
        title: 'Thẻ 1: Các bước đọc và phân tích biểu đồ khí hậu',
        concept: 'Đường nhiệt độ, cột lượng mưa, biên độ nhiệt',
        coreDefinition: 'Biểu đồ khí hậu kết hợp đường biểu diễn nhiệt độ (°C) và cột biểu diễn lượng mưa (mm) qua 12 tháng.',
        keyPoints: [
          'Trục tung bên trái thường là thang đo nhiệt độ (°C); Trục tung bên phải là thang đo lượng mưa (mm); Trục hoành là 12 tháng trong năm.',
          'Nhiệt độ: Xác định tháng có nhiệt độ cao nhất, tháng có nhiệt độ thấp nhất; Tính biên độ nhiệt năm = Nhiệt độ tháng cao nhất - Nhiệt độ tháng thấp nhất.',
          'Lượng mưa: Tính tổng lượng mưa năm bằng cách cộng lượng mưa cả 12 tháng; Xác định các tháng mùa mưa (lượng mưa thường >100 mm/tháng) và tháng mùa khô.'
        ],
        visualExample: 'Biểu đồ nhiệt độ - lượng mưa của trạm Hà Nội và TP. Hồ Chí Minh (SGK tr. 121).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 8 – Kết nối tri thức', bookPage: 121, pdfPage: 123, section: 'Mục Các bước thực hành' },
        commonTrapAlert: 'Bẫy đọc biểu đồ: Nhầm lẫn giữa trục thang đo nhiệt độ (°C) và thang đo lượng mưa (mm).',
        iconName: 'BarChart3'
      },
      {
        id: 'KC-805-2',
        cardIndex: 2,
        title: 'Thẻ 2: So sánh đặc trưng khí hậu ba miền qua biểu đồ',
        concept: 'Trạm Hà Nội, trạm Huế, trạm TP. Hồ Chí Minh',
        coreDefinition: 'Số liệu biểu đồ phản ánh sự khác biệt sâu sắc giữa khí hậu miền Bắc, miền Trung và miền Nam.',
        keyPoints: [
          'Trạm Hà Nội (miền Bắc): Có mùa đông lạnh (nhiệt độ tháng 1 <18°C), biên độ nhiệt năm lớn (~12°C), mùa mưa vào mùa hạ (tháng 5 - 10).',
          'Trạm Huế (miền Trung): Mùa mưa lệch hẳn về thu - đông (mưa cực đại vào tháng 10, 11 do bão, dải hội tụ nhiệt đới và gió đông bắc gặp Trường Sơn).',
          'Trạm TP. Hồ Chí Minh (miền Nam): Nhiệt độ cao quanh năm (>26°C), biên độ nhiệt năm nhỏ (<4°C), phân hóa 2 mùa mưa - khô tương phản sâu sắc.'
        ],
        visualExample: 'Biểu đồ khí hậu trạm Huế với cột mưa tháng 10, 11 vọt lên rất cao (SGK tr. 122).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 8 – Kết nối tri thức', bookPage: 122, pdfPage: 124, section: 'Mục Nhận xét biểu đồ' },
        commonTrapAlert: 'Bẫy mùa mưa miền Trung: Nghĩ rằng Huế cũng mưa nhiều nhất vào mùa hạ như Hà Nội (Huế mưa nhiều nhất vào tháng 10 - 11).',
        iconName: 'TrendingUp'
      }
    ],
    mindmap: {
      id: 'mm-805-root',
      label: 'Kĩ năng đọc biểu đồ khí hậu',
      summary: 'Đọc đường nhiệt độ, cột mưa, so sánh đặc trưng khí hậu Hà Nội (đông lạnh), Huế (mưa thu đông), TP.HCM (nóng quanh năm)',
      children: [
        { id: 'mm-805-hanoi', label: 'Trạm Hà Nội', summary: 'Mùa đông lạnh tháng 1 <18°C, biên độ nhiệt lớn 12°C' },
        { id: 'mm-805-hue', label: 'Trạm Huế', summary: 'Mưa cực đại vào thu đông (tháng 10 - 11), lượng mưa rất lớn' },
        { id: 'mm-805-hcm', label: 'Trạm TP.HCM', summary: 'Nóng quanh năm >26°C, biên độ nhiệt <4°C, 2 mùa mưa - khô sâu sắc' }
      ]
    },
    comparisons: [
      {
        id: 'comp-805-1',
        conceptA: 'Khí hậu trạm Hà Nội (miền Bắc)',
        conceptB: 'Khí hậu trạm TP. Hồ Chí Minh (miền Nam)',
        comparisonTable: [
          { criteria: 'Nhiệt độ tháng thấp nhất', conceptAVal: 'Xuống dưới 18°C vào tháng 1 (có mùa đông lạnh)', conceptBVal: 'Luôn trên 25 - 26°C quanh năm (không có mùa đông lạnh)' },
          { criteria: 'Biên độ nhiệt năm', conceptAVal: 'Lớn (khoảng 12°C - 13°C)', conceptBVal: 'Rất nhỏ (khoảng 3°C - 4°C)' },
          { criteria: 'Chế độ mưa', conceptAVal: 'Mưa tập trung vào mùa hạ (tháng 5 - 10)', conceptBVal: 'Mùa mưa từ tháng 5 - 11, mùa khô sâu sắc tháng 12 - 4' }
        ],
        commonConfusion: 'Học sinh thường nhầm biên độ nhiệt năm ở TP.HCM lớn hơn Hà Nội.',
        memoryRule: 'Mẹo nhớ: Hà Nội có mùa đông lạnh nên biên độ nhiệt lớn; TP.HCM nóng đều quanh năm nên biên độ nhiệt nhỏ.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-805-1',
        questionText: 'Điểm khác biệt nổi bật nhất về mùa mưa của trạm khí tượng Huế so với Hà Nội và TP. Hồ Chí Minh là gì?',
        options: [
          { id: 'A', text: 'Mùa mưa lệch hẳn về các tháng thu - đông (tháng 9 đến tháng 12)' },
          { id: 'B', text: 'Mưa nhiều nhất vào các tháng đầu năm (tháng 1 đến tháng 3)' },
          { id: 'C', text: 'Quanh năm không có mùa mưa' },
          { id: 'D', text: 'Mưa tập trung hoàn toàn vào tháng 6 và tháng 7' }
        ],
        correctAnswer: 'A',
        explanation: 'Do ảnh hưởng của dải hội tụ nhiệt đới, bão và gió mùa Đông Bắc đi qua biển gặp sườn đón gió Trường Sơn, Huế có mùa mưa lệch về thu - đông (tháng 9 - 12).',
        hint: 'Mùa mưa lùi về thu đông.',
        knowledgeCardId: 'KC-805-2'
      }
    ]
  },

  'G8-L6': {
    lessonId: 'G8-L6',
    grade: 8,
    chapterId: 'G8-C2',
    chapterTitle: 'Chương 2. Khí hậu và thuỷ văn Việt Nam',
    lessonTitle: 'Bài 6: Thuỷ văn Việt Nam',
    sgkPageRange: 'Trang 123 – 128',
    pdfPageRange: 'Trang 125 – 130',
    objectives: [
      'Trình bày được 4 đặc điểm cơ bản của sông ngòi Việt Nam.',
      'Giải thích được mối quan hệ giữa chế độ nước sông với khí hậu nhiệt đới ẩm gió mùa.',
      'Nêu được đặc điểm hồ, đầm và nước ngầm ở nước ta.'
    ],
    knowledgeCards: [
      {
        id: 'KC-806-1',
        cardIndex: 1,
        title: 'Thẻ 1: Bốn đặc điểm cơ bản của Sông ngòi Việt Nam',
        concept: '2 360 con sông, 2 hướng chính, nhiều nước giàu phù sa, chế độ theo mùa',
        coreDefinition: 'Sông ngòi nước ta mang đặc trưng của địa hình và khí hậu nhiệt đới ẩm gió mùa.',
        keyPoints: [
          'Mạng lưới dày đặc: Có tới 2 360 con sông dài trên 10 km; cứ 20 km đường bờ biển lại có 1 cửa sông đổ ra biển. Phần lớn là sông nhỏ, ngắn và dốc.',
          'Hai hướng chảy chính: Hướng Tây Bắc - Đông Nam (sông Hồng, sông Đà, sông Tiền, sông Hậu) và Hướng Vòng cung (sông Lô, sông Gâm, sông Cầu).',
          'Nhiều nước, giàu phù sa: Tổng lượng dòng chảy trên 830 tỉ m³/năm (trong đó 60% lượng nước từ lãnh thổ nước ngoài chảy vào). Tổng lượng phù sa vận chuyển đạt trên 200 triệu tấn/năm (sông Hồng bồi đắp phù sa lớn nhất).',
          'Chế độ nước theo mùa: Mùa lũ trùng mùa mưa (chiếm 70 - 80% tổng lượng nước cả năm); mùa cạn trùng mùa khô.'
        ],
        visualExample: 'Lược đồ mạng lưới sông ngòi Việt Nam với các lưu vực sông lớn (SGK tr. 124).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 8 – Kết nối tri thức', bookPage: 124, pdfPage: 126, section: 'Mục 1. Đặc điểm sông ngòi' },
        commonTrapAlert: 'Bẫy số liệu: Quên rằng 60% lượng nước sông ngòi nước ta bắt nguồn từ ngoài lãnh thổ (Trung Quốc, Lào, Cam-pu-chia).',
        iconName: 'Waves'
      },
      {
        id: 'KC-806-2',
        cardIndex: 2,
        title: 'Thẻ 2: Hệ thống hồ đầm và nước ngầm',
        concept: 'Hồ tự nhiên, hồ nhân tạo, vai trò điều hòa nguồn nước',
        coreDefinition: 'Hồ đầm và nước ngầm là nguồn tài nguyên nước ngọt dự trữ quan trọng của quốc gia.',
        keyPoints: [
          'Hồ tự nhiên: Gồm hồ móng ngựa hình thành từ khúc uốn sông cũ (Hồ Tây), hồ kiến tạo miền núi (hồ Ba Bể - Bắc Kạn), hồ miệng núi lửa cũ (Biển Hồ - Gia Lai).',
          'Hồ nhân tạo: Xây dựng nhằm mục đích thủy điện, thủy lợi cắt lũ và cấp nước sinh hoạt: Hồ Hòa Bình (sông Đà), hồ Thác Bà (sông Chảy), hồ Dầu Tiếng (sông Sài Gòn - lớn nhất nước).',
          'Nước ngầm: Nguồn dự trữ dồi dào ở đồng bằng và cao nguyên bazan Tây Nguyên, cần được bảo vệ chống ô nhiễm và cạn kiệt tầng sâu.'
        ],
        visualExample: 'Hình ảnh hồ Ba Bể trên vùng núi đá vôi Bắc Kạn (SGK tr. 126).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 8 – Kết nối tri thức', bookPage: 126, pdfPage: 128, section: 'Mục 2. Hồ, đầm và nước ngầm' },
        commonTrapAlert: 'Bẫy phân loại: Nhầm hồ Dầu Tiếng là hồ tự nhiên (hồ Dầu Tiếng là hồ nhân tạo lớn nhất nước ta).',
        iconName: 'Droplets'
      }
    ],
    mindmap: {
      id: 'mm-806-root',
      label: 'Thủy văn Việt Nam',
      summary: '2 360 con sông, hướng TB-ĐN và Vòng cung, giàu phù sa (>200 triệu tấn), lũ theo mùa, hồ đầm phong phú',
      children: [
        { id: 'mm-806-song', label: 'Hệ thống sông ngòi', summary: 'Dày đặc, 60% nước ngoại lai, phù sa màu mỡ' },
        { id: 'mm-806-chedo', label: 'Chế độ nước', summary: 'Mùa lũ trùng mùa mưa (70-80%), mùa cạn trùng mùa khô' },
        { id: 'mm-806-ho', label: 'Hồ đầm', summary: 'Tự nhiên (Ba Bể, Hồ Tây) và nhân tạo (Hòa Bình, Dầu Tiếng)' },
        { id: 'mm-806-ngam', label: 'Nước ngầm', summary: 'Phong phú ở ĐBSH, ĐBSCL và cao nguyên bazan' }
      ]
    },
    comparisons: [
      {
        id: 'comp-806-1',
        conceptA: 'Sông ngòi miền Bắc (hệ thống sông Hồng)',
        conceptB: 'Sông ngòi miền Trung',
        comparisonTable: [
          { criteria: 'Mạng lưới dòng chảy', conceptAVal: 'Lưu vực rộng lớn hình nan quạt, nhiều phụ lưu hợp lưu', conceptBVal: 'Sông ngắn, nhỏ, hẹp ngang, dốc đứng từ núi đổ ra biển' },
          { criteria: 'Mùa lũ trong năm', conceptAVal: 'Mùa lũ trùng mùa hạ (tháng 6 - tháng 10)', conceptBVal: 'Mùa lũ lùi về thu - đông (tháng 9 - tháng 12)' },
          { criteria: 'Tính chất con lũ', conceptAVal: 'Lũ lên nhanh do hợp lưu của sông Đà, Thao, Lô', conceptBVal: 'Lũ lên rất nhanh, đột ngột, lũ quét và rút nhanh ra biển' }
        ],
        commonConfusion: 'Học sinh thường nghĩ mùa lũ của tất cả sông ngòi trên cả nước đều diễn ra vào mùa hạ.',
        memoryRule: 'Mẹo nhớ: Sông miền Bắc lũ mùa hạ lưu vực nan quạt; Sông miền Trung dốc ngắn lũ thu đông dữ dội.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-806-1',
        questionText: 'Tại sao sông ngòi nước ta có lượng nước chảy xiết và chế độ lũ phân theo mùa rất rõ rệt?',
        options: [
          { id: 'A', text: 'Do nguồn cấp nước chính là nước mưa và khí hậu có hai mùa mưa - khô rõ rệt' },
          { id: 'B', text: 'Do nước ngầm phun trào định kì vào mùa hè' },
          { id: 'C', text: 'Do nước băng tuyết trên đỉnh Hoàng Liên Sơn tan ra' },
          { id: 'D', text: 'Do thủy triều đại dương dâng lên tràn vào thượng nguồn' }
        ],
        correctAnswer: 'A',
        explanation: 'Khí hậu nước ta có mùa mưa và mùa khô rõ rệt, nguồn cấp nước chủ yếu cho sông là nước mưa nên chế độ nước sông nhịp nhàng theo mùa khí hậu.',
        hint: 'Nước mưa là nguồn cấp chủ yếu.',
        knowledgeCardId: 'KC-806-1'
      }
    ]
  },

  'G8-L7': {
    lessonId: 'G8-L7',
    grade: 8,
    chapterId: 'G8-C2',
    chapterTitle: 'Chương 2. Khí hậu và thuỷ văn Việt Nam',
    lessonTitle: 'Bài 7: Vai trò của tài nguyên khí hậu và tài nguyên nước đối với sự phát triển kinh tế – xã hội của nước ta',
    sgkPageRange: 'Trang 129 – 132',
    pdfPageRange: 'Trang 131 – 134',
    objectives: [
      'Phân tích được vai trò của tài nguyên khí hậu đối với nông nghiệp và du lịch.',
      'Phân tích được vai trò của tài nguyên nước đối với sản xuất sinh hoạt và thủy điện.',
      'Đề xuất các biện pháp sử dụng hợp lí tài nguyên khí hậu và tài nguyên nước.'
    ],
    knowledgeCards: [
      {
        id: 'KC-807-1',
        cardIndex: 1,
        title: 'Thẻ 1: Vai trò của tài nguyên khí hậu trong kinh tế',
        concept: 'Nông nghiệp nhiệt đới, đa dạng hóa cây trồng, du lịch nghỉ dưỡng',
        coreDefinition: 'Khí hậu nhiệt đới ẩm gió mùa tạo tiền đề phát triển nền nông nghiệp thâm canh nhiệt đới quanh năm.',
        keyPoints: [
          'Nông nghiệp: Nhiệt độ cao, ẩm dồi dào cho phép cấy lúa 2-3 vụ/năm, xen canh gối vụ liên tục.',
          'Cơ cấu sản phẩm đa dạng: Ngoài cây nhiệt đới chủ lực (lúa gạo, cà phê, cao su), mùa đông lạnh ở miền Bắc và vùng núi cao cho phép trồng cây cận nhiệt và ôn đới (rau vụ đông, su hào, bắp cải, chè, táo, lê).',
          'Du lịch: Khí hậu phân hóa đai cao tạo ra các điểm du lịch nghỉ dưỡng lí tưởng: Sa Pa, Tam Đảo, Bà Nà, Đà Lạt.'
        ],
        visualExample: 'Hình ảnh cánh đồng rau ôn đới vụ đông ở miền Bắc và đồi chè Sa Pa (SGK tr. 130).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 8 – Kết nối tri thức', bookPage: 130, pdfPage: 132, section: 'Mục 1. Vai trò tài nguyên khí hậu' },
        commonTrapAlert: 'Bẫy thường gặp: Bỏ quên thế mạnh trồng rau vụ đông có nguồn gốc cận nhiệt và ôn đới ở miền Bắc nước ta.',
        iconName: 'Sun'
      },
      {
        id: 'KC-807-2',
        cardIndex: 2,
        title: 'Thẻ 2: Vai trò của tài nguyên nước và thủy năng',
        concept: 'Tưới tiêu nông nghiệp, thủy điện, giao thông đường thủy',
        coreDefinition: 'Tài nguyên nước mặt và nước ngầm là tư liệu sản xuất thiết yếu cho nền kinh tế quốc dân.',
        keyPoints: [
          'Thủy lợi và nông nghiệp: Cung cấp nước tưới cho hàng triệu héc-ta lúa nước và cây công nghiệp.',
          'Tiềm năng thủy điện: Các hệ thống sông dốc có tiềm năng thủy điện khổng lồ: Nhà máy thủy điện Sơn La (2 400 MW), Hòa Bình, Lai Châu, Y-a-ly.',
          'Giao thông và thủy sản: Tuyến giao thông thủy quan trọng ở ĐBSCL và ĐBSH; nuôi trồng thủy sản nước ngọt lồng bè.',
          'Thách thức: Mùa khô thiếu nước xâm nhập mặn; ô nhiễm nguồn nước do xả thải sinh hoạt và công nghiệp.'
        ],
        visualExample: 'Nhà máy thủy điện Sơn La lớn nhất Đông Nam Á trên sông Đà (SGK tr. 131).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 8 – Kết nối tri thức', bookPage: 131, pdfPage: 133, section: 'Mục 2. Vai trò tài nguyên nước' },
        commonTrapAlert: 'Bẫy tư duy: Nghĩ rằng nước ta thừa nước quanh năm nên không cần lo lắng thiếu nước (thực tế mùa khô hạn hán và xâm nhập mặn rất gay gắt).',
        iconName: 'Droplets'
      }
    ],
    mindmap: {
      id: 'mm-807-root',
      label: 'Vai trò khí hậu & tài nguyên nước',
      summary: 'Khí hậu: Nông nghiệp nhiệt đới quanh năm + cây vụ đông + du lịch nghỉ dưỡng | Nước: Thủy lợi, thủy điện Sơn La, giao thông',
      children: [
        { id: 'mm-807-kh-nn', label: 'Khí hậu trong Nông nghiệp', summary: 'Thâm canh lúa vụ quanh năm, cây nhiệt đới + rau củ quả vụ đông' },
        { id: 'mm-807-kh-dl', label: 'Khí hậu trong Du lịch', summary: 'Nghỉ dưỡng vùng núi cao mát mẻ: Sa Pa, Tam Đảo, Đà Lạt' },
        { id: 'mm-807-nuoc-td', label: 'Nước trong Thủy điện', summary: 'Thủy điện Sơn La (2 400 MW), Hòa Bình trên hệ thống sông Đà' },
        { id: 'mm-807-nuoc-tl', label: 'Nước trong Thủy lợi', summary: 'Cung cấp nước tưới cho ĐBSH và ĐBSCL' }
      ]
    },
    comparisons: [
      {
        id: 'comp-807-1',
        conceptA: 'Cơ cấu cây trồng mùa hạ (mùa mưa)',
        conceptB: 'Cơ cấu cây trồng vụ đông ở miền Bắc',
        comparisonTable: [
          { criteria: 'Nguồn gốc cây trồng', conceptAVal: 'Cây trồng nhiệt đới ưa nhiệt ẩm cao (lúa nước, ngô, đậu)', conceptBVal: 'Cây có nguồn gốc cận nhiệt và ôn đới (bắp cải, su hào, khoai tây, cà rốt)' },
          { criteria: 'Điều kiện thời tiết', conceptAVal: 'Nhiệt độ cao (>28°C), mưa nhiều', conceptBVal: 'Nhiệt độ hạ thấp dưới 18°C do gió mùa Đông Bắc' },
          { criteria: 'Hiệu quả kinh tế', conceptAVal: 'Bảo đảm an ninh lương thực chính', conceptBVal: 'Nâng cao giá trị nông sản và thu nhập kinh tế hộ gia đình' }
        ],
        commonConfusion: 'Nghĩ rằng mùa đông lạnh miền Bắc chỉ gây thiệt hại mà không mang lại cơ hội sản xuất rau củ quả ôn đới.',
        memoryRule: 'Mẹo nhớ: Mùa hạ lúa nước nhiệt đới; Mùa đông miền Bắc rau ôn đới xuất khẩu.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-807-1',
        questionText: 'Đặc điểm khí hậu nào tạo điều kiện cho miền Bắc nước ta phát triển vụ đông thành vụ sản xuất chính?',
        options: [
          { id: 'A', text: 'Có mùa đông lạnh chịu ảnh hưởng của gió mùa Đông Bắc' },
          { id: 'B', text: 'Có nhiệt độ nóng quanh năm trên 35°C' },
          { id: 'C', text: 'Quanh năm chỉ có gió mùa Tây Nam nóng ẩm' },
          { id: 'D', text: 'Không bao giờ có gió mùa hoạt động' }
        ],
        correctAnswer: 'A',
        explanation: 'Nhờ có mùa đông lạnh từ tháng 11 đến tháng 4 năm sau, miền Bắc có thể trồng được các loại rau màu có nguồn gốc cận nhiệt và ôn đới.',
        hint: 'Mùa đông lạnh do gió mùa Đông Bắc.',
        knowledgeCardId: 'KC-807-1'
      }
    ]
  },

  'G8-L8': {
    lessonId: 'G8-L8',
    grade: 8,
    chapterId: 'G8-C2',
    chapterTitle: 'Chương 2. Khí hậu và thuỷ văn Việt Nam',
    lessonTitle: 'Bài 8: Tác động của biến đổi khí hậu đối với tự nhiên Việt Nam',
    sgkPageRange: 'Trang 133 – 136',
    pdfPageRange: 'Trang 135 – 138',
    objectives: [
      'Phân tích được các biểu hiện của biến đổi khí hậu ở Việt Nam (nhiệt độ tăng, thời tiết cực đoan, nước biển dâng).',
      'Đánh giá được tác động của biến đổi khí hậu đối với khí hậu, thủy văn và hệ sinh thái.',
      'Nêu được các giải pháp thích ứng và giảm nhẹ biến đổi khí hậu.'
    ],
    knowledgeCards: [
      {
        id: 'KC-808-1',
        cardIndex: 1,
        title: 'Thẻ 1: Ba biểu hiện lớn của Biến đổi khí hậu ở Việt Nam',
        concept: 'Nhiệt độ tăng, thiên tai cực đoan, mực nước biển dâng',
        coreDefinition: 'Việt Nam là một trong những quốc gia chịu ảnh hưởng nặng nề nhất của biến đổi khí hậu toàn cầu.',
        keyPoints: [
          'Nhiệt độ không khí tăng: Nhiệt độ trung bình năm có xu hướng tăng từ 0,5°C - 0,8°C trong những thập kỉ qua; các đợt nắng nóng gay gắt kéo dài hơn.',
          'Gia tăng thiên tai dị thường: Bão mạnh trái quy luật, mưa lớn cực đoan gây ngập lụt đô thị, lũ quét sạt lở đất miền núi, hạn hán kéo dài ở miền Trung và Tây Nguyên.',
          'Nước biển dâng: Mực nước biển ven bờ dâng cao đe dọa làm ngập lụt diện tích lớn đất canh tác ở Đồng bằng sông Cửu Long và xâm nhập mặn sâu vào đất liền.'
        ],
        visualExample: 'Bản đồ nguy cơ ngập lụt do nước biển dâng 1m ở Đồng bằng sông Cửu Long (SGK tr. 134).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 8 – Kết nối tri thức', bookPage: 134, pdfPage: 136, section: 'Mục 1. Biểu hiện của biến đổi khí hậu' },
        commonTrapAlert: 'Bẫy thường gặp: Nhầm lẫn giữa "thích ứng" (sống chung và điều chỉnh thích nghi) và "giảm nhẹ" (cắt giảm khí thải nhà kính).',
        iconName: 'AlertTriangle'
      },
      {
        id: 'KC-808-2',
        cardIndex: 2,
        title: 'Thẻ 2: Giải pháp ứng phó: Thích ứng và Giảm nhẹ',
        concept: 'Chuyển đổi mùa vụ, rừng ngập mặn, năng lượng tái tạo',
        coreDefinition: 'Ứng phó biến đổi khí hậu phải thực hiện song hành hai nhóm giải pháp: thích ứng và giảm nhẹ.',
        keyPoints: [
          'Nhóm giải pháp Thích ứng (chủ động sống chung): Chuyển đổi cơ cấu cây trồng chịu hạn mặn; quy hoạch lại khu dân cư tránh vùng sạt lở; trồng rừng ngập mặn chắn sóng bảo vệ đê biển.',
          'Nhóm giải pháp Giảm nhẹ (giảm phát thải): Phát triển năng lượng tái tạo (điện gió, điện mặt trời); trồng và phục hồi rừng đầu nguồn để hấp thụ carbon; sử dụng phương tiện giao thông xanh tiết kiệm năng lượng.',
          'Ý thức cá nhân: Tiết kiệm điện nước, trồng cây xanh, không vứt rác thải nhựa bừa bãi.'
        ],
        visualExample: 'Mô hình điện gió ven biển Bạc Liêu và rừng đước ngập mặn Cà Mau (SGK tr. 136).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 8 – Kết nối tri thức', bookPage: 136, pdfPage: 138, section: 'Mục 2. Giải pháp ứng phó' },
        commonTrapAlert: 'Bẫy khái niệm: Trồng rừng ngập mặn vừa giúp giảm nhẹ (hấp thụ CO2) vừa giúp thích ứng (chắn sóng gió bão).',
        iconName: 'Shield'
      }
    ],
    mindmap: {
      id: 'mm-808-root',
      label: 'Biến đổi khí hậu tại Việt Nam',
      summary: 'Biểu hiện: Nhiệt độ tăng, thiên tai cực đoan, nước biển dâng | Ứng phó: Thích ứng (chuyển đổi mùa vụ, đê biển) & Giảm nhẹ (năng lượng tái tạo, trồng rừng)',
      children: [
        { id: 'mm-808-bieuhien', label: 'Biểu hiện', summary: 'Nhiệt độ tăng, bão mạnh bất thường, hạn mặn ĐBSCL' },
        { id: 'mm-808-tacdong', label: 'Tác động', summary: 'Ngập lụt đồng bằng, sạt lở miền núi, suy thoái hệ sinh thái san hô' },
        { id: 'mm-808-thichung', label: 'Thích ứng', summary: 'Chuyển đổi cây trồng, sống chung với hạn mặn, rừng ngập mặn' },
        { id: 'mm-808-giamnhe', label: 'Giảm nhẹ', summary: 'Điện gió, điện mặt trời, tiết kiệm năng lượng' }
      ]
    },
    comparisons: [
      {
        id: 'comp-808-1',
        conceptA: 'Giải pháp Thích ứng biến đổi khí hậu',
        conceptB: 'Giải pháp Giảm nhẹ biến đổi khí hậu',
        comparisonTable: [
          { criteria: 'Mục tiêu chính', conceptAVal: 'Hạn chế tối đa thiệt hại và tận dụng cơ hội do khí hậu thay đổi mang lại', conceptBVal: 'Ngăn chặn nguyên nhân gây biến đổi khí hậu bằng cách cắt giảm khí thải nhà kính' },
          { criteria: 'Hành động cụ thể', conceptAVal: 'Đắp đê ngăn mặn, chuyển đổi giống lúa chịu mặn, quy hoạch tránh sạt lở', conceptBVal: 'Phát triển điện gió, điện mặt trời, đi xe bus điện, trồng rừng hấp thụ carbon' },
          { criteria: 'Phạm vi thời gian', conceptAVal: 'Tác động trực tiếp trước mắt và trung hạn cho từng địa phương', conceptBVal: 'Tác động lâu dài mang tính toàn cầu và bền vững' }
        ],
        commonConfusion: 'Học sinh hay nhầm lẫn giữa hai khái niệm thích ứng và giảm nhẹ.',
        memoryRule: 'Mẹo nhớ: Thích ứng là điều chỉnh để sống an toàn; Giảm nhẹ là giảm phát thải để Trái Đất không nóng lên.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-808-1',
        questionText: 'Hành động nào sau đây thuộc nhóm giải pháp "Giảm nhẹ" biến đổi khí hậu?',
        options: [
          { id: 'A', text: 'Chuyển đổi sang sử dụng năng lượng gió và năng lượng mặt trời' },
          { id: 'B', text: 'Đắp đê ngăn mặn bảo vệ đồng ruộng' },
          { id: 'C', text: 'Di dời người dân khỏi vùng sạt lở đất' },
          { id: 'D', text: 'Mua sắm áo phao dự trữ mùa lũ lụt' }
        ],
        correctAnswer: 'A',
        explanation: 'Sử dụng năng lượng gió và mặt trời giúp thay thế nhiên liệu hóa thạch, trực tiếp cắt giảm phát thải CO2 gây hiệu ứng nhà kính nên thuộc nhóm giải pháp giảm nhẹ.',
        hint: 'Cắt giảm phát thải khí nhà kính.',
        knowledgeCardId: 'KC-808-2'
      }
    ]
  },

  'G8-L9': {
    lessonId: 'G8-L9',
    grade: 8,
    chapterId: 'G8-C3',
    chapterTitle: 'Chương 3. Thổ nhưỡng và sinh vật Việt Nam',
    lessonTitle: 'Bài 9: Thổ nhưỡng Việt Nam',
    sgkPageRange: 'Trang 137 – 141',
    pdfPageRange: 'Trang 139 – 143',
    objectives: [
      'Trình bày được đặc điểm của 3 nhóm đất chính ở nước ta: đất feralit, đất phù sa, đất mùn núi cao.',
      'Xác định được sự phân bố của đất feralit trên đá bazan, đất feralit trên đá vôi và đất phù sa sông.',
      'Phân tích được tính cấp thiết của vấn đề chống thoái hóa đất ở nước ta.'
    ],
    knowledgeCards: [
      {
        id: 'KC-809-1',
        cardIndex: 1,
        title: 'Thẻ 1: Ba nhóm đất chính ở Việt Nam',
        concept: 'Đất Feralit (65%), Đất Phù sa (24%), Đất Mùn núi cao (11%)',
        coreDefinition: 'Thổ nhưỡng nước ta đa dạng, nhóm đất feralit ở đồi núi chiếm diện tích lớn nhất.',
        keyPoints: [
          'Nhóm đất Feralit (chiếm 65% diện tích tự nhiên): Phân bố ở vùng đồi núi thấp. Hình thành do quá trình phong hóa nhiệt đới ẩm, tích tụ oxit sắt và oxit nhôm tạo màu đỏ vàng đặc trưng; chua và nghèo mùn.',
          'Hai loại đất feralit tốt nhất: Đất feralit trên đá bazan (ở Tây Nguyên, Đông Nam Bộ) và đất feralit trên đá vôi (ở Tây Bắc, Đông Bắc) tầng đất dày, tơi xốp, rất màu mỡ trồng cây công nghiệp.',
          'Nhóm đất Phù sa (chiếm 24% diện tích): Phân bố ở đồng bằng châu thổ (sông Hồng, sông Cửu Long) và duyên hải miền Trung, phì nhiêu cấy lúa nước.',
          'Nhóm đất Mùn núi cao (chiếm 11% diện tích): Ở độ cao trên 1 600 - 1 700 m, khí hậu lạnh nên giàu mùn, thích hợp trồng rừng phòng hộ.'
        ],
        visualExample: 'Lược đồ phân bố các nhóm đất chính tại Việt Nam (SGK tr. 138).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 8 – Kết nối tri thức', bookPage: 138, pdfPage: 140, section: 'Mục 1. Các nhóm đất chính' },
        commonTrapAlert: 'Bẫy thường gặp: Cho rằng tất cả đất feralit đều xấu (đất feralit trên đá bazan và đá vôi rất màu mỡ và có giá trị kinh tế hàng đầu).',
        iconName: 'Layers'
      },
      {
        id: 'KC-809-2',
        cardIndex: 2,
        title: 'Thẻ 2: Vấn đề chống thoái hóa đất',
        concept: 'Rửa trôi xói mòn ở đồi núi, phèn mặn ở đồng bằng',
        coreDefinition: 'Bảo vệ độ phì và chống thoái hóa đất là nhiệm vụ sống còn của nông nghiệp nước ta.',
        keyPoints: [
          'Nguyên nhân thoái hóa: Mưa lớn tập trung làm xói mòn, rửa trôi mạnh đất trơ trọi mất lớp phủ thực vật ở đồi núi; lạm dụng phân bón hóa học làm đất chua hóa; khô hạn làm đất đồng bằng bị nhiễm mặn, nhiễm phèn.',
          'Biện pháp bảo vệ ở đồi núi: Trồng rừng đầu nguồn, làm ruộng bậc thang, canh tác nông - lâm kết hợp, trồng băng cây chắn gió.',
          'Biện pháp ở đồng bằng: Thau chua rửa mặn, bón vôi cải tạo đất, luân canh hợp lí và tăng cường bón phân hữu cơ vi sinh.'
        ],
        visualExample: 'Hình ảnh ruộng bậc thang Mù Cang Chải chống xói mòn đất đồi dốc (SGK tr. 140).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 8 – Kết nối tri thức', bookPage: 140, pdfPage: 142, section: 'Mục 2. Chống thoái hóa đất' },
        commonTrapAlert: 'Bẫy câu hỏi: Phá rừng làm nương rẫy là nguyên nhân hàng đầu khiến đất đồi núi bị xói mòn rửa trôi trơ sỏi đá.',
        iconName: 'ShieldAlert'
      }
    ],
    mindmap: {
      id: 'mm-809-root',
      label: 'Thổ nhưỡng Việt Nam',
      summary: 'Feralit 65% (đồi núi, cây công nghiệp), Phù sa 24% (đồng bằng, lúa nước), Mùn núi cao 11% | Chống thoái hóa đất',
      children: [
        { id: 'mm-809-feralit', label: 'Đất Feralit (65%)', summary: 'Đỏ vàng, chua; Tốt nhất là feralit trên đá bazan (Tây Nguyên) và đá vôi' },
        { id: 'mm-809-phusa', label: 'Đất Phù sa (24%)', summary: 'ĐBSH, ĐBSCL phì nhiêu, cấy lúa nước và cây ăn quả' },
        { id: 'mm-809-mun', label: 'Đất Mùn núi cao (11%)', summary: 'Độ cao >1 600m, nhiều mùn, rừng đầu nguồn' },
        { id: 'mm-809-chongthoaihoa', label: 'Chống thoái hóa đất', summary: 'Ruộng bậc thang, trồng rừng, bón phân hữu cơ, thau chua rửa mặn' }
      ]
    },
    comparisons: [
      {
        id: 'comp-809-1',
        conceptA: 'Đất Feralit (vùng đồi núi)',
        conceptB: 'Đất Phù sa (vùng đồng bằng)',
        comparisonTable: [
          { criteria: 'Tỉ lệ diện tích', conceptAVal: 'Chiếm tới 65% diện tích tự nhiên cả nước', conceptBVal: 'Chiếm khoảng 24% diện tích tự nhiên cả nước' },
          { criteria: 'Quá trình hình thành', conceptAVal: 'Phong hóa mạnh dưới nhiệt ẩm, rửa trôi kiềm, tích tụ sắt nhôm', conceptBVal: 'Do sông ngòi bồi đắp vật liệu phù sa qua hàng nghìn năm' },
          { criteria: 'Cơ cấu cây trồng', conceptAVal: 'Cây công nghiệp lâu năm (cà phê, cao su, chè, tiêu, điều)', conceptBVal: 'Cây lương thực (lúa gạo), rau màu và cây ăn quả ngắn ngày' }
        ],
        commonConfusion: 'Học sinh thường nhầm đất phù sa chiếm diện tích lớn hơn đất feralit.',
        memoryRule: 'Mẹo nhớ: Feralit đồi núi chiếm 65% trồng cây công nghiệp; Phù sa đồng bằng chiếm 24% cấy lúa.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-809-1',
        questionText: 'Loại đất nào sau đây thuộc nhóm đất feralit có độ phì cao nhất và phân bố tập trung nhiều nhất ở vùng Tây Nguyên?',
        options: [
          { id: 'A', text: 'Đất feralit hình thành trên đá bazan' },
          { id: 'B', text: 'Đất phù sa sông cổ' },
          { id: 'C', text: 'Đất mặn ven biển' },
          { id: 'D', text: 'Đất cát pha ven biển' }
        ],
        correctAnswer: 'A',
        explanation: 'Đất feralit hình thành trên đá bazan màu mỡ, tầng phong hóa sâu, tơi xốp, giàu dưỡng chất phân bố nhiều nhất ở Tây Nguyên và Đông Nam Bộ.',
        hint: 'Đá mẹ bazan màu đỏ nâu.',
        knowledgeCardId: 'KC-809-1'
      }
    ]
  },

  'G8-L10': {
    lessonId: 'G8-L10',
    grade: 8,
    chapterId: 'G8-C3',
    chapterTitle: 'Chương 3. Thổ nhưỡng và sinh vật Việt Nam',
    lessonTitle: 'Bài 10: Sinh vật Việt Nam',
    sgkPageRange: 'Trang 142 – 146',
    pdfPageRange: 'Trang 144 – 148',
    objectives: [
      'Chứng minh được sinh vật nước ta phong phú và đa dạng về thành phần loài, gen và hệ sinh thái.',
      'Trình bày được thực trạng suy giảm đa dạng sinh học ở Việt Nam.',
      'Nêu được các giải pháp cấp bách bảo tồn và phát triển đa dạng sinh học.'
    ],
    knowledgeCards: [
      {
        id: 'KC-810-1',
        cardIndex: 1,
        title: 'Thẻ 1: Tính đa dạng sinh học cao của Việt Nam',
        concept: 'Đa dạng thành phần loài, nguồn gen và hệ sinh thái',
        coreDefinition: 'Việt Nam được công nhận là một trong những quốc gia có tính đa dạng sinh học cao hàng đầu thế giới.',
        keyPoints: [
          'Đa dạng hệ sinh thái: Hệ sinh thái tự nhiên trên cạn (rừng kín thường xanh mưa ẩm nhiệt đới, rừng rụng lá khộp, rừng trên núi đá vôi); Hệ sinh thái đất ngập nước (rừng ngập mặn Cần Giờ, Cà Mau); Hệ sinh thái biển (rạn san hô, thảm cỏ biển).',
          'Đa dạng thành phần loài: Hơn 14 000 loài thực vật, hơn 20 000 loài động vật; nhiều loài đặc hữu quý hiếm được ghi trong Sách Đỏ Việt Nam (sao la, vọoc mũi hếch, trĩ sao, sâm Ngọc Linh).',
          'Đa dạng nguồn gen: Nguồn gen cây trồng, vật nuôi bản địa vô cùng phong phú.'
        ],
        visualExample: 'Hình ảnh loài sao la - "kì lân châu Á" quý hiếm phát hiện tại dãy Trường Sơn (SGK tr. 143).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 8 – Kết nối tri thức', bookPage: 143, pdfPage: 145, section: 'Mục 1. Đa dạng sinh học' },
        commonTrapAlert: 'Bẫy thường gặp: Nhầm rừng khộp rụng lá là rừng ôn đới (rừng khộp rụng lá vào mùa khô là hệ sinh thái đặc trưng ở vùng Tây Nguyên).',
        iconName: 'Trees'
      },
      {
        id: 'KC-810-2',
        cardIndex: 2,
        title: 'Thẻ 2: Thực trạng suy giảm và Biện pháp bảo tồn',
        concept: 'Suy giảm diện tích rừng, Sách Đỏ, Vườn quốc gia',
        coreDefinition: 'Đa dạng sinh học nước ta đang bị suy giảm nghiêm trọng do hoạt động khai thác quá mức của con người.',
        keyPoints: [
          'Thực trạng: Thu hẹp diện tích rừng tự nhiên; nhiều loài sinh vật đối mặt nguy cơ tuyệt chủng; suy thoái các rạn san hô ven biển.',
          'Nguyên nhân: Chặt phá rừng bừa bãi, săn bắt buôn bán động vật hoang dã trái phép, ô nhiễm môi trường nước và biến đổi khí hậu.',
          'Giải pháp cấp bách: Thành lập và quản lí nghiêm ngặt các Vườn quốc gia (Cúc Phương, Phong Nha - Kẻ Bàng, Cát Tiên, Ba Bể), Khu bảo tồn thiên nhiên; xử lí nghiêm hành vi săn bắt; giao đất giao rừng cho người dân bảo vệ.'
        ],
        visualExample: 'Vườn quốc gia Cúc Phương - vườn quốc gia đầu tiên của Việt Nam (SGK tr. 145).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 8 – Kết nối tri thức', bookPage: 145, pdfPage: 147, section: 'Mục 2. Bảo tồn đa dạng sinh học' },
        commonTrapAlert: 'Bẫy kiến thức: Cúc Phương (thành lập năm 1962) là Vườn quốc gia đầu tiên của nước ta.',
        iconName: 'ShieldCheck'
      }
    ],
    mindmap: {
      id: 'mm-810-root',
      label: 'Sinh vật Việt Nam',
      summary: 'Đa dạng sinh học cao (loài, gen, hệ sinh thái) | Rừng kín thường xanh, ngập mặn, san hô | Bảo tồn: Vườn quốc gia Cúc Phương, Sách Đỏ',
      children: [
        { id: 'mm-810-he-st', label: 'Hệ sinh thái', summary: 'Rừng nhiệt đới thường xanh, rừng ngập mặn, san hô biển' },
        { id: 'mm-810-loai', label: 'Đặc hữu quý hiếm', summary: 'Sao la, vọoc mũi hếch, sâm Ngọc Linh' },
        { id: 'mm-810-suygiam', label: 'Thực trạng', summary: 'Mất rừng nguyên sinh, săn bắt quá mức' },
        { id: 'mm-810-baoton', label: 'Bảo tồn', summary: 'Vườn quốc gia Cúc Phương, Phong Nha, Cát Tiên, xử phạt nghiêm' }
      ]
    },
    comparisons: [
      {
        id: 'comp-810-1',
        conceptA: 'Hệ sinh thái Rừng mưa nhiệt đới thường xanh',
        conceptB: 'Hệ sinh thái Rừng ngập mặn ven biển',
        comparisonTable: [
          { criteria: 'Địa bàn phân bố', conceptAVal: 'Vùng đồi núi ẩm ướt khắp cả nước', conceptBVal: 'Vùng bãi triều lầy ven biển và cửa sông (Nam Bộ, Quảng Ninh)' },
          { criteria: 'Loài thực vật đặc trưng', conceptAVal: 'Cây gỗ lớn nhiều tầng tán: đinh, lim, sến, táu, dổi', conceptBVal: 'Cây có rễ cọc, rễ thở thích nghi ngập mặn: đước, vẹt, mắm, bần' },
          { criteria: 'Chức năng môi trường', conceptAVal: 'Bảo vệ nguồn nước đầu nguồn, chống lũ quét sạt lở', conceptBVal: 'Chắn sóng gió bão, chống xói lở bờ biển, nuôi dưỡng tôm cá' }
        ],
        commonConfusion: 'Học sinh hay nhầm lẫn môi trường sinh thái của cây đước và cây thông.',
        memoryRule: 'Mẹo nhớ: Rừng nhiệt đới trên núi giữ nước chống lũ; Rừng ngập mặn ven biển chắn sóng giữ đất.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-810-1',
        questionText: 'Vườn quốc gia nào được thành lập đầu tiên ở Việt Nam vào năm 1962?',
        options: [
          { id: 'A', text: 'Vườn quốc gia Cúc Phương (Ninh Bình - Hòa Bình - Thanh Hóa)' },
          { id: 'B', text: 'Vườn quốc gia Phong Nha - Kẻ Bàng (Quảng Bình)' },
          { id: 'C', text: 'Vườn quốc gia Cát Tiên (Đồng Nai)' },
          { id: 'D', text: 'Vườn quốc gia Ba Vì (Hà Nội)' }
        ],
        correctAnswer: 'A',
        explanation: 'Vườn quốc gia Cúc Phương được thành lập năm 1962, là khu bảo tồn thiên nhiên và vườn quốc gia đầu tiên của nước ta.',
        hint: 'Khu bảo tồn thiên nhiên đầu tiên năm 1962.',
        knowledgeCardId: 'KC-810-2'
      }
    ]
  },

  'G8-L11': {
    lessonId: 'G8-L11',
    grade: 8,
    chapterId: 'G8-C4',
    chapterTitle: 'Chương 4. Biển đảo Việt Nam',
    lessonTitle: 'Bài 11: Phạm vi Biển Đông. Vùng biển đảo và đặc điểm tự nhiên vùng biển đảo Việt Nam',
    sgkPageRange: 'Trang 147 – 152',
    pdfPageRange: 'Trang 149 – 154',
    objectives: [
      'Xác định được phạm vi của Biển Đông và 5 vùng biển Việt Nam theo Luật Biển Việt Nam 2012.',
      'Khẳng định được chủ quyền bất khả xâm phạm của Việt Nam đối với hai quần đảo Hoàng Sa và Trường Sa.',
      'Trình bày được đặc điểm tự nhiên (nhiệt độ, độ muối, hải lưu, sinh vật) của vùng biển đảo nước ta.'
    ],
    knowledgeCards: [
      {
        id: 'KC-811-1',
        cardIndex: 1,
        title: 'Thẻ 1: Khái quát Biển Đông và 5 vùng biển theo Luật Biển 2012',
        concept: 'Đường cơ sở, Nội thủy, Lãnh hải 12 hải lí, EEZ 200 hải lí, Thềm lục địa',
        coreDefinition: 'Biển Đông là biển nửa kín lớn thứ 2 ở Thái Bình Dương; vùng biển Việt Nam gồm 5 vùng pháp lí.',
        keyPoints: [
          'Biển Đông: Diện tích ~3,44 triệu km², trải rộng từ xích đạo đến chí tuyến Bắc, thông ra Thái Bình Dương và Ấn Độ Dương qua các eo biển.',
          '5 vùng biển Việt Nam tính từ Đường cơ sở: Nội thủy (chủ quyền tuyệt đối như đất liền); Lãnh hải (12 hải lí, ranh giới ngoài là BIÊN GIỚI QUỐC GIA TRÊN BIỂN); Vùng tiếp giáp lãnh hải (12 hải lí); Vùng đặc quyền kinh tế (EEZ - 200 hải lí); Thềm lục địa (đáy biển).',
          'Chủ quyền thiêng liêng: Quần đảo Hoàng Sa (thuộc thành phố Đà Nẵng) và Quần đảo Trường Sa (thuộc tỉnh Khánh Hòa) là bộ phận lãnh thổ bất khả xâm phạm của Tổ quốc.'
        ],
        visualExample: 'Sơ đồ các vùng biển Việt Nam theo UNCLOS 1982 và Luật Biển Việt Nam (SGK tr. 148).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 8 – Kết nối tri thức', bookPage: 148, pdfPage: 150, section: 'Mục 1. Phạm vi biển Đông và các vùng biển' },
        commonTrapAlert: 'Bẫy thường gặp: Nhầm ranh giới ngoài của vùng đặc quyền kinh tế là biên giới quốc gia (đúng phải là ranh giới ngoài của LÃNH HẢI 12 hải lí).',
        iconName: 'Shield'
      },
      {
        id: 'KC-811-2',
        cardIndex: 2,
        title: 'Thẻ 2: Đặc điểm tự nhiên vùng biển đảo Việt Nam',
        concept: 'Độ muối 32-33‰, Nhật triều đều Vịnh Bắc Bộ, Dòng biển theo mùa',
        coreDefinition: 'Vùng biển nước ta mang tính chất nhiệt đới gió mùa ấm quanh năm.',
        keyPoints: [
          'Nhiệt độ nước biển: Nhiệt độ trung bình tầng mặt trên 23°C, ấm quanh năm.',
          'Độ muối trung bình: Dao động từ 32‰ đến 33‰ (thay đổi theo mùa mưa - khô và vùng cửa sông).',
          'Thủy triều: Rất đa dạng, trong đó chế độ "nhật triều đều" ở Vịnh Bắc Bộ (mỗi ngày có 1 lần nước lên và 1 lần nước xuống) được coi là điển hình nhất thế giới.',
          'Dòng biển (Hải lưu): Chảy theo mùa gió: Mùa đông dòng biển chảy hướng đông bắc - tây nam; Mùa hạ dòng biển chảy hướng tây nam - đông bắc.'
        ],
        visualExample: 'Lược đồ các dòng hải lưu mùa đông và mùa hạ trên Biển Đông (SGK tr. 150).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 8 – Kết nối tri thức', bookPage: 150, pdfPage: 152, section: 'Mục 2. Đặc điểm tự nhiên vùng biển' },
        commonTrapAlert: 'Bẫy dòng biển: Dòng biển Biển Đông đổi hướng theo mùa gió (mùa đông hướng đông bắc, mùa hạ hướng tây nam).',
        iconName: 'Waves'
      }
    ],
    mindmap: {
      id: 'mm-811-root',
      label: 'Biển đảo Việt Nam',
      summary: 'Biển Đông 3,44 triệu km², vùng biển VN 1 triệu km² | 5 vùng biển theo Luật Biển 2012 | Hoàng Sa (Đà Nẵng), Trường Sa (Khánh Hòa)',
      children: [
        { id: 'mm-811-5vung', label: '5 vùng biển pháp lí', summary: 'Nội thủy -> Lãnh hải (12 hải lí - biên giới) -> Tiếp giáp -> EEZ (200 hải lí) -> Thềm lục địa' },
        { id: 'mm-811-quandao', label: 'Quần đảo chủ quyền', summary: 'Hoàng Sa (TP. Đà Nẵng) & Trường Sa (tỉnh Khánh Hòa)' },
        { id: 'mm-811-hai-van', label: 'Hải văn', summary: 'Độ muối 32-33‰, nhiệt độ >23°C, nhật triều đều Vịnh Bắc Bộ' },
        { id: 'mm-811-dongbien', label: 'Hải lưu', summary: 'Đổi hướng theo mùa gió (mùa đông hướng ĐB-TN, mùa hạ TN-ĐB)' }
      ]
    },
    comparisons: [
      {
        id: 'comp-811-1',
        conceptA: 'Vùng Lãnh hải (12 hải lí)',
        conceptB: 'Vùng Đặc quyền kinh tế (200 hải lí)',
        comparisonTable: [
          { criteria: 'Chiều rộng từ đường cơ sở', conceptAVal: '12 hải lí (~22,224 km)', conceptBVal: '200 hải lí (~370,4 km)' },
          { criteria: 'Ý nghĩa pháp lí', conceptAVal: 'Là lãnh thổ quốc gia trên biển, ranh giới ngoài là BIÊN GIỚI QUỐC GIA', conceptBVal: 'Hưởng quyền chủ quyền kinh tế tuyệt đối về tài nguyên' },
          { criteria: 'Quyền tự do của tàu quốc tế', conceptAVal: 'Chỉ được đi qua vô hại theo luật định', conceptBVal: 'Tự do hàng hải và hàng không quốc tế nhưng không được đánh bắt thăm dò tài nguyên' }
        ],
        commonConfusion: 'Học sinh thường nhầm vùng lãnh hải và đặc quyền kinh tế đều có cùng chế độ biên giới quốc gia.',
        memoryRule: 'Mẹo nhớ: Lãnh hải 12 hải lí là biên giới quốc gia; Đặc quyền kinh tế 200 hải lí là quyền khai thác tài nguyên.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-811-1',
        questionText: 'Theo Luật Biển Việt Nam năm 2012, ranh giới ngoài của vùng biển nào sau đây là biên giới quốc gia trên biển của Việt Nam?',
        options: [
          { id: 'A', text: 'Vùng lãnh hải (12 hải lí tính từ đường cơ sở)' },
          { id: 'B', text: 'Vùng tiếp giáp lãnh hải' },
          { id: 'C', text: 'Vùng đặc quyền kinh tế' },
          { id: 'D', text: 'Vùng nội thủy' }
        ],
        correctAnswer: 'A',
        explanation: 'Luật Biển Việt Nam quy định: Ranh giới ngoài của lãnh hải 12 hải lí chính là đường biên giới quốc gia trên biển của nước ta.',
        hint: 'Vùng biển rộng 12 hải lí.',
        knowledgeCardId: 'KC-811-1'
      }
    ]
  },

  'G8-L12': {
    lessonId: 'G8-L12',
    grade: 8,
    chapterId: 'G8-C4',
    chapterTitle: 'Chương 4. Biển đảo Việt Nam',
    lessonTitle: 'Bài 12: Môi trường và tài nguyên biển đảo Việt Nam',
    sgkPageRange: 'Trang 153 – 157',
    pdfPageRange: 'Trang 155 – 159',
    objectives: [
      'Trình bày được tiềm năng và sự phát triển của 4 ngành kinh tế biển then chốt.',
      'Phân tích được thực trạng môi trường biển đảo nước ta.',
      'Đề xuất các giải pháp bảo vệ môi trường biển đảo và phát triển bền vững kinh tế biển.'
    ],
    knowledgeCards: [
      {
        id: 'KC-812-1',
        cardIndex: 1,
        title: 'Thẻ 1: Tiềm năng của 4 ngành kinh tế biển then chốt',
        concept: 'Thủy sản, Khoáng sản dầu khí, Du lịch biển, Giao thông hàng hải',
        coreDefinition: 'Vùng biển nước ta giàu tài nguyên, tạo điều kiện phát triển kinh tế biển toàn diện.',
        keyPoints: [
          'Thủy sản: Hơn 2 000 loài cá, hàng trăm loài tôm, mực; 4 ngư trường trọng điểm: Hải Phòng - Quảng Ninh; Ninh Thuận - Bình Thuận - Bà Rịa Vũng Tàu; Cà Mau - Kiên Giang; Quần đảo Hoàng Sa, Trường Sa.',
          'Khoáng sản biển: Dầu khí ở thềm lục địa phía nam; mỏ cát thủy tinh Cam Ranh; nghề làm muối nổi tiếng ở Sa Huỳnh (Quảng Ngãi), Cà Ná (Ninh Thuận).',
          'Du lịch biển đảo: Hàng nghìn bãi tắm đẹp trải dài từ Bắc vào Nam (Hạ Long, Nha Trang, Phú Quốc, Côn Đảo).',
          'Giao thông vận tải biển: Nằm trên ngã tư đường hàng hải quốc tế, phát triển cụm cảng nước sâu (Hải Phòng, Cái Mép - Thị Vải).'
        ],
        visualExample: 'Bản đồ 4 ngư trường trọng điểm và cụm cảng Cái Mép - Thị Vải (SGK tr. 154).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 8 – Kết nối tri thức', bookPage: 154, pdfPage: 156, section: 'Mục 1. Tiềm năng kinh tế biển' },
        commonTrapAlert: 'Bẫy địa lí: Nhầm lẫn vị trí 4 ngư trường trọng điểm (ngư trường lớn nhất về đánh bắt là Cà Mau - Kiên Giang và Ninh Thuận - Bình Thuận - Bà Rịa Vũng Tàu).',
        iconName: 'Anchor'
      },
      {
        id: 'KC-812-2',
        cardIndex: 2,
        title: 'Thẻ 2: Bảo vệ môi trường biển đảo và phát triển bền vững',
        concept: 'Ô nhiễm tràn dầu, rác thải nhựa, suy thoái san hô',
        coreDefinition: 'Bảo vệ môi trường biển đảo là nhiệm vụ cấp bách để phát triển bền vững và giữ vững chủ quyền.',
        keyPoints: [
          'Thách thức môi trường: Suy giảm nguồn lợi thủy sản do đánh bắt tận diệt (dùng mìn, kích điện, giã cào); ô nhiễm rác thải nhựa ven biển; nguy cơ tràn dầu từ tàu thuyền.',
          'Suy thoái sinh thái: Hơn 50% rạn san hô bị hư hại nặng nề do tẩy trắng và khai thác du lịch thiếu kiểm soát.',
          'Biện pháp hành động: Thiết lập các khu bảo tồn biển; cấm đánh bắt bằng chất nổ, mắt lưới nhỏ; kiểm soát chặt chẽ việc xả thải công nghiệp ra biển; tăng cường tuần tra thực thi pháp luật biển.'
        ],
        visualExample: 'Hình ảnh chiến dịch làm sạch bãi biển và phục hồi rạn san hô Nha Trang (SGK tr. 156).',
        sgkCitation: { bookTitle: 'Lịch sử và Địa lí 8 – Kết nối tri thức', bookPage: 156, pdfPage: 158, section: 'Mục 2. Bảo vệ môi trường biển' },
        commonTrapAlert: 'Bẫy thường gặp: Chỉ chú trọng khai thác tài nguyên làm giàu mà quên mất bảo vệ môi trường biển là điều kiện tiên quyết.',
        iconName: 'ShieldAlert'
      }
    ],
    mindmap: {
      id: 'mm-812-root',
      label: 'Kinh tế & Môi trường Biển đảo',
      summary: '4 ngành kinh tế biển: Thủy sản (4 ngư trường), Khoáng sản (dầu khí, muối Cà Ná), Du lịch, Hàng hải | Bảo vệ: Chống tràn dầu, cấm giã cào, bảo vệ san hô',
      children: [
        { id: 'mm-812-thuysan', label: 'Khai thác thủy sản', summary: '4 ngư trường lớn, đẩy mạnh đánh bắt xa bờ' },
        { id: 'mm-812-khoangsan', label: 'Khoáng sản biển', summary: 'Dầu khí thềm lục địa, muối Cà Ná, Sa Huỳnh' },
        { id: 'mm-812-dulich-cang', label: 'Du lịch & Cảng biển', summary: 'Hạ Long, Nha Trang, Phú Quốc; Cảng Cái Mép - Thị Vải' },
        { id: 'mm-812-moitruong', label: 'Bảo vệ môi trường biển', summary: 'Khu bảo tồn biển, cấm chất nổ, xử lí rác thải nhựa' }
      ]
    },
    comparisons: [
      {
        id: 'comp-812-1',
        conceptA: 'Khai thác hải sản ven bờ',
        conceptB: 'Đánh bắt hải sản xa bờ',
        comparisonTable: [
          { criteria: 'Tình trạng nguồn lợi', conceptAVal: 'Bị suy giảm nghiêm trọng do đánh bắt quá mức cho phép', conceptBVal: 'Còn nhiều tiềm năng trữ lượng chưa khai thác hết' },
          { criteria: 'Phương tiện tàu thuyền', conceptAVal: 'Thuyền nhỏ công suất thấp, đánh bắt gần bờ', conceptBVal: 'Tàu vỏ thép công suất lớn, trang bị thiết bị định vị, bảo quản lạnh' },
          { criteria: 'Ý nghĩa chiến lược', conceptAVal: 'Chủ yếu giải quyết việc làm tại chỗ, cần hạn chế', conceptBVal: 'Tăng giá trị kinh tế và khẳng định chủ quyền biển đảo Tổ quốc' }
        ],
        commonConfusion: 'Học sinh hay nghĩ cần tiếp tục khuyến khích tăng số lượng thuyền bè đánh bắt ven bờ.',
        memoryRule: 'Mẹo nhớ: Giảm đánh bắt ven bờ để bảo vệ con non; Đẩy mạnh đánh bắt xa bờ vừa tăng thu nhập vừa giữ chủ quyền.'
      }
    ],
    selfCheckQuestions: [
      {
        id: 'SC-812-1',
        questionText: 'Tại sao nước ta chủ trương giảm dần tỉ trọng khai thác hải sản ven bờ và đẩy mạnh đánh bắt hải sản xa bờ?',
        options: [
          { id: 'A', text: 'Nguồn lợi hải sản ven bờ đã bị suy giảm, đánh bắt xa bờ mang lại hiệu quả cao và góp phần khẳng định chủ quyền' },
          { id: 'B', text: 'Ven bờ không còn bất kì loài sinh vật nào sinh sống' },
          { id: 'C', text: 'Biển ven bờ quá sâu không thể thả lưới' },
          { id: 'D', text: 'Nước ngoài cấm tàu bè Việt Nam hoạt động ven bờ' }
        ],
        correctAnswer: 'A',
        explanation: 'Khai thác xa bờ vừa khai thác hiệu quả nguồn lợi cá biển khơi, bảo vệ con non ven bờ, vừa tạo sự hiện diện dân sự khẳng định chủ quyền biển đảo thiêng liêng.',
        hint: 'Bảo vệ nguồn lợi ven bờ và khẳng định chủ quyền.',
        knowledgeCardId: 'KC-812-1'
      }
    ]
  }
};
