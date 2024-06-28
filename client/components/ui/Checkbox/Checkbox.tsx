import React, { ChangeEvent, useCallback } from 'react';

interface ICheckbox {
  value: string;
  label?: string;
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = React.forwardRef<HTMLInputElement, ICheckbox>(
  (props, ref) => {
    const { onChange, value, label, id } = props;
    return (
      <div className='flex gap-2'>
        <input
          type='checkbox'
          className='border border-gray-200 w-5'
          ref={ref}
          onChange={onChange}
          value={value}
          id={id}
        />
        {label && <label htmlFor={id}>{label}</label>}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
