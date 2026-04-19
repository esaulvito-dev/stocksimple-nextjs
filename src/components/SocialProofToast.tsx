"use client";
import { useState, useEffect } from 'react';

const compradores = [
  { nombre: 'Marta R.', ciudad: 'Lima' }, { nombre: 'Juan C.', ciudad: 'Arequipa' },
  { nombre: 'Sofía M.', ciudad: 'Trujillo' }, { nombre: 'Carlos V.', ciudad: 'Cusco' },
  { nombre: 'Lucía T.', ciudad: 'Piura' }, { nombre: 'Diego F.', ciudad: 'Iquitos' },
  { nombre: 'Ana P.', ciudad: 'Chiclayo' }, { nombre: 'Roberto S.', ciudad: 'Tacna' },
  { nombre: 'Valeria G.', ciudad: 'Huancayo' }, { nombre: 'Miguel A.', ciudad: 'Ica' },
];
const tiempos = ['hace 2 min', 'hace 5 min', 'hace 8 min', 'hace 12 min', 'hace 1 min', 'hace 3 min'];

export default function SocialProofToast() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => { const t = setTimeout(() => setVisible(true), 4000); return () => clearTimeout(t); }, []);
  useEffect(() => {
    if (!visible) return;
    setAnimating(true);
    const t = setTimeout(() => { setAnimating(false); setTimeout(() => setVisible(false), 400); }, 4000);
    return () => clearTimeout(t);
  }, [visible, current]);
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => { setAnimating(false); setTimeout(() => { setCurrent(p => (p+1)%compradores.length); setVisible(true); }, 500); }, 30000);
    return () => clearTimeout(t);
  }, [visible, current]);

  if (!visible) return null;
  const c = compradores[current];
  const tiempo = tiempos[current % tiempos.length];

  return (
    <div className={`fixed bottom-20 sm:bottom-6 left-3 sm:left-5 z-50 transition-all duration-300 ${animating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{maxWidth:'240px'}}>
      <div className="bg-white rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 flex items-center gap-2.5 border border-gray-100" style={{boxShadow:'0 4px 16px rgba(0,0,0,0.09)'}}>
        <div className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
          <span className="text-white font-black text-xs sm:text-sm">{c.nombre[0]}</span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-gray-900 text-xs font-bold leading-snug truncate">{c.nombre} compró StockSimple</p>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
            <p className="text-gray-400 text-xs truncate">{c.ciudad} · {tiempo}</p>
          </div>
        </div>
        <span className="text-sm flex-shrink-0">🎉</span>
      </div>
    </div>
  );
}
