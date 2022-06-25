import { Outlet } from 'react-router-dom';
import { DupsLayout } from './dups-layout';

export const LayoutWithOutlet = () => {
  return (
    <DupsLayout>
      <Outlet />
    </DupsLayout>
  );
};
