export function LoginPage({ role, setRole, form, setForm, showPassword, setShowPassword, fillDemoCredentials, handleLogin, showToast, setView }) {
  const update = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.type === 'checkbox' ? event.target.checked : event.target.value }))
  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="mb-6 text-center">
        <button onClick={() => setView('home')} className="text-xs font-bold text-charcoal hover:underline inline-flex items-center gap-1 mb-3"><i className="fa-solid fa-arrow-left" /> হোমে ফিরে যান</button>
        <div className="w-16 h-16 bg-charcoal text-brand rounded-2xl mx-auto flex items-center justify-center text-3xl shadow-[3px_3px_0px_#A69D88] mb-2"><i className="fa-solid fa-palette" /></div>
        <h1 className="text-2xl font-serif font-black text-charcoal">কলাভার্স পোর্টাল লগইন</h1><p className="text-xs text-brand-800 font-medium">শিক্ষার্থী ও অভিভাবক অ্যাকাউন্ট</p>
      </div>
      <div className="bg-white border-2 border-charcoal hand-drawn-box p-6 sm:p-8 shadow-[6px_6px_0px_#111111]">
        {/* <div className="flex border-2 border-charcoal rounded-xl p-1 bg-brand-50 mb-6">
          <button onClick={() => setRole('student')} className={`w-1/2 py-1.5 text-xs font-bold rounded-lg transition ${role === 'student' ? 'bg-charcoal text-white shadow' : 'text-charcoal'}`}>শিক্ষার্থী / অভিভাবক</button>
          <button onClick={() => setRole('teacher')} className={`w-1/2 py-1.5 text-xs font-bold rounded-lg transition ${role === 'teacher' ? 'bg-charcoal text-white shadow' : 'text-charcoal'}`}>শিক্ষক / অ্যাডমিন</button>
        </div> */}
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
