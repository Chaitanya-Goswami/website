// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home/Homepage';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage/LandingPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import UmpirePage from './pages/UmpirePage/UmpirePage'; 
import AboutUs from './pages/AboutUs/AboutUs';

function App() {
  useEffect(() => {
    const app = document.getElementById('app');
    app.style.height = `${window.innerHeight}px`;
  }, []);

  return (
    <Router>
      <div className="App" id="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/umpire" element={<UmpirePage />} /> {}
            <Route path="/about-us" element={<AboutUs />} /> 
            <Route path="*" element={<ErrorPage errorCode="404" errorMessage="Page Not Found" />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;