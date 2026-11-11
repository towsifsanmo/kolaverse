import { branches } from '../data/academyData.js'

export function AdmissionPage({ form, setForm, submitted, setSubmitted, applicationId, handleSubmit, setView }) {
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
