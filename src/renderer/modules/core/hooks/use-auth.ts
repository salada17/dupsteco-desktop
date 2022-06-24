import { useContext } from 'react';
import { AuthContext, IAuthContext } from '../contexts/auth-context';

export function useAuth() {
  return useContext<IAuthContext>(AuthContext);
}
