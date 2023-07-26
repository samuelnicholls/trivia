import useSWR, { SWRResponse } from 'swr';

type QuestionsDefinition = {
  question: {
    title: string;
  };
};

export const getQuestionsApiUrl =
  'https://the-trivia-api.com/v2/questions?limit=10';

const useQuestions = (): SWRResponse<QuestionsDefinition[], unknown> => {
  return useSWR<QuestionsDefinition[]>(getQuestionsApiUrl);
};

export default useQuestions;
