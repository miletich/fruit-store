import ErrorBoundary from './views/ErrorBoundary';
import { CountriesContextProvider } from './context/CountriesContext';
import Home from './views/Home';

function App() {
  return (
    <ErrorBoundary>
      <CountriesContextProvider>
        <Home />
      </CountriesContextProvider>
    </ErrorBoundary>
  );
}

export default App;
