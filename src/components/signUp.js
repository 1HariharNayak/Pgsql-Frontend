import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // Import useHistory from React Router
import '../style/signUp.css'

const SignUpForm = ({ onSignUpSuccess }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const [showLoginInstead, setShowLoginInstead] = useState(false); // State to control whether to show login message
    const [errorMessage, setErrorMessage] = useState(''); // State to store error message

    const history = useHistory(); // Get history object from React Router

    const handleSignup = async () => {
        const validationErrors = {}

        if (!username.trim()) {
            validationErrors.username = 'User Name is required'
        }
        if (!email.trim()) {
            validationErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            validationErrors.email = 'Invalid email address';
        }

        if (!password.trim()) {
            validationErrors.password = 'Password is required';
        }


        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const response = await axios.post('http://localhost:4000/api/signup', {
                username, email, password
            });  

            if (response.data.message === 'Email already exists. Please login instead.') {
                setShowLoginInstead(true); // If email already exists, show login message
            } else {
                history.push('/homepage');
                if (typeof onSignUpSuccess === 'function') {
                    onSignUpSuccess(response.data);
                }
            }
        } catch (error) {
            console.log('Error in signUp:', error);
            setErrorMessage('Error signing up. Please try again.'); // Set error message if signup request fails
        }

    };


    return (
        <div className="signup-container">
            <h2>Signup</h2>
            {showLoginInstead ? (
                <p>Email already exists. Please login instead.</p> // Display login message directly
            ) : (
                <>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        {errors.username && <div className="error-message">{errors.username}</div>}
                    </div>
                    <div className="input-group">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <div className="error-message">{errors.email}</div>}
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <div className="error-message">{errors.password}</div>}
                    </div>
                    <button className="btn-submit" onClick={handleSignup}>Sign Up</button>
                </>
            )}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default SignUpForm;
