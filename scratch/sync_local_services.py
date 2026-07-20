import re
import os

target_file = os.path.join(os.path.dirname(__file__), '..', 'src', 'screens', 'Module2.tsx')
with open(target_file, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Replace LocalServicesScreenVariant
services_regex = re.compile(r'export\s+const\s+LocalServicesScreenVariant:\s*React\.FC[\s\S]*?(?=export\s+const\s+RentalsJobsHomeScreenVariant)')

services_replacement = """export const LocalServicesScreenVariant: React.FC = () => {
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
                  window.location.href = `tel:${dialConfirmContact.phone.replace(/[-\\s]+/g, '')}`;
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
"""

# 2. Let's update ExploreScreen to add tags for: veg, non-veg, midnight, top-rated, nearby
# Let's read the current tabs selection in LocalServicesScreen (ExploreScreen) replacement and substitute it
# ExploreScreen replacement tabs are defined as:
old_tabs = """        {/* Unified Category Tabs */}
        <div className="flex gap-2 text-[10px] font-bold overflow-x-auto pb-1">
          {[
            { id: 'all', name: 'All' },
            { id: 'places', name: 'Sights & Places' },
            { id: 'foods', name: 'Foods & Restaurants' },
            { id: 'parks', name: 'Parks' },
            { id: 'temples', name: 'Temples' },
            { id: 'it-hub', name: 'IT Hub' },
            { id: 'education', name: 'Education' },
            { id: 'turf', name: 'Turf' },
            { id: 'gaming', name: 'Gaming Center' },
            { id: 'theater', name: 'Theater' },
            { id: 'malls', name: 'Malls' }
          ].map((tab) => ("""

new_tabs = """        {/* Unified Category Tabs */}
        <div className="flex gap-2 text-[10px] font-bold overflow-x-auto pb-1">
          {[
            { id: 'all', name: 'All' },
            { id: 'places', name: 'Sights & Places' },
            { id: 'foods', name: 'Foods & Restaurants' },
            { id: 'midnight', name: 'Midnight Foods 🌙' },
            { id: 'veg', name: 'Veg 🌱' },
            { id: 'non-veg', name: 'Non-Veg 🍗' },
            { id: 'top-rated', name: 'Top Rated ⭐' },
            { id: 'nearby', name: 'Nearby 📍' },
            { id: 'parks', name: 'Parks' },
            { id: 'temples', name: 'Temples' },
            { id: 'it-hub', name: 'IT Hub' },
            { id: 'education', name: 'Education' },
            { id: 'turf', name: 'Turf' },
            { id: 'gaming', name: 'Gaming Center' },
            { id: 'theater', name: 'Theater' },
            { id: 'malls', name: 'Malls' }
          ].map((tab) => ("""

assert services_regex.search(content) is not None, "services_regex not matched"

content = services_regex.sub(lambda m: services_replacement, content)
content = content.replace(old_tabs, new_tabs)

with open(target_file, 'w', encoding='utf-8') as f:
    f.write(content)

print("SUCCESS")
