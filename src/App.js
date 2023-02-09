import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Products/>
      <Events/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
