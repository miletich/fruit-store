import {
  type PropsWithChildren,
  createContext,
  useContext,
  useReducer,
  useMemo,
} from 'react';

import { type Datum, dataSchema } from '../utils/data';
import { useThrowAsyncError } from '../utils/useThrowAsyncError';

type DataContext = { isLoading: boolean; data: Datum[] | null };
const DataContext = createContext<DataContext>({
  isLoading: false,
  data: null,
});

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
type StartFetching = {
  type: 'start-fetching';
};
type Action = AddData | AddDatum | RemoveDatum | StartFetching;
type DataReducer = (state: DataContext, action: Action) => DataContext;
const dataReducer: DataReducer = (state, action) => {
  switch (action.type) {
    case 'add-data':
      return { data: action.payload, isLoading: false };
    case 'add-datum':
      return {
        data: [...(state.data || []), action.payload],
        isLoading: false,
      };
    case 'remove-datum':
      return {
        data: (state.data || []).filter((el) => el.id !== action.payload),
        isLoading: false,
      };
    case 'start-fetching':
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [data, dispatch] = useReducer(dataReducer, {
    data: null,
    isLoading: false,
  });

  const throwAsyncError = useThrowAsyncError();

  const api = useMemo(() => {
    const fetchData = () => {
      dispatch({ type: 'start-fetching' });

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
