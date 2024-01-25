import ErrorBoundary from './components/ErrorBoundary';
import Tmp from './components/Tmp';
import { CountriesContextProvider } from './context/CountriesContext';

function App() {
  return (
    <ErrorBoundary>
      <CountriesContextProvider>
        <Tmp />
        hello
      </CountriesContextProvider>
    </ErrorBoundary>
  );
}

export default App;
