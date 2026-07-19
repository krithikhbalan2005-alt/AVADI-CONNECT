import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { HeroCarousel } from '../components/HeroCarousel';
import { 
  ArrowRight, 
  ChevronLeft, 
  Search, 
  Check,
  Eye,
  EyeOff,
  Bell,
  FileText,
  Shield,
  Compass,
  AlertTriangle,
  Moon,
  Sun,
  Heart as HeartIcon,
  MessageSquare,
  Share2,
  Bookmark,
  Plus,
  MapPin,
  X,
  Droplet,
  Users,
  Home,
  Settings,
  LogOut
} from 'lucide-react';





// SPLASH SCREEN
export const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/welcome');
    }, 1000); // 1 second display
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex-1 w-full h-full bg-[#121212] select-none flex items-center justify-center overflow-hidden">
      <img 
        src="/assets/images/splash-screen.png" 
        alt="Avadi Connect Splash Screen" 
        className="w-full h-full object-cover"
      />
    </div>
  );
}

// WELCOME SCREEN
export const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  const features = [
    { name: 'Community Feed', icon: '💬', color: 'bg-blue-50 dark:bg-blue-950/20 text-blue-500', path: '/community-feed' },
    { name: 'Complaints', icon: '⚠️', color: 'bg-red-50 dark:bg-red-950/20 text-red-500', path: '/civic' },
    { name: 'Emergency SOS', icon: '🚨', color: 'bg-red-50 dark:bg-red-950/20 text-red-500', path: '/sos' },
    { name: 'Emergency Services', icon: '🛡️', color: 'bg-orange-50 dark:bg-orange-950/20 text-orange-500', path: '/emergency-contacts' },
    { name: 'Local Services', icon: '🤝', color: 'bg-indigo-50 dark:bg-indigo-950/20 text-indigo-500', path: '/services' },
    { name: 'Rentals & Jobs', icon: '🏢', color: 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-500', path: '/jobs-rentals' },
    { name: 'Rentals & Jobs', icon: '📅', color: 'bg-blue-50 dark:bg-blue-950/20 text-blue-500', path: '/jobs-rentals' },
    { name: 'Report Issues', icon: '📢', color: 'bg-blue-50 dark:bg-blue-950/20 text-blue-500', path: '/complaints/camera' }
  ];

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none overflow-y-auto h-full ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Top Header Logo & Brand */}
      <div className="flex justify-between items-center w-full py-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#4A3AFF] flex items-center justify-center text-white font-black text-sm">
            AC
          </div>
          <div className="text-left leading-tight">
            <span className="text-[10px] font-black text-slate-800 dark:text-white tracking-wide block">AVADI</span>
            <span className="text-[10px] font-black text-[#4A3AFF] tracking-wide block">CONNECT</span>
          </div>
        </div>
        <button 
          onClick={() => navigate('/registration')} 
          className="px-4 py-1.5 bg-[#4A3AFF] hover:bg-[#3b2ecc] text-white text-[10px] font-bold rounded-full transition"
        >
          Login
        </button>
      </div>

      {/* Hero section */}
      <div className="text-center my-6 space-y-2 flex flex-col items-center">
        <h2 className="text-md font-black text-slate-805 dark:text-white leading-snug px-2">
          One App, Many Services, Stronger Community, Better Avadi.
        </h2>
        <p className="text-[10px] text-slate-400 dark:text-neutral-500 font-semibold max-w-[280px]">
          Connecting Community, Building a Better Avadi.
        </p>
      </div>

      {/* Get Started Button */}
      <div className="mb-6">
        <button 
          onClick={() => navigate('/registration')}
          className="w-full py-3 bg-[#4A3AFF] hover:bg-[#3b2ecc] text-white font-bold rounded-full text-xs shadow-md transition duration-200"
        >
          Get Started
        </button>
      </div>

      {/* Our Features Section */}
      <div className="mb-2">
        <h3 className="text-[10px] font-black tracking-wider uppercase text-slate-400 dark:text-neutral-500 mb-3 text-center">
          Our Features
        </h3>
        <div className="grid grid-cols-4 gap-2">
          {features.map((f, i) => (
            <button
              key={i}
              onClick={() => navigate(f.path)}
              className={`flex flex-col items-center justify-center p-2 rounded-2xl border transition active:scale-95 duration-200 h-16 ${
                theme === 'dark' 
                  ? 'bg-neutral-900 border-neutral-850 text-white' 
                  : 'bg-white border-slate-100 text-slate-700 shadow-3xs'
              }`}
            >
              <div className="text-md mb-1">{f.icon}</div>
              <span className="text-[7.5px] font-bold text-center leading-tight tracking-tight line-clamp-2">
                {f.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// REGISTRATION
export const RegistrationScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [genderSelection, setGenderSelection] = useState<'Male' | 'Female' | 'Other' | null>(null);

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none h-full ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Header back */}
      <div className="h-8 flex items-center gap-2">
        <button 
          onClick={() => navigate('/welcome')}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-xs font-black text-slate-805 dark:text-white">Create Your Account</span>
      </div>

      {/* Form Content */}
      <div className="flex-1 flex flex-col justify-center space-y-4 my-4">
        {/* Full Name */}
        <div className="space-y-1">
          <label className="text-[9px] font-black uppercase tracking-wide text-slate-400 dark:text-neutral-500">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            className={`w-full p-3.5 text-xs font-semibold rounded-btn border focus:outline-none focus:border-[#4A3AFF] ${
              theme === 'dark' 
                ? 'bg-neutral-900 border-neutral-805 text-white' 
                : 'bg-white border-slate-200 text-slate-800'
            }`}
          />
        </div>

        {/* Date of Birth */}
        <div className="space-y-1">
          <label className="text-[9px] font-black uppercase tracking-wide text-slate-400 dark:text-neutral-500">Date of Birth</label>
          <div className="relative">
            <input
              type="text"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              placeholder="DD / MM / YYYY"
              className={`w-full p-3.5 text-xs font-semibold rounded-btn border focus:outline-none focus:border-[#4A3AFF] ${
                theme === 'dark' 
                  ? 'bg-neutral-900 border-neutral-805 text-white' 
                  : 'bg-white border-slate-200 text-slate-800'
              }`}
            />
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">📅</span>
          </div>
        </div>

        {/* Select Gender (Anomaly dropdown) */}
        <div className="space-y-1">
          <label className="text-[9px] font-black uppercase tracking-wide text-slate-400 dark:text-neutral-500">Select Gender</label>
          <div className={`w-full p-3.5 text-xs font-semibold rounded-btn border flex justify-between items-center ${
            theme === 'dark' ? 'bg-neutral-900 border-neutral-850 text-white' : 'bg-white border-slate-200 text-slate-800'
          }`}>
            <span>Select Blood Group</span>
            <span className="text-[10px] text-slate-400">▼</span>
          </div>
        </div>

        {/* Gender Pills */}
        <div className="space-y-1.5">
          <label className="text-[9px] font-black uppercase tracking-wide text-slate-400 dark:text-neutral-500">Gender</label>
          <div className="flex gap-2">
            {['Male', 'Female', 'Other'].map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setGenderSelection(g as any)}
                className={`flex-1 py-2 text-[10px] font-bold rounded-full border transition-all ${
                  genderSelection === g
                    ? 'bg-[#4A3AFF] text-white border-[#4A3AFF]'
                    : 'bg-white dark:bg-neutral-900 text-slate-500 border-slate-200 dark:border-neutral-800'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => navigate('/welcome')}
          className={`flex-1 py-3.5 font-bold rounded-btn text-xs uppercase tracking-wider text-center border ${
            theme === 'dark'
              ? 'bg-transparent border-neutral-800 text-[#4A3AFF]'
              : 'bg-white border-slate-200 text-[#4A3AFF]'
          }`}
        >
          Back
        </button>
        <button
          onClick={() => navigate('/register/contact')}
          className="flex-1 py-3.5 bg-[#4A3AFF] hover:bg-[#3b2ecc] text-white font-bold rounded-btn text-xs uppercase tracking-wider text-center"
        >
          Next
        </button>
      </div>
    </div>
  );
}

// CONTACT INFO
export const ContactInfoScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none h-full ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Header back */}
      <div className="h-8 flex items-center gap-2">
        <button 
          onClick={() => navigate('/registration')}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-xs font-black text-slate-850 dark:text-white">Contact Information</span>
      </div>

      {/* Form Content */}
      <div className="flex-1 flex flex-col justify-center space-y-4 my-4">
        {/* Mobile Number */}
        <div className="space-y-1">
          <label className="text-[9px] font-black uppercase tracking-wide text-slate-400 dark:text-neutral-500">Mobile Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter mobile number"
            className={`w-full p-3.5 text-xs font-semibold rounded-btn border focus:outline-none focus:border-[#4A3AFF] ${
              theme === 'dark' 
                ? 'bg-neutral-900 border-neutral-805 text-white' 
                : 'bg-white border-slate-200 text-slate-800'
            }`}
          />
        </div>

        {/* Email Address */}
        <div className="space-y-1">
          <label className="text-[9px] font-black uppercase tracking-wide text-slate-400 dark:text-neutral-500">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            className={`w-full p-3.5 text-xs font-semibold rounded-btn border focus:outline-none focus:border-[#4A3AFF] ${
              theme === 'dark' 
                ? 'bg-neutral-900 border-neutral-850 text-white' 
                : 'bg-white border-slate-200 text-slate-800'
            }`}
          />
          <p className="text-[9px] text-slate-405 dark:text-neutral-505 font-bold mt-1.5">
            Email is mandatory
          </p>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => navigate('/registration')}
          className={`flex-1 py-3.5 font-bold rounded-btn text-xs uppercase tracking-wider text-center border ${
            theme === 'dark'
              ? 'bg-transparent border-neutral-800 text-[#4A3AFF]'
              : 'bg-white border-slate-200 text-[#4A3AFF]'
          }`}
        >
          Back
        </button>
        <button
          onClick={() => navigate('/register/address')}
          className="flex-1 py-3.5 bg-[#4A3AFF] hover:bg-[#3b2ecc] text-white font-bold rounded-btn text-xs uppercase tracking-wider text-center"
        >
          Next
        </button>
      </div>
    </div>
  );
}

// ADDRESS WARD
export const AddressWardScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none h-full ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Header back */}
      <div className="h-8 flex items-center gap-2">
        <button 
          onClick={() => navigate('/register/contact')}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-xs font-black text-slate-805 dark:text-white">Address & Ward</span>
      </div>

      {/* Form Content */}
      <div className="flex-1 flex flex-col justify-center space-y-4 my-4">
        {/* Ward Number */}
        <div className="space-y-1">
          <label className="text-[9px] font-black uppercase tracking-wide text-slate-400 dark:text-neutral-500">Ward Number</label>
          <div className={`w-full p-3.5 text-xs font-semibold rounded-btn border flex justify-between items-center cursor-pointer ${
            theme === 'dark' ? 'bg-neutral-900 border-neutral-805 text-white' : 'bg-white border-slate-200 text-slate-805'
          }`}>
            <span>Select Ward</span>
            <span className="text-[10px] text-slate-400">▼</span>
          </div>
        </div>

        {/* Street Name */}
        <div className="space-y-1">
          <label className="text-[9px] font-black uppercase tracking-wide text-slate-400 dark:text-neutral-500">Street Name</label>
          <div className={`w-full p-3.5 text-xs font-semibold rounded-btn border flex justify-between items-center cursor-pointer ${
            theme === 'dark' ? 'bg-neutral-900 border-neutral-805 text-white' : 'bg-white border-slate-200 text-slate-805'
          }`}>
            <span>Select Street</span>
            <span className="text-[10px] text-slate-400">▼</span>
          </div>
        </div>

        {/* Community */}
        <div className="space-y-1">
          <label className="text-[9px] font-black uppercase tracking-wide text-slate-400 dark:text-neutral-500">Community</label>
          <div className={`w-full p-3.5 text-xs font-semibold rounded-btn border flex justify-between items-center cursor-pointer ${
            theme === 'dark' ? 'bg-neutral-900 border-neutral-805 text-white' : 'bg-white border-slate-200 text-slate-805'
          }`}>
            <span>Auto selected</span>
            <span className="text-[10px] text-slate-400">▼</span>
          </div>
        </div>

        {/* Location Permission Box */}
        <div className="p-4 rounded-btn border bg-[#E8F5E9]/65 dark:bg-emerald-950/20 border-emerald-500/25 flex flex-col gap-1 text-left">
          <div className="flex items-center gap-2">
            <span className="text-emerald-600 dark:text-emerald-400 text-sm">✔</span>
            <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">Allow Access Location</span>
          </div>
          <p className="text-[9px] text-slate-500 dark:text-neutral-500 font-semibold leading-relaxed pl-6">
            Location access helps us to deliver community-based services accurately.
          </p>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => navigate('/register/contact')}
          className={`flex-1 py-3.5 font-bold rounded-btn text-xs uppercase tracking-wider text-center border ${
            theme === 'dark'
              ? 'bg-transparent border-neutral-800 text-[#4A3AFF]'
              : 'bg-white border-slate-200 text-[#4A3AFF]'
          }`}
        >
          Back
        </button>
        <button
          onClick={() => {}}
          className="flex-1 py-3.5 bg-[#4A3AFF] hover:bg-[#3b2ecc] text-white font-bold rounded-btn text-xs uppercase tracking-wider text-center"
        >
          Next
        </button>
      </div>
    </div>
  );
}


// SCREEN 6
export const OTPScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme, language } = useApp();
  const [timer, setTimer] = useState(45);
  const [otp, setOtp] = useState<string[]>(['5', '2', '8', '1', '6', '3']);
  const [error, setError] = useState<string | null>(null);
  const [verifying, setVerifying] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleKeypadPress = (num: number) => {
    setError(null);
    if (otp.length < 6) {
      setOtp(prev => [...prev, String(num)]);
    }
  };

  const handleBackspace = () => {
    setError(null);
    if (otp.length > 0) {
      setOtp(prev => prev.slice(0, -1));
    }
  };

  const handleVerify = () => {
    if (otp.length < 6) {
      setError(
        language === 'en' 
          ? "Please enter the complete 6-digit OTP code" 
          : "தயவுசெய்து 6 இலக்க OTP குறியீட்டை உள்ளிடவும்"
      );
      return;
    }
    setVerifying(true);
    setTimeout(() => {
      setVerifying(false);
      navigate('/home');
    }, 800);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key >= '0' && e.key <= '9') {
        if (otp.length < 6) {
          setOtp(prev => [...prev, e.key]);
          setError(null);
        }
      } else if (e.key === 'Backspace') {
        if (otp.length > 0) {
          setOtp(prev => prev.slice(0, -1));
          setError(null);
        }
      } else if (e.key === 'Enter') {
        if (otp.length === 6) {
          handleVerify();
        } else {
          setError(
            language === 'en' 
              ? "Please enter the complete 6-digit OTP code" 
              : "தயவுசெய்து 6 இலக்க OTP குறியீட்டை உள்ளிடவும்"
          );
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [otp, language]);

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none h-full ${
      theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
    }`}>
      {/* Header back */}
      <div className="h-8 flex items-center">
        <button 
          onClick={() => navigate('/register/address')}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <ChevronLeft size={20} />
        </button>
      </div>

      {/* Center Shield Logo Artwork */}
      <div className="flex flex-col items-center justify-center my-2">
        <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center text-[#4A3AFF] border border-indigo-100 dark:border-indigo-900 shadow-2xs relative">
          <span className="text-sm font-black tracking-wider text-[#4A3AFF]">OTP</span>
        </div>
      </div>

      {/* Main Text */}
      <div className="mt-2 text-center">
        <h2 className="text-lg font-black text-slate-800 dark:text-white">Verify Your Number</h2>
        <p className="text-xs text-slate-400 dark:text-neutral-500 mt-1 max-w-xs mx-auto leading-relaxed font-semibold">
          your email and mobile
        </p>
      </div>

      {/* OTP Blocks */}
      <div className="flex justify-center gap-2.5 my-4">
        {[0, 1, 2, 3, 4, 5].map((idx) => {
          const digit = otp[idx] || '';
          return (
            <div 
              key={idx}
              className={`w-10 h-12 rounded-xl border flex items-center justify-center text-md font-extrabold shadow-2xs transition duration-150 ${
                digit 
                  ? 'border-[#4A3AFF] dark:border-[#4A3AFF] ring-1 ring-[#4A3AFF]/20' 
                  : 'border-slate-200 dark:border-neutral-800'
              } ${
                theme === 'dark' ? 'bg-neutral-900 text-white' : 'bg-slate-50 text-slate-800'
              }`}
            >
              {digit}
            </div>
          );
        })}
      </div>

      {/* Timer and Error feedback */}
      <div className="text-center h-8 flex flex-col justify-center">
        {error ? (
          <span className="text-red-500 text-[10px] font-bold animate-pulse">{error}</span>
        ) : (
          <span className="text-xs font-semibold text-slate-400 dark:text-neutral-500">
            Resend OTP in <span className="text-slate-400 dark:text-neutral-500 font-bold">00:{timer < 10 ? `0${timer}` : timer}</span>
          </span>
        )}
      </div>

      {/* Action Button */}
      <div className="my-2.5">
        <button
          onClick={handleVerify}
          disabled={otp.length < 6 || verifying}
          className={`w-full h-12 rounded-btn text-white font-bold flex items-center justify-center transition-all duration-200 text-xs uppercase tracking-wider shadow-md ${
            otp.length === 6 && !verifying
              ? 'bg-[#4A3AFF] hover:scale-[1.01] active:scale-[0.98]'
              : 'bg-slate-300 dark:bg-neutral-800 text-white/50 cursor-not-allowed shadow-none'
          }`}
        >
          {verifying ? (
            <span>Verifying...</span>
          ) : (
            <span>Verify & Continue</span>
          )}
        </button>
      </div>

      {/* Keypad */}
      <div className="border-t border-slate-100 dark:border-neutral-900 pt-3.5 grid grid-cols-3 gap-y-3 gap-x-6 text-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
          <button 
            key={num}
            onClick={() => handleKeypadPress(num)}
            className={`py-3 rounded-xl font-extrabold text-sm active:bg-slate-100 dark:active:bg-neutral-800 transition-all ${
              theme === 'dark' ? 'text-white' : 'text-slate-800'
            }`}
          >
            {num}
          </button>
        ))}
        <button className="py-3 text-xs font-bold text-slate-400">.</button>
        <button 
          onClick={() => handleKeypadPress(0)}
          className={`py-3 rounded-xl font-extrabold text-sm active:bg-slate-100 dark:active:bg-neutral-800 transition-all ${
            theme === 'dark' ? 'text-white' : 'text-slate-800'
          }`}
        >
          0
        </button>
        <button 
          onClick={handleBackspace}
          className="py-3 flex items-center justify-center text-slate-400 hover:text-slate-600 transition active:scale-90"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// SCREEN 7
export const HomeDashboardScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scrollable Area */}
      <div className="flex-grow overflow-y-auto p-5 space-y-5 pb-20">
        
        {/* Header Profile & Notifications */}
        <div className="flex justify-between items-center h-10">
          <div className="text-left">
            <h4 className="text-sm font-black text-slate-800 dark:text-white leading-tight">Hello, Karthik 👋</h4>
            <span className="text-[9px] text-slate-400 dark:text-neutral-500 font-semibold block mt-0.5">World Awaits!</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-neutral-800 transition">
              <span className="text-sm">🔔</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden border border-slate-150">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150" 
                alt="User Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Actions Grid */}
        <div>
          <div className="flex justify-between items-center pb-2">
            <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-neutral-500">Today's Actions</h4>
            <span className="text-xs text-slate-400 cursor-pointer">❯</span>
          </div>
          <div className="grid grid-cols-4 gap-2.5 mt-1">
            {/* Complaints */}
            <button 
              onClick={() => navigate('/civic')}
              className={`p-3 rounded-card border shadow-3xs flex flex-col items-center gap-1.5 active:scale-95 transition ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-950/20 flex items-center justify-center text-blue-600">
                📄
              </div>
              <span className="text-[8.5px] font-bold text-center">Complaints</span>
            </button>

            {/* SOS */}
            <button 
              onClick={() => navigate('/home')}
              className={`p-3 rounded-card border shadow-3xs flex flex-col items-center gap-1.5 active:scale-95 transition ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-red-50 dark:bg-red-950/20 flex items-center justify-center text-red-600 font-black text-xs">
                SOS
              </div>
              <span className="text-[8.5px] font-bold text-center">Emergency SOS</span>
            </button>

            {/* Community Feed */}
            <button 
              onClick={() => navigate('/community-feed')}
              className={`p-3 rounded-card border shadow-3xs flex flex-col items-center gap-1.5 active:scale-95 transition ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-purple-50 dark:bg-purple-950/20 flex items-center justify-center text-purple-650">
                👥
              </div>
              <span className="text-[8.5px] font-bold text-center">Community Feed</span>
            </button>

            {/* Local Services */}
            <button 
              onClick={() => navigate('/home')}
              className={`p-3 rounded-card border shadow-3xs flex flex-col items-center gap-1.5 active:scale-95 transition ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-950/20 flex items-center justify-center text-blue-600">
                📁
              </div>
              <span className="text-[8.5px] font-bold text-center">Local Services</span>
            </button>
          </div>
        </div>

        {/* Travel Information */}
        <div className="space-y-2">
          <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-neutral-500">Travel Information</h4>
          <div className="grid grid-cols-2 gap-3">
            <div className={`p-4 rounded-card border shadow-2xs ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
            }`}>
              <span className="text-[9px] font-bold text-slate-400 block uppercase">Avadi Railway</span>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-lg">☀️</span>
                <span className="text-xs font-black">28°C</span>
              </div>
            </div>

            <div className={`p-4 rounded-card border shadow-2xs ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
            }`}>
              <span className="text-[9px] font-bold text-slate-400 block uppercase">Traffic</span>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-lg">🚧</span>
                <span className="text-xs font-black">Moderate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Explore Avadi Card Banner */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-neutral-500">Explore Avadi</h4>
            <span className="text-[9.5px] text-[#4A3AFF] font-bold cursor-pointer">View All ❯</span>
          </div>
          <div className="rounded-card overflow-hidden border aspect-[16/7] relative shadow-soft">
            <img 
              src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=600" 
              alt="Avadi Landscape Banner" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-white font-extrabold text-xs">Explore Local Places</h3>
              <p className="text-white/80 text-[8px] mt-0.5 font-bold">Discover parks, temples, and markets near you</p>
            </div>
          </div>
        </div>

      </div>

      {/* Sticky Bottom Navigation (4 items) */}
      <div className={`absolute bottom-0 left-0 w-full border-t flex justify-around py-2 h-16 z-30 shadow-lg ${
        theme === 'dark' ? 'bg-[#121212]/95 border-neutral-800 text-white' : 'bg-white/95 border-slate-150 text-slate-700'
      }`}>
        <button className="flex flex-col items-center justify-center flex-1 text-[#4A3AFF]">
          <span className="text-md bg-[#4A3AFF]/10 px-4 py-0.5 rounded-full">🏠</span>
          <span className="text-[9px] font-bold mt-1">Home</span>
        </button>
        <button onClick={() => navigate('/home')} className="flex flex-col items-center justify-center flex-1 opacity-70">
          <span className="text-md">💼</span>
          <span className="text-[9px] font-bold mt-1">Services</span>
        </button>
        <button onClick={() => navigate('/community-feed')} className="flex flex-col items-center justify-center flex-1 opacity-70">
          <span className="text-md">👥</span>
          <span className="text-[9px] font-bold mt-1">Feed</span>
        </button>
        <button onClick={() => navigate('/home')} className="flex flex-col items-center justify-center flex-1 opacity-70">
          <span className="text-md">👤</span>
          <span className="text-[9px] font-bold mt-1">Profile</span>
        </button>
      </div>
    </div>
  );
};

// SCREEN 8
export const CommunityFeedScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [activeTab, setActiveTab] = useState<'ward' | 'all' | 'complaints'>('ward');

  const feedPosts = [
    {
      id: "post_1",
      author: "Ramesh Kumar",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
      ward: "Avadi, Tamil Nadu",
      time: "3h ago",
      content: "Street light not working near Avadi Park Gate 3",
      image: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80&w=600",
      likes: 12,
      commentsCount: 5,
      sharesCount: 3
    },
    {
      id: "post_2",
      author: "Revathi",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      ward: "Thirumullaivoyal",
      time: "4h ago",
      content: "Road damage causing minor blockages in main streets.",
      likes: 8,
      commentsCount: 1,
      sharesCount: 0
    }
  ];

  return (
    <div className={`flex-grow flex flex-col justify-between relative select-none h-full ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll Area */}
      <div className="flex-grow overflow-y-auto p-5 space-y-4 pb-20">
        
        {/* Header */}
        <div className="flex justify-between items-center h-10">
          <h2 className="text-md font-black text-slate-800 dark:text-white">Community Feed</h2>
          <div className="flex gap-3">
            <button className="p-1 hover:text-primary transition"><span className="text-sm">🔍</span></button>
            <button className="p-1 hover:text-primary transition"><span className="text-sm">🔔</span></button>
          </div>
        </div>

        {/* Tabs Pills */}
        <div className="flex gap-2 text-[10px] font-bold">
          <button 
            onClick={() => setActiveTab('ward')}
            className={`px-4 py-2 rounded-full border uppercase tracking-wider transition ${
              activeTab === 'ward'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                : 'bg-white dark:bg-neutral-900 text-slate-400 dark:text-neutral-500 border-slate-150 dark:border-neutral-800'
            }`}
          >
            My Feed
          </button>
          <button 
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full border uppercase tracking-wider transition ${
              activeTab === 'all'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                : 'bg-white dark:bg-neutral-900 text-slate-400 dark:text-neutral-500 border-slate-150 dark:border-neutral-800'
            }`}
          >
            All Avadi
          </button>
          <button 
            onClick={() => setActiveTab('complaints')}
            className={`px-4 py-2 rounded-full border uppercase tracking-wider transition ${
              activeTab === 'complaints'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                : 'bg-white dark:bg-neutral-900 text-slate-400 dark:text-neutral-500 border-slate-150 dark:border-neutral-800'
            }`}
          >
            Complaints
          </button>
        </div>

        {/* Posts list */}
        <div className="space-y-4">
          {feedPosts.map((post) => (
            <div 
              key={post.id}
              onClick={() => {}}
              className={`p-4 rounded-card border shadow-2xs flex flex-col gap-3 cursor-pointer ${
                theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              {/* Profile info header */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                  <img 
                    src={post.avatar} 
                    alt="Author avatar" 
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-xs font-black">{post.author}</h4>
                    <p className="text-[9px] text-slate-400 dark:text-neutral-500 font-bold mt-0.5">{post.ward} • {post.time}</p>
                  </div>
                </div>
                <span className="text-slate-400 text-xs">•••</span>
              </div>

              {/* Description */}
              <p className="text-xs leading-relaxed font-semibold text-slate-750 dark:text-neutral-350">
                {post.content}
              </p>

              {/* Photo */}
              {post.image && (
                <div className="rounded-xl overflow-hidden aspect-video border border-slate-100 dark:border-neutral-900 bg-slate-100 dark:bg-neutral-950">
                  <img src={post.image} alt="Attachment" className="w-full h-full object-cover" />
                </div>
              )}

              {/* Actions row */}
              <div className="flex items-center gap-4 text-slate-400 dark:text-neutral-500 text-[10px] border-t border-slate-100 dark:border-neutral-900/60 pt-2.5 mt-1" onClick={(e) => e.stopPropagation()}>
                <button className="flex items-center gap-1.5 hover:text-red-500 font-extrabold active:scale-95 transition">
                  <span>❤️</span>
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center gap-1.5 hover:text-primary font-bold active:scale-95 transition">
                  <span>💬</span>
                  <span>{post.commentsCount}</span>
                </button>
                {post.sharesCount > 0 && (
                  <button className="flex items-center gap-1.5 hover:text-primary font-bold active:scale-95 transition">
                    <span>➡️</span>
                    <span>{post.sharesCount}</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Button (FAB) */}
      <button
        onClick={() => navigate('/community-feed/create')}
        className="absolute bottom-20 right-6 w-12 h-12 rounded-full bg-[#4A3AFF] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition z-40"
      >
        <span className="text-lg font-black">+</span>
      </button>

      {/* Bottom Nav */}
      <div className={`absolute bottom-0 left-0 w-full border-t flex justify-around py-2 h-16 z-30 shadow-lg ${
        theme === 'dark' ? 'bg-[#121212]/95 border-neutral-800 text-white backdrop-blur-md' : 'bg-white/95 border-slate-150 text-slate-700 backdrop-blur-md'
      }`}>
        <button onClick={() => navigate('/home')} className="flex flex-col items-center justify-center flex-1 opacity-70">
          <span className="text-md">🏠</span>
          <span className="text-[9px] font-bold mt-1">Home</span>
        </button>
        <button onClick={() => navigate('/home')} className="flex flex-col items-center justify-center flex-1 opacity-70">
          <span className="text-md">💼</span>
          <span className="text-[9px] font-bold mt-1">Services</span>
        </button>
        <button className="flex flex-col items-center justify-center flex-1 text-[#4A3AFF]">
          <span className="text-md bg-[#4A3AFF]/10 px-4 py-0.5 rounded-full">👥</span>
          <span className="text-[9px] font-bold mt-1">Feed</span>
        </button>
        <button onClick={() => navigate('/home')} className="flex flex-col items-center justify-center flex-1 opacity-70">
          <span className="text-md">👤</span>
          <span className="text-[9px] font-bold mt-1">Profile</span>
        </button>
      </div>
    </div>
  );
};
