// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <h1>Brisphere</h1>
            <nav>
                <a href="/">Discover</a>
                <a href="/services">Services</a>
                <a href="/about">About Us</a>
            </nav>
        </header>
    );
}

export default Header;
