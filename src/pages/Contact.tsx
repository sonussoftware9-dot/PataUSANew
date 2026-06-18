import { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, Check, Facebook, Twitter, Youtube, Instagram, ChevronRight } from 'lucide-react';

interface ContactProps {
  onNavigate: (page: string) => void;
}

const faqs = [
  {
    q: 'How do I become a PATA member?',
    a: 'Click the "Join PATA" button and fill out the membership application. We offer Individual ($50/yr), Family ($100/yr), and Life Member ($500) plans.',
  },
  {
    q: 'Where are PATA events held?',
    a: 'PATA hosts events across Texas (Houston, Dallas, Austin, San Antonio) and increasingly across other US states. Check our Events page for venue details.',
  },
  {
    q: 'How can I enroll my child in Paatasala?',
    a: 'Contact us via the form or email paatasala@patausa.org. Classes are held on weekends and online options are also available.',
  },
  {
    q: 'Is PATA Foundation donation tax-deductible?',
    a: 'Yes! PATA Foundation is a 501(c)(3) registered non-profit organization. All donations are fully tax-deductible.',
  },
  {
    q: 'How can I volunteer with PATA?',
    a: 'We welcome volunteers for events, teaching, administration, and community services. Reach out via the contact form and mention your interest.',
  },
];

export default function Contact({ onNavigate }: ContactProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const nav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Page header */}
      <div className="bg-gradient-to-r from-[#0D1F4E] to-[#1B3A8A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-orange-400 text-sm mb-3">
            <button onClick={() => nav('home')} className="hover:underline">Home</button>
            <ChevronRight size={14} />
            <span>Contact</span>
          </div>
          <h1 className="text-5xl font-extrabold mb-3">Contact Us</h1>
          <div className="w-16 h-1 bg-[#E8760A]" />
          <p className="text-blue-200 mt-4 max-w-xl">
            We'd love to hear from you. Reach out for membership, events, programs, or general inquiries.
          </p>
        </div>
      </div>

      {/* Contact cards */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: MapPin,
              title: 'Our Address',
              lines: ['1234 Telugu Way', 'Houston, TX 77001'],
              color: 'text-orange-500',
              bg: 'bg-orange-50',
            },
            {
              icon: Phone,
              title: 'Phone',
              lines: ['+1 (855) PATA-USA', '+1 (713) 000-0000'],
              color: 'text-blue-600',
              bg: 'bg-blue-50',
            },
            {
              icon: Mail,
              title: 'Email',
              lines: ['info@patausa.org', 'membership@patausa.org'],
              color: 'text-green-600',
              bg: 'bg-green-50',
            },
            {
              icon: Clock,
              title: 'Office Hours',
              lines: ['Mon-Fri: 9AM - 6PM', 'Sat: 10AM - 2PM'],
              color: 'text-purple-600',
              bg: 'bg-purple-50',
            },
          ].map((item) => (
            <div key={item.title} className={`${item.bg} rounded-2xl p-6 text-center shadow-md`}>
              <div className="flex justify-center mb-3">
                <div className="bg-white rounded-full p-3 shadow-sm">
                  <item.icon size={24} className={item.color} />
                </div>
              </div>
              <h3 className="font-bold text-[#1B3A8A] mb-2">{item.title}</h3>
              {item.lines.map((l) => (
                <p key={l} className="text-gray-600 text-sm">{l}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <span className="text-[#E8760A] text-sm font-bold uppercase tracking-widest">Get in Touch</span>
            <h2 className="text-3xl font-extrabold text-[#1B3A8A] mt-2 mb-6">Send Us a Message</h2>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Check size={32} className="text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-[#1B3A8A] mb-2">Message Sent!</h3>
                <p className="text-gray-600 text-sm">Thank you! We'll get back to you within 24-48 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-[#E8760A] text-sm font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subject *</label>
                    <select
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option>Membership Inquiry</option>
                      <option>Event Information</option>
                      <option>Paatasala / Kalasala</option>
                      <option>Foundation / Donation</option>
                      <option>Volunteer</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#E8760A] hover:bg-orange-500 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            )}
          </div>

          {/* Map placeholder + Social */}
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-xl h-72 bg-gradient-to-br from-[#1B3A8A] to-[#0D1F4E] flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin size={48} className="mx-auto mb-3 text-orange-400" />
                <p className="font-bold text-lg">PATA Headquarters</p>
                <p className="text-blue-300 text-sm mt-1">1234 Telugu Way, Houston, TX 77001</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block bg-[#E8760A] hover:bg-orange-500 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-[#1B3A8A] text-lg mb-4">Follow Us</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Facebook, label: 'Facebook', handle: '@PATAOfficial', color: 'bg-blue-600' },
                  { icon: Twitter, label: 'Twitter', handle: '@PATA_USA', color: 'bg-sky-500' },
                  { icon: Youtube, label: 'YouTube', handle: 'PATA Telugu', color: 'bg-red-600' },
                  { icon: Instagram, label: 'Instagram', handle: '@pata.official', color: 'bg-pink-600' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className={`${s.color} text-white rounded-lg p-2`}>
                      <s.icon size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1B3A8A]">{s.label}</div>
                      <div className="text-xs text-gray-400">{s.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#E8760A] text-sm font-bold uppercase tracking-widest">FAQ</span>
            <h2 className="text-4xl font-extrabold text-[#1B3A8A] mt-2">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-[#E8760A] mx-auto mt-4" />
          </div>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-[#1B3A8A] pr-4">{faq.q}</span>
                  <ChevronRight
                    size={20}
                    className={`text-[#E8760A] shrink-0 transition-transform ${openFaq === idx ? 'rotate-90' : ''}`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
