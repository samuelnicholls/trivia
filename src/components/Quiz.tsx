import useQuestions from '@/pages/api/useQuestions';
import { useQuestionsStore } from '@/store';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { DisplayViews } from '@/types';
import ProgressBar from './ProgressBar';
import Question from './Question';

export type QuizProps = {
  setDisplayView: Dispatch<SetStateAction<DisplayViews>>;
};

const Quiz: FC<QuizProps> = ({ setDisplayView }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [usersScore, setUsersScore] = useState<number>(0);
  const [usersSelectedAnswer, setUsersSelectedAnswer] = useState<string>('');
  const { addQuestion } = useQuestionsStore();
  const { data: questions } = useQuestions();
  const currentQuestion = questions ? questions[currentQuestionIndex] : null;
  const numberOfQuestions = 10;

  const handleAnswerSelection = (answer: string) => {
    if (!currentQuestion) return null;
    if (answer === currentQuestion.correctAnswer) {
      setUsersScore(usersScore + 1);
    }

    setUsersSelectedAnswer(answer);
    addQuestion({
      title: currentQuestion.question.text,
      answers: [
        currentQuestion.correctAnswer,
        ...currentQuestion.incorrectAnswers,
      ].reverse(),
      usersSelectedAnswer: answer,
    });
  };

  const handleNextQuestion = () => {
    if (numberOfQuestions - 1 === currentQuestionIndex) {
      setDisplayView('results');
    } else {
      setUsersSelectedAnswer('');
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <>
      <ProgressBar />
      <p className="mt-4 text-xl font-bold text-white">0 out of 0</p>
      {currentQuestion && (
        <>
          <Question
            currentQuestion={currentQuestion}
            handleAnswerSelection={handleAnswerSelection}
            usersSelectedAnswer={usersSelectedAnswer}
          />
          <div className="mt-8 text-right">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              disabled={!usersSelectedAnswer}
              onClick={() => handleNextQuestion()}
            >
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Quiz;
