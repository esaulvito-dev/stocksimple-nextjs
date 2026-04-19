"use client";
import { useState, useEffect } from 'react';

const STORAGE_KEY = 'stocksimple_countdown_end';

function useCountdown() {
  const getEnd = () => {
    if (typeof window === 'undefined') return Date.now() + 24*60*60*1000;
    const s = localStorage.getItem(STORAGE_KEY);
    if (s) return parseInt(s,10);
    const e = Date.now() + 24*60*60*1000;
    localStorage.setItem(STORAGE_KEY, String(e));
    return e;
  };
  const [timeLeft, setTimeLeft] = useState(24*60*60*1000);
  useEffect(() => {
    setTimeLeft(Math.max(0, getEnd() - Date.now()));
    const t = setInterval(() => { const r = Math.max(0, getEnd()-Date.now()); setTimeLeft(r); if(!r) clearInterval(t); }, 1000);
    return () => clearInterval(t);
  }, []);
  const pad = (n: number) => String(n).padStart(2,'0');
  return { hours: pad(Math.floor(timeLeft/(1000*60*60))), minutes: pad(Math.floor((timeLeft%(1000*60*60))/(1000*60))), seconds: pad(Math.floor((timeLeft%(1000*60))/1000)) };
}

const bonuses = [
  { icon:'ri-file-pdf-line', title:'Guía PDF: "Cómo auditar tu inventario en 30 minutos"', desc:'Un paso a paso práctico para que hagas un conteo exacto de tu bodega esta misma semana.', value:'$12', color:'red', img:'https://readdy.ai/api/search-image?query=professional+PDF+ebook+guide+cover+inventory+audit+checklist+minimalist&width=280&height=180&seq=stock007&orientation=landscape' },
  { icon:'ri-table-line', title:'Plantilla de carga masiva para todos tus productos', desc:'Sube todos tus productos en segundos. Sin teclear uno por uno.', value:'$12', color:'emerald', img:'https://readdy.ai/api/search-image?query=spreadsheet+template+bulk+upload+product+import+data+table&width=280&height=180&seq=stock008&orientation=landscape' },
];

export default function CheckoutSection() {
  const { hours, minutes, seconds } = useCountdown();
  return (
    <section id="checkout" className="py-16 sm:py-24 bg-gradient-to-br from-amber-50/60 via-white to-emerald-50/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-12 anim-fade-up">
          <span className="inline-block bg-amber-50 text-amber-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">¡Oferta Especial!</span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-gray-900 leading-tight mb-4" style={{fontFamily:"'Syne', sans-serif"}}>Compra hoy y llévate estos <span className="text-amber-500">Bonos Exclusivos</span></h2>
          <p className="text-gray-500 text-sm sm:text-base mb-6">Solo por las próximas 24 horas:</p>
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            {[{v:hours,l:'Horas'},{v:minutes,l:'Minutos'},{v:seconds,l:'Segundos'}].map((item,i) => (
              <div key={item.l} className="flex items-center gap-2 sm:gap-3">
                <div className="flex flex-col items-center">
                  <div className="bg-gray-900 text-white text-xl sm:text-2xl font-black w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl" style={{fontFamily:"'Syne', sans-serif"}}>{item.v}</div>
                  <span className="text-xs text-gray-500 mt-1 font-medium">{item.l}</span>
                </div>
                {i<2 && <span className="text-xl sm:text-2xl font-black text-gray-400 mb-4">:</span>}
              </div>
            ))}
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 items-start">
          <div className="flex flex-col gap-4 sm:gap-5 anim-fade-up-1">
            <p className="text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wider">Bonos incluidos en tu compra:</p>
            {bonuses.map(b => (
              <div key={b.title} className="relative bg-white border border-dashed border-gray-200 rounded-2xl overflow-hidden flex flex-col sm:flex-row">
                <div className="absolute top-3 right-3 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">GRATIS — Valor {b.value}</div>
                <div className="w-full h-32 sm:w-36 sm:h-auto flex-shrink-0 overflow-hidden"><img src={b.img} alt={b.title} className="w-full h-full object-cover object-top" /></div>
                <div className="p-4 sm:p-5 flex-1 min-w-0">
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center ${b.color==='red'?'bg-red-100 text-red-500':'bg-emerald-100 text-emerald-500'} rounded-lg mb-2 sm:mb-3`}><i className={`${b.icon} text-sm sm:text-base`} /></div>
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug mb-1 sm:mb-2 pr-0 sm:pr-20">{b.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
            <div className="bg-gray-50 rounded-2xl p-4 sm:p-5 border border-gray-100">
              <div className="flex justify-between text-xs sm:text-sm text-gray-500 mb-2"><span>StockSimple</span><span className="line-through text-gray-400">$49</span></div>
              <div className="flex justify-between text-xs sm:text-sm text-gray-500 mb-2"><span>Bono 1 — Guía PDF</span><span className="line-through text-gray-400">$15</span></div>
              <div className="flex justify-between text-xs sm:text-sm text-gray-500 mb-3"><span>Bono 2 — Plantilla</span><span className="line-through text-gray-400">$15</span></div>
              <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                <div><span className="font-bold text-gray-800 text-sm sm:text-base">Total HOY</span><p className="text-xs text-red-500 font-semibold mt-0.5">¡Ahorras $67!</p></div>
                <span className="text-2xl sm:text-3xl font-black text-emerald-500">$12/año</span>
              </div>
            </div>
          </div>
          <div className="anim-fade-up-2">
            <div className="bg-white border-2 border-emerald-200 rounded-3xl p-5 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-emerald-100 rounded-xl flex-shrink-0"><i className="ri-secure-payment-line text-emerald-600 text-lg sm:text-xl" /></div>
                <h3 className="text-base sm:text-xl font-black text-gray-900 leading-snug" style={{fontFamily:"'Syne', sans-serif"}}>SÍ, QUIERO EL ACCESO POR $12/AÑO</h3>
              </div>
              <p className="text-gray-500 text-xs sm:text-sm mb-5 sm:mb-7 leading-relaxed">Haz clic en el botón y completa tu pago de forma segura a través de Hotmart. Acceso inmediato al instante.</p>
              <a href="https://pay.hotmart.com/U105455470R?checkoutMode=10" target="_blank" rel="noopener noreferrer" onClick={() => (window as any).fbq?.('track','InitiateCheckout')} className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base sm:text-lg py-4 sm:py-5 rounded-xl transition-all cursor-pointer anim-pulse-green flex items-center justify-center gap-2 sm:gap-3 leading-snug mb-5 whitespace-nowrap">
                <i className="ri-lock-line text-lg sm:text-xl flex-shrink-0" /><span>¡Quiero acceso por $12/año!</span><i className="ri-arrow-right-line text-lg flex-shrink-0" />
              </a>
              <div className="grid grid-cols-3 gap-2 mb-5">
                {[{icon:'ri-shield-check-line',label:'Pago seguro'},{icon:'ri-refund-2-line',label:'Garantía 7 días'},{icon:'ri-time-line',label:'Acceso inmediato'}].map(b => (
                  <div key={b.label} className="bg-gray-50 rounded-xl p-3 flex flex-col items-center gap-1 text-center"><i className={`${b.icon} text-emerald-500 text-lg`} /><span className="text-xs text-gray-500 leading-tight">{b.label}</span></div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-2 text-xs text-gray-400 border-t border-gray-100 pt-4"><i className="ri-secure-payment-line text-gray-400" /><span>Pago procesado de forma segura por <strong className="text-gray-600">Hotmart</strong></span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
