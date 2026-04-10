import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { WalletCards } from 'lucide-react';

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen w-full bg-background overflow-hidden relative">
      {/* Background Animated Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full mix-blend-screen animate-pulse" />
        <div className="absolute top-[60%] -right-[10%] w-[40%] h-[60%] bg-accent/20 blur-[120px] rounded-full mix-blend-screen animate-pulse delay-1000" />
      </div>

      <div className="flex w-full z-10 flex-col lg:flex-row">
        {/* Left Side Branding */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden lg:flex flex-col w-1/2 p-12 justify-center items-start text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-primary/95 backdrop-blur-3xl z-[-1]" />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="mb-8 p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20"
          >
            <WalletCards className="w-16 h-16 text-white" />
          </motion.div>
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight leading-tight">
            Master your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">financial future.</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-md leading-relaxed">
            Track expenses, manage budgets, and visualize your wealth in real-time with our completely redesigned tracking platform.
          </p>
        </motion.div>

        {/* Right Side Form Content */}
        <div className="flex w-full lg:w-1/2 items-center justify-center p-6 sm:p-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-md"
          >
            <Outlet />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
