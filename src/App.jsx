import Navbar from './components/Navbar';
import {Home} from './components/Home';
import {About} from './components/about';
import {Data} from './components/Data';


import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Data />
    </div>
  );
}

export default App;
