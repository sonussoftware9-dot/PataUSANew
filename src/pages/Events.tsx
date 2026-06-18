import { useState } from 'react';
import { Calendar, MapPin, Clock, ChevronRight, Search, Filter } from 'lucide-react';

interface EventsProps {
  onNavigate: (page: string) => void;
}

const allEvents = [
  {
    id: 1,
    date: 'Jul 12, 2025',
    time: '5:00 PM - 10:00 PM',
    title: 'Ugadi Cultural Celebration 2025',
    location: 'Houston Convention Center, TX',
    category: 'Cultural',
    status: 'upcoming',
    image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Celebrate the Telugu New Year with traditional rituals, cultural performances, and community feast.',
  },
  {
    id: 2,
    date: 'Aug 15, 2025',
    time: '6:00 PM - 11:00 PM',
    title: 'Independence Day Gala',
    location: 'Dallas Marriott, TX',
    category: 'National',
    status: 'upcoming',
    image: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'A grand celebration of Indian and American Independence Day, honoring both our heritage and our home.',
  },
  {
    id: 3,
    date: 'Sep 20-21, 2025',
    time: 'All Day',
    title: 'PATA Annual Convention 2025',
    location: 'Austin Convention Center, TX',
    category: 'Convention',
    status: 'upcoming',
    image: 'https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'The flagship event of PATA featuring cultural programs, community awards, guest speakers, and networking.',
  },
  {
    id: 4,
    date: 'Oct 5, 2025',
    time: '3:00 PM - 8:00 PM',
    title: 'Navratri & Dussehra Festival',
    location: 'San Antonio Civic Center, TX',
    category: 'Cultural',
    status: 'upcoming',
    image: 'https://images.pexels.com/photos/3009779/pexels-photo-3009779.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Traditional garba, dandiya, and Dussehra celebrations with live music and cultural performances.',
  },
  {
    id: 5,
    date: 'Nov 15, 2025',
    time: '2:00 PM - 7:00 PM',
    title: 'Karthika Deepotsavam',
    location: 'Houston Temple, TX',
    category: 'Religious',
    status: 'upcoming',
    image: 'https://images.pexels.com/photos/2090639/pexels-photo-2090639.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Light festival celebrating the auspicious month of Karthika with lamp lighting and devotional programs.',
  },
  {
    id: 6,
    date: 'Dec 26-28, 2025',
    time: 'All Day',
    title: 'Winter Cultural Fest',
    location: 'Houston George R Brown Convention Center, TX',
    category: 'Cultural',
    status: 'upcoming',
    image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'A three-day extravaganza of Telugu music, dance, drama, and food celebrating winter festivities.',
  },
  {
    id: 7,
    date: 'Mar 29, 2025',
    title: 'PATA Cultural Awards Night',
    time: '6:00 PM - 10:00 PM',
    location: 'Houston Event Center, TX',
    category: 'Cultural',
    status: 'past',
    image: `${import.meta.env.BASE_URL}images/CulturalImage1-CMEiyyEM.jpeg`,
    desc: 'Annual awards ceremony honoring community members for their contributions to Telugu culture and society.',
  },
  {
    id: 8,
    date: 'Feb 22, 2025',
    title: 'PATA Annual Convention',
    time: '5:00 PM - 11:00 PM',
    location: 'Dallas Convention Center, TX',
    category: 'Convention',
    status: 'past',
    image: `${import.meta.env.BASE_URL}images/CulturalImage2-DnRRJzhN.jpeg`,
    desc: 'Flagship annual event featuring cultural performances, community awards, and leadership recognition.',
  },
  {
    id: 9,
    date: 'Jan 18, 2025',
    title: 'Pongal Cultural Celebration',
    time: '4:00 PM - 9:00 PM',
    location: 'PATA Community Hall, Houston, TX',
    category: 'Cultural',
    status: 'past',
    image: `${import.meta.env.BASE_URL}images/CulturalImage3-D96AVJoU.jpeg`,
    desc: 'Traditional Pongal celebrations with cultural speeches, performances, and community feast.',
  },
];

const categories = ['All', 'Cultural', 'National', 'Convention', 'Religious'];

export default function Events({ onNavigate }: EventsProps) {
  const [filter, setFilter] = useState<'upcoming' | 'past'>('upcoming');
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');

  const nav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filtered = allEvents.filter((e) => {
    const matchStatus = e.status === filter;
    const matchCat = category === 'All' || e.category === category;
    const matchSearch = e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.location.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchCat && matchSearch;
  });

  return (
    <div>
      {/* Page header */}
      <div
        className="relative bg-gradient-to-r from-[#0D1F4E] to-[#1B3A8A] text-white py-24 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1200')` }}
        />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-orange-400 text-sm mb-3">
            <button onClick={() => nav('home')} className="hover:underline">Home</button>
            <ChevronRight size={14} />
            <span>Events</span>
          </div>
          <h1 className="text-5xl font-extrabold mb-3">Events & Programs</h1>
          <div className="w-16 h-1 bg-[#E8760A]" />
          <p className="text-blue-200 mt-4 max-w-xl">
            Celebrate, connect, and contribute. Stay updated on all PATA events.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-gray-200 sticky top-[80px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap gap-4 items-center justify-between">
          {/* Status toggle */}
          <div className="flex bg-gray-100 rounded-xl p-1">
            {(['upcoming', 'past'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold capitalize transition-all ${
                  filter === s ? 'bg-[#E8760A] text-white shadow-md' : 'text-gray-600 hover:text-[#1B3A8A]'
                }`}
              >
                {s === 'upcoming' ? 'Upcoming Events' : 'Past Events'}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {/* Search */}
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search events..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 w-48"
              />
            </div>
            {/* Category filter */}
            <div className="relative">
              <Filter size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 appearance-none bg-white"
              >
                {categories.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Events grid */}
      <section className="py-16 bg-gray-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <Calendar size={48} className="mx-auto mb-4 opacity-30" />
              <p className="text-lg font-semibold">No events found</p>
              <p className="text-sm mt-1">Try adjusting your filters</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((e) => (
                <div
                  key={e.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img src={e.image} alt={e.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-[#E8760A] text-white text-xs font-bold px-3 py-1 rounded-full">
                        {e.category}
                      </span>
                      {e.status === 'upcoming' && (
                        <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Upcoming
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-[#1B3A8A] text-lg mb-2 line-clamp-2">{e.title}</h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">{e.desc}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar size={14} className="text-[#E8760A]" />
                        <span>{e.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Clock size={14} className="text-[#E8760A]" />
                        <span>{e.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <MapPin size={14} className="text-[#E8760A]" />
                        <span>{e.location}</span>
                      </div>
                    </div>
                    {e.status === 'upcoming' && (
                      <button className="mt-5 w-full bg-[#E8760A] hover:bg-orange-500 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm">
                        Register Now
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
