import { useMemo, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductShowcase from './components/ProductShowcase';

const initialProducts = [
  {
    id: 'p1',
    name: "Men's Premium Leather Jacket",
    category: "Men's Fashion",
    price: 12999,
    stock: 12,
    images: [
      'https://images.unsplash.com/photo-1499803270242-467f731158ff?q=80&w=1200&auto=format&fit=crop',
    ],
    discount: 15,
    status: 'Active',
    isNewArrival: true,
    isBestDeal: false,
  },
  {
    id: 'p2',
    name: 'Wireless ANC Headphones',
    category: 'Electronics',
    price: 7999,
    stock: 34,
    images: [
      'https://images.unsplash.com/photo-1518442485921-c69e3d4ad67f?q=80&w=1200&auto=format&fit=crop',
    ],
    discount: 25,
    status: 'Active',
    isNewArrival: true,
    isBestDeal: true,
  },
  {
    id: 'p3',
    name: "Women's Silk Wrap Dress",
    category: "Women's Fashion",
    price: 6499,
    stock: 20,
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop',
    ],
    discount: 10,
    status: 'Active',
    isNewArrival: false,
    isBestDeal: true,
  },
  {
    id: 'p4',
    name: 'Minimalist Table Lamp',
    category: 'Home Lifestyle',
    price: 1999,
    stock: 50,
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1200&auto=format&fit=crop',
    ],
    discount: 5,
    status: 'Active',
    isNewArrival: true,
    isBestDeal: false,
  },
  {
    id: 'p5',
    name: 'Kids Graphic Tee',
    category: 'Kids',
    price: 799,
    stock: 100,
    images: [
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop',
    ],
    discount: 20,
    status: 'Active',
    isNewArrival: false,
    isBestDeal: true,
  },
  {
    id: 'p6',
    name: 'Stainless Steel Watch',
    category: 'Accessories',
    price: 2999,
    stock: 25,
    images: [
      'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1200&auto=format&fit=crop',
    ],
    discount: 18,
    status: 'Active',
    isNewArrival: true,
    isBestDeal: true,
  },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [toast, setToast] = useState(null);

  const products = useMemo(() => initialProducts, []);

  const onAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: Math.min(i.qty + 1, product.stock) } : i));
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setToast({ type: 'success', message: `${product.name} added to cart` });
    setTimeout(() => setToast(null), 1800);
  };

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  const filtered = products.filter((p) => {
    const matchQuery = p.name.toLowerCase().includes(query.toLowerCase());
    const matchCategory = activeCategory === 'All' || p.category === activeCategory;
    return matchQuery && matchCategory;
  });

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Header cartCount={cart.length} onSearch={setQuery} />
      <main className="flex flex-col gap-12">
        <Hero />
        <section className="px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto -mt-16">
          <div className="rounded-2xl border border-neutral-800/60 bg-neutral-900/60 backdrop-blur p-4 sm:p-6">
            <Categories active={activeCategory} onSelect={setActiveCategory} />
            <ProductShowcase
              products={filtered}
              onAddToCart={onAddToCart}
            />
          </div>
        </section>
      </main>

      <section className="mt-14 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-neutral-800 p-6 bg-neutral-900/60">
            <h3 className="text-xl font-semibold">About Us</h3>
            <p className="mt-2 text-neutral-300 text-sm leading-relaxed">
              A to Z Collection brings a curated selection of premium fashion, electronics, home lifestyle and accessories. Our mission is to deliver quality, style, and value under one roof.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-800 p-6 bg-neutral-900/60">
            <h3 className="text-xl font-semibold">Returns Policy</h3>
            <p className="mt-2 text-neutral-300 text-sm leading-relaxed">
              7-day easy returns for eligible products. Items must be unused, with tags and original packaging. Refunds are processed to your original payment method.
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-10 border-t border-neutral-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-400">© {new Date().getFullYear()} A to Z Collection. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-neutral-300">
            <a href="#contact" className="hover:text-amber-400 transition">Contact Us</a>
            <a href="#orders" className="hover:text-amber-400 transition">Orders</a>
            <a href="#privacy" className="hover:text-amber-400 transition">Privacy</a>
          </div>
          <div className="text-sm text-neutral-300">Cart Total: ₹{(total / 100).toFixed(2)}</div>
        </div>
      </footer>

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <div className={`px-4 py-3 rounded-lg shadow-lg border ${toast.type === 'success' ? 'bg-emerald-600/90 border-emerald-400/50' : 'bg-red-600/90 border-red-400/50'}`}>
            <p className="text-sm font-medium">{toast.message}</p>
          </div>
        </div>
      )}
    </div>
  );
}
