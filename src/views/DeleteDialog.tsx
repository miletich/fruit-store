import * as Dialog from '../components/Dialog';
import Button from '../components/Button';
import CloseButton from '../components/CloseButton';

export default function DeleteDialog() {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button className="min-w-[76px]">Delete</Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay>
            <Dialog.Content>
              <Dialog.Title>Delete Fruit</Dialog.Title>
              <Dialog.Close asChild>
                <CloseButton />
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
