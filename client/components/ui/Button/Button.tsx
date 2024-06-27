import { ReactNode, SyntheticEvent } from 'react';

interface IButton {
  onClick: (event: SyntheticEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

export const Button = (props: IButton) => {
  const { onClick, children } = props;

  return (
    <button className='p-2 bg-slate-500 px-7 text-white' onClick={onClick}>
      {children}
    </button>
  );
};
