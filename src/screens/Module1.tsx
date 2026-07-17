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
  Users
} from 'lucide-react';

// ==========================================
// 1. SPLASH SCREEN (Strict specifications)
// ==========================================
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
};

// ==========================================
// 2. WELCOME SCREEN
// ==========================================
export const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  const illustrationSrc = theme === 'dark' 
    ? "/assets/images/welcome-screen-illustration-dark.png" 
    : "/assets/images/welcome-screen-illustration.png";

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none ${
      theme === 'dark' ? 'bg-gradient-to-b from-[#0f1424] to-[#121212]' : 'bg-gradient-to-b from-[#f0f4ff] to-[#fafafa]'
    }`}>
      {/* Top Header Text */}
      <div className="pt-6">
        <h1 className="text-xs text-slate-400 dark:text-neutral-500 font-bold uppercase tracking-wider">Welcome to</h1>
        <h2 className="text-2xl font-black text-primary dark:text-white mt-1">Avadi Connect</h2>
        <p className="text-xs text-slate-500 dark:text-neutral-400 mt-2 leading-relaxed max-w-xs font-medium">
          Let's build a smarter, safer and stronger community together.
        </p>
      </div>

      {/* Welcome illustration card */}
      <div className={`my-6 rounded-card overflow-hidden border h-56 relative shadow-soft ${
        theme === 'dark' 
          ? 'bg-neutral-900 border-neutral-800' 
          : 'bg-white border-slate-150'
      }`}>
        <img 
          src={illustrationSrc} 
          alt="Avadi Gopuram and Suburban Metro Train" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Buttons */}
      <div className="space-y-3.5 mb-2">
        <button 
          onClick={() => navigate('/onboarding/civic')}
          className="w-full py-4 bg-gradient-to-r from-primary to-[#5b7eff] text-white font-bold rounded-btn shadow-md hover:scale-101 active:scale-95 transition-all duration-200 text-sm"
        >
          Get Started
        </button>

        <button 
          onClick={() => navigate('/ward-selection')}
          className={`w-full py-4 font-bold rounded-btn border text-sm transition-all active:scale-95 ${
            theme === 'dark'
              ? 'bg-[#181818] border-neutral-800 text-white hover:bg-neutral-800'
              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          Login
        </button>

        <div className="text-center text-xs pt-2">
          <span className="text-slate-400 dark:text-neutral-500">New here? </span>
          <Link to="/registration" className="text-primary font-bold hover:underline ml-1">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 3. ONBOARDING CIVIC
// ==========================================
export const OnboardingCivicScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  const civicSrc = theme === 'dark' 
    ? "/assets/images/onboarding-civic-dark.png" 
    : "/assets/images/onboarding-civic.png";

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none ${
      theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
    }`}>
      {/* Header Skip */}
      <div className="flex justify-between items-center h-8">
        <button 
          onClick={() => navigate('/welcome')}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={() => navigate('/ward-selection')}
          className="text-xs font-bold text-slate-400 hover:text-primary transition uppercase tracking-wider"
        >
          Skip
        </button>
      </div>

      {/* Illustration & text */}
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <div className={`w-52 h-52 rounded-full overflow-hidden flex items-center justify-center mb-8 relative border shadow-soft ${
          theme === 'dark' ? 'bg-neutral-900/60 border-neutral-800' : 'bg-slate-50 border-slate-100'
        }`}>
          <img 
            src={civicSrc} 
            alt="Civic Hub Illustration" 
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-lg font-black text-slate-800 dark:text-white">Your Civic Hub</h3>
        <p className="text-xs text-primary font-bold mt-1.5 uppercase tracking-wider">Everything Avadi, One Place.</p>
        <p className="text-xs text-slate-400 dark:text-neutral-500 mt-2 max-w-xs leading-relaxed font-medium">
          Access local services, updates and community features easily.
        </p>
      </div>

      {/* Navigation footer */}
      <div className="flex flex-col items-center gap-6 mb-2">
        {/* Dots */}
        <div className="flex gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
          <span className="w-2 h-2 rounded-full bg-slate-200 dark:bg-neutral-800"></span>
          <span className="w-2 h-2 rounded-full bg-slate-200 dark:bg-neutral-800"></span>
          <span className="w-2 h-2 rounded-full bg-slate-200 dark:bg-neutral-800"></span>
        </div>

        <button 
          onClick={() => navigate('/onboarding/safety')}
          className="w-full py-4 bg-gradient-to-r from-primary to-[#5b7eff] text-white font-bold rounded-btn flex items-center justify-center gap-2 hover:scale-101 active:scale-95 transition-all duration-200 text-sm shadow-md"
        >
          <span>Next</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

// ==========================================
// 4. ONBOARDING SAFETY
// ==========================================
export const OnboardingSafetyScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  const safetySrc = theme === 'dark' 
    ? "/assets/images/onboarding-safety-dark.png" 
    : "/assets/images/onboarding-safety.png";

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none ${
      theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
    }`}>
      {/* Header Navigation */}
      <div className="flex justify-between items-center h-8">
        <button 
          onClick={() => navigate('/onboarding/civic')}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={() => navigate('/ward-selection')}
          className="text-xs font-bold text-slate-400 hover:text-primary transition uppercase tracking-wider"
        >
          Skip
        </button>
      </div>

      {/* Illustration & text */}
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <div className={`w-52 h-52 rounded-full overflow-hidden flex items-center justify-center mb-8 relative border shadow-soft ${
          theme === 'dark' ? 'bg-neutral-900/60 border-neutral-800' : 'bg-slate-50 border-slate-100'
        }`}>
          <img 
            src={safetySrc} 
            alt="Safety Hub Illustration" 
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-lg font-black text-slate-800 dark:text-white">Stay Safe, Stay Connected</h3>
        <p className="text-xs text-slate-400 dark:text-neutral-500 mt-2.5 max-w-xs leading-relaxed font-medium">
          Instant alerts, SOS, and safety tools for you and your family.
        </p>
      </div>

      {/* Navigation footer */}
      <div className="flex flex-col items-center gap-6 mb-2">
        {/* Dots */}
        <div className="flex gap-2">
          <span className="w-2 h-2 rounded-full bg-slate-200 dark:bg-neutral-800"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
          <span className="w-2 h-2 rounded-full bg-slate-200 dark:bg-neutral-800"></span>
          <span className="w-2 h-2 rounded-full bg-slate-200 dark:bg-neutral-800"></span>
        </div>

        <button 
          onClick={() => navigate('/ward-selection')}
          className="w-full py-4 bg-gradient-to-r from-primary to-[#5b7eff] text-white font-bold rounded-btn flex items-center justify-center gap-2 hover:scale-101 active:scale-95 transition-all duration-200 text-sm shadow-md"
        >
          <span>Next</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

// ==========================================
// 5. WARD SELECTION
// ==========================================
export const WardSelectionScreen: React.FC = () => {
  const navigate = useNavigate();
  const { selectedWard, setSelectedWard, theme } = useApp();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const neighborhoods = [
    { area: 'Avadi North', desc: 'Gandhi Nagar, Kovilpathu', img: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&q=80&w=120' },
    { area: 'Avadi South', desc: 'Kamaraj Nagar, Paruthipattu', img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=120' },
    { area: 'Avadi East', desc: 'TNHB Colony, Pattabiram', img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=120' },
    { area: 'Avadi West', desc: 'HVF Estate, Military Area', img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=120' },
    { area: 'Thirumullaivoyal', desc: 'Shanthi Nagar, Thirumullaivoyal', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=120' },
    { area: 'Mittanamalli', desc: 'Defense Enclave, Mittanamalli', img: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&q=80&w=120' },
    { area: 'Muthapudupet', desc: 'IAF Campus, Muthapudupet', img: 'https://images.unsplash.com/photo-1623945350405-c49b6b772c72?auto=format&fit=crop&q=80&w=120' },
    { area: 'Sekkadu', desc: 'Sekkadu Main Road, Avadi', img: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=120' }
  ];

  const wards = Array.from({ length: 48 }, (_, i) => {
    const wardNum = i + 1;
    const neigh = neighborhoods[i % neighborhoods.length];
    return {
      name: `Ward ${wardNum}`,
      sub: neigh.area,
      img: neigh.img,
      desc: neigh.desc
    };
  });

  const filteredWards = wards.filter(w => 
    w.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    w.sub.toLowerCase().includes(searchQuery.toLowerCase()) ||
    w.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none ${
      theme === 'dark' ? 'bg-[#121212]' : 'bg-slate-50'
    }`}>
      {/* Header Back & Search toggle */}
      <div className="flex justify-between items-center h-8 relative">
        <button 
          onClick={() => navigate('/onboarding/safety')}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <ChevronLeft size={20} />
        </button>
        
        {searchOpen ? (
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search ward..."
            className="absolute left-10 right-10 py-1 px-3 bg-slate-100 dark:bg-neutral-800 text-xs rounded-full border border-slate-200 dark:border-neutral-700 focus:outline-none focus:border-primary text-slate-800 dark:text-white"
            autoFocus
          />
        ) : (
          <span className="text-xs font-bold text-slate-400 dark:text-neutral-500 uppercase tracking-widest">Select Ward</span>
        )}

        <button 
          onClick={() => {
            setSearchOpen(!searchOpen);
            if (searchOpen) setSearchQuery('');
          }}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <Search size={18} />
        </button>
      </div>

      {/* Main Ward Select contents */}
      <div className="flex-1 flex flex-col justify-center mt-4">
        <h2 className="text-xl font-black text-slate-800 dark:text-white">Select Your Ward</h2>
        <p className="text-xs text-slate-400 dark:text-neutral-500 mt-1 leading-normal font-semibold">
          Choose your ward to personalize your experience.
        </p>

        {/* Ward Cards List container */}
        <div className="space-y-2.5 mt-5 overflow-y-auto max-h-[420px] pr-1">
          {filteredWards.map((w) => (
            <button
              key={w.name}
              onClick={() => setSelectedWard(`${w.name} - ${w.sub}`)}
              className={`w-full text-left p-3.5 rounded-card border transition flex items-center justify-between shadow-2xs hover:scale-[1.005] duration-150 ${
                selectedWard.includes(w.name)
                  ? 'bg-primary/5 border-primary shadow-xs'
                  : 'bg-white dark:bg-neutral-900 border-slate-150 dark:border-neutral-800'
              }`}
            >
              <div className="flex items-center gap-3.5">
                {/* Ward Thumbnail from Sliced Design Board Assets */}
                <div className={`w-11 h-11 rounded-xl overflow-hidden shadow-2xs border flex items-center justify-center bg-slate-100 dark:bg-neutral-900 ${
                  selectedWard.includes(w.name) 
                    ? 'border-primary/40' 
                    : 'border-slate-100 dark:border-neutral-850'
                }`}>
                  <img src={w.img} alt={w.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className={`text-xs font-bold ${
                    selectedWard.includes(w.name) ? 'text-primary' : 'text-slate-800 dark:text-white'
                  }`}>
                    {w.name}
                  </h4>
                  <p className="text-[10px] font-bold text-slate-400 dark:text-neutral-500 mt-0.5">{w.sub}</p>
                </div>
              </div>

              {/* Radio Circle Selector indicator */}
              <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                selectedWard.includes(w.name) 
                  ? 'border-primary bg-primary text-white scale-110 shadow-xs' 
                  : 'border-slate-355 dark:border-neutral-700 bg-white dark:bg-neutral-950'
              } transition-transform duration-200`}>
                {selectedWard.includes(w.name) && <Check size={12} strokeWidth={3.5} />}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Action Footer Continue */}
      <div className="mt-6 mb-2">
        <button
          onClick={() => navigate('/registration')}
          className="w-full py-4 bg-gradient-to-r from-primary to-[#5b7eff] text-white font-bold rounded-btn shadow-md hover:scale-101 active:scale-95 transition-all duration-200 text-sm"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

// ==========================================
// 6. REGISTRATION SCREEN
// ==========================================
export const RegistrationScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(true);

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none ${
      theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
    }`}>
      {/* Header Navigation */}
      <div className="h-8 flex items-center">
        <button 
          onClick={() => navigate('/ward-selection')}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <ChevronLeft size={20} />
        </button>
      </div>

      {/* Welcome Title */}
      <div className="mt-2">
        <h2 className="text-xl font-black text-slate-800 dark:text-white">Create Your Account</h2>
        <p className="text-xs text-slate-400 dark:text-neutral-500 mt-1 font-semibold">Let's get you started</p>
      </div>

      {/* Form Fields */}
      <div className="flex-1 flex flex-col justify-center space-y-4 my-4">
        {/* Name input */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-neutral-500">Full Name</label>
          <input
            type="text"
            defaultValue="Karthik Balan"
            className={`w-full p-3.5 text-xs font-semibold rounded-btn border focus:outline-none focus:border-primary ${
              theme === 'dark' 
                ? 'bg-neutral-900 border-neutral-800 text-white focus:bg-neutral-900/60' 
                : 'bg-slate-50 border-slate-200 text-slate-800 focus:bg-white'
            }`}
          />
        </div>

        {/* Mobile Number */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-neutral-500">Mobile Number</label>
          <input
            type="tel"
            defaultValue="+91 98765 43210"
            className={`w-full p-3.5 text-xs font-semibold rounded-btn border focus:outline-none focus:border-primary ${
              theme === 'dark' 
                ? 'bg-neutral-900 border-neutral-800 text-white focus:bg-neutral-900/60' 
                : 'bg-slate-50 border-slate-200 text-slate-800 focus:bg-white'
            }`}
          />
        </div>

        {/* Email Address */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-neutral-500">Email Address</label>
          <input
            type="email"
            defaultValue="karthik.balan@email.com"
            className={`w-full p-3.5 text-xs font-semibold rounded-btn border focus:outline-none focus:border-primary ${
              theme === 'dark' 
                ? 'bg-neutral-900 border-neutral-800 text-white focus:bg-neutral-900/60' 
                : 'bg-slate-50 border-slate-200 text-slate-800 focus:bg-white'
            }`}
          />
        </div>

        {/* Password */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-neutral-500">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              defaultValue="password123"
              className={`w-full p-3.5 pr-10 text-xs font-semibold rounded-btn border focus:outline-none focus:border-primary ${
                theme === 'dark' 
                  ? 'bg-neutral-900 border-neutral-800 text-white focus:bg-neutral-900/60' 
                  : 'bg-slate-50 border-slate-200 text-slate-800 focus:bg-white'
              }`}
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        {/* Terms agreement checkbox */}
        <button 
          type="button"
          onClick={() => setAgreed(!agreed)}
          className="flex items-center gap-2.5 text-xs text-left pt-1 font-semibold text-slate-500 dark:text-neutral-400"
        >
          <div className={`w-4.5 h-4.5 rounded-xs border flex items-center justify-center ${
            agreed 
              ? 'bg-primary border-primary text-white' 
              : 'border-slate-350 dark:border-neutral-700 bg-white dark:bg-neutral-950'
          } transition duration-200`}>
            {agreed && <Check size={12} strokeWidth={4} />}
          </div>
          <span>I agree to <span className="text-primary font-bold hover:underline">Terms & Privacy Policy</span></span>
        </button>
      </div>

      {/* Actions */}
      <div className="space-y-3.5 mb-2">
        <button 
          onClick={() => navigate('/otp')}
          className="w-full py-4 bg-gradient-to-r from-primary to-[#5b7eff] text-white font-bold rounded-btn shadow-md hover:scale-101 active:scale-95 transition-all duration-200 text-sm"
        >
          Register
        </button>

        <div className="text-center text-xs pt-1">
          <span className="text-slate-400 dark:text-neutral-500">Already have an account? </span>
          <Link to="/welcome" className="text-primary font-bold hover:underline ml-1">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 7. OTP VERIFICATION SCREEN
// ==========================================
export const OTPScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme, language } = useApp();
  const [timer, setTimer] = useState(25);
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
      navigate('/location-permission');
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
    <div className={`flex-grow flex flex-col justify-between p-6 select-none ${
      theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
    }`}>
      {/* Header back */}
      <div className="h-8 flex items-center">
        <button 
          onClick={() => navigate('/registration')}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <ChevronLeft size={20} />
        </button>
      </div>

      {/* Main Text */}
      <div className="mt-2 text-center">
        <h2 className="text-xl font-black text-slate-800 dark:text-white">Verify Your Mobile</h2>
        <p className="text-xs text-slate-400 dark:text-neutral-500 mt-1 max-w-xs mx-auto leading-relaxed font-semibold">
          Enter the 6-digit code sent to <span className="text-slate-600 dark:text-neutral-300 font-bold">+91 98765 43210</span>
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
                  ? 'border-primary dark:border-primary ring-1 ring-primary/20' 
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
          <span className="text-xs font-semibold text-slate-450 dark:text-neutral-500">
            Resend OTP in <span className="text-primary font-bold">00:{timer < 10 ? `0${timer}` : timer}</span>
          </span>
        )}
      </div>

      {/* Action Button */}
      <div className="my-2.5">
        <button
          onClick={handleVerify}
          disabled={otp.length < 6 || verifying}
          className={`w-full h-12 rounded-[16px] text-white font-bold flex items-center justify-center transition-all duration-200 text-sm shadow-md ${
            otp.length === 6 && !verifying
              ? 'bg-gradient-to-r from-primary to-[#5b7eff] hover:scale-[1.01] active:scale-[0.98]'
              : 'bg-slate-350 dark:bg-neutral-800 text-white/50 cursor-not-allowed shadow-none'
          }`}
        >
          {verifying ? (
            <span>{language === 'en' ? "Verifying..." : "சரிபார்க்கிறது..."}</span>
          ) : (
            <span>{language === 'en' ? "Verify OTP" : "OTP சரிபார்க்கவும்"}</span>
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

// ==========================================
// 8. LOCATION PERMISSION SCREEN
// ==========================================
export const LocationPermissionScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  const mapSrc = theme === 'dark' 
    ? "/assets/images/location-permission-dark.png" 
    : "/assets/images/location-permission.png";

  const handleAllowLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => navigate('/choose-appearance'),
        () => navigate('/choose-appearance'),
        { timeout: 2000 }
      );
    } else {
      navigate('/choose-appearance');
    }
  };

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none ${
      theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
    }`}>
      {/* Header Nav */}
      <div className="h-8 flex items-center">
        <button 
          onClick={() => navigate('/otp')}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <ChevronLeft size={20} />
        </button>
      </div>

      {/* Isometric Map Artwork */}
      <div className="flex justify-center my-2">
        <img 
          src={mapSrc} 
          alt="Isometric Map Navigation Pointer" 
          className="w-40 h-32 object-contain"
        />
      </div>

      {/* Heading Text */}
      <div className="text-center mt-2">
        <h2 className="text-lg font-black text-slate-800 dark:text-white">Allow Location Access</h2>
        <p className="text-xs text-slate-400 dark:text-neutral-500 mt-2 max-w-xs mx-auto leading-relaxed font-semibold">
          To provide better local services and updates
        </p>
      </div>

      {/* Permission Features bullets */}
      <div className="flex-1 flex flex-col justify-center max-w-xs mx-auto space-y-4 my-4 font-semibold text-xs text-slate-500 dark:text-neutral-400">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs">🔔</div>
          <span>Get nearby alerts</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs">🎯</div>
          <span>Report accurate location</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs">🗺️</div>
          <span>Find nearby places</span>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3.5 mb-2">
        <button 
          onClick={handleAllowLocation}
          className="w-full py-4 bg-gradient-to-r from-primary to-[#5b7eff] text-white font-bold rounded-btn shadow-md hover:scale-101 active:scale-95 transition-all duration-200 text-sm"
        >
          Allow Location
        </button>

        <button 
          onClick={() => navigate('/choose-appearance')}
          className={`w-full py-4 font-bold rounded-btn text-sm hover:underline active:scale-95 transition ${
            theme === 'dark' ? 'text-white' : 'text-slate-600'
          }`}
        >
          Not Now
        </button>
      </div>
    </div>
  );
};

// ==========================================
// CHOOSE APPEARANCE SCREEN
// ==========================================
export const ChooseAppearanceScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme, setTheme, language } = useApp();
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark'>(theme);

  const handleSelect = (mode: 'light' | 'dark') => {
    setSelectedTheme(mode);
    setTheme(mode); 
  };

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      <div className="h-8 flex items-center">
        <button 
          onClick={() => navigate('/location-permission')}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <ChevronLeft size={20} />
        </button>
      </div>

      <div className="mt-2">
        <h2 className="text-xl font-black">
          {language === 'en' ? "Choose Your Appearance" : "உங்கள் தோற்றத்தைத் தேர்ந்தெடுக்கவும்"}
        </h2>
        <p className="text-xs text-slate-400 dark:text-neutral-500 mt-2 font-semibold leading-relaxed">
          {language === 'en' 
            ? "Select how Avadi Connect should look. You can change this later in Settings." 
            : "Avadi Connect எப்படி தோன்ற வேண்டும் என்பதைத் தேர்வு செய்யுங்கள். இதை Settings-ல் பின்னர் மாற்றலாம்."}
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-center space-y-4 my-6">
        
        {/* Light Card */}
        <button
          onClick={() => handleSelect('light')}
          className={`w-full p-4 rounded-[20px] text-left border flex items-center justify-between transition-all duration-200 ${
            selectedTheme === 'light'
              ? 'border-primary bg-white shadow-soft ring-1 ring-primary/10'
              : 'border-slate-200 bg-white/60 dark:bg-neutral-900/30 dark:border-neutral-850'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              selectedTheme === 'light' ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-400'
            }`}>
              <Sun size={24} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">Light Mode</h4>
              <div className="flex gap-1.5 mt-2">
                <div className="w-8 h-4 rounded-xs bg-slate-100 border border-slate-200 flex flex-col justify-between p-0.5">
                  <div className="h-1 w-full bg-primary/20 rounded-3xs"></div>
                  <div className="flex gap-0.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-300"></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-300"></div>
                  </div>
                </div>
                <span className="text-[9px] text-slate-400 dark:text-neutral-500 font-semibold">Bright & soft</span>
              </div>
            </div>
          </div>
          <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
            selectedTheme === 'light' ? 'border-primary bg-primary text-white' : 'border-slate-300'
          }`}>
            {selectedTheme === 'light' && <Check size={12} strokeWidth={4} />}
          </div>
        </button>

        {/* Dark Card */}
        <button
          onClick={() => handleSelect('dark')}
          className={`w-full p-4 rounded-[20px] text-left border flex items-center justify-between transition-all duration-200 ${
            selectedTheme === 'dark'
              ? 'border-primary bg-neutral-900 shadow-soft ring-1 ring-primary/20'
              : 'border-slate-200 bg-white/60 dark:bg-neutral-900/30 dark:border-neutral-850'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              selectedTheme === 'dark' ? 'bg-indigo-950 text-indigo-400' : 'bg-slate-100 text-slate-400 dark:bg-neutral-800 dark:text-neutral-500'
            }`}>
              <Moon size={22} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">Dark Mode</h4>
              <div className="flex gap-1.5 mt-2">
                <div className="w-8 h-4 rounded-xs bg-[#121212] border border-neutral-805 flex flex-col justify-between p-0.5">
                  <div className="h-1 w-full bg-neutral-800 rounded-3xs"></div>
                  <div className="flex gap-0.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-neutral-700"></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-neutral-700"></div>
                  </div>
                </div>
                <span className="text-[9px] text-slate-400 dark:text-neutral-500 font-semibold">Rich navy dark</span>
              </div>
            </div>
          </div>
          <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
            selectedTheme === 'dark' ? 'border-primary bg-primary text-white' : 'border-slate-350 dark:border-neutral-700'
          }`}>
            {selectedTheme === 'dark' && <Check size={12} strokeWidth={4} />}
          </div>
        </button>

      </div>

      <div className="mb-2">
        <button
          onClick={() => navigate('/home')}
          className="w-full py-4 bg-gradient-to-r from-primary to-[#5b7eff] text-white font-bold rounded-btn shadow-md hover:scale-101 active:scale-95 transition-all duration-200 text-sm"
        >
          {language === 'en' ? "Continue" : "தொடரவும்"}
        </button>
      </div>
    </div>
  );
};

// ==========================================
// 9 & 10. HOME DASHBOARD SCREEN (Corrections implemented)
// ==========================================
export const HomeDashboardScreen: React.FC = () => {
  const navigate = useNavigate();
  const { selectedWard, setSelectedWard, theme } = useApp();
  const [showWardDropdown, setShowWardDropdown] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const update1Src = theme === 'dark' 
    ? "/assets/images/live-update-thumbnail-1-dark.png" 
    : "/assets/images/live-update-thumbnail-1.png";

  const update2Src = theme === 'dark' 
    ? "/assets/images/live-update-thumbnail-2-dark.png" 
    : "/assets/images/live-update-thumbnail-2.png";

  const neighborhoodsList = [
    { area: 'Avadi North' },
    { area: 'Avadi South' },
    { area: 'Avadi East' },
    { area: 'Avadi West' },
    { area: 'Thirumullaivoyal' },
    { area: 'Mittanamalli' },
    { area: 'Muthapudupet' },
    { area: 'Sekkadu' }
  ];

  const wardsList = Array.from({ length: 48 }, (_, i) => {
    const wardNum = i + 1;
    const neigh = neighborhoodsList[i % neighborhoodsList.length];
    return `Ward ${wardNum} - ${neigh.area}`;
  });

  const triggerLockToast = (section: string) => {
    setToastMessage(`${section} locked under Phase 2 instructions.`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  return (
    <div className={`flex-1 flex flex-col justify-between relative select-none ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      
      <div className="flex-grow overflow-y-auto p-4 space-y-4 pb-20">
        
        {/* Top App bar */}
        <div className="flex justify-between items-center h-10 relative">
          <div className="relative">
            <button 
              onClick={() => setShowWardDropdown(!showWardDropdown)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full border text-xs font-bold shadow-2xs transition-all ${
                theme === 'dark' 
                  ? 'bg-neutral-900 border-neutral-800 text-white' 
                  : 'bg-white border-slate-200 text-slate-700'
              }`}
            >
              <span>📍 {selectedWard.replace(" - ", " ")}</span>
              <span className="text-[10px] opacity-70">▼</span>
            </button>
            
            {showWardDropdown && (
              <div className={`absolute top-10 left-0 w-52 max-h-60 overflow-y-auto rounded-2xl shadow-xl border p-2 z-50 ${
                theme === 'dark' 
                  ? 'bg-neutral-900 border-neutral-800 text-white' 
                  : 'bg-white border-slate-150 text-slate-700'
              }`}>
                {wardsList.map(w => (
                  <button
                    key={w}
                    onClick={() => {
                      setSelectedWard(w);
                      setShowWardDropdown(false);
                    }}
                    className={`w-full text-left text-xs p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-neutral-800 transition font-semibold ${
                      selectedWard === w ? 'text-primary font-bold' : ''
                    }`}
                  >
                    {w}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate('/search')}
              className={`p-2 rounded-full border shadow-2xs ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-slate-200'
              }`}
            >
              <Search size={15} className="text-slate-500" />
            </button>
            <button 
              onClick={() => navigate('/alerts')}
              className={`p-2 rounded-full border shadow-2xs relative ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-slate-200'
              }`}
            >
              <Bell size={15} className="text-slate-500" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
            </button>
            <button 
              onClick={() => navigate('/profile')}
              className="w-8 h-8 rounded-full border shadow-2xs bg-slate-200 overflow-hidden flex items-center justify-center"
            >
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=80" 
                alt="Profile Avatar"
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>

        {/* Hero banner card */}
        <HeroCarousel />

        {/* Quick Actions */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-neutral-500">Quick Actions</h4>
          <div className="grid grid-cols-4 gap-2.5 mt-2">
            
            {/* Report */}
            <button 
              onClick={() => navigate('/complaints/camera')}
              className={`p-3 rounded-card border shadow-2xs flex flex-col items-center gap-1.5 active:scale-95 transition ${
                theme === 'dark' 
                  ? 'bg-neutral-900 border-neutral-850 hover:bg-neutral-800' 
                  : 'bg-white border-slate-150 hover:bg-slate-50'
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <FileText size={15} />
              </div>
              <span className="text-[10px] font-bold">Report</span>
            </button>

            {/* SOS */}
            <button 
              onClick={() => navigate('/sos')}
              className={`p-3 rounded-card border shadow-2xs flex flex-col items-center gap-1.5 active:scale-95 transition relative overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-neutral-900 border-neutral-850 hover:bg-neutral-800' 
                  : 'bg-white border-slate-150 hover:bg-slate-50'
              }`}
            >
              <div className="absolute inset-0 bg-red-500/5 animate-pulse"></div>
              <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-950/40 flex items-center justify-center text-red-600 dark:text-red-400 animate-bounce">
                <Shield size={15} />
              </div>
              <span className="text-[10px] font-bold text-red-600 dark:text-red-400">SOS</span>
            </button>

            {/* Notices */}
            <button 
              onClick={() => navigate('/notifications')}
              className={`p-3 rounded-card border shadow-2xs flex flex-col items-center gap-1.5 active:scale-95 transition ${
                theme === 'dark' 
                  ? 'bg-neutral-900 border-neutral-850 hover:bg-neutral-850' 
                  : 'bg-white border-slate-150 hover:bg-slate-50'
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-950/40 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Bell size={15} />
              </div>
              <span className="text-[10px] font-bold">Notices</span>
            </button>

            {/* More */}
            <button 
              onClick={() => navigate('/explore')}
              className={`p-3 rounded-card border shadow-2xs flex flex-col items-center gap-1.5 active:scale-95 transition ${
                theme === 'dark' 
                  ? 'bg-neutral-900 border-neutral-850 hover:bg-neutral-800' 
                  : 'bg-white border-slate-150 hover:bg-slate-50'
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-neutral-850 flex items-center justify-center text-slate-600 dark:text-slate-400">
                <Compass size={15} />
              </div>
              <span className="text-[10px] font-bold">More</span>
            </button>
          </div>
        </div>

        {/* Live Updates Section */}
        <div>
          <div className="flex justify-between items-center pb-2">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-neutral-500">Live Updates</h4>
            <button 
              onClick={() => navigate('/live-updates')}
              className="text-[10px] font-bold text-primary hover:underline"
            >
              See All
            </button>
          </div>

          <div className="space-y-2.5">
            <div className={`p-3 rounded-card border flex justify-between items-center shadow-2xs ${
              theme === 'dark' ? 'bg-[#181818] border-neutral-800' : 'bg-white border-slate-150'
            }`}>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${theme === 'dark' ? 'bg-amber-950/40' : 'bg-amber-100'}`}>
                  <span className="text-lg">💡</span>
                </div>
                <div>
                  <h5 className="text-xs font-bold">Street Light Not Working</h5>
                  <p className="text-[10px] text-slate-400 dark:text-neutral-500 mt-0.5">Avadi North, P&T Colony</p>
                </div>
              </div>
              <span className="text-[9px] font-bold text-slate-400 dark:text-neutral-500">10m ago</span>
            </div>

            <div className={`p-3 rounded-card border flex justify-between items-center shadow-2xs ${
              theme === 'dark' ? 'bg-[#181818] border-neutral-800' : 'bg-white border-slate-150'
            }`}>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${theme === 'dark' ? 'bg-blue-950/40' : 'bg-blue-100'}`}>
                  <span className="text-lg">💧</span>
                </div>
                <div>
                  <h5 className="text-xs font-bold">Water Issue Reported</h5>
                  <p className="text-[10px] text-slate-400 dark:text-neutral-500 mt-0.5">Thirumullaivoyal</p>
                </div>
              </div>
              <span className="text-[9px] font-bold text-slate-400 dark:text-neutral-500">30m ago</span>
            </div>
          </div>
        </div>

      </div>

      {/* Sticky Bottom Navigation (MD3 style) */}
      <div className={`absolute bottom-0 left-0 w-full border-t flex justify-around py-2 h-16 z-30 shadow-lg ${
        theme === 'dark' 
          ? 'bg-[#121212]/95 border-neutral-800 text-white backdrop-blur-md' 
          : 'bg-white/95 border-slate-150 text-slate-700 backdrop-blur-md'
      }`}>
        <button className="flex flex-col items-center justify-center flex-1 text-primary">
          <div className="px-5 py-1 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-md">🏠</span>
          </div>
          <span className="text-[9px] font-bold mt-1">Home</span>
        </button>

        <button 
          onClick={() => navigate('/civic')}
          className="flex flex-col items-center justify-center flex-1 opacity-70 hover:opacity-100 transition"
        >
          <div className="px-5 py-1 rounded-full flex items-center justify-center">
            <span className="text-md text-slate-500">🏛️</span>
          </div>
          <span className="text-[9px] font-bold mt-1">Civic</span>
        </button>

        <button 
          onClick={() => navigate('/explore')}
          className="flex flex-col items-center justify-center flex-1 opacity-70 hover:opacity-100 transition"
        >
          <div className="px-5 py-1 rounded-full flex items-center justify-center">
            <span className="text-md text-slate-500">🧭</span>
          </div>
          <span className="text-[9px] font-bold mt-1">Explore</span>
        </button>

        <button 
          onClick={() => navigate('/community-feed')}
          className="flex flex-col items-center justify-center flex-1 opacity-70 hover:opacity-100 transition"
        >
          <div className="px-5 py-1 rounded-full flex items-center justify-center">
            <span className="text-md text-slate-500">👥</span>
          </div>
          <span className="text-[9px] font-bold mt-1">Feed</span>
        </button>
      </div>

      {/* Lock Toast */}
      {toastMessage && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 dark:bg-white/95 text-white dark:text-slate-900 px-5 py-3 rounded-full text-xs font-bold shadow-2xl z-50 text-center w-72 leading-snug animate-fade-in border border-white/10 dark:border-slate-200">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

// ==========================================
// 11. COMMUNITY FEED SCREEN
// ==========================================
export const CommunityFeedScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [activeTab, setActiveTab] = useState<'foryou' | 'following' | 'nearby'>('foryou');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const potholeSrc = theme === 'dark' 
    ? "/assets/images/pothole-post-dark.png" 
    : "/assets/images/pothole-post.png";

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2000);
  };

  return (
    <div className={`flex-1 flex flex-col justify-between relative select-none ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll Area */}
      <div className="flex-grow overflow-y-auto p-4 space-y-4 pb-20">
        
        {/* Header Top Tab Panel */}
        <div className="flex justify-between items-center h-10 border-b border-slate-200/40 dark:border-neutral-900 pb-2">
          <button 
            onClick={() => navigate('/home')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex gap-4 text-xs font-bold">
            <button 
              onClick={() => setActiveTab('foryou')}
              className={`pb-1 transition-all ${
                activeTab === 'foryou' ? 'text-primary border-b-2 border-primary font-black' : 'text-slate-400 dark:text-neutral-500'
              }`}
            >
              For You
            </button>
            <button 
              onClick={() => setActiveTab('following')}
              className={`pb-1 transition-all ${
                activeTab === 'following' ? 'text-primary border-b-2 border-primary font-black' : 'text-slate-400 dark:text-neutral-500'
              }`}
            >
              Following
            </button>
            <button 
              onClick={() => setActiveTab('nearby')}
              className={`pb-1 transition-all ${
                activeTab === 'nearby' ? 'text-primary border-b-2 border-primary font-black' : 'text-slate-400 dark:text-neutral-500'
              }`}
            >
              Nearby
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate('/community')}
              title="Community Hub"
              className="p-1.5 text-slate-400 hover:text-primary flex items-center justify-center gap-0.5 font-bold text-[9px] border border-slate-200 dark:border-neutral-800 rounded-full"
            >
              🤝 <span>Hub</span>
            </button>
            <button 
              onClick={() => navigate('/search')}
              className="p-1.5 text-slate-400 hover:text-primary"
            >
              <Search size={16} />
            </button>
          </div>
        </div>

        {/* Feed Posts list */}
        <div className="space-y-4">
          
          {/* Post 1 (With Image) */}
          <div className={`p-4 rounded-card border shadow-2xs flex flex-col gap-3 ${
            theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-150'
          }`}>
            {/* Profile Info */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=60" 
                  alt="Ramesh Kumar Avatar" 
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xs font-bold">Ramesh Kumar</h4>
                  <p className="text-[10px] text-slate-400 dark:text-neutral-500">Avadi North, P&T Colony</p>
                </div>
              </div>
              <span className="text-[10px] text-slate-400 dark:text-neutral-500 font-semibold">2h</span>
            </div>

            {/* Post Description */}
            <p className="text-xs leading-relaxed font-semibold">
              Pothole near 5th Avenue main road. Please take action.
            </p>

            {/* Post Media */}
            <div className="rounded-xl overflow-hidden aspect-video border border-slate-100 dark:border-neutral-900 bg-slate-50 dark:bg-neutral-950">
              <img src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=400" alt="Pothole on 5th Avenue" className="w-full h-full object-cover" />
            </div>

            {/* Actions Bar */}
            <div className="flex justify-between items-center text-slate-400 dark:text-neutral-500 text-xs border-t border-slate-100 dark:border-neutral-900/60 pt-2">
              <button 
                onClick={() => triggerToast("Liked Post")}
                className="flex items-center gap-1.5 hover:text-red-500 active:scale-95 transition"
              >
                <HeartIcon size={14} className="fill-red-500 text-red-500" />
                <span className="font-extrabold text-[10px] text-red-500">23</span>
              </button>
              <button 
                onClick={() => triggerToast("Comments Locked")}
                className="flex items-center gap-1.5 hover:text-primary active:scale-95 transition"
              >
                <MessageSquare size={14} />
                <span className="font-bold text-[10px]">5</span>
              </button>
              <button 
                onClick={() => triggerToast("Link Copied")}
                className="flex items-center gap-1.5 hover:text-primary active:scale-95 transition"
              >
                <Share2 size={14} />
                <span className="font-bold text-[10px]">Share</span>
              </button>
              <button 
                onClick={() => triggerToast("Saved to Bookmarks")}
                className="p-1 hover:text-primary transition"
              >
                <Bookmark size={14} />
              </button>
            </div>
          </div>

          {/* Post 2 (Text Only) */}
          <div className={`p-4 rounded-card border shadow-2xs flex flex-col gap-3 ${
            theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-150'
          }`}>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=60" 
                  alt="Priya Avatar" 
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xs font-bold">Priya S</h4>
                  <p className="text-[10px] text-slate-400 dark:text-neutral-500">Avadi South</p>
                </div>
              </div>
              <span className="text-[10px] text-slate-400 dark:text-neutral-500 font-semibold">4h</span>
            </div>

            <p className="text-xs leading-relaxed font-semibold">
              Tree fallen near school area.
            </p>

            <div className="flex justify-between items-center text-slate-400 dark:text-neutral-500 text-xs border-t border-slate-100 dark:border-neutral-900/60 pt-2">
              <button 
                onClick={() => triggerToast("Liked Post")}
                className="flex items-center gap-1.5 hover:text-red-500 active:scale-95 transition"
              >
                <HeartIcon size={14} />
                <span className="font-bold text-[10px]">12</span>
              </button>
              <button 
                onClick={() => triggerToast("Comments Locked")}
                className="flex items-center gap-1.5 hover:text-primary active:scale-95 transition"
              >
                <MessageSquare size={14} />
                <span className="font-bold text-[10px]">2</span>
              </button>
              <button 
                onClick={() => triggerToast("Link Copied")}
                className="flex items-center gap-1.5 hover:text-primary active:scale-95 transition"
              >
                <Share2 size={14} />
                <span className="font-bold text-[10px]">Share</span>
              </button>
              <button 
                onClick={() => triggerToast("Saved to Bookmarks")}
                className="p-1 hover:text-primary transition"
              >
                <Bookmark size={14} />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Sticky Bottom Navigation (MD3 style) */}
      <div className={`absolute bottom-0 left-0 w-full border-t flex justify-around py-2 h-16 z-30 shadow-lg ${
        theme === 'dark' 
          ? 'bg-[#121212]/95 border-neutral-800 text-white backdrop-blur-md' 
          : 'bg-white/95 border-slate-150 text-slate-700 backdrop-blur-md'
      }`}>
        <button 
          onClick={() => navigate('/home')}
          className="flex flex-col items-center justify-center flex-1 opacity-70 hover:opacity-100 transition"
        >
          <div className="px-5 py-1 rounded-full flex items-center justify-center">
            <span className="text-md">🏠</span>
          </div>
          <span className="text-[9px] font-bold mt-1">Home</span>
        </button>

        <button 
          onClick={() => navigate('/civic')}
          className="flex flex-col items-center justify-center flex-1 opacity-70 hover:opacity-100 transition"
        >
          <div className="px-5 py-1 rounded-full flex items-center justify-center">
            <span className="text-md">🏛️</span>
          </div>
          <span className="text-[9px] font-bold mt-1">Civic</span>
        </button>

        <button 
          onClick={() => navigate('/explore')}
          className="flex flex-col items-center justify-center flex-1 opacity-70 hover:opacity-100 transition"
        >
          <div className="px-5 py-1 rounded-full flex items-center justify-center">
            <span className="text-md">🧭</span>
          </div>
          <span className="text-[9px] font-bold mt-1">Explore</span>
        </button>

        <button className="flex flex-col items-center justify-center flex-1 text-primary">
          <div className="px-5 py-1 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-md">👥</span>
          </div>
          <span className="text-[9px] font-bold mt-1">Feed</span>
        </button>
      </div>

      {/* Toast message overlay */}
      {toastMessage && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 dark:bg-white/95 text-white dark:text-slate-900 px-5 py-3 rounded-full text-xs font-bold shadow-2xl z-50 text-center w-64 leading-snug animate-fade-in">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

// ==========================================
// 12. NOTICES SCREEN
// ==========================================
export const NoticesScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [activeTab, setActiveTab] = useState<'all' | 'gov' | 'events' | 'alerts'>('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const noticesList = [
    { id: 1, title: 'Water Supply Timings', date: 'May 16, 2025', issuer: 'Avadi Corporation', cat: 'gov', color: 'bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400', icon: <Droplet size={16} /> },
    { id: 2, title: 'Road Maintenance Work', date: 'May 14, 2025', issuer: 'Highways Department', cat: 'alerts', color: 'bg-amber-100 dark:bg-amber-955/40 text-amber-600 dark:text-amber-400', icon: <AlertTriangle size={16} /> },
    { id: 3, title: 'Community Meeting', date: 'May 12, 2025', issuer: 'Avadi North Ward Office', cat: 'events', color: 'bg-orange-100 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400', icon: <Users size={16} /> },
    { id: 4, title: 'Health Camp', date: 'May 10, 2025', issuer: 'Primary Health Center', cat: 'events', color: 'bg-purple-100 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400', icon: <HeartIcon size={16} /> }
  ];

  const filteredNotices = noticesList.filter(n => activeTab === 'all' || n.cat === activeTab);

  const triggerToast = () => {
    setToastMessage("Notices detail locked under Phase 2.");
    setTimeout(() => setToastMessage(null), 2000);
  };

  return (
    <div className={`flex-1 flex flex-col justify-between relative select-none ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      <div className="flex-grow overflow-y-auto p-4 space-y-4 pb-20">
        
        {/* Header Title */}
        <div className="flex justify-between items-center h-10">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate(-1)}
              className="p-1 rounded-full text-slate-400 hover:text-primary transition"
            >
              <ChevronLeft size={20} />
            </button>
            <h2 className="text-md font-black">Notices</h2>
          </div>
          
          {/* Tabs header scroll list */}
          <div className="flex gap-2 text-[10px] font-bold">
            {['all', 'gov', 'events', 'alerts'].map(t => (
              <button
                key={t}
                onClick={() => setActiveTab(t as any)}
                className={`px-3 py-1.5 rounded-full transition-all border uppercase tracking-wider ${
                  activeTab === t 
                    ? 'bg-primary text-white border-primary shadow-xs' 
                    : 'bg-white dark:bg-neutral-900 border-slate-200 dark:border-neutral-800 text-slate-450 dark:text-neutral-500'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Notices Cards List */}
        <div className="space-y-2.5 mt-2">
          {filteredNotices.map(n => (
            <button
              key={n.id}
              onClick={triggerToast}
              className={`w-full text-left p-3.5 rounded-card border flex items-center justify-between shadow-2xs hover:scale-[1.005] duration-150 ${
                theme === 'dark' ? 'bg-[#181818] border-neutral-800/80' : 'bg-white border-slate-150'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-3xs ${n.color}`}>
                  {n.icon}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-white leading-snug">{n.title}</h4>
                  <p className="text-[9px] text-slate-400 dark:text-neutral-500 mt-1 font-bold">
                    {n.date} • <span className="text-primary/80">{n.issuer}</span>
                  </p>
                </div>
              </div>
              <span className="text-[10px] text-slate-350 dark:text-neutral-700">▶</span>
            </button>
          ))}
        </div>

      </div>

      {/* Sticky Bottom Navigation (MD3 style) */}
      <div className={`absolute bottom-0 left-0 w-full border-t flex justify-around py-2 h-16 z-30 shadow-lg ${
        theme === 'dark' 
          ? 'bg-[#121212]/95 border-neutral-800 text-white backdrop-blur-md' 
          : 'bg-white/95 border-slate-150 text-slate-700 backdrop-blur-md'
      }`}>
        <button 
          onClick={() => navigate('/home')}
          className="flex flex-col items-center justify-center flex-1 opacity-70 hover:opacity-100 transition"
        >
          <div className="px-5 py-1 rounded-full flex items-center justify-center">
            <span className="text-md">🏠</span>
          </div>
          <span className="text-[9px] font-bold mt-1">Home</span>
        </button>

        <button className="flex flex-col items-center justify-center flex-1 text-primary">
          <div className="px-5 py-1 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-md">🏛️</span>
          </div>
          <span className="text-[9px] font-bold mt-1">Civic</span>
        </button>

        <button 
          onClick={() => navigate('/services')} 
          className="flex flex-col items-center justify-center flex-1 opacity-70 hover:opacity-100 transition"
        >
          <div className="px-5 py-1 rounded-full flex items-center justify-center">
            <span className="text-md text-slate-500">🧭</span>
          </div>
          <span className="text-[9px] font-bold mt-1">Explore</span>
        </button>

        <button 
          onClick={() => navigate('/community')}
          className="flex flex-col items-center justify-center flex-1 opacity-70 hover:opacity-100 transition"
        >
          <div className="px-5 py-1 rounded-full flex items-center justify-center">
            <span className="text-md text-slate-500">👥</span>
          </div>
          <span className="text-[9px] font-bold mt-1">Community</span>
        </button>
      </div>

      {toastMessage && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 dark:bg-white/95 text-white dark:text-slate-900 px-5 py-3 rounded-full text-xs font-bold shadow-2xl z-50 text-center w-64 leading-snug animate-fade-in">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

// ==========================================
// 13. REPORT ISSUE – STEP 1 SCREEN
// ==========================================
export const ReportIssueStep1Screen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string | null>('Pothole');

  const categories = [
    { name: 'Pothole', icon: '🕳️' },
    { name: 'Street Light', icon: '💡' },
    { name: 'Water Issue', icon: '💧' },
    { name: 'Garbage', icon: '🗑️' },
    { name: 'Drainage', icon: '🚰' },
    { name: 'Others', icon: '🌐' }
  ];

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Header back */}
      <div className="h-8 flex items-center">
        <button 
          onClick={() => navigate('/civic')}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <ChevronLeft size={20} />
        </button>
      </div>

      {/* Form content */}
      <div className="flex-grow flex flex-col justify-center">
        <h2 className="text-xl font-black">Report an Issue</h2>
        <p className="text-xs text-slate-450 dark:text-neutral-500 mt-1 font-semibold">What's the problem?</p>

        {/* 6 Category Selection grid */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          {categories.map(c => (
            <button
              key={c.name}
              onClick={() => setSelectedCategory(c.name)}
              className={`p-4 rounded-[20px] text-center border flex flex-col items-center gap-2.5 transition shadow-2xs hover:scale-101 active:scale-95 duration-150 ${
                selectedCategory === c.name
                  ? 'bg-primary/5 border-primary shadow-xs ring-1 ring-primary/10'
                  : 'bg-white dark:bg-neutral-900 border-slate-150 dark:border-neutral-800'
              }`}
            >
              <span className="text-2xl">{c.icon}</span>
              <span className={`text-[10px] font-black uppercase tracking-wider ${
                selectedCategory === c.name ? 'text-primary' : 'text-slate-650 dark:text-neutral-300'
              }`}>{c.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Footer Next button */}
      <div className="mt-6 mb-2">
        <button
          onClick={() => navigate('/complaints/category-details')}
          disabled={!selectedCategory}
          className="w-full py-4 bg-gradient-to-r from-primary to-[#5b7eff] text-white font-bold rounded-btn shadow-md hover:scale-101 active:scale-95 transition-all duration-200 text-sm disabled:bg-slate-300 dark:disabled:bg-neutral-800 disabled:text-white/40 disabled:cursor-not-allowed cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

// ==========================================
// 14. REPORT ISSUE – STEP 2 SCREEN
// ==========================================
export const ReportIssueStep2Screen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [desc, setDesc] = useState("Large pothole on the road near 5th Avenue causing traffic problems.");
  
  const potholeSrc = theme === 'dark' 
    ? "/assets/images/pothole-post-dark.png" 
    : "/assets/images/pothole-post.png";

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Header back */}
      <div className="h-8 flex items-center">
        <button 
          onClick={() => navigate('/complaints/camera')}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <ChevronLeft size={20} />
        </button>
      </div>

      {/* Describe Form */}
      <div className="flex-1 flex flex-col justify-center space-y-4 my-2">
        <div>
          <h2 className="text-xl font-black">Describe the Issue</h2>
          <p className="text-xs text-slate-400 dark:text-neutral-500 mt-1 font-semibold">Provide more details</p>
        </div>

        {/* Text description */}
        <div className="space-y-1.5">
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            rows={3.5}
            className={`w-full p-3.5 text-xs font-semibold rounded-btn border focus:outline-none focus:border-primary resize-none ${
              theme === 'dark' 
                ? 'bg-neutral-900 border-neutral-800 text-white focus:bg-neutral-900/60' 
                : 'bg-white border-slate-200 text-slate-800 focus:bg-white'
            }`}
          />
        </div>

        {/* Photo uploads list */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-neutral-500">Add Photos</label>
          <div className="flex gap-2">
            
            {/* Thumbnail 1 */}
            <div className="w-16 h-16 rounded-xl border border-slate-200/50 dark:border-neutral-800 overflow-hidden relative shadow-3xs flex items-center justify-center bg-slate-100">
              <img src={potholeSrc} alt="Pothole input" className="w-full h-full object-cover" />
              <button className="absolute top-1 right-1 w-4 h-4 bg-black/60 rounded-full text-white flex items-center justify-center text-[8px] font-extrabold hover:bg-black">✕</button>
            </div>

            {/* Thumbnail 2 */}
            <div className="w-16 h-16 rounded-xl border border-slate-200/50 dark:border-neutral-800 overflow-hidden relative shadow-3xs flex items-center justify-center bg-slate-100">
              <img src={potholeSrc} alt="Pothole input zoomed" className="w-full h-full object-cover" />
              <button className="absolute top-1 right-1 w-4 h-4 bg-black/60 rounded-full text-white flex items-center justify-center text-[8px] font-extrabold hover:bg-black">✕</button>
            </div>

            {/* Upload Plus button placeholder */}
            <button className={`w-16 h-16 rounded-xl border-2 border-dashed flex flex-col items-center justify-center text-slate-350 hover:border-primary transition ${
              theme === 'dark' ? 'border-neutral-800 bg-neutral-950/20' : 'border-slate-200 bg-slate-50'
            }`}>
              <Plus size={16} />
              <span className="text-[8px] font-bold mt-1">Upload</span>
            </button>
          </div>
        </div>

        {/* Location select input block */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-neutral-500">Add Location</label>
          <div className="relative">
            <input
              type="text"
              defaultValue="5th Avenue, Avadi North"
              className={`w-full p-3.5 pr-10 text-xs font-semibold rounded-btn border ${
                theme === 'dark' 
                  ? 'bg-neutral-900 border-neutral-800 text-white' 
                  : 'bg-white border-slate-200 text-slate-800'
              }`}
            />
            <MapPin size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
        </div>
      </div>

      {/* Submit Report action */}
      <div className="mt-4 mb-2">
        <button
          onClick={() => navigate('/complaints/submitted')}
          className="w-full py-4 bg-gradient-to-r from-primary to-[#5b7eff] text-white font-bold rounded-btn shadow-md hover:scale-101 active:scale-95 transition-all duration-200 text-sm"
        >
          Submit Report
        </button>
      </div>
    </div>
  );
};

// ==========================================
// 15. ISSUE SUBMITTED SCREEN
// ==========================================
export const IssueSubmittedScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme, language } = useApp();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleTrackStatus = () => {
    setToastMessage("Tracking details are locked under Phase 4 instructions.");
    setTimeout(() => setToastMessage(null), 2500);
  };

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Top spacing */}
      <div className="h-8"></div>

      {/* Centered Success contents */}
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        {/* Pulsing check circle */}
        <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-300 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 animate-pulse">
          <Check size={42} strokeWidth={3.5} />
        </div>

        <h3 className="text-lg font-black leading-snug">Issue Submitted<br />Successfully!</h3>
        <p className="text-xs text-slate-400 dark:text-neutral-500 mt-2 max-w-xs font-semibold leading-relaxed">
          Your issue has been submitted and will be updated soon.
        </p>

        {/* Issue ID panel */}
        <div className={`mt-8 p-4 rounded-card border w-64 shadow-2xs ${
          theme === 'dark' ? 'bg-neutral-900/60 border-neutral-800' : 'bg-white border-slate-150'
        }`}>
          <span className="text-[9px] font-bold uppercase tracking-wider text-slate-450 dark:text-neutral-500">Issue ID</span>
          <h4 className="text-sm font-extrabold text-primary dark:text-white mt-1">AVDI2505120001</h4>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3.5 mb-2 relative">
        <button
          onClick={() => navigate('/complaints')}
          className="w-full py-4 bg-gradient-to-r from-primary to-[#5b7eff] text-white font-bold rounded-btn shadow-md hover:scale-101 active:scale-95 transition-all duration-200 text-sm"
        >
          Track Status
        </button>

        <button
          onClick={() => navigate('/home')}
          className={`w-full py-4 font-bold rounded-btn text-sm hover:underline active:scale-95 transition ${
            theme === 'dark' ? 'text-white' : 'text-slate-650'
          }`}
        >
          Back to Home
        </button>

        {toastMessage && (
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-black/85 dark:bg-white/95 text-white dark:text-slate-900 px-4 py-2.5 rounded-full text-[10px] font-bold shadow-xl text-center w-64 leading-normal z-50">
            {toastMessage}
          </div>
        )}
      </div>
    </div>
  );
};
