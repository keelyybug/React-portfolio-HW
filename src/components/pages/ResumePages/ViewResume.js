import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Document, Page } from 'react-pdf';
import {useState} from 'react';
// import '..ResumePages/resume.css';



export default function ViewResume() {
 const [showModal, setShowModal] = useState(false);


 const handleClickView = () => {
   setShowModal(true);
 };


 const handleClose = () => {
   setShowModal(false);
 };


 const handleDownload = () => {
   const link = document.createElement('a');
   link.href = '../Assets/Keely-Sherman-Resume.pdf'; 
   link.download = '../Assets/Keely-Sherman-Resume.pdf';
   link.click();
 };


 return (
   <div>
     <Button className="resume" onClick={handleClickView}>View Resume</Button>
     <Button className="download" onClick={handleDownload}>Download Resume</Button>


     <Modal show={showModal} onHide={handleClose} size="lg" centered>
       <Modal.Header closeButton>
         <Modal.Title>Resume</Modal.Title>
       </Modal.Header>
       <Modal.Body>
         <Document file="'../assets/resume.pdf'"> // Replace with the actual URL or relative path to your PDF resume file
           <Page pageNumber={1} />
         </Document>
       </Modal.Body>
       <Modal.Footer>
         <Button variant="secondary" onClick={handleClose}>Close</Button>
       </Modal.Footer>
     </Modal>
   </div>
 );
};



