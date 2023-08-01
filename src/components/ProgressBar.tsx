import { FC } from 'react';

export type ProgressBarProps = {
  width: number;
};

const ProgressBar: FC<ProgressBarProps> = ({ width }) => {
  return (
    <div className="w-full rounded-full h-2.5 bg-gray-700">
      <div
        className="bg-blue-600 h-2.5 rounded-full"
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
