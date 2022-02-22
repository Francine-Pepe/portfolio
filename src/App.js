import './App.css';
import HeaderAnimation from './Components/HeaderAnimation/HeaderAnimation';
import NavBar from './Components/NavBar/NavBar';
import Projects from './Components/Projects/Projects';
// import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Skills2 from './Components/Skills/Skills2';
// import NavBar2 from './Components/NavBar/NavBar2';

function App() {
  return (
    <div className="App">
      
        <NavBar />
        {/* <NavBar2 /> */}
        <HeaderAnimation />
        <Projects />
        {/* <Skills /> */}
        <Skills2 />
        <Contact />
    </div>
  );
}

export default App;
