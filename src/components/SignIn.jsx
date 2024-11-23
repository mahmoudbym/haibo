import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation after successful sign-in
import './style/Collection.css'
import './style/homeStyle.css'

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Handle form input changes
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Simulate authentication (with hardcoded credentials)
  const handleSignIn = (e) => {
    e.preventDefault();

    // Simulating an authentication check (replace with actual logic later)
    if (email === 'user@example.com' && password === 'password123') {
      // Redirect to home page on successful login
      navigate('/home');
    } else {
      // Show error if authentication fails
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={handleEmailChange} 
            placeholder="Enter your email" 
            required 
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={handlePasswordChange} 
            placeholder="Enter your password" 
            required 
          />
        </div>

        <button type="submit" className="sign-in-button">Sign In</button>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>

      <div className="redirect-signup">
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  );
}

export default SignIn;
