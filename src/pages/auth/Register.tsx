import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuthStore } from '../../features/auth/authSlice';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { toast } from 'sonner';

const registerSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type RegisterForm = z.infer<typeof registerSchema>;

const Register = () => {
  const { register: registerUser, isLoading, error } = useAuthStore();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterForm) => {
    await registerUser(data);
    if (!error) {
      toast.success('Registration successful');
      navigate('/');
    } else {
      toast.error(error);
    }
  };

  return (
    <Card className="w-full shadow-2xl border-white/20 bg-card/80 backdrop-blur-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Create Account</CardTitle>
        <CardDescription>Join us to start managing your finances</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" {...register('username')} className="h-11 bg-background/50" />
            {errors.username && <p className="text-destructive text-sm">{errors.username.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register('email')} className="h-11 bg-background/50" />
            {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" {...register('password')} className="h-11 bg-background/50" />
            {errors.password && <p className="text-destructive text-sm">{errors.password.message}</p>}
          </div>
          <Button type="submit" className="w-full h-12 text-lg font-medium shadow-lg hover:shadow-primary/25 transition-all mt-4" disabled={isLoading}>
            {isLoading ? 'Registering...' : 'Register Account'}
          </Button>
        </form>
        <p className="mt-6 text-center text-muted-foreground">
          Already have an account? <Link to="/login" className="text-primary font-medium hover:underline">Login here</Link>
        </p>
      </CardContent>
    </Card>
  );
};

export default Register;