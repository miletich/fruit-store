import { useEffect } from 'react';
import { useCountries } from '../context/CountriesContext';

export default function Tmp() {
  const countries = useCountries();
  useEffect(() => {
    console.log(countries);
  }, [countries]);

  return <div>tmp</div>;
}
