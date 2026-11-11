import { branches } from '../../data/academyData.js'

export function RoutineSection({ setView }) {
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
