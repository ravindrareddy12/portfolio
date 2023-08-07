import Navbar from './Navbar'
import '../Nav.css'
import Home from './Home'
import About from './About';
import Contact from './Contact';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
