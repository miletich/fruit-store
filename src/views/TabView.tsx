import { Tab } from '../components/Tabs';
import type { DataByCountry } from '../utils/useProcessedData';
import CountryGroup from './CountryGroup';
import Fruit from './Fruit';

type Props = {
  groupedData: Record<'Hot' | 'New' | 'Recommended' | 'All', DataByCountry>;
};

export default function TabView({ groupedData }: Props) {
  return Object.entries(groupedData).map(([group, dataByCountry]) => (
    <Tab key={group} value={group}>
      {Object.entries(dataByCountry).map(([countryId, data]) => (
        <CountryGroup key={countryId} id={countryId}>
          {data.map(({ id, ...datum }) => (
            <Fruit key={id} {...datum} />
          ))}
        </CountryGroup>
      ))}
    </Tab>
  ));
}
