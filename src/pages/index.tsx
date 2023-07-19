import ProgressBar from '@/components/ProgressBar';
import QuestionAndAnswers from '@/components/QuestionAndAnswers';
import Title from '@/components/Title';
import type { NextPage } from 'next';
import { useState } from 'react';

const Home: NextPage = () => {
  const [displayView, setDisplayView] = useState("introduction");
  return (
    <div className="container mx-auto max-w-4xl">
      <Title text="Trivia" />
      <div className="block p-8 border rounded-lg shadow bg-gray-800 border-gray-700">
        {displayView === "introduction" && (
          <h1>Intro Text Here</h1>
        )}
        {displayView === "quiz" && (
          <>
                  <ProgressBar />
        <p className="mt-4 text-xl font-bold text-white">3 out of 10</p>
        <QuestionAndAnswers />
        <div className='mt-8 text-right'>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Next</button>
        </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
