import H from '../components/H';
import Loader from '../components/Loader';
import { useCountries } from '../context/CountriesContext';

export default function Home() {
  const countries = useCountries();

  return (
    <div className="max-w-[1440px] mx-auto">
      <H className="my-16">Fruit Store</H>
      {countries ? 'content' : <Loader className="w-32 h-12" />}
    </div>
  );
}
