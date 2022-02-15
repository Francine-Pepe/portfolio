import NavBar from '../NavBar/NavBar';
import './App.css';
import  { BrowserRouter, Switch, Route } from "react-router-dom";


function Main() {
  return (
    <>
    <div>
            
                <NavBar />
                <div className="content">
                
                    <Switch>
                        {/* <Route exact path="/" component={Home}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/about" component={About}/> */}
                    </Switch>
                </div>
            
        </div>
    </>
  );
}

export default Main;