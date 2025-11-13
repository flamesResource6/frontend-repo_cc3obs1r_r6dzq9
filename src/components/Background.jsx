import React from 'react'

// Full-screen layered background: forest, castle silhouette, fog, floating binary fireflies
function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a12] via-[#0f241a] to-[#0b1712]" />

      {/* Subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.6))]" />

      {/* Castle silhouette */}
      <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1600px] max-w-none opacity-30" viewBox="0 0 1600 600" aria-hidden>
        <g fill="#0e231a">
          <path d="M0 520 H1600 V600 H0 Z" />
          <path d="M200 520 L260 420 L320 520 Z" />
          <path d="M450 520 L520 380 L590 520 Z" />
          <path d="M720 520 L820 340 L920 520 Z" />
          <path d="M1040 520 L1100 440 L1160 520 Z" />
          <path d="M1280 520 L1360 390 L1440 520 Z" />
        </g>
        {/* Simple turrets */}
        <g fill="#0b1d15">
          <rect x="730" y="280" width="40" height="120" />
          <rect x="840" y="260" width="36" height="140" />
          <rect x="790" y="300" width="30" height="100" />
          <rect x="880" y="310" width="26" height="90" />
        </g>
      </svg>

      {/* Vines and glowing mushrooms around edges */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-24 bg-[linear-gradient(180deg,rgba(18,55,40,0.6),transparent_40%)]" />
        <div className="absolute right-0 top-0 h-full w-24 bg-[linear-gradient(180deg,rgba(18,55,40,0.6),transparent_40%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-[linear-gradient(0deg,rgba(11,23,18,0.9),transparent)]" />
        {/* Glowing mushrooms */}
        <div className="absolute bottom-6 left-10 h-2 w-8 rounded-full blur-md bg-cyan-300/50" />
        <div className="absolute bottom-8 left-14 h-1.5 w-6 rounded-full blur-md bg-cyan-200/60" />
        <div className="absolute bottom-7 right-16 h-2 w-8 rounded-full blur-md bg-emerald-300/50" />
      </div>

      {/* Floating binary fireflies */}
      <div className="absolute inset-0 mix-blend-screen">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-[10px] text-emerald-200/60 animate-[float_12s_linear_infinite]"
            style={{
              left: `${(i * 97) % 100}%`,
              top: `${(i * 53) % 100}%`,
              animationDelay: `${i * 0.4}s`,
            }}
          >
            {i % 2 === 0 ? '0101' : '<>\u2728'}
          </span>
        ))}
      </div>

      {/* Soft fog layers */}
      <div className="absolute inset-x-0 bottom-0 h-64 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_30%_at_50%_100%,rgba(255,255,255,0.06),transparent)]" />
      </div>

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0) translateX(0); opacity: .7; }
            50% { transform: translateY(-30px) translateX(10px); opacity: 1; }
            100% { transform: translateY(0) translateX(0); opacity: .7; }
          }
        `}
      </style>
    </div>
  )
}

export default Background
