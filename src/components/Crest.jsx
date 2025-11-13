import React from 'react'

function Crest({ className = '' }) {
  return (
    <div className={`relative inline-flex items-center ${className}`} aria-label="Crest: sword, quill, and leaf">
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow" cx="0.5" cy="0.5" r="0.6">
            <stop offset="0%" stopColor="#00E5A8" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#00E5A8" stopOpacity="0"/>
          </radialGradient>
          <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F6E27A"/>
            <stop offset="100%" stopColor="#D4AF37"/>
          </linearGradient>
          <linearGradient id="leafG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#58C472"/>
            <stop offset="100%" stopColor="#2F855A"/>
          </linearGradient>
        </defs>
        <circle cx="28" cy="28" r="26" fill="url(#glow)"/>
        <circle cx="28" cy="28" r="22" fill="#0B1C14" stroke="#164032" strokeWidth="2"/>
        {/* Shield */}
        <path d="M28 10 L40 14 V26 C40 34 34 40 28 44 C22 40 16 34 16 26 V14 L28 10 Z" fill="#0E2A21" stroke="url(#gold)" strokeWidth="2"/>
        {/* Sword */}
        <path d="M26 15 L27.5 15 L27.5 33 L26 33 Z" fill="#C7CCD1"/>
        <path d="M23 18 H31 V19.5 H23 Z" fill="#D4AF37"/>
        <circle cx="27" cy="34.5" r="1.5" fill="#A0AEC0"/>
        {/* Quill */}
        <path d="M32 18 C38 22 38 30 32 36 C30 34 30 26 32 18 Z" fill="#E6D5B8" stroke="#C9B18D"/>
        {/* Leaf */}
        <path d="M18 20 C16 26 18 32 24 34 C26 28 24 22 18 20 Z" fill="url(#leafG)"/>
        {/* Cross lines to suggest code */}
        <line x1="20" y1="26" x2="36" y2="26" stroke="#6EE7B7" strokeOpacity="0.7" strokeWidth="1"/>
        <line x1="20" y1="30" x2="34" y2="30" stroke="#6EE7B7" strokeOpacity="0.5" strokeWidth="1"/>
      </svg>
    </div>
  )
}

export default Crest
