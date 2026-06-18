import { Users, Target, Eye, Award, ChevronRight } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

const leadership = [
  {
    name: 'James Watt Kommu',
    title: 'President',
    image: '/images/DSC02172.jpg',
  },
  {
    name: 'Srilatha Reddy',
    title: 'Vice President',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Suresh Naidoo',
    title: 'General Secretary',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Padmaja Rao',
    title: 'Treasurer',
    image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Venkat Sharma',
    title: 'Cultural Secretary',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Anitha Varma',
    title: 'Youth Coordinator',
    image: 'https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const milestones = [
  { year: '2009', event: 'PATA Founded in Houston, TX by Telugu professionals and families.' },
  { year: '2011', event: 'First Annual Telugu Cultural Festival with 500+ attendees.' },
  { year: '2013', event: 'Paatasala Telugu School launched with 50 students.' },
  { year: '2015', event: 'PATA Foundation established for charitable activities.' },
  { year: '2017', event: 'Expanded to chapters across 5 major US cities.' },
  { year: '2019', event: 'PATA celebrated 10th anniversary with grand convention.' },
  { year: '2022', event: 'Launched digital Kalasala with 200+ enrolled students.' },
  { year: '2024', event: '5,000+ members milestone and national recognition.' },
];

export default function About({ onNavigate }: AboutProps) {
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
            <span>About PATA</span>
          </div>
          <h1 className="text-5xl font-extrabold mb-3">About PATA</h1>
          <div className="w-16 h-1 bg-[#E8760A]" />
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#E8760A] text-sm font-bold uppercase tracking-widest">Our Story</span>
            <h2 className="text-4xl font-extrabold text-[#1B3A8A] mt-2 mb-5">Who We Are</h2>
            <div className="w-16 h-1 bg-[#E8760A] mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4">
              The Progressive American Telugu Association (PATA) was founded in 2009 by a group of dedicated Telugu professionals and families living in the United States. Driven by a shared vision to preserve Telugu culture, support one another, and contribute to American society, PATA has grown from a small community group to a thriving national organization.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Today, PATA unites over 5,000 members across the United States. We celebrate the richness of Telugu language, literature, arts, and traditions while embracing American values of freedom, diversity, and progress.
            </p>
            <p className="text-gray-600 leading-relaxed">
              PATA is proudly non-partisan, non-profit, and non-religious — open to all Telugu-speaking people and their families regardless of political affiliation, religion, caste, or region.
            </p>
          </div>
          <div className="relative">
            <img
              src="/images/CulturalImage2-DnRRJzhN.jpeg"
              alt="PATA Annual Convention"
              className="rounded-2xl shadow-2xl w-full h-80 object-cover object-top"
            />
            <div className="absolute -bottom-5 -right-5 bg-[#E8760A] text-white rounded-xl p-5 shadow-xl">
              <div className="text-3xl font-extrabold">2009</div>
              <div className="text-sm font-semibold">Est. Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* PATA Photo Gallery */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[#E8760A] text-sm font-bold uppercase tracking-widest">Gallery</span>
            <h2 className="text-3xl font-extrabold text-[#1B3A8A] mt-2">PATA Events in Pictures</h2>
            <div className="w-16 h-1 bg-[#E8760A] mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { src: '/images/CulturalImage1-CMEiyyEM.jpeg', caption: 'PATA Award Ceremony', sub: 'Honoring community excellence' },
              { src: '/images/CulturalImage2-DnRRJzhN.jpeg', caption: 'PATA Annual Convention', sub: 'Celebrating culture on stage' },
              { src: '/images/CulturalImage3-D96AVJoU.jpeg', caption: 'PATA Cultural Program', sub: 'Voices of the Telugu community' },
            ].map((item) => (
              <div key={item.src} className="group relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F4E]/75 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-bold text-sm">{item.caption}</p>
                  <p className="text-blue-200 text-xs mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* President's Message */}
      <section className="bg-[#1B3A8A] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-orange-400 text-sm font-bold uppercase tracking-widest">From the Desk of</span>
            <h2 className="text-4xl font-extrabold text-white mt-2">President's Message</h2>
            <div className="w-16 h-1 bg-[#E8760A] mx-auto mt-4" />
          </div>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Photo + name */}
            <div className="md:w-64 shrink-0 flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-[#E8760A] blur-2xl opacity-30 scale-110" />
                <img
                  src="/images/DSC02172.jpg"
                  alt="James Watt Kommu"
                  className="relative rounded-2xl shadow-2xl w-56 h-72 object-cover object-top border-4 border-orange-400/40"
                />
              </div>
              <div className="mt-5 text-center bg-white/10 rounded-xl px-5 py-4 w-full">
                <div className="text-white font-extrabold text-lg leading-tight">James Watt Kommu</div>
                <div className="text-orange-400 font-semibold text-sm mt-1">President</div>
                <div className="text-blue-300 text-xs mt-0.5">Progressive American Telugu Association</div>
              </div>
            </div>

            {/* Message */}
            <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/15 shadow-xl relative">
              <span className="absolute -top-5 left-8 text-[#E8760A] text-9xl font-serif opacity-30 leading-none select-none">"</span>
              <div className="relative z-10 text-blue-100 space-y-4 leading-relaxed text-[15px]">
                <p>Dear PATA Family and Friends,</p>
                <p>
                  It is my great honor and privilege to serve as the President of the Progressive American Telugu Association. Our organization stands as a beacon of Telugu culture, unity, and progress in the United States — and that is only possible because of the dedication and passion of every one of you.
                </p>
                <p>
                  Since our founding, PATA has grown from a small community gathering into a thriving association that celebrates our rich Telugu heritage, supports our youth through education, and gives back through meaningful charitable work. We bridge two great nations — India and America — while carrying the values of our ancestors into the future.
                </p>
                <p>
                  Our programs — Paatasala, Kalasala, community services, and the PATA Foundation — reflect our commitment to holistic community development. We are proud of every scholar we have supported, every child who has learned to read and write Telugu, every family we have helped in their time of need.
                </p>
                <p>
                  I invite every Telugu family in America to join PATA, participate in our events, volunteer your skills, and help us write the next inspiring chapter of our community's story. Together, we are stronger, prouder, and unstoppable.
                </p>
                <p className="font-bold text-white text-base">Jai Telugu! Jai PATA!</p>
              </div>
              <div className="mt-6 pt-5 border-t border-white/20 flex items-center gap-3">
                <div className="w-10 h-0.5 bg-[#E8760A]" />
                <span className="text-orange-400 font-bold">James Watt Kommu</span>
                <span className="text-blue-300 text-sm">President, PATA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#E8760A] text-sm font-bold uppercase tracking-widest">What Drives Us</span>
            <h2 className="text-4xl font-extrabold text-[#1B3A8A] mt-2">Mission, Vision & Values</h2>
            <div className="w-16 h-1 bg-[#E8760A] mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                color: 'text-orange-500',
                bg: 'bg-orange-50',
                border: 'border-orange-200',
                desc: 'To unite, serve, and empower the Telugu community in America through cultural preservation, education, charitable activities, and community engagement.',
              },
              {
                icon: Eye,
                title: 'Our Vision',
                color: 'text-blue-600',
                bg: 'bg-blue-50',
                border: 'border-blue-200',
                desc: 'A thriving Telugu-American community that is proud of its heritage, engaged in civic life, and recognized as a model diaspora organization in the United States.',
              },
              {
                icon: Award,
                title: 'Our Values',
                color: 'text-green-600',
                bg: 'bg-green-50',
                border: 'border-green-200',
                desc: 'Unity, Cultural Pride, Service, Integrity, Inclusivity, Innovation, and Respect for all. We believe in the power of community and the beauty of diversity.',
              },
            ].map((item) => (
              <div key={item.title} className={`rounded-2xl border ${item.border} ${item.bg} p-8 hover:shadow-xl transition-all`}>
                <div className={`${item.bg} rounded-full p-4 w-fit mb-5`}>
                  <item.icon size={28} className={item.color} />
                </div>
                <h3 className="text-xl font-bold text-[#1B3A8A] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History timeline */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#E8760A] text-sm font-bold uppercase tracking-widest">Journey</span>
            <h2 className="text-4xl font-extrabold text-[#1B3A8A] mt-2">Our History</h2>
            <div className="w-16 h-1 bg-[#E8760A] mx-auto mt-4" />
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-orange-200" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`flex items-start gap-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block bg-white border-2 border-[#E8760A] rounded-xl p-5 shadow-md hover:shadow-xl transition-shadow`}>
                      <div className="text-[#E8760A] font-extrabold text-lg mb-1">{m.year}</div>
                      <p className="text-gray-600 text-sm">{m.event}</p>
                    </div>
                  </div>
                  <div className="relative z-10 shrink-0 w-5 h-5 bg-[#E8760A] rounded-full border-4 border-white shadow-md mt-4" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#E8760A] text-sm font-bold uppercase tracking-widest">Team</span>
            <h2 className="text-4xl font-extrabold text-[#1B3A8A] mt-2">Our Leadership</h2>
            <div className="w-16 h-1 bg-[#E8760A] mx-auto mt-4" />
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Dedicated volunteers and professionals leading PATA towards its vision.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((l) => (
              <div key={l.name} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group hover:-translate-y-1">
                <div className="h-56 overflow-hidden">
                  <img
                    src={l.image}
                    alt={l.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-center border-t-4 border-[#E8760A]">
                  <h3 className="font-bold text-[#1B3A8A] text-lg">{l.name}</h3>
                  <p className="text-[#E8760A] text-sm font-semibold">{l.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B3A8A] py-16 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-4">Be Part of Our Story</h2>
          <p className="text-blue-200 mb-8">Join PATA and help us write the next chapter of the Telugu-American story.</p>
          <button
            onClick={() => nav('membership')}
            className="bg-[#E8760A] hover:bg-orange-500 text-white font-bold px-10 py-4 rounded-lg transition-all inline-flex items-center gap-2"
          >
            Become a Member <ChevronRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
