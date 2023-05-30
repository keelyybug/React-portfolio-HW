import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import moment from 'moment-timezone';


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
   <footer className="bg-dark text-light py-3">
     <Container>
       <Row>
         <Col>
           <p>© 2023 Keely Sherman</p>
         </Col>
         <Col className="text-right">
           <p>Local Time is {currentTime}EST</p>
         </Col>
         <Col className="text-right">
           <a href="https://github.com/keelyybug"><i className="fab fa-facebook-f">GitHub</i></a>
           <a href="mailto:keelysherman00@gmail.com"><i className="fab fa-twitter">Email Me</i></a>
           <a href="https://www.instagram.com"><i className="fab fa-instagram">Instagram</i></a>
           <a href="https://www.linkedin.com/in/keely-sherman-39148b187/">LinkedIn<i className="fab fa-linkedin-in"></i></a>
         </Col>
       </Row>
     </Container>
   </footer>
 );
};



