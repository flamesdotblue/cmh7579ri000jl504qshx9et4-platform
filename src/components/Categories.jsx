const cats = [
  'All',
  "Men's Fashion",
  "Women's Fashion",
  'Electronics',
  'Accessories',
  'Home Lifestyle',
  'Kids',
];

export default function Categories({ active = 'All', onSelect }) {
  return (
    <div className="w-full overflow-auto pb-1">
      <div className="flex items-center gap-2 min-w-max">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => onSelect?.(c)}
            className={`px-3 sm:px-4 h-10 rounded-lg border text-sm whitespace-nowrap transition ${
              active === c
                ? 'bg-amber-500 text-black border-amber-400'
                : 'border-neutral-800 text-neutral-300 hover:border-neutral-700'
            }`}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
