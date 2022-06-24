import React from 'react';
import { DashboardScreenProps } from './dashboard-screen';

export const DashboardScreenContainer = (
  Screen: React.FC<DashboardScreenProps>
) =>
  function _() {
    return <Screen text="Hello world!" />;
  };
