export type DisplayViews = 'introduction' | 'quiz' | 'results';

export type Question = {
  question: {
    text: string;
  };
  correctAnswer: string;
  incorrectAnswers: string[];
};

export type QuestionStore = {
  title: string;
  answers: string[];
  usersSelectedAnswer: string;
  correctAnswer: string;
};

export interface QuestionsState {
  questions: QuestionStore[];
  addQuestion: (question: QuestionStore) => void;
}

export type ScoreStore = {
  score: number;
  increaseScore: () => void;
};
