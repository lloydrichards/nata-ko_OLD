import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import TopNav from './components/TopNav';
import Gallery from './components/Gallery';
import Current from './components/Current'
import BottomNav from './components/BottomNav';

function App() {
  return (
    <Router>
      <div className='App'>
        <TopNav />
        <Switch>
          <Route path='/current'>
            <Current />
          </Route>
          <Route path='/'>
            <Gallery />
          </Route>
        </Switch>

        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
