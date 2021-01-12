import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';

import Home from './pages/Home';
import Error from './pages/Error';

const App = () => {
  return (
    <div className='container'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
