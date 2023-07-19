import { FC } from 'react';

export type ExampleProps = {
  text: string;
};

const Example: FC<ExampleProps> = ({ text }) => {
  return <div>{text}</div>;
};

export default Example;
