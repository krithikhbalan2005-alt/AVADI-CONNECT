import React, { useState } from 'react';
import { useNavigate, useParams, Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import type { DonationRequest, Volunteer, JobListing, RentalListing, BloodRequest } from '../context/AppContext';
import { 
  Heart, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Check, 
  User, 
  Plus, 
  FileText, 
  Award,
  ChevronRight,
  ChevronLeft,
  Shield,
  Layers,
  Settings as SettingsIcon,
  Compass,
  Calendar,
  Lock,
  Mail,
  Edit2,
  Moon,
  Sun
} from 'lucide-react';

// ==========================================
// 33. COMMUNITY HUB (Community tab `/community`)
// ==========================================
export const CommunityHubScreen: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useApp();

  const { theme } = useApp();

  return (
    <div className={`flex-1 flex flex-col justify-between relative select-none ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      <div className="flex-grow overflow-y-auto p-4 space-y-5 pb-20">
      <div className="flex items-center gap-2">
        <button 
          onClick={() => navigate('/explore')}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-xs font-bold uppercase tracking-wider">
          {language === 'en' ? 'Community Hub' : 'சமூக மையம்'}
        </span>
      </div>

      {/* Community actions card grids */}
      <div className="grid grid-cols-2 gap-3">
        <button 
          onClick={() => navigate('/volunteers')}
          className="p-4 bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 rounded-card text-left transition hover:shadow-xs active:scale-95 flex flex-col justify-between h-28"
        >
          <span className="text-3xl">🤝</span>
          <div>
            <h4 className="text-xs font-extrabold text-slate-800 dark:text-white">Volunteers Directory</h4>
            <p className="text-[9px] text-slate-400 mt-0.5">Find active helpers</p>
          </div>
        </button>

        <button 
          onClick={() => navigate('/donations')}
          className="p-4 bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 rounded-card text-left transition hover:shadow-xs active:scale-95 flex flex-col justify-between h-28"
        >
          <span className="text-3xl">📦</span>
          <div>
            <h4 className="text-xs font-extrabold text-slate-800 dark:text-white">Donations Portal</h4>
            <p className="text-[9px] text-slate-400 mt-0.5">Item-based requests</p>
          </div>
        </button>
      </div>

      {/* Hero row blood donor shortcut */}
      <div 
        onClick={() => navigate('/blood-request/create')}
        className="p-5 bg-red-50 dark:bg-red-950/20 border border-red-200/50 dark:border-red-900/30 rounded-card flex gap-4 items-center cursor-pointer hover:shadow-xs transition"
      >
        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl shadow-xs animate-pulse">
          🩸
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-extrabold text-red-600 dark:text-red-400">Urgent Blood Request</h3>
          <p className="text-xs text-slate-500 dark:text-neutral-400 mt-1 leading-normal">
            Need blood in emergency? Broadcast to local registered donors instantly.
          </p>
        </div>
        <ChevronRight size={18} className="text-red-400" />
      </div>

      {/* Volunteer invite panel */}
      <div className="p-4 bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 rounded-card text-center space-y-3">
        <h4 className="text-xs font-bold text-slate-400 uppercase">Join as a Volunteer</h4>
        <p className="text-xs text-slate-500 dark:text-neutral-400 leading-normal max-w-xs mx-auto">
          Help your neighborhood during weather emergencies, cleanups, or education drives.
        </p>
        <button 
          onClick={() => navigate('/volunteer/register')}
          className="px-5 py-2.5 bg-primary text-white font-bold rounded-full text-xs shadow-xs hover:bg-opacity-95 transition"
        >
          Register to Volunteer
        </button>
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
// 34. VOLUNTEER REGISTRATION
// ==========================================
export const VolunteerRegistrationScreen: React.FC = () => {
  const navigate = useNavigate();
  const { registerAsVolunteer } = useApp();
  const [name, setName] = useState('Karthik Balan');
  const [domain, setDomain] = useState<'Environment' | 'Safety' | 'Education' | 'Health'>('Environment');
  const [phone, setPhone] = useState('+91 98765 43210');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && phone.trim()) {
      registerAsVolunteer({ name, domain, phone });
      navigate('/volunteers');
    }
  };

  return (
    <div className="flex-1 bg-white dark:bg-[#121212] p-4 flex flex-col select-none">
      <div className="flex items-center gap-2 mb-4">
        <button 
          onClick={() => navigate('/volunteers')}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-xs font-bold uppercase tracking-wider">
          Volunteer Registration
        </span>
      </div>
      <p className="text-xs text-slate-400 mb-6">Register to contribute to your ward community</p>

      <form onSubmit={handleSubmit} className="flex-1 space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Full Name</label>
          <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3.5 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-input text-xs focus:outline-none focus:border-primary text-slate-800 dark:text-white font-medium"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Phone Coordinate</label>
          <input 
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3.5 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-input text-xs focus:outline-none focus:border-primary text-slate-800 dark:text-white font-medium"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-400 mb-2 uppercase">Select Focus Domain</label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { key: 'Environment', icon: '🌳' },
              { key: 'Safety', icon: '🛡️' },
              { key: 'Education', icon: '📚' },
              { key: 'Health', icon: '🩺' }
            ].map(item => (
              <button
                type="button"
                key={item.key}
                onClick={() => setDomain(item.key as any)}
                className={`p-3 border rounded-2xl text-center transition ${
                  domain === item.key
                    ? 'bg-primary/5 border-primary text-primary font-bold shadow-2xs'
                    : 'bg-slate-50 border-slate-200 dark:bg-neutral-900 dark:border-neutral-800 text-slate-600 dark:text-neutral-300'
                }`}
              >
                <span className="text-xl block mb-1">{item.icon}</span>
                <span className="text-[10px] block">{item.key}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="pt-6">
          <button 
            type="submit"
            className="w-full py-4 bg-primary text-white font-bold rounded-btn shadow-md hover:bg-primary-dark transition active:scale-95"
          >
            Register as Volunteer
          </button>
        </div>
      </form>
    </div>
  );
};

// ==========================================
// 35. VOLUNTEER DIRECTORY
// ==========================================
export const VolunteerDirectoryScreen: React.FC = () => {
  const navigate = useNavigate();
  const { volunteers, language } = useApp();
  const [filter, setFilter] = useState<'All' | 'Environment' | 'Safety' | 'Education' | 'Health'>('All');

  const filtered = volunteers.filter(v => filter === 'All' || v.domain === filter);

  return (
    <div className="flex-1 bg-slate-50 dark:bg-[#121212] p-4 flex flex-col select-none">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => navigate('/community')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-xs font-bold uppercase tracking-wider">
            Volunteers Directory
          </span>
        </div>
        <button 
          onClick={() => navigate('/volunteer/register')}
          className="px-3 py-1.5 bg-primary text-white rounded-full font-bold text-xs shadow-xs"
        >
          + Join List
        </button>
      </div>

      {/* Filter chips */}
      <div className="flex gap-1.5 overflow-x-auto pb-3 scrollbar-none">
        {['All', 'Environment', 'Safety', 'Education', 'Health'].map(item => (
          <button
            key={item}
            onClick={() => setFilter(item as any)}
            className={`text-xs px-3.5 py-1.5 rounded-full font-bold transition border ${
              filter === item
                ? 'bg-primary border-primary text-white shadow-xs'
                : 'bg-white border-slate-200 dark:bg-neutral-900 dark:border-neutral-800 text-slate-500 dark:text-neutral-400'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Volunteers directory list */}
      <div className="flex-1 overflow-y-auto space-y-3 mt-2">
        {filtered.map(v => (
          <div 
            key={v.id}
            className="p-4 bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 rounded-card flex gap-4 items-center shadow-2xs"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 flex-shrink-0">
              <img src={v.avatar} alt={v.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <h4 className="text-xs font-bold text-slate-800 dark:text-white truncate">{v.name}</h4>
                <span className={`text-[8px] font-extrabold uppercase px-1.5 py-0.5 rounded ${
                  v.status === 'Available' 
                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400' 
                    : 'bg-neutral-200 text-neutral-600 dark:bg-neutral-850 dark:text-neutral-400'
                }`}>
                  {v.status}
                </span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1">
                Domain: <span className="font-bold text-primary">{language === 'en' ? v.domain : v.domainTa}</span> • ⭐ {v.rating} ({v.activities} activities)
              </p>
            </div>
            <a 
              href={`tel:${v.phone}`}
              className="w-9 h-9 rounded-full bg-slate-100 dark:bg-neutral-800 text-slate-600 dark:text-white flex items-center justify-center transition hover:bg-slate-200"
            >
              <Phone size={14} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// 36. DONATION REQUESTS
// ==========================================
export const DonationRequestsScreen: React.FC = () => {
  const navigate = useNavigate();
  const { donations, language } = useApp();

  return (
    <div className="flex-1 bg-slate-50 dark:bg-[#121212] p-4 flex flex-col select-none">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => navigate('/community')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-xs font-bold uppercase tracking-wider">
            Donation Requests
          </span>
        </div>
        <button 
          onClick={() => navigate('/donations/create')}
          className="px-3 py-1.5 bg-primary text-white rounded-full font-bold text-xs shadow-xs"
        >
          + Request Items
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-3">
        {donations.map(d => (
          <div
            key={d.id}
            onClick={() => navigate(`/donations/${d.id}`)}
            className="p-4 bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 rounded-card flex gap-4 cursor-pointer hover:shadow-xs transition"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-3xl flex-shrink-0">
              🎁
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-extrabold text-emergency uppercase">{d.urgency}</span>
                <span className="text-[9px] text-slate-400">{d.timeAgo}</span>
              </div>
              <h4 className="text-sm font-bold text-slate-800 dark:text-white mt-1 truncate">
                {language === 'en' ? d.title : d.titleTa}
              </h4>
              <p className="text-[10px] text-slate-400 mt-1 truncate font-medium">
                Needed: {language === 'en' ? d.itemsNeeded : d.itemsNeededTa}
              </p>
              <p className="text-[9px] text-slate-400 mt-0.5 truncate">Organized by {d.organizer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// 37. DONATION DETAIL (No financial metrics, items-based Call/WhatsApp)
// ==========================================
export const DonationDetailScreen: React.FC = () => {
  const navigate = useNavigate();
  const { requestId } = useParams<{ requestId: string }>();
  const { donations, language } = useApp();
  const [called, setCalled] = useState(false);

  const d = donations.find(item => item.id === requestId) || donations[0];

  if (!d) return <div className="p-4">Donation request not found</div>;

  return (
    <div className="flex-1 bg-slate-50 dark:bg-[#121212] p-4 flex flex-col justify-between select-none">
      <div className="flex-1 overflow-y-auto space-y-4 pr-1">
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <button 
            onClick={() => navigate('/donations')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-xs font-bold uppercase tracking-wider">
            Donation Detail
          </span>
        </div>

        {/* Banner box */}
        <div className="p-4 bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 rounded-card space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="px-2.5 py-0.5 bg-red-100 text-emergency font-extrabold rounded-full uppercase text-[9px]">{d.urgency} Priority</span>
            <span className="text-slate-400">{d.timeAgo}</span>
          </div>
          <h3 className="text-md font-bold text-slate-800 dark:text-white leading-snug">
            {language === 'en' ? d.title : d.titleTa}
          </h3>
          <p className="text-[11px] text-slate-400">Organized by <span className="font-semibold text-slate-700 dark:text-white">{d.organizer}</span></p>
        </div>

        {/* Items Needed details */}
        <div className="p-4 bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 rounded-card space-y-2">
          <h4 className="text-xs font-bold text-slate-400 uppercase">Items Required</h4>
          <div className="p-3 bg-primary/5 border border-primary/10 rounded-xl">
            <p className="text-xs font-bold text-primary">
              {language === 'en' ? d.itemsNeeded : d.itemsNeededTa}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-slate-400 uppercase">Request Details</h4>
          <p className="text-xs text-slate-600 dark:text-neutral-300 leading-relaxed">
            {language === 'en' ? d.description : d.descriptionTa}
          </p>
        </div>

        {/* Location drops */}
        <div className="p-3 bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 rounded-xl text-xs flex gap-2">
          <span className="text-primary font-bold">📍</span>
          <div>
            <span className="font-semibold text-slate-700 dark:text-white">Collection Center:</span>
            <p className="text-slate-400 mt-0.5">{d.location}</p>
          </div>
        </div>

        {called && (
          <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 rounded-xl text-xs text-emerald-800 dark:text-emerald-400 text-center animate-pulse">
            Dialing {d.organizer} coordinate line at {d.phone}...
          </div>
        )}
      </div>

      {/* WhatsApp or Call buttons */}
      <div className="flex gap-3 mt-4 border-t pt-3 dark:border-neutral-800">
        <button
          onClick={() => {
            setCalled(true);
            setTimeout(() => setCalled(false), 4000);
          }}
          className="flex-1 py-3.5 bg-slate-200 dark:bg-neutral-800 text-slate-800 dark:text-white font-bold rounded-btn flex items-center justify-center gap-2 hover:bg-opacity-95 transition"
        >
          <Phone size={16} />
          <span>Call Organizer</span>
        </button>

        <a
          href={`https://wa.me/${d.phone.replace(/[^0-9]/g, '')}?text=Hi,%20I'd%2520like%2520to%2520contribute%2520the%2520requested%2520items%2520for%2520${d.title}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3.5 bg-emerald-500 text-white font-bold rounded-btn flex items-center justify-center gap-2 hover:bg-emerald-600 transition"
        >
          <MessageCircle size={16} />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

// ==========================================
// 38. POST DONATION
// ==========================================
export const PostDonationScreen: React.FC = () => {
  const navigate = useNavigate();
  const { addDonationRequest } = useApp();

  const [title, setTitle] = useState('');
  const [urgency, setUrgency] = useState<'Urgent' | 'Normal'>('Normal');
  const [organizer, setOrganizer] = useState('Avadi Ward Council');
  const [itemsNeeded, setItemsNeeded] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('Ward Office, Avadi North');
  const [phone, setPhone] = useState('+91 98765 43210');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && itemsNeeded.trim() && description.trim()) {
      addDonationRequest({
        title,
        titleTa: title,
        urgency,
        urgencyTa: urgency === 'Urgent' ? 'அவசரம்' : 'சாதாரணமானது',
        organizer,
        itemsNeeded,
        itemsNeededTa: itemsNeeded,
        description,
        descriptionTa: description,
        location,
        phone,
        whatsapp: phone
      });
      navigate('/donations');
    }
  };

  return (
    <div className="flex-1 bg-white dark:bg-[#121212] p-4 flex flex-col select-none">
      <div className="flex items-center gap-2 mb-4">
        <button 
          onClick={() => navigate('/donations')}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-xs font-bold uppercase tracking-wider">
          Request Support Items
        </span>
      </div>
      <p className="text-xs text-slate-400 mb-6 font-medium">Post item requirements for community support programs</p>

      <form onSubmit={handleSubmit} className="flex-1 space-y-4 overflow-y-auto pb-4 pr-1">
        <div>
          <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Request Title</label>
          <input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Study books for underprivileged kids"
            className="w-full px-4 py-3.5 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-input text-xs focus:outline-none focus:border-primary text-slate-800 dark:text-white font-medium"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Urgency</label>
            <select
              value={urgency}
              onChange={(e) => setUrgency(e.target.value as any)}
              className="w-full px-4 py-3.5 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-input text-xs focus:outline-none focus:border-primary text-slate-800 dark:text-white font-semibold"
            >
              <option value="Normal">Normal</option>
              <option value="Urgent">Urgent</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Organizer Name</label>
            <input 
              type="text"
              value={organizer}
              onChange={(e) => setOrganizer(e.target.value)}
              className="w-full px-4 py-3.5 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-input text-xs focus:outline-none focus:border-primary text-slate-800 dark:text-white font-medium"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Specific Items Needed</label>
          <input 
            type="text"
            value={itemsNeeded}
            onChange={(e) => setItemsNeeded(e.target.value)}
            placeholder="Notebooks, blankets, specific groceries..."
            className="w-full px-4 py-3.5 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-input text-xs focus:outline-none focus:border-primary text-slate-800 dark:text-white font-medium"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Description Details</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Explain why these items are needed and how they will be distributed..."
            className="w-full min-h-[90px] p-3 text-xs bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-2xl focus:outline-none focus:border-primary text-slate-800 dark:text-white resize-none"
          ></textarea>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Drop-off Location</label>
          <input 
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-3.5 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-input text-xs focus:outline-none focus:border-primary text-slate-800 dark:text-white font-medium"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Contact Number</label>
          <input 
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3.5 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-input text-xs focus:outline-none focus:border-primary text-slate-800 dark:text-white font-medium"
          />
        </div>

        <button 
          type="submit"
          disabled={!title.trim() || !itemsNeeded.trim() || !description.trim()}
          className="w-full py-4 bg-primary text-white font-bold rounded-btn shadow-md hover:bg-primary-dark transition active:scale-95 disabled:opacity-50 mt-6"
        >
          Submit Item Request
        </button>
      </form>
    </div>
  );
};

// ==========================================
// 39. BLOOD REQUEST FORM
// ==========================================
export const BloodRequestFormScreen: React.FC = () => {
  const navigate = useNavigate();
  const { addBloodRequest } = useApp();

  const [bloodGroup, setBloodGroup] = useState('O+ Positive');
  const [units, setUnits] = useState(2);
  const [hospital, setHospital] = useState('Avadi Government Hospital');
  const [patientName, setPatientName] = useState('Rajesh B');
  const [urgency, setUrgency] = useState<'Low' | 'Medium' | 'High' | 'Critical'>('Critical');
  const [phone, setPhone] = useState('+91 98765 00112');
  const [location, setLocation] = useState('Avadi North');

  const groups = ['O+ Positive', 'O- Negative', 'A+ Positive', 'A- Negative', 'B+ Positive', 'B- Negative', 'AB+ Positive', 'AB- Negative'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (hospital.trim() && patientName.trim() && phone.trim()) {
      const generatedId = addBloodRequest({
        bloodGroup,
        units,
        hospital,
        patientName,
        urgency,
        phone,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        location
      });
      navigate(`/blood-request/${generatedId}`);
    }
  };

  return (
    <div className="flex-1 bg-white dark:bg-[#121212] p-4 flex flex-col select-none">
      <div className="flex items-center gap-2 mb-4">
        <button 
          onClick={() => navigate('/community')}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-xs font-bold uppercase tracking-wider">
          Urgent Blood Request
        </span>
      </div>
      <p className="text-xs text-slate-400 mb-6">Broadcast emergency blood requirement to local ward network</p>

      <form onSubmit={handleSubmit} className="flex-1 space-y-4 overflow-y-auto pb-4 pr-1">
        <div>
          <label className="block text-xs font-bold text-slate-400 mb-2 uppercase">Select Blood Group</label>
          <div className="grid grid-cols-4 gap-1.5">
            {groups.map(g => (
              <button
                type="button"
                key={g}
                onClick={() => setBloodGroup(g)}
                className={`py-2 px-1 border rounded-lg text-center transition text-[10px] font-bold ${
                  bloodGroup === g
                    ? 'bg-red-500 border-red-500 text-white shadow-2xs'
                    : 'bg-slate-50 border-slate-200 dark:bg-neutral-900 dark:border-neutral-800 text-slate-700 dark:text-neutral-300'
                }`}
              >
                {g.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Units Required</label>
            <input 
              type="number"
              value={units}
              onChange={(e) => setUnits(parseInt(e.target.value) || 1)}
              min="1"
              className="w-full px-4 py-3.5 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-input text-xs focus:outline-none focus:border-primary text-slate-800 dark:text-white font-mono font-bold"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Urgency</label>
            <select
              value={urgency}
              onChange={(e) => setUrgency(e.target.value as any)}
              className="w-full px-4 py-3.5 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-input text-xs focus:outline-none focus:border-primary text-slate-800 dark:text-white font-semibold"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Patient Name</label>
          <input 
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            className="w-full px-4 py-3.5 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-input text-xs focus:outline-none focus:border-primary text-slate-800 dark:text-white font-medium"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Hospital / Location</label>
          <input 
            type="text"
            value={hospital}
            onChange={(e) => setHospital(e.target.value)}
            className="w-full px-4 py-3.5 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-input text-xs focus:outline-none focus:border-primary text-slate-800 dark:text-white font-medium"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Hospital City/Area</label>
            <input 
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-3.5 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-input text-xs focus:outline-none focus:border-primary text-slate-800 dark:text-white font-medium"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Contact Number</label>
            <input 
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3.5 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-input text-xs focus:outline-none focus:border-primary text-slate-800 dark:text-white font-medium"
            />
          </div>
        </div>

        <button 
          type="submit"
          className="w-full py-4 bg-red-600 text-white font-bold rounded-btn shadow-md hover:bg-red-700 transition active:scale-95 mt-6"
        >
          Send Blood Broadcast
        </button>
      </form>
    </div>
  );
};

// ==========================================
// 40. BLOOD BROADCAST (Blood Broadcast Detail)
// ==========================================
export const BloodBroadcastScreen: React.FC = () => {
  const navigate = useNavigate();
  const { requestId } = useParams<{ requestId: string }>();
  const { bloodRequests } = useApp();
  const [called, setCalled] = useState(false);

  const b = bloodRequests.find(item => item.id === requestId) || bloodRequests[0];

  if (!b) return <div className="p-4">Broadcast request not found</div>;

  // Matching donor simulation list
  const matchingDonors = [
    { name: "Jessica Jasmine", distance: "0.8 km away", phone: "+91 98765 00441" },
    { name: "Karthi Selvam", distance: "1.5 km away", phone: "+91 98765 00998" },
    { name: "Anandan Pillai", distance: "2.3 km away", phone: "+91 98765 00999" }
  ];

  return (
    <div className="flex-1 bg-slate-50 dark:bg-[#121212] p-4 flex flex-col justify-between select-none">
      <div className="flex-1 overflow-y-auto space-y-4 pr-1">
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <button 
            onClick={() => navigate('/community')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-xs font-bold uppercase tracking-wider">
            Blood Broadcast Detail
          </span>
        </div>

        {/* Urgent Broadcast card */}
        <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200/50 dark:border-red-900/35 rounded-card text-center space-y-3 relative overflow-hidden">
          <div className="absolute right-0 top-0 bg-red-500 text-white text-[8px] font-extrabold px-3 py-1 uppercase rounded-bl">
            {b.urgency} Broadcast
          </div>
          <span className="text-5xl block animate-pulse">🩸</span>
          <div>
            <h3 className="text-xl font-black text-red-600 dark:text-red-400">{b.bloodGroup} Needed</h3>
            <p className="text-xs text-slate-500 mt-1">{b.units} Unit(s) • For Patient: {b.patientName}</p>
          </div>
        </div>

        {/* Hospital Address card */}
        <div className="p-4 bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 rounded-card space-y-2">
          <h4 className="text-xs font-bold text-slate-400 uppercase">Hospital Coordinates</h4>
          <p className="text-xs font-bold text-slate-700 dark:text-white leading-normal flex gap-2">
            <span className="text-primary font-bold">🏥</span>
            <span>{b.hospital}</span>
          </p>
          <div className="text-[10px] text-slate-400 pl-6">Area: {b.location} • Filed Date: {b.date}</div>
        </div>

        {/* Matching donors directory */}
        <div className="p-4 bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 rounded-card space-y-3">
          <h4 className="text-xs font-bold text-slate-400 uppercase">Matching Ward Donors ({matchingDonors.length})</h4>
          
          <div className="space-y-2">
            {matchingDonors.map((donor, idx) => (
              <div 
                key={idx}
                className="p-3 bg-slate-50 dark:bg-neutral-950 border border-slate-100 dark:border-neutral-900/80 rounded-xl flex items-center justify-between text-xs"
              >
                <div>
                  <h5 className="font-bold text-slate-800 dark:text-white">{donor.name}</h5>
                  <p className="text-[10px] text-slate-400 mt-0.5">{donor.distance} • Verified Member</p>
                </div>
                <a 
                  href={`tel:${donor.phone}`}
                  className="px-3 py-1.5 bg-emerald-500 text-white rounded-lg font-bold text-[10px] flex items-center gap-1.5"
                >
                  <Phone size={10} />
                  <span>Call Donor</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {called && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-emergency text-center animate-pulse">
            Dialing emergency request coordinate: {b.phone}...
          </div>
        )}
      </div>

      <button 
        onClick={() => {
          setCalled(true);
          setTimeout(() => setCalled(false), 4500);
        }}
        className="mt-4 w-full py-4 bg-red-600 text-white font-bold rounded-btn flex items-center justify-center gap-2 shadow-lg"
      >
        <Phone size={18} />
        <span>Call Emergency Coordinator</span>
      </button>
    </div>
  );
};

// ==========================================
// 41. JOBS & RENTALS HUB
// ==========================================
export const JobsRentalsScreen: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useApp();

  return (
    <div className="flex-1 bg-slate-50 dark:bg-[#121212] p-4 space-y-5 select-none">
      <div className="flex items-center gap-2">
        <button 
          onClick={() => navigate('/explore')}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-xs font-bold uppercase tracking-wider">
          {language === 'en' ? 'Jobs & Rentals' : 'வேலை & வாடகை'}
        </span>
      </div>

      {/* Grid selector */}
      <div className="grid grid-cols-2 gap-3">
        <button 
          onClick={() => navigate('/rentals')}
          className="p-4 bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 rounded-card text-left transition hover:shadow-xs active:scale-95 flex flex-col justify-between h-28"
        >
          <span className="text-3xl">🏠</span>
          <div>
            <h4 className="text-xs font-extrabold text-slate-800 dark:text-white">Housing & Rentals</h4>
            <p className="text-[9px] text-slate-400 mt-0.5">Apartments, PGs, Independent houses</p>
          </div>
        </button>

        <button 
          onClick={() => navigate('/jobs')}
          className="p-4 bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 rounded-card text-left transition hover:shadow-xs active:scale-95 flex flex-col justify-between h-28"
        >
          <span className="text-3xl">💼</span>
          <div>
            <h4 className="text-xs font-extrabold text-slate-800 dark:text-white">Job Openings</h4>
            <p className="text-[9px] text-slate-400 mt-0.5">Local job listings in Avadi</p>
          </div>
        </button>
      </div>

      {/* Portal overview info card */}
      <div className="p-4 bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 rounded-card space-y-3">
        <h4 className="text-xs font-bold text-slate-400 uppercase">hyperlocal listings policy</h4>
        <p className="text-xs text-slate-500 dark:text-neutral-400 leading-normal">
          All listings are added directly by Avadi homeowners and local businessmen. Verify coordinates and details directly before committing to rentals or jobs.
        </p>
      </div>
    </div>
  );
};

// ==========================================
// 42. RENTAL LISTINGS
// ==========================================
export const RentalListingsScreen: React.FC = () => {
  const navigate = useNavigate();
  const { rentals, language } = useApp();
  const [filter, setFilter] = useState<'All' | '1 BHK' | '2 BHK'>('All');

  const filtered = rentals.filter(r => filter === 'All' || r.type.includes(filter));

  return (
    <div className="flex-1 bg-slate-50 dark:bg-[#121212] p-4 flex flex-col select-none">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => navigate('/jobs-rentals')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-xs font-bold uppercase tracking-wider">
            Rental Listings
          </span>
        </div>
        <button 
          onClick={() => navigate('/rentals/create')}
          className="px-3 py-1.5 bg-primary text-white rounded-full font-bold text-xs shadow-xs"
        >
          Post Rental
        </button>
      </div>

      {/* Filter chips */}
      <div className="flex gap-1.5 overflow-x-auto pb-3 scrollbar-none">
        {['All', '1 BHK', '2 BHK'].map(item => (
          <button
            key={item}
            onClick={() => setFilter(item as any)}
            className={`text-xs px-3.5 py-1.5 rounded-full font-bold transition border ${
              filter === item
                ? 'bg-primary border-primary text-white shadow-xs'
                : 'bg-white border-slate-200 dark:bg-neutral-900 dark:border-neutral-800 text-slate-500 dark:text-neutral-400'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto space-y-3 mt-2">
        {filtered.map(r => (
          <div
            key={r.id}
            onClick={() => navigate(`/rentals/${r.id}`)}
            className="p-3 bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 rounded-card flex gap-3 cursor-pointer hover:shadow-xs transition"
          >
            <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
              <img src={r.images[0]} alt={r.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <span className="text-[9px] font-extrabold text-primary uppercase">{r.type}</span>
                <span className="text-xs font-bold text-emerald-600">{r.rent}</span>
              </div>
              <h4 className="text-sm font-bold text-slate-800 dark:text-white mt-1 truncate">
                {r.title}
              </h4>
              <p className="text-[10px] text-slate-400 mt-1 truncate">
                📍 {r.location} • By {r.owner}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// 43. RENTAL DETAIL
// ==========================================
export const RentalDetailScreen: React.FC = () => {
  const navigate = useNavigate();
  const { rentalId } = useParams<{ rentalId: string }>();
  const { rentals, language } = useApp();
  const [called, setCalled] = useState(false);

  const r = rentals.find(item => item.id === rentalId) || rentals[0];

  if (!r) return <div className="p-4">Rental Listing not found</div>;

  return (
    <div className="flex-1 bg-slate-50 dark:bg-[#121212] p-4 flex flex-col justify-between select-none">
      <div className="flex-1 overflow-y-auto space-y-4 pr-1">
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <button 
            onClick={() => navigate('/rentals')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-xs font-bold uppercase tracking-wider">
            Rental Detail
          </span>
        </div>

        {/* Cover Photo */}
        <div className="w-full h-48 rounded-card overflow-hidden bg-slate-100 border">
          <img src={r.images[0]} alt={r.title} className="w-full h-full object-cover" />
        </div>

        {/* Info detail header */}
        <div>
          <div className="flex justify-between items-center">
            <span className="text-[10px] px-2.5 py-0.5 bg-primary/10 text-primary font-bold rounded-full uppercase">{r.type}</span>
            <span className="text-lg font-black text-emerald-600 font-mono">{r.rent}</span>
          </div>
          <h3 className="text-md font-extrabold text-slate-800 dark:text-white mt-2 leading-snug">
            {r.title}
          </h3>
          <p className="text-[10px] text-slate-400 mt-1">📍 {r.location} • Listed by {r.owner}</p>
        </div>

        {/* Description */}
        <div className="space-y-1">
          <h4 className="text-xs font-bold text-slate-400 uppercase">Property Description</h4>
          <p className="text-xs text-slate-600 dark:text-neutral-300 leading-relaxed">
            {r.description}
          </p>
        </div>

        {/* Amenities grid */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-slate-400 uppercase">Key Amenities</h4>
          <div className="flex flex-wrap gap-1.5">
            {r.amenities.map((item: string, idx: number) => (
              <span 
                key={idx}
                className="text-[10px] px-2.5 py-1 bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 font-bold text-slate-600 dark:text-neutral-300 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {called && (
          <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 rounded-xl text-xs text-emerald-800 dark:text-emerald-400 text-center animate-pulse">
            Dialing homeowner {r.owner} at {r.phone}...
          </div>
        )}
      </div>

      <button
        onClick={() => {
          setCalled(true);
          setTimeout(() => setCalled(false), 4000);
        }}
        className="w-full py-4 bg-primary text-white font-bold rounded-btn flex items-center justify-center gap-2 shadow-md hover:bg-primary-dark transition active:scale-95"
      >
        <Phone size={18} />
        <span>Contact Owner</span>
      </button>
    </div>
  );
};

// ==========================================
// 44. JOB LISTINGS
// ==========================================
export const JobListingsScreen: React.FC = () => {
  const navigate = useNavigate();
  const { jobs, language } = useApp();
  const [filter, setFilter] = useState<'All' | 'Full Time' | 'Part Time'>('All');

  const filtered = jobs.filter(j => filter === 'All' || j.type === filter);

  return (
    <div className="flex-1 bg-slate-50 dark:bg-[#121212] p-4 flex flex-col select-none">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => navigate('/jobs-rentals')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-xs font-bold uppercase tracking-wider">
            Job Listings
          </span>
        </div>
        <button 
          onClick={() => navigate('/jobs/detail-and-post', { state: { initialMode: 'post' } })}
          className="px-3 py-1.5 bg-primary text-white rounded-full font-bold text-xs shadow-xs"
        >
          + Post Job
        </button>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-1.5 overflow-x-auto pb-3 scrollbar-none">
        {['All', 'Full Time', 'Part Time'].map(item => (
          <button
            key={item}
            onClick={() => setFilter(item as any)}
            className={`text-xs px-3.5 py-1.5 rounded-full font-bold transition border ${
              filter === item
                ? 'bg-primary border-primary text-white shadow-xs'
                : 'bg-white border-slate-200 dark:bg-neutral-900 dark:border-neutral-800 text-slate-500 dark:text-neutral-400'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto space-y-3 mt-2">
        {filtered.map(j => (
          <div
            key={j.id}
            onClick={() => navigate('/jobs/detail-and-post', { state: { jobId: j.id, initialMode: 'detail' } })}
            className="p-4 bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 rounded-card flex gap-4 cursor-pointer hover:shadow-xs transition"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl flex-shrink-0">
              💼
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <span className="text-[9px] font-extrabold text-primary uppercase">{j.type}</span>
                <span className="text-[9px] text-slate-400">{j.postedAgo}</span>
              </div>
              <h4 className="text-sm font-bold text-slate-800 dark:text-white mt-1 truncate">
                {j.title}
              </h4>
              <p className="text-[10px] text-slate-400 mt-1 truncate">
                {j.company} • {j.salary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// 45. JOB DETAIL & POST VACANCY (Two modes in same screen)
// ==========================================
export const JobDetailPostVacancyScreen: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { jobs, addJobListing, language } = useApp();

  // Screen modes: 'detail' | 'post'
  const [mode, setMode] = useState<'detail' | 'post'>(location.state?.initialMode || 'detail');

  // Search details
  const targetId = location.state?.jobId || jobs[0]?.id;
  const job = jobs.find(item => item.id === targetId) || jobs[0];

  // Forms states
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('Local Avadi Business');
  const [salary, setSalary] = useState('₹18,000 - ₹22,000 / month');
  const [jobLocation, setJobLocation] = useState('Avadi North');
  const [type, setType] = useState<'Full Time' | 'Part Time'>('Full Time');
  const [description, setDescription] = useState('');
  const [applied, setApplied] = useState(false);

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      addJobListing({
        title,
        company,
        salary,
        location: jobLocation,
        type,
        experience: "1-2 Years Experience",
        description,
        requirements: ["Basic computer operation", "Punctual and reliable"]
      });
      // Switch back to details view of first job or general list
      setMode('detail');
      navigate('/jobs');
    }
  };

  return (
    <div className="flex-1 bg-white dark:bg-[#121212] p-4 flex flex-col justify-between select-none">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <button 
          onClick={() => navigate('/jobs')}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-xs font-bold uppercase tracking-wider">
          Job Detail & Post
        </span>
      </div>

      {/* Switcher headers */}
      <div className="flex border-b dark:border-neutral-800 mb-4 justify-around">
        <button
          onClick={() => setMode('detail')}
          className={`pb-2 text-xs font-bold transition-all px-6 relative ${
            mode === 'detail' ? 'text-primary' : 'text-slate-400'
          }`}
        >
          Job Details view
          {mode === 'detail' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></span>}
        </button>
        <button
          onClick={() => setMode('post')}
          className={`pb-2 text-xs font-bold transition-all px-6 relative ${
            mode === 'post' ? 'text-primary' : 'text-slate-400'
          }`}
        >
          Post a Vacancy form
          {mode === 'post' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></span>}
        </button>
      </div>

      {mode === 'detail' ? (
        // Mode 1: Job Details view
        <div className="flex-1 flex flex-col justify-between">
          {job ? (
            <div className="flex-1 overflow-y-auto space-y-4 pr-1 text-xs">
              <div className="p-4 bg-slate-50 dark:bg-neutral-900 border border-slate-100 rounded-card space-y-1.5">
                <span className="px-2 py-0.5 bg-primary/10 text-primary font-bold rounded text-[9px] uppercase">{job.type}</span>
                <h3 className="text-md font-extrabold text-slate-800 dark:text-white mt-1 leading-snug">{job.title}</h3>
                <p className="text-[11px] text-slate-500 font-semibold">{job.company}</p>
                <div className="text-[10px] text-slate-400 mt-1">📍 {job.location} • Listed: {job.postedAgo}</div>
              </div>

              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 rounded-xl font-bold text-emerald-700 dark:text-emerald-400">
                Salary: {job.salary}
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-slate-400 uppercase text-[10px]">Description</h4>
                <p className="text-slate-600 dark:text-neutral-300 leading-normal">{job.description}</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-400 uppercase text-[10px]">Requirements</h4>
                <ul className="space-y-1.5 list-disc pl-4 text-slate-600 dark:text-neutral-300 leading-relaxed">
                  {job.requirements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {applied && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-center text-emerald-700 animate-pulse font-bold">
                  ✓ Application Sent Successfully! Owner has been notified.
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12 text-slate-400">No jobs listed.</div>
          )}

          {!applied && job && (
            <button
              onClick={() => {
                setApplied(true);
                setTimeout(() => setApplied(false), 5000);
              }}
              className="mt-4 w-full py-4 bg-primary text-white font-bold rounded-btn shadow-md hover:bg-primary-dark transition active:scale-95"
            >
              Apply for Job
            </button>
          )}
        </div>
      ) : (
        // Mode 2: Post Vacancy Form
        <form onSubmit={handlePostSubmit} className="flex-1 space-y-3.5 overflow-y-auto pb-4 pr-1">
          <div>
            <label className="block text-[10px] font-bold text-slate-400 mb-1 uppercase">Job Title</label>
            <input 
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Sales Executive, Cashier"
              className="w-full px-4 py-3 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-input text-xs focus:outline-none focus:border-primary text-slate-800 dark:text-white font-medium"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 mb-1 uppercase">Company Name</label>
              <input 
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-input text-xs focus:outline-none focus:border-primary text-slate-800 dark:text-white font-medium"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 mb-1 uppercase">Job Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value as any)}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-input text-xs focus:outline-none focus:border-primary text-slate-800 dark:text-white font-semibold"
              >
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 mb-1 uppercase">Salary Range</label>
              <input 
                type="text"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-input text-xs focus:outline-none focus:border-primary text-slate-800 dark:text-white font-medium"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 mb-1 uppercase">Location Area</label>
              <input 
                type="text"
                value={jobLocation}
                onChange={(e) => setJobLocation(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-input text-xs focus:outline-none focus:border-primary text-slate-800 dark:text-white font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-400 mb-1 uppercase">Duties Details</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Outline general duties, working hours, and qualifications needed..."
              className="w-full min-h-[90px] p-3 text-xs bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-2xl focus:outline-none focus:border-primary text-slate-800 dark:text-white resize-none"
            ></textarea>
          </div>

          <button 
            type="submit"
            disabled={!title.trim() || !description.trim()}
            className="w-full py-4 bg-primary text-white font-bold rounded-btn shadow-md hover:bg-primary-dark transition active:scale-95 disabled:opacity-50 mt-4"
          >
            Post Job Opening
          </button>
        </form>
      )}
    </div>
  );
};

// ==========================================
// 46. PROFILE OVERVIEW (opened from top avatar or router `/profile`)
// ==========================================
export const ProfileOverviewScreen: React.FC = () => {
  const navigate = useNavigate();
  const { profile, complaints, donations, jobs, language } = useApp();

  return (
    <div className="flex-1 bg-slate-50 dark:bg-[#121212] p-4 space-y-4 select-none">
      {/* Header */}
      <div className="flex items-center gap-2">
        <button 
          onClick={() => navigate(-1)}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-xs font-bold uppercase tracking-wider">
          Profile
        </span>
      </div>

      {/* Profile Header card */}
      <div className="p-5 bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 rounded-card flex gap-4 items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/20">
          <img src={profile.avatar} alt="Profile" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-md font-bold text-slate-800 dark:text-white mt-1.5 truncate">{profile.name}</h3>
          <p className="text-[10px] text-slate-400 truncate mt-0.5">{profile.email}</p>
          <p className="text-[10px] text-slate-400 truncate">{profile.phone}</p>
        </div>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        <div className="p-3 bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 rounded-xl">
          <span className="text-slate-400 block text-[9px] uppercase">Grievances</span>
          <span className="text-sm font-extrabold text-primary mt-1 block">{complaints.length}</span>
        </div>
        <div className="p-3 bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 rounded-xl">
          <span className="text-slate-400 block text-[9px] uppercase">Donated</span>
          <span className="text-sm font-extrabold text-accent mt-1 block">{donations.length}</span>
        </div>
        <div className="p-3 bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 rounded-xl">
          <span className="text-slate-400 block text-[9px] uppercase">Jobs Posted</span>
          <span className="text-sm font-extrabold text-emerald-500 mt-1 block">{jobs.length}</span>
        </div>
      </div>

      {/* Badges Achievements */}
      <div className="p-4 bg-white dark:bg-[#1e1e1e] border border-slate-100 dark:border-neutral-800 rounded-card space-y-2">
        <h4 className="text-[10px] font-bold text-slate-400 uppercase">Achievements & Badges</h4>
        <div className="flex gap-2.5">
          <span className="text-2xl" title="Active Citizen">🛡️</span>
          <span className="text-2xl" title="Verified Volunteer">🤝</span>
          <span className="text-2xl" title="Community Helper">🎁</span>
        </div>
      </div>

      {/* Menu links list */}
      <div className="space-y-2.5 pt-2">
        <button 
          onClick={() => navigate('/profile/edit')}
          className="w-full p-3.5 bg-white dark:bg-[#1e1e1e] border border-slate-100 dark:border-neutral-800 rounded-xl flex items-center justify-between text-xs"
        >
          <div className="flex items-center gap-3">
            <span className="text-slate-400"><User size={16} /></span>
            <span className="font-bold text-slate-700 dark:text-neutral-200">Edit Profile Information</span>
          </div>
          <ChevronRight size={16} className="text-slate-400" />
        </button>

        <button 
          onClick={() => navigate('/settings')}
          className="w-full p-3.5 bg-white dark:bg-[#1e1e1e] border border-slate-100 dark:border-neutral-800 rounded-xl flex items-center justify-between text-xs"
        >
          <div className="flex items-center gap-3">
            <span className="text-slate-400"><SettingsIcon size={16} /></span>
            <span className="font-bold text-slate-700 dark:text-neutral-200">Preferences & Settings</span>
          </div>
          <ChevronRight size={16} className="text-slate-400" />
        </button>
      </div>

      {/* Logout button */}
      <div className="pt-4 pb-2">
        <button 
          onClick={() => navigate('/welcome')}
          className="w-full py-3.5 bg-red-50 dark:bg-red-950/20 border border-red-200/50 dark:border-red-900/30 text-emergency font-bold rounded-btn hover:bg-opacity-95 transition text-xs"
        >
          Log Out Account
        </button>
      </div>
    </div>
  );
};

// ==========================================
// 47. EDIT PROFILE
// ==========================================
export const EditProfileScreen: React.FC = () => {
  const navigate = useNavigate();
  const { profile, updateProfile, language } = useApp();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [phone, setPhone] = useState(profile.phone);
  const [ward, setWard] = useState(profile.ward);
  const [address, setAddress] = useState(profile.address);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({ name, email, phone, ward, address });
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      navigate('/profile');
    }, 1500);
  };

  return (
    <div className="flex-1 bg-white dark:bg-[#121212] p-4 flex flex-col justify-between select-none">
      <div className="flex-1 overflow-y-auto space-y-4 pr-1">
        <div className="flex items-center gap-2 pb-2 border-b dark:border-neutral-800">
          <button 
            onClick={() => navigate('/profile')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <h2 className="text-xl font-extrabold text-slate-800 dark:text-white">
            Edit Profile
          </h2>
        </div>

        {success && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-center text-emerald-700 text-xs font-bold animate-bounce">
            ✓ Profile Saved Successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block text-[10px] font-bold text-slate-400 mb-1 uppercase">Full Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-input text-xs focus:outline-none focus:border-primary text-slate-800 dark:text-white font-medium"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-400 mb-1 uppercase">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-input text-xs focus:outline-none focus:border-primary text-slate-800 dark:text-white font-medium"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-400 mb-1 uppercase">Mobile Coordinate</label>
            <input 
              type="text" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-input text-xs focus:outline-none focus:border-primary text-slate-800 dark:text-white font-medium"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-400 mb-1 uppercase">Selected Ward</label>
            <input 
              type="text" 
              value={ward}
              readOnly
              className="w-full px-4 py-3 bg-slate-100 dark:bg-neutral-950 border border-slate-200 dark:border-neutral-850 rounded-input text-xs text-slate-400 font-semibold cursor-not-allowed"
            />
            <span className="text-[9px] text-slate-400 mt-1 block">To modify your ward, utilize the Ward Switcher in the top App Bar.</span>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-400 mb-1 uppercase">Residential Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full min-h-[70px] p-3 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-2xl focus:outline-none focus:border-primary text-slate-800 dark:text-white resize-none font-medium"
            ></textarea>
          </div>
        </form>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-4 w-full py-4 bg-primary text-white font-bold rounded-btn shadow-md hover:bg-primary-dark transition active:scale-95"
      >
        Save Changes
      </button>
    </div>
  );
};

// ==========================================
// 48. SETTINGS SCREEN
// ==========================================
export const SettingsScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme, setTheme, language, setLanguage, reviewerMode, setReviewerMode } = useApp();
  
  const [notifPush, setNotifPush] = useState(true);
  const [notifEmail, setNotifEmail] = useState(false);

  return (
    <div className="flex-1 bg-slate-50 dark:bg-[#121212] p-4 space-y-4 select-none text-xs">
      <div className="flex items-center gap-2 mb-4">
        <button 
          onClick={() => navigate('/profile')}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-xl font-extrabold text-slate-800 dark:text-white">
          Preferences & Settings
        </h2>
      </div>

      {/* Account category */}
      <div className="p-4 bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 rounded-card space-y-3">
        <h4 className="text-[10px] font-bold text-slate-400 uppercase">App Preferences</h4>
        
        {/* Theme select row */}
        <div className="flex justify-between items-center">
          <div>
            <span className="font-bold text-slate-700 dark:text-neutral-200 block">Dark Theme Mode</span>
            <span className="text-[10px] text-slate-400">Reduce glare and enhance battery efficiency</span>
          </div>
          <button 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className={`w-12 h-6 rounded-full p-0.5 transition-colors relative focus:outline-none ${
              theme === 'dark' ? 'bg-primary' : 'bg-slate-200'
            }`}
          >
            <div className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform flex items-center justify-center ${
              theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
            }`}>
              {theme === 'dark' ? <Moon size={10} className="text-primary" /> : <Sun size={10} className="text-amber-500" />}
            </div>
          </button>
        </div>

        {/* Language select row */}
        <div className="flex justify-between items-center border-t dark:border-neutral-800 pt-3">
          <div>
            <span className="font-bold text-slate-700 dark:text-neutral-200 block">System Language</span>
            <span className="text-[10px] text-slate-400">Choose display language for screen labels</span>
          </div>
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value as any)}
            className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:bg-neutral-950 dark:border-neutral-800 text-xs font-bold text-slate-700 dark:text-white"
          >
            <option value="en">English (US)</option>
            <option value="ta">தமிழ் (Tamil)</option>
          </select>
        </div>
      </div>

      {/* Notifications toggle preferences */}
      <div className="p-4 bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 rounded-card space-y-3">
        <h4 className="text-[10px] font-bold text-slate-400 uppercase">Notifications</h4>

        {/* Push notifications */}
        <div className="flex justify-between items-center">
          <div>
            <span className="font-bold text-slate-700 dark:text-neutral-200 block">Push Notifications</span>
            <span className="text-[10px] text-slate-400">Get alerts for critical rain warnings and SOS dispatches</span>
          </div>
          <button 
            onClick={() => setNotifPush(!notifPush)}
            className={`w-12 h-6 rounded-full p-0.5 transition-colors relative focus:outline-none ${
              notifPush ? 'bg-primary' : 'bg-slate-200'
            }`}
          >
            <div className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
              notifPush ? 'translate-x-6' : 'translate-x-0'
            }`}></div>
          </button>
        </div>

        {/* Email notifications */}
        <div className="flex justify-between items-center border-t dark:border-neutral-800 pt-3">
          <div>
            <span className="font-bold text-slate-700 dark:text-neutral-200 block">Email Newsletters</span>
            <span className="text-[10px] text-slate-400">Receive weekly ward logs and municipal updates</span>
          </div>
          <button 
            onClick={() => setNotifEmail(!notifEmail)}
            className={`w-12 h-6 rounded-full p-0.5 transition-colors relative focus:outline-none ${
              notifEmail ? 'bg-primary' : 'bg-slate-200'
            }`}
          >
            <div className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
              notifEmail ? 'translate-x-6' : 'translate-x-0'
            }`}></div>
          </button>
        </div>
      </div>

      {/* Reviewer utility toggle */}
      <div className="p-4 bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 rounded-card space-y-3">
        <h4 className="text-[10px] font-bold text-slate-400 uppercase">Reviewer Developer Tools</h4>
        <div className="flex justify-between items-center">
          <div>
            <span className="font-bold text-slate-700 dark:text-neutral-200 block">Reviewer Screen Navigator</span>
            <span className="text-[10px] text-slate-400">Enables floating grid overlay list to jump screens directly</span>
          </div>
          <button 
            onClick={() => setReviewerMode(!reviewerMode)}
            className={`w-12 h-6 rounded-full p-0.5 transition-colors relative focus:outline-none ${
              reviewerMode ? 'bg-primary' : 'bg-slate-200'
            }`}
          >
            <div className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
              reviewerMode ? 'translate-x-6' : 'translate-x-0'
            }`}></div>
          </button>
        </div>
      </div>

      {/* Sign out options */}
      <button 
        onClick={() => navigate('/welcome')}
        className="w-full py-3.5 bg-red-50 dark:bg-red-950/20 border border-red-200/50 dark:border-red-900/30 text-emergency font-bold rounded-btn text-xs text-center"
      >
        Sign Out and Clear In-Memory Cache
      </button>
    </div>
  );
};

export const PostRentalScreen: React.FC = () => {
  const navigate = useNavigate();
  const { addRentalListing } = useApp();

  const [title, setTitle] = useState('');
  const [rent, setRent] = useState('₹10,000 / month');
  const [type, setType] = useState('1 BHK Apartment');
  const [location, setLocation] = useState('Avadi North');
  const [owner, setOwner] = useState('Local Resident');
  const [phone, setPhone] = useState('+91 98765 43210');
  const [description, setDescription] = useState('');
  const [amenities, setAmenities] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      addRentalListing({
        title,
        rent,
        type,
        location,
        owner,
        phone,
        images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=400"],
        description,
        amenities: amenities.split(',').map(a => a.trim()).filter(Boolean)
      });
      navigate('/rentals');
    }
  };

  return (
    <div className="flex-1 bg-white dark:bg-[#121212] p-4 flex flex-col select-none">
      <div className="flex items-center gap-2 mb-4">
        <button 
          onClick={() => navigate('/rentals')}
          className="p-1 rounded-full text-slate-400 hover:text-primary transition"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-xs font-bold uppercase tracking-wider">
          Post Rental Listing
        </span>
      </div>
      <p className="text-xs text-slate-400 mb-6 font-medium">Post your house, PG, or flat details for rent in Avadi</p>

      <form onSubmit={handleSubmit} className="flex-1 space-y-4 overflow-y-auto pb-4 pr-1">
        <div>
          <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Property Title</label>
          <input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Semi-furnished 2 BHK Flat"
            className="w-full px-4 py-3 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-input text-xs focus:outline-none focus:border-primary text-slate-800 dark:text-white font-medium"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Rent Price</label>
            <input 
              type="text"
              value={rent}
              onChange={(e) => setRent(e.target.value)}
              placeholder="e.g. ₹12,000 / month"
              className="w-full px-4 py-3 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-input text-xs focus:outline-none focus:border-primary text-slate-800 dark:text-white font-medium"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Property Type</label>
            <input 
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              placeholder="e.g. 2 BHK Apartment"
              className="w-full px-4 py-3 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-input text-xs focus:outline-none focus:border-primary text-slate-800 dark:text-white font-medium"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Location Area</label>
            <input 
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Avadi North"
              className="w-full px-4 py-3 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-input text-xs focus:outline-none focus:border-primary text-slate-800 dark:text-white font-medium"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Contact Number</label>
            <input 
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +91 98765 43210"
              className="w-full px-4 py-3 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-input text-xs focus:outline-none focus:border-primary text-slate-800 dark:text-white font-medium"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Amenities (comma-separated)</label>
          <input 
            type="text"
            value={amenities}
            onChange={(e) => setAmenities(e.target.value)}
            placeholder="e.g. Car Parking, Lift, Security, 24/7 Water"
            className="w-full px-4 py-3 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-input text-xs focus:outline-none focus:border-primary text-slate-800 dark:text-white font-medium"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Description Details</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe property condition, security deposit, EB charges, etc..."
            className="w-full min-h-[90px] p-3 text-xs bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-2xl focus:outline-none focus:border-primary text-slate-800 dark:text-white resize-none"
            required
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full py-4 bg-primary text-white font-bold rounded-btn shadow-md hover:bg-primary-dark transition active:scale-95 mt-4"
        >
          Post Rental Listing
        </button>
      </form>
    </div>
  );
};

