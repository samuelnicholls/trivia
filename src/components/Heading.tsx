import { FC } from 'react';

export type HeadingProps = {
  text: string;
};

const Heading: FC<HeadingProps> = ({ text }) => {
  return <h2 className="text-4xl font-extrabold text-white">{text}</h2>;
};

export default Heading;
