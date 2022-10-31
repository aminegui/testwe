import { FunctionComponent, ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
}

export const Card: FunctionComponent<Props> = ({ children, className }) => {
  return (
    <div
      className={`${className} flex bg-white shadow-md rounded-md overflow-hidden`}
    >
      {children}
    </div>
  );
};
