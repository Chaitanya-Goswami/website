// Hero.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Hero.css'; // Import the CSS file

const Hero = () => {
  const imageUrl = "https://images.unsplash.com/photo-1589801258579-18e091f4ca26?q=80&w=1802&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="d-flex align-items-center justify-content-center text-center text-white" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${imageUrl})`, width: '100vw', height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <Container>
        <Row>
          <Col className="py-5">
            <h1 className="display-3 fw-bold">Welcome to Cric Solution</h1>
            <p className="lead fst-italic">Based in Bangalore, CricSolution provides professional officiating for cricket matches, upholding the values of fair play and competition.</p>
            <a href="https://chat.whatsapp.com/EZpBI7foP6uEcwDF1CybaR" target="_blank" rel="noopener noreferrer">
  <Button variant="outline-light" size="lg" className="hero-button">
    Join our Passionate Community
  </Button>
</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;