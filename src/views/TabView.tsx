import { Tab } from '../components/Tabs';
import type { DataByCountry } from '../utils/useProcessedData';
import CountryGroup from './CountryGroup';

type Props = {
  groupedData: Record<'Hot' | 'New' | 'Recommended' | 'All', DataByCountry>;
};

export default function TabView({ groupedData }: Props) {
  return Object.entries(groupedData).map(([group, dataByCountry]) => (
    <Tab value={group}>
      {Object.entries(dataByCountry).map(([countryId, data]) => (
        <CountryGroup id={countryId}>{data.length}</CountryGroup>
      ))}
    </Tab>
  ));
}
