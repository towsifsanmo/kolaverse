export function FeesSection({ setView }) {
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

export function Guideline({ icon, title, text }) {
  return <div className="flex items-start gap-3 p-3 bg-white/80 rounded-xl border border-charcoal"><span className="text-xl mt-0.5">{icon}</span><p><strong>{title}</strong> {text}</p></div>
}
