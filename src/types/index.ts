export type Grade = 6 | 7 | 8 | 9;

export type QuestionType =
  | 'multiple_choice'
  | 'true_false'
  | 'short_answer'
  | 'map_identification'
  | 'chart_analysis'
  | 'matching'
  | 'application';

export type CognitiveLevel = 'nhan_biet' | 'thong_hieu' | 'van_dung';

export type StudentConfidence = 'very_confident' | 'hesitant' | 'guessing';

export type ErrorCode =
  | 'K01' // Chưa nhớ kiến thức cơ bản
  | 'K02' // Hiểu sai khái niệm
  | 'K03' // Nhầm lẫn giữa các đối tượng địa lí
  | 'K04' // Chưa hiểu quan hệ nguyên nhân - kết quả
  | 'S01' // Hạn chế kĩ năng bản đồ
  | 'S02' // Hạn chế kĩ năng xử lí số liệu, biểu đồ
  | 'V01' // Chưa vận dụng được kiến thức
  | 'E01' // Legacy alias: Sai kiến thức nền tảng
  | 'E02' // Legacy alias: Hiểu sai khái niệm
  | 'E03' // Legacy alias: Nhầm lẫn quan hệ nguyên nhân - kết quả
  | 'E04' // Legacy alias: Sai kĩ năng bản đồ
  | 'E05' // Legacy alias: Sai kĩ năng biểu đồ và số liệu
  | 'E06' // Legacy alias: Nhầm lẫn đối tượng hoặc khu vực địa lí
  | 'E07'; // Legacy alias: Sai khả năng vận dụng

export interface ErrorCodeInfo {
  code: ErrorCode;
  legacyCode?: string;
  name: string;
  shortDesc: string;
  badgeColor: string;
  iconName: string;
}

export interface KnowledgeCard {
  id: string; // e.g. "KC-601-1"
  cardIndex: number;
  title: string;
  concept: string;
  coreDefinition: string;
  keyPoints: string[];
  visualExample?: string;
  sgkCitation: {
    bookTitle: string;
    bookPage: number;
    pdfPage: number;
    section: string;
  };
  commonTrapAlert: string;
  iconName?: string;
}

export interface ComparisonRow {
  criteria: string;
  conceptAVal: string;
  conceptBVal: string;
}

export interface ConceptComparison {
  id: string;
  conceptA: string;
  conceptB: string;
  comparisonTable?: ComparisonRow[];
  keyDifferences?: ComparisonRow[];
  commonConfusion: string;
  memoryRule: string;
}

export interface MindmapNode {
  id: string;
  label: string;
  summary?: string;
  children?: MindmapNode[];
}

export interface SelfCheckQuestion {
  id: string;
  questionText: string;
  options: { id: string; text: string }[];
  correctAnswer: string;
  explanation: string;
  hint: string;
  knowledgeCardId: string;
}

export interface GeoLessonData {
  lessonId: string; // e.g. "G6-L1"
  grade: Grade;
  chapterId: string;
  chapterTitle: string;
  lessonTitle: string;
  sgkPageRange: string;
  pdfPageRange: string;
  objectives: string[]; // Phần 1: Em cần nắm vững điều gì?
  knowledgeCards: KnowledgeCard[]; // Phần 2: Kiến thức trọng tâm
  mindmap: MindmapNode; // Phần 3: Sơ đồ ghi nhớ tương tác
  comparisons: ConceptComparison[]; // Phần 4: Em có dễ nhầm không?
  selfCheckQuestions: SelfCheckQuestion[]; // Phần 5: Tự kiểm tra trước khi luyện tập
}

export interface LessonProgress {
  lessonId: string;
  status: 'not_started' | 'studied_lesson' | 'quiz_taken' | 'repaired' | 'mastered';
  lastQuizScore?: number;
  postTestScore?: number;
  completedAt?: number;
}

export interface TextbookSource {
  grade: Grade;
  bookTitle: string; // "Lịch sử và Địa lí 6 – Kết nối tri thức với cuộc sống"
  part: 'Địa lí';
  chapterId: string;
  chapterTitle: string;
  lessonId: string;
  lessonTitle: string;
  bookPageStart: number;
  bookPageEnd?: number;
  pdfPageStart: number;
  pdfPageEnd?: number;
  learningObjectives: string[];
}

export interface QuestionOption {
  id: string; // 'A' | 'B' | 'C' | 'D'
  text: string;
  isCorrect?: boolean;
  distractorErrorCode?: ErrorCode;
  distractorHypothesis?: string;
}

export interface VisualData {
  type: 'contour' | 'climate_chart' | 'map_coord' | 'data_table' | 'population_pyramid';
  title: string;
  caption?: string;
  data?: any;
}

export interface VerificationQuestion {
  id: string;
  questionText: string;
  options: { id: string; text: string }[];
  correctAnswer: string;
  explanation: string;
  hint: string;
}

export interface SubStatementItem {
  id: string; // 'a' | 'b' | 'c' | 'd'
  statement: string;
  isCorrect: boolean; // true = Đúng, false = Sai
  explanation?: string;
  distractorErrorCode?: ErrorCode;
  distractorHypothesis?: string;
}

export interface QuestionItem {
  questionId: string;
  grade: Grade;
  chapterId: string;
  chapterTitle: string;
  lessonId: string;
  lessonTitle: string;
  learningObjective: string;
  cognitiveLevel: CognitiveLevel;
  questionType: QuestionType;
  questionText: string;
  visualData?: VisualData;
  options: QuestionOption[];
  correctAnswer: string;
  explanation: string;
  sourceBook: {
    bookName: string;
    bookPage: number;
    pdfPage: number;
  };
  relatedErrorCode: ErrorCode;
  knowledgeCardId?: string; // Linked to specific Knowledge Card (e.g. "KC-601-1")
  verificationQuestion: VerificationQuestion;
  reviewStatus: 'approved' | 'pending';
  isTeacherCustom?: boolean;

  // Modern question formats (Đúng-Sai, Trả lời ngắn)
  acceptableAnswers?: string[]; // Allowed normalized forms for short_answer
  subStatements?: SubStatementItem[]; // Sub-statements for 4-part true_false
  shortAnswerUnit?: string; // e.g. "km", "hải lí", "triệu người"
  shortAnswerPlaceholder?: string;
}

export interface StudentAnswerRecord {
  questionId: string;
  chosenAnswer: string;
  isCorrect: boolean;
  confidence: StudentConfidence;
  timeSpentSeconds: number;
}

export interface ErrorDiagnostic {
  questionId: string;
  isCorrect: boolean;
  chosenAnswer: string;
  correctAnswer: string;
  errorCode: ErrorCode;
  errorName: string;
  hypothesis: string;
  evidence: string;
  isCertain: boolean; // True if proven by distractor or test, false if 'Nguyên nhân nghi ngờ - cần kiểm chứng'
  explanation: string;
  sourceCitation: string;
  verificationQuestion: VerificationQuestion;
  verificationStatus: 'untested' | 'passed' | 'failed';
  timestamp: number;
}

export interface LearningStation {
  stationNumber: 1 | 2 | 3 | 4 | 5;
  title: string;
  subtitle: string;
  description: string;
  status: 'locked' | 'unlocked' | 'completed';
  estimatedMinutes: number;
}

export interface FlashcardItem {
  id: string;
  frontConcept: string;
  backExplanation: string;
  memoryTip: string;
  source: string;
}

export interface GuidedPracticeStep {
  stepNumber: number;
  questionText: string;
  options: { id: string; text: string }[];
  correctAnswer: string;
  stepHint: string;
  stepExplanation: string;
}

export interface GeoLearnRemediationLesson {
  lessonId: string;
  title: string;
  targetErrorCode: ErrorCode;
  quickSummary2Min: string;
  keyPoints: string[];
  sourceBookCitation: string;
  flashcards: FlashcardItem[];
  guidedPractice: GuidedPracticeStep[];
  applicationTask: {
    title: string;
    scenario: string;
    taskPrompt: string;
    sampleRubricAnswer: string;
  };
}

export interface SpacedRepetitionItem {
  id: string;
  topicTitle: string;
  errorCode: ErrorCode;
  lastMasteredDate: number;
  intervalDays: 1 | 3 | 7;
  dueDate: number;
  status: 'due' | 'completed';
}

export interface StudentAccount {
  id: string; // e.g. "HS-2026-088"
  username: string; // e.g. "minhquan6a"
  displayName: string; // e.g. "Nguyễn Minh Quân"
  grade: Grade; // 6, 7, 8, 9
  className: string; // e.g. "6A1"
  schoolName: string; // e.g. "THCS Chu Văn An"
  avatar: string; // "🧭", "🏔️", "❄️", "🌍", "🦅", "🔭"
  createdAt: number;
  lastLoginAt: number;
}

export interface TeacherProfile {
  id: string; // e.g. "GV-101"
  fullName: string; // e.g. "Cô Trần Mai Hương"
  email: string; // e.g. "huong.tran@thcsgiangvo.edu.vn"
  schoolName: string; // e.g. "THCS Giảng Võ (Hà Nội)"
  role: 'teacher';
  avatar: string; // "👩‍🏫", "👨‍🏫", "🧭", "🏔️"
  assignedGrades: Grade[]; // [6, 7, 8, 9]
  subject: string; // "Địa lí THCS (GDPT 2018)"
  phone?: string;
  createdAt: number;
  lastLoginAt: number;
}

export interface TeacherAccount extends TeacherProfile {
  password: string;
}

export interface StudentProfile {
  id: string;
  displayName: string;
  username?: string;
  className?: string; // e.g. "6A1", "7B", "8A", "9C"
  schoolName?: string; // e.g. "THCS Giảng Võ"
  role: 'student';
  grade: Grade;
  avatar: string;
  geoPoints: number;
  completedTestsCount: number;
  overallAccuracy: number;
  detectedErrorsCount: number;
  resolvedErrorsCount: number;
  errorDnaCounts: Record<ErrorCode, number>;
  masteryByTopic: Record<string, { total: number; correct: number; scorePct: number }>;
  activeMistakes: ErrorDiagnostic[];
  resolvedMistakes: ErrorDiagnostic[];
  spacedRepetitionQueue: SpacedRepetitionItem[];
  lessonProgress?: Record<string, LessonProgress>;
  badges: {
    id: string;
    title: string;
    description: string;
    icon: string;
    unlockedAt?: number;
  }[];
}

export interface AssessmentSession {
  sessionId: string;
  timestamp: number;
  grade: Grade;
  lessonId: string;
  lessonTitle: string;
  totalQuestions: number;
  correctCount: number;
  score: number; // 0 - 100 scale
  diagnostics: ErrorDiagnostic[];
  answers: StudentAnswerRecord[];
  isPostTest?: boolean;
}

export interface WebSourceItem {
  title: string;
  url: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'mentor';
  text: string;
  timestamp: number;
  citedSource?: string;
  webSources?: WebSourceItem[];
  searchQueries?: string[];
  suggestedPrompts?: string[];
}
