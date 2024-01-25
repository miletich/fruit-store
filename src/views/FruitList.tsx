import H from '../components/H';
import * as Tabs from '../components/Tabs';
import { useProcessedData } from '../utils/useProcessedData';
import TabView from './TabView';

const config = ['Hot', 'New', 'Recommended', 'All'];

export default function FruitList() {
  const { defaultTab, ...groupedData } = useProcessedData();
  console.log(groupedData, defaultTab);

  return (
    <div>
      <H role="h3" className="mb-4">
        Fruit list
      </H>
      <Tabs.Root defaultValue={defaultTab}>
        <Tabs.List config={config} ariaLabel="Choose a fruit category" />
        <TabView groupedData={groupedData} />
      </Tabs.Root>
    </div>
  );
}
