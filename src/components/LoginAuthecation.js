// src/components/Login.js
import React, { useState } from 'react';

const Login = ({ switchToSignup, switchToForgetPassword }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === '' || password === '') {
            setError('Please enter both username and password');
        } else {
            console.log('Login successful');
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account? <span style={{ color: 'blue', cursor: 'pointer' }} onClick={switchToSignup}>Signup</span>
            </p>
            <p>
                Forgot password? <span style={{ color: 'blue', cursor: 'pointer' }} onClick={switchToForgetPassword}>Reset it here</span>
            </p>
        </div>
    );
};

export default Login;
