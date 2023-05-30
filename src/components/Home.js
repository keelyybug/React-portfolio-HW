import React from 'react';
import Marquee from "react-fast-marquee";
import First from './pages/HomePages/First';
import About from './pages/HomePages/About';
import Projects from './pages/HomePages/Projects';
import Contact from './pages/HomePages/Contact';
import Footer from './Footer';

export default function Home() {
  return (
    <div>
<First  />
<About />
<Projects />
<Contact />
<Footer />
</div>
  );
}
