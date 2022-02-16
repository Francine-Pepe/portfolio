import './App.css';
// import HeaderAnimation from './Components/HeaderAnimation/HeaderAnimation';
import NavBar from './Components/NavBar/NavBar';
import Projects from './Components/Projects/Projects';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <NavBar />
        {/* <HeaderAnimation /> */}
        <Projects />
      </header>
    </div>
  );
}

export default App;
