import {
  type PropsWithChildren,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';

import { countriesSchema, type Country } from '../utils/data';
import { useThrowAsyncError } from '../utils/useThrowAsyncError';

type CountriesContextT = Country[] | null;

const CountriesContext = createContext<CountriesContextT>(null);

export const CountriesContextProvider = ({ children }: PropsWithChildren) => {
  const [countries, setCountries] = useState<CountriesContextT>(null);
  const throwAsyncError = useThrowAsyncError();

  useEffect(() => {
    fetch('/api/countries')
      .then((r) => {
        if (!r.ok) {
          throw new Error('Failed to fetch');
        }

        return r.json();
      })
      .then((d) => {
        const parsedData = countriesSchema.parse(d);
        setCountries(parsedData);
      })
      .catch((e) => {
        throwAsyncError(e);
      });
  }, []); // eslint-disable-line
  // useThrowAsyncError would cause problems in the deps array

  return (
    <CountriesContext.Provider value={countries}>
      {children}
    </CountriesContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCountries = () => useContext(CountriesContext);
