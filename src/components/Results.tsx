import { FC } from 'react';
import { useQuestionsStore, useScoreStore } from '@/store';
import { QuestionStore } from '@/types';
import Heading from './Heading';

const Results: FC = () => {
  const { questions } = useQuestionsStore();
  const { score } = useScoreStore();

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

  return (
    <div>
      <Heading text={`You scored ${score} out of 10!`} />
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
                  )} p-4 border rounded-lg text-white`}
                >
                  {answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Results;
