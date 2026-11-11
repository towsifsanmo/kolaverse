export function ContactSection({ setView }) {
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
