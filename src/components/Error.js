import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ErrorPage = ({ errorCode, errorMessage }) => {
  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Row>
        <Col className="text-center">
          <h1 className="display-1">{errorCode}</h1>
          <p className="lead">{errorMessage}</p>
          <a href="/" className="btn btn-primary">Go Home</a>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;