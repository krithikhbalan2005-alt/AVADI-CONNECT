const fs = require('fs');
const path = require('path');

const targetFilePath = path.join(__dirname, '..', 'src', 'screens', 'Module2.tsx');
let fileContent = fs.readFileSync(targetFilePath, 'utf8');

// 1. Update CivicHubScreen
const civicRegex = /export\s+const\s+CivicHubScreen:[\s\S]*?(?=export\s+const\s+MyReportedScreen)/;
const civicReplacement = `export const CivicHubScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [dialConfirmContact, setDialConfirmContact] = useState<{name: string, phone: string, icon: string} | null>(null);

  const administrators = [
    {
      name: 'Mr. S. M. Nasar',
      role: 'Member of Legislative Assembly (MLA) • Avadi',
      phone: '+91 94440 33333',
      email: 'mla.avadi@tn.gov.in',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
      icon: '🏛️'
    },
    {
      name: 'Mr. S. Mohan',
      role: 'Ward 12 Councillor • Avadi Corporation',
      phone: '+91 87654 32100',
      email: 'ward12.avadi@gmail.com',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
      icon: '👤'
    },
    {
      name: 'Dr. S. Kabilan IAS',
      role: 'Municipal Commissioner • Avadi Corporation',
      phone: '044-26340221',
      email: 'comm.avadi@tn.gov.in',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150',
      icon: '🏢'
    }
  ];

  return (
    <div className={\`flex-grow flex flex-col justify-between select-none h-full relative \${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }\`}>
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
          <h2 className="text-md font-black">Complaints</h2>
          <button className="p-1 text-slate-400"><Search size={18} /></button>
        </div>

        {/* Your Complaints section & tracker */}
        <div className={\`p-4 rounded-card border \${
          theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-100 shadow-3xs'
        }\`}>
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
            onClick={() => navigate('/my-reports', { state: { tab: 'my' } })}
            className={\`p-4 rounded-card border shadow-3xs flex flex-col justify-between text-left h-24 transition duration-200 \${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
            }\`}
          >
            <span className="text-xl">🟢</span>
            <div>
              <h5 className="text-[10.5px] font-extrabold text-slate-800 dark:text-white">My Reports</h5>
              <p className="text-[7.5px] text-slate-400 leading-normal mt-0.5 font-bold">View all complaints</p>
            </div>
          </button>

          <button 
            onClick={() => navigate('/my-reports', { state: { tab: 'public' } })}
            className={\`p-4 rounded-card border shadow-3xs flex flex-col justify-between text-left h-24 transition duration-200 \${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
            }\`}
          >
            <span className="text-xl">🔴</span>
            <div>
              <h5 className="text-[10.5px] font-extrabold text-slate-800 dark:text-white">Public Grievances</h5>
              <p className="text-[7.5px] text-slate-400 leading-normal mt-0.5 font-bold">Track other issues</p>
            </div>
          </button>

          <button 
            onClick={() => navigate('/alerts')}
            className={\`p-4 rounded-card border shadow-3xs flex flex-col justify-between text-left h-24 transition duration-200 \${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
            }\`}
          >
            <span className="text-xl">🟢</span>
            <div>
              <h5 className="text-[10.5px] font-extrabold text-slate-800 dark:text-white">Latest News</h5>
              <p className="text-[7.5px] text-slate-400 leading-normal mt-0.5 font-bold">Updates & alerts</p>
            </div>
          </button>

          <button 
            onClick={() => navigate('/services')}
            className={\`p-4 rounded-card border shadow-3xs flex flex-col justify-between text-left h-24 transition duration-200 \${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
            }\`}
          >
            <span className="text-xl">🟠</span>
            <div>
              <h5 className="text-[10.5px] font-extrabold text-slate-800 dark:text-white">Smart Services</h5>
              <p className="text-[7.5px] text-slate-400 leading-normal mt-0.5 font-bold">Utility directory</p>
            </div>
          </button>
        </div>

        {/* Administration Directory */}
        <div className="space-y-3">
          <h4 className="text-[9px] font-black uppercase tracking-wider text-slate-400 dark:text-neutral-500">Administration Directory</h4>
          <div className="space-y-3">
            {administrators.map((admin, idx) => (
              <div 
                key={idx}
                className={\`p-3.5 rounded-card border shadow-3xs flex justify-between items-center \${
                  theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
                }\`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-150 shrink-0 bg-slate-105">
                    <img src={admin.avatar} alt={admin.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-0.5 leading-tight text-left">
                    <h5 className="text-[10.5px] font-extrabold text-slate-800 dark:text-white">{admin.name}</h5>
                    <p className="text-[8px] text-slate-405 dark:text-neutral-500 font-bold leading-relaxed">{admin.role}</p>
                    <p className="text-[8.5px] text-slate-450 dark:text-neutral-400 font-bold mt-1">📞 {admin.phone}</p>
                    <p className="text-[8px] text-slate-400 dark:text-neutral-500 font-semibold">✉ {admin.email}</p>
                  </div>
                </div>
                {/* Call button */}
                <button 
                  onClick={() => setDialConfirmContact({ name: admin.name, phone: admin.phone, icon: admin.icon })}
                  className="w-7 h-7 rounded-full bg-[#4CD964] hover:bg-[#3ec455] text-white flex items-center justify-center shadow-xs shrink-0"
                >
                  📞
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Sticky Bottom Primary Action (Red Button) */}
      <div className="absolute bottom-4 left-0 w-full p-4 z-20 bg-transparent">
        <button 
          onClick={() => navigate('/complaints/camera')}
          className="w-full py-3.5 bg-[#FF3B30] hover:bg-[#e03126] text-white font-bold rounded-btn shadow-md active:scale-[0.98] transition text-xs text-center uppercase tracking-wider"
        >
          Report a Complaint
        </button>
      </div>

      {/* In-UI Dial Confirmation Overlay */}
      {dialConfirmContact && (
        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-6">
          <div className={\`w-full max-w-xs p-6 rounded-card border shadow-xl text-center space-y-4 \${
            theme === 'dark' ? 'bg-[#181818] border-neutral-850 text-white' : 'bg-white border-slate-150 text-slate-800'
          }\`}>
            <span className="text-2xl block">{dialConfirmContact.icon}</span>
            <h4 className="text-xs font-black uppercase tracking-wider">Confirm Dial</h4>
            <p className="text-[10px] text-slate-500 dark:text-neutral-400 font-semibold leading-relaxed">
              Are you sure you want to dial {dialConfirmContact.name} ({dialConfirmContact.phone})?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDialConfirmContact(null)}
                className="flex-1 py-2 text-[10px] font-bold rounded-full border border-slate-205 dark:border-neutral-850 text-slate-500 hover:bg-slate-55 dark:hover:bg-neutral-800"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  window.location.href = \`tel:\${dialConfirmContact.phone.replace(/[-\\s]+/g, '')}\`;
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

`;

// 2. Update JobsPageScreen
const jobsRegex = /export\s+const\s+JobsPageScreen:[\s\S]*?(?=export\s+const\s+JobsDetailScreen)/;
const jobsReplacement = `export const JobsPageScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  return (
    <div className={\`flex-grow flex flex-col justify-between select-none h-full relative \${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }\`}>
      {/* Scroll Area */}
      <div className="flex-grow overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header Search */}
        <div className="flex items-center gap-2">
          <button onClick={() => navigate('/jobs-rentals')} className="p-1 text-slate-400 hover:text-slate-655"><ChevronLeft size={20} /></button>
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search Jobs..."
              className={\`w-full p-2.5 pl-8 text-xs font-semibold rounded-btn border focus:outline-none \${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-805 text-white' : 'bg-white border-slate-200 text-slate-800'
              }\`}
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
            className={\`p-3.5 rounded-card border shadow-3xs flex justify-between items-center cursor-pointer \${
              theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
            }\`}
          >
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-black text-indigo-505 text-xs shrink-0">AC</div>
              <div className="space-y-0.5 leading-tight">
                <div className="flex items-center gap-1.5">
                  <h4 className="text-[11px] font-extrabold">Sales Executive</h4>
                  <span className="text-[8px] font-bold text-slate-400">100</span>
                </div>
                <p className="text-[8.5px] text-slate-405 dark:text-neutral-500 font-semibold">Ace Communications</p>
                <p className="text-[8.5px] text-slate-450 font-bold">40K - 60K</p>
                <p className="text-[8px] text-slate-400 font-bold">Avadi, TN - Full-time</p>
              </div>
            </div>
            <button onClick={(e) => { e.stopPropagation(); navigate('/jobs/detail'); }} className="px-3.5 py-1.5 bg-[#4A3AFF] hover:bg-[#3b2ecc] text-white text-[9px] font-black rounded-lg">Apply</button>
          </div>

          {/* Card 2 */}
          <div className={\`p-3.5 rounded-card border shadow-3xs flex justify-between items-center \${
            theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
          }\`}>
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-black text-emerald-505 text-xs shrink-0">FD</div>
              <div className="space-y-0.5 leading-tight">
                <h4 className="text-[11px] font-extrabold">Delivery Partner</h4>
                <p className="text-[8.5px] text-slate-400 font-semibold">Fast Delivery</p>
                <p className="text-[8.5px] text-slate-450 font-bold">20K - 30K</p>
                <p className="text-[8px] text-slate-400 font-bold">Avadi, TN - Part-time</p>
              </div>
            </div>
            <button className="px-3.5 py-1.5 bg-[#4A3AFF] hover:bg-[#3b2ecc] text-white text-[9px] font-black rounded-lg">Apply</button>
          </div>

          {/* Card 3 */}
          <div className={\`p-3.5 rounded-card border shadow-3xs flex justify-between items-center \${
            theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
          }\`}>
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-black text-purple-500 text-xs shrink-0">MS</div>
              <div className="space-y-0.5 leading-tight">
                <h4 className="text-[11px] font-extrabold">Store Manager</h4>
                <p className="text-[8.5px] text-slate-400 font-semibold">Mega Store</p>
                <p className="text-[8.5px] text-slate-450 font-bold">35K - 45K</p>
                <p className="text-[8px] text-slate-400 font-bold">Avadi, TN - Full-time</p>
              </div>
            </div>
            <span className="text-slate-400 text-xs">❯</span>
          </div>
        </div>
      </div>
    </div>
  );
};

`;

// 3. Update RentalsJobsHomeScreenVariant
const hubRegex = /export\s+const\s+RentalsJobsHomeScreenVariant:[\s\S]*?(?=export\s+const\s+RentalsPageScreenVariant)/;
const hubReplacement = `export const RentalsJobsHomeScreenVariant: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  return (
    <div className={\`flex-grow flex flex-col justify-between select-none h-full relative \${
      theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
    }\`}>
      {/* Scroll Area */}
      <div className="flex-grow overflow-y-auto p-5 space-y-6 text-left">
        {/* Header */}
        <div className="h-8 flex items-center">
          <button onClick={() => navigate('/home')} className="p-1 text-slate-400"><ChevronLeft size={20} /></button>
        </div>

        {/* Title */}
        <div className="text-center space-y-1">
          <h2 className="text-md font-black text-slate-855 dark:text-white">Rentals & Jobs</h2>
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

        {/* Link at bottom */}
        <div className="text-center pt-8">
          <button onClick={() => navigate('/home')} className="text-xs font-black text-[#4A3AFF] underline">View All</button>
        </div>
      </div>
    </div>
  );
};

`;

let changesMade = 0;

if (regexTest(civicRegex)) {
  fileContent = fileContent.replace(civicRegex, civicReplacement);
  changesMade++;
}
if (regexTest(jobsRegex)) {
  fileContent = fileContent.replace(jobsRegex, jobsReplacement);
  changesMade++;
}
if (regexTest(hubRegex)) {
  fileContent = fileContent.replace(hubRegex, hubReplacement);
  changesMade++;
}

function regexTest(reg) {
  const result = reg.test(fileContent);
  if (!result) console.error('MISSING PATTERN: ' + reg.toString());
  return result;
}

if (changesMade === 3) {
  fs.writeFileSync(targetFilePath, fileContent, 'utf8');
  console.log('SUCCESS');
} else {
  console.error('ERROR: Missing some match patterns in Module2.tsx');
  process.exit(1);
}
