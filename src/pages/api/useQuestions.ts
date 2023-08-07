import useSWR, { SWRResponse } from 'swr';
import { Question } from '@/types';
import { NUMBER_OF_QUESTIONS } from '@/consts';

export const getQuestionsApiUrl =
  `https://the-trivia-api.com/v2/questions?limit=${NUMBER_OF_QUESTIONS}`;

const useQuestions = (): SWRResponse<Question[], unknown> => {
  return useSWR<Question[]>(getQuestionsApiUrl);
};

export default useQuestions;
