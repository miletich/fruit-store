import { useEffect } from 'react';
import { useCountries } from '../context/CountriesContext';
import Loader from './Loader';

export default function Tmp() {
  const countries = useCountries();
  useEffect(() => {
    console.log(countries);
  }, [countries]);

  return (
    <div>
      <Loader />
      tmp
    </div>
  );
}
