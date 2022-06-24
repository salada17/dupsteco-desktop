import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../core/hooks/use-auth';
import { LoginScreenProps } from './login-screen';

export const LoginScreenContainer = (Screen: React.FC<LoginScreenProps>) =>
  function _() {
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    return (
      <Screen
        onSignIn={() => {
          auth.logIn('Ronna', () => {
            // Send them back to the page they tried to visit when they were redirected to the login page.
            // Use { replace: true } so we don't create another entry in the history stack for the login page.
            // This means that when they get to the protected page and click the back button, they won't end up
            // back on the login page, which is also really nice for the user experience.
            const from = location.state?.from?.pathname || '/';
            navigate(from, { replace: true });
          });
        }}
      />
    );
  };
