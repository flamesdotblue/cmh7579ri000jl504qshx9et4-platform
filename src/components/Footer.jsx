export default function Footer({ total = 0 }) {
  return (
    <footer className="mt-10 border-t border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-400">© {new Date().getFullYear()} A to Z Collection. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm text-neutral-300">
          <a href="#contact" className="hover:text-amber-400 transition">Contact Us</a>
          <a href="#new" className="hover:text-amber-400 transition">New Arrivals</a>
          <a href="#deals" className="hover:text-amber-400 transition">Best Deals</a>
        </div>
        <div className="text-sm text-neutral-300">Cart Total: ₹{(total / 100).toFixed(2)}</div>
      </div>
    </footer>
  );
}
