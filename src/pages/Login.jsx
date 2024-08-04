import React from 'react';
import '../styles/Login.css';

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-form"> 
                <h1>Login</h1>
                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Enter your username" required />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required />

                    <button type="submit">Login</button>
                </form>
                <div className="forgot-password">
                    <a href="#">Forgot Password?</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
