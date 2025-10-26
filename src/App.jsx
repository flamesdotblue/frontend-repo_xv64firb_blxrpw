import { useState } from 'react';
import OnboardingCarousel from './components/OnboardingCarousel.jsx';
import DiscoveryFeed from './components/DiscoveryFeed.jsx';
import ProfilePreview from './components/ProfilePreview.jsx';
import BottomNav from './components/BottomNav.jsx';
import { X } from 'lucide-react';

export default function App() {
  const [screen, setScreen] = useState('Home');
  const [showCreate, setShowCreate] = useState(false);
  const [step, setStep] = useState(0);

  const steps = [
    { label: 'Title & Description' },
    { label: 'Skills & Tags' },
    { label: 'Media' },
    { label: 'Roles & Visibility' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow">
              H
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-tight text-slate-900">Hamkke</h1>
              <p className="text-xs text-slate-500">Build together. Show your work.</p>
            </div>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black">
              Sign In
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-28 pt-6">
        {screen === 'Home' && (
          <div className="space-y-10">
            <OnboardingCarousel />
            <DiscoveryFeed />
          </div>
        )}

        {screen === 'Discover' && (
          <div className="space-y-10">
            <DiscoveryFeed />
          </div>
        )}

        {screen === 'Messages' && (
          <div className="grid place-items-center rounded-3xl bg-white p-16 text-center shadow-sm ring-1 ring-black/5">
            <p className="text-lg font-medium text-slate-800">Chats are organized by project.</p>
            <p className="mt-2 max-w-md text-slate-600">Keep coordination focused and distraction-free. You’ll see threads here as you start collaborating.</p>
          </div>
        )}

        {screen === 'Profile' && (
          <div className="space-y-10">
            <ProfilePreview />
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">Projects</h3>
                <button
                  onClick={() => setShowCreate(true)}
                  className="rounded-full bg-slate-900 px-3 py-2 text-sm text-white"
                >
                  Add Project
                </button>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[1, 2].map((i) => (
                  <div key={i} className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                    <p className="font-medium text-slate-800">Case Study {i}</p>
                    <p className="text-sm text-slate-600">Contribution: Design • Frontend</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <BottomNav current={screen} onChange={setScreen} onAdd={() => setShowCreate(true)} />

      {showCreate && (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
          <div className="absolute inset-0 bg-black/30" onClick={() => setShowCreate(false)} />
          <div className="relative w-full max-w-2xl rounded-t-3xl bg-white p-6 shadow-2xl ring-1 ring-black/10 sm:rounded-3xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Create Project</h3>
              <button onClick={() => setShowCreate(false)} aria-label="Close" className="rounded-full p-1 hover:bg-slate-100">
                <X className="h-5 w-5 text-slate-700" />
              </button>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between text-xs text-slate-600">
                {steps.map((s, i) => (
                  <div key={s.label} className="flex-1">
                    <div className={`h-1 rounded-full ${i <= step ? 'bg-slate-900' : 'bg-slate-200'}`} />
                    <p className="mt-2 text-center">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {step === 0 && (
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Project title"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                />
                <textarea
                  placeholder="Short description"
                  rows={4}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                />
              </div>
            )}

            {step === 1 && (
              <div className="space-y-3">
                <p className="text-sm text-slate-700">Add skills and tags</p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'UX', 'AI', 'Figma', 'Python'].map((t) => (
                    <button key={t} className="rounded-full bg-slate-50 px-3 py-1.5 text-sm text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100">
                      {t}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="Custom tag"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-3">
                <p className="text-sm text-slate-700">Add media</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex aspect-video items-center justify-center rounded-xl bg-slate-50 text-slate-500 ring-1 ring-slate-200">
                    Upload image/video
                  </div>
                  <input
                    type="url"
                    placeholder="Embed link (YouTube, Figma, etc.)"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-3">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:outline-none">
                    <option>Role needed: Frontend</option>
                    <option>Role needed: Backend</option>
                    <option>Role needed: Designer</option>
                    <option>Role needed: AI/ML</option>
                  </select>
                  <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:outline-none">
                    <option>Visibility: Public</option>
                    <option>Visibility: Private</option>
                  </select>
                </div>
                <input
                  type="text"
                  placeholder="Invite link (optional)"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                />
              </div>
            )}

            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Back
              </button>
              {step < steps.length - 1 ? (
                <button
                  onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
                  className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black"
                >
                  Continue
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShowCreate(false);
                    setStep(0);
                    setScreen('Profile');
                  }}
                  className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black"
                >
                  Publish
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
