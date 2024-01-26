import * as Dialog from '../components/Dialog';
import * as Table from '../components/Table';
import Button from '../components/Button';
import CloseButton from '../components/CloseButton';
import { useData } from '../context/DataContext';
import { useCountries } from '../context/CountriesContext';
import DeletePopover from './DeletePopover';

export default function DeleteDialog() {
  const { data } = useData();
  const countries = useCountries();

  if (!countries) return null;

  return (
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
            <Table.Root className="w-full">
              <Table.Thead>
                <Table.Tr className="odd:bg-purple-800 hover:bg-purple-800 text-purple-300">
                  <Table.Th className="rounded-tl-lg">Tab</Table.Th>
                  <Table.Th>Country</Table.Th>
                  <Table.Th>Fruit</Table.Th>
                  <Table.Th className="rounded-tr-lg">Action</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {data &&
                  data.map(({ tab, country, fruit, id }) => (
                    <Table.Tr key={id}>
                      <Table.Td>{tab}</Table.Td>
                      <Table.Td>
                        {countries.find((c) => c.id === country)!.name}
                      </Table.Td>
                      <Table.Td>{fruit}</Table.Td>
                      <Table.Td>
                        <DeletePopover id={id}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="mt-0 mb-0"
                          >
                            Delete
                          </Button>
                        </DeletePopover>
                      </Table.Td>
                    </Table.Tr>
                  ))}
              </Table.Tbody>
            </Table.Root>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
