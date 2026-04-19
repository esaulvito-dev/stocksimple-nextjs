import Navbar from '@/components/Navbar';
import TestimoniosSection from '@/components/TestimoniosSection';
import FAQSection from '@/components/FAQSection';
import CheckoutSection from '@/components/CheckoutSection';
import SocialProofToast from '@/components/SocialProofToast';

// ─── HeroSection ───────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-emerald-50/30 to-white pt-16">
      <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-10 sm:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 min-w-0 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white border border-emerald-200 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 anim-fade-up flex-wrap justify-center">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block flex-shrink-0" />
              <span>$12/año · Acceso inmediato · Garantía 7 días</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight mb-4 anim-fade-up-1" style={{fontFamily:"'Syne', sans-serif"}}>
              Deja de perder dinero en{' '}
              <span className="relative inline-block"><span className="relative z-10 text-red-400 line-through decoration-2">cuadernos que se pierden</span></span>{' '}
              y{' '}
              <span className="relative"><span className="relative z-10">Excels que no entiendes.</span><span className="absolute -bottom-1 left-0 right-0 h-3 bg-amber-200/60 -z-0 rounded" /></span>
            </h1>
            <p className="text-sm sm:text-lg text-gray-600 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0 anim-fade-up-2">
              Toma el <strong className="text-gray-800 font-semibold">control total de tu inventario</strong> con StockSimple. La herramienta visual diseñada para dueños de tiendas, <em>sin complicaciones técnicas.</em>
            </p>
            <div className="anim-fade-up-3 flex flex-col sm:flex-row items-center lg:items-start gap-3">
              <a href="https://pay.hotmart.com/U105455470R?checkoutMode=10" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white text-base sm:text-lg font-bold px-6 sm:px-8 py-4 rounded-xl transition-all cursor-pointer text-center leading-snug w-full sm:w-auto justify-center whitespace-nowrap">
                <i className="ri-shopping-cart-line text-xl flex-shrink-0" />
                <span>¡Quiero StockSimple por $12!</span>
                <i className="ri-arrow-right-line text-lg group-hover:translate-x-1 transition-transform flex-shrink-0 hidden sm:inline" />
              </a>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
              <span className="flex items-center gap-1"><i className="ri-shield-check-line text-emerald-500" />Garantía 7 días</span>
              <span className="flex items-center gap-1"><i className="ri-lock-line text-emerald-500" />Pago seguro</span>
              <span className="flex items-center gap-1"><i className="ri-timer-line text-emerald-500" />Lista en 5 min</span>
            </div>
          </div>
          <div className="w-full lg:w-[52%] flex-shrink-0 anim-fade-in">
            <div className="flex items-center justify-center mb-3">
              <span className="inline-flex items-center gap-2 bg-emerald-500 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full tracking-wide uppercase">
                <span className="flex items-center justify-center w-5 h-5"><i className="ri-play-circle-fill text-base" /></span>
                Ver Video Demo
              </span>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-gray-200/80 bg-black">
              <div className="relative w-full" style={{paddingBottom:'56.25%'}}>
                <iframe src="https://player.vimeo.com/video/1177367204?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" className="absolute inset-0 w-full h-full" title="StockSimple Demo" />
              </div>
            </div>
            <p className="text-center text-xs text-gray-400 mt-3 flex items-center justify-center gap-1.5">
              <i className="ri-play-circle-line text-emerald-500 text-sm" />Mira cómo funciona StockSimple en menos de 2 minutos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── ProblemaSection ────────────────────────────────────────────────────────
const painPoints = [
  { icon:'ri-book-open-line', borderColor:'border-red-400', bgColor:'bg-red-50', iconColor:'text-red-500', title:'¿Sigues anotando ventas en un cuaderno que luego nadie revisa?', desc:'Ese cuaderno se llena, se pierde o simplemente nadie lo entiende. La información clave de tu negocio desaparece junto con él.' },
  { icon:'ri-error-warning-line', borderColor:'border-amber-400', bgColor:'bg-amber-50', iconColor:'text-amber-500', title:'¿Te das cuenta de que falta un producto justo cuando el cliente te lo pide?', desc:'El peor momento para descubrir que no tienes stock es frente al cliente. Esa venta ya se perdió, y también su confianza.' },
  { icon:'ri-file-excel-line', borderColor:'border-orange-400', bgColor:'bg-orange-50', iconColor:'text-orange-500', title:'¿Pierdes horas frente a un Excel complejo que termina desactualizado?', desc:'Fórmulas rotas, datos incorrectos, versiones duplicadas. El Excel era para ayudarte, pero terminó siendo otro problema más.' },
];

function ProblemaSection() {
  return (
    <section id="problema" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16 anim-fade-up">
          <span className="inline-block bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">El Problema</span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-gray-900 leading-tight mb-4" style={{fontFamily:"'Syne', sans-serif"}}>
            ¿Tu inventario es un <span className="text-red-500">caos</span> o una <span className="text-emerald-600">herramienta de ventas</span>?
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14">
          {painPoints.map((p,i) => (
            <div key={p.title} className={`bg-white rounded-2xl border-l-4 ${p.borderColor} border border-gray-100 p-5 sm:p-7 hover:scale-[1.02] transition-transform anim-fade-up-${i+1}`}>
              <div className={`w-11 h-11 flex items-center justify-center ${p.bgColor} rounded-xl mb-4`}><i className={`${p.icon} text-xl ${p.iconColor}`} /></div>
              <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{p.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl px-5 sm:px-8 py-6 sm:py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 anim-fade-up-4">
          <div className="flex items-start sm:items-center gap-3 sm:gap-4">
            <div className="w-11 h-11 flex items-center justify-center bg-red-500 rounded-xl flex-shrink-0"><i className="ri-alert-line text-white text-xl" /></div>
            <p className="text-white text-sm sm:text-lg font-semibold leading-snug">El <span className="text-red-400 font-bold">desorden</span> te está costando clientes. <span className="text-gray-300 font-normal">Es hora de digitalizar tu bodega hoy mismo.</span></p>
          </div>
          <a href="#solucion" className="flex-shrink-0 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm px-5 sm:px-6 py-3 rounded-xl transition-colors cursor-pointer w-full sm:w-auto text-center">Ver la solución <i className="ri-arrow-down-line ml-1" /></a>
        </div>
      </div>
    </section>
  );
}

// ─── SolucionSection ────────────────────────────────────────────────────────
const features = [
  { icon:'ri-eye-line', title:'Visual y Predictivo', desc:'Mira tus niveles de stock de un vistazo con indicadores de color. Verde, amarillo, rojo — sin interpretaciones.', tag:'Verde = OK  •  Rojo = Urgente', img:'https://readdy.ai/api/search-image?query=clean+inventory+dashboard+colored+stock+level+bars+green+yellow+red+minimal+white+UI&width=420&height=260&seq=stock003&orientation=landscape', accent:'emerald' },
  { icon:'ri-notification-3-line', title:'Alertas de Escasez', desc:'Recibe avisos automáticos cuando un producto esté por agotarse. No vuelvas a decir "no hay".', tag:'Notificación instantánea', img:'https://readdy.ai/api/search-image?query=smartphone+notification+alert+low+stock+inventory+warning+clean+minimal+white+app&width=420&height=260&seq=stock004&orientation=landscape', accent:'red' },
  { icon:'ri-history-line', title:'Historial de Movimientos', desc:'Quién movió qué y cuándo. Transparencia total y control absoluto sobre cada cambio.', tag:'Trazabilidad completa', img:'https://readdy.ai/api/search-image?query=activity+timeline+log+history+movements+records+clean+modern+app+minimal+white&width=420&height=260&seq=stock005&orientation=landscape', accent:'amber' },
  { icon:'ri-trophy-line', title:'Reportes de Best Sellers', desc:'Descubre qué productos son los que realmente llenan tu caja registradora.', tag:'Top 10 productos del mes', img:'https://readdy.ai/api/search-image?query=best+sellers+product+ranking+bar+chart+analytics+dashboard+minimal+professional&width=420&height=260&seq=stock006&orientation=landscape', accent:'emerald' },
];
const accentMap: Record<string, {bg:string;text:string;tagBg:string;tagText:string}> = {
  emerald:{bg:'bg-emerald-100',text:'text-emerald-600',tagBg:'bg-emerald-50',tagText:'text-emerald-700'},
  red:{bg:'bg-red-100',text:'text-red-500',tagBg:'bg-red-50',tagText:'text-red-600'},
  amber:{bg:'bg-amber-100',text:'text-amber-600',tagBg:'bg-amber-50',tagText:'text-amber-700'},
};

function SolucionSection() {
  return (
    <section id="solucion" className="py-16 sm:py-24 bg-gray-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16 anim-fade-up">
          <span className="inline-block bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">La Solución</span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-gray-900 leading-tight mb-4" style={{fontFamily:"'Syne', sans-serif"}}>StockSimple: El <span className="text-emerald-600">reemplazo definitivo</span><br className="hidden sm:block" /> al papel y lápiz.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {features.map((f,i) => { const a=accentMap[f.accent]; return (
            <div key={f.title} className={`bg-white rounded-2xl border border-gray-100 overflow-hidden hover:scale-[1.02] transition-transform anim-fade-up-${i+1}`}>
              <div className="h-40 sm:h-44 overflow-hidden"><img src={f.img} alt={f.title} className="w-full h-full object-cover object-top" /></div>
              <div className="p-5 sm:p-6">
                <div className={`w-10 h-10 flex items-center justify-center ${a.bg} rounded-lg mb-4`}><i className={`${f.icon} text-xl ${a.text}`} /></div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{f.desc}</p>
                <span className={`inline-block text-xs font-semibold ${a.tagBg} ${a.tagText} px-3 py-1 rounded-full`}>{f.tag}</span>
              </div>
            </div>
          ); })}
        </div>
      </div>
    </section>
  );
}

// ─── AISection ──────────────────────────────────────────────────────────────
const aiFeatures = [
  { icon:'ri-brain-line', title:'Análisis inteligente en tiempo real', desc:'La IA monitorea tu inventario constantemente y detecta patrones: qué se agota rápido, qué lleva semanas sin moverse y qué deberías reponer ya.', color:'emerald' },
  { icon:'ri-file-chart-line', title:'Resumen completo de tu negocio', desc:'Un informe claro y visual con los datos más importantes: ventas, stock crítico, productos estrella y alertas pendientes. Todo en un solo vistazo.', color:'amber' },
  { icon:'ri-file-pdf-2-line', title:'Exporta a PDF con un clic', desc:'Genera reportes profesionales en segundos. Compártelos con tu equipo, tu contador o guárdalos para tu registro mensual.', color:'red' },
];
const colorMap: Record<string,{bg:string;text:string;border:string}> = {
  emerald:{bg:'bg-emerald-100',text:'text-emerald-600',border:'border-emerald-200'},
  amber:{bg:'bg-amber-100',text:'text-amber-600',border:'border-amber-200'},
  red:{bg:'bg-red-100',text:'text-red-500',border:'border-red-200'},
};

function AISection() {
  return (
    <section id="ia" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-12 sm:mb-16 anim-fade-up">
          <div className="inline-flex items-center gap-2 bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"><i className="ri-sparkling-2-line" />Nueva Función — Inteligencia Artificial</div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-gray-900 leading-tight mb-4" style={{fontFamily:"'Syne', sans-serif"}}>Tu IA personal que <span className="text-emerald-600">entiende tu negocio</span> y te dice qué hacer.</h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-center mb-12 sm:mb-16">
          <div className="flex-1 min-w-0 flex flex-col gap-5 sm:gap-6 anim-fade-up-1">
            {aiFeatures.map(f => { const c=colorMap[f.color]; return (
              <div key={f.title} className={`flex items-start gap-4 bg-white border ${c.border} rounded-2xl p-5 sm:p-6`}>
                <div className={`w-11 h-11 flex items-center justify-center ${c.bg} ${c.text} rounded-xl flex-shrink-0`}><i className={`${f.icon} text-xl`} /></div>
                <div><h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{f.title}</h3><p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{f.desc}</p></div>
              </div>
            ); })}
          </div>
          <div className="w-full lg:w-[46%] flex-shrink-0 anim-fade-up-2">
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-5 sm:p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 flex items-center justify-center bg-emerald-500 rounded-lg"><i className="ri-brain-line text-white text-base" /></div>
                  <div><p className="text-xs font-bold text-gray-800">Resumen IA — Tienda La Victoria</p><p className="text-xs text-gray-400">Generado hoy, 09:14 am</p></div>
                </div>
                <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block animate-pulse" />En vivo</span>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5">
                {[{label:'Productos en stock OK',value:'87%',icon:'ri-checkbox-circle-line',color:'text-emerald-500',bg:'bg-emerald-50'},{label:'Alertas de escasez',value:'3',icon:'ri-alarm-warning-line',color:'text-amber-500',bg:'bg-amber-50'},{label:'Ventas este mes',value:'S/4,820',icon:'ri-money-cny-circle-line',color:'text-emerald-600',bg:'bg-emerald-50'}].map(m => (
                  <div key={m.label} className={`${m.bg} rounded-2xl p-3 sm:p-4 text-center`}><div className="flex items-center justify-center mb-1.5"><i className={`${m.icon} ${m.color} text-lg sm:text-xl`} /></div><p className={`text-lg sm:text-2xl font-black ${m.color}`} style={{fontFamily:"'Syne', sans-serif"}}>{m.value}</p><p className="text-xs text-gray-500 leading-tight mt-1">{m.label}</p></div>
                ))}
              </div>
              <div className="bg-white border border-emerald-100 rounded-2xl p-4 mb-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-emerald-500 rounded-lg flex-shrink-0"><i className="ri-sparkling-2-line text-white text-sm" /></div>
                  <div><p className="text-xs font-bold text-gray-800 mb-1">Recomendación de la IA</p><p className="text-xs text-gray-600 leading-relaxed">"Reponer <strong className="text-gray-800">Pantalones Talla S</strong> en los próximos 3 días. Quedan solo 2 unidades."</p></div>
                </div>
              </div>
              <div className="mb-5">
                <p className="text-xs font-bold text-gray-700 mb-3">Top productos esta semana</p>
                <div className="flex flex-col gap-2">
                  {[{name:'Camisas Talla M',pct:84,color:'bg-emerald-400'},{name:'Zapatillas Blancas',pct:61,color:'bg-amber-400'},{name:'Jeans Slim Fit',pct:47,color:'bg-orange-400'}].map(p => (
                    <div key={p.name} className="flex items-center gap-3"><p className="text-xs text-gray-600 w-32 sm:w-36 flex-shrink-0 truncate">{p.name}</p><div className="flex-1 bg-gray-200 rounded-full h-2"><div className={`h-2 rounded-full ${p.color}`} style={{width:`${p.pct}%`}} /></div><span className="text-xs font-bold text-gray-500 w-8 text-right">{p.pct}%</span></div>
                  ))}
                </div>
              </div>
              <button className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-bold py-3 rounded-xl transition-colors cursor-pointer"><i className="ri-file-pdf-2-line text-red-400 text-base" />Exportar Reporte en PDF<i className="ri-download-line text-base" /></button>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 rounded-2xl px-5 sm:px-10 py-7 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 anim-fade-up-3">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-emerald-500 rounded-xl flex-shrink-0"><i className="ri-sparkling-2-line text-white text-2xl" /></div>
            <div><p className="text-white font-bold text-base sm:text-lg leading-snug">Todo esto incluido en tu acceso por <span className="text-emerald-400">$12</span>.</p><p className="text-gray-400 text-xs sm:text-sm mt-0.5">IA + reportes + PDF + alertas + historial. Sin pagar extra.</p></div>
          </div>
          <a href="#checkout" className="flex-shrink-0 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer w-full sm:w-auto text-center">Quiero acceso completo</a>
        </div>
      </div>
    </section>
  );
}

// ─── OfertaSection ──────────────────────────────────────────────────────────
const benefits = [
  { icon:'ri-price-tag-3-line', title:'Solo $12 al Año', desc:'Menos de $1 al mes. Acceso completo por un año entero. Sin costos ocultos ni letras pequeñas.', highlight:'Anual', color:'emerald' },
  { icon:'ri-timer-flash-line', title:'Listo en 5 minutos', desc:'Diseñado para ser usado sin manuales. Sin curvas de aprendizaje, sin tutoriales de una hora.', highlight:'Cero fricción', color:'amber' },
  { icon:'ri-shield-check-line', title:'Garantía de Orden', desc:'Si en 7 días no sientes que tu tienda está más organizada, te devolvemos tu inversión completa.', highlight:'Riesgo CERO', color:'red' },
];
const benefitColors: Record<string,{icon:string;badge:string}> = {
  emerald:{icon:'text-emerald-600 bg-emerald-100',badge:'bg-emerald-100 text-emerald-700'},
  amber:{icon:'text-amber-600 bg-amber-100',badge:'bg-amber-100 text-amber-700'},
  red:{icon:'text-red-500 bg-red-100',badge:'bg-red-100 text-red-700'},
};

function OfertaSection() {
  return (
    <section id="oferta" className="py-16 sm:py-24 bg-gradient-to-br from-emerald-50 via-white to-amber-50/40 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-10 anim-fade-up">
          <span className="inline-block bg-amber-50 text-amber-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">La Oferta</span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-gray-900 leading-tight" style={{fontFamily:"'Syne', sans-serif"}}>Una inversión mínima para <span className="text-emerald-600">un control máximo.</span></h2>
        </div>
        <div className="relative bg-white border-2 border-emerald-200 rounded-3xl overflow-hidden anim-fade-up-1">
          <div className="bg-gray-900 text-center py-3 px-4"><span className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase">Oferta de Lanzamiento — Tiempo Limitado</span></div>
          <div className="p-6 sm:p-10 lg:p-14 bg-amber-50/50">
            <div className="text-center mb-8 sm:mb-12">
              <div className="flex items-start justify-center gap-2 mb-2">
                <span className="text-gray-300 line-through text-2xl sm:text-3xl font-bold mt-3 sm:mt-4">$49</span>
                <span className="text-6xl sm:text-7xl lg:text-8xl font-black text-emerald-500" style={{fontFamily:"'Syne', sans-serif"}}>$12</span>
              </div>
              <p className="text-gray-500 text-sm sm:text-base">Suscripción anual. Menos de $1 al mes. Sin sorpresas.</p>
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-full mt-3"><i className="ri-money-dollar-circle-line" />Ahorras $37 — más del 75% de descuento</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {benefits.map(b => { const c=benefitColors[b.color]; return (
                <div key={b.title} className="bg-gray-50 rounded-2xl p-5 sm:p-6 text-center">
                  <div className={`w-11 h-11 flex items-center justify-center ${c.icon} rounded-xl mx-auto mb-3 sm:mb-4`}><i className={`${b.icon} text-xl sm:text-2xl`} /></div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-3">{b.desc}</p>
                  <span className={`inline-block text-xs font-bold ${c.badge} px-3 py-1 rounded-full`}>{b.highlight}</span>
                </div>
              ); })}
            </div>
            <div className="text-center">
              <a href="https://pay.hotmart.com/U105455470R?checkoutMode=10" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 sm:gap-3 bg-emerald-500 hover:bg-emerald-600 text-white text-base sm:text-xl font-bold px-8 sm:px-12 py-4 sm:py-5 rounded-xl transition-all cursor-pointer anim-pulse-green w-full sm:w-auto justify-center leading-snug">
                <i className="ri-lock-line flex-shrink-0" /><span>¡Quiero mi acceso por $12 al año!</span>
              </a>
              <p className="text-gray-400 text-xs sm:text-sm mt-3"><i className="ri-shield-check-line text-emerald-500 mr-1" />Garantía de devolución de 7 días — Sin preguntas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FooterSection ──────────────────────────────────────────────────────────
function FooterSection() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="border-t-2 border-emerald-400" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <div className="flex flex-col items-center gap-2">
            <img src="https://public.readdy.ai/ai/img_res/745bd58f-36ba-4fba-8a4b-d5c0a59cd038.png" alt="StockSimple" className="h-7 sm:h-8 w-auto" />
            <p className="text-gray-500 text-xs sm:text-sm text-center">Control de inventario para tiendas. Simple. Visual. Tuyo.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-500">
            {[{label:'El Problema',id:'problema'},{label:'Solución',id:'solucion'},{label:'Oferta',id:'oferta'},{label:'FAQ',id:'faq'},{label:'Comprar',id:'checkout'}].map(({label,id}) => (
              <a key={id} href={`#${id}`} className="hover:text-emerald-600 transition-colors whitespace-nowrap">{label}</a>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500"><i className="ri-shield-check-line text-emerald-500 text-base sm:text-lg" /><span>Pago Seguro SSL</span></div>
        </div>
        <div className="border-t border-gray-200 mt-6 sm:mt-8 pt-5 sm:pt-6 text-center text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-0">
          <span>© {new Date().getFullYear()} StockSimple. Todos los derechos reservados.</span>
          <span className="hidden sm:inline mx-2">·</span>
          <a href="#" rel="nofollow" className="hover:text-gray-600 transition-colors">Términos y Condiciones</a>
          <span className="hidden sm:inline mx-2">·</span>
          <a href="#" rel="nofollow" className="hover:text-gray-600 transition-colors">Política de Privacidad</a>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemaSection />
      <SolucionSection />
      <AISection />
      <OfertaSection />
      <TestimoniosSection />
      <FAQSection />
      <CheckoutSection />
      <FooterSection />
      <SocialProofToast />
    </main>
  );
}
