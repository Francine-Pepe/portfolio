import './App.css';
import HeaderAnimation from './Components/HeaderAnimation/HeaderAnimation';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <HeaderAnimation />
      </header>
    </div>
  );
}

export default App;
