import clsx from 'clsx';
import { DupsButton } from './dups-button';
import { useAuth } from './hooks/use-auth';

export const DupsSidebar = () => {
  const auth = useAuth();

  const handleLogout = () => {
    auth.logOut(() => {});
  };

  return (
    <div className="flex flex-col justify-between h-full py-8 border-r">
      {/* Upper content */}
      <div className="space-y-10">
        {/* Header */}
        <div className="flex items-center px-8 space-x-2">
          <div className="flex-shrink-0 bg-teal-600 rounded-full w-7 h-7" />
          <h1 className="text-xl font-bold">dupsteco</h1>
        </div>
        {/* Body */}
        <div className="space-y-2">
          {['Loans', 'Savings', 'Members', 'Reports'].map((item) => {
            const isActive = item === 'Loans';
            return (
              <div
                key={item}
                className={clsx(
                  'flex items-center px-8 py-4 space-x-3 cursor-pointer',
                  {
                    'border-r-2 border-teal-600 bg-teal-50': isActive,
                  }
                )}
              >
                <div className="w-4 h-4 border-2 border-teal-600" />
                <div className="font-medium">{item}</div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Footer */}
      <div className="px-8">
        <DupsButton onClick={handleLogout}>Log out</DupsButton>
      </div>
    </div>
  );
};
