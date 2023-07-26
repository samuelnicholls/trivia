import { FC } from 'react';

const Question: FC = () => {
  return (
    <div>
      <p className="mt-4 text-2xl tracking-tight text-gray-900 dark:text-white text-left">
        Lorem ipsum dolor sit amet
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="p-4 border border-white rounded-lg text-white">
          Lorem ipsum dolor sit amet
        </div>
        <div className="p-4 border border-white rounded-lg text-white">
          Lorem ipsum dolor sit amet
        </div>
        <div className="p-4 border border-white rounded-lg text-white">
          Lorem ipsum dolor sit amet
        </div>
        <div className="p-4 border border-white rounded-lg text-white">
          Lorem ipsum dolor sit amet
        </div>
      </div>
    </div>
  );
};

export default Question;
