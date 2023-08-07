import { Dispatch, FC, SetStateAction } from 'react';
import { useQuestionsStore, useScoreStore } from '@/store';
import { DisplayViews, QuestionStore } from '@/types';
import Heading from './Heading';
import Button from './Button';
import { NUMBER_OF_QUESTIONS } from '@/consts';

export type ResultsProps = {
  setDisplayView: Dispatch<SetStateAction<DisplayViews>>;
};

const Results: FC<ResultsProps> = ({ setDisplayView }) => {
  const { questions, resetQuestions } = useQuestionsStore();
  const { score, resetScore } = useScoreStore();

  const determineAnswerClassName = (
    question: QuestionStore,
    answer: string,
  ) => {
    if (answer === question.correctAnswer) {
      return 'border-green-700';
    } else if (
      question.usersSelectedAnswer !== question.correctAnswer &&
      answer === question.usersSelectedAnswer
    ) {
      return 'border-red-500';
    } else {
      return 'border-white';
    }
  };

  const handlePlayAgain = () => {
    setDisplayView("quiz");
    resetQuestions();
    resetScore();
  }

  return (
    <div>
      <Heading text={`You scored ${score} out of ${NUMBER_OF_QUESTIONS}!`} />
      {questions.map((question, index: number) => (
        <div key={index} className="mt-8 mb-8">
          <p className="mt-4 text-2xl tracking-tight text-gray-900 text-white text-left">
            {question.title}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {question.answers.map((answer, index: number) => (
              <div key={index}>
                <div
                  className={`${determineAnswerClassName(
                    question,
                    answer,
                  )} p-4 border rounded-lg text-white h-full flex justify-center items-center`}
                >
                  {answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div>
        <Button text="Play Again" onClick={() => handlePlayAgain()} />
      </div>
    </div>
  );
};

export default Results;
