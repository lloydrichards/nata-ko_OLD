import React from 'react';
import './App.css';

import TopNav from './components/TopNav';
import Gallery from './components/Gallery';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <div className='App'>
      <TopNav />
      <Gallery />
      <BottomNav />
    </div>
  );
}

export default App;
