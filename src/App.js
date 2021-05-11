import react from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';

function App() {
  return (
    <react.Fragment>
      <NavBar/>
      <main className="containers">
        <Counters/>
      </main>    
    </react.Fragment>
  );
}

export default App;
