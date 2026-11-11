export function Toast({ message }) {
  if (!message) return null
  return <div className="fixed bottom-6 right-6 z-50 bg-charcoal text-white px-5 py-3 rounded-2xl border-2 border-brand shadow-xl flex items-center gap-3"><i className="fa-solid fa-circle-check text-brand text-lg" /><span className="text-sm font-semibold">{message}</span></div>
}
