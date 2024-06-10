import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';  
import './AboutUs.css';
import EnquiryForm from '../../components/EnquiryForm';  

function AboutUs() {
    const [navbarHeight, setNavbarHeight] = useState(localStorage.getItem('navbarHeight') || 0);
    const [showForm, setShowForm] = useState(false);  

    useEffect(() => {
      function updateSize() {
        setNavbarHeight(localStorage.getItem('navbarHeight'));
      }
      window.addEventListener('resize', updateSize);
      return () => window.removeEventListener('resize', updateSize);
    }, []);

    return (
        <Container fluid style={{ minHeight: `calc(100vh - ${navbarHeight}vh)`, marginTop: `${navbarHeight}vh` }}>
            <Row>
                <Col md={{ span: 8, offset: 2 }} className="about-us">
                    <div className="content">
                        <h1 className="title">About Us</h1>
                        <p className="text">At CricSolution, we pride ourselves on being more than just an officiating organization; we are the heartbeat of fair play in the world of cricket. Based in the vibrant city of Bangalore, India, our journey began with a simple yet profound mission: to elevate the standard of officiating in cricket matches to unprecedented heights.</p>

                        <h2 className="subtitle">Our Team</h2>
                        <p className="text">At the core of CricSolution lies a team of passionate and dedicated professionals who eat, sleep, and breathe cricket. Our team members are not just officials; they are guardians of the game, meticulously trained to uphold the principles of fairness and sportsmanship in every match they oversee. With years of experience and a deep understanding of the intricacies of the sport, our team stands as a beacon of excellence in the cricketing community.</p>

                        <h2 className="subtitle">Commitment to Fair Play</h2>
                        <p className="text">Fair play is more than just a buzzword for us; it's the cornerstone of everything we do at CricSolution. We believe that every cricket match, regardless of its scale or significance, deserves to be officiated with integrity and impartiality. Through comprehensive education, rigorous training, meticulous assessment, and strategic scheduling, we ensure that every official associated with CricSolution is equipped to uphold the highest standards of fairness and sportsmanship.</p>

                        <h2 className="subtitle">Promoting Excellence</h2>
                        <p className="text">At CricSolution, our commitment to excellence is non-negotiable. We understand that the quality of officiating can make or break a cricket match, influencing not just the outcome but also the overall experience for players and fans alike. That's why we leave no stone unturned in our pursuit of perfection, constantly striving to enhance our skills, refine our techniques, and adapt to the ever-evolving dynamics of the game.</p>

                        <h2 className="subtitle">Join Us</h2>
                        <p className="text">Whether you're a seasoned professional or a passionate newcomer, there's a place for you at CricSolution. Join us in our mission to redefine the standards of officiating in cricket and usher in a new era of fairness, integrity, and excellence. Together, let's make every match a testament to the true spirit of the game.</p>
                        <Button onClick={() => setShowForm(true)}>Join Us</Button>  
                    </div>
                </Col>
            </Row>
            {showForm && <EnquiryForm />}  
        </Container>
    );
};

export default AboutUs;