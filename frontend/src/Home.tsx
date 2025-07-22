import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

const Home: React.FC = () => {
  const { authState, oktaAuth } = useOktaAuth();

  if (!authState || authState.isPending) {
    return <div>Loading...</div>;
  }

  const login = () => oktaAuth.signInWithRedirect();
  const logout = () => oktaAuth.signOut();

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h1>React + Okta</h1>
      {authState.isAuthenticated ? (
        <>
          <p>Logged in!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>Please log in.</p>
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
};

export default Home;