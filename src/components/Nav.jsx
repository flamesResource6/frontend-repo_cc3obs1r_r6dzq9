import React from 'react'
import Crest from './Crest'

function Nav() {
  const items = [
    { href: '#about', label: 'About' },
    { href: '#quests', label: 'Quests' },
    { href: '#spellbook', label: 'Spellbook' },
    { href: '#contact', label: 'Send a Raven' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-6xl flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Crest />
          <div className="text-emerald-200">
            <p className="text-xs uppercase tracking-widest opacity-70">Sir Themalka</p>
            <h1 className="text-base sm:text-lg font-semibold">Knight of Code & Keeper of Nature</h1>
          </div>
        </div>
        <nav className="hidden sm:flex items-center gap-4 bg-emerald-900/40 border border-emerald-700/40 rounded-full px-3 py-1.5 shadow-lg shadow-emerald-900/40 backdrop-blur">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="text-emerald-100/80 hover:text-emerald-100 text-sm px-3 py-1 rounded-full transition-colors">
              {it.label}
            </a>
          ))}
        </nav>
        {/* Shield button for mobile */}
        <a href="#contact" className="sm:hidden grid place-items-center h-10 w-10 rounded-full border border-emerald-700/50 bg-emerald-900/50 text-emerald-100 shadow-lg shadow-emerald-900/40">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 3L4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6l-8-3z"/>
            <path d="M9 12h6M9 9h6M9 15h6" className="opacity-60"/>
          </svg>
        </a>
      </div>
    </header>
  )
}

export default Nav
