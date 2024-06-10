import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, faBaseballBall, faTrophy, faSmile } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

const Stats = () => {
  return (
    <Container>
      <Row className="text-center py-5">
        <Col xs={12} sm={6} md={3}>
          <FontAwesomeIcon icon={faUserCheck} size="3x" />
          <h2>200+</h2>
          <p>Total Umpires</p>
          <hr />
        </Col>
        <Col xs={12} sm={6} md={3}>
          <FontAwesomeIcon icon={faBaseballBall} size="3x" />
          <h2>700+</h2>
          <p>Matches Served</p>
          <hr />
        </Col>
        <Col xs={12} sm={6} md={3}>
          <FontAwesomeIcon icon={faSmile} size="3x" />
          <h2>50+</h2>
          <p>Associations</p>
          <hr />
        </Col>
        <Col xs={12} sm={6} md={3}>
          <FontAwesomeIcon icon={faTrophy} size="3x" />
          <h2>20+</h2>
          <p>Certified Umpires</p>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default Stats;