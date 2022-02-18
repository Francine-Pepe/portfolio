import './App.css';
import HeaderAnimation from './Components/HeaderAnimation/HeaderAnimation';
import NavBar from './Components/NavBar/NavBar';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      
        <NavBar />
        <HeaderAnimation />
        <Projects />
        <Skills />
        <Contact />
    </div>
  );
}

export default App;
