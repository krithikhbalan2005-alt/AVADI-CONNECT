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

// ==========================================
// 21. JOBS PAGE
// ==========================================
export const JobsPageScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  const menuItems = [
    { name: 'Community Feed', icon: '👥', path: '/community-feed' },
    { name: 'Emergency SOS', icon: '🚨', path: '/sos' },
    { name: 'Explore Avadi', icon: '🧭', path: '/home' },
    { name: 'Local Services', icon: '🤝', path: '/services' },
    { name: 'Events & Festivals', icon: '📅', path: '/home' },
    { name: 'Profile Settings', icon: '⚙️', path: '/theme' },
    { name: 'Logout', icon: '🚪', path: '/welcome' }
  ];

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll Area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header Search */}
        <div className="flex items-center gap-2">
          <button onClick={() => navigate('/jobs-rentals')} className="p-1 text-slate-400"><ChevronLeft size={20} /></button>
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search Jobs..."
              className={`w-full p-2.5 pl-8 text-xs font-semibold rounded-btn border focus:outline-none ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-805 text-white' : 'bg-white border-slate-200 text-slate-800'
              }`}
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
          </div>
          <button className="p-1.5 border rounded-lg text-slate-400"><span className="text-xs">⊶</span></button>
        </div>

        {/* Jobs List */}
        <div className="space-y-3">
          {/* Card 1 */}
          <div 
            onClick={() => navigate('/jobs/detail')}
            className={`p-3.5 rounded-card border shadow-3xs flex justify-between items-center cursor-pointer ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
            }`}
          >
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-black text-indigo-500 text-xs shrink-0">AC</div>
              <div className="space-y-0.5 leading-tight">
                <div className="flex items-center gap-1.5">
                  <h4 className="text-[11px] font-extrabold">Sales Executive</h4>
                  <span className="text-[8px] font-bold text-slate-400">100</span>
                </div>
                <p className="text-[8.5px] text-slate-400 font-semibold">Ace Communications</p>
                <p className="text-[8.5px] text-slate-405 font-bold">40K - 60K</p>
                <p className="text-[8px] text-slate-400 font-bold">Trichy, TN - Full-time</p>
              </div>
            </div>
            <button onClick={(e) => { e.stopPropagation(); navigate('/jobs/detail'); }} className="px-3.5 py-1.5 bg-[#4A3AFF] hover:bg-[#3b2ecc] text-white text-[9px] font-black rounded-lg">Apply</button>
          </div>

          {/* Card 2 */}
          <div className={`p-3.5 rounded-card border shadow-3xs flex justify-between items-center ${
            theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
          }`}>
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-black text-emerald-505 text-xs shrink-0">FD</div>
              <div className="space-y-0.5 leading-tight">
                <h4 className="text-[11px] font-extrabold">Delivery Partner</h4>
                <p className="text-[8.5px] text-slate-400 font-semibold">Fast Delivery</p>
                <p className="text-[8.5px] text-slate-405 font-bold">20K - 30K</p>
                <p className="text-[8px] text-slate-400 font-bold">Trichy, TN - Part-time</p>
              </div>
            </div>
            <button className="px-3.5 py-1.5 bg-[#4A3AFF] hover:bg-[#3b2ecc] text-white text-[9px] font-black rounded-lg">Apply</button>
          </div>

          {/* Card 3 */}
          <div className={`p-3.5 rounded-card border shadow-3xs flex justify-between items-center ${
            theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
          }`}>
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-black text-purple-500 text-xs shrink-0">MS</div>
              <div className="space-y-0.5 leading-tight">
                <h4 className="text-[11px] font-extrabold">Store Manager</h4>
                <p className="text-[8.5px] text-slate-400 font-semibold">Mega Store</p>
                <p className="text-[8.5px] text-slate-405 font-bold">35K - 45K</p>
                <p className="text-[8px] text-slate-400 font-bold">Trichy, TN - Full-time</p>
              </div>
            </div>
            <span className="text-slate-400 text-xs">❯</span>
          </div>
        </div>

        {/* Menu list in scroll list (mockup anomaly) */}
        <div className="border-t border-slate-100 dark:border-neutral-900 pt-3 space-y-2">
          {menuItems.map((item, idx) => (
            <div 
              key={idx}
              onClick={() => navigate(item.path)}
              className={`p-3 rounded-card border flex justify-between items-center cursor-pointer active:bg-slate-50 dark:active:bg-neutral-800 transition ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850 text-white' : 'bg-white border-slate-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-sm">{item.icon}</span>
                <span className="text-[10px] font-extrabold">{item.name}</span>
              </div>
              <span className="text-slate-400 text-xs">❯</span>
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

  const details = [
    { label: 'Job Role', value: 'Sales Executive', icon: '💼' },
    { label: 'Company', value: 'Ace Communications', icon: '🏠' },
    { label: 'CTC / Salary', value: '₹40,000 - ₹60,000', icon: '💵' },
    { label: 'Experience', value: '1 - 2 Years', icon: '⚙️' },
    { label: 'Job Type', value: 'Full-time', icon: '💼' },
    { label: 'Location', value: 'Trichy, Tamil Nadu', icon: '📍' },
    { label: 'Application Deadline', value: '20 May 2025', icon: '📅' },
    { label: 'Posted Date', value: '10 May 2025', icon: '📅' }
  ];

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll Area */}
      <div className="flex-grow overflow-y-auto p-5 space-y-5 pb-20 text-left">
        {/* Header */}
        <div className="flex justify-between items-center h-8">
          <button 
            onClick={() => navigate('/jobs')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="text-center flex-grow pr-4">
            <h3 className="text-xs font-black">Sales Executive</h3>
            <p className="text-[9px] text-slate-400 font-semibold mt-0.5">Ace Communications</p>
          </div>
          <span className="text-slate-400 text-sm">⭐</span>
        </div>

        {/* Info Grid/List */}
        <div className={`rounded-card border divide-y ${
          theme === 'dark' ? 'bg-neutral-900 border-neutral-850 divide-neutral-800' : 'bg-white border-slate-150 divide-slate-100'
        }`}>
          {details.map((d, i) => (
            <div key={i} className="p-3.5 flex justify-between items-center text-[10px]">
              <div className="flex items-center gap-2 text-slate-500 dark:text-neutral-400">
                <span>{d.icon}</span>
                <span className="font-extrabold">{d.label}</span>
              </div>
              <span className="font-black text-slate-800 dark:text-white">{d.value}</span>
            </div>
          ))}
        </div>

        {/* Job Description */}
        <div className="space-y-1.5">
          <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400">Job Description</h4>
          <p className="text-[10px] text-slate-650 dark:text-neutral-350 leading-relaxed font-semibold">
            We are looking for a dynamic sales executive to join our team and drive business growth.
          </p>
        </div>

        {/* Skills required */}
        <div className="space-y-2">
          <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400">Skills Required</h4>
          <div className="flex flex-wrap gap-2 text-[9px] font-bold">
            {['Communication', 'Negotiation', 'CRM', 'Teamwork'].map(skill => (
              <span key={skill} className="px-3 py-1.5 bg-slate-100 dark:bg-neutral-900 rounded-full border border-slate-200 dark:border-neutral-800">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Apply Button */}
      <div className="absolute bottom-4 left-0 w-full p-4 z-20 bg-transparent">
        <button
          onClick={() => navigate('/jobs')}
          className="w-full py-3.5 bg-[#4A3AFF] hover:bg-[#3b2ecc] text-white font-bold rounded-btn shadow-md text-xs text-center uppercase tracking-wider"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

// ==========================================
// 23. NAVIGATION DRAWER
// ==========================================
export const DrawerScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  const links = [
    { name: 'Home', icon: '🏠', path: '/home' },
    { name: 'Community Feed', icon: '👥', path: '/community-feed' },
    { name: 'Complaints', icon: '⚠️', path: '/civic' },
    { name: 'Emergency SOS', icon: '🚨', path: '/sos' },
    { name: 'Explore Avadi', icon: '🧭', path: '/home' },
    { name: 'Local Services', icon: '🤝', path: '/services' },
    { name: 'Events & Festivals', icon: '📅', path: '/home' },
    { name: 'Profile Settings', icon: '⚙️', path: '/theme' },
    { name: 'Logout', icon: '🚪', path: '/welcome' }
  ];

  return (
    <div className="w-full h-full flex select-none relative overflow-hidden bg-slate-900/40">
      {/* Drawer content (width ~85%) */}
      <div className={`w-[85%] h-full flex flex-col justify-between text-left shadow-2xl relative z-20 animate-slide-in-left ${
        theme === 'dark' ? 'bg-[#181818] text-white' : 'bg-white text-slate-800'
      }`}>
        
        {/* Profile Card Header */}
        <div className="p-6 bg-gradient-to-r from-indigo-650 to-indigo-500 text-white flex justify-between items-center">
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
              <button onClick={() => navigate('/home')} className="text-[8.5px] font-bold text-white/90 underline mt-1 block">View Profile</button>
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
  const [selectedLang, setSelectedLang] = useState<'en' | 'ta' | 'hi'>(language || 'en');

  const options = [
    { code: 'en', name: 'English', icon: '🌐' },
    { code: 'ta', name: 'தமிழ் (Tamil)', icon: '📖' },
    { code: 'hi', name: 'हिंदी (Hindi)', icon: '🖋️' }
  ];

  const handleApply = () => {
    setLanguage(selectedLang === 'hi' ? 'en' : selectedLang);
    navigate('/home');
  };

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
    }`}>
      {/* Scroll area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6 text-left">
        {/* Header */}
        <div className="h-8 flex items-center gap-2">
          <button 
            onClick={() => navigate('/home')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-xs font-black text-slate-850 dark:text-white">Choose Language</span>
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
                  : theme === 'dark' ? 'bg-neutral-900 border-neutral-850 text-neutral-300' : 'bg-slate-50 border-slate-200 text-slate-700'
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

  const services = [
    { name: 'R. Electrician', role: 'Electrician', rating: '★ 4.6' },
    { name: 'M. Prakash', role: 'Plumber', rating: '★ 4.7' },
    { name: 'G. Carpenter', role: 'Carpenter', rating: '★ 4.5' },
    { name: 'S. Medi', role: 'Contractor', rating: '★ 4.3' }
  ];

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll Container */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header Search bar */}
        <div className="flex items-center gap-2">
          <button onClick={() => navigate('/home')} className="p-1 text-slate-400"><ChevronLeft size={20} /></button>
          <div className="flex-grow text-center font-black text-xs pr-4">Local Services</div>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search services..."
            className={`w-full p-2.5 pl-8 text-xs font-semibold rounded-btn border focus:outline-none ${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-805 text-white' : 'bg-white border-slate-200 text-slate-800'
            }`}
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
        </div>

        {/* List of service providers */}
        <div className="space-y-3.5 pt-2">
          {services.map((serv, i) => (
            <div
              key={i}
              className={`p-3.5 rounded-card border shadow-3xs flex justify-between items-center ${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
              }`}
            >
              <div className="flex gap-3.5 items-center">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-black text-[#4A3AFF] text-xs shrink-0">W</div>
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
    </div>
  );
};

// ==========================================
// 29. RENTALS & JOBS (HOME VARIANT)
// ==========================================
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
          <button onClick={() => navigate('/home')} className="p-1 text-slate-400"><ChevronLeft size={20} /></button>
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
            onClick={() => navigate('/rentals-alt')}
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
            onClick={() => {}}
            className="rounded-2xl bg-purple-500 hover:bg-purple-600 text-white p-5 flex flex-col justify-between items-center text-center aspect-[4/5] shadow-md hover:scale-[1.01] active:scale-[0.98] transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg mt-2">💼</div>
            <div className="mb-2">
              <h4 className="text-xs font-black">Jobs</h4>
              <p className="text-[7.5px] text-white/80 leading-snug mt-1 font-semibold">Find Jobs & Internships</p>
            </div>
          </button>
        </div>

        {/* Link at bottom */}
        <div className="text-center pt-8">
          <button onClick={() => navigate('/home')} className="text-xs font-black text-[#4A3AFF] underline">View All</button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 30. RENTALS PAGE (VARIANT)
// ==========================================
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
                  <p className="text-[9.5px] font-black text-[#4A3AFF] mt-1">{list.price}</p>
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
