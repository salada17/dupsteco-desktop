import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import '@fontsource/inter/100.css';
import '@fontsource/inter/200.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';
import './App.css';

import { RequireAuth } from './modules/core/require-auth';
import { AuthProvider } from './modules/core/contexts/auth-context';
import { LayoutWihOutlet } from './modules/core/layout-with-outlet';

import { LoginScreen } from './modules/auth/login-screen';
import { LoginScreenContainer } from './modules/auth/login-screen.container';
import { DashboardScreenContainer } from './modules/dashboard/dashboard-screen.container';
import { DashboardScreen } from './modules/dashboard/dashboard-screen';

const Login = LoginScreenContainer(LoginScreen);
const Dashboard = DashboardScreenContainer(DashboardScreen);

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<LayoutWihOutlet />}>
            <Route path="/" element={<RequireAuth element={<Dashboard />} />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}
