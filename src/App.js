import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import ClientRouter from './components/ClientRouter';

function App() {
  return (
    <Router>
      <div className="App">
        <ClientRouter />
      </div>
    </Router>
  );
}

export default App;
