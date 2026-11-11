import { colors } from '../../data/academyData.js'

export function Art({ canvasRef, selectedColor, setSelectedColor, brushSize, setBrushSize, isEraser, setIsEraser, activeTemplate, loadTemplate, clearCanvas, startDrawing, draw, stopDrawing, downloadArtwork }) {
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

export function TemplateButton({ active, onClick, children }) {
  return <button onClick={onClick} className={`px-3 py-1 text-xs font-bold border border-charcoal rounded-lg hover:bg-brand-100 transition ${active ? 'bg-charcoal text-white' : 'bg-white'}`}>{children}</button>
}
