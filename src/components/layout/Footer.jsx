export function Footer({ setView }) {
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
