import H from '../components/H';
import Hr from '../components/Hr';
import Loader from '../components/Loader';
import { useCountries } from '../context/CountriesContext';
import { DataContextProvider } from '../context/DataContext';
import FruitList from './FruitList';
import MainMenu from './MainMenu';

export default function Home() {
  const countries = useCountries();

  return (
    <div className="max-w-[1440px] mx-auto">
      <H className="mt-16 mb-12">Fruit Store</H>
      {countries ? (
        <DataContextProvider>
          <MainMenu />
          <Hr className="mt-8 mb-12" />
          <FruitList />
        </DataContextProvider>
      ) : (
        <Loader className="w-32 h-12" />
      )}
    </div>
  );
}
