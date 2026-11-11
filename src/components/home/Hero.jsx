export function Hero({ setView }) {
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

export function Feature({ title, value }) {
  return <div className="p-3 bg-white border-2 border-charcoal rounded-xl shadow-[3px_3px_0px_#111111]"><div className="text-xs text-brand-600 font-bold uppercase">{title}</div><div className="font-bold text-sm text-charcoal">{value}</div></div>
}

export function QuickFee({ icon, label, value }) {
  return <div className="flex items-center justify-between p-2.5 bg-brand-50 border border-charcoal rounded-xl"><span className="font-medium text-brand-900"><i className={`fa-solid ${icon} text-brand-600 mr-2`} />{label}</span><span className="font-bold text-charcoal bg-white px-2.5 py-1 rounded border border-charcoal">{value}</span></div>
}
