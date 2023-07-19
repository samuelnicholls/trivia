import { FC } from 'react';

const QuestionAndAnswers: FC = () => {
  return ( 
  <div>        
    <p className='mt-4 text-2xl tracking-tight text-gray-900 dark:text-white text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      <div className='p-4 border border-white rounded-lg text-white'>Lorem ipsum dolor sit amet</div>
      <div className='p-4 border border-white rounded-lg text-white'>Lorem ipsum dolor sit amet</div>
      <div className='p-4 border border-white rounded-lg text-white'>Lorem ipsum dolor sit amet</div>
      <div className='p-4 border border-white rounded-lg text-white'>Lorem ipsum dolor sit amet</div>
    </div></div>
  )
};

export default QuestionAndAnswers;
