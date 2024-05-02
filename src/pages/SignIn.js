import React, { useState } from 'react';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const updateEmail = (event) => {
    setEmail(event.target.value);
  };

  const updatePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { email, password };
    fetch(`${process.env.REACT_APP_API_URL}/signin/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }).then(response => response.json()).then(data => {
      if (data.user_id) {
        document.cookie = `user_id=${data.user_id}`;
        window.location.href = '/lists';
      } else {
        setError('Unable to sign in');
      }
    });
  };

  return (
    <div className="page-background">
      <div className="sign-in-form">
        <h1 className="page-title">Sign In</h1>
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
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;