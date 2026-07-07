import { useEffect, useState } from 'react';
import useScrollEffects from '../hooks/useScrollEffects';

const NAV_ITEMS = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#service', label: 'Service' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#article', label: 'Article' },
  { href: '#ourcustomer', label: 'Our Customer' },
  { href: '#contact', label: 'Contact' },
];

const SECTION_IDS = NAV_ITEMS.map((item) => item.href.replace('#', ''));

export default function Header() {
  const { isScrolled, activeSection } = useScrollEffects(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);

  // Kunci scroll body saat menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  function handleNavClick() {
    setMenuOpen(false);
  }

  return (
    <header
      id="header"
      className={`fixed-top ${isScrolled ? 'header-scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`.trim()}
    >
      <div className="container d-flex align-items-center justify-content-between flex-wrap">
        <div className="logo">
          <div className="h3 fw-bold mb-0">
            <a href="#hero" title="Beranda PT Shinrai Vision Engineering">
              PT SHINRAI VISION ENGINEERING
            </a>
          </div>
        </div>

        <nav id="navbar" className="navbar navbar-expand-lg">
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            aria-label="Toggle navigation"
            aria-controls="navMenu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>

          <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`.trim()} id="navMenu">
            <ul className="navbar-nav ms-auto">
              {NAV_ITEMS.map((item) => (
                <li className="nav-item" key={item.href}>
                  {/* Tag pembuka <a ditambahkan di sini */}
                  <a
                    className={`nav-link ${activeSection === item.href.replace('#', '') ? 'active' : ''}`.trim()}
                    href={item.href}
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {/* Backdrop khusus mobile, tap di luar menu = auto close */}
      {menuOpen && (
        <div
          className="navbar-backdrop d-lg-none"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </header>
  );
}