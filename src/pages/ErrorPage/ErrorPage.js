import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ErrorPage.css'; 
import RobotImage from './robot.png'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const ErrorPage = ({ errorCode, errorMessage }) => {
  return (

    <div>
        <Container className="vh-100 d-flex flex-column justify-content-center align-items-center error-container">
        <Row>
            <Col className="text-center">
            <h1 className="display-1 error-title">Ahh, Snap!</h1>
            <div className="error-icon">
                <img src={RobotImage} alt="Error icon" className="error-icon-img" />
            </div>
            <h2 className="display-4 error-code">{errorCode}</h2>
            <p className="lead error-message">{errorMessage}</p>
            <p className="lead error-message">It seems like we've misplaced the page you're looking for. No worries though, just click the button below!</p>
            <Link to="/" className="btn btn-primary btn-lg">Take me home</Link>
            </Col>
        </Row>
        </Container>
        </div>
  );
};

export default ErrorPage;