import React from 'react';
import './Login.css';

export default function Login() {
    return (
        <div className="login-container">
            <h1 className="login-heading">Login</h1>
            <div className="login-form">
                <form>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}
