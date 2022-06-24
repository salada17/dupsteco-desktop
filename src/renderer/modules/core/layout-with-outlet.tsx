import { Outlet } from 'react-router-dom';
import { DupsLayout } from './dups-layout';

export const LayoutWihOutlet = () => {
  return (
    <DupsLayout>
      <Outlet />
    </DupsLayout>
  );
};
