import * as Dialog from '@radix-ui/react-dialog';
import { PropsWithChildren, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import P from './P';

export const Root = Dialog.Root;
export const Portal = Dialog.Portal;
export const Trigger = Dialog.Trigger;
export const Close = Dialog.Close;

type ClassNameProp = { className?: string };

export const Overlay = forwardRef<
  HTMLDivElement,
  PropsWithChildren<ClassNameProp>
>(function Overlay({ className, children }, ref) {
  return (
    <Dialog.Overlay
      ref={ref}
      className={twMerge(
        'bg-purple-950/90 fixed grid top-0 right-0 bottom-0 left-0 place-items-center overflow-y-auto',
        className
      )}
    >
      {children}
    </Dialog.Overlay>
  );
});

export function Content({
  className,
  children,
}: PropsWithChildren<ClassNameProp>) {
  return (
    <Dialog.Content
      className={twMerge(
        'bg-purple-900 rounded-lg w-[90vw] max-w-[505px] p-9 relative',
        className
      )}
    >
      {children}
    </Dialog.Content>
  );
}

export function Title({
  className,
  children,
}: PropsWithChildren<ClassNameProp>) {
  return (
    <Dialog.Title className={twMerge('', className)}>
      <P className="mb-5 text-lg font-semibold">{children}</P>
    </Dialog.Title>
  );
}
