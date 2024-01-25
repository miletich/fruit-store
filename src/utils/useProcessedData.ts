import groupBy from 'lodash-es/groupBy';
import type { Dictionary } from 'lodash';

import { useData } from '../context/DataContext';
import type { Datum, Tab } from './data';

type DefinedTab = Exclude<Tab, undefined>;
type DataByCountry = Dictionary<Datum[]>;

// const tabs: DefinedTab[] = ['Hot', 'New', 'Recommended'];

type FilterGroupedByCountry = (
  data: DataByCountry,
  tab: DefinedTab
) => DataByCountry;
export const filterGroupedByCountry: FilterGroupedByCountry = (data, tab) =>
  Object.keys(data).reduce((acc, cur) => {
    const curData = data[cur].filter((el) => el.tab === tab);
    return { ...acc, ...(curData.length && { [cur]: curData }) };
  }, {} as DataByCountry);

export const useProcessedData = () => {
  const data = useData();
  const groupedByCountry = groupBy(data?.reverse(), 'country');

  const Hot = filterGroupedByCountry(groupedByCountry, 'Hot');
  const New = filterGroupedByCountry(groupedByCountry, 'New');
  const Recommended = filterGroupedByCountry(groupedByCountry, 'Recommended');

  const defaultTab = Object.keys(Hot).length
    ? 'Hot'
    : Object.keys(New).length
    ? 'New'
    : Object.keys(Recommended).length
    ? 'Recommended'
    : 'All';

  return { All: groupedByCountry, Hot, New, Recommended, defaultTab };
};
