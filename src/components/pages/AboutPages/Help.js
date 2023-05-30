import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Help() {
  return (
    <div>
      <h2>How I Can Help</h2>
    <Container>
      <Row>
        <Col>
          <h3>Project Management</h3>
          <img src="image1.jpg" alt="Image 1" />
        </Col>
        <Col>
          <h3>Website Development</h3>
          <img src="image2.jpg" alt="Image 2" />
        </Col>
        <Col>
          <h3>Brand Development</h3>
          <img src="image3.jpg" alt="Image 3" />
        </Col>
      </Row>
    </Container>
    </div>
  );
};

