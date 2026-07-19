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
  Sun,
  Plus
} from 'lucide-react';



// ==========================================
// CIVIC HUB SCREEN
// ==========================================
export const CivicHubScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scrollable Container */}
      <div className="flex-1 overflow-y-auto p-5 space-y-5 pb-20">
        {/* Header */}
        <div className="flex items-center gap-2 h-8">
          <button 
            onClick={() => navigate('/home')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <h2 className="text-md font-black">Complaints</h2>
        </div>

        {/* How it Works progress row */}
        <div className={`p-3.5 rounded-card border ${
          theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-100 shadow-3xs'
        }`}>
          <span className="text-[8px] font-black tracking-wider uppercase text-slate-400 dark:text-neutral-500">How it works</span>
          <div className="flex justify-between items-center mt-2.5 text-[9px] font-bold text-slate-500 dark:text-neutral-400">
            <span>Report</span>
            <span className="text-slate-300">❯</span>
            <span>Review</span>
            <span className="text-slate-300">❯</span>
            <span>Action</span>
            <span className="text-slate-300">❯</span>
            <span className="text-primary">Resolve</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={() => navigate('/complaints')}
            className={`p-4 rounded-card border shadow-3xs flex flex-col justify-between text-left h-24 transition active:scale-95 duration-200 ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
            }`}
          >
            <span className="text-xl">📊</span>
            <div>
              <h5 className="text-[11px] font-extrabold">My Reports</h5>
              <p className="text-[8px] text-slate-405 dark:text-neutral-500 leading-normal mt-0.5">Track your reports</p>
            </div>
          </button>

          <button 
            onClick={() => navigate('/complaints')}
            className={`p-4 rounded-card border shadow-3xs flex flex-col justify-between text-left h-24 transition active:scale-95 duration-200 ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
            }`}
          >
            <span className="text-xl">📋</span>
            <div>
              <h5 className="text-[11px] font-extrabold">My Complaints</h5>
              <p className="text-[8px] text-slate-405 dark:text-neutral-500 leading-normal mt-0.5">View your complaints</p>
            </div>
          </button>

          <button 
            onClick={() => navigate('/alerts')}
            className={`p-4 rounded-card border shadow-3xs flex flex-col justify-between text-left h-24 transition active:scale-95 duration-200 ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
            }`}
          >
            <span className="text-xl">🚨</span>
            <div>
              <h5 className="text-[11px] font-extrabold">Local Alerts</h5>
              <p className="text-[8px] text-slate-405 dark:text-neutral-500 leading-normal mt-0.5">Important alerts & updates</p>
            </div>
          </button>

          <button 
            onClick={() => navigate('/services?category=government')}
            className={`p-4 rounded-card border shadow-3xs flex flex-col justify-between text-left h-24 transition active:scale-95 duration-200 ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
            }`}
          >
            <span className="text-xl">🏛️</span>
            <div>
              <h5 className="text-[11px] font-extrabold">Govt Services</h5>
              <p className="text-[8px] text-slate-405 dark:text-neutral-500 leading-normal mt-0.5">Access government services</p>
            </div>
          </button>
        </div>

        {/* Ward Administration */}
        <div className={`p-4.5 rounded-card border shadow-2xs ${
          theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
        }`}>
          <h4 className="text-[9px] font-black uppercase tracking-wider text-slate-400 dark:text-neutral-500">Ward Administration</h4>
          <div className="flex items-center gap-3.5 mt-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xs shrink-0">
              MM
            </div>
            <div className="space-y-0.5">
              <h5 className="text-[11px] font-extrabold">M. S. Mohan</h5>
              <p className="text-[9px] text-slate-405 dark:text-neutral-500 font-semibold">Ward Officer - Ward 12</p>
              <p className="text-[9px] text-slate-500 dark:text-neutral-450 font-bold mt-1">📞 +91 98765 43210</p>
              <p className="text-[9px] text-slate-505 dark:text-neutral-450 font-bold">✉ ward12@avadi.gov.in</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Sticky Bottom Primary Action */}
      <div className="absolute bottom-16 left-0 w-full p-4 z-20 bg-transparent">
        <button 
          onClick={() => navigate('/complaints/camera')}
          className="w-full py-3.5 bg-[#FF4B2B] hover:bg-[#e03d1e] text-white font-bold rounded-btn shadow-md hover:scale-[1.01] active:scale-[0.98] transition text-xs text-center"
        >
          Report a Complaint
        </button>
      </div>

      {/* Sticky Bottom Navigation */}
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
}

// ==========================================
// MY REPORTED SCREEN
// ==========================================
export const MyReportedScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [activeTab, setActiveTab] = useState<'my' | 'public'>('my');

  return (
    <div className={`flex-grow flex flex-col justify-between select-none relative h-full ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scrollable list */}
      <div className="flex-1 overflow-y-auto p-5 space-y-5 pb-20">
        
        {/* Header */}
        <div className="flex items-center gap-2 h-8">
          <button 
            onClick={() => navigate('/civic')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <h2 className="text-md font-black">My Complaints</h2>
        </div>

        {/* Tabs selector */}
        <div className="flex gap-2">
          <button 
            onClick={() => setActiveTab('my')}
            className={`flex-1 py-2 text-[10px] uppercase tracking-wider font-extrabold rounded-full border transition ${
              activeTab === 'my'
                ? 'bg-primary text-white border-primary shadow-xs'
                : 'bg-white dark:bg-neutral-900 text-slate-455 dark:text-neutral-500 border-slate-150 dark:border-neutral-800'
            }`}
          >
            My Complaints
          </button>
          <button 
            onClick={() => setActiveTab('public')}
            className={`flex-1 py-2 text-[10px] uppercase tracking-wider font-extrabold rounded-full border transition ${
              activeTab === 'public'
                ? 'bg-primary text-white border-primary shadow-xs'
                : 'bg-white dark:bg-neutral-900 text-slate-455 dark:text-neutral-500 border-slate-150 dark:border-neutral-800'
            }`}
          >
            Public Complaints
          </button>
        </div>

        {/* Main tracking card */}
        <div className={`p-4.5 rounded-[20px] border shadow-2xs space-y-4 ${
          theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
        }`}>
          {/* Card Header ID & status */}
          <div className="flex justify-between items-center pb-2.5 border-b border-slate-100 dark:border-neutral-800/60">
            <span className="text-[10px] font-black tracking-wide text-primary">AVD12-240501-0012</span>
            <span className="px-2 py-0.5 border border-emerald-500/50 bg-emerald-500/5 text-emerald-500 rounded-full text-[8px] font-extrabold uppercase">
              In Progress
            </span>
          </div>

          {/* Issue category & address */}
          <div>
            <h4 className="text-xs font-black text-slate-800 dark:text-white">Street Light</h4>
            <p className="text-[10px] text-slate-405 dark:text-neutral-550 mt-0.5 font-semibold">ABC Nagar 2nd Street</p>
          </div>

          {/* Progress vertical path timeline */}
          <div className="relative pl-6 space-y-4 py-1.5">
            {/* Connecting line */}
            <div className="absolute left-[5px] top-2.5 bottom-2.5 w-0.5 bg-slate-200 dark:bg-neutral-800"></div>

            {/* Step 1: Submitted */}
            <div className="relative">
              <div className="absolute -left-[24.5px] top-1 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white dark:border-neutral-900 shadow-3xs"></div>
              <div>
                <h5 className="text-[10px] font-black text-slate-850 dark:text-neutral-200">Submitted</h5>
                <p className="text-[8px] text-slate-400 mt-0.5">01 May 2024, 10:30 AM</p>
              </div>
            </div>

            {/* Step 2: Under Review */}
            <div className="relative">
              <div className="absolute -left-[24.5px] top-1 w-2.5 h-2.5 rounded-full bg-amber-500 border-2 border-white dark:border-neutral-900 shadow-3xs"></div>
              <div>
                <h5 className="text-[10px] font-black text-slate-850 dark:text-neutral-200">Under Review</h5>
                <p className="text-[8px] text-slate-400 mt-0.5">01 May 2024, 11:00 AM</p>
              </div>
            </div>

            {/* Step 3: Action Taken */}
            <div className="relative">
              <div className="absolute -left-[24.5px] top-1 w-2.5 h-2.5 rounded-full bg-primary border-2 border-white dark:border-neutral-900 shadow-3xs animate-pulse"></div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h5 className="text-[10px] font-black text-slate-850 dark:text-neutral-200">Action Taken</h5>
                  <span className="text-[7px] font-extrabold uppercase bg-primary/10 text-primary px-1 rounded-sm">In Progress</span>
                </div>
                <p className="text-[8px] text-slate-400 mt-0.5">01 May 2024, 02:15 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button View Details */}
      <div className="absolute bottom-16 left-0 w-full p-4 z-20 bg-transparent">
        <button 
          onClick={() => navigate('/complaints/comp_1')}
          className="w-full py-3.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-btn shadow-md hover:scale-[1.01] active:scale-[0.98] transition text-xs text-center uppercase tracking-wider"
        >
          View Details
        </button>
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
          <span className="text-md">🏠</span>
          <span className="text-[9px] font-bold mt-1">Home</span>
        </button>
        <button 
          onClick={() => navigate('/civic')}
          className="flex flex-col items-center justify-center flex-1 text-primary"
        >
          <span className="text-md bg-primary/10 px-4 py-0.5 rounded-full">🏛️</span>
          <span className="text-[9px] font-bold mt-1">Civic</span>
        </button>
        <button 
          onClick={() => navigate('/explore')} 
          className="flex flex-col items-center justify-center flex-1 opacity-70 hover:opacity-100 transition"
        >
          <span className="text-md">🧭</span>
          <span className="text-[9px] font-bold mt-1">Explore</span>
        </button>
        <button 
          onClick={() => navigate('/community-feed')}
          className="flex flex-col items-center justify-center flex-1 opacity-70 hover:opacity-100 transition"
        >
          <span className="text-md">👥</span>
          <span className="text-[9px] font-bold mt-1">Feed</span>
        </button>
      </div>
    </div>
  );
}

// ==========================================
// CREATE FEED POST SCREEN
// ==========================================
export const CommunityPostCreateScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [content, setContent] = useState('');
  const [postTo, setPostTo] = useState<'ward' | 'all'>('ward');
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);

  const presets = [
    { label: '💡 Street Light', url: '/assets/images/live-update-thumbnail-1.png' },
    { label: '🚧 Road damage', url: '/assets/images/live-update-thumbnail-2.png' },
    { label: '🗑️ Garbage', url: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&q=80&w=400' }
  ];

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      navigate('/community-feed');
    }
  };

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll Container */}
      <div className="flex-grow overflow-y-auto p-5 space-y-4 pb-20">
        {/* Header */}
        <div className="flex items-center gap-2 h-8">
          <button 
            onClick={() => navigate('/community-feed')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-xs font-black text-slate-800 dark:text-white mr-6">Create Post</span>
          <div></div>
        </div>

        <form onSubmit={handlePublish} className="space-y-4">
          {/* Post To buttons */}
          <div className="space-y-1">
            <label className="text-[9px] font-black uppercase tracking-wide text-slate-400 dark:text-neutral-500">Post in</label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setPostTo('ward')}
                className={`px-3 py-1.5 rounded-full text-[10px] font-bold border transition ${
                  postTo === 'ward'
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white dark:bg-neutral-900 border-slate-205 dark:border-neutral-805 text-slate-500'
                }`}
              >
                ✔ My Ward
              </button>
              <button
                type="button"
                onClick={() => setPostTo('all')}
                className={`px-3 py-1.5 rounded-full text-[10px] font-bold border transition ${
                  postTo === 'all'
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white dark:bg-neutral-900 border-slate-205 dark:border-neutral-805 text-slate-500'
                }`}
              >
                All Avadi
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1">
            <label className="text-[9px] font-black uppercase tracking-wide text-slate-400 dark:text-neutral-500">Description</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's on your mind?"
              rows={4}
              className={`w-full p-3.5 text-xs font-semibold rounded-btn border focus:outline-none focus:border-primary resize-none ${
                theme === 'dark' 
                  ? 'bg-neutral-900 border-neutral-805 text-white' 
                  : 'bg-white border-slate-200 text-slate-800'
              }`}
              required
            />
          </div>

          {/* Preset Photo uploads */}
          <div className="space-y-1.5">
            <label className="text-[9px] font-black uppercase tracking-wide text-slate-400 dark:text-neutral-500">Attach Photos (Max 3)</label>
            <div className="flex gap-2.5">
              {presets.map((p) => (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => {
                    setSelectedPreset(p.label);
                  }}
                  className={`w-16 h-16 rounded-xl border border-dashed flex flex-col items-center justify-center text-slate-350 hover:border-primary transition ${
                    selectedPreset === p.label ? 'border-primary ring-1 ring-primary/20 bg-primary/5' : 'border-slate-200 bg-slate-50'
                  }`}
                >
                  <Plus size={16} />
                  <span className="text-[8px] mt-1">{p.label.split(' ')[1]}</span>
                </button>
              ))}
            </div>
          </div>
        </form>
      </div>

      {/* Sticky Bottom Publish Button */}
      <div className="absolute bottom-4 left-0 w-full p-4 z-20 bg-transparent">
        <button
          onClick={handlePublish}
          disabled={!content.trim()}
          className="w-full py-3.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-btn shadow-md hover:scale-101 active:scale-95 transition-all duration-200 text-xs uppercase tracking-wider text-center"
        >
          Post Now
        </button>
      </div>
    </div>
  );
}

// ==========================================
// EMERGENCY CONTACTS SCREEN
// ==========================================
export const EmergencyContactsScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [searchQuery, setSearchQuery] = useState('');

  const contacts = [
    { name: 'Police Helpline', number: '100', subtitle: 'General assistance & crime reporting' },
    { name: 'Ambulance Service', number: '108', subtitle: 'Medical emergencies & life support' },
    { name: 'Fire & Rescue Service', number: '101', subtitle: 'Fire control & rescue operations' },
    { name: 'Women Helpline', number: '1091', subtitle: 'Safety & support services for women' },
    { name: 'Child Helpline', number: '1098', subtitle: 'Child welfare & protection support' },
    { name: 'Disaster Management', number: '1077', subtitle: 'Natural calamities & crisis response' },
    { name: 'Traffic Police', number: '103', subtitle: 'Road safety & traffic issues' },
    { name: 'Cyber Crime cell', number: '1930', subtitle: 'Online fraud & cyber security complaints' }
  ];

  const filtered = contacts.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.number.includes(searchQuery)
  );

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none h-full ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-white text-slate-800'
    }`}>
      {/* Header */}
      <div className="flex items-center gap-3">
        <button 
          onClick={() => navigate(-1)}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-lg font-black">Emergency Contacts</h2>
      </div>

      {/* Search */}
      <div className="my-4 relative">
        <input 
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search contact numbers..."
          className={`w-full p-3.5 pr-10 text-xs font-semibold rounded-btn border focus:outline-none focus:border-primary ${
            theme === 'dark' ? 'bg-neutral-900 border-neutral-855 text-white' : 'bg-slate-50 border-slate-200 text-slate-800'
          }`}
        />
        <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto space-y-3 pr-1">
        {filtered.map((c, i) => (
          <div 
            key={i}
            className={`p-4 rounded-card border flex items-center justify-between shadow-2xs hover:scale-101 transition duration-150 ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-slate-50/50 border-slate-100'
            }`}
          >
            <div>
              <h3 className="text-xs font-black text-slate-800 dark:text-white flex items-center gap-1.5">
                <span>{c.name}</span>
                <span className="text-[10px] text-red-500 font-bold bg-red-500/10 px-2 py-0.5 rounded-full">
                  {c.number}
                </span>
              </h3>
              <p className="text-[9px] text-slate-455 dark:text-neutral-500 mt-1 font-semibold">{c.subtitle}</p>
            </div>
            
            <button
              onClick={() => alert(`Initiating emergency call to ${c.number}...`)}
              className="p-2.5 rounded-full bg-red-500 hover:bg-red-650 text-white shadow-md active:scale-90 transition duration-150"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <div className="pt-4">
        <button 
          onClick={() => navigate(-1)}
          className={`w-full py-3.5 font-bold rounded-btn border text-xs text-center active:scale-95 transition ${
            theme === 'dark' ? 'bg-neutral-900 border-neutral-800 hover:bg-neutral-850' : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
          }`}
        >
          Close Emergency Contacts
        </button>
      </div>
    </div>
  );
}

// ==========================================
// ABOUT APP SCREEN
// ==========================================
export const AboutAppScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none h-full ${
      theme === 'dark' ? 'bg-[#0f1424] text-white' : 'bg-gradient-to-b from-[#f0f4ff] to-[#fafafa] text-slate-800'
    }`}>
      {/* Header */}
      <div className="flex items-center gap-3">
        <button 
          onClick={() => navigate(-1)}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-lg font-black">About App</h2>
      </div>

      {/* App Branding Info */}
      <div className="flex-1 flex flex-col justify-center items-center text-center my-6">
        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg text-white font-black text-2xl tracking-wider mb-3">
          AC
        </div>
        <h3 className="text-lg font-black text-primary dark:text-white">AVADI CONNECT</h3>
        <p className="text-[10px] text-slate-450 dark:text-neutral-500 font-bold uppercase tracking-wider mt-0.5">Version 1.0.0 (Stable)</p>
        
        <p className="text-xs text-slate-500 dark:text-neutral-400 mt-4 leading-relaxed max-w-xs font-semibold">
          One App. Many Services. Stronger Community. Better Avadi.
        </p>

        {/* Temple Illustration mockup box */}
        <div className={`mt-8 w-56 h-36 border rounded-card relative overflow-hidden flex items-center justify-center bg-slate-50/50 ${
          theme === 'dark' ? 'border-neutral-850' : 'border-slate-150'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent z-0"></div>
          <span className="text-[9px] font-bold text-slate-400 z-10">Avadi Gopuram Illustration</span>
        </div>
      </div>

      {/* App Meta Footer */}
      <div className="space-y-4 mb-2">
        <div className="text-center text-[9px] text-slate-400 dark:text-neutral-500 font-semibold leading-normal">
          <p>© 2026 Avadi Connect. All rights reserved.</p>
          <p className="mt-0.5">Avadi City Municipal Corporation Initiative</p>
        </div>
        
        <button 
          onClick={() => navigate(-1)}
          className={`w-full py-3.5 font-bold rounded-btn border text-xs text-center active:scale-95 transition ${
            theme === 'dark' ? 'bg-neutral-900 border-neutral-800 hover:bg-neutral-850' : 'bg-slate-50/80 border-slate-200 hover:bg-slate-100'
          }`}
        >
          Back
        </button>
      </div>
    </div>
  );
}
