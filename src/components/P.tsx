import { type ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = ComponentProps<'p'>;

export default forwardRef<HTMLParagraphElement, Props>(function P(
  { className = '', children, ...rest },
  ref
) {
  return (
    <p ref={ref} className={twMerge('text-white/60', className)} {...rest}>
      {children}
    </p>
  );
});
