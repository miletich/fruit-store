import { type ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = ComponentProps<'span'>;

export default forwardRef<HTMLSpanElement, Props>(function ErrorMessage(
  { className = '', children, ...rest },
  ref
) {
  return (
    <span
      ref={ref}
      role="alert"
      className={twMerge('text-red-600 text-sm -mb-5', className)}
      {...rest}
    >
      {`* ${children}`}
    </span>
  );
});
