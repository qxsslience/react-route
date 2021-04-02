import './App.css';
import { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import New from './view/New';
import Home from './view/Home';
import List from './view/List';
import Details from './view/Details';
import Cart from './view/Cart';
import NotFound from './view/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/new'><New /></Route>
          {/* 在路由配置中传key值，这里的key值是id */}
          <Route path='/list'><List /></Route>
          <Route path='/details'><Details /></Route>
          <Route path='/cart'><Cart /></Route>
          <Route render={() => <div>404页面飞走了！！</div>}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
