import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Sparkles } from 'lucide-react';

function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
      {children}
    </span>
  );
}

function AvatarGroup({ count = 3 }) {
  const avatars = new Array(count).fill(0);
  return (
    <div className="flex -space-x-2">
      {avatars.map((_, i) => (
        <img
          key={i}
          src={`https://api.dicebear.com/8.x/identicon/svg?seed=${i + 1}`}
          alt=""
          className="h-7 w-7 rounded-full ring-2 ring-white"
        />
      ))}
    </div>
  );
}

function ProjectCard({ title, cover, tags = ['React', 'UX'], likes = 42 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <img src={cover} alt="cover" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-1 text-base font-semibold text-slate-900">{title}</h3>
          <div className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-1 text-xs text-slate-700 ring-1 ring-slate-200">
            <Heart className="h-3.5 w-3.5 text-rose-500" /> {likes}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <AvatarGroup />
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function DiscoveryFeed() {
  const [active, setActive] = useState('Projects');

  const tabs = ['Projects', 'People', 'Opportunities'];

  const projects = [
    {
      title: 'Mindful – AI Habit Coach',
      cover:
        'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1600&auto=format&fit=crop',
      tags: ['AI', 'React', 'Product'],
      likes: 128,
    },
    {
      title: 'Voyage – Travel Story Platform',
      cover:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
      tags: ['Next.js', 'UX', 'Maps'],
      likes: 93,
    },
    {
      title: 'Pulse – Health Dashboard',
      cover:
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop',
      tags: ['DataViz', 'Design', 'API'],
      likes: 76,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Discover</h2>
          <p className="text-sm text-slate-600">Because you follow React + UX Design</p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200">
          <Sparkles className="h-4 w-4 text-indigo-600" />
          Smart
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === t
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {active === 'Projects' && (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      )}

      {active === 'People' && (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {['Ava – Product Designer', 'Liam – AI Engineer', 'Mia – Frontend Dev'].map((p) => (
            <div
              key={p}
              className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5"
            >
              <img
                src={`https://api.dicebear.com/8.0/initials/svg?seed=${encodeURIComponent(p)}`}
                alt=""
                className="h-12 w-12 rounded-full ring-2 ring-white"
              />
              <div className="flex-1">
                <p className="font-medium text-slate-900">{p}</p>
                <p className="text-sm text-slate-600">React • UX • Collab-ready</p>
              </div>
              <button className="rounded-full bg-slate-900 px-3 py-1.5 text-sm text-white">
                Connect
              </button>
            </div>
          ))}
        </div>
      )}

      {active === 'Opportunities' && (
        <div className="space-y-3">
          {[
            'Open Project: Fintech Dashboard (needs UX + React)',
            'Hackathon Team: AI for Climate (needs Data Viz)',
            'Startup MVP: Wellness App (needs iOS Swift)',
          ].map((o) => (
            <div key={o} className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-indigo-600" />
                <p className="text-slate-800">{o}</p>
              </div>
              <button className="rounded-full bg-slate-900 px-3 py-1.5 text-sm text-white">View</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
