import { MapPin, Mail, Phone, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D1F4E] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img
              src="/images/ab784090-441c-40ef-8c98-6f00d64b7dbe.png"
              alt="PATA Logo"
              className="h-16 w-16 object-contain"
            />
            <div>
              <div className="font-extrabold text-xl text-white">PATA</div>
              <div className="text-orange-400 text-xs font-semibold">Progressive American</div>
              <div className="text-green-400 text-xs font-semibold">Telugu Association</div>
            </div>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-5">
            Uniting the Telugu community across America, celebrating our heritage, and building a stronger tomorrow together.
          </p>
          <div className="flex gap-3">
            {[Facebook, Twitter, Youtube, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="bg-[#1B3A8A] hover:bg-[#E8760A] transition-colors rounded-full p-2"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-orange-400 font-bold uppercase text-sm tracking-widest mb-5 border-b border-orange-400/30 pb-2">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {[
              { label: 'Home', page: 'home' },
              { label: 'About PATA', page: 'about' },
              { label: 'Upcoming Events', page: 'events' },
              { label: 'Cultural Programs', page: 'programs' },
              { label: 'PATA Foundation', page: 'foundation' },
              { label: 'Membership', page: 'membership' },
              { label: 'Contact Us', page: 'contact' },
            ].map((link) => (
              <li key={link.page}>
                <button
                  onClick={() => handleNav(link.page)}
                  className="text-gray-300 hover:text-orange-400 text-sm transition-colors flex items-center gap-2"
                >
                  <span className="text-orange-500">›</span>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="text-orange-400 font-bold uppercase text-sm tracking-widest mb-5 border-b border-orange-400/30 pb-2">
            Our Programs
          </h4>
          <ul className="space-y-2">
            {[
              'Paatasala - Telugu School',
              'Kalasala - Fine Arts',
              'Community Services',
              'Scholarships',
              'Cultural Festivals',
              'Matrimonial Services',
              'Youth Programs',
            ].map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleNav('programs')}
                  className="text-gray-300 hover:text-orange-400 text-sm transition-colors flex items-center gap-2"
                >
                  <span className="text-orange-500">›</span>
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-orange-400 font-bold uppercase text-sm tracking-widest mb-5 border-b border-orange-400/30 pb-2">
            Reach Us
          </h4>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <MapPin size={18} className="text-orange-400 shrink-0 mt-0.5" />
              <span className="text-gray-300 text-sm leading-relaxed">
                1234 Telugu Way,<br />Houston, TX 77001
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={18} className="text-orange-400 shrink-0" />
              <a href="tel:+18555555555" className="text-gray-300 text-sm hover:text-orange-400 transition-colors">
                +1 (855) PATA-USA
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={18} className="text-orange-400 shrink-0" />
              <a href="mailto:info@patausa.org" className="text-gray-300 text-sm hover:text-orange-400 transition-colors">
                info@patausa.org
              </a>
            </li>
          </ul>
          <button
            onClick={() => handleNav('membership')}
            className="mt-6 w-full bg-[#E8760A] hover:bg-orange-500 text-white font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Join PATA Today
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Progressive American Telugu Association. All rights reserved.</p>
          <div className="flex gap-4">
            <button onClick={() => handleNav('contact')} className="hover:text-orange-400 transition-colors">Privacy Policy</button>
            <button onClick={() => handleNav('contact')} className="hover:text-orange-400 transition-colors">Terms of Use</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
