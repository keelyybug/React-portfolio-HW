import React from 'react';
import Contact from './homePages/Contact';
import OnPage from './ResumePages/OnPage';
import ViewResume from './ResumePages/ViewResume';

export default function  Resume() {
 return (
  <div>
    <ViewResume />
    <OnPage />
    <Knowledge />
    <Contact />
  </div>
 );
};


