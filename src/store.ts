import { create } from 'zustand';
import { QuestionStore, QuestionsState, ScoreStore } from './types';

const questionsStoreInitialState = {
  questions: []
}

const scoreStoreInitialState = {
  score: 0
}

export const useQuestionsStore = create<QuestionsState>((set) => ({
  ...questionsStoreInitialState,
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
  resetQuestions: () => {
    set(questionsStoreInitialState)
  },
}));

export const useScoreStore = create<ScoreStore>((set) => ({
  ...scoreStoreInitialState,
  increaseScore: () => set((state) => ({ score: state.score + 1 })),
  resetScore: () => {
    set(scoreStoreInitialState)
  },
}));
