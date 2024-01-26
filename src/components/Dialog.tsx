import * as Dialog from '@radix-ui/react-dialog';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import H from './H';

export const Root = Dialog.Root;
export const Portal = Dialog.Portal;
export const Trigger = Dialog.Trigger;
export const Close = Dialog.Close;

type ClassNameProp = { className?: string };

export function Overlay({
  className,
  children,
}: PropsWithChildren<ClassNameProp>) {
  return (
    <Dialog.Overlay
      className={twMerge(
        'bg-purple-950/90 fixed grid top-0 right-0 bottom-0 left-0 place-items-center overflow-y-auto',
        className
      )}
    >
      {children}
    </Dialog.Overlay>
  );
}

export function Content({
  className,
  children,
}: PropsWithChildren<ClassNameProp>) {
  return (
    <Dialog.Content
      className={twMerge(
        'bg-purple-900 rounded-lg w-[90vw] max-w-[505px] p-9',
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
      <H role="h4" className="mb-5">
        {children}
      </H>
    </Dialog.Title>
  );
}
