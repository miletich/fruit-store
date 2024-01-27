import { type ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = ComponentProps<'hr'>;

export default forwardRef<HTMLHRElement, Props>(function Hr(
  { className = '', ...rest },
  ref
) {
  return (
    <hr
      ref={ref}
      className={twMerge('bg-purple-600/70 h-px border-none', className)}
      {...rest}
    />
  );
});
