import React from 'react';
import { useAuth } from '../core/hooks/use-auth';
import { DashboardScreenProps } from './dashboard-screen';

export const DashboardScreenContainer = (
  Screen: React.FC<DashboardScreenProps>
) =>
  function _() {
    const auth = useAuth();

    return (
      <Screen
        text="Hello world!"
        onLogout={() => {
          auth.logOut(() => {});
        }}
      />
    );
  };
