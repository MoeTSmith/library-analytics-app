import { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';

const LoginCallback: React.FC = () => {
  const { oktaAuth } = useOktaAuth();

  useEffect(() => {
    const handleRedirect = async () => {
      try {
        await oktaAuth.handleRedirect();
        window.location.href = '/';
      } catch (err) {
        console.error('Error handling redirect:', err);
      }
    };
    handleRedirect();
  }, [oktaAuth]);

  return <div>Loading...</div>;
};

export default LoginCallback;