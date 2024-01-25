import {
  type PropsWithChildren,
  createContext,
  useContext,
  useReducer,
  useMemo,
} from 'react';

import { type Datum, dataSchema } from '../utils/data';
import { useThrowAsyncError } from '../utils/useThrowAsyncError';

type DataContext = Datum[] | null;
const DataContext = createContext<DataContext>(null);

type DataApiContext = {
  addDatum: (payload: Datum) => void;
  removeDatum: (payload: number) => void;
  fetchData: () => void;
};
const DataApiContext = createContext<DataApiContext>({
  addDatum: () => {},
  removeDatum: () => {},
  fetchData: () => {},
});

type AddData = {
  type: 'add-data';
  payload: Datum[];
};
type AddDatum = {
  type: 'add-datum';
  payload: Datum;
};
type RemoveDatum = {
  type: 'remove-datum';
  payload: number;
};
type Action = AddData | AddDatum | RemoveDatum;
type DataReducer = (state: Datum[], action: Action) => Datum[];
const dataReducer: DataReducer = (state, action) => {
  switch (action.type) {
    case 'add-data':
      return action.payload;
    case 'add-datum':
      return [...state, action.payload];
    case 'remove-datum':
      return state.filter((el) => el.id !== action.payload);
    default:
      return state;
  }
};

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [data, dispatch] = useReducer(dataReducer, []);

  const throwAsyncError = useThrowAsyncError();

  const api = useMemo(() => {
    const fetchData = () => {
      fetch('/api/data')
        .then((r) => {
          if (!r.ok) {
            throw new Error('Failed to fetch');
          }

          return r.json();
        })
        .then((d) => {
          const parsedData = dataSchema.parse(d);
          dispatch({ type: 'add-data', payload: parsedData });
        })
        .catch((e) => {
          throwAsyncError(e);
        });
    };

    return {
      addDatum: (payload: Datum) => dispatch({ type: 'add-datum', payload }),
      removeDatum: (payload: number) =>
        dispatch({ type: 'remove-datum', payload }),
      fetchData,
    };
  }, []); // eslint-disable-line
  // useThrowAsyncError would cause problems in the deps array

  return (
    <DataContext.Provider value={data}>
      <DataApiContext.Provider value={api}>{children}</DataApiContext.Provider>
    </DataContext.Provider>
  );
};

/* eslint-disable react-refresh/only-export-components */
export const useData = () => useContext(DataContext);
export const useDataApi = () => useContext(DataApiContext);
/* eslint-enable react-refresh/only-export-components */
