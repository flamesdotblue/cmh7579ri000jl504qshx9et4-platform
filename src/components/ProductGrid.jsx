import ProductCard from './ProductCard';

export default function ProductGrid({ title, products = [], onAddToCart }) {
  return (
    <div className="rounded-2xl border border-neutral-800/60 bg-neutral-900/60 backdrop-blur p-4 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <span className="text-sm text-neutral-400">{products.length} items</span>
      </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
        ))}
        {products.length === 0 && (
          <div className="col-span-full text-center py-12 text-neutral-400">No products available.</div>
        )}
      </div>
    </div>
  );
}
