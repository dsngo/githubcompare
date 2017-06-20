import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Popular from './Popular';
import Nav from './Nav';
import Home from './Home';
import FoF from './FoF';
import Battle from './Battle';

const App = () =>
  <BrowserRouter>
    <div className="container">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/popular" component={Popular} />
        <Route exact path="/battle" component={Battle} />
        <Route component={FoF} />
      </Switch>
    </div>
  </BrowserRouter>;

export default App;
