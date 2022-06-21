import { DupsButton } from '../core/dups-button';
import { DupsInput } from '../core/dups-input';

export interface LoginScreenProps {
  /** Triggered when the user clicks "Sign in" */
  onSignIn: () => void;
}

export const LoginScreen = (props: LoginScreenProps) => {
  return (
    <div className="grid grid-cols-5 bg-red-100 h-[100vh]">
      <div className="flex items-center justify-center col-span-2 bg-white">
        <div className="space-y-12">
          <div className="space-y-2">
            <div className="text-3xl font-semibold">Welcome back!</div>
            <div className="text-gray-500">
              Enter your credentials to login to Dupsteco.
            </div>
          </div>
          <div className="flex flex-col space-y-6">
            <DupsInput label="Email" />
            <DupsInput label="Password" />
            <DupsButton className="self-start" variant="link" size="sm">
              Forgot password
            </DupsButton>
          </div>
          <div className="flex flex-col">
            <DupsButton size="lg" onClick={props.onSignIn}>
              Sign in
            </DupsButton>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-3 bg-slate-100">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-20 h-20 bg-teal-600 rounded-full" />
          <div className="text-3xl font-black">dupsteco.</div>
        </div>
      </div>
    </div>
  );
};
