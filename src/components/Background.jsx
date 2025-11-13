import React from 'react'

// Full-screen layered background: deep forest canopy, hills, soft rays, floating leaves and fireflies
function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Earthy gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a12] via-[#0e2119] to-[#0a1712]" />

      {/* Sun rays through canopy */}
      <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-soft-light">
        <div className="absolute -left-20 -top-40 h-[120vh] w-[120vw] bg-[conic-gradient(from_200deg_at_60%_0%,rgba(255,235,130,0.1)_0deg,transparent_60deg)]" />
        <div className="absolute left-0 -top-20 h-[120vh] w-[120vw] bg-[conic-gradient(from_210deg_at_30%_0%,rgba(255,235,130,0.08)_0deg,transparent_70deg)]" />
      </div>

      {/* Layered forest hills silhouettes */}
      <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1800px] max-w-none" viewBox="0 0 1800 600" aria-hidden>
        <g fill="#0c1f17" opacity="0.85">
          <path d="M0 420 C 300 380, 600 460, 900 430 C 1200 400, 1500 460, 1800 420 L 1800 600 L 0 600 Z" />
        </g>
        <g fill="#0b1c15" opacity="0.9">
          <path d="M0 470 C 250 440, 600 500, 900 480 C 1200 460, 1550 520, 1800 490 L 1800 600 L 0 600 Z" />
        </g>
        <g fill="#0f2a20" opacity="0.8">
          <path d="M0 520 C 260 500, 620 560, 900 540 C 1180 520, 1540 580, 1800 560 L 1800 600 L 0 600 Z" />
        </g>
        {/* Sparse tree trunks */}
        <g fill="#123226" opacity="0.35">
          {Array.from({ length: 18 }).map((_, i) => (
            <rect key={i} x={60 + i * 95} y={260 + (i % 5) * 10} width="8" height="200" rx="3" />
          ))}
        </g>
      </svg>

      {/* Vines and ground glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-24 bg-[linear-gradient(180deg,rgba(16,60,44,0.5),transparent_40%)]" />
        <div className="absolute right-0 top-0 h-full w-24 bg-[linear-gradient(180deg,rgba(16,60,44,0.5),transparent_40%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-[linear-gradient(0deg,rgba(8,18,14,0.95),transparent)]" />
        {/* Glowing mushrooms */}
        <div className="absolute bottom-7 left-12 h-2 w-8 rounded-full blur-md bg-emerald-300/50" />
        <div className="absolute bottom-9 left-16 h-1.5 w-6 rounded-full blur-md bg-cyan-200/60" />
        <div className="absolute bottom-8 right-20 h-2 w-8 rounded-full blur-md bg-lime-300/50" />
      </div>

      {/* Floating leaves and fireflies */}
      <div className="absolute inset-0 mix-blend-screen">
        {Array.from({ length: 48 }).map((_, i) => {
          const isLeaf = i % 3 !== 0
          const symbol = isLeaf ? (i % 2 === 0 ? '🍃' : '🍂') : '✨'
          const size = isLeaf ? (i % 2 === 0 ? 14 : 12) : 10
          return (
            <span
              key={i}
              className="absolute select-none text-emerald-200/70 will-change-transform animate-[float_14s_linear_infinite]"
              style={{
                left: `${(i * 89) % 100}%`,
                top: `${(i * 47) % 100}%`,
                fontSize: `${size}px`,
                filter: isLeaf ? 'drop-shadow(0 0 6px rgba(16,185,129,0.25))' : 'drop-shadow(0 0 8px rgba(255,255,255,0.4))',
                animationDelay: `${i * 0.35}s`,
              }}
            >
              {symbol}
            </span>
          )
        })}
      </div>

      {/* Soft fog layers */}
      <div className="absolute inset-x-0 bottom-0 h-64 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_30%_at_50%_100%,rgba(255,255,255,0.06),transparent)]" />
      </div>

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: .75; }
            25% { transform: translateY(-24px) translateX(8px) rotate(8deg); opacity: 1; }
            50% { transform: translateY(-12px) translateX(-6px) rotate(-6deg); opacity: .9; }
            100% { transform: translateY(0) translateX(0) rotate(0deg); opacity: .75; }
          }
        `}
      </style>
    </div>
  )
}

export default Background
