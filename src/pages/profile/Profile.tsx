import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../features/auth/authSlice';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

const Profile = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Profile</h1>
      <Card>
        <CardHeader>
          <CardTitle>User Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Profile page - Logout functionality</p>
          <Button onClick={handleLogout} variant="destructive">Logout</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;