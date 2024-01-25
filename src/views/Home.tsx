import H from '../components/H';
import Loader from '../components/Loader';
import { useCountries } from '../context/CountriesContext';
import MainMenu from './MainMenu';

export default function Home() {
  const countries = useCountries();

  return (
    <div className="max-w-[1440px] mx-auto">
      <H className="mt-16 mb-12">Fruit Store</H>
      {countries ? <MainMenu /> : <Loader className="w-32 h-12" />}
    </div>
  );
}
