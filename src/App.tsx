import { useEffect } from 'react';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  useEffect(() => {
    fetch('/api/countries')
      .then((r) => r.json())
      .then((d) => {
        console.log(d);
      });
  }, []);

  return <ErrorBoundary>hello</ErrorBoundary>;
}

export default App;
