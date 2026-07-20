const fs = require('fs');
const path = require('path');

const targetFilePath = path.join(__dirname, '..', 'src', 'screens', 'Module2.tsx');
let fileContent = fs.readFileSync(targetFilePath, 'utf8');

// 1. Update EmergencySOSScreenAlt
const sosRegex = /export\s+const\s+EmergencySOSScreenAlt:[\s\S]*?(?=export\s+const\s+LocalServicesScreen)/;
const sosReplacement = `export const EmergencySOSScreenAlt: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [showBloodModal, setShowBloodModal] = useState(false);
  const [bloodGroup, setBloodGroup] = useState('A+');
  const [hospitalName, setHospitalName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [unitsRequired, setUnitsRequired] = useState('1');
  const [patientName, setPatientName] = useState('');
  const [dialConfirmContact, setDialConfirmContact] = useState<{name: string, number: string, icon: string} | null>(null);

  // Stateful blood requests list
  const [bloodRequests, setBloodRequests] = useState<Array<{
    id: string;
    patient: string;
    group: string;
    units: string;
    hospital: string;
    phone: string;
    time: string;
  }>>([
    {
      id: 'REQ-1092',
      patient: 'Karthik Raja',
      group: 'O+',
      units: '3 Units',
      hospital: 'Avadi Government Hospital',
      phone: '044-26340221',
      time: '2 hours ago'
    }
  ]);

  const contacts = [
    { name: 'Police Helpline', number: '100', icon: '🚨' },
    { name: 'Ambulance Unit', number: '108', icon: '🚑' },
    { name: 'Fire & Rescue', number: '101', icon: '🚒' },
    { name: 'Municipal Helpline', number: '044-26343916', icon: '🏢' },
    { name: 'Animal Rescue', number: '1962', icon: '🐾' },
    { name: 'Women Helpline', number: '1091', icon: '👩' }
  ];

  const handleBloodSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (patientName.trim() && hospitalName.trim() && contactPhone.trim()) {
      const newReq = {
        id: 'REQ-' + Math.floor(1000 + Math.random() * 9000),
        patient: patientName,
        group: bloodGroup,
        units: unitsRequired + ' Unit(s)',
        hospital: hospitalName,
        phone: contactPhone,
        time: 'Just now'
      };
      setBloodRequests([newReq, ...bloodRequests]);
      setShowBloodModal(false);
      // Reset form
      setPatientName('');
      setHospitalName('');
      setContactPhone('');
      setUnitsRequired('1');
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className={\`flex-grow flex flex-col justify-between select-none h-full relative \${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }\`}>
      {/* Pulse Animation Style Tag */}
      <style>{\`
        @keyframes sosPulse {
          0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(239, 68, 68, 0); }
          100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
        }
        .sos-btn-pulse {
          animation: sosPulse 1.8s infinite;
        }
      \`}</style>

      {/* Scrollable Area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-5 pb-20 text-left">
        {/* Header */}
        <div className="h-8 flex items-center">
          <button 
            onClick={() => navigate('/home')}
            className="p-1 rounded-full text-slate-400 hover:text-primary transition"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex-grow text-center font-black text-xs pr-6">Emergency SOS</div>
        </div>

        {/* SOS Blinking/Pulse Button */}
        <div className="flex flex-col items-center justify-center py-4">
          <button 
            onClick={() => alert('SOS broadcast alert sent to emergency services and nearest community volunteers!')}
            className="w-28 h-28 rounded-full bg-red-500 border-4 border-white dark:border-neutral-900 text-white flex flex-col items-center justify-center font-black tracking-wider transition active:scale-95 shadow-lg sos-btn-pulse"
          >
            <span className="text-xl">SOS</span>
            <span className="text-[7.5px] font-bold uppercase tracking-widest text-red-100 mt-1">Press Active</span>
          </button>
        </div>

        {/* Helpline grid format of boxes */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          {contacts.map((contact, i) => (
            <button 
              key={i}
              onClick={() => setDialConfirmContact(contact)}
              className={\`p-4.5 rounded-card border shadow-3xs flex flex-col items-center text-center justify-center gap-2 active:scale-95 transition \${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850 hover:bg-neutral-800' : 'bg-white border-slate-150 hover:bg-slate-55'
              }\`}
            >
              <span className="text-2xl">{contact.icon}</span>
              <div className="space-y-0.5">
                <h4 className="text-[10px] font-black text-slate-800 dark:text-white leading-tight">{contact.name}</h4>
                <p className="text-[9px] text-[#4A3AFF] font-bold mt-0.5">{contact.number}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Stateful blood requests list */}
        <div className="space-y-2.5 pt-4">
          <div className="flex justify-between items-center">
            <h4 className="text-[9.5px] font-black uppercase tracking-wider text-slate-400 dark:text-neutral-500">Active Blood Requests</h4>
            <span className="text-[8px] font-bold text-red-500 bg-red-50 dark:bg-red-950/20 px-2 py-0.5 rounded-full">Urgent</span>
          </div>
          <div className="space-y-2">
            {bloodRequests.map((req) => (
              <div 
                key={req.id} 
                className={\`p-3.5 rounded-card border flex justify-between items-center \${
                  theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-150 shadow-3xs'
                }\`}
              >
                <div className="space-y-1 text-left">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-red-500 text-white font-black text-[9px] rounded-md">{req.group}</span>
                    <span className="text-[10.5px] font-extrabold text-slate-800 dark:text-white">{req.patient}</span>
                  </div>
                  <p className="text-[8.5px] font-bold text-slate-500 dark:text-neutral-400">🏥 {req.hospital} • {req.units}</p>
                  <p className="text-[8px] text-slate-400 dark:text-neutral-500">Requested {req.time}</p>
                </div>
                <button 
                  onClick={() => setDialConfirmContact({ name: \`Donor Contact (\${req.patient})\`, number: req.phone, icon: '🩸' })}
                  className="w-7 h-7 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xs shrink-0"
                >
                  📞
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Request Blood Donation Red Button */}
      <div className="absolute bottom-4 left-0 w-full p-4 z-20 bg-transparent">
        <button
          onClick={() => setShowBloodModal(true)}
          className="w-full py-3.5 bg-[#FF3B30] hover:bg-[#e03126] text-white font-bold rounded-btn shadow-md text-xs text-center uppercase tracking-wider active:scale-[0.98] transition"
        >
          Request Blood Donation
        </button>
      </div>

      {/* In-App Blood Request Form Modal */}
      {showBloodModal && (
        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-6 text-left">
          <div className={\`w-full max-w-sm p-6 rounded-card border shadow-2xl space-y-4 \${
            theme === 'dark' ? 'bg-[#181818] border-neutral-800 text-white' : 'bg-white border-slate-150 text-slate-800'
          }\`}>
            <div className="flex justify-between items-center border-b pb-3 border-slate-100 dark:border-neutral-800">
              <h3 className="text-xs font-black uppercase tracking-wider">Blood Request Form</h3>
              <button onClick={() => setShowBloodModal(false)} className="text-slate-400 hover:text-slate-600"><X size={18} /></button>
            </div>
            <form onSubmit={handleBloodSubmit} className="space-y-3">
              <div>
                <label className="text-[9px] font-black uppercase tracking-wider text-slate-400">Patient Name</label>
                <input 
                  type="text" 
                  required
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="e.g. Anand Kumar" 
                  className={\`w-full p-2.5 text-xs rounded-btn border focus:outline-none mt-1 \${
                    theme === 'dark' ? 'bg-neutral-900 border-neutral-805 text-white' : 'bg-white border-slate-205 text-slate-850'
                  }\`}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[9px] font-black uppercase tracking-wider text-slate-400">Blood Group</label>
                  <select 
                    value={bloodGroup}
                    onChange={(e) => setBloodGroup(e.target.value)}
                    className={\`w-full p-2.5 text-xs rounded-btn border focus:outline-none mt-1 \${
                      theme === 'dark' ? 'bg-neutral-900 border-neutral-855 text-white' : 'bg-white border-slate-205 text-slate-850'
                    }\`}
                  >
                    {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map(g => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-[9px] font-black uppercase tracking-wider text-slate-400">Units Required</label>
                  <input 
                    type="number" 
                    min="1"
                    max="10"
                    required
                    value={unitsRequired}
                    onChange={(e) => setUnitsRequired(e.target.value)}
                    className={\`w-full p-2.5 text-xs rounded-btn border focus:outline-none mt-1 \${
                      theme === 'dark' ? 'bg-neutral-900 border-neutral-805 text-white' : 'bg-white border-slate-205 text-slate-850'
                    }\`}
                  />
                </div>
              </div>
              <div>
                <label className="text-[9px] font-black uppercase tracking-wider text-slate-400">Hospital Name / Address</label>
                <input 
                  type="text" 
                  required
                  value={hospitalName}
                  onChange={(e) => setHospitalName(e.target.value)}
                  placeholder="e.g. Avadi Govt Hospital" 
                  className={\`w-full p-2.5 text-xs rounded-btn border focus:outline-none mt-1 \${
                    theme === 'dark' ? 'bg-neutral-900 border-neutral-805 text-white' : 'bg-white border-slate-205 text-slate-850'
                  }\`}
                />
              </div>
              <div>
                <label className="text-[9px] font-black uppercase tracking-wider text-slate-400">Contact Number</label>
                <input 
                  type="tel" 
                  required
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  placeholder="e.g. 9876543210" 
                  className={\`w-full p-2.5 text-xs rounded-btn border focus:outline-none mt-1 \${
                    theme === 'dark' ? 'bg-neutral-900 border-neutral-805 text-white' : 'bg-white border-slate-205 text-slate-850'
                  }\`}
                />
              </div>
              <div className="flex gap-3 pt-3">
                <button 
                  type="button"
                  onClick={() => setShowBloodModal(false)}
                  className="flex-1 py-2.5 border rounded-btn text-xs font-bold text-slate-500 dark:text-neutral-400"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 py-2.5 bg-red-500 hover:bg-red-650 text-white font-black rounded-btn text-xs uppercase tracking-wider text-center"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* In-UI Dial Confirmation Overlay */}
      {dialConfirmContact && (
        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-6">
          <div className={\`w-full max-w-xs p-6 rounded-card border shadow-xl text-center space-y-4 \${
            theme === 'dark' ? 'bg-[#181818] border-neutral-855 text-white' : 'bg-white border-slate-150 text-slate-800'
          }\`}>
            <span className="text-2xl block">{dialConfirmContact.icon}</span>
            <h4 className="text-xs font-black uppercase tracking-wider">Confirm Dial</h4>
            <p className="text-[10px] text-slate-500 dark:text-neutral-400 font-semibold leading-relaxed">
              Are you sure you want to dial {dialConfirmContact.name} ({dialConfirmContact.number})?
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
                  window.location.href = \`tel:\${dialConfirmContact.number.replace(/[-\\s]+/g, '')}\`;
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

// 2. Update LocalServicesScreen/ExploreScreen
const exploreRegex = /export\s+const\s+LocalServicesScreen:[\s\S]*?(?=export\s+const\s+RentalsPageScreen)/;
const exploreReplacement = `export const LocalServicesScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [activeTag, setActiveTag] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dialConfirmContact, setDialConfirmContact] = useState<{name: string, phone: string, icon: string} | null>(null);

  const places = [
    {
      name: 'Paruthipattu Lake Eco-Park',
      sub: 'Eco-Park, Boating Lake & Walking Tracks • Ward 12',
      rating: '★ 4.9',
      tag: 'places',
      subtag: 'parks',
      phone: '044-26343916',
      icon: '🌳',
      image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'Avadi Sri Karumari Amman Temple',
      sub: 'Famous Hindu Temple & Historic Landmark • Ward 4',
      rating: '★ 4.8',
      tag: 'places',
      subtag: 'temples',
      phone: '044-26340221',
      icon: '🕌',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'Pattabiram Tidel IT Park',
      sub: 'Modern IT Hub & Business Center • Pattabiram',
      rating: '★ 4.5',
      tag: 'places',
      subtag: 'it-hub',
      phone: '044-26340222',
      icon: '💻',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'Vel Tech University Campus',
      sub: 'Renowned Engineering University & R&D Hub • Avadi',
      rating: '★ 4.6',
      tag: 'places',
      subtag: 'education',
      phone: '180030706900',
      icon: '🎓',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'Avadi KickOff Football Turf',
      sub: 'Premium 5-a-side AstroTurf Grounds • Sector 3',
      rating: '★ 4.7',
      tag: 'places',
      subtag: 'turf',
      phone: '044-26340227',
      icon: '⚽',
      image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'VR Quest Gaming Arena',
      sub: 'Virtual Reality & Esports Arcade • Avadi Mall',
      rating: '★ 4.9',
      tag: 'places',
      subtag: 'gaming',
      phone: '044-26340228',
      icon: '🎮',
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'Rakki Cinemas Avadi',
      sub: 'Dolby Atmos Cinema Multiplex • Bazaar Rd',
      rating: '★ 4.6',
      tag: 'places',
      subtag: 'theater',
      phone: '044-26340229',
      icon: '🎬',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'Avadi Central Mall',
      sub: 'Multiplex Cinema, Food Court & Retail • High Rd',
      rating: '★ 4.4',
      tag: 'places',
      subtag: 'malls',
      phone: '044-26340230',
      icon: '🛍️',
      image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=600'
    },
    // Foods list
    {
      name: 'Avadi Midnight Biryani Point',
      sub: 'Famous Spiced Chicken Biryani • 1.1 km',
      rating: '★ 4.8',
      tag: 'foods',
      subtag: 'midnight',
      phone: '044-26340231',
      icon: '🍲',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'Sri Krishna Kulfi & Dessert Parlour',
      sub: 'Traditional Kulfi & Malai Dessert • 300m',
      rating: '★ 4.7',
      tag: 'foods',
      subtag: 'midnight',
      phone: '044-26340232',
      icon: '🍧',
      image: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'Saravana Bhavan',
      sub: 'Pure Veg South Indian Meals • 400m',
      rating: '★ 4.5',
      tag: 'foods',
      subtag: 'veg',
      phone: '044-26340233',
      icon: '🍛',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'Lake View Biryani & Grill',
      sub: 'Charcoal BBQ & Chicken Biryani • 1.5 km',
      rating: '★ 4.6',
      tag: 'foods',
      subtag: 'non-veg',
      phone: '044-26340234',
      icon: '🍖',
      image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'Bhai Biryani Stall',
      sub: 'Mutton & Chicken Dum Biryani • 800m',
      rating: '★ 4.9',
      tag: 'foods',
      subtag: 'top-rated',
      phone: '044-26340235',
      icon: '🍲',
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'Amma Veg Mess',
      sub: 'Budget Friendly Veg Meals • 200m',
      rating: '★ 4.2',
      tag: 'foods',
      subtag: 'nearby',
      phone: '044-26340236',
      icon: '🥗',
      image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=600'
    }
  ];

  const filteredItems = places.filter(item => {
    const matchesTag = activeTag === 'all' || item.tag === activeTag || item.subtag === activeTag;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.sub.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div className={\`flex-grow flex flex-col justify-between select-none h-full relative \${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }\`}>
      {/* Scrollable Container */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header Search bar */}
        <div className="flex items-center gap-2">
          <button onClick={() => navigate('/home')} className="p-1 text-slate-400 hover:text-slate-655"><ChevronLeft size={20} /></button>
          <div className="flex-1 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search places or foods..."
              className={\`w-full p-2.5 pl-8 text-xs font-semibold rounded-btn border focus:outline-none \${
                theme === 'dark' ? 'bg-neutral-900 border-neutral-850 text-white' : 'bg-white border-slate-200 text-slate-850'
              }\`}
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
          </div>
        </div>

        {/* Unified Category Tabs */}
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
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTag(tab.id)}
              className={\`px-3.5 py-1.5 rounded-full border uppercase tracking-wider transition shrink-0 \${
                activeTag === tab.id
                  ? 'bg-slate-800 dark:bg-white text-white dark:text-slate-800 border-slate-800 dark:border-white shadow-2xs'
                  : 'bg-white dark:bg-neutral-900 text-slate-405 dark:text-neutral-505 border-slate-150 dark:border-neutral-800'
              }\`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Grid cards list */}
        <div className="space-y-4">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-400 font-bold">No results found matching filters.</div>
          ) : (
            filteredItems.map((place, i) => (
              <div
                key={i}
                className={\`rounded-card overflow-hidden border shadow-3xs flex flex-col \${
                  theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
                }\`}
              >
                {/* Image banner */}
                <div className="aspect-video w-full relative">
                  <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
                </div>

                {/* Body */}
                <div className="p-4 space-y-3.5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-800 dark:text-white flex items-center gap-1.5">
                        <span>{place.icon}</span> {place.name}
                      </h4>
                      <p className="text-[9px] text-slate-405 dark:text-neutral-505 mt-1 font-bold">{place.sub}</p>
                    </div>
                    <span className="text-[10px] font-black text-amber-500 shrink-0">{place.rating}</span>
                  </div>

                  {/* Bottom Row Icons */}
                  <div className="flex justify-around items-center border-t border-slate-100 dark:border-neutral-800/60 pt-3">
                    <button 
                      onClick={() => setDialConfirmContact(place)}
                      className="text-slate-400 hover:text-[#4A3AFF] transition text-sm"
                    >
                      📞 Call
                    </button>
                    <span className="text-slate-200">|</span>
                    <span className="text-[9px] uppercase tracking-wider font-extrabold text-slate-400 bg-slate-50 dark:bg-neutral-950 px-2 py-0.5 rounded border border-slate-100 dark:border-neutral-900">
                      {place.tag === 'places' ? 'Sight' : 'Food'}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
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

// 3. Update JobsDetailScreen to support custom application overlay dialog
const jobDetailRegex = /export\s+const\s+JobsDetailScreen:[\s\S]*?(?=export\s+const\s+DrawerScreen)/;
const jobDetailReplacement = `export const JobsDetailScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  // Form states
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [degree, setDegree] = useState('');
  const [gradYear, setGradYear] = useState('');
  const [fileName, setFileName] = useState('');

  const details = [
    { label: 'Job Role', value: 'Sales Executive', icon: '💼' },
    { label: 'Company', value: 'Ace Communications', icon: '🏠' },
    { label: 'CTC / Salary', value: '₹40,000 - ₹60,000', icon: '💵' },
    { label: 'Experience', value: '1 - 2 Years', icon: '⚙️' },
    { label: 'Job Type', value: 'Full-time', icon: '💼' },
    { label: 'Location', value: 'Avadi, Tamil Nadu', icon: '📍' },
    { label: 'Application Deadline', value: '20 May 2025', icon: '📅' }
  ];

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName.trim() && email.trim() && degree.trim() && gradYear.trim()) {
      setShowApplyModal(false);
      setShowSuccessModal(true);
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className={\`flex-grow flex flex-col justify-between select-none h-full relative \${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }\`}>
      {/* Scroll area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header */}
        <div className="h-8 flex items-center gap-2">
          <button onClick={() => navigate('/jobs')} className="p-1 text-slate-400 hover:text-slate-650"><ChevronLeft size={20} /></button>
          <span className="text-xs font-black">Job Details</span>
        </div>

        {/* Company Header Card */}
        <div className={\`p-4.5 rounded-card border shadow-3xs flex gap-3.5 items-center \${
          theme === 'dark' ? 'bg-neutral-900 border-neutral-850' : 'bg-white border-slate-150'
        }\`}>
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-black text-indigo-505 text-sm shrink-0">AC</div>
          <div className="space-y-0.5 text-left leading-tight">
            <h4 className="text-[12px] font-black text-slate-805 dark:text-white">Sales Executive</h4>
            <p className="text-[9px] text-slate-405 dark:text-neutral-500 font-bold">Ace Communications • Avadi</p>
          </div>
        </div>

        {/* Job Parameters Card */}
        <div className={\`p-4.5 rounded-card border shadow-3xs space-y-3.5 \${
          theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-150'
        }\`}>
          {details.map((detail, idx) => (
            <div key={idx} className="flex gap-3 text-left leading-snug">
              <span className="text-sm shrink-0">{detail.icon}</span>
              <div>
                <p className="text-[8px] font-black uppercase tracking-wider text-slate-400">{detail.label}</p>
                <p className="text-[10px] font-extrabold text-slate-800 dark:text-white mt-0.5">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Bottom Apply Button */}
      <div className="absolute bottom-4 left-0 w-full p-4 z-20 bg-transparent">
        <button 
          onClick={() => setShowApplyModal(true)}
          className="w-full py-3.5 bg-[#4A3AFF] hover:bg-[#3b2ecc] text-white font-bold rounded-btn shadow-md text-xs uppercase tracking-wider text-center"
        >
          Apply for this Job
        </button>
      </div>

      {/* Stateful Job Application Form Modal */}
      {showApplyModal && (
        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-6 text-left">
          <div className={\`w-full max-w-sm p-6 rounded-card border shadow-2xl space-y-4 \${
            theme === 'dark' ? 'bg-[#181818] border-neutral-800 text-white' : 'bg-white border-slate-150 text-slate-800'
          }\`}>
            <div className="flex justify-between items-center border-b pb-3 border-slate-100 dark:border-neutral-800">
              <h3 className="text-xs font-black uppercase tracking-wider">Apply Form</h3>
              <button onClick={() => setShowApplyModal(false)} className="text-slate-400 hover:text-slate-600"><X size={18} /></button>
            </div>
            <form onSubmit={handleApplySubmit} className="space-y-3">
              <div>
                <label className="text-[9px] font-black uppercase tracking-wider text-slate-400">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className={\`w-full p-2.5 mt-1 text-xs rounded-btn border focus:outline-none \${
                    theme === 'dark' ? 'bg-neutral-900 border-neutral-805 text-white' : 'bg-white border-slate-205 text-slate-850'
                  }\`}
                />
              </div>
              <div>
                <label className="text-[9px] font-black uppercase tracking-wider text-slate-400">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. john@gmail.com"
                  className={\`w-full p-2.5 mt-1 text-xs rounded-btn border focus:outline-none \${
                    theme === 'dark' ? 'bg-neutral-900 border-neutral-855 text-white' : 'bg-white border-slate-205 text-slate-850'
                  }\`}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[9px] font-black uppercase tracking-wider text-slate-400">Degree / Major</label>
                  <input 
                    type="text" 
                    required
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    placeholder="e.g. B.E. CSE"
                    className={\`w-full p-2.5 mt-1 text-xs rounded-btn border focus:outline-none \${
                      theme === 'dark' ? 'bg-neutral-900 border-neutral-805 text-white' : 'bg-white border-slate-205 text-slate-850'
                    }\`}
                  />
                </div>
                <div>
                  <label className="text-[9px] font-black uppercase tracking-wider text-slate-400">Passing Year</label>
                  <input 
                    type="number" 
                    min="2000"
                    max="2030"
                    required
                    value={gradYear}
                    onChange={(e) => setGradYear(e.target.value)}
                    placeholder="e.g. 2024"
                    className={\`w-full p-2.5 mt-1 text-xs rounded-btn border focus:outline-none \${
                      theme === 'dark' ? 'bg-neutral-900 border-neutral-805 text-white' : 'bg-white border-slate-205 text-slate-850'
                    }\`}
                  />
                </div>
              </div>
              <div>
                <label className="text-[9px] font-black uppercase tracking-wider text-slate-400">Upload Resume (.pdf, .doc)</label>
                <div className="relative mt-1">
                  <input 
                    type="file" 
                    accept=".pdf,.doc,.docx"
                    required
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFileName(e.target.files[0].name);
                      }
                    }}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className={\`w-full p-3 text-center border-2 border-dashed rounded-btn text-xs font-bold text-slate-405 \${
                    theme === 'dark' ? 'border-neutral-700 bg-neutral-900' : 'border-slate-200 bg-slate-50'
                  }\`}>
                    {fileName ? \`📄 \${fileName}\` : '📁 Select resume file'}
                  </div>
                </div>
              </div>
              <div className="flex gap-3 pt-3">
                <button 
                  type="button" 
                  onClick={() => setShowApplyModal(false)}
                  className="flex-1 py-2.5 border rounded-btn text-xs font-bold text-slate-500"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 py-2.5 bg-[#4A3AFF] hover:bg-[#3b2ecc] text-white font-black rounded-btn text-xs uppercase tracking-wider text-center"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal Overlay */}
      {showSuccessModal && (
        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-6 text-center">
          <div className={\`w-full max-w-xs p-6 rounded-card border shadow-2xl text-center space-y-4 \${
            theme === 'dark' ? 'bg-[#181818] border-neutral-855 text-white' : 'bg-white border-slate-150 text-slate-800'
          }\`}>
            <span className="text-3xl block">✅</span>
            <h4 className="text-xs font-black uppercase tracking-wider">Applied Successfully</h4>
            <p className="text-[10px] text-slate-500 dark:text-neutral-400 font-semibold leading-relaxed">
              Your application has been forwarded to Ace Communications. They will contact you shortly.
            </p>
            <button
              onClick={() => {
                setShowSuccessModal(false);
                navigate('/jobs');
              }}
              className="w-full py-2 bg-[#4A3AFF] hover:bg-[#3b2ecc] text-white font-black text-[10px] rounded-btn uppercase tracking-wider"
            >
              Back to Jobs
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

`;

// 4. Create New Components: GovernmentSchemesScreen
const endOfFileRegex = /\/\/ ==========================================\s*\r?\n\/\/ 31\. SETTINGS SCREEN/;
const appendComponentsStr = `// ==========================================
// 30. GOVERNMENT SCHEMES SCREEN
// ==========================================
export const GovernmentSchemesScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  const schemes = [
    {
      title: 'Avadi Student Scholarship Scheme',
      sub: 'Avadi Municipality • Education Support Program',
      desc: 'Provides 100% college tuition fees assistance for government school graduates with high academic scores.',
      eligibility: 'Score > 85% in Grade 12, family income < 2.5 LPA',
      action: 'Apply for Scholarship',
      icon: '🎓'
    },
    {
      title: 'Avadi Municipal Housing Subsidy',
      sub: 'TNHB Pattabiram • Housing Benefit Scheme',
      desc: 'Subsidized allocation of modern affordable apartments built near Pattabiram Tidel Park for low-income citizens.',
      eligibility: 'Resident of Avadi Ward, family income < 3 LPA',
      action: 'Apply for Housing',
      icon: '🏢'
    },
    {
      title: 'Avadi Household Solar & Green Subsidy',
      sub: 'TANGEDCO Avadi • Sustainability Benefit',
      desc: 'Municipal discount program providing 40% reimbursement on household solar panels & rainwater harvest systems.',
      eligibility: 'Own household inside Avadi municipal boundaries',
      action: 'Request Subsidy',
      icon: '☀️'
    }
  ];

  return (
    <div className={\`flex-grow flex flex-col justify-between select-none h-full relative \${
      theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-slate-50 text-slate-800'
    }\`}>
      {/* Scroll Area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 pb-20 text-left">
        {/* Header */}
        <div className="flex items-center gap-2">
          <button onClick={() => navigate('/home')} className="p-1 text-slate-400 hover:text-slate-655"><ChevronLeft size={20} /></button>
          <div className="flex-grow text-center font-black text-xs pr-6">Government Schemes</div>
        </div>

        {/* Catalog */}
        <div className="space-y-4 pt-2">
          {schemes.map((scheme, idx) => (
            <div 
              key={idx}
              className={\`p-4 rounded-card border shadow-3xs space-y-3 text-left \${
                theme === 'dark' ? 'bg-[#181818] border-neutral-850' : 'bg-white border-slate-150'
              }\`}
            >
              <div className="flex gap-3 items-start">
                <span className="text-xl shrink-0 mt-0.5">{scheme.icon}</span>
                <div>
                  <h4 className="text-[11.5px] font-black text-[#4A3AFF]">{scheme.title}</h4>
                  <p className="text-[8px] text-slate-405 dark:text-neutral-500 font-extrabold uppercase mt-0.5">{scheme.sub}</p>
                </div>
              </div>
              <p className="text-[9.5px] font-semibold text-slate-600 dark:text-neutral-400 leading-normal">{scheme.desc}</p>
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800/60 text-[8px] font-bold text-slate-500 dark:text-neutral-400 leading-snug">
                📌 Eligibility: {scheme.eligibility}
              </div>
              <button 
                onClick={() => alert(\`Application initiated for \${scheme.title}. Detailed forms will be sent to your registered address.\`)}
                className="w-full py-2 bg-slate-800 dark:bg-white text-white dark:text-slate-800 hover:bg-slate-900 text-[9px] font-black uppercase tracking-wider rounded-btn transition text-center"
              >
                {scheme.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 31. SETTINGS SCREEN\`;

let changesMade = 0;

if (regexTest(sosRegex)) {
  fileContent = fileContent.replace(sosRegex, sosReplacement);
  changesMade++;
}
if (regexTest(exploreRegex)) {
  fileContent = fileContent.replace(exploreRegex, exploreReplacement);
  changesMade++;
}
if (regexTest(jobDetailRegex)) {
  fileContent = fileContent.replace(jobDetailRegex, jobDetailReplacement);
  changesMade++;
}
if (regexTest(endOfFileRegex)) {
  fileContent = fileContent.replace(endOfFileRegex, appendComponentsStr);
  changesMade++;
}

function regexTest(reg) {
  const result = reg.test(fileContent);
  if (!result) console.error('MISSING PATTERN: ' + reg.toString());
  return result;
}

if (changesMade === 4) {
  fs.writeFileSync(targetFilePath, fileContent, 'utf8');
  console.log('SUCCESS');
} else {
  console.error('ERROR: Missing some match patterns in Module2.tsx');
  process.exit(1);
}
