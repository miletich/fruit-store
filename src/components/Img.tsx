import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'img'> & {
  alt: string;
  src: string;
};

export default forwardRef<HTMLImageElement, Props>(function Img(
  { className = '', alt, src, ...rest },
  ref
) {
  return <img ref={ref} className={className} alt={alt} src={src} {...rest} />;
});
