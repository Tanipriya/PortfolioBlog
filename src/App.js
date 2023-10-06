import './App.css';
import Contact from './Portfolio/Contact';
import Footer from './Portfolio/Footer';
import Navbar from './Portfolio/Navbar';
import Projects from './Portfolio/Projects';
import Resume from './Portfolio/Resume';

function App() {
  return (
    <>
    <div className="min-h-[100vh] bg-[#0D2438]">
    <div className="mx-auto max-w-7xl">
      <Navbar/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  </div>
  </>
  );
}

export default App;
