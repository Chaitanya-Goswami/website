// UmpirePage.js
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import EnquiryForm from '../../components/EnquiryForm';
import './UmpirePage.css';
import { Card } from 'react-bootstrap';

const UmpirePage = () => {
    const [navbarHeight, setNavbarHeight] = useState(localStorage.getItem('navbarHeight') || 0);
  
    useEffect(() => {
      function updateSize() {
        setNavbarHeight(localStorage.getItem('navbarHeight'));
      }
      window.addEventListener('resize', updateSize);
      return () => window.removeEventListener('resize', updateSize);
    }, []);
  
    return (
      <div className="umpire-page container">
        {navbarHeight && (
          <div style={{ minHeight: `calc(100vh - ${navbarHeight}vh)`, marginTop: `${navbarHeight}vh` }}>
            <div className="jumbotron"> 
              <h1 className="display-4">Welcome, Umpire!</h1>
              <Card className="mb-4 card">
                <Card.Body>
                  <Card.Title className="card-title">Ready to take your passion for cricket to the next level?</Card.Title>
                  <Card.Text className="card-text">Join CricSolution's esteemed team of umpires and become an integral part of the game's integrity and fairness.</Card.Text>
                  <Card.Text className="card-text">Register now to embark on a journey of professional growth, skill refinement, and unparalleled opportunities in the world of cricket officiating.</Card.Text>
                  <Card.Text className="card-text">Whether you're a seasoned umpire or just starting your officiating career, CricSolution welcomes you to register and join our community of dedicated and respected officials.</Card.Text>
                </Card.Body>
              </Card>
            </div>   
            <EnquiryForm />         
          </div>
        )}
        
      </div>
    );
};

export default UmpirePage;