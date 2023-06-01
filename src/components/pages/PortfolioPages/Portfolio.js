import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './portfolio.css';



export default function PortfolioPage() {
    const projects = [
  {
    title: 'Project 1',
    description: '',
    link: '',
    image: '',
  },
  {
    title: 'Project 2',
    description: '',
    link: '',
    image: '',
  },
  {
    title: 'Project 3',
    description: '',
    link: '',
    image: '',
  },
  {
    title: 'Project 4',
    description: '',
    link: '',
    image: '',
  },
];
  return (
    <Container className="portfolio">
      <Row>
        {projects.map((project, index) => (
          <Col md={6} lg={3} key={index}>
            <Card className="project-card">
              <Card.Img variant="top" src={project.image} />
              <Card.Overlay className="overlay">
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Card.Footer>
              </Card.Overlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}


