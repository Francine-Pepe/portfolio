import './App.css';
import HeaderAnimation from './Components/HeaderAnimation/HeaderAnimation';
import NavBar from './Components/NavBar/NavBar';
import Projects from './Components/Projects/Projects';
// import NavBar2 from './Components/NavBar/NavBar2'

function App() {
  return (
    <div className="App">
      
        {/* <NavBar2 /> */}
        <NavBar />
        <HeaderAnimation />
        <Projects />
    </div>
  );
}

export default App;
