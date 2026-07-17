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
    { num: 2, name: "2. Welcome Screen", path: "/welcome" },
    { num: 3, name: "3. Onboarding Civic", path: "/onboarding/civic" },
    { num: 4, name: "4. Onboarding Safety", path: "/onboarding/safety" },
    { num: 5, name: "5. Ward Selection", path: "/ward-selection" },
    { num: 6, name: "6. Registration", path: "/registration" },
    { num: 7, name: "7. OTP Verification", path: "/otp" },
    { num: 8, name: "8. Location Permission", path: "/location-permission" },
    { num: 'Opt', name: "Appearance Selection", path: "/choose-appearance" },
    { num: 9, name: "9. Home Dashboard (Light)", path: "/home", forceTheme: 'light' },
    { num: 10, name: "10. Home Dashboard (Dark)", path: "/home", forceTheme: 'dark' },
    {num: 11, name: "11. Community Feed", path: "/community-feed" },
    { num: 12, name: "12. Notices & Announcements", path: "/notifications" },
    { num: 13, name: "13. Report Issue - Step 1", path: "/complaints/camera" },
    { num: 14, name: "14. Report Issue - Step 2", path: "/complaints/category-details" },
    { num: 15, name: "15. Issue Submitted", path: "/complaints/submitted" },
    { num: 16, name: "16. My Reported", path: "/complaints" },
    { num: 17, name: "17. SOS Emergency", path: "/sos" },
    { num: 18, name: "18. Recent Alerts", path: "/alerts" },
    { num: 19, name: "19. Service Directory", path: "/services" },
    { num: 20, name: "20. Live Updates", path: "/live-updates" },
    { num: 21, name: "21. Language Selection", path: "/language-selection" },
    { num: 22, name: "22. Complaint Camera", path: "/complaints/camera" },
    { num: 23, name: "23. Complaint Detail", path: "/complaints/comp_1" },
    { num: 24, name: "24. Explore Hub", path: "/explore" },
    { num: 25, name: "25. Places List", path: "/places" },
    { num: 31, name: "31. Transport Hub", path: "/transport" },
    { num: 32, name: "32. Transit Schedules", path: "/transport/detail" },
    { num: 33, name: "33. Community Hub", path: "/community" },
    { num: 34, name: "34. Volunteer Register", path: "/volunteer/register" },
    { num: 35, name: "35. Volunteer Directory", path: "/volunteers" },
    { num: 36, name: "36. Donations List", path: "/donations" },
    { num: 37, name: "37. Donation Detail", path: "/donations/1" },
    { num: 38, name: "38. Post Donation Request", path: "/donations/create" },
    { num: 39, name: "39. Blood Request Form", path: "/blood-request/create" },
    { num: 40, name: "40. Blood Broadcast Detail", path: "/blood-request/1" },
    { num: 41, name: "41. Jobs & Rentals Hub", path: "/jobs-rentals" },
    { num: 42, name: "42. Rental Listings", path: "/rentals" },
    { num: 43, name: "43. Rental Detail", path: "/rentals/1" },
    { num: 44, name: "44. Job Listings", path: "/jobs" },
    { num: 45, name: "45. Job Detail & Post", path: "/jobs/detail-and-post" },
    { num: 46, name: "46. Profile Overview", path: "/profile" },
    { num: 47, name: "47. Edit Profile", path: "/profile/edit" },
    { num: 48, name: "48. Settings", path: "/settings" },
    { num: 'New', name: "Global Search", path: "/search" },
    { num: 'New', name: "Civic Hub", path: "/civic" },
    { num: 'New', name: "Place Detail", path: "/places/1" },
    { num: 'New', name: "Provider Detail", path: "/services/gov1" },
    { num: 'New', name: "Food & Dining List", path: "/food" },
    { num: 'New', name: "Food Vendor Detail", path: "/food/1" },
    { num: 'New', name: "Alert Detail", path: "/alerts/1" },
    { num: 'New', name: "Emergency Contact Detail", path: "/emergency-contact/1" },
    { num: 'New', name: "Community Post Create", path: "/community-feed/create" },
    { num: 'New', name: "Community Post Detail", path: "/community-feed/post/1" }
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
