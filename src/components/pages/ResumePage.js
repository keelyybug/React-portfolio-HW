import React from 'react';
import Contact from './HomePages/Contact';
import OnPage from './ResumePages/OnPage';
import ViewResume from './ResumePages/ViewResume';
import Knowledge from './AboutPages/Knowledge';

export default function  Resume() {
 return (
  <div>
    {/* <ViewResume />
    <OnPage /> */}
    <Knowledge />
    <Contact />
  </div>
 );
};


