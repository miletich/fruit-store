import * as Popover from '@radix-ui/react-popover';
import { PropsWithChildren, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const Root = Popover.Root;
export const Portal = Popover.Portal;
export const Trigger = Popover.Trigger;
export const Arrow = Popover.Arrow;
export const Close = Popover.Close;

type Props = PropsWithChildren<{ className?: string }>;
export const Content = forwardRef<HTMLDivElement, Props>(function Content(
  { children, className },
  ref
) {
  return (
    <Popover.Content
      ref={ref}
      className={twMerge('bg-purple-900 p-3 rounded-lg', className)}
      side="top"
    >
      {children}
    </Popover.Content>
  );
});
