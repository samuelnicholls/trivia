import Title from '@/components/Title';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto max-w-4xl">
      <Title text="Trivia" />
      <div className="block p-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "45%"}}></div>
        </div>
        <p className="mt-4 text-xl font-bold text-white">3 out of 10</p>
        <p className='mt-4 text-2xl tracking-tight text-gray-900 dark:text-white text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className='p-4 border border-white rounded-lg text-white'>Lorem ipsum dolor sit amet</div>
          <div className='p-4 border border-white rounded-lg text-white'>Lorem ipsum dolor sit amet</div>
          <div className='p-4 border border-white rounded-lg text-white'>Lorem ipsum dolor sit amet</div>
          <div className='p-4 border border-white rounded-lg text-white'>Lorem ipsum dolor sit amet</div>
        </div>
        <div className='mt-8 text-right'>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Next</button>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Home;
