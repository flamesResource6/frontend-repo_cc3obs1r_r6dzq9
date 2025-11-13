import React from 'react'

// Cinematic woodland-meets-medieval background with: full tree lines, distant castle,
// riders on horseback, banners, soft sun shafts, fireflies, and bioluminescent ground glow.
// Pure CSS/SVG, lightweight and responsive.
function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Deep forest gradient base with elegant teal→emerald depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#08140F] via-[#0B1E16] to-[#08130F]" />

      {/* Sun shafts filtering through canopy (conic gradients) */}
      <div className="pointer-events-none absolute inset-0 opacity-25 mix-blend-soft-light">
        <div className="absolute -left-24 -top-40 h-[140vh] w-[140vw] bg-[conic-gradient(from_200deg_at_60%_0%,rgba(253,244,169,0.10)_0deg,transparent_70deg)]" />
        <div className="absolute left-0 -top-20 h-[130vh] w-[130vw] bg-[conic-gradient(from_215deg_at_30%_0%,rgba(253,244,169,0.08)_0deg,transparent_80deg)]" />
        <div className="absolute left-10 -top-10 h-[120vh] w-[120vw] bg-[conic-gradient(from_210deg_at_45%_0%,rgba(213,189,95,0.08)_0deg,transparent_70deg)]" />
      </div>

      {/* Distant sky haze + subtle vignette for cinematic framing */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(120%_60%_at_50%_-10%,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_120%,rgba(0,0,0,0.55),transparent_70%)]" />
      </div>

      {/* Layer 1: Far mountains + castle silhouette */}
      <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2200px] max-w-none" viewBox="0 0 2200 700" aria-hidden>
        {/* Distant ridgeline */}
        <path fill="#0B2118" opacity="0.9" d="M0 500 C 280 460, 520 520, 820 500 C 1120 480, 1540 540, 2200 500 L 2200 700 L 0 700 Z" />
        {/* Castle keep with towers and banners */}
        <g fill="#0E2A1E" opacity="0.95">
          {/* Base wall */}
          <path d="M1280 470 h380 v60 h-380z" />
          {/* Towers */}
          <rect x="1320" y="410" width="48" height="120" />
          <rect x="1406" y="395" width="54" height="135" />
          <rect x="1500" y="420" width="48" height="110" />
          <rect x="1585" y="400" width="50" height="130" />
          {/* Merlons */}
          {Array.from({length: 10}).map((_,i)=> (
            <rect key={i} x={1290 + i*36} y={460} width="18" height="16" />
          ))}
          {/* Flags */}
          <g fill="#D4AF37">
            <path d="M1350 380 v70" stroke="#D4AF37" strokeWidth="3" />
            <path d="M1350 392 l36 10 l-36 12 z" />
            <path d="M1598 368 v74" stroke="#D4AF37" strokeWidth="3" />
            <path d="M1598 380 l34 10 l-34 12 z" />
          </g>
        </g>
      </svg>

      {/* Layer 2: Tall pines/trees midground */}
      <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2400px] max-w-none" viewBox="0 0 2400 800" aria-hidden>
        <g fill="#0F2F22" opacity="0.95">
          {Array.from({ length: 22 }).map((_, i) => {
            const x = 40 + i * 100
            const h = 140 + ((i * 37) % 120)
            return (
              <path key={i} d={`M${x} 660 l40 -${h} l40 ${h} z`} />
            )
          })}
        </g>
        {/* Subtle trunks */}
        <g fill="#123728" opacity="0.45">
          {Array.from({ length: 26 }).map((_, i) => (
            <rect key={i} x={60 + i * 86} y={520} width="8" height="180" rx="3" />
          ))}
        </g>
      </svg>

      {/* Layer 3: Riders on horseback (foreground silhouettes) */}
      <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2200px] max-w-none" viewBox="0 0 2200 600" aria-hidden>
        <g fill="#123C2C" opacity="0.95">
          {/* rolling ground */}
          <path d="M0 520 C 320 500, 680 560, 1100 540 C 1520 520, 1880 560, 2200 540 L 2200 600 L 0 600 Z" />
        </g>
        <g fill="#14523D" opacity="0.95">
          {/* rider silhouettes (simplified) */}
          <path d="M380 510 c20-22 48-30 78-26 c18 3 32 10 50 18 c-10 4 -20 10 -30 18 c20 0 36 6 48 16 c-26 4 -58 6 -96 4 c-28 -2 -44 -10 -50 -30 z" />
          <path d="M980 508 c18-20 44-28 72-24 c16 2 30 8 46 16 c-8 3 -16 8 -24 14 c18 0 32 6 42 14 c-24 4 -52 6 -86 4 c-26 -2 -40 -10 -50 -24 z" />
          <path d="M1560 506 c18-18 42-26 70-22 c14 2 28 8 42 14 c-8 4 -16 10 -22 14 c16 2 30 6 40 14 c-22 4 -50 6 -82 4 c-24 -2 -38 -10 -48 -24 z" />
        </g>
      </svg>

      {/* Decorative foreground: bioluminescent mushrooms + gold glints */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-[linear-gradient(0deg,rgba(7,16,12,0.95),transparent)]" />
        <div className="absolute bottom-8 left-10 h-2 w-8 rounded-full blur-md bg-emerald-300/60" />
        <div className="absolute bottom-10 left-16 h-1.5 w-5 rounded-full blur-md bg-cyan-200/60" />
        <div className="absolute bottom-9 right-16 h-2 w-8 rounded-full blur-md bg-lime-300/60" />
        {/* gold glints */}
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={i} className="absolute h-0.5 w-3 rounded-full bg-[#D4AF37]/40"
               style={{ bottom: `${8 + (i%3)*14}px`, left: `${6 + i*6}%`, filter: 'blur(0.5px)' }} />
        ))}
      </div>

      {/* Floating leaves, birds, and fireflies */}
      <div className="absolute inset-0 mix-blend-screen">
        {Array.from({ length: 64 }).map((_, i) => {
          const kind = i % 5
          const symbol = kind === 0 ? '✨' : kind === 1 ? '🍃' : kind === 2 ? '🍂' : kind === 3 ? '🕊️' : '🪶'
          const size = kind === 0 ? 10 : kind === 1 ? 16 : kind === 2 ? 14 : 12
          const hue = kind === 0 ? 'drop-shadow(0 0 9px rgba(255,255,255,0.5))' : 'drop-shadow(0 0 6px rgba(52,211,153,0.25))'
          return (
            <span
              key={i}
              className="absolute select-none will-change-transform animate-[float_16s_linear_infinite]"
              style={{
                left: `${(i * 79) % 100}%`,
                top: `${(i * 43) % 100}%`,
                fontSize: `${size}px`,
                filter: hue,
                color: 'rgba(209,250,229,0.8)',
                animationDelay: `${i * 0.35}s`,
              }}
            >
              {symbol}
            </span>
          )
        })}
      </div>

      {/* Soft fog layers for depth */}
      <div className="absolute inset-x-0 bottom-0 h-64 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_30%_at_50%_100%,rgba(255,255,255,0.07),transparent)]" />
      </div>

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: .8; }
            25% { transform: translateY(-26px) translateX(10px) rotate(8deg); opacity: 1; }
            50% { transform: translateY(-12px) translateX(-8px) rotate(-6deg); opacity: .92; }
            100% { transform: translateY(0) translateX(0) rotate(0deg); opacity: .8; }
          }
        `}
      </style>
    </div>
  )
}

export default Background
