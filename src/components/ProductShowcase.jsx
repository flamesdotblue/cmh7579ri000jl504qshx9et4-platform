import { useMemo, useState } from 'react';
import { Star, Tag } from 'lucide-react';

function Price({ price, discount }) {
  const discounted = discount ? Math.round(price * (1 - discount / 100)) : price;
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg font-semibold text-white">₹{(discounted / 100).toFixed(2)}</span>
      {discount ? (
        <>
          <span className="text-sm line-through text-neutral-400">₹{(price / 100).toFixed(2)}</span>
          <span className="text-xs px-2 py-1 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-400/30">{discount}% OFF</span>
        </>
      ) : null}
    </div>
  );
}

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="group rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover group-hover:scale-[1.02] transition" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs text-amber-300">{product.category}</p>
            <h3 className="mt-1 font-semibold text-white line-clamp-2">{product.name}</h3>
          </div>
          {(product.isNewArrival || product.isBestDeal) && (
            <span className="text-[10px] uppercase tracking-wide px-2 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-400/20">
              {product.isBestDeal ? 'Deal' : 'New'}
            </span>
          )}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <Price price={product.price} discount={product.discount} />
          <button
            onClick={() => onAddToCart?.(product)}
            className="px-3 h-10 rounded-lg bg-amber-500 text-black font-semibold hover:bg-amber-400 transition"
          >
            Add to Cart
          </button>
        </div>
        <p className="mt-2 text-xs text-neutral-400">Stock: {product.stock}</p>
      </div>
    </div>
  );
}

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
        >
          <Star size={16} /> New Arrivals
        </button>
        <button
          onClick={() => setTab('deal')}
          className={`inline-flex items-center gap-2 px-4 h-10 rounded-lg border text-sm transition ${
            tab === 'deal' ? 'bg-white text-black border-neutral-300' : 'border-neutral-800 text-neutral-300 hover:border-neutral-700'
          }`}
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
