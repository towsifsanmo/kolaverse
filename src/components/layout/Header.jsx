import { useState } from 'react'

export function AnnouncementBar({ isLoggedIn, setView }) {
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

export function Header({ currentView, isLoggedIn, setView, handleLogout }) {
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

          <nav className="hidden lg:flex items-center gap-6 font-medium text-sm text-charcoal">
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

          <div className="hidden lg:flex items-center gap-3">
            {!isLoggedIn
              ? <button onClick={() => navigate('login')} className="px-4 py-2 text-sm font-bold border-2 border-charcoal rounded-xl hover:bg-brand-100 transition shadow-[2px_2px_0px_#111111]"><i className="fa-regular fa-circle-user mr-1" /> লগইন</button>
              : <button onClick={handleLogout} className="px-3.5 py-1.5 text-xs font-bold border-2 border-red-800 text-red-900 rounded-xl hover:bg-red-50 transition">লগআউট</button>}
            <button onClick={() => navigate('admission')} className="px-5 py-2 text-sm font-bold bg-charcoal text-white rounded-xl hover:bg-brand-800 transition shadow-[3px_3px_0px_#A69D88]">
              <i className="fa-solid fa-graduation-cap mr-1 text-brand-300" /> ভর্তি ফরম
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-charcoal text-2xl" aria-label="Toggle Menu">
            <i className={mobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
          </button>
        </div>
        <div className={`${mobileMenuOpen ? '' : 'hidden'} lg:hidden bg-brand-50 border-b-2 border-charcoal px-4 pt-3 pb-6 space-y-3 font-medium`}>
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
