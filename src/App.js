import './App.css';
import HeaderAnimation from './Components/HeaderAnimation/HeaderAnimation';
import NavBar from './Components/NavBar/NavBar';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Skills2 from './Components/Skills/Skills2';
// import Parallax from './Components/Parallax/Parallax';
// import { ParallaxProvider } from 'react-scroll-parallax';


function App() {
  return (
    <div className="App">
      {/* <ParallaxProvider> */}
        {/* <Parallax /> */}
        <NavBar />
        <HeaderAnimation />
        <Projects />
        <Skills2 />
        <Contact />
      {/* </ParallaxProvider> */}
    </div>
  );
}

export default App;
