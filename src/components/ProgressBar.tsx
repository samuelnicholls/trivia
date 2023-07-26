import { FC } from 'react';

const ProgressBar: FC = () => {
  return (
    <div className="w-full rounded-full h-2.5 bg-gray-700">
      <div
        className="bg-blue-600 h-2.5 rounded-full"
        style={{ width: '45%' }}
      ></div>
    </div>
  );
};

export default ProgressBar;
