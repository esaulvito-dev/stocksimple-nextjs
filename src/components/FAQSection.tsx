"use client";
import { useState } from 'react';

const faqs = [
  { q: '¿Necesito saber de computación avanzada?', a: 'No. Si sabes usar WhatsApp, sabes usar StockSimple. Es 100% intuitivo.', highlight: '100% intuitivo' },
  { q: '¿Es un pago mensual?', a: 'No. Es un solo pago de $12. Sin letras pequeñas, sin cobros recurrentes.', highlight: 'un solo pago de $12' },
  { q: '¿El acceso es personal?', a: 'Sí, el acceso es completamente personal. Ingresas con tu propio correo y contraseña. Compatible con celular, tablet o computadora.', highlight: 'completamente personal' },
  { q: '¿Dan soporte o garantía?', a: 'Sí. Damos soporte continuo a través de WhatsApp. Además, cuentas con la garantía de Hotmart: si en 7 días no estás satisfecho, te devolvemos tu dinero.', highlight: 'garantía de Hotmart' },
  { q: '¿Hay actualizaciones del programa?', a: 'Sí. StockSimple se actualiza mensualmente con mejoras y nuevas funciones.', highlight: 'se actualiza mensualmente' },
  { q: '¿Funciona para cualquier tipo de tienda?', a: 'Ideal para ferreterías, boutiques, bodegas y cualquier negocio que maneje productos físicos.', highlight: 'Ferreterías, boutiques, bodegas' },
  { q: '¿Cuánto tiempo toma configurarlo?', a: 'Menos de 5 minutos. Subes tus productos, defines cantidades y listo.', highlight: 'Menos de 5 minutos' },
];

function FAQItem({ q, a, highlight }: { q: string; a: string; highlight: string }) {
  const [open, setOpen] = useState(false);
  const parts = a.split(highlight);
  return (
    <div className={`border border-gray-100 rounded-2xl overflow-hidden transition-all ${open ? 'bg-emerald-50/40' : 'bg-white hover:bg-gray-50/60'}`}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 text-left cursor-pointer gap-3">
        <span className="text-sm sm:text-base font-semibold text-gray-900">{q}</span>
        <span className={`w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0 transition-all ${open ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-500'}`}>
          <i className={`${open ? 'ri-subtract-line' : 'ri-add-line'} text-lg`} />
        </span>
      </button>
      {open && (
        <div className="px-4 sm:px-6 pb-4 sm:pb-5 slide-down">
          <p className="text-gray-600 text-sm leading-relaxed">
            {parts.map((part, i) => i === 0 ? <span key={i}>{part}</span> : <span key={i}><strong className="text-emerald-600 font-semibold">{highlight}</strong>{part}</span>)}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-gray-50/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 anim-fade-up">
          <span className="inline-block bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Preguntas Frecuentes</span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-gray-900 leading-tight" style={{fontFamily:"'Syne', sans-serif"}}>Tenemos las <span className="text-emerald-600">respuestas.</span></h2>
        </div>
        <div className="flex flex-col gap-3 anim-fade-up-1">
          {faqs.map(f => <FAQItem key={f.q} {...f} />)}
        </div>
      </div>
    </section>
  );
}
