import { create } from 'zustand';
import { QuestionStore, QuestionsState, ScoreStore } from './types';

export const useQuestionsStore = create<QuestionsState>((set) => ({
  questions: [],
  addQuestion: (question: QuestionStore) => {
    set((state) => ({
      questions: [
        ...state.questions,
        {
          title: question.title,
          answers: question.answers,
          usersSelectedAnswer: question.usersSelectedAnswer,
          correctAnswer: question.correctAnswer,
        },
      ],
    }));
  },
}));

export const useScoreStore = create<ScoreStore>((set) => ({
  score: 0,
  increaseScore: () => set((state) => ({ score: state.score + 1 })),
}));
