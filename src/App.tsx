import React from 'react';
import NavBar from './components/navbar/nav-bar';
import { HotelsDisplay } from './components/hotelsDisplay';

const App: React.FC = () => {
  return (
    <div className="app">
      <NavBar />
      <HotelsDisplay />
    </div>
  );
};

export default App;
