import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../features/auth/authSlice';

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const token = useAuthStore((state) => state.token);
  return token ? <Navigate to="/" /> : <>{children}</>;
};

export default PublicRoute;