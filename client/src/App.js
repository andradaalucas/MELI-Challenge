import './App.css';
import axios from "axios";
import Home from './components/home/Home'
import {BrowserRouter, Route, Switch } from "react-router-dom" 


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
        <Route path="/home" component={Home}/>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
