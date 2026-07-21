import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { 
  ChevronLeft, 
  MapPin, 
  ShieldAlert, 
  Layers, 
  Sun, 
  Moon
} from 'lucide-react';

// ONBOARDING SCREEN 1: CIVIC HUB
export const OnboardingCivicScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none h-full ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Header Spacer */}
      <div className="h-8" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center text-[#4A3AFF] border border-indigo-100 dark:border-indigo-900/60 shadow-md">
          <Layers size={40} className="animate-pulse" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-extrabold tracking-tight">Civic Hub & Reports</h2>
          <p className="text-xs text-slate-400 dark:text-neutral-400 font-semibold leading-relaxed max-w-[280px] mx-auto">
            Report local issues like potholes, streetlights, or garbage pileups directly to Avadi Municipal Corporation.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="w-full space-y-3 pt-4 max-w-[280px]">
          <div className="flex items-center gap-3 text-left p-3 rounded-2xl bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 shadow-3xs">
            <span className="text-lg">📢</span>
            <div>
              <h4 className="text-[10px] font-black leading-tight">Instant Submissions</h4>
              <p className="text-[8.5px] text-slate-400 dark:text-neutral-500 font-medium">Upload photo and submit under 60 seconds</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-left p-3 rounded-2xl bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 shadow-3xs">
            <span className="text-lg">📍</span>
            <div>
              <h4 className="text-[10px] font-black leading-tight">Live Progress Tracking</h4>
              <p className="text-[8.5px] text-slate-400 dark:text-neutral-500 font-medium">Get notifications as authorities resolve complaints</p>
            </div>
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
          onClick={() => navigate('/onboarding/safety')}
          className="flex-1 py-3.5 bg-[#4A3AFF] hover:bg-[#3b2ecc] text-white font-bold rounded-btn text-xs uppercase tracking-wider text-center shadow-md active:scale-95 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

// ONBOARDING SCREEN 2: SAFETY & EMERGENCY SOS
export const OnboardingSafetyScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none h-full ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Header Back */}
      <div className="h-8 flex items-center">
        <button 
          onClick={() => navigate('/onboarding/civic')}
          className="p-1 rounded-full text-slate-400 hover:text-[#4A3AFF] transition"
        >
          <ChevronLeft size={20} />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-red-50 dark:bg-red-950/40 flex items-center justify-center text-red-500 border border-red-100 dark:border-red-900/60 shadow-md">
          <ShieldAlert size={40} className="animate-bounce" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-extrabold tracking-tight">Safety & SOS Alerts</h2>
          <p className="text-xs text-slate-400 dark:text-neutral-400 font-semibold leading-relaxed max-w-[280px] mx-auto">
            Stay protected with immediate SOS broadcasting, municipal alerts, and public warnings tailored to your area.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="w-full space-y-3 pt-4 max-w-[280px]">
          <div className="flex items-center gap-3 text-left p-3 rounded-2xl bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 shadow-3xs">
            <span className="text-lg">🚨</span>
            <div>
              <h4 className="text-[10px] font-black leading-tight">One-Tap Emergency</h4>
              <p className="text-[8.5px] text-slate-400 dark:text-neutral-500 font-medium">Dispatches location to pre-selected contacts</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-left p-3 rounded-2xl bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 shadow-3xs">
            <span className="text-lg">🌧️</span>
            <div>
              <h4 className="text-[10px] font-black leading-tight">Weather & Grid Warnings</h4>
              <p className="text-[8.5px] text-slate-400 dark:text-neutral-500 font-medium">Critical advisories sent directly to your screen</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => navigate('/onboarding/civic')}
          className={`flex-1 py-3.5 font-bold rounded-btn text-xs uppercase tracking-wider text-center border ${
            theme === 'dark'
              ? 'bg-transparent border-neutral-800 text-[#4A3AFF]'
              : 'bg-white border-slate-200 text-[#4A3AFF]'
          }`}
        >
          Back
        </button>
        <button
          onClick={() => navigate('/ward-selection')}
          className="flex-1 py-3.5 bg-[#4A3AFF] hover:bg-[#3b2ecc] text-white font-bold rounded-btn text-xs uppercase tracking-wider text-center shadow-md active:scale-95 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

// ONBOARDING SCREEN 3: WARD SELECTION
export const WardSelectionScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme, selectedWard, setSelectedWard } = useApp();

  const mockWards = [
    { id: '1', name: 'Ward 1 Avadi North', area: 'Avadi North' },
    { id: '2', name: 'Ward 2 Avadi South', area: 'Avadi South' },
    { id: '3', name: 'Ward 3 Avadi East', area: 'Avadi East' },
    { id: '4', name: 'Ward 4 Avadi West', area: 'Avadi West' },
  ];

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none h-full ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Header Back */}
      <div className="h-8 flex items-center">
        <button 
          onClick={() => navigate('/onboarding/safety')}
          className="p-1 rounded-full text-slate-400 hover:text-[#4A3AFF] transition"
        >
          <ChevronLeft size={20} />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-start pt-4 space-y-4 text-left">
        <div>
          <h2 className="text-xl font-extrabold tracking-tight">Select Ward Residency</h2>
          <p className="text-xs text-slate-400 dark:text-neutral-400 font-semibold leading-relaxed mt-1.5">
            Your ward placement shapes which alerts, notices, and directory details display on your dashboard.
          </p>
        </div>

        {/* Wards List Grid */}
        <div className="grid grid-cols-2 gap-3 pt-3 overflow-y-auto max-h-[340px]">
          {mockWards.map((w) => {
            const isSelected = selectedWard.includes(w.name) || selectedWard === w.name;
            return (
              <button
                key={w.id}
                type="button"
                onClick={() => setSelectedWard(w.name)}
                className={`p-4 rounded-2xl border text-left flex flex-col justify-between h-24 transition-all duration-200 shadow-3xs active:scale-95 touch-target ${
                  isSelected
                    ? 'border-[#4A3AFF] bg-[#4A3AFF]/5 dark:bg-[#4A3AFF]/10 ring-1 ring-[#4A3AFF]'
                    : theme === 'dark' 
                      ? 'bg-neutral-900 border-neutral-800 hover:bg-neutral-800/60' 
                      : 'bg-white border-slate-100 hover:bg-slate-50'
                }`}
              >
                <div className="flex justify-between items-center w-full">
                  <span className="text-[10px] font-black uppercase text-[#4A3AFF] tracking-wider">Avadi MC</span>
                  {isSelected && <span className="text-xs text-[#4A3AFF]">✔</span>}
                </div>
                <div>
                  <h4 className="text-[11px] font-black leading-snug">{w.name}</h4>
                  <p className="text-[8.5px] text-slate-400 dark:text-neutral-500 font-bold mt-0.5">{w.area}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => navigate('/onboarding/safety')}
          className={`flex-1 py-3.5 font-bold rounded-btn text-xs uppercase tracking-wider text-center border ${
            theme === 'dark'
              ? 'bg-transparent border-neutral-800 text-[#4A3AFF]'
              : 'bg-white border-slate-200 text-[#4A3AFF]'
          }`}
        >
          Back
        </button>
        <button
          onClick={() => navigate('/registration')}
          className="flex-1 py-3.5 bg-[#4A3AFF] hover:bg-[#3b2ecc] text-white font-bold rounded-btn text-xs uppercase tracking-wider text-center shadow-md active:scale-95 transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

// ONBOARDING SCREEN 4: LOCATION PERMISSION
export const LocationPermissionScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none h-full ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Header Back */}
      <div className="h-8 flex items-center">
        <button 
          onClick={() => navigate('/otp')}
          className="p-1 rounded-full text-slate-400 hover:text-[#4A3AFF] transition"
        >
          <ChevronLeft size={20} />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center text-[#4A3AFF] border border-indigo-100 dark:border-indigo-900/60 shadow-md">
          <MapPin size={40} className="animate-bounce" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-extrabold tracking-tight">Enable Location</h2>
          <p className="text-xs text-slate-400 dark:text-neutral-400 font-semibold leading-relaxed max-w-[280px] mx-auto">
            Avadi Connect needs your permission to access device GPS to auto-detect nearby hazards, municipal works, and localized services.
          </p>
        </div>

        {/* Informative alert box */}
        <div className="p-3.5 rounded-2xl bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 shadow-3xs max-w-[280px] text-left flex items-start gap-3">
          <span className="text-md mt-0.5">ℹ</span>
          <p className="text-[9px] text-slate-450 dark:text-neutral-450 font-bold leading-relaxed">
            Your location is processed locally to map civic issues and is never shared or stored with third-party tracking services.
          </p>
        </div>
      </div>

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
          onClick={() => navigate('/choose-appearance')}
          className="flex-1 py-3.5 bg-[#4A3AFF] hover:bg-[#3b2ecc] text-white font-bold rounded-btn text-xs uppercase tracking-wider text-center shadow-md active:scale-95 transition"
        >
          Allow Location
        </button>
      </div>
    </div>
  );
};

// ONBOARDING SCREEN 5: CHOOSE APPEARANCE
export const ChooseAppearanceScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useApp();

  return (
    <div className={`flex-grow flex flex-col justify-between p-6 select-none h-full ${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Header Back */}
      <div className="h-8 flex items-center">
        <button 
          onClick={() => navigate('/location-permission')}
          className="p-1 rounded-full text-slate-400 hover:text-[#4A3AFF] transition"
        >
          <ChevronLeft size={20} />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-start pt-4 space-y-5 text-left">
        <div>
          <h2 className="text-xl font-extrabold tracking-tight">Choose Appearance</h2>
          <p className="text-xs text-slate-400 dark:text-neutral-400 font-semibold leading-relaxed mt-1.5">
            Select your preferred visual style for Avadi Connect. You can toggle this any time in Settings.
          </p>
        </div>

        {/* Theme Toggles */}
        <div className="grid grid-cols-2 gap-4 pt-4">
          {/* Light Mode option */}
          <button
            type="button"
            onClick={() => setTheme('light')}
            className={`p-5 rounded-2xl border flex flex-col items-center justify-center gap-3 transition-all duration-200 shadow-3xs touch-target ${
              theme === 'light'
                ? 'border-[#4A3AFF] bg-[#4A3AFF]/5 ring-1 ring-[#4A3AFF] text-slate-800'
                : 'bg-white border-slate-100 text-slate-450 hover:bg-slate-50'
            }`}
          >
            <Sun size={28} className={theme === 'light' ? 'text-[#4A3AFF]' : ''} />
            <span className="text-[10px] font-black uppercase tracking-wider">Light Mode</span>
          </button>

          {/* Dark Mode option */}
          <button
            type="button"
            onClick={() => setTheme('dark')}
            className={`p-5 rounded-2xl border flex flex-col items-center justify-center gap-3 transition-all duration-200 shadow-3xs touch-target ${
              theme === 'dark'
                ? 'border-[#4A3AFF] bg-[#4A3AFF]/10 ring-1 ring-[#4A3AFF] text-white'
                : 'bg-white border-slate-100 text-slate-450 hover:bg-slate-50'
            }`}
          >
            <Moon size={28} className={theme === 'dark' ? 'text-[#4A3AFF]' : ''} />
            <span className="text-[10px] font-black uppercase tracking-wider">Dark Mode</span>
          </button>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => navigate('/location-permission')}
          className={`flex-1 py-3.5 font-bold rounded-btn text-xs uppercase tracking-wider text-center border ${
            theme === 'dark'
              ? 'bg-transparent border-neutral-800 text-[#4A3AFF]'
              : 'bg-white border-slate-200 text-[#4A3AFF]'
          }`}
        >
          Back
        </button>
        <button
          onClick={() => navigate('/home')}
          className="flex-1 py-3.5 bg-[#4A3AFF] hover:bg-[#3b2ecc] text-white font-bold rounded-btn text-xs uppercase tracking-wider text-center shadow-md active:scale-95 transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
};
