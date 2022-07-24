import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

// Import React Components
import ClientRouter from './components/ClientRouter';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Our main component where eveyrthing else is stored.
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <ClientRouter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
