import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('/api/countries')
      .then((r) => r.json())
      .then((d) => console.log(d));
  }, []);

  return <>hello</>;
}

export default App;
