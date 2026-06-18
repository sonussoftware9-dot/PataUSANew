import { useState } from 'react';
import { Check, ChevronRight, Users, Award, Calendar, BookOpen, Heart, Star } from 'lucide-react';

interface MembershipProps {
  onNavigate: (page: string) => void;
}

const plans = [
  {
    name: 'Individual',
    price: '$50',
    period: '/year',
    color: 'border-blue-300',
    highlight: false,
    badge: null,
    features: [
      'PATA membership card',
      'Member newsletter & updates',
      'Access to all PATA events',
      'Discounted event tickets',
      'Community directory listing',
      'Cultural program participation',
    ],
  },
  {
    name: 'Family',
    price: '$100',
    period: '/year',
    color: 'border-[#E8760A]',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Everything in Individual',
      'Coverage for entire family',
      'Paatasala enrollment discount',
      'Kalasala enrollment discount',
      'Voting rights in elections',
      'Priority event registration',
      'Foundation donation receipts',
    ],
  },
  {
    name: 'Life Member',
    price: '$500',
    period: 'one-time',
    color: 'border-amber-400',
    highlight: false,
    badge: 'Best Value',
    features: [
      'Everything in Family',
      'Lifetime membership',
      'Special recognition at events',
      'Advisory board eligibility',
      'Annual awards consideration',
      'Exclusive life member events',
      'Name in PATA publications',
    ],
  },
];

const benefits = [
  { icon: Calendar, title: 'Event Access', desc: 'Priority registration and discounts for all PATA cultural events and conventions.' },
  { icon: BookOpen, title: 'Paatasala & Kalasala', desc: 'Discounted enrollment in Telugu language school and fine arts academy.' },
  { icon: Users, title: 'Community Network', desc: 'Connect with 5,000+ Telugu professionals and families across the US.' },
  { icon: Award, title: 'Recognition', desc: 'Eligible for annual community awards and leadership opportunities.' },
  { icon: Heart, title: 'Community Services', desc: 'Access to emergency assistance, immigration guidance, and welfare services.' },
  { icon: Star, title: 'Voting Rights', desc: 'Have a voice in PATA leadership elections and organizational decisions.' },
];

export default function Membership({ onNavigate }: MembershipProps) {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    city: '', state: '', plan: 'Family', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

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
            <span>Membership</span>
          </div>
          <h1 className="text-5xl font-extrabold mb-3">Join PATA</h1>
          <div className="w-16 h-1 bg-[#E8760A]" />
          <p className="text-blue-200 mt-4 max-w-xl">
            Become a member and be part of the most vibrant Telugu community organization in America.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#E8760A] text-sm font-bold uppercase tracking-widest">Why Join</span>
            <h2 className="text-4xl font-extrabold text-[#1B3A8A] mt-2">Member Benefits</h2>
            <div className="w-16 h-1 bg-[#E8760A] mx-auto mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
                <div className="bg-orange-50 rounded-full p-3 w-fit mb-4">
                  <b.icon size={24} className="text-[#E8760A]" />
                </div>
                <h3 className="font-bold text-[#1B3A8A] text-lg mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#E8760A] text-sm font-bold uppercase tracking-widest">Pricing</span>
            <h2 className="text-4xl font-extrabold text-[#1B3A8A] mt-2">Membership Plans</h2>
            <div className="w-16 h-1 bg-[#E8760A] mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border-2 ${plan.color} p-8 relative ${plan.highlight ? 'shadow-2xl scale-105' : 'shadow-md'} transition-all hover:shadow-xl`}
              >
                {plan.badge && (
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 ${plan.highlight ? 'bg-[#E8760A]' : 'bg-amber-500'} text-white text-xs font-bold px-4 py-1.5 rounded-full`}>
                    {plan.badge}
                  </div>
                )}
                <h3 className="text-2xl font-extrabold text-[#1B3A8A] mb-2">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-extrabold text-[#E8760A]">{plan.price}</span>
                  <span className="text-gray-400 text-sm mb-1">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    setForm((prev) => ({ ...prev, plan: plan.name }));
                    document.getElementById('join-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full font-bold py-3 rounded-xl transition-all ${
                    plan.highlight
                      ? 'bg-[#E8760A] hover:bg-orange-500 text-white'
                      : 'border-2 border-[#1B3A8A] text-[#1B3A8A] hover:bg-[#1B3A8A] hover:text-white'
                  }`}
                >
                  Choose {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration form */}
      <section id="join-form" className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#E8760A] text-sm font-bold uppercase tracking-widest">Register</span>
            <h2 className="text-4xl font-extrabold text-[#1B3A8A] mt-2">Membership Application</h2>
            <div className="w-16 h-1 bg-[#E8760A] mx-auto mt-4" />
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Check size={40} className="text-green-500" />
              </div>
              <h3 className="text-3xl font-extrabold text-[#1B3A8A] mb-3">Application Received!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for applying to join PATA! We'll review your application and contact you within 2-3 business days.
              </p>
              <button
                onClick={() => nav('home')}
                className="bg-[#E8760A] hover:bg-orange-500 text-white font-bold px-8 py-3 rounded-lg transition-all"
              >
                Back to Home
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">First Name *</label>
                  <input
                    required
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last Name *</label>
                  <input
                    required
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">City</label>
                  <input
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="City"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">State</label>
                  <input
                    value={form.state}
                    onChange={(e) => setForm({ ...form, state: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="TX"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Membership Plan *</label>
                <select
                  value={form.plan}
                  onChange={(e) => setForm({ ...form, plan: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                >
                  <option>Individual - $50/year</option>
                  <option>Family - $100/year</option>
                  <option>Life Member - $500 one-time</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Additional Message</label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                  placeholder="Any special interests or questions?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#E8760A] hover:bg-orange-500 text-white font-bold py-4 rounded-xl transition-all text-base hover:scale-[1.02]"
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
