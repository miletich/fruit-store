import { type ComponentProps, forwardRef, PropsWithChildren } from 'react';

type Props = ComponentProps<'form'> & PropsWithChildren;

export default forwardRef<HTMLFormElement, Props>(function Form(
  { className = '', children, ...rest },
  ref
) {
  return (
    <form ref={ref} className={className} {...rest}>
      {children}
    </form>
  );
});
