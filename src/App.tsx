import React from 'react';
import './App.module.css';

import { 
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import * as ROUTES from './constants/routes'

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Navigation />

      <hr />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;