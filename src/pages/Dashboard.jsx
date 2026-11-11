import { studentArtworks, studentProfile, paymentHistory } from '../data/academyData.js'

export function Dashboard({ setView, showToast, handleLogout }) {
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

export function ClassDetail({ label, value, detail, small = false }) {
  return <div className="p-3 bg-brand-50 rounded-2xl border border-charcoal/20"><div className="text-xs text-brand-700 font-bold">{label}</div><div className={`${small ? 'text-sm' : 'text-lg'} font-bold text-charcoal`}>{value}</div><div className="text-[11px] text-brand-800">{detail}</div></div>
}

export function IdRow({ label, value, mono = false }) {
  return <div className="flex justify-between"><span className="text-brand-800">{label}</span><strong className={`${mono ? 'font-mono ' : ''}text-charcoal`}>{value}</strong></div>
}
