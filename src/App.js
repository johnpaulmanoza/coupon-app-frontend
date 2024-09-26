import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/Signin/SignIn';
import Home from './components/Home';
import LandingScreen from './components/Landing/Landing';
import SignUp from './components/Signup/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
