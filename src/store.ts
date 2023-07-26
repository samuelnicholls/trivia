import {create} from "zustand";
import { Question } from "./types";

interface QuestionsState {
  questions: Question[];
  addQuestion: (question: Question) => void;
}

export const useQuestionsStore = create<QuestionsState>((set) => (
  {
    questions: [],
    addQuestion: (question: Question) => {
      set((state) => ({
        questions: [
          ...state.questions,
          {
            id: question.id,
            title: question.title,
          }
        ],
      }));
    }
  }
))