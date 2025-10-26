import { Briefcase, Eye, UserCheck } from 'lucide-react';

export default function ProfilePreview() {
  return (
    <section className="space-y-4">
      <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
        <div className="h-24 w-full bg-gradient-to-r from-indigo-500/20 via-blue-500/20 to-cyan-500/20" />
        <div className="-mt-10 flex items-end gap-4 px-6">
          <img
            src="https://api.dicebear.com/8.0/avataaars/svg?seed=HamkkeUser"
            alt="profile"
            className="h-20 w-20 rounded-2xl border-4 border-white bg-white object-cover"
          />
          <div className="pb-4">
            <h3 className="text-xl font-semibold text-slate-900">Alex Kim</h3>
            <p className="text-slate-600">AI Engineer • UX Thinker</p>
          </div>
        </div>
        <div className="px-6 pb-6">
          <div className="mb-4 flex flex-wrap gap-2">
            {['React', 'Python', 'LLMs', 'UX'].map((s) => (
              <span key={s} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
                {s}
              </span>
            ))}
          </div>
          <p className="max-w-2xl text-slate-700">
            Building human-centered AI products. I turn messy ideas into elegant, shippable experiences.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-3">
            <Stat icon={Eye} label="Views" value="12.4k" />
            <Stat icon={UserCheck} label="Followers" value="2.1k" />
            <Stat icon={Briefcase} label="Invites" value="38" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-200">
      <Icon className="h-5 w-5 text-slate-700" />
      <div>
        <p className="text-xs text-slate-500">{label}</p>
        <p className="font-semibold text-slate-900">{value}</p>
      </div>
    </div>
  );
}
