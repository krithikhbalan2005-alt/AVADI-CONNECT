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
