import { FC } from 'react';
import ProgressBar from './ProgressBar';
import Question from './Question';
import { useQuestionsStore } from '@/store';

const Quiz: FC = () => {
  const { addQuestion, questions } = useQuestionsStore();
  const updatedQuestion = {
    id: 1,
    title: "test skdsjdskjdskjd"
  }

  // eslint-disable-next-line no-console
  console.log("zusQu", questions)
  return (
    <>
      <ProgressBar />
      <p className="mt-4 text-xl font-bold text-white">3 out of 10</p>
      <Question />
      <div className="mt-8 text-right">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => { addQuestion(updatedQuestion) }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Quiz;
