import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css';
import SignUpForm from './signUp';
import LoginForm from './login'; // Import LoginForm component

const Navbar = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);

    const toggleLoginForm = () => {
        setShowLoginForm(!showLoginForm);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">Your Logo</Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        {/* <Link to="/" className="nav-link">Home</Link> */}
                    </li>
                    <li className="nav-item">
                        <span onClick={toggleLoginForm} className="nav-link">Login</span>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-link">Signup</Link>
                    </li>
                </ul>
            </div>
            {showLoginForm && <LoginForm />} {/* Render LoginForm component conditionally */}
        </nav>
    );
};

export default Navbar;
