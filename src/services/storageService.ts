import {
  Grade,
  QuestionItem,
  AssessmentSession,
  StudentProfile,
  StudentAccount,
  TeacherProfile,
  TeacherAccount,
  ErrorDiagnostic,
  ErrorCode,
  SpacedRepetitionItem,
} from '../types';
import { MASTER_QUESTIONS } from '../data/questionBank';
import { ERROR_CODE_REGISTRY } from '../data/curriculumData';

const STORAGE_KEYS = {
  QUESTIONS: 'geofeedback_master_questions_v2',
  SESSIONS: 'geofeedback_assessments_v2',
  PROFILE: 'geofeedback_student_profile_v2',
  ACTIVE_GRADE: 'geofeedback_active_grade_v2',
  USER_ROLE: 'geofeedback_user_role_v2',
  ACCOUNTS: 'geofeedback_accounts_v2',
  CURRENT_ACCOUNT_ID: 'geofeedback_current_student_id_v2',
  TEACHER_ACCOUNTS: 'geofeedback_teacher_accounts_v2',
  CURRENT_TEACHER_SESSION: 'geofeedback_current_teacher_session_v2',
};

export const DEFAULT_TEACHER_ACCOUNTS: TeacherAccount[] = [
  {
    id: 'GV-601',
    fullName: 'Cô Trần Mai Hương',
    email: 'huong.tran@thcsgiangvo.edu.vn',
    password: 'GiaoVien@2026',
    schoolName: 'THCS Giảng Võ (Hà Nội)',
    role: 'teacher',
    avatar: '👩‍🏫',
    assignedGrades: [6, 7, 8, 9],
    subject: 'Địa lí THCS (GDPT 2018)',
    phone: '0912 345 678',
    createdAt: Date.now() - 3600000 * 24 * 30,
    lastLoginAt: Date.now(),
  },
  {
    id: 'GV-702',
    fullName: 'Thầy Nguyễn Văn Hưng',
    email: 'giaovien@geofeedback.edu.vn',
    password: 'teacher123',
    schoolName: 'THCS Chu Văn An',
    role: 'teacher',
    avatar: '👨‍🏫',
    assignedGrades: [6, 7, 8],
    subject: 'Địa lí Tự nhiên & Các châu lục',
    phone: '0988 765 432',
    createdAt: Date.now() - 3600000 * 24 * 15,
    lastLoginAt: Date.now(),
  },
];

export const DEFAULT_ACCOUNTS: StudentAccount[] = [
  {
    id: 'HS-601',
    username: 'minhquan6a',
    displayName: 'Nguyễn Minh Quân',
    grade: 6,
    className: '6A1',
    schoolName: 'THCS Giảng Võ (Hà Nội)',
    avatar: '❄️',
    createdAt: Date.now() - 3600000 * 24 * 7,
    lastLoginAt: Date.now(),
  },
  {
    id: 'HS-702',
    username: 'hoangnam7a',
    displayName: 'Lê Hoàng Nam',
    grade: 7,
    className: '7A2',
    schoolName: 'THCS Chu Văn An',
    avatar: '🏔️',
    createdAt: Date.now() - 3600000 * 24 * 5,
    lastLoginAt: Date.now(),
  },
  {
    id: 'HS-801',
    username: 'maianh8b',
    displayName: 'Trần Mai Anh',
    grade: 8,
    className: '8B',
    schoolName: 'THCS Thăng Long',
    avatar: '🧭',
    createdAt: Date.now() - 3600000 * 24 * 3,
    lastLoginAt: Date.now(),
  },
  {
    id: 'HS-903',
    username: 'quynhchi9a',
    displayName: 'Phạm Quỳnh Chi',
    grade: 9,
    className: '9A1',
    schoolName: 'THCS Cầu Giấy',
    avatar: '🌍',
    createdAt: Date.now() - 3600000 * 24 * 2,
    lastLoginAt: Date.now(),
  },
];

// Seed authentic student profile with initial diagnostic state
const DEFAULT_STUDENT_PROFILE: StudentProfile = {
  id: 'HS-2026-088',
  displayName: 'Nguyễn Minh Quân',
  role: 'student',
  grade: 6,
  avatar: '🧭',
  geoPoints: 340,
  completedTestsCount: 3,
  overallAccuracy: 68.4,
  detectedErrorsCount: 4,
  resolvedErrorsCount: 2,
  errorDnaCounts: {
    K01: 1,
    K02: 1,
    K03: 0,
    K04: 0,
    S01: 1,
    S02: 1,
    V01: 0,
    E01: 1,
    E02: 1,
    E03: 0,
    E04: 1,
    E05: 1,
    E06: 0,
    E07: 0,
  },
  masteryByTopic: {
    'G6-L1': { total: 3, correct: 2, scorePct: 67 },
    'G6-L17': { total: 3, correct: 2, scorePct: 67 },
    'G6-L14': { total: 2, correct: 2, scorePct: 100 },
  },
  activeMistakes: [
    {
      questionId: 'GEO6-002',
      isCorrect: false,
      chosenAnswer: 'A',
      correctAnswer: 'B',
      errorCode: 'E02',
      errorName: 'Hiểu sai khái niệm',
      hypothesis: 'Học sinh đang nhầm giữa thời tiết (hiện tượng nhất thời trong ngày) và khí hậu (quy luật lặp lại qua nhiều năm).',
      evidence: 'Lựa chọn phương án A mô tả "Hôm nay trời nhiều mây, chiều tối có mưa rào".',
      isCertain: true,
      explanation: 'Thời tiết phản ánh trạng thái khí quyển trong một ngày, còn khí hậu phản ánh quy luật lặp đi lặp lại qua nhiều năm.',
      sourceCitation: 'SGK Lịch sử và Địa lí 6, Bài 17, trang 150 (PDF tr. 152)',
      verificationQuestion: {
        id: 'VERIF-602',
        questionText: 'Bản tin phát thanh: "Khu vực Tây Nguyên bước vào mùa khô kéo dài từ tháng 11 đến tháng 4 hàng năm". Bản tin này nói về:',
        options: [
          { id: 'A', text: 'Thời tiết vì đề cập đến nắng nóng thiếu mưa.' },
          { id: 'B', text: 'Khí hậu vì phản ánh quy luật mùa ổn định lặp lại qua nhiều năm.' },
          { id: 'C', text: 'Thời tiết vì chỉ diễn ra trong vài tháng.' },
          { id: 'D', text: 'Hiện tượng thiên tai bất thường.' },
        ],
        correctAnswer: 'B',
        explanation: 'Quy luật mùa khô "từ tháng 11 đến tháng 4 hàng năm" diễn ra ổn định qua nhiều năm, do đó là đặc trưng khí hậu.',
        hint: 'Để ý từ khóa "hàng năm" thể hiện tính chu kì lâu dài.',
      },
      verificationStatus: 'untested',
      timestamp: Date.now() - 3600000 * 2,
    },
    {
      questionId: 'GEO6-001',
      isCorrect: false,
      chosenAnswer: 'B',
      correctAnswer: 'A',
      errorCode: 'E04',
      errorName: 'Sai kĩ năng bản đồ',
      hypothesis: 'Học sinh có thói quen viết kinh độ trước vĩ độ theo quy ước trục hoành toán học.',
      evidence: 'Lựa chọn phương án B ghi A (105°Đ, 20°B) - ngược thứ tự chuẩn.',
      isCertain: true,
      explanation: 'Quy ước môn Địa lí chuẩn quốc tế và SGK luôn ghi Vĩ độ trước, Kinh độ sau: (Vĩ độ, Kinh độ).',
      sourceCitation: 'SGK Lịch sử và Địa lí 6, Bài 1, trang 103 (PDF tr. 105)',
      verificationQuestion: {
        id: 'VERIF-601',
        questionText: 'Điểm M nằm trên vĩ tuyến 10°N và kinh tuyến 40°T. Cách ghi tọa độ địa lí chuẩn là:',
        options: [
          { id: 'A', text: 'M (40°T, 10°N)' },
          { id: 'B', text: 'M (10°N, 40°T)' },
          { id: 'C', text: 'M (10°B, 40°Đ)' },
          { id: 'D', text: 'M (40°N, 10°T)' },
        ],
        correctAnswer: 'B',
        explanation: 'Tuân thủ đúng quy tắc "Vĩ độ trước, Kinh độ sau": vĩ tuyến 10°N ghi trước, kinh tuyến 40°T ghi sau.',
        hint: 'Nhớ câu thần chú: Vĩ trước, Kinh sau!',
      },
      verificationStatus: 'untested',
      timestamp: Date.now() - 3600000 * 5,
    },
  ],
  resolvedMistakes: [
    {
      questionId: 'GEO6-003',
      isCorrect: false,
      chosenAnswer: 'B',
      correctAnswer: 'A',
      errorCode: 'E04',
      errorName: 'Sai kĩ năng bản đồ',
      hypothesis: 'Hiểu ngược nguyên lí đường đồng mức.',
      evidence: 'Em đã nghĩ đường thưa nhau là dốc đứng.',
      isCertain: true,
      explanation: 'Nơi đường đồng mức càng sít nhau thì địa hình càng dốc; nơi thưa nhau thì thoai thoải.',
      sourceCitation: 'SGK Lịch sử và Địa lí 6, Bài 14, trang 139 (PDF tr. 141)',
      verificationQuestion: {
        id: 'VERIF-603',
        questionText: 'Người leo núi muốn chọn con đường an toàn, ít tốn sức nhất nên chọn hướng có đường đồng mức thế nào?',
        options: [
          { id: 'A', text: 'Khu vực có các đường đồng mức nằm thưa xa nhau.' },
          { id: 'B', text: 'Khu vực có các đường đồng mức nằm sít sát vào nhau.' },
        ],
        correctAnswer: 'A',
        explanation: 'Đường đồng mức thưa xa nhau thể hiện sườn thoai thoải, an toàn.',
        hint: 'Đường thưa = Thoai thoải.',
      },
      verificationStatus: 'passed',
      timestamp: Date.now() - 3600000 * 24,
    },
  ],
  spacedRepetitionQueue: [
    {
      id: 'SR-1',
      topicTitle: 'Đường đồng mức & Độ dốc địa hình',
      errorCode: 'E04',
      lastMasteredDate: Date.now() - 3600000 * 24,
      intervalDays: 3,
      dueDate: Date.now() + 3600000 * 48,
      status: 'due',
    },
    {
      id: 'SR-2',
      topicTitle: 'Tọa độ kinh vĩ tuyến',
      errorCode: 'E04',
      lastMasteredDate: Date.now() - 3600000 * 72,
      intervalDays: 7,
      dueDate: Date.now() + 3600000 * 96,
      status: 'due',
    },
  ],
  badges: [
    {
      id: 'badge-map-master',
      title: 'Nhà thám hiểm bản đồ',
      description: 'Làm chủ kĩ năng tọa độ và đọc đường đồng mức',
      icon: 'Compass',
      unlockedAt: Date.now() - 3600000 * 48,
    },
    {
      id: 'badge-climate-expert',
      title: 'Chuyên gia khí hậu',
      description: 'Phân tích chính xác biểu đồ nhiệt độ và lượng mưa',
      icon: 'Sun',
      unlockedAt: Date.now() - 3600000 * 24,
    },
    {
      id: 'badge-error-conqueror',
      title: 'Dũng sĩ sửa lỗi',
      description: 'Khắc phục thành công 2 lỗi tư duy qua bài kiểm chứng',
      icon: 'Award',
      unlockedAt: Date.now() - 3600000 * 12,
    },
  ],
};

const DEFAULT_SESSIONS: AssessmentSession[] = [
  {
    sessionId: 'SES-001',
    timestamp: Date.now() - 3600000 * 24,
    grade: 6,
    lessonId: 'G6-L1',
    lessonTitle: 'Bài 1: Hệ thống kinh, vĩ tuyến. Tọa độ địa lí',
    totalQuestions: 5,
    correctCount: 4,
    score: 80,
    answers: [],
    diagnostics: [],
  },
  {
    sessionId: 'SES-002',
    timestamp: Date.now() - 3600000 * 5,
    grade: 6,
    lessonId: 'G6-L17',
    lessonTitle: 'Bài 17: Thời tiết và khí hậu. Biến đổi khí hậu',
    totalQuestions: 5,
    correctCount: 3,
    score: 60,
    answers: [],
    diagnostics: [],
  },
];

export const storageService = {
  // Question Bank
  getQuestions(): QuestionItem[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.QUESTIONS);
      if (!data) {
        localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(MASTER_QUESTIONS));
        return MASTER_QUESTIONS;
      }
      const parsed: QuestionItem[] = JSON.parse(data);
      // Ensure all master questions are up to date and present, preserving any teacher custom questions
      const parsedIds = new Set(parsed.map((q) => q.questionId));
      const newFromMaster = MASTER_QUESTIONS.filter((q) => !parsedIds.has(q.questionId));
      if (newFromMaster.length > 0) {
        // Also update any master questions that have been refreshed
        const masterMap = new Map(MASTER_QUESTIONS.map((q) => [q.questionId, q]));
        const updated = parsed.map((q) => (masterMap.has(q.questionId) ? masterMap.get(q.questionId)! : q));
        const merged = [...updated, ...newFromMaster];
        localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(merged));
        return merged;
      }
      return parsed;
    } catch {
      return MASTER_QUESTIONS;
    }
  },

  saveQuestions(questions: QuestionItem[]) {
    localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(questions));
  },

  addQuestion(question: QuestionItem) {
    const list = this.getQuestions();
    list.unshift(question);
    this.saveQuestions(list);
  },

  // Assessments
  getSessions(): AssessmentSession[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SESSIONS);
      if (!data) {
        localStorage.setItem(STORAGE_KEYS.SESSIONS, JSON.stringify(DEFAULT_SESSIONS));
        return DEFAULT_SESSIONS;
      }
      return JSON.parse(data);
    } catch {
      return DEFAULT_SESSIONS;
    }
  },

  saveSession(session: AssessmentSession) {
    const sessions = this.getSessions();
    sessions.unshift(session);
    localStorage.setItem(STORAGE_KEYS.SESSIONS, JSON.stringify(sessions));
    this.recordSessionToProfile(session);
  },

  // ===================== STUDENT ACCOUNTS & AUTH =====================
  getAllAccounts(): StudentAccount[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ACCOUNTS);
      if (!data) {
        localStorage.setItem(STORAGE_KEYS.ACCOUNTS, JSON.stringify(DEFAULT_ACCOUNTS));
        return DEFAULT_ACCOUNTS;
      }
      return JSON.parse(data);
    } catch {
      return DEFAULT_ACCOUNTS;
    }
  },

  getCurrentAccountId(): string {
    try {
      return localStorage.getItem(STORAGE_KEYS.CURRENT_ACCOUNT_ID) || 'HS-601';
    } catch {
      return 'HS-601';
    }
  },

  setCurrentAccountId(id: string) {
    localStorage.setItem(STORAGE_KEYS.CURRENT_ACCOUNT_ID, id);
  },

  registerStudent(data: {
    username: string;
    displayName: string;
    password?: string;
    grade: Grade;
    className: string;
    schoolName: string;
    avatar: string;
  }): StudentProfile {
    const accounts = this.getAllAccounts();
    const existing = accounts.find((a) => a.username.toLowerCase() === data.username.toLowerCase());
    if (existing) {
      throw new Error(`Tên đăng nhập "${data.username}" đã được sử dụng. Vui lòng chọn tên khác.`);
    }

    const newId = `HS-${Date.now().toString().slice(-6)}`;
    const newAccount: StudentAccount = {
      id: newId,
      username: data.username,
      displayName: data.displayName,
      grade: data.grade,
      className: data.className,
      schoolName: data.schoolName,
      avatar: data.avatar || '❄️',
      createdAt: Date.now(),
      lastLoginAt: Date.now(),
    };

    accounts.unshift(newAccount);
    localStorage.setItem(STORAGE_KEYS.ACCOUNTS, JSON.stringify(accounts));
    this.setCurrentAccountId(newId);
    this.setActiveGrade(data.grade);

    const initialProfile: StudentProfile = {
      id: newId,
      displayName: data.displayName,
      username: data.username,
      className: data.className,
      schoolName: data.schoolName,
      role: 'student',
      grade: data.grade,
      avatar: data.avatar || '❄️',
      geoPoints: 100, // Starter bonus
      completedTestsCount: 0,
      overallAccuracy: 100,
      detectedErrorsCount: 0,
      resolvedErrorsCount: 0,
      errorDnaCounts: {
        K01: 0,
        K02: 0,
        K03: 0,
        K04: 0,
        S01: 0,
        S02: 0,
        V01: 0,
        E01: 0,
        E02: 0,
        E03: 0,
        E04: 0,
        E05: 0,
        E06: 0,
        E07: 0,
      },
      masteryByTopic: {},
      activeMistakes: [],
      resolvedMistakes: [],
      spacedRepetitionQueue: [],
      lessonProgress: {},
      badges: [
        {
          id: 'badge-ice-start',
          title: 'Nhà thám hiểm Băng Hà',
          description: 'Gia nhập trạm nghiên cứu Địa lí THCS',
          icon: 'Snowflake',
          unlockedAt: Date.now(),
        },
      ],
    };

    this.saveProfile(initialProfile);
    return initialProfile;
  },

  loginStudent(username: string, _password?: string): StudentProfile | null {
    const accounts = this.getAllAccounts();
    const account = accounts.find((a) => a.username.toLowerCase() === username.toLowerCase());
    if (!account) return null;

    account.lastLoginAt = Date.now();
    localStorage.setItem(STORAGE_KEYS.ACCOUNTS, JSON.stringify(accounts));
    this.setCurrentAccountId(account.id);
    this.setActiveGrade(account.grade);

    let profile = this.getProfileForId(account.id);
    if (!profile) {
      profile = {
        ...DEFAULT_STUDENT_PROFILE,
        id: account.id,
        displayName: account.displayName,
        username: account.username,
        className: account.className,
        schoolName: account.schoolName,
        grade: account.grade,
        avatar: account.avatar,
      };
      this.saveProfile(profile);
    }
    return profile;
  },

  switchAccount(accountId: string): StudentProfile {
    this.setCurrentAccountId(accountId);
    const profile = this.getProfile();
    this.setActiveGrade(profile.grade);
    return profile;
  },

  // Student Profile (Per Student)
  getProfileForId(studentId: string): StudentProfile | null {
    try {
      const data = localStorage.getItem(`${STORAGE_KEYS.PROFILE}_${studentId}`);
      if (data) return JSON.parse(data);
    } catch {}
    return null;
  },

  getProfile(): StudentProfile {
    const currentId = this.getCurrentAccountId();
    const saved = this.getProfileForId(currentId);
    if (saved) return saved;

    // Fallback: check general key or default
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PROFILE);
      if (data) {
        const parsed = JSON.parse(data);
        if (parsed) return parsed;
      }
    } catch {}

    const account = this.getAllAccounts().find((a) => a.id === currentId) || DEFAULT_ACCOUNTS[0];
    const initial: StudentProfile = {
      ...DEFAULT_STUDENT_PROFILE,
      id: account.id,
      displayName: account.displayName,
      username: account.username,
      className: account.className,
      schoolName: account.schoolName,
      grade: account.grade,
      avatar: account.avatar,
    };
    this.saveProfile(initial);
    return initial;
  },

  saveProfile(profile: StudentProfile) {
    try {
      localStorage.setItem(`${STORAGE_KEYS.PROFILE}_${profile.id}`, JSON.stringify(profile));
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
    } catch {}
  },

  // Active Grade
  getActiveGrade(): Grade {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ACTIVE_GRADE);
      if (data && [6, 7, 8, 9].includes(Number(data))) {
        return Number(data) as Grade;
      }
    } catch {}
    return 6;
  },

  setActiveGrade(grade: Grade) {
    localStorage.setItem(STORAGE_KEYS.ACTIVE_GRADE, String(grade));
    const profile = this.getProfile();
    profile.grade = grade;
    this.saveProfile(profile);
  },

  // Teacher Account & Authentication Management
  getTeacherAccounts(): TeacherAccount[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.TEACHER_ACCOUNTS);
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {}
    localStorage.setItem(STORAGE_KEYS.TEACHER_ACCOUNTS, JSON.stringify(DEFAULT_TEACHER_ACCOUNTS));
    return DEFAULT_TEACHER_ACCOUNTS;
  },

  saveTeacherAccounts(accounts: TeacherAccount[]) {
    try {
      localStorage.setItem(STORAGE_KEYS.TEACHER_ACCOUNTS, JSON.stringify(accounts));
    } catch {}
  },

  getCurrentTeacher(): TeacherProfile | null {
    try {
      const session = localStorage.getItem(STORAGE_KEYS.CURRENT_TEACHER_SESSION);
      if (session) {
        const parsed = JSON.parse(session);
        if (parsed && parsed.role === 'teacher') return parsed;
      }
    } catch {}
    return null;
  },

  setCurrentTeacher(teacher: TeacherProfile | null) {
    if (teacher) {
      localStorage.setItem(STORAGE_KEYS.CURRENT_TEACHER_SESSION, JSON.stringify(teacher));
      localStorage.setItem(STORAGE_KEYS.USER_ROLE, 'teacher');
    } else {
      localStorage.removeItem(STORAGE_KEYS.CURRENT_TEACHER_SESSION);
      localStorage.setItem(STORAGE_KEYS.USER_ROLE, 'student');
    }
  },

  isTeacherAuthenticated(): boolean {
    return this.getCurrentTeacher() !== null;
  },

  loginTeacher(identifier: string, password: string): { success: boolean; teacher?: TeacherProfile; message: string } {
    const cleanId = identifier.trim().toLowerCase();
    const cleanPass = password.trim();

    if (!cleanId || !cleanPass) {
      return { success: false, message: 'Vui lòng nhập đầy đủ Email/Tài khoản và Mật khẩu giáo viên.' };
    }

    const accounts = this.getTeacherAccounts();
    const account = accounts.find(
      (a) => a.email.toLowerCase() === cleanId || a.id.toLowerCase() === cleanId
    );

    if (!account) {
      return {
        success: false,
        message: 'Không tìm thấy tài khoản giáo viên với thông tin đăng nhập này. Vui lòng kiểm tra lại hoặc tạo tài khoản mới.',
      };
    }

    if (account.password !== cleanPass) {
      return {
        success: false,
        message: 'Mật khẩu giáo viên không chính xác. Vui lòng thử lại.',
      };
    }

    // Update lastLoginAt
    account.lastLoginAt = Date.now();
    this.saveTeacherAccounts(accounts);

    // Profile without password
    const { password: _, ...teacherProfile } = account;
    this.setCurrentTeacher(teacherProfile);

    return {
      success: true,
      teacher: teacherProfile,
      message: `Đăng nhập thành công! Chào mừng ${teacherProfile.fullName}.`,
    };
  },

  registerTeacher(data: {
    fullName: string;
    email: string;
    password: string;
    schoolName: string;
    assignedGrades?: Grade[];
    subject?: string;
    avatar?: string;
    phone?: string;
  }): { success: boolean; teacher?: TeacherProfile; message: string } {
    const cleanEmail = data.email.trim().toLowerCase();
    const cleanName = data.fullName.trim();
    const cleanPass = data.password.trim();
    const cleanSchool = data.schoolName.trim();

    if (!cleanName || !cleanEmail || !cleanPass || !cleanSchool) {
      return { success: false, message: 'Vui lòng điền đầy đủ tất cả các trường bắt buộc.' };
    }

    if (cleanPass.length < 6) {
      return { success: false, message: 'Mật khẩu phải có ít nhất 6 kí tự để đảm bảo bảo mật.' };
    }

    const accounts = this.getTeacherAccounts();
    const emailExists = accounts.some((a) => a.email.toLowerCase() === cleanEmail);
    if (emailExists) {
      return { success: false, message: 'Email giáo viên này đã được đăng kí trong hệ thống. Vui lòng đăng nhập.' };
    }

    const newAccount: TeacherAccount = {
      id: `GV-${Date.now().toString().slice(-4)}`,
      fullName: cleanName,
      email: cleanEmail,
      password: cleanPass,
      schoolName: cleanSchool,
      role: 'teacher',
      avatar: data.avatar || '👩‍🏫',
      assignedGrades: data.assignedGrades && data.assignedGrades.length > 0 ? data.assignedGrades : [6, 7, 8, 9],
      subject: data.subject?.trim() || 'Địa lí THCS (GDPT 2018)',
      phone: data.phone?.trim() || '',
      createdAt: Date.now(),
      lastLoginAt: Date.now(),
    };

    accounts.unshift(newAccount);
    this.saveTeacherAccounts(accounts);

    const { password: _, ...teacherProfile } = newAccount;
    this.setCurrentTeacher(teacherProfile);

    return {
      success: true,
      teacher: teacherProfile,
      message: `Tạo tài khoản giáo viên thành công! Chào mừng ${teacherProfile.fullName}.`,
    };
  },

  logoutTeacher() {
    this.setCurrentTeacher(null);
  },

  // User Role: 'student' | 'teacher' (Strict security guard)
  getUserRole(): 'student' | 'teacher' {
    try {
      const role = localStorage.getItem(STORAGE_KEYS.USER_ROLE) as 'student' | 'teacher';
      if (role === 'teacher') {
        if (!this.isTeacherAuthenticated()) {
          // If no active teacher session, force student role
          localStorage.setItem(STORAGE_KEYS.USER_ROLE, 'student');
          return 'student';
        }
        return 'teacher';
      }
      return 'student';
    } catch {
      return 'student';
    }
  },

  setUserRole(role: 'student' | 'teacher') {
    if (role === 'teacher' && !this.isTeacherAuthenticated()) {
      // Disallow setting teacher role if unauthenticated
      return;
    }
    localStorage.setItem(STORAGE_KEYS.USER_ROLE, role);
  },

  // Update profile from assessment
  recordSessionToProfile(session: AssessmentSession) {
    const profile = this.getProfile();
    profile.completedTestsCount += 1;

    // Recalculate overall accuracy
    const totalQuestionsAnswered = session.totalQuestions;
    const totalCorrectSoFar = profile.completedTestsCount * (profile.overallAccuracy / 100) * totalQuestionsAnswered;
    const newTotalQuestions = profile.completedTestsCount * totalQuestionsAnswered;
    profile.overallAccuracy = Math.round(((totalCorrectSoFar + session.correctCount) / (newTotalQuestions + 1)) * 100);

    // Award GeoPoints: 10 pts per correct answer, 50 pts per completed test
    const earnedPoints = session.correctCount * 10 + 50;
    profile.geoPoints += earnedPoints;

    // Update topic mastery
    if (!profile.masteryByTopic[session.lessonId]) {
      profile.masteryByTopic[session.lessonId] = { total: 0, correct: 0, scorePct: 0 };
    }
    const topicStat = profile.masteryByTopic[session.lessonId];
    topicStat.total += session.totalQuestions;
    topicStat.correct += session.correctCount;
    topicStat.scorePct = Math.round((topicStat.correct / topicStat.total) * 100);

    // Append diagnostics to active mistakes
    session.diagnostics.forEach((diag) => {
      if (!diag.isCorrect) {
        profile.detectedErrorsCount += 1;
        profile.errorDnaCounts[diag.errorCode] = (profile.errorDnaCounts[diag.errorCode] || 0) + 1;

        const exists = profile.activeMistakes.some((m) => m.questionId === diag.questionId);
        if (!exists) {
          profile.activeMistakes.unshift(diag);
        }
      }
    });

    this.saveProfile(profile);
  },

  // Mark mistake as remediated and queue for Spaced Repetition (1, 3, 7 days)
  resolveMistake(questionId: string): boolean {
    const profile = this.getProfile();
    const index = profile.activeMistakes.findIndex((m) => m.questionId === questionId);

    if (index !== -1) {
      const mistake = profile.activeMistakes[index];
      mistake.verificationStatus = 'passed';
      profile.activeMistakes.splice(index, 1);
      profile.resolvedMistakes.unshift(mistake);
      profile.resolvedErrorsCount += 1;
      profile.geoPoints += 30; // 30 bonus GeoPoints for fixing a mistake!

      // Add to Spaced Repetition queue (Due in 1 day for first review)
      profile.spacedRepetitionQueue.unshift({
        id: `SR-${Date.now()}`,
        topicTitle: mistake.errorName,
        errorCode: mistake.errorCode,
        lastMasteredDate: Date.now(),
        intervalDays: 1,
        dueDate: Date.now() + 86400000, // 24 hours
        status: 'due',
      });

      this.saveProfile(profile);
      return true;
    }
    return false;
  },

  // Complete spaced repetition task
  completeSpacedRepetition(srId: string) {
    const profile = this.getProfile();
    const item = profile.spacedRepetitionQueue.find((i) => i.id === srId);
    if (item) {
      item.status = 'completed';
      profile.geoPoints += 20;

      // Advance interval: 1 day -> 3 days -> 7 days
      const nextInterval = item.intervalDays === 1 ? 3 : item.intervalDays === 3 ? 7 : 7;
      if (item.intervalDays < 7) {
        profile.spacedRepetitionQueue.push({
          id: `SR-${Date.now()}`,
          topicTitle: item.topicTitle,
          errorCode: item.errorCode,
          lastMasteredDate: Date.now(),
          intervalDays: nextInterval as 3 | 7,
          dueDate: Date.now() + nextInterval * 86400000,
          status: 'due',
        });
      }
      this.saveProfile(profile);
    }
  },

  // Lesson Progress (GeoFeedback AI 2.0 lifecycle tracking)
  getLessonProgress(lessonId: string) {
    const profile = this.getProfile();
    if (!profile.lessonProgress) {
      profile.lessonProgress = {};
    }
    return profile.lessonProgress[lessonId] || {
      lessonId,
      status: 'not_started' as const,
    };
  },

  updateLessonProgress(lessonId: string, updates: Partial<import('../types').LessonProgress>) {
    const profile = this.getProfile();
    if (!profile.lessonProgress) {
      profile.lessonProgress = {};
    }
    const current = profile.lessonProgress[lessonId] || {
      lessonId,
      status: 'not_started' as const,
    };
    profile.lessonProgress[lessonId] = {
      ...current,
      ...updates,
    };
    this.saveProfile(profile);
  },

  resetAllData() {
    localStorage.removeItem(STORAGE_KEYS.QUESTIONS);
    localStorage.removeItem(STORAGE_KEYS.SESSIONS);
    localStorage.removeItem(STORAGE_KEYS.PROFILE);
    localStorage.removeItem(STORAGE_KEYS.ACTIVE_GRADE);
    localStorage.removeItem(STORAGE_KEYS.USER_ROLE);
    localStorage.removeItem(STORAGE_KEYS.CURRENT_TEACHER_SESSION);
  },
};
