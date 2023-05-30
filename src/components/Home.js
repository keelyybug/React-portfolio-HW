import React from 'react';
import Marquee from "react-fast-marquee";
import First from './pages/homePages/First';
import About from './pages/homePages/About';
import Projects from './pages/homePages/Projects';
import Contact from './pages/homePages/Contact';
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
