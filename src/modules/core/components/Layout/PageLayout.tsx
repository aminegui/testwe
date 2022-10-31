import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export const PageLayout: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`${className} flex justify-center md:items-center min-h-screen md:bg-gray-100 pt-3 px-2 overflow-hidden`}
    >
      {children}
    </div>
  );
};
