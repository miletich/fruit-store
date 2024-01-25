import { useData } from '../context/DataContext';
import H from '../components/H';
import * as Tabs from '../components/Tabs';

const config = ['Hot', 'New', 'Recommended', 'All'];

export default function FruitList() {
  const data = useData();
  console.log(data);

  return (
    <div>
      <H role="h3" className="mb-4">
        Fruit list
      </H>
      <Tabs.Root defaultValue="Hot">
        <Tabs.List config={config} ariaLabel="Choose a fruit category" />
        <Tabs.Tab value="Hot">Hot</Tabs.Tab>
        <Tabs.Tab value="New">New</Tabs.Tab>
        <Tabs.Tab value="Recommended">Recommended</Tabs.Tab>
        <Tabs.Tab value="All">All</Tabs.Tab>
      </Tabs.Root>
    </div>
  );
}
