import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
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
  LogOut,
  Menu
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
            <div
              key={i}
              className={`flex flex-col items-center justify-center p-2 rounded-2xl border h-16 ${
                theme === 'dark' 
                  ? 'bg-neutral-900 border-neutral-850 text-white' 
                  : 'bg-white border-slate-100 text-slate-700 shadow-3xs'
              }`}
            >
              <div className="text-md mb-1">{f.icon}</div>
              <span className="text-[7.5px] font-bold text-center leading-tight tracking-tight line-clamp-2">
                {f.name}
              </span>
            </div>
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
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(5); // June (0-indexed)
  const [currentYear, setCurrentYear] = useState(1998);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const getDaysInMonth = (m: number, y: number) => new Date(y, m + 1, 0).getDate();
  const getFirstDayOfMonth = (m: number, y: number) => new Date(y, m, 1).getDay();

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    calendarDays.push(d);
  }

  const [genderSelection, setGenderSelection] = useState<'Male' | 'Female' | 'Other' | null>(null);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState<string | null>(null);
  const [bloodGroupOpen, setBloodGroupOpen] = useState(false);

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none h-full relative ${
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
        <span className="text-xs font-black text-slate-855 dark:text-white">Create Your Account</span>
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
              readOnly
              value={dob}
              onClick={() => setShowDatePicker(true)}
              placeholder="DD / MM / YYYY"
              className={`w-full p-3.5 text-xs font-semibold rounded-btn border focus:outline-none focus:border-[#4A3AFF] cursor-pointer ${
                theme === 'dark' 
                  ? 'bg-neutral-900 border-neutral-805 text-white' 
                  : 'bg-white border-slate-200 text-slate-800'
              }`}
            />
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none">📅</span>
          </div>
        </div>

        {/* Select Blood Group */}
        <div className="space-y-1 relative">
          <label className="text-[9px] font-black uppercase tracking-wide text-slate-400 dark:text-neutral-500">Select Blood Group</label>
          <div 
            onClick={() => setBloodGroupOpen(!bloodGroupOpen)}
            className={`w-full p-3.5 text-xs font-semibold rounded-btn border flex justify-between items-center cursor-pointer ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-850 text-white' : 'bg-white border-slate-200 text-slate-800'
            }`}
          >
            <span>{selectedBloodGroup || "Select Blood Group"}</span>
            <span className="text-[10px] text-slate-400">▼</span>
          </div>
          {bloodGroupOpen && (
            <div className={`absolute left-0 right-0 z-50 mt-1 max-h-40 overflow-y-auto rounded-btn border shadow-lg ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-slate-205 text-slate-800'
            }`}>
              {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((bg) => (
                <div 
                  key={bg}
                  onClick={() => {
                    setSelectedBloodGroup(bg);
                    setBloodGroupOpen(false);
                  }}
                  className="p-2.5 text-xs font-semibold hover:bg-[#4A3AFF]/10 cursor-pointer border-b last:border-0 border-slate-105 dark:border-neutral-800"
                >
                  {bg}
                </div>
              ))}
            </div>
          )}
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

      {/* Date Picker Modal Popover */}
      {showDatePicker && (
        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-6">
          <div className={`w-full max-w-xs p-4 rounded-card border shadow-xl flex flex-col ${
            theme === 'dark' ? 'bg-[#181818] border-neutral-800 text-white' : 'bg-white border-slate-150 text-slate-800'
          }`}>
            {/* Header select controls */}
            <div className="flex justify-between items-center mb-3">
              <button
                type="button"
                onClick={() => {
                  if (currentMonth === 0) {
                    setCurrentMonth(11);
                    setCurrentYear(prev => prev - 1);
                  } else {
                    setCurrentMonth(prev => prev - 1);
                  }
                }}
                className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-neutral-800"
              >
                ◀
              </button>
              
              <div className="flex gap-1.5 items-center">
                <select
                  value={currentMonth}
                  onChange={(e) => setCurrentMonth(Number(e.target.value))}
                  className={`bg-transparent font-bold text-xs focus:outline-none cursor-pointer ${
                    theme === 'dark' ? 'text-white' : 'text-slate-800'
                  }`}
                >
                  {monthNames.map((name, idx) => (
                    <option key={name} value={idx} className={theme === 'dark' ? 'bg-neutral-900 text-white' : 'bg-white text-slate-800'}>{name}</option>
                  ))}
                </select>

                <select
                  value={currentYear}
                  onChange={(e) => setCurrentYear(Number(e.target.value))}
                  className={`bg-transparent font-bold text-xs focus:outline-none cursor-pointer ${
                    theme === 'dark' ? 'text-white' : 'text-slate-800'
                  }`}
                >
                  {Array.from({ length: 100 }, (_, i) => 2026 - i).map(year => (
                    <option key={year} value={year} className={theme === 'dark' ? 'bg-neutral-900 text-white' : 'bg-white text-slate-800'}>{year}</option>
                  ))}
                </select>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (currentMonth === 11) {
                    setCurrentMonth(0);
                    setCurrentYear(prev => prev + 1);
                  } else {
                    setCurrentMonth(prev => prev + 1);
                  }
                }}
                className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-neutral-800"
              >
                ▶
              </button>
            </div>

            {/* Days header */}
            <div className="grid grid-cols-7 gap-1 text-center mb-1 text-[10px] font-black text-slate-400">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(day => (
                <div key={day}>{day}</div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-1 text-center">
              {calendarDays.map((day, idx) => (
                <div key={idx} className="h-7 flex items-center justify-center">
                  {day ? (
                    <button
                      type="button"
                      onClick={() => {
                        const dayStr = String(day).padStart(2, '0');
                        const monthStr = String(currentMonth + 1).padStart(2, '0');
                        setDob(`${dayStr} / ${monthStr} / ${currentYear}`);
                        setShowDatePicker(false);
                      }}
                      className={`w-7 h-7 rounded-full text-[10px] font-bold transition-all flex items-center justify-center ${
                        dob === `${String(day).padStart(2, '0')} / ${String(currentMonth + 1).padStart(2, '0')} / ${currentYear}`
                          ? 'bg-[#4A3AFF] text-white'
                          : 'hover:bg-[#4A3AFF]/15 text-slate-800 dark:text-slate-200'
                      }`}
                    >
                      {day}
                    </button>
                  ) : (
                    <div className="w-7 h-7" />
                  )}
                </div>
              ))}
            </div>

            {/* Cancel Control */}
            <button
              type="button"
              onClick={() => setShowDatePicker(false)}
              className="mt-3 py-1.5 border border-slate-200 dark:border-neutral-800 rounded-full text-[10px] font-black uppercase text-slate-400 hover:bg-slate-50 dark:hover:bg-neutral-900 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

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
  const [contactInfo, setContactInfo] = useState('');

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
        <span className="text-xs font-black text-slate-855 dark:text-white">Contact Information</span>
      </div>

      {/* Form Content */}
      <div className="flex-1 flex flex-col justify-start pt-12 space-y-6 my-4">
        {/* Email or Mobile Number */}
        <div className="space-y-2.5">
          <label className="text-[9px] font-black uppercase tracking-wide text-slate-400 dark:text-neutral-500">Email ID or Mobile Number</label>
          <input
            type="text"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            placeholder="Enter email address or mobile number"
            className={`w-full p-4 text-xs font-semibold rounded-btn border focus:outline-none focus:border-[#4A3AFF] ${
              theme === 'dark' 
                ? 'bg-neutral-900 border-neutral-805 text-white' 
                : 'bg-white border-slate-200 text-slate-800'
            }`}
          />
          <p className="text-[9.5px] text-slate-400 dark:text-neutral-500 font-semibold leading-relaxed mt-2 text-left">
            Provide your email address or 10-digit mobile number. We will send a 6-digit verification code to this contact details to secure your account.
          </p>
        </div>

        {/* Dynamic Supporting Helper Text/Info at the bottom */}
        <div className="p-4 rounded-btn bg-[#4A3AFF]/5 dark:bg-[#4A3AFF]/10 border border-[#4A3AFF]/15 text-left space-y-3 mt-6">
          <span className="text-[10px] font-black uppercase tracking-wider text-[#4A3AFF] block">Onboarding Guidelines</span>
          <p className="text-[9.5px] text-slate-500 dark:text-neutral-400 font-bold leading-relaxed">
            • <b>Identity Verification</b>: Secure login relies on verified contact details to protect user accounts.
          </p>
          <p className="text-[9.5px] text-slate-500 dark:text-neutral-400 font-bold leading-relaxed">
            • <b>One-Time Passcode</b>: Standard security validation using a 6-digit OTP will be dispatched immediately.
          </p>
          <p className="text-[9.5px] text-slate-500 dark:text-neutral-400 font-bold leading-relaxed">
            • <b>Local Announcements</b>: Important ward advisories and emergency public notifications will be sent directly to your registered details.
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
          onClick={() => navigate('/otp', { state: { contactInfo } })}
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
  const [selectedWard, setSelectedWard] = useState<string | null>(null);
  const [selectedStreet, setSelectedStreet] = useState<string | null>(null);
  const [selectedCommunity, setSelectedCommunity] = useState<string | null>(null);
  const [wardOpen, setWardOpen] = useState(false);
  const [streetOpen, setStreetOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);
  const [locationAllowed, setLocationAllowed] = useState(true);
  const [showLocationDialog, setShowLocationDialog] = useState(false);

  useEffect(() => {
    setShowLocationDialog(true);
  }, []);

  const wards = Array.from({ length: 48 }, (_, i) => `Ward ${i + 1}`);

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212]' : 'bg-slate-50'
    } ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
      {/* Header back */}
      <div className="h-8 flex items-center gap-2">
        <button 
          onClick={() => navigate('/otp')}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-xs font-black text-slate-805 dark:text-white">Address & Ward</span>
      </div>

      {/* Form Content */}
      <div className="flex-1 flex flex-col justify-center space-y-4 my-4">
        {/* Ward Number */}
        <div className="space-y-1 relative">
          <label className="text-[9px] font-black uppercase tracking-wide text-slate-400 dark:text-neutral-500">Ward Number</label>
          <div 
            onClick={() => {
              setWardOpen(!wardOpen);
              setStreetOpen(false);
              setCommunityOpen(false);
            }}
            className={`w-full p-3.5 text-xs font-semibold rounded-btn border flex justify-between items-center cursor-pointer ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-805 text-white' : 'bg-white border-slate-200 text-slate-805'
            }`}
          >
            <span>{selectedWard || "Select Ward"}</span>
            <span className="text-[10px] text-slate-400">▼</span>
          </div>
          {wardOpen && (
            <div className={`absolute left-0 right-0 z-50 mt-1 max-h-40 overflow-y-auto rounded-btn border shadow-lg ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-slate-205 text-slate-800'
            }`}>
              {wards.map((w) => (
                <div 
                  key={w}
                  onClick={() => {
                    setSelectedWard(w);
                    setWardOpen(false);
                  }}
                  className="p-2.5 text-xs font-semibold hover:bg-[#4A3AFF]/10 cursor-pointer border-b last:border-0 border-slate-105 dark:border-neutral-800"
                >
                  {w}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Street Name */}
        <div className="space-y-1 relative">
          <label className="text-[9px] font-black uppercase tracking-wide text-slate-400 dark:text-neutral-500">Street Name</label>
          <div 
            onClick={() => {
              setStreetOpen(!streetOpen);
              setWardOpen(false);
              setCommunityOpen(false);
            }}
            className={`w-full p-3.5 text-xs font-semibold rounded-btn border flex justify-between items-center cursor-pointer ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-805 text-white' : 'bg-white border-slate-200 text-slate-805'
            }`}
          >
            <span>{selectedStreet || "Select Street"}</span>
            <span className="text-[10px] text-slate-400">▼</span>
          </div>
          {streetOpen && (
            <div className={`absolute left-0 right-0 z-50 mt-1 max-h-40 overflow-y-auto rounded-btn border shadow-lg ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-slate-205 text-slate-800'
            }`}>
              {['Poonamallee High Rd', 'Gandhi St', 'Railway Station Rd', 'Market St', 'Kamaraj Nagar 5th Street (Ward 48)', 'TNHB Phase III Main Road (Ward 48)', 'Periyar Nagar Main Road (Ward 48)', 'P&T Colony 2nd Cross Street (Ward 48)', 'CTH Road (Chennai-Tiruvallur High Road)', 'Sannidhi Street'].map((s) => (
                <div 
                  key={s}
                  onClick={() => {
                    setSelectedStreet(s);
                    setStreetOpen(false);
                  }}
                  className="p-2.5 text-xs font-semibold hover:bg-[#4A3AFF]/10 cursor-pointer border-b last:border-0 border-slate-105 dark:border-neutral-800"
                >
                  {s}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Community */}
        <div className="space-y-1 relative">
          <label className="text-[9px] font-black uppercase tracking-wide text-slate-400 dark:text-neutral-500">Community</label>
          <div 
            onClick={() => {
              setCommunityOpen(!communityOpen);
              setWardOpen(false);
              setStreetOpen(false);
            }}
            className={`w-full p-3.5 text-xs font-semibold rounded-btn border flex justify-between items-center cursor-pointer ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-805 text-white' : 'bg-white border-slate-200 text-slate-855'
            }`}
          >
            <span>{selectedCommunity || "Auto selected"}</span>
            <span className="text-[10px] text-slate-400">▼</span>
          </div>
          {communityOpen && (
            <div className={`absolute left-0 right-0 z-50 mt-1 max-h-40 overflow-y-auto rounded-btn border shadow-lg ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-slate-205 text-slate-800'
            }`}>
              {['Avadi Municipality', 'Paruthipattu (Ward 48)', 'Kovilpathu', 'Thirumullaivoyal', 'Avadi Housing Board Community (Ward 48)'].map((c) => (
                <div 
                  key={c}
                  onClick={() => {
                    setSelectedCommunity(c);
                    setCommunityOpen(false);
                  }}
                  className="p-2.5 text-xs font-semibold hover:bg-[#4A3AFF]/10 cursor-pointer border-b last:border-0 border-slate-105 dark:border-neutral-800"
                >
                  {c}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Location Permission Box */}
        <div 
          onClick={() => setShowLocationDialog(true)}
          className={`p-4 rounded-btn border cursor-pointer flex flex-col gap-1 text-left transition-all ${
            locationAllowed
              ? 'bg-[#E8F5E9]/65 dark:bg-emerald-950/20 border-emerald-500/25'
              : 'bg-slate-100 dark:bg-neutral-900 border-slate-205 dark:border-neutral-800'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className={locationAllowed ? "text-emerald-600 dark:text-emerald-400 text-sm" : "text-slate-400 text-sm"}>
              {locationAllowed ? '✔' : '🔘'}
            </span>
            <span className={`text-xs font-black ${locationAllowed ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-500'}`}>
              {locationAllowed ? 'Allow Access Location' : 'Location Access Disabled'}
            </span>
          </div>
          <p className="text-[9px] text-slate-500 dark:text-neutral-500 font-semibold leading-relaxed pl-6">
            Location access helps us to deliver community-based services accurately. Click to toggle auto-fill.
          </p>
        </div>
      </div>

      {showLocationDialog && (
        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-6">
          <div className={`w-full max-w-xs p-6 rounded-card border shadow-xl text-center space-y-4 ${
            theme === 'dark' ? 'bg-[#181818] border-neutral-800 text-white' : 'bg-white border-slate-150 text-slate-800'
          }`}>
            <span className="text-2xl block">📍</span>
            <h4 className="text-xs font-black uppercase tracking-wider">Access Device Location</h4>
            <p className="text-[10px] text-slate-500 dark:text-neutral-400 font-semibold leading-relaxed">
              Avadi Connect requires access to your GPS location to automatically determine your municipal Ward, street address, and neighborhood community.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setLocationAllowed(false);
                  setSelectedWard(null);
                  setSelectedStreet(null);
                  setSelectedCommunity(null);
                  setShowLocationDialog(false);
                }}
                className="flex-1 py-2 text-[10px] font-bold rounded-full border border-slate-200 dark:border-neutral-855 text-slate-500 hover:bg-slate-50 dark:hover:bg-neutral-800"
              >
                Deny
              </button>
              <button
                onClick={() => {
                  setLocationAllowed(true);
                  setSelectedWard('Ward 48');
                  setSelectedStreet('TNHB Phase III Main Road (Ward 48)');
                  setSelectedCommunity('Avadi Housing Board Community (Ward 48)');
                  setShowLocationDialog(false);
                }}
                className="flex-1 py-2 text-[10px] font-bold rounded-full bg-[#4A3AFF] text-white hover:bg-[#3b2ecc]"
              >
                Allow
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer Navigation */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => navigate('/otp')}
          className={`flex-1 py-3.5 font-bold rounded-btn text-xs uppercase tracking-wider text-center border ${
            theme === 'dark'
              ? 'bg-transparent border-neutral-800 text-[#4A3AFF]'
              : 'bg-white border-slate-200 text-[#4A3AFF]'
          }`}
        >
          Back
        </button>
        <button
          onClick={() => navigate('/register/theme')}
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
  const location = useLocation();
  const contactInfo = location.state?.contactInfo || 'your email or mobile number';
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
      navigate('/register/address');
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
  }, [otp, language, handleVerify]);

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none h-full ${
      theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
    }`}>
      {/* Header back */}
      <div className="h-8 flex items-center">
        <button 
          onClick={() => navigate('/register/contact')}
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
          Sent to {contactInfo}
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
  const { theme, language, selectedWard } = useApp();
  const [activeSlide, setActiveSlide] = useState(0);
  const [travelTab, setTravelTab] = useState<'train' | 'bus'>('train');

  // Highlights & Viral Videos state
  const [playingVideo, setPlayingVideo] = useState<{title: string; duration: string; views: string; thumbnail: string; source: string} | null>(null);
  const [videoPlayingState, setVideoPlayingState] = useState(false);
  const [videoProgress, setVideoProgress] = useState(30);

  const videos = [
    {
      title: 'Paruthipattu Lake Eco Park Walkthrough Vlog',
      duration: '4:20',
      views: '12K views',
      thumbnail: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=400',
      source: 'YouTube'
    },
    {
      title: 'Avadi Tidel IT Park Construction Drone Update',
      duration: '1:45',
      views: '45K views',
      thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400',
      source: 'Instagram Viral'
    },
    {
      title: 'Best Midnight Street Food Spots in Avadi',
      duration: '8:12',
      views: '28K views',
      thumbnail: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=400',
      source: 'YouTube'
    }
  ];

  const slides = [
    {
      title: 'Explore Local Places',
      desc: 'Discover parks, temples, and markets near you',
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Paruthipattu Lake Park',
      desc: 'Beautiful boating lake and walking pathways',
      image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Avadi Market Hub',
      desc: 'Fresh farm produce and daily household essentials',
      image: 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80&w=600'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scrollable Area */}
      <div className="flex-grow overflow-y-auto p-5 space-y-5 pb-20">
        
        {/* Header Profile & Notifications */}
        <div className="flex justify-between items-center h-10">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate('/drawer')}
              className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-neutral-800 transition text-slate-600 dark:text-white"
            >
              <Menu size={20} />
            </button>
            <div className="flex items-center gap-1.5">
              <img 
                src="/assets/images/logo-icon.png?v=5" 
                alt="Avadi Connect Logo" 
                className="h-7 w-auto object-contain"
              />
              <div className="flex flex-col text-left select-none leading-none pt-0.5">
                <span className="text-[11px] font-black text-[#0D233A] dark:text-white tracking-wider block leading-[1.05]">AVADI</span>
                <span className="text-[9.5px] font-black text-[#009BF2] tracking-wide block leading-[1.05]">CONNECT</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate('/alerts')}
              className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-neutral-800 transition"
            >
              <span className="text-sm">🔔</span>
            </button>
            <div 
              onClick={() => navigate('/settings')}
              className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden border border-slate-150 cursor-pointer active:scale-95 transition"
            >
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150" 
                alt="User Profile" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>

        {/* Greeting & Weather Card */}
        <div className={`p-4 rounded-card border shadow-3xs text-left relative overflow-hidden ${
          theme === 'dark' 
            ? 'bg-neutral-900/60 border-neutral-850 text-white' 
            : 'bg-white border-slate-150 text-slate-800'
        }`}>
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <h4 className="text-[9px] font-black uppercase tracking-wider text-slate-400 dark:text-neutral-500">
                {language === 'en' ? 'Welcome Back' : 'நல்வரவு'}
              </h4>
              <h2 className="text-xs font-black leading-tight text-slate-850 dark:text-white">
                {language === 'en' ? 'Hello, Karthik 👋' : 'வணக்கம், கார்த்திக் 👋'}
              </h2>
              <div className="text-[9.5px] text-slate-500 dark:text-neutral-400 font-bold flex items-center gap-1.5 mt-0.5">
                <span>📍 Avadi, TN</span>
                <span>•</span>
                <span>{selectedWard || 'Ward 1'}</span>
              </div>
            </div>
            {/* Weather Block inside Card */}
            <div className="text-right flex flex-col items-end">
              <span className="text-xl animate-pulse">⛅</span>
              <span className="text-[10px] font-black text-slate-850 dark:text-white mt-0.5">32°C</span>
              <span className="text-[8px] text-slate-400 dark:text-neutral-500 font-extrabold uppercase tracking-wider">Cloudy</span>
            </div>
          </div>
        </div>

        {/* Explore Avadi Slide Carousel (Moved to the Top) */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-neutral-500">Explore Avadi</h4>
          </div>
          <div 
            onClick={() => navigate('/services')}
            className="rounded-card overflow-hidden border aspect-[16/7] relative shadow-soft cursor-pointer group active:scale-98 transition-all"
          >
            <img 
              src={slides[activeSlide].image} 
              alt={slides[activeSlide].title} 
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-white font-extrabold text-xs">{slides[activeSlide].title}</h3>
              <p className="text-white/80 text-[8px] mt-0.5 font-bold">{slides[activeSlide].desc}</p>
            </div>
            
            {/* Slide Navigation Arrows */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setActiveSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
            >
              ◀
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setActiveSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
            >
              ▶
            </button>

            {/* Slide Dots Indicator */}
            <div className="absolute bottom-2 right-4 flex gap-1">
              {slides.map((_, idx) => (
                <div 
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveSlide(idx);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    activeSlide === idx ? 'bg-white w-3' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions (Moved below Carousel) */}
        <div>
          <div className="pb-2">
            <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-neutral-500">Quick Actions</h4>
          </div>
          <div className="grid grid-cols-3 gap-2.5 mt-1">
            {/* Emergency SOS */}
            <button 
              onClick={() => navigate('/sos')}
              className={`p-2.5 rounded-card border shadow-3xs flex flex-col items-center gap-1.5 active:scale-95 transition ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <div className="w-7 h-7 rounded-full bg-red-50 dark:bg-red-950/20 flex items-center justify-center text-red-650 text-xs font-black">
                SOS
              </div>
              <span className="text-[7.5px] font-bold text-center leading-tight">Emergency SOS</span>
            </button>

            {/* Explore Places */}
            <button 
              onClick={() => navigate('/explore-places')}
              className={`p-2.5 rounded-card border shadow-3xs flex flex-col items-center gap-1.5 active:scale-95 transition ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <div className="w-7 h-7 rounded-full bg-teal-50 dark:bg-teal-950/20 flex items-center justify-center text-teal-650 text-xs">
                🧭
              </div>
              <span className="text-[7.5px] font-bold text-center leading-tight">Explore Places</span>
            </button>

            {/* Explore Foods */}
            <button 
              onClick={() => navigate('/explore-food')}
              className={`p-2.5 rounded-card border shadow-3xs flex flex-col items-center gap-1.5 active:scale-95 transition ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <div className="w-7 h-7 rounded-full bg-amber-50 dark:bg-amber-955/20 flex items-center justify-center text-amber-650 text-xs">
                🍲
              </div>
              <span className="text-[7.5px] font-bold text-center leading-tight">Explore Foods</span>
            </button>

            {/* Local Services */}
            <button 
              onClick={() => navigate('/services')}
              className={`p-2.5 rounded-card border shadow-3xs flex flex-col items-center gap-1.5 active:scale-95 transition ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <div className="w-7 h-7 rounded-full bg-indigo-50 dark:bg-indigo-950/20 flex items-center justify-center text-indigo-650 text-xs">
                🤝
              </div>
              <span className="text-[7.5px] font-bold text-center leading-tight">Local Services</span>
            </button>

            {/* Jobs & Rentals */}
            <button 
              onClick={() => navigate('/jobs-rentals')}
              className={`p-2.5 rounded-card border shadow-3xs flex flex-col items-center gap-1.5 active:scale-95 transition ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <div className="w-7 h-7 rounded-full bg-emerald-50 dark:bg-emerald-955/20 flex items-center justify-center text-emerald-650 text-xs">
                🏢
              </div>
              <span className="text-[7.5px] font-bold text-center leading-tight">Jobs & Rentals</span>
            </button>

            {/* Govt Schemes */}
            <button 
              onClick={() => navigate('/schemes')}
              className={`p-2.5 rounded-card border shadow-3xs flex flex-col items-center gap-1.5 active:scale-95 transition ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <div className="w-7 h-7 rounded-full bg-indigo-50 dark:bg-indigo-950/20 flex items-center justify-center text-indigo-650 text-xs">
                📜
              </div>
              <span className="text-[7.5px] font-bold text-center leading-tight">Govt Schemes</span>
            </button>
          </div>
        </div>

        {/* Highlights & Viral Videos */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-neutral-500">Highlights & News</h4>
            <span className="text-[8.5px] font-bold text-red-500 bg-red-50 dark:bg-red-950/20 px-2 py-0.5 rounded-full animate-pulse">LIVE</span>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-none">
            {videos.map((vid, idx) => (
              <div 
                key={idx}
                onClick={() => {
                  setPlayingVideo(vid);
                  setVideoPlayingState(true);
                  setVideoProgress(35);
                }}
                className={`w-44 flex-shrink-0 p-2.5 rounded-card border shadow-3xs cursor-pointer active:scale-[0.98] transition-all flex flex-col justify-between ${
                  theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-150'
                }`}
              >
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-slate-100 dark:bg-neutral-800">
                  <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover" />
                  <span className="absolute bottom-1 right-1 px-1 bg-black/75 text-[7px] text-white font-black rounded-sm">{vid.duration}</span>
                  <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                    <span className="w-8 h-8 rounded-full bg-white/90 dark:bg-neutral-900/90 text-slate-800 dark:text-white flex items-center justify-center shadow-md font-bold text-xs">▶</span>
                  </div>
                </div>
                <div className="space-y-0.5 mt-2 text-left leading-tight">
                  <h5 className="text-[9.5px] font-black text-slate-800 dark:text-white line-clamp-2">{vid.title}</h5>
                  <div className="flex justify-between text-[7.5px] text-slate-400 font-extrabold uppercase mt-1">
                    <span>{vid.source}</span>
                    <span>• {vid.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Information */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-neutral-500">Travel Information</h4>
            <div className="flex gap-1.5 text-[8.5px] font-bold">
              {['train', 'bus'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setTravelTab(tab as any)}
                  className={`px-2.5 py-1 rounded-full border uppercase tracking-wider transition ${
                    travelTab === tab
                      ? 'bg-slate-800 dark:bg-white text-white dark:text-slate-850 border-slate-800 dark:border-white'
                      : 'bg-white dark:bg-neutral-900 text-slate-405 dark:text-neutral-505 border-slate-150 dark:border-neutral-800'
                  }`}
                >
                  {tab === 'train' ? 'Trains' : 'Buses'}
                </button>
              ))}
            </div>
          </div>

          {travelTab === 'train' && (
            <div className={`p-4 rounded-card border shadow-2xs space-y-2 text-xs ${
              theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-150'
            }`}>
              <div className="flex justify-between border-b pb-1.5 border-slate-100 dark:border-neutral-800">
                <span className="font-black text-[9.5px] text-[#4A3AFF] uppercase tracking-wide">Route Name / Type</span>
                <span className="font-black text-[9.5px] text-[#4A3AFF] uppercase tracking-wide">Timings</span>
              </div>
              {[
                { r: 'Avadi ➔ Central (Fast Local)', t: '08:30 AM | 09:15 AM' },
                { r: 'Avadi ➔ Central (Slow Local)', t: '09:45 AM | 10:15 AM' },
                { r: 'Avadi ➔ Tiruvallur (Local) 🚆', t: '09:00 AM | 09:30 AM' },
                { r: 'Central ➔ Avadi (Return Local)', t: '05:30 PM | 06:15 PM' },
                { r: 'Tiruvallur ➔ Avadi (Return Local) 🚆', t: '04:30 PM | 05:00 PM' }
              ].map((row, idx) => (
                <div key={idx} className="flex justify-between font-bold text-[10.5px] py-1 border-b last:border-0 border-slate-50/50 dark:border-neutral-900/50">
                  <span className="text-slate-700 dark:text-slate-355">{row.r}</span>
                  <span className="text-blue-500 font-extrabold shrink-0 pl-2">{row.t}</span>
                </div>
              ))}
            </div>
          )}

          {travelTab === 'bus' && (
            <div className={`p-4 rounded-card border shadow-2xs space-y-2 text-xs ${
              theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-150'
            }`}>
              <div className="flex justify-between border-b pb-1.5 border-slate-100 dark:border-neutral-800">
                <span className="font-black text-[9.5px] text-emerald-650 uppercase tracking-wide">Bus Route No.</span>
                <span className="font-black text-[9.5px] text-emerald-650 uppercase tracking-wide">Frequency / Destination</span>
              </div>
              {[
                { r: 'Route 70 (Avadi Terminus)', f: 'Every 15 mins ➔ CMBT Koyambedu' },
                { r: 'Route 71E (Avadi Terminus)', f: 'Every 20 mins ➔ Broadway' },
                { r: 'Route 70V (Avadi Terminus) 🚌', f: 'Every 20 mins ➔ Vandalur Zoo' },
                { r: 'Route 153C (Avadi Terminus) 🚌', f: 'Every 15 mins ➔ Koyambedu Market' },
                { r: 'Route 206 (Avadi Terminus)', f: 'Every 30 mins ➔ Tambaram' }
              ].map((row, idx) => (
                <div key={idx} className="flex justify-between font-bold text-[10.5px] py-1 border-b last:border-0 border-slate-50/50 dark:border-neutral-900/50">
                  <span className="text-slate-700 dark:text-slate-355">{row.r}</span>
                  <span className="text-emerald-500 font-extrabold shrink-0 pl-2">{row.f}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Info About Avadi Section */}
        <div className="space-y-2">
          <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-neutral-500">Quick Info About Avadi</h4>
          <div className="grid grid-cols-2 gap-3">
            <div className={`p-3 rounded-card border shadow-3xs flex flex-col justify-between h-20 ${
              theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-150'
            }`}>
              <span className="text-[9.5px] font-extrabold text-[#4A3AFF] uppercase">Defense Hub 🎖️</span>
              <p className="text-[8.5px] font-bold text-slate-500 dark:text-neutral-400 leading-tight">
                Home to Heavy Vehicles Factory (HVF), OCF & CVRDE labs.
              </p>
            </div>

            <div className={`p-3 rounded-card border shadow-3xs flex flex-col justify-between h-20 ${
              theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-150'
            }`}>
              <span className="text-[9.5px] font-extrabold text-[#4A3AFF] uppercase">Tidel IT Park 💻</span>
              <p className="text-[8.5px] font-bold text-slate-500 dark:text-neutral-400 leading-tight">
                Pattabiram IT cluster spanning over 3.5 Lakh sq ft area.
              </p>
            </div>

            <div className={`p-3 rounded-card border shadow-3xs flex flex-col justify-between h-20 ${
              theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-150'
            }`}>
              <span className="text-[9.5px] font-extrabold text-[#4A3AFF] uppercase">Eco Park 🌳</span>
              <p className="text-[8.5px] font-bold text-slate-500 dark:text-neutral-400 leading-tight">
                Paruthipattu Lake Eco-Park covering 87 acres with boating.
              </p>
            </div>

            <div className={`p-3 rounded-card border shadow-3xs flex flex-col justify-between h-20 ${
              theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-150'
            }`}>
              <span className="text-[9.5px] font-extrabold text-[#4A3AFF] uppercase">Administration 🏢</span>
              <p className="text-[8.5px] font-bold text-slate-500 dark:text-neutral-400 leading-tight">
                Avadi Municipal Corporation comprising of 48 Wards.
              </p>
            </div>

            <div className={`p-3 rounded-card border shadow-3xs flex flex-col justify-between h-20 ${
              theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-150'
            }`}>
              <span className="text-[9.5px] font-extrabold text-[#4A3AFF] uppercase">Lake Ecology 💧</span>
              <p className="text-[8.5px] font-bold text-slate-500 dark:text-neutral-400 leading-tight">
                Avadi Lake is a major local fresh waterbody undergoing eco-restoration.
              </p>
            </div>

            <div className={`p-3 rounded-card border shadow-3xs flex flex-col justify-between h-20 ${
              theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-150'
            }`}>
              <span className="text-[9.5px] font-extrabold text-[#4A3AFF] uppercase">Ancient Temples 🛕</span>
              <p className="text-[8.5px] font-bold text-slate-500 dark:text-neutral-400 leading-tight">
                Home to historical temples and centuries-old structures like Amman Temple.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Mock Video Player Overlay */}
      {playingVideo && (
        <div className="absolute inset-0 z-50 bg-black/95 flex flex-col justify-between text-white p-5 select-none">
          {/* Top Bar */}
          <div className="flex justify-between items-center h-10">
            <span className="text-[9.5px] font-black text-slate-400 uppercase tracking-widest">{playingVideo.source} Video Player</span>
            <button 
              onClick={() => {
                setPlayingVideo(null);
                setVideoPlayingState(false);
              }}
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 font-bold"
            >
              ✕
            </button>
          </div>

          {/* Video Player Display Screen */}
          <div className="flex-1 flex flex-col justify-center my-6">
            <div className="relative aspect-video w-full rounded-card overflow-hidden bg-neutral-900 shadow-2xl border border-neutral-800">
              <img src={playingVideo.thumbnail} alt={playingVideo.title} className="w-full h-full object-cover opacity-60" />
              
              {/* Play / Loading Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                {videoPlayingState ? (
                  <div className="w-14 h-14 rounded-full bg-black/60 border-2 border-white/80 flex items-center justify-center cursor-pointer animate-pulse" onClick={() => setVideoPlayingState(false)}>
                    <span className="text-xl">❚❚</span>
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-full bg-[#4A3AFF] flex items-center justify-center cursor-pointer shadow-lg" onClick={() => setVideoPlayingState(true)}>
                    <span className="text-xl pl-1">▶</span>
                  </div>
                )}
              </div>

              {/* Progress Slider Bar */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3 space-y-2">
                <div className="flex justify-between items-center text-[8px] font-bold text-white/80">
                  <span>01:12</span>
                  <span>{playingVideo.duration}</span>
                </div>
                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer" onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pct = Math.round(((e.clientX - rect.left) / rect.width) * 100);
                  setVideoProgress(pct);
                }}>
                  <div className="h-full bg-[#4A3AFF] rounded-full" style={{ width: `${videoProgress}%` }} />
                </div>
              </div>
            </div>
          </div>

          {/* Details & Metadata */}
          <div className="space-y-2 text-left mb-6 pb-6">
            <h3 className="text-xs font-black uppercase tracking-wide leading-snug">{playingVideo.title}</h3>
            <p className="text-[9px] text-slate-400 font-extrabold">{playingVideo.views} • 4.8 Rating • 32 Comments</p>
            <p className="text-[9px] text-slate-500 font-semibold leading-relaxed">
              Playing high quality streaming feed of locally sourced content for Avadi municipal dashboard. Standard HD protocols applied.
            </p>
          </div>
        </div>
      )}

      {/* Sticky Bottom Navigation (4 items) */}
      <div className={`absolute bottom-0 left-0 w-full border-t flex justify-around py-2 h-16 z-30 shadow-lg ${
        theme === 'dark' ? 'bg-[#121212]/95 border-neutral-800 text-white' : 'bg-white/95 border-slate-150 text-slate-700'
      }`}>
        <button className="flex flex-col items-center justify-center flex-1 text-[#4A3AFF]">
          <span className="text-md bg-[#4A3AFF]/10 px-4 py-0.5 rounded-full">🏠</span>
          <span className="text-[9px] font-bold mt-1">Home</span>
        </button>
        <button onClick={() => navigate('/civic')} className="flex flex-col items-center justify-center flex-1 opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-md">📄</span>
          <span className="text-[9px] font-bold mt-1">Complaints</span>
        </button>
        <button onClick={() => navigate('/explore')} className="flex flex-col items-center justify-center flex-1 opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-md">🧭</span>
          <span className="text-[9px] font-bold mt-1">Explore</span>
        </button>
        <button onClick={() => navigate('/community-feed')} className="flex flex-col items-center justify-center flex-1 opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-md">👥</span>
          <span className="text-[9px] font-bold mt-1">Feed</span>
        </button>
      </div>
    </div>
  );
};

// SCREEN 8
export const CommunityFeedScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme, communityPosts, profile } = useApp();
  const [activeTab, setActiveTab] = useState<'ward' | 'all' | 'complaints'>('all');
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);

  // Filter posts dynamically
  const filteredPosts = communityPosts.filter(post => {
    // 1. Tab filter
    if (activeTab === 'ward') {
      if (post.author !== profile.name) return false;
    } else if (activeTab === 'complaints') {
      const keywords = ['complaint', 'light', 'pothole', 'garbage', 'road', 'leakage', 'water', 'sewage', 'safety', 'infrastructure'];
      const contentLower = post.content.toLowerCase();
      const categoryLower = post.category ? post.category.toLowerCase() : '';
      const matchesKeyword = keywords.some(k => contentLower.includes(k) || categoryLower.includes(k));
      if (!matchesKeyword) return false;
    }

    // 2. Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchesSearch = post.content.toLowerCase().includes(q) || 
                            post.author.toLowerCase().includes(q);
      if (!matchesSearch) return false;
    }

    return true;
  });

  return (
    <div className={`flex-grow flex flex-col justify-between relative select-none h-full ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll Area */}
      <div className="flex-grow overflow-y-auto p-5 space-y-4 pb-20">
        
        {/* Header */}
        <div className="flex justify-between items-center h-10 border-b border-slate-100 dark:border-neutral-900 pb-2">
          {showSearch ? (
            <div className="flex-grow flex items-center gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search posts or authors..."
                className={`w-full p-2.5 text-xs font-semibold rounded-btn border focus:outline-none focus:border-primary ${
                  theme === 'dark' ? 'bg-[#181818] border-neutral-850 text-white' : 'bg-white border-slate-205 text-slate-800'
                }`}
                autoFocus
              />
              <button 
                onClick={() => {
                  setShowSearch(false);
                  setSearchQuery('');
                }}
                className="text-xs text-slate-400 font-bold p-1 hover:text-slate-650"
              >
                ✕
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-md font-black text-slate-800 dark:text-white">Community Feed</h2>
              <div className="flex gap-3">
                <button 
                  onClick={() => setShowSearch(true)}
                  className="p-1 hover:text-primary transition"
                >
                  <span className="text-sm">🔍</span>
                </button>
                <button 
                  onClick={() => setShowNotifications(true)}
                  className="p-1 hover:text-primary transition relative"
                >
                  <span className="text-sm">🔔</span>
                  <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
                </button>
              </div>
            </>
          )}
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
          {filteredPosts.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-400 font-bold border border-dashed rounded-xl mt-4">
              {activeTab === 'ward' 
                ? "You haven't posted anything yet! Click the '+' button to write your first community post."
                : "No posts found matching search queries or filters."}
            </div>
          ) : (
            filteredPosts.map((post) => (
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
                    <p className="text-[9px] text-slate-400 dark:text-neutral-500 font-bold mt-0.5">{(post as any).ward || "Avadi Ward"} • {post.time}</p>
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
                {(post as any).sharesCount > 0 && (
                  <button className="flex items-center gap-1.5 hover:text-primary font-bold active:scale-95 transition">
                    <span>➡️</span>
                    <span>{(post as any).sharesCount}</span>
                  </button>
                )}
            </div>
          </div>
        )))}
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
        <button onClick={() => navigate('/home')} className="flex flex-col items-center justify-center flex-1 opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-md">🏠</span>
          <span className="text-[9px] font-bold mt-1">Home</span>
        </button>
        <button onClick={() => navigate('/civic')} className="flex flex-col items-center justify-center flex-1 opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-md">📄</span>
          <span className="text-[9px] font-bold mt-1">Complaints</span>
        </button>
        <button onClick={() => navigate('/explore')} className="flex flex-col items-center justify-center flex-1 opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-md">🧭</span>
          <span className="text-[9px] font-bold mt-1">Explore</span>
        </button>
        <button className="flex flex-col items-center justify-center flex-1 text-[#4A3AFF]">
          <span className="text-md bg-[#4A3AFF]/10 px-4 py-0.5 rounded-full">👥</span>
          <span className="text-[9px] font-bold mt-1">Feed</span>
        </button>
      </div>
      {showNotifications && (
        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-end animate-fade-in text-left">
          <div className={`w-72 h-full p-5 flex flex-col justify-between shadow-2xl border-l relative ${
            theme === 'dark' ? 'bg-[#181818] text-white border-l-neutral-850' : 'bg-white text-slate-800 border-l-slate-150'
          }`}>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-3 border-slate-100 dark:border-neutral-800">
                <h3 className="text-xs font-black uppercase tracking-wider">Alerts & Notifications</h3>
                <button type="button" onClick={() => setShowNotifications(false)} className="text-slate-405 hover:text-slate-655 font-bold">✕ Close</button>
              </div>

              <div className="space-y-3.5 divide-y divide-slate-100 dark:divide-neutral-800">
                <div className="pt-0 flex items-start gap-2.5">
                  <span className="text-sm mt-0.5">🔔</span>
                  <div className="space-y-0.5 leading-snug">
                    <p className="text-[9.5px] font-black">Sewage Overflow Resolved</p>
                    <p className="text-[8.5px] text-slate-500">Ward 12 Councillor Selvi updated status to RESOLVED for AVD12-2025-0008.</p>
                    <span className="text-[7.5px] text-slate-400 font-bold block mt-0.5">10 minutes ago</span>
                  </div>
                </div>

                <div className="pt-3.5 flex items-start gap-2.5">
                  <span className="text-sm mt-0.5">⚠️</span>
                  <div className="space-y-0.5 leading-snug">
                    <p className="text-[9.5px] font-black text-amber-500">Pothole Under Review</p>
                    <p className="text-[8.5px] text-slate-500">Fast Track Highways Dept assigned inspector for Railway Station Road pothole.</p>
                    <span className="text-[7.5px] text-slate-400 font-bold block mt-0.5">1 hour ago</span>
                  </div>
                </div>

                <div className="pt-3.5 flex items-start gap-2.5">
                  <span className="text-sm mt-0.5">💼</span>
                  <div className="space-y-0.5 leading-snug">
                    <p className="text-[9.5px] font-black text-blue-500">Application Status Update</p>
                    <p className="text-[8.5px] text-slate-500">Ace Communications viewed your profile for Sales Executive opening.</p>
                    <span className="text-[7.5px] text-slate-400 font-bold block mt-0.5">2 hours ago</span>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setShowNotifications(false)}
              className="w-full py-2.5 bg-slate-100 dark:bg-neutral-800 hover:bg-slate-200 text-[9px] font-black uppercase rounded-btn text-center"
            >
              Clear All Alerts
            </button>
          </div>
        </div>
      )}
    </div>
  );
};


export const ReportIssueStep1Screen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { id: 'light', name: 'Street Light', icon: '💡' },
    { id: 'water', name: 'Water Issue', icon: '💧' },
    { id: 'garbage', name: 'Garbage', icon: '🗑️', color: 'text-emerald-500' },
    { id: 'drain', name: 'Drainage', icon: '🕳️' },
    { id: 'road', name: 'Road Damage', icon: '🚧' },
    { id: 'other', name: 'Others', icon: '🔧' }
  ];

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none h-full ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Header */}
      <div className="h-8 flex items-center gap-2 text-left">
        <button 
          onClick={() => navigate('/civic')}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-xs font-black text-slate-855 dark:text-white">Report Complaint</span>
      </div>

      {/* Title */}
      <div className="text-left mt-2">
        <span className="text-[9px] font-bold text-slate-400 block">Step 1 of 2</span>
        <h3 className="text-xs font-black text-slate-800 dark:text-white mt-1">Select Issue Category</h3>
      </div>

      {/* Grid Categories */}
      <div className="flex-1 flex flex-col justify-center my-4">
        <div className="grid grid-cols-2 gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`p-4.5 rounded-card border shadow-3xs flex flex-col items-center justify-center gap-2.5 h-24 active:scale-95 transition ${
                selectedCategory === cat.id
                  ? 'border-[#4A3AFF] bg-[#4A3AFF]/5'
                  : theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <span className={`text-xl ${cat.color || ''}`}>{cat.icon}</span>
              <span className="text-[9.5px] font-extrabold">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <div className="mb-2">
        <button
          onClick={() => navigate('/complaints/category-details')}
          disabled={!selectedCategory}
          className={`w-full py-3.5 font-bold rounded-btn text-xs uppercase tracking-wider text-center ${
            selectedCategory
              ? 'bg-[#4A3AFF] text-white hover:bg-[#3b2ecc] shadow-md'
              : 'bg-slate-350 dark:bg-neutral-800 text-white/50 cursor-not-allowed shadow-none'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export const ReportIssueStep2Screen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [description, setDescription] = useState('');

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none h-full ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Header */}
      <div className="h-8 flex items-center gap-2 text-left">
        <button 
          onClick={() => navigate('/complaints/camera')}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-xs font-black text-slate-855 dark:text-white">Report Complaint</span>
      </div>

      {/* Title */}
      <div className="text-left mt-2">
        <span className="text-[9px] font-bold text-slate-400 block">Step 2 of 2</span>
        <h3 className="text-xs font-black text-slate-800 dark:text-white mt-1">Describe the Issue</h3>
      </div>

      {/* Form Content */}
      <div className="flex-1 flex flex-col justify-center space-y-4 my-4 text-left">
        {/* Description */}
        <div className="space-y-1">
          <label className="text-[9px] font-black uppercase tracking-wide text-slate-400 dark:text-neutral-500">Description *</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the problem in detail..."
            rows={3.5}
            className={`w-full p-3.5 text-xs font-semibold rounded-btn border focus:outline-none focus:border-[#4A3AFF] resize-none ${
              theme === 'dark' 
                ? 'bg-neutral-900 border-neutral-805 text-white' 
                : 'bg-white border-slate-200 text-slate-800'
            }`}
            required
          />
        </div>

        {/* Upload Photos */}
        <div className="space-y-1.5">
          <label className="text-[9px] font-black uppercase tracking-wide text-slate-400 dark:text-neutral-500">Upload Photos (Max 3)</label>
          <div className="flex gap-2.5">
            <button type="button" className="w-12 h-12 rounded-xl border border-dashed border-slate-300 dark:border-neutral-800 flex items-center justify-center text-slate-400 hover:border-[#4A3AFF] transition bg-white dark:bg-neutral-955">
              <span className="text-sm">📷</span>
            </button>
            <button type="button" className="w-12 h-12 rounded-xl border border-dashed border-slate-300 dark:border-neutral-800 flex items-center justify-center text-slate-400 hover:border-[#4A3AFF] transition bg-white dark:bg-neutral-955">
              <span className="text-sm">📷</span>
            </button>
            <button type="button" className="w-12 h-12 rounded-xl border border-dashed border-slate-300 dark:border-neutral-800 flex items-center justify-center text-slate-400 hover:border-[#4A3AFF] transition bg-white dark:bg-neutral-955">
              <span className="text-sm">📷</span>
            </button>
          </div>
        </div>

        {/* Area/Tag */}
        <div className="space-y-1">
          <label className="text-[9px] font-black uppercase tracking-wide text-slate-400 dark:text-neutral-500">Area/ Tag</label>
          <div className={`w-full p-3.5 text-xs font-semibold rounded-btn border flex justify-between items-center cursor-pointer ${
            theme === 'dark' ? 'bg-neutral-900 border-neutral-805 text-white' : 'bg-white border-slate-200 text-slate-405'
          }`}>
            <span>Select Tag</span>
            <span className="text-[10px] opacity-70">▼</span>
          </div>
        </div>

        {/* Ward */}
        <div className="space-y-1">
          <label className="text-[9px] font-black uppercase tracking-wide text-slate-400 dark:text-neutral-500">Ward</label>
          <div className={`w-full p-3.5 text-xs font-semibold rounded-btn border flex justify-between items-center cursor-pointer ${
            theme === 'dark' ? 'bg-neutral-900 border-neutral-805 text-white' : 'bg-white border-slate-200 text-slate-805'
          }`}>
            <span>Ward 12</span>
            <span className="text-[10px] opacity-70">▼</span>
          </div>
        </div>
      </div>

      {/* Submit button */}
      <div className="mb-2">
        <button
          onClick={() => navigate('/complaints/submitted')}
          className="w-full py-3.5 bg-[#FF3B30] hover:bg-[#e03126] text-white font-bold rounded-btn text-xs uppercase tracking-wider text-center"
        >
          Submit Report
        </button>
      </div>
    </div>
  );
};

export const IssueSubmittedScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none h-full ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Spacer */}
      <div className="h-8" />

      {/* Content Center */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-4">
        {/* Green check icon */}
        <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-600">
          <span className="text-3xl">✔</span>
        </div>
        
        <h2 className="text-md font-black text-center text-slate-800 dark:text-white px-2">
          Complaint Submitted Successfully!
        </h2>
        
        <p className="text-[10px] text-slate-450 dark:text-neutral-500 font-semibold text-center max-w-[240px] leading-relaxed">
          Your issue has been recorded successfully.
        </p>

        {/* Complaint ID */}
        <div className="py-2.5 px-6 border border-slate-100 dark:border-neutral-800 rounded-xl bg-slate-50 dark:bg-neutral-900 text-center">
          <span className="text-[9px] font-bold text-slate-400 block uppercase tracking-wide">Complaint ID</span>
          <span className="text-xs font-black text-slate-805 dark:text-white mt-1 block">AVD12-2025-0192</span>
        </div>

        <p className="text-[9px] text-slate-400 dark:text-neutral-500 font-medium text-center">
          We will notify you about the updates.
        </p>
      </div>

      {/* Go to complaints */}
      <div className="mb-2">
        <button
          onClick={() => navigate('/complaints')}
          className="w-full py-3.5 bg-[#4A3AFF] hover:bg-[#3b2ecc] text-white font-bold rounded-btn text-xs uppercase tracking-wider text-center"
        >
          Go to My Complaints
        </button>
      </div>
    </div>
  );
};

// LOCAL ALERTS SCREEN
export const AlertsScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme, language, alerts } = useApp();
  const [expandedAlertId, setExpandedAlertId] = useState<string | null>(null);

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'weather': return '🌧️';
      case 'traffic': return '🚧';
      case 'utility': return '⚡';
      default: return '📢';
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'text-red-605 bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900/50';
      case 'medium':
        return 'text-amber-600 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900/50';
      default:
        return 'text-blue-600 bg-blue-50 dark:bg-blue-955/30 border-blue-200 dark:border-blue-900/50';
    }
  };

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scrollable Container */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header */}
        <div className="flex justify-between items-center h-8">
          <button 
            onClick={() => navigate('/home')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-xs font-black text-slate-850 dark:text-white font-sans">
            {language === 'en' ? 'Local Alerts' : 'உள்ளூர் எச்சரிக்கைகள்'}
          </span>
          <div className="w-6 h-6" /> {/* spacer */}
        </div>

        {/* Alerts List */}
        <div className="space-y-3.5 pt-2">
          {alerts.map((alert) => {
            const isExpanded = expandedAlertId === alert.id;
            return (
              <div
                key={alert.id}
                onClick={() => setExpandedAlertId(isExpanded ? null : alert.id)}
                className={`p-4 rounded-card border shadow-3xs transition-all duration-200 cursor-pointer ${
                  theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-150'
                }`}
              >
                <div className="flex justify-between items-start gap-3">
                  <div className="flex gap-3 items-center">
                    <span className="text-xl shrink-0">{getAlertIcon(alert.type)}</span>
                    <div className="space-y-0.5 leading-tight">
                      <h4 className="text-[11px] font-extrabold pr-2">
                        {language === 'en' ? alert.title : alert.titleTa}
                      </h4>
                      <p className="text-[8px] text-slate-400 dark:text-neutral-505 font-bold mt-0.5">
                        {alert.date} • {alert.time}
                      </p>
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 text-[7px] font-black uppercase tracking-wider rounded-full border ${getSeverityBadge(alert.severity)}`}>
                    {alert.severity}
                  </span>
                </div>

                {isExpanded && (
                  <div className="mt-3 pt-3 border-t border-slate-100 dark:border-neutral-800/60 space-y-3 text-[10px] animate-fade-in">
                    <p className="leading-relaxed font-semibold text-slate-600 dark:text-neutral-300">
                      {language === 'en' ? alert.description : alert.descriptionTa}
                    </p>
                    {alert.guidelines && alert.guidelines.length > 0 && (
                      <div className="space-y-1">
                        <h5 className="font-black text-slate-400 uppercase text-[8px] tracking-wider">
                          {language === 'en' ? 'Guidelines' : 'வழிமுறைகள்'}
                        </h5>
                        <ul className="list-disc pl-4 space-y-1 font-bold text-slate-500 dark:text-neutral-400">
                          {alert.guidelines.map((g, idx) => (
                            <li key={idx}>{g}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// THEME SELECTION SCREEN
// ==========================================
export const ThemeSelectionScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useApp();
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark' | null>(null);
  const [showFlash, setShowFlash] = useState(false);

  const handleApply = () => {
    if (selectedTheme === 'light') {
      setTheme('light');
      navigate('/home');
    } else if (selectedTheme === 'dark') {
      setShowFlash(true);
      setTimeout(() => {
        setTheme('dark');
        navigate('/home');
      }, 600);
    }
  };

  const handleSelectTheme = (mode: 'light' | 'dark') => {
    setSelectedTheme(mode);
  };


  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none h-full relative overflow-hidden ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Brightening Flash overlay for Dark Mode transition */}
      {showFlash && (
        <div className="absolute inset-0 z-50 bg-white/95 animate-flash-bright transition-all" />
      )}

      {/* Header back */}
      <div className="h-8 flex items-center gap-2">
        <button 
          onClick={() => navigate('/register/address')}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-xs font-black text-slate-805 dark:text-white">Choose App Theme</span>
      </div>

      {/* Theme Choice Cards */}
      <div className="flex-grow flex flex-col justify-center space-y-6 my-6">
        <div className="text-center space-y-2 mb-4">
          <h2 className="text-md font-black text-slate-805 dark:text-white uppercase tracking-wider">Choose Theme</h2>
          <p className="text-[10px] text-slate-400 dark:text-neutral-500 font-semibold">
            Select your preferred display theme for Avadi Connect.
          </p>
        </div>

        <div className="flex gap-4">
          {/* Light Mode Card */}
          <div 
            onClick={() => handleSelectTheme('light')}
            className={`flex-1 p-5 rounded-btn border text-center flex flex-col items-center justify-center cursor-pointer transition-all active:scale-98 ${
              selectedTheme === 'light'
                ? 'border-[#4A3AFF] bg-[#4A3AFF]/5 dark:bg-[#4A3AFF]/10 ring-1 ring-[#4A3AFF]/30'
                : theme === 'dark' ? 'bg-neutral-900 border-neutral-850 text-white' : 'bg-white border-slate-200 text-slate-800 shadow-3xs'
            }`}
          >
            <span className="text-2xl mb-2">☀️</span>
            <span className="text-xs font-black uppercase tracking-wider block">Light Mode</span>
            <span className="text-[8.5px] text-slate-400 dark:text-neutral-500 mt-1 font-bold">Classic bright interface</span>
          </div>

          {/* Dark Mode Card */}
          <div 
            onClick={() => handleSelectTheme('dark')}
            className={`flex-1 p-5 rounded-btn border text-center flex flex-col items-center justify-center cursor-pointer transition-all active:scale-98 ${
              selectedTheme === 'dark'
                ? 'border-[#4A3AFF] bg-[#4A3AFF]/5 dark:bg-[#4A3AFF]/10 ring-1 ring-[#4A3AFF]/30'
                : theme === 'dark' ? 'bg-neutral-900 border-neutral-850 text-white' : 'bg-white border-slate-200 text-slate-800 shadow-3xs'
            }`}
          >
            <span className="text-2xl mb-2">🌙</span>
            <span className="text-xs font-black uppercase tracking-wider block">Dark Mode</span>
            <span className="text-[8.5px] text-slate-400 dark:text-neutral-500 mt-1 font-bold">Sleek dark interface</span>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="h-16 flex items-center justify-center">
        {selectedTheme && (
          <button
            onClick={handleApply}
            className="w-full py-3.5 bg-[#4A3AFF] text-white font-bold rounded-btn text-xs uppercase tracking-wider text-center shadow-md animate-pulse active:scale-98 transition duration-150"
          >
            Apply
          </button>
        )}
      </div>
    </div>
  );
};