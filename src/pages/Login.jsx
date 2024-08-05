import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../data/auth';
import '../styles/Login.css';
import { redirect, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try{
        await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in successfully');
        redirect('/')
    }catch(error){
        setError('Failed to sign in. Please check your email and password.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
        <p>You do not have an account? <Link to="/register">Register</Link></p>
      </form>
    </div>
  );
};

export default Login;
