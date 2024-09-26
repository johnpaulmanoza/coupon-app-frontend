import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import UserLogin from './components/UserLogin';
import UserSignup from './components/UserSignup';
import MerchantLogin from './components/MerchantLogin';
import MerchantSignup from './components/MerchantSignup';
import SignIn from './components/Signin/SignIn';
import Home from './components/Home';
import LandingScreen from './components/Landing/Landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/merchant-login" element={<MerchantLogin />} />
        <Route path="/merchant-signup" element={<MerchantSignup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
