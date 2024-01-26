import { type ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = ComponentProps<'label'> & {
  htmlFor: string;
};

export default forwardRef<HTMLLabelElement, Props>(function InputLabel(
  { className = '', children, htmlFor, ...rest },
  ref
) {
  return (
    <label
      ref={ref}
      htmlFor={htmlFor}
      className={twMerge(
        'text-white min-w-20 text-end me-3 py-2 text-sm',
        className
      )}
      {...rest}
    >
      {`${children}:`}
    </label>
  );
});
