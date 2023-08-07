import { useState } from 'react';
import { preload } from 'swr';
import type { NextPage } from 'next';
import Introduction from '@/components/Introduction';
import Quiz from '@/components/Quiz';
import Results from '@/components/Results';
import Title from '@/components/Title';
import { getQuestionsApiUrl } from './api/useQuestions';
import { DisplayViews } from '@/types';
import { fetcher } from '@/utils';

const Home: NextPage = () => {
  const [displayView, setDisplayView] = useState<DisplayViews>('introduction');
  preload(getQuestionsApiUrl, fetcher);

  return (
    <div className="container mx-auto max-w-4xl">
      <Title text="Trivia" />
      <div className="block p-8 border rounded-lg shadow bg-gray-800 border-gray-700">
        {displayView === 'introduction' && (
          <Introduction setDisplayView={setDisplayView} />
        )}
        {displayView === 'quiz' && <Quiz setDisplayView={setDisplayView} />}
        {displayView === 'results' && (
          <Results setDisplayView={setDisplayView} />
        )}
      </div>
    </div>
  );
};

export default Home;
