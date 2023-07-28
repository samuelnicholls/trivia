import useQuestions from '@/pages/api/useQuestions';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { useQuestionsStore } from '@/store';
import { DisplayViews } from '@/types';
import Button from './Button';
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
  const numberOfQuestions = 2;

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
      correctAnswer: currentQuestion.correctAnswer,
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
      <p className="mt-4 text-xl font-bold text-white">
        {currentQuestionIndex + 1} out of {numberOfQuestions}
      </p>
      {currentQuestion && (
        <>
          <Question
            currentQuestion={currentQuestion}
            handleAnswerSelection={handleAnswerSelection}
            usersSelectedAnswer={usersSelectedAnswer}
          />
          <div className="mt-8 text-right">
            <Button
              text="Next"
              onClick={() => handleNextQuestion()}
              disabled={!usersSelectedAnswer}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Quiz;
