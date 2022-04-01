import React, { useState } from 'react';
import Footer from './Footer';
import Nav from './Nav';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function Container() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        return <Resume />;
    };

    const handlePageChange = (page) => setCurrentPage(page);


    return (
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
</div>
    );
};