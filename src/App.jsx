import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

const branches = [
  { code: 'P', day: 'বৃহস্পতিবার', time: '৪.৩০ - ৬.০০', name: 'শাখা P — বৃহস্পতিবার (৪.৩০ - ৬.০০)' },
  { code: 'Z', day: 'শুক্রবার', time: '১০.৩০ - ১২.০০', name: 'শাখা Z — শুক্রবার (১০.৩০ - ১২.০০)' },
  { code: 'S', day: 'শনিবার', time: '৪.৩০ - ৬.০০', name: 'শাখা S — শনিবার (৪.৩০ - ৬.০০)' },
  { code: 'N', day: 'বুধবার', time: '৪.৩০ - ৬.০০', name: 'শাখা N — বুধবার (৪.৩০ - ৬.০০)' },
  { code: 'C', day: 'সোমবার', time: '৪.৩০ - ৬.০০', name: 'শাখা C — সোমবার (৪.৩০ - ৬.০০)' },
]

const initialAdmission = {
  studentName: '',
  age: 6,
  gender: 'ছেলে',
  school: '',
  experience: 'নতুন শিক্ষার্থী (কোনো পূর্ব অভিজ্ঞতা নেই)',
  branch: branches[0].name,
  guardianName: '',
  guardianPhone: '',
  address: '',
  hasSibling: false,
}

const studentProfile = {
  name: 'আরিয়ান আহমেদ',
  id: 'KV-2026-08',
  group: 'শিশু',
  branch: 'শাখা P',
  branchCode: 'P',
  classDay: 'বৃহস্পতিবার',
  classTime: '৪.৩০ - ৬.০০',
  guardian: 'আফরোজা বেগম',
  phone: '০১৭৫XXXXXXXX',
}

const studentArtworks = [
  { title: 'গ্রামের নদী ও ডিঙি নৌকা', medium: 'জলরং ও তেল পেস্টেল', date: '২৮ অক্টোবর ২০২৬', grade: 'A+', icon: '⛵' },
  { title: 'রঙিন শাপলা ফুল', medium: 'প্যাস্টেল কালার', date: '১৫ অক্টোবর ২০২৬', grade: 'A', icon: '🌸' },
  { title: 'বৈশাখী বাঘের মুখোশ', medium: 'পোস্টার কালার', date: '০২ অক্টোবর ২০২৬', grade: 'A+', icon: '🐯' },
]

const paymentHistory = [
  { receiptNo: 'REC-8921', purpose: 'ভর্তি ফি ও অক্টোবর বেতন', date: '০১ অক্টোবর ২০২৬', amount: '৩৫০০' },
  { receiptNo: 'REC-9104', purpose: 'নভেম্বর ২০২৬ মাসিক বেতন', date: '০৩ নভেম্বর ২০২৬', amount: '১৫০০' },
]

const colors = ['#111111', '#A69D88', '#D35400', '#F39C12', '#27AE60', '#2980B9', '#8E44AD']

function AnnouncementBar({ isLoggedIn, setView }) {
  return (
    <aside aria-label="Announcement" className="bg-charcoal text-white text-xs sm:text-sm py-2 px-4 text-center flex flex-wrap justify-center items-center gap-3 sm:gap-6 border-b border-brand-800">
      <div className="flex items-center gap-1.5 font-medium">
        <i className="fa-solid fa-palette text-brand" />
        <span>কলাভার্স (Kalaverse) আর্ট একাডেমি • খিলক্ষেত ক্যাম্পাস</span>
      </div>
      <div className="hidden md:flex items-center gap-2">
        <span className="text-brand-300">|</span><span>ভর্তি ফি: ২০০০/- </span>
        <span className="text-brand-300">|</span><span>ক্লাসের যাবতীয় উপকরণ ফ্রি!</span>
      </div>
      <div className="flex items-center gap-2">
        <a href="tel:09639268128" className="inline-flex items-center gap-1.5 bg-brand text-charcoal hover:bg-white px-2.5 py-0.5 rounded font-bold text-xs transition">
          <i className="fa-solid fa-phone" /> 09639268128
        </a>
        <button onClick={() => setView(isLoggedIn ? 'dashboard' : 'login')} className="inline-flex items-center gap-1 text-brand hover:text-white text-xs underline font-semibold ml-2">
          <i className={isLoggedIn ? 'fa-solid fa-chart-line' : 'fa-regular fa-user'} /> {isLoggedIn ? 'ড্যাশবোর্ড' : 'লগইন'}
        </button>
      </div>
    </aside>
  )
}

function Header({ currentView, isLoggedIn, setView, handleLogout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = (view) => {
    setView(view)
    setMobileMenuOpen(false)
  }
  const active = (view) => currentView === view ? 'font-bold text-charcoal border-b-2 border-charcoal pb-1' : 'hover:text-brand-700'

  return (
    <>
      <AnnouncementBar isLoggedIn={isLoggedIn} setView={setView} />
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b-2 border-charcoal shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" onClick={(event) => { event.preventDefault(); navigate('home') }} className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-charcoal text-brand flex items-center justify-center rounded-2xl border-2 border-charcoal shadow-[3px_3px_0px_#A69D88] group-hover:-rotate-3 transition transform">
              <i className="fa-solid fa-paint-brush text-2xl" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-black text-2xl text-charcoal tracking-tight">কলাভার্স</span>
                <span className="text-xs bg-charcoal text-brand px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Kalaverse</span>
              </div>
              <p className="text-xs text-brand-800 font-semibold tracking-wide">শিশু ও কিশোর ফাইন আর্টস একাডেমি</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 font-medium text-sm text-charcoal">
            <button onClick={() => navigate('home')} className={`${active('home')} transition flex items-center gap-1.5`}>
              <i className="fa-solid fa-house text-xs text-brand-600" /> হোম
            </button>
            {currentView === 'home' && <>
              <a href="#routine" className="hover:text-brand-700 transition flex items-center gap-1.5"><i className="fa-solid fa-calendar-check text-xs text-brand-600" /> ক্লাস রুটিন</a>
              <a href="#fees" className="hover:text-brand-700 transition flex items-center gap-1.5"><i className="fa-solid fa-coins text-xs text-brand-600" /> ফি ও সুবিধাসমূহ</a>
              <a href="#sketchpad" className="hover:text-brand-700 transition flex items-center gap-1.5"><i className="fa-solid fa-pen-nib text-xs text-brand-600" /> ড্রয়িং স্কেচপ্যাড</a>
            </>}
            <button onClick={() => navigate('admission')} className={`${active('admission')} transition flex items-center gap-1.5`}>
              <i className="fa-solid fa-file-pen text-xs text-brand-600" /> ভর্তি আবেদন
            </button>
            {!isLoggedIn && <button onClick={() => navigate('login')} className={`${active('login')} transition flex items-center gap-1.5`}><i className="fa-solid fa-arrow-right-to-bracket text-xs text-brand-600" /> লগইন</button>}
            {isLoggedIn && <button onClick={() => navigate('dashboard')} className={`${active('dashboard')} transition flex items-center gap-1.5 bg-brand-100 px-3 py-1 rounded-lg border border-charcoal`}><i className="fa-solid fa-user-graduate text-xs text-brand-800" /> ড্যাশবোর্ড</button>}
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            {!isLoggedIn
              ? <button onClick={() => navigate('login')} className="px-4 py-2 text-sm font-bold border-2 border-charcoal rounded-xl hover:bg-brand-100 transition shadow-[2px_2px_0px_#111111]"><i className="fa-regular fa-circle-user mr-1" /> লগইন</button>
              : <button onClick={handleLogout} className="px-3.5 py-1.5 text-xs font-bold border-2 border-red-800 text-red-900 rounded-xl hover:bg-red-50 transition">লগআউট</button>}
            <button onClick={() => navigate('admission')} className="px-5 py-2 text-sm font-bold bg-charcoal text-white rounded-xl hover:bg-brand-800 transition shadow-[3px_3px_0px_#A69D88]">
              <i className="fa-solid fa-graduation-cap mr-1 text-brand-300" /> ভর্তি ফরম
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-charcoal text-2xl" aria-label="Toggle Menu">
            <i className={mobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
          </button>
        </div>
        <div className={`${mobileMenuOpen ? '' : 'hidden'} md:hidden bg-brand-50 border-b-2 border-charcoal px-4 pt-3 pb-6 space-y-3 font-medium`}>
          <button onClick={() => navigate('home')} className="w-full text-left py-2 text-charcoal border-b border-brand-200"><i className="fa-solid fa-house mr-2 text-brand-600" /> হোম পেজ</button>
          <button onClick={() => navigate('admission')} className="w-full text-left py-2 text-charcoal border-b border-brand-200 font-bold"><i className="fa-solid fa-file-pen mr-2 text-brand-600" /> অনলাইন ভর্তি আবেদন</button>
          <button onClick={() => navigate(isLoggedIn ? 'dashboard' : 'login')} className="w-full text-left py-2 text-charcoal border-b border-brand-200">
            <i className={`fa-solid ${isLoggedIn ? 'fa-user-graduate' : 'fa-arrow-right-to-bracket'} mr-2 text-brand-600`} />
            {isLoggedIn ? 'স্টুডেন্ট ড্যাশবোর্ড' : 'শিক্ষার্থী ও অভিভাবক লগইন'}
          </button>
          <div className="pt-2 flex flex-col gap-2">
            <button onClick={() => navigate('admission')} className="w-full py-2.5 bg-charcoal text-white font-bold rounded-xl text-center shadow-[2px_2px_0px_#A69D88]">ভর্তি আবেদন করুন</button>
            <a href="tel:09639268128" className="w-full py-2 border-2 border-charcoal text-center rounded-xl font-bold"><i className="fa-solid fa-phone mr-1" /> কল: ০৯৬৩৯২৬৮১২৮</a>
          </div>
        </div>
      </header>
    </>
  )
}

function HeroSection({ setView }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-100 border-2 border-charcoal hand-drawn-badge shadow-[2px_2px_0px_#111111]">
            <span className="font-serif font-bold text-sm text-charcoal">ছোট ছোট হাতে বড় স্বপ্ন ♡</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-charcoal leading-tight">
            শিল্প শিখলে <br />
            <span className="relative inline-block text-white px-3 py-1 bg-charcoal rounded-xl shadow-[4px_4px_0px_#A69D88] rotate-[-1deg]">জীবন রঙে ♡</span>
          </h1>
          <p className="text-base sm:text-lg text-brand-900 leading-relaxed font-medium">
            আপনার সন্তানের সৃজনশীলতাকে প্রস্ফুটিত করতে <strong>কলাভার্স (Kalaverse)</strong> আর্ট একাডেমির খিলক্ষেত ক্যাম্পাসে নতুন ব্যাচে ভর্তি চলছে। এখানে চিত্রকলার মাধ্যমে শিশুদের মননশীলতা, কল্পনাশক্তি ও আত্মবিশ্বাস গড়ে ওঠে।
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            <Feature title="উপকরণ সুবিধা" value="সব আর্ট সামগ্রী ফ্রি" />
            <Feature title="সাপ্তাহিক ক্লাস" value="১ দিন (দেড় ঘণ্টা+)" />
            <div className="p-3 bg-white border-2 border-charcoal rounded-xl shadow-[3px_3px_0px_#111111] col-span-2 sm:col-span-1">
              <div className="text-xs text-brand-600 font-bold uppercase">বিশেষ সুবিধা</div><div className="font-bold text-sm text-charcoal">সহোদরদের ১০% ছাড়</div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button onClick={() => setView('admission')} className="px-7 py-3.5 bg-charcoal text-white font-bold rounded-2xl hover:bg-brand-800 transition transform hover:-translate-y-0.5 shadow-[4px_4px_0px_#A69D88] text-base">
              <i className="fa-solid fa-graduation-cap mr-2 text-brand-300" /> অনলাইন ভর্তি ফরম পূরণ করুন
            </button>
            <a href="#routine" className="px-6 py-3.5 bg-brand-200 text-charcoal font-bold rounded-2xl hover:bg-brand-300 border-2 border-charcoal transition shadow-[3px_3px_0px_#111111]">
              <i className="fa-solid fa-table-list mr-2" /> ক্লাস রুটিন দেখুন
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="bg-white border-2 border-charcoal hand-drawn-box p-6 sm:p-8 shadow-[8px_8px_0px_#111111] relative">
            <div className="absolute -top-4 -right-3 bg-brand text-charcoal font-black text-xs px-3 py-1.5 border-2 border-charcoal rounded-lg shadow-[2px_2px_0px_#111111] rotate-6">কল্পনাই শিল্পের শুরু ♡</div>
            <div className="text-center pb-6 border-b-2 border-dashed border-brand-300">
              <div className="w-16 h-16 mx-auto bg-brand-100 rounded-full border-2 border-charcoal flex items-center justify-center text-3xl mb-3 shadow-[2px_2px_0px_#111111]">🎨</div>
              <h3 className="font-serif font-black text-2xl text-charcoal">কলাভার্স আর্ট একাডেমি</h3>
              <p className="text-xs font-semibold text-brand-700 mt-1">লেভেল ৬, লেক সিটি শপিং কমপ্লেক্স, খিলক্ষেত, ঢাকা</p>
            </div>
            <div className="py-5 space-y-3 text-sm">
              <QuickFee icon="fa-ticket" label="ভর্তি ফি (সকলের জন্য)" value="২০০০/- " />
              <QuickFee icon="fa-receipt" label="মাসিক বেতন" value="১৫০০/- " />
              <QuickFee icon="fa-wallet" label="ভর্তি ফি ও মাসিক বেতন (একসঙ্গে)" value="৩৫০০/- " />
              <div className="flex items-center justify-between p-2.5 bg-brand-50 border border-charcoal rounded-xl">
                <span className="font-medium text-brand-900"><i className="fa-solid fa-phone text-brand-600 mr-2" />যোগাযোগ</span>
                <a href="tel:09639268128" className="font-bold text-charcoal underline hover:text-brand-700">০৯৬৩৯২৬৮১২৮</a>
              </div>
            </div>
            <div className="pt-2 text-center flex flex-col gap-2">
              <span className="inline-block text-xs font-bold text-brand-800 bg-brand-100 px-3 py-1 rounded-full border border-brand-400">★ DRAW • IMAGINE • CREATE ★</span>
              <button onClick={() => setView('admission')} className="w-full mt-2 py-2.5 bg-charcoal text-white text-xs font-bold rounded-xl hover:bg-brand-900 transition">অনলাইন আবেদন পোর্টালে যান →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Feature({ title, value }) {
  return <div className="p-3 bg-white border-2 border-charcoal rounded-xl shadow-[3px_3px_0px_#111111]"><div className="text-xs text-brand-600 font-bold uppercase">{title}</div><div className="font-bold text-sm text-charcoal">{value}</div></div>
}

function QuickFee({ icon, label, value }) {
  return <div className="flex items-center justify-between p-2.5 bg-brand-50 border border-charcoal rounded-xl"><span className="font-medium text-brand-900"><i className={`fa-solid ${icon} text-brand-600 mr-2`} />{label}</span><span className="font-bold text-charcoal bg-white px-2.5 py-1 rounded border border-charcoal">{value}</span></div>
}

function RoutineSection({ setView }) {
  return (
    <section id="routine" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white border-2 border-charcoal hand-drawn-box p-6 sm:p-10 shadow-[6px_6px_0px_#111111]">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-2"><span className="text-2xl">🎨</span><h2 className="text-3xl sm:text-4xl font-serif font-black text-charcoal tracking-wide border-b-4 border-brand-500 pb-1">ক্লাস রুটিন</h2></div>
          <p className="text-sm sm:text-base text-brand-800 font-medium mt-2">ভর্তির সময় রুটিন অনুযায়ী যেকোনো দিন বেছে নেওয়া যাবে (যদি সংশ্লিষ্ট শাখার আসন খালি থাকে)</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-center border-collapse border-2 border-charcoal text-sm sm:text-base font-medium">
            <thead><tr className="bg-brand text-charcoal font-serif font-bold text-base sm:text-lg border-b-2 border-charcoal">
              <th className="py-3.5 px-4 border-r-2 border-charcoal">বার</th><th className="py-3.5 px-4 border-r-2 border-charcoal">সময়</th><th className="py-3.5 px-4 border-r-2 border-charcoal">গ্রুপ</th><th className="py-3.5 px-4">শাখা</th>
            </tr></thead>
            <tbody className="divide-y-2 divide-charcoal bg-white">
              {branches.map((branch, index) => <tr key={branch.code} className={`hover:bg-brand-50 transition ${index % 2 ? 'bg-[#FAF8F5]' : ''}`}>
                <td className="py-3.5 px-4 border-r-2 border-charcoal font-bold text-charcoal">{branch.day}</td><td className="py-3.5 px-4 border-r-2 border-charcoal">{branch.time}</td><td className="py-3.5 px-4 border-r-2 border-charcoal">শিশু</td><td className={`py-3.5 px-4 font-black text-lg ${index % 2 ? 'bg-brand-100' : 'bg-brand-50'}`}>{branch.code}</td>
              </tr>)}
            </tbody>
          </table>
        </div>
        <div className="mt-5 p-3 bg-brand-50 rounded-xl border border-charcoal flex items-center justify-between flex-wrap gap-2 text-xs sm:text-sm">
          <span className="text-brand-900 font-semibold"><i className="fa-solid fa-circle-info text-brand-600 mr-1.5" /> কোনো কারণে ক্লাস মিস হলে পরবর্তীতে মেকআপ ক্লাস করার সুব্যবস্থা রয়েছে।</span>
          <button onClick={() => setView('admission')} className="font-bold underline text-charcoal hover:text-brand-700">ভর্তি আবেদন করুন →</button>
        </div>
      </div>
    </section>
  )
}

function FeesSection({ setView }) {
  return (
    <section id="fees" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-5 bg-white border-2 border-charcoal rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#111111]">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-dashed border-charcoal"><div className="text-3xl">🎨</div><h3 className="text-2xl font-serif font-black text-charcoal">ফি সমূহ</h3></div>
          <div className="p-5 border-2 border-dashed border-charcoal rounded-2xl bg-brand-50 space-y-4 mb-6">
            <div className="text-center"><span className="text-xs uppercase tracking-wider font-bold text-brand-800">ভর্তি ফি (সকলের জন্য)</span><div className="text-3xl font-black text-charcoal mt-1">৳ ২০০০/- </div></div>
            <div className="text-center"><span className="text-xs uppercase tracking-wider font-bold text-brand-800">মাসিক বেতন</span><div className="text-3xl font-black text-charcoal mt-1">৳ ১৫০০ </div></div>
            <div className="border-t border-charcoal/20 pt-3 text-center"><span className="text-xs uppercase tracking-wider font-bold text-brand-800">মাসিক বেতন ও ভর্তি ফি একসঙ্গে (সকলের জন্য)</span><div className="text-2xl font-black text-charcoal mt-1">৳ ৩৫০০/-</div></div>
          </div>
          <p className="text-xs text-brand-800 text-center font-medium leading-relaxed">* ভর্তির সময় ভর্তি ফি এবং এক মাসের বেতন একসাথে প্রদান করতে হয়।</p>
          <button onClick={() => setView('admission')} className="w-full mt-6 py-3 bg-charcoal text-white font-bold rounded-xl hover:bg-brand-800 transition shadow-[3px_3px_0px_#A69D88]">অনলাইনে ভর্তি আবেদন করুন</button>
        </div>
        <div className="md:col-span-7 bg-brand-100 border-2 border-charcoal rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#111111] space-y-5">
          <h3 className="text-xl sm:text-2xl font-serif font-black text-charcoal flex items-center gap-2"><i className="fa-solid fa-circle-check text-charcoal" /> শিক্ষার্থী ও অভিভাবকদের জন্য নির্দেশাবলী</h3>
          <div className="space-y-4 text-sm sm:text-base font-medium text-charcoal">
            <Guideline icon="🎨" title="আর্টের যাবতীয় উপকরণ ফ্রি:" text="পুনরায় জানিয়ে রাখি, উক্ত বেতনের মধ্যেই ক্লাসে আর্ট পেপার, রং, তুলি ও আনুষঙ্গিক যাবতীয় উপকরণ বিনামূল্যে সরবরাহ করা হয়।" />
            <Guideline icon="🗓️" title="ক্লাস সময় ও শিডিউল:" text="প্রত্যেক শিক্ষার্থীর জন্য সপ্তাহে ক্লাস একদিন। সময় কমপক্ষে দেড় ঘণ্টা। ভর্তির সময় রুটিন অনুযায়ী যেকোনো দিন বেছে নেওয়া যাবে (শাখার আসন খালি সাপেক্ষে)।" />
            <Guideline icon="🔄" title="মেকআপ ক্লাস সুবিধা:" text="কোনো যুক্তিসঙ্গত কারণে রুটিন অনুযায়ী ক্লাস করতে ব্যর্থ হলে পরবর্তীতে অন্য ব্যাচের সাথে সেই ক্লাস সম্পন্ন করার সুযোগ রয়েছে।" />
            <Guideline icon="🏷️" title="সহোদর ডিসকাউন্ট:" text={<>একই অভিভাবকের একাধিক শিক্ষার্থীর ক্ষেত্রে মাসিক বেতনে <strong>১০% বেতন মওকুফ</strong> করা হয়।</>} />
          </div>
        </div>
      </div>
    </section>
  )
}

function Guideline({ icon, title, text }) {
  return <div className="flex items-start gap-3 p-3 bg-white/80 rounded-xl border border-charcoal"><span className="text-xl mt-0.5">{icon}</span><p><strong>{title}</strong> {text}</p></div>
}

function Sketchpad({ canvasRef, selectedColor, setSelectedColor, brushSize, setBrushSize, isEraser, setIsEraser, activeTemplate, loadTemplate, clearCanvas, startDrawing, draw, stopDrawing, downloadArtwork }) {
  return (
    <section id="sketchpad" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white border-2 border-charcoal hand-drawn-box p-6 sm:p-10 shadow-[8px_8px_0px_#111111]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b-2 border-charcoal">
          <div>
            <div className="inline-block px-3 py-1 bg-brand-100 border border-charcoal rounded-full text-xs font-bold text-charcoal mb-2">ইন্টারেক্টিভ ড্রয়িং প্যাড</div>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-charcoal">খুদে শিল্পীর হাতে আঁকা স্কেচপ্যাড ও ক্যানভাস</h2>
            <p className="text-xs sm:text-sm text-brand-800 font-medium mt-1">মোবাইল বা কম্পিউটারে আঙুল কিংবা মাউস দিয়ে স্বাধীনভাবে ছবি আঁকুন অথবা পছন্দের আউটলাইনে রং ভরুন!</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-brand-900">টেমপ্লেট:</span>
            <TemplateButton active={activeTemplate === 'boat'} onClick={() => loadTemplate('boat')}>⛵ ডিঙি নৌকা</TemplateButton>
            <TemplateButton active={activeTemplate === 'flower'} onClick={() => loadTemplate('flower')}>🌸 শাপলা ফুল</TemplateButton>
            <TemplateButton active={activeTemplate === 'sun'} onClick={() => loadTemplate('sun')}>☀️ মিষ্টি সূর্য</TemplateButton>
            <button onClick={clearCanvas} className="px-3 py-1 text-xs font-bold border border-charcoal rounded-lg bg-brand-100 hover:bg-brand-200 transition"><i className="fa-solid fa-rotate-left mr-1" /> খালি ক্যানভাস</button>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-b border-brand-200 bg-brand-50/50 px-4 mt-2 rounded-xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-charcoal mr-1">রং:</span>
            {colors.map((color) => <button key={color} onClick={() => { setSelectedColor(color); setIsEraser(false) }} aria-label={`রং ${color}`} className={`w-7 h-7 rounded-full border-2 transition transform hover:scale-110 ${selectedColor === color && !isEraser ? 'scale-125 border-charcoal shadow-md' : 'border-white'}`} style={{ backgroundColor: color }} />)}
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs font-bold"><span>সাইজ:</span><input type="range" min="2" max="30" value={brushSize} onChange={(event) => setBrushSize(Number(event.target.value))} className="w-24 accent-charcoal cursor-pointer" /><span>{brushSize}px</span></div>
            <button onClick={() => setIsEraser(!isEraser)} className={`px-3 py-1.5 text-xs font-bold border border-charcoal rounded-lg transition flex items-center gap-1.5 ${isEraser ? 'bg-charcoal text-white' : 'bg-white text-charcoal hover:bg-brand-100'}`}><i className="fa-solid fa-eraser" /> {isEraser ? 'ইরেজার সক্রিয়' : 'মুছুন'}</button>
          </div>
          <div className="flex items-center gap-2"><button onClick={downloadArtwork} className="px-4 py-1.5 text-xs font-bold bg-charcoal text-white rounded-lg hover:bg-brand-800 transition shadow-[2px_2px_0px_#A69D88]"><i className="fa-solid fa-download mr-1" /> ছবি সেভ করুন</button></div>
        </div>
        <div className="mt-4 border-2 border-charcoal rounded-2xl overflow-hidden bg-[#FAF8F5] relative shadow-inner">
          <canvas ref={canvasRef} id="drawingCanvas" className="w-full h-[380px] sm:h-[460px] block" onPointerDown={startDrawing} onPointerMove={draw} onPointerUp={stopDrawing} onPointerCancel={stopDrawing} onPointerLeave={stopDrawing} />
          <div className="absolute bottom-3 right-3 pointer-events-none text-[11px] font-bold text-brand-600 bg-white/80 px-2.5 py-1 rounded-md border border-charcoal/20">কলাভার্স আর্ট একাডেমি স্কেচবোর্ড</div>
        </div>
        <div className="mt-3 text-center text-xs text-brand-700 font-medium">💡 টিপস: টাচস্ক্রিনে আঙুল বা স্টাইলাস পেন দিয়ে আঁকতে পারেন। আঁকা শেষ হলে <strong>ছবি সেভ করুন</strong> বাটনে ক্লিক করে সংগ্রহে রাখুন!</div>
      </div>
    </section>
  )
}

function TemplateButton({ active, onClick, children }) {
  return <button onClick={onClick} className={`px-3 py-1 text-xs font-bold border border-charcoal rounded-lg hover:bg-brand-100 transition ${active ? 'bg-charcoal text-white' : 'bg-white'}`}>{children}</button>
}

function ContactSection({ setView }) {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-charcoal text-white rounded-3xl p-6 sm:p-10 border-2 border-charcoal shadow-[8px_8px_0px_#A69D88]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <span className="inline-block px-3 py-1 bg-brand text-charcoal font-black text-xs rounded-lg uppercase">সরাসরি দেখা করুন ও ভর্তি তথ্য</span>
            <h2 className="text-2xl sm:text-4xl font-serif font-black text-white">যোগাযোগ এর ঠিকানা</h2>
            <div className="space-y-3 pt-2 text-brand-100 text-base sm:text-lg">
              <div className="flex items-start gap-3"><i className="fa-solid fa-map-location-dot text-brand text-xl mt-1" /><div><strong className="text-white block font-semibold">কলাভার্স (Kalaverse) আর্ট একাডেমি</strong><span>লেভেল ৬, লেক সিটি শপিং কমপ্লেক্স, খিলক্ষেত, ঢাকা - ১২২৯।</span></div></div>
              <div className="flex items-center gap-3"><i className="fa-solid fa-phone-volume text-brand text-xl" /><div><span className="text-sm block text-brand-300">মোবাইল ফোন নম্বর:</span><a href="tel:09639268128" className="text-2xl font-black text-brand hover:underline tracking-wider">০৯৬৩৯২৬৮১২৮</a></div></div>
              <div className="flex items-center gap-3"><i className="fa-regular fa-clock text-brand text-xl" /><span>অফিস খোলা: বৃহস্পতিবার থেকে মঙ্গলবার (ক্লাস শিডিউল ও ভিজিট সময়)</span></div>
            </div>
          </div>
          <div className="md:col-span-5 bg-white text-charcoal p-6 rounded-2xl border-2 border-brand space-y-4">
            <h4 className="font-serif font-black text-xl text-center">আপনার সন্তানের আসন এখনই নিশ্চিত করুন</h4>
            <p className="text-xs text-center text-brand-800 font-medium">প্রতিটি শাখায় আসন সংখ্যা সীমিত। যেকোনো তথ্যের জন্য কল করুন অথবা অনলাইন ভর্তি ফরম পূরণ করুন।</p>
            <div className="space-y-2 pt-2">
              <a href="tel:09639268128" className="w-full block py-3 bg-brand text-charcoal font-bold rounded-xl text-center hover:bg-brand-400 transition"><i className="fa-solid fa-phone mr-1" /> সরাসরি কল করুন</a>
              <button onClick={() => setView('admission')} className="w-full py-3 bg-charcoal text-white font-bold rounded-xl text-center hover:bg-brand-900 transition shadow">ভর্তি আবেদন ফরম পূরণ করুন</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HomePage(props) {
  return <><HeroSection setView={props.setView} /><RoutineSection setView={props.setView} /><FeesSection setView={props.setView} /><Sketchpad {...props} /><ContactSection setView={props.setView} /></>
}

function AdmissionPage({ form, setForm, submitted, setSubmitted, applicationId, handleSubmit, setView }) {
  const update = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.type === 'checkbox' ? event.target.checked : event.target.value }))
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8 flex items-center justify-between">
        <button onClick={() => setView('home')} className="text-sm font-bold text-charcoal hover:underline flex items-center gap-2"><i className="fa-solid fa-arrow-left" /> হোম পেজে ফিরে যান</button>
        <span className="text-xs bg-brand text-charcoal px-3 py-1 rounded-full font-bold uppercase">নতুন ব্যাচে ভর্তি চলছে</span>
      </div>
      <div className="bg-white border-2 border-charcoal hand-drawn-box p-6 sm:p-10 shadow-[8px_8px_0px_#111111]">
        <div className="text-center pb-8 border-b-2 border-dashed border-charcoal">
          <div className="w-16 h-16 mx-auto bg-brand-100 rounded-2xl border-2 border-charcoal flex items-center justify-center text-3xl mb-3 shadow-[2px_2px_0px_#111111]">📝</div>
          <h1 className="text-2xl sm:text-4xl font-serif font-black text-charcoal">শিক্ষার্থী ভর্তি আবেদন ফরম</h1>
          <p className="text-sm text-brand-800 font-medium mt-1">কলাভার্স (Kalaverse) আর্ট একাডেমি • খিলক্ষেত ক্যাম্পাস, ঢাকা</p>
          <div className="inline-block mt-3 px-4 py-1 bg-brand-50 border border-charcoal rounded-full text-xs font-bold text-charcoal">ছোট ছোট হাতে বড় স্বপ্ন ♡ • শিল্প শিখলে জীবন রঙে ♡</div>
        </div>
        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-20 h-20 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-4xl mx-auto border-2 border-charcoal">✓</div>
            <h3 className="text-2xl font-serif font-black text-charcoal">ভর্তি আবেদন সফলভাবে গৃহীত হয়েছে!</h3>
            <p className="text-brand-900 max-w-md mx-auto text-sm leading-relaxed">ধন্যবাদ <strong>{form.guardianName}</strong>। আপনার সন্তান <strong>{form.studentName}</strong>-এর আবেদন আইডি <span className="bg-brand-100 px-2 py-0.5 rounded font-mono font-bold">{applicationId}</span>। আমাদের একাডেমি প্রতিনিধি অতি শীঘ্রই আপনার সাথে যোগাযোগ করবেন।</p>
            <div className="p-4 bg-brand-50 rounded-2xl border border-charcoal max-w-md mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between"><span>নির্বাচিত শাখা:</span><strong>{form.branch}</strong></div><div className="flex justify-between"><span>ভর্তি ফি + ১ম মাসের বেতন:</span><strong>৳ ৩৫০০/-</strong></div><div className="flex justify-between"><span>যোগাযোগ নম্বর:</span><strong>{form.guardianPhone}</strong></div>
            </div>
            <div className="pt-4 flex justify-center gap-4">
              <button onClick={() => { setSubmitted(false); setView('home') }} className="px-6 py-2.5 bg-charcoal text-white rounded-xl font-bold text-sm shadow">হোমে ফিরুন</button>
              <button onClick={() => { setSubmitted(false); setView('login') }} className="px-6 py-2.5 border-2 border-charcoal rounded-xl font-bold text-sm">স্টুডেন্ট লগইন করুন</button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8 pt-8">
            <div>
              <FormHeading number="১">শিক্ষার্থীর ব্যক্তিগত বিবরণ</FormHeading>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField label="শিক্ষার্থীর পূর্ণ নাম (বাংলায়/ইংরেজিতে) *"><input type="text" required value={form.studentName} onChange={update('studentName')} placeholder="উদা: আরিয়ান মাহমুদ" className={inputClass} /></FormField>
                <div className="grid grid-cols-2 gap-3">
                  <FormField label="বয়স (বছর) *"><input type="number" required min="3" max="18" value={form.age} onChange={update('age')} placeholder="উদা: ৭" className={inputClass} /></FormField>
                  <FormField label="লিঙ্গ *"><select value={form.gender} onChange={update('gender')} className={selectClass}><option value="ছেলে">ছেলে</option><option value="মেয়ে">মেয়ে</option><option value="অন্যান্য">অন্যান্য</option></select></FormField>
                </div>
                <FormField label="বর্তমান স্কুল ও শ্রেণি (যদি থাকে)"><input type="text" value={form.school} onChange={update('school')} placeholder="উদা: স্কলার্স স্কুল, ২য় শ্রেণি" className={inputClass} /></FormField>
                <FormField label="পূর্বের আঁকার অভিজ্ঞতা"><select value={form.experience} onChange={update('experience')} className={selectClass}><option value="নতুন শিক্ষার্থী (কোনো পূর্ব অভিজ্ঞতা নেই)">নতুন শিক্ষার্থী (কোনো পূর্ব অভিজ্ঞতা নেই)</option><option value="বাসায় নিজে নিজে ছবি আঁকে">বাসায় নিজে নিজে ছবি আঁকে</option><option value="অন্য কোনো প্রতিষ্ঠানে শিখেছে">অন্য কোনো প্রতিষ্ঠানে শিখেছে</option></select></FormField>
              </div>
            </div>
            <div>
              <FormHeading number="২">পছন্দের শাখা ও রুটিন নির্বাচন</FormHeading>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {branches.map((branch) => <label key={branch.code} className={`relative block p-3.5 border-2 rounded-2xl cursor-pointer transition ${form.branch === branch.name ? 'border-charcoal bg-brand-100 shadow-[3px_3px_0px_#111111]' : 'border-gray-300 hover:border-charcoal bg-white'}`}>
                  <input type="radio" name="branch" value={branch.name} checked={form.branch === branch.name} onChange={update('branch')} className="sr-only" />
                  <div className="flex items-center justify-between"><span className="font-bold text-sm text-charcoal">{branch.day}</span><span className="text-xs px-2 py-0.5 rounded-full font-black bg-charcoal text-white">শাখা {branch.code}</span></div>
                  <div className="text-xs text-brand-900 mt-1">সময়: <strong>{branch.time}</strong></div><div className="text-[11px] text-brand-700 mt-1 font-semibold">গ্রুপ: শিশু গ্রুপ • আসন খালি আছে</div>
                </label>)}
              </div>
            </div>
            <div>
              <FormHeading number="৩">অভিভাবকের তথ্য ও ঠিকানা</FormHeading>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField label="অভিভাবকের নাম (বাবা/মা) *"><input type="text" required value={form.guardianName} onChange={update('guardianName')} placeholder="উদা: মাহমুদুল হাসান" className={inputClass} /></FormField>
                <FormField label="মোবাইল ফোন নম্বর *"><input type="tel" required value={form.guardianPhone} onChange={update('guardianPhone')} placeholder="উদা: ০১৭১XXXXXXXX" className={inputClass} /></FormField>
                <FormField label="বর্তমান ঠিকানা (খিলক্ষেত বা আশেপাশের এলাকা) *" wide><input type="text" required value={form.address} onChange={update('address')} placeholder="উদা: বাসা ১২, রোড ৩, লেক সিটি কনকর্ড, খিলক্ষেত, ঢাকা" className={inputClass} /></FormField>
                <div className="md:col-span-2 p-3 bg-brand-50 border border-charcoal rounded-xl flex items-center justify-between">
                  <div><span className="font-bold text-xs sm:text-sm text-charcoal">একাধিক সহোদর সন্তান ভর্তি করতে চান?</span><p className="text-[11px] text-brand-800">সহোদরদের ক্ষেত্রে মাসিক বেতনে ১০% ছাড় কার্যকর হবে।</p></div>
                  <input type="checkbox" checked={form.hasSibling} onChange={update('hasSibling')} className="w-5 h-5 accent-charcoal cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="p-5 bg-charcoal text-white rounded-2xl border-2 border-brand-400 space-y-3">
              <div className="flex items-center justify-between border-b border-white/20 pb-2"><span className="text-sm font-bold">ভর্তি ফি (এককালীন)</span><span className="text-base font-bold">৳ ২০০০/-</span></div>
              <div className="flex items-center justify-between border-b border-white/20 pb-2"><span className="text-sm font-bold">প্রথম মাসের বেতন</span><span className="text-base font-bold">৳ {form.hasSibling ? '১৩৫০/- (১০% ছাড়সহ)' : '১৫০০/-'}</span></div>
              <div className="flex items-center justify-between pt-1 text-brand"><span className="text-base font-serif font-black">মোট পরিশোধযোগ্য (ভর্তির সময়):</span><span className="text-xl font-serif font-black text-white">৳ {form.hasSibling ? '৩,৩৫০/-' : '৩,৫০০/-'}</span></div>
              <p className="text-[11px] text-brand-200">* ক্লাসের সমস্ত আর্ট সরঞ্জাম ও উপকরণ একাডেমি থেকে বিনামূল্যে প্রদান করা হবে।</p>
            </div>
            <div className="flex items-center justify-end gap-3 pt-4">
              <button type="button" onClick={() => setView('home')} className="px-6 py-3 border-2 border-charcoal text-charcoal font-bold rounded-xl hover:bg-brand-100 transition">বাতিল করুন</button>
              <button type="submit" className="px-8 py-3 bg-charcoal text-white font-bold rounded-xl hover:bg-brand-800 transition shadow-[4px_4px_0px_#A69D88] text-sm"><i className="fa-solid fa-paper-plane mr-2 text-brand" /> ভর্তি আবেদন সম্পূর্ণ করুন</button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

const inputClass = 'w-full px-4 py-2.5 border-2 border-charcoal rounded-xl focus:bg-brand-50 outline-none text-sm font-medium'
const selectClass = 'w-full px-3 py-2.5 border-2 border-charcoal rounded-xl focus:bg-brand-50 outline-none text-sm font-medium bg-white'

function FormHeading({ number, children }) {
  return <h3 className="text-lg font-serif font-black text-charcoal mb-4 flex items-center gap-2 border-b pb-2 border-brand-200"><span className="w-6 h-6 rounded-full bg-charcoal text-white text-xs flex items-center justify-center">{number}</span>{children}</h3>
}

function FormField({ label, wide = false, children }) {
  return <div className={wide ? 'md:col-span-2' : ''}><label className="block text-xs font-bold text-charcoal uppercase mb-1">{label}</label>{children}</div>
}

function LoginPage({ role, setRole, form, setForm, showPassword, setShowPassword, fillDemoCredentials, handleLogin, showToast, setView }) {
  const update = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.type === 'checkbox' ? event.target.checked : event.target.value }))
  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="mb-6 text-center">
        <button onClick={() => setView('home')} className="text-xs font-bold text-charcoal hover:underline inline-flex items-center gap-1 mb-3"><i className="fa-solid fa-arrow-left" /> হোমে ফিরে যান</button>
        <div className="w-16 h-16 bg-charcoal text-brand rounded-2xl mx-auto flex items-center justify-center text-3xl shadow-[3px_3px_0px_#A69D88] mb-2"><i className="fa-solid fa-palette" /></div>
        <h1 className="text-2xl font-serif font-black text-charcoal">কলাভার্স পোর্টাল লগইন</h1><p className="text-xs text-brand-800 font-medium">শিক্ষার্থী ও অভিভাবক অ্যাকাউন্ট</p>
      </div>
      <div className="bg-white border-2 border-charcoal hand-drawn-box p-6 sm:p-8 shadow-[6px_6px_0px_#111111]">
        <div className="flex border-2 border-charcoal rounded-xl p-1 bg-brand-50 mb-6">
          <button onClick={() => setRole('student')} className={`w-1/2 py-1.5 text-xs font-bold rounded-lg transition ${role === 'student' ? 'bg-charcoal text-white shadow' : 'text-charcoal'}`}>শিক্ষার্থী / অভিভাবক</button>
          <button onClick={() => setRole('teacher')} className={`w-1/2 py-1.5 text-xs font-bold rounded-lg transition ${role === 'teacher' ? 'bg-charcoal text-white shadow' : 'text-charcoal'}`}>শিক্ষক / অ্যাডমিন</button>
        </div>
        <div className="mb-4 p-2.5 bg-brand-100 rounded-xl border border-charcoal/30 flex items-center justify-between text-xs"><span className="text-brand-900 font-semibold">ডেমো আইডি দিয়ে চেষ্টা করুন:</span><button onClick={fillDemoCredentials} className="font-bold underline text-charcoal hover:text-brand-700">অটো ফিল করুন</button></div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div><label className="block text-xs font-bold text-charcoal uppercase mb-1">{role === 'student' ? 'স্টুডেন্ট আইডি / মোবাইল নম্বর' : 'অফিসিয়াল ইমেইল'} *</label>
            <div className="relative"><input type="text" required value={form.identifier} onChange={update('identifier')} placeholder="উদা: KV-2026-08 অথবা ০১৭১XXXXXXXX" className="w-full pl-9 pr-3 py-2.5 border-2 border-charcoal rounded-xl focus:bg-brand-50 outline-none text-sm font-medium" /><i className="fa-regular fa-user absolute left-3 top-3.5 text-brand-600 text-xs" /></div>
          </div>
          <div><div className="flex justify-between items-center mb-1"><label className="text-xs font-bold text-charcoal uppercase">পাসওয়ার্ড *</label><a href="#" onClick={(event) => { event.preventDefault(); showToast('পাসওয়ার্ড রিসেট করতে অফিসে যোগাযোগ করুন: ০৯৬৩৯২৬৮১২৮') }} className="text-[11px] text-brand-700 underline font-semibold">ভুলে গেছেন?</a></div>
            <div className="relative"><input type={showPassword ? 'text' : 'password'} required value={form.password} onChange={update('password')} placeholder="••••••••" className="w-full pl-9 pr-10 py-2.5 border-2 border-charcoal rounded-xl focus:bg-brand-50 outline-none text-sm font-medium" /><i className="fa-solid fa-lock absolute left-3 top-3.5 text-brand-600 text-xs" /><button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-brand-700 hover:text-charcoal text-xs"><i className={showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'} /></button></div>
          </div>
          <div className="flex items-center text-xs"><label className="flex items-center gap-2 cursor-pointer font-medium text-brand-900"><input type="checkbox" checked={form.remember} onChange={update('remember')} className="w-4 h-4 accent-charcoal rounded" /> লগইন মনে রাখুন</label></div>
          <button type="submit" className="w-full py-3 bg-charcoal text-white font-bold rounded-xl hover:bg-brand-800 transition shadow-[3px_3px_0px_#A69D88] text-sm"><i className="fa-solid fa-arrow-right-to-bracket mr-2 text-brand" /> ড্যাশবোর্ডে প্রবেশ করুন</button>
        </form>
        <div className="mt-6 pt-4 border-t border-brand-200 text-center space-y-2"><p className="text-xs text-brand-900 font-medium">এখনও ভর্তি হননি?</p><button onClick={() => setView('admission')} className="w-full py-2 border-2 border-charcoal text-charcoal rounded-xl font-bold text-xs hover:bg-brand-100 transition">নতুন শিক্ষার্থী ভর্তি আবেদন করুন</button></div>
      </div>
    </div>
  )
}

function Dashboard({ setView, showToast, handleLogout }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-charcoal text-white rounded-3xl p-6 sm:p-8 border-2 border-charcoal shadow-[6px_6px_0px_#A69D88] mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4"><div className="w-16 h-16 rounded-2xl bg-brand text-charcoal font-black text-2xl flex items-center justify-center border-2 border-white shadow">🎨</div><div><div className="flex items-center gap-2"><h1 className="text-xl sm:text-3xl font-serif font-black">{studentProfile.name}</h1><span className="text-xs bg-brand text-charcoal px-2.5 py-0.5 rounded-full font-bold">সক্রিয় শিক্ষার্থী</span></div><p className="text-xs sm:text-sm text-brand-200 mt-1">আইডি: <span className="font-mono font-bold">{studentProfile.id}</span> • গ্রুপ: {studentProfile.group} • শাখা: <strong>{studentProfile.branch}</strong></p></div></div>
          <div className="flex items-center gap-4 sm:gap-6 border-t md:border-t-0 md:border-l border-white/20 pt-4 md:pt-0 md:pl-6 text-xs sm:text-sm"><div><div className="text-brand-300">উপস্থিতি</div><div className="text-xl font-black text-white">৯২%</div></div><div><div className="text-brand-300">জমাকৃত চিত্রকর্ম</div><div className="text-xl font-black text-white">{studentArtworks.length} টি</div></div><div><div className="text-brand-300">ফি স্ট্যাটাস</div><div className="text-xs font-bold bg-green-500/20 text-green-300 px-2 py-0.5 rounded border border-green-500/40">পরিশোধিত</div></div></div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white border-2 border-charcoal rounded-3xl p-6 shadow-[5px_5px_0px_#111111]">
            <div className="flex items-center justify-between pb-4 border-b border-brand-200"><h3 className="font-serif font-black text-lg text-charcoal flex items-center gap-2"><i className="fa-solid fa-clock text-brand-600" /> পরবর্তী ক্লাসের তথ্য</h3><span className="text-xs bg-brand-100 text-charcoal px-2.5 py-1 rounded-full font-bold border border-charcoal">সাপ্তাহিক রুটিন</span></div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <ClassDetail label="ক্লাসের বার" value={studentProfile.classDay} detail={`শাখা ${studentProfile.branchCode}`} />
              <ClassDetail label="সময়" value={studentProfile.classTime} detail="দেড় ঘণ্টা সেশন" />
              <ClassDetail label="ক্লাসরুম ভেন্যু" value="লেভেল ৬, স্টুডিও B" detail="খিলক্ষেত ক্যাম্পাস" small />
            </div>
            <div className="mt-4 p-3 bg-amber-50 rounded-xl border border-amber-300 flex items-center gap-2 text-xs text-amber-900 font-medium"><i className="fa-solid fa-circle-exclamation text-amber-700" /><span>ক্লাসে কোনো উপকরণ আনতে হবে না। রঙ, আর্ট পেপার ও তুলি একাডেমি থেকেই সরবরাহ করা হবে।</span></div>
          </div>
          <div className="bg-white border-2 border-charcoal rounded-3xl p-6 shadow-[5px_5px_0px_#111111]">
            <div className="flex items-center justify-between pb-4 border-b border-brand-200"><div><h3 className="font-serif font-black text-lg text-charcoal flex items-center gap-2"><i className="fa-solid fa-paintbrush text-brand-600" /> আমার চিত্রশালা (সংরক্ষিত আর্টওয়ার্ক)</h3><p className="text-xs text-brand-800 font-medium">একাডেমি ক্লাসে ও ক্যানভাসে আঁকা চিত্রকর্মসমূহ</p></div><button onClick={() => setView('home')} className="text-xs font-bold underline text-charcoal hover:text-brand-700">+ নতুন ছবি আঁকুন</button></div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5">{studentArtworks.map((art) => <div key={art.title} className="group border-2 border-charcoal rounded-2xl overflow-hidden bg-brand-50 shadow-[3px_3px_0px_#111111] transition transform hover:-translate-y-1"><div className="h-32 bg-white flex items-center justify-center border-b border-charcoal text-5xl">{art.icon}</div><div className="p-3"><div className="flex justify-between items-center"><span className="font-bold text-xs text-charcoal">{art.title}</span><span className="text-[10px] bg-brand text-charcoal px-1.5 py-0.5 rounded font-black">{art.grade}</span></div><div className="text-[11px] text-brand-700 mt-1 flex justify-between"><span>{art.medium}</span><span>{art.date}</span></div></div></div>)}</div>
          </div>
          <div className="bg-white border-2 border-charcoal rounded-3xl p-6 shadow-[5px_5px_0px_#111111]">
            <h3 className="font-serif font-black text-lg text-charcoal mb-4 flex items-center gap-2"><i className="fa-solid fa-receipt text-brand-600" /> ফি ও পেমেন্ট হিস্টোরি</h3>
            <div className="overflow-x-auto"><table className="w-full text-left border-collapse text-xs sm:text-sm"><thead><tr className="border-b-2 border-charcoal bg-brand-100 text-charcoal font-bold"><th className="py-2.5 px-3">রসিদ নং</th><th className="py-2.5 px-3">বিবরণ</th><th className="py-2.5 px-3">তারিখ</th><th className="py-2.5 px-3">পরিমাণ</th><th className="py-2.5 px-3">স্ট্যাটাস</th><th className="py-2.5 px-3 text-right">রসিদ</th></tr></thead>
              <tbody className="divide-y divide-brand-200">{paymentHistory.map((payment) => <tr key={payment.receiptNo} className="hover:bg-brand-50"><td className="py-2.5 px-3 font-mono font-bold">{payment.receiptNo}</td><td className="py-2.5 px-3 font-semibold">{payment.purpose}</td><td className="py-2.5 px-3 text-brand-700">{payment.date}</td><td className="py-2.5 px-3 font-bold">৳ {payment.amount}/-</td><td className="py-2.5 px-3"><span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-800 border border-green-300">পরিশোধিত</span></td><td className="py-2.5 px-3 text-right"><button onClick={() => showToast(`রসিদ #${payment.receiptNo} ডাউনলোড সম্পন্ন হয়েছে!`)} className="text-charcoal hover:text-brand-700 font-bold underline text-xs">ডাউনলোড</button></td></tr>)}</tbody>
            </table></div>
          </div>
        </div>
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-brand-100 border-2 border-charcoal hand-drawn-box p-5 shadow-[4px_4px_0px_#111111]">
            <div className="text-center pb-3 border-b border-charcoal/30"><span className="text-[10px] font-black uppercase tracking-widest text-brand-800">ডিজিটাল স্টুডেন্ট কার্ড</span><h4 className="font-serif font-black text-xl text-charcoal mt-1">কলাভার্স একাডেমি</h4></div>
            <div className="py-4 space-y-2 text-xs"><IdRow label="শিক্ষার্থীর নাম:" value={studentProfile.name} /><IdRow label="স্টুডেন্ট আইডি:" value={studentProfile.id} mono /><IdRow label="অভিভাবকের নাম:" value={studentProfile.guardian} /><IdRow label="জরুরি যোগাযোগ:" value={studentProfile.phone} /><IdRow label="শাখা ও সময়:" value={`শাখা ${studentProfile.branchCode} (${studentProfile.classDay})`} /></div>
            <div className="pt-2 text-center border-t border-charcoal/30"><span className="text-[11px] font-bold text-brand-900">লেক সিটি শপিং কমপ্লেক্স, খিলক্ষেত</span></div>
          </div>
          <div className="bg-white border-2 border-charcoal rounded-3xl p-5 shadow-[4px_4px_0px_#111111]">
            <h4 className="font-serif font-black text-base text-charcoal mb-3 flex items-center gap-1.5"><i className="fa-solid fa-bullhorn text-brand-600" /> একাডেমি নোটিশ বোর্ড</h4>
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-brand-50 rounded-xl border border-charcoal/20"><div className="font-bold text-charcoal">🎨 শিশু চিত্রাঙ্কন প্রদর্শনী ২০২৬</div><p className="text-brand-800 mt-1">আগামী মাসে একাডেমি গ্যালারিতে শিক্ষার্থীদের আঁকা সেরা ছবির প্রদর্শনী অনুষ্ঠিত হবে।</p><span className="text-[10px] text-brand-600 font-semibold block mt-1">১৫ নভেম্বর, ২০২৬</span></div>
              <div className="p-3 bg-brand-50 rounded-xl border border-charcoal/20"><div className="font-bold text-charcoal">📢 মেকআপ ক্লাস নোটিশ</div><p className="text-brand-800 mt-1">যেকোনো ছুটির মেকআপ ক্লাসের শিডিউল জানতে সরাসরি শিক্ষক বা অফিসে যোগাযোগ করুন।</p></div>
            </div>
          </div>
          <div className="bg-charcoal text-white rounded-3xl p-5 space-y-3 border-2 border-charcoal">
            <h4 className="font-serif font-bold text-sm text-brand">দ্রুত অ্যাকশন</h4>
            <button onClick={() => setView('home')} className="w-full py-2 bg-brand text-charcoal font-bold text-xs rounded-xl hover:bg-white transition"><i className="fa-solid fa-pen-nib mr-1" /> অনলাইন ড্রয়িং ক্যানভাস</button>
            <a href="tel:09639268128" className="w-full block py-2 border border-brand text-center text-xs font-bold rounded-xl hover:bg-white/10 transition"><i className="fa-solid fa-phone mr-1" /> হেল্পলাইন: ০৯৬৩৯২৬৮১২৮</a>
            <button onClick={handleLogout} className="w-full py-2 bg-red-900/60 text-red-200 border border-red-800 hover:bg-red-800 text-xs font-bold rounded-xl transition">লগআউট করুন</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ClassDetail({ label, value, detail, small = false }) {
  return <div className="p-3 bg-brand-50 rounded-2xl border border-charcoal/20"><div className="text-xs text-brand-700 font-bold">{label}</div><div className={`${small ? 'text-sm' : 'text-lg'} font-bold text-charcoal`}>{value}</div><div className="text-[11px] text-brand-800">{detail}</div></div>
}

function IdRow({ label, value, mono = false }) {
  return <div className="flex justify-between"><span className="text-brand-800">{label}</span><strong className={`${mono ? 'font-mono ' : ''}text-charcoal`}>{value}</strong></div>
}

function Footer({ setView }) {
  return (
    <footer className="bg-[#FAF8F5] border-t-2 border-charcoal mt-12 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-brand-300">
          <div className="md:col-span-2 space-y-3"><div className="flex items-center gap-2"><span className="font-serif font-black text-2xl text-charcoal">কলাভার্স</span><span className="text-xs bg-charcoal text-brand px-1.5 py-0.5 rounded font-bold">KALAVERSE</span></div><p className="text-xs text-brand-800 max-w-md font-medium leading-relaxed">শিশুদের রঙিন চিন্তা ও সৃজনশীল স্বপ্নকে ক্যানভাসে রূপ দিতে কলাভার্স প্রতিশ্রুতিবদ্ধ। চারুকলা শিক্ষার মাধ্যমে শৈশব হোক বর্ণিল ও আনন্দময়।</p><div className="text-xs font-bold text-charcoal">ছোট ছোট হাতে বড় স্বপ্ন ♡ • শিল্প শিখলে জীবন রঙে ♡</div></div>
          <div><h5 className="font-bold text-sm text-charcoal uppercase mb-3">দ্রুত লিঙ্ক</h5><ul className="space-y-2 text-xs font-semibold text-brand-900"><li><button onClick={() => setView('home')} className="hover:underline">হোম পেজ ও রুটিন</button></li><li><button onClick={() => setView('admission')} className="hover:underline">অনলাইন ভর্তি আবেদন</button></li><li><button onClick={() => setView('login')} className="hover:underline">স্টুডেন্ট / গার্ডিয়ান লগইন</button></li><li><a href="#sketchpad" onClick={() => setView('home')} className="hover:underline">হাতে আঁকা স্কেচপ্যাড</a></li></ul></div>
          <div><h5 className="font-bold text-sm text-charcoal uppercase mb-3">যোগাযোগ</h5><p className="text-xs text-brand-900 font-medium leading-relaxed">লেভেল ৬, লেক সিটি শপিং কমপ্লেক্স, খিলক্ষেত, ঢাকা - ১২২৯।<br /><strong className="text-charcoal block mt-1">মোবাইল: ০৯৬৩৯২৬৮১২৮</strong></p></div>
        </div>
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-700 font-medium gap-3"><p>© 2026 কলাভার্স (Kalaverse) আর্ট একাডেমি। সর্বস্বত্ব সংরক্ষিত।</p><div className="flex gap-4"><span>DRAW</span> • <span>IMAGINE</span> • <span>CREATE</span></div></div>
      </div>
    </footer>
  )
}

function drawTemplate(context, width, height, name) {
  context.save()
  context.strokeStyle = '#111111'
  context.lineWidth = 3.5
  context.lineCap = 'round'
  context.lineJoin = 'round'
  if (name === 'boat') {
    const cx = width / 2
    const cy = height / 2 + 40
    context.beginPath()
    context.moveTo(cx - 140, cy)
    context.quadraticCurveTo(cx, cy + 80, cx + 150, cy)
    context.quadraticCurveTo(cx, cy + 20, cx - 140, cy)
    context.stroke()
    context.beginPath()
    context.moveTo(cx - 20, cy)
    context.lineTo(cx - 20, cy - 130)
    context.lineTo(cx + 60, cy - 40)
    context.lineTo(cx - 20, cy - 40)
    context.stroke()
    context.beginPath()
    context.moveTo(cx - 180, cy + 70)
    for (let index = 0; index < 6; index += 1) context.quadraticCurveTo(cx - 150 + index * 60, cy + 50, cx - 120 + index * 60, cy + 70)
    context.stroke()
  } else if (name === 'flower') {
    const cx = width / 2
    const cy = height / 2 + 30
    context.beginPath()
    context.moveTo(cx, cy + 20)
    context.quadraticCurveTo(cx - 25, cy - 60, cx, cy - 110)
    context.quadraticCurveTo(cx + 25, cy - 60, cx, cy + 20)
    context.moveTo(cx - 10, cy + 15)
    context.quadraticCurveTo(cx - 70, cy - 30, cx - 80, cy - 80)
    context.quadraticCurveTo(cx - 40, cy - 60, cx, cy - 30)
    context.moveTo(cx + 10, cy + 15)
    context.quadraticCurveTo(cx + 70, cy - 30, cx + 80, cy - 80)
    context.quadraticCurveTo(cx + 40, cy - 60, cx, cy - 30)
    context.stroke()
    context.beginPath()
    context.ellipse(cx, cy + 45, 130, 25, 0, 0, Math.PI * 2)
    context.stroke()
  } else if (name === 'sun') {
    const cx = width / 2
    const cy = height / 2 - 20
    context.beginPath()
    context.arc(cx, cy, 65, 0, Math.PI * 2)
    context.stroke()
    for (let index = 0; index < 12; index += 1) {
      const angle = (index * Math.PI) / 6
      context.beginPath()
      context.moveTo(cx + Math.cos(angle) * 75, cy + Math.sin(angle) * 75)
      context.lineTo(cx + Math.cos(angle) * 110, cy + Math.sin(angle) * 110)
      context.stroke()
    }
    context.beginPath()
    context.arc(cx - 22, cy - 12, 6, 0, Math.PI * 2)
    context.arc(cx + 22, cy - 12, 6, 0, Math.PI * 2)
    context.fillStyle = '#111111'
    context.fill()
    context.beginPath()
    context.arc(cx, cy + 10, 28, 0.2 * Math.PI, 0.8 * Math.PI)
    context.stroke()
  }
  context.restore()
}

function App() {
  const [currentView, setCurrentView] = useState('home')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginRole, setLoginRole] = useState('student')
  const [showPassword, setShowPassword] = useState(false)
  const [loginForm, setLoginForm] = useState({ identifier: '', password: '', remember: true })
  const [admissionForm, setAdmissionForm] = useState(initialAdmission)
  const [admissionSubmitted, setAdmissionSubmitted] = useState(false)
  const [lastApplicationId, setLastApplicationId] = useState('')
  const [toastMessage, setToastMessage] = useState('')
  const [brushSize, setBrushSize] = useState(6)
  const [selectedColor, setSelectedColor] = useState('#111111')
  const [isEraser, setIsEraser] = useState(false)
  const [activeTemplate, setActiveTemplate] = useState('boat')
  const activeTemplateRef = useRef('boat')
  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const drawingRef = useRef(false)
  const lastPointRef = useRef({ x: 0, y: 0 })
  const toastTimerRef = useRef(null)

  const showToast = (message) => {
    setToastMessage(message)
    window.clearTimeout(toastTimerRef.current)
    toastTimerRef.current = window.setTimeout(() => setToastMessage(''), 3500)
  }

  const initializeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const ratio = window.devicePixelRatio || 1
    canvas.width = rect.width * ratio
    canvas.height = rect.height * ratio
    const context = canvas.getContext('2d')
    if (!context) return
    context.scale(ratio, ratio)
    context.lineCap = 'round'
    context.lineJoin = 'round'
    context.fillStyle = '#FAF8F5'
    context.fillRect(0, 0, rect.width, rect.height)
    contextRef.current = context
  }, [])

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current
    const context = contextRef.current
    if (!canvas || !context) return
    const rect = canvas.getBoundingClientRect()
    context.fillStyle = '#FAF8F5'
    context.fillRect(0, 0, rect.width, rect.height)
    activeTemplateRef.current = 'none'
    setActiveTemplate('none')
  }, [])

  const loadTemplate = useCallback((name) => {
    clearCanvas()
    activeTemplateRef.current = name
    setActiveTemplate(name)
    const canvas = canvasRef.current
    const context = contextRef.current
    if (!canvas || !context) return
    const rect = canvas.getBoundingClientRect()
    drawTemplate(context, rect.width, rect.height, name)
  }, [clearCanvas])

  useEffect(() => {
    if (currentView !== 'home') return undefined
    initializeCanvas()
    const canvas = canvasRef.current
    const context = contextRef.current
    if (canvas && context) {
      const rect = canvas.getBoundingClientRect()
      drawTemplate(context, rect.width, rect.height, activeTemplateRef.current)
    }
    const resizeCanvas = () => {
      initializeCanvas()
      if (activeTemplateRef.current !== 'none') {
        const canvas = canvasRef.current
        const context = contextRef.current
        if (canvas && context) {
          const rect = canvas.getBoundingClientRect()
          drawTemplate(context, rect.width, rect.height, activeTemplateRef.current)
        }
      }
    }
    window.addEventListener('resize', resizeCanvas)
    return () => window.removeEventListener('resize', resizeCanvas)
  }, [currentView, initializeCanvas])

  useEffect(() => () => window.clearTimeout(toastTimerRef.current), [])

  const setView = (view) => {
    if (view === 'home') {
      if (canvasRef.current && contextRef.current) {
        loadTemplate('boat')
      } else {
        activeTemplateRef.current = 'boat'
        setActiveTemplate('boat')
      }
    }
    setCurrentView(view)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLogin = (event) => {
    event.preventDefault()
    setIsLoggedIn(true)
    setView('dashboard')
    showToast(`স্বাগতম, ${studentProfile.name}! ড্যাশবোর্ডে সফলভাবে লগইন হয়েছে।`)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setView('home')
    showToast('সফলভাবে লগআউট করা হয়েছে।')
  }

  const handleAdmissionSubmit = (event) => {
    event.preventDefault()
    setLastApplicationId(`KV-${Math.floor(1000 + Math.random() * 9000)}`)
    setAdmissionSubmitted(true)
    showToast('ভর্তি আবেদন সফলভাবে সম্পন্ন হয়েছে!')
  }

  const getCoordinates = (event) => {
    const rect = canvasRef.current.getBoundingClientRect()
    return { x: event.clientX - rect.left, y: event.clientY - rect.top }
  }

  const startDrawing = (event) => {
    const context = contextRef.current
    if (!context) return
    event.currentTarget.setPointerCapture(event.pointerId)
    drawingRef.current = true
    const { x, y } = getCoordinates(event)
    lastPointRef.current = { x, y }
    context.beginPath()
    context.arc(x, y, brushSize / 2, 0, Math.PI * 2)
    context.fillStyle = isEraser ? '#FAF8F5' : selectedColor
    context.fill()
  }

  const draw = (event) => {
    const context = contextRef.current
    if (!drawingRef.current || !context) return
    const { x, y } = getCoordinates(event)
    context.beginPath()
    context.moveTo(lastPointRef.current.x, lastPointRef.current.y)
    context.lineTo(x, y)
    context.strokeStyle = isEraser ? '#FAF8F5' : selectedColor
    context.lineWidth = brushSize
    context.stroke()
    lastPointRef.current = { x, y }
  }

  const stopDrawing = (event) => {
    if (!drawingRef.current) return
    drawingRef.current = false
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
  }

  const downloadArtwork = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const link = document.createElement('a')
    link.download = 'kalaverse-art-drawing.png'
    link.href = canvas.toDataURL('image/png')
    link.click()
    showToast('ছবি সফলভাবে ডাউনলোড হয়েছে!')
  }

  const fillDemoCredentials = () => {
    setLoginForm((form) => ({ ...form, identifier: 'KV-2026-08', password: '123456' }))
    showToast('ডেমো তথ্য সফলভাবে পূর্ণ করা হয়েছে!')
  }

  return (
    <>
      <div className="children-watermark" />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header currentView={currentView} isLoggedIn={isLoggedIn} setView={setView} handleLogout={handleLogout} />
        <main className="flex-grow">
          {currentView === 'home' && <HomePage canvasRef={canvasRef} selectedColor={selectedColor} setSelectedColor={setSelectedColor} brushSize={brushSize} setBrushSize={setBrushSize} isEraser={isEraser} setIsEraser={setIsEraser} activeTemplate={activeTemplate} loadTemplate={loadTemplate} clearCanvas={clearCanvas} startDrawing={startDrawing} draw={draw} stopDrawing={stopDrawing} downloadArtwork={downloadArtwork} setView={setView} />}
          {currentView === 'admission' && <AdmissionPage form={admissionForm} setForm={setAdmissionForm} submitted={admissionSubmitted} setSubmitted={setAdmissionSubmitted} applicationId={lastApplicationId} handleSubmit={handleAdmissionSubmit} setView={setView} />}
          {currentView === 'login' && <LoginPage role={loginRole} setRole={setLoginRole} form={loginForm} setForm={setLoginForm} showPassword={showPassword} setShowPassword={setShowPassword} fillDemoCredentials={fillDemoCredentials} handleLogin={handleLogin} showToast={showToast} setView={setView} />}
          {currentView === 'dashboard' && <Dashboard setView={setView} showToast={showToast} handleLogout={handleLogout} />}
        </main>
        <Footer setView={setView} />
        {toastMessage && <div className="fixed bottom-6 right-6 z-50 bg-charcoal text-white px-5 py-3 rounded-2xl border-2 border-brand shadow-xl flex items-center gap-3"><i className="fa-solid fa-circle-check text-brand text-lg" /><span className="text-sm font-semibold">{toastMessage}</span></div>}
      </div>
    </>
  )
}

export default App
