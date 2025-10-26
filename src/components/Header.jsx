import { useState } from 'react';
import { ShoppingCart, Search, User } from 'lucide-react';

function LogoVariantA({ className = '' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="w-8 h-8 rounded-md bg-gradient-to-br from-amber-400 to-yellow-600" />
        <div className="absolute inset-0 rounded-md ring-2 ring-amber-500/50" />
      </div>
      <div className="leading-tight">
        <div className="text-white font-bold tracking-wide">A to Z</div>
        <div className="text-xs uppercase tracking-wider text-amber-300">Collection</div>
      </div>
    </div>
  );
}

function LogoVariantB({ className = '' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 64 64" className="drop-shadow" aria-hidden>
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="56" height="56" rx="10" fill="url(#g)" />
        <path d="M18 42 L32 18 L46 42 Z" fill="#111827" opacity="0.95" />
        <circle cx="32" cy="32" r="4" fill="#FDE68A" />
      </svg>
      <div className="leading-tight">
        <div className="text-white font-extrabold tracking-wide">A to Z</div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-amber-300">Collection</div>
      </div>
    </div>
  );
}

export default function Header({ cartCount = 0, onSearch }) {
  const [openSearch, setOpenSearch] = useState(false);

  // Choose the better logo visually: Variant B feels more premium and modern.
  const Logo = LogoVariantB;

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-neutral-950/70 border-b border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Logo />
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#home" className="hover:text-amber-400 transition">Home</a>
            <a href="#new" className="hover:text-amber-400 transition">New Arrivals</a>
            <a href="#deals" className="hover:text-amber-400 transition">Best Deals</a>
            <a href="#about" className="hover:text-amber-400 transition">About</a>
            <a href="#contact" className="hover:text-amber-400 transition">Contact</a>
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-2 flex-1 max-w-lg">
          <div className="flex items-center gap-2 bg-neutral-900/70 border border-neutral-800 rounded-lg px-3 py-2 w-full">
            <Search size={18} className="text-neutral-400" />
            <input
              onChange={(e) => onSearch?.(e.target.value)}
              type="text"
              placeholder="Search for products"
              className="bg-transparent outline-none w-full placeholder:text-neutral-500 text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-neutral-800 hover:border-neutral-700 text-neutral-300"
            onClick={() => setOpenSearch((s) => !s)}
            aria-label="Search"
          >
            <Search size={18} />
          </button>

          <button className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 hover:border-neutral-700 px-3 h-10 text-sm">
            <User size={18} className="text-neutral-300" />
            <span className="hidden sm:inline text-neutral-200">Account</span>
          </button>

          <button className="relative inline-flex items-center justify-center w-10 h-10 rounded-lg border border-neutral-800 hover:border-neutral-700" aria-label="Cart">
            <ShoppingCart size={18} className="text-neutral-300" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 text-[10px] bg-amber-500 text-black font-semibold rounded-full px-1.5 py-0.5">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {openSearch && (
        <div className="px-4 sm:px-6 lg:px-10 pb-3 md:hidden">
          <div className="flex items-center gap-2 bg-neutral-900/70 border border-neutral-800 rounded-lg px-3 py-2 w-full">
            <Search size={18} className="text-neutral-400" />
            <input
              onChange={(e) => onSearch?.(e.target.value)}
              type="text"
              placeholder="Search for products"
              className="bg-transparent outline-none w-full placeholder:text-neutral-500 text-sm"
            />
          </div>
        </div>
      )}
    </header>
  );
}
