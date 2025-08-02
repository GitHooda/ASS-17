import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {showLogin ? (
        <Login switchToSignup={() => setShowLogin(false)} />
      ) : (
        <Signup switchToLogin={() => setShowLogin(true)} />
      )}
    </div>
  );
}

export default App;

