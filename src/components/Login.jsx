import { motion } from 'framer-motion';
import { Lock, Mail, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert('Login successful! Redirecting to dashboard...');
    setIsLoading(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen pt-24 md:pt-28 px-4 md:px-6 relative overflow-hidden bg-gradient-to-b from-[#FBF5EF] to-white">
        {/* Background Elements */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(122, 46, 138, 0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-[#7A2E8A]/5 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-[#F4A63A]/5 to-transparent blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column - Branding */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="mb-8 md:mb-12">
              <div className="relative inline-block mb-8">
                <div className="absolute -left-8 top-1/2 w-6 h-0.5 bg-gradient-to-r from-transparent to-[#7A2E8A]"></div>
                <h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-4 md:mb-6"
                  style={{ 
                    fontFamily: "'Merriweather', serif",
                    fontWeight: '700',
                    lineHeight: '1.1'
                  }}
                >
                  <span className="text-gray-800">Welcome to </span>
                  <span className="bg-gradient-to-r from-[#7A2E8A] via-[#C94FA6] to-[#F4A63A] bg-clip-text text-transparent">
                    Solution Engine
                  </span>
                </h1>
                <div className="absolute -right-8 top-1/2 w-6 h-0.5 bg-gradient-to-l from-transparent to-[#F4A63A]"></div>
              </div>
              
              <p 
                className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600 max-w-2xl"
                style={{ 
                  fontFamily: "'DM Sans', sans-serif",
                  lineHeight: '1.5'
                }}
              >
                Access your personalized dashboard and unlock the full potential of our Solution Engine platform.
              </p>
              
              {/* Animated gradient line */}
              <div className="relative h-1 w-48 overflow-hidden rounded-full mt-6 md:mt-8">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7A2E8A] to-transparent opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#7A2E8A] via-[#C94FA6] to-[#F4A63A] animate-gradient-x"></div>
              </div>
            </div>

            {/* Features List - Minimal Design */}
            <div className="mt-12 space-y-6">
              {[
                {
                  title: "Secure Access",
                  description: "Enterprise-grade security with 256-bit encryption",
                  color: "from-[#7A2E8A] to-transparent"
                },
                {
                  title: "Real-time Analytics",
                  description: "Access live dashboards and performance metrics",
                  color: "from-[#C94FA6] to-transparent"
                },
                {
                  title: "Collaborative Tools",
                  description: "Share insights and collaborate with your team",
                  color: "from-[#F4A63A] to-transparent"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  {/* Minimal line indicator instead of icon */}
                  <div className="relative mt-1 flex-shrink-0">
                    <div className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-gradient-to-br from-white to-gray-50 border border-gray-200/50"></div>
                    <div className={`w-4 h-0.5 bg-gradient-to-r ${feature.color} group-hover:w-6 transition-all duration-300`}></div>
                  </div>
                  
                  <div>
                    <h3 
                      className="font-bold text-gray-800 text-lg mb-1"
                      style={{ fontFamily: "'Merriweather', serif" }}
                    >
                      {feature.title}
                    </h3>
                    <p 
                      className="text-gray-600"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Login Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 max-w-md w-full"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
              {/* Form Header - Minimal Design */}
              <div className="p-8 bg-gradient-to-br from-white to-purple-50/30 border-b border-gray-200/50">
                {/* Single Lock Icon without line */}
                <div className="flex items-center justify-center mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#7A2E8A]/10 to-[#C94FA6]/10">
                    <Lock className="w-8 h-8 text-[#7A2E8A]" />
                  </div>
                </div>
                
                <h2 
                  className="text-3xl font-bold text-center text-gray-800 mb-3"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  Client Login
                </h2>
                <p 
                  className="text-gray-600 text-center mb-6"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Enter your credentials to access your account
                </p>
                
                {/* Gradient line under title */}
                <div className="w-16 h-0.5 rounded-full bg-gradient-to-r from-[#7A2E8A] to-[#C94FA6] mx-auto"></div>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="p-8">
                <div className="space-y-6">
                  {/* Email Field */}
                  <div>
                    <label 
                      className="block text-gray-700 mb-2 font-medium"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Email Address *
                    </label>
                    <div className="relative">

                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#7A2E8A] focus:ring-2 focus:ring-[#7A2E8A]/20 outline-none transition-all duration-300"
                        placeholder="client@company.com"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div>
                    <label 
                      className="block text-gray-700 mb-2 font-medium"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Password *
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full pl-12 pr-12 py-3 rounded-lg border border-gray-300 focus:border-[#C94FA6] focus:ring-2 focus:ring-[#C94FA6]/20 outline-none transition-all duration-300"
                        placeholder="Enter your password"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      />
                      {/* Eye icon kept as it's functional */}
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                      {/* Minimal checkbox */}
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="w-4 h-4 text-[#7A2E8A] rounded focus:ring-[#7A2E8A] border-gray-300 cursor-pointer"
                        />
                        <div className="absolute inset-0 rounded border border-gray-300 pointer-events-none"></div>
                      </div>
                      <span 
                        className="text-gray-600 text-sm"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        Remember me
                      </span>
                    </label>
                    <a 
                      href="#forgot-password"
                      className="text-[#7A2E8A] hover:text-[#C94FA6] text-sm font-medium transition-colors duration-300"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Forgot Password?
                    </a>
                  </div>

                  {/* Login Button */}
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg text-white overflow-hidden hover:shadow-2xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#7A2E8A] via-[#C94FA6] to-[#F4A63A]"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <span className="relative z-10">
                      {isLoading ? 'Logging in...' : 'Login to Dashboard'}
                    </span>
                    
                    <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </motion.button>

                  {/* Divider - Minimal */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span 
                        className="px-4 bg-white text-gray-500"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        Or continue with
                      </span>
                    </div>
                  </div>

{/* Social Login Options - With Logos */}
<div className="grid grid-cols-2 gap-4">
  <button
    type="button"
    className="flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
  >
    {/* Google Logo */}
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
    <span 
      className="font-medium text-gray-700"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      Google
    </span>
  </button>
  <button
    type="button"
    className="flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
  >
    {/* LinkedIn Logo */}
    <svg className="w-5 h-5" fill="#0077B5" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
    <span 
      className="font-medium text-gray-700"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      LinkedIn
    </span>
  </button>
</div>
                  {/* Sign Up Link */}
                  <p 
                    className="text-center text-gray-600 text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Don't have an account?{' '}
                    <a 
                      href="#signup"
                      className="text-[#7A2E8A] hover:text-[#C94FA6] font-medium transition-colors duration-300"
                    >
                      Request Access
                    </a>
                  </p>
                </div>
              </form>
            </div>

            {/* Security Note - Minimal */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/50">
              <div className="flex items-center gap-3">
                {/* Line indicator instead of icon */}
            
                <p 
                  className="text-gray-600 text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Your login is secured with 256-bit SSL encryption. We never store passwords in plain text.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </>
  );
};

export default Login;