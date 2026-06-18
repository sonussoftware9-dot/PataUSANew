import { useState } from 'react';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navLinks = [
  { label: 'Home', page: 'home' },
  {
    label: 'About',
    page: 'about',
    children: [
      { label: 'Our History', page: 'about' },
      { label: 'Mission & Vision', page: 'about' },
      { label: 'Leadership', page: 'about' },
    ],
  },
  { label: 'Events', page: 'events' },
  {
    label: 'Programs',
    page: 'programs',
    children: [
      { label: 'Paatasala', page: 'programs' },
      { label: 'Kalasala', page: 'programs' },
      { label: 'Cultural Events', page: 'programs' },
    ],
  },
  { label: 'Foundation', page: 'foundation' },
  { label: 'Membership', page: 'membership' },
  { label: 'Contact', page: 'contact' },
];

export default function Header({
  currentPage,
  onNavigate,
}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleNav = (page: string) => {
    onNavigate(page);
    setMobileOpen(false);
    setOpenDropdown(null);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className="shadow-lg">
      {/* Top Bar */}
      <div className="bg-[#1B3A8A] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <a
              href="tel:+18555555555"
              className="flex items-center gap-1 hover:text-orange-300 transition-colors"
            >
              <Phone size={13} />
              <span>+1 (855) PATA-USA</span>
            </a>

            <a
              href="mailto:info@patausa.org"
              className="flex items-center gap-1 hover:text-orange-300 transition-colors"
            >
              <Mail size={13} />
              <span>info@patausa.org</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNav('membership')}
              className="bg-orange-500 hover:bg-orange-400 text-white text-xs font-semibold px-3 py-1 rounded transition-colors"
            >
              Join PATA
            </button>

            <button
              onClick={() => handleNav('foundation')}
              className="border border-orange-400 text-orange-300 hover:bg-orange-500 hover:text-white text-xs font-semibold px-3 py-1 rounded transition-colors"
            >
              Donate
            </button>
          </div>
        </div>
      </div>

      {/* Banner */}
      {/* Banner */}
      <div className="bg-white flex justify-center border-b border-gray-200">
        <img
          src={`${import.meta.env.BASE_URL}images/patanew.png`}
          alt="PATA Banner"
          className="max-w-full h-auto"
        />
      </div>

      {/* Navigation */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 shrink-0"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/ab784090-441c-40ef-8c98-6f00d64b7dbe.png`}
              alt="PATA Logo"
              className="h-16 w-16 object-contain"
            />

            <div className="hidden sm:block leading-tight">
              <div className="text-[#1B3A8A] font-extrabold text-lg leading-none">
                PATA
              </div>

              <div className="text-[#E8760A] text-[10px] font-semibold uppercase tracking-wide">
                Progressive American
              </div>

              <div className="text-[#138808] text-[10px] font-semibold uppercase tracking-wide">
                Telugu Association
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.page + link.label}
                className="relative"
                onMouseEnter={() =>
                  link.children &&
                  setOpenDropdown(link.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  onClick={() =>
                    !link.children &&
                    handleNav(link.page)
                  }
                  className={`flex items-center gap-1 px-3 py-2 rounded text-sm font-semibold transition-colors ${currentPage === link.page
                      ? 'text-[#E8760A]'
                      : 'text-[#1B3A8A] hover:text-[#E8760A]'
                    }`}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown size={14} />
                  )}
                </button>

                {link.children &&
                  openDropdown === link.label && (
                    <div className="absolute top-full left-0 bg-white shadow-xl rounded-md py-2 min-w-[180px] border border-gray-100 z-50">
                      {link.children.map((child) => (
                        <button
                          key={child.label}
                          onClick={() =>
                            handleNav(child.page)
                          }
                          className="block w-full text-left px-4 py-2 text-sm text-[#1B3A8A] hover:bg-orange-50 hover:text-[#E8760A] transition-colors"
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-[#1B3A8A] p-2"
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
          >
            {mobileOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          {navLinks.map((link) => (
            <div key={link.page + link.label}>
              <button
                onClick={() => handleNav(link.page)}
                className={`block w-full text-left px-6 py-3 font-semibold border-b border-gray-100 transition-colors ${currentPage === link.page
                    ? 'text-[#E8760A] bg-orange-50'
                    : 'text-[#1B3A8A] hover:bg-gray-50'
                  }`}
              >
                {link.label}
              </button>

              {link.children?.map((child) => (
                <button
                  key={child.label}
                  onClick={() =>
                    handleNav(child.page)
                  }
                  className="block w-full text-left px-10 py-2 text-sm text-gray-600 border-b border-gray-50 hover:bg-orange-50 hover:text-[#E8760A] transition-colors"
                >
                  {child.label}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
