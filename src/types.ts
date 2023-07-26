export type DisplayViews = 'introduction' | 'quiz' | 'results';

export type Question = {
  question: {
    text: string;
  };
  correctAnswer: string;
  incorrectAnswers: string[];
};
