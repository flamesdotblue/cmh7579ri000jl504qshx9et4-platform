import { useMemo, useState } from 'react';
import { Star, Tag } from 'lucide-react';
import ProductCard from './ProductCard';

export default function ProductShowcase({ products = [], onAddToCart }) {
  const [tab, setTab] = useState('new');

  const { newArrivals, bestDeals } = useMemo(() => {
    return {
      newArrivals: products.filter((p) => p.isNewArrival),
      bestDeals: products.filter((p) => p.isBestDeal),
    };
  }, [products]);

  const visible = tab === 'new' ? newArrivals : bestDeals;

  return (
    <div className="mt-6">
      <div className="flex items-center gap-2">
        <button
          onClick={() => setTab('new')}
          className={`inline-flex items-center gap-2 px-4 h-10 rounded-lg border text-sm transition ${
            tab === 'new' ? 'bg-white text-black border-neutral-300' : 'border-neutral-800 text-neutral-300 hover:border-neutral-700'
          }`}
          aria-controls="new"
        >
          <Star size={16} /> New Arrivals
        </button>
        <button
          onClick={() => setTab('deal')}
          className={`inline-flex items-center gap-2 px-4 h-10 rounded-lg border text-sm transition ${
            tab === 'deal' ? 'bg-white text-black border-neutral-300' : 'border-neutral-800 text-neutral-300 hover:border-neutral-700'
          }`}
          aria-controls="deals"
        >
          <Tag size={16} /> Best Deals
        </button>
      </div>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visible.map((p) => (
          <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
        ))}
        {visible.length === 0 && (
          <div className="col-span-full text-center py-12 text-neutral-400">No products found.</div>
        )}
      </div>
    </div>
  );
}
