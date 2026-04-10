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

const loginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
});

type LoginForm = z.infer<typeof loginSchema>;

const Login = () => {
  const { login, isLoading, error } = useAuthStore();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    await login(data);
    if (!error) {
      toast.success('Login successful');
      navigate('/');
    } else {
      toast.error(error);
    }
  };

  return (
    <Card className="w-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(255,255,255,0.05)] border-primary/10 bg-card/60 backdrop-blur-2xl relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <CardHeader className="space-y-2 pb-6">
        <CardTitle className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">Welcome back</CardTitle>
        <CardDescription className="text-base font-medium">Enter your credentials to access your account</CardDescription>
      </CardHeader>
      <CardContent className="relative z-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-sm font-semibold text-muted-foreground">Username</Label>
            <Input id="username" {...register('username')} className="h-12 bg-background/50 border-input/50 focus:border-primary/50 focus:ring-primary/50 transition-all rounded-xl shadow-sm" placeholder="Enter your username" />
            {errors.username && <p className="text-destructive text-sm font-medium">{errors.username.message}</p>}
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password" className="text-sm font-semibold text-muted-foreground">Password</Label>
              <Link to="#" className="text-xs font-semibold text-primary/80 hover:text-primary transition-colors">Forgot password?</Link>
            </div>
            <Input id="password" type="password" {...register('password')} className="h-12 bg-background/50 border-input/50 focus:border-primary/50 focus:ring-primary/50 transition-all rounded-xl shadow-sm" placeholder="••••••••" />
            {errors.password && <p className="text-destructive text-sm font-medium">{errors.password.message}</p>}
          </div>
          <Button type="submit" className="w-full h-12 text-base font-bold rounded-xl shadow-[0_0_20px_rgba(var(--primary),0.2)] hover:shadow-[0_0_30px_rgba(var(--primary),0.4)] transition-all mt-6" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Sign in to account'}
          </Button>
        </form>
        <div className="mt-8 relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border/50" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card/60 px-2 text-muted-foreground font-semibold backdrop-blur-sm">Or continue with</span>
          </div>
        </div>
        <p className="mt-6 text-center text-muted-foreground font-medium text-sm">
          Don't have an account? <Link to="/register" className="text-primary hover:text-primary/80 underline underline-offset-4 decoration-primary/30 transition-colors">Register</Link>
        </p>
      </CardContent>
    </Card>
  );
};

export default Login;