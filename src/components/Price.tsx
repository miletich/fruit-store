import { twMerge } from 'tailwind-merge';

import P from './P';

type Props = {
  price: string | number;
  className?: string;
};

export default function Price({ price, className }: Props) {
  return (
    <P className={twMerge('text-green-600 font-semibold text-lg', className)}>
      {`$${price}`}
    </P>
  );
}
