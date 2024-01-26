import * as Dialog from '../components/Dialog';
import Button from '../components/Button';

export default function AddDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button className="min-w-[76px]">Add</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay>
          <Dialog.Content>
            <Dialog.Title>Add Fruit</Dialog.Title>
            <div className="mt-2 text-end">
              <Dialog.Close asChild>
                <Button variant="secondary" className="w-[120px] bg-purple-800">
                  Close
                </Button>
              </Dialog.Close>
              <Dialog.Close asChild>
                <Button className="ms-2 w-[120px]">Save</Button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
