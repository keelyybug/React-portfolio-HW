import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './Home';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <AboutPage />;
    }
    if (currentPage === 'Portfolio') {
      return <PortfolioPage />;
    }
    if (currentPage === 'Contact') {
      return <ContactPage />;
    }
    if (currentPage === 'Resume') {
      return <ResumePage />;}
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
