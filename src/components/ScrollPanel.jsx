import React from 'react'

function ScrollPanel({ title, children, id }) {
  return (
    <section id={id} className="relative w-full max-w-5xl mx-auto px-6 sm:px-10 py-10">
      <div className="relative">
        {/* Glow behind scroll */}
        <div className="absolute -inset-1 rounded-xl bg-emerald-400/10 blur-xl" />
        {/* Parchment scroll */}
        <div className="relative bg-[#f1e8d0] text-[#2b2b2b] rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.45)] border border-[#eadfbe] overflow-hidden">
          {/* Scroll edges */}
          <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[#d2c39b] via-[#eadfbe] to-[#d2c39b]" />
          <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-[#d2c39b] via-[#eadfbe] to-[#d2c39b]" />
          {/* Subtle paper texture using noise */}
          <div className="absolute inset-0 opacity-30 mix-blend-multiply bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05),transparent_60%)]" />

          <div className="relative p-6 sm:p-10">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1e382e] tracking-wide mb-4 flex items-center gap-3">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-600 shadow-[0_0_12px_#34d399]" />
              {title}
            </h2>
            <div className="text-base leading-relaxed text-[#274037]">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScrollPanel
