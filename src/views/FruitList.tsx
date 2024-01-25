import H from '../components/H';
import Loader from '../components/Loader';
import * as Tabs from '../components/Tabs';
import { useProcessedData } from '../utils/useProcessedData';
import TabView from './TabView';

const config = ['Hot', 'New', 'Recommended', 'All'];

export default function FruitList() {
  const { defaultTab, isLoading, ...groupedData } = useProcessedData();
  console.log(isLoading);

  return (
    <div className="mb-16">
      <H role="h3" className="mb-4">
        Fruit list
      </H>
      {isLoading ? (
        <Loader className="h-14 w-24 mx-auto my-32" />
      ) : (
        <Tabs.Root defaultValue={defaultTab}>
          <Tabs.List config={config} ariaLabel="Choose a fruit category" />
          <TabView groupedData={groupedData} />
        </Tabs.Root>
      )}
    </div>
  );
}
