import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSent(true);
    setTimeout(() => setSent(false), 2000);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="rounded-2xl border border-neutral-800/60 bg-neutral-900/60 backdrop-blur p-4 sm:p-6">
      <h3 className="text-xl font-semibold">Contact Us</h3>
      <p className="mt-2 text-neutral-300 text-sm">
        We typically reply within 24 hours. For quick queries, reach us here:
      </p>
      <div className="mt-3 flex flex-col sm:flex-row gap-3 text-sm text-neutral-300">
        <div className="inline-flex items-center gap-2"><Phone size={16} className="text-amber-300" /> +91-99999-99999</div>
        <div className="inline-flex items-center gap-2"><Mail size={16} className="text-amber-300" /> support@atozcollection.com</div>
      </div>

      <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Your Name"
          required
          className="bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 outline-none focus:border-amber-500 text-sm"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email Address"
          required
          className="bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 outline-none focus:border-amber-500 text-sm"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How can we help you?"
          rows={4}
          required
          className="sm:col-span-2 bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 outline-none focus:border-amber-500 text-sm"
        />
        <div className="sm:col-span-2 flex items-center gap-3">
          <button
            type="submit"
            className="inline-flex items-center justify-center px-5 h-10 rounded-lg bg-amber-500 text-black font-semibold hover:bg-amber-400 transition"
          >
            Send Message
          </button>
          {sent && <span className="text-emerald-400 text-sm">Message sent! We'll get back to you soon.</span>}
        </div>
      </form>
    </div>
  );
}
