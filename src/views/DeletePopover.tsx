import { type PropsWithChildren } from 'react';

import * as Popover from '../components/Popover';
import Button from '../components/Button';
import { useDataApi } from '../context/DataContext';
import P from '../components/P';

export default function DeletePopover({
  children,
  id,
}: PropsWithChildren<{ id: number }>) {
  const { removeDatum } = useDataApi();
  return (
    <Popover.Root>
      <Popover.Trigger asChild>{children}</Popover.Trigger>

      <Popover.Portal>
        <Popover.Content>
          <P>⚠️ Are you sure you want to delete this Fruit?</P>
          <div className="mt-2 text-end">
            <Popover.Close asChild>
              <Button
                size="sm"
                variant="secondary"
                className="w-[68px] bg-purple-700"
              >
                Cancel
              </Button>
            </Popover.Close>
            <Popover.Close asChild>
              <Button
                size="sm"
                onClick={() => removeDatum(id)}
                className="w-[68px] ms-2"
              >
                Ok
              </Button>
            </Popover.Close>
          </div>
          <Popover.Arrow className="fill-purple-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
