import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import moment from 'moment-timezone';
import { useState, useEffect } from 'react';


export default function Footer() {
 const [currentTime, setCurrentTime] = useState(moment().tz('America/New_York').format('HH:mm'));


 useEffect(() => {
   const interval = setInterval(() => {
     setCurrentTime(moment().tz('America/New_York').format('HH:mm'));
   }, 1000);


   return () => {
     clearInterval(interval);
   };
 }, []);
 return (
   <footer className="footer text-light py-3 justify-content-end flex-grow-1 ">
     <Container>
       <Row>
         <Col className="text-left d-flex align-items-center">
           <p>Local Time {currentTime} EST</p>
         </Col>
         <Col className="text-right d-flex align-items-center justify-content-end">
           <a href="https://github.com/keelyybug" className="px-2" id="footer">GitHub</a>
           <a href="mailto:keelysherman00@gmail.com" className="px-2" id="footer">Email Me</a>
           <a href="https://www.instagram.com" id="footer" className="px-2">Instagram</a>
           <a id="footer" href="https://www.linkedin.com/in/keely-sherman-39148b187/" className="px-2">LinkedIn</a>
         </Col>
       </Row>
     </Container>
   </footer>
 );
};



