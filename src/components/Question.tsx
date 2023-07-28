import { FC } from 'react';
import { Question as QuestionType } from '@/types';

export type QuestionProps = {
  currentQuestion: QuestionType;
  handleAnswerSelection: (answer: string) => void;
  usersSelectedAnswer: string;
};

const Question: FC<QuestionProps> = ({
  currentQuestion,
  handleAnswerSelection,
  usersSelectedAnswer,
}) => {
  const answersList = [
    currentQuestion.correctAnswer,
    ...currentQuestion.incorrectAnswers,
  ].reverse();

  return (
    <div>
      <p className="mt-4 text-2xl tracking-tight text-gray-900 dark:text-white text-left">
        {currentQuestion.question.text}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {answersList.map((answer: string, index: number) => (
          <button
            key={index}
            className={`${
              usersSelectedAnswer === answer
                ? 'border-amber-300'
                : 'border-white'
            } p-4 border rounded-lg text-white`}
            onClick={() => handleAnswerSelection(answer)}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
