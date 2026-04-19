"use client";
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'El Problema', id: 'problema' },
  { label: 'Solución', id: 'solucion' },
  { label: 'IA', id: 'ia' },
  { label: 'Oferta', id: 'oferta' },
  { label: 'FAQ', id: 'faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white border-b border-gray-100' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <img src="https://public.readdy.ai/ai/img_res/745bd58f-36ba-4fba-8a4b-d5c0a59cd038.png" alt="StockSimple" className="h-8 sm:h-9 w-auto" />
          <div className="hidden md:flex items-center gap-6 lg:gap-7">
            {navLinks.map(({ label, id }) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-sm text-gray-600 hover:text-emerald-600 transition-colors cursor-pointer whitespace-nowrap font-medium">{label}</button>
            ))}
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer" aria-label="Abrir menú">
            <i className={`${menuOpen ? 'ri-close-line' : 'ri-menu-3-line'} text-xl text-gray-700`} />
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-gray-100 md:hidden">
          <div className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map(({ label, id }) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-sm text-gray-700 font-medium px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors text-left cursor-pointer">{label}</button>
            ))}
            <div className="pt-2 pb-1">
              <a href="https://pay.hotmart.com/U105455470R?checkoutMode=10" target="_blank" rel="noopener noreferrer" onClick={() => (window as any).fbq?.('track','InitiateCheckout')} className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold px-5 py-3 rounded-xl transition-all cursor-pointer anim-pulse-green flex items-center justify-center gap-2">
                <i className="ri-lock-line" />¡Quiero acceso por $12/año!
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
