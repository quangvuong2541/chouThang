import './App.css';
import { lazy, Suspense } from 'react';
const Comp = lazy(() => import('./components/comp.js'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="App">
        <Comp />
   
      </div>
    </Suspense>

  );
}

export default App;