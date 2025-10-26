import { Home, Search, Plus, MessageSquare, User } from 'lucide-react';

export default function BottomNav({ current = 'Home', onChange, onAdd }) {
  const items = [
    { key: 'Home', icon: Home },
    { key: 'Discover', icon: Search },
    { key: 'Add', icon: Plus, action: true },
    { key: 'Messages', icon: MessageSquare },
    { key: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed inset-x-0 bottom-4 z-50 mx-auto w-full max-w-3xl px-4">
      <div className="mx-auto flex items-center justify-between rounded-full bg-white/90 p-2 shadow-lg ring-1 ring-black/10 backdrop-blur">
        {items.map(({ key, icon: Icon, action }) => (
          <button
            key={key}
            onClick={() => (action ? onAdd?.() : onChange?.(key))}
            aria-label={key}
            className={`${
              action
                ? 'grid h-12 w-12 place-items-center rounded-full bg-slate-900 text-white shadow'
                : 'inline-flex items-center gap-2 rounded-full px-4 py-2 text-slate-700 hover:bg-slate-50'
            } ${current === key ? 'font-semibold text-slate-900' : ''}`}
          >
            <Icon className={action ? 'h-6 w-6' : 'h-5 w-5'} />
            {!action && <span className="hidden text-sm sm:inline">{key}</span>}
          </button>
        ))}
      </div>
    </nav>
  );
}
