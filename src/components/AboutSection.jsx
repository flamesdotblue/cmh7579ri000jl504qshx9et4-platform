export default function AboutSection() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-xl border border-neutral-800 p-6 bg-neutral-900/60">
        <h3 className="text-xl font-semibold">About Us</h3>
        <p className="mt-2 text-neutral-300 text-sm leading-relaxed">
          A to Z Collection brings a curated selection of premium fashion, electronics, home lifestyle and accessories. Our mission is to deliver quality, style, and value under one roof.
        </p>
        <p className="mt-3 text-neutral-300 text-sm leading-relaxed">
          We focus on a minimal, premium shopping experience with fast shipping, easy returns, and curated drops every week.
        </p>
      </div>
      <div className="rounded-xl border border-neutral-800 p-6 bg-neutral-900/60">
        <h3 className="text-xl font-semibold">Returns Policy</h3>
        <p className="mt-2 text-neutral-300 text-sm leading-relaxed">
          7-day easy returns for eligible products. Items must be unused, with tags and original packaging. Refunds are processed to your original payment method.
        </p>
        <ul className="mt-3 text-neutral-300 text-sm list-disc pl-5 space-y-1">
          <li>Hassle-free pickup from your doorstep</li>
          <li>Exchange available for size-related issues</li>
          <li>Support available 7 days a week</li>
        </ul>
      </div>
    </div>
  );
}
