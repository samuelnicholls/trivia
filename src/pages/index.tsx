import Title from '@/components/Title';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto max-w-4xl">
      <Title text="Trivia" />
      <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        {/* <p>TIMER BAR HERE</p>
        <p>3 of 10</p>
        <p className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div>
          <div>Lorem ipsum dolor sit amet</div>
          <div>Lorem ipsum dolor sit amet</div>
          <div>Lorem ipsum dolor sit amet</div>
          <div>Lorem ipsum dolor sit amet</div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
