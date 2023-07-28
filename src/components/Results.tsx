import { FC } from 'react';
import { QuestionStore } from '@/store';

const Results: FC = () => {
  const questions = [
    {
      title: 'Test Title One - Correct Answer',
      answers: ['One', 'Two', 'Three', 'Four'],
      usersSelectedAnswer: 'Two',
      correctAnswer: 'Two',
    },
    {
      title: 'Test Title Two - Incorrect Answer',
      answers: ['One', 'Two', 'Three', 'Four'],
      usersSelectedAnswer: 'One',
      correctAnswer: 'Three',
    },
  ];

  const determineAnswerClassName = (
    question: QuestionStore,
    answer: string,
  ) => {
    // eslint-disable-next-line no-console
    console.log('question', question);
    // eslint-disable-next-line no-console
    console.log('answer', answer);
    if (
      question.usersSelectedAnswer === question.correctAnswer &&
      answer === question.correctAnswer
    ) {
      return 'border-green-700';
    } else if (
      question.usersSelectedAnswer !== question.correctAnswer &&
      answer === question.correctAnswer
    ) {
      return 'border-red';
    } else {
      return 'border-white';
    }
  };

  return (
    <div>
      <h2 className="text-4xl font-extrabold dark:text-white mb-8">
        You scored 5 out of 10!
      </h2>
      {questions.map((question, index: number) => (
        <div key={index} className="mb-8">
          <p className="mt-4 text-2xl tracking-tight text-gray-900 dark:text-white text-left">
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
