const fs = require('fs');
const path = require('path');

const targetFilePath = path.join(__dirname, '..', 'src', 'screens', 'Module2.tsx');
let fileContent = fs.readFileSync(targetFilePath, 'utf8');

// Match from "export const RentalsPageScreen" to the first occurrence of "export const JobsPageScreen"
const regex = /export\s+const\s+RentalsPageScreen:[\s\S]*?(?=export\s+const\s+JobsPageScreen)/;

const replacementStr = `export const RentalsPageScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [dialConfirmContact, setDialConfirmContact] = useState<{name: string, phone: string, icon: string} | null>(null);

  const listings = [
    {
      title: 'Shop for Rent',
      location: 'Avadi Market',
      landmark: 'Near Central Clock Tower',
      address: 'Shop No. 12, Bazaar St, Avadi Market, Chennai',
      facilities: 'Bus Stand: 200m • Government Hospital: 600m',
      details: '800 sq ft',
      price: '₹8,000 / month',
      phone: '+91 94440 12345',
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=300'
    },
    {
      title: 'House for Rent',
      location: 'Avadi, Green Park',
      landmark: 'Behind Lake Park Entrance',
      address: 'Plot 4A, Green Park Avenue, Ward 12, Avadi',
      facilities: 'Avadi Lake Park: 100m • Play Area: 50m • School: 400m',
      details: '2 BHK',
      price: '₹12,000 / month',
      phone: '+91 94440 12346',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=300'
    },
    {
      title: 'Room for Rent',
      location: 'Avadi, Anna Nagar',
      landmark: 'Opposite State Bank Branch',
      address: 'Flat 3, First Floor, 2nd Main Rd, Anna Nagar, Avadi',
      facilities: 'Metro Station: 1.5km • Grocery Store: 50m',
      details: '1 Room',
      price: '₹4,000 / month',
      phone: '+91 94440 12347',
      image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=300'
    }
  ];

  return (
    <div className={\`flex-grow flex flex-col justify-between select-none h-full relative \${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }\`}>
      {/* Scroll Area */}
      <div className="flex-grow overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header Search */}
        <div className="flex items-center gap-2">
          <button onClick={() => navigate('/jobs-rentals')} className="p-1 text-slate-400 hover:text-slate-650"><ChevronLeft size={20} /></button>
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search rentals..."
              className={\`w-full p-2.5 pl-8 text-xs font-semibold rounded-btn border focus:outline-none \${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-805 text-white' : 'bg-white border-slate-200 text-slate-800'
              }\`}
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
          </div>
        </div>

        {/* Listings List */}
        <div className="space-y-4">
          {listings.map((list, i) => (
            <div
              key={i}
              className={\`p-4 rounded-card border shadow-2xs flex flex-col gap-3 \${
                theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-150'
              }\`}
            >
              <div className="flex gap-3.5 items-start">
                {/* Thumbnail */}
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-slate-100 border border-slate-100 dark:border-neutral-800">
                  <img src={list.image} alt={list.title} className="w-full h-full object-cover" />
                </div>
                {/* Text Details */}
                <div className="space-y-1 leading-tight flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="text-[11.5px] font-black text-[#4A3AFF]">{list.title}</h4>
                    <span className="text-[10px] font-black text-slate-800 dark:text-white">{list.price}</span>
                  </div>
                  <p className="text-[9px] text-slate-500 dark:text-neutral-400 font-extrabold flex items-center gap-1">
                    <span>📍</span> {list.location} ({list.details})
                  </p>
                  <p className="text-[8.5px] text-slate-405 dark:text-neutral-500 font-bold">
                    <span className="font-extrabold text-slate-600 dark:text-neutral-400">Landmark:</span> {list.landmark}
                  </p>
                  <p className="text-[8.5px] text-slate-405 dark:text-neutral-500 font-bold">
                    <span className="font-extrabold text-slate-600 dark:text-neutral-400">Address:</span> {list.address}
                  </p>
                </div>
              </div>

              {/* Facility amenities */}
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800/60 text-[8px] font-bold text-slate-500 dark:text-neutral-400 flex items-center gap-1.5 leading-snug">
                <span>🏫 Near Facility:</span> {list.facilities}
              </div>

              {/* Call Owner Button */}
              <button
                type="button"
                onClick={() => setDialConfirmContact({ name: \`Owner (\${list.title})\`, phone: list.phone, icon: '🏠' })}
                className="w-full py-2 bg-[#4CD964] hover:bg-[#3ec455] text-white text-[9px] font-black rounded-btn transition text-center uppercase tracking-wider"
              >
                Call Owner
              </button>
            </div>
          ))}
        </div>
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
                  window.location.href = \`tel:\${dialConfirmContact.phone.replace(/\\s+/g, '')}\`;
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
