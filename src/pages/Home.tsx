import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Users, Award, Heart, BookOpen, Music, Calendar, ChevronRight, Star, Globe } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ value, suffix, label, icon: Icon, started }: {
  value: number; suffix: string; label: string; icon: React.ElementType; started: boolean;
}) {
  const count = useCountUp(value, 2000, started);
  return (
    <div className="text-center">
      <div className="flex justify-center mb-3">
        <div className="bg-orange-100 rounded-full p-4">
          <Icon size={28} className="text-[#E8760A]" />
        </div>
      </div>
      <div className="text-4xl font-extrabold text-[#1B3A8A]">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600 text-sm mt-1 font-medium">{label}</div>
    </div>
  );
}

const events = [
  {
    date: 'Jul 12, 2025',
    title: 'Ugadi Cultural Celebration',
    location: 'Houston Convention Center, TX',
    image: `${import.meta.env.BASE_URL}images/CulturalImage1-CMEiyyEM.jpeg`,
  },
  {
    date: 'Aug 15, 2025',
    title: 'PATA Annual Convention',
    location: 'Dallas Convention Center, TX',
    image: `${import.meta.env.BASE_URL}images/CulturalImage2-DnRRJzhN.jpeg`,
  },
  {
    date: 'Sep 20, 2025',
    title: 'PATA Cultural Awards Night',
    location: 'Austin Convention Center, TX',
    image: `${import.meta.env.BASE_URL}images/CulturalImage3-D96AVJoU.jpeg`,
  },
];

const programs = [
  {
    icon: BookOpen,
    title: 'Paatasala',
    subtitle: 'Telugu Language School',
    desc: 'Teaching the richness of Telugu language and culture to the next generation of Telugu-Americans.',
    stat: '2,000+ Students',
    color: 'bg-blue-50 border-blue-200',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: Music,
    title: 'Kalasala',
    subtitle: 'Fine Arts Academy',
    desc: 'Classical dance, music, and performing arts programs nurturing Telugu cultural heritage.',
    stat: '500+ Artists',
    color: 'bg-orange-50 border-orange-200',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    icon: Heart,
    title: 'Community Services',
    subtitle: 'Help & Welfare',
    desc: 'Emergency assistance, immigration guidance, and welfare services for the Telugu community.',
    stat: '3,000+ Helped',
    color: 'bg-green-50 border-green-200',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    icon: Users,
    title: 'Matrimonial',
    subtitle: 'Connecting Hearts',
    desc: 'Dedicated matrimonial services helping Telugu families find compatible life partners.',
    stat: '500+ Matches',
    color: 'bg-rose-50 border-rose-200',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
  },
];

export default function Home({ onNavigate }: HomeProps) {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsStarted, setStatsStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsStarted(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const nav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1F4E]/95 via-[#0D1F4E]/80 to-transparent" />

        {/* Decorative tricolor bar */}
        <div className="absolute top-0 left-0 right-0 h-1 flex">
          <div className="flex-1 bg-[#E8760A]" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-[#138808]" />
        </div>

        <div className="relative z-10 max-w-7xl mr-auto px-4 py-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Star size={16} className="text-orange-400" fill="currentColor" />
              <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">
                Welcome to PATA
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Progressive American<br />
              <span className="text-[#E8760A]">Telugu Association</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              Bridging two great nations — celebrating Telugu culture, language, and heritage while building a thriving community across America.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => nav('about')}
                className="bg-[#E8760A] hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-lg transition-all hover:scale-105 flex items-center gap-2 shadow-lg"
              >
                Discover PATA <ArrowRight size={18} />
              </button>
              <button
                onClick={() => nav('membership')}
                className="border-2 border-white text-white hover:bg-white hover:text-[#1B3A8A] font-bold px-8 py-4 rounded-lg transition-all"
              >
                Join Us Today
              </button>
            </div>

            {/* Quick stats */}
            <div className="mt-12 flex flex-wrap gap-8">
              {[
                { n: '5,000+', l: 'Members' },
                { n: '50+', l: 'Annual Events' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-extrabold text-orange-400">{s.n}</div>
                  <div className="text-gray-400 text-sm">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-8 bg-white/50" />
          <div className="w-3 h-3 border-2 border-white/50 rounded-full" />
        </div>
      </section>

      {/* Welcome section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-[#E8760A] text-sm font-bold uppercase tracking-widest">Who We Are</span>
            <h2 className="text-4xl font-extrabold text-[#1B3A8A] mt-2 mb-5 leading-tight">
              Welcome to PATA
            </h2>
            <div className="w-16 h-1 bg-[#E8760A] mb-6" />
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              The Progressive American Telugu Association (PATA) is a premier non-profit organization dedicated to uniting Telugu-speaking people across the United States. Founded with a vision to preserve and promote Telugu culture, language, and values, PATA serves as a home away from home for the Telugu diaspora.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              From cultural festivals to educational initiatives, from community services to charitable foundations, PATA is committed to enriching the lives of its members and contributing meaningfully to American society.
            </p>
            <button
              onClick={() => nav('about')}
              className="flex items-center gap-2 text-[#E8760A] font-bold hover:gap-4 transition-all"
            >
              Read More About Us <ChevronRight size={20} />
            </button>
          </div>
          <div className="relative">
            <img
              src={`${import.meta.env.BASE_URL}images/CulturalImage2-DnRRJzhN.jpeg`}
              alt="PATA Community Event"
              className="rounded-2xl shadow-2xl w-full h-80 object-cover object-top"
            />
            <div className="absolute -top-4 -right-4 bg-[#1B3A8A] text-white rounded-xl p-4 shadow-xl">
              <Globe size={28} className="mb-1" />
              <div className="text-xs font-semibold">Serving USA</div>
            </div>
          </div>
        </div>
      </section>

      {/* President's Message */}
      <section className="bg-gradient-to-br from-[#0D1F4E] via-[#1B3A8A] to-[#0D1F4E] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-orange-400 text-sm font-bold uppercase tracking-widest">Leadership</span>
            <h2 className="text-4xl font-extrabold text-white mt-2">Message from the President</h2>
            <div className="w-16 h-1 bg-[#E8760A] mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-5 gap-10 items-center max-w-5xl mx-auto">
            {/* Photo */}
            <div className="md:col-span-2 flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#E8760A] to-orange-300 blur-xl opacity-40 scale-110" />
                <img
                  src={`${import.meta.env.BASE_URL}images/DSC02172.jpg`}
                  alt="James Watt Kommu - President, PATA"
                  className="relative rounded-2xl shadow-2xl w-64 h-80 object-cover object-top border-4 border-white/20"
                />
              </div>
              <div className="mt-5 text-center">
                <div className="text-white font-extrabold text-xl">James Watt Kommu</div>
                <div className="text-orange-400 font-semibold text-sm mt-1">President, PATA</div>
                <div className="text-blue-300 text-xs mt-0.5">Progressive American Telugu Association</div>
              </div>
            </div>

            {/* Message */}
            <div className="md:col-span-3">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
                {/* Quote mark */}
                <div className="text-[#E8760A] text-8xl font-serif leading-none absolute -top-3 left-6 opacity-40 select-none">"</div>
                <div className="relative z-10 space-y-4 text-blue-100 leading-relaxed text-base">
                  <p>
                    Dear PATA Family and Friends,
                  </p>
                  <p>
                    It is my great honor and privilege to serve as the President of the Progressive American Telugu Association. Our organization stands as a beacon of Telugu culture, unity, and progress in the United States — and that is only possible because of the dedication and passion of every one of you.
                  </p>
                  <p>
                    Since our founding, PATA has grown from a small community gathering into a thriving association that celebrates our rich Telugu heritage, supports our youth through education, and gives back through meaningful charitable work. We bridge two great nations — India and America — while carrying the values of our ancestors into the future.
                  </p>
                  <p>
                    I invite every Telugu family to join PATA, participate in our events, and help us write the next inspiring chapter of our community's story. Together, we are stronger, prouder, and unstoppable.
                  </p>
                  <p className="font-semibold text-white">
                    Jai Telugu! Jai PATA!
                  </p>
                </div>
                <div className="mt-6 pt-5 border-t border-white/20 flex items-center gap-3">
                  <div className="w-10 h-0.5 bg-[#E8760A]" />
                  <span className="text-orange-400 font-bold text-sm">James Watt Kommu</span>
                  <span className="text-blue-300 text-sm">— President, PATA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#E8760A] text-sm font-bold uppercase tracking-widest">What We Do</span>
            <h2 className="text-4xl font-extrabold text-[#1B3A8A] mt-2 mb-3">Our Programs & Services</h2>
            <div className="w-16 h-1 bg-[#E8760A] mx-auto mb-4" />
            <p className="text-gray-500 max-w-xl mx-auto">
              Comprehensive programs designed to preserve culture, educate youth, and support the Telugu community.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((p) => (
              <div
                key={p.title}
                className={`rounded-2xl border p-6 ${p.color} hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer`}
                onClick={() => nav('programs')}
              >
                <div className={`${p.iconBg} rounded-full p-3 w-fit mb-4`}>
                  <p.icon size={24} className={p.iconColor} />
                </div>
                <h3 className="font-bold text-[#1B3A8A] text-lg">{p.title}</h3>
                <p className="text-xs font-semibold text-gray-500 mb-2">{p.subtitle}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{p.desc}</p>
                <span className="text-xs font-bold text-[#E8760A] bg-orange-100 px-3 py-1 rounded-full">
                  {p.stat}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => nav('programs')}
              className="bg-[#1B3A8A] hover:bg-[#E8760A] text-white font-bold px-8 py-4 rounded-lg transition-colors flex items-center gap-2 mx-auto"
            >
              Explore All Programs <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      {/* <section className="bg-[#1B3A8A] py-20" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-orange-400 text-sm font-bold uppercase tracking-widest">Our Impact</span>
            <h2 className="text-4xl font-extrabold text-white mt-2">Making a Difference Together</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { value: 5000, suffix: '+', label: 'Active Members', icon: Users },
              { value: 2000, suffix: '+', label: 'Telugu Students', icon: BookOpen },
              { value: 50, suffix: '+', label: 'Events Per Year', icon: Calendar },
              { value: 500, suffix: '+', label: 'Scholarships Given', icon: Award },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 rounded-2xl p-6 text-center backdrop-blur-sm">
                <div className="flex justify-center mb-3">
                  <div className="bg-orange-500/20 rounded-full p-4">
                    <s.icon size={28} className="text-orange-400" />
                  </div>
                </div>
                <div className="text-4xl font-extrabold text-white">
                  {statsStarted ? (
                    <AnimatedCount value={s.value} suffix={s.suffix} />
                  ) : (
                    `0${s.suffix}`
                  )}
                </div>
                <div className="text-blue-200 text-sm mt-1 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Events */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
            <div>
              <span className="text-[#E8760A] text-sm font-bold uppercase tracking-widest">Latest</span>
              <h2 className="text-4xl font-extrabold text-[#1B3A8A] mt-1">News & Events</h2>
              <div className="w-16 h-1 bg-[#E8760A] mt-3" />
            </div>
            <button
              onClick={() => nav('events')}
              className="flex items-center gap-2 text-[#1B3A8A] border-2 border-[#1B3A8A] hover:bg-[#1B3A8A] hover:text-white font-bold px-5 py-2.5 rounded-lg transition-colors"
            >
              All Events <ArrowRight size={16} />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((e) => (
              <div
                key={e.title}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 cursor-pointer"
                onClick={() => nav('events')}
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={e.image} alt={e.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-[#E8760A] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {e.date}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1B3A8A] text-lg mb-2 line-clamp-2">{e.title}</h3>
                  <p className="text-gray-500 text-sm flex items-center gap-1">
                    <Calendar size={14} />
                    {e.location}
                  </p>
                  <button className="mt-4 text-[#E8760A] text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#E8760A] text-sm font-bold uppercase tracking-widest">Our Community</span>
            <h2 className="text-4xl font-extrabold text-[#1B3A8A] mt-2">PATA Moments</h2>
            <div className="w-16 h-1 bg-[#E8760A] mx-auto mt-4" />
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Real moments from our events, celebrations, and community gatherings across America.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                src: `${import.meta.env.BASE_URL}images/CulturalImage1-CMEiyyEM.jpeg`,
                caption: 'PATA Award Ceremony',
                tag: 'Awards',
              },
              {
                src: `${import.meta.env.BASE_URL}images/CulturalImage2-DnRRJzhN.jpeg`,
                caption: 'PATA Annual Convention',
                tag: 'Convention',
              },
              {
                src: `${import.meta.env.BASE_URL}images/CulturalImage3-D96AVJoU.jpeg`,
                caption: 'PATA Cultural Program',
                tag: 'Cultural',
              },
            ].map((item) => (
              <div
                key={item.src}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                onClick={() => nav('events')}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F4E]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="bg-[#E8760A] text-white text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">
                    {item.tag}
                  </span>
                  <p className="text-white font-bold text-base">{item.caption}</p>
                </div>
                {/* Always-visible badge */}
                <div className="absolute top-4 right-4 bg-[#1B3A8A]/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {item.tag}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => nav('events')}
              className="inline-flex items-center gap-2 border-2 border-[#1B3A8A] text-[#1B3A8A] hover:bg-[#1B3A8A] hover:text-white font-bold px-8 py-3 rounded-lg transition-colors"
            >
              View All Events <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Foundation */}
      <section className="bg-gradient-to-br from-[#0D1F4E] to-[#1B3A8A] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange-400 text-sm font-bold uppercase tracking-widest">Giving Back</span>
              <h2 className="text-4xl font-extrabold mt-2 mb-5 leading-tight">
                PATA Foundation
              </h2>
              <div className="w-16 h-1 bg-[#E8760A] mb-6" />
              <p className="text-blue-200 leading-relaxed mb-6">
                The PATA Foundation channels the generosity of our community into meaningful change — supporting education, healthcare, disaster relief, and infrastructure in Telugu communities across the US and India.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { n: '1,000', l: 'Scholarships' },
                  { n: '500+', l: 'Schools Supported' },
                  { n: '100+', l: 'Medical Camps' },
                  { n: '$2M+', l: 'Funds Raised' },
                ].map((s) => (
                  <div key={s.l} className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-extrabold text-orange-400">{s.n}</div>
                    <div className="text-blue-200 text-sm">{s.l}</div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => nav('foundation')}
                className="bg-[#E8760A] hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-lg transition-all flex items-center gap-2"
              >
                Support Our Mission <ArrowRight size={18} />
              </button>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="PATA Foundation"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="bg-[#E8760A] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <img
              src={`${import.meta.env.BASE_URL}images/ab784090-441c-40ef-8c98-6f00d64b7dbe.png`}
              alt="PATA Logo"
              className="h-20 w-20 object-contain"
            />
          </div>
          <h2 className="text-4xl font-extrabold text-white mb-4">Join PATA Today</h2>
          <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
            Be part of the largest Telugu community organization in America. Together we celebrate, serve, and succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => nav('membership')}
              className="bg-white text-[#E8760A] hover:bg-orange-50 font-bold px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-lg"
            >
              Become a Member
            </button>
            <button
              onClick={() => nav('contact')}
              className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded-lg transition-all"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function AnimatedCount({ value, suffix }: { value: number; suffix: string }) {
  const count = useCountUp(value, 2000, true);
  return <>{count.toLocaleString()}{suffix}</>;
}
