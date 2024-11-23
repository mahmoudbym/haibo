import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation after successful sign-up
import './style/Collection.css'
import './style/homeStyle.css'


function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Handle form input changes
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  // Simulate user registration (you can replace this logic with actual backend API calls)
  const handleSignUp = (e) => {
    e.preventDefault();

    // Basic validation
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    // Simulate a successful registration
    console.log('User registered:', { name, email, password });

    // Redirect to sign-in page on successful registration
    navigate('/signin');
  };

  return (
    <div className="sign-up-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-group">
          <label>Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={handleNameChange} 
            placeholder="Enter your name" 
            required 
          />
        </div>

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

        <div className="form-group">
          <label>Confirm Password</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={handleConfirmPasswordChange} 
            placeholder="Confirm your password" 
            required 
          />
        </div>

        <button type="submit" className="sign-up-button">Sign Up</button>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>

      <div className="redirect-signin">
        <p>Already have an account? <a href="/signin">Sign In</a></p>
      </div>
    </div>
  );
}

export default SignUp;
