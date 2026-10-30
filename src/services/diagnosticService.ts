import { QuestionItem, ErrorDiagnostic, StudentConfidence, ErrorCode } from '../types';
import { ERROR_CODE_REGISTRY } from '../data/curriculumData';

/**
 * Helper to normalize string for comparison (removes multiple spaces, lowercases, trims)
 */
function normalizeAnswerString(str: string): string {
  if (!str) return '';
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/[.,;:]+$/, '');
}

/**
 * Universal evaluator for all 3 question types (multiple_choice, true_false, short_answer)
 */
export function evaluateAnswerCorrectness(question: QuestionItem, chosenAnswer: string): boolean {
  if (!chosenAnswer || chosenAnswer === 'CHƯA_CHỌN' || chosenAnswer === 'CHƯA_TRẢ_LỜI') {
    return false;
  }

  // 1. Short Answer Format
  if (question.questionType === 'short_answer') {
    const studentNorm = normalizeAnswerString(chosenAnswer);
    const correctNorm = normalizeAnswerString(question.correctAnswer);

    // Exact or normalized match with correctAnswer
    if (studentNorm === correctNorm) return true;

    // Check in acceptableAnswers
    if (question.acceptableAnswers && Array.isArray(question.acceptableAnswers)) {
      const matchAcceptable = question.acceptableAnswers.some(
        (ans) => normalizeAnswerString(ans) === studentNorm
      );
      if (matchAcceptable) return true;
    }

    // Numbers with spaces or commas (e.g., "6 378" vs "6378", "101,3" vs "101.3")
    const cleanDigitsStudent = studentNorm.replace(/[\s.,kmhảilítriệungười%°bđnts]/gi, '');
    const cleanDigitsCorrect = correctNorm.replace(/[\s.,kmhảilítriệungười%°bđnts]/gi, '');
    if (cleanDigitsStudent && cleanDigitsStudent === cleanDigitsCorrect) {
      return true;
    }

    return false;
  }

  // 2. True / False Format (4 sub-statements)
  if (question.questionType === 'true_false' && question.subStatements && question.subStatements.length > 0) {
    // chosenAnswer encoded as: "a:D,b:S,c:D,d:S"
    const pairs = chosenAnswer.split(',').map((p) => p.trim());
    let subCorrect = 0;
    question.subStatements.forEach((sub) => {
      const pair = pairs.find((p) => p.startsWith(`${sub.id}:`));
      if (pair) {
        const val = pair.split(':')[1]?.toUpperCase();
        const expected = sub.isCorrect ? 'D' : 'S';
        if (val === expected) subCorrect++;
      }
    });
    // Mastery: at least 3 out of 4 correct
    return subCorrect >= Math.min(3, question.subStatements.length);
  }

  // 3. True / False Format (binary Đúng / Sai or D / S)
  if (question.questionType === 'true_false') {
    const normChosen = normalizeAnswerString(chosenAnswer);
    const normCorrect = normalizeAnswerString(question.correctAnswer);

    const isStudentTrue = ['d', 'đ', 'đúng', 'dung', 'true', 't'].includes(normChosen);
    const isCorrectTrue = ['d', 'đ', 'đúng', 'dung', 'true', 't'].includes(normCorrect);
    return isStudentTrue === isCorrectTrue;
  }

  // 4. Multiple Choice (A, B, C, D)
  return String(chosenAnswer).trim().toUpperCase() === String(question.correctAnswer).trim().toUpperCase();
}

export const diagnosticService = {
  checkIsCorrect: evaluateAnswerCorrectness,

  /**
   * Diagnostic engine evaluating answer, distractor hypothesis, and confidence level.
   * Produces structured ErrorDiagnostic aligned with the Master Prompt.
   */
  async diagnoseStudentAnswer(
    question: QuestionItem,
    chosenAnswer: string,
    confidence: StudentConfidence = 'very_confident'
  ): Promise<ErrorDiagnostic> {
    const isCorrect = evaluateAnswerCorrectness(question, chosenAnswer);

    // Match chosen option
    const selectedOption = question.options?.find(
      (opt) => opt.id.toUpperCase() === String(chosenAnswer).trim().toUpperCase()
    );

    let errorCode: ErrorCode =
      selectedOption?.distractorErrorCode || question.relatedErrorCode || 'K01';
    
    // Legacy mapping fallback
    if (errorCode.startsWith('E')) {
      const legacyMap: Record<string, ErrorCode> = {
        E01: 'K01',
        E02: 'K02',
        E03: 'K04',
        E04: 'S01',
        E05: 'S02',
        E06: 'K03',
        E07: 'V01',
      };
      if (legacyMap[errorCode]) errorCode = legacyMap[errorCode];
    }

    const errorInfo = ERROR_CODE_REGISTRY.find((e) => e.code === errorCode) || ERROR_CODE_REGISTRY[0];

    // If answer is correct: Positive diagnostic confirmation
    if (isCorrect) {
      return {
        questionId: question.questionId,
        isCorrect: true,
        chosenAnswer,
        correctAnswer: question.correctAnswer,
        errorCode,
        errorName: 'Chính xác hoàn toàn',
        hypothesis: 'Học sinh nắm rất vững kiến thức và kĩ năng của bài học.',
        evidence: `Phương án "${chosenAnswer}" hoàn toàn phù hợp với mục tiêu: ${question.learningObjective}.`,
        isCertain: true,
        explanation: question.explanation,
        sourceCitation: `${question.sourceBook.bookName}, trang ${question.sourceBook.bookPage} (PDF tr. ${question.sourceBook.pdfPage})`,
        verificationQuestion: question.verificationQuestion,
        verificationStatus: 'passed',
        timestamp: Date.now(),
      };
    }

    // If student guessed ('guessing') or selected option has no specific distractor tag:
    // Mark as hypothesis needing verification ("Nguyên nhân nghi ngờ – cần kiểm chứng")
    const isCertain = confidence !== 'guessing' && Boolean(selectedOption?.distractorHypothesis);

    const baseHypothesis =
      selectedOption?.distractorHypothesis ||
      `Học sinh có dấu hiệu mắc lỗi thuộc nhóm ${errorInfo.name}.`;

    // Try server AI diagnose
    try {
      const response = await fetch('/api/gemini/diagnose', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question,
          studentAnswer: chosenAnswer,
        }),
      });

      if (response.ok) {
        const resData = await response.json();
        if (resData.success && resData.data) {
          const aiData = resData.data;
          return {
            questionId: question.questionId,
            isCorrect: false,
            chosenAnswer,
            correctAnswer: question.correctAnswer,
            errorCode,
            errorName: errorInfo.name,
            hypothesis: aiData.diagnosis || baseHypothesis,
            evidence:
              aiData.evidence ||
              `Lựa chọn ${chosenAnswer} kết hợp mức độ tự tin "${
                confidence === 'guessing' ? 'Đoán mò' : 'Tự tin'
              }".`,
            isCertain: confidence !== 'guessing',
            explanation: aiData.explanation || question.explanation,
            sourceCitation: `${question.sourceBook.bookName}, trang ${question.sourceBook.bookPage} (PDF tr. ${question.sourceBook.pdfPage})`,
            verificationQuestion:
              aiData.remediationQuestions?.[0] || question.verificationQuestion,
            verificationStatus: 'untested',
            timestamp: Date.now(),
          };
        }
      }
    } catch (e) {
      // Fallback seamlessly to verified textbook curriculum rubric
    }

    // Default pedagogical rule diagnostic
    return {
      questionId: question.questionId,
      isCorrect: false,
      chosenAnswer,
      correctAnswer: question.correctAnswer,
      errorCode,
      errorName: errorInfo.name,
      hypothesis: baseHypothesis,
      evidence:
        selectedOption?.distractorHypothesis ||
        `Lựa chọn phương án ${chosenAnswer} (Mức tự tin: ${
          confidence === 'very_confident'
            ? 'Rất tự tin'
            : confidence === 'hesitant'
            ? 'Phân vân'
            : 'Đoán mò'
        }) cho thấy cần kiểm chứng giả thuyết lỗi.`,
      isCertain,
      explanation: question.explanation,
      sourceCitation: `${question.sourceBook.bookName}, trang ${question.sourceBook.bookPage} (PDF tr. ${question.sourceBook.pdfPage})`,
      verificationQuestion: question.verificationQuestion,
      verificationStatus: 'untested',
      timestamp: Date.now(),
    };
  },
};
