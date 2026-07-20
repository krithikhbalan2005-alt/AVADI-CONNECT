const fs = require('fs');
const path = require('path');

const targetFilePath = path.join(__dirname, '..', 'src', 'screens', 'Module2.tsx');
let fileContent = fs.readFileSync(targetFilePath, 'utf8');

// Match from "export const CivicHubScreen" to the first occurrence of "export const MyReportedScreen"
const regex = /export\s+const\s+CivicHubScreen:[\s\S]*?(?=export\s+const\s+MyReportedScreen)/;

const replacementStr = `export const CivicHubScreen: React.FC = () => {
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
          <div className="flex justify-between items-center mt-3 text-[8.5px] font-black text-slate-550 dark:text-neutral-450">
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

if (regex.test(fileContent)) {
  fileContent = fileContent.replace(regex, replacementStr);
  fs.writeFileSync(targetFilePath, fileContent, 'utf8');
  console.log('SUCCESS');
} else {
  console.error('ERROR: Regex pattern not matched in Module2.tsx');
  process.exit(1);
}
