import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Security } from '@okta/okta-react';
import { oktaAuth } from './auth';

import Home from './Home';
import LoginCallback from './LoginCallback';

const App: React.FC = () => (
  <Router>
    <Security
  oktaAuth={oktaAuth}
  restoreOriginalUri={(oktaAuthInstance, originalUri?: string) => {
    if (originalUri) {
      window.location.href = originalUri;
    } else {
      window.location.href = '/';
    }
    return Promise.resolve();
  }}
>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/callback" element={<LoginCallback />} />
      </Routes>
    </Security>
  </Router>
);

export default App;