import useSWR, { SWRResponse } from 'swr';
import { Question } from '@/types';

export const getQuestionsApiUrl =
  'https://the-trivia-api.com/v2/questions?limit=10';

const useQuestions = (): SWRResponse<Question[], unknown> => {
  return useSWR<Question[]>(getQuestionsApiUrl);
};

export default useQuestions;
