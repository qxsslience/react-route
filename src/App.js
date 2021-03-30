import './App.css';
import { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import New from './view/New';
import Home from './view/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/home' component={Home}></Route>
        <Route path='/new'><New /></Route>
      </Router>
    )
  }
}

export default App;
