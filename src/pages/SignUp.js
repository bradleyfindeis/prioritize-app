import React, { useState } from 'react';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const updateEmail = (event) => {
    setEmail(event.target.value);
  };

  const updatePassword = (event) => {
    setPassword(event.target.value);
  };

  const updateConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    }).then(response => {
      if (response.ok) {
        // set a session cookie to the user's id
        document.cookie = `user_id=${response.userId}`;
        window.location.href = '/';
      } else {
        setError('Unable to create account');
      }
    });
  };

  return (
    <div className="page-background">
      <div className="sign-up-form">
        <h1 className="page-title">Sign Up</h1>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              className="input"
              name="email"
              id="email"
              type="email"
              value={email}
              onChange={updateEmail}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="password">Password</label>
            <input
              className="input"
              name="password"
              id="password"
              type="password"
              value={password}
              onChange={updatePassword}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              className="input"
              name="confirm-password"
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={updateConfirmPassword}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;