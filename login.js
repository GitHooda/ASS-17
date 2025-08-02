import React, { useState } from 'react';

function Login({ switchToSignup }) {
  const [user, setUser] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in as: ${user.email}`);
    // Normally you'd check login credentials from backend here
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        /><br /><br />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        /><br /><br />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <button onClick={switchToSignup}>Signup</button></p>
    </div>
  );
}

export default Login;
