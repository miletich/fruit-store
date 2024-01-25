import groupBy from 'lodash-es/groupBy';
import type { Dictionary } from 'lodash';

import { useData } from '../context/DataContext';
import type { Datum, Tab } from './data';

type DefinedTab = Exclude<Tab, undefined>;
export type DataByCountry = Dictionary<Datum[]>;

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
  const { data, isLoading } = useData();
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

  return {
    Hot,
    New,
    Recommended,
    All: groupedByCountry,
    defaultTab,
    isLoading,
  };
};
