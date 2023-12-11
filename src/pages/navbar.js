import React from 'react';
import '../style/navbar.css'; // Ensure you create this CSS file

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;