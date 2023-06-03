import React from 'react';
import Summary from '../pages/AboutPages/Summary';
import Image from '../pages/AboutPages/Image';
import Knowledge from '../pages/AboutPages/Knowledge';
import Help from '../pages/AboutPages/Help';
import Contact from './HomePages/Contact';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <div>
      <Summary />
      <Image />
      <Knowledge />
      <Help />
      <Contact />
      <Footer />
    </div>
  );
}
