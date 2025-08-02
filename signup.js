import React, { useState } from 'react';

function Signup({ switchToLogin }) {
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signed up as: ${user.name}`);
    // Normally you'd save user data to a backend here
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        /><br /><br />
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
        <button type="submit">Signup</button>
      </form>
      <p>Already have an account? <button onClick={switchToLogin}>Login</button></p>
    </div>
  );
}

export default Signup;
