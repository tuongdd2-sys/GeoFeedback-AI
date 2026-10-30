import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json({ limit: '10mb' }));

// Telemetry-compliant GoogleGenAI client (User-Agent: 'aistudio-build')
const apiKey = process.env.GEMINI_API_KEY || '';
let aiClient: GoogleGenAI | null = null;

if (apiKey) {
  try {
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  } catch (err) {
    console.error('Failed to initialize GoogleGenAI client:', err);
  }
}

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    hasApiKey: Boolean(apiKey && apiKey.length > 5),
    model: 'gemini-3.8-flash',
    timestamp: new Date().toISOString(),
  });
});

// Diagnostic endpoint
app.post('/api/gemini/diagnose', async (req: Request, res: Response) => {
  try {
    const { question, studentAnswer, rubric } = req.body;

    if (!question || !studentAnswer) {
      return res.status(400).json({ error: 'Missing question or studentAnswer' });
    }

    // If deterministic question with multiple choice, verify correctness deterministically
    const isMultipleChoice = question.questionType === 'multiple_choice';
    const isCorrect = isMultipleChoice
      ? String(studentAnswer).trim().toUpperCase() === String(question.correctAnswer).trim().toUpperCase()
      : false;

    // If API client is not configured, inform client to use high-fidelity curriculum rule engine
    if (!aiClient) {
      return res.json({
        fallback: true,
        isCorrect,
        message: 'Dịch vụ Gemini AI chưa cấu hình khóa API. Hệ thống kích hoạt bộ quy chuẩn chẩn đoán sư phạm ngoại tuyến.',
      });
    }

    const promptText = `
Bạn là chuyên gia sư phạm môn Địa lí cấp THCS tại Việt Nam (thuộc dự án GeoFeedback AI).
Nhiệm vụ của bạn: Phân tích câu trả lời của học sinh lớp ${question.grade || 6}, chỉ ra nguyên nhân nhận thức/tư duy dẫn đến câu trả lời này, và hướng dẫn sửa sai một cách ân cần, khích lệ.

THÔNG TIN CÂU HỎI:
- Khối lớp: ${question.grade}
- Chủ đề: ${question.topicName || question.topic}
- Bài học: ${question.lesson || 'Chương trình GDPT THCS'}
- Dạng câu hỏi: ${question.questionType}
- Đề bài: ${question.questionText}
${question.options ? `- Các phương án lựa chọn:\n${question.options.map((o: any) => `  ${o.id}. ${o.text}`).join('\n')}` : ''}
- Đáp án chuẩn đã xác định: ${question.correctAnswer}
- Giải thích chuẩn: ${question.explanation}
- Mục tiêu cần đạt: ${question.learningObjective}

CÂU TRẢ LỜI CỦA HỌC SINH: "${studentAnswer}"

QUY TẮC BẮT BUỘC:
1. Đối với trắc nghiệm, kết quả đúng/sai đã được hệ thống xác định: ${isCorrect ? 'ĐÚNG' : 'CHƯA ĐÚNG'}.
2. Nếu học sinh trả lời SAI:
   - Phân loại lỗi vào đúng 1 trong các nhóm:
     + "loi_kien_thuc" (chưa nắm khái niệm, quy luật cơ bản)
     + "loi_phan_biet" (nhầm lẫn hai khái niệm gần nhau như thời tiết vs khí hậu, nội lực vs ngoại lực)
     + "loi_doc_ban_do" (nhầm kinh vĩ độ, tỉ lệ, hướng, đường đồng mức)
     + "loi_doc_bieu_do" (nhầm trục, đơn vị, nhầm % cơ cấu với giá trị tuyệt đối)
     + "loi_tinh_toan" (tính sai quy tắc mật độ dân số, giảm nhiệt theo độ cao, múi giờ)
     + "loi_suy_luan" (đảo lộn nguyên nhân - kết quả)
     + "loi_van_dung" (áp dụng sai vào thực tiễn địa phương)
     + "chua_du_du_lieu" (nếu câu trả lời quá mơ hồ)
   - Tôn trọng học sinh: Tuyệt đối KHÔNG dùng các từ chê bai như "em kém", "em lười", "em không hiểu gì".
   - Trả lời rõ: Em đang vướng ở đâu? Vì sao cách trả lời này chưa đúng? Cách hiểu chính xác là gì? Mẹo ghi nhớ nhanh.
   - Cung cấp 1 câu hỏi kiểm tra lại (remediation question) ngắn gọn cùng dạng để học sinh thử sức ngay.
3. Nếu học sinh trả lời ĐÚNG:
   - Khen ngợi cụ thể vì sao tư duy này chuẩn xác, củng cố thêm 1 mẹo mở rộng hoặc góc nhìn địa lí thú vị.
`;

    let response: any = null;
    let attempts = 0;
    while (attempts < 2 && !response) {
      try {
        attempts++;
        response = await aiClient.models.generateContent({
          model: 'gemini-3.1-flash-lite',
          contents: promptText,
          config: {
            systemInstruction:
              'Bạn là GeoFeedback AI - Trợ lý chẩn đoán lỗi sai và sư phạm Địa lí THCS chuẩn mực, chính xác, khích lệ và chuẩn kiến thức GDPT 2018.',
            responseMimeType: 'application/json',
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                isCorrect: { type: Type.BOOLEAN },
                errorCategory: {
                  type: Type.STRING,
                  description: 'Một trong: loi_kien_thuc, loi_phan_biet, loi_doc_ban_do, loi_doc_bieu_do, loi_tinh_toan, loi_suy_luan, loi_van_dung, chua_du_du_lieu',
                },
                diagnosis: { type: Type.STRING, description: 'Chẩn đoán ngắn gọn: Em đang vướng ở đâu?' },
                evidence: { type: Type.STRING, description: 'Căn cứ từ phương án em đã chọn' },
                confidence: { type: Type.STRING, description: 'high | medium | hypothesis' },
                explanation: { type: Type.STRING, description: 'Vì sao cách suy nghĩ này chưa chính xác' },
                correctApproach: { type: Type.STRING, description: 'Hướng dẫn cách suy luận hoặc thao tác đúng' },
                memoryTip: { type: Type.STRING, description: 'Mẹo ghi nhớ địa lí ngắn gọn, vần điệu hoặc dễ nhớ' },
                remediationQuestions: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      id: { type: Type.STRING },
                      questionText: { type: Type.STRING },
                      options: {
                        type: Type.ARRAY,
                        items: {
                          type: Type.OBJECT,
                          properties: {
                            id: { type: Type.STRING },
                            text: { type: Type.STRING },
                          },
                          required: ['id', 'text'],
                        },
                      },
                      correctAnswer: { type: Type.STRING },
                      explanation: { type: Type.STRING },
                      hint: { type: Type.STRING },
                    },
                    required: ['id', 'questionText', 'options', 'correctAnswer', 'explanation', 'hint'],
                  },
                },
                followUpNeeded: { type: Type.BOOLEAN },
              },
              required: [
                'isCorrect',
                'errorCategory',
                'diagnosis',
                'explanation',
                'correctApproach',
                'memoryTip',
                'remediationQuestions',
              ],
            },
          },
        });
      } catch (retryErr) {
        if (attempts >= 2) throw retryErr;
        await new Promise((resolve) => setTimeout(resolve, 800));
      }
    }

    const rawText = response.text?.trim() || '{}';
    const parsed = JSON.parse(rawText);

    // Enforce deterministic correctness for multiple choice
    if (isMultipleChoice) {
      parsed.isCorrect = isCorrect;
    }

    return res.json({
      success: true,
      data: parsed,
      aiGenerated: true,
    });
  } catch (error: any) {
    console.error('Gemini Diagnose Error:', error);
    // Graceful fallback to deterministic analysis
    return res.json({
      fallback: true,
      error: error.message || 'Lỗi kết nối AI',
      message: 'Đã chuyển sang chế độ phân tích quy chuẩn sư phạm nội bộ.',
    });
  }
});

// ============================================================================
// EXPERT GEOGRAPHY KNOWLEDGE ENGINE (SGK ĐỊA LÍ 6-9 & GIÁO TRÌNH ĐỊA LÝ TỰ NHIÊN ĐẠI CƯƠNG I)
// ============================================================================
export interface GeoKnowledgeEntry {
  topic: string;
  keywords: string[];
  reply: string;
  citedSource: string;
  suggestedPrompts: string[];
}

export const AUTHORITATIVE_GEO_KNOWLEDGE_BASE: GeoKnowledgeEntry[] = [
  // 1. LỰC CORIOLIS
  {
    topic: 'Lực Coriolis (Cô-ri-ô-lít)',
    keywords: ['coriolis', 'cô-ri-ô-lít', 'lệch hướng', 'lệch phải', 'lệch trái', 'lực quán tính', 'tại sao lệch hướng'],
    reply: `Lực Coriolis là lực quán tính sinh ra do sự tự quay quanh trục của Trái Đất, làm lệch hướng chuyển động của mọi vật thể trên bề mặt Trái Đất (không làm thay đổi độ lớn vận tốc, chỉ đổi hướng).
• Công thức xác định: C = 2m · v · ω · sinφ (trong đó m là khối lượng vật, v là vận tốc, ω là vận tốc góc tự quay của Trái Đất, φ là vĩ độ địa lí).
• Quy luật độ lệch:
  + Ở Bán cầu Bắc: Vật thể lệch về BÊN PHẢI theo hướng chuyển động ban đầu.
  + Ở Bán cầu Nam: Vật thể lệch về BÊN TRÁI theo hướng chuyển động ban đầu.
• Cường độ lực: Bằng 0 ở Xích đạo (vì sin 0° = 0) và đạt cực đại ở hai cực (sin 90° = 1).
• Tác động thực tiễn: Làm lệch hướng gió Tín phong, gió Tây ôn đới, các dòng hải lưu đại dương; đồng thời khiến dòng chảy các con sông ở Bán cầu Bắc có xu hướng xói mòn mạnh vào bờ hữu ngạn (bên phải theo chiều nước chảy).`,
    citedSource: 'Giáo trình Địa lý tự nhiên đại cương I (ĐH Sư phạm, tr. 48-52) & SGK Địa lí 6, Bài 7 (tr. 120)',
    suggestedPrompts: [
      'Công thức tính lực Coriolis và ý nghĩa từng đại lượng?',
      'Tại sao lực Coriolis bằng 0 ở Xích đạo?',
      'Lực Coriolis ảnh hưởng thế nào đến gió Tín phong và hải lưu?',
    ],
  },

  // 2. HỒ MÓNG NGỰA VÀ QUÁ TRÌNH UỐN KHÚC CỦA SÔNG
  {
    topic: 'Hồ móng ngựa (Oxbow lake)',
    keywords: ['hồ móng ngựa', 'khúc uốn', 'uốn khúc', 'oxbow', 'bên lở bên bồi', 'sông ngòi uốn khúc', 'hồ tây hình thành'],
    reply: `Hồ móng ngựa (hồ hình cung/lưỡi liềm) là dạng địa hình bồi tụ - xói mòn đặc trưng ở vùng hạ lưu sông đồng bằng do quá trình biến đổi khúc uốn của dòng nước:
1. Cơ chế xói lở và bồi tụ: Tại đoạn sông uốn cong, dòng nước chảy xiết va đập xói mòn mạnh bờ lõm (bờ bên lở/cut bank), trong khi ở bờ lồi (bên bồi/point bar) vận tốc nước giảm làm phù sa lắng đọng. Khúc uốn ngày càng phình rộng ra, cổ khúc uốn (neck) hẹp dần.
2. Quá trình cắt dòng: Vào mùa lũ lớn, lưu lượng nước dâng cao chảy tràn xuyên thẳng qua dải đất hẹp ở cổ khúc uốn để mở một lòng sông mới thẳng hơn và ngắn hơn.
3. Cô lập thành hồ: Nước chảy theo lòng dẫn mới thẳng, hai đầu khúc uốn cũ bị phù sa bồi lắng lấp kín dần, tách rời hoàn toàn khỏi dòng chính và trở thành hồ nước biệt lập hình móng ngựa.
• Minh chứng thực tế tại Việt Nam: Hồ Tây (Hà Nội) chính là một đoạn khúc uốn cũ của sông Hồng bị cắt dòng và cô lập trong quá khứ.`,
    citedSource: 'Giáo trình Địa lý tự nhiên đại cương I (Chương 9: Quá trình dòng chảy, tr. 195-201) & SGK Địa lí 6, Bài 19 (tr. 158)',
    suggestedPrompts: [
      'Tại sao sông ở đồng bằng lại hay uốn khúc?',
      'Hồ Tây ở Hà Nội hình thành do hiện tượng địa lí nào?',
      'Sự khác nhau giữa bờ lở và bờ bồi của khúc uốn sông?',
    ],
  },

  // 3. ĐỊA HÌNH KARST & THẠCH NHŨ
  {
    topic: 'Địa hình Karst và Thạch nhũ đá vôi',
    keywords: ['karst', 'thạch nhũ', 'măng đá', 'đá tai mèo', 'caren', 'hang động', 'phong nha', 'hạ long', 'hòa tan đá vôi'],
    reply: `Địa hình Karst là hệ thống hang động và cảnh quan bề mặt đặc biệt được tạo thành do nước hòa tan và biến đổi các loại đá dễ hòa tan, điển hình nhất là đá vôi (CaCO₃):
• Phản ứng hóa học cốt lõi:
  CaCO₃ + CO₂ + H₂O ⇌ Ca(HCO₃)₂ (phản ứng thuận hòa tan đá vôi; phản ứng nghịch kết tủa tạo thạch nhũ khi nhiệt độ tăng hoặc áp suất giảm).
• Các dạng địa hình Karst tiêu biểu:
  + Trên mặt: Khe rãnh caren (đá tai mèo lởm chởm), phễu karst, lũng karst, cánh đồng karst (polje), karst tháp và karst nón (như ở Vịnh Hạ Long, Tràng An, Đồng Văn).
  + Dưới ngầm: Hang động karst ngầm, sông ngầm (như Động Phong Nha, Sơn Đoòng).
• Phân biệt Thạch nhũ và Măng đá:
  + Thạch nhũ (Stalactite): Nhũ đá rủ từ trần hang rỗng xuống dưới do nước nhỏ giọt kết tủa CaCO₃.
  + Măng đá (Stalagmite): Măng đá mọc nhô từ nền hang lên phía trên tại điểm giọt nước rơi xuống.
  + Khi thạch nhũ và măng đá phát triển chạm vào nhau sẽ tạo thành Cột đá (Pillar).`,
    citedSource: 'Giáo trình Địa lý tự nhiên đại cương I (Chương 10: Địa hình Karst, tr. 215-228) & SGK Địa lí 6, Bài 13 (tr. 136)',
    suggestedPrompts: [
      'Phương trình phản ứng hòa tan và kết tủa thạch nhũ?',
      'Phân biệt thạch nhũ mọc từ trần và măng đá mọc từ nền hang?',
      'Tại sao Vịnh Hạ Long và Phong Nha có địa hình Karst độc nhất vô nhị?',
    ],
  },

  // 4. THỦY TRIỀU, TRIỀU CƯỜNG VÀ TRIỀU KÉM
  {
    topic: 'Thủy triều, Triều cường và Triều kém',
    keywords: ['thủy triều', 'triều cường', 'triều kém', 'sóc vọng', 'thượng huyền', 'hạ huyền', 'lực sinh triều', 'mặt trăng hút'],
    reply: `Thủy triều là hiện tượng dao động mực nước biển đại dương dâng lên hạ xuống theo chu kì, sinh ra do tổng hợp lực hấp dẫn của Mặt Trăng, Mặt Trời và lực li tâm của chuyển động hệ Trái Đất - Mặt Trăng quanh khối tâm chung:
• Lực sinh triều: Lực hút của Mặt Trăng tác động lên thủy triều lớn gấp khoảng 2,17 lần Mặt Trời (vì Mặt Trăng ở gần Trái Đất hơn Mặt Trời tới ~390 lần).
• Triều cường (Spring tide):
  + Thời điểm: Xảy ra vào ngày Trăng non (ngày Sóc, mùng 1 âm lịch) và Trăng tròn (ngày Vọng, ngày rằm 15 âm lịch).
  + Vị trí không gian: Mặt Trời, Mặt Trăng và Trái Đất nằm thẳng hàng với nhau.
  + Cơ chế: Lực hút của Mặt Trời và Mặt Trăng cộng hưởng cùng hướng, làm cho mực nước triều dâng cao nhất và hạ thấp nhất (biên độ triều cực đại).
• Triều kém (Neap tide):
  + Thời điểm: Xảy ra vào ngày Trăng bán nguyệt (Thượng huyền mùng 7 - 8 âm lịch và Hạ huyền ngày 22 - 23 âm lịch).
  + Vị trí không gian: Mặt Trăng, Trái Đất và Mặt Trời tạo thành một góc vuông 90°.
  + Cơ chế: Lực hút của Mặt Trời triệt tiêu bớt lực hút của Mặt Trăng, khiến mực nước dâng ít nhất và rút ít nhất (biên độ triều cực tiểu).
• Chế độ triều tại Việt Nam: Vịnh Bắc Bộ là nơi có chế độ "nhật triều đều" điển hình nhất thế giới (trong 1 ngày đêm chỉ có 1 lần nước lên và 1 lần nước xuống).`,
    citedSource: 'Giáo trình Địa lý tự nhiên đại cương I (Chương 4: Mặt Trăng và Thủy quyển, tr. 78-86) & SGK Địa lí 6, Bài 20 (tr. 162)',
    suggestedPrompts: [
      'Tại sao lực hút của Mặt Trăng tác động lên thủy triều mạnh hơn Mặt Trời?',
      'Vị trí của Trái Đất, Mặt Trăng, Mặt Trời vào ngày triều cường?',
      'Thế nào là chế độ nhật triều đều ở Vịnh Bắc Bộ?',
    ],
  },

  // 5. NHẬT THỰC VÀ NGUYỆT THỰC
  {
    topic: 'Nhật thực, Nguyệt thực và Chu kì Saros',
    keywords: ['nhật thực', 'nguyệt thực', 'saros', 'bóng tối', 'bóng nửa tối', 'che khuất mặt trời', 'mặt trăng máu'],
    reply: `Nhật thực và Nguyệt thực là hiện tượng che khuất thiên văn khi ba thiên thể Mặt Trời, Trái Đất và Mặt Trăng thẳng hàng:
1. Nhật thực (Solar eclipse):
   + Vị trí: Mặt Trăng nằm chính giữa Mặt Trời và Trái Đất (vào ngày Sóc/Trăng non, mùng 1 âm lịch).
   + Bản chất: Mặt Trăng che khuất một phần hoặc toàn bộ đĩa Mặt Trời, đổ bóng tối lên một dải hẹp trên bề mặt Trái Đất.
   + Gồm có: Nhật thực toàn phần (trong vùng bóng tối umbra), nhật thực một phần (vùng bóng nửa tối penumbra), và nhật thực hình khuyên (khi Mặt Trăng ở viễn điểm, kích thước góc nhỏ hơn Mặt Trời).
2. Nguyệt thực (Lunar eclipse):
   + Vị trí: Trái Đất nằm chính giữa Mặt Trời và Mặt Trăng (vào ngày Vọng/Trăng tròn, rằm 15 âm lịch).
   + Bản chất: Trái Đất chắn ánh sáng Mặt Trời, Mặt Trăng đi vào vùng bóng tối phía sau Trái Đất. Lúc này ánh sáng đỏ khúc xạ qua khí quyển Trái Đất chiếu lên Mặt Trăng tạo màu đỏ đồng ("Trăng máu").
   + Khác biệt: Nguyệt thực quan sát được ở cả nửa bán cầu đêm của Trái Đất và diễn ra lâu hơn nhật thực (kéo dài vài giờ).
3. Chu kì Saros: Chu kì thiên văn kéo dài 18 năm 11 ngày 8 giờ (khoảng 6.585,3 ngày), sau khoảng thời gian này vị trí hình học của Trái Đất, Mặt Trăng và Mặt Trời lặp lại y hệt, các lần thực tương tự lặp lại.`,
    citedSource: 'Giáo trình Địa lý tự nhiên đại cương I (Chương 4: Trái Đất và Mặt Trăng, tr. 71-76) & SGK Địa lí 6, Bài 5 (tr. 115)',
    suggestedPrompts: [
      'Tại sao không phải rằm tháng nào cũng có nguyệt thực?',
      'Tại sao khi nguyệt thực toàn phần Mặt Trăng lại có màu đỏ sẫm?',
      'Chu kì Saros là gì và kéo dài bao lâu?',
    ],
  },

  // 6. CẤU TẠO MẶT TRỜI VÀ BẢO TỪ
  {
    topic: 'Cấu tạo Mặt Trời, Bão từ và Cực quang',
    keywords: ['mặt trời', 'cấu tạo mặt trời', 'quang quyển', 'sắc quyển', 'nhật hoa', 'vết đen', 'bão từ', 'cực quang', 'gió mặt trời'],
    reply: `Mặt Trời là quả cầu khí plasma nóng sáng khổng lồ ở trung tâm Hệ Mặt Trời, chiếm 99,86% khối lượng toàn hệ. Cấu tạo từ trong ra ngoài gồm:
1. Lõi (Core): Bán kính ~0,25 R Mặt Trời, nhiệt độ ~15 triệu Kelvin, áp suất 250 tỷ atm. Nơi diễn ra phản ứng nhiệt hạch tổng hợp Hydro thành Heli giải phóng toàn bộ năng lượng bức xạ.
2. Vùng bức xạ & Vùng đối lưu: Truyền tải năng lượng photon ra các tầng khí quyển bên ngoài qua dòng đối lưu plasma.
3. Khí quyển Mặt Trời:
   + Quang quyển (Photosphere): Tầng sáng nhìn thấy bề mặt dày 300-500 km, nhiệt độ ~5.800 - 6.000 K. Nơi xuất hiện Vết đen Mặt Trời (Sunspots - nhiệt độ ~4.000 K, tối hơn xung quanh do từ trường cục bộ cực mạnh kiềm chế đối lưu).
   + Sắc quyển (Chromosphere): Dày 2.000-3.000 km phát ánh sáng hồng đỏ, là nơi xuất hiện các tai lửa (Prominence/Flare) phun trào plasma hàng vạn km.
   + Nhật hoa (Corona): Tầng ngoài cùng cực kì loãng, nhiệt độ tăng vọt lên 1-3 triệu Kelvin.
• Bão từ và Cực quang: Nhật hoa liên tục phóng ra Gió Mặt Trời (Solar Wind) gồm dòng proton và electron với tốc độ 300-800 km/s. Khi chạm vào từ quyển Trái Đất, chúng gây ra Hiện tượng Bão từ (làm nhiễu loạn truyền thông, định vị GPS, lưới điện) và kích thích các nguyên tử oxy, nitơ trong khí quyển vùng cực phát sáng tạo nên hiện tượng Cực quang (Aurora) tuyệt đẹp.`,
    citedSource: 'Giáo trình Địa lý tự nhiên đại cương I (Chương 2: Vũ trụ và Mặt Trời, tr. 18-28)',
    suggestedPrompts: [
      'Vết đen Mặt Trời là gì và tại sao nhiệt độ lại thấp hơn bề mặt?',
      'Cơ chế hình thành hiện tượng cực quang ở hai cực Trái Đất?',
      'Bão từ Mặt Trời ảnh hưởng đến Trái Đất như thế nào?',
    ],
  },

  // 7. CẤU TRÚC HÌNH DẠNG VÀ KÍCH THƯỚC TRÁI ĐẤT
  {
    topic: 'Hình dạng Geoid, Kích thước và Trục nghiêng Trái Đất',
    keywords: ['kích thước trái đất', 'hình dạng trái đất', 'geoid', 'elipxoid', 'bán kính xích đạo', 'bán kính cực', 'chu vi trái đất', 'trục nghiêng 66°33'],
    reply: `Hình dạng thực tế của Trái Đất là hình Geoid (hình phỏng cầu có bề mặt trùng với mực nước biển trung bình yên tĩnh kéo dài xuyên qua các lục địa). Để tính toán bản đồ, người ta quy chiếu về hình Elipxoid tự quay tròn xoay:
• Kích thước chính xác của Trái Đất:
  + Bán kính xích đạo (a): 6.378,245 km.
  + Bán kính cực (b): 6.356,863 km (ngắn hơn bán kính xích đạo 21,382 km).
  + Bán kính trung bình: 6.371 km.
  + Độ dẹt ở hai cực: α = (a - b) / a ≈ 1/298,257.
  + Chu vi vòng Xích đạo: ~40.075 km.
  + Diện tích bề mặt toàn cầu: ~510 triệu km² (trong đó biển và đại dương chiếm 361 triệu km² ~ 70,8%; lục địa chiếm 149 triệu km² ~ 29,2%).
  + Khối lượng: 5,977 × 10²¹ tấn, khối lượng riêng trung bình 5,52 g/cm³.
• Độ nghiêng của trục: Trục tự quay của Trái Đất nghiêng một góc 66°33' so với mặt phẳng quỹ đạo elip quanh Mặt Trời (hoặc nghiêng 23°27' so với đường vuông góc mặt phẳng quỹ đạo), và hướng nghiêng này không thay đổi trong suốt chu kì chuyển động quanh Mặt Trời.`,
    citedSource: 'Giáo trình Địa lý tự nhiên đại cương I (Chương 3: Trái Đất, tr. 32-38) & SGK Địa lí 6, Bài 5 (tr. 114)',
    suggestedPrompts: [
      'Tại sao bán kính Xích đạo lại dài hơn bán kính cực?',
      'Khái niệm hình Geoid khác hình quả cầu hoàn hảo ở điểm nào?',
      'Diện tích đại dương và lục địa trên Trái Đất chiếm tỉ lệ bao nhiêu?',
    ],
  },

  // 8. CHUYỂN ĐỘNG QUANH MẶT TRỜI & CÁC MÙA & GÓC NHẬP XẠ
  {
    topic: 'Các mùa trong năm, Vận động biểu kiến và Góc nhập xạ',
    keywords: ['mùa trong năm', 'góc nhập xạ', 'ngày xuân phân', 'hạ chí', 'thu phân', 'đông chí', 'cận nhật', 'viễn nhật', 'mặt trời lên thiên đỉnh'],
    reply: `Hiện tượng các mùa trong năm sinh ra do trục Trái Đất nghiêng 66°33' với mặt phẳng quỹ đạo và không đổi phương khi chuyển động quanh Mặt Trời:
1. Cơ chế sinh ra 4 mùa:
   + Trong nửa năm (từ 21/3 đến 23/9), Bán cầu Bắc ngả về phía Mặt Trời nên nhận được góc chiếu sáng lớn, thời gian chiếu sáng dài -> Mùa nóng (hạ). Cùng lúc đó Bán cầu Nam ngả xa Mặt Trời -> Mùa lạnh (đông).
   + Nửa năm còn lại (từ 23/9 đến 21/3 năm sau), Bán cầu Nam ngả về phía Mặt Trời nên là mùa nóng, Bán cầu Bắc là mùa lạnh. Hai bán cầu luôn có mùa trái ngược nhau.
2. Bốn mốc thời gian kinh điển:
   + Xuân phân (21/3) & Thu phân (23/9): Mặt Trời chiếu thẳng góc tại Xích đạo (0°), ngày đêm bằng nhau 12 giờ ở khắp mọi nơi.
   + Hạ chí (22/6): Mặt Trời chiếu thẳng góc tại Chí tuyến Bắc (23°27'B), Bán cầu Bắc có ngày dài nhất trong năm.
   + Đông chí (22/12): Mặt Trời chiếu thẳng góc tại Chí tuyến Nam (23°27'N), Bán cầu Bắc có ngày ngắn nhất, đêm dài nhất.
3. Công thức tính góc nhập xạ (độ cao Mặt Trời lúc giữa trưa h):
   h = 90° - |φ ± δ| (với φ là vĩ độ địa phương, δ là góc nghiêng xích đạo của Mặt Trời từ -23°27' đến +23°27').
4. Vận động biểu kiến: Hiện tượng Mặt Trời dường như di chuyển giữa 2 đường chí tuyến trong năm. Vùng nội chí tuyến (như Việt Nam) có 2 lần Mặt Trời lên thiên đỉnh mỗi năm; tại 2 chí tuyến có 1 lần; vùng ngoại chí tuyến không bao giờ có thiên đỉnh.`,
    citedSource: 'Giáo trình Địa lý tự nhiên đại cương I (Chương 3, tr. 40-47) & SGK Địa lí 6, Bài 8 (tr. 122)',
    suggestedPrompts: [
      'Công thức tính góc nhập xạ của Mặt Trời lúc giữa trưa?',
      'Tại sao Việt Nam một năm có 2 lần Mặt Trời lên thiên đỉnh?',
      'Giải thích hiện tượng ngày đêm dài ngắn theo mùa?',
    ],
  },

  // 9. CẤU TRÚC BÊN TRONG TRÁI ĐẤT & CÁC MẢNG KIẾN TẠO
  {
    topic: 'Cấu trúc bên trong Trái Đất và Thuyết Kiến tạo mảng',
    keywords: ['cấu tạo trái đất', 'vỏ trái đất', 'manti', 'lớp nhân', 'moho', 'gutenberg', 'kiến tạo mảng', 'hút chìm', 'tách giãn', 'san andreas', 'himalaya'],
    reply: `Cấu trúc bên trong Trái Đất gồm 3 lớp đồng tâm đồng bộ dựa trên sự lan truyền của sóng địa chấn (P và S):
1. Vỏ Trái Đất (Crust): Dày từ 5 km (dưới đáy đại dương) đến 70 km (dưới các dãy núi cao lục địa). Vỏ lục địa dày (gồm tầng trầm tích, tầng granit, tầng bazan); vỏ đại dương mỏng hơn và không có tầng granit.
   + Ranh giới phân chia Vỏ và Manti là Mặt Moho (Mohorovicic).
2. Lớp Man-ti (Mantle): Chiếm 83% thể tích và 67% khối lượng Trái Đất, dày khoảng 2.900 km.
   + Tầng Asthenosphere (quyển mềm quánh dẻo ở độ sâu 100-250 km) là nơi sinh ra các dòng đối lưu nhiệt làm dịch chuyển các mảng kiến tạo.
   + Ranh giới phân chia Man-ti và Nhân là Mặt Gutenberg (sâu 2.900 km).
3. Lớp Nhân (Core): Bán kính ~3.470 km, cấu tạo chủ yếu từ Niken và Sắt (Ni-Fe).
   + Nhân ngoài: Trạng thái lỏng, đối lưu vật chất kim loại lỏng tạo nên Hiệu ứng Dynamo sinh ra từ trường Trái Đất bảo vệ sinh quyển.
   + Nhân trong: Trạng thái siêu rắn do áp suất cực đại (lên tới hơn 3 triệu atm), nhiệt độ ~5.000 - 6.000°C.
4. Thuyết Kiến tạo mảng (Plate Tectonics): Thạch quyển gồm 7 mảng lớn trôi trượt trên quyển mềm. Có 3 kiểu ranh giới:
   + Tách giãn (Divergent): Sống núi ngầm Đại Tây Dương (tạo vỏ mới).
   + Xô húc/Hút chìm (Convergent): Mảng Thái Bình Dương hút chìm tạo Rãnh Mariana; mảng Ấn - Úc xô vào Á - Âu nâng dải Himalaya.
   + Trượt bằng (Transform): Đứt gãy San Andreas sinh động đất dữ dội.`,
    citedSource: 'Giáo trình Địa lý tự nhiên đại cương I (Chương 5 & 6, tr. 88-120) & SGK Địa lí 6, Bài 10 (tr. 128)',
    suggestedPrompts: [
      'Tại sao nhân ngoài của Trái Đất lại tạo ra từ trường?',
      'Sự khác nhau cơ bản giữa vỏ lục địa và vỏ đại dương?',
      'Ba kiểu ranh giới mảng kiến tạo và ví dụ tương ứng?',
    ],
  },

  // 10. NỘI LỰC VÀ NGOẠI LỰC
  {
    topic: 'Nội lực và Ngoại lực trong hình thành địa hình',
    keywords: ['nội lực', 'ngoại lực', 'uốn nếp', 'đứt gãy', 'phong hóa', 'bóc mòn', 'bồi tụ', 'tác động đồng thời'],
    reply: `Mọi dạng địa hình trên bề mặt Trái Đất đều là kết quả của sự tác động đồng thời và đối lập giữa Nội lực và Ngoại lực:
• Nội lực (Endogenic forces):
  + Nguồn gốc: Sinh ra từ các nguồn năng lượng bên trong Trái Đất (sự phân rã chất phóng xạ, phản ứng nhiệt hóa, dịch chuyển mácma).
  + Biểu hiện: Vận động kiến tạo uốn nếp, đứt gãy, động đất, núi lửa.
  + Tác động chung: Làm cho bề mặt Trái Đất gồ ghề, nâng cao các dải núi hoặc hạ thấp các vùng trũng sụt lún.
• Ngoại lực (Exogenic forces):
  + Nguồn gốc: Sinh ra từ các nguồn năng lượng bên ngoài trên bề mặt Trái Đất, chủ yếu là bức xạ nhiệt của Mặt Trời và trọng lực.
  + Biểu hiện: Quá trình phong hóa (lí học, hóa học, sinh học), bóc mòn (xâm thực, thổi mòn, mài mòn), vận chuyển và bồi tụ.
  + Tác động chung: Có xu hướng san phẳng những chỗ gồ ghề do nội lực tạo ra, bồi đắp các vùng trũng thành đồng bằng châu thổ phì nhiêu.`,
    citedSource: 'Giáo trình Địa lý tự nhiên đại cương I (Chương 7, tr. 135-148) & SGK Địa lí 6, Bài 11 (tr. 131)',
    suggestedPrompts: [
      'Nội lực và ngoại lực tác động đối lập nhau như thế nào?',
      'Tại sao nói địa hình Trái Đất không bao giờ đứng yên?',
      'Phong hóa lí học và phong hóa hóa học khác nhau ở đâu?',
    ],
  },

  // 11. ĐỊA HÌNH DO GIÓ (EOLOVI) VÀ BĂNG HÀ
  {
    topic: 'Địa hình Gió (Eolovi) và Địa hình Băng hà',
    keywords: ['địa hình gió', 'eolovi', 'cồn cát batkhan', 'nấm đá', 'hoàng thổ', 'băng hà', 'máng băng chữ u', 'đấu băng', 'băng tích'],
    reply: `Địa hình do gió và băng hà là hai dạng địa hình ngoại sinh đặc biệt:
1. Địa hình do gió (Quá trình Eolovi) tại các hoang mạc khô hạn:
   + Bào mòn: Hạt cát bay đập vào đá bào mòn phần chân tạo thành Nấm phong thành (nấm đá), rãnh yardang.
   + Bồi tụ: Gió cuốn cát tích tụ thành Cồn cát Batkhan (cồn cát hình lưỡi liềm với hai sừng xuôi theo chiều gió; sườn đón gió thoai thoải 15-18°, sườn khuất gió dốc 32-35°); bụi mịn bay xa lắng đọng thành tầng Hoàng thổ (Loess).
2. Địa hình do Băng hà tại vùng cực và núi cao:
   + Bào mòn: Khối băng khổng lồ trượt từ từ nạo vét thung lũng sông chữ V cũ thành Máng băng chữ U (đáy phẳng rộng, vách đứng đứng); tạo phễu băng/đấu băng (cirque) và đỉnh nhọn kim tự tháp (Matterhorn).
   + Bồi tụ: Băng tan để lại các đống trầm tích đất đá hỗn độn không phân lớp gọi là Băng tích (Moraine). Khi thung lũng băng hà ngập nước biển sẽ tạo thành Bờ vịnh Fiord sâu thẳm (như ở Na Uy).`,
    citedSource: 'Giáo trình Địa lý tự nhiên đại cương I (Chương 11 & 12, tr. 235-265) & SGK Địa lí 6, Bài 12 (tr. 134)',
    suggestedPrompts: [
      'Phân biệt thung lũng sông chữ V và máng băng chữ U?',
      'Cấu tạo và hướng di chuyển của cồn cát Batkhan?',
      'Bờ vịnh Fiord ở Na Uy được hình thành như thế nào?',
    ],
  },

  // 12. KHÍ HẬU VIỆT NAM VÀ GIÓ PHƠN TÂY NAM
  {
    topic: 'Khí hậu nhiệt đới ẩm gió mùa & Gió phơn Tây Nam (Gió Lào)',
    keywords: ['khí hậu việt nam', 'gió mùa đông bắc', 'gió mùa tây nam', 'gió phơn', 'gió lào', 'bạch mã', 'tại sao mưa nhiều', 'nhiệt đới ẩm'],
    reply: `Khí hậu Việt Nam mang tính chất nhiệt đới ẩm gió mùa có sự phân hóa sâu sắc theo không gian và thời gian:
1. Tính chất nhiệt đới: Nằm hoàn toàn trong vùng nội chí tuyến (8°34'B đến 23°23'B), tổng bức xạ lớn, cán cân bức xạ luôn dương quanh năm, nhiệt độ trung bình năm trên 20°C (trừ vùng núi cao), số giờ nắng 1.400 - 3.000 giờ/năm.
2. Tính chất gió mùa:
   + Gió mùa Đông Bắc (tháng 11 đến tháng 4): Nguồn gốc áp cao Xibia. Đầu mùa lạnh khô; nửa cuối mùa lệch qua biển nên lạnh ẩm gây mưa phùn ở đồng bằng ven biển Bắc Bộ. Bị chặn lại ở dãy Bạch Mã (16°B).
   + Gió mùa Tây Nam (tháng 5 đến tháng 10): Nguồn gốc áp cao vịnh Bengan và áp cao cận chí tuyến Nam bán cầu. Gây mưa rào và dông lớn trên cả nước.
3. Cơ chế hiệu ứng Phơn Tây Nam (Gió Lào ở Bắc Trung Bộ):
   Khối không khí ẩm từ vịnh Bengan thổi vào sườn tây dãy Trường Sơn (phía Lào) gặp núi bốc lên cao, nguội đi (giảm 0,6°C/100m) và trút hết mưa ở sườn tây. Khi vượt đỉnh Trường Sơn tràn xuống sườn đông (miền Trung Việt Nam), không khí bị nén đoạn nhiệt nóng lên nhanh (tăng 1°C/100m khi đi xuống), tạo thành luồng gió cực kì khô và nóng (độ ẩm dưới 50%, nhiệt độ trên 37-40°C).`,
    citedSource: 'SGK Lịch sử và Địa lí 8, Bài 4 & 5 (tr. 115-125) & Giáo trình Địa lý tự nhiên Việt Nam',
    suggestedPrompts: [
      'Tại sao gió phơn Tây Nam khi qua dãy Trường Sơn lại khô và nóng?',
      'Dãy Bạch Mã có ý nghĩa gì đối với sự phân chia khí hậu Bắc - Nam?',
      'Vì sao miền Bắc có hiện tượng mưa phùn vào cuối mùa đông?',
    ],
  },

  // 13. BIỂN ĐÔNG VÀ CHỦ QUYỀN VÙNG BIỂN VIỆT NAM
  {
    topic: 'Biển Đông và các vùng biển theo Luật Biển Việt Nam',
    keywords: ['biển đông', 'vùng biển việt nam', 'đường cơ sở', 'nội thủy', 'lãnh hải', 'đặc quyền kinh tế', 'thềm lục địa', 'hoàng sa', 'trường sa'],
    reply: `Theo Công ước Liên Hợp Quốc về Luật Biển (UNCLOS 1982) và Luật Biển Việt Nam 2012, vùng biển nước ta rộng khoảng 1 triệu km² trong Biển Đông, bao gồm 5 vùng pháp lí tính từ Đường cơ sở:
1. Đường cơ sở: Hệ thống đường gãy khúc nối liền các điểm chuẩn nhô ra xa nhất của bờ biển và các đảo ven bờ (từ điểm 0 ở ranh giới phía tây nam đến điểm A11 ở đảo Cồn Cỏ).
2. Nội thủy: Vùng nước nằm phía bên trong đường cơ sở, có quy chế pháp lí hoàn toàn như lãnh thổ đất liền trên bờ.
3. Lãnh hải: Vùng biển rộng 12 hải lí tính từ đường cơ sở ra phía ngoài. Ranh giới ngoài của lãnh hải chính là BIÊN GIỚI QUỐC GIA TRÊN BIỂN của Việt Nam.
4. Vùng tiếp giáp lãnh hải: Vùng biển rộng 12 hải lí tiếp liền ngoài lãnh hải (cách đường cơ sở 24 hải lí), nơi nước ta thực hiện quyền kiểm soát hải quan, thuế khóa, y tế, an ninh.
5. Vùng đặc quyền kinh tế (EEZ): Vùng biển mở rộng tới 200 hải lí tính từ đường cơ sở. Việt Nam có chủ quyền hoàn toàn về kinh tế, khai thác tài nguyên sinh vật và khoáng sản.
6. Thềm lục địa: Phần đáy biển và lòng đất dưới đáy biển mở rộng ra tới mép ngoài rìa lục địa (tối thiểu 200 hải lí).
• Hai quần đảo chủ quyền bất khả xâm phạm: Hoàng Sa (thuộc thành phố Đà Nẵng) và Trường Sa (thuộc tỉnh Khánh Hòa).`,
    citedSource: 'SGK Lịch sử và Địa lí 8, Bài 11 (tr. 147-151) & Luật Biển Việt Nam 2012',
    suggestedPrompts: [
      'Phân biệt ranh giới nội thủy, lãnh hải và vùng đặc quyền kinh tế?',
      '1 hải lí quy đổi ra hệ mét bằng bao nhiêu?',
      'Ý nghĩa chiến lược của hai quần đảo Hoàng Sa và Trường Sa?',
    ],
  },

  // 14. ĐỒNG BẰNG SÔNG CỬU LONG & ĐỒNG BẰNG SÔNG HỒNG
  {
    topic: 'So sánh Đồng bằng sông Hồng và Đồng bằng sông Cửu Long',
    keywords: ['đồng bằng sông hồng', 'đồng bằng sông cửu long', 'so sánh đbsh và đbscl', 'đê sông hồng', 'thuận thiên', 'phù sa bồi đắp', 'xâm nhập mặn'],
    reply: `So sánh bản chất hai vùng châu thổ lớn nhất nước ta (SGK Địa lí 9, Bài 13 & Bài 19):
• Đồng bằng sông Hồng (15.000 km²):
  + Lịch sử đắp đê ngăn lũ: Có hệ thống đê sông kiên cố dài hàng nghìn km từ thời Lý - Trần. Đê ngăn không cho lũ tràn ra ruộng, khiến đồng bằng bị chia cắt thành nhiều ô trũng.
  + Đất đai: Đất trong đê không được bồi đắp phù sa hàng năm nên dần bị bạc màu, cần bón phân cải tạo; đất ngoài đê được phù sa bồi đắp định kì.
  + Mật độ dân số: Cao nhất cả nước (1.034 người/km²), thâm canh lúa truyền thống kết cấu hạ tầng phát triển.
• Đồng bằng sông Cửu Long (40.000 km²):
  + Không có đê lớn: Chỉ có hệ thống bờ bao cục bộ, kênh rạch chằng chịt, sống chung với lũ theo chiến lược "thuận thiên". Lũ hàng năm đem lại tôm cá, vệ sinh đồng ruộng và bồi đắp phù sa rộng khắp.
  + Đất đai: Phù sa ngọt chỉ chiếm 30% ven sông Tiền và sông Hậu; có diện tích đất phèn (ở Đồng Tháp Mười, Tứ giác Long Xuyên) và đất mặn lớn ven biển.
  + Vựa lúa & thủy sản: Đóng góp trên 50% sản lượng lúa và trên 50% sản lượng thủy sản của cả nước. Đang chịu tác động nặng nề của hạn hán và xâm nhập mặn do biến đổi khí hậu.`,
    citedSource: 'SGK Lịch sử và Địa lí 9, Bài 13 (tr. 166) & Bài 19 (tr. 205-212)',
    suggestedPrompts: [
      'Tại sao Đồng bằng sông Hồng có đê còn ĐBSCL lại không?',
      'Mô hình kinh tế "thuận thiên" ở Đồng bằng sông Cửu Long là gì?',
      'Nguyên nhân và giải pháp cho tình trạng xâm nhập mặn ở ĐBSCL?',
    ],
  },

  // 15. DÂN SỐ VIỆT NAM VÀ CƠ CẤU DÂN SỐ VÀNG
  {
    topic: 'Dân số Việt Nam và Cơ cấu dân số vàng',
    keywords: ['dân số việt nam', 'cơ cấu dân số vàng', '101 triệu dân', 'dân số già hóa', 'mật độ dân số', '54 dân tộc'],
    reply: `Đặc điểm dân cư - dân số Việt Nam hiện nay theo SGK Địa lí 9 (Bài 1 & 2):
• Quy mô dân số: Đạt 101,3 triệu người (năm 2024), đứng thứ 3 Đông Nam Á (sau Indonesia, Philippines) và thứ 15 trên thế giới.
• Thành phần dân tộc: 54 dân tộc anh em; dân tộc Kinh chiếm 85% dân số cư trú chủ yếu ở đồng bằng, duyên hải; 53 dân tộc thiểu số chiếm 15% cư trú chủ yếu ở vùng đồi núi, biên giới.
• Cơ cấu dân số vàng: Nước ta đang trong thời kì "cơ cấu dân số vàng" (khi tỉ lệ người trong độ tuổi lao động từ 15-64 tuổi chiếm trên 65% dân số, gấp đôi nhóm phụ thuộc dưới 15 tuổi và trên 65 tuổi). Đây là cơ hội vàng để bứt phá năng suất lao động và kinh tế.
• Xu hướng già hóa dân số: Tỉ lệ người cao tuổi (>65 tuổi) tăng nhanh do tuổi thọ bình quân tăng (73,7 tuổi) và tỉ suất sinh giảm, đặt ra thách thức lớn về an sinh xã hội, y tế chăm sóc người già.
• Phân bố dân cư: Mật độ cao (306 người/km², gấp 5 lần trung bình thế giới), phân bố chênh lệch lớn giữa ĐBSH (1.034 người/km²) và Tây Bắc (136 người/km²).`,
    citedSource: 'SGK Lịch sử và Địa lí 9, Bài 1 & 2 (tr. 117-124)',
    suggestedPrompts: [
      'Thế nào là thời kì cơ cấu dân số vàng?',
      'Việt Nam đối mặt với thách thức gì khi bước vào giai đoạn già hóa dân số?',
      'Vì sao dân cư nước ta phân bố không đồng đều giữa đồng bằng và miền núi?',
    ],
  },

  // 16. ĐỊA HÌNH VIỆT NAM
  {
    topic: 'Địa hình Việt Nam và các hướng địa hình chính',
    keywords: ['địa hình việt nam', 'địa hình vn', '3/4 đồi núi', 'đồi núi thấp', 'hướng tây bắc đông nam', 'hướng vòng cung', 'đông bắc', 'tây bắc', 'trường sơn bắc', 'trường sơn nam'],
    reply: `Địa hình Việt Nam mang 4 đặc điểm cốt lõi (SGK Địa lí 8, Bài 2, tr. 104 – 109):
• Đồi núi chiếm 3/4 diện tích lãnh thổ, nhưng chủ yếu là đồi núi thấp (dưới 1 000 m chiếm tới 85%, núi cao trên 2 000 m chỉ chiếm 1%). Đỉnh Phan-xi-păng (3 143 m) thuộc dãy Hoàng Liên Sơn là "nóc nhà Đông Dương".
• Đồng bằng chỉ chiếm 1/4 diện tích, gồm Đồng bằng châu thổ sông Hồng, Đồng bằng châu thổ sông Cửu Long và dải Đồng bằng duyên hải miền Trung.
• Địa hình được nâng cao và trẻ lại trong Tân kiến tạo, tạo nên sự phân bậc rõ rệt theo độ cao từ nội địa ra biển.
• Hai hướng địa hình chính:
  + Hướng Tây Bắc - Đông Nam: Dãy Hoàng Liên Sơn, dãy Trường Sơn Bắc và các thung lũng sông Hồng, sông Đà, sông Mã.
  + Hướng Vòng cung: Vùng núi Đông Bắc với 4 cánh cung mở rộng về phía bắc chụm đầu ở Tam Đảo (Sông Gâm, Ngân Sơn, Bắc Sơn, Đông Triều) và khối núi Trường Sơn Nam.`,
    citedSource: 'SGK Lịch sử và Địa lí 8 (Phần Địa lí), Bài 2 (tr. 104-109)',
    suggestedPrompts: [
      'Bốn cánh cung lớn ở vùng núi Đông Bắc là những cánh cung nào?',
      'Vì sao nói địa hình nước ta có tính chất phân bậc rõ rệt?',
      'Địa hình đồi núi thấp ảnh hưởng như thế nào đến kinh tế - xã hội?',
    ],
  },

  // 17. KHOÁNG SẢN VIỆT NAM
  {
    topic: 'Khoáng sản Việt Nam',
    keywords: ['khoáng sản việt nam', 'khoáng sản vn', 'than đá quảng ninh', 'bô-xít tây nguyên', 'dầu khí thềm lục địa', 'mỏ apatit'],
    reply: `Tài nguyên khoáng sản Việt Nam (SGK Địa lí 8, Bài 3, tr. 110 – 114):
• Đặc điểm chung: Nước ta có nguồn tài nguyên khoáng sản khá phong phú và đa dạng về chủng loại (hơn 5 000 điểm quặng và mỏ của 60 loại khoáng sản khác nhau) do vị trí địa lí nằm ở nơi giao nhau giữa 2 vành đai sinh khoáng lớn Thái Bình Dương và Địa Trung Hải. Tuy nhiên phần lớn các mỏ có trữ lượng vừa và nhỏ.
• Các khoáng sản có trữ lượng lớn nhất:
  + Than đá: Bể than Quảng Ninh (trữ lượng lớn nhất Đông Nam Á, than antraxit nhiệt lượng cao).
  + Bô-xít (quặng nhôm): Tập trung ở Tây Nguyên (Đắk Nông, Lâm Đồng, Gia Lai) với trữ lượng hàng tỉ tấn.
  + Dầu mỏ và khí đốt: Phân bố ở thềm lục địa phía nam (bể Cửu Long, bể Nam Côn Sơn).
  + Apatit: Duy nhất ở Lào Cai (nguyên liệu sản xuất phân bón lân).
  + Đá vôi xi măng: Tập trung ở miền Bắc và Bắc Trung Bộ (Hải Dương, Ninh Bình, Thanh Hóa).`,
    citedSource: 'SGK Lịch sử và Địa lí 8, Bài 3 (tr. 110-114)',
    suggestedPrompts: [
      'Bể than lớn nhất nước ta nằm ở tỉnh nào?',
      'Quặng bô-xít phân bố tập trung nhiều nhất ở vùng nào?',
      'Tại sao cần sử dụng hợp lí và tiết kiệm tài nguyên khoáng sản?',
    ],
  },

  // 18. CHÂU ÂU
  {
    topic: 'Tự nhiên và Dân cư Châu Âu',
    keywords: ['châu âu', 'tự nhiên châu âu', 'dân cư châu âu', 'dãy an-pơ', 'sông rai-nơ', 'sông vôn-ga', 'dân số già châu âu'],
    reply: `Đặc điểm cốt lõi của Châu Âu (SGK Địa lí 7, Bài 1 & 2, tr. 98 – 107):
• Vị trí & Địa hình: Châu Âu là một bộ phận phía tây của lục địa Á - Âu. Đồng bằng chiếm 2/3 diện tích (kéo dài từ tây sang đông); núi già ở phía bắc và trung tâm; núi trẻ đồ sộ ở phía nam với dãy An-pơ đỉnh Mông Blăng (4 807 m).
• Khí hậu & Sông ngòi: Khí hậu ôn đới hải dương ở Tây Âu mưa quanh năm ấm áp nhờ dòng biển nóng Bắc Đại Tây Dương; Khí hậu ôn đới lục địa ở Đông Âu mùa đông lạnh có tuyết, mùa hạ nóng. Sông Rai-nơ, sông Đa-nuýp và sông Vôn-ga (3 690 km) là các tuyến đường thủy huyết mạch.
• Dân cư & Xã hội: Cơ cấu dân số già điển hình thế giới (tỉ lệ >65 tuổi tăng nhanh, thiếu hụt lao động); tỉ lệ dân thành thị cao (>75%), lối sống đô thị văn minh.`,
    citedSource: 'SGK Lịch sử và Địa lí 7, Bài 1 & 2 (tr. 98-107)',
    suggestedPrompts: [
      'Phân biệt khí hậu Tây Âu và Đông Âu?',
      'Cơ cấu dân số già ở Châu Âu gây ra những khó khăn gì?',
      'Dãy núi An-pơ có đặc điểm địa hình như thế nào?',
    ],
  },

  // 19. CHÂU Á
  {
    topic: 'Tự nhiên và Dân cư Châu Á',
    keywords: ['châu á', 'tự nhiên châu á', 'dân cư châu á', 'dãy himalaya', 'đỉnh everest', 'sông trường giang', 'gió mùa châu á'],
    reply: `Đặc điểm cốt lõi của Châu Á (SGK Địa lí 7, Bài 4 & 5, tr. 109 – 118):
• Quy mô & Địa hình: Là châu lục rộng nhất thế giới (44,4 triệu km² tính cả đảo). Núi và cao nguyên chiếm 3/4 diện tích, tập trung ở trung tâm: Dãy Himalaya với đỉnh Everest (8 848 m) cao nhất thế giới, cao nguyên Tây Tạng đồ sộ. Đồng bằng rộng lớn phân bố ở ven biển (Hoa Bắc, Ấn - Hằng, Mê Công).
• Khí hậu & Thủy văn: Khí hậu gió mùa ẩm ướt ở Đông Á, Nam Á, Đông Nam Á (mùa hạ mưa nhiều, mùa đông khô lạnh); Khí hậu lục địa khô hạn ở Trung Á, Tây Á. Sông ngòi dồi dào: Trường Giang (6 300 km), Hoàng Hà, sông Hằng, Mê Công.
• Dân cư: Đông dân nhất thế giới (>4,7 tỉ người, chiếm ~60% dân số toàn cầu). Là cái nôi của 4 tôn giáo lớn: Phật giáo, Ấn Độ giáo, Ki-tô giáo và Hồi giáo.`,
    citedSource: 'SGK Lịch sử và Địa lí 7, Bài 4 & 5 (tr. 109-118)',
    suggestedPrompts: [
      'Tại sao Châu Á có nhiều đới khí hậu khác nhau?',
      'Đỉnh Everest cao bao nhiêu mét và nằm trên dãy núi nào?',
      'Hai quốc gia đông dân nhất Châu Á và thế giới hiện nay?',
    ],
  },

  // 20. CHÂU PHI
  {
    topic: 'Tự nhiên và Dân cư Châu Phi',
    keywords: ['châu phi', 'tự nhiên châu phi', 'dân cư châu phi', 'hoang mạc sahara', 'sông nin', 'xa van châu phi', 'tại sao châu phi nóng khô'],
    reply: `Đặc điểm cốt lõi của Châu Phi (SGK Địa lí 7, Bài 6 & 7, tr. 120 – 130):
• Vị trí & Khí hậu: Châu lục nóng và khô hạn bậc nhất hành tinh. Đường Xích đạo và hai đường chí tuyến đi qua lãnh thổ, bờ biển ít bị chia cắt, có các dòng biển lạnh ven bờ (Cana-ri, Ben-ghê-la) ngăn cản hơi ẩm vào đất liền.
• Cảnh quan & Sông ngòi:
  + Hoang mạc Sahara: Hoang mạc cát lớn nhất thế giới, biên độ nhiệt ngày đêm rất lớn.
  + Sông Nin: Dài nhất thế giới (6 650 km), chảy từ nam lên bắc đổ ra Địa Trung Hải.
  + Xa van đồng cỏ: Chiếm diện tích rộng lớn với các loài động vật ăn cỏ (ngựa vằn, hươu cao cổ) và thú ăn thịt (sư tử, báo).
• Dân cư & Môi trường: Tỉ lệ gia tăng tự nhiên cao nhất thế giới, cơ cấu dân số trẻ; đối mặt nạn đói, dịch bệnh và nguy cơ sa mạc hóa ngày càng nghiêm trọng.`,
    citedSource: 'SGK Lịch sử và Địa lí 7, Bài 6 & 7 (tr. 120-130)',
    suggestedPrompts: [
      'Vì sao Châu Phi là châu lục khô nóng nhất thế giới?',
      'Sông Nin dài bao nhiêu km và chảy theo hướng nào?',
      'Xa van và rừng xích đạo ẩm ở Châu Phi khác nhau như thế nào?',
    ],
  },

  // 21. CHÂU MỸ VÀ RỪNG AMAZON
  {
    topic: 'Tự nhiên Châu Mỹ và Rừng Amazon',
    keywords: ['châu mỹ', 'tự nhiên châu mỹ', 'rừng amazon', 'sông amazon', 'lá phổi xanh', 'cooc-đi-e', 'dãy an-đét', 'mỹ latinh'],
    reply: `Đặc điểm cốt lõi của Châu Mỹ (SGK Địa lí 7, Bài 9 & 11, tr. 132 – 142):
• Vị trí & Cấu trúc địa hình: Nằm hoàn toàn ở bán cầu Tây, trải dài từ cực Bắc đến cận cực Nam. Địa hình chia 3 dải rõ rệt theo chiều kinh tuyến:
  + Phía tây: Hệ thống núi trẻ cao đồ sộ Cooc-đi-e (Bắc Mỹ) và dãy An-đét (Nam Mỹ, dài >8 000 km).
  + Ở giữa: Đồng bằng rộng lớn Trung tâm (Bắc Mỹ) và Đồng bằng Amazon màu mỡ (Nam Mỹ).
  + Phía đông: Núi già A-pa-lat và các sơn nguyên Guy-a-na, Bra-xin.
• Rừng Amazon và Sông Amazon: Sông Amazon có lưu lượng nước lớn nhất thế giới; rừng mưa nhiệt đới Amazon là "lá phổi xanh" của Trái Đất, lưu trữ đa dạng sinh học vô giá nhưng đang đối mặt nạn chặt phá rừng và hỏa hoạn nghiêm trọng.`,
    citedSource: 'SGK Lịch sử và Địa lí 7, Bài 9 & 11 (tr. 132-142)',
    suggestedPrompts: [
      'Ba dải địa hình chính của Châu Mỹ từ tây sang đông là gì?',
      'Tại sao rừng Amazon được ví là lá phổi xanh của Trái Đất?',
      'Dãy núi An-đét chạy dọc bờ biển nào của Nam Mỹ?',
    ],
  },

  // 22. CHÂU ĐẠI DƯƠNG VÀ CHÂU NAM CỰC
  {
    topic: 'Châu Đại Dương và Châu Nam Cực',
    keywords: ['châu đại dương', 'ô-xtrây-li-a', 'châu nam cực', 'thú có túi', 'kanguru', 'koala', 'băng tuyết nam cực', 'hiệp ước nam cực'],
    reply: `Đặc điểm cốt lõi của Châu Đại Dương và Châu Nam Cực (SGK Địa lí 7, Bài 12 & 14, tr. 144 – 154):
• Châu Đại Dương (Lục địa Ô-xtrây-li-a và các chuỗi đảo Thái Bình Dương):
  + Ô-xtrây-li-a: Khô hạn, phần lớn diện tích là hoang mạc và xavan cây bụi.
  + Động vật độc đáo: Động vật đặc hữu có túi phong phú nhất thế giới (Chuột túi Kanguru, Gấu túi Koala, Thú mỏ vịt).
  + Rạn san hô Great Barrier: Rạn san hô ngầm lớn nhất hành tinh.
• Châu Nam Cực:
  + Lục địa lạnh nhất (kỉ lục -89,2°C), nhiều gió bão nhất và khô nhất thế giới.
  + Phủ lớp băng tuyết vĩnh cửu dày trung bình >2 000 m (chứa ~90% lượng băng tuyết toàn cầu).
  + Không có cư dân định cư thường xuyên; Hiệp ước Nam Cực 1959 bảo đảm chỉ sử dụng cho nghiên cứu khoa học hòa bình.`,
    citedSource: 'SGK Lịch sử và Địa lí 7, Bài 12 & 14 (tr. 144-154)',
    suggestedPrompts: [
      'Vì sao Ô-xtrây-li-a có nhiều loài thú có túi đặc hữu?',
      'Nhiệt độ thấp nhất từng đo được ở Châu Nam Cực là bao nhiêu?',
      'Hiệp ước Nam Cực năm 1959 quy định điều gì?',
    ],
  },

  // 23. CÁC VÙNG KINH TẾ TRỌNG ĐIỂM VIỆT NAM (TÂY NGUYÊN, ĐÔNG NAM BỘ, TRUNG DU MIỀN NÚI BẮC BỘ)
  {
    topic: 'Thế mạnh kinh tế các vùng của Việt Nam',
    keywords: ['thế mạnh tây nguyên', 'tây nguyên', 'đông nam bộ', 'trung du miền núi bắc bộ', 'đbscl', 'cà phê buôn ma thuột', 'cụm cảng cái mép', 'thủy điện sơn la'],
    reply: `Thế mạnh chuyên môn hóa các vùng kinh tế Việt Nam (SGK Địa lí 9, Bài 7 đến Bài 18):
• Trung du và miền núi Bắc Bộ: Tiềm năng thủy điện lớn nhất nước (Sơn La 2 400 MW, Hòa Bình); Khoáng sản phong phú nhất (than Quảng Ninh, apatit Lào Cai); Cây công nghiệp cận nhiệt (chè Thái Nguyên, Mộc Châu).
• Tây Nguyên: Đất đỏ bazan màu mỡ trên các cao nguyên xếp tầng, là vùng chuyên canh CÀ PHÊ số 1 cả nước (Buôn Ma Thuột), cao su, hồ tiêu; Khoáng sản bô-xít trữ lượng lớn nhất nước; Tiềm năng thủy điện dòng Sê San, Srêpôk.
• Đông Nam Bộ: Vùng kinh tế đầu tàu năng động nhất cả nước, đóng góp >31% GDP, dẫn đầu về giá trị sản xuất công nghiệp, FDI và xuất khẩu; TP. Hồ Chí Minh là trung tâm lớn; Cụm cảng nước sâu Cái Mép - Thị Vải; Khai thác dầu khí thềm lục địa.
• Đồng bằng sông Cửu Long: Vựa lúa lớn nhất nước (>50% sản lượng lúa, >90% gạo xuất khẩu), vựa thủy sản số 1 (cá tra, tôm nước lợ); Thích ứng biến đổi khí hậu theo tư duy "thuận thiên".`,
    citedSource: 'SGK Lịch sử và Địa lí 9, Bài 7 – 18 (tr. 132-212)',
    suggestedPrompts: [
      'Vùng nào là vùng sản xuất cà phê lớn nhất nước ta?',
      'Đông Nam Bộ đóng góp bao nhiêu phần trăm GDP cả nước?',
      'Tư duy phát triển "thuận thiên" ở Đồng bằng sông Cửu Long là gì?',
    ],
  },

  // 24. CẬP NHẬT ĐỊA DANH HÀNH CHÍNH VIỆT NAM (2024 - 2026)
  {
    topic: 'Cập nhật Địa danh Hành chính Việt Nam (Giai đoạn 2024 - 2026)',
    keywords: [
      'địa danh hành chính', 'sáp nhập xã', 'sáp nhập phường', 'sáp nhập huyện', 'thành phố bến cát',
      'thành phố gò công', 'thủy nguyên hải phòng', 'huế trực thuộc trung ương', 'đơn vị hành chính 2026',
      'đơn vị hành chính việt nam', 'nghị quyết 35', '6 vùng kinh tế xã hội', 'dân số việt nam 2026', 'dân số việt nam'
    ],
    reply: `Hệ thống địa danh hành chính và phân vùng kinh tế - xã hội Việt Nam (cập nhật chính thức giai đoạn 2024 - 2026 theo các Nghị quyết của Quốc hội và Ủy ban Thường vụ Quốc hội):
1. Các thành phố mới được thành lập và nâng cấp:
   • Thành phố Bến Cát (tỉnh Bình Dương): Thành lập theo Nghị quyết số 1012/NQ-UBTVQH15, có hiệu lực từ ngày 01/05/2024. Nâng tỉnh Bình Dương lên 5 thành phố trực thuộc (Thủ Dầu Một, Dĩ An, Thuận An, Tân Uyên, Bến Cát) – tỉnh có nhiều thành phố nhất cả nước cùng với Quảng Ninh.
   • Thành phố Gò Công (tỉnh Tiền Giang): Thành lập theo Nghị quyết số 1013/NQ-UBTVQH15, có hiệu lực từ ngày 01/05/2024. Tiền Giang có 2 thành phố (Mỹ Tho và Gò Công).
   • Đề án phát triển đô thị Hải Phòng: Thành lập Thành phố Thủy Nguyên trực thuộc thành phố Hải Phòng và thành lập Quận An Dương theo các Nghị quyết của Quốc hội/UBTVQH.
   • Thành phố Huế trực thuộc Trung ương: Đề án thành lập Thành phố Huế trực thuộc Trung ương theo Nghị quyết của Quốc hội khóa XV trên nền tảng bảo tồn và phát huy giá trị di sản Cố đô.
2. Sắp xếp, sáp nhập đơn vị hành chính cấp huyện, cấp xã (Nghị quyết số 35/2023/UBTVQH15 giai đoạn 2023 - 2025 thực hiện đến 2026):
   • Tinh gọn hàng loạt xã, phường không đạt 70% cả 2 tiêu chuẩn về diện tích tự nhiên và quy mô dân số:
     - Hà Nội: Giảm gần 70 đơn vị hành chính cấp xã, phường (như sắp xếp phường ở Đống Đa, Hai Bà Trưng, Ba Đình, Hoàn Kiếm, Cầu Giấy...).
     - TP. Hồ Chí Minh: Sáp nhập hàng chục phường tại Quận 3, Quận 4, Quận 5, Quận 10, Phú Nhuận...
     - Các tỉnh Nam Định, Hải Dương, Nghệ An, Quảng Ninh, Cần Thơ, Đà Nẵng đều hoàn thành sáp nhập quy mô lớn.
3. Số lượng đơn vị hành chính cấp tỉnh & Dân số:
   • 63 tỉnh/thành phố trực thuộc Trung ương (gồm 5 thành phố trực thuộc Trung ương: Hà Nội, TP. Hồ Chí Minh, Hải Phòng, Đà Nẵng, Cần Thơ; và các đô thị trực thuộc TW mới theo lộ trình).
   • Quy mô dân số (Niên giám Thống kê GSO): Vượt mốc 101 triệu người, đứng thứ 3 khu vực Đông Nam Á (sau Indonesia, Philippines) và thứ 15 trên thế giới.
4. Phân vùng kinh tế - xã hội mới (Nghị quyết 81/2023/QH15 về Quy hoạch tổng thể quốc gia 2021-2030, tầm nhìn 2050):
   • Cả nước phân thành 6 vùng kinh tế - xã hội:
     (1) Vùng Trung du và miền núi phía Bắc (14 tỉnh)
     (2) Vùng Đồng bằng sông Hồng (11 tỉnh, thành phố)
     (3) Vùng Bắc Trung Bộ và duyên hải miền Trung (14 tỉnh, thành phố)
     (4) Vùng Tây Nguyên (5 tỉnh)
     (5) Vùng Đông Nam Bộ (6 tỉnh, thành phố)
     (6) Vùng Đồng bằng sông Cửu Long (13 tỉnh, thành phố).`,
    citedSource: 'Nghị quyết 35/2023/UBTVQH15, Nghị quyết 81/2023/QH15, Nghị quyết 1012 & 1013/NQ-UBTVQH15 & Niên giám Thống kê GSO 2024 - 2026',
    suggestedPrompts: [
      'Tỉnh nào ở nước ta hiện nay có nhiều thành phố trực thuộc nhất?',
      'Mục đích và tiêu chí sắp xếp sáp nhập xã phường theo Nghị quyết 35 là gì?',
      'Kể tên 6 vùng kinh tế - xã hội của Việt Nam theo Quy hoạch tổng thể quốc gia?',
    ],
  },

  // 25. HIỆN TƯỢNG ENSO (EL NIÑO, LA NIÑA) VÀ HOÀN LƯU WALKER
  {
    topic: 'Hiện tượng ENSO (El Niño & La Niña) và Hoàn lưu Walker',
    keywords: [
      'el nino', 'el niño', 'la nina', 'la niña', 'enso', 'hoàn lưu walker',
      'hạn mặn đbscl', 'nino 3.4', 'dị thường khí hậu', 'pha nóng pha lạnh'
    ],
    reply: `Hiện tượng ENSO (El Niño - Southern Oscillation) là dao động đại dương - khí quyển quy mô hành tinh giữa xích đạo Thái Bình Dương và hoàn lưu toàn cầu:
1. Hoàn lưu Walker ở trạng thái trung tính:
   • Gió Tín phong Đông Bắc và Đông Nam thổi dồn lớp nước biển mặt ấm về phía tây Thái Bình Dương (Indonesia, Bắc Úc), tạo vùng biển ấm, bốc hơi mạnh sinh áp thấp đối lưu và mưa dông nhiệt đới dày đặc.
   • Bờ đông Thái Bình Dương (ven biển Peru, Chile): Nước lạnh giàu dưỡng chất từ đáy biển trồi lên (upwelling), tạo áp cao lạnh, thời tiết khô hạn và ngư trường cá cơm trù phú.
2. Pha El Niño (Pha nóng dị thường):
   • Cơ chế: Gió Tín phong suy yếu rõ rệt hoặc đảo chiều; khối nước ấm xích đạo tràn ngược từ tây sang đông Thái Bình Dương.
   • Hệ quả tại Việt Nam:
     - Nhiệt độ trung bình cả nước cao hơn chuẩn trung bình nhiều năm từ 0,5 - 1,5°C.
     - Lượng mưa suy giảm từ 25% - 50%, gây ra những đợt hạn hán khốc liệt tại Tây Nguyên và Nam Trung Bộ.
     - Ranh mặn 4‰ xâm nhập sâu kỷ lục (từ 50 - 90 km) vào các cửa sông Mekong tại ĐBSCL (như năm 2016, 2020, 2024).
     - Số lượng bão trên Biển Đông ít hơn bình thường nhưng quỹ đạo bão dị thường, trái quy luật và cường độ khốc liệt.
3. Pha La Niña (Pha lạnh dị thường):
   • Cơ chế: Gió Tín phong thổi mạnh bất thường, nước biển phía tây càng nóng ấm, nước lạnh phía đông lan rộng.
   • Hệ quả tại Việt Nam:
     - Mưa lớn dồn dập, kéo dài trên diện rộng, đặc biệt ở dải duyên hải miền Trung vào các tháng thu - đông.
     - Tần suất bão và áp thấp nhiệt đới đổ bộ vào đất liền tăng vọt, nguy cơ lũ quét, sạt lở đất nghiêm trọng ở vùng núi.`,
    citedSource: 'Trung tâm Dự báo Khí tượng Thủy văn Quốc gia (nchmf.gov.vn), NOAA Climate Prediction Center & Giáo trình Khí tượng Khí hậu học',
    suggestedPrompts: [
      'Tại sao El Niño lại gây ra hạn mặn lịch sử ở Đồng bằng sông Cửu Long?',
      'Phân biệt bản chất cơ chế giữa El Niño và La Niña?',
      'Hiện tượng nước trồi (upwelling) ngoài khơi Bình Thuận - Ninh Thuận có gì đặc biệt?',
    ],
  },

  // 26. HOÀN LƯU KHÍ QUYỂN TOÀN CẦU (HADLEY, FERREL, POLAR & DÒNG XIẾT JET STREAM)
  {
    topic: 'Hoàn lưu Khí quyển Toàn cầu (Hadley, Ferrel, Polar & Jet Stream)',
    keywords: [
      'hoàn lưu khí quyển', 'vòng tuần hoàn hadley', 'ô hoàn lưu ferrel', 'ô cực polar',
      'dòng xiết gió tây', 'jet stream', 'áp cao cận chí tuyến', 'tín phong mậu dịch', 'doldrums'
    ],
    reply: `Hoàn lưu khí quyển toàn cầu được chi phối bởi sự chênh lệch bức xạ Mặt Trời giữa Xích đạo và Cực kết hợp với lực Coriolis:
1. Mô hình hoàn lưu ba ô (Three-cell model) ở mỗi bán cầu:
   • Ô Hadley (0° - 30°B/N): Không khí nhận nhiệt lượng cực đại tại Xích đạo bốc đối lưu lên cao tạo Vành đai áp thấp xích đạo (Doldrums). Lên tầng đối lưu cao, khối khí tỏa về phía cực, nguội dần và bị lực Coriolis làm lệch hướng, đến vĩ độ 30° thì giáng chìm xuống mặt đất tạo thành Vành đai áp cao cận chí tuyến (Subtropical High). Luồng khí từ áp cao cận chí tuyến thổi ngược về xích đạo bị Coriolis bẻ hướng thành Gió Tín phong (Đông Bắc ở Bắc bán cầu, Đông Nam ở Nam bán cầu).
   • Ô Ferrel (30° - 60°B/N): Ô hoàn lưu gián tiếp; luồng khí từ áp cao cận chí tuyến thổi về áp thấp ôn đới 60° bị bẻ hướng thành Gió Tây ôn đới (Westerlies).
   • Ô Cực Polar (60° - 90°B/N): Không khí cực giá lạnh chìm xuống tạo Áp cao cực, thổi về áp thấp ôn đới thành Gió Đông cực (Polar Easterlies). Mặt tiếp xúc giữa gió Tây ôn đới và gió Đông cực là Frông địa cực (Polar Front) sinh ra xoáy thuận ôn đới.
2. Dòng xiết gió tây trên cao (Jet Stream):
   • Là những dải gió hẹp, vận tốc cực lớn (từ 150 đến trên 400 km/h) thổi từ tây sang đông ở ranh giới tầng đối lưu và bình lưu (độ cao 9 - 14 km).
   • Gồm 2 dòng chính: Dòng xiết cận nhiệt đới (Subtropical Jet) và Dòng xiết cực (Polar Jet). Dòng xiết cực uốn lượn thành các sóng Rossby, khi sóng võng sâu xuống phương nam sẽ hút các khối không khí lạnh Bắc cực (Polar Vortex) tràn sâu xuống vĩ độ thấp.`,
    citedSource: 'Giáo trình Địa lý tự nhiên đại cương I (Chương 8, tr. 152-180), Tổ chức Khí tượng Thế giới (WMO) & NASA Earth Science',
    suggestedPrompts: [
      'Tại sao các hoang mạc lớn trên thế giới lại phân bố dọc vĩ tuyến 20° - 30°?',
      'Dòng xiết gió tây Jet Stream ảnh hưởng như thế nào đến đường bay hàng không?',
      'Sóng Rossby và xoáy cực Polar Vortex hoạt động theo cơ chế nào?',
    ],
  },

  // 27. ĐỊA HÌNH KARST NHIỆT ĐỚI ẨM & KỲ QUAN HANG ĐỘNG (SƠN ĐOÒNG, PHONG NHA, TRÀNG AN, HẠ LONG)
  {
    topic: 'Địa hình Karst Nhiệt đới Ẩm & Quần thể Hang động Sơn Đoòng, Phong Nha',
    keywords: [
      'địa hình karst', 'hang sơn đoòng', 'phong nha kẻ bàng', 'vịnh hạ long', 'tràng an',
      'thạch nhũ', 'măng đá', 'hòa tan đá vôi', 'karst ngầm', 'doline'
    ],
    reply: `Địa hình Karst nhiệt đới ẩm ở Việt Nam là một trong những cảnh quan địa mạo độc đáo và hoàn thiện bậc nhất trên thế giới:
1. Cơ chế hóa học thuận nghịch của quá trình Karst:
   • Quá trình hòa tan (bóc mòn karst):
     CaCO3 (đá vôi) + H2O (nước mưa) + CO2 (khí quyển/thổ nhưỡng) ⇌ Ca(HCO3)2 (Canxi bicacbonat tan trong nước).
     - Phản ứng diễn ra mạnh nhất trong điều kiện nhiệt độ cao, mưa ẩm dồi dào và lớp phủ thực vật dày sinh nhiều axit hữu cơ. Nước ngấm theo các khe nứt đứt gãy mở rộng hang hốc, phễu karst, hố sụt (doline) và mạng lưới sông ngầm.
   • Quá trình kết tủa (tích tụ thạch nhũ):
     Ca(HCO3)2 ⇌ CaCO3↓ + H2O + CO2↑.
     - Khi giọt nước chảy vào khoảng trống hang động, áp suất giảm, khí CO2 thoát ra và nước bay hơi, tinh thể Canxi cacbonat kết tủa tạo nên Thạch nhũ (stalactite - rủ từ trần xuống), Măng đá (stalagmite - mọc từ sàn lên) và Cột đá khi chúng hợp nhất.
2. Các kỳ quan địa hình Karst tiêu biểu tại Việt Nam:
   • Hang Sơn Đoòng (Vườn quốc gia Phong Nha - Kẻ Bàng, Quảng Bình):
     - Hang động tự nhiên lớn nhất thế giới (thể tích ước tính 38,5 triệu m³, chiều dài gần 9 km, trần hang cao trên 200 m, rộng 150 m – có thể chứa vừa cả một tòa nhà chọc trời 40 tầng hoặc cả khu phố Manhattan).
     - Có 2 hố sụt (doline) do trần hang sập xuống hàng triệu năm trước, cho phép ánh sáng Mặt Trời lọt vào hình thành thảm rừng nguyên sinh nhiệt đới ngầm ngay trong lòng hang cùng hệ vi khí hậu mây mù riêng biệt.
   • Karst ngập nước biển Vịnh Hạ Long (Quảng Ninh) và Karst ngập nước Tràng An (Ninh Bình): Cảnh quan Karst dạng tháp (Fenglin) và chóp (Fengcong) cổ tuổi hàng trăm triệu năm đã trải qua các đợt biển tiến – biển thoái kỷ Đệ Tứ tạo thành các vịnh đảo và hang luồn tuyệt mỹ.`,
    citedSource: 'Viện Địa lý – Viện Hàn lâm KH&CN Việt Nam (ig-vast.ac.vn), Hiệp hội Hang động Hoàng gia Anh (BCRA) & UNESCO World Heritage',
    suggestedPrompts: [
      'Vì sao Hang Sơn Đoòng có thể hình thành hệ sinh thái và thời tiết độc lập trong lòng hang?',
      'Phân biệt sự khác nhau giữa karst tháp (Fenglin) và karst chóp (Fengcong)?',
      'Đá vôi ở Việt Nam tập trung nhiều nhất ở các vùng địa chất nào?',
    ],
  },

  // 28. DẢI HỘI TỤ NHIỆT ĐỚI (ITCZ) VÀ MÙA MƯA BÃO Ở VIỆT NAM
  {
    topic: 'Dải hội tụ nhiệt đới (ITCZ) và Quy luật Mùa Mưa Bão Việt Nam',
    keywords: [
      'dải hội tụ nhiệt đới', 'itcz', 'mưa dải hội tụ', 'bão biển đông',
      'áp thấp nhiệt đới', 'mùa bão việt nam', 'dịch chuyển itcz'
    ],
    reply: `Dải hội tụ nhiệt đới (ITCZ - Intertropical Convergence Zone) là hình thế thời tiết gây mưa và bão quan trọng bậc nhất ở vùng nhiệt đới:
1. Bản chất khí tượng của ITCZ:
   • Là dải hội tụ giữa hai luồng gió ẩm có hướng ngược nhau ở vùng nội chí tuyến: Khối khí nhiệt đới hải dương Tây Nam (xuất phát từ Nam bán cầu) gặp Gió Tín phong Đông Bắc (hoặc khối khí nhiệt đới Tín phong Bắc bán cầu).
   • Tại trục hội tụ, không khí nóng ẩm bị cưỡng bức bốc lên rất cao, hình thành các dải mây đối lưu khổng lồ (Cumulonimbus - Cb) gây mưa rào diện rộng kéo dài và dông sét ác liệt.
2. Quy luật dịch chuyển biểu kiến của ITCZ qua lãnh thổ Việt Nam:
   • Tháng 6 - 7: Trục ITCZ vắt qua vùng Bắc Bộ (vĩ độ 20° - 22°B), gây mưa ngâu và lũ tiểu mãn trên hệ thống sông Hồng.
   • Tháng 8 - 9: Trục ITCZ lùi dần xuống Bắc Trung Bộ (vĩ độ 17° - 19°B).
   • Tháng 10 - 11: Trục ITCZ dịch chuyển qua Trung và Nam Trung Bộ (vĩ độ 12° - 15°B). Khi kết hợp với địa hình chắn gió của sườn đông Trường Sơn và các đợt gió mùa Đông Bắc lạnh tràn về, ITCZ tạo ra lượng mưa cực đại tập trung (gây đại hồng thủy miền Trung).
   • Tháng 12: Trục ITCZ lùi xuống Nam Bộ rồi chuyển hẳn sang Nam bán cầu.
3. Mối liên hệ mật thiết giữa ITCZ và Xoáy thuận nhiệt đới (Bão):
   • Trên trục ITCZ, lực Coriolis ở vĩ độ >5° tạo nên các xoáy xoay tròn, hội tụ hơi ẩm đại dương dồi dào, phát triển thành Áp thấp nhiệt đới và Bão. Do trục ITCZ lùi dần từ Bắc vào Nam, mùa bão ở Việt Nam cũng di chuyển chậm dần từ các tỉnh Bắc Bộ (tháng 7-8) xuống miền Trung (tháng 9-11) và Nam Bộ (tháng 12).`,
    citedSource: 'Trung tâm Dự báo Khí tượng Thủy văn Quốc gia (nchmf.gov.vn) & SGK Địa lí 8 (Bài 4 & 5) – NXB Giáo dục Việt Nam',
    suggestedPrompts: [
      'Tại sao mùa bão ở Việt Nam lại lùi dần từ Bắc vào Nam theo thời gian?',
      'Phân biệt dải hội tụ nhiệt đới (ITCZ) và Frông địa cực (Polar Front)?',
      'Cần những điều kiện khí quyển nào để một xoáy thuận trên ITCZ mạnh lên thành bão?',
    ],
  },

  // 29. BẤT ĐỐI XỨNG SƯỜN ĐÔNG VÀ SƯỜN TÂY DÃY TRƯỜNG SƠN
  {
    topic: 'Quy luật Bất Đối Xứng Sườn Đông và Sườn Tây Dãy Trường Sơn',
    keywords: [
      'bất đối xứng trường sơn', 'sườn đông trường sơn', 'sườn tây trường sơn',
      'trường sơn đông trường sơn tây', 'đón gió khuất gió', 'đối lập thời tiết'
    ],
    reply: `Sự bất đối xứng sườn Đông - sườn Tây của dải Trường Sơn là minh chứng kinh điển cho quy luật phân hóa địa hình và khí hậu do tác động của bức chắn địa hình:
1. Bất đối xứng về hình thái địa hình (Địa mạo):
   • Sườn Đông Trường Sơn: Dốc đứng, sườn ngắn, các nhánh núi đâm ngang ra sát biển chia cắt đồng bằng duyên hải thành từng ô nhỏ; sông ngòi ngắn dốc, đáy dốc lòng hẹp chảy xiết.
   • Sườn Tây Trường Sơn: Thoải dần, phân bậc thành các bề mặt san bằng và cao nguyên xếp tầng rộng lớn (Cao nguyên Kon Tum ~500m, Pleiku ~800m, Đắk Lắk ~500m, Mơ Nông, Di Linh, Lâm Viên >1 500m); mạng lưới thủy văn tạo thành lưu vực đổ nước về sông Mekong (dòng Sê San, Srêpôk).
2. Đối lập đặc sắc về chế độ khí hậu và mưa:
   • Mùa hạ (tháng 5 - 10):
     - Sườn Tây (Tây Nguyên): Đón trực diện Gió mùa Tây Nam từ biển vào, không khí ẩm bốc lên cao tạo mùa mưa đỉnh điểm, rừng nhiệt đới xanh tốt.
     - Sườn Đông (Duyên hải miền Trung): Nằm ở sườn khuất gió, luồng gió sau khi trút mưa ở sườn Tây tràn qua đỉnh núi bị nén đoạn nhiệt sinh Hiệu ứng Phơn Tây Nam (Gió Lào) cực kỳ khô nóng, độ ẩm giảm dưới 50%, nhiệt độ trên 38-40°C.
   • Mùa thu - đông (tháng 9 - 12):
     - Sườn Đông: Đón trực diện gió mùa Đông Bắc thổi qua Vịnh Bắc Bộ và Biển Đông kết hợp dải hội tụ ITCZ, tạo nên mùa mưa lũ cực đại (mưa lớn nhất cả nước).
     - Sườn Tây: Bước vào mùa khô khốc liệt, trời trong xanh ít mây, khô hạn kéo dài gây khó khăn cho cây công nghiệp.
   • "Trường Sơn Đông, Trường Sơn Tây / Bên nắng đốt, bên mưa quây": Diễn tả sự đối lập thời tiết đồng thời giữa hai sườn núi do hai luồng gió mùa trái ngược gây ra.`,
    citedSource: 'Giáo trình Địa lý tự nhiên Việt Nam (ĐH Sư phạm Hà Nội/Huế) & SGK Lịch sử và Địa lí 8 (Bài 2 & 4)',
    suggestedPrompts: [
      'Giải thích nguyên nhân tại sao mùa mưa ở Duyên hải miền Trung lại lệch hẳn sang thu - đông?',
      'Các cao nguyên xếp tầng ở Tây Nguyên được hình thành từ những thời kỳ kiến tạo nào?',
      'Ảnh hưởng của gió phơn Tây Nam đối với sản xuất nông nghiệp miền Trung?',
    ],
  },

  // 30. NGUY CƠ BIẾN ĐỔI KHÍ HẬU, SỤT LÚN ĐỊA CHẤT & XÂM NHẬP MẶN TẠI ĐỒNG BẰNG SÔNG CỬU LONG
  {
    topic: 'Biến đổi Khí hậu, Sụt lún Địa tầng & Xâm nhập mặn tại ĐBSCL',
    keywords: [
      'sụt lún đbscl', 'xâm nhập mặn đồng bằng sông cửu long', 'nghị quyết 120',
      'thuận thiên đbscl', 'thủy điện mekong', 'thiếu phù sa', 'biến đổi khí hậu đbscl'
    ],
    reply: `Đồng bằng sông Cửu Long (ĐBSCL) đang đối mặt với "Tam giác đe dọa sinh tồn" kết hợp giữa yếu tố toàn cầu và tác động nhân sinh:
1. Thực trạng 3 thách thức địa lí cốt lõi:
   • Sụt lún địa tầng do khai thác nước ngầm quá mức: Tốc độ sụt lún địa chất ở Cà Mau, Cần Thơ, Sóc Trăng, Bạc Liêu lên tới 1 - 3 cm/năm, nhanh gấp nhiều lần tốc độ nước biển dâng tương đối (~3,5 mm/năm). Việc khai thác nước ngầm tầng sâu làm rỗng các vỉa cát sét, gây nén kết cơ học không thể phục hồi.
   • Thiếu hụt trầm tích phù sa do chuỗi đập thủy điện thượng nguồn Mekong: Hơn 50% lượng phù sa mịn và gần 90% lượng cát sỏi đáy bị giữ lại tại các hồ chứa ở thượng nguồn. Thiếu hụt bùn cát khiến dòng sông "đói phù sa", gây sạt lở dữ dội hàng trăm km bờ sông Tiền, sông Hậu và đường bờ biển Tây, biển Đông.
   • Xâm nhập mặn cực đoan vào mùa khô: Trong các năm El Niño (2016, 2020, 2024), lưu lượng dòng chảy kiệt từ thượng lưu suy giảm nghiêm trọng, triều cường đẩy ranh mặn 4‰ lấn sâu từ 50 đến 90 km vào đất liền (Bến Tre, Trà Vinh, Tiền Giang, Sóc Trăng), làm tê liệt nguồn nước sinh hoạt và cây ăn trái.
2. Tư duy chuyển dịch chiến lược theo Nghị quyết 120/NQ-CP của Chính phủ ("Tư duy Thuận Thiên"):
   • Từ bỏ quan điểm cực đoan "ngăn mặn, đắp đê bao triệt để" sang coi "nước lợ và nước mặn cũng là tài nguyên kinh tế".
   • Quy hoạch 3 vùng sinh thái nông nghiệp linh hoạt:
     - Vùng nước ngọt (thượng lưu - An Giang, Đồng Tháp): Vùng trũng trữ lũ, giữ vai trò an ninh lương thực (lúa chất lượng cao, cây ăn trái).
     - Vùng nước lợ (chuyển tiếp): Luân canh mô hình thích ứng thông minh như Lúa - Tôm (mùa mưa trồng lúa hữu cơ, mùa khô nuôi tôm nước lợ).
     - Vùng mặn (ven biển): Rừng ngập mặn phòng hộ kết hợp nuôi trồng thủy sản sinh thái dưới tán rừng, phát triển kinh tế biển và năng lượng tái tạo (điện gió ngoài khơi).`,
    citedSource: 'Nghị quyết số 120/NQ-CP của Chính phủ, Bộ Tài nguyên và Môi trường (monre.gov.vn) & Viện Quy hoạch Thủy lợi Miền Nam',
    suggestedPrompts: [
      'Tại sao tốc độ sụt lún đất ở ĐBSCL lại diễn ra nhanh hơn tốc độ nước biển dâng?',
      'Mô hình lúa - tôm thích ứng biến đổi khí hậu hoạt động theo nguyên lí nào?',
      'Tác động của chuỗi đập thủy điện thượng nguồn Mekong đến hệ sinh thái Biển Hồ và ĐBSCL?',
    ],
  },
];

// Helper to look up geography knowledge base
function lookupGeographyKnowledge(
  query: string,
  grade: number = 6,
  lessonContext: string = '',
  cardSummaries: string = ''
): { reply: string; citedSource: string; suggestedPrompts: string[] } | null {
  const q = query.toLowerCase().trim();

  // Politely reject history questions as required by guidelines
  const historyKeywords = [
    'quân tống', 'bạch đằng', 'ngô quyền', 'đinh bộ lĩnh', 'lê hoàn', 'nhà lý', 'nhà trần', 'nhà hồ',
    'kháng chiến chống pháp', 'chiến dịch điện biên phủ', 'chiến dịch tây nguyên', 'cách mạng tháng tám',
    'phong trào cần vương', 'bác hồ', 'nguyễn ái quốc', 'lịch sử việt nam', 'triều đại phong kiến'
  ];
  if (historyKeywords.some((k) => q.includes(k))) {
    return {
      reply: 'Thầy GeoMentor chào em! Câu hỏi của em thuộc về phân môn Lịch sử. Nền tảng GeoFeedback AI được thiết kế chuyên biệt để đồng hành cùng em làm chủ PHẦN ĐỊA LÍ (Lớp 6, 7, 8, 9 – Bộ sách Kết nối tri thức với cuộc sống). Em hãy đặt các câu hỏi về Trái Đất, lực Coriolis, thủy triều, thạch nhũ, khí hậu, sông ngòi, các châu lục hay địa lí Việt Nam để thầy hỗ trợ em chuẩn xác nhất nhé!',
      citedSource: 'Quy chuẩn chương trình Lịch sử và Địa lí THCS – Phân môn Địa lí',
      suggestedPrompts: [
        'Vì sao lại có lực Coriolis?',
        'Hồ móng ngựa hình thành như thế nào?',
        'Cấu tạo bên trong của Trái Đất gồm những lớp nào?',
      ],
    };
  }

  // 2. Prioritize current lesson cardSummaries for lesson-grounded inquiries
  if (cardSummaries && cardSummaries.length > 20) {
    const lines = cardSummaries.split('\n').filter((l) => l.trim().length > 0);
    // If student asks for summary or key concept of the lesson
    if (
      q.includes('tóm tắt') ||
      q.includes('kiến thức cốt lõi') ||
      q.includes('khái niệm then chốt') ||
      q.includes('trọng tâm') ||
      q.includes('bài này có gì') ||
      q.includes('nội dung chính')
    ) {
      const summaryText = lines.slice(0, 2).join(' ');
      return {
        reply: `Trọng tâm cốt lõi của bài học "${lessonContext || `Địa lí ${grade}`}": ${summaryText}. Em chú ý nắm vững bản chất quy luật và liên hệ thực tế theo SGK chuẩn nhé!`,
        citedSource: `SGK Lịch sử và Địa lí ${grade} (Phần Địa lí) – Kết nối tri thức`,
        suggestedPrompts: [
          'Giải thích chi tiết các ý chính của bài',
          'Bẫy câu hỏi trắc nghiệm hay gặp ở bài này là gì?',
          'Cách vận dụng vào giải bài tập và đọc bản đồ',
        ],
      };
    }

    // Match query against each card in cardSummaries
    const stopWords = new Set([
      'là', 'gì', 'như', 'thế', 'nào', 'hãy', 'cho', 'em', 'biết', 'với', 'ạ', 'thầy', 'ơi',
      'của', 'trong', 'được', 'các', 'những', 'một', 'này', 'sao', 'vì', 'có'
    ]);
    const queryTokens = q
      .split(/[\s,?.!;:()]+/)
      .filter((w) => w.length >= 2 && !stopWords.has(w));

    let bestCardMatch: { title: string; body: string; score: number } | null = null;

    for (const line of lines) {
      const cardMatch = line.match(/^\[(.*?)\]:\s*(.*)$/);
      if (cardMatch) {
        const cardTitle = cardMatch[1];
        const cardBody = cardMatch[2];
        const fullCardLower = `${cardTitle} ${cardBody}`.toLowerCase();

        let score = 0;
        for (const token of queryTokens) {
          if (cardTitle.toLowerCase().includes(token)) score += 3;
          else if (fullCardLower.includes(token)) score += 1;
        }

        if (score > (bestCardMatch?.score || 0) && score >= 2) {
          bestCardMatch = { title: cardTitle, body: cardBody, score };
        }
      }
    }

    if (bestCardMatch && bestCardMatch.score >= 2) {
      const body = bestCardMatch.body;
      const parts = body.split('. Ý chính: ');
      const def = parts[0];
      const points = parts[1] ? parts[1].split('; ').filter(Boolean) : [];

      const formattedPoints =
        points.length > 0 ? '\n' + points.map((p) => `• ${p}`).join('\n') : '';

      return {
        reply: `${def}.${formattedPoints}`,
        citedSource: `SGK Lịch sử và Địa lí ${grade} (Phần Địa lí) – Kết nối tri thức`,
        suggestedPrompts: [
          'Giải thích nguyên nhân và cơ chế chi tiết',
          'Ví dụ thực tế minh họa',
          'Điểm khác biệt dễ nhầm lẫn nhất ở bài này',
        ],
      };
    }
  }

  // 3. Exact / Fuzzy matching in authoritative knowledge base
  for (const entry of AUTHORITATIVE_GEO_KNOWLEDGE_BASE) {
    const isMatched = entry.keywords.some((kw) => q.includes(kw));
    if (isMatched) {
      return {
        reply: entry.reply,
        citedSource: entry.citedSource,
        suggestedPrompts: entry.suggestedPrompts,
      };
    }
  }

  // Check additional quick geographical topics
  if (q.includes('kinh tuyến') || q.includes('vĩ tuyến') || q.includes('tọa độ')) {
    return {
      reply: `Chào em! Trong Bài 1 Địa lí 6 (SGK tr. 102 – 103), em cần nắm vững bản chất cốt lõi:
• Kinh tuyến: Là các nửa đường tròn nối liền cực Bắc và cực Nam trên quả Địa Cầu. Tất cả các kinh tuyến đều có độ dài bằng nhau (~20.000 km). Kinh tuyến 0° đi qua đài thiên văn Greenwich (Luân Đôn, Anh) là kinh tuyến gốc.
• Vĩ tuyến: Là các vòng tròn nằm ngang vuông góc với các kinh tuyến. Vĩ tuyến dài nhất là Xích đạo (0° dài ~40.075 km), càng về hai cực vĩ tuyến càng thu nhỏ lại thành 1 điểm ở 90°.
• Quy tắc ghi tọa độ địa lí chuẩn: Luôn ghi VĨ ĐỘ TRƯỚC, KINH ĐỘ SAU. Ví dụ: Tọa độ điểm cực Bắc Việt Nam tại Lũng Cú (Hà Giang) là: 23°23'B, 105°20'Đ.`,
      citedSource: 'SGK Lịch sử và Địa lí 6, Bài 1 (tr. 102-103) & Giáo trình ĐLTN ĐC I',
      suggestedPrompts: [
        'Kinh tuyến gốc và vĩ tuyến gốc là gì?',
        'Cách xác định bán cầu Đông và bán cầu Tây?',
        'Bẫy trắc nghiệm hay gặp khi ghi tọa độ địa lí là gì?',
      ],
    };
  }

  if (q.includes('thời tiết') && q.includes('khí hậu')) {
    return {
      reply: `Phân biệt chuẩn xác giữa Thời tiết và Khí hậu (Bài 17 Địa lí 6, tr. 150):
• Thời tiết: Là trạng thái của khí quyển tại một địa phương cụ thể trong một thời gian ngắn (ngày, giờ). Thời tiết luôn thay đổi nhanh chóng (ví dụ: sáng nắng gắt, chiều chuyển mưa dông giật mạnh).
• Khí hậu: Là sự lặp đi lặp lại của tình hình thời tiết ở một khu vực nhất định trong thời gian dài (nhiều thập kỉ) và đã trở thành quy luật ổn định (ví dụ: miền Bắc nước ta có khí hậu nhiệt đới gió mùa với mùa đông lạnh ít mưa và mùa hạ nóng ẩm mưa nhiều).
• Điểm khác biệt mấu chốt: Thời tiết phản ánh tính NHẤT THỜI, BIẾN ĐỔI NHANH; còn khí hậu phản ánh tính QUY LUẬT LÂU DÀI, ỔN ĐỊNH.`,
      citedSource: 'SGK Lịch sử và Địa lí 6, Bài 17 (tr. 150) & Giáo trình Khí tượng - Khí hậu',
      suggestedPrompts: [
        'Nhiệt độ không khí thay đổi theo vĩ độ và độ cao như thế nào?',
        'Vì sao lên cao 100m thì nhiệt độ giảm 0,6°C?',
        'Biểu hiện của biến đổi khí hậu ở Việt Nam là gì?',
      ],
    };
  }

  return null;
}

// GeoMentor AI Chatbot endpoint with Google Search Grounding & Authoritative Citations
app.post('/api/gemini/chat', async (req: Request, res: Response) => {
  try {
    const {
      message,
      grade = 6,
      currentLesson = '',
      lessonContext = '',
      cardSummaries = '',
      activeMistakes,
    } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Missing message' });
    }

    const effectiveLesson = currentLesson || lessonContext || `Chương trình Địa lí THCS Lớp ${grade}`;

    // Check if query is an off-topic history question
    const historyKeywords = ['vua hùng', 'chiến thắng bạch đằng', 'khởi nghĩa hai bà trưng', 'quang trung', 'ngô quyền', 'nhà trần', 'nhà lê', 'nhà nguyễn'];
    const lowerMsg = message.toLowerCase();
    if (historyKeywords.some((kw) => lowerMsg.includes(kw))) {
      return res.json({
        success: true,
        reply: `Chào em! Thầy là GeoMentor chuyên gia về môn Địa lí. Câu hỏi của em thuộc về phân môn Lịch sử. Thầy chuyên giải đáp sâu sắc các hiện tượng tự nhiên, dân cư, kinh tế - xã hội và kĩ năng bản đồ Địa lí. Em hãy đặt các câu hỏi liên quan đến Địa lí để thầy hỗ trợ tốt nhất nhé!`,
        citedSource: `Chương trình Lịch sử và Địa lí THCS (Phân định mạch nội dung Địa lí)`,
        suggestedPrompts: [
          'Tại sao sông Bạch Đằng lại có chế độ thủy triều đặc biệt?',
          'Địa hình hiểm trở có ý nghĩa gì trong chiến lược quân sự?',
          'Vị trí địa lí và điều kiện tự nhiên của nước ta',
        ],
        webSources: [],
      });
    }

    // If API client is not configured, fallback to enhanced local curriculum database
    if (!aiClient) {
      const deterministic = lookupGeographyKnowledge(message, Number(grade), effectiveLesson, cardSummaries);
      if (deterministic) {
        return res.json({
          success: true,
          reply: deterministic.reply,
          citedSource: deterministic.citedSource,
          suggestedPrompts: deterministic.suggestedPrompts,
          webSources: [
            {
              title: 'Cổng thông tin Giáo dục - SGK Điện tử Hành Trang Số (GDPT 2018)',
              url: 'https://hanhtrangso.nxbgd.vn',
            },
            {
              title: 'Viện Địa lý – Viện Hàn lâm Khoa học và Công nghệ Việt Nam',
              url: 'https://ig-vast.ac.vn',
            },
          ],
        });
      }
      return res.json({
        success: true,
        reply: `Về câu hỏi "${message}" của em trong ${effectiveLesson}: Trong Địa lí học, câu trả lời trực tiếp bám sát vào bản chất khoa học của hiện tượng địa lí. Em hãy đọc kĩ mối quan hệ nhân quả (nguyên nhân tự nhiên -> quá trình diễn ra -> hệ quả thực tế) trong sách giáo khoa để giải thích chuẩn xác nhé!`,
        citedSource: `SGK Lịch sử và Địa lí ${grade} (Phần Địa lí) – Kết nối tri thức với cuộc sống`,
        suggestedPrompts: [
          'Giải thích cơ chế hình thành của hiện tượng này',
          'Cách đọc bản đồ và nhận xét bảng số liệu',
          'Mẹo ghi nhớ nhanh để không bị nhầm lẫn trong bài kiểm tra',
        ],
        webSources: [],
      });
    }

    // Grounding knowledge from authoritative base if available
    const matchedCurriculumEntry = AUTHORITATIVE_GEO_KNOWLEDGE_BASE.find((e) =>
      e.keywords.some((kw) => lowerMsg.includes(kw))
    );

    const curriculumHint = matchedCurriculumEntry
      ? `\n[TÀI LIỆU CHUẨN XÁC NỘI BỘ]:\n${matchedCurriculumEntry.reply}\nNguồn: ${matchedCurriculumEntry.citedSource}`
      : '';

    const lessonCardsHint = cardSummaries
      ? `\n[HỌC LIỆU BÀI HỌC "${effectiveLesson}"]:\n${cardSummaries}`
      : '';

    const promptText = `
Học sinh lớp ${grade} đặt câu hỏi: "${message}"
Bài học trong chương trình: "${effectiveLesson}".
${curriculumHint}
${lessonCardsHint}

YÊU CẦU BẮT BUỘC KHI TRẢ LỜI (TUÂN THỦ 100%):
1. ĐI THẲNG VÀO TRỌNG TÂM CÂU HỎI (QUAN TRỌNG NHẤT):
   - Ngay ở CÂU ĐẦU TIÊN: Đưa ra câu trả lời trực tiếp (nêu định nghĩa chuẩn, khẳng định đúng/sai, số liệu hoặc nguyên nhân cốt lõi).
   - Tuyệt đối KHÔNG mở đầu bằng các lời chào rườm rà sáo rỗng (như "Chào em...", "Thầy rất vui khi nhận được câu hỏi...", "Hôm nay chúng ta sẽ tìm hiểu..."). Vào thẳng bản chất khoa học!

2. CẬP NHẬT ĐỊA DANH HÀNH CHÍNH CHÍNH XÁC THEO NĂM 2024 - 2026:
   - Khi câu hỏi liên quan đến đơn vị hành chính (tỉnh, thành phố trực thuộc, quận, thị xã, huyện, xã, phường, sáp nhập, số lượng đơn vị hành chính, quy hoạch vùng, dân số):
     + BẮT BUỘC tra cứu và cập nhật theo các Nghị quyết mới nhất của Ủy ban Thường vụ Quốc hội (Nghị quyết số 35/2023/UBTVQH15 về sắp xếp đơn vị hành chính cấp huyện, xã giai đoạn 2023 - 2025 thực hiện đến 2026).
     + Nêu rõ các thành phố mới thành lập như: Thành phố Bến Cát (Bình Dương, từ 1/5/2024 theo NQ 1012/NQ-UBTVQH15), Thành phố Gò Công (Tiền Giang, từ 1/5/2024 theo NQ 1013/NQ-UBTVQH15), Đề án Thành phố Thủy Nguyên và Quận An Dương (Hải Phòng), Đề án Thành phố Huế trực thuộc Trung ương.
     + Cập nhật việc sáp nhập giảm hàng loạt phường/xã tại Hà Nội, TP. Hồ Chí Minh, Nam Định, Hải Dương, Nghệ An...
     + Cập nhật 6 vùng kinh tế - xã hội theo Nghị quyết 81/2023/QH15 về Quy hoạch tổng thể quốc gia 2021-2030 tầm nhìn 2050.
     + Dân số Việt Nam cập nhật Tổng cục Thống kê (GSO) đã vượt 101 triệu người (đứng thứ 3 Đông Nam Á, thứ 15 thế giới).
     + Tuyệt đối KHÔNG sử dụng thông tin cũ đã bị bãi bỏ.

3. TRẢ LỜI SÂU SẮC CÁC CÂU HỎI ĐỊA LÍ NÂNG CAO (HỌC SINH GIỎI, CHUYÊN SÂU & ĐẠI CƯƠNG):
   - Phân tích cặn kẽ bản chất cơ chế vật lí - địa lí và các quy luật:
     + Hiện tượng ENSO (El Niño & La Niña) và Hoàn lưu Walker, ảnh hưởng hạn mặn tại ĐBSCL và mưa bão miền Trung.
     + Hoàn lưu khí quyển toàn cầu (ba ô hoàn lưu Hadley, Ferrel, Polar; Dòng xiết gió tây Jet Stream; sóng Rossby).
     + Động lực học khí áp và gió: Lực Coriolis, ma sát, độ dốc khí áp, đoạn nhiệt khô (1°C/100m) và đoạn nhiệt ẩm (0,6°C/100m) trong hiệu ứng Phơn Tây Nam.
     + Địa mạo học: Cơ chế phản ứng hòa tan và kết tủa Karst (CaCO3 + H2O + CO2 ⇌ Ca(HCO3)2), hang Sơn Đoòng, Phong Nha - Kẻ Bàng, Tràng An, vịnh Hạ Long.
     + Dải hội tụ nhiệt đới (ITCZ) và quy luật dịch chuyển mùa bão từ Bắc vào Nam.
     + Bất đối xứng sườn Đông - sườn Tây Trường Sơn.
     + Tam giác nguy cơ ĐBSCL: Sụt lún đất do khai thác nước ngầm, thiếu hụt phù sa do đập thượng nguồn Mekong, xâm nhập mặn và giải pháp "Thuận thiên" theo Nghị quyết 120/NQ-CP.

4. SƯU TẦM THÔNG TIN CHÍNH THỐNG TỪ GOOGLE SEARCH VÀ TÀI LIỆU UY TÍN:
   - Sử dụng công cụ Google Search để tra cứu, đối chiếu từ các nguồn cơ quan chính thống:
     + Cổng thông tin Chính phủ (chinhphu.vn) & Cổng thông tin Quốc hội (quochoi.vn)
     + Tổng cục Thống kê (gso.gov.vn)
     + Trung tâm Dự báo Khí tượng Thủy văn Quốc gia (nchmf.gov.vn)
     + Viện Hàn lâm Khoa học và Công nghệ Việt Nam / Viện Địa lý (ig-vast.ac.vn), Viện Vật lý Địa cầu (geophys.ac.vn)
     + Cục Đo đạc, Bản đồ và Thông tin địa lý Việt Nam (monre.gov.vn)
     + Cổng thông tin Bộ GD&ĐT (moet.gov.vn) & NXB Giáo dục Việt Nam (Hành Trang Số - hanhtrangso.nxbgd.vn)
     + Tổ chức Khí tượng Thế giới (WMO), NASA Earth Observatory, NOAA Climate.gov, USGS, IPCC.

5. TRÍCH NGUỒN RÕ RÀNG:
   - Ở cuối câu trả lời, tạo một mục rõ ràng:
     ### 📚 Nguồn trích dẫn:
     - Nêu cụ thể các cuốn SGK (Kết nối tri thức Lớp 6, 7, 8, 9), Giáo trình Địa lý tự nhiên đại cương I (ĐH Sư phạm), hoặc các tài liệu, cơ quan nghiên cứu chính thống trên Internet đã tham khảo.

6. CÂU HỎI GỢI MỞ TIẾP THEO:
   - Ở cuối cùng, tạo mục:
     ### 💡 Câu hỏi gợi mở:
     - [Gợi ý 1]
     - [Gợi ý 2]
     - [Gợi ý 3]
`;

    const aiPromise = aiClient.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: promptText,
      config: {
        systemInstruction: `Bạn là GeoMentor AI – Chuyên gia cố vấn sư phạm Địa lí THCS và Giảng viên Địa lí tự nhiên đại cương (thuộc nền tảng GeoFeedback AI). Bạn luôn trả lời ĐÚNG TRỌNG TÂM ngay ở câu đầu tiên, cập nhật địa danh hành chính mới nhất giai đoạn 2024 - 2026 theo các Nghị quyết của Quốc hội/UBTVQH, phân tích sâu sắc các cơ chế địa lí nâng cao, và đối chiếu trích dẫn từ các nguồn Internet chính thống (Tổng cục KTTV, Tổng cục Thống kê, Cổng thông tin Chính phủ, Viện Địa lý VAST, SGK GDPT 2018, NASA, NOAA).`,
        tools: [{ googleSearch: {} }],
      },
    });

    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('AI generation timed out')), 25000)
    );

    const chatResponse: any = await Promise.race([aiPromise, timeoutPromise]);
    const rawText = chatResponse.text?.trim() || '';

    // Extract Grounding Metadata from Google Search
    const groundingMeta = chatResponse.candidates?.[0]?.groundingMetadata;
    const webSources: { title: string; url: string }[] = [];
    const searchQueries: string[] = (groundingMeta?.webSearchQueries as string[]) || [];

    if (groundingMeta?.groundingChunks) {
      for (const chunk of groundingMeta.groundingChunks as any[]) {
        if (chunk.web?.uri && chunk.web?.title) {
          if (!webSources.some((s) => s.url === chunk.web.uri)) {
            webSources.push({
              title: chunk.web.title,
              url: chunk.web.uri,
            });
          }
        }
      }
    }

    // Parse out suggested prompts from text if present
    let cleanedText = rawText;
    const extractedPrompts: string[] = [];

    const promptsMatch = rawText.match(/###\s*💡\s*Câu hỏi gợi mở:?\s*([\s\S]*?)$/i);
    if (promptsMatch && promptsMatch[1]) {
      const lines = promptsMatch[1].split('\n');
      for (const line of lines) {
        const cleaned = line.replace(/^[-*•\d.]+\s*/, '').trim();
        if (cleaned.length > 5 && cleaned.length < 120) {
          extractedPrompts.push(cleaned);
        }
      }
      cleanedText = rawText.replace(/###\s*💡\s*Câu hỏi gợi mở:?\s*[\s\S]*?$/i, '').trim();
    }

    // Extract cited sources string
    let citedSource = `SGK Lịch sử và Địa lí ${grade} – Kết nối tri thức & Giáo trình Địa lý tự nhiên đại cương I`;
    const sourceMatch = cleanedText.match(/###\s*📚\s*Nguồn trích dẫn:?\s*([\s\S]*?)$/i);
    if (sourceMatch && sourceMatch[1]) {
      const sourceLines = sourceMatch[1]
        .split('\n')
        .map((l: string) => l.replace(/^[-*•\d.]+\s*/, '').trim())
        .filter(Boolean);
      if (sourceLines.length > 0) {
        citedSource = sourceLines.join(' • ');
      }
    }

    // Default suggested prompts if none extracted
    const suggestedPrompts =
      extractedPrompts.length > 0
        ? extractedPrompts.slice(0, 3)
        : [
            'Giải thích nguyên nhân và cơ chế chi tiết hơn',
            'Ví dụ thực tế minh họa tại Việt Nam',
            'Bẫy trắc nghiệm hay gặp về nội dung này',
          ];

    return res.json({
      success: true,
      reply: cleanedText || (matchedCurriculumEntry ? matchedCurriculumEntry.reply : 'Kiến thức địa lí này được quy định rõ trong SGK và giáo trình chuyên ngành.'),
      citedSource,
      webSources: webSources.slice(0, 5),
      searchQueries,
      suggestedPrompts,
    });
  } catch (err: any) {
    console.error('GeoMentor chat fallback triggered:', err.message);
    const { message, grade = 6, currentLesson = '', cardSummaries = '' } = req.body;
    const deterministic = lookupGeographyKnowledge(message || '', Number(grade), currentLesson, cardSummaries);

    if (deterministic) {
      return res.json({
        success: true,
        reply: deterministic.reply,
        citedSource: deterministic.citedSource,
        suggestedPrompts: deterministic.suggestedPrompts,
        webSources: [
          {
            title: 'Cổng thông tin Giáo dục - SGK Điện tử Hành Trang Số (GDPT 2018)',
            url: 'https://hanhtrangso.nxbgd.vn',
          },
          {
            title: 'Viện Địa lý – Viện Hàn lâm Khoa học và Công nghệ Việt Nam',
            url: 'https://ig-vast.ac.vn',
          },
        ],
      });
    }

    return res.json({
      success: true,
      reply: `Về câu hỏi của em: Trong chương trình Địa lí THCS và Giáo trình Địa lý tự nhiên đại cương, hiện tượng này được giải thích trực tiếp dựa trên các quy luật địa lí cơ bản. Em hãy xem xét mối quan hệ giữa yếu tố nội sinh và ngoại sinh, cũng như tác động của chuyển động Trái Đất để nắm vững bản chất nhé!`,
      citedSource: `SGK Lịch sử và Địa lí ${grade || 6} – Kết nối tri thức với cuộc sống & Giáo trình ĐLTN ĐC I`,
      suggestedPrompts: [
        'Giải thích bản chất nguyên nhân',
        'Cách đọc số liệu và bản đồ chuyên đề',
        'Điểm khác biệt dễ nhầm lẫn nhất',
      ],
      webSources: [],
    });
  }
});

// Generate adaptive question endpoint
app.post('/api/gemini/generate-remedial', async (req: Request, res: Response) => {
  try {
    const { grade, topic, errorCategory, questionSummary } = req.body;

    if (!aiClient) {
      return res.status(503).json({
        fallback: true,
        message: 'Dịch vụ AI chưa khả dụng. Sử dụng câu hỏi kiểm chứng có sẵn trong ngân hàng.',
      });
    }

    const prompt = `
Tạo 1 câu hỏi trắc nghiệm Địa lí THCS lớp ${grade || 6} về chủ đề "${topic}".
Mục đích: Giúp học sinh khắc phục lỗi "${errorCategory}".
Bối cảnh câu hỏi trước: ${questionSummary || 'Khái niệm địa lí cơ bản'}.
Yêu cầu:
- Câu hỏi mới phải có ngữ cảnh mới, số liệu rõ ràng.
- Gồm 4 lựa chọn A, B, C, D với duy nhất 1 đáp án đúng chuẩn mực.
- Có lời giải chi tiết và gợi ý mẹo suy luận.
`;

    const response = await aiClient.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            questionText: { type: Type.STRING },
            options: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  text: { type: Type.STRING },
                },
                required: ['id', 'text'],
              },
            },
            correctAnswer: { type: Type.STRING },
            explanation: { type: Type.STRING },
            hint: { type: Type.STRING },
          },
          required: ['questionText', 'options', 'correctAnswer', 'explanation', 'hint'],
        },
      },
    });

    const parsed = JSON.parse(response.text?.trim() || '{}');
    return res.json({ success: true, data: parsed });
  } catch (err: any) {
    console.error('Error in generate-remedial:', err);
    return res.status(500).json({ error: err.message });
  }
});

// Full-stack Vite setup
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  const PORT = 3000;
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[GeoFeedback AI Server] Listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
