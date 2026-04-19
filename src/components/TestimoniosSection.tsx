"use client";
import { useState } from 'react';

const testimonios = [
  { nombre: 'Carla Mendoza', negocio: 'Boutique Carla M.', ciudad: 'Lima, Perú', avatar: 'https://readdy.ai/api/search-image?query=portrait+latin+american+woman+smiling+business+owner+boutique&width=120&height=120&seq=testi001&orientation=squarish', texto: 'Antes llevaba todo en un cuaderno y siempre me faltaban productos sin darme cuenta. Con StockSimple sé exactamente qué tengo y qué necesito pedir. Lo configuré en menos de 10 minutos y ya no pierdo ventas por falta de stock.', estrellas: 5, destacado: 'Ya no pierdo ventas por falta de stock' },
  { nombre: 'Jorge Quispe', negocio: 'Ferretería El Maestro', ciudad: 'Arequipa, Perú', avatar: 'https://readdy.ai/api/search-image?query=portrait+latin+american+man+smiling+hardware+store+owner&width=120&height=120&seq=testi002&orientation=squarish', texto: 'Tengo más de 400 productos en mi ferretería y antes era un caos total. Ahora con StockSimple tengo todo ordenado, sé cuándo algo está por agotarse y mis empleados también pueden consultarlo. Valió cada centavo.', estrellas: 5, destacado: 'Más de 400 productos ordenados' },
  { nombre: 'Lucía Torres', negocio: 'Minimarket Lucía', ciudad: 'Trujillo, Perú', avatar: 'https://readdy.ai/api/search-image?query=portrait+young+latin+american+woman+smiling+minimarket+owner&width=120&height=120&seq=testi003&orientation=squarish', texto: 'Pensé que iba a ser complicado pero fue todo lo contrario. En 5 minutos ya tenía mis productos cargados. Lo uso desde el celular cuando estoy en el mercado comprando y sé exactamente qué me falta. Súper recomendado.', estrellas: 5, destacado: 'Lo uso desde el celular en el mercado' },
  { nombre: 'Miguel Ángel Rojas', negocio: 'Distribuidora Rojas', ciudad: 'Cusco, Perú', avatar: 'https://readdy.ai/api/search-image?query=portrait+latin+american+man+smiling+distributor+business&width=120&height=120&seq=testi004&orientation=squarish', texto: 'Llevaba años usando Excel y siempre había errores. Desde que uso StockSimple mis reportes son exactos y puedo ver qué productos se venden más. La garantía de 7 días me dio confianza para probarlo y no me arrepentí.', estrellas: 5, destacado: 'Mis reportes ahora son exactos' },
  { nombre: 'Ana Sofía Vega', negocio: 'Tienda Naturista Vida Sana', ciudad: 'Piura, Perú', avatar: 'https://readdy.ai/api/search-image?query=portrait+latin+american+woman+smiling+natural+health+store&width=120&height=120&seq=testi005&orientation=squarish', texto: 'Tenía miedo de que fuera difícil de usar porque no soy muy tecnológica, pero es increíblemente sencillo. Mi hija me ayudó a configurarlo y desde entonces lo manejo sola sin ningún problema. ¡Ojalá lo hubiera conocido antes!', estrellas: 5, destacado: 'Increíblemente sencillo de usar' },
  { nombre: 'Roberto Chávez', negocio: 'Bodega Don Roberto', ciudad: 'Iquitos, Perú', avatar: 'https://readdy.ai/api/search-image?query=portrait+latin+american+man+smiling+bodega+grocery+owner&width=120&height=120&seq=testi006&orientation=squarish', texto: 'Por $12 al año es una inversión ridículamente pequeña para lo que te da. Antes perdía mucho más en productos vencidos o en compras duplicadas. Ahora tengo control total y mi bodega funciona como un reloj.', estrellas: 5, destacado: 'Control total por solo $12 al año' },
];

function Stars({ count }: { count: number }) {
  return <div className="flex items-center gap-0.5">{Array.from({length:count}).map((_,i) => <i key={i} className="ri-star-fill text-amber-400 text-sm" />)}</div>;
}

function Card({ t, featured }: { t: typeof testimonios[0]; featured?: boolean }) {
  return (
    <div className={`flex flex-col gap-4 rounded-2xl p-5 sm:p-6 h-full transition-all ${featured ? 'bg-emerald-500 text-white' : 'bg-white border border-gray-100'}`}>
      <div className={`w-8 h-8 flex items-center justify-center rounded-lg ${featured ? 'bg-white/20' : 'bg-emerald-50'}`}><i className={`ri-double-quotes-l text-lg ${featured ? 'text-white' : 'text-emerald-500'}`} /></div>
      <span className={`inline-block self-start text-xs font-bold px-3 py-1 rounded-full ${featured ? 'bg-white/20 text-white' : 'bg-emerald-50 text-emerald-700'}`}>"{t.destacado}"</span>
      <p className={`text-sm leading-relaxed flex-1 ${featured ? 'text-white/90' : 'text-gray-600'}`}>{t.texto}</p>
      <Stars count={t.estrellas} />
      <div className="flex items-center gap-3 pt-2 border-t border-white/20">
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/30"><img src={t.avatar} alt={t.nombre} className="w-full h-full object-cover object-top" /></div>
        <div><p className={`text-sm font-bold ${featured ? 'text-white' : 'text-gray-900'}`}>{t.nombre}</p><p className={`text-xs ${featured ? 'text-white/70' : 'text-gray-400'}`}>{t.negocio} · {t.ciudad}</p></div>
      </div>
    </div>
  );
}

export default function TestimoniosSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <section id="testimonios" className="py-16 sm:py-24 bg-gray-50/70 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-14 anim-fade-up">
          <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Lo que dicen nuestros clientes</span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-gray-900 leading-tight" style={{fontFamily:"'Syne', sans-serif"}}>Dueños de tienda que ya <span className="text-emerald-600">tomaron el control.</span></h2>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-8">
            {[{value:'200+',label:'Tiendas activas'},{value:'4.9/5',label:'Calificación promedio'},{value:'98%',label:'Clientes satisfechos'}].map(s => (
              <div key={s.label} className="text-center"><p className="text-2xl sm:text-3xl font-black text-emerald-500" style={{fontFamily:"'Syne', sans-serif"}}>{s.value}</p><p className="text-xs text-gray-500 mt-0.5">{s.label}</p></div>
            ))}
          </div>
        </div>
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 anim-fade-up-1">
          {testimonios.map((t,i) => <Card key={t.nombre} t={t} featured={i===1} />)}
        </div>
        <div className="sm:hidden anim-fade-up-1">
          <Card t={testimonios[activeIdx]} featured={activeIdx===1} />
          <div className="flex items-center justify-center gap-2 mt-5">
            {testimonios.map((_,i) => <button key={i} onClick={() => setActiveIdx(i)} className={`rounded-full transition-all cursor-pointer ${i===activeIdx ? 'w-6 h-2 bg-emerald-500' : 'w-2 h-2 bg-gray-300'}`} />)}
          </div>
        </div>
        <div className="mt-10 sm:mt-14 text-center anim-fade-up-2">
          <a href="https://pay.hotmart.com/U105455470R?checkoutMode=10" target="_blank" rel="noopener noreferrer" onClick={() => (window as any).fbq?.('track','InitiateCheckout')} className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 rounded-xl transition-all cursor-pointer anim-pulse-green">
            <i className="ri-lock-line flex-shrink-0" /><span>Quiero unirme — $12/año</span><i className="ri-arrow-right-line flex-shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
