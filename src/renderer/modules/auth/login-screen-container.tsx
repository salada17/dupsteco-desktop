import React from 'react';
import { LoginScreenProps } from './login-screen';

export const LoginScreenContainer = (Screen: React.FC<LoginScreenProps>) =>
  function _() {
    return <Screen onSignIn={() => {}} />;
  };
