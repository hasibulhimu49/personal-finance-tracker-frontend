import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wallet, TrendingUp, ShieldCheck, ArrowRight, Activity, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';

const Landing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30 relative font-sans">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/20 blur-[150px] rounded-full mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-accent/20 blur-[150px] rounded-full mix-blend-screen animate-pulse delay-1000" />
      </div>

      {/* Modern Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2bg-primary rounded-xl shrink-0 flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-primary opacity-20 group-hover:opacity-40 transition-opacity rounded-xl blur-lg"></div>
              <Wallet className="w-8 h-8 text-primary relative z-10" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
              FinTrack
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" className="hidden sm:flex text-base font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-full px-6 h-11">
                Log In
              </Button>
            </Link>
            <Link to="/register">
              <Button className="rounded-full shadow-[0_0_40px_rgba(var(--primary),0.3)] hover:shadow-[0_0_60px_rgba(var(--primary),0.5)] transition-all h-11 px-6 text-base font-medium">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 pt-32 pb-20 px-6 sm:pt-40 sm:pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary font-medium text-sm shadow-[0_0_20px_rgba(var(--primary),0.1)]">
              <Zap className="w-4 h-4" /> Introducing FinTrack 2.0
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.1]"
          >
            Take Complete Control of Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">Financial Destiny.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Experience the most powerful, elegant, and intuitive way to track spending, build budgets, and grow your wealth. Designed for those who demand excellence.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/register" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-semibold rounded-full shadow-[0_0_40px_rgba(var(--primary),0.4)] hover:shadow-[0_0_80px_rgba(var(--primary),0.6)] transition-all gap-2 group">
                Start for Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/login" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg font-semibold rounded-full border-white/10 hover:bg-white/5 backdrop-blur-md transition-all">
                Login to Account
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Floating Feature Cards */}
        <div className="max-w-6xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background z-10 pointer-events-none md:hidden" />
          
          {[
            { icon: TrendingUp, title: 'Smart Analytics', desc: 'Deep dive into your spending habits with ultra-responsive, beautiful charts.', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
            { icon: ShieldCheck, title: 'Bank-grade Security', desc: 'Your data is encrypted and stored securely. We take your privacy seriously.', color: 'text-blue-400', bg: 'bg-blue-500/10' },
            { icon: Activity, title: 'Real-time Tracking', desc: 'Instantly see your balance update as you log transactions intuitively.', color: 'text-rose-400', bg: 'bg-rose-500/10' }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + (idx * 0.1), ease: "easeOut" }}
              className="p-8 rounded-3xl bg-card/40 backdrop-blur-xl border border-white/5 hover:bg-card/60 hover:border-white/10 transition-all group"
            >
              <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Landing;
