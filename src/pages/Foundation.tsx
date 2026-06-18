import { Heart, School, Stethoscope, Users, BookOpen, Award, ChevronRight, ArrowRight, DollarSign } from 'lucide-react';

interface FoundationProps {
  onNavigate: (page: string) => void;
}

const initiatives = [
  {
    icon: School,
    title: 'Education Support',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    stats: '500+ Schools',
    desc: 'Rebuilding and equipping schools in Telugu-speaking regions. Donating digital libraries, furniture, and infrastructure.',
  },
  {
    icon: Award,
    title: 'Scholarships',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    stats: '1,000+ Awards',
    desc: 'Merit and need-based scholarships for deserving Telugu students in the US and India pursuing higher education.',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare',
    color: 'text-red-600',
    bg: 'bg-red-50',
    border: 'border-red-200',
    stats: '100+ Medical Camps',
    desc: 'Free medical checkup camps, eye camps with cataract surgeries, and mental health awareness programs.',
  },
  {
    icon: Users,
    title: 'Orphan Support',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    stats: '200+ Orphans',
    desc: 'Project Varadhi supports orphans through education sponsorship, nutrition, and basic needs fulfillment.',
  },
  {
    icon: Heart,
    title: 'Disaster Relief',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    stats: '$500K+ Raised',
    desc: 'Rapid response to cyclones, floods, and other natural disasters affecting Telugu communities.',
  },
  {
    icon: BookOpen,
    title: 'Digital Libraries',
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-200',
    stats: '1,000+ Libraries',
    desc: 'Implementing digital libraries with computers, internet, and e-learning resources in rural Telugu schools.',
  },
];

const campaigns = [
  {
    title: 'Build a School Library',
    raised: 45000,
    goal: 60000,
    image: 'https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Fund a fully equipped library for 500 rural school children in Andhra Pradesh.',
  },
  {
    title: 'Eye Camp - Vision for All',
    raised: 22000,
    goal: 30000,
    image: 'https://images.pexels.com/photos/5207101/pexels-photo-5207101.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Free eye screening and cataract surgeries for underprivileged Telugu families.',
  },
  {
    title: 'Scholarship Fund 2025',
    raised: 78000,
    goal: 100000,
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Supporting 50 deserving Telugu students with college scholarships this year.',
  },
];

export default function Foundation({ onNavigate }: FoundationProps) {
  const nav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Page header */}
      <div
        className="relative bg-gradient-to-r from-[#0D1F4E] to-[#1B3A8A] text-white py-24 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1200')` }}
        />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-orange-400 text-sm mb-3">
            <button onClick={() => nav('home')} className="hover:underline">Home</button>
            <ChevronRight size={14} />
            <span>Foundation</span>
          </div>
          <h1 className="text-5xl font-extrabold mb-3">PATA Foundation</h1>
          <div className="w-16 h-1 bg-[#E8760A]" />
          <p className="text-blue-200 mt-4 max-w-xl">
            Transforming lives through education, healthcare, and community development.
          </p>
        </div>
      </div>

      {/* Impact bar */}
      <section className="bg-[#E8760A] py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {[
            { n: '$2M+', l: 'Funds Raised' },
            { n: '1,000+', l: 'Scholarships' },
            { n: '500+', l: 'Schools Impacted' },
            { n: '100+', l: 'Medical Camps' },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-4xl font-extrabold">{s.n}</div>
              <div className="text-orange-100 text-sm font-semibold mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Foundation */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#E8760A] text-sm font-bold uppercase tracking-widest">Our Purpose</span>
            <h2 className="text-4xl font-extrabold text-[#1B3A8A] mt-2 mb-5">About PATA Foundation</h2>
            <div className="w-16 h-1 bg-[#E8760A] mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4">
              The PATA Foundation is the charitable arm of the Progressive American Telugu Association. Established as a 501(c)(3) non-profit, the foundation channels the generosity of our community toward meaningful, measurable impact.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We focus on education, healthcare, infrastructure, and social welfare — both within the Telugu diaspora in the US and in the Telugu-speaking states of Andhra Pradesh and Telangana in India.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Every dollar donated goes directly to programs. We maintain full transparency with annual financial reports and program outcomes published on our website.
            </p>
            <button
              onClick={() => nav('contact')}
              className="bg-[#E8760A] hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-lg transition-all flex items-center gap-2 w-fit"
            >
              Donate Now <DollarSign size={18} />
            </button>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Foundation Impact"
              className="rounded-2xl shadow-2xl w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#E8760A] text-sm font-bold uppercase tracking-widest">What We Support</span>
            <h2 className="text-4xl font-extrabold text-[#1B3A8A] mt-2">Our Initiatives</h2>
            <div className="w-16 h-1 bg-[#E8760A] mx-auto mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((item) => (
              <div key={item.title} className={`rounded-2xl border ${item.border} ${item.bg} p-7 hover:shadow-xl transition-all`}>
                <div className={`rounded-full w-fit p-3 mb-4 bg-white`}>
                  <item.icon size={26} className={item.color} />
                </div>
                <div className={`text-xs font-bold mb-2 ${item.color}`}>{item.stats}</div>
                <h3 className="font-bold text-[#1B3A8A] text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active campaigns */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#E8760A] text-sm font-bold uppercase tracking-widest">Active Campaigns</span>
            <h2 className="text-4xl font-extrabold text-[#1B3A8A] mt-2">Support Our Campaigns</h2>
            <div className="w-16 h-1 bg-[#E8760A] mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {campaigns.map((c) => {
              const pct = Math.round((c.raised / c.goal) * 100);
              return (
                <div key={c.title} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                  <div className="h-48 overflow-hidden">
                    <img src={c.image} alt={c.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-[#1B3A8A] text-lg mb-2">{c.title}</h3>
                    <p className="text-gray-500 text-sm mb-4">{c.desc}</p>
                    <div className="mb-3">
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className="text-[#E8760A]">Raised: ${c.raised.toLocaleString()}</span>
                        <span className="text-gray-400">Goal: ${c.goal.toLocaleString()}</span>
                      </div>
                      <div className="bg-gray-100 rounded-full h-2.5 overflow-hidden">
                        <div
                          className="bg-[#E8760A] h-full rounded-full transition-all"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <div className="text-right text-xs text-gray-400 mt-1">{pct}% funded</div>
                    </div>
                    <button className="w-full bg-[#E8760A] hover:bg-orange-500 text-white font-semibold py-2.5 rounded-lg transition-colors">
                      Donate to This Campaign
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="bg-gradient-to-r from-[#0D1F4E] to-[#1B3A8A] py-16 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <Heart size={48} className="mx-auto mb-4 text-orange-400" fill="currentColor" />
          <h2 className="text-4xl font-extrabold mb-4">Make a Difference Today</h2>
          <p className="text-blue-200 mb-8">
            Your generosity transforms lives. Every contribution, big or small, creates lasting change in our community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['$25', '$50', '$100', '$250', 'Custom'].map((amt) => (
              <button
                key={amt}
                className="bg-[#E8760A] hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-lg transition-all hover:scale-105"
              >
                Donate {amt}
              </button>
            ))}
          </div>
          <p className="text-blue-300 text-sm mt-6">
            PATA Foundation is a 501(c)(3) registered non-profit. All donations are tax-deductible.
          </p>
        </div>
      </section>
    </div>
  );
}
