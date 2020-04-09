import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to="/"><i className="fas fa-code"></i> DevConnector</a>
            </h1>
            <ul>
                <li><a href="profiles.html">Developers</a></li>
                <li><Link to="register.html">Register</a></li>
                <li><Link to="login.html">Login</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
