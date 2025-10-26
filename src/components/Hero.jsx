import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative" id="home">
      <div className="h-[56vh] sm:h-[64vh] md:h-[72vh] w-full">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-neutral-950/95 pointer-events-none" />

      <div className="absolute inset-0 flex items-end">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10 pb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-300 border border-amber-400/30 rounded-full px-3 py-1.5 text-xs font-medium mb-4">
              <Sparkles size={14} />
              Premium picks for every lifestyle
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              A to Z Collection
            </h1>
            <p className="mt-3 text-neutral-200 max-w-2xl">
              Discover a curated range of fashion, electronics, accessories and home lifestyle. Crafted for comfort, designed for impact.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#new" className="inline-flex items-center justify-center px-5 h-11 rounded-lg bg-amber-500 text-black font-semibold hover:bg-amber-400 transition">Shop New Arrivals</a>
              <a href="#deals" className="inline-flex items-center justify-center px-5 h-11 rounded-lg border border-neutral-700 text-white hover:border-neutral-600 transition">View Best Deals</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
