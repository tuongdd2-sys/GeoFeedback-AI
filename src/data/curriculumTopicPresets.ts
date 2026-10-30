import { KnowledgeCard, ConceptComparison, SelfCheckQuestion, ErrorCode, TextbookSource } from '../types';

export interface TopicKnowledgePacket {
  summary: string;
  cards: KnowledgeCard[];
  comparison: ConceptComparison;
  selfChecks: SelfCheckQuestion[];
  relatedErrorCodes: ErrorCode[];
}

// 1. TỌA ĐỘ ĐỊA LÍ, BẢN ĐỒ & LƯỢC ĐỒ TRÍ NHỚ (LỚP 6 BÀI 1 - 5)
export function getCoordinatesMapSkillsPreset(meta: TextbookSource): TopicKnowledgePacket {
  const pageRange = `Trang ${meta.bookPageStart}${meta.bookPageEnd ? ` – ${meta.bookPageEnd}` : ''}`;
  return {
    summary: `Nắm vững hệ thống kinh vĩ tuyến, quy chuẩn ghi tọa độ (Vĩ độ trước, Kinh độ sau), ý nghĩa tỉ lệ bản đồ, phân loại kí hiệu và phương pháp vẽ lược đồ trí nhớ.`,
    relatedErrorCodes: ['S01', 'K02', 'S02'],
    cards: [
      {
        id: `KC-${meta.lessonId}-1`,
        cardIndex: 1,
        title: 'Hệ thống kinh vĩ tuyến và Tọa độ địa lí',
        concept: 'Kinh tuyến, Vĩ tuyến, Tọa độ chuẩn',
        coreDefinition: 'Kinh tuyến là nửa đường tròn nối 2 cực (bằng nhau); Vĩ tuyến là vòng tròn vuông góc với kinh tuyến (dài nhất ở Xích đạo).',
        keyPoints: [
          'Kinh tuyến gốc 0° qua đài Greenwich (Luân Đôn, Anh); Vĩ tuyến gốc 0° là đường Xích đạo.',
          'Quy tắc bắt buộc: Ghi VĨ ĐỘ TRƯỚC, KINH ĐỘ SAU. Ví dụ: Điểm A (20°B, 105°Đ).',
          'Kinh tuyến 0° và 180° chia quả Địa Cầu thành bán cầu Đông và bán cầu Tây; Xích đạo chia thành bán cầu Bắc và bán cầu Nam.',
        ],
        visualExample: 'Kinh tuyến chạy dọc Bắc - Nam, vĩ tuyến nằm ngang song song Xích đạo (SGK tr. 102).',
        sgkCitation: { bookTitle: meta.bookTitle, bookPage: meta.bookPageStart, pdfPage: meta.pdfPageStart, section: 'Mục 1 & 2' },
        commonTrapAlert: 'Bẫy thường gặp: Ghi ngược Kinh độ trước, Vĩ độ sau hoặc nhầm Xích đạo chia bán cầu Đông - Tây.',
        iconName: 'Globe',
      },
      {
        id: `KC-${meta.lessonId}-2`,
        cardIndex: 2,
        title: 'Tỉ lệ bản đồ, Kí hiệu và Lược đồ trí nhớ',
        concept: 'Tỉ lệ số, thước tỉ lệ, bảng chú giải',
        coreDefinition: 'Tỉ lệ bản đồ là tỉ số giữa khoảng cách trên bản đồ và khoảng cách thực tế ngoài thực địa.',
        keyPoints: [
          'Tỉ lệ số (ví dụ 1 : 100 000): 1 cm trên bản đồ ứng với 100 000 cm = 1 km ngoài thực địa.',
          'Kí hiệu gồm: kí hiệu điểm (sân bay, đỉnh núi), kí hiệu đường (sông, đường bộ), kí hiệu diện tích (rừng, đầm lầy).',
          'Lược đồ trí nhớ: Phác họa không gian trong tâm trí từ các điểm mốc quen thuộc mà không cần tỉ lệ toán học tuyệt đối.',
        ],
        visualExample: 'Thước tỉ lệ và bảng chú giải quy chuẩn ở góc bản đồ (SGK tr. 107-113).',
        sgkCitation: { bookTitle: meta.bookTitle, bookPage: meta.bookPageStart + 2, pdfPage: meta.pdfPageStart + 2, section: 'Mục Kĩ năng bản đồ' },
        commonTrapAlert: 'Bẫy tính toán: Đo khoảng cách cong bằng thước thẳng hoặc quên đổi đơn vị (cm sang km chia 100 000).',
        iconName: 'Compass',
      },
    ],
    comparison: {
      id: `comp-${meta.lessonId}`,
      conceptA: 'Đường Kinh tuyến',
      conceptB: 'Đường Vĩ tuyến',
      comparisonTable: [
        { criteria: 'Hình dạng', conceptAVal: 'Các nửa đường tròn nối liền hai cực Bắc - Nam', conceptBVal: 'Các vòng tròn nằm ngang vuông góc với kinh tuyến' },
        { criteria: 'Độ dài', conceptAVal: 'Tất cả các kinh tuyến có độ dài bằng nhau (~20 000 km)', conceptBVal: 'Dài nhất ở Xích đạo (~40 075 km), thu hẹp dần về hai cực' },
        { criteria: 'Đường gốc 0°', conceptAVal: 'Kinh tuyến gốc 0° đi qua đài thiên văn Greenwich', conceptBVal: 'Vĩ tuyến gốc 0° là đường Xích đạo cách đều hai cực' },
      ],
      commonConfusion: 'Học sinh thường nhầm kinh tuyến là các vòng tròn khép kín hoặc nhầm các vĩ tuyến có chiều dài bằng nhau.',
      memoryRule: 'Mẹo nhớ: Kinh tuyến nối dọc Bắc - Nam; Vĩ tuyến nằm ngang song song Xích đạo.',
    },
    selfChecks: [
      {
        id: `SC-${meta.lessonId}-1`,
        questionText: 'Thứ tự đúng khi ghi tọa độ địa lí của một điểm trên bản đồ là gì?',
        options: [
          { id: 'A', text: 'Ghi Vĩ độ trước, Kinh độ sau' },
          { id: 'B', text: 'Ghi Kinh độ trước, Vĩ độ sau' },
          { id: 'C', text: 'Ghi Độ cao trước, Tọa độ sau' },
          { id: 'D', text: 'Thứ tự nào cũng được' },
        ],
        correctAnswer: 'A',
        explanation: 'Quy chuẩn Địa lí quốc tế và SGK bắt buộc: Ghi Vĩ độ trước (hoặc ở trên), Kinh độ sau (hoặc ở dưới).',
        hint: 'Vĩ độ trước, Kinh độ sau.',
        knowledgeCardId: `KC-${meta.lessonId}-1`,
      },
    ],
  };
}

// 2. TRÁI ĐẤT & VẬN ĐỘNG TRÁI ĐẤT (LỚP 6 BÀI 6 - 9)
export function getEarthMotionSeasonsPreset(meta: TextbookSource): TopicKnowledgePacket {
  return {
    summary: `Trái Đất là hành tinh thứ 3 trong Hệ Mặt Trời; tự quay quanh trục từ Tây sang Đông sinh ra ngày đêm luân phiên, giờ trên Trái Đất và lực Coriolis; quay quanh Mặt Trời sinh ra 4 mùa và ngày đêm dài ngắn.`,
    relatedErrorCodes: ['K01', 'K02', 'K04'],
    cards: [
      {
        id: `KC-${meta.lessonId}-1`,
        cardIndex: 1,
        title: 'Chuyển động tự quay quanh trục và Lực Coriolis',
        concept: 'Tự quay Tây sang Đông, 24 múi giờ, Lực Coriolis',
        coreDefinition: 'Trái Đất tự quay quanh trục nghiêng 66°33\' từ Tây sang Đông trong 24 giờ (1 ngày đêm).',
        keyPoints: [
          'Hệ quả 1: Hiện tượng ngày và đêm luân phiên nhau liên tục do Trái Đất hình cầu và tự quay.',
          'Hệ quả 2: Giờ trên Trái Đất được chia thành 24 khu vực giờ; Việt Nam thuộc múi giờ số 7 (GMT+7).',
          'Hệ quả 3: Lực Coriolis làm lệch hướng chuyển động: ở Bán cầu Bắc lệch về BÊN PHẢI, ở Bán cầu Nam lệch về BÊN TRÁI.',
        ],
        visualExample: 'Sơ đồ 24 múi giờ và đường đi lệch phải của dòng nước ở Bán cầu Bắc (SGK tr. 119-121).',
        sgkCitation: { bookTitle: meta.bookTitle, bookPage: meta.bookPageStart, pdfPage: meta.pdfPageStart, section: 'Mục 1 & 2' },
        commonTrapAlert: 'Bẫy thường gặp: Nhầm hướng lệch của lực Coriolis (ở Bán cầu Bắc lệch phải, Bán cầu Nam lệch trái).',
        iconName: 'RotateCw',
      },
      {
        id: `KC-${meta.lessonId}-2`,
        cardIndex: 2,
        title: 'Chuyển động quanh Mặt Trời và Các mùa trong năm',
        concept: 'Quỹ đạo elip, 365 ngày 6 giờ, Các mùa',
        coreDefinition: 'Trái Đất chuyển động quanh Mặt Trời theo quỹ đạo elip gần tròn mất 365 ngày 6 giờ, trục nghiêng không đổi phương.',
        keyPoints: [
          'Bốn mùa: Do trục nghiêng, luân phiên Bán cầu Bắc và Nam ngả về phía Mặt Trời sinh ra mùa nóng (hạ) và mùa lạnh (đông). Hai bán cầu có mùa trái ngược nhau.',
          'Mốc thiên văn: Xuân phân (21/3) và Thu phân (23/9) Mặt Trời chiếu thẳng Xích đạo; Hạ chí (22/6) thẳng chí tuyến Bắc; Đông chí (22/12) thẳng chí tuyến Nam.',
          'Ngày đêm dài ngắn theo mùa: Mùa hạ ngày dài đêm ngắn; mùa đông ngày ngắn đêm dài; tại Xích đạo ngày đêm luôn bằng nhau 12 giờ.',
        ],
        visualExample: 'Sơ đồ chuyển động Trái Đất quanh Mặt Trời và các vị trí chí, phân (SGK tr. 123).',
        sgkCitation: { bookTitle: meta.bookTitle, bookPage: meta.bookPageStart + 2, pdfPage: meta.pdfPageStart + 2, section: 'Mục Chuyển động quanh Mặt Trời' },
        commonTrapAlert: 'Bẫy thường gặp: Nghĩ rằng mùa nóng do Trái Đất ở gần Mặt Trời hơn (thực tế do góc nhập xạ lớn hơn).',
        iconName: 'Sun',
      },
    ],
    comparison: {
      id: `comp-${meta.lessonId}`,
      conceptA: 'Chuyển động tự quay quanh trục',
      conceptB: 'Chuyển động quay quanh Mặt Trời',
      comparisonTable: [
        { criteria: 'Thời gian hoàn thành', conceptAVal: '24 giờ (1 ngày đêm)', conceptBVal: '365 ngày 6 giờ (1 năm thiên văn)' },
        { criteria: 'Quỹ đạo chuyển động', conceptAVal: 'Tự quay quanh trục tưởng tượng nghiêng 66°33\'', conceptBVal: 'Quỹ đạo hình elip gần tròn quanh Mặt Trời' },
        { criteria: 'Hệ quả địa lí chính', conceptAVal: 'Ngày đêm luân phiên, 24 múi giờ, lực Coriolis', conceptBVal: 'Hiện tượng 4 mùa, ngày đêm dài ngắn theo mùa và vĩ độ' },
      ],
      commonConfusion: 'Học sinh hay nhầm hiện tượng 4 mùa là do Trái Đất tự quay quanh trục tạo ra.',
      memoryRule: 'Mẹo nhớ: Tự quay sinh ngày đêm và giờ; Quay quanh Mặt Trời sinh ra 4 mùa.',
    },
    selfChecks: [
      {
        id: `SC-${meta.lessonId}-1`,
        questionText: 'Dưới tác động của lực Coriolis, ở Bán cầu Bắc vật thể chuyển động bị lệch theo hướng nào?',
        options: [
          { id: 'A', text: 'Lệch về bên phải theo hướng chuyển động ban đầu' },
          { id: 'B', text: 'Lệch về bên trái theo hướng chuyển động ban đầu' },
          { id: 'C', text: 'Không bị lệch hướng' },
          { id: 'D', text: 'Lệch ngược chiều kim đồng hồ' },
        ],
        correctAnswer: 'A',
        explanation: 'SGK Địa lí 6 Bài 7 khẳng định: Lực Coriolis làm vật thể chuyển động ở Bán cầu Bắc lệch về bên phải, Bán cầu Nam lệch về bên trái.',
        hint: 'Bắc lệch phải, Nam lệch trái.',
        knowledgeCardId: `KC-${meta.lessonId}-1`,
      },
    ],
  };
}

// 3. CẤU TẠO TRÁI ĐẤT, NỘI SINH, NGOẠI SINH, NÚI LỬA & ĐỘNG ĐẤT (LỚP 6 BÀI 10 - 12)
export function getEarthStructureTectonicsPreset(meta: TextbookSource): TopicKnowledgePacket {
  return {
    summary: `Trái Đất gồm 3 lớp (Vỏ, Man-ti, Nhân); thạch quyển gồm các mảng kiến tạo di chuyển xô vào nhau hoặc tách xa nhau; nội lực làm gồ ghề bề mặt sinh ra núi lửa động đất; ngoại lực san bằng địa hình.`,
    relatedErrorCodes: ['K01', 'K02', 'K04'],
    cards: [
      {
        id: `KC-${meta.lessonId}-1`,
        cardIndex: 1,
        title: 'Cấu tạo bên trong Trái Đất và Thuyết Kiến tạo mảng',
        concept: 'Vỏ Trái Đất, Man-ti, Nhân và các mảng kiến tạo',
        coreDefinition: 'Trái Đất cấu tạo 3 lớp: Vỏ (rắn chắc, dày 5-70km), Man-ti (quánh dẻo, dày 2 900km), Nhân (nhiệt độ tới 5 000°C).',
        keyPoints: [
          'Vỏ Trái Đất là nơi tồn tại các thành phần tự nhiên và đời sống xã hội loài người.',
          'Thạch quyển vỡ thành 7 mảng kiến tạo lớn trôi trượt chậm chạp trên tầng manti quánh dẻo.',
          'Khi 2 mảng xô vào nhau: Đất đá bị uốn nếp nâng lên thành dãy núi cao (như dãy Himalaya) hoặc hình thành vực sâu, núi lửa.',
          'Khi 2 mảng tách xa nhau: Macma trào lên tạo thành các sống núi ngầm dưới đáy đại dương.',
        ],
        visualExample: 'Sơ đồ cắt ngang 3 lớp Trái Đất và lược đồ các mảng kiến tạo (SGK tr. 128-130).',
        sgkCitation: { bookTitle: meta.bookTitle, bookPage: meta.bookPageStart, pdfPage: meta.pdfPageStart, section: 'Mục 1 & 2' },
        commonTrapAlert: 'Bẫy thường gặp: Nhầm lớp Man-ti là lớp mỏng nhất (thực tế Vỏ Trái Đất mới là lớp mỏng nhất chiếm <1% thể tích).',
        iconName: 'Layers',
      },
      {
        id: `KC-${meta.lessonId}-2`,
        cardIndex: 2,
        title: 'Nội lực, Ngoại lực, Động đất và Núi lửa',
        concept: 'Uốn nếp, đứt gãy, phong hóa, bóc mòn, bồi tụ',
        coreDefinition: 'Nội sinh và ngoại sinh là hai lực đối lập nhau tác động đồng thời tạo nên địa hình bề mặt Trái Đất.',
        keyPoints: [
          'Nội sinh (Nội lực): Năng lượng bên trong lòng đất, làm bề mặt Trái Đất nâng cao hoặc sụt lún gồ ghề; gây núi lửa và động đất.',
          'Ngoại sinh (Ngoại lực): Năng lượng bức xạ Mặt Trời, gió, mưa, nước chảy; có xu hướng phá hủy, san phẳng những nơi gồ ghề và bồi tụ vùng trũng.',
          'Kĩ năng an toàn khi động đất: Chui xuống gầm bàn kiên cố, bảo vệ đầu, không dùng thang máy, tránh xa cột điện và nhà cao tầng.',
        ],
        visualExample: 'Hiện tượng dung nham núi lửa phun trào và đứt gãy bề mặt đất (SGK tr. 132-134).',
        sgkCitation: { bookTitle: meta.bookTitle, bookPage: meta.bookPageStart + 1, pdfPage: meta.pdfPageStart + 1, section: 'Mục Nội sinh - Ngoại sinh' },
        commonTrapAlert: 'Bẫy thường gặp: Nhầm gió và dòng nước chảy là tác nhân nội sinh.',
        iconName: 'Flame',
      },
    ],
    comparison: {
      id: `comp-${meta.lessonId}`,
      conceptA: 'Quá trình Nội sinh (Nội lực)',
      conceptB: 'Quá trình Ngoại sinh (Ngoại lực)',
      comparisonTable: [
        { criteria: 'Nguồn gốc năng lượng', conceptAVal: 'Bên trong lòng Trái Đất (phân rã phóng xạ, dịch chuyển vật chất)', conceptBVal: 'Bên ngoài bề mặt Trái Đất (chủ yếu là bức xạ nhiệt Mặt Trời)' },
        { criteria: 'Tác nhân chủ yếu', conceptAVal: 'Dòng đối lưu macma, vận động kiến tạo mảng', conceptBVal: 'Gió, nước chảy, nhiệt độ, sinh vật và con người' },
        { criteria: 'Xu hướng tác động', conceptAVal: 'Làm bề mặt Trái Đất gồ ghề, tạo núi uốn nếp, đứt gãy', conceptBVal: 'San phẳng nơi gồ ghề (phong hóa, bóc mòn) và bồi tụ vùng trũng' },
      ],
      commonConfusion: 'Học sinh hay nghĩ nội lực và ngoại lực hoạt động riêng rẽ, trong khi thực tế chúng diễn ra đồng thời.',
      memoryRule: 'Mẹo nhớ: Nội lực làm gồ ghề; Ngoại lực san bằng địa hình.',
    },
    selfChecks: [
      {
        id: `SC-${meta.lessonId}-1`,
        questionText: 'Trong 3 lớp cấu tạo nên Trái Đất, lớp nào có độ dày mỏng nhất nhưng quan trọng nhất đối với sự sống?',
        options: [
          { id: 'A', text: 'Lớp Vỏ Trái Đất' },
          { id: 'B', text: 'Lớp Man-ti' },
          { id: 'C', text: 'Lớp Nhân ngoài' },
          { id: 'D', text: 'Lớp Nhân trong' },
        ],
        correctAnswer: 'A',
        explanation: 'Vỏ Trái Đất chỉ dày từ 5 đến 70 km, chiếm chưa đầy 1% thể tích nhưng là nơi cư trú và diễn ra mọi hoạt động của con người.',
        hint: 'Lớp ngoài cùng mỏng nhất.',
        knowledgeCardId: `KC-${meta.lessonId}-1`,
      },
    ],
  };
}

// 4. CÁC DẠNG ĐỊA HÌNH CHÍNH & KHOÁNG SẢN (LỚP 6 BÀI 13)
export function getReliefLandformsMineralsPreset(meta: TextbookSource): TopicKnowledgePacket {
  return {
    summary: `Các dạng địa hình chính gồm núi, đồi, cao nguyên, đồng bằng và địa hình Karst đá vôi; khoáng sản phân thành khoáng sản nhiên liệu, kim loại và phi kim loại.`,
    relatedErrorCodes: ['K01', 'K02', 'S01'],
    cards: [
      {
        id: `KC-${meta.lessonId}-1`,
        cardIndex: 1,
        title: 'Các dạng địa hình chính trên bề mặt Trái Đất',
        concept: 'Núi, Đồi, Cao nguyên, Đồng bằng, Địa hình Karst',
        coreDefinition: 'Bề mặt Trái Đất có 4 dạng địa hình cơ bản phân biệt theo độ cao tuyệt đối và hình thái.',
        keyPoints: [
          'Núi: Độ cao tuyệt đối trên 500m so với mực nước biển, đỉnh nhọn, sườn dốc (đỉnh Phan-xi-păng 3 143m cao nhất Đông Dương).',
          'Đồi: Địa hình nhô cao, đỉnh tròn, sườn thoải, độ cao tương đối dưới 200m so với vùng xung quanh.',
          'Cao nguyên: Vùng đất tương đối bằng phẳng hoặc lượn sóng, độ cao tuyệt đối trên 500m, sườn dốc đứng ngăn cách với vùng xung quanh.',
          'Đồng bằng: Địa hình thấp, bề mặt bằng phẳng hoặc lượn sóng nhỏ, độ cao tuyệt đối dưới 200m.',
          'Địa hình Karst: Hình thành do nước hòa tan đá vôi CaCO3 tạo thung lũng, phễu karst, hang động và thạch nhũ (Vịnh Hạ Long, Phong Nha).',
        ],
        visualExample: 'Hình ảnh so sánh đỉnh nhọn sườn dốc của núi với bề mặt bằng phẳng của cao nguyên (SGK tr. 135-137).',
        sgkCitation: { bookTitle: meta.bookTitle, bookPage: meta.bookPageStart, pdfPage: meta.pdfPageStart, section: 'Mục 1. Các dạng địa hình chính' },
        commonTrapAlert: 'Bẫy thường gặp: Nhầm cao nguyên với đồng bằng (cao nguyên có độ cao >500m và sườn dốc dựng đứng).',
        iconName: 'Mountain',
      },
      {
        id: `KC-${meta.lessonId}-2`,
        cardIndex: 2,
        title: 'Phân loại khoáng sản và sử dụng hợp lí',
        concept: 'Khoáng sản nhiên liệu, kim loại, phi kim loại',
        coreDefinition: 'Khoáng sản là các khoáng vật và đá có ích được con người khai thác phục vụ đời sống và sản xuất.',
        keyPoints: [
          'Khoáng sản nhiên liệu (năng lượng): Than đá, than bùn, dầu mỏ, khí đốt (cháy sinh nhiệt, phát điện, hóa dầu).',
          'Khoáng sản kim loại: Sắt, mangan, đồng, thiếc, bô-xít nhôm, vàng (luyện kim, chế tạo máy móc).',
          'Khoáng sản phi kim loại: Đá vôi, sét, cát thạch anh, muối mỏ (vật liệu xây dựng, hóa chất).',
          'Sử dụng hợp lí: Khoáng sản là tài nguyên không thể phục hồi, cần khai thác tiết kiệm và chống ô nhiễm.',
        ],
        visualExample: 'Mẫu than đá, quặng sắt và mỏ đá vôi (SGK tr. 138).',
        sgkCitation: { bookTitle: meta.bookTitle, bookPage: meta.bookPageStart + 2, pdfPage: meta.pdfPageStart + 2, section: 'Mục 2. Khoáng sản' },
        commonTrapAlert: 'Bẫy thường gặp: Nhầm đá vôi là khoáng sản kim loại (đá vôi là phi kim loại).',
        iconName: 'Gem',
      },
    ],
    comparison: {
      id: `comp-${meta.lessonId}`,
      conceptA: 'Địa hình Núi',
      conceptB: 'Địa hình Cao nguyên',
      comparisonTable: [
        { criteria: 'Độ cao tuyệt đối', conceptAVal: 'Trên 500m so với mực nước biển', conceptBVal: 'Trên 500m so với mực nước biển' },
        { criteria: 'Đặc điểm phần đỉnh', conceptAVal: 'Đỉnh nhọn, phân cắt mạnh', conceptBVal: 'Bề mặt tương đối bằng phẳng hoặc lượn sóng rộng' },
        { criteria: 'Đặc điểm sườn', conceptAVal: 'Sườn dốc liên tục xuống chân núi', conceptBVal: 'Sườn dốc dựng đứng ngăn cách với vùng xung quanh' },
      ],
      commonConfusion: 'Học sinh thường nhầm núi và cao nguyên vì cùng có độ cao trên 500m.',
      memoryRule: 'Mẹo nhớ: Núi đỉnh nhọn sườn dốc; Cao nguyên đỉnh bằng phẳng sườn dốc đứng.',
    },
    selfChecks: [
      {
        id: `SC-${meta.lessonId}-1`,
        questionText: 'Khoáng sản nào sau đây thuộc nhóm khoáng sản nhiên liệu (năng lượng)?',
        options: [
          { id: 'A', text: 'Than đá và dầu mỏ' },
          { id: 'B', text: 'Quặng sắt và quặng bô-xít' },
          { id: 'C', text: 'Đá vôi và cát thạch anh' },
          { id: 'D', text: 'Muối mỏ và thạch cao' },
        ],
        correctAnswer: 'A',
        explanation: 'Than đá, dầu mỏ và khí tự nhiên có khả năng cháy sinh nhiệt nên thuộc nhóm khoáng sản năng lượng.',
        hint: 'Khoáng sản có thể đốt cháy tạo ra năng lượng.',
        knowledgeCardId: `KC-${meta.lessonId}-2`,
      },
    ],
  };
}

// 5. THỦY QUYỂN, SÔNG, HỒ, BIỂN & THỦY TRIỀU (LỚP 6 BÀI 18 - 20)
export function getHydrosphereOceansPreset(meta: TextbookSource): TopicKnowledgePacket {
  return {
    summary: `Thủy quyển gồm toàn bộ lớp nước bao quanh Trái Đất; vòng tuần hoàn lớn của nước duy trì sự sống; sông ngòi có lưu vực, phụ lưu và chi lưu; thủy triều dao động do lực hút của Mặt Trăng và Mặt Trời.`,
    relatedErrorCodes: ['K01', 'K02', 'K04'],
    cards: [
      {
        id: `KC-${meta.lessonId}-1`,
        cardIndex: 1,
        title: 'Thủy quyển và Sông ngòi, Nước ngầm',
        concept: 'Vòng tuần hoàn nước, Lưu vực sông, Phụ lưu, Chi lưu',
        coreDefinition: 'Thủy quyển là toàn bộ lớp nước trên Trái Đất (đại dương chiếm 97,5%, nước ngọt chỉ chiếm 2,5%).',
        keyPoints: [
          'Vòng tuần hoàn lớn: Nước biển bốc hơi -> ngưng tụ thành mây -> mây bay vào đất liền gặp lạnh sinh mưa -> nước chảy theo sông ngòi, ngấm thành nước ngầm rồi đổ ra biển.',
          'Hệ thống sông gồm: Dòng sông chính, phụ lưu (sông nhánh cấp nước cho dòng chính), và chi lưu (sông thoát nước ra biển).',
          'Khúc uốn và hồ móng ngựa: Đoạn sông đồng bằng xói mòn bên lở, bồi tụ bên bồi; khi cổ uốn bị cắt dòng sẽ cô lập thành hồ móng ngựa (như Hồ Tây).',
        ],
        visualExample: 'Sơ đồ vòng tuần hoàn nước và cấu tạo lưu vực sông (SGK tr. 156-159).',
        sgkCitation: { bookTitle: meta.bookTitle, bookPage: meta.bookPageStart, pdfPage: meta.pdfPageStart, section: 'Mục Thủy quyển & Sông ngòi' },
        commonTrapAlert: 'Bẫy thường gặp: Nhầm phụ lưu và chi lưu (phụ lưu dẫn nước VÀO, chi lưu thoát nước RA).',
        iconName: 'Droplets',
      },
      {
        id: `KC-${meta.lessonId}-2`,
        cardIndex: 2,
        title: 'Biển, Đại dương, Thủy triều và Dòng biển',
        concept: 'Độ muối biển, Sóng biển, Triều cường, Triều kém, Dòng hải lưu',
        coreDefinition: 'Nước biển có độ muối trung bình 35‰; dao động mực nước theo chu kì gọi là thủy triều.',
        keyPoints: [
          'Độ muối trung bình đại dương là 35‰ (biển Đông nước ta khoảng 32 - 33‰ do nhiều sông đổ vào).',
          'Triều cường: Xảy ra vào ngày Trăng tròn (rằm 15) và ngày Không trăng (mùng 1) khi Mặt Trời, Mặt Trăng và Trái Đất thẳng hàng -> dao động mực nước lớn nhất.',
          'Triều kém: Xảy ra vào ngày trăng khuyết (mùng 7-8 và 22-23) khi Mặt Trời và Mặt Trăng vuông góc -> dao động mực nước nhỏ nhất.',
          'Dòng biển (Hải lưu): Dòng biển nóng làm ấm và ẩm ven bờ; Dòng biển lạnh làm khô ráo tạo hoang mạc ven bờ.',
        ],
        visualExample: 'Sơ đồ vị trí các thiên thể vào ngày triều cường và triều kém (SGK tr. 162-164).',
        sgkCitation: { bookTitle: meta.bookTitle, bookPage: meta.bookPageStart + 2, pdfPage: meta.pdfPageStart + 2, section: 'Mục Biển và Đại dương' },
        commonTrapAlert: 'Bẫy thường gặp: Nhầm lực sinh triều của Mặt Trời mạnh hơn Mặt Trăng (thực tế Mặt Trăng mạnh hơn 2,17 lần vì ở rất gần).',
        iconName: 'Waves',
      },
    ],
    comparison: {
      id: `comp-${meta.lessonId}`,
      conceptA: 'Triều cường (Spring tide)',
      conceptB: 'Triều kém (Neap tide)',
      comparisonTable: [
        { criteria: 'Thời điểm xảy ra', conceptAVal: 'Ngày Sóc (mùng 1 không trăng) và ngày Vọng (ngày rằm trăng tròn)', conceptBVal: 'Ngày Thượng huyền (mùng 7-8) và Hạ huyền (ngày 22-23 trăng khuyết)' },
        { criteria: 'Vị trí thiên thể', conceptAVal: 'Mặt Trời, Mặt Trăng và Trái Đất nằm THẲNG HÀNG', conceptBVal: 'Mặt Trăng, Trái Đất và Mặt Trời tạo thành GÓC VUÔNG 90°' },
        { criteria: 'Dao động mực nước', conceptAVal: 'Nước dâng cao nhất và rút sâu nhất (biên độ triều lớn nhất)', conceptBVal: 'Nước dâng ít nhất và rút ít nhất (biên độ triều nhỏ nhất)' },
      ],
      commonConfusion: 'Học sinh hay nhầm triều cường xảy ra vào ngày trăng khuyết.',
      memoryRule: 'Mẹo nhớ: Thẳng hàng triều cường dâng cao; Vuông góc triều kém nước dâng thấp.',
    },
    selfChecks: [
      {
        id: `SC-${meta.lessonId}-1`,
        questionText: 'Vào ngày nào thì xảy ra hiện tượng triều cường với biên độ dao động mực nước biển lớn nhất?',
        options: [
          { id: 'A', text: 'Ngày không trăng (mùng 1) và ngày trăng tròn (ngày rằm)' },
          { id: 'B', text: 'Ngày trăng khuyết đầu tháng và cuối tháng' },
          { id: 'C', text: 'Chỉ xảy ra duy nhất vào ngày Hạ chí 22/6' },
          { id: 'D', text: 'Xảy ra ngẫu nhiên không có chu kì' },
        ],
        correctAnswer: 'A',
        explanation: 'SGK Địa lí 6 Bài 20 nêu rõ: Triều cường diễn ra vào ngày Không trăng và ngày Trăng tròn khi Mặt Trời, Mặt Trăng và Trái Đất thẳng hàng.',
        hint: 'Mùng 1 và ngày rằm.',
        knowledgeCardId: `KC-${meta.lessonId}-2`,
      },
    ],
  };
}

// 6. DÂN SỐ THẾ GIỚI & ĐÔ THỊ HÓA (LỚP 6 BÀI 23 - 24)
export function getWorldPopulationUrbanPreset(meta: TextbookSource): TopicKnowledgePacket {
  return {
    summary: `Dân số thế giới tăng nhanh; mật độ dân số phản ánh mức độ tập trung dân cư; dân cư phân bố không đều giữa đồng bằng ven biển và vùng núi cao hoang mạc; đô thị hóa phát triển gắn liền với các siêu đô thị.`,
    relatedErrorCodes: ['K01', 'K02', 'S02'],
    cards: [
      {
        id: `KC-${meta.lessonId}-1`,
        cardIndex: 1,
        title: 'Quy mô dân số và Mật độ dân số thế giới',
        concept: 'Công thức tính mật độ dân số, Phân bố dân cư',
        coreDefinition: 'Mật độ dân số = Số dân (người) / Diện tích đất (km²), đơn vị là người/km².',
        keyPoints: [
          'Dân số thế giới đã vượt mốc 8 tỉ người (năm 2022) và tiếp tục tăng.',
          'Phân bố không đều: Tập trung rất đông ở vùng đồng bằng châu thổ sông, vùng ven biển, nơi có khí hậu ấm áp nguồn nước dồi dào (Đông Á, Nam Á, Tây Âu).',
          'Thưa thớt ở vùng núi cao hiểm trở, hoang mạc khô cằn hoặc vùng cực băng giá quanh năm.',
        ],
        visualExample: 'Bản đồ phân bố dân cư thế giới với các chấm điểm đậm đặc (SGK tr. 176).',
        sgkCitation: { bookTitle: meta.bookTitle, bookPage: meta.bookPageStart, pdfPage: meta.pdfPageStart, section: 'Mục 1. Dân số & phân bố' },
        commonTrapAlert: 'Bẫy tính toán: Nhầm lấy diện tích chia cho số dân (đúng phải là Số dân chia cho Diện tích).',
        iconName: 'Users',
      },
      {
        id: `KC-${meta.lessonId}-2`,
        cardIndex: 2,
        title: 'Đô thị hóa và các Siêu đô thị',
        concept: 'Quần cư thành thị, Siêu đô thị trên 10 triệu dân',
        coreDefinition: 'Đô thị hóa là quá trình mở rộng các thành phố, tăng nhanh tỉ lệ dân cư sống ở đô thị.',
        keyPoints: [
          'Khái niệm siêu đô thị: Là các thành phố có quy mô dân số từ 10 triệu người trở lên.',
          'Các siêu đô thị lớn nhất thế giới: Tô-ky-ô (Nhật Bản, trên 37 triệu người), Đê-li (Ấn Độ), Thượng Hải (Trung Quốc), Xao Pao-lô (Bra-xin).',
          'Thách thức đô thị hóa: Ùn tắc giao thông, ô nhiễm môi trường, thiếu nhà ở và áp lực giải quyết việc làm.',
        ],
        visualExample: 'Hình ảnh thành phố Tô-ky-ô hiện đại và bản đồ các siêu đô thị (SGK tr. 179).',
        sgkCitation: { bookTitle: meta.bookTitle, bookPage: meta.bookPageStart + 2, pdfPage: meta.pdfPageStart + 2, section: 'Mục 2. Đô thị hóa' },
        commonTrapAlert: 'Bẫy thường gặp: Nhầm lẫn giữa mật độ dân số (người/km2) với quy mô dân số (tổng số người).',
        iconName: 'Building',
      },
    ],
    comparison: {
      id: `comp-${meta.lessonId}`,
      conceptA: 'Quần cư Nông thôn',
      conceptB: 'Quần cư Đô thị (Thành thị)',
      comparisonTable: [
        { criteria: 'Mật độ dân số', conceptAVal: 'Mật độ thấp, nhà cửa phân tán gắn với ruộng vườn, đồng cỏ', conceptBVal: 'Mật độ rất cao, nhà cửa cao tầng san sát nhau' },
        { criteria: 'Hoạt động kinh tế chính', conceptAVal: 'Nông nghiệp, lâm nghiệp, nuôi trồng đánh bắt thủy sản', conceptBVal: 'Công nghiệp, thương mại, dịch vụ, tài chính ngân hàng' },
        { criteria: 'Lối sống văn hóa', conceptAVal: 'Gắn bó với phong tục tập quán làng xóm truyền thống', conceptBVal: 'Năng động, hiện đại, tuân thủ quy chế pháp luật đô thị' },
      ],
      commonConfusion: 'Học sinh hay nhầm lẫn quy mô dân số với mật độ dân số khi so sánh nông thôn và thành thị.',
      memoryRule: 'Mẹo nhớ: Nông thôn làm nông ruộng vườn thưa thớt; Thành thị công thương nhà cao san sát.',
    },
    selfChecks: [
      {
        id: `SC-${meta.lessonId}-1`,
        questionText: 'Một tỉnh có diện tích 5 000 km² và dân số là 1 500 000 người. Mật độ dân số của tỉnh đó là bao nhiêu?',
        options: [
          { id: 'A', text: '300 người/km²' },
          { id: 'B', text: '30 người/km²' },
          { id: 'C', text: '3 000 người/km²' },
          { id: 'D', text: '333 km²/người' },
        ],
        correctAnswer: 'A',
        explanation: 'Mật độ dân số = 1 500 000 người ÷ 5 000 km² = 300 người/km².',
        hint: 'Lấy dân số chia cho diện tích.',
        knowledgeCardId: `KC-${meta.lessonId}-1`,
      },
    ],
  };
}

// 7. CHÂU ÂU (LỚP 7 BÀI 1 - 3)
export function getEuropeGeographyPreset(meta: TextbookSource): TopicKnowledgePacket {
  return {
    summary: `Châu Âu là bán đảo lớn phía tây lục địa Á - Âu; đồng bằng chiếm 2/3 diện tích; khí hậu ôn đới hải dương và lục địa; dân số già, mức gia tăng dân số tự nhiên rất thấp; tỉ lệ dân thành thị cao trên 75%.`,
    relatedErrorCodes: ['K01', 'K02', 'K03'],
    cards: [
      {
        id: `KC-${meta.lessonId}-1`,
        cardIndex: 1,
        title: 'Đặc điểm tự nhiên Châu Âu',
        concept: 'Địa hình đồng bằng, dãy An-pơ, khí hậu ôn đới',
        coreDefinition: 'Châu Âu có 3 mặt giáp biển, địa hình chủ yếu là đồng bằng (chiếm 2/3 diện tích), núi trẻ ở phía nam.',
        keyPoints: [
          'Địa hình: Núi già ở phía bắc và trung tâm (dãy Xcan-đi-na-vi); Núi trẻ đỉnh nhọn tuyết phủ ở phía nam (dãy An-pơ đỉnh Mông Blăng 4 807m); Đồng bằng trải dài từ tây sang đông.',
          'Khí hậu: Khí hậu ôn đới hải dương ở Tây Âu (mưa quanh năm nhờ dòng biển nóng Bắc Đại Tây Dương); Khí hậu ôn đới lục địa ở Đông Âu (mùa đông lạnh có tuyết, mùa hạ nóng ít mưa).',
          'Sông ngòi: Mạng lưới dày đặc, các sông lớn: Sông Rai-nơ, sông Đa-nuýp (chảy qua nhiều nước), sông Vôn-ga (dài nhất châu Âu 3 690 km).',
        ],
        visualExample: 'Lược đồ tự nhiên Châu Âu và hình ảnh dãy núi tuyết An-pơ (SGK tr. 98-102).',
        sgkCitation: { bookTitle: meta.bookTitle, bookPage: meta.bookPageStart, pdfPage: meta.pdfPageStart, section: 'Mục 1. Đặc điểm tự nhiên' },
        commonTrapAlert: 'Bẫy thường gặp: Nhầm khí hậu Đông Âu mưa nhiều hơn Tây Âu (Tây Âu mới là nơi mưa nhiều quanh năm).',
        iconName: 'Compass',
      },
      {
        id: `KC-${meta.lessonId}-2`,
        cardIndex: 2,
        title: 'Đặc điểm dân cư - xã hội Châu Âu',
        concept: 'Cơ cấu dân số già, Đô thị hóa, Di cư quốc tế',
        coreDefinition: 'Châu Âu có cơ cấu dân số già và tỉ lệ dân thành thị vào loại cao nhất thế giới (>75%).',
        keyPoints: [
          'Cơ cấu dân số già: Nhóm dưới 15 tuổi giảm mạnh, nhóm trên 65 tuổi tăng cao; nhiều quốc gia có tỉ suất gia tăng tự nhiên âm hoặc gần bằng 0.',
          'Hệ quả: Thiếu hụt lực lượng lao động trẻ, tăng gánh nặng chi phí y tế và phúc lợi hưu trí.',
          'Đô thị hóa: Diễn ra từ sớm gắn liền với Cách mạng công nghiệp, lối sống đô thị phổ biến.',
        ],
        visualExample: 'Tháp dân số Châu Âu dạng thu hẹp đáy và phình to ở đỉnh (SGK tr. 104-106).',
        sgkCitation: { bookTitle: meta.bookTitle, bookPage: meta.bookPageStart + 2, pdfPage: meta.pdfPageStart + 2, section: 'Mục 2. Dân cư xã hội' },
        commonTrapAlert: 'Bẫy thường gặp: Nhầm Châu Âu có tỉ lệ gia tăng tự nhiên cao.',
        iconName: 'Users',
      },
    ],
    comparison: {
      id: `comp-${meta.lessonId}`,
      conceptA: 'Khí hậu Ôn đới hải dương (Tây Âu)',
      conceptB: 'Khí hậu Ôn đới lục địa (Đông Âu)',
      comparisonTable: [
        { criteria: 'Tác động của biển', conceptAVal: 'Chịu ảnh hưởng sâu sắc của biển và dòng biển nóng', conceptBVal: 'Ít chịu ảnh hưởng của biển do nằm sâu trong nội địa' },
        { criteria: 'Nhiệt độ mùa đông', conceptAVal: 'Mùa đông ấm áp, nhiệt độ hiếm khi xuống dưới 0°C', conceptBVal: 'Mùa đông rất lạnh giá, có tuyết rơi bao phủ dài ngày' },
        { criteria: 'Lượng mưa và phân bố', conceptAVal: 'Mưa dồi dào quanh năm (800 - 1 000 mm/năm)', conceptBVal: 'Lượng mưa ít hơn (400 - 600 mm/năm), tập trung vào mùa hạ' },
      ],
      commonConfusion: 'Học sinh hay nhầm lẫn tính chất mùa đông giữa Tây Âu và Đông Âu.',
      memoryRule: 'Mẹo nhớ: Tây Âu hải dương ấm ẩm mưa quanh năm; Đông Âu lục địa mùa đông tuyết lạnh.',
    },
    selfChecks: [
      {
        id: `SC-${meta.lessonId}-1`,
        questionText: 'Đặc điểm nổi bật nhất của cơ cấu dân số theo tuổi ở Châu Âu hiện nay là gì?',
        options: [
          { id: 'A', text: 'Cơ cấu dân số già, tỉ lệ người trên 65 tuổi ngày càng tăng' },
          { id: 'B', text: 'Cơ cấu dân số trẻ, tỉ lệ trẻ em chiếm trên 40%' },
          { id: 'C', text: 'Gia tăng dân số tự nhiên thuộc hàng cao nhất thế giới' },
          { id: 'D', text: 'Không bị thiếu hụt lực lượng lao động' },
        ],
        correctAnswer: 'A',
        explanation: 'SGK Địa lí 7 Bài 2 xác nhận: Châu Âu là châu lục có cơ cấu dân số già điển hình, tỉ lệ người cao tuổi tăng nhanh.',
        hint: 'Dân số già hóa.',
        knowledgeCardId: `KC-${meta.lessonId}-2`,
      },
    ],
  };
}

// 8. CHÂU Á (LỚP 7 BÀI 4 - 5)
export function getAsiaGeographyPreset(meta: TextbookSource): TopicKnowledgePacket {
  return {
    summary: `Châu Á là châu lục rộng nhất thế giới (44,4 triệu km²); 3/4 diện tích là núi và cao nguyên đồ sộ (Himalaya với đỉnh Everest 8 848m); khí hậu gió mùa và lục địa; dân số đông nhất thế giới (>4,7 tỉ người).`,
    relatedErrorCodes: ['K01', 'K02', 'K03'],
    cards: [
      {
        id: `KC-${meta.lessonId}-1`,
        cardIndex: 1,
        title: 'Tự nhiên Châu Á: Địa hình đồ sộ và Khí hậu gió mùa',
        concept: 'Dãy Himalaya, Everest 8 848m, Khí hậu gió mùa',
        coreDefinition: 'Châu Á có diện tích rộng nhất thế giới, địa hình hiểm trở với "nóc nhà thế giới" Himalaya.',
        keyPoints: [
          'Địa hình: Núi, sơn nguyên và cao nguyên chiếm 3/4 diện tích, tập trung ở trung tâm (Himalaya với đỉnh Everest 8 848m, cao nguyên Tây Tạng); đồng bằng rộng lớn ven biển (Hoa Bắc, Ấn - Hằng, Mê Công).',
          'Khí hậu gió mùa: Chiếm diện tích lớn ở Nam Á, Đông Á và Đông Nam Á. Mùa hạ có gió mùa Tây Nam nóng ẩm gây mưa lớn; mùa đông có gió mùa Đông Bắc khô lạnh.',
          'Sông ngòi: Nhiều hệ thống sông lớn bậc nhất thế giới: Trường Giang (6 300 km), Hoàng Hà, sông Mê Công, sông Hằng.',
        ],
        visualExample: 'Lược đồ tự nhiên Châu Á và hình ảnh đỉnh Everest tuyết phủ (SGK tr. 109-114).',
        sgkCitation: { bookTitle: meta.bookTitle, bookPage: meta.bookPageStart, pdfPage: meta.pdfPageStart, section: 'Mục 1. Đặc điểm tự nhiên' },
        commonTrapAlert: 'Bẫy thường gặp: Nhầm Châu Phi rộng hơn Châu Á (Châu Á mới là châu lục rộng nhất thế giới).',
        iconName: 'Mountain',
      },
      {
        id: `KC-${meta.lessonId}-2`,
        cardIndex: 2,
        title: 'Dân cư và Xã hội Châu Á',
        concept: 'Đông dân nhất thế giới, Đa tôn giáo, Phân bố dân cư',
        coreDefinition: 'Châu Á có dân số đông nhất thế giới, chiếm gần 60% tổng dân số toàn cầu.',
        keyPoints: [
          'Quy mô dân số: Đạt hơn 4,7 tỉ người; hai quốc gia đông dân nhất hành tinh là Ấn Độ và Trung Quốc (mỗi nước trên 1,4 tỉ người).',
          'Phân bố không đều: Tập trung đông đúc ở các đồng bằng châu thổ màu mỡ ven biển; thưa thớt ở vùng núi cao Tây Tạng và các hoang mạc Gô-bi.',
          'Cái nôi của các tôn giáo lớn: Nơi ra đời của 4 tôn giáo lớn trên thế giới: Ấn Độ giáo, Phật giáo, Ki-tô giáo và Hồi giáo.',
        ],
        visualExample: 'Bản đồ phân bố dân cư Châu Á và biểu đồ cơ cấu tôn giáo (SGK tr. 116-118).',
        sgkCitation: { bookTitle: meta.bookTitle, bookPage: meta.bookPageStart + 2, pdfPage: meta.pdfPageStart + 2, section: 'Mục 2. Dân cư xã hội' },
        commonTrapAlert: 'Bẫy thường gặp: Nhầm Ki-tô giáo sinh ra ở Châu Âu (thực tế ra đời tại vùng Tây Á thuộc Châu Á).',
        iconName: 'Users',
      },
    ],
    comparison: {
      id: `comp-${meta.lessonId}`,
      conceptA: 'Khu vực Gió mùa Châu Á (Đông Á, Nam Á, ĐNÁ)',
      conceptB: 'Khu vực Lục địa khô hạn Châu Á (Tây Á, Trung Á)',
      comparisonTable: [
        { criteria: 'Lượng mưa trung bình', conceptAVal: 'Mưa dồi dào (1 000 - 2 500 mm/năm) do gió mùa từ biển', conceptBVal: 'Khô hạn, mưa rất ít (<200 - 300 mm/năm)' },
        { criteria: 'Cảnh quan thiên nhiên', conceptAVal: 'Rừng nhiệt đới ẩm, rừng lá rộng xanh tốt', conceptBVal: 'Hoang mạc và bán hoang mạc cát (Gô-bi, Rúp En-kha-li)' },
        { criteria: 'Mạng lưới sông ngòi', conceptAVal: 'Mạng lưới dày đặc, nhiều sông lớn đầy nước', conceptBVal: 'Mạng lưới sông thưa thớt, nhiều vùng không có dòng chảy' },
      ],
      commonConfusion: 'Học sinh hay nghĩ toàn bộ Châu Á đều có khí hậu gió mùa ẩm ướt.',
      memoryRule: 'Mẹo nhớ: Gió mùa mưa nhiều rừng tốt; Lục địa nội địa hoang mạc khô cằn.',
    },
    selfChecks: [
      {
        id: `SC-${meta.lessonId}-1`,
        questionText: 'Dãy núi nào cao và đồ sộ nhất Châu Á và thế giới, với đỉnh Everest cao 8 848m?',
        options: [
          { id: 'A', text: 'Dãy Hi-ma-lay-a (Himalaya)' },
          { id: 'B', text: 'Dãy An-pơ' },
          { id: 'C', text: 'Dãy Cooc-đi-e' },
          { id: 'D', text: 'Dãy Trường Sơn' },
        ],
        correctAnswer: 'A',
        explanation: 'Dãy Himalaya ở Nam Á là dãy núi đồ sộ nhất hành tinh, đỉnh Everest cao 8 848m.',
        hint: 'Nóc nhà thế giới.',
        knowledgeCardId: `KC-${meta.lessonId}-1`,
      },
    ],
  };
}

// 9. CHÂU PHI (LỚP 7 BÀI 6 - 8)
export function getAfricaGeographyPreset(meta: TextbookSource): TopicKnowledgePacket {
  return {
    summary: `Châu Phi là lục địa nóng khô bậc nhất thế giới; hoang mạc Sahara lớn nhất hành tinh; sông Nin dài nhất thế giới (6 650 km); gia tăng dân số cao, cơ cấu dân số trẻ; đối mặt nạn đói, dịch bệnh và sa mạc hóa.`,
    relatedErrorCodes: ['K01', 'K02', 'K04'],
    cards: [
      {
        id: `KC-${meta.lessonId}-1`,
        cardIndex: 1,
        title: 'Tự nhiên Châu Phi: Lục địa nóng khô và Hoang mạc Sahara',
        concept: 'Khí hậu khô nóng, Sahara, Sông Nin 6 650 km, Xa van',
        coreDefinition: 'Châu Phi có hình khối khổng lồ, đường Xích đạo và hai chí tuyến chạy qua làm khí hậu nóng khô nhất thế giới.',
        keyPoints: [
          'Nguyên nhân khô nóng: Phần lớn lãnh thổ nằm giữa hai chí tuyến, bờ biển ít bị chia cắt, có các dòng biển lạnh ven bờ ngăn cản hơi ẩm vào đất liền.',
          'Hoang mạc Sahara: Hoang mạc cát lớn nhất thế giới, khí hậu cực đoan nắng gắt ban ngày và lạnh buốt ban đêm.',
          'Sông Nin: Con sông dài nhất thế giới (6 650 km), chảy ngược từ nam lên bắc đổ ra Địa Trung Hải, cái nôi của văn minh Ai Cập.',
          'Cảnh quan: Rừng xích đạo ẩm ở bồn địa Công-gô; Xa van đồng cỏ cây bụi chiếm diện tích rộng lớn nuôi nhiều động vật ăn cỏ và ăn thịt.',
        ],
        visualExample: 'Bản đồ tự nhiên Châu Phi và bức ảnh hoang mạc Sahara (SGK tr. 120-125).',
        sgkCitation: { bookTitle: meta.bookTitle, bookPage: meta.bookPageStart, pdfPage: meta.pdfPageStart, section: 'Mục 1. Tự nhiên Châu Phi' },
        commonTrapAlert: 'Bẫy thường gặp: Nhầm sông Nin chảy từ bắc xuống nam (sông Nin bắt nguồn từ xích đạo chảy lên phía bắc).',
        iconName: 'Sun',
      },
      {
        id: `KC-${meta.lessonId}-2`,
        cardIndex: 2,
        title: 'Dân cư, Xã hội và Vấn đề Môi trường Châu Phi',
        concept: 'Tăng dân số nhanh, Đói nghèo, Sa mạc hóa',
        coreDefinition: 'Châu Phi có tỉ lệ gia tăng dân số tự nhiên cao nhất thế giới, đối mặt nhiều thách thức an ninh lương thực.',
        keyPoints: [
          'Gia tăng dân số: Dân số tăng nhanh, tỉ suất sinh cao, cơ cấu dân số trẻ (nhóm dưới 15 tuổi chiếm trên 40%).',
          'Vấn đề nan giải: Xung đột sắc tộc, nạn đói ở vùng Xa-hen, dịch bệnh và thất học.',
          'Sa mạc hóa: Do biến đổi khí hậu kết hợp chăn thả gia súc quá mức và chặt phá cây lấy củi khiến hoang mạc Sahara ngày càng mở rộng xuống phía nam.',
        ],
        visualExample: 'Bản đồ phân bố nạn đói và vành đai sa mạc hóa Xa-hen (SGK tr. 127-130).',
        sgkCitation: { bookTitle: meta.bookTitle, bookPage: meta.bookPageStart + 2, pdfPage: meta.pdfPageStart + 2, section: 'Mục 2. Dân cư và Môi trường' },
        commonTrapAlert: 'Bẫy thường gặp: Cho rằng Châu Phi thiếu tài nguyên (Châu Phi rất giàu khoáng sản như vàng, kim cương, dầu mỏ nhưng kinh tế chậm phát triển do lịch sử thuộc địa và bất ổn).',
        iconName: 'AlertTriangle',
      },
    ],
    comparison: {
      id: `comp-${meta.lessonId}`,
      conceptA: 'Cảnh quan Rừng mưa nhiệt đới (Bồn địa Công-gô)',
      conceptB: 'Cảnh quan Xa van đồng cỏ (Vùng cận xích đạo)',
      comparisonTable: [
        { criteria: 'Khí hậu và lượng mưa', conceptAVal: 'Nóng ẩm quanh năm, mưa rất nhiều (1 500 - 2 500 mm)', conceptBVal: 'Khí hậu có 1 mùa mưa và 1 mùa khô kéo dài sâu sắc' },
        { criteria: 'Thảm thực vật', conceptAVal: 'Rừng rậm nhiều tầng, cây gỗ cao tán rậm rạp thường xanh', conceptBVal: 'Đồng cỏ cao xen lẫn cây bụi gai và cây bao-báp khổng lồ' },
        { criteria: 'Giới động vật', conceptAVal: 'Nhiều loài linh trưởng (tinh tinh, khỉ), bò sát, chim', conceptBVal: 'Động vật móng guốc chạy nhanh (ngựa vằn, linh dương) và thú săn mồi (sư tử, báo)' },
      ],
      commonConfusion: 'Học sinh thường nhầm cây bao-báp mọc trong rừng mưa nhiệt đới thay vì vùng xa van.',
      memoryRule: 'Mẹo nhớ: Rừng mưa Công-gô rậm rạp quanh năm; Xa van đồng cỏ bao-báp mùa khô kéo dài.',
    },
    selfChecks: [
      {
        id: `SC-${meta.lessonId}-1`,
        questionText: 'Tại sao Châu Phi là châu lục nóng và khô hạn bậc nhất thế giới?',
        options: [
          { id: 'A', text: 'Có đường Xích đạo và 2 chí tuyến đi qua, hình khối lớn, dòng biển lạnh ven bờ' },
          { id: 'B', text: 'Do có nhiều sông ngòi lớn đổ ra biển' },
          { id: 'C', text: 'Do nằm hoàn toàn ở vùng cực Nam' },
          { id: 'D', text: 'Do địa hình toàn là đồng bằng thấp ngập nước' },
        ],
        correctAnswer: 'A',
        explanation: 'SGK Địa lí 7 khẳng định: Vị trí nội chí tuyến, hình khối khổng lồ ít vịnh ăn sâu và các dòng biển lạnh ven bờ tạo nên khí hậu nóng khô đặc trưng của Châu Phi.',
        hint: 'Hai chí tuyến đi qua và hình khối lục địa.',
        knowledgeCardId: `KC-${meta.lessonId}-1`,
      },
    ],
  };
}

// 10. CHÂU MỸ (LỚP 7 BÀI 9 - 11)
export function getAmericasGeographyPreset(meta: TextbookSource): TopicKnowledgePacket {
  return {
    summary: `Châu Mỹ nằm hoàn toàn ở bán cầu Tây, trải dài từ cực Bắc đến cận cực Nam; cấu trúc 3 dải địa hình (núi trẻ Cooc-đi-e và An-đét ở phía tây, đồng bằng Amazon ở giữa, sơn nguyên ở phía đông); rừng Amazon là "lá phổi xanh" của Trái Đất.`,
    relatedErrorCodes: ['K01', 'K02', 'K03'],
    cards: [
      {
        id: `KC-${meta.lessonId}-1`,
        cardIndex: 1,
        title: 'Tự nhiên Châu Mỹ: Hệ thống Cooc-đi-e, An-đét và Rừng Amazon',
        concept: 'Địa hình 3 dải, Dãy An-đét, Sông và Rừng Amazon',
        coreDefinition: 'Châu Mỹ gồm Bắc Mỹ và Nam Mỹ, cấu trúc địa hình phân hóa theo chiều kinh tuyến từ tây sang đông.',
        keyPoints: [
          'Dải núi trẻ phía tây: Hệ thống Cooc-đi-e (Bắc Mỹ) và dãy An-đét (Nam Mỹ) dài hơn 8 000 km, cao đồ sộ, nhiều đỉnh >6 000m.',
          'Dải đồng bằng ở giữa: Đồng bằng Trung tâm (Bắc Mỹ) và đồng bằng châu thổ Amazon rộng lớn nhất hành tinh (Nam Mỹ).',
          'Sơn nguyên và núi già phía đông: Dãy A-pa-lat (Bắc Mỹ), sơn nguyên Guy-a-na và sơn nguyên Bra-xin (Nam Mỹ).',
          'Sông và Rừng Amazon: Sông Amazon có lưu lượng nước lớn nhất thế giới; rừng mưa nhiệt đới Amazon lưu trữ sinh học lớn nhất và là lá phổi xanh điều hòa khí hậu toàn cầu.',
        ],
        visualExample: 'Lược đồ tự nhiên Châu Mỹ và cảnh quan rừng ngập nước Amazon (SGK tr. 132-137).',
        sgkCitation: { bookTitle: meta.bookTitle, bookPage: meta.bookPageStart, pdfPage: meta.pdfPageStart, section: 'Mục 1. Tự nhiên Châu Mỹ' },
        commonTrapAlert: 'Bẫy thường gặp: Nhầm sông Amazon dài nhất thế giới (sông Nin dài nhất, nhưng sông Amazon có lưu lượng nước lớn nhất thế giới).',
        iconName: 'Trees',
      },
      {
        id: `KC-${meta.lessonId}-2`,
        cardIndex: 2,
        title: 'Dân cư, Xã hội và Bảo vệ Rừng Amazon',
        concept: 'Người nhập cư, Văn hóa Mỹ Latinh, Cháy rừng Amazon',
        coreDefinition: 'Dân cư Châu Mỹ đa dạng chủng tộc bậc nhất thế giới do lịch sử di dân lâu dài; rừng Amazon đang bị đe dọa nghiêm trọng.',
        keyPoints: [
          'Thành phần dân cư: Người bản địa (Anh-điêng), người gốc Âu, người gốc Phi và người lai; hình thành nền văn hóa Mỹ Latinh rực rỡ.',
          'Bắc Mỹ (Hoa Kỳ, Canada): Kinh tế phát triển cao hàng đầu thế giới, trình độ đô thị hóa văn minh.',
          'Vấn đề cấp bách tại Amazon: Khai thác gỗ bừa bãi, làm đường xuyên rừng và cháy rừng tàn phá nghiêm trọng đa dạng sinh học, gia tăng hiệu ứng nhà kính toàn cầu.',
        ],
        visualExample: 'Hình ảnh thảm họa cháy rừng Amazon và bản đồ suy thoái rừng (SGK tr. 140-142).',
        sgkCitation: { bookTitle: meta.bookTitle, bookPage: meta.bookPageStart + 2, pdfPage: meta.pdfPageStart + 2, section: 'Mục 2. Xã hội & Rừng Amazon' },
        commonTrapAlert: 'Bẫy thường gặp: Bỏ qua vai trò toàn cầu của rừng Amazon trong việc hấp thụ khí CO2.',
        iconName: 'ShieldAlert',
      },
    ],
    comparison: {
      id: `comp-${meta.lessonId}`,
      conceptA: 'Hệ thống núi Cooc-đi-e (Bắc Mỹ)',
      conceptB: 'Dãy núi An-đét (Nam Mỹ)',
      comparisonTable: [
        { criteria: 'Vị trí địa lí', conceptAVal: 'Chạy dọc rìa phía tây của toàn bộ Bắc Mỹ', conceptBVal: 'Chạy dọc suốt chiều dài bờ tây lục địa Nam Mỹ' },
        { criteria: 'Đặc điểm cấu tạo', conceptAVal: 'Gồm nhiều dãy núi song song xen kẽ các bồn địa và cao nguyên', conceptBVal: 'Dãy núi uốn nếp cao đồ sộ, đỉnh cao nhất A-côn-ca-goa (6 960m)' },
        { criteria: 'Khí hậu phân hóa', conceptAVal: 'Ôn đới và cận nhiệt đới vùng núi', conceptBVal: 'Phân hóa theo đai cao từ nhiệt đới chân núi lên băng tuyết đỉnh núi' },
      ],
      commonConfusion: 'Học sinh hay gộp chung Cooc-đi-e và An-đét là một dãy núi duy nhất.',
      memoryRule: 'Mẹo nhớ: Cooc-đi-e ở Bắc Mỹ; An-đét ở Nam Mỹ.',
    },
    selfChecks: [
      {
        id: `SC-${meta.lessonId}-1`,
        questionText: 'Tại sao rừng mưa nhiệt đới Amazon được coi là "lá phổi xanh" của toàn Trái Đất?',
        options: [
          { id: 'A', text: 'Cung cấp lượng oxy khổng lồ, hấp thụ CO2 và điều hòa khí hậu toàn cầu' },
          { id: 'B', text: 'Là nơi khai thác gỗ không giới hạn cho mọi quốc gia' },
          { id: 'C', text: 'Ngăn chặn hoàn toàn các cơn bão từ Thái Bình Dương' },
          { id: 'D', text: 'Có diện tích chiếm 80% lục địa Bắc Mỹ' },
        ],
        correctAnswer: 'A',
        explanation: 'Rừng Amazon hấp thụ hàng tỉ tấn carbon mỗi năm, sản sinh oxy và duy trì cân bằng sinh thái cho toàn bộ hành tinh.',
        hint: 'Hấp thụ khí CO2 và nhả khí oxy.',
        knowledgeCardId: `KC-${meta.lessonId}-2`,
      },
    ],
  };
}

// 11. CHÂU ĐẠI DƯƠNG & CHÂU NAM CỰC (LỚP 7 BÀI 12 - 14)
export function getOceaniaAntarcticaPreset(meta: TextbookSource): TopicKnowledgePacket {
  return {
    summary: `Châu Đại Dương gồm lục địa Ô-xtrây-li-a và hàng nghìn đảo; Ô-xtrây-li-a khô hạn, sinh vật độc đáo có túi (kanguru, koala); Châu Nam Cực lạnh nhất thế giới, phủ băng tuyết vĩnh cửu, được bảo vệ vì mục đích hòa bình khoa học.`,
    relatedErrorCodes: ['K01', 'K02', 'K03'],
    cards: [
      {
        id: `KC-${meta.lessonId}-1`,
        cardIndex: 1,
        title: 'Châu Đại Dương và Lục địa Ô-xtrây-li-a',
        concept: 'Khô hạn nội địa, Thú có túi (Kanguru, Koala), Rạn san hô',
        coreDefinition: 'Châu Đại Dương nằm ở Thái Bình Dương, lục địa Ô-xtrây-li-a có giới sinh vật đặc hữu độc nhất vô nhị.',
        keyPoints: [
          'Địa hình và khí hậu Ô-xtrây-li-a: Phía tây là cao nguyên tây Ô-xtrây-li-a khô hạn; ở giữa là bồn địa; phía đông là dãy Đông Ô-xtrây-li-a chắn gió; hoang mạc chiếm phần lớn diện tích.',
          'Sinh vật đặc hữu: Lục địa bị cô lập hàng triệu năm nên bảo tồn các loài thú có túi nguyên thủy: Chuột túi (Kanguru), gấu túi Koala, thú mỏ vịt.',
          'Rạn san hô Great Barrier: Rạn san hô ngầm lớn nhất thế giới ở vùng biển đông bắc Ô-xtrây-li-a.',
        ],
        visualExample: 'Hình ảnh chú chuột túi Kanguru và rạn san hô Great Barrier rực rỡ sắc màu (SGK tr. 144-148).',
        sgkCitation: { bookTitle: meta.bookTitle, bookPage: meta.bookPageStart, pdfPage: meta.pdfPageStart, section: 'Mục 1. Châu Đại Dương' },
        commonTrapAlert: 'Bẫy thường gặp: Nhầm thủ đô của Ô-xtrây-li-a là Sydney (thủ đô chính thức là Can-bơ-rơ / Canberra).',
        iconName: 'Compass',
      },
      {
        id: `KC-${meta.lessonId}-2`,
        cardIndex: 2,
        title: 'Châu Nam Cực: Lục địa Băng giá Vĩnh cửu',
        concept: 'Lạnh nhất thế giới, Băng dày >2 000m, Hiệp ước Nam Cực',
        coreDefinition: 'Châu Nam Cực là lục địa lạnh nhất, nhiều gió bão nhất và khô nhất hành tinh.',
        keyPoints: [
          'Khí hậu cực đoan: Nhiệt độ trung bình luôn dưới 0°C (kỉ lục âm 89,2°C tại trạm Vostok); phủ tầng băng khổng lồ dày trung bình trên 2 000m chứa gần 90% lượng băng tuyết thế giới.',
          'Sinh vật: Động vật tiêu biểu là chim cánh cụt, hải cẩu, cá voi xanh nhờ nguồn sinh vật phù du phong phú dưới nước biển lạnh.',
          'Hiệp ước Nam Cực (1959): Kí kết bảo vệ Nam Cực chỉ dùng cho mục đích hòa bình và nghiên cứu khoa học, cấm mọi hoạt động quân sự và khai thác khoáng sản.',
        ],
        visualExample: 'Hình ảnh đàn chim cánh cụt trên khối băng khổng lồ Châu Nam Cực (SGK tr. 151-154).',
        sgkCitation: { bookTitle: meta.bookTitle, bookPage: meta.bookPageStart + 2, pdfPage: meta.pdfPageStart + 2, section: 'Mục 2. Châu Nam Cực' },
        commonTrapAlert: 'Bẫy thường gặp: Nhầm Châu Nam Cực có cư dân sinh sống định cư lâu dài (chỉ có các nhà khoa học làm việc tạm thời).',
        iconName: 'Snowflake',
      },
    ],
    comparison: {
      id: `comp-${meta.lessonId}`,
      conceptA: 'Lục địa Ô-xtrây-li-a',
      conceptB: 'Lục địa Nam Cực',
      comparisonTable: [
        { criteria: 'Khí hậu chủ yếu', conceptAVal: 'Khô nóng, phần lớn diện tích là hoang mạc và bán hoang mạc', conceptBVal: 'Lạnh buốt cực đoan quanh năm, băng tuyết vĩnh cửu' },
        { criteria: 'Dân cư sinh sống', conceptAVal: 'Có dân cư sinh sống đông đúc ở dải duyên hải đông nam', conceptBVal: 'Không có dân cư thường trú, chỉ có trạm nghiên cứu khoa học' },
        { criteria: 'Động vật đặc trưng', conceptAVal: 'Thú có túi đặc hữu: Kanguru, Koala, chó Dingo', conceptBVal: 'Chim cánh cụt, hải cẩu, thú biển thích nghi băng tuyết' },
      ],
      commonConfusion: 'Học sinh hay nhầm gấu Bắc cực sống ở Nam Cực (gấu trắng chỉ sống ở Bắc Cực; Nam Cực chỉ có chim cánh cụt).',
      memoryRule: 'Mẹo nhớ: Bắc Cực có gấu trắng; Nam Cực có chim cánh cụt.',
    },
    selfChecks: [
      {
        id: `SC-${meta.lessonId}-1`,
        questionText: 'Hiệp ước Nam Cực năm 1959 quy định lục địa Nam Cực được sử dụng vào mục đích gì?',
        options: [
          { id: 'A', text: 'Chỉ phục vụ mục đích hòa bình và hợp tác nghiên cứu khoa học' },
          { id: 'B', text: 'Chia cắt lãnh thổ cho các cường quốc khai thác dầu mỏ' },
          { id: 'C', text: 'Xây dựng các căn cứ thử nghiệm vũ khí hạt nhân' },
          { id: 'D', text: 'Khai hoang mở rộng diện tích trồng lúa nước' },
        ],
        correctAnswer: 'A',
        explanation: 'Hiệp ước Nam Cực năm 1959 bảo đảm toàn bộ Châu Nam Cực là khu bảo tồn khoa học phi quân sự.',
        hint: 'Hòa bình và nghiên cứu khoa học.',
        knowledgeCardId: `KC-${meta.lessonId}-2`,
      },
    ],
  };
}

// 12. VIỆT NAM: VỊ TRÍ ĐỊA LÍ, ĐỊA HÌNH & KHOÁNG SẢN (LỚP 8 BÀI 1 - 3)
export function getVietnamTerritoryReliefPreset(meta: TextbookSource): TopicKnowledgePacket {
  return {
    summary: `Việt Nam nằm ở rìa đông bán đảo Đông Dương; tọa độ 4 điểm cực; vùng biển 1 triệu km² với Hoàng Sa và Trường Sa; địa hình 3/4 đồi núi nhưng chủ yếu là đồi núi thấp; hai hướng chính là Tây Bắc - Đông Nam và Vòng cung.`,
    relatedErrorCodes: ['K01', 'K02', 'S01'],
    cards: [
      {
        id: `KC-${meta.lessonId}-1`,
        cardIndex: 1,
        title: 'Vị trí địa lí và Phạm vi lãnh thổ Việt Nam',
        concept: '4 điểm cực, 331 344 km², Biển Đông 1 triệu km²',
        coreDefinition: 'Nước ta nằm ở rìa đông bán đảo Đông Dương, trung tâm khu vực Đông Nam Á, trong vùng nội chí tuyến Bắc bán cầu.',
        keyPoints: [
          'Tọa độ 4 điểm cực: Cực Bắc 23°23\'B (Lũng Cú, Đồng Văn, Hà Giang); Cực Nam 8°34\'B (Đất Mũi, Ngọc Hiển, Cà Mau); Cực Tây 102°09\'Đ (Sín Thầu, Mường Nhé, Điện Biên); Cực Đông 109°28\'Đ (Vạn Thạnh, Vạn Ninh, Khánh Hòa).',
          'Vùng đất liền: Diện tích 331 344 km², bờ biển hình chữ S dài 3 260 km từ Móng Cái đến Hà Tiên.',
          'Vùng biển: Rộng khoảng 1 triệu km² trên Biển Đông, có hơn 4 000 hòn đảo lớn nhỏ và 2 quần đảo Hoàng Sa, Trường Sa.',
        ],
        visualExample: 'Lược đồ vị trí địa lí và 4 điểm cực trên đất liền Việt Nam (SGK tr. 98-100).',
        sgkCitation: { bookTitle: meta.bookTitle, bookPage: meta.bookPageStart, pdfPage: meta.pdfPageStart, section: 'Mục 1. Vị trí và phạm vi lãnh thổ' },
        commonTrapAlert: 'Bẫy thường gặp: Nhớ sai tọa độ cực Bắc (23°23\'B) hoặc nhầm cực Đông ở Mũi Điện Phú Yên thay vì Vạn Thạnh Khánh Hòa theo SGK chuẩn.',
        iconName: 'MapPin',
      },
      {
        id: `KC-${meta.lessonId}-2`,
        cardIndex: 2,
        title: 'Đặc điểm chung của Địa hình Việt Nam',
        concept: '3/4 đồi núi, Núi thấp chiếm 85%, Hai hướng địa hình',
        coreDefinition: 'Địa hình đồi núi chiếm 3/4 diện tích nhưng chủ yếu là đồi núi thấp (dưới 1 000m chiếm tới 85%).',
        keyPoints: [
          'Độ cao: Đồi núi thấp chiếm ưu thế, núi cao trên 2 000m chỉ chiếm 1% (Phan-xi-păng 3 143m là đỉnh núi cao nhất). Đồng bằng chỉ chiếm 1/4 diện tích.',
          'Cấu trúc: Địa hình cổ được nâng cao và trẻ lại trong Tân kiến tạo, phân bậc rõ rệt.',
          'Hai hướng chính: Hướng Tây Bắc - Đông Nam (vùng Tây Bắc và Trường Sơn Bắc); Hướng Vòng cung (vùng Đông Bắc với 4 cánh cung Sông Gâm, Ngân Sơn, Bắc Sơn, Đông Triều và Trường Sơn Nam).',
          'Tác động khí hậu ẩm: Xâm thực mạnh ở đồi núi và bồi tụ nhanh ở đồng bằng; địa hình Karst đá vôi độc đáo.',
        ],
        visualExample: 'Lược đồ địa hình Việt Nam với các khối núi và hướng nghiêng Tây Bắc - Đông Nam (SGK tr. 104).',
        sgkCitation: { bookTitle: meta.bookTitle, bookPage: meta.bookPageStart + 2, pdfPage: meta.pdfPageStart + 2, section: 'Mục 2. Địa hình Việt Nam' },
        commonTrapAlert: 'Bẫy thường gặp: Nhầm địa hình nước ta chủ yếu là núi cao hiểm trở (thực tế 85% là đồi núi thấp dưới 1 000m).',
        iconName: 'Mountain',
      },
    ],
    comparison: {
      id: `comp-${meta.lessonId}`,
      conceptA: 'Vùng núi Đông Bắc',
      conceptB: 'Vùng núi Tây Bắc',
      comparisonTable: [
        { criteria: 'Vị trí giới hạn', conceptAVal: 'Nằm ở tả ngạn sông Hồng (phía đông thung lũng sông Hồng)', conceptBVal: 'Nằm giữa sông Hồng và sông Cả' },
        { criteria: 'Hướng địa hình', conceptAVal: 'Hướng VÒNG CUNG với 4 cánh cung mở rộng về phía bắc', conceptBVal: 'Hướng TÂY BẮC - ĐÔNG NAM với các dải núi cao đồ sộ' },
        { criteria: 'Độ cao địa hình', conceptAVal: 'Chủ yếu là đồi núi thấp, nhiều địa hình Karst đá vôi', conceptBVal: 'Địa hình cao và hiểm trở nhất nước (dãy Hoàng Liên Sơn)' },
      ],
      commonConfusion: 'Học sinh thường nhầm hướng địa hình của vùng núi Đông Bắc thành Tây Bắc - Đông Nam.',
      memoryRule: 'Mẹo nhớ: Đông Bắc cánh cung núi thấp; Tây Bắc hiểm trở Hoàng Liên Sơn.',
    },
    selfChecks: [
      {
        id: `SC-${meta.lessonId}-1`,
        questionText: 'Đặc điểm nào sau đây là đặc điểm cơ bản nhất của địa hình Việt Nam?',
        options: [
          { id: 'A', text: 'Đồi núi chiếm 3/4 diện tích nhưng chủ yếu là đồi núi thấp dưới 1 000m' },
          { id: 'B', text: 'Đồng bằng chiếm 3/4 diện tích lãnh thổ' },
          { id: 'C', text: 'Toàn bộ núi đồi đều có hướng vòng cung' },
          { id: 'D', text: 'Chỉ có núi cao trên 2 000m, không có cao nguyên bazan' },
        ],
        correctAnswer: 'A',
        explanation: 'SGK Địa lí 8 khẳng định: 3/4 diện tích là đồi núi, trong đó 85% là đồi núi thấp dưới 1 000m; núi cao >2 000m chỉ chiếm 1%.',
        hint: 'Đồi núi thấp chiếm 85%.',
        knowledgeCardId: `KC-${meta.lessonId}-2`,
      },
    ],
  };
}

// 13. VIỆT NAM: KHÍ HẬU & THỦY VĂN (LỚP 8 BÀI 4 - 5)
export function getVietnamClimateHydroPreset(meta: TextbookSource): TopicKnowledgePacket {
  return {
    summary: `Khí hậu Việt Nam mang tính chất nhiệt đới ẩm gió mùa; hai mùa gió đối lập (gió mùa Đông Bắc và gió mùa Tây Nam); dãy Bạch Mã ngăn gió mùa Đông Bắc; mạng lưới 2 360 con sông dồi dào phù sa và chế độ nước theo mùa.`,
    relatedErrorCodes: ['K01', 'K02', 'K04'],
    cards: [
      {
        id: `KC-${meta.lessonId}-1`,
        cardIndex: 1,
        title: 'Khí hậu nhiệt đới ẩm gió mùa Việt Nam',
        concept: 'Nhiệt độ >20°C, Mưa 1 500-2 000mm, Gió mùa Đông Bắc & Tây Nam',
        coreDefinition: 'Khí hậu nước ta có nhiệt độ cao, bức xạ dồi dào, lượng mưa lớn và hai mùa gió trái ngược nhau.',
        keyPoints: [
          'Tính chất nhiệt đới ẩm: Nhiệt độ trung bình năm trên 20°C (trừ vùng núi cao), số giờ nắng 1 400 - 3 000 giờ/năm, lượng mưa lớn 1 500 - 2 000 mm/năm, độ ẩm >80%.',
          'Gió mùa Đông Bắc (tháng 11 đến tháng 4): Lạnh khô đầu mùa, lạnh ẩm mưa phùn cuối mùa ở miền Bắc; bị chặn lại ở dãy Bạch Mã (16°B).',
          'Gió mùa Tây Nam (tháng 5 đến tháng 10): Nóng ẩm gây mưa lớn trên cả nước; gây hiệu ứng phơn Tây Nam (gió Lào) khô nóng ở Bắc Trung Bộ.',
        ],
        visualExample: 'Bản đồ khí hậu Việt Nam và biểu đồ nhiệt độ - lượng mưa trạm Hà Nội, TP.HCM (SGK tr. 115-119).',
        sgkCitation: { bookTitle: meta.bookTitle, bookPage: meta.bookPageStart, pdfPage: meta.pdfPageStart, section: 'Mục 1. Khí hậu Việt Nam' },
        commonTrapAlert: 'Bẫy thường gặp: Nhầm miền Nam có mùa đông lạnh (miền Nam nóng quanh năm với 2 mùa mưa - khô rõ rệt).',
        iconName: 'CloudRain',
      },
      {
        id: `KC-${meta.lessonId}-2`,
        cardIndex: 2,
        title: 'Thủy văn và Sông ngòi Việt Nam',
        concept: '2 360 con sông, Sông Hồng, Sông Cửu Long, Phù sa',
        coreDefinition: 'Nước ta có mạng lưới sông ngòi dày đặc với 2 360 con sông dài trên 10 km, giàu phù sa và chế độ nước theo mùa.',
        keyPoints: [
          'Đặc điểm: Phần lớn là sông nhỏ, ngắn và dốc; hai hệ thống sông lớn nhất là hệ thống sông Hồng ở phía Bắc và hệ thống sông Mê Công (sông Cửu Long) ở phía Nam.',
          'Hướng chảy chính: Tây Bắc - Đông Nam (sông Hồng, sông Đà, sông Tiền, sông Hậu) và Vòng cung (sông Lô, sông Gâm, sông Cầu).',
          'Chế độ nước: Theo mùa rõ rệt, mùa lũ trùng với mùa mưa chiếm 70 - 80% tổng lượng nước cả năm, hàm lượng phù sa lớn (>200 triệu tấn/năm).',
        ],
        visualExample: 'Lược đồ mạng lưới sông ngòi Việt Nam (SGK tr. 125).',
        sgkCitation: { bookTitle: meta.bookTitle, bookPage: meta.bookPageStart + 2, pdfPage: meta.pdfPageStart + 2, section: 'Mục 2. Sông ngòi Việt Nam' },
        commonTrapAlert: 'Bẫy thường gặp: Nhầm lẫn giữa lưu vực sông và chiều dài dòng sông chính.',
        iconName: 'Waves',
      },
    ],
    comparison: {
      id: `comp-${meta.lessonId}`,
      conceptA: 'Gió mùa mùa đông (Gió mùa Đông Bắc)',
      conceptB: 'Gió mùa mùa hạ (Gió mùa Tây Nam)',
      comparisonTable: [
        { criteria: 'Thời gian hoạt động', conceptAVal: 'Từ tháng 11 đến tháng 4 năm sau', conceptBVal: 'Từ tháng 5 đến tháng 10 hàng năm' },
        { criteria: 'Nguồn gốc khối khí', conceptAVal: 'Áp cao lục địa Xi-bia (phương bắc)', conceptBVal: 'Áp cao vịnh Bengan và áp cao chí tuyến Nam bán cầu' },
        { criteria: 'Tính chất thời tiết', conceptAVal: 'Đầu mùa lạnh khô, nửa cuối mùa lạnh ẩm có mưa phùn', conceptBVal: 'Nóng ẩm gây mưa dông lớn, hiệu ứng phơn ở miền Trung' },
      ],
      commonConfusion: 'Học sinh thường nhầm gió mùa Đông Bắc hoạt động suốt cả năm trên phạm vi cả nước.',
      memoryRule: 'Mẹo nhớ: Đông Bắc lạnh buốt mùa đông dừng ở Bạch Mã; Tây Nam nóng ẩm mưa rào hè sang.',
    },
    selfChecks: [
      {
        id: `SC-${meta.lessonId}-1`,
        questionText: 'Dãy núi nào đóng vai trò là ranh giới tự nhiên ngăn cản gió mùa Đông Bắc, phân chia khí hậu hai miền Bắc - Nam của nước ta?',
        options: [
          { id: 'A', text: 'Dãy Bạch Mã (vĩ độ 16°B)' },
          { id: 'B', text: 'Dãy Hoàng Liên Sơn' },
          { id: 'C', text: 'Dãy Hoành Sơn' },
          { id: 'D', text: 'Cánh cung Đông Triều' },
        ],
        correctAnswer: 'A',
        explanation: 'Dãy Bạch Mã đâm ngang ra biển ở vĩ độ 16°B chặn đứng ảnh hưởng của gió mùa Đông Bắc, từ đây vào nam khí hậu không còn mùa đông lạnh.',
        hint: 'Dãy núi ở Thừa Thiên Huế.',
        knowledgeCardId: `KC-${meta.lessonId}-1`,
      },
    ],
  };
}

// 14. VIỆT NAM: BIỂN ĐẢO VÀ CHỦ QUYỀN (LỚP 8 BÀI 11 & LỚP 9 BÀI 19 - 20)
export function getVietnamSeaIslandsPreset(meta: TextbookSource): TopicKnowledgePacket {
  return {
    summary: `Vùng biển Việt Nam rộng 1 triệu km² trên Biển Đông gồm 5 vùng pháp lí theo Luật Biển 2012: Nội thủy, Lãnh hải (12 hải lí), Tiếp giáp lãnh hải, Đặc quyền kinh tế (200 hải lí) và Thềm lục địa; hai quần đảo Hoàng Sa và Trường Sa.`,
    relatedErrorCodes: ['K01', 'K02', 'S01'],
    cards: [
      {
        id: `KC-${meta.lessonId}-1`,
        cardIndex: 1,
        title: 'Chủ quyền các vùng biển Việt Nam theo Luật Biển 2012',
        concept: 'Đường cơ sở, Nội thủy, Lãnh hải 12 hải lí, EEZ 200 hải lí',
        coreDefinition: 'Theo Luật Biển Việt Nam 2012 và UNCLOS 1982, vùng biển nước ta gồm 5 bộ phận tính từ Đường cơ sở.',
        keyPoints: [
          'Đường cơ sở: Đường gãy khúc nối các mốc nhô ra xa nhất của bờ biển và hải đảo ven bờ.',
          'Nội thủy: Vùng nước phía trong đường cơ sở, có chủ quyền hoàn toàn như đất liền.',
          'Lãnh hải: Rộng 12 hải lí (1 hải lí = 1 852 m); ranh giới ngoài lãnh hải là BIÊN GIỚI QUỐC GIA TRÊN BIỂN.',
          'Vùng đặc quyền kinh tế (EEZ): Mở rộng tới 200 hải lí từ đường cơ sở, nước ta có chủ quyền kinh tế tuyệt đối.',
          'Quần đảo Hoàng Sa (TP. Đà Nẵng) và Quần đảo Trường Sa (tỉnh Khánh Hòa) là lãnh thổ thiêng liêng bất khả xâm phạm.',
        ],
        visualExample: 'Sơ đồ mặt cắt 5 vùng biển Việt Nam theo UNCLOS 1982 (SGK tr. 148).',
        sgkCitation: { bookTitle: meta.bookTitle, bookPage: meta.bookPageStart, pdfPage: meta.pdfPageStart, section: 'Mục 1. Vùng biển Việt Nam' },
        commonTrapAlert: 'Bẫy thường gặp: Nhầm ranh giới ngoài của vùng đặc quyền kinh tế là biên giới quốc gia (đúng phải là ranh giới ngoài của LÃNH HẢI 12 hải lí).',
        iconName: 'Shield',
      },
      {
        id: `KC-${meta.lessonId}-2`,
        cardIndex: 2,
        title: 'Phát triển kinh tế biển và Bảo vệ môi trường biển đảo',
        concept: '4 ngành kinh tế biển: Thủy sản, Khoáng sản, Du lịch, Hàng hải',
        coreDefinition: 'Kinh tế biển đóng góp lớn cho GDP và bảo đảm an ninh quốc phòng Tổ quốc.',
        keyPoints: [
          'Đánh bắt và nuôi trồng thủy sản: Bãi tôm, bãi cá dồi dào, đẩy mạnh đánh bắt xa bờ.',
          'Khai thác khoáng sản: Dầu mỏ và khí đốt ở thềm lục địa phía nam, muối ăn Sa Huỳnh, Cà Ná.',
          'Du lịch biển đảo: Vịnh Hạ Long, Nha Trang, Phú Quốc, Côn Đảo.',
          'Giao thông hàng hải: Nằm trên tuyến hàng hải quốc tế nhộn nhịp, phát triển cảng nước sâu (Hải Phòng, Cái Mép - Thị Vải).',
        ],
        visualExample: 'Hình ảnh giàn khoan dầu khí Bạch Hổ và cảng container Cái Mép (SGK tr. 151).',
        sgkCitation: { bookTitle: meta.bookTitle, bookPage: meta.bookPageStart + 2, pdfPage: meta.pdfPageStart + 2, section: 'Mục 2. Kinh tế biển' },
        commonTrapAlert: 'Bẫy thường gặp: Chỉ chú trọng khai thác tài nguyên mà bỏ quên bảo vệ môi trường biển và rừng ngập mặn.',
        iconName: 'Anchor',
      },
    ],
    comparison: {
      id: `comp-${meta.lessonId}`,
      conceptA: 'Vùng Lãnh hải Việt Nam',
      conceptB: 'Vùng Đặc quyền kinh tế (EEZ)',
      comparisonTable: [
        { criteria: 'Phạm vi chiều rộng', conceptAVal: 'Rộng 12 hải lí tính từ đường cơ sở ra ngoài', conceptBVal: 'Mở rộng tới 200 hải lí tính từ đường cơ sở' },
        { criteria: 'Quy chế pháp lí', conceptAVal: 'Là lãnh thổ chủ quyền quốc gia, ranh giới ngoài là BIÊN GIỚI QUỐC GIA', conceptBVal: 'Hưởng quyền chủ quyền kinh tế, quyền tài phán nhưng tàu nước ngoài được tự do hàng hải' },
        { criteria: 'Quyền của tàu nước ngoài', conceptAVal: 'Chỉ được đi qua vô hại theo quy định pháp luật', conceptBVal: 'Tự do hàng hải và hàng không quốc tế nhưng không được đánh bắt hoặc thăm dò tài nguyên' },
      ],
      commonConfusion: 'Học sinh thường nhầm vùng lãnh hải và vùng đặc quyền kinh tế đều có quy chế như đất liền.',
      memoryRule: 'Mẹo nhớ: Lãnh hải 12 hải lí là biên giới biển; Đặc quyền kinh tế 200 hải lí khai thác tài nguyên.',
    },
    selfChecks: [
      {
        id: `SC-${meta.lessonId}-1`,
        questionText: 'Theo Luật Biển Việt Nam 2012, ranh giới ngoài của vùng biển nào được coi là biên giới quốc gia trên biển của Việt Nam?',
        options: [
          { id: 'A', text: 'Ranh giới ngoài của vùng Lãnh hải (12 hải lí)' },
          { id: 'B', text: 'Ranh giới ngoài của vùng Tiếp giáp lãnh hải' },
          { id: 'C', text: 'Ranh giới ngoài của Vùng đặc quyền kinh tế (200 hải lí)' },
          { id: 'D', text: 'Đường cơ sở ven bờ' },
        ],
        correctAnswer: 'A',
        explanation: 'Luật Biển Việt Nam quy định: Ranh giới ngoài của lãnh hải 12 hải lí chính là đường biên giới quốc gia trên biển của nước ta.',
        hint: 'Lãnh hải 12 hải lí.',
        knowledgeCardId: `KC-${meta.lessonId}-1`,
      },
    ],
  };
}

// 15. VIỆT NAM: DÂN TỘC & DÂN SỐ (LỚP 9 BÀI 1 - 3)
export function getVietnamPopulationPreset(meta: TextbookSource): TopicKnowledgePacket {
  return {
    summary: `Việt Nam có 54 dân tộc anh em (Kinh chiếm 85,3%); dân số hơn 100 triệu người (thứ 3 Đông Nam Á); đang trong thời kì cơ cấu dân số vàng nhưng già hóa nhanh; mật độ dân số cao (~300 người/km²) phân bố không đều.`,
    relatedErrorCodes: ['K01', 'K02', 'S02'],
    cards: [
      {
        id: `KC-${meta.lessonId}-1`,
        cardIndex: 1,
        title: 'Cộng đồng 54 Dân tộc và Cơ cấu Dân số Vàng',
        concept: '54 dân tộc, 101 triệu dân, Dân số vàng, Già hóa',
        coreDefinition: 'Nước ta là quốc gia đa dân tộc, dân tộc Kinh chiếm 85,3%; dân số vượt 100 triệu người.',
        keyPoints: [
          '54 dân tộc anh em: Người Kinh tập trung ở đồng bằng ven biển; 53 dân tộc thiểu số cư trú chủ yếu ở miền núi và trung du.',
          'Cơ cấu dân số vàng: Tỉ lệ người trong độ tuổi lao động (15 - 64 tuổi) chiếm trên 65% tổng dân số, là cơ hội vàng phát triển kinh tế.',
          'Xu hướng già hóa: Nhóm trên 65 tuổi tăng nhanh do tuổi thọ bình quân nâng lên (73,7 tuổi) và mức sinh giảm.',
        ],
        visualExample: 'Biểu đồ cơ cấu các dân tộc và tháp dân số Việt Nam chuyển sang thu hẹp (SGK tr. 117-120).',
        sgkCitation: { bookTitle: meta.bookTitle, bookPage: meta.bookPageStart, pdfPage: meta.pdfPageStart, section: 'Mục 1. Dân tộc và Dân số' },
        commonTrapAlert: 'Bẫy thường gặp: Nhầm lẫn dân số nước ta già hóa từ trước (thực tế đang ở thời kì dân số vàng nhưng có tốc độ già hóa nhanh).',
        iconName: 'Users',
      },
      {
        id: `KC-${meta.lessonId}-2`,
        cardIndex: 2,
        title: 'Phân bố dân cư và Quần cư ở Việt Nam',
        concept: 'Mật độ 306 người/km², Chênh lệch đồng bằng - miền núi',
        coreDefinition: 'Mật độ dân số nước ta cao gấp 5 lần trung bình thế giới và phân bố rất không đều.',
        keyPoints: [
          'Chênh lệch vùng: Đồng bằng sông Hồng có mật độ cao nhất nước (>1 000 người/km²); trong khi Tây Bắc chỉ khoảng 80 - 130 người/km².',
          'Đô thị hóa: Tỉ lệ dân thành thị tăng nhanh (hiện đạt trên 38%), TP.HCM và Hà Nội là hai đô thị đặc biệt.',
          'Chính sách: Điều động dân cư, phát triển kinh tế - xã hội miền núi để cân bằng tài nguyên và lao động.',
        ],
        visualExample: 'Lược đồ mật độ dân số và các đô thị lớn ở Việt Nam (SGK tr. 122).',
        sgkCitation: { bookTitle: meta.bookTitle, bookPage: meta.bookPageStart + 2, pdfPage: meta.pdfPageStart + 2, section: 'Mục 2. Phân bố dân cư' },
        commonTrapAlert: 'Bẫy thường gặp: Nghĩ rằng Tây Nguyên có mật độ dân số thấp nhất (thực tế Tây Bắc mới có mật độ dân số thấp nhất).',
        iconName: 'Building',
      },
    ],
    comparison: {
      id: `comp-${meta.lessonId}`,
      conceptA: 'Dân cư Đồng bằng sông Hồng',
      conceptB: 'Dân cư Vùng Tây Bắc',
      comparisonTable: [
        { criteria: 'Mật độ dân số', conceptAVal: 'Rất cao, trên 1 000 người/km² (cao nhất cả nước)', conceptBVal: 'Rất thấp, chỉ khoảng 80 - 130 người/km² (thấp nhất cả nước)' },
        { criteria: 'Thành phần dân tộc', conceptAVal: 'Tuyệt đại đa số là dân tộc Kinh', conceptBVal: 'Nhiều dân tộc thiểu số: Tày, Thái, Mường, H\'Mông, Dao' },
        { criteria: 'Cơ sở hạ tầng & việc làm', conceptAVal: 'Hạ tầng phát triển, sức ép giải quyết việc làm lớn', conceptBVal: 'Giao thông khó khăn, thiếu hụt lao động kĩ thuật cao' },
      ],
      commonConfusion: 'Học sinh hay nhầm vùng có mật độ dân số thấp nhất là Tây Nguyên thay vì Tây Bắc.',
      memoryRule: 'Mẹo nhớ: ĐBSH đông đúc nhất nước (>1 000 ng/km²); Tây Bắc thưa thớt nhất.',
    },
    selfChecks: [
      {
        id: `SC-${meta.lessonId}-1`,
        questionText: 'Thế nào là thời kì "cơ cấu dân số vàng" mà Việt Nam đang trải qua?',
        options: [
          { id: 'A', text: 'Tỉ lệ người trong độ tuổi lao động (15-64 tuổi) chiếm trên 65%, gấp đôi nhóm phụ thuộc' },
          { id: 'B', text: 'Tỉ lệ trẻ em dưới 15 tuổi chiếm trên 60% dân số' },
          { id: 'C', text: 'Dân số tăng trưởng với tốc độ trên 3% mỗi năm' },
          { id: 'D', text: 'Toàn bộ dân số đều làm việc trong ngành khai thác vàng' },
        ],
        correctAnswer: 'A',
        explanation: 'Cơ cấu dân số vàng là khi cứ 2 người trong độ tuổi lao động mới có 1 người phụ thuộc (nhóm 15-64 tuổi chiếm >65%).',
        hint: 'Lao động gấp đôi nhóm phụ thuộc.',
        knowledgeCardId: `KC-${meta.lessonId}-1`,
      },
    ],
  };
}
