import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../features/auth/authSlice';
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = useAuthStore((state) => state.token);
  return token ? <>{children}</> : <Navigate to="/welcome" />;
};

export default ProtectedRoute;