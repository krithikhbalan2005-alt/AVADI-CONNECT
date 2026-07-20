import re
import os

target_file = os.path.join(os.path.dirname(__file__), '..', 'src', 'screens', 'Module2.tsx')
with open(target_file, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Replace RentalsJobsHomeScreenVariant
hub_regex = re.compile(r'export\s+const\s+RentalsJobsHomeScreenVariant:\s*React\.FC[\s\S]*?(?=export\s+const\s+RentalsPageScreenVariant)')

hub_replacement = """export const RentalsJobsHomeScreenVariant: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useApp();

  return (
    <div className={`flex-grow flex flex-col justify-between select-none h-full relative ${
      theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
    }`}>
      {/* Scroll Area */}
      <div className="flex-grow overflow-y-auto p-5 space-y-6 text-left">
        {/* Header */}
        <div className="h-8 flex items-center">
          <button onClick={() => navigate('/home')} className="p-1 text-slate-405"><ChevronLeft size={20} /></button>
        </div>

        {/* Title */}
        <div className="text-center space-y-1">
          <h2 className="text-md font-black text-slate-805 dark:text-white">Rentals & Jobs</h2>
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
      </div>
    </div>
  );
};
"""

assert hub_regex.search(content) is not None, "hub_regex not matched"

content = hub_regex.sub(lambda m: hub_replacement, content)

with open(target_file, 'w', encoding='utf-8') as f:
    f.write(content)

print("SUCCESS")
