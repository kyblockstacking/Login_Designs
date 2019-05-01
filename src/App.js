import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Navbar from './Components/Navbar';
import Design1 from './Components/Design1';

function App() {
  return (
    <Router>
      <Route path='/' component={Navbar} />
      <Route exact path='/design-1' component={Design1} />
    </Router>
  );
};

export default App;