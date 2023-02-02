import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Products from './components/Products';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Expertise/>
      <Products/>
      <Events/>
      
    </div>
  );
}

export default App;
