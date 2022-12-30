import React from 'react';
import TinderCards from './components/TinderCards/TinderCards';
import Header from './components/Header/Header';
import SwipeButtons from './components/SwipeButtons/SwipeButtons';

function App() {
  return (
    <div className="App">

      <Header />
      <TinderCards />
      <SwipeButtons />
    
    </div>
  );
}

export default App;
