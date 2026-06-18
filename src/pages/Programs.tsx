import { BookOpen, Music, Heart, Users, Star, ChevronRight, ArrowRight } from 'lucide-react';

interface ProgramsProps {
  onNavigate: (page: string) => void;
}

const programs = [
  {
    id: 'paatasala',
    icon: BookOpen,
    title: 'Paatasala',
    subtitle: 'Telugu Language & Culture School',
    heroImage: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'blue',
    stats: [
      { n: '2,000+', l: 'Enrolled Students' },
      { n: '50+', l: 'Certified Teachers' },
      { n: '15+', l: 'Cities' },
      { n: '500+', l: 'Graduates' },
    ],
    desc: 'PATA Paatasala is a comprehensive Telugu language and culture school for children and youth. Our curriculum covers Telugu script, grammar, literature, history, and cultural values. Classes are held on weekends and online.',
    features: [
      'Telugu reading, writing, and speaking',
      'Cultural stories and literature',
      'Festivals and traditions',
      'Graded curriculum (K-12 equivalent)',
      'Qualified Telugu-speaking teachers',
      'Annual graduation ceremony',
    ],
  },
  {
    id: 'kalasala',
    icon: Music,
    title: 'Kalasala',
    subtitle: 'Fine Arts & Performing Arts Academy',
    heroImage: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'orange',
    stats: [
      { n: '500+', l: 'Students' },
      { n: '20+', l: 'Art Forms' },
      { n: '30+', l: 'Instructors' },
      { n: '200+', l: 'Performances' },
    ],
    desc: 'Kalasala preserves and promotes Telugu and Indian classical arts. We offer training in classical dance forms like Kuchipudi and Bharatanatyam, Carnatic vocal and instrumental music, folk arts, and modern performing arts.',
    features: [
      'Kuchipudi & Bharatanatyam dance',
      'Carnatic music (vocal & instruments)',
      'Kolattam & folk dances',
      'Drama and performing arts',
      'Annual arangetram recitals',
      'Online and in-person classes',
    ],
  },
  {
    id: 'community',
    icon: Heart,
    title: 'Community Services',
    subtitle: 'Help, Welfare & Support',
    heroImage: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'green',
    stats: [
      { n: '3,000+', l: 'People Helped' },
      { n: '1,000+', l: 'Emergency Cases' },
      { n: '500+', l: 'Immigration Guidance' },
      { n: '24/7', l: 'Support Line' },
    ],
    desc: 'PATA provides comprehensive community services including emergency assistance, immigration guidance, repatriation support, job placement, mental health resources, and senior citizen programs.',
    features: [
      'Emergency financial assistance',
      'Immigration & visa guidance',
      'Repatriation of remains',
      'Job board and career help',
      'Senior citizen programs',
      'Mental health resources',
    ],
  },
  {
    id: 'matrimonial',
    icon: Star,
    title: 'Matrimonial Services',
    subtitle: 'Connecting Telugu Hearts',
    heroImage: 'https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'rose',
    stats: [
      { n: '500+', l: 'Successful Matches' },
      { n: '2,000+', l: 'Registered Profiles' },
      { n: 'Free', l: 'Registration' },
      { n: 'Secure', l: 'Platform' },
    ],
    desc: 'PATA Matrimonial is a trusted platform connecting Telugu families across the US and India. Our service is confidential, free to register, and guided by community values and traditions.',
    features: [
      'Free profile registration',
      'Verified Telugu profiles',
      'US & India members',
      'Family-oriented matching',
      'Privacy-first approach',
      'Community-vetted members',
    ],
  },
  {
    id: 'youth',
    icon: Users,
    title: 'Youth Programs',
    subtitle: 'Empowering the Next Generation',
    heroImage: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'purple',
    stats: [
      { n: '1,000+', l: 'Youth Members' },
      { n: '20+', l: 'Scholarships/yr' },
      { n: '10+', l: 'Youth Leaders' },
      { n: '5+', l: 'Annual Camps' },
    ],
    desc: 'Our youth programs develop leadership, cultural awareness, and professional skills in Telugu-American young adults through camps, scholarships, mentorship, and community service opportunities.',
    features: [
      'Annual youth leadership camp',
      'Merit scholarships',
      'Mentorship from professionals',
      'Community service projects',
      'College guidance',
      'Telugu youth networking',
    ],
  },
];

const colorMap: Record<string, { bg: string; border: string; icon: string; stat: string; badge: string }> = {
  blue: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600', stat: 'bg-blue-100 text-blue-700', badge: 'bg-blue-600' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', icon: 'text-orange-600', stat: 'bg-orange-100 text-orange-700', badge: 'bg-orange-600' },
  green: { bg: 'bg-green-50', border: 'border-green-200', icon: 'text-green-600', stat: 'bg-green-100 text-green-700', badge: 'bg-green-600' },
  rose: { bg: 'bg-rose-50', border: 'border-rose-200', icon: 'text-rose-600', stat: 'bg-rose-100 text-rose-700', badge: 'bg-rose-600' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'text-purple-600', stat: 'bg-purple-100 text-purple-700', badge: 'bg-purple-600' },
};

export default function Programs({ onNavigate }: ProgramsProps) {
  const nav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Page header */}
      <div className="bg-gradient-to-r from-[#0D1F4E] to-[#1B3A8A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-orange-400 text-sm mb-3">
            <button onClick={() => nav('home')} className="hover:underline">Home</button>
            <ChevronRight size={14} />
            <span>Programs</span>
          </div>
          <h1 className="text-5xl font-extrabold mb-3">Our Programs</h1>
          <div className="w-16 h-1 bg-[#E8760A]" />
          <p className="text-blue-200 mt-4 max-w-xl">
            Comprehensive programs fostering Telugu culture, education, arts, and community welfare.
          </p>
        </div>
      </div>

      {/* Quick nav */}
      <div className="bg-white border-b border-gray-200 sticky top-[80px] z-20 shadow-sm overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 py-3 min-w-max">
            {programs.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  const el = document.getElementById(p.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-[#E8760A] hover:bg-orange-50 rounded-lg transition-colors whitespace-nowrap"
              >
                {p.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Programs */}
      {programs.map((p, idx) => {
        const c = colorMap[p.color];
        return (
          <section key={p.id} id={p.id} className={`py-20 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-4">
              <div className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? 'md:grid-flow-dense' : ''}`}>
                <div className={idx % 2 !== 0 ? 'md:col-start-2' : ''}>
                  <div className={`inline-flex items-center gap-2 ${c.badge} text-white text-xs font-bold px-3 py-1 rounded-full mb-4`}>
                    <p.icon size={14} />
                    {p.subtitle}
                  </div>
                  <h2 className="text-4xl font-extrabold text-[#1B3A8A] mb-4">{p.title}</h2>
                  <div className="w-16 h-1 bg-[#E8760A] mb-5" />
                  <p className="text-gray-600 leading-relaxed mb-6">{p.desc}</p>

                  {/* Stats row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    {p.stats.map((s) => (
                      <div key={s.l} className={`rounded-xl p-3 text-center ${c.bg} border ${c.border}`}>
                        <div className={`font-extrabold text-lg ${c.icon}`}>{s.n}</div>
                        <div className="text-gray-500 text-xs">{s.l}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-[#E8760A]">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => nav('contact')}
                    className="bg-[#E8760A] hover:bg-orange-500 text-white font-bold px-8 py-3 rounded-lg transition-all flex items-center gap-2"
                  >
                    Learn More <ArrowRight size={16} />
                  </button>
                </div>

                <div className={idx % 2 !== 0 ? 'md:col-start-1 md:row-start-1' : ''}>
                  <div className="relative">
                    <img
                      src={p.heroImage}
                      alt={p.title}
                      className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                    />
                    <div className={`absolute -bottom-4 ${idx % 2 === 0 ? '-right-4' : '-left-4'} ${c.bg} border ${c.border} rounded-xl p-4 shadow-xl`}>
                      <p.icon size={28} className={c.icon} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="bg-[#E8760A] py-16 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-4">Enroll in a Program</h2>
          <p className="text-orange-100 mb-8">Contact us to register for any of our programs or to volunteer as an instructor.</p>
          <button
            onClick={() => nav('contact')}
            className="bg-white text-[#E8760A] hover:bg-orange-50 font-bold px-10 py-4 rounded-lg transition-all inline-flex items-center gap-2"
          >
            Get in Touch <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
