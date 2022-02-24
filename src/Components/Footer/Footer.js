import React from 'react';
import './Footer.css';

export default function Footer() {

    const getCurrentYear = () => {
        return new Date().getFullYear();
      };
    

    return (
        <>
        <footer className='footer_container'>
            <small>&copy; Copyright {getCurrentYear()} - Francine Pêpe</small>
        </footer>
        
        </>

    );
}