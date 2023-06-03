import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';


export default function ImageWithText() {
 return (
   <Container>
     <Row>
       <Col lg={6}>
         <Image
           src="path/to/your/image.jpg"
           alt="Large Image"
           fluid
        />
       </Col>
       <Col lg={6} className="d-flex align-items-center">
         <div>
           <h2>Design, Arts, Performance, STEM.</h2>
           <p>
             Throughout my life, I have always held a deep appreciation for design, art, performance, and STEM (Science, Technology, Engineering, and Mathematics). These areas have been more than just interests to me; they have been a passion. I take great pride in transforming visions into reality, and I am thrilled at the opportunity to bring that same level of dedication to your project.
            </p>
         </div>
       </Col>
     </Row>
   </Container>
 );
};

