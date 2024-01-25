import { useEffect } from 'react';
import { useCountries } from '../context/CountriesContext';
import Loader from './Loader';
import H from './H';

export default function Tmp() {
  const countries = useCountries();
  useEffect(() => {
    console.log(countries);
  }, [countries]);

  return (
    <div>
      <Loader />
      <H role="h2">tmp</H>
    </div>
  );
}
