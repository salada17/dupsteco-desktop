import React, { createContext, useState } from 'react';
import { IUser } from '../../../types/user';

const fakeAuthProvider = {
  isAuthenticated: false,
  signin(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  signout(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export interface IAuthContext {
  user: IUser | null;
  logIn: (user: string, callback: VoidFunction) => void;
  logOut: (callback: VoidFunction) => void;
}

export const AuthContext = createContext<IAuthContext>({
  user: null,
  logIn: () => {},
  logOut: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);

  function logIn(newUser: string, callback: VoidFunction) {
    return fakeAuthProvider.signin(() => {
      setUser({ name: newUser });
      callback();
    });
  }

  function logOut(callback: VoidFunction) {
    return fakeAuthProvider.signin(() => {
      setUser(null);
      callback();
    });
  }

  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
