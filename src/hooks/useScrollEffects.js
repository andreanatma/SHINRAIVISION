import { useEffect, useState } from 'react';

/**
 * Hook untuk 2 perilaku:
 * 1. Menambahkan class 'header-scrolled' saat halaman discroll > 50px
 * 2. Menentukan section mana yang sedang aktif di viewport (scrollspy)
 *
 * @param {string[]} sectionIds - daftar id section, contoh: ['hero', 'about', ...]
 */
export default function useScrollEffects(sectionIds) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);

      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      let current = sectionIds[0];

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      });

      setActiveSection(current);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, [sectionIds]);

  return { isScrolled, activeSection };
}
