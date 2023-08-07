import { NUMBER_OF_QUESTIONS } from '@/consts';
import useQuestions from '@/pages/api/useQuestions';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { useQuestionsStore, useScoreStore } from '@/store';
import { DisplayViews } from '@/types';
import Button from './Button';
import ProgressBar from './ProgressBar';
import Question from './Question';

export type QuizProps = {
  setDisplayView: Dispatch<SetStateAction<DisplayViews>>;
};

const Quiz: FC<QuizProps> = ({ setDisplayView }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [usersSelectedAnswer, setUsersSelectedAnswer] = useState<string>('');
  const { addQuestion } = useQuestionsStore();
  const { increaseScore } = useScoreStore();
  const { data: questions } = useQuestions();
  const currentQuestion = questions ? questions[currentQuestionIndex] : null;

  const handleAnswerSelection = (answer: string) => {
    setUsersSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (!currentQuestion) return null;
    if (usersSelectedAnswer === currentQuestion.correctAnswer) {
      increaseScore();
    }

    addQuestion({
      title: currentQuestion.question.text,
      answers: [
        currentQuestion.correctAnswer,
        ...currentQuestion.incorrectAnswers,
      ].reverse(),
      usersSelectedAnswer: usersSelectedAnswer,
      correctAnswer: currentQuestion.correctAnswer,
    });

    if (NUMBER_OF_QUESTIONS - 1 === currentQuestionIndex) {
      setDisplayView('results');
    } else {
      setUsersSelectedAnswer('');
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <>
      <ProgressBar
        width={((currentQuestionIndex + 1) / NUMBER_OF_QUESTIONS) * 100}
      />
      <p className="mt-4 text-xl font-bold text-white">
        {currentQuestionIndex + 1} out of {NUMBER_OF_QUESTIONS}
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
