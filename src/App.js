import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import  Home  from './Components/Home';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
function App() {
  return (
    <>
        <NavBar/>
        <div className='App'>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
        </div>
        <Footer/>
    </>
  );
}

export default App;
