import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css'
import "./styles/animations.css"

import Home from './pages/Home.jsx';
import Problems from './pages/Problems.jsx';
import Problem from './pages/Problem';
import Profile from './pages/Profile.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <main className="bg-background text-primary-text w-full">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/problems/:id" element={<Problem />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
