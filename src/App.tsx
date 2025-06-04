import { AuthProvider, useAuth } from './context/AuthContext';
import { LoginPage } from './components/LoginPage';
import { MainPage } from './components/MainPage';
import './styles/animations.css';

function AppContent() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <MainPage /> : <LoginPage />;
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}