import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Users, Trophy } from 'lucide-react';

const slides = [
  {
    title: 'Show your work',
    desc: 'Bring your projects to life with rich visuals and clean storytelling.',
    icon: Rocket,
    gradient: 'from-blue-500/20 via-indigo-500/20 to-cyan-500/20',
  },
  {
    title: 'Find collaborators',
    desc: 'Match with designers, engineers, and creators to build together.',
    icon: Users,
    gradient: 'from-emerald-500/20 via-teal-500/20 to-sky-500/20',
  },
  {
    title: 'Grow your reputation',
    desc: 'Earn endorsements for real contributions — not just claims.',
    icon: Trophy,
    gradient: 'from-rose-500/20 via-orange-500/20 to-amber-500/20',
  },
];

export default function OnboardingCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  const ActiveIcon = slides[index].icon;

  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
      <div className={`absolute inset-0 bg-gradient-to-br ${slides[index].gradient}`} />
      <div className="relative grid gap-6 p-8 md:grid-cols-2 md:items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-black/5 backdrop-blur">
              <ActiveIcon className="h-5 w-5 text-slate-700" />
              Hamkke
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              {slides[index].title}
            </h2>
            <p className="max-w-md text-slate-600">
              {slides[index].desc}
            </p>
            <div className="flex items-center gap-2 pt-1">
              {slides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    i === index ? 'bg-slate-900 w-6' : 'bg-slate-400/50'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3 pt-2">
              <button
                onClick={prev}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
              >
                Prev
              </button>
              <button
                onClick={next}
                className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black"
              >
                Next
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-video w-full overflow-hidden rounded-2xl bg-white/60 p-1 shadow-sm ring-1 ring-black/5 backdrop-blur"
        >
          <div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-white to-slate-50">
            <ActiveIcon className="h-20 w-20 text-slate-800" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
