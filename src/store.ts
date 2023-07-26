import { create } from 'zustand';

type QuestionStore = {
  title: string;
  answers: string[];
  usersSelectedAnswer: string;
};

interface QuestionsState {
  questions: QuestionStore[];
  addQuestion: (question: QuestionStore) => void;
}

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
        },
      ],
    }));
  },
}));
