import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
            onClick={() => {}}
            className={`p-4 rounded-card border shadow-3xs flex flex-col justify-between text-left h-24 transition duration-200 ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
            }`}
          >
            <span className="text-xl">🟢</span>
            <div>
              <h5 className="text-[10.5px] font-extrabold text-slate-800 dark:text-white">My Reports</h5>
              <p className="text-[7.5px] text-slate-400 leading-normal mt-0.5 font-bold">View all complaints</p>
            </div>
          </button>

          <button 
            onClick={() => {}}
            className={`p-4 rounded-card border shadow-3xs flex flex-col justify-between text-left h-24 transition duration-200 ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
            }`}
          >
            <span className="text-xl">🔴</span>
            <div>
              <h5 className="text-[10.5px] font-extrabold text-slate-800 dark:text-white">My Complaints</h5>
              <p className="text-[7.5px] text-slate-400 leading-normal mt-0.5 font-bold">Track status</p>
            </div>
          </button>

          <button 
            onClick={() => {}}
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
            onClick={() => {}}
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
        <div className={`p-4.5 rounded-card border shadow-2xs ${
          theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
        }`}>
          <h4 className="text-[9px] font-black uppercase tracking-wider text-slate-400 dark:text-neutral-500">Ward Administration</h4>
          <div className="flex items-center gap-3.5 mt-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-150 shrink-0 bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150" 
                alt="Representative Avatar" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="space-y-0.5 leading-tight">
              <h5 className="text-[11px] font-extrabold">Mr. S. Mohan</h5>
              <p className="text-[9px] text-slate-405 dark:text-neutral-500 font-semibold">Ward 12 - Avadi</p>
              <p className="text-[9px] text-slate-500 dark:text-neutral-450 font-bold mt-1.5 flex items-center gap-1">
                <span>📞</span> +91 87654 32100
              </p>
              <p className="text-[9px] text-slate-500 dark:text-neutral-450 font-bold flex items-center gap-1">
                <span>✉</span> ward12.avadi@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Sticky Bottom Primary Action (Red Button) */}
      <div className="absolute bottom-4 left-0 w-full p-4 z-20 bg-transparent">
        <button 
          onClick={() => {}}
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
  const [activeTab, setActiveTab] = useState<'my' | 'public'>('my');

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scrollable Container */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header */}
        <div className="flex justify-between items-center h-8">
          <button 
            onClick={() => navigate('/civic')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-xs font-black text-slate-850 dark:text-white">My Complaints</span>
          <div className="w-6 h-6" /> {/* spacer */}
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
            <span className="text-[10px] font-black text-slate-800 dark:text-white">AVD12-2025-0012</span>
            <span className="px-2 py-0.5 text-[8px] font-black text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 rounded-full">
              In Progress
            </span>
          </div>

          <div className="space-y-0.5 leading-tight">
            <h5 className="text-[11px] font-extrabold text-slate-805 dark:text-white">Street Light</h5>
            <p className="text-[8.5px] text-slate-400 dark:text-neutral-500 font-semibold">Near Avadi School</p>
          </div>

          {/* Timeline points */}
          <div className="relative border-l-2 border-slate-100 dark:border-neutral-800 pl-4.5 py-1 space-y-3.5 text-[9px] font-semibold text-slate-500 dark:text-neutral-400">
            {/* May 20 */}
            <div className="relative">
              <span className="absolute -left-[23px] top-0.5 w-2 h-2 rounded-full bg-slate-300 border-2 border-white dark:border-neutral-900" />
              <div className="flex items-center gap-1.5">
                <span>📅</span>
                <span>May 20, 2025</span>
              </div>
            </div>

            {/* Address */}
            <div className="relative">
              <span className="absolute -left-[23px] top-0.5 w-2 h-2 rounded-full bg-slate-300 border-2 border-white dark:border-neutral-900" />
              <div className="flex items-center gap-1.5">
                <span>📍</span>
                <span>Sector 7, Ward 12, Avadi</span>
              </div>
            </div>

            {/* Under Review */}
            <div className="relative">
              <span className="absolute -left-[23px] top-0.5 w-2.5 h-2.5 rounded-full bg-[#4A3AFF] border-2 border-white dark:border-neutral-900" />
              <div className="flex items-center gap-1.5 text-slate-705 dark:text-white">
                <span>🔍</span>
                <span>Under Review</span>
              </div>
              <span className="text-[7.5px] text-slate-400 dark:text-neutral-500 block mt-0.5 ml-5">May 20, 2025, 11:00 AM</span>
            </div>

            {/* In Progress */}
            <div className="relative">
              <span className="absolute -left-[23px] top-0.5 w-2.5 h-2.5 rounded-full bg-[#4A3AFF] border-2 border-white dark:border-neutral-900" />
              <div className="flex items-center gap-1.5 text-slate-705 dark:text-white">
                <span>🔔</span>
                <span>In Progress</span>
              </div>
              <span className="text-[7.5px] text-slate-400 dark:text-neutral-500 block mt-0.5 ml-5">May 21, 2025, 02:15 PM</span>
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

// SCREEN 15
export const EmergencySOSScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

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
      <div className="flex-1 overflow-y-auto p-5 space-y-6 pb-20 text-left">
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
        <div className="flex flex-col items-center justify-center my-3">
          <button className="w-32 h-32 rounded-full bg-red-500 border-[8px] border-red-100 dark:border-red-950 flex flex-col items-center justify-center text-white active:scale-95 transition shadow-lg">
            <span className="text-xl font-black tracking-wider">SOS</span>
            <span className="text-[7.5px] font-bold mt-1 text-white/90">Tap for SOS</span>
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

  const contacts = [
    { name: 'Police', number: '100', icon: '⭐' },
    { name: 'Ambulance', number: '108', icon: '🚑' },
    { name: 'Fire & Rescue', number: '101', icon: '🚨' },
    { name: 'Municipality Help Desk', number: '1800 425 6003', icon: '🏢' }
  ];

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
    }`}>
      {/* Scrollable Area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6 pb-20 text-left">
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
        <div className="flex flex-col items-center justify-center my-3">
          <button className="w-32 h-32 rounded-full bg-red-500 border-[8px] border-red-100 dark:border-red-950 flex flex-col items-center justify-center text-white active:scale-95 transition shadow-lg">
            <span className="text-xl font-black tracking-wider">SOS</span>
            <span className="text-[7.5px] font-bold mt-1 text-white/90">Tap for Help</span>
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
// 18. LOCAL SERVICES SCREEN
// ==========================================
export const LocalServicesScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [activeTag, setActiveTag] = useState<string>('all');

  const places = [
    {
      name: 'Murugan Temple',
      sub: 'Ward 2 • 2.3 km',
      rating: '★ 4.6',
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'Avadi Market',
      sub: 'Ward 3 • 1.2 km',
      rating: '★ 4.2',
      image: 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scrollable Container */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header Search bar */}
        <div className="flex items-center gap-2">
          <button onClick={() => navigate('/home')} className="p-1 text-slate-400 hover:text-slate-600"><ChevronLeft size={20} /></button>
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search place..."
              className={`w-full p-2.5 pl-8 text-xs font-semibold rounded-btn border focus:outline-none ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-805 text-white' : 'bg-white border-slate-200 text-slate-850'
              }`}
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex gap-2 text-[10px] font-bold">
          {['all', 'directional', 'shopping', 'parks'].map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3.5 py-1.5 rounded-full border uppercase tracking-wider transition ${
                activeTag === tag
                  ? 'bg-slate-800 dark:bg-white text-white dark:text-slate-800 border-slate-800 dark:border-white shadow-2xs'
                  : 'bg-white dark:bg-neutral-900 text-slate-405 dark:text-neutral-505 border-slate-150 dark:border-neutral-800'
              }`}
            >
              {tag === 'all' ? 'All' : tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid cards list */}
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
              </div>

              {/* Body */}
              <div className="p-4 space-y-3.5">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xs font-extrabold">{place.name}</h4>
                    <p className="text-[9px] text-slate-400 dark:text-neutral-500 mt-0.5 font-bold">{place.sub}</p>
                  </div>
                  <span className="text-[10px] font-black text-amber-500">{place.rating}</span>
                </div>

                {/* Bottom Row Icons */}
                <div className="flex justify-around items-center border-t border-slate-100 dark:border-neutral-800/60 pt-3">
                  <button className="text-slate-400 hover:text-[#4A3AFF] transition text-sm">📞</button>
                  <button className="text-slate-400 hover:text-[#4A3AFF] transition text-sm">📸</button>
                  <button className="text-slate-400 hover:text-[#4A3AFF] transition text-sm">🧭</button>
                  <button className="text-slate-400 hover:text-[#4A3AFF] transition text-sm">🔖</button>
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
// 19. RENTALS & JOBS (HOME)
// ==========================================
export const RentalsJobsHomeScreen: React.FC = () => {
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
          <button 
            onClick={() => navigate('/home')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
        </div>

        {/* Title */}
        <div className="text-center space-y-1">
          <h2 className="text-md font-black text-slate-805 dark:text-white">Rentals & Jobs</h2>
          <p className="text-[10px] text-slate-400 dark:text-neutral-500 font-semibold">Find the best options</p>
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
              <p className="text-[7.5px] text-white/80 leading-snug mt-1 font-semibold">Find homes, shops and rooms</p>
            </div>
          </button>

          {/* Jobs */}
          <button
            onClick={() => {}}
            className="rounded-2xl bg-purple-500 hover:bg-purple-600 text-white p-5 flex flex-col justify-between items-center text-center aspect-[4/5] shadow-md hover:scale-[1.01] active:scale-[0.98] transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg mt-2">💼</div>
            <div className="mb-2">
              <h4 className="text-xs font-black">Jobs</h4>
              <p className="text-[7.5px] text-white/80 leading-snug mt-1 font-semibold">Find jobs and careers</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 20. RENTALS PAGE SCREEN
// ==========================================
export const RentalsPageScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  const listings = [
    {
      title: 'Shop for Rent',
      location: 'Avadi Market',
      details: '800 sq ft',
      price: '₹8,000 / month',
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=300'
    },
    {
      title: 'House for Rent',
      location: 'Avadi, Green Park',
      details: '2 BHK',
      price: '₹12,000 / month',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=300'
    },
    {
      title: 'Room for Rent',
      location: 'Avadi, Anna Nagar',
      details: '1 Room',
      price: '₹4,000 / month',
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
          <button onClick={() => navigate('/jobs-rentals')} className="p-1 text-slate-400 hover:text-slate-650"><ChevronLeft size={20} /></button>
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
                  <p className="text-[9.5px] font-black text-slate-800 dark:text-white mt-1">{list.price}</p>
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
