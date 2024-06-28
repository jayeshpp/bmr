import clsx from 'clsx';
import { SyntheticEvent } from 'react';

interface IChip {
  onClick?: (event: SyntheticEvent<HTMLDivElement>) => void;
  label: string;
  selected: boolean;
}

export const Chip = ({ label, onClick, selected }: IChip) => {
  return (
    <div
      className={clsx(' px-4 py-1 rounded-full cursor-pointer ', {
        'bg-blue-400 text-white': selected,
        'bg-gray-100': !selected,
      })}
      onClick={onClick}
    >
      {label}
    </div>
  );
};
