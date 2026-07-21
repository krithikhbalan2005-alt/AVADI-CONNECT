import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ChevronLeft, Search, Plus, X } from 'lucide-react';

// ==========================================
// 9. CREATE POST SCREEN
// ==========================================
export const CommunityPostCreateScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [content, setContent] = useState('');
  const [postTo, setPostTo] = useState<'feed' | 'all'>('feed');
  const [selectedPreset, setSelectedPreset] = useState<string | null>('light');

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
      <div className="flex-grow overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header */}
        <div className="flex justify-between items-center h-8">
          <button 
            onClick={() => navigate('/community-feed')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-xs font-black text-slate-850 dark:text-white">Create Post</span>
          <button 
            onClick={() => navigate('/community-feed')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* Selected Image Preview Box */}
        <div className="rounded-xl overflow-hidden aspect-video border border-slate-100 dark:border-neutral-900 bg-slate-100 dark:bg-neutral-950 relative">
          <img 
            src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=600" 
            alt="Attached Preview" 
            className="w-full h-full object-cover" 
          />
          <button
            type="button"
            className="absolute top-2 right-2 w-5 h-5 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition text-[9px] font-bold"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handlePublish} className="space-y-4">
          {/* Post To buttons */}
          <div className="space-y-1">
            <label className="text-[9px] font-black uppercase tracking-wide text-slate-400 dark:text-neutral-500">Post to</label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setPostTo('feed')}
                className="flex items-center gap-1.5 text-xs font-bold"
              >
                <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center text-[9px] ${
                  postTo === 'feed' ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-300'
                }`}>
                  {postTo === 'feed' && '✓'}
                </span>
                <span className={postTo === 'feed' ? 'text-emerald-600' : 'text-slate-500'}>My Feed</span>
              </button>
              
              <button
                type="button"
                onClick={() => setPostTo('all')}
                className="flex items-center gap-1.5 text-xs font-bold"
              >
                <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center text-[9px] ${
                  postTo === 'all' ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-300'
                }`}>
                  {postTo === 'all' && '✓'}
                </span>
                <span className={postTo === 'all' ? 'text-emerald-600' : 'text-slate-500'}>All Avadi</span>
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1">
            <label className="text-[9px] font-black uppercase tracking-wide text-slate-400 dark:text-neutral-500">Description</label>
            <div className="relative">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="What's on your mind?"
                maxLength={300}
                rows={3.5}
                className={`w-full p-3.5 pb-6 text-xs font-semibold rounded-btn border focus:outline-none focus:border-primary resize-none ${
                  theme === 'dark' 
                    ? 'bg-neutral-900 border-neutral-805 text-white' 
                    : 'bg-white border-slate-200 text-slate-800'
                }`}
                required
              />
              <span className="absolute bottom-2 right-3 text-[9px] text-slate-400 font-bold">
                {content.length}/300
              </span>
            </div>
          </div>

          {/* Preset Photo uploads */}
          <div className="space-y-1.5">
            <label className="text-[9px] font-black uppercase tracking-wide text-slate-400 dark:text-neutral-500">Attach Photos (Max 3)</label>
            <div className="flex gap-2.5">
              {/* Photo 1 (selected) */}
              <div className="w-16 h-16 rounded-xl border border-slate-100 dark:border-neutral-900 overflow-hidden relative shadow-3xs flex items-center justify-center bg-slate-100 dark:bg-neutral-955">
                <img src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=600" alt="Card Preview" className="w-full h-full object-cover" />
                <button className="absolute top-1 right-1 w-4 h-4 bg-black/60 rounded-full text-white flex items-center justify-center text-[7px] font-extrabold hover:bg-black">✕</button>
              </div>

              {/* slot 2 */}
              <button
                type="button"
                className="w-16 h-16 rounded-xl border border-dashed border-slate-300 dark:border-neutral-800 flex items-center justify-center text-slate-400 hover:border-[#4A3AFF] transition bg-white dark:bg-neutral-950"
              >
                <Plus size={16} />
              </button>

              {/* slot 3 */}
              <button
                type="button"
                className="w-16 h-16 rounded-xl border border-dashed border-slate-300 dark:border-neutral-800 flex items-center justify-center text-slate-400 hover:border-[#4A3AFF] transition bg-white dark:bg-neutral-950"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Add Tags */}
          <div className="space-y-1">
            <label className="text-[9px] font-black uppercase tracking-wide text-slate-400 dark:text-neutral-500">Add Tags</label>
            <div className={`p-3 text-xs font-semibold rounded-btn border flex justify-between items-center cursor-pointer ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-805 text-white' : 'bg-white border-slate-200 text-slate-405'
            }`}>
              <span>Select tags</span>
              <span className="text-[10px] opacity-70">▼</span>
            </div>
          </div>
        </form>
      </div>

      {/* Sticky Bottom Publish Button */}
      <div className="absolute bottom-4 left-0 w-full p-4 z-20 bg-transparent">
        <button
          onClick={handlePublish}
          disabled={!content.trim()}
          className="w-full py-3.5 bg-[#4A3AFF] hover:bg-[#3b2ecc] text-white font-bold rounded-btn shadow-md hover:scale-101 active:scale-95 transition-all duration-200 text-xs uppercase tracking-wider text-center"
        >
          Post Now
        </button>
      </div>
    </div>
  );
};

// ==========================================
// 10. COMPLAINTS HOME SCREEN (Cremplaints)
// ==========================================
export const CivicHubScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scrollable Container */}
      <div className="flex-1 overflow-y-auto p-5 space-y-5 pb-20 text-left">
        {/* Header */}
        <div className="flex justify-between items-center h-8">
          <button 
            onClick={() => navigate('/home')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <h2 className="text-md font-black">Cremplaints</h2>
          <button className="p-1 text-slate-400"><Search size={18} /></button>
        </div>

        {/* Your Complaints section & tracker */}
        <div className={`p-4 rounded-card border ${
          theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-100 shadow-3xs'
        }`}>
          <span className="text-[9px] font-black tracking-wide text-slate-800 dark:text-white uppercase">Your Complaints</span>
          <div className="flex justify-between items-center mt-3 text-[8.5px] font-black text-slate-505 dark:text-neutral-400">
            <span className="flex items-center gap-1"><span className="text-red-500">•</span>Report</span>
            <span className="text-slate-300">❯</span>
            <span className="flex items-center gap-1"><span className="text-red-500">•</span>Review</span>
            <span className="text-slate-300">❯</span>
            <span className="flex items-center gap-1"><span className="text-amber-500">•</span>Action</span>
            <span className="text-slate-300">❯</span>
            <span className="flex items-center gap-1"><span className="text-emerald-500">•</span>Resolve</span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={() => navigate('/my-reports', { state: { activeTab: 'my' } })}
            className={`p-4 rounded-card border shadow-3xs flex flex-col justify-between text-left h-24 transition duration-200 ${
              theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-150'
            }`}
          >
            <span className="text-xl">🟢</span>
            <div>
              <h5 className="text-[10.5px] font-extrabold text-slate-800 dark:text-white">My Complaints</h5>
              <p className="text-[7.5px] text-slate-400 leading-normal mt-0.5 font-bold">Track status</p>
            </div>
          </button>

          <button 
            onClick={() => navigate('/my-reports', { state: { activeTab: 'public' } })}
            className={`p-4 rounded-card border shadow-3xs flex flex-col justify-between text-left h-24 transition duration-200 ${
              theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-150'
            }`}
          >
            <span className="text-xl">🔴</span>
            <div>
              <h5 className="text-[10.5px] font-extrabold text-slate-800 dark:text-white">Public Complaints</h5>
              <p className="text-[7.5px] text-slate-400 leading-normal mt-0.5 font-bold">View community issues</p>
            </div>
          </button>

          <button 
            onClick={() => navigate('/alerts')}
            className={`p-4 rounded-card border shadow-3xs flex flex-col justify-between text-left h-24 transition duration-200 ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
            }`}
          >
            <span className="text-xl">🟢</span>
            <div>
              <h5 className="text-[10.5px] font-extrabold text-slate-800 dark:text-white">Latest News</h5>
              <p className="text-[7.5px] text-slate-400 leading-normal mt-0.5 font-bold">Updates & alerts</p>
            </div>
          </button>

          <button 
            onClick={() => navigate('/services')}
            className={`p-4 rounded-card border shadow-3xs flex flex-col justify-between text-left h-24 transition duration-200 ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
            }`}
          >
            <span className="text-xl">🟠</span>
            <div>
              <h5 className="text-[10.5px] font-extrabold text-slate-800 dark:text-white">Smart Services</h5>
              <p className="text-[7.5px] text-slate-400 leading-normal mt-0.5 font-bold">Quick actions</p>
            </div>
          </button>
        </div>

        {/* Ward Administration */}
        <div className={`p-4 rounded-card border shadow-2xs space-y-3.5 ${
          theme === 'dark' ? 'bg-neutral-900 border-neutral-850 text-white' : 'bg-white border-slate-150 text-slate-805'
        }`}>
          <h4 className="text-[9px] font-black uppercase tracking-wider text-slate-400 dark:text-neutral-500">Ward Administration Directory</h4>
          
          <div className="space-y-3.5 divide-y divide-slate-100 dark:divide-neutral-800">
            {/* Councillor */}
            <div className="pt-0 flex items-start gap-3">
              <span className="text-lg mt-0.5">👤</span>
              <div className="space-y-0.5 leading-tight text-[9px] font-semibold text-slate-500 dark:text-neutral-400">
                <h5 className="text-[10px] font-black text-slate-800 dark:text-white">Mrs. R. Selvi (Councillor - Ward 12)</h5>
                <p>📞 +91 98401 22233</p>
                <p>✉ councillor.w12@avadicity.gov.in</p>
                <p>📍 Office: Bazaar Street Ward Office, Avadi</p>
              </div>
            </div>

            {/* MLA */}
            <div className="pt-3 flex items-start gap-3">
              <span className="text-lg mt-0.5">🏛️</span>
              <div className="space-y-0.5 leading-tight text-[9px] font-semibold text-slate-500 dark:text-neutral-400">
                <h5 className="text-[10px] font-black text-slate-800 dark:text-white">Mr. S. M. Nasar (Avadi MLA)</h5>
                <p>📞 +91 98402 33344</p>
                <p>📍 Office: MLA Liaison Office, Avadi High Road</p>
              </div>
            </div>

            {/* Corporation office */}
            <div className="pt-3 flex items-start gap-3">
              <span className="text-lg mt-0.5">🏢</span>
              <div className="space-y-0.5 leading-tight text-[9px] font-semibold text-slate-500 dark:text-neutral-400">
                <h5 className="text-[10px] font-black text-slate-800 dark:text-white">Avadi Municipal Corporation</h5>
                <p>📞 Helpdesk: 1800 425 6112 / 044-26340224</p>
                <p>📍 Address: NM Road, Avadi, Chennai - 600054</p>
              </div>
            </div>

            {/* E-Sevai */}
            <div className="pt-3 flex items-start gap-3">
              <span className="text-lg mt-0.5">💻</span>
              <div className="space-y-0.5 leading-tight text-[9px] font-semibold text-slate-500 dark:text-neutral-400">
                <h5 className="text-[10px] font-black text-slate-800 dark:text-white">E-Sevai Maiyam (E-Service)</h5>
                <p>🕒 Timings: Mon-Sat: 9:30 AM - 5:30 PM</p>
                <p>📍 Location: Sector 2 Corporation Complex, Avadi</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Sticky Bottom Primary Action (Red Button) */}
      <div className="absolute bottom-4 left-0 w-full p-4 z-20 bg-transparent">
        <button 
          onClick={() => navigate('/complaints/camera')}
          className="w-full py-3.5 bg-[#FF3B30] hover:bg-[#e03126] text-white font-bold rounded-btn shadow-md active:scale-[0.98] transition text-xs text-center"
        >
          Report a Complaint
        </button>
      </div>
    </div>
  );
};


// SCREEN 14
export const MyReportedScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'my' | 'public'>(location.state?.activeTab || 'my');

  const myComplaints = [
    {
      id: "AVD12-2025-0012",
      category: "Street Light Broken",
      landmark: "Near Avadi School Main Gate",
      date: "May 20, 2025",
      status: "In Progress",
      address: "Sector 7, Ward 12, Avadi",
      icon: "💡"
    },
    {
      id: "AVD12-2025-0008",
      category: "Sewage Overflow",
      landmark: "Bazaar Street Market Junction",
      date: "May 12, 2025",
      status: "Resolved",
      address: "Bazaar Street, Ward 12, Avadi",
      icon: "🚰"
    }
  ];

  const publicComplaints = [
    {
      id: "AVD04-2025-0015",
      category: "Road Damage / Potholes",
      landmark: "Railway Station Road Roadbed",
      date: "May 21, 2025",
      status: "Under Review",
      address: "Station Road, Ward 4, Avadi",
      icon: "🕳️"
    },
    {
      id: "AVD12-2025-0014",
      category: "Garbage Accumulation",
      landmark: "Lake Eco-Park Entrance Left side",
      date: "May 19, 2025",
      status: "In Progress",
      address: "Eco-Park Road, Ward 12, Avadi",
      icon: "🗑️"
    },
    {
      id: "AVD13-2025-0005",
      category: "Water Logging in Streets",
      landmark: "Green Park 2nd Cross Street Corner",
      date: "May 15, 2025",
      status: "Resolved",
      address: "Green Park Avenue, Ward 13, Avadi",
      icon: "💧"
    }
  ];

  const currentList = activeTab === 'my' ? myComplaints : publicComplaints;

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scrollable Container */}
      <div className="flex-grow overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header */}
        <div className="flex items-center gap-2">
          <button onClick={() => navigate('/civic')} className="p-1 text-slate-405 hover:text-slate-650"><ChevronLeft size={20} /></button>
          <span className="text-xs font-black text-slate-855 dark:text-white uppercase tracking-wider">Complaints Registry</span>
        </div>

        {/* Tab Selector */}
        <div className="flex gap-2 text-[10px] font-bold border-b border-slate-100 dark:border-neutral-900 pb-2">
          <button 
            type="button"
            onClick={() => setActiveTab('my')}
            className={`px-4 py-2 rounded-full border uppercase tracking-wider transition ${
              activeTab === 'my'
                ? 'bg-blue-50 dark:bg-blue-955/20 text-[#4A3AFF] border-[#4A3AFF] shadow-3xs'
                : 'bg-white dark:bg-neutral-900 text-slate-400 dark:text-neutral-500 border-slate-150 dark:border-neutral-800'
            }`}
          >
            My Complaints
          </button>
          <button 
            type="button"
            onClick={() => setActiveTab('public')}
            className={`px-4 py-2 rounded-full border uppercase tracking-wider transition ${
              activeTab === 'public'
                ? 'bg-blue-50 dark:bg-blue-955/20 text-[#4A3AFF] border-[#4A3AFF] shadow-3xs'
                : 'bg-white dark:bg-neutral-900 text-slate-400 dark:text-neutral-500 border-slate-150 dark:border-neutral-800'
            }`}
          >
            Public Complaints
          </button>
        </div>

        {/* Listings */}
        <div className="space-y-4">
          {currentList.map((item) => (
            <div
              key={item.id}
              className={`p-4 rounded-card border shadow-2xs space-y-3.5 text-left ${
                theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              {/* Card Header ID & Badge */}
              <div className="flex justify-between items-center text-[10px] font-black">
                <span className="text-slate-800 dark:text-white">{item.id}</span>
                <span className={`px-2 py-0.5 text-[8px] font-black rounded-full ${
                  item.status === 'Resolved' 
                    ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30' 
                    : item.status === 'In Progress'
                    ? 'text-blue-600 bg-blue-50 dark:bg-blue-950/30'
                    : 'text-amber-600 bg-amber-50 dark:bg-amber-950/30'
                }`}>
                  {item.status}
                </span>
              </div>

              <div className="space-y-0.5 leading-tight text-left">
                <h5 className="text-[11px] font-extrabold text-slate-805 dark:text-white flex items-center gap-1.5">
                  <span>{item.icon}</span> {item.category}
                </h5>
                <p className="text-[8.5px] text-slate-405 dark:text-neutral-500 font-semibold">{item.landmark}</p>
              </div>

              {/* Location & Date */}
              <div className="text-[9px] font-semibold text-slate-500 dark:text-neutral-405 space-y-1">
                <div className="flex items-center gap-1.5">
                  <span>📅</span>
                  <span>Filed: {item.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span>📍</span>
                  <span>{item.address}</span>
                </div>
              </div>

              {/* View Details Button */}
              <button 
                onClick={() => navigate('/complaints/details')}
                className="w-full py-2.5 text-[10px] font-bold rounded-btn border border-slate-205 dark:border-neutral-800 text-slate-600 dark:text-neutral-300 hover:bg-slate-50 dark:hover:bg-neutral-800 transition text-center"
              >
                View Tracking Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Mock Tab bar */}
      <div className={`absolute bottom-0 left-0 w-full h-14 border-t flex justify-around items-center px-2 z-20 ${
        theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-150'
      }`}>
        <button onClick={() => navigate('/home')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">🏠</span><span>Home</span></button>
        <button onClick={() => navigate('/services')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">🛠️</span><span>Services</span></button>
        <button onClick={() => navigate('/civic')} className="flex flex-col items-center gap-1 text-[8.5px] text-indigo-500 font-bold"><span className="text-md">📝</span><span>Report</span></button>
        <button onClick={() => navigate('/explore')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">🧭</span><span>Explore</span></button>
        <button onClick={() => navigate('/settings')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">👤</span><span>Profile</span></button>
      </div>
    </div>
  );
};

export const EmergencySOSScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme, triggerSOS, sosActive, cancelSOS } = useApp();

  const contacts = [
    { name: 'Police', number: '100', icon: '⭐' },
    { name: 'Ambulance', number: '108', icon: '🚑' },
    { name: 'Fire & Rescue', number: '101', icon: '🚨' },
    { name: 'Municipality Help Desk', number: '1800 425 5444', icon: '🏢' }
  ];

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
    }`}>
      {/* Scrollable Area */}
      <div className="flex-grow overflow-y-auto p-5 space-y-6 pb-24 text-left">
        {/* Header */}
        <div className="h-8 flex items-center">
          <button 
            onClick={() => navigate('/home')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
        </div>

        {/* SOS Tap Graphic */}
        <div className="flex flex-col items-center justify-center my-3 space-y-4">
          <button 
            onClick={() => {
              if (sosActive) {
                cancelSOS();
              } else {
                triggerSOS();
              }
            }}
            className={`w-32 h-32 rounded-full border-[8px] flex flex-col items-center justify-center text-white active:scale-95 transition shadow-lg relative ${
              sosActive 
                ? 'bg-red-600 border-red-200 dark:border-red-900 animate-pulse' 
                : 'bg-red-500 border-red-100 dark:border-red-955'
            }`}
          >
            <span className="text-xl font-black tracking-wider">{sosActive ? 'ACTIVE' : 'SOS'}</span>
            <span className="text-[7.5px] font-bold mt-1 text-white/90">
              {sosActive ? 'Tap to Cancel' : 'Tap for SOS'}
            </span>
          </button>

          {sosActive && (
            <div className="w-full p-4 rounded-btn border bg-red-50 dark:bg-red-950/20 border-red-500/25 flex flex-col gap-1 text-center animate-bounce">
              <span className="text-xs font-black text-red-600 dark:text-red-400">🔴 SOS EMERGENCY SIGNAL ACTIVE</span>
              <p className="text-[9px] text-slate-500 dark:text-neutral-400 font-semibold leading-relaxed">
                Emergency services & representatives have been notified of your location.
              </p>
            </div>
          )}
        </div>

        {/* List Grid */}
        <div className="space-y-2">
          {contacts.map((contact, i) => (
            <div 
              key={i}
              className={`p-3.5 rounded-card border shadow-3xs flex justify-between items-center ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-sm">{contact.icon}</span>
                <span className="text-[10px] font-extrabold">{contact.name}</span>
              </div>
              <span className="text-[10px] font-black text-slate-705 dark:text-neutral-400">{contact.number}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Blood donation Red Button */}
      <div className="absolute bottom-4 left-0 w-full p-4 z-20 bg-transparent">
        <button
          onClick={() => {
            const phone = prompt('Enter your mobile number to request blood:');
            if (phone) {
              alert(`Blood request created successfully for the Avadi Blood Bank network. Local volunteers will contact you at ${phone}.`);
            }
          }}
          className="w-full py-3.5 bg-[#FF3B30] hover:bg-[#e03126] text-white font-bold rounded-btn shadow-md text-xs text-center uppercase tracking-wider"
        >
          Request Blood Donation
        </button>
      </div>
    </div>
  );
};

// ==========================================
// 16. MY COMPLAINTS (VARIANT)
// ==========================================
export const MyReportedScreenAlt: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [activeTab, setActiveTab] = useState<'my' | 'public'>('my');

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scrollable Container */}
      <div className="flex-grow overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header */}
        <div className="flex justify-between items-center h-8">
          <button 
            onClick={() => navigate('/civic')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-xs font-black text-slate-850 dark:text-white">My Complaints</span>
          <div className="w-6 h-6" />
        </div>

        {/* Tab Selector */}
        <div className="flex gap-2 text-[10px] font-bold border-b border-slate-100 dark:border-neutral-900 pb-2">
          <button 
            onClick={() => setActiveTab('my')}
            className={`px-4 py-2 rounded-full border uppercase tracking-wider transition ${
              activeTab === 'my'
                ? 'bg-blue-50 dark:bg-blue-955/20 text-[#4A3AFF] border-[#4A3AFF] shadow-3xs'
                : 'bg-white dark:bg-neutral-900 text-slate-400 dark:text-neutral-500 border-slate-150 dark:border-neutral-800'
            }`}
          >
            My Complaints
          </button>
          <button 
            onClick={() => setActiveTab('public')}
            className={`px-4 py-2 rounded-full border uppercase tracking-wider transition ${
              activeTab === 'public'
                ? 'bg-blue-50 dark:bg-blue-955/20 text-[#4A3AFF] border-[#4A3AFF] shadow-3xs'
                : 'bg-white dark:bg-neutral-900 text-slate-400 dark:text-neutral-500 border-slate-150 dark:border-neutral-800'
            }`}
          >
            Public Complaints
          </button>
        </div>

        {/* Card */}
        <div className={`p-4 rounded-card border shadow-2xs space-y-3.5 ${
          theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
        }`}>
          {/* Card Header ID & Badge */}
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-black text-slate-800 dark:text-white">AVD24-300501-0024</span>
            <span className="px-2 py-0.5 text-[8px] font-black text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 rounded-full">
              In Progress
            </span>
          </div>

          <div className="space-y-0.5 leading-tight">
            <h5 className="text-[11px] font-extrabold text-slate-850 dark:text-white">Street Light</h5>
            <p className="text-[8.5px] text-slate-400 dark:text-neutral-500 font-semibold">Ward 5, Avadi West</p>
          </div>

          {/* Timeline points */}
          <div className="relative border-l-2 border-slate-100 dark:border-neutral-800 pl-4.5 py-1 space-y-3.5 text-[9px] font-semibold text-slate-500 dark:text-neutral-400">
            {/* Complaint Filed */}
            <div className="relative">
              <span className="absolute -left-[23px] top-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white dark:border-neutral-900" />
              <div className="flex items-center gap-1.5 text-slate-705 dark:text-white">
                <span>✓</span>
                <span>Complaint Filed</span>
              </div>
              <span className="text-[7.5px] text-slate-400 dark:text-neutral-500 block mt-0.5 ml-5">May 20, 2024, 10:30 AM</span>
            </div>

            {/* Under Review */}
            <div className="relative">
              <span className="absolute -left-[23px] top-0.5 w-2.5 h-2.5 rounded-full bg-amber-500 border-2 border-white dark:border-neutral-900" />
              <div className="flex items-center gap-1.5 text-slate-705 dark:text-white">
                <span>🔍</span>
                <span>Under Review</span>
              </div>
              <span className="text-[7.5px] text-slate-400 dark:text-neutral-500 block mt-0.5 ml-5">May 20, 2024, 11:00 AM</span>
            </div>

            {/* In Progress */}
            <div className="relative">
              <span className="absolute -left-[23px] top-0.5 w-2.5 h-2.5 rounded-full bg-[#4A3AFF] border-2 border-white dark:border-neutral-900" />
              <div className="flex items-center gap-1.5 text-slate-705 dark:text-white">
                <span>🔔</span>
                <span>In Progress</span>
              </div>
              <span className="text-[7.5px] text-slate-400 dark:text-neutral-500 block mt-0.5 ml-5">May 21, 2024, 02:15 PM</span>
            </div>
          </div>

          {/* View Details Button */}
          <button className="w-full py-2.5 text-[10px] font-bold rounded-btn border border-slate-205 dark:border-neutral-800 text-slate-600 hover:bg-slate-50 transition text-center">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 17. EMERGENCY SOS (VARIANT)
// ==========================================
export const EmergencySOSScreenAlt: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [showBloodModal, setShowBloodModal] = useState(false);
  const [bloodGroup, setBloodGroup] = useState('A+');
  const [hospitalName, setHospitalName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [unitsRequired, setUnitsRequired] = useState('1');
  const [patientName, setPatientName] = useState('');
  const [showSOSAlert, setShowSOSAlert] = useState(false);
  const [showBloodSuccess, setShowBloodSuccess] = useState(false);
  const [dialConfirmContact, setDialConfirmContact] = useState<{name: string, number: string, icon: string} | null>(null);

  // Stateful blood requests list
  const [bloodRequests, setBloodRequests] = useState<Array<{
    id: string;
    patient: string;
    group: string;
    units: string;
    hospital: string;
    phone: string;
    time: string;
  }>>([
    {
      id: 'REQ-1092',
      patient: 'Karthik Raja',
      group: 'O+',
      units: '3 Units',
      hospital: 'Avadi Government Hospital',
      phone: '044-26340221',
      time: '2 hours ago'
    }
  ]);

  const contacts = [
    { name: 'Police Helpline', number: '100', icon: '🚨' },
    { name: 'Ambulance Unit', number: '108', icon: '🚑' },
    { name: 'Fire & Rescue', number: '101', icon: '🚒' },
    { name: 'Municipal Helpline', number: '044-26343916', icon: '🏢' },
    { name: 'Animal Rescue', number: '1962', icon: '🐾' },
    { name: 'Women Helpline', number: '1091', icon: '👩' }
  ];

  const handleBloodSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (patientName.trim() && hospitalName.trim() && contactPhone.trim()) {
      const newReq = {
        id: 'REQ-' + Math.floor(1000 + Math.random() * 9000),
        patient: patientName,
        group: bloodGroup,
        units: unitsRequired + ' Unit(s)',
        hospital: hospitalName,
        phone: contactPhone,
        time: 'Just now'
      };
      setBloodRequests([newReq, ...bloodRequests]);
      setShowBloodModal(false);
      setShowBloodSuccess(true);
      // Reset form
      setPatientName('');
      setHospitalName('');
      setContactPhone('');
      setUnitsRequired('1');
    }
  };

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Pulse Animation Style Tag */}
      <style>{`
        @keyframes sosPulse {
          0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(239, 68, 68, 0); }
          100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
        }
        .sos-btn-pulse {
          animation: sosPulse 1.8s infinite;
        }
      `}</style>

      {/* Scrollable Area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-5 pb-20 text-left">
        {/* Header */}
        <div className="h-8 flex items-center">
          <button 
            onClick={() => navigate('/home')}
            className="p-1 rounded-full text-slate-405 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex-grow text-center font-black text-xs pr-6">Emergency SOS</div>
        </div>

        {/* SOS Blinking/Pulse Button */}
        <div className="flex flex-col items-center justify-center py-4">
          <button 
            type="button"
            onClick={() => setShowSOSAlert(true)}
            className="w-28 h-28 rounded-full bg-red-500 border-4 border-white dark:border-neutral-900 text-white flex flex-col items-center justify-center font-black tracking-wider transition active:scale-95 shadow-lg sos-btn-pulse"
          >
            <span className="text-xl">SOS</span>
            <span className="text-[7.5px] font-bold uppercase tracking-widest text-red-100 mt-1">Press Active</span>
          </button>
        </div>

        {/* Helpline grid format of boxes */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          {contacts.map((contact, i) => (
            <button 
              key={i}
              type="button"
              onClick={() => setDialConfirmContact(contact)}
              className={`p-4.5 rounded-card border shadow-3xs flex flex-col items-center text-center justify-center gap-2 active:scale-95 transition ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850 hover:bg-neutral-800' : 'bg-white border-slate-150 hover:bg-slate-55'
              }`}
            >
              <span className="text-2xl">{contact.icon}</span>
              <div className="space-y-0.5">
                <h4 className="text-[10px] font-black text-slate-800 dark:text-white leading-tight">{contact.name}</h4>
                <p className="text-[9px] text-[#4A3AFF] font-bold mt-0.5">{contact.number}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Stateful blood requests list */}
        <div className="space-y-2.5 pt-4">
          <div className="flex justify-between items-center">
            <h4 className="text-[9.5px] font-black uppercase tracking-wider text-slate-400 dark:text-neutral-500">Active Blood Requests</h4>
            <span className="text-[8px] font-bold text-red-500 bg-red-50 dark:bg-red-950/20 px-2 py-0.5 rounded-full">Urgent</span>
          </div>
          <div className="space-y-2">
            {bloodRequests.map((req) => (
              <div 
                key={req.id} 
                className={`p-3.5 rounded-card border flex justify-between items-center ${
                  theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-150 shadow-3xs'
                }`}
              >
                <div className="space-y-1 text-left">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-red-500 text-white font-black text-[9px] rounded-md">{req.group}</span>
                    <span className="text-[10.5px] font-extrabold text-slate-800 dark:text-white">{req.patient}</span>
                  </div>
                  <p className="text-[8.5px] font-bold text-slate-500 dark:text-neutral-400">🏥 {req.hospital} • {req.units}</p>
                  <p className="text-[8px] text-slate-400 dark:text-neutral-500">Requested {req.time}</p>
                </div>
                <button 
                  type="button"
                  onClick={() => setDialConfirmContact({ name: `Donor Contact (${req.patient})`, number: req.phone, icon: '🩸' })}
                  className="w-7 h-7 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xs shrink-0"
                >
                  📞
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Request Blood Donation Red Button */}
      <div className="absolute bottom-4 left-0 w-full p-4 z-20 bg-transparent">
        <button
          onClick={() => setShowBloodModal(true)}
          className="w-full py-3.5 bg-[#FF3B30] hover:bg-[#e03126] text-white font-bold rounded-btn shadow-md text-xs text-center uppercase tracking-wider active:scale-[0.98] transition"
        >
          Request Blood Donation
        </button>
      </div>

      {/* In-App Blood Request Form Modal */}
      {showBloodModal && (
        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-6 text-left">
          <div className={`w-full max-w-sm p-6 rounded-card border shadow-2xl space-y-4 ${
            theme === 'dark' ? 'bg-[#181818] border-neutral-850 text-white' : 'bg-white border-slate-150 text-slate-800'
          }`}>
            <div className="flex justify-between items-center border-b pb-3 border-slate-100 dark:border-neutral-800">
              <h3 className="text-xs font-black uppercase tracking-wider">Blood Request Form</h3>
              <button type="button" onClick={() => setShowBloodModal(false)} className="text-slate-405 hover:text-slate-600"><X size={18} /></button>
            </div>
            <form onSubmit={handleBloodSubmit} className="space-y-3">
              <div>
                <label className="text-[9px] font-black uppercase tracking-wider text-slate-400">Patient Name</label>
                <input 
                  type="text" 
                  required
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="e.g. Anand Kumar" 
                  className={`w-full p-2.5 text-xs rounded-btn border focus:outline-none mt-1 ${
                    theme === 'dark' ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-slate-200 text-slate-850'
                  }`}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[9px] font-black uppercase tracking-wider text-slate-400">Blood Group</label>
                  <select 
                    value={bloodGroup}
                    onChange={(e) => setBloodGroup(e.target.value)}
                    className={`w-full p-2.5 text-xs rounded-btn border focus:outline-none mt-1 ${
                      theme === 'dark' ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-slate-200 text-slate-855'
                    }`}
                  >
                    {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map(g => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-[9px] font-black uppercase tracking-wider text-slate-400">Units Required</label>
                  <input 
                    type="number" 
                    min="1"
                    max="10"
                    required
                    value={unitsRequired}
                    onChange={(e) => setUnitsRequired(e.target.value)}
                    className={`w-full p-2.5 text-xs rounded-btn border focus:outline-none mt-1 ${
                      theme === 'dark' ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-slate-200 text-slate-855'
                    }`}
                  />
                </div>
              </div>
              <div>
                <label className="text-[9px] font-black uppercase tracking-wider text-slate-400">Hospital Name / Address</label>
                <input 
                  type="text" 
                  required
                  value={hospitalName}
                  onChange={(e) => setHospitalName(e.target.value)}
                  placeholder="e.g. Avadi Govt Hospital" 
                  className={`w-full p-2.5 text-xs rounded-btn border focus:outline-none mt-1 ${
                    theme === 'dark' ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-slate-200 text-slate-855'
                  }`}
                />
              </div>
              <div>
                <label className="text-[9px] font-black uppercase tracking-wider text-slate-400">Contact Number</label>
                <input 
                  type="tel" 
                  required
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  placeholder="e.g. 9876543210" 
                  className={`w-full p-2.5 text-xs rounded-btn border focus:outline-none mt-1 ${
                    theme === 'dark' ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-slate-200 text-slate-855'
                  }`}
                />
              </div>
              <div className="flex gap-3 pt-3">
                <button 
                  type="button"
                  onClick={() => setShowBloodModal(false)}
                  className="flex-1 py-2.5 border rounded-btn text-xs font-bold text-slate-500 dark:text-neutral-400"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 py-2.5 bg-red-500 hover:bg-red-600 text-white font-black rounded-btn text-xs uppercase tracking-wider text-center"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* In-UI Dial Confirmation Overlay */}
      {dialConfirmContact && (
        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-6">
          <div className={`w-full max-w-xs p-6 rounded-card border shadow-xl text-center space-y-4 ${
            theme === 'dark' ? 'bg-[#181818] border-neutral-855 text-white' : 'bg-white border-slate-150 text-slate-800'
          }`}>
            <span className="text-2xl block">{dialConfirmContact.icon}</span>
            <h4 className="text-xs font-black uppercase tracking-wider">Confirm Dial</h4>
            <p className="text-[10px] text-slate-505 dark:text-neutral-400 font-semibold leading-relaxed">
              Are you sure you want to dial {dialConfirmContact.name} ({dialConfirmContact.number})?
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setDialConfirmContact(null)}
                className="flex-1 py-2 text-[10px] font-bold rounded-full border border-slate-205 dark:border-neutral-850 text-slate-505 hover:bg-slate-55 dark:hover:bg-neutral-800"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  window.location.href = `tel:${dialConfirmContact.number.replace(/[-\s]+/g, '')}`;
                  setDialConfirmContact(null);
                }}
                className="flex-1 py-2 text-[10px] font-bold rounded-full bg-emerald-500 text-white hover:bg-emerald-600"
              >
                Call
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SOS Dispatched Overlay Modal */}
      {showSOSAlert && (
        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-6 text-center">
          <div className={`w-full max-w-xs p-6 rounded-card border shadow-xl space-y-4 ${
            theme === 'dark' ? 'bg-[#181818] border-neutral-850 text-white' : 'bg-white border-slate-150 text-slate-800'
          }`}>
            <span className="text-3xl block animate-bounce">🚨</span>
            <h4 className="text-xs font-black uppercase tracking-wider text-red-500">SOS Alert Dispatched</h4>
            <p className="text-[10px] text-slate-500 dark:text-neutral-400 font-semibold leading-relaxed">
              Your SOS emergency broadcast has been successfully dispatched to nearest Avadi community volunteers, municipal responders, and local authorities.
            </p>
            <button
              onClick={() => setShowSOSAlert(false)}
              className="w-full py-2.5 bg-[#4A3AFF] text-white font-bold rounded-full text-xs uppercase"
            >
              Acknowledge
            </button>
          </div>
        </div>
      )}

      {/* Blood Request Success Overlay Modal */}
      {showBloodSuccess && (
        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-6 text-center">
          <div className={`w-full max-w-xs p-6 rounded-card border shadow-xl space-y-4 ${
            theme === 'dark' ? 'bg-[#181818] border-neutral-850 text-white' : 'bg-white border-slate-150 text-slate-800'
          }`}>
            <span className="text-3xl block">🩸</span>
            <h4 className="text-xs font-black uppercase tracking-wider text-emerald-500">Request Submitted</h4>
            <p className="text-[10px] text-slate-505 dark:text-neutral-400 font-semibold leading-relaxed">
              Your urgent blood request has been successfully registered and broadcasted to all registered donors and volunteers in the area.
            </p>
            <button
              onClick={() => setShowBloodSuccess(false)}
              className="w-full py-2.5 bg-emerald-500 text-white font-bold rounded-full text-xs uppercase text-center"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export const LocalServicesScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [activeTag, setActiveTag] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dialConfirmContact, setDialConfirmContact] = useState<{name: string; phone: string; icon: string} | null>(null);
  const [showTransportModal, setShowTransportModal] = useState(false);

  const places = [
    {
      name: 'Paruthipattu Lake Eco-Park',
      sub: 'Eco-Park, Boating Lake & Walking Tracks • Ward 12',
      rating: '★ 4.9',
      tag: 'places',
      subtag: 'parks',
      phone: '044-26343916',
      icon: '🌳',
      image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'Avadi Sri Karumari Amman Temple',
      sub: 'Famous Hindu Temple & Historic Landmark • Ward 4',
      rating: '★ 4.8',
      tag: 'places',
      subtag: 'temples',
      phone: '044-26340221',
      icon: '🛕',
      image: 'https://images.unsplash.com/photo-1544084944-15269ec7b5a0?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'Pattabiram Tidel IT Park',
      sub: 'Modern IT Hub & Business Center • Pattabiram',
      rating: '★ 4.5',
      tag: 'places',
      subtag: 'it-hub',
      phone: '044-26340222',
      icon: '💻',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'Vel Tech University Campus',
      sub: 'Renowned Engineering University & R&D Hub • Avadi',
      rating: '★ 4.6',
      tag: 'places',
      subtag: 'education',
      phone: '180030706900',
      icon: '🎓',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'Avadi Midnight Biryani Point',
      sub: 'Famous Spiced Chicken Biryani • 1.1 km',
      rating: '★ 4.8',
      tag: 'foods',
      subtag: 'midnight',
      phone: '044-26340231',
      icon: '🍲',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'Saravana Bhavan',
      sub: 'Pure Veg South Indian Meals • 400m',
      rating: '★ 4.5',
      tag: 'foods',
      subtag: 'veg',
      phone: '044-26340233',
      icon: '🍛',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600'
    }
  ];

  const filteredItems = places.filter(item => {
    const matchesTag = activeTag === 'all' || item.tag === activeTag || item.subtag === activeTag;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.sub.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scrollable Container */}
      <div className="flex-grow overflow-y-auto p-5 space-y-5 pb-20 text-left animate-fade-in">
        {/* Header Title */}
        <div className="flex justify-between items-center h-8">
          <button onClick={() => navigate('/home')} className="p-1 text-slate-405 hover:text-slate-650"><ChevronLeft size={20} /></button>
          <span className="text-xs font-black text-slate-855 dark:text-white uppercase tracking-wider">Explore Avadi</span>
          <div className="w-6 h-6" />
        </div>

        {/* Search and Category Input */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search places, food, services..."
            className={`w-full p-2.5 pl-8 text-xs font-semibold rounded-btn border focus:outline-none ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-850 text-white' : 'bg-white border-slate-200 text-slate-855'
            }`}
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-405 text-xs">🔍</span>
        </div>

        {/* Weather & Traffic Side-by-Side Widgets */}
        <div className="grid grid-cols-2 gap-3">
          <div className={`p-3 rounded-card border text-[9.5px] leading-normal flex flex-col justify-between ${
            theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150 shadow-3xs'
          }`}>
            <div className="flex justify-between items-center text-slate-400">
              <span className="font-extrabold uppercase text-[8px]">Weather</span>
              <span>🌤️</span>
            </div>
            <div className="mt-1 text-left">
              <span className="text-xs font-black">31°C</span>
              <p className="text-slate-500 font-bold mt-0.5">Partly Cloudy</p>
            </div>
          </div>

          <div className={`p-3 rounded-card border text-[9.5px] leading-normal flex flex-col justify-between ${
            theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150 shadow-3xs'
          }`}>
            <div className="flex justify-between items-center text-slate-400">
              <span className="font-extrabold uppercase text-[8px]">Traffic Status</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
            <div className="mt-1 text-left">
              <span className="text-xs font-black text-emerald-500">Smooth Flow</span>
              <p className="text-slate-500 font-bold mt-0.5">Moderate near Station</p>
            </div>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="space-y-2">
          <h5 className="text-[9px] font-black uppercase text-slate-405 tracking-wider">Avadi Directory Hub</h5>
          <div className="grid grid-cols-4 gap-2 text-center text-[8px] font-bold">
            <button onClick={() => navigate('/civic')} className={`p-2.5 border rounded-xl flex flex-col items-center gap-1.5 shadow-3xs ${
              theme === 'dark' ? 'bg-[#181818] border-neutral-855' : 'bg-white border-slate-150'
            }`}>
              <span className="text-base text-blue-500">📋</span>
              <span className="text-slate-705 dark:text-neutral-350 font-black">Complaints</span>
            </button>
            <button onClick={() => navigate('/sos')} className={`p-2.5 border rounded-xl flex flex-col items-center gap-1.5 shadow-3xs ${
              theme === 'dark' ? 'bg-[#181818] border-neutral-855' : 'bg-white border-slate-150'
            }`}>
              <span className="text-base text-red-500">🚨</span>
              <span className="text-slate-705 dark:text-neutral-350 font-black">SOS</span>
            </button>
            <button onClick={() => navigate('/explore-places')} className={`p-2.5 border rounded-xl flex flex-col items-center gap-1.5 shadow-3xs ${
              theme === 'dark' ? 'bg-[#181818] border-neutral-855' : 'bg-white border-slate-150'
            }`}>
              <span className="text-base text-emerald-500">🌳</span>
              <span className="text-slate-705 dark:text-neutral-350 font-black">Explore Places</span>
            </button>
            <button onClick={() => navigate('/explore-food')} className={`p-2.5 border rounded-xl flex flex-col items-center gap-1.5 shadow-3xs ${
              theme === 'dark' ? 'bg-[#181818] border-neutral-855' : 'bg-white border-slate-150'
            }`}>
              <span className="text-base text-amber-500">🍲</span>
              <span className="text-slate-705 dark:text-neutral-350 font-black">Explore Food</span>
            </button>
            <button onClick={() => navigate('/services')} className={`p-2.5 border rounded-xl flex flex-col items-center gap-1.5 shadow-3xs ${
              theme === 'dark' ? 'bg-[#181818] border-neutral-855' : 'bg-white border-slate-150'
            }`}>
              <span className="text-base text-indigo-500">🤝</span>
              <span className="text-slate-705 dark:text-neutral-350 font-black">Local Services</span>
            </button>
            <button onClick={() => navigate('/jobs-rentals')} className={`p-2.5 border rounded-xl flex flex-col items-center gap-1.5 shadow-3xs ${
              theme === 'dark' ? 'bg-[#181818] border-neutral-855' : 'bg-white border-slate-150'
            }`}>
              <span className="text-base text-orange-500">🏢</span>
              <span className="text-slate-705 dark:text-neutral-350 font-black">Jobs & Rentals</span>
            </button>
            <button onClick={() => navigate('/government-schemes')} className={`p-2.5 border rounded-xl flex flex-col items-center gap-1.5 shadow-3xs ${
              theme === 'dark' ? 'bg-[#181818] border-neutral-855' : 'bg-white border-slate-150'
            }`}>
              <span className="text-base text-teal-500">📜</span>
              <span className="text-slate-705 dark:text-neutral-350 font-black">Gov Schemes</span>
            </button>
            <button onClick={() => setShowTransportModal(true)} className={`p-2.5 border rounded-xl flex flex-col items-center gap-1.5 shadow-3xs ${
              theme === 'dark' ? 'bg-[#181818] border-neutral-855' : 'bg-white border-slate-150'
            }`}>
              <span className="text-base text-rose-500">🚌</span>
              <span className="text-slate-705 dark:text-neutral-350 font-black">Transport Hub</span>
            </button>
          </div>
        </div>

        {/* Sights and Food category pills */}
        <div className="flex gap-2 text-[9px] font-bold overflow-x-auto pb-1">
          {[
            { id: 'all', name: 'All Sights' },
            { id: 'places', name: 'Sights & Parks' },
            { id: 'foods', name: 'Foods & Restaurants' },
            { id: 'parks', name: 'Parks' },
            { id: 'temples', name: 'Temples' },
            { id: 'it-hub', name: 'IT Hubs' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTag(tab.id)}
              className={`px-3 py-1.5 rounded-full border uppercase tracking-wider transition shrink-0 ${
                activeTag === tab.id
                  ? 'bg-slate-800 dark:bg-white text-white dark:text-slate-800 border-slate-800 dark:border-white shadow-2xs'
                  : 'bg-white dark:bg-neutral-900 text-slate-400 dark:text-neutral-500 border-slate-150 dark:border-neutral-800'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content list */}
        <div className="space-y-4">
          {filteredItems.map((place, idx) => (
            <div
              key={idx}
              className={`rounded-card overflow-hidden border shadow-3xs flex flex-col ${
                theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <div className="aspect-video w-full relative">
                <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
              </div>

              <div className="p-4 space-y-3.5 text-left">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xs font-black text-slate-808 dark:text-white flex items-center gap-1.5">
                      <span>{place.icon}</span> {place.name}
                    </h4>
                    <p className="text-[8.5px] text-slate-405 dark:text-neutral-500 mt-1 font-bold">{place.sub}</p>
                  </div>
                  <span className="text-[10px] font-black text-amber-500 shrink-0">{place.rating}</span>
                </div>

                <div className="flex justify-around items-center border-t border-slate-100 dark:border-neutral-800/60 pt-3">
                  <button 
                    type="button"
                    onClick={() => setDialConfirmContact(place)}
                    className="text-slate-500 hover:text-[#4A3AFF] transition text-[10px] font-bold"
                  >
                    📞 Call Provider
                  </button>
                  <span className="text-slate-200">|</span>
                  <button
                    onClick={() => navigate('/explore-food')}
                    className="text-slate-500 hover:text-[#4A3AFF] transition text-[10px] font-bold"
                  >
                    Explore Food
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* E-Sevai Center Special Highlight Section */}
        <div className={`p-4 rounded-card border space-y-2.5 ${
          theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-150 shadow-3xs'
        }`}>
          <div className="flex items-center gap-2">
            <span className="text-xl">🏢</span>
            <div className="leading-tight">
              <h5 className="text-[11px] font-black">Avadi E-Sevai Citizen Center</h5>
              <p className="text-[8px] text-slate-400 uppercase font-black">Government Digital Services</p>
            </div>
          </div>
          <p className="text-[9px] text-slate-550 dark:text-neutral-400 leading-relaxed">
            Apply for birth/death certificates, community certificates, voter registrations, utility payments, and Aadhaar card updates.
          </p>
          <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-neutral-900 border text-[8px] text-slate-500 leading-snug space-y-1 font-bold">
            <p>📍 Location: Municipal Corporation Office Complex, Avadi</p>
            <p>🕒 Timings: Monday - Saturday: 9:30 AM - 5:30 PM</p>
          </div>
        </div>
      </div>

      {/* Mock Tab bar */}
      <div className={`absolute bottom-0 left-0 w-full h-16 border-t flex justify-around items-center px-2 z-20 ${
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
        <button className="flex flex-col items-center justify-center flex-1 text-[#4A3AFF]">
          <span className="text-md bg-[#4A3AFF]/10 px-4 py-0.5 rounded-full">🧭</span>
          <span className="text-[9px] font-bold mt-1">Explore</span>
        </button>
        <button onClick={() => navigate('/community-feed')} className="flex flex-col items-center justify-center flex-1 opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-md">👥</span>
          <span className="text-[9px] font-bold mt-1">Feed</span>
        </button>
      </div>

      {/* In-UI Dial Confirmation Overlay */}
      {dialConfirmContact && (
        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-6 text-center">
          <div className={`w-full max-w-xs p-6 rounded-card border shadow-xl space-y-4 ${
            theme === 'dark' ? 'bg-[#181818] border-neutral-855 text-white' : 'bg-white border-slate-150 text-slate-800'
          }`}>
            <span className="text-2xl block">{dialConfirmContact.icon}</span>
            <h4 className="text-xs font-black uppercase tracking-wider">Confirm Dial</h4>
            <p className="text-[10px] text-slate-505 dark:text-neutral-400 font-semibold leading-relaxed">
              Are you sure you want to dial {dialConfirmContact.name} ({dialConfirmContact.phone})?
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setDialConfirmContact(null)}
                className="flex-1 py-2 text-[10px] font-bold rounded-full border border-slate-200 dark:border-neutral-855 text-slate-555"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  window.location.href = `tel:${dialConfirmContact.phone.replace(/[-\s]+/g, '')}`;
                  setDialConfirmContact(null);
                }}
                className="flex-1 py-2 text-[10px] font-bold rounded-full bg-emerald-500 text-white"
              >
                Call
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Transport schedules modal popup */}
      {showTransportModal && (
        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-6 animate-fade-in text-left">
          <div className={`w-full max-w-xs p-5 rounded-card border shadow-2xl flex flex-col justify-between max-h-[85%] ${
            theme === 'dark' ? 'bg-[#181818] border-neutral-855 text-white' : 'bg-white border-slate-150 text-slate-800'
          }`}>
            <div className="space-y-4 overflow-y-auto">
              <div className="flex justify-between items-center border-b pb-3 border-slate-100 dark:border-neutral-800">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg">🚌</span>
                  <h3 className="text-xs font-black uppercase tracking-wider">Avadi Transport Hub</h3>
                </div>
                <button type="button" onClick={() => setShowTransportModal(false)} className="text-slate-405 hover:text-slate-655 font-bold">✕</button>
              </div>

              {/* Train Timetable */}
              <div className="space-y-2">
                <span className="text-[8px] uppercase tracking-wider font-black text-blue-500">Train Schedules (Local & Fast)</span>
                <div className="bg-slate-50 dark:bg-neutral-900 p-2.5 rounded-lg border border-slate-100 dark:border-neutral-850 space-y-1.5 text-[8.5px] leading-tight">
                  <div className="flex justify-between items-center py-1 border-b border-dashed border-slate-200 dark:border-neutral-805">
                    <span className="font-bold">Chennai Central ➔ Avadi</span>
                    <span className="font-extrabold text-[#4A3AFF]">08:15 AM (Fast)</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-dashed border-slate-200 dark:border-neutral-805">
                    <span className="font-bold">Chennai Central ➔ Avadi</span>
                    <span className="font-extrabold text-[#4A3AFF]">09:30 AM (Local)</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="font-bold">Avadi ➔ Chennai Central</span>
                    <span className="font-extrabold text-emerald-500">07:30 AM (Local)</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-t border-dashed border-slate-200 dark:border-neutral-805">
                    <span className="font-bold">Avadi ➔ Chennai Central</span>
                    <span className="font-extrabold text-emerald-500">08:45 AM (Fast)</span>
                  </div>
                </div>
              </div>

              {/* Bus Timetable */}
              <div className="space-y-2">
                <span className="text-[8px] uppercase tracking-wider font-black text-amber-500">MTC Bus Routes</span>
                <div className="bg-slate-50 dark:bg-neutral-900 p-2.5 rounded-lg border border-slate-100 dark:border-neutral-850 space-y-1.5 text-[8.5px] leading-tight">
                  <div className="flex justify-between items-center py-1 border-b border-dashed border-slate-200 dark:border-neutral-805">
                    <span className="font-bold">70G: Avadi ➔ CMBT (Koyambedu)</span>
                    <span className="text-slate-400 font-bold">Every 15 mins</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-dashed border-slate-200 dark:border-neutral-805">
                    <span className="font-bold">71E: Avadi ➔ Broadway</span>
                    <span className="text-slate-400 font-bold">Every 20 mins</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="font-bold">206: Avadi ➔ Tambaram</span>
                    <span className="text-slate-400 font-bold">Every 30 mins</span>
                  </div>
                </div>
              </div>
            </div>

            <button 
              type="button" 
              onClick={() => setShowTransportModal(false)}
              className="w-full mt-4 py-2.5 bg-slate-100 dark:bg-neutral-800 hover:bg-slate-200 text-[9px] font-black uppercase rounded-btn text-center"
            >
              Close Timetable
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export const RentalsPageScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [selectedRental, setSelectedRental] = useState<any | null>(null);
  const [dialConfirmContact, setDialConfirmContact] = useState<{name: string, phone: string, icon: string} | null>(null);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState<any | null>(null);

  const listings = [
    {
      id: 1,
      title: 'Commercial Shop for Rent',
      location: 'Avadi Bazaar Market',
      landmark: 'Near Gandhi Statue / Avadi Railway Station',
      details: '800 sq ft • Ground Floor • 3 Phase Power',
      price: '₹8,000 / month',
      address: 'Shop No. 14, Bazaar Street, Avadi Market, Chennai - 600054',
      phone: '044-26343916',
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 2,
      title: 'Modern Residential House',
      location: 'Green Park Avenue, Avadi',
      landmark: 'Opposite to Eco-Park Main Gate',
      details: '2 BHK • 1200 sq ft • Semi-Furnished',
      price: '₹12,000 / month',
      address: 'Plot 45, Green Park 2nd Street, Avadi, Chennai - 600054',
      phone: '+91 98401 23456',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 3,
      title: 'Budget Single Room for Rent',
      location: 'Anna Nagar, Avadi',
      landmark: 'Behind Vel Tech University Hostel',
      details: '1 Room • 350 sq ft • Attached Bath',
      price: '₹4,000 / month',
      address: 'Door 12B, Anna Nagar, Avadi, Chennai - 600054',
      phone: '+91 98402 34567',
      image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll Area */}
      <div className="flex-grow overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header Search */}
        <div className="flex items-center gap-2">
          <button onClick={() => navigate('/jobs-rentals')} className="p-1 text-slate-400 hover:text-slate-655"><ChevronLeft size={20} /></button>
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search rentals..."
              className={`w-full p-2.5 pl-8 text-xs font-semibold rounded-btn border focus:outline-none ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-855 text-white' : 'bg-white border-slate-200 text-slate-800'
              }`}
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
          </div>
        </div>

        {/* Listings List */}
        <div className="space-y-3.5">
          {listings.map((list) => (
            <div
              key={list.id}
              onClick={() => setSelectedRental(list)}
              className={`p-3.5 rounded-card border shadow-3xs flex gap-3.5 items-center justify-between cursor-pointer active:scale-99 transition ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <div className="flex gap-3 items-center">
                {/* Thumbnail */}
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                  <img src={list.image} alt={list.title} className="w-full h-full object-cover" />
                </div>
                {/* Text Details */}
                <div className="space-y-0.5 leading-tight text-left">
                  <h4 className="text-[11px] font-extrabold">{list.title}</h4>
                  <p className="text-[8.5px] text-slate-405 dark:text-neutral-500 font-semibold">{list.location}</p>
                  <p className="text-[8.5px] text-slate-405 dark:text-neutral-500 font-semibold">{list.details}</p>
                  <p className="text-[9.5px] font-black text-[#4A3AFF] mt-1">{list.price}</p>
                </div>
              </div>
              <span className="text-slate-400 text-xs pr-1">❯</span>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Rental slide-up modal sheet */}
      {selectedRental && (
        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-xs flex flex-col justify-end">
          <div className={`w-full max-h-[85%] rounded-t-[24px] border-t shadow-2xl flex flex-col justify-between overflow-hidden text-left ${
            theme === 'dark' ? 'bg-[#181818] border-neutral-800 text-white' : 'bg-white border-slate-150 text-slate-800'
          }`}>
            {/* Header */}
            <div className="p-5 flex justify-between items-center border-b border-slate-100 dark:border-neutral-900">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-405 dark:text-neutral-500">Rental Details</h3>
              <button 
                onClick={() => setSelectedRental(null)}
                className="w-7 h-7 rounded-full bg-slate-100 dark:bg-neutral-800 flex items-center justify-center font-bold text-slate-600 dark:text-white"
              >
                ✕
              </button>
            </div>

            {/* Scrollable details */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {/* Main Image banner */}
              <div className="w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100 dark:bg-neutral-800 shadow-inner">
                <img src={selectedRental.image} alt={selectedRental.title} className="w-full h-full object-cover" />
              </div>

              {/* Title & Price */}
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <h2 className="text-sm font-black tracking-wide leading-snug">{selectedRental.title}</h2>
                  <p className="text-[10px] font-bold text-[#4A3AFF] uppercase">{selectedRental.details}</p>
                </div>
                <span className="px-3 py-1.5 bg-[#4A3AFF]/10 dark:bg-[#4A3AFF]/20 text-[#4A3AFF] text-xs font-black rounded-lg shrink-0">
                  {selectedRental.price}
                </span>
              </div>

              {/* Location Details Card */}
              <div className={`p-4 rounded-xl border space-y-3 ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-800' : 'bg-slate-50/50 border-slate-150'
              }`}>
                <div className="space-y-0.5 leading-snug">
                  <span className="text-[8px] font-black uppercase text-slate-405">Location Area</span>
                  <p className="text-[10.5px] font-extrabold text-slate-800 dark:text-white">📍 {selectedRental.location}</p>
                </div>

                <div className="space-y-0.5 leading-snug">
                  <span className="text-[8px] font-black uppercase text-slate-405">Landmark Reference</span>
                  <p className="text-[10.5px] font-extrabold text-slate-800 dark:text-white">🏢 {selectedRental.landmark}</p>
                </div>

                <div className="space-y-0.5 leading-snug">
                  <span className="text-[8px] font-black uppercase text-slate-405">Address Details</span>
                  <p className="text-[10.5px] font-extrabold text-slate-700 dark:text-slate-300">{selectedRental.address}</p>
                </div>
              </div>

              {/* General terms / info */}
              <p className="text-[9.5px] text-slate-400 dark:text-neutral-500 font-semibold leading-relaxed">
                Contact the landlord directly for deposits, verification of documents, and to schedule visits. Avadi Connect does not charge brokerage.
              </p>
            </div>

            {/* Bottom floating call options */}
            <div className="p-4 bg-slate-50/50 dark:bg-neutral-900 border-t border-slate-100 dark:border-neutral-900 flex gap-3 z-20">
              {/* Normal Call */}
              <button
                onClick={() => setDialConfirmContact({ name: selectedRental.title, phone: selectedRental.phone, icon: '📞' })}
                className="flex-1 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-[9px] uppercase rounded-btn flex items-center justify-center gap-1.5 shadow-md active:scale-98 transition"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79a15.15 15.15 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.27 11.9 11.9 0 0 0 3.74.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.9 11.9 0 0 0 .6 3.74 1 1 0 0 1-.26 1.02z"/></svg>
                Normal Call
              </button>

              {/* WhatsApp Call */}
              <button
                onClick={() => setShowWhatsAppModal(selectedRental)}
                className="flex-1 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-[9px] uppercase rounded-btn flex items-center justify-center gap-1.5 shadow-md active:scale-98 transition"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12.004 2C6.51 2 2.014 6.5 2.014 12c0 2.14.675 4.135 1.824 5.797L2.03 22l4.385-1.15A9.92 9.92 0 0 0 12.004 22c5.495 0 9.991-4.5 9.991-10s-4.496-10-9.991-10zm0 18.293a8.23 8.23 0 0 1-4.148-1.12l-.3-.178-2.61.685.698-2.54-.197-.314A8.25 8.25 0 0 1 3.73 12c0-4.57 3.714-8.293 8.274-8.293 4.56 0 8.274 3.723 8.274 8.293 0 4.57-3.714 8.293-8.274 8.293z"/></svg>
                WhatsApp Call
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation of Call */}
      {dialConfirmContact && (
        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-6 text-center">
          <div className={`w-full max-w-xs p-6 rounded-card border shadow-xl space-y-4 ${
            theme === 'dark' ? 'bg-[#181818] border-neutral-855 text-white' : 'bg-white border-slate-150 text-slate-800'
          }`}>
            <span className="text-2xl block">{dialConfirmContact.icon}</span>
            <h4 className="text-xs font-black uppercase tracking-wider">Confirm Dial</h4>
            <p className="text-[10px] text-slate-555 dark:text-neutral-400 font-semibold leading-relaxed">
              Are you sure you want to dial {dialConfirmContact.name} ({dialConfirmContact.phone})?
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setDialConfirmContact(null)}
                className="flex-1 py-2 text-[10px] font-bold rounded-full border border-slate-200 dark:border-neutral-850 text-slate-505"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  window.location.href = `tel:${dialConfirmContact.phone.replace(/[-\s]+/g, '')}`;
                  setDialConfirmContact(null);
                }}
                className="flex-1 py-2 text-[10px] font-bold rounded-full bg-emerald-500 text-white animate-pulse"
              >
                Call
              </button>
            </div>
          </div>
        </div>
      )}
      {showWhatsAppModal && (
        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-6 text-center animate-fade-in">
          <div className={`w-full max-w-xs p-6 rounded-card border shadow-xl space-y-4 ${
            theme === 'dark' ? 'bg-[#181818] border-neutral-855 text-white' : 'bg-white border-slate-150 text-slate-800'
          }`}>
            <span className="text-3xl block">💬</span>
            <h4 className="text-xs font-black uppercase tracking-wider text-[#25D366]">Send WhatsApp Message</h4>
            <div className="space-y-2 text-left bg-slate-50 dark:bg-neutral-900 p-3 rounded-lg border border-slate-100 dark:border-neutral-800">
              <span className="text-[8px] text-slate-400 uppercase font-black">Message Template</span>
              <p className="text-[9.5px] text-slate-650 dark:text-neutral-300 font-semibold leading-relaxed">
                "Hello, I am interested in your listing '{showWhatsAppModal.title}' for {showWhatsAppModal.price} on Avadi Connect. Is it still available?"
              </p>
            </div>
            <p className="text-[8.5px] text-slate-405 dark:text-neutral-500 font-bold leading-normal">
              You will be redirected to WhatsApp to chat with the property manager at {showWhatsAppModal.phone}.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowWhatsAppModal(null)}
                className="flex-1 py-2 text-[10px] font-bold rounded-full border border-slate-200 dark:border-neutral-855 text-slate-505"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowWhatsAppModal(null);
                }}
                className="flex-1 py-2 text-[10px] font-bold rounded-full bg-[#25D366] text-white hover:bg-[#20ba59]"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 21. JOBS PAGE
// ==========================================
export const JobsPageScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  const jobs = [
    {
      id: 1,
      role: 'Sales Executive',
      company: 'Ace Communications',
      salary: '₹40,000 - ₹60,000',
      type: 'Full-time',
      experience: '1 - 2 Years',
      location: 'Avadi, TN',
      deadline: '20 May 2026',
      icon: '💼',
      color: 'indigo'
    },
    {
      id: 2,
      role: 'Delivery Partner',
      company: 'Fast Delivery Services',
      salary: '₹20,000 - ₹30,000',
      type: 'Part-time',
      experience: 'Freshers Welcome',
      location: 'Avadi, TN',
      deadline: '18 May 2026',
      icon: '🛵',
      color: 'emerald'
    },
    {
      id: 3,
      role: 'Store Manager',
      company: 'Avadi Mega Store',
      salary: '₹35,000 - ₹45,000',
      type: 'Full-time',
      experience: '3+ Years',
      location: 'Avadi, TN',
      deadline: '22 May 2026',
      icon: '🏬',
      color: 'purple'
    }
  ];

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll Area */}
      <div className="flex-grow overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header Search */}
        <div className="flex items-center gap-2">
          <button onClick={() => navigate('/jobs-rentals')} className="p-1 text-slate-405"><ChevronLeft size={20} /></button>
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="Search Jobs..."
              className={`w-full p-2.5 pl-8 text-xs font-semibold rounded-btn border focus:outline-none ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-805 text-white' : 'bg-white border-slate-200 text-slate-800'
              }`}
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
          </div>
        </div>

        {/* Jobs List */}
        <div className="space-y-3">
          {jobs.map((job) => (
            <div 
              key={job.id}
              onClick={() => navigate('/jobs/detail', { state: { job } })}
              className={`p-3.5 rounded-card border-l-4 shadow-3xs flex justify-between items-center cursor-pointer active:scale-99 transition ${
                job.id === 1 ? 'border-l-[#4A3AFF]' : job.id === 2 ? 'border-l-[#25D366]' : 'border-l-[#8B5CF6]'
              } ${
                theme === 'dark' ? 'bg-[#181818] border-y-neutral-850 border-r-neutral-850' : 'bg-white border-y-slate-150 border-r-slate-150'
              }`}
            >
              <div className="flex gap-3 items-center">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center font-black text-white text-xs shrink-0 bg-slate-100 dark:bg-neutral-800`}>
                  {job.icon}
                </div>
                <div className="space-y-1 text-left leading-tight">
                  <h4 className="text-[11px] font-black">{job.role}</h4>
                  <p className="text-[8.5px] text-slate-450 dark:text-neutral-500 font-bold">{job.company}</p>
                  
                  {/* Pills row */}
                  <div className="flex gap-1.5 flex-wrap">
                    <span className="px-1.5 py-0.5 text-[7px] font-black text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20 rounded-md">
                      {job.salary}
                    </span>
                    <span className="px-1.5 py-0.5 text-[7px] font-black text-[#4A3AFF] bg-blue-50 dark:bg-blue-950/20 rounded-md">
                      {job.type}
                    </span>
                  </div>
                </div>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); navigate('/jobs/detail', { state: { job } }); }} 
                className="px-3.5 py-1.5 bg-[#4A3AFF] hover:bg-[#3b2ecc] text-white text-[9px] font-black rounded-lg transition shrink-0"
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 22. JOBS PAGE (DETAIL)
// ==========================================
export const JobsDetailScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const location = useLocation();
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  // Form states
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [degree, setDegree] = useState('');
  const [gradYear, setGradYear] = useState('');
  const [fileName, setFileName] = useState('');

  // Extract selected job or use default fallback
  const job = location.state?.job || {
    id: 1,
    role: 'Sales Executive',
    company: 'Ace Communications',
    salary: '₹40,000 - ₹60,000',
    type: 'Full-time',
    experience: '1 - 2 Years',
    location: 'Avadi, TN',
    deadline: '20 May 2026',
    icon: '💼'
  };

  const details = [
    { label: 'Job Role', value: job.role, icon: '💼' },
    { label: 'Company', value: job.company, icon: '🏠' },
    { label: 'CTC / Salary', value: job.salary, icon: '💵' },
    { label: 'Experience Required', value: job.experience, icon: '⚙️' },
    { label: 'Job Type', value: job.type, icon: '💼' },
    { label: 'Location', value: job.location, icon: '📍' },
    { label: 'Application Deadline', value: job.deadline, icon: '📅' }
  ];

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName.trim() && email.trim()) {
      setShowApplyModal(false);
      setShowSuccessModal(true);
    }
  };

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll area */}
      <div className="flex-grow overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header */}
        <div className="h-8 flex items-center gap-2">
          <button onClick={() => navigate('/jobs')} className="p-1 text-slate-405 hover:text-slate-650"><ChevronLeft size={20} /></button>
          <span className="text-xs font-black">Job Details</span>
        </div>

        {/* Company Header Card */}
        <div className={`p-4.5 rounded-card border shadow-3xs flex gap-3.5 items-center ${
          theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
        }`}>
          <div className="w-12 h-12 rounded-full bg-[#4A3AFF] text-white flex items-center justify-center font-black text-sm shrink-0">
            {job.icon}
          </div>
          <div className="space-y-0.5 text-left leading-tight">
            <h4 className="text-[12px] font-black text-slate-805 dark:text-white">{job.role}</h4>
            <p className="text-[9px] text-slate-450 dark:text-neutral-500 font-bold">{job.company} • {job.location}</p>
          </div>
        </div>

        {/* Job Parameters Card */}
        <div className={`p-4.5 rounded-card border shadow-3xs space-y-3.5 ${
          theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-150'
        }`}>
          {details.map((detail, idx) => (
            <div key={idx} className="flex gap-3 text-left leading-snug">
              <span className="text-sm shrink-0">{detail.icon}</span>
              <div>
                <p className="text-[8px] font-black uppercase tracking-wider text-slate-405">{detail.label}</p>
                <p className="text-[10px] font-extrabold text-slate-800 dark:text-white mt-0.5">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Bottom Apply Button */}
      <div className="absolute bottom-4 left-0 w-full p-4 z-20 bg-transparent">
        <button 
          onClick={() => setShowApplyModal(true)}
          className="w-full py-3.5 bg-[#4A3AFF] hover:bg-[#3b2ecc] text-white font-bold rounded-btn shadow-md text-xs uppercase tracking-wider text-center"
        >
          Apply for this Job
        </button>
      </div>

      {/* Stateful Job Application Form Modal */}
      {showApplyModal && (
        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-6 text-left">
          <div className={`w-full max-w-sm p-6 rounded-card border shadow-2xl space-y-4 ${
            theme === 'dark' ? 'bg-[#181818] border-neutral-800 text-white' : 'bg-white border-slate-150 text-slate-800'
          }`}>
            <div className="flex justify-between items-center border-b pb-3 border-slate-100 dark:border-neutral-800">
              <h3 className="text-xs font-black uppercase tracking-wider">Apply Form</h3>
              <button type="button" onClick={() => setShowApplyModal(false)} className="text-slate-405 hover:text-slate-650"><X size={18} /></button>
            </div>
            <form onSubmit={handleApplySubmit} className="space-y-3">
              <div>
                <label className="text-[9px] font-black uppercase tracking-wider text-slate-405">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Karthik Balan"
                  className={`w-full p-2.5 mt-1 text-xs rounded-btn border focus:outline-none ${
                    theme === 'dark' ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-slate-200 text-slate-850'
                  }`}
                />
              </div>
              <div>
                <label className="text-[9px] font-black uppercase tracking-wider text-slate-405">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. karthik.balan@avadi.gov.in"
                  className={`w-full p-2.5 mt-1 text-xs rounded-btn border focus:outline-none ${
                    theme === 'dark' ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-slate-200 text-slate-855'
                  }`}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[9px] font-black uppercase tracking-wider text-slate-405">Education / Degree</label>
                  <select 
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    className={`w-full p-2.5 mt-1 text-xs rounded-btn border focus:outline-none ${
                      theme === 'dark' ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-slate-200 text-slate-850'
                    }`}
                  >
                    <option value="No Formal Degree">No Formal Degree</option>
                    <option value="10th Pass">10th Pass</option>
                    <option value="12th Pass">12th Pass</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Undergrad (B.A/B.Sc/B.E)">Undergrad Degree</option>
                    <option value="Postgrad (M.A/M.Sc/M.E)">Postgrad Degree</option>
                  </select>
                </div>
                <div>
                  <label className="text-[9px] font-black uppercase tracking-wider text-slate-405">Passing Year (Optional)</label>
                  <input 
                    type="number" 
                    min="2000"
                    max="2030"
                    value={gradYear}
                    onChange={(e) => setGradYear(e.target.value)}
                    placeholder="e.g. 2024"
                    className={`w-full p-2.5 mt-1 text-xs rounded-btn border focus:outline-none ${
                      theme === 'dark' ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-slate-200 text-slate-855'
                    }`}
                  />
                </div>
              </div>
              <div>
                <label className="text-[9px] font-black uppercase tracking-wider text-slate-405">Upload Resume (.pdf, .doc)</label>
                <div className="relative mt-1">
                  <div 
                    onClick={() => setFileName('Karthik_Balan_Resume.pdf')}
                    className={`w-full p-3 text-center border-2 border-dashed rounded-btn text-xs font-bold text-[#4A3AFF] cursor-pointer hover:bg-[#4A3AFF]/5 transition-all ${
                      theme === 'dark' ? 'border-neutral-700 bg-neutral-900' : 'border-slate-200 bg-slate-50'
                    }`}
                  >
                    {fileName ? `📄 ${fileName}` : '📁 Select resume file (Auto-selects Karthik_Balan_Resume.pdf)'}
                  </div>
                </div>
              </div>
              <div className="flex gap-3 pt-3">
                <button 
                  type="button" 
                  onClick={() => setShowApplyModal(false)}
                  className="flex-1 py-2.5 border rounded-btn text-xs font-bold text-slate-505"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 py-2.5 bg-[#4A3AFF] hover:bg-[#3b2ecc] text-white font-black rounded-btn text-xs uppercase tracking-wider text-center"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal Overlay */}
      {showSuccessModal && (
        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-6 text-center">
          <div className={`w-full max-w-xs p-6 rounded-card border shadow-2xl text-center space-y-4 ${
            theme === 'dark' ? 'bg-[#181818] border-neutral-855 text-white' : 'bg-white border-slate-150 text-slate-800'
          }`}>
            <span className="text-3xl block">✅</span>
            <h4 className="text-xs font-black uppercase tracking-wider text-emerald-500">Applied Successfully</h4>
            <p className="text-[10px] text-slate-505 dark:text-neutral-400 font-semibold leading-relaxed">
              Your application has been forwarded to {job.company}. They will contact you shortly.
            </p>
            <button
              type="button"
              onClick={() => {
                setShowSuccessModal(false);
                navigate('/jobs');
              }}
              className="w-full py-2 bg-[#4A3AFF] hover:bg-[#3b2ecc] text-white font-black text-[10px] rounded-btn uppercase tracking-wider text-center"
            >
              Back to Jobs
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export const DrawerScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  const links = [
    { name: 'Home', icon: '🏠', path: '/home' },
    { name: 'Community Feed', icon: '👥', path: '/community-feed' },
    { name: 'Complaints', icon: '⚠️', path: '/civic' },
    { name: 'Emergency SOS', icon: '🚨', path: '/sos' },
    { name: 'Local Services', icon: '🤝', path: '/services' },
    { name: 'Local Jobs', icon: '💼', path: '/jobs' },
    { name: 'House Rentals', icon: '🏠', path: '/rentals' },
    { name: 'Explore Food', icon: '🍲', path: '/explore-food' },
    { name: 'Choose Language', icon: '🌐', path: '/language' },
    { name: 'Notifications', icon: '🔔', path: '/notifications' },
    { name: 'Settings', icon: '⚙️', path: '/settings' },
    { name: 'Logout', icon: '🚪', path: '/welcome' }
  ];

  return (
    <div className="w-full h-full flex select-none relative overflow-hidden bg-slate-900/40">
      {/* Clickable Overlay to close */}
      <div className="absolute inset-0 z-10" onClick={() => navigate(-1)} />

      {/* Drawer content (width ~85%) */}
      <div className={`w-[85%] h-full flex flex-col justify-between text-left shadow-2xl relative z-20 animate-slide-in-left ${
        theme === 'dark' ? 'bg-[#181818] text-white' : 'bg-white text-slate-800'
      }`}>
        
        {/* Profile Card Header */}
        <div className="p-6 bg-gradient-to-r from-[#4A3AFF] to-[#3b2ecc] text-white flex justify-between items-center relative z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/40 bg-white/20">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150" 
                alt="Drawer Avatar" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="leading-tight">
              <h4 className="text-xs font-black">Karthik Balan</h4>
              <p className="text-[8px] text-white/70 mt-0.5">karthik.balan</p>
              <button onClick={() => navigate('/settings')} className="text-[8.5px] font-bold text-white/90 underline mt-1 block">View Profile</button>
            </div>
          </div>
          <span className="text-white/60 text-xs">❯</span>
        </div>

        {/* Drawer menu scroll list */}
        <div className="flex-grow overflow-y-auto py-4 px-4 space-y-1">
          {links.map((link, i) => (
            <button
              key={i}
              onClick={() => navigate(link.path)}
              className={`w-full p-3 rounded-xl flex items-center gap-3.5 text-[10.5px] font-extrabold transition active:bg-slate-100 dark:active:bg-neutral-800 ${
                theme === 'dark' ? 'text-neutral-250' : 'text-slate-700'
              }`}
            >
              <span className="text-sm">{link.icon}</span>
              <span>{link.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 24. THEME TOGGLE SCREEN
// ==========================================
export const ThemeToggleScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useApp();

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll Area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6 text-left">
        {/* Header */}
        <div className="h-8 flex items-center gap-2">
          <button 
            onClick={() => navigate('/home')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-xs font-black text-slate-850 dark:text-white">Theme</span>
        </div>

        {/* Grid theme options */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          {/* Light Mode */}
          <button
            onClick={() => setTheme('light')}
            className={`p-4 rounded-2xl border flex flex-col items-center gap-4 transition shadow-md ${
              theme === 'light'
                ? 'border-[#4A3AFF] ring-2 ring-[#4A3AFF]/15 bg-white'
                : 'border-neutral-800 bg-neutral-900 text-slate-400'
            }`}
          >
            <div className="aspect-[3/4] w-24 rounded-lg overflow-hidden border border-slate-100 bg-slate-100 flex items-center justify-center">
              <span className="text-[10px] font-bold text-slate-400">☀️ Light</span>
            </div>
            <span className="text-[10.5px] font-extrabold">Light Mode</span>
          </button>

          {/* Dark Mode */}
          <button
            onClick={() => setTheme('dark')}
            className={`p-4 rounded-2xl border flex flex-col items-center gap-4 transition shadow-md ${
              theme === 'dark'
                ? 'border-[#4A3AFF] ring-2 ring-[#4A3AFF]/15 bg-neutral-900 text-white'
                : 'border-slate-200 bg-white text-slate-500'
            }`}
          >
            <div className="aspect-[3/4] w-24 rounded-lg overflow-hidden border border-neutral-800 bg-neutral-950 flex items-center justify-center">
              <span className="text-[10px] font-bold text-neutral-500">🌙 Dark</span>
            </div>
            <span className="text-[10.5px] font-extrabold">Dark Mode</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 25. LANGUAGE SCREEN
// ==========================================
export const LanguageSelectionScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme, language, setLanguage } = useApp();
  const [selectedLang, setSelectedLang] = useState<'en' | 'ta'>(language === 'ta' ? 'ta' : 'en');

  const options = [
    { code: 'en', name: 'English', icon: '🌐' },
    { code: 'ta', name: 'தமிழ் (Tamil)', icon: '📖' }
  ];

  const handleApply = () => {
    setLanguage(selectedLang);
    navigate('/home');
  };

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
    }`}>
      {/* Scroll area */}
      <div className="flex-grow overflow-y-auto p-5 space-y-6 text-left">
        {/* Header */}
        <div className="h-8 flex items-center gap-2">
          <button 
            onClick={() => navigate('/home')}
            className="p-1 rounded-full text-slate-405 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-xs font-black text-slate-855 dark:text-white">Choose Language</span>
        </div>

        {/* Radio Option cards */}
        <div className="space-y-3 pt-2">
          {options.map((option) => (
            <button
              key={option.code}
              onClick={() => setSelectedLang(option.code as any)}
              className={`w-full p-4 rounded-xl border flex items-center justify-between transition shadow-3xs ${
                selectedLang === option.code
                  ? 'border-[#4A3AFF] bg-indigo-50/10'
                  : theme === 'dark' ? 'bg-neutral-900 border-neutral-850 text-neutral-305' : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-sm">{option.icon}</span>
                <span className="text-xs font-extrabold">{option.name}</span>
              </div>
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                selectedLang === option.code
                  ? 'border-[#4A3AFF] bg-[#4A3AFF]'
                  : 'border-slate-300'
              }`}>
                {selectedLang === option.code && (
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Apply Button */}
      <div className="absolute bottom-4 left-0 w-full p-4 z-20 bg-transparent">
        <button
          onClick={handleApply}
          className="w-full py-3.5 bg-[#4A3AFF] hover:bg-[#3b2ecc] text-white font-bold rounded-btn shadow-md text-xs text-center uppercase tracking-wider"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

// ==========================================
// 26. EMERGENCY SOS (VARIANT 3)
// ==========================================
export const EmergencySOSScreenVariant3: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  const contacts = [
    { name: 'Police', number: '100', icon: '⭐' },
    { name: 'Ambulance', number: '108', icon: '🚑' },
    { name: 'Fire & Rescue', number: '101', icon: '🚨' },
    { name: 'Municipality Help Desk', number: '1800 425 6112', icon: '🏢' }
  ];

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
    }`}>
      {/* Scroll Area */}
      <div className="flex-grow overflow-y-auto p-5 space-y-6 pb-20 text-left">
        {/* Header */}
        <div className="h-8 flex items-center">
          <button onClick={() => navigate('/home')} className="p-1 text-slate-400"><ChevronLeft size={20} /></button>
        </div>

        {/* SOS Tap Graphic */}
        <div className="flex flex-col items-center justify-center my-3">
          <button className="w-32 h-32 rounded-full bg-red-500 border-[8px] border-red-100 dark:border-red-950 flex flex-col items-center justify-center text-white active:scale-95 transition shadow-lg">
            <span className="text-xl font-black tracking-wider">SOS</span>
            <span className="text-[7.5px] font-bold mt-1 text-white/90">Tap to Alert</span>
          </button>
        </div>

        {/* List Grid */}
        <div className="space-y-2">
          {contacts.map((contact, i) => (
            <div 
              key={i}
              className={`p-3.5 rounded-card border shadow-3xs flex justify-between items-center ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-sm">{contact.icon}</span>
                <span className="text-[10px] font-extrabold">{contact.name}</span>
              </div>
              <span className="text-[10px] font-black text-slate-700 dark:text-neutral-400">{contact.number}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Blood donation Red Button */}
      <div className="absolute bottom-4 left-0 w-full p-4 z-20 bg-transparent">
        <button
          onClick={() => {}}
          className="w-full py-3.5 bg-[#FF3B30] hover:bg-[#e03126] text-white font-bold rounded-btn shadow-md text-xs text-center uppercase tracking-wider"
        >
          Request Blood Donation
        </button>
      </div>
    </div>
  );
};

// ==========================================
// 27. EXPLORE FOOD SCREEN
// ==========================================
export const ExploreFoodScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [activeTag, setActiveTag] = useState<string>('all');

  const foods = [
    {
      name: 'Hotel Saravana',
      sub: 'Pure Veg • 500m',
      time: 'Open • 7:00 AM - 10:00 PM',
      rating: '★ 4.5',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Sri Krishna Vilas',
      sub: 'Veg • 1.2 km',
      time: 'Open • 6:30 AM - 10:30 PM',
      rating: '★ 4.3',
      image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Lake View Biryani',
      sub: 'Non-Veg • 1.5 km',
      time: 'Open • 11:00 AM - 11:00 PM',
      rating: '★ 4.6',
      image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Amma Mess',
      sub: 'Veg • 800m',
      time: 'Open • 7:30 AM - 9:00 PM',
      rating: '★ 4.2',
      image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll Area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header Search */}
        <div className="flex items-center gap-2">
          <button onClick={() => navigate('/home')} className="p-1 text-slate-400"><ChevronLeft size={20} /></button>
          <div className="flex-grow text-center font-black text-xs pr-4">Explore Food</div>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search food..."
            className={`w-full p-2.5 pl-8 text-xs font-semibold rounded-btn border focus:outline-none ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-805 text-white' : 'bg-white border-slate-200 text-slate-800'
            }`}
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
        </div>

        {/* Tags */}
        <div className="flex gap-2 text-[9px] font-bold overflow-x-auto pb-1">
          {['all', 'nearby', 'veg', 'non-veg', 'top-rated'].map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1.5 rounded-full border uppercase tracking-wider shrink-0 transition ${
                activeTag === tag
                  ? 'bg-slate-800 dark:bg-white text-white dark:text-slate-800 border-slate-800 dark:border-white shadow-2xs'
                  : 'bg-white dark:bg-neutral-900 text-slate-400 dark:text-neutral-500 border-slate-150 dark:border-neutral-800'
              }`}
            >
              {tag === 'all' ? 'All' : tag === 'top-rated' ? 'Top Rated' : tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid List */}
        <div className="space-y-4">
          {foods.map((food, i) => (
            <div
              key={i}
              className={`rounded-card overflow-hidden border shadow-3xs flex flex-col ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              {/* Image banner */}
              <div className="aspect-video w-full relative">
                <img src={food.image} alt={food.name} className="w-full h-full object-cover" />
              </div>

              {/* Body */}
              <div className="p-4 space-y-1.5">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xs font-extrabold">{food.name}</h4>
                    <p className="text-[9px] text-slate-405 dark:text-neutral-500 mt-0.5 font-bold">{food.sub}</p>
                    <p className="text-[8.5px] text-emerald-600 font-bold mt-1">{food.time}</p>
                  </div>
                  <span className="text-[10px] font-black text-amber-500">{food.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 28. LOCAL SERVICES SCREEN (VARIANT)
// ==========================================
export const LocalServicesScreenVariant: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [dialConfirmContact, setDialConfirmContact] = useState<{name: string, phone: string, icon: string} | null>(null);

  const services = [
    {
      name: 'Avadi Electricity Board (EB) Support',
      role: 'Electricity Helpline • Ward 12 & General',
      phone: '044-26340221',
      address: 'TANGEDCO Substation, Avadi Road, Chennai',
      area: 'Bazaar Street & surrounding blocks',
      ward: 'Ward 12',
      icon: '💡'
    },
    {
      name: 'Avadi Plumbers & Sanitary Association',
      role: 'Emergency Plumbing & Water Pipe Repair',
      phone: '+91 98401 23456',
      address: '22, Trunk Road, Near Bus Stand, Avadi',
      area: 'All Avadi areas (Fast response)',
      ward: 'All Wards',
      icon: '🔧'
    },
    {
      name: 'S. K. Electricals & Domestic Wiring',
      role: 'Household Wiring, Inverter & Fan Repairs',
      phone: '+91 98402 34567',
      address: '15, Park Avenue, Green Park Area, Avadi',
      area: 'Green Park & Anna Nagar blocks',
      ward: 'Ward 12 & 13',
      icon: '⚡'
    },
    {
      name: 'Metro Water Supply Desk (Avadi Tankers)',
      role: 'Drinking Water Supply Tankers Booking',
      phone: '044-26343916',
      address: 'Municipal Water Office, Lake View Road, Avadi',
      area: 'Avadi Corporation Limits',
      ward: 'All Wards',
      icon: '💧'
    },
    {
      name: 'Avadi Sanitation & Drainage Helpline',
      role: 'Sewage & Garbage Clearance Desk',
      phone: '044-26340224',
      address: 'Municipal Corporation Office, Avadi, Chennai',
      area: 'Avadi Corporation Limits',
      ward: 'All Wards',
      icon: '🧹'
    },
    {
      name: 'Avadi Board EB Support - Sector 2 Substation',
      role: 'Electricity Supply Sector Helpdesk',
      phone: '044-26340225',
      address: 'Sector 2 Substation Road, Avadi, Chennai',
      area: 'Sector 2 & 3 residential blocks',
      ward: 'Ward 15',
      icon: '💡'
    },
    {
      name: 'Avadi Carpenters & Furniture Works',
      role: 'Door fixing, Sofa repair, Woodwork',
      phone: '+91 98403 45678',
      address: '44, Bazaar Street, Avadi, Chennai',
      area: 'Bazaar Street & surrounding blocks',
      ward: 'Ward 12',
      icon: '🪚'
    },
    {
      name: 'Avadi AC & Appliance Service Center',
      role: 'AC, Fridge & Washing Machine Repair',
      phone: '+91 98404 56789',
      address: '112, High Road, Avadi, Chennai',
      area: 'Avadi Corporation Limits',
      ward: 'All Wards',
      icon: '❄️'
    }
  ];

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll Container */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header Search bar */}
        <div className="flex items-center gap-2">
          <button onClick={() => navigate('/home')} className="p-1 text-slate-405"><ChevronLeft size={20} /></button>
          <div className="flex-grow text-center font-black text-xs pr-4">Local Services</div>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search utility services..."
            className={`w-full p-2.5 pl-8 text-xs font-semibold rounded-btn border focus:outline-none ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-805 text-white' : 'bg-white border-slate-200 text-slate-850'
            }`}
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-405 text-xs">🔍</span>
        </div>

        {/* List of service providers */}
        <div className="space-y-4 pt-2">
          {services.map((serv, i) => (
            <div
              key={i}
              className={`p-4 rounded-card border shadow-3xs flex flex-col gap-3 ${
                theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <div className="flex gap-3.5 items-start">
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-neutral-800 flex items-center justify-center font-black text-[#4A3AFF] text-sm shrink-0">
                  {serv.icon}
                </div>
                <div className="space-y-1 text-left leading-tight flex-1">
                  <h4 className="text-[11px] font-extrabold text-slate-800 dark:text-white">{serv.name}</h4>
                  <p className="text-[8.5px] text-[#4A3AFF] font-bold">{serv.role}</p>
                  <p className="text-[8px] text-slate-500 dark:text-neutral-400 font-semibold mt-1">
                    <span className="font-extrabold text-slate-600 dark:text-neutral-300">Address:</span> {serv.address}
                  </p>
                  <p className="text-[8px] text-slate-500 dark:text-neutral-400 font-semibold">
                    <span className="font-extrabold text-slate-600 dark:text-neutral-300">Coverage:</span> {serv.area} ({serv.ward})
                  </p>
                  <p className="text-[8.5px] font-black text-slate-700 dark:text-neutral-300 mt-1">📞 {serv.phone}</p>
                </div>
              </div>

              {/* Call button */}
              <button 
                type="button"
                onClick={() => setDialConfirmContact({ name: serv.name, phone: serv.phone, icon: serv.icon })}
                className="w-full py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-[9px] rounded-btn transition text-center uppercase tracking-wider"
              >
                Call Service Desk
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* In-UI Dial Confirmation Overlay */}
      {dialConfirmContact && (
        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-6">
          <div className={`w-full max-w-xs p-6 rounded-card border shadow-xl text-center space-y-4 ${
            theme === 'dark' ? 'bg-[#181818] border-neutral-855 text-white' : 'bg-white border-slate-150 text-slate-800'
          }`}>
            <span className="text-2xl block">{dialConfirmContact.icon}</span>
            <h4 className="text-xs font-black uppercase tracking-wider">Confirm Dial</h4>
            <p className="text-[10px] text-slate-505 dark:text-neutral-400 font-semibold leading-relaxed">
              Are you sure you want to dial {dialConfirmContact.name} ({dialConfirmContact.phone})?
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setDialConfirmContact(null)}
                className="flex-1 py-2 text-[10px] font-bold rounded-full border border-slate-200 dark:border-neutral-855 text-slate-505 hover:bg-slate-50 dark:hover:bg-neutral-800"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  window.location.href = `tel:${dialConfirmContact.phone.replace(/[-\s]+/g, '')}`;
                  setDialConfirmContact(null);
                }}
                className="flex-1 py-2 text-[10px] font-bold rounded-full bg-emerald-500 text-white hover:bg-emerald-600"
              >
                Call
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export const RentalsJobsHomeScreenVariant: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
    }`}>
      {/* Scroll Area */}
      <div className="flex-grow overflow-y-auto p-5 space-y-6 text-left">
        {/* Header */}
        <div className="h-8 flex items-center">
          <button onClick={() => navigate('/home')} className="p-1 text-slate-405"><ChevronLeft size={20} /></button>
        </div>

        {/* Title */}
        <div className="text-center space-y-1">
          <h2 className="text-md font-black text-slate-805 dark:text-white">Rentals & Jobs</h2>
          <p className="text-[10px] text-slate-400 dark:text-neutral-500 font-semibold">Find what you need</p>
        </div>

        {/* 2 Big Cards side-by-side */}
        <div className="grid grid-cols-2 gap-4 pt-4">
          {/* Rentals */}
          <button
            onClick={() => navigate('/rentals')}
            className="rounded-2xl bg-indigo-500 hover:bg-indigo-600 text-white p-5 flex flex-col justify-between items-center text-center aspect-[4/5] shadow-md hover:scale-[1.01] active:scale-[0.98] transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg mt-2">🏠</div>
            <div className="mb-2">
              <h4 className="text-xs font-black">Rentals</h4>
              <p className="text-[7.5px] text-white/80 leading-snug mt-1 font-semibold">Find Houses, Shops, PGs & more</p>
            </div>
          </button>

          {/* Jobs */}
          <button
            onClick={() => navigate('/jobs')}
            className="rounded-2xl bg-purple-500 hover:bg-purple-600 text-white p-5 flex flex-col justify-between items-center text-center aspect-[4/5] shadow-md hover:scale-[1.01] active:scale-[0.98] transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg mt-2">💼</div>
            <div className="mb-2">
              <h4 className="text-xs font-black">Jobs</h4>
              <p className="text-[7.5px] text-white/80 leading-snug mt-1 font-semibold">Find Jobs & Internships</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
export const RentalsPageScreenVariant: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const listings = [
    {
      title: 'Shop for Rent',
      location: 'Market Road',
      details: '500 sq ft',
      price: '₹15,000 / mo',
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=300'
    },
    {
      title: 'House for Rent',
      location: 'Water Tank Road',
      details: '2BHK',
      price: '₹8,500 / mo',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=300'
    },
    {
      title: 'PG for Boys',
      location: 'Near Bus Stand',
      details: '1 Room (Shared)',
      price: '₹3,000 / mo',
      image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=300'
    }
  ];

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll Area */}
      <div className="flex-grow overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header Search */}
        <div className="flex items-center gap-2">
          <button onClick={() => navigate('/jobs-rentals-alt')} className="p-1 text-slate-400"><ChevronLeft size={20} /></button>
          <div className="flex-grow text-center font-black text-xs pr-4">Rentals</div>
        </div>
        <p className="text-[10px] text-slate-400 font-semibold text-center mt-0.5">Find your perfect space</p>

        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search rentals..."
            className={`w-full p-2.5 pl-8 text-xs font-semibold rounded-btn border focus:outline-none ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-805 text-white' : 'bg-white border-slate-200 text-slate-800'
            }`}
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 text-[9px] font-bold overflow-x-auto pb-1">
          {['all', 'house', 'shop', 'pg', 'land'].map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveCategory(tag)}
              className={`px-3.5 py-1.5 rounded-full border uppercase tracking-wider shrink-0 transition ${
                activeCategory === tag
                  ? 'bg-blue-50 dark:bg-blue-955/20 text-[#4A3AFF] border-[#4A3AFF] shadow-2xs'
                  : 'bg-white dark:bg-neutral-900 text-slate-405 dark:text-neutral-500 border-slate-150 dark:border-neutral-800'
              }`}
            >
              {tag === 'all' ? 'All' : tag === 'pg' ? 'PG' : tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div>

        {/* Listings List */}
        <div className="space-y-3.5">
          {listings.map((list, i) => (
            <div
              key={i}
              className={`p-3.5 rounded-card border shadow-3xs flex gap-3.5 items-center justify-between ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <div className="flex gap-3 items-center">
                {/* Thumbnail */}
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                  <img src={list.image} alt={list.title} className="w-full h-full object-cover" />
                </div>
                {/* Text Details */}
                <div className="space-y-0.5 leading-tight">
                  <h4 className="text-[11px] font-extrabold">{list.title}</h4>
                  <p className="text-[8.5px] text-slate-405 dark:text-neutral-500 font-semibold">{list.location}</p>
                  <p className="text-[8.5px] text-slate-405 dark:text-neutral-500 font-semibold">{list.details}</p>
                </div>
              </div>

              {/* Call Owner Button */}
              <button
                type="button"
                className="px-3 py-1.5 bg-[#4CD964] hover:bg-[#3ec455] text-white text-[9px] font-black rounded-lg transition"
              >
                Call Owner
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const GovernmentSchemesScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [appliedScheme, setAppliedScheme] = useState<string | null>(null);
  const [simulatedPortalScheme, setSimulatedPortalScheme] = useState<any | null>(null);

  const schemes = [
    {
      title: 'Avadi Student Scholarship Scheme',
      sub: 'Avadi Municipality • Education Support Program',
      desc: 'Provides 100% college tuition fees assistance for government school graduates with high academic scores.',
      eligibility: 'Score > 85% in Grade 12, family income < 2.5 LPA',
      action: 'Apply for Scholarship',
      icon: '🎓'
    },
    {
      title: 'Avadi Municipal Housing Subsidy',
      sub: 'TNHB Pattabiram • Housing Benefit Scheme',
      desc: 'Subsidized allocation of affordable apartments built near Pattabiram Tidel Park for low-income citizens.',
      eligibility: 'Resident of Avadi Ward, family income < 3 LPA',
      action: 'Apply for Housing',
      icon: '🏢'
    },
    {
      title: 'Avadi Household Solar & Green Subsidy',
      sub: 'TANGEDCO Avadi • Sustainability Benefit',
      desc: 'Municipal discount program providing 40% reimbursement on household solar panels & rainwater harvest systems.',
      eligibility: 'Own household inside Avadi municipal boundaries',
      action: 'Request Subsidy',
      icon: '☀️'
    },
    {
      title: 'Avadi Senior Pension Plan',
      sub: 'Avadi Municipal Corporation • Elderly Welfare Program',
      desc: 'Provides monthly pension support of ₹2,000 for elderly citizens residing inside the municipal limits.',
      eligibility: 'Resident of Avadi, Age >= 60, family income < 1.5 LPA',
      action: 'Apply for Pension',
      icon: '👴'
    },
    {
      title: 'Avadi Women Startup Grant',
      sub: 'Tamil Nadu Startup Desk • Women Empowerment Scheme',
      desc: 'Provides interest-free startup grants up to ₹50,000 for women-led home businesses and cottage industries.',
      eligibility: 'Woman resident of Avadi, business setup within limits',
      action: 'Apply for Startup Grant',
      icon: '👩‍💼'
    }
  ];

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll Area */}
      <div className="flex-grow overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header */}
        <div className="flex items-center gap-2">
          <button onClick={() => navigate('/home')} className="p-1 text-slate-405 hover:text-slate-655"><ChevronLeft size={20} /></button>
          <div className="flex-grow text-center font-black text-xs pr-6">Government Schemes</div>
        </div>

        {/* Catalog */}
        <div className="space-y-4 pt-2">
          {schemes.map((scheme, idx) => (
            <div 
              key={idx}
              className={`p-4 rounded-card border shadow-3xs space-y-3 text-left ${
                theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <div className="flex gap-3 items-start">
                <span className="text-xl shrink-0 mt-0.5">{scheme.icon}</span>
                <div>
                  <h4 className="text-[11.5px] font-black text-[#4A3AFF]">{scheme.title}</h4>
                  <p className="text-[8px] text-slate-405 dark:text-neutral-500 font-extrabold uppercase mt-0.5">{scheme.sub}</p>
                </div>
              </div>
              <p className="text-[9.5px] font-semibold text-slate-600 dark:text-neutral-400 leading-normal">{scheme.desc}</p>
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800/60 text-[8px] font-bold text-slate-500 dark:text-neutral-400 leading-snug">
                📌 Eligibility: {scheme.eligibility}
              </div>
              <button 
                type="button"
                onClick={() => setSimulatedPortalScheme(scheme)}
                className="w-full py-2 bg-[#4A3AFF] text-white hover:bg-slate-900 text-[9px] font-black uppercase tracking-wider rounded-btn transition text-center"
              >
                {scheme.action}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Success Modal Overlay */}
      {appliedScheme && (
        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-6 text-center animate-fade-in">
          <div className={`w-full max-w-xs p-6 rounded-card border shadow-2xl space-y-4 ${
            theme === 'dark' ? 'bg-[#181818] border-neutral-850 text-white' : 'bg-white border-slate-150 text-slate-800'
          }`}>
            <span className="text-3xl block animate-bounce">📋</span>
            <h4 className="text-xs font-black uppercase tracking-wider text-emerald-500">Submit Successfully</h4>
            <p className="text-[10px] text-slate-555 dark:text-neutral-400 font-semibold leading-relaxed">
              Your application for <span className="font-bold">{appliedScheme}</span> has been initiated. Detailed verification forms will be sent to your registered address.
            </p>
            <button
              onClick={() => setAppliedScheme(null)}
              className="w-full py-2.5 bg-[#4A3AFF] text-white font-bold rounded-full text-xs uppercase"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Simulated Government Portal Overlay */}
      {simulatedPortalScheme && (
        <div className="absolute inset-0 z-50 bg-[#F4F4F9] text-slate-800 flex flex-col h-full animate-fade-in text-left">
          {/* Mock Browser Header */}
          <div className="bg-slate-205 p-2.5 flex items-center gap-2 border-b border-slate-300 text-slate-600 shrink-0">
            <button 
              type="button" 
              onClick={() => setSimulatedPortalScheme(null)}
              className="text-xs font-black p-1 hover:text-slate-900"
            >
              ✕ Close
            </button>
            <div className="flex-grow bg-white rounded-full px-3 py-1 flex items-center justify-between text-[8px] font-semibold border border-slate-300">
              <span className="flex items-center gap-1">🔒 <span className="text-slate-400">tn.gov.in</span>/schemes/apply</span>
              <span>🔄</span>
            </div>
          </div>

          {/* Portal Content */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {/* Govt Header Logo */}
            <div className="flex items-center gap-2 border-b border-amber-500/20 pb-3">
              <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-black text-xs">
                TN
              </div>
              <div className="leading-tight text-left">
                <h3 className="text-[10px] font-black uppercase text-amber-800">Government of Tamil Nadu</h3>
                <p className="text-[7.5px] text-slate-500 font-extrabold uppercase">Department of Social Welfare</p>
              </div>
            </div>

            {/* Scheme Title */}
            <div className="space-y-1">
              <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-[8px] font-black rounded-full uppercase">Welfare Program</span>
              <h2 className="text-xs font-black text-slate-850">{simulatedPortalScheme.title}</h2>
              <p className="text-[8px] text-slate-405 font-bold uppercase">{simulatedPortalScheme.sub}</p>
            </div>

            {/* General Instructions */}
            <div className="space-y-2 text-[9px] text-slate-600 leading-relaxed font-semibold">
              <p>
                Welcome to the unified online application desk for state-sponsored social benefits. Please verify that your credentials match your digital identity profile before proceeding.
              </p>
              
              <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-2">
                <span className="text-[8px] uppercase tracking-wider font-black text-slate-400">Required Documents for Upload</span>
                <ul className="list-disc pl-4 space-y-1 text-[8.5px]">
                  <li>Aadhaar Card copy (UIDAI)</li>
                  <li>Avadi residency certificate proof</li>
                  <li>Income and assets declaration certificate</li>
                  <li>Bank passbook details for direct transfer (DBT)</li>
                </ul>
              </div>

              <p className="text-[8.5px] text-amber-705 bg-amber-50 p-2.5 rounded-lg border border-amber-200 font-bold">
                ⚠️ Note: The submission will automatically verify your residency ward details with Avadi Municipal Corporation database.
              </p>
            </div>
          </div>

          {/* Action Footer */}
          <div className="p-3 bg-white border-t border-slate-200 flex gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => setSimulatedPortalScheme(null)}
              className="flex-1 py-2.5 text-[9px] font-black uppercase rounded-btn border border-slate-300 text-slate-500 text-center"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => {
                const schemeName = simulatedPortalScheme.title;
                setSimulatedPortalScheme(null);
                setAppliedScheme(schemeName); // Triggers success modal
              }}
              className="flex-1 py-2.5 bg-amber-600 hover:bg-amber-750 text-white text-[9px] font-black uppercase rounded-btn text-center"
            >
              Proceed & Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// ==========================================
// EXPLORE PLACES SCREEN
// ==========================================
export const ExplorePlacesScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [activeTag, setActiveTag] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dialConfirmContact, setDialConfirmContact] = useState<{name: string; phone: string; icon: string} | null>(null);

  const places = [
    {
      name: 'Paruthipattu Lake Eco-Park',
      sub: 'Eco-Park, Boating Lake & Walking Tracks • Ward 12',
      rating: '★ 4.9',
      tag: 'places',
      subtag: 'parks',
      phone: '044-26343916',
      icon: '🌳',
      image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'Avadi Sri Karumari Amman Temple',
      sub: 'Famous Hindu Temple & Historic Landmark • Ward 4',
      rating: '★ 4.8',
      tag: 'places',
      subtag: 'temples',
      phone: '044-26340221',
      icon: '🛕',
      image: 'https://images.unsplash.com/photo-1544084944-15269ec7b5a0?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'Pattabiram Tidel IT Park',
      sub: 'Modern IT Hub & Business Center • Pattabiram',
      rating: '★ 4.5',
      tag: 'places',
      subtag: 'it-hub',
      phone: '044-26340222',
      icon: '💻',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'Vel Tech University Campus',
      sub: 'Renowned Engineering University & R&D Hub • Avadi',
      rating: '★ 4.6',
      tag: 'places',
      subtag: 'education',
      phone: '180030706900',
      icon: '🎓',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600'
    }
  ];

  const filteredItems = places.filter(item => {
    const matchesTag = activeTag === 'all' || item.subtag === activeTag;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.sub.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scrollable Container */}
      <div className="flex-grow overflow-y-auto p-5 space-y-5 pb-20 text-left animate-fade-in">
        {/* Header Title */}
        <div className="flex items-center gap-2 h-8">
          <button 
            onClick={() => navigate('/explore')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-xs font-black text-slate-855 dark:text-white uppercase tracking-wider">Explore Places</span>
        </div>

        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search sights, parks, temples..."
            className={`w-full p-2.5 pl-8 text-xs font-semibold rounded-btn border focus:outline-none ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-850 text-white' : 'bg-white border-slate-200 text-slate-805'
            }`}
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-405 text-xs">🔍</span>
        </div>

        {/* Category pills */}
        <div className="flex gap-2 text-[9px] font-bold overflow-x-auto pb-1">
          {[
            { id: 'all', name: 'All Sights' },
            { id: 'parks', name: 'Sights & Parks' },
            { id: 'temples', name: 'Temples' },
            { id: 'it-hub', name: 'IT Hubs' },
            { id: 'education', name: 'Education' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTag(tab.id)}
              className={`px-3 py-1.5 rounded-full border uppercase tracking-wider transition shrink-0 ${
                activeTag === tab.id
                  ? 'bg-slate-800 dark:bg-white text-white dark:text-slate-800 border-slate-800 dark:border-white shadow-2xs'
                  : 'bg-white dark:bg-neutral-900 text-slate-400 dark:text-neutral-500 border-slate-150 dark:border-neutral-800'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content list */}
        <div className="space-y-4">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-400 font-bold border border-dashed rounded-xl mt-4">
              No places found matching search.
            </div>
          ) : (
            filteredItems.map((place, idx) => (
              <div
                key={idx}
                className={`rounded-card overflow-hidden border shadow-3xs flex flex-col ${
                  theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-150'
                }`}
              >
                <div className="aspect-video w-full relative bg-slate-100 dark:bg-neutral-950">
                  <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
                </div>

                <div className="p-4 space-y-3.5 text-left">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xs font-black text-slate-800 dark:text-white flex items-center gap-1.5">
                        <span>{place.icon}</span> {place.name}
                      </h4>
                      <p className="text-[8.5px] text-slate-400 dark:text-neutral-500 mt-1 font-bold">{place.sub}</p>
                    </div>
                    <span className="text-[10px] font-black text-amber-500 shrink-0">{place.rating}</span>
                  </div>

                  <div className="border-t border-slate-100 dark:border-neutral-800/60 pt-3 flex justify-between items-center">
                    <button 
                      type="button"
                      onClick={() => setDialConfirmContact(place)}
                      className="text-slate-500 hover:text-[#4A3AFF] transition text-[10px] font-bold"
                    >
                      📞 Contact Info
                    </button>
                    <span className="text-[8.5px] text-indigo-500 font-extrabold uppercase">Avadi Landmark</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Mock Tab bar */}
      <div className={`absolute bottom-0 left-0 w-full h-16 border-t flex justify-around items-center px-2 z-20 ${
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
        <button onClick={() => navigate('/explore')} className="flex flex-col items-center justify-center flex-1 text-[#4A3AFF]">
          <span className="text-md bg-[#4A3AFF]/10 px-4 py-0.5 rounded-full">🧭</span>
          <span className="text-[9px] font-bold mt-1">Explore</span>
        </button>
        <button onClick={() => navigate('/community-feed')} className="flex flex-col items-center justify-center flex-1 opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-md">👥</span>
          <span className="text-[9px] font-bold mt-1">Feed</span>
        </button>
      </div>

      {/* Dial Confirmation Overlay */}
      {dialConfirmContact && (
        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-6 text-center">
          <div className={`w-full max-w-xs p-6 rounded-card border shadow-xl space-y-4 ${
            theme === 'dark' ? 'bg-[#181818] border-neutral-855 text-white' : 'bg-white border-slate-150 text-slate-800'
          }`}>
            <span className="text-2xl block">{dialConfirmContact.icon}</span>
            <h4 className="text-xs font-black uppercase tracking-wider">Confirm Dial</h4>
            <p className="text-[10px] text-slate-500 dark:text-neutral-400 font-semibold leading-relaxed">
              Are you sure you want to dial {dialConfirmContact.name} ({dialConfirmContact.phone})?
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setDialConfirmContact(null)}
                className="flex-1 py-2 text-[10px] font-bold rounded-full border border-slate-200 dark:border-neutral-855 text-slate-500"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  window.location.href = `tel:${dialConfirmContact.phone.replace(/[-\s]+/g, '')}`;
                  setDialConfirmContact(null);
                }}
                className="flex-1 py-2 text-[10px] font-bold rounded-full bg-emerald-500 text-white"
              >
                Call
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 31. SETTINGS SCREEN
// ==========================================
export const SettingsScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme, language } = useApp();

  const settingsList = [
    { name: 'Profile Settings', icon: '👤', path: '/profile' },
    { name: 'Notification Settings', icon: '🔔', path: '/notifications' },
    { name: 'Language', extra: language === 'ta' ? 'Tamil' : 'English', icon: '🌐', path: '/language' },
    { name: 'Theme', extra: theme === 'dark' ? 'Dark Mode' : 'Light Mode', icon: '☀️', path: '/theme' },
    { name: 'Privacy Policy', icon: '🛡️', path: '/home' },
    { name: 'Terms & Conditions', icon: '📄', path: '/home' },
    { name: 'Logout', icon: '🚪', path: '/welcome' }
  ];

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 text-left">
        {/* Header */}
        <div className="h-8 flex items-center gap-2">
          <button onClick={() => navigate('/home')} className="p-1 text-slate-400"><ChevronLeft size={20} /></button>
          <span className="text-xs font-black text-slate-850 dark:text-white">Settings</span>
        </div>

        {/* Menu list */}
        <div className="space-y-2 pt-2">
          {settingsList.map((item, idx) => (
            <div
              key={idx}
              onClick={() => {
                if (item.name === 'Privacy Policy' || item.name === 'Terms & Conditions') {
                  alert(`${item.name} is currently under development and will be available in the next release.`);
                } else {
                  navigate(item.path);
                }
              }}
              className={`p-3.5 rounded-card border flex justify-between items-center cursor-pointer active:bg-slate-50 dark:active:bg-neutral-800 transition ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850 text-white' : 'bg-white border-slate-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-sm">{item.icon}</span>
                <span className="text-[10px] font-extrabold">{item.name}</span>
              </div>
              <div className="flex items-center gap-2">
                {item.extra && <span className="text-[9px] text-slate-400 font-semibold">{item.extra}</span>}
                <span className="text-slate-400 text-xs">❯</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 32. NOTIFICATIONS SCREEN
// ==========================================
export const NotificationsScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  const notifications = [
    { type: 'Complaint Update', time: '2m ago', desc: 'Your complaint has been in progress.', icon: '📅' },
    { type: 'Community Alert', time: '1h ago', desc: 'Water supply issue in your area.', icon: '📢' },
    { type: 'Event Update', time: '3h ago', desc: 'Community meeting today, 5 PM.', icon: '📅' },
    { type: 'Emergency Alert', time: '5h ago', desc: 'Heavy rain warning issued.', icon: '⚠️' }
  ];

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 text-left">
        {/* Header */}
        <div className="h-8 flex items-center gap-2">
          <button onClick={() => navigate('/home')} className="p-1 text-slate-400"><ChevronLeft size={20} /></button>
          <span className="text-xs font-black text-slate-850 dark:text-white">Notifications</span>
        </div>

        {/* List */}
        <div className="space-y-3 pt-2">
          {notifications.map((notif, i) => (
            <div
              key={i}
              className={`p-3.5 rounded-card border shadow-3xs flex justify-between items-start gap-3.5 ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <div className="flex gap-3 items-start">
                <span className="text-sm mt-0.5">{notif.icon}</span>
                <div className="space-y-0.5 leading-tight">
                  <h4 className="text-[11px] font-extrabold">{notif.type}</h4>
                  <p className="text-[8.5px] text-slate-405 dark:text-neutral-500 font-semibold">{notif.desc}</p>
                </div>
              </div>
              <span className="text-[8px] text-slate-400 font-bold shrink-0">{notif.time}</span>
            </div>
          ))}
        </div>

        {/* View All link */}
        <div className="text-center pt-8">
          <button onClick={() => navigate('/home')} className="text-xs font-black text-[#4A3AFF] underline">View All</button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 33. MY REPORTS SCREEN (VARIANT)
// ==========================================
export const MyReportsScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [activeTab, setActiveTab] = useState<'public' | 'private'>('public');

  const reports = [
    { title: 'Street Light Issue', id: '#AVD-2025-00012', date: 'May 12, 2025', status: 'In Progress', statusColor: 'bg-emerald-50 text-emerald-600' },
    { title: 'Garbage Issue', id: '#AVD-2025-00011', date: 'May 10, 2025', status: 'Under Review', statusColor: 'bg-amber-55/10 text-amber-500' },
    { title: 'Water Issue', id: '#AVD-2025-00010', date: 'May 8, 2025', status: 'Resolved', statusColor: 'bg-emerald-50 text-emerald-600' }
  ];

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll Area */}
      <div className="flex-grow overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header */}
        <div className="flex justify-between items-center h-8">
          <button onClick={() => navigate('/home')} className="p-1 text-slate-400"><ChevronLeft size={20} /></button>
          <span className="text-xs font-black text-slate-850 dark:text-white">My Reports</span>
          <div className="w-6 h-6" />
        </div>

        {/* Tabs */}
        <div className="flex gap-2 text-[10px] font-bold border-b border-slate-100 dark:border-neutral-900 pb-2">
          <button 
            onClick={() => setActiveTab('public')}
            className={`px-4 py-2 rounded-full border uppercase tracking-wider transition ${
              activeTab === 'public'
                ? 'bg-blue-50 dark:bg-blue-955/20 text-[#4A3AFF] border-[#4A3AFF] shadow-3xs'
                : 'bg-white dark:bg-neutral-900 text-slate-400 dark:text-neutral-500 border-slate-150 dark:border-neutral-800'
            }`}
          >
            Public Reports
          </button>
          <button 
            onClick={() => setActiveTab('private')}
            className={`px-4 py-2 rounded-full border uppercase tracking-wider transition ${
              activeTab === 'private'
                ? 'bg-blue-50 dark:bg-blue-955/20 text-[#4A3AFF] border-[#4A3AFF] shadow-3xs'
                : 'bg-white dark:bg-neutral-900 text-slate-400 dark:text-neutral-500 border-slate-150 dark:border-neutral-800'
            }`}
          >
            Private Reports
          </button>
        </div>

        {/* List */}
        <div className="space-y-3.5 pt-2">
          {reports.map((rep, i) => (
            <div
              key={i}
              onClick={() => navigate('/complaints/details')}
              className={`p-3.5 rounded-card border shadow-3xs flex gap-3.5 items-center justify-between cursor-pointer ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <div className="flex gap-3 items-center">
                {/* Thumbnail */}
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=300" alt="Thumbnail" className="w-full h-full object-cover" />
                </div>
                {/* Details */}
                <div className="space-y-0.5 leading-tight">
                  <h4 className="text-[11px] font-extrabold">{rep.title}</h4>
                  <p className="text-[8.5px] text-slate-405 dark:text-neutral-500 font-bold">{rep.id}</p>
                  <p className="text-[8.5px] text-slate-405 dark:text-neutral-500 font-semibold">{rep.date}</p>
                </div>
              </div>
              <span className={`px-2 py-0.5 text-[8px] font-black rounded-full ${rep.statusColor}`}>{rep.status}</span>
            </div>
          ))}
        </div>

        {/* View All link */}
        <div className="text-center pt-8">
          <button onClick={() => navigate('/home')} className="text-xs font-black text-[#4A3AFF] underline">View All</button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 34. REPORT DETAILS SCREEN
// ==========================================
export const ReportDetailsScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll Area */}
      <div className="flex-grow overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header */}
        <div className="flex justify-between items-center h-8">
          <button onClick={() => navigate('/my-reports')} className="p-1 text-slate-400"><ChevronLeft size={20} /></button>
          <span className="text-xs font-black text-slate-850 dark:text-white">Street Light Issue</span>
          <div className="w-6 h-6" />
        </div>

        {/* Main Card */}
        <div className={`p-4.5 rounded-card border shadow-3xs space-y-4 ${
          theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
        }`}>
          {/* Header ID and Badge */}
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-black text-slate-400">#AVD-2025-00012</span>
            <span className="px-2 py-0.5 text-[8px] font-black text-emerald-600 bg-emerald-50 rounded-full">In Progress</span>
          </div>

          <div className="space-y-0.5 leading-tight">
            <h4 className="text-[11.5px] font-extrabold text-slate-850 dark:text-white">Street Light Issue</h4>
            <p className="text-[8.5px] text-slate-400 font-semibold">Ward 12B, 7th Street, Avadi</p>
            <p className="text-[8.5px] text-slate-400 font-semibold">May 12, 2025</p>
          </div>

          {/* Description */}
          <div className="space-y-1 pt-1.5 border-t border-slate-100 dark:border-neutral-800/60">
            <h5 className="text-[9.5px] font-black uppercase text-slate-400">Description</h5>
            <p className="text-[9.5px] text-slate-650 leading-relaxed font-semibold">
              Street light not working near community center.
            </p>
          </div>

          {/* Uploaded Photos */}
          <div className="space-y-1.5">
            <h5 className="text-[9.5px] font-black uppercase text-slate-400">Uploaded Photos (3)</h5>
            <div className="flex gap-2">
              {[1, 2, 3].map((num) => (
                <div key={num} className="w-12 h-12 rounded-lg overflow-hidden bg-slate-100 border shrink-0">
                  <img src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=150" alt="Attached" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Updates */}
          <div className="space-y-3 pt-2.5 border-t border-slate-100 dark:border-neutral-800/60">
            <h5 className="text-[9.5px] font-black uppercase text-slate-400">Updates</h5>
            
            <div className="space-y-3 text-[9px] font-semibold">
              {/* point 1 */}
              <div className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1 shrink-0" />
                <div>
                  <p className="text-slate-400 font-bold">May 13, 2025, 10:30 AM</p>
                  <p className="text-slate-700 font-black mt-0.5">Assigned to Maintenance Team</p>
                </div>
              </div>

              {/* point 2 */}
              <div className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-blue-500 mt-1 shrink-0" />
                <div>
                  <p className="text-slate-400 font-bold">May 12, 2025, 02:15 PM</p>
                  <p className="text-slate-700 font-black mt-0.5">Complaint Registered</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

// ==========================================
// 35. EMERGENCY CONTACTS (VARIANT 2)
// ==========================================
export const EmergencyContactsScreenVariant2: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  const contacts = [
    { name: 'Police', number: '100', icon: '⭐' },
    { name: 'Ambulance', number: '108', icon: '🚑' },
    { name: 'Fire & Rescue', number: '101', icon: '🚨' },
    { name: 'Municipality Help Desk', number: '1800 425 1144', icon: '🏢' },
    { name: 'Disaster Management', number: '1077', icon: '⚠️' }
  ];

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
    }`}>
      {/* Scroll Area */}
      <div className="flex-grow overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header */}
        <div className="h-8 flex items-center gap-2">
          <button onClick={() => navigate('/home')} className="p-1 text-slate-400"><ChevronLeft size={20} /></button>
          <span className="text-xs font-black text-slate-850 dark:text-white">Emergency Contacts</span>
        </div>

        {/* List */}
        <div className="space-y-2 pt-2">
          {contacts.map((contact, i) => (
            <div 
              key={i}
              className={`p-3.5 rounded-card border shadow-3xs flex justify-between items-center ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-sm">{contact.icon}</span>
                <span className="text-[10px] font-extrabold">{contact.name}</span>
              </div>
              <span className="text-[10px] font-black text-slate-700 dark:text-neutral-400">{contact.number}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 36. COMMUNITY FEED (VARIANT 1)
// ==========================================
export const CommunityFeedScreenVariant1: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll Area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header */}
        <div className="flex justify-between items-center h-8">
          <span className="text-xs font-black text-slate-850 dark:text-white">Community Feed</span>
          <span className="text-slate-400">🔍</span>
        </div>

        {/* Tab Selector */}
        <div className="flex gap-2 text-[9px] font-bold overflow-x-auto pb-1">
          {['My Feed', 'All Areas', 'Complaints'].map((tag, idx) => (
            <button
              key={idx}
              className={`px-3.5 py-1.5 rounded-full border uppercase tracking-wider shrink-0 transition ${
                idx === 0
                  ? 'bg-emerald-600 text-white border-emerald-650'
                  : 'bg-white dark:bg-neutral-900 text-slate-405 dark:text-neutral-500 border-slate-150'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Card List */}
        <div className="space-y-4">
          {/* Card 1 */}
          <div className={`p-4 rounded-card border shadow-3xs space-y-3 ${
            theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
          }`}>
            <div className="flex gap-2.5 items-center">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs shrink-0">RK</div>
              <div className="leading-none">
                <h4 className="text-[10px] font-black">Ramesh Kumar</h4>
                <p className="text-[7.5px] text-slate-400 font-semibold mt-1">2 hours ago</p>
              </div>
            </div>
            <div className="aspect-[2/1] rounded-xl overflow-hidden bg-slate-50">
              <img src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
            </div>
            <p className="text-[9.5px] font-semibold text-slate-700 leading-normal">
              Street light not working near Avadi Park. Please fix.
            </p>
            <div className="flex items-center gap-4 text-[9px] font-bold text-slate-400">
              <span>❤️ 12</span>
              <span>💬 3</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className={`p-4 rounded-card border shadow-3xs space-y-3 ${
            theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
          }`}>
            <div className="flex gap-2.5 items-center">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs shrink-0">R</div>
              <div className="leading-none">
                <h4 className="text-[10px] font-black">Revothi</h4>
                <p className="text-[7.5px] text-slate-400 font-semibold mt-1">5 hours ago</p>
              </div>
            </div>
            <div className="aspect-[2/1] rounded-xl overflow-hidden bg-slate-50">
              <img src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button 
        onClick={() => navigate('/community-feed/create')}
        className="absolute bottom-20 right-5 w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-650 to-indigo-500 text-white flex items-center justify-center text-xl shadow-lg active:scale-95 transition-all z-20"
      >
        +
      </button>

      {/* Mock Tab bar */}
      <div className={`absolute bottom-0 left-0 w-full h-14 border-t flex justify-around items-center px-2 z-20 ${
        theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-100'
      }`}>
        <button onClick={() => navigate('/home')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">🏠</span><span>Home</span></button>
        <button onClick={() => navigate('/services')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">🛠️</span><span>Services</span></button>
        <button onClick={() => navigate('/sos')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">🚨</span><span>SOS</span></button>
        <button className="flex flex-col items-center gap-1 text-[8.5px] text-indigo-500 font-bold"><span className="text-md">👥</span><span>Feed</span></button>
        <button onClick={() => navigate('/settings')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">👤</span><span>Profile</span></button>
      </div>
    </div>
  );
};

// ==========================================
// 37. HOME DASHBOARD (VARIANT 1)
// ==========================================
export const HomeDashboardScreenVariant1: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll Area */}
      <div className="flex-grow overflow-y-auto p-5 space-y-5 pb-20 text-left">
        {/* Header profile container */}
        <div className="flex justify-between items-center h-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-105 border">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="text-[11px] font-black">Hello, Karthik 👋</h4>
              <p className="text-[8px] text-slate-400 font-semibold mt-0.5">Ward 14, Avadi</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-slate-400 cursor-pointer">🔔</span>
            <div className="w-6 h-6" />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-2">
          <h5 className="text-[9.5px] font-black uppercase text-slate-400 tracking-wider">Quick Actions</h5>
          <div className="grid grid-cols-4 gap-2 text-center text-[8px] font-bold">
            <button onClick={() => navigate('/civic')} className="p-3 bg-white dark:bg-neutral-900 border rounded-xl flex flex-col items-center gap-1.5 shadow-3xs">
              <span className="text-base text-blue-500">📋</span>
              <span className="text-slate-700 dark:text-neutral-300">Complaints</span>
            </button>
            <button onClick={() => navigate('/sos')} className="p-3 bg-white dark:bg-neutral-900 border rounded-xl flex flex-col items-center gap-1.5 shadow-3xs">
              <span className="text-base text-red-500">🚨</span>
              <span className="text-slate-700 dark:text-neutral-300">Emergency SOS</span>
            </button>
            <button onClick={() => navigate('/community-feed')} className="p-3 bg-white dark:bg-neutral-900 border rounded-xl flex flex-col items-center gap-1.5 shadow-3xs">
              <span className="text-base text-purple-500">👥</span>
              <span className="text-slate-700 dark:text-neutral-300">Community Feed</span>
            </button>
            <button onClick={() => navigate('/services')} className="p-3 bg-white dark:bg-neutral-900 border rounded-xl flex flex-col items-center gap-1.5 shadow-3xs">
              <span className="text-base text-indigo-500">🤝</span>
              <span className="text-slate-700 dark:text-neutral-300">Local Services</span>
            </button>
          </div>
        </div>

        {/* Travel Information */}
        <div className="space-y-2">
          <h5 className="text-[9.5px] font-black uppercase text-slate-400 tracking-wider">Travel Information</h5>
          <div className="grid grid-cols-2 gap-3.5">
            <div className="p-3.5 bg-white dark:bg-neutral-900 border rounded-xl shadow-3xs text-[9.5px]">
              <p className="font-extrabold text-slate-700 dark:text-white">Avadi Railway Station</p>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="text-md">☀️</span>
                <span className="font-black text-slate-800 dark:text-white">28°C</span>
              </div>
            </div>
            <div className="p-3.5 bg-white dark:bg-neutral-900 border rounded-xl shadow-3xs text-[9.5px]">
              <p className="font-extrabold text-slate-700 dark:text-white">Traffic</p>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
                <span className="font-black text-slate-800 dark:text-white">Moderate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Explore Avadi Horizontal scrolling */}
        <div className="space-y-2.5">
          <div className="flex justify-between items-center">
            <h5 className="text-[9.5px] font-black uppercase text-slate-400 tracking-wider">Explore Avadi</h5>
            <button onClick={() => navigate('/services')} className="text-[9px] font-black text-[#4A3AFF]">View all &gt;</button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {[1, 2, 3].map((num) => (
              <div key={num} className="w-40 rounded-xl overflow-hidden border shadow-3xs bg-white shrink-0">
                <div className="h-20 bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mock Tab bar */}
      <div className={`absolute bottom-0 left-0 w-full h-14 border-t flex justify-around items-center px-2 z-20 ${
        theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-100'
      }`}>
        <button className="flex flex-col items-center gap-1 text-[8.5px] text-indigo-500 font-bold"><span className="text-md">🏠</span><span>Home</span></button>
        <button onClick={() => navigate('/services')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">🛠️</span><span>Services</span></button>
        <button onClick={() => navigate('/sos')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">🚨</span><span>SOS</span></button>
        <button onClick={() => navigate('/community-feed')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">👥</span><span>Feed</span></button>
        <button onClick={() => navigate('/settings')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">👤</span><span>Profile</span></button>
      </div>
    </div>
  );
};

// ==========================================
// 38. COMMUNITY FEED (VARIANT 2)
// ==========================================
export const CommunityFeedScreenVariant2: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll Area */}
      <div className="flex-grow overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header */}
        <div className="flex justify-between items-center h-8">
          <span className="text-xs font-black text-slate-850 dark:text-white">Community Feed</span>
          <span className="text-slate-400">🔍</span>
        </div>

        {/* Tab Selector */}
        <div className="flex gap-2 text-[9px] font-bold overflow-x-auto pb-1">
          {['My Feed', 'All Areas', 'Complaints'].map((tag, idx) => (
            <button
              key={idx}
              className={`px-3.5 py-1.5 rounded-full border uppercase tracking-wider shrink-0 transition ${
                idx === 0
                  ? 'bg-emerald-600 text-white border-emerald-650'
                  : 'bg-white dark:bg-neutral-900 text-slate-405 dark:text-neutral-500'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Card List */}
        <div className="space-y-4">
          {/* Card 1 */}
          <div className={`p-4 rounded-card border shadow-3xs space-y-3 ${
            theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
          }`}>
            <div className="flex gap-2.5 items-center">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs shrink-0">SB</div>
              <div className="leading-none">
                <h4 className="text-[10px] font-black">Suresh Babu</h4>
                <p className="text-[7.5px] text-slate-400 font-semibold mt-1">1 day ago</p>
              </div>
            </div>
            <div className="aspect-[2/1] rounded-xl overflow-hidden bg-slate-50">
              <img src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
            </div>
            <p className="text-[9.5px] font-semibold text-slate-700 leading-normal">
              Drainage issue near Murugan Temple. Water not draining.
            </p>
            <div className="flex items-center gap-4 text-[9px] font-bold text-slate-400">
              <span>❤️ 8</span>
              <span>💬 2</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className={`p-4 rounded-card border shadow-3xs space-y-3 ${
            theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
          }`}>
            <div className="flex gap-2.5 items-center">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs shrink-0">A</div>
              <div className="leading-none">
                <h4 className="text-[10px] font-black">Anand</h4>
                <p className="text-[7.5px] text-slate-400 font-semibold mt-1">2 days ago</p>
              </div>
            </div>
            <div className="aspect-[2/1] rounded-xl overflow-hidden bg-slate-50">
              <img src="https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center gap-4 text-[9px] font-bold text-slate-400">
              <span>❤️ 6</span>
              <span>💬 1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button 
        onClick={() => navigate('/community-feed/create')}
        className="absolute bottom-20 right-5 w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-650 to-indigo-500 text-white flex items-center justify-center text-xl shadow-lg active:scale-95 transition-all z-20"
      >
        +
      </button>

      {/* Mock Tab bar */}
      <div className={`absolute bottom-0 left-0 w-full h-14 border-t flex justify-around items-center px-2 z-20 ${
        theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-100'
      }`}>
        <button onClick={() => navigate('/home')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">🏠</span><span>Home</span></button>
        <button onClick={() => navigate('/services')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">🛠️</span><span>Services</span></button>
        <button onClick={() => navigate('/sos')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">🚨</span><span>SOS</span></button>
        <button className="flex flex-col items-center gap-1 text-[8.5px] text-indigo-500 font-bold"><span className="text-md">👥</span><span>Feed</span></button>
        <button onClick={() => navigate('/settings')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">👤</span><span>Profile</span></button>
      </div>
    </div>
  );
};

// ==========================================
// 39. LOCAL SERVICES SCREEN (VARIANT 3)
// ==========================================
export const LocalServicesScreenVariant3: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  const services = [
    { name: 'R. Electrician', role: 'Electrician', rating: '★ 4.6' },
    { name: 'M. Prakash', role: 'Plumber', rating: '★ 4.7' },
    { name: 'K. Carpenter', role: 'Carpenter', rating: '★ 4.8' },
    { name: 'S. Medi', role: 'Contractor', rating: '★ 4.5' }
  ];

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll Container */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header Search bar */}
        <div className="flex items-center justify-between h-8">
          <button onClick={() => navigate('/home')} className="p-1 text-slate-400"><ChevronLeft size={20} /></button>
          <span className="text-xs font-black text-slate-850 dark:text-white">Local Services</span>
          <span className="text-slate-400">🔍</span>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search services..."
            className={`w-full p-2.5 pl-8 text-xs font-semibold rounded-btn border focus:outline-none ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-850 text-white' : 'bg-white border-slate-200 text-slate-800'
            }`}
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
        </div>

        {/* List */}
        <div className="space-y-3.5 pt-2">
          {services.map((serv, i) => (
            <div
              key={i}
              className={`p-3.5 rounded-card border shadow-3xs flex justify-between items-center ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <div className="flex gap-3.5 items-center">
                <div className="w-10 h-10 rounded-full bg-slate-105 flex items-center justify-center font-black text-[#4A3AFF] text-xs shrink-0">W</div>
                <div className="space-y-0.5 leading-tight">
                  <h4 className="text-[11px] font-extrabold">{serv.name}</h4>
                  <p className="text-[8.5px] text-slate-400 font-semibold">{serv.role}</p>
                  <p className="text-[9px] font-black text-amber-500">{serv.rating}</p>
                </div>
              </div>

              {/* Green call button */}
              <button className="w-8 h-8 rounded-full bg-[#4CD964] text-white flex items-center justify-center shadow-xs active:scale-90 transition">
                📞
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Mock Tab bar */}
      <div className={`absolute bottom-0 left-0 w-full h-14 border-t flex justify-around items-center px-2 z-20 ${
        theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-100'
      }`}>
        <button onClick={() => navigate('/home')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">🏠</span><span>Home</span></button>
        <button className="flex flex-col items-center gap-1 text-[8.5px] text-indigo-500 font-bold"><span className="text-md">🛠️</span><span>Services</span></button>
        <button onClick={() => navigate('/sos')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">🚨</span><span>SOS</span></button>
        <button onClick={() => navigate('/community-feed')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">👥</span><span>Feed</span></button>
        <button onClick={() => navigate('/settings')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">👤</span><span>Profile</span></button>
      </div>
    </div>
  );
};

// ==========================================
// 40. MERCHANTS PAGE SCREEN
// ==========================================
export const MerchantsPageScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [activeTag, setActiveTag] = useState<string>('all');

  const merchants = [
    {
      name: 'Murugan Temple Market',
      sub: 'Market • 2.3 km',
      rating: '★ 4.6',
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Avadi Market',
      sub: 'Supermarket • 1.1 km',
      rating: '★ 4.2',
      image: 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Swarna Stores',
      sub: 'Electronics • 1.8 km',
      rating: '★ 4.8',
      image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll Area */}
      <div className="flex-grow overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header Search */}
        <div className="flex items-center justify-between h-8">
          <button onClick={() => navigate('/home')} className="p-1 text-slate-400"><ChevronLeft size={20} /></button>
          <span className="text-xs font-black text-slate-850 dark:text-white">Merchants</span>
          <span className="text-slate-400">🔍</span>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search merchants..."
            className={`w-full p-2.5 pl-8 text-xs font-semibold rounded-btn border focus:outline-none ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-850 text-white' : 'bg-white border-slate-200 text-slate-800'
            }`}
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 text-[9px] font-bold overflow-x-auto pb-1">
          {['all', 'groceries', 'shopping', 'parks'].map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3.5 py-1.5 rounded-full border uppercase tracking-wider shrink-0 transition ${
                activeTag === tag
                  ? 'bg-emerald-600 text-white border-emerald-650'
                  : 'bg-white dark:bg-neutral-900 text-slate-405 dark:text-neutral-500 border-slate-150 dark:border-neutral-800'
              }`}
            >
              {tag === 'all' ? 'All' : tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div>

        {/* Merchants List */}
        <div className="space-y-4">
          {merchants.map((merch, i) => (
            <div
              key={i}
              className={`rounded-card overflow-hidden border shadow-3xs flex flex-col ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              {/* Image banner */}
              <div className="aspect-video w-full relative">
                <img src={merch.image} alt={merch.name} className="w-full h-full object-cover" />
              </div>

              {/* Body */}
              <div className="p-4 space-y-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xs font-extrabold">{merch.name}</h4>
                    <p className="text-[9px] text-slate-405 dark:text-neutral-500 mt-0.5 font-bold">{merch.sub}</p>
                  </div>
                  <span className="text-[10px] font-black text-amber-500">{merch.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mock Tab bar */}
      <div className={`absolute bottom-0 left-0 w-full h-14 border-t flex justify-around items-center px-2 z-20 ${
        theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-100'
      }`}>
        <button onClick={() => navigate('/home')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">🏠</span><span>Home</span></button>
        <button onClick={() => navigate('/services')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">🛠️</span><span>Services</span></button>
        <button onClick={() => navigate('/sos')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">🚨</span><span>SOS</span></button>
        <button onClick={() => navigate('/community-feed')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">👥</span><span>Feed</span></button>
        <button onClick={() => navigate('/settings')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-405 font-bold"><span className="text-md">👤</span><span>Profile</span></button>
      </div>
    </div>
  );
};

// ==========================================
// 41. SEARCH RESULTS
// ==========================================
export const SearchResultsScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  const places = [
    {
      name: 'Murugan Temple',
      sub: 'Ward 2 • 2.3 km',
      rating: '★ 4.6',
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Avadi Market',
      sub: 'Ward 1 • 1.2 km',
      rating: '★ 4.2',
      image: 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll Area */}
      <div className="flex-grow overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header Search */}
        <div className="flex items-center gap-2">
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="Search places..."
              className={`w-full p-2.5 pl-8 text-xs font-semibold rounded-btn border focus:outline-none ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850 text-white' : 'bg-white border-slate-200 text-slate-800'
              }`}
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
          </div>
          <button className="p-1.5 border rounded-lg text-slate-450"><span className="text-xs">⊶</span></button>
        </div>

        {/* Tags */}
        <div className="flex gap-2 text-[9px] font-bold overflow-x-auto pb-1">
          {['all', 'destination', 'shopping', 'parks'].map((tag, idx) => (
            <button
              key={idx}
              className={`px-3.5 py-1.5 rounded-full border uppercase tracking-wider shrink-0 transition ${
                idx === 0
                  ? 'bg-slate-800 dark:bg-white text-white dark:text-slate-800 border-slate-800 dark:border-white shadow-2xs'
                  : 'bg-white dark:bg-neutral-900 text-slate-405 dark:text-neutral-505 border-slate-150 dark:border-neutral-800'
              }`}
            >
              {tag === 'all' ? 'All' : tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div>

        {/* Cards List */}
        <div className="space-y-4">
          {places.map((place, i) => (
            <div
              key={i}
              className={`rounded-card overflow-hidden border shadow-3xs flex flex-col ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              {/* Image banner */}
              <div className="aspect-video w-full relative">
                <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
                <button className="absolute top-3 right-3 text-white text-base">🤍</button>
              </div>

              {/* Body */}
              <div className="p-4 space-y-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xs font-extrabold">{place.name}</h4>
                    <p className="text-[9px] text-slate-405 dark:text-neutral-500 mt-0.5 font-bold">{place.sub}</p>
                  </div>
                  <span className="text-[10px] font-black text-amber-500">{place.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mock Tab bar */}
      <div className={`absolute bottom-0 left-0 w-full h-14 border-t flex justify-around items-center px-2 z-20 ${
        theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-100'
      }`}>
        <button onClick={() => navigate('/home')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">🏠</span><span>Home</span></button>
        <button className="flex flex-col items-center gap-1 text-[8.5px] text-indigo-500 font-bold"><span className="text-md">🛠️</span><span>Services</span></button>
        <button onClick={() => navigate('/sos')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">🚨</span><span>SOS</span></button>
        <button onClick={() => navigate('/community-feed')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">👥</span><span>Feed</span></button>
        <button onClick={() => navigate('/settings')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">👤</span><span>Profile</span></button>
      </div>
    </div>
  );
};

// ==========================================
// 42. CATEGORY FILTER
// ==========================================
export const CategoryFilterScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  const places = [
    {
      name: 'Murugan Temple',
      sub: 'Ward 2 • 2.3 km',
      rating: '★ 4.6',
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Avadi Market',
      sub: 'Ward 1 • 1.2 km',
      rating: '★ 4.2',
      image: 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll Area */}
      <div className="flex-grow overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header Search */}
        <div className="flex items-center gap-2">
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="Search places..."
              className={`w-full p-2.5 pl-8 text-xs font-semibold rounded-btn border focus:outline-none ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850 text-white' : 'bg-white border-slate-200 text-slate-800'
              }`}
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
          </div>
          <button className="p-1.5 border rounded-lg text-slate-450"><span className="text-xs">⊶</span></button>
        </div>

        {/* Tags */}
        <div className="flex gap-2 text-[9px] font-bold overflow-x-auto pb-1">
          {['all', 'destination', 'shopping', 'parks'].map((tag, idx) => (
            <button
              key={idx}
              className={`px-3.5 py-1.5 rounded-full border uppercase tracking-wider shrink-0 transition ${
                idx === 1
                  ? 'bg-blue-50 dark:bg-blue-955/20 text-[#4A3AFF] border-[#4A3AFF] shadow-3xs'
                  : 'bg-white dark:bg-neutral-900 text-slate-405 dark:text-neutral-505 border-slate-150 dark:border-neutral-800'
              }`}
            >
              {tag === 'all' ? 'All' : tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div>

        {/* Cards List */}
        <div className="space-y-4">
          {places.map((place, i) => (
            <div
              key={i}
              className={`rounded-card overflow-hidden border shadow-3xs flex flex-col ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              {/* Image banner */}
              <div className="aspect-video w-full relative">
                <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
                <button className="absolute top-3 right-3 text-white text-base">🤍</button>
              </div>

              {/* Body */}
              <div className="p-4 space-y-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xs font-extrabold">{place.name}</h4>
                    <p className="text-[9px] text-slate-405 dark:text-neutral-505 mt-0.5 font-bold">{place.sub}</p>
                  </div>
                  <span className="text-[10px] font-black text-amber-500">{place.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mock Tab bar */}
      <div className={`absolute bottom-0 left-0 w-full h-14 border-t flex justify-around items-center px-2 z-20 ${
        theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-100'
      }`}>
        <button onClick={() => navigate('/home')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-405"><span className="text-md">🏠</span><span>Home</span></button>
        <button className="flex flex-col items-center gap-1 text-[8.5px] text-indigo-500 font-bold"><span className="text-md">🛠️</span><span>Services</span></button>
        <button onClick={() => navigate('/sos')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">🚨</span><span>SOS</span></button>
        <button onClick={() => navigate('/community-feed')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">👥</span><span>Feed</span></button>
        <button onClick={() => navigate('/settings')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">👤</span><span>Profile</span></button>
      </div>
    </div>
  );
};

// ==========================================
// 43. CITY FILTER
// ==========================================
export const CityFilterScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  const places = [
    {
      name: 'Murugan Temple',
      sub: 'Ward 2 • 2.3 km',
      rating: '★ 4.6',
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Avadi Market',
      sub: 'Ward 1 • 1.2 km',
      rating: '★ 4.2',
      image: 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll Area */}
      <div className="flex-grow overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header Search */}
        <div className="flex items-center gap-2">
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="Search places..."
              className={`w-full p-2.5 pl-8 text-xs font-semibold rounded-btn border focus:outline-none ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850 text-white' : 'bg-white border-slate-200 text-slate-800'
              }`}
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
          </div>
          <button className="p-1.5 border rounded-lg text-slate-450"><span className="text-xs">⊶</span></button>
        </div>

        {/* Dropdown Location Selector */}
        <div className={`p-3.5 rounded-xl border flex justify-between items-center text-[10.5px] font-extrabold shadow-3xs cursor-pointer ${
          theme === 'dark' ? 'bg-neutral-900 border-neutral-850 text-white' : 'bg-white border-slate-150 text-slate-800'
        }`}>
          <div className="flex items-center gap-2.5">
            <span>📍</span>
            <span>Avadi</span>
          </div>
          <span className="text-slate-400 text-xs">▼</span>
        </div>

        {/* Cards List */}
        <div className="space-y-4">
          {places.map((place, i) => (
            <div
              key={i}
              className={`rounded-card overflow-hidden border shadow-3xs flex flex-col ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              {/* Image banner */}
              <div className="aspect-video w-full relative">
                <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
                <button className="absolute top-3 right-3 text-white text-base">🤍</button>
              </div>

              {/* Body */}
              <div className="p-4 space-y-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xs font-extrabold">{place.name}</h4>
                    <p className="text-[9px] text-slate-405 dark:text-neutral-505 mt-0.5 font-bold">{place.sub}</p>
                  </div>
                  <span className="text-[10px] font-black text-amber-500">{place.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mock Tab bar */}
      <div className={`absolute bottom-0 left-0 w-full h-14 border-t flex justify-around items-center px-2 z-20 ${
        theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-100'
      }`}>
        <button onClick={() => navigate('/home')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-450"><span className="text-md">🏠</span><span>Home</span></button>
        <button className="flex flex-col items-center gap-1 text-[8.5px] text-indigo-500 font-bold"><span className="text-md">🛠️</span><span>Services</span></button>
        <button onClick={() => navigate('/sos')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">🚨</span><span>SOS</span></button>
        <button onClick={() => navigate('/community-feed')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">👥</span><span>Feed</span></button>
        <button onClick={() => navigate('/settings')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">👤</span><span>Profile</span></button>
      </div>
    </div>
  );
};

// ==========================================
// 44. LIST VIEW TOGGLE
// ==========================================
export const ListViewToggleScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  const listItems = [
    { name: 'Murugan Temple', sub: 'Ward 2 • 2.3 km', rating: '★ 4.6' },
    { name: 'Avadi Market', sub: 'Ward 1 • 1.2 km', rating: '★ 4.2' },
    { name: 'Pattabiram Lake', sub: 'Ward 5 • 3.1 km', rating: '★ 4.4' },
    { name: 'Avadi Bus Stand', sub: 'Ward 1 • 1.8 km', rating: '★ 4.0' }
  ];

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll Area */}
      <div className="flex-grow overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header Search */}
        <div className="flex items-center gap-2">
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="Search places..."
              className={`w-full p-2.5 pl-8 text-xs font-semibold rounded-btn border focus:outline-none ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850 text-white' : 'bg-white border-slate-200 text-slate-800'
              }`}
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
          </div>
          <button className="p-1.5 border rounded-lg text-slate-450"><span className="text-xs">⊶</span></button>
        </div>

        {/* Tags */}
        <div className="flex gap-2 text-[9px] font-bold overflow-x-auto pb-1">
          {['all', 'destination', 'shopping', 'parks'].map((tag, idx) => (
            <button
              key={idx}
              className={`px-3.5 py-1.5 rounded-full border uppercase tracking-wider shrink-0 transition ${
                idx === 0
                  ? 'bg-slate-800 dark:bg-white text-white dark:text-slate-800 border-slate-800 dark:border-white shadow-2xs'
                  : 'bg-white dark:bg-neutral-900 text-slate-405 dark:text-neutral-505 border-slate-150 dark:border-neutral-800'
              }`}
            >
              {tag === 'all' ? 'All' : tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div>

        {/* Toggle Row */}
        <div className="flex justify-end items-center gap-2">
          <button className="p-1.5 rounded border text-slate-400">▦</button>
          <button className="p-1.5 rounded border bg-[#4A3AFF] text-white">▤</button>
        </div>

        {/* List of items */}
        <div className="space-y-3">
          {listItems.map((item, i) => (
            <div
              key={i}
              className={`p-3.5 rounded-card border shadow-3xs flex justify-between items-center gap-3.5 ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <div className="flex gap-3 items-center">
                {/* Thumbnail */}
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=150" alt="Thumb" className="w-full h-full object-cover" />
                </div>
                {/* Info */}
                <div className="space-y-0.5 leading-tight text-left">
                  <h4 className="text-[11px] font-extrabold">{item.name}</h4>
                  <p className="text-[8.5px] text-slate-405 dark:text-neutral-505 font-semibold">{item.sub}</p>
                  <p className="text-[9px] font-black text-amber-500 mt-0.5">{item.rating}</p>
                </div>
              </div>

              {/* Heart outline icon */}
              <button className="text-slate-400 text-base">🤍</button>
            </div>
          ))}
        </div>
      </div>

      {/* Mock Tab bar */}
      <div className={`absolute bottom-0 left-0 w-full h-14 border-t flex justify-around items-center px-2 z-20 ${
        theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-100'
      }`}>
        <button onClick={() => navigate('/home')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-450"><span className="text-md">🏠</span><span>Home</span></button>
        <button className="flex flex-col items-center gap-1 text-[8.5px] text-indigo-500 font-bold"><span className="text-md">🛠️</span><span>Services</span></button>
        <button onClick={() => navigate('/sos')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">🚨</span><span>SOS</span></button>
        <button onClick={() => navigate('/community-feed')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">👥</span><span>Feed</span></button>
        <button onClick={() => navigate('/settings')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">👤</span><span>Profile</span></button>
      </div>
    </div>
  );
};

// ==========================================
// 45. MAP VIEW SCREEN
// ==========================================
export const MapViewScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll Area / Map Container */}
      <div className="flex-grow overflow-hidden flex flex-col relative pb-20">
        
        {/* Header Search overlay */}
        <div className="absolute top-5 left-0 w-full px-5 z-20 space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex-grow relative">
              <input
                type="text"
                placeholder="Search places..."
                className={`w-full p-2.5 pl-8 text-xs font-semibold rounded-btn border shadow-md focus:outline-none ${
                  theme === 'dark' ? 'bg-neutral-900 border-neutral-850 text-white' : 'bg-white border-slate-200 text-slate-800'
                }`}
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
            </div>
            <button className="p-1.5 border rounded-lg bg-white dark:bg-neutral-900 shadow-md text-slate-450"><span className="text-xs">⊶</span></button>
          </div>

          {/* Tags */}
          <div className="flex gap-2 text-[9px] font-bold overflow-x-auto pb-1">
            {['all', 'destination', 'shopping', 'parks'].map((tag, idx) => (
              <button
                key={idx}
                className={`px-3.5 py-1.5 rounded-full border shadow-md uppercase tracking-wider shrink-0 transition ${
                  idx === 0
                    ? 'bg-slate-800 dark:bg-white text-white dark:text-slate-800 border-slate-800 dark:border-white'
                    : 'bg-white dark:bg-neutral-900 text-slate-405 dark:text-neutral-505 border-slate-150'
                }`}
              >
                {tag === 'all' ? 'All' : tag.charAt(0).toUpperCase() + tag.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Map Background grid mock */}
        <div className={`w-full h-full relative ${
          theme === 'dark' ? 'bg-neutral-950' : 'bg-[#E5E9F0]'
        }`}>
          {/* Mock Street Grid illustration lines */}
          <div className="absolute inset-0 opacity-20 border-[8px] border-dashed border-slate-400/40 grid grid-cols-4 grid-rows-6" />

          {/* Marker 1: Avadi New Bus Stand */}
          <div className="absolute top-[30%] left-[20%] flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-lg text-sm border-2 border-white">🚌</div>
            <div className="px-2 py-0.5 bg-white dark:bg-neutral-900 text-[7.5px] font-black rounded border mt-1 shadow-md">
              <p className="leading-none text-slate-700 dark:text-white">Avadi</p>
              <p className="leading-none text-slate-400 mt-0.5 font-bold">New Bus Stand</p>
            </div>
          </div>

          {/* Marker 2: Murugan Temple */}
          <div className="absolute top-[40%] right-[25%] flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-red-650 text-white flex items-center justify-center shadow-lg text-sm border-2 border-white">🏠</div>
            <div className="px-2 py-0.5 bg-white dark:bg-neutral-900 text-[7.5px] font-black rounded border mt-1 shadow-md text-slate-700 dark:text-white">
              Murugan Temple
            </div>
          </div>

          {/* Marker 3: Avadi Market */}
          <div className="absolute bottom-[40%] left-[30%] flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg text-sm border-2 border-white">🛒</div>
            <div className="px-2 py-0.5 bg-white dark:bg-neutral-900 text-[7.5px] font-black rounded border mt-1 shadow-md">
              <p className="leading-none text-slate-700 dark:text-white">Avadi</p>
              <p className="leading-none text-slate-400 mt-0.5 font-bold">Market</p>
            </div>
          </div>

          {/* Marker 4: Pattabiram Lake */}
          <div className="absolute bottom-[30%] right-[30%] flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center shadow-lg text-sm border-2 border-white">🌳</div>
            <div className="px-2 py-0.5 bg-white dark:bg-neutral-900 text-[7.5px] font-black rounded border mt-1 shadow-md">
              <p className="leading-none text-slate-700 dark:text-white">Pattabiram</p>
              <p className="leading-none text-slate-400 mt-0.5 font-bold">Lake</p>
            </div>
          </div>

          {/* Floating location targets button */}
          <button className="absolute bottom-24 right-5 w-10 h-10 rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center shadow-lg text-slate-650 z-20 border border-slate-100">
            🎯
          </button>
        </div>
      </div>

      {/* Mock Tab bar */}
      <div className={`absolute bottom-0 left-0 w-full h-14 border-t flex justify-around items-center px-2 z-20 ${
        theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-100'
      }`}>
        <button onClick={() => navigate('/home')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-450"><span className="text-md">🏠</span><span>Home</span></button>
        <button className="flex flex-col items-center gap-1 text-[8.5px] text-indigo-500 font-bold"><span className="text-md">🛠️</span><span>Services</span></button>
        <button onClick={() => navigate('/sos')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">🚨</span><span>SOS</span></button>
        <button onClick={() => navigate('/community-feed')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">👥</span><span>Feed</span></button>
        <button onClick={() => navigate('/settings')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">👤</span><span>Profile</span></button>
      </div>
    </div>
  );
};

// ==========================================
// 46. COMMUNITY FEED (VARIANT 3)
// ==========================================
export const CommunityFeedScreenVariant3: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll Area */}
      <div className="flex-grow overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header */}
        <div className="flex justify-between items-center h-8">
          <span className="text-xs font-black text-slate-850 dark:text-white">Community Feed</span>
          <span className="text-slate-400">🔍</span>
        </div>

        {/* Tab Selector */}
        <div className="flex gap-2 text-[9px] font-bold overflow-x-auto pb-1">
          {['My Feed', 'All Feed', 'Completed'].map((tag, idx) => (
            <button
              key={idx}
              className={`px-3.5 py-1.5 rounded-full border uppercase tracking-wider shrink-0 transition ${
                idx === 0
                  ? 'bg-emerald-600 text-white border-emerald-650'
                  : 'bg-white dark:bg-neutral-900 text-slate-405 dark:text-neutral-505 border-slate-150'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Card List */}
        <div className="space-y-4">
          {/* Card 1 */}
          <div className={`p-4 rounded-card border shadow-3xs space-y-3 ${
            theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
          }`}>
            <div className="flex gap-2.5 items-center">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs shrink-0">RK</div>
              <div className="leading-none">
                <h4 className="text-[10px] font-black">Ramesh Kumar</h4>
                <p className="text-[7.5px] text-slate-400 font-semibold mt-1">2 hours ago</p>
              </div>
            </div>
            <div className="aspect-[2/1] rounded-xl overflow-hidden bg-slate-50">
              <img src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
            </div>
            <p className="text-[9.5px] font-semibold text-slate-750 dark:text-neutral-300 leading-normal">
              Street light not working near Avadi Park Circle
            </p>
            <div className="flex items-center gap-4 text-[9px] font-bold text-slate-400">
              <span>💬 12</span>
              <span>❤️ 3</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className={`p-4 rounded-card border shadow-3xs space-y-3 ${
            theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
          }`}>
            <div className="flex gap-2.5 items-center">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs shrink-0">R</div>
              <div className="leading-none">
                <h4 className="text-[10px] font-black">Revathi</h4>
                <p className="text-[7.5px] text-slate-400 font-semibold mt-1">5 hours ago</p>
              </div>
            </div>
            <p className="text-[9.5px] font-semibold text-slate-750 dark:text-neutral-300 leading-normal">
              Garbage not collected in Ward 12
            </p>
            <div className="flex items-center gap-4 text-[9px] font-bold text-slate-400">
              <span>💬 8</span>
              <span>❤️ 2</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button 
        onClick={() => navigate('/community-feed/create')}
        className="absolute bottom-20 right-5 w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-650 to-indigo-500 text-white flex items-center justify-center text-xl shadow-lg active:scale-95 transition-all z-20"
      >
        +
      </button>

      {/* Mock Tab bar */}
      <div className={`absolute bottom-0 left-0 w-full h-14 border-t flex justify-around items-center px-2 z-20 ${
        theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-100'
      }`}>
        <button onClick={() => navigate('/home')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">🏠</span><span>Home</span></button>
        <button onClick={() => navigate('/services')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">🛠️</span><span>Services</span></button>
        <button onClick={() => navigate('/civic')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">📝</span><span>Report</span></button>
        <button onClick={() => navigate('/sos')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">🚨</span><span>SOS</span></button>
        <button onClick={() => navigate('/settings')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-450 font-bold"><span className="text-md">👤</span><span>Profile</span></button>
      </div>
    </div>
  );
};

// ==========================================
// 47. HOME DASHBOARD (VARIANT 2)
// ==========================================
export const HomeDashboardScreenVariant2: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll Area */}
      <div className="flex-grow overflow-y-auto p-5 space-y-5 pb-20 text-left">
        {/* Header profile container */}
        <div className="flex justify-between items-center h-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-105 border">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="text-[11px] font-black">Hello, Karthik 👋</h4>
              <p className="text-[8px] text-slate-400 font-semibold mt-0.5">Ward 14, Avadi</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-slate-400 cursor-pointer">🔔</span>
            <div className="w-6 h-6" />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-2">
          <h5 className="text-[9.5px] font-black uppercase text-slate-400 tracking-wider">Quick Actions</h5>
          <div className="grid grid-cols-4 gap-2 text-center text-[8px] font-bold">
            <button onClick={() => navigate('/civic')} className="p-3 bg-white dark:bg-neutral-900 border rounded-xl flex flex-col items-center gap-1.5 shadow-3xs">
              <span className="text-base text-blue-500">📋</span>
              <span className="text-slate-700 dark:text-neutral-300">Complaints</span>
            </button>
            <button onClick={() => navigate('/sos')} className="p-3 bg-white dark:bg-neutral-900 border rounded-xl flex flex-col items-center gap-1.5 shadow-3xs">
              <span className="text-base text-red-500">SS</span>
              <span className="text-slate-700 dark:text-neutral-300">Emergency SOS</span>
            </button>
            <button onClick={() => navigate('/community-feed')} className="p-3 bg-white dark:bg-neutral-900 border rounded-xl flex flex-col items-center gap-1.5 shadow-3xs">
              <span className="text-base text-purple-500">👥</span>
              <span className="text-slate-700 dark:text-neutral-300">Community Feed</span>
            </button>
            <button onClick={() => navigate('/services')} className="p-3 bg-white dark:bg-neutral-900 border rounded-xl flex flex-col items-center gap-1.5 shadow-3xs">
              <span className="text-base text-indigo-500">🤝</span>
              <span className="text-slate-700 dark:text-neutral-300">Local Services</span>
            </button>
          </div>
        </div>

        {/* Travel Information */}
        <div className="space-y-2">
          <h5 className="text-[9.5px] font-black uppercase text-slate-400 tracking-wider">Travel Information</h5>
          <div className="grid grid-cols-2 gap-3.5">
            <div className="p-3.5 bg-white dark:bg-neutral-900 border rounded-xl shadow-3xs text-[9.5px]">
              <p className="font-extrabold text-slate-700 dark:text-white">Avadi Railway Station</p>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="text-md">☀️</span>
                <span className="font-black text-slate-800 dark:text-white">28°C</span>
              </div>
            </div>
            <div className="p-3.5 bg-white dark:bg-neutral-900 border rounded-xl shadow-3xs text-[9.5px]">
              <p className="font-extrabold text-slate-700 dark:text-white">Traffic</p>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
                <span className="font-black text-slate-800 dark:text-white">Moderate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Explore Avadi Horizontal scrolling */}
        <div className="space-y-2.5">
          <div className="flex justify-between items-center">
            <h5 className="text-[9.5px] font-black uppercase text-slate-400 tracking-wider">Explore Avadi</h5>
            <button onClick={() => navigate('/services')} className="text-[9px] font-black text-[#4A3AFF]">View all &gt;</button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {[1, 2, 3].map((num) => (
              <div key={num} className="w-40 rounded-xl overflow-hidden border shadow-3xs bg-white shrink-0">
                <div className="h-20 bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mock Tab bar */}
      <div className={`absolute bottom-0 left-0 w-full h-14 border-t flex justify-around items-center px-2 z-20 ${
        theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-100'
      }`}>
        <button className="flex flex-col items-center gap-1 text-[8.5px] text-indigo-500 font-bold"><span className="text-md">🏠</span><span>Home</span></button>
        <button onClick={() => navigate('/services')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">🛠️</span><span>Services</span></button>
        <button onClick={() => navigate('/civic')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">📝</span><span>Report</span></button>
        <button onClick={() => navigate('/sos')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">🚨</span><span>SOS</span></button>
        <button onClick={() => navigate('/settings')} className="flex flex-col items-center gap-1 text-[8.5px] text-slate-400"><span className="text-md">👤</span><span>Profile</span></button>
      </div>
    </div>
  );
};

// ==========================================
// 48. COMMUNITY FEED (VARIANT 4)
// ==========================================
export const CommunityFeedScreenVariant4: React.FC = () => {
  return <CommunityFeedScreenVariant3 />;
};

// ==========================================
// 49. PROFILE SCREEN
// ==========================================
export const ProfileScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [isSaved, setIsSaved] = useState(false);

  // Form states with fallback values matching Karthik Balan
  const [name, setName] = useState('Karthik Balan');
  const [email, setEmail] = useState('karthik.balan@avadi.gov.in');
  const [phone, setPhone] = useState('+91 98401 23456');
  const [ward, setWard] = useState('Ward 12 (Bazaar Street)');
  const [address, setAddress] = useState('12, Gandhi Street, Avadi, Chennai - 600054');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll Area */}
      <div className="flex-grow overflow-y-auto p-5 space-y-6 pb-20 text-left">
        {/* Header */}
        <div className="flex items-center gap-2">
          <button onClick={() => navigate('/settings')} className="p-1 text-slate-405 hover:text-slate-650"><ChevronLeft size={20} /></button>
          <div className="flex-grow text-center font-black text-xs pr-6">Profile Settings</div>
        </div>

        {/* Profile Avatar Card */}
        <div className="flex flex-col items-center justify-center py-4 space-y-2 text-center">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#4A3AFF] to-[#9285FF] flex items-center justify-center text-white text-3xl font-black shadow-md">
              KB
            </div>
            <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#4A3AFF] text-white flex items-center justify-center text-xs shadow-sm cursor-pointer">✏️</span>
          </div>
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider">{name}</h3>
            <p className="text-[9px] text-slate-405 dark:text-neutral-500 font-bold">{email}</p>
          </div>
        </div>

        {/* Profile details form */}
        <form onSubmit={handleSave} className="space-y-4">
          <div className={`p-5 rounded-card border shadow-3xs space-y-4 ${
            theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-150'
          }`}>
            <div>
              <label className="text-[9px] font-black uppercase tracking-wider text-slate-405">Full Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full p-2.5 mt-1 text-xs rounded-btn border focus:outline-none ${
                  theme === 'dark' ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-slate-200 text-slate-800'
                }`}
              />
            </div>

            <div>
              <label className="text-[9px] font-black uppercase tracking-wider text-slate-405">Phone Number</label>
              <input 
                type="text" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`w-full p-2.5 mt-1 text-xs rounded-btn border focus:outline-none ${
                  theme === 'dark' ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-slate-200 text-slate-800'
                }`}
              />
            </div>

            <div>
              <label className="text-[9px] font-black uppercase tracking-wider text-slate-405">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full p-2.5 mt-1 text-xs rounded-btn border focus:outline-none ${
                  theme === 'dark' ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-slate-200 text-slate-800'
                }`}
              />
            </div>

            <div>
              <label className="text-[9px] font-black uppercase tracking-wider text-slate-405">Selected Ward</label>
              <input 
                type="text" 
                value={ward}
                onChange={(e) => setWard(e.target.value)}
                className={`w-full p-2.5 mt-1 text-xs rounded-btn border focus:outline-none ${
                  theme === 'dark' ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-slate-200 text-slate-800'
                }`}
              />
            </div>

            <div>
              <label className="text-[9px] font-black uppercase tracking-wider text-slate-405">Home Address</label>
              <textarea 
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={2}
                className={`w-full p-2.5 mt-1 text-xs rounded-btn border focus:outline-none resize-none ${
                  theme === 'dark' ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-slate-200 text-slate-800'
                }`}
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-3.5 bg-[#4A3AFF] hover:bg-[#3b2ecc] text-white font-bold rounded-btn shadow-md text-xs uppercase tracking-wider text-center transition"
          >
            {isSaved ? '✓ Profile Saved' : 'Save Changes'}
          </button>
        </form>
      </div>
    </div>
  );
};
