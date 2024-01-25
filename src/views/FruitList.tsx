import H from '../components/H';
import * as Tabs from '../components/Tabs';
import { useProcessedData } from '../utils/useProcessedData';

const config = ['Hot', 'New', 'Recommended', 'All'];

export default function FruitList() {
  const { defaultTab, ...data } = useProcessedData();
  console.log(data, defaultTab);

  return (
    <div>
      <H role="h3" className="mb-4">
        Fruit list
      </H>
      <Tabs.Root defaultValue={defaultTab}>
        <Tabs.List config={config} ariaLabel="Choose a fruit category" />
        <Tabs.Tab value="Hot">Hot</Tabs.Tab>
        <Tabs.Tab value="New">New</Tabs.Tab>
        <Tabs.Tab value="Recommended">Recommended</Tabs.Tab>
        <Tabs.Tab value="All">All</Tabs.Tab>
      </Tabs.Root>
    </div>
  );
}
