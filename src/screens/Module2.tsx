import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { 
  ChevronLeft, 
  Search, 
  Check,
  AlertTriangle,
  Info,
  Droplet,
  Heart,
  Users,
  Compass,
  Bell,
  MapPin,
  RefreshCw,
  Phone,
  PhoneCall,
  PhoneOff,
  Building,
  GraduationCap,
  Wrench,
  Bus,
  Grid,
  Shield,
  CloudRain,
  Flame,
  Globe,
  FileText,
  Share2,
  Bookmark,
  Moon,
  Sun
} from 'lucide-react';

// ==========================================
// SCREEN 17 — SOS EMERGENCY SCREEN
// ==========================================
export const SOSEmergencyScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme, language } = useApp();
  const [countdown, setCountdown] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  const [calling, setCalling] = useState(false);
  const [callDuration, setCallDuration] = useState(0);

  useEffect(() => {
    if (countdown === null) return;
    if (countdown === 0) {
      setCalling(true);
      setCountdown(null);
      return;
    }
    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  // Call timer simulation
  useEffect(() => {
    let interval: any;
    if (calling) {
      interval = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
    } else {
      setCallDuration(0);
    }
    return () => clearInterval(interval);
  }, [calling]);

  const formatDuration = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartSOS = () => {
    setCountdown(3);
  };

  const handleCancelSOS = () => {
    setCountdown(null);
  };

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none relative transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Header */}
      <div className="h-10 flex justify-between items-center">
        <button 
          onClick={() => navigate(-1)}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-xs font-bold uppercase tracking-wider">
          {language === 'en' ? "SOS Emergency" : "SOS அவசரநிலை"}
        </span>
        <button className="p-1 text-slate-400">
          <Info size={18} />
        </button>
      </div>

      {/* Main SOS button circle area */}
      <div className="flex-1 flex flex-col items-center justify-center text-center py-6">
        
        {calling ? (
          <div className="flex flex-col items-center justify-center text-center animate-fade-in w-full max-w-xs space-y-6">
            <div className="relative w-36 h-36 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping"></div>
              <div className="absolute inset-3 rounded-full bg-emerald-600 flex items-center justify-center shadow-lg text-white">
                <PhoneCall size={48} className="animate-bounce" />
              </div>
            </div>
            
            <div className="space-y-1">
              <h3 className="text-md font-black text-emerald-500 tracking-wider uppercase">
                Calling Emergency Command Room
              </h3>
              <p className="text-xl font-bold font-mono tracking-widest text-slate-800 dark:text-white">
                112 / +91 44 2637 1234
              </p>
              <p className="text-xs font-bold text-slate-400 dark:text-neutral-500 font-mono">
                Duration: {formatDuration(callDuration)}
              </p>
            </div>

            <p className="text-[10px] text-slate-450 dark:text-neutral-550 font-bold leading-normal">
              Sharing live GPS location and medical profile with the nearest rescue dispatch team...
            </p>

            <button 
              onClick={() => {
                setCalling(false);
                setSent(true);
                setTimeout(() => {
                  setSent(false);
                  navigate('/home');
                }, 2000);
              }}
              className="px-6 py-2.5 bg-red-600 hover:bg-red-700 active:scale-95 transition text-white text-[11px] font-black tracking-widest rounded-full uppercase shadow-md flex items-center gap-2"
            >
              <PhoneOff size={14} /> End Call
            </button>
          </div>
        ) : countdown === null && !sent ? (
          <>
            {/* Pulsing button mockup */}
            <div className="relative w-48 h-48 flex items-center justify-center mb-6">
              {/* Outer pulsing ring */}
              <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping"></div>
              {/* Inner glowing ring */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-red-500 to-rose-600 shadow-[0_0_30px_rgba(239,68,68,0.4)] flex items-center justify-center">
                <button 
                  onClick={handleStartSOS}
                  className="w-40 h-40 rounded-full bg-red-600 active:scale-95 transition flex items-center justify-center text-white text-3xl font-black tracking-widest shadow-inner"
                >
                  SOS
                </button>
              </div>
            </div>

            <h3 className="text-md font-black text-red-500 tracking-wide uppercase">
              {language === 'en' ? "Tap to Send SOS" : "SOS அனுப்ப தட்டவும்"}
            </h3>
            <p className="text-[11px] text-slate-400 dark:text-neutral-500 mt-2 max-w-xs leading-relaxed font-semibold">
              {language === 'en' 
                ? "Your alert will be sent to emergency contacts and local authorities." 
                : "உங்கள் அவசர எச்சரிக்கை தொடர்புகளுக்கும் உள்ளூர் அதிகாரிகளுக்கும் அனுப்பப்படும்."}
            </p>
          </>
        ) : countdown !== null ? (
          <div className="flex flex-col items-center justify-center">
            {/* Countdown visual circle */}
            <div className="w-44 h-44 rounded-full border-4 border-red-500/30 flex items-center justify-center mb-6 relative">
              <span className="text-5xl font-black text-red-500 animate-pulse">{countdown}</span>
              <div className="absolute inset-0 rounded-full border-4 border-t-red-500 animate-spin"></div>
            </div>
            <h3 className="text-md font-bold text-red-500">
              {language === 'en' ? "Broadcasting SOS in..." : "SOS ஒளிபரப்பப்படுகிறது..."}
            </h3>
            <button 
              onClick={handleCancelSOS}
              className="mt-6 px-6 py-2 rounded-full bg-slate-200 dark:bg-neutral-800 text-xs font-bold active:scale-95 transition"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-300 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6">
              <Check size={40} strokeWidth={3.5} />
            </div>
            <h3 className="text-lg font-black text-emerald-500 leading-snug">
              {language === 'en' ? "Emergency Alert Sent!" : "அவசர எச்சரிக்கை அனுப்பப்பட்டது!"}
            </h3>
            <p className="text-xs text-slate-450 dark:text-neutral-500 mt-2 font-semibold">
              Authorities are notified. Returning home.
            </p>
          </div>
        )}

      </div>

      {/* Emergency Contacts Card list */}
      <div 
        onClick={() => navigate('/emergency-contact/1')}
        className={`p-4 rounded-card border shadow-2xs cursor-pointer hover:scale-[1.002] active:scale-98 transition ${
          theme === 'dark' ? 'bg-[#181818] border-neutral-800/80' : 'bg-white border-slate-150'
        }`}
      >
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-xs font-black">
              {language === 'en' ? "Emergency Contacts" : "அவசர கால தொடர்புகள்"}
            </h4>
            {/* List of mock avatars */}
            <div className="flex items-center gap-1.5 mt-2.5">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=40" alt="Contact 1" className="w-6 h-6 rounded-full border border-white dark:border-neutral-900 object-cover" />
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=40" alt="Contact 2" className="w-6 h-6 rounded-full border border-white dark:border-neutral-900 object-cover -ml-2" />
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=40" alt="Contact 3" className="w-6 h-6 rounded-full border border-white dark:border-neutral-900 object-cover -ml-2" />
              <div className="w-6 h-6 rounded-full bg-primary text-white text-[8px] font-black flex items-center justify-center border border-white dark:border-neutral-900 -ml-2 shadow-2xs">
                +5
              </div>
            </div>
          </div>
          <span className="text-slate-350 text-sm">▶</span>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// SCREEN 18 — RECENT ALERTS SCREEN
// ==========================================
export const RecentAlertsScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme, language } = useApp();
  const [activeFilter, setActiveFilter] = useState<'all' | 'safety' | 'traffic' | 'weather'>('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const alerts = [
    { id: 1, title: 'Heavy Rain Alert', desc: 'Moderate to heavy rain expected in Avadi today.', time: 'May 15, 2025 • 10:30 AM', cat: 'weather', icon: <CloudRain size={16} />, color: 'bg-red-100 dark:bg-red-950/40 text-red-500 dark:text-red-400' },
    { id: 2, title: 'Traffic Diversion', desc: 'Diversion near Poonamallee High Road due to water logging.', time: 'May 15, 2025 • 09:15 AM', cat: 'traffic', icon: <AlertTriangle size={16} />, color: 'bg-amber-100 dark:bg-amber-955/40 text-amber-600 dark:text-amber-400' },
    { id: 3, title: 'Power Cut Update', desc: 'Scheduled power interruption in parts of Avadi West.', time: 'May 14, 2025 • 06:45 PM', cat: 'safety', icon: <Flame size={16} />, color: 'bg-yellow-100 dark:bg-yellow-950/40 text-yellow-500 dark:text-yellow-400' }
  ];

  const filteredAlerts = alerts.filter(a => activeFilter === 'all' || a.cat === activeFilter);

  const handleActionClick = () => {
    setToastMessage("All alerts history locked under Phase 2.");
    setTimeout(() => setToastMessage(null), 2000);
  };

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none relative transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll area */}
      <div className="flex-grow overflow-y-auto space-y-4 pb-14">
        
        {/* Header */}
        <div className="flex justify-between items-center h-10">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate(-1)}
              className="p-1 rounded-full text-slate-400 hover:text-primary transition"
            >
              <ChevronLeft size={20} />
            </button>
            <h2 className="text-md font-black">Recent Alerts</h2>
          </div>
          <span className="text-[10px] font-bold text-slate-400 dark:text-neutral-500 uppercase tracking-widest">Filter ▽</span>
        </div>

        {/* Categories Tab selector */}
        <div className="flex gap-2 text-[10px] font-bold">
          {['all', 'safety', 'traffic', 'weather'].map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f as any)}
              className={`px-3 py-1.5 rounded-full transition border uppercase tracking-wider cursor-pointer hover:opacity-90 active:scale-95 ${
                activeFilter === f 
                  ? 'bg-primary text-white border-primary shadow-xs' 
                  : 'bg-white dark:bg-neutral-900 border-slate-200 dark:border-neutral-800 text-slate-650 dark:text-neutral-300'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Alert Cards list */}
        <div className="space-y-3 mt-1">
          {filteredAlerts.map(a => (
            <div
              key={a.id}
              onClick={() => navigate(`/alerts/${a.id}`)}
              className={`p-4 rounded-card border flex flex-col gap-2.5 shadow-2xs cursor-pointer hover:scale-[1.002] active:scale-98 transition ${
                theme === 'dark' ? 'bg-[#181818] border-neutral-800' : 'bg-white border-slate-150'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${a.color}`}>
                  {a.icon}
                </div>
                <div>
                  <h4 className="text-xs font-black leading-tight text-red-500">{a.title}</h4>
                  <span className="text-[9px] text-slate-400 dark:text-neutral-500 font-bold">{a.time}</span>
                </div>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-650 dark:text-neutral-300 font-semibold">
                {a.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Actions */}
      <div className="mb-2">
        <button
          onClick={handleActionClick}
          className="w-full py-4 bg-gradient-to-r from-primary to-[#5b7eff] text-white font-bold rounded-btn shadow-md hover:scale-101 active:scale-95 transition-all duration-200 text-sm"
        >
          View All Alerts
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
// SCREEN 19 — SERVICE DIRECTORY SCREEN
// ==========================================
export const ServiceDirectoryScreen: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const searchParams = new URLSearchParams(location.search);
  const selectedCategory = searchParams.get('category') || location.state?.category;

  const categories = [
    { key: 'government', title: 'Government Services', sub: '12 Services', icon: <Building size={16} />, color: 'text-blue-500 bg-blue-100 dark:bg-blue-950/40' },
    { key: 'health', title: 'Health Services', sub: '8 Services', icon: <Heart size={16} />, color: 'text-red-500 bg-red-100 dark:bg-red-950/40' },
    { key: 'education', title: 'Education Services', sub: '10 Services', icon: <GraduationCap size={16} />, color: 'text-purple-500 bg-purple-100 dark:bg-purple-950/40' },
    { key: 'utility', title: 'Utility Services', sub: '6 Services', icon: <Wrench size={16} />, color: 'text-amber-500 bg-amber-100 dark:bg-amber-950/40' },
    { key: 'transport', title: 'Transport Services', sub: '7 Services', icon: <Bus size={16} />, color: 'text-green-500 bg-green-100 dark:bg-green-950/40' },
    { key: 'other', title: 'Other Services', sub: '9 Services', icon: <Grid size={16} />, color: 'text-indigo-500 bg-indigo-100 dark:bg-indigo-950/40' }
  ];

  const providersList = [
    { id: 'gov1', category: 'government', name: 'Ward 3 Corporation Office', sub: 'Grievance Redressal, Taxes & Birth Certificate Assistance', rating: '4.4', distance: '0.8 km' },
    { id: 'gov2', category: 'government', name: 'E-Seva Center Avadi', sub: 'Aadhaar, PAN & Government Certificate enrollment services', rating: '4.1', distance: '1.2 km' },
    { id: 'health1', category: 'health', name: 'Avadi Government Hospital', sub: '24/7 Accident Trauma & General OP wards', rating: '4.2', distance: '1.5 km' },
    { id: 'health2', category: 'health', name: 'Apollo Pharmacy Avadi', sub: 'All medicines, healthcare products & home delivery', rating: '4.6', distance: '0.5 km' },
    { id: 'edu1', category: 'education', name: 'Avadi Municipal Primary School', sub: 'Primary education under corporation guidelines', rating: '4.5', distance: '1.1 km' },
    { id: 'edu2', category: 'education', name: 'Public Library & Study Hall', sub: 'Books, newspapers and quiet preparation spaces', rating: '4.3', distance: '2.0 km' },
    { id: 'util1', category: 'utility', name: 'Electrician Ravi Kumar', sub: 'House wiring, fan/inverter installation & repairs', rating: '4.8', distance: '0.7 km' },
    { id: 'util2', category: 'utility', name: 'Plumber Kumar & Co', sub: 'Pipeline leakages, motor repairs & borewell services', rating: '4.5', distance: '1.4 km' },
    { id: 'trans1', category: 'transport', name: 'Avadi Bus Stand Helpdesk', sub: 'City bus schedules, routes & timing information', rating: '4.0', distance: '0.2 km' },
    { id: 'trans2', category: 'transport', name: 'Avadi Station Taxi Stand', sub: 'Local taxi bookings & tourist vehicle services', rating: '4.2', distance: '0.1 km' },
    { id: 'oth1', category: 'other', name: 'Carpenter Suresh', sub: 'Furniture repair, modular kitchen assembly & door fittings', rating: '4.7', distance: '1.6 km' }
  ];

  const filteredProviders = providersList.filter(p => 
    p.category === selectedCategory && 
    (p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.sub.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const triggerToast = () => {
    setToastMessage("Service listings locked under Phase 2.");
    setTimeout(() => setToastMessage(null), 2000);
  };

  const currentCategoryObj = categories.find(c => c.key === selectedCategory);

  if (selectedCategory) {
    return (
      <div className={`flex-grow flex flex-col justify-between p-6 select-none relative transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
      }`}>
        <div className="flex-grow overflow-y-auto space-y-4 pb-14 text-xs pr-1">
          <div className="flex justify-between items-center h-10">
            <div className="flex items-center gap-2">
              <button 
                onClick={() => navigate('/services')}
                className="p-1 rounded-full text-slate-400 hover:text-primary transition"
              >
                <ChevronLeft size={20} />
              </button>
              <h2 className="text-md font-black">{currentCategoryObj?.title || 'Local Services'}</h2>
            </div>
            <button className="p-1 text-slate-400">
              <Search size={18} />
            </button>
          </div>

          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${currentCategoryObj?.title || 'services'}...`}
              className={`w-full p-3.5 pr-10 text-xs font-semibold rounded-btn border focus:outline-none focus:border-primary ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-805 text-white' : 'bg-white border-slate-200 text-slate-850'
              }`}
            />
            <Search size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>

          <div className="space-y-3 mt-1">
            {filteredProviders.length === 0 ? (
              <div className="text-center py-10 text-slate-450 font-bold">No services found under this category.</div>
            ) : (
              filteredProviders.map(p => (
                <div
                  key={p.id}
                  onClick={() => navigate(`/services/${p.id}`)}
                  className={`p-4 rounded-card border flex gap-3.5 items-center justify-between cursor-pointer shadow-2xs hover:scale-[1.002] active:scale-98 transition ${
                    theme === 'dark' ? 'bg-[#181818] border-neutral-800' : 'bg-white border-slate-150'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl flex-shrink-0 animate-pulse">
                      🛠️
                    </div>
                    <div>
                      <h4 className="text-xs font-bold leading-tight">{p.name}</h4>
                      <p className="text-[9px] text-slate-400 mt-1 max-w-[200px] leading-snug font-semibold">{p.sub}</p>
                      <div className="text-[8px] text-slate-400 mt-1">⭐ {p.rating} • {p.distance} away</div>
                    </div>
                  </div>
                  <span className="text-xs text-slate-350">▶</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }

  const filteredCategories = categories.filter(c => 
    c.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none relative transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      <div className="flex-grow overflow-y-auto space-y-4 pb-14">
        <div className="flex justify-between items-center h-10">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate('/explore')}
              className="p-1 rounded-full text-slate-400 hover:text-primary transition"
            >
              <ChevronLeft size={20} />
            </button>
            <h2 className="text-md font-black">Service Directory</h2>
          </div>
          <button className="p-1 text-slate-400">
            <Search size={18} />
          </button>
        </div>

        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search service category..."
            className={`w-full p-3.5 pr-10 text-xs font-semibold rounded-btn border focus:outline-none focus:border-primary ${
              theme === 'dark' 
                ? 'bg-neutral-900 border-neutral-805 text-white' 
                : 'bg-white border-slate-200 text-slate-850'
            }`}
          />
          <Search size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        </div>

        <div className="space-y-2.5 mt-2 max-h-[380px] overflow-y-auto pr-1">
          {filteredCategories.map(s => (
            <button
              key={s.key}
              onClick={() => navigate(`/services?category=${s.key}`)}
              className={`w-full text-left p-3.5 rounded-card border flex items-center justify-between shadow-2xs hover:scale-[1.005] duration-150 ${
                theme === 'dark' ? 'bg-[#181818] border-neutral-800' : 'bg-white border-slate-150'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-3xs ${s.color}`}>
                  {s.icon}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-white leading-tight">{s.title}</h4>
                  <span className="text-[9px] font-bold text-slate-400 dark:text-neutral-500">{s.sub}</span>
                </div>
              </div>
              <span className="text-slate-350 text-xs">▶</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-2">
        <button
          onClick={() => navigate('/explore')}
          className="w-full py-4 bg-gradient-to-r from-primary to-[#5b7eff] text-white font-bold rounded-btn shadow-md hover:scale-101 active:scale-95 transition-all duration-200 text-sm"
        >
          Explore All Services
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
// SCREEN 20 — LIVE UPDATES SCREEN
// ==========================================
export const LiveUpdatesScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [activeTab, setActiveTab] = useState<'all' | 'traffic' | 'rain' | 'power'>('all');
  const [refreshing, setRefreshing] = useState(false);
  
  // Set up seed data list
  const [updates, setUpdates] = useState([
    { id: 1, title: 'Traffic Update', desc: 'Slow traffic near Avadi Market Road due to construction.', time: '2 mins ago', cat: 'traffic', live: true, icon: <Bus size={15} />, color: 'text-blue-500 bg-blue-100 dark:bg-blue-950/40' },
    { id: 2, title: 'Rainfall Update', desc: 'Moderate rainfall recorded in Avadi.', time: '10 mins ago', cat: 'rain', live: true, icon: <CloudRain size={15} />, color: 'text-blue-500 bg-blue-100 dark:bg-blue-950/40' },
    { id: 3, title: 'Power Update', desc: 'Power restored in Sector 7, Avadi.', time: '25 mins ago', cat: 'power', live: false, icon: <Flame size={15} />, color: 'text-amber-500 bg-amber-100 dark:bg-amber-950/40' }
  ]);

  const filteredUpdates = updates.filter(u => activeTab === 'all' || u.cat === activeTab);

  // Simulating Live Update Refresh (random timestamps/content modifications)
  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setUpdates(prev => [
        {
          id: Date.now(),
          title: 'Live Incident',
          desc: 'Simulated fresh status update occurred on main highway sector.',
          time: 'Just now',
          cat: 'traffic',
          live: true,
          icon: <AlertTriangle size={15} />,
          color: 'text-red-500 bg-red-100 dark:bg-red-950/40'
        },
        ...prev.map(u => {
          if (u.time === 'Just now') return { ...u, time: '3 mins ago' };
          if (u.time === '2 mins ago') return { ...u, time: '5 mins ago' };
          return u;
        })
      ]);
    }, 600);
  };

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none relative transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll items */}
      <div className="flex-grow overflow-y-auto space-y-4 pb-14">
        
        {/* Header */}
        <div className="flex justify-between items-center h-10">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate(-1)}
              className="p-1 rounded-full text-slate-400 hover:text-primary transition"
            >
              <ChevronLeft size={20} />
            </button>
            <h2 className="text-md font-black">Live Updates</h2>
          </div>
          <span className="text-[10px] font-bold text-primary hover:underline">See All</span>
        </div>

        {/* Tab filters */}
        <div className="flex gap-2 text-[10px] font-bold">
          {['all', 'traffic', 'rain', 'power'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-3 py-1.5 rounded-full transition border uppercase tracking-wider ${
                activeTab === tab 
                  ? 'bg-primary text-white border-primary shadow-xs' 
                  : 'bg-white dark:bg-neutral-900 border-slate-200 dark:border-neutral-800 text-slate-450 dark:text-neutral-500'
              }`}
            >
              {tab === 'rain' ? 'Rainfall' : tab === 'all' ? 'All' : tab}
            </button>
          ))}
        </div>

        {/* Cards list */}
        <div className="space-y-3 mt-1 max-h-[380px] overflow-y-auto pr-1">
          {filteredUpdates.map(u => (
            <div
              key={u.id}
              className={`p-3.5 rounded-card border flex items-start justify-between shadow-2xs transition-all duration-300 ${
                theme === 'dark' ? 'bg-[#181818] border-neutral-800' : 'bg-white border-slate-150'
              }`}
            >
              <div className="flex gap-3">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${u.color} shrink-0`}>
                  {u.icon}
                </div>
                <div>
                  <h4 className="text-xs font-bold leading-tight">{u.title}</h4>
                  <p className="text-[10px] text-slate-400 dark:text-neutral-500 mt-0.5">{u.time}</p>
                  <p className="text-[11px] leading-relaxed text-slate-650 dark:text-neutral-300 mt-2 font-semibold">
                    {u.desc}
                  </p>
                </div>
              </div>

              {/* Live Badge status pill */}
              {u.live && (
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-[8px] font-black tracking-wide uppercase shrink-0">
                  Live
                </span>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* Action refresh */}
      <div className="mb-2">
        <button
          onClick={handleRefresh}
          disabled={refreshing}
          className="w-full py-4 bg-white dark:bg-neutral-900 text-slate-700 dark:text-white border border-slate-200 dark:border-neutral-800 font-bold rounded-btn shadow-xs hover:bg-slate-50 dark:hover:bg-neutral-850 active:scale-95 transition flex items-center justify-center gap-2 text-sm"
        >
          <RefreshCw size={15} className={`${refreshing ? 'animate-spin text-primary' : 'text-slate-400'}`} />
          <span>{refreshing ? "Refreshing..." : "Refresh"}</span>
        </button>
      </div>
    </div>
  );
};

// ==========================================
// SCREEN 21 — SELECT LANGUAGE SCREEN
// ==========================================
export const LanguageSelectionScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme, language, setLanguage } = useApp();
  const [selectedLang, setSelectedLang] = useState<'en' | 'ta'>(language);

  const handleSave = () => {
    setLanguage(selectedLang);
    navigate('/profile');
  };

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Header */}
      <div className="h-10 flex items-center">
        <button 
          onClick={() => navigate(-1)}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-xs font-bold uppercase tracking-wider ml-2">
          {language === 'en' ? "Select Language" : "மொழி தேர்வு"}
        </span>
      </div>

      {/* Languages List (Only English and Tamil) */}
      <div className="flex-grow flex flex-col justify-center space-y-4 my-6">
        
        {/* English Row card */}
        <button
          onClick={() => setSelectedLang('en')}
          className={`w-full p-4 rounded-[20px] text-left border flex items-center justify-between transition-all duration-200 ${
            selectedLang === 'en'
              ? 'border-primary bg-primary/5 dark:bg-primary/10 shadow-xs'
              : 'bg-white dark:bg-neutral-900 border-slate-200 dark:border-neutral-805'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-sm ${
              selectedLang === 'en' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400 dark:bg-neutral-800'
            }`}>
              A
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">English</h4>
              <p className="text-[10px] text-slate-450 dark:text-neutral-500 font-semibold mt-0.5">English</p>
            </div>
          </div>
          <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
            selectedLang === 'en' ? 'border-primary bg-primary text-white scale-110 shadow-xs' : 'border-slate-350 dark:border-neutral-700'
          } transition-transform`}>
            {selectedLang === 'en' && <Check size={12} strokeWidth={4} />}
          </div>
        </button>

        {/* Tamil Row card */}
        <button
          onClick={() => setSelectedLang('ta')}
          className={`w-full p-4 rounded-[20px] text-left border flex items-center justify-between transition-all duration-200 ${
            selectedLang === 'ta'
              ? 'border-primary bg-primary/5 dark:bg-primary/10 shadow-xs'
              : 'bg-white dark:bg-neutral-900 border-slate-200 dark:border-neutral-855'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-sm ${
              selectedLang === 'ta' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400 dark:bg-neutral-800'
            }`}>
              அ
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">தமிழ்</h4>
              <p className="text-[10px] text-slate-450 dark:text-neutral-500 font-semibold mt-0.5">Tamil</p>
            </div>
          </div>
          <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
            selectedLang === 'ta' ? 'border-primary bg-primary text-white scale-110 shadow-xs' : 'border-slate-350 dark:border-neutral-700'
          } transition-transform`}>
            {selectedLang === 'ta' && <Check size={12} strokeWidth={4} />}
          </div>
        </button>

      </div>

      {/* Footer Save action button */}
      <div className="mb-2">
        <button
          onClick={handleSave}
          className="w-full py-4 bg-gradient-to-r from-primary to-[#5b7eff] text-white font-bold rounded-btn shadow-md hover:scale-101 active:scale-95 transition-all duration-200 text-sm"
        >
          {selectedLang === 'en' ? "Save Language" : "மொழியை சேமிக்கவும்"}
        </button>
      </div>
    </div>
  );
};

// ==========================================
// SCREEN 16 — MY REPORTED SCREEN
// ==========================================
export const MyReportedScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme, language } = useApp();
  const [activeSort, setActiveSort] = useState<'All' | 'Pending' | 'Progress' | 'Resolved'>('All');
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const reports = [
    { id: 1, title: 'Pothole on 5th Avenue', status: 'In Progress', code: 'Pending', icon: '📍', color: 'bg-rose-100 dark:bg-rose-950/40 text-rose-600 dark:text-rose-450' },
    { id: 2, title: 'Street Light Not Working', status: 'Resolved', code: 'Resolved', icon: '💡', color: 'bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400' },
    { id: 3, title: 'Garbage Not Collected', status: 'Pending', code: 'Pending', icon: '🗑️', color: 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-450' },
    { id: 4, title: 'Water Leakage', status: 'In Progress', code: 'Pending', icon: '💧', color: 'bg-indigo-100 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400' }
  ];

  const filteredReports = reports.filter(r => {
    if (activeSort === 'All') return true;
    if (activeSort === 'Pending') return r.status === 'Pending';
    if (activeSort === 'Progress') return r.status === 'In Progress';
    if (activeSort === 'Resolved') return r.status === 'Resolved';
    return true;
  });

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none relative transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scrollable list */}
      <div className="flex-grow overflow-y-auto space-y-4 pb-14">
        
        {/* Header */}
        <div className="flex justify-between items-center h-10 relative">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate(-1)}
              className="p-1 rounded-full text-slate-400 hover:text-primary transition"
            >
              <ChevronLeft size={20} />
            </button>
            <h2 className="text-md font-black">My Reported</h2>
          </div>

          {/* Sort selection dropdown */}
          <div className="relative">
            <button 
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[10px] font-extrabold tracking-wide uppercase transition-all ${
                theme === 'dark' 
                  ? 'bg-neutral-900 border-neutral-800 text-white' 
                  : 'bg-white border-slate-200 text-slate-700'
              }`}
            >
              <span>Sort by: {activeSort}</span>
              <span className="text-[9px] opacity-70">▼</span>
            </button>
            
            {showSortDropdown && (
              <div className={`absolute top-10 right-0 w-36 rounded-2xl shadow-xl border p-2 z-50 ${
                theme === 'dark' 
                  ? 'bg-neutral-900 border-neutral-800 text-white' 
                  : 'bg-white border-slate-150 text-slate-700'
              }`}>
                {(['All', 'Pending', 'Progress', 'Resolved'] as const).map(s => (
                  <button
                    key={s}
                    onClick={() => {
                      setActiveSort(s);
                      setShowSortDropdown(false);
                    }}
                    className={`w-full text-left text-xs p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-neutral-800 transition font-semibold ${
                      activeSort === s ? 'text-primary font-bold' : ''
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-3 mt-2">
          {filteredReports.map(r => (
            <div
              key={r.id}
              onClick={() => navigate(`/complaints/${r.id}`)}
              className={`p-3.5 rounded-card border flex items-center justify-between shadow-2xs cursor-pointer hover:shadow-xs active:scale-99 transition ${
                theme === 'dark' ? 'bg-[#181818] border-neutral-800/80' : 'bg-white border-slate-150'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-3xs ${r.color}`}>
                  <span className="text-lg">{r.icon}</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-white leading-tight">{r.title}</h4>
                  <p className="text-[10px] text-slate-400 dark:text-neutral-500 mt-1 font-bold">
                    Status: <span className={`${
                      r.status === 'Resolved' 
                        ? 'text-emerald-500' 
                        : r.status === 'Pending' 
                        ? 'text-slate-500' 
                        : 'text-amber-500'
                    }`}>{r.status}</span>
                  </p>
                </div>
              </div>
              <span className="text-slate-350 text-xs">▶</span>
            </div>
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

        <button 
          onClick={() => navigate('/community-feed')}
          className="flex flex-col items-center justify-center flex-1 opacity-70 hover:opacity-100 transition"
        >
          <div className="px-5 py-1 rounded-full flex items-center justify-center">
            <span className="text-md">👥</span>
          </div>
          <span className="text-[9px] font-bold mt-1">Feed</span>
        </button>
      </div>
    </div>
  );
};

// ==========================================
// SCREEN 22 — COMPLAINT CATEGORY & DETAILS
// ==========================================
export const ComplaintCreateScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme, language } = useApp();
  const [selectedCat, setSelectedCat] = useState('Pothole / Road');
  const [locationText, setLocationText] = useState('5th Avenue, Avadi North');
  const [desc, setDesc] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [anonymous, setAnonymous] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const categories = [
    { name: 'Pothole / Road', icon: '🕳️' },
    { name: 'Street Light', icon: '💡' },
    { name: 'Water Issue', icon: '💧' },
    { name: 'Drainage', icon: '🚰' },
    { name: 'Garbage', icon: '🗑️' },
    { name: 'Others', icon: '🌐' }
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      navigate('/complaints/submitted');
    }, 800);
  };

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Header */}
      <div className="h-10 flex justify-between items-center">
        <button 
          onClick={() => navigate('/explore')}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-xs font-black uppercase tracking-wider">File a Complaint</span>
        <div className="w-6"></div>
      </div>

      {/* Form content scrollable */}
      <form onSubmit={handleSubmit} className="flex-grow overflow-y-auto space-y-4 my-2 pr-1 max-h-[640px] text-xs">
        <div>
          <label className="block text-[10px] font-bold text-slate-450 dark:text-neutral-500 mb-1.5 uppercase tracking-wide">Select a category</label>
          <div className="grid grid-cols-3 gap-2">
            {categories.map(c => (
              <button
                type="button"
                key={c.name}
                onClick={() => setSelectedCat(c.name)}
                className={`p-2.5 rounded-xl border text-center flex flex-col items-center gap-1.5 transition ${
                  selectedCat === c.name
                    ? 'bg-primary/5 border-primary shadow-3xs text-primary font-bold'
                    : 'bg-white dark:bg-neutral-900 border-slate-200 dark:border-neutral-805 text-slate-600 dark:text-neutral-300'
                }`}
              >
                <span className="text-lg">{c.icon}</span>
                <span className="text-[8px] truncate max-w-full font-bold">{c.name.split(" / ")[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Location input */}
        <div>
          <label className="block text-[10px] font-bold text-slate-455 dark:text-neutral-500 mb-1 uppercase tracking-wide">Location</label>
          <div className="relative">
            <input
              type="text"
              value={locationText}
              onChange={(e) => setLocationText(e.target.value)}
              className={`w-full p-3.5 pr-10 text-xs font-semibold rounded-btn border focus:outline-none focus:border-primary ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-slate-200 text-slate-800'
              }`}
            />
            <MapPin size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-455" />
          </div>
        </div>

        {/* Description textarea */}
        <div>
          <label className="block text-[10px] font-bold text-slate-450 dark:text-neutral-500 mb-1 uppercase tracking-wide">Description</label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Please provide more details about the issue..."
            rows={3}
            className={`w-full p-3.5 text-xs font-semibold rounded-btn border focus:outline-none focus:border-primary resize-none ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-slate-200 text-slate-800'
            }`}
          />
        </div>

        {/* File picker and preview */}
        <div>
          <label className="block text-[10px] font-bold text-slate-450 dark:text-neutral-500 mb-1.5 uppercase tracking-wide">Add Photos (Optional)</label>
          <div className="flex gap-2">
            {previewUrl && (
              <div className="w-16 h-16 rounded-xl border border-slate-200/50 overflow-hidden relative bg-slate-100 flex items-center justify-center">
                <img src={previewUrl} alt="Preview Uploaded" className="w-full h-full object-cover" />
                <button 
                  type="button" 
                  onClick={() => setPreviewUrl(null)} 
                  className="absolute top-1 right-1 w-4 h-4 bg-black/60 rounded-full text-white flex items-center justify-center text-[8px] font-black hover:bg-black"
                >
                  ✕
                </button>
              </div>
            )}

            <input 
              type="file" 
              accept="image/*" 
              onChange={handleFileChange} 
              className="hidden" 
              id="file-input-selector" 
            />
            <label 
              htmlFor="file-input-selector"
              className={`w-16 h-16 rounded-xl border-2 border-dashed flex flex-col items-center justify-center text-slate-400 hover:border-primary cursor-pointer transition ${
                theme === 'dark' ? 'border-neutral-800 bg-neutral-955/20' : 'border-slate-200 bg-slate-50'
              }`}
            >
              <span className="text-lg font-black">+</span>
              <span className="text-[8px] font-bold mt-1">Upload</span>
            </label>
          </div>
        </div>

        {/* Anonymous toggle checkbox */}
        <button 
          type="button"
          onClick={() => setAnonymous(!anonymous)}
          className="flex items-center gap-2.5 text-xs text-left pt-1 font-semibold text-slate-550 dark:text-neutral-400"
        >
          <div className={`w-4.5 h-4.5 rounded-xs border flex items-center justify-center ${
            anonymous 
              ? 'bg-primary border-primary text-white' 
              : 'border-slate-350 dark:border-neutral-700 bg-white dark:bg-neutral-950'
          } transition duration-200`}>
            {anonymous && <Check size={12} strokeWidth={4} />}
          </div>
          <span>Report anonymously</span>
        </button>
      </form>

      {/* Submit Button */}
      <div className="mt-4 mb-2">
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={submitting}
          className="w-full py-4 bg-gradient-to-r from-primary to-[#5b7eff] text-white font-bold rounded-btn shadow-md hover:scale-101 active:scale-95 transition-all duration-200 text-sm"
        >
          {submitting ? "Submitting..." : "Submit Complaint"}
        </button>
      </div>
    </div>
  );
};

// ==========================================
// SCREEN 23 — COMPLAINT DETAIL & TRACKING
// ==========================================
export const ComplaintDetailScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme, complaints } = useApp();
  const { complaintId } = useParams<{ complaintId: string }>();
  
  const complaint = complaints.find(c => c.id === complaintId) || complaints[0];
  
  const [commentInput, setCommentInput] = useState('');
  const [comments, setComments] = useState([
    { id: 1, text: 'Municipal supervisor inspected the location.', time: 'May 23, 2025 • 03:00 PM', role: 'Official' }
  ]);

  const handleAddComment = () => {
    if (commentInput.trim()) {
      setComments([
        ...comments,
        { id: Date.now(), text: commentInput, time: 'Just now', role: 'User' }
      ]);
      setCommentInput('');
    }
  };

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scrollable details and timeline */}
      <div className="flex-grow overflow-y-auto space-y-4 pb-14 text-xs pr-1">
        
        {/* Header */}
        <div className="h-10 flex justify-between items-center">
          <button 
            onClick={() => navigate('/complaints')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-xs font-black uppercase tracking-wider">Complaint Details</span>
          <span className={`px-2 py-0.5 rounded-full text-[8px] font-black tracking-wide uppercase ${
            complaint.status === 'Resolved' 
              ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-450' 
              : complaint.status === 'In Progress'
                ? 'bg-blue-100 text-blue-600 dark:bg-blue-955/60 dark:text-blue-400'
                : 'bg-amber-100 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400'
          }`}>
            {complaint.status}
          </span>
        </div>

        {/* Complaint info box */}
        <div className={`p-4 rounded-card border shadow-3xs flex flex-col gap-2.5 ${
          theme === 'dark' ? 'bg-[#181818] border-neutral-800' : 'bg-white border-slate-150'
        }`}>
          <div>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Complaint ID</span>
            <h3 className="text-sm font-black text-primary dark:text-white leading-tight">{complaint.id}</h3>
          </div>
          
          <div className="space-y-1 pl-1">
            <p className="font-semibold text-slate-500">📍 Category: <span className="text-slate-800 dark:text-white">{complaint.category}</span></p>
            <p className="font-semibold text-slate-500">📍 Location: <span className="text-slate-800 dark:text-white">{complaint.location}</span></p>
            <p className="font-semibold text-slate-500">📍 Assigned: <span className="text-primary font-bold">{complaint.department}</span></p>
          </div>

          <p className="text-[11px] leading-relaxed border-t border-slate-100 dark:border-neutral-900 pt-2.5 font-medium">
            {complaint.description}
          </p>
        </div>

        {/* Timeline Status steps */}
        <div className="space-y-3 pl-2">
          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status Timeline</h4>
          
          <div className="relative border-l border-slate-200 dark:border-neutral-800 pl-5 space-y-4 ml-1.5 py-1">
            {complaint.timeline.map((step: any, idx: number) => (
              <div key={idx} className={`relative ${step.active ? '' : 'opacity-60'}`}>
                <div className={`absolute -left-[25px] top-0 w-3 h-3 rounded-full border-2 border-white dark:border-neutral-900 shadow-2xs ${
                  step.active 
                    ? (step.title === 'Resolved' ? 'bg-emerald-500' : 'bg-blue-500') 
                    : 'bg-slate-300 dark:bg-neutral-800'
                }`}></div>
                <div>
                  <h5 className="font-bold text-slate-800 dark:text-white">{step.title}</h5>
                  <span className="text-[8px] text-slate-400">{step.date}</span>
                  {step.active && step.description && (
                    <p className="text-[10px] text-slate-450 dark:text-neutral-500 mt-0.5">{step.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comments Feed */}
        <div className="space-y-2">
          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Comments / Updates</h4>
          
          <div className="space-y-2">
            {comments.map(c => (
              <div 
                key={c.id} 
                className={`p-2.5 rounded-xl border ${
                  theme === 'dark' ? 'bg-[#181818]/60 border-neutral-805' : 'bg-white border-slate-200/50'
                }`}
              >
                <div className="flex justify-between items-center text-[8px] font-bold">
                  <span className="text-primary">{c.role}</span>
                  <span className="text-slate-400">{c.time}</span>
                </div>
                <p className="text-[10px] mt-1 font-semibold text-slate-650 dark:text-slate-350">{c.text}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-2 mt-3 pt-2">
            <input 
              type="text"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              placeholder="Ask an update..."
              className={`flex-1 p-2.5 text-xs rounded-xl border focus:outline-none focus:border-primary ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-slate-200 text-slate-800'
              }`}
            />
            <button 
              type="button" 
              onClick={handleAddComment}
              className="px-4 py-2 rounded-xl bg-primary text-white font-bold"
            >
              Add
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

// ==========================================
// SCREEN 24 — EXPLORE HUB SCREEN
// ==========================================
export const ExploreHubScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [searchQuery, setSearchQuery] = useState('');

  const places = [
    { title: 'Avadi Park', sub: 'Parks • 4.5', img: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&q=80&w=120' },
    { title: 'Murugan Temple', sub: 'Temples • 4.7', img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=120' },
    { title: 'Avadi Market', sub: 'Markets • 4.2', img: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=120' }
  ];

  return (
    <div className={`flex-1 flex flex-col justify-between relative select-none ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      
      {/* Scrollable Contents */}
      <div className="flex-grow overflow-y-auto p-4 space-y-4 pb-20">
        
        {/* Header App Bar */}
        <div className="flex justify-between items-center h-10">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate('/home')}
              className="p-1 rounded-full text-slate-400 hover:text-primary transition"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-xs font-bold uppercase tracking-wider">
              Explore Avadi
            </span>
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=80" 
              alt="Profile Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search places, services, food..."
            className={`w-full p-3.5 pr-10 text-xs font-semibold rounded-btn border focus:outline-none focus:border-primary ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-805' : 'bg-white border-slate-200'
            }`}
          />
          <Search size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        </div>

        {/* Category shortcuts list */}
        <div>
          <div className="flex justify-between items-center pb-2">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-450 dark:text-neutral-500">Categories</h4>
            <button 
              onClick={() => navigate('/places')}
              className="text-[10px] font-bold text-primary hover:underline"
            >
              See All
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-2.5 text-center mt-1">
            <button 
              onClick={() => navigate('/places')}
              className={`p-3 rounded-card border shadow-3xs flex flex-col items-center gap-1.5 transition active:scale-95 ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <span className="text-lg">🗺️</span>
              <span className="text-[8px] font-bold">Places</span>
            </button>
            <button 
              onClick={() => navigate('/services')}
              className={`p-3 rounded-card border shadow-3xs flex flex-col items-center gap-1.5 transition active:scale-95 ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <span className="text-lg">🏛️</span>
              <span className="text-[8px] font-bold">Services</span>
            </button>
            <button 
              onClick={() => navigate('/food')}
              className={`p-3 rounded-card border shadow-3xs flex flex-col items-center gap-1.5 transition active:scale-95 ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <span className="text-lg">🍔</span>
              <span className="text-[8px] font-bold">Food & Dining</span>
            </button>
            <button 
              onClick={() => navigate('/transport')}
              className={`p-3 rounded-card border shadow-3xs flex flex-col items-center gap-1.5 transition active:scale-95 ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <span className="text-lg">🚌</span>
              <span className="text-[8px] font-bold">Transport</span>
            </button>
            <button 
              onClick={() => navigate('/community')}
              className={`p-3 rounded-card border shadow-3xs flex flex-col items-center gap-1.5 transition active:scale-95 ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <span className="text-lg">👥</span>
              <span className="text-[8px] font-bold">Community</span>
            </button>
            <button 
              onClick={() => navigate('/jobs-rentals')}
              className={`p-3 rounded-card border shadow-3xs flex flex-col items-center gap-1.5 transition active:scale-95 ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <span className="text-lg">💼</span>
              <span className="text-[8px] font-bold">Jobs & Rentals</span>
            </button>
          </div>
        </div>

        {/* Popular Near You */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-450 dark:text-neutral-500 pb-2">Popular Near You</h4>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
            {places.map(p => (
              <div 
                key={p.title}
                onClick={() => navigate('/places')}
                className={`w-32 flex-shrink-0 border rounded-card overflow-hidden shadow-2xs cursor-pointer active:scale-98 transition ${
                  theme === 'dark' ? 'bg-neutral-900 border-neutral-805' : 'bg-white border-slate-150'
                }`}
              >
                <div className="w-full h-20 bg-slate-100 overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-2">
                  <h5 className="text-[10px] font-bold truncate">{p.title}</h5>
                  <p className="text-[8px] text-slate-400 mt-0.5">{p.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Shortcuts */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-455 dark:text-neutral-500 pb-2">Quick Shortcuts</h4>
          <div className="grid grid-cols-3 gap-2.5 text-center">
            
            {/* Report Complaint */}
            <button 
              onClick={() => navigate('/complaints/camera')}
              className={`p-3.5 rounded-card border shadow-3xs flex flex-col items-center gap-1.5 transition active:scale-95 ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 dark:bg-blue-950/40">
                <FileText size={15} />
              </div>
              <span className="text-[8px] font-extrabold uppercase">Report issue</span>
            </button>

            {/* SOS Emergency */}
            <button 
              onClick={() => navigate('/sos')}
              className={`p-3.5 rounded-card border shadow-3xs flex flex-col items-center gap-1.5 transition active:scale-95 ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-855' : 'bg-white border-slate-150'
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-650 dark:bg-red-950/40 animate-pulse">
                <Shield size={15} />
              </div>
              <span className="text-[8px] font-extrabold uppercase">SOS Emergency</span>
            </button>

            {/* Live Updates */}
            <button 
              onClick={() => navigate('/live-updates')}
              className={`p-3.5 rounded-card border shadow-3xs flex flex-col items-center gap-1.5 transition active:scale-95 ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 dark:bg-amber-950/40">
                <Bell size={15} />
              </div>
              <span className="text-[8px] font-extrabold uppercase">Live Updates</span>
            </button>
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

        <button className="flex flex-col items-center justify-center flex-1 text-primary">
          <div className="px-5 py-1 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-md">🧭</span>
          </div>
          <span className="text-[9px] font-bold mt-1">Explore</span>
        </button>

        <button 
          onClick={() => navigate('/community-feed')}
          className="flex flex-col items-center justify-center flex-1 opacity-70 hover:opacity-100 transition"
        >
          <div className="px-5 py-1 rounded-full flex items-center justify-center">
            <span className="text-md">👥</span>
          </div>
          <span className="text-[9px] font-bold mt-1">Feed</span>
        </button>
      </div>
    </div>
  );
};

// ==========================================
// SCREEN 25 — PLACES LIST SCREEN
// ==========================================
export const PlacesListScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeChip, setActiveChip] = useState<'All' | 'Parks' | 'Temples' | 'Markets' | 'Hospitals'>('All');
  const [bookmarks, setBookmarks] = useState<number[]>([]);

  const placesList = [
    { id: 1, name: 'Avadi Park', cat: 'Parks', rating: '4.5 (128)', distance: '1.2 km', status: 'Open', img: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&q=80&w=160' },
    { id: 2, name: 'Murugan Temple', cat: 'Temples', rating: '4.7 (256)', distance: '1.8 km', status: 'Open', img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=160' },
    { id: 3, name: 'Avadi Market', cat: 'Markets', rating: '4.2 (63)', distance: '2.1 km', status: 'Open', img: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=160' },
    { id: 4, name: 'Avadi Government Hospital', cat: 'Hospitals', rating: '4.1 (87)', distance: '2.5 km', status: 'Open', img: 'https://images.unsplash.com/photo-1586773860418-d3b3df97e612?auto=format&fit=crop&q=80&w=160' },
    { id: 5, name: 'Sri Chaitanya School', cat: 'Others', rating: '4.0 (45)', distance: '3.0 km', status: 'Open', img: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=160' }
  ];

  const toggleBookmark = (id: number) => {
    setBookmarks(prev => 
      prev.includes(id) ? prev.filter(bId => bId !== id) : [...prev, id]
    );
  };

  const filteredPlaces = placesList.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesChip = activeSortLabel(activeChip, p.cat);
    return matchesSearch && matchesChip;
  });

  function activeSortLabel(chip: string, cat: string) {
    if (chip === 'All') return true;
    return cat === chip;
  }

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scrollable list */}
      <div className="flex-grow overflow-y-auto space-y-4 pb-14 text-xs pr-1">
        
        {/* Header */}
        <div className="flex justify-between items-center h-10">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate('/explore')}
              className="p-1 rounded-full text-slate-400 hover:text-primary transition"
            >
              <ChevronLeft size={20} />
            </button>
            <h2 className="text-md font-black">Places</h2>
          </div>
          <button className="p-1 text-slate-400">
            <Search size={18} />
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search places..."
            className={`w-full p-3.5 pr-10 text-xs font-semibold rounded-btn border focus:outline-none focus:border-primary ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-805' : 'bg-white border-slate-200'
            }`}
          />
          <Search size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        </div>

        {/* Category Chips horizontal scroll */}
        <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {(['All', 'Parks', 'Temples', 'Markets', 'Hospitals'] as const).map(chip => (
            <button
              key={chip}
              onClick={() => setActiveChip(chip)}
              className={`text-[10px] px-3.5 py-1.5 rounded-full font-bold transition border uppercase tracking-wider ${
                activeChip === chip
                  ? 'bg-primary border-primary text-white shadow-xs'
                  : 'bg-white border-slate-200 dark:bg-neutral-900 dark:border-neutral-800 text-slate-500 dark:text-neutral-400'
              }`}
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Places card list */}
        <div className="space-y-3 mt-1">
          {filteredPlaces.map(p => (
            <div 
              key={p.id}
              className={`p-3 rounded-card border flex gap-3.5 items-center justify-between shadow-2xs ${
                theme === 'dark' ? 'bg-[#181818] border-neutral-800/80' : 'bg-white border-slate-150'
              }`}
            >
              <div 
                onClick={() => navigate(`/places/${p.id}`)}
                className="flex items-center gap-3.5 cursor-pointer flex-1"
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-white leading-tight">{p.name}</h4>
                  <p className="text-[9px] text-slate-400 dark:text-neutral-500 mt-1 font-semibold">
                    ⭐ {p.rating} • {p.distance}
                  </p>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 text-[8px] font-black tracking-wide uppercase mt-1.5 inline-block">
                    {p.status}
                  </span>
                </div>
              </div>

              {/* Bookmark Toggle */}
              <button 
                onClick={() => toggleBookmark(p.id)}
                className={`p-2 rounded-full border shadow-3xs ${
                  bookmarks.includes(p.id) 
                    ? 'bg-primary/10 border-primary text-primary' 
                    : 'bg-slate-50 dark:bg-neutral-900 border-slate-200 dark:border-neutral-800 text-slate-400'
                }`}
              >
                {bookmarks.includes(p.id) ? '★' : '☆'}
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

// ==========================================
// SCREEN 31 — TRANSPORT HUB SCREEN
// ==========================================
export const TransportHubScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  return (
    <div className={`flex-1 flex flex-col justify-between relative select-none ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      
      <div className="flex-grow overflow-y-auto p-4 space-y-4 pb-20">
        
        {/* Header App Bar */}
        <div className="flex justify-between items-center h-10">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate(-1)}
              className="p-1 rounded-full text-slate-450 hover:text-primary transition"
            >
              <ChevronLeft size={20} />
            </button>
            <h2 className="text-md font-black">Transport Hub</h2>
          </div>
          <button className="p-2 rounded-full border border-slate-250/20">
            <Bell size={15} className="text-slate-500" />
          </button>
        </div>

        {/* Hero banner card */}
        <div className={`rounded-card overflow-hidden border aspect-[16/7] relative shadow-soft ${
          theme === 'dark' ? 'border-neutral-800' : 'border-slate-150'
        }`}>
          <img 
            src={theme === 'dark' ? "/assets/images/home-hero-banner-dark.png" : "/assets/images/home-hero-banner.png"} 
            alt="Avadi Suburban Metro Transport" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col justify-end">
            <h3 className="text-white font-extrabold text-sm leading-tight">Move Smart. Travel Safe.</h3>
            <p className="text-white/80 text-[10px] mt-1 font-bold">Real-time transport info at your fingertips</p>
          </div>
        </div>

        {/* Action Shortcuts grid */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-450 dark:text-neutral-500 pb-2">Quick Shortcuts</h4>
          <div className="grid grid-cols-3 gap-2.5 text-center">
            <button 
              onClick={() => navigate('/transport/detail?mode=bus')}
              className={`p-3.5 rounded-card border shadow-3xs flex flex-col items-center gap-1.5 transition active:scale-95 ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <span className="text-lg">🚌</span>
              <span className="text-[8px] font-bold uppercase">Bus Services</span>
            </button>
            <button 
              onClick={() => navigate('/transport/detail?mode=train')}
              className={`p-3.5 rounded-card border shadow-3xs flex flex-col items-center gap-1.5 transition active:scale-95 ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <span className="text-lg">🚂</span>
              <span className="text-[8px] font-bold uppercase">Train Timings</span>
            </button>
            <button 
              onClick={() => navigate('/transport/detail?mode=metro')}
              className={`p-3.5 rounded-card border shadow-3xs flex flex-col items-center gap-1.5 transition active:scale-95 ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <span className="text-lg">🚇</span>
              <span className="text-[8px] font-bold uppercase">Metro Info</span>
            </button>
          </div>
        </div>

        {/* Live updates list */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-neutral-500 pb-2">Live Status Updates</h4>
          
          <div className="space-y-2.5">
            <div className={`p-3 rounded-card border flex items-center justify-between shadow-2xs ${
              theme === 'dark' ? 'bg-[#181818] border-neutral-800' : 'bg-white border-slate-150'
            }`}>
              <div className="flex items-center gap-3">
                <span className="text-lg">🔴</span>
                <div>
                  <h5 className="text-xs font-bold text-red-500 leading-tight">Bus 54A Delayed</h5>
                  <p className="text-[10px] text-slate-400 dark:text-neutral-500 mt-0.5">Avadi Stand ➜ Broadway route (10m delay)</p>
                </div>
              </div>
              <span className="text-[9px] text-slate-400 dark:text-neutral-500">10m ago</span>
            </div>

            <div className={`p-3 rounded-card border flex items-center justify-between shadow-2xs ${
              theme === 'dark' ? 'bg-[#181818] border-neutral-800' : 'bg-white border-slate-150'
            }`}>
              <div className="flex items-center gap-3">
                <span className="text-lg">🟢</span>
                <div>
                  <h5 className="text-xs font-bold text-emerald-500 leading-tight">Train EMU 13421 On Time</h5>
                  <p className="text-[10px] text-slate-400 dark:text-neutral-500 mt-0.5">Avadi to Chennai Beach (05:40 AM departure)</p>
                </div>
              </div>
              <span className="text-[9px] text-slate-400 dark:text-neutral-500">20m ago</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// ==========================================
// SCREEN 32 — TRAIN TIMETABLE & BUS ROUTE DETAIL SCREEN
// ==========================================
export const TransportTimetableScreen: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useApp();
  const searchParams = new URLSearchParams(location.search);
  const paramMode = searchParams.get('mode');
  const [activeMode, setActiveMode] = useState<'train' | 'bus' | 'metro'>((paramMode === 'train' || paramMode === 'bus' || paramMode === 'metro' ? paramMode : location.state?.initialMode) || 'train');

  useEffect(() => {
    if (paramMode === 'train' || paramMode === 'bus' || paramMode === 'metro') {
      setActiveMode(paramMode);
    }
  }, [paramMode]);

  const trainStops = [
    { stop: 'Avadi', time: '05:40 AM', status: 'Start' },
    { stop: 'Pattabiram', time: '05:47 AM', status: '2 mins halt' },
    { stop: 'Ambattur', time: '05:58 AM', status: '1 min halt' },
    { stop: 'Korattur', time: '06:03 AM', status: '1 min halt' },
    { stop: 'Perambur', time: '06:18 AM', status: '2 mins halt' },
    { stop: 'Chennai Beach', time: '06:35 AM', status: 'End' }
  ];

  const busStops = [
    { stop: 'Avadi Bus Stand', time: '08:30 AM', status: 'Start' },
    { stop: 'Sai Baba Temple', time: '08:38 AM', status: 'Halt' },
    { stop: 'Paruthipattu', time: '08:42 AM', status: 'Halt' },
    { stop: 'Thirumullaivoyal', time: '08:48 AM', status: 'Halt' },
    { stop: 'Ambattur OT', time: '08:52 AM', status: 'Halt' },
    { stop: 'Broadway', time: '09:30 AM', status: 'End' }
  ];

  const metroStops = [
    { stop: 'Avadi Junction (Proposed)', time: 'Under Construction', status: 'Phase 2 Extension' },
    { stop: 'Thirumullaivoyal (Proposed)', time: 'Upcoming', status: 'Planned Stop' },
    { stop: 'Ambattur Industrial Estate', time: 'Upcoming', status: 'Planned Stop' },
    { stop: 'Poonamallee Bypass', time: 'Upcoming', status: 'Interchange Stop' }
  ];

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scrollable list */}
      <div className="flex-grow overflow-y-auto space-y-4 pb-14 text-xs pr-1">
        
        {/* Header */}
        <div className="flex justify-between items-center h-10">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate('/transport')}
              className="p-1 rounded-full text-slate-400 hover:text-primary transition"
            >
              <ChevronLeft size={20} />
            </button>
            <h2 className="text-md font-black">
              {activeMode === 'train' ? "Train Timetable" : activeMode === 'bus' ? "Bus Route Detail" : "Metro Route Detail"}
            </h2>
          </div>
          
          <div className="flex gap-1.5">
            <button
              onClick={() => setActiveMode('train')}
              className={`px-2 py-1 rounded-full text-[8px] font-bold border uppercase transition ${
                activeMode === 'train' ? 'bg-primary border-primary text-white shadow-xs' : 'bg-white dark:bg-neutral-900 border-slate-200 dark:border-neutral-800'
              }`}
            >
              Train
            </button>
            <button
              onClick={() => setActiveMode('bus')}
              className={`px-2 py-1 rounded-full text-[8px] font-bold border uppercase transition ${
                activeMode === 'bus' ? 'bg-primary border-primary text-white shadow-xs' : 'bg-white dark:bg-neutral-900 border-slate-200 dark:border-neutral-800'
              }`}
            >
              Bus
            </button>
            <button
              onClick={() => setActiveMode('metro')}
              className={`px-2 py-1 rounded-full text-[8px] font-bold border uppercase transition ${
                activeMode === 'metro' ? 'bg-primary border-primary text-white shadow-xs' : 'bg-white dark:bg-neutral-900 border-slate-200 dark:border-neutral-800'
              }`}
            >
              Metro
            </button>
          </div>
        </div>

        {/* Route metadata block */}
        <div className={`p-4 rounded-card border shadow-3xs ${
          theme === 'dark' ? 'bg-[#181818] border-neutral-800/80' : 'bg-white border-slate-150'
        }`}>
          {activeMode === 'train' ? (
            <div>
              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 text-[8px] font-black tracking-wide uppercase">On Time</span>
              <h3 className="text-sm font-black mt-2">EMU 13421 (Avadi ➜ Chennai Beach)</h3>
              <p className="text-[10px] text-slate-400 mt-1 font-bold">Municipal Local Transit Scheduled Services</p>
            </div>
          ) : activeMode === 'bus' ? (
            <div>
              <span className="px-2 py-0.5 rounded bg-red-100 text-red-700 text-[8px] font-black tracking-wide uppercase">Delayed 10m</span>
              <h3 className="text-sm font-black mt-2">Route 54A (Avadi ➜ Broadway)</h3>
              <p className="text-[10px] text-slate-400 mt-1 font-bold">Avadi Metropolitan Bus Transport</p>
            </div>
          ) : (
            <div>
              <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-700 text-[8px] font-black tracking-wide uppercase">Proposed</span>
              <h3 className="text-sm font-black mt-2">Chennai Metro Phase 2 Extension</h3>
              <p className="text-[10px] text-slate-400 mt-1 font-bold">Avadi ➜ Poonamallee Corridor (Proposed)</p>
            </div>
          )}
        </div>

        {/* Stops list timeline */}
        <div className="space-y-3.5 pl-2 mt-2">
          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Scheduled Stops</h4>
          
          <div className="relative border-l border-slate-200 dark:border-neutral-800 pl-5 space-y-4 ml-1.5 py-1">
            {(activeMode === 'train' ? trainStops : activeMode === 'bus' ? busStops : metroStops).map((item, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[25px] top-0 w-3 h-3 rounded-full bg-primary border-2 border-white dark:border-neutral-900 shadow-2xs"></div>
                <div className="flex justify-between items-center pr-2">
                  <div>
                    <h5 className="font-bold text-slate-800 dark:text-white leading-tight">{item.stop}</h5>
                    <span className="text-[9px] text-slate-400 mt-0.5 block">{item.status}</span>
                  </div>
                  <span className="text-[11px] font-extrabold text-slate-650 dark:text-neutral-300">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export const CivicHubScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme, complaints } = useApp();

  return (
    <div className={`flex-1 flex flex-col justify-between relative select-none ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      <div className="flex-grow overflow-y-auto p-4 space-y-4 pb-20">
        {/* Header */}
        <div className="flex justify-between items-center h-10">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate('/home')}
              className="p-1 rounded-full text-slate-400 hover:text-primary transition"
            >
              <ChevronLeft size={20} />
            </button>
            <h2 className="text-md font-black">Civic Hub</h2>
          </div>
          <button className="p-2 rounded-full border border-slate-200/20" onClick={() => navigate('/notifications')}>
            <Bell size={15} className="text-slate-500" />
          </button>
        </div>

        <div className="rounded-card overflow-hidden border aspect-[16/7] relative shadow-soft">
          <img 
            src="/assets/images/banners/civic-report-banner.webp" 
            alt="Avadi Civic Assistance" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col justify-end">
            <h3 className="text-white font-extrabold text-sm leading-tight">Your Voice Matters.</h3>
            <p className="text-white/80 text-[10px] mt-1 font-bold">Report local issues and track resolutions</p>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-450 dark:text-neutral-500 pb-2">Civic Services</h4>
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={() => navigate('/complaints')}
              className={`p-4 rounded-card border shadow-3xs flex flex-col justify-between text-left h-24 ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <span className="text-2xl">📋</span>
              <div>
                <h5 className="text-[11px] font-extrabold">My Complaints</h5>
                <p className="text-[8px] text-slate-400">{complaints.length} filed issues</p>
              </div>
            </button>
            <button 
              onClick={() => navigate('/complaints/camera')}
              className={`p-4 rounded-card border shadow-3xs flex flex-col justify-between text-left h-24 ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <span className="text-2xl">📸</span>
              <div>
                <h5 className="text-[11px] font-extrabold">Report Complaint</h5>
                <p className="text-[8px] text-slate-400">File a civic grievance</p>
              </div>
            </button>
            <button 
              onClick={() => navigate('/alerts')}
              className={`p-4 rounded-card border shadow-3xs flex flex-col justify-between text-left h-24 ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <span className="text-2xl">⚠️</span>
              <div>
                <h5 className="text-[11px] font-extrabold">Local Alerts</h5>
                <p className="text-[8px] text-slate-400">View warnings</p>
              </div>
            </button>
            <button 
              onClick={() => navigate('/services?category=government')}
              className={`p-4 rounded-card border shadow-3xs flex flex-col justify-between text-left h-24 ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <span className="text-2xl">🏛️</span>
              <div>
                <h5 className="text-[11px] font-extrabold">Govt Services</h5>
                <p className="text-[8px] text-slate-400">Explore civic portals</p>
              </div>
            </button>
          </div>
        </div>

        <div className={`p-4 rounded-card border shadow-2xs ${
          theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
        }`}>
          <div className="flex justify-between items-center cursor-pointer" onClick={() => navigate('/notifications')}>
            <div>
              <h5 className="text-xs font-bold">Notices & Circulars</h5>
              <p className="text-[9px] text-slate-400 mt-0.5">Read corporation updates & announcements</p>
            </div>
            <span className="text-xs text-slate-350 font-bold">▶</span>
          </div>
        </div>

        <div className={`p-4 rounded-card border shadow-2xs ${
          theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
        }`}>
          <div>
            <h5 className="text-xs font-bold">Ward 3 Administration</h5>
            <p className="text-[9px] text-slate-400 mt-0.5">Representative: M. Saravanan • Phone: +91 94440 12345</p>
          </div>
        </div>
      </div>

      <div className={`absolute bottom-0 left-0 w-full border-t flex justify-around py-2 h-16 z-30 shadow-lg ${
        theme === 'dark' ? 'bg-[#121212]/95 border-neutral-800 text-white' : 'bg-white/95 border-slate-150 text-slate-700'
      }`}>
        <button onClick={() => navigate('/home')} className="flex flex-col items-center justify-center flex-1 opacity-70">
          <span className="text-md">🏠</span>
          <span className="text-[9px] font-bold mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center justify-center flex-1 text-primary">
          <span className="text-md bg-primary/10 px-4 py-0.5 rounded-full">🏛️</span>
          <span className="text-[9px] font-bold mt-1">Civic</span>
        </button>
        <button onClick={() => navigate('/explore')} className="flex flex-col items-center justify-center flex-1 opacity-70">
          <span className="text-md">🧭</span>
          <span className="text-[9px] font-bold mt-1">Explore</span>
        </button>
        <button onClick={() => navigate('/community-feed')} className="flex flex-col items-center justify-center flex-1 opacity-70">
          <span className="text-md">👥</span>
          <span className="text-[9px] font-bold mt-1">Feed</span>
        </button>
      </div>
    </div>
  );
};

export const SearchScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme, jobs, rentals, volunteers, donations, foodVendors } = useApp();
  const [query, setQuery] = useState('');

  const staticPlaces = [
    { id: '1', name: 'Avadi Park', cat: 'Places', sub: 'Parks • 4.5 rating' },
    { id: '2', name: 'Murugan Temple', cat: 'Places', sub: 'Temples • 4.7 rating' },
    { id: '3', name: 'Avadi Market', cat: 'Places', sub: 'Markets • 4.2 rating' }
  ];

  const staticServices = [
    { id: 'gov1', name: 'Ward Office', cat: 'Government Services', sub: 'Ward 3, Avadi Corporation' },
    { id: 'gov2', name: 'Property Tax Help', cat: 'Government Services', sub: 'Online & offline payment guides' },
    { id: 'health1', name: 'Government Hospital', cat: 'Health Services', sub: '24/7 emergency & outpatient clinics' },
    { id: 'health2', name: 'Avadi Pharmacy', cat: 'Health Services', sub: 'Local pharmacy near junction' },
    { id: 'edu1', name: 'Primary School', cat: 'Education Services', sub: 'Corporation elementary school' },
    { id: 'util1', name: 'Electrician Ravi', cat: 'Utility Services', sub: 'Experienced domestic wireman' }
  ];

  const staticAlerts = [
    { id: '1', name: 'Heavy Rain Alert', cat: 'Alerts', sub: 'Warning issued by municipal administration' },
    { id: '2', name: 'Traffic Diversion', cat: 'Alerts', sub: 'Poonamallee High Road diversion' }
  ];

  const staticComplaints = [
    { id: 'comp_1', name: 'Street Light Not Working', cat: 'Complaints', sub: 'Filed on 5th street' },
    { id: 'comp_2', name: 'Pothole on Main Road', cat: 'Complaints', sub: 'Filed near school' }
  ];

  const allItems = [
    { id: 'cat_places', name: 'Places & Attractions', cat: 'Explore', sub: 'Beaches, parks, and temples', route: '/places', icon: '🗺️' },
    { id: 'cat_services', name: 'Local Services & Providers', cat: 'Explore', sub: 'Plumbers, electricians, and doctors', route: '/services', icon: '🏛️' },
    { id: 'cat_food', name: 'Food & Dining', cat: 'Explore', sub: 'Restaurants, cafes, and street food', route: '/food', icon: '🍔' },
    { id: 'cat_transport', name: 'Bus & Train Timetables', cat: 'Explore', sub: 'Transit schedules and routes', route: '/transport', icon: '🚌' },
    { id: 'cat_jobs_rentals', name: 'Jobs & Rentals Hub', cat: 'Explore', sub: 'Vacancies and rental listings', route: '/jobs-rentals', icon: '💼' },
    { id: 'cat_community', name: 'Community Directory', cat: 'Explore', sub: 'Helper portals, volunteers, donations', route: '/community', icon: '👥' },
    ...(staticPlaces || []).map(x => ({ id: x.id || '', name: x.name || '', cat: x.cat || '', sub: x.sub || '', route: `/places/${x.id}`, icon: '🗺️' })),
    ...(staticServices || []).map(x => ({ id: x.id || '', name: x.name || '', cat: x.cat || '', sub: x.sub || '', route: `/services/${x.id}`, icon: '🏛️' })),
    ...(staticAlerts || []).map(x => ({ id: x.id || '', name: x.name || '', cat: x.cat || '', sub: x.sub || '', route: `/alerts/${x.id}`, icon: '⚠️' })),
    ...(staticComplaints || []).map(x => ({ id: x.id || '', name: x.name || '', cat: x.cat || '', sub: x.sub || '', route: `/complaints/${x.id}`, icon: '📋' })),
    ...(jobs || []).map(x => ({ id: x.id || '', name: x.title || '', cat: 'Jobs', sub: x.company || '', route: `/jobs/detail-and-post?mode=detail&jobId=${x.id}`, icon: '💼' })),
    ...(rentals || []).map(x => ({ id: x.id || '', name: x.title || '', cat: 'Rentals', sub: x.rent || '', route: `/rentals/${x.id}`, icon: '🏠' })),
    ...(volunteers || []).map(x => ({ id: x.id || '', name: x.name || '', cat: 'Volunteers', sub: x.domain || '', route: `/volunteers`, icon: '🙋' })),
    ...(donations || []).map(x => ({ id: x.id || '', name: x.title || '', cat: 'Donations', sub: x.organizer || '', route: `/donations/${x.id}`, icon: '🎁' })),
    ...(foodVendors || []).map(x => ({ id: x.id || '', name: x.name || '', cat: 'Food & Dining', sub: x.cuisine || '', route: `/food/${x.id}`, icon: '🍔' }))
  ];

  const filtered = query.trim() === ''
    ? allItems.slice(0, 5)
    : allItems.filter(item => {
        const queryLower = query.toLowerCase();
        return (
          (item.name || '').toLowerCase().includes(queryLower) ||
          (item.cat || '').toLowerCase().includes(queryLower) ||
          (item.sub || '').toLowerCase().includes(queryLower)
        );
      });

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      <div className="flex-grow overflow-y-auto space-y-4 pb-14 text-xs pr-1">
        <div className="flex justify-between items-center h-10">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate(-1)}
              className="p-1 rounded-full text-slate-400 hover:text-primary transition"
            >
              <ChevronLeft size={20} />
            </button>
            <h2 className="text-md font-black">Search</h2>
          </div>
          <button 
            onClick={() => navigate(-1)}
            className="text-xs text-primary font-bold hover:underline"
          >
            Cancel
          </button>
        </div>

        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type to search places, jobs, alerts..."
            className={`w-full p-3.5 pr-10 text-xs font-semibold rounded-btn border focus:outline-none focus:border-primary ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-805 text-white' : 'bg-white border-slate-200 text-slate-850'
            }`}
            autoFocus
          />
          <Search size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        </div>

        <div className="space-y-3 mt-2">
          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            {query.trim() === '' ? "Suggested Searches" : `Results (${filtered.length})`}
          </h4>

          {filtered.length === 0 ? (
            <div className="text-center py-10 space-y-4">
              <p className="text-slate-455">No results found for "{query}"</p>
              <button 
                onClick={() => navigate('/home')}
                className="px-4 py-2 bg-primary text-white font-bold rounded-full text-[10px] uppercase shadow-xs"
              >
                Back to Dashboard
              </button>
            </div>
          ) : (
            <div className="space-y-2.5">
              {filtered.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => navigate(item.route)}
                  className={`p-3 rounded-card border flex justify-between items-center cursor-pointer shadow-2xs hover:scale-[1.002] active:scale-98 transition ${
                    theme === 'dark' ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-slate-150'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <h5 className="text-xs font-bold leading-tight">{item.name}</h5>
                      <span className="text-[9px] text-slate-400 mt-0.5 block">{item.sub}</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-neutral-850 text-[8px] font-bold uppercase text-slate-450 dark:text-neutral-500">
                    {item.cat}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const PlaceDetailScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const { placeId } = useParams<{ placeId: string }>();

  const placesList = [
    { id: '1', name: 'Avadi Park', cat: 'Parks', rating: 4.5, reviews: 128, distance: '1.2 km', status: 'Open', img: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&q=80&w=400', desc: 'Beautiful municipal park in Avadi featuring walking paths, play areas for children, and a green serene environment.', amenities: ['Walking Track', 'Play Area', 'Benches', 'Restrooms'] },
    { id: '2', name: 'Murugan Temple', cat: 'Temples', rating: 4.7, reviews: 256, distance: '1.8 km', status: 'Open', img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=400', desc: 'Historical temple located in Avadi with architecture dating back decades. A peaceful place for worship.', amenities: ['Prasadam', 'Shoe Stand', 'Parking', 'Drinking Water'] },
    { id: '3', name: 'Avadi Market', cat: 'Markets', rating: 4.2, reviews: 63, distance: '2.1 km', status: 'Open', img: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=400', desc: 'Bustling local market offering fresh vegetables, groceries, garments, and daily essentials at reasonable rates.', amenities: ['Fresh Produce', 'ATM Nearby', 'Street Food'] }
  ];

  const place = placesList.find(p => p.id === placeId) || placesList[0];

  return (
    <div className={`flex-1 flex flex-col justify-between select-none ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      <div className="flex-grow overflow-y-auto p-4 space-y-4 pb-14 text-xs pr-1">
        <div className="flex items-center gap-2 mb-2">
          <button 
            onClick={() => navigate('/places')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-xs font-bold uppercase tracking-wider">Place Details</span>
        </div>

        <div className="w-full h-48 rounded-card overflow-hidden bg-slate-100 border">
          <img src={place.img} alt={place.name} className="w-full h-full object-cover" />
        </div>

        <div>
          <div className="flex justify-between items-center">
            <span className="text-[10px] px-2.5 py-0.5 bg-primary/10 text-primary font-bold rounded-full uppercase">{place.cat}</span>
            <span className="text-sm font-black text-emerald-600">⭐ {place.rating} ({place.reviews} reviews)</span>
          </div>
          <h3 className="text-md font-extrabold text-slate-800 dark:text-white mt-2 leading-snug">
            {place.name}
          </h3>
          <p className="text-[10px] text-slate-400 mt-1">📍 {place.distance} away • Status: <span className="text-emerald-500 font-bold">{place.status}</span></p>
        </div>

        <div className="space-y-1">
          <h4 className="text-xs font-bold text-slate-400 uppercase">Description</h4>
          <p className="text-slate-655 dark:text-neutral-300 leading-relaxed font-semibold">{place.desc}</p>
        </div>

        <div className="space-y-2">
          <h4 className="text-xs font-bold text-slate-400 uppercase">Amenities & Facilities</h4>
          <div className="flex flex-wrap gap-2">
            {place.amenities.map(a => (
              <span key={a} className="px-3 py-1 bg-slate-100 dark:bg-neutral-850 rounded-full text-[9px] font-bold text-slate-600 dark:text-neutral-400">
                ✓ {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ServiceProviderDetailScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const { providerId } = useParams<{ providerId: string }>();

  const providers = [
    { id: 'gov1', name: 'Ward 3 Corporation Office', type: 'Government Services', cat: 'government', rating: '4.4', reviews: '120', experience: 'Established', jobsDone: 1450, satisfaction: '92%', phone: '+91 94440 12345', whatsapp: '+91 94440 12345', address: 'Ward 3 Main Road, Avadi, Chennai - 600054', services: ['Grievance Redressal', 'Property Tax Collection', 'Birth/Death Registration', 'Water Tax Help'], gallery: [] },
    { id: 'health1', name: 'Avadi Government Hospital', type: 'Health Services', cat: 'health', rating: '4.2', reviews: '530', experience: '15+ Years', jobsDone: 8400, satisfaction: '88%', phone: '+91 44 2637 1234', whatsapp: '', address: 'Hospital Road, Avadi Junction, Chennai - 600054', services: ['24/7 Accident & Emergency', 'Outpatient Clinic', 'Pharmacy Support', 'Ambulance Services'], gallery: [] },
    { id: 'edu1', name: 'Avadi Municipal Primary School', type: 'Education Services', cat: 'education', rating: '4.5', reviews: '98', experience: 'Established 1982', jobsDone: 240, satisfaction: '95%', phone: '+91 98765 00123', whatsapp: '', address: 'P&T Colony Street, Avadi, Chennai - 600054', services: ['Elementary Education', 'No-Cost Midday Meal', 'Free Book Distribution'], gallery: [] },
    { id: 'util1', name: 'Electrician Ravi Kumar', type: 'Utility Services', cat: 'utility', rating: '4.8', reviews: '45', experience: '8 Years', jobsDone: 340, satisfaction: '98%', phone: '+91 98765 43210', whatsapp: '+91 98765 43210', address: 'Avadi North Market Street, Chennai', services: ['House Wiring', 'Appliance Repair', 'Inverter Installation', 'Short Circuit Troubleshooting'], gallery: [] }
  ];

  const provider = providers.find(p => p.id === providerId) || providers[0];

  return (
    <div className={`flex-1 flex flex-col justify-between select-none ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      <div className="flex-grow overflow-y-auto p-4 space-y-4 pb-14 text-xs pr-1">
        <div className="flex items-center gap-2 mb-2">
          <button 
            onClick={() => navigate(`/services?category=${provider.cat}`)}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-xs font-bold uppercase tracking-wider">Provider Details</span>
        </div>

        <div className={`p-4 rounded-card border shadow-3xs flex gap-4 items-center ${
          theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
        }`}>
          <div className="w-16 h-16 rounded-full bg-primary/10 text-primary text-3xl font-black flex items-center justify-center shadow-inner">
            👤
          </div>
          <div>
            <h3 className="text-sm font-extrabold text-slate-800 dark:text-white leading-snug">{provider.name}</h3>
            <span className="text-[9px] px-2 py-0.5 bg-primary/10 text-primary font-bold rounded mt-1.5 inline-block uppercase">{provider.type}</span>
            <div className="text-[10px] text-slate-400 mt-1">⭐ {provider.rating} ({provider.reviews} reviews) • {provider.experience}</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center">
          <div className={`p-2.5 rounded-xl border ${theme === 'dark' ? 'bg-neutral-900/60 border-neutral-850' : 'bg-white border-slate-100'}`}>
            <span className="text-slate-450 block text-[8px] font-bold uppercase">Jobs Done</span>
            <span className="text-xs font-black text-primary font-mono mt-0.5 block">{provider.jobsDone}+</span>
          </div>
          <div className={`p-2.5 rounded-xl border ${theme === 'dark' ? 'bg-neutral-900/60 border-neutral-850' : 'bg-white border-slate-100'}`}>
            <span className="text-slate-450 block text-[8px] font-bold uppercase">Satisfaction</span>
            <span className="text-xs font-black text-emerald-500 font-mono mt-0.5 block">{provider.satisfaction}</span>
          </div>
          <div className={`p-2.5 rounded-xl border ${theme === 'dark' ? 'bg-neutral-900/60 border-neutral-850' : 'bg-white border-slate-100'}`}>
            <span className="text-slate-450 block text-[8px] font-bold uppercase">Rating</span>
            <span className="text-xs font-black text-amber-500 font-mono mt-0.5 block">★ {provider.rating}</span>
          </div>
        </div>

        <div className="space-y-1">
          <h4 className="text-xs font-bold text-slate-400 uppercase">Office Address</h4>
          <p className="text-slate-655 dark:text-neutral-300 leading-relaxed font-semibold">📍 {provider.address}</p>
        </div>

        <div className="space-y-2">
          <h4 className="text-xs font-bold text-slate-400 uppercase">Services & Expertise</h4>
          <ul className="space-y-1.5 list-disc pl-4 text-slate-655 dark:text-neutral-300">
            {provider.services.map(s => (
              <li key={s} className="font-semibold">{s}</li>
            ))}
          </ul>
        </div>

        <div className="flex gap-3 pt-2">
          <a 
            href={`tel:${provider.phone}`}
            className="flex-1 py-3.5 bg-primary text-white font-bold rounded-btn text-xs text-center shadow-md flex items-center justify-center gap-1.5"
          >
            <span>📞</span> Call Provider
          </a>
          {provider.whatsapp && (
            <a 
              href={`https://wa.me/${provider.whatsapp.replace(/\+/g, '').replace(/ /g, '')}`}
              className="flex-1 py-3.5 bg-emerald-500 text-white font-bold rounded-btn text-xs text-center shadow-md flex items-center justify-center gap-1.5"
            >
              <span>💬</span> WhatsApp
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const FoodDiningListScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme, foodVendors } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'All' | 'Veg' | 'Fast Food' | 'Biryani'>('All');

  const filtered = foodVendors.filter(v => {
    const matchesSearch = v.name.toLowerCase().includes(searchQuery.toLowerCase()) || v.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'All' 
      ? true 
      : activeTab === 'Veg' 
        ? v.cuisine.includes('Veg') 
        : v.cuisine.includes(activeTab);
    return matchesSearch && matchesTab;
  });

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      <div className="flex-grow overflow-y-auto p-4 space-y-4 pb-14 text-xs pr-1">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => navigate('/explore')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-xs font-bold uppercase tracking-wider">Food & Dining</span>
        </div>

        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search restaurants, cuisines..."
            className={`w-full p-3.5 pr-10 text-xs font-semibold rounded-btn border focus:outline-none focus:border-primary ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-805 text-white' : 'bg-white border-slate-205'
            }`}
          />
          <Search size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        </div>

        <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {['All', 'Veg', 'Fast Food', 'Biryani'].map(t => (
            <button
              key={t}
              onClick={() => setActiveTab(t as any)}
              className={`text-[9px] px-3.5 py-1.5 rounded-full font-bold transition border uppercase tracking-wider ${
                activeTab === t
                  ? 'bg-primary border-primary text-white shadow-xs'
                  : 'bg-white border-slate-200 dark:bg-neutral-900 dark:border-neutral-800 text-slate-500 dark:text-neutral-400'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filtered.map(v => (
            <div
              key={v.id}
              onClick={() => navigate(`/food/${v.id}`)}
              className={`p-3 rounded-card border flex gap-3.5 items-center justify-between cursor-pointer shadow-2xs hover:scale-[1.002] active:scale-98 transition ${
                theme === 'dark' ? 'bg-[#181818] border-neutral-800/80' : 'bg-white border-slate-150'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                  <img src={v.image} alt={v.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-xs font-bold leading-tight">{v.name}</h4>
                  <p className="text-[9px] text-slate-400 mt-1 font-semibold">📍 {v.cuisine} • ⭐ {v.rating} ({v.reviewsCount} reviews)</p>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 text-[8px] font-black tracking-wide uppercase mt-1 inline-block">
                    {v.discount}
                  </span>
                </div>
              </div>
              <span className="text-xs text-slate-300">▶</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const FoodVendorDetailScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme, foodVendors } = useApp();
  const { vendorId } = useParams<{ vendorId: string }>();

  const vendor = foodVendors.find(v => v.id === vendorId) || foodVendors[0];

  return (
    <div className={`flex-grow flex flex-col justify-between select-none ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      <div className="flex-grow overflow-y-auto p-4 space-y-4 pb-14 text-xs pr-1">
        <div className="flex items-center gap-2 mb-2">
          <button 
            onClick={() => navigate('/food')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-xs font-bold uppercase tracking-wider">Restaurant Details</span>
        </div>

        <div className="w-full h-44 rounded-card overflow-hidden bg-slate-100 border">
          <img src={vendor.image} alt={vendor.name} className="w-full h-full object-cover" />
        </div>

        <div>
          <div className="flex justify-between items-center">
            <span className="text-[9px] px-2 py-0.5 bg-emerald-100 text-emerald-700 font-bold rounded uppercase">{vendor.discount}</span>
            <span className="text-sm font-black text-amber-500 font-mono">★ {vendor.rating} ({vendor.reviewsCount} reviews)</span>
          </div>
          <h3 className="text-md font-extrabold text-slate-800 dark:text-white mt-2 leading-snug">
            {vendor.name}
          </h3>
          <p className="text-[10px] text-slate-450 mt-1">📍 {vendor.address} • Cuisine: {vendor.cuisine}</p>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Menu Cards</h4>
          <div className="space-y-2.5">
            {vendor.menu.map((m, idx) => (
              <div 
                key={idx}
                className={`p-3 rounded-card border flex justify-between items-center shadow-2xs ${
                  theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-150'
                }`}
              >
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className={`w-3.5 h-3.5 border flex items-center justify-center text-[7px] font-black select-none ${
                      m.isVeg ? 'border-emerald-500 text-emerald-500' : 'border-red-500 text-red-500'
                    }`}>
                      {m.isVeg ? '🟢' : '🔴'}
                    </span>
                    <h5 className="text-xs font-bold leading-tight">{m.name}</h5>
                  </div>
                  <p className="text-[9px] text-slate-405 dark:text-neutral-500 mt-1 max-w-[200px] leading-snug">{m.description}</p>
                </div>
                <span className="text-xs font-black text-primary font-mono">₹{m.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <a 
            href={`tel:${vendor.phone}`}
            className="w-full py-4 bg-primary text-white font-bold rounded-btn text-xs text-center shadow-md flex items-center justify-center gap-1.5"
          >
            <span>📞</span> Call Restaurant (+91 {vendor.phone})
          </a>
        </div>
      </div>
    </div>
  );
};

export const RecentAlertsDetailScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const { alertId } = useParams<{ alertId: string }>();

  const alerts = [
    { id: '1', title: 'Heavy Rain Alert', desc: 'Moderate to heavy rain expected in Avadi today due to low pressure area in Bay of Bengal. Residents are advised to carry umbrellas and exercise caution.', time: 'May 15, 2025 • 10:30 AM', cat: 'weather', severity: 'High', guidelines: ['Carry umbrellas and wear rainwear.', 'Stay indoors if wind speeds increase.', 'Keep emergency contacts ready.'] },
    { id: '2', title: 'Traffic Diversion', desc: 'Severe water logging reported near Poonamallee High Road junction. Traffic diverted via interior ward streets. Delay of 15-20 mins expected.', time: 'May 15, 2025 • 09:15 AM', cat: 'traffic', severity: 'Medium', guidelines: ['Avoid Poonamallee High Road.', 'Use alternate interior routes.', 'Allow extra travel time.'] },
    { id: '3', title: 'Power Cut Update', desc: 'Scheduled maintenance work at Avadi sub-station. Power supply will be interrupted in parts of Avadi West from 9 AM to 4 PM.', time: 'May 14, 2025 • 06:45 PM', cat: 'safety', severity: 'Medium', guidelines: ['Charge backup inverters and devices.', 'Plan electricity-reliant chores.', 'Contact helpline for queries.'] }
  ];

  const alert = alerts.find(a => a.id === alertId) || alerts[0];

  return (
    <div className={`flex-grow flex flex-col justify-between select-none ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      <div className="flex-grow overflow-y-auto p-4 space-y-4 pb-14 text-xs pr-1">
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <button 
            onClick={() => navigate('/alerts')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-xs font-bold uppercase tracking-wider">Alert Details</span>
        </div>

        <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-card space-y-2">
          <div className="flex justify-between items-center">
            <span className="px-2.5 py-0.5 bg-red-105 dark:bg-red-950 text-red-700 dark:text-red-400 rounded-full font-bold uppercase text-[9px] tracking-wider">
              {alert.severity} Severity
            </span>
            <span className="text-[9px] text-slate-400">{alert.time}</span>
          </div>
          <h3 className="text-md font-extrabold text-slate-850 dark:text-white leading-snug">{alert.title}</h3>
          <p className="text-slate-655 dark:text-neutral-300 leading-relaxed font-semibold">{alert.desc}</p>
        </div>

        <div className="space-y-3 pl-1">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Safety Guidelines</h4>
          <ul className="space-y-2.5 list-disc pl-4 text-slate-655 dark:text-neutral-300 font-semibold">
            {alert.guidelines.map((g, idx) => (
              <li key={idx} className="leading-relaxed">{g}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const EmergencyContactDetailScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const { contactId } = useParams<{ contactId: string }>();

  const contacts = [
    { id: '1', name: 'Corporation Ward Office', role: 'Ward Representative Help', phone: '+91 94440 12345', email: 'ward3@avadicorporation.gov.in', address: 'Ward 3 Office, Avadi, Chennai - 600054' },
    { id: '2', name: 'Avadi Police Station', role: 'Law & Order Police Help', phone: '+91 44 2637 2100', email: 'avadiPS@tnpolice.gov.in', address: 'Avadi Junction Road, Chennai - 600054' },
    { id: '3', name: 'Avadi Fire Station', role: 'Fire Emergency Rescue Services', phone: '101', email: 'avadiFS@tnfire.gov.in', address: 'Avadi Police Commissionerate Road, Chennai' }
  ];

  const contact = contacts.find(c => c.id === contactId) || contacts[0];

  return (
    <div className={`flex-grow flex flex-col justify-between select-none ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      <div className="flex-grow overflow-y-auto p-4 space-y-4 pb-14 text-xs pr-1">
        <div className="flex items-center gap-2 mb-2">
          <button 
            onClick={() => navigate('/sos')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-xs font-bold uppercase tracking-wider">Contact Details</span>
        </div>

        <div className={`p-4 rounded-card border shadow-3xs text-center flex flex-col items-center justify-center space-y-3 ${
          theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
        }`}>
          <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-3xl font-bold shadow-inner">
            📞
          </div>
          <div>
            <h3 className="text-sm font-extrabold text-slate-800 dark:text-white leading-tight">{contact.name}</h3>
            <span className="text-[9px] px-2 py-0.5 bg-red-100 text-red-700 font-bold rounded mt-1.5 inline-block uppercase tracking-wider">{contact.role}</span>
          </div>
        </div>

        <div className="space-y-3.5 mt-2">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Phone Number</span>
            <span className="text-xs font-black text-slate-855 dark:text-white mt-1 block font-mono">{contact.phone}</span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Email Address</span>
            <span className="text-xs font-black text-slate-855 dark:text-white mt-1 block">{contact.email}</span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Office Location</span>
            <span className="text-xs font-black text-slate-855 dark:text-white mt-1 block leading-relaxed font-semibold">📍 {contact.address}</span>
          </div>
        </div>

        <div className="pt-4">
          <a 
            href={`tel:${contact.phone}`}
            className="w-full py-4 bg-red-600 text-white font-bold rounded-btn text-xs text-center shadow-md flex items-center justify-center gap-1.5 hover:bg-red-700 active:scale-95 transition"
          >
            <span>📞</span> Call Emergency Line
          </a>
        </div>
      </div>
    </div>
  );
};

export const CommunityPostCreateScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme, addCommunityPost } = useApp();
  const [content, setContent] = useState('');

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      addCommunityPost(content, undefined, 'General');
      navigate('/community-feed');
    }
  };

  return (
    <div className={`flex-grow flex flex-col justify-between select-none ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      <div className="flex-grow overflow-y-auto p-4 space-y-4 pb-14 text-xs pr-1">
        <div className="flex items-center gap-2 mb-2">
          <button 
            onClick={() => navigate('/community-feed')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-xs font-bold uppercase tracking-wider">Create Feed Post</span>
        </div>

        <form onSubmit={handlePublish} className="space-y-4">
          <div>
            <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase">Share with Ward Residents</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What is happening in your neighbourhood? Share events, issues or local news..."
              className="w-full min-h-[140px] p-3.5 text-xs bg-white dark:bg-neutral-900 border border-slate-205 dark:border-neutral-805 rounded-2xl focus:outline-none focus:border-primary text-slate-800 dark:text-white resize-none font-medium leading-relaxed"
              required
              autoFocus
            ></textarea>
          </div>

          <button 
            type="submit"
            disabled={!content.trim()}
            className="w-full py-4 bg-primary text-white font-bold rounded-btn shadow-md hover:bg-primary-dark transition active:scale-95 disabled:opacity-50 text-xs"
          >
            Publish Post
          </button>
        </form>
      </div>
    </div>
  );
};

export const CommunityPostDetailScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme, communityPosts, addCommentToPost } = useApp();
  const { postId } = useParams<{ postId: string }>();
  const [commentText, setCommentText] = useState('');

  const post = communityPosts.find(p => p.id === postId) || communityPosts[0];

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      addCommentToPost(post.id, commentText);
      setCommentText('');
    }
  };

  return (
    <div className={`flex-grow flex flex-col justify-between select-none ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      <div className="flex-grow overflow-y-auto p-4 space-y-4 pb-14 text-xs pr-1">
        <div className="flex items-center gap-2 mb-2">
          <button 
            onClick={() => navigate('/community-feed')}
            className="p-1 rounded-full text-slate-405 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-xs font-bold uppercase tracking-wider">Post Details</span>
        </div>

        <div className={`p-4 rounded-card border shadow-2xs flex flex-col gap-3.5 ${
          theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-150'
        }`}>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2.5">
              <img src={post.avatar} alt={post.author} className="w-9 h-9 rounded-full object-cover" />
              <div>
                <h4 className="text-xs font-bold">{post.author}</h4>
                <p className="text-[9px] text-slate-450">Avadi Local Resident</p>
              </div>
            </div>
            <span className="text-[10px] text-slate-400 font-semibold">{post.time}</span>
          </div>

          <p className="text-xs leading-relaxed font-semibold">{post.content}</p>
          {post.image && (
            <div className="rounded-xl overflow-hidden aspect-video border bg-slate-50">
              <img src={post.image} alt="Post Attachment" className="w-full h-full object-cover" />
            </div>
          )}
        </div>

        <div className="space-y-3.5">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Comments ({post.comments.length})</h4>
          
          {post.comments.length === 0 ? (
            <p className="text-slate-400 py-2">No comments yet. Start the conversation!</p>
          ) : (
            <div className="space-y-2.5">
              {post.comments.map((c, idx) => (
                <div 
                  key={idx}
                  className={`p-3 rounded-xl border flex flex-col gap-1 ${
                    theme === 'dark' ? 'bg-[#141414] border-neutral-850' : 'bg-slate-100/50 border-slate-100'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-extrabold text-[10px] text-slate-700 dark:text-neutral-300">{c.author}</span>
                    <span className="text-[9px] text-slate-400">{c.time}</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-655 dark:text-neutral-300 font-semibold">{c.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <form onSubmit={handleAddComment} className="flex gap-2 pt-2">
          <input 
            type="text"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Write a comment..."
            className={`flex-grow px-3 py-2 text-xs font-semibold rounded-btn border focus:outline-none focus:border-primary ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-855' : 'bg-white border-slate-200'
            }`}
            required
          />
          <button 
            type="submit"
            className="px-4 bg-primary text-white font-bold rounded-btn text-[10px] uppercase shadow-xs hover:bg-primary-dark"
          >
            Comment
          </button>
        </form>
      </div>
    </div>
  );
};

