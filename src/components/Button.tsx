import { FC } from 'react';

export type ButtonProps = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
};

const Button: FC<ButtonProps> = ({ text, onClick, disabled }) => {
  return (
    <button
      type="button"
      className="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800 cursor-pointer"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
