import { useQuestionsStore } from '@/store';
import { useState } from 'react';
import { preload } from 'swr';
import type { NextPage } from 'next';
import Quiz from '@/components/Quiz';
import Title from '@/components/Title';
import { getQuestionsApiUrl } from './api/useQuestions';
import { DisplayViews } from '@/types';
import { fetcher } from '@/utils';

const Home: NextPage = () => {
  const [displayView, setDisplayView] = useState<DisplayViews>('introduction');
  const { questions } = useQuestionsStore();
  preload(getQuestionsApiUrl, fetcher);

  return (
    <div className="container mx-auto max-w-4xl">
      <Title text="Trivia" />
      <div className="block p-8 border rounded-lg shadow bg-gray-800 border-gray-700">
        {displayView === 'introduction' && (
          <button onClick={() => setDisplayView('quiz')}>Start Quiz</button>
        )}
        {displayView === 'quiz' && <Quiz setDisplayView={setDisplayView} />}
        {displayView === 'results' && (
          <div>
            {questions.map((question, index: number) => (
              <div key={index}>
                <p>{question.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
