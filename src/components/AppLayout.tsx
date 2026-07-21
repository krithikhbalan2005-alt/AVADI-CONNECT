import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Smartphone, Moon, Sun, Grid3X3, X, ChevronLeft } from 'lucide-react';

interface AppLayoutProps {
  children: React.ReactNode;
}

const SCREEN_GROUPS = [
  {
    group: 'Onboarding', icon: 'O',
    screens: [
      { num: 1,  name: 'Splash Screen',        path: '/splash',                      emoji: 'S' },
      { num: 2,  name: 'Welcome',               path: '/welcome',                     emoji: 'W' },
      { num: 3,  name: 'Civic Onboarding',      path: '/onboarding/civic',            emoji: 'C' },
      { num: 4,  name: 'Safety Onboarding',     path: '/onboarding/safety',           emoji: 'S' },
      { num: 5,  name: 'Ward Selection',        path: '/ward-selection',              emoji: 'W' },
      { num: 6,  name: 'Location Permission',   path: '/location-permission',         emoji: 'L' },
      { num: 7,  name: 'Choose Appearance',     path: '/choose-appearance',           emoji: 'A' },
    ]
  },
  {
    group: 'Registration', icon: 'R',
    screens: [
      { num: 8,  name: 'Basic Info',            path: '/registration',                emoji: 'B' },
      { num: 9,  name: 'Contact Info',          path: '/register/contact',            emoji: 'C' },
      { num: 10, name: 'Address & Ward',        path: '/register/address',            emoji: 'A' },
      { num: 11, name: 'Theme Selection',       path: '/register/theme',              emoji: 'T' },
      { num: 12, name: 'OTP Verification',      path: '/otp',                         emoji: 'O' },
    ]
  },
  {
    group: 'Home', icon: 'H',
    screens: [
      { num: 13, name: 'Home Dashboard',        path: '/home',                        emoji: 'H' },
      { num: 14, name: 'Home Variant 2',        path: '/home-variant-1',              emoji: 'H' },
      { num: 15, name: 'Home Variant 3',        path: '/home-variant-2',              emoji: 'H' },
      { num: 16, name: 'Alerts',                path: '/alerts',                      emoji: 'A' },
      { num: 17, name: 'Notifications',         path: '/notifications',               emoji: 'N' },
      { num: 18, name: 'Navigation Drawer',     path: '/drawer',                      emoji: 'D' },
    ]
  },
  {
    group: 'Civic & Complaints', icon: 'C',
    screens: [
      { num: 19, name: 'Complaints Hub',        path: '/civic',                       emoji: 'C' },
      { num: 20, name: 'Report - Step 1',       path: '/complaints/camera',           emoji: 'R' },
      { num: 21, name: 'Report - Step 2',       path: '/complaints/category-details', emoji: 'R' },
      { num: 22, name: 'Issue Submitted',       path: '/complaints/submitted',        emoji: 'S' },
      { num: 23, name: 'My Complaints',         path: '/complaints',                  emoji: 'M' },
      { num: 24, name: 'My Complaints v2',      path: '/complaints-alt',              emoji: 'M' },
      { num: 25, name: 'My Reports',            path: '/my-reports',                  emoji: 'R' },
      { num: 26, name: 'Report Details',        path: '/complaints/details',          emoji: 'D' },
    ]
  },
  {
    group: 'Community', icon: 'F',
    screens: [
      { num: 27, name: 'Community Feed',        path: '/community-feed',              emoji: 'F' },
      { num: 28, name: 'Feed Variant 2',        path: '/feed-variant-1',              emoji: 'F' },
      { num: 29, name: 'Feed Variant 3',        path: '/feed-variant-2',              emoji: 'F' },
      { num: 30, name: 'Feed Variant 4',        path: '/feed-variant-3',              emoji: 'F' },
      { num: 31, name: 'Feed Variant 5',        path: '/feed-variant-4',              emoji: 'F' },
      { num: 32, name: 'Create Post',           path: '/community-feed/create',       emoji: 'P' },
    ]
  },
  {
    group: 'Explore & Services', icon: 'E',
    screens: [
      { num: 33, name: 'Explore Directory',     path: '/explore',                     emoji: 'E' },
      { num: 34, name: 'Explore Places',        path: '/explore-places',              emoji: 'P' },
      { num: 35, name: 'Explore Food',          path: '/explore-food',                emoji: 'F' },
      { num: 36, name: 'Local Services',        path: '/services',                    emoji: 'S' },
      { num: 37, name: 'Services Variant 2',    path: '/services-alt',                emoji: 'S' },
      { num: 38, name: 'Services Variant 3',    path: '/services-variant-3',          emoji: 'S' },
      { num: 39, name: 'Merchants',             path: '/merchants',                   emoji: 'M' },
      { num: 40, name: 'Govt Schemes',          path: '/schemes',                     emoji: 'G' },
      { num: 41, name: 'Jobs & Rentals',        path: '/jobs-rentals',                emoji: 'J' },
      { num: 42, name: 'Jobs & Rentals v2',     path: '/jobs-rentals-alt',            emoji: 'J' },
      { num: 43, name: 'Rentals',               path: '/rentals',                     emoji: 'R' },
      { num: 44, name: 'Rentals Variant 2',     path: '/rentals-alt',                 emoji: 'R' },
      { num: 45, name: 'Jobs',                  path: '/jobs',                        emoji: 'J' },
      { num: 46, name: 'Job Detail',            path: '/jobs/detail',                 emoji: 'D' },
    ]
  },
  {
    group: 'Search', icon: 'S',
    screens: [
      { num: 47, name: 'Search Results',        path: '/search-results',              emoji: 'S' },
      { num: 48, name: 'Category Filter',       path: '/search/category',             emoji: 'C' },
      { num: 49, name: 'City Filter',           path: '/search/city',                 emoji: 'C' },
      { num: 50, name: 'List View',             path: '/search/list-view',            emoji: 'L' },
      { num: 51, name: 'Map View',              path: '/search/map-view',             emoji: 'M' },
    ]
  },
  {
    group: 'Emergency', icon: '!',
    screens: [
      { num: 52, name: 'Emergency SOS',         path: '/sos',                         emoji: 'S' },
      { num: 53, name: 'SOS Variant 2',         path: '/sos-alt',                     emoji: 'S' },
      { num: 54, name: 'SOS Variant 3',         path: '/sos-variant-3',               emoji: 'S' },
      { num: 55, name: 'Emergency Contacts',    path: '/emergency-contacts',          emoji: 'E' },
    ]
  },
  {
    group: 'Settings & Profile', icon: 'G',
    screens: [
      { num: 56, name: 'Settings',              path: '/settings',                    emoji: 'S' },
      { num: 57, name: 'Profile',               path: '/profile',                     emoji: 'P' },
      { num: 58, name: 'Theme Toggle',          path: '/theme',                       emoji: 'T' },
      { num: 59, name: 'Language',              path: '/language',                    emoji: 'L' },
    ]
  },
];

// Icon components for screen cards
const SCREEN_ICONS: Record<string, React.FC<{isDark: boolean; isActive: boolean}>> = {
  'Splash Screen':       ({isActive}) => <div className={`w-8 h-8 rounded-full ${isActive ? 'bg-indigo-400' : 'bg-gradient-to-br from-indigo-400 to-violet-500'} flex items-center justify-center text-white text-xs font-black`}>AC</div>,
  'Welcome':             ({isActive}) => <div className={`text-xl ${isActive ? 'text-indigo-400' : ''}`}>👋</div>,
  'Civic Onboarding':    () => <div className="text-xl">🏛️</div>,
  'Safety Onboarding':   () => <div className="text-xl">🛡️</div>,
  'Ward Selection':      () => <div className="text-xl">📍</div>,
  'Location Permission': () => <div className="text-xl">📡</div>,
  'Choose Appearance':   () => <div className="text-xl">🎨</div>,
  'Basic Info':          () => <div className="text-xl">👤</div>,
  'Contact Info':        () => <div className="text-xl">📧</div>,
  'Address & Ward':      () => <div className="text-xl">🏠</div>,
  'Theme Selection':     () => <div className="text-xl">🎨</div>,
  'OTP Verification':    () => <div className="text-xl">🔑</div>,
  'Home Dashboard':      () => <div className="text-xl">🏠</div>,
  'Home Variant 2':      () => <div className="text-xl">🏠</div>,
  'Home Variant 3':      () => <div className="text-xl">🏠</div>,
  'Alerts':              () => <div className="text-xl">🔔</div>,
  'Notifications':       () => <div className="text-xl">📬</div>,
  'Navigation Drawer':   () => <div className="text-xl">☰</div>,
  'Complaints Hub':      () => <div className="text-xl">📋</div>,
  'Report - Step 1':     () => <div className="text-xl">📷</div>,
  'Report - Step 2':     () => <div className="text-xl">📝</div>,
  'Issue Submitted':     () => <div className="text-xl">✅</div>,
  'My Complaints':       () => <div className="text-xl">🗂️</div>,
  'My Complaints v2':    () => <div className="text-xl">🗂️</div>,
  'My Reports':          () => <div className="text-xl">📄</div>,
  'Report Details':      () => <div className="text-xl">🔍</div>,
  'Community Feed':      () => <div className="text-xl">💬</div>,
  'Feed Variant 2':      () => <div className="text-xl">💬</div>,
  'Feed Variant 3':      () => <div className="text-xl">💬</div>,
  'Feed Variant 4':      () => <div className="text-xl">💬</div>,
  'Feed Variant 5':      () => <div className="text-xl">💬</div>,
  'Create Post':         () => <div className="text-xl">✏️</div>,
  'Explore Directory':   () => <div className="text-xl">🧭</div>,
  'Explore Places':      () => <div className="text-xl">🌳</div>,
  'Explore Food':        () => <div className="text-xl">🍲</div>,
  'Local Services':      () => <div className="text-xl">🤝</div>,
  'Services Variant 2':  () => <div className="text-xl">🤝</div>,
  'Services Variant 3':  () => <div className="text-xl">🤝</div>,
  'Merchants':           () => <div className="text-xl">🏪</div>,
  'Govt Schemes':        () => <div className="text-xl">📜</div>,
  'Jobs & Rentals':      () => <div className="text-xl">💼</div>,
  'Jobs & Rentals v2':   () => <div className="text-xl">💼</div>,
  'Rentals':             () => <div className="text-xl">🏢</div>,
  'Rentals Variant 2':   () => <div className="text-xl">🏢</div>,
  'Jobs':                () => <div className="text-xl">💼</div>,
  'Job Detail':          () => <div className="text-xl">📋</div>,
  'Search Results':      () => <div className="text-xl">🔍</div>,
  'Category Filter':     () => <div className="text-xl">🏷️</div>,
  'City Filter':         () => <div className="text-xl">🌆</div>,
  'List View':           () => <div className="text-xl">📋</div>,
  'Map View':            () => <div className="text-xl">🗺️</div>,
  'Emergency SOS':       () => <div className="text-xl">🆘</div>,
  'SOS Variant 2':       () => <div className="text-xl">🆘</div>,
  'SOS Variant 3':       () => <div className="text-xl">🆘</div>,
  'Emergency Contacts':  () => <div className="text-xl">📞</div>,
  'Settings':            () => <div className="text-xl">⚙️</div>,
  'Profile':             () => <div className="text-xl">👤</div>,
  'Theme Toggle':        () => <div className="text-xl">🌙</div>,
  'Language':            () => <div className="text-xl">🌐</div>,
};

const GROUP_COLORS: Record<string, string> = {
  'Onboarding':          'from-violet-500 to-indigo-600',
  'Registration':        'from-blue-500 to-cyan-600',
  'Home':                'from-emerald-500 to-teal-600',
  'Civic & Complaints':  'from-red-500 to-rose-600',
  'Community':           'from-amber-500 to-orange-600',
  'Explore & Services':  'from-teal-500 to-emerald-600',
  'Search':              'from-sky-500 to-blue-600',
  'Emergency':           'from-red-600 to-red-700',
  'Settings & Profile':  'from-slate-500 to-gray-600',
};

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { theme, setTheme, reviewerMode } = useApp();
  const location = useLocation();
  const navigate = useNavigate();
  const [showAllScreens, setShowAllScreens] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  const totalScreens = SCREEN_GROUPS.reduce((sum, g) => sum + g.screens.length, 0);

  if (showAllScreens) {
    return (
      <div className={`min-h-screen w-full overflow-y-auto ${theme === 'dark' ? 'bg-[#0d1117] text-white' : 'bg-slate-50 text-slate-800'}`}>

        {/* Sticky Header */}
        <div className={`sticky top-0 z-50 border-b backdrop-blur-md ${theme === 'dark' ? 'bg-[#0d1117]/95 border-neutral-800' : 'bg-white/95 border-slate-200'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowAllScreens(false)}
                className={`p-2 rounded-xl border transition-all hover:scale-105 active:scale-95 ${theme === 'dark' ? 'bg-neutral-900 border-neutral-800 text-white hover:bg-neutral-800' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'}`}
              >
                <ChevronLeft size={18} />
              </button>
              <div>
                <h1 className="font-black text-sm sm:text-base bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                  Avadi Connect
                </h1>
                <p className={`text-[10px] font-semibold ${theme === 'dark' ? 'text-neutral-500' : 'text-slate-400'}`}>
                  {totalScreens} screens &bull; All application flows
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition hover:scale-105 ${theme === 'dark' ? 'bg-neutral-900 border-neutral-800 text-amber-400' : 'bg-white border-slate-200 text-slate-700'}`}
              >
                {theme === 'light' ? <Moon size={12} /> : <Sun size={12} />}
                <span className="hidden sm:inline">{theme === 'light' ? 'Dark' : 'Light'}</span>
              </button>
              <button
                onClick={() => setShowAllScreens(false)}
                className={`p-2 rounded-xl border transition hover:scale-105 ${theme === 'dark' ? 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:bg-neutral-800' : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'}`}
              >
                <X size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Screen Groups */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8 sm:space-y-10">
          {SCREEN_GROUPS.map((group) => {
            const gradient = GROUP_COLORS[group.group] || 'from-slate-400 to-slate-600';
            return (
              <section key={group.group}>
                {/* Group Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-[10px] font-black shrink-0`}>
                    {group.icon}
                  </div>
                  <h2 className={`text-xs sm:text-sm font-black uppercase tracking-wider ${theme === 'dark' ? 'text-neutral-400' : 'text-slate-500'}`}>
                    {group.group}
                  </h2>
                  <div className={`flex-1 h-px ${theme === 'dark' ? 'bg-neutral-800' : 'bg-slate-200'}`} />
                  <span className={`text-[9px] font-black px-2 py-0.5 rounded-full ${theme === 'dark' ? 'bg-neutral-800 text-neutral-500' : 'bg-slate-100 text-slate-400'}`}>
                    {group.screens.length}
                  </span>
                </div>

                {/* Responsive Screen Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
                  {group.screens.map((screen) => {
                    const isActive = location.pathname === screen.path;
                    const IconComp = SCREEN_ICONS[screen.name];
                    return (
                      <button
                        key={screen.path}
                        onClick={() => { navigate(screen.path); setShowAllScreens(false); }}
                        className={`group flex flex-col rounded-2xl border transition-all duration-200 hover:scale-[1.03] hover:shadow-lg overflow-hidden text-left ${
                          isActive
                            ? 'border-indigo-500 ring-2 ring-indigo-500/25 shadow-md shadow-indigo-500/10'
                            : theme === 'dark'
                              ? 'border-neutral-800 bg-[#181818] hover:border-neutral-600 hover:shadow-black/30'
                              : 'border-slate-200 bg-white hover:border-indigo-300 shadow-sm'
                        }`}
                      >
                        {/* Phone Preview Area */}
                        <div className={`w-full aspect-[9/15] flex items-center justify-center relative overflow-hidden ${
                          isActive
                            ? 'bg-gradient-to-br from-indigo-500/10 via-violet-500/5 to-transparent'
                            : theme === 'dark'
                              ? 'bg-neutral-900'
                              : 'bg-gradient-to-br from-slate-50 to-slate-100'
                        }`}>
                          {/* Phone outline */}
                          <div className={`w-[52px] h-[88px] rounded-[14px] border-2 flex flex-col items-center justify-center gap-1 relative shadow-sm ${
                            isActive
                              ? 'border-indigo-400 bg-indigo-50 dark:bg-indigo-950/30'
                              : theme === 'dark'
                                ? 'border-neutral-700 bg-neutral-800'
                                : 'border-slate-300 bg-white'
                          }`}>
                            {/* Notch */}
                            <div className={`absolute top-1.5 w-5 h-[3px] rounded-full ${isActive ? 'bg-indigo-300' : theme === 'dark' ? 'bg-neutral-600' : 'bg-slate-300'}`} />
                            {/* Screen icon */}
                            <div className="mt-3 flex items-center justify-center">
                              {IconComp
                                ? <IconComp isDark={theme === 'dark'} isActive={isActive} />
                                : <span className="text-xs font-black text-slate-400">{screen.emoji}</span>
                              }
                            </div>
                            {/* 3 line shimmer */}
                            <div className="space-y-0.5 w-7 px-0.5">
                              <div className={`h-[2px] rounded-full w-full ${theme === 'dark' ? 'bg-neutral-700' : 'bg-slate-200'}`} />
                              <div className={`h-[2px] rounded-full w-4/5 ${theme === 'dark' ? 'bg-neutral-700' : 'bg-slate-200'}`} />
                            </div>
                            {/* Home bar */}
                            <div className={`absolute bottom-1.5 w-4 h-[3px] rounded-full ${isActive ? 'bg-indigo-300' : theme === 'dark' ? 'bg-neutral-600' : 'bg-slate-300'}`} />
                          </div>

                          {/* Active dot indicator */}
                          {isActive && (
                            <div className="absolute top-2 right-2 flex items-center gap-0.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                            </div>
                          )}
                        </div>

                        {/* Card Label */}
                        <div className={`px-2.5 py-2 border-t flex-1 ${theme === 'dark' ? 'border-neutral-800' : 'border-slate-100'}`}>
                          <p className={`text-[7.5px] font-black uppercase tracking-wider mb-0.5 ${isActive ? 'text-indigo-500' : theme === 'dark' ? 'text-neutral-600' : 'text-slate-400'}`}>
                            #{screen.num}
                          </p>
                          <p className={`text-[9.5px] sm:text-[10px] font-bold leading-snug ${isActive ? 'text-indigo-600 dark:text-indigo-400' : theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                            {screen.name}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        {/* Footer */}
        <div className={`border-t mt-4 py-5 text-center ${theme === 'dark' ? 'border-neutral-800' : 'border-slate-200'}`}>
          <p className={`text-[10px] font-semibold ${theme === 'dark' ? 'text-neutral-700' : 'text-slate-400'}`}>
            Avadi Connect &bull; {totalScreens} Screens &bull; Reviewer Mode &bull; Click any screen to preview
          </p>
        </div>
      </div>
    );
  }

  // ─── Normal Phone Mockup Shell ────────────────────────────────────────────
  return (
    <div className={`min-h-screen transition-colors duration-300 flex flex-col md:flex-row items-center justify-center p-0 md:p-6 select-none bg-gradient-to-tr ${
      theme === 'dark'
        ? 'from-[#0d1117] via-[#121212] to-[#161a22]'
        : 'from-blue-50 via-slate-100 to-indigo-150'
    }`}>

      {/* Floating Theme Toggle – top right */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleTheme}
          aria-label={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          className={`flex items-center gap-2 px-3 py-2 rounded-full border shadow-md font-semibold text-xs transition duration-200 hover:scale-105 active:scale-95 ${
            theme === 'dark'
              ? 'bg-neutral-900 border-neutral-800 text-amber-400 hover:bg-neutral-800'
              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          {theme === 'light' ? <><Moon size={14} /><span>Dark</span></> : <><Sun size={14} /><span>Light</span></>}
        </button>
      </div>

      {/* Show All Screens button – desktop only, reviewer mode only */}
      {reviewerMode && (
        <div className="fixed top-4 left-4 z-50 hidden md:block">
          <button
            onClick={() => setShowAllScreens(true)}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-full font-semibold shadow-lg text-sm transition hover:scale-105 hover:shadow-xl active:scale-95"
          >
            <Grid3X3 size={15} />
            <span>Show All Screens</span>
          </button>
        </div>
      )}

      {/* Phone Mockup Container */}
      <div
        className={`relative w-full h-full md:rounded-[48px] overflow-hidden flex flex-col transition-all duration-300 md:border-[12px] md:shadow-2xl ${
          theme === 'dark'
            ? 'bg-[#121212] border-neutral-900 shadow-black/80 text-white'
            : 'bg-[#FAFAFA] border-white shadow-slate-200 text-slate-800'
        }`}
        style={isMobile ? { width: '100%', height: '100dvh' } : { width: '340px', height: '700px' }}
      >
        {/* Android Status Bar */}
        <div className={`h-10 px-6 flex items-center justify-between text-xs z-30 font-medium shrink-0 ${
          theme === 'dark' ? 'bg-transparent text-white/90' : 'bg-transparent text-slate-700'
        }`}>
          <div>9:41</div>
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-5 rounded-full bg-black hidden md:block z-50" />
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 fill-current opacity-80" viewBox="0 0 24 24">
              <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L17.61 4.97C16.07 3.74 14.12 3 12 3zm5.03 3.39L4.39 18.03C5.93 19.26 7.88 20 10 20c4.97 0 9-4.03 9-9 0-2.12-.74-4.07-1.97-5.61z" />
            </svg>
            <svg className="w-4 h-4 fill-current opacity-80" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
            <div className="w-5 h-3 border border-current rounded-sm p-0.5 flex items-center">
              <div className="h-full w-3.5 bg-current rounded-sm" />
            </div>
          </div>
        </div>

        {/* Scrollable Screen Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden relative flex flex-col">
          {children}
        </div>

        {/* Android Navigation Pill */}
        <div className="h-3 shrink-0 flex items-center justify-center pb-1">
          <div className={`w-36 h-1 rounded-full ${theme === 'dark' ? 'bg-neutral-800' : 'bg-slate-300'}`} />
        </div>
      </div>

      {/* Mobile: floating All Screens trigger (reviewer mode only) */}
      {reviewerMode && isMobile && (
        <button
          onClick={() => setShowAllScreens(true)}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-full font-semibold shadow-2xl text-sm transition hover:scale-105 active:scale-95"
        >
          <Smartphone size={15} />
          <span>All Screens</span>
        </button>
      )}
    </div>
  );
};
