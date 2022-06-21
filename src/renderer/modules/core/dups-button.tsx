import clsx from 'clsx';
import React from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'link';
type Size = 'sm' | 'base' | 'lg';

interface DupsButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: Variant;
  size?: Size;
}

const variants: { [variant in Variant]: string } = {
  primary: 'font-bold bg-teal-600 text-white rounded',
  secondary: 'font-bold bg-teal-100 text-teal-600 rounded',
  outline: 'font-bold text-teal-600 rounded border border-teal-500',
  link: 'font-semibold text-teal-600',
};

const sizes: { [size in Size]: string } = {
  sm: 'text-sm px-4 py-1',
  base: 'px-4 py-2',
  lg: 'px-4 py-3',
};

const styles: { [key in `${Variant}_${Size}`]: string } = {
  primary_sm: clsx([variants.primary, sizes.sm]),
  primary_base: clsx([variants.primary, sizes.base]),
  primary_lg: clsx([variants.primary, sizes.lg]),
  secondary_sm: clsx([variants.secondary, sizes.sm]),
  secondary_base: clsx([variants.secondary, sizes.base]),
  secondary_lg: clsx([variants.secondary, sizes.lg]),
  outline_sm: clsx([variants.outline, sizes.sm]),
  outline_base: clsx([variants.outline, sizes.base]),
  outline_lg: clsx([variants.outline, sizes.lg]),
  link_sm: clsx([variants.link, 'text-sm py-1']),
  link_base: clsx([variants.link, 'py-2']),
  link_lg: clsx([variants.link, 'py-3']),
};

export const DupsButton = ({
  variant = 'primary',
  size = 'base',
  ...props
}: DupsButtonProps) => {
  return (
    <button
      type="button"
      {...props}
      className={clsx([styles[`${variant}_${size}`], props.className])}
    />
  );
};
