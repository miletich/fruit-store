import { type ComponentProps, forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

type Props = ComponentProps<'h1'> & {
  role?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
};

const hVariants = cva('text-white leading-none', {
  variants: {
    variant: {
      h1: 'text-4xl',
      h2: 'text-3xl',
      h3: 'text-2xl',
      h4: 'text-xl',
      h5: 'text-lg',
    },
    defaultVariants: {
      variant: 'h1',
    },
  },
});

export default forwardRef<HTMLHeadingElement, Props>(function H(
  { className = '', role = 'h1', ...rest },
  ref
) {
  const Tag = role;
  return (
    <Tag
      ref={ref}
      className={twMerge(hVariants({ variant: role, className }))}
      {...rest}
    ></Tag>
  );
});
