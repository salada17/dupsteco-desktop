import React from 'react';
import kebabCase from 'lodash/kebabCase';

interface DupsInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
}

export const DupsInput = (props: DupsInputProps) => {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm font-semibold" htmlFor={kebabCase(props.label)}>
        {props.label}
      </label>
      <input
        className="p-2 border rounded"
        id={kebabCase(props.label)}
        {...props}
      />
    </div>
  );
};
