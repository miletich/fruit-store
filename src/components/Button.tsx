import { type ComponentProps, forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

type Props = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'r' | 'sm';
};

const buttonVariants = cva('text-white leading-4 rounded-lg', {
  variants: {
    variant: {
      primary: 'bg-red-400 hover:bg-red-500 active:bg-red-300',
      secondary: 'bg-purple-900 hover:bg-purple-950 active:bg-purple-800',
      ghost: 'text-red-400 hover:text-red-500 active:text-red-300',
    },
    size: {
      r: 'py-3 px-4 font-semibold text-sm',
      sm: 'py-2 px-3 font-normal text-sm',
    },
    defaultVariants: {
      variant: 'primary',
      size: 'r',
    },
  },
});

export default forwardRef<HTMLButtonElement, Props>(function Button(
  { className = '', variant = 'primary', size = 'r', ...rest },
  ref
) {
  return (
    <button
      ref={ref}
      className={twMerge(buttonVariants({ variant, size, className }))}
      {...rest}
    ></button>
  );
});
