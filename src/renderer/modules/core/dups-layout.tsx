import React from 'react';
import { DupsSidebar } from './dups-sidebar';

export interface DupsLayoutProps {
  children: React.ReactNode;
}

export const DupsLayout = (props: DupsLayoutProps) => {
  return (
    <div className="grid grid-cols-5">
      {/* Sidebar */}
      <div className="col-span-1">
        <DupsSidebar />
      </div>
      <div className="col-span-4">{props.children}</div>
    </div>
  );
};
