import React from 'react'
import Background from './components/Background'
import Nav from './components/Nav'
import ScrollPanel from './components/ScrollPanel'

function App() {
  return (
    <div className="min-h-screen text-emerald-50 relative">
      <Background />
      <Nav />

      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="relative">
            <div className="absolute -inset-6 bg-emerald-500/10 blur-3xl rounded-3xl" />
            <div className="relative border border-emerald-800/60 bg-emerald-950/40 rounded-3xl p-6 sm:p-10 backdrop-blur-md shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
              <div className="flex flex-col lg:flex-row items-start gap-8">
                {/* Title */}
                <div className="flex-1">
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                    Sir Themalka —
                    <span className="block text-emerald-300">Knight of Code</span>
                    <span className="block text-emerald-300">& Keeper of Nature</span>
                  </h1>
                  <p className="mt-4 max-w-2xl text-emerald-100/80">
                    A medieval-hearted programmer and ethical hacker forging elegant systems in harmony with the wild. Where runes meet binary and forests meet firewalls.
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <a href="#quests" className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white transition-colors border border-emerald-400/30">View Quests</a>
                    <a href="#spellbook" className="px-5 py-2.5 rounded-full bg-transparent hover:bg-emerald-900/40 border border-emerald-500/40">Open Spellbook</a>
                  </div>
                </div>

                {/* Holographic knight terminal */}
                <div className="w-full lg:w-[42%] relative">
                  <div className="absolute -inset-2 rounded-2xl bg-cyan-400/10 blur-xl" />
                  <div className="relative rounded-2xl border border-emerald-700/60 bg-emerald-950/50 backdrop-blur p-4">
                    <div className="text-xs text-emerald-200/80 font-mono">
{`$ summon knight --robes green --accents gold --sigils digital\n$ armor --projection holographic --glow cyan\n> STATUS: ONLINE  |  OATH: Protect Nature, Perfect Code\n> LOCATION: Mosskeep Castle`}
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                      <div className="rounded-lg border border-emerald-700/60 bg-emerald-900/40 p-3">
                        <p className="text-emerald-300 text-sm">SIGILS</p>
                        <p className="text-2xl">7</p>
                      </div>
                      <div className="rounded-lg border border-emerald-700/60 bg-emerald-900/40 p-3">
                        <p className="text-emerald-300 text-sm">QUESTS</p>
                        <p className="text-2xl">24</p>
                      </div>
                      <div className="rounded-lg border border-emerald-700/60 bg-emerald-900/40 p-3">
                        <p className="text-emerald-300 text-sm">ALLIES</p>
                        <p className="text-2xl">12</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ambient creatures */}
              <span className="absolute -left-8 bottom-8 text-emerald-200/70">🦊</span>
              <span className="absolute right-6 -top-4 text-emerald-200/70">🪶</span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <ScrollPanel id="about" title="About the Knight">
        <p>
          A coder of the green order, sworn to craft resilient systems that respect both users and the living world. Adept with Python, JavaScript, and the arcane arts of network defense. I practice ethical hacking to fortify the realm and build tools that empower instead of exploit.
        </p>
        <ul className="mt-4 grid sm:grid-cols-3 gap-3">
          <li className="rounded border border-emerald-700/40 bg-white/40 text-emerald-900 p-3">Security Audits</li>
          <li className="rounded border border-emerald-700/40 bg-white/40 text-emerald-900 p-3">Full‑Stack Development</li>
          <li className="rounded border border-emerald-700/40 bg-white/40 text-emerald-900 p-3">Nature‑centric UX</li>
        </ul>
      </ScrollPanel>

      {/* Quests */}
      <ScrollPanel id="quests" title="Quests & Conquests">
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="relative rounded-xl overflow-hidden border border-emerald-700/50 bg-emerald-950/40 text-emerald-100">
              <div className="h-28 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(52,211,153,0.25),transparent)]" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Operation Mosskeep {i}</h3>
                <p className="text-sm text-emerald-100/80">Hardened a fortress API, implemented zero‑trust runes, restored balance between performance and power draw.</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollPanel>

      {/* Spellbook */}
      <ScrollPanel id="spellbook" title="Spellbook (Code Snippets)">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-emerald-700/50 bg-emerald-950/50 p-4">
            <p className="text-emerald-300 text-sm mb-2">Rune of Rate‑Limit</p>
            <pre className="text-xs text-emerald-100/90 overflow-auto">
{`from fastapi import FastAPI, Request, HTTPException\nfrom time import time\n\napp = FastAPI()\nwindow, bucket = 10, {}\n@app.middleware('http')\nasync def guard(req: Request, call):\n    k = req.client.host\n    t = time()\n    bucket.setdefault(k, [])[:] = [x for x in bucket[k] if t-x < window]\n    if len(bucket[k]) > 20: raise HTTPException(429, 'Too Many Runes')\n    bucket[k].append(t)\n    return await call(req)`}
            </pre>
          </div>
          <div className="rounded-xl border border-emerald-700/50 bg-emerald-950/50 p-4">
            <p className="text-emerald-300 text-sm mb-2">Druidic Bash — Secure Copy</p>
            <pre className="text-xs text-emerald-100/90 overflow-auto">
{`rsync -avz --progress --delete --rsh='ssh -i ~/keys/leafblade.pem' ./dist/ knight@castle:/var/www/mosskeep/`}
            </pre>
          </div>
        </div>
      </ScrollPanel>

      {/* Contact */}
      <ScrollPanel id="contact" title="Send a Raven (Contact)">
        <form className="grid sm:grid-cols-2 gap-4">
          <input className="bg-white/70 border border-emerald-700/30 rounded-lg px-3 py-2 text-emerald-900 placeholder-emerald-900/60" placeholder="Your Name" />
          <input className="bg-white/70 border border-emerald-700/30 rounded-lg px-3 py-2 text-emerald-900 placeholder-emerald-900/60" placeholder="Raven Address (Email)" />
          <textarea rows="4" className="sm:col-span-2 bg-white/70 border border-emerald-700/30 rounded-lg px-3 py-2 text-emerald-900 placeholder-emerald-900/60" placeholder="Message to the Knight" />
          <button type="button" className="sm:col-span-2 justify-self-start px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white border border-emerald-400/30">Release Raven</button>
        </form>
      </ScrollPanel>

      <footer className="py-10 text-center text-emerald-200/70 text-sm">
        © {new Date().getFullYear()} Sir Themalka — Fantasy hacker. Green nature UI. Cinematic light.
      </footer>
    </div>
  )
}

export default App
