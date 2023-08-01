import { Dispatch, FC, SetStateAction } from 'react';
import { DisplayViews } from '@/types';
import Button from './Button';
import Heading from './Heading';

export type IntroductionProps = {
  setDisplayView: Dispatch<SetStateAction<DisplayViews>>;
};

const Introduction: FC<IntroductionProps> = ({ setDisplayView }) => {
  return (
    <div>
      <Heading text="Welcome to Trivia" />
      <p className="text-lg font-normal text-white my-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <Button text="Start Quiz" onClick={() => setDisplayView('quiz')} />
    </div>
  );
};

export default Introduction;
