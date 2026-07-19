import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { 
  Smartphone,
  Moon,
  Sun
} from 'lucide-react';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { 
    theme, setTheme, 
    language,
    reviewerMode
  } = useApp();

  const location = useLocation();
  const navigate = useNavigate();
  const [showReviewerPanel, setShowReviewerPanel] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Approved screens for Screens 1-21
  const allScreens = [
    { num: 1, name: "1. Splash Screen", path: "/splash" },
    { num: 2, name: "2. Welcome Screen / Landing Page", path: "/welcome" },
    { num: 3, name: "3. Register - Basic Info", path: "/registration" },
    { num: 4, name: "4. Register - Contact Info", path: "/register/contact" },
    { num: 5, name: "5. Register - Address & Ward", path: "/register/address" },
    { num: 6, name: "6. OTP Verification", path: "/otp" },
    { num: 7, name: "7. Home Dashboard", path: "/home" },
    { num: 8, name: "8. Community Feed", path: "/community-feed" },
    { num: 9, name: "9. Create Post", path: "/community-feed/create" },
    { num: 10, name: "10. Complaints Home", path: "/civic" },
    { num: 11, name: "11. Report Issue - Step 1", path: "/complaints/camera" },
    { num: 12, name: "12. Report Issue - Step 2", path: "/complaints/category-details" },
    { num: 13, name: "13. Issue Submitted", path: "/complaints/submitted" },
    { num: 14, name: "14. My Complaints (v1)", path: "/complaints" },
    { num: 15, name: "15. Emergency SOS (v1)", path: "/sos" },
    { num: 16, name: "16. My Complaints (v2)", path: "/complaints-alt" },
    { num: 17, name: "17. Emergency SOS (v2)", path: "/sos-alt" },
    { num: 18, name: "18. Local Services (v1)", path: "/services" },
    { num: 19, name: "19. Rentals & Jobs (Home v1)", path: "/jobs-rentals" },
    { num: 20, name: "20. Rentals Page (v1)", path: "/rentals" },
    { num: 21, name: "21. Jobs Page", path: "/jobs" },
    { num: 22, name: "22. Jobs Page (Detail)", path: "/jobs/detail" },
    { num: 23, name: "23. Navigation (Drawer)", path: "/drawer" },
    { num: 24, name: "24. Theme Toggle", path: "/theme" },
    { num: 25, name: "25. Choose Language", path: "/language" },
    { num: 26, name: "26. Emergency SOS (v3)", path: "/sos-variant-3" },
    { num: 27, name: "27. Explore Food", path: "/explore-food" },
    { num: 28, name: "28. Local Services (v2)", path: "/services-alt" },
    { num: 29, name: "29. Rentals & Jobs (Home v2)", path: "/jobs-rentals-alt" },
    { num: 30, name: "30. Rentals Page (v2)", path: "/rentals-alt" },
    { num: 31, name: "31. Settings", path: "/settings" },
    { num: 32, name: "32. Notifications", path: "/notifications" },
    { num: 33, name: "33. My Reports", path: "/my-reports" },
    { num: 34, name: "34. Report Details", path: "/complaints/details" },
    { num: 35, name: "35. Emergency Contacts (v2)", path: "/emergency-contacts" },
    { num: 36, name: "36. Community Feed (v2)", path: "/feed-variant-1" },
    { num: 37, name: "37. Home Dashboard (v2)", path: "/home-variant-1" },
    { num: 38, name: "38. Community Feed (v3)", path: "/feed-variant-2" },
    { num: 39, name: "39. Local Services (v3)", path: "/services-variant-3" },
    { num: 40, name: "40. Merchants Page", path: "/merchants" },
    { num: 41, name: "41. Search Results", path: "/search-results" },
    { num: 42, name: "42. Category Filter", path: "/search/category" },
    { num: 43, name: "43. City Filter", path: "/search/city" },
    { num: 44, name: "44. List View Toggle", path: "/search/list-view" },
    { num: 45, name: "45. Map View", path: "/search/map-view" },
    { num: 46, name: "46. Community Feed (v4)", path: "/feed-variant-3" },
    { num: 47, name: "47. Home Dashboard (v3)", path: "/home-variant-2" },
    { num: 48, name: "48. Community Feed (v5)", path: "/feed-variant-4" }
  ];

  // Check if we are on a smaller screen to toggle the frame mockup
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 flex flex-col md:flex-row items-center justify-center p-0 md:p-6 select-none bg-gradient-to-tr ${
      theme === 'dark' 
        ? 'from-[#0d1117] via-[#121212] to-[#161a22]' 
        : 'from-blue-50 via-slate-100 to-indigo-150'
    }`}>
      
      {/* Floating Theme Control (Secondary & Accessible) */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleTheme}
          aria-label={theme === 'light' ? "Switch to Dark Mode" : "Switch to Light Mode"}
          className={`flex items-center gap-2 px-3 py-2 rounded-full border shadow-md font-semibold text-xs transition duration-200 hover:scale-105 active:scale-95 ${
            theme === 'dark' 
              ? 'bg-neutral-900 border-neutral-800 text-amber-400 hover:bg-neutral-800' 
              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          {theme === 'light' ? (
            <>
              <Moon size={14} />
              <span>Dark Theme</span>
            </>
          ) : (
            <>
              <Sun size={14} />
              <span>Light Theme</span>
            </>
          )}
        </button>
      </div>

      {/* Floating Screen Navigator Toggle for Reviewer */}
      {reviewerMode && (
        <div className="fixed top-4 left-4 z-50 hidden md:block">
          <button 
            onClick={() => setShowReviewerPanel(!showReviewerPanel)}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold shadow-lg text-sm transition hover:scale-105"
          >
            <Smartphone size={16} />
            <span>{showReviewerPanel ? "Hide Navigator" : "Show Screens 1-10"}</span>
          </button>
        </div>
      )}

      {/* Slide-out Reviewer Screen Panel */}
      {reviewerMode && showReviewerPanel && (
        <div className={`fixed top-0 left-0 h-full w-72 shadow-2xl z-40 p-4 overflow-y-auto transition-transform border-r ${
          theme === 'dark' 
            ? 'bg-[#181818] border-neutral-800 text-white' 
            : 'bg-white border-slate-200 text-slate-800'
        }`}>
          <div className="flex items-center justify-between border-b pb-3 mb-4">
            <div>
              <h2 className="font-bold text-md text-primary">Avadi Connect</h2>
              <p className="text-[10px] opacity-65">Screens 1-10 locked flow</p>
            </div>
            <button 
              onClick={() => setShowReviewerPanel(false)}
              className="text-[10px] px-2 py-1 bg-slate-200 dark:bg-neutral-800 rounded font-semibold"
            >
              Close
            </button>
          </div>

          <div className="space-y-1">
            {allScreens.map(s => (
              <button
                key={`${s.num}-${s.name}`}
                onClick={() => {
                  if ('forceTheme' in s && s.forceTheme) {
                    setTheme(s.forceTheme as 'light' | 'dark');
                  }
                  navigate(s.path);
                  setShowReviewerPanel(false);
                }}
                className={`w-full text-left text-xs p-2.5 rounded-xl transition flex items-center gap-2.5 ${
                  location.pathname === s.path 
                    ? 'bg-primary text-white font-bold' 
                    : 'hover:bg-slate-100 dark:hover:bg-neutral-800 text-slate-600 dark:text-neutral-300'
                }`}
              >
                <span>{s.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Mockup Container (Strict Viewport: 390 x 844 on desktop, auto-fits mobile viewport) */}
      <div className={`relative w-full h-full md:rounded-[48px] overflow-hidden flex flex-col transition-all duration-300 md:border-[12px] md:shadow-2xl ${
        theme === 'dark' 
          ? 'bg-[#121212] border-neutral-900 shadow-black/80 text-white' 
          : 'bg-[#FAFAFA] border-white shadow-slate-200 text-slate-800'
      }`}
      style={isMobile ? { width: '100%', height: '100dvh' } : { width: '390px', height: '844px' }}>
        
        {/* Android Status Bar */}
        <div className={`h-10 px-6 flex items-center justify-between text-xs z-30 font-medium ${
          theme === 'dark' ? 'bg-transparent text-white/90' : 'bg-transparent text-slate-700'
        }`}>
          <div>9:41</div>
          {/* Notch indicator */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-5 rounded-full bg-black hidden md:block z-50"></div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 fill-current opacity-85" viewBox="0 0 24 24">
              <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L17.61 4.97C16.07 3.74 14.12 3 12 3zm5.03 3.39L4.39 18.03C5.93 19.26 7.88 20 10 20c4.97 0 9-4.03 9-9 0-2.12-.74-4.07-1.97-5.61z" />
            </svg>
            <svg className="w-4.5 h-4.5 fill-current opacity-85" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
            <div className="w-5.5 h-3 border border-current rounded-sm p-0.5 flex items-center">
              <div className="h-full w-4 bg-current rounded-2xs"></div>
            </div>
          </div>
        </div>

        {/* Scrollable Viewport Container for Screens */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden relative flex flex-col">
          {children}
        </div>

        {/* Android Navigation bar pill */}
        <div className={`h-3 flex items-center justify-center pb-1.5 bg-transparent`}>
          <div className={`w-36 h-1 rounded-full ${
            theme === 'dark' ? 'bg-neutral-800' : 'bg-slate-300'
          }`}></div>
        </div>
      </div>
    </div>
  );
};
