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

export default function ProductCard({ product, onAddToCart }) {
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
