"use client";

import React, { useState } from 'react';
import { ShieldCheck, Plane, Pill, TrendingUp, PackageCheck, HeartHandshake, Phone, Mail, ChevronDown, CheckCircle2, AlertCircle } from 'lucide-react';

const LandingPage = () => {
  const [loteType, setLoteType] = useState('antidolor');
  const [loteQuantity, setLoteQuantity] = useState(300);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const calculateEstimate = () => {
    let basePrice = 0;
    if (loteType === 'antidolor') basePrice = 1.2;
    if (loteType === 'antibiotico') basePrice = 2.5;
    if (loteType === 'cronico') basePrice = 1.8;
    
    const totalCost = basePrice * loteQuantity;
    const estimatedResale = totalCost * 1.5; // 50% margin estimate
    const profit = estimatedResale - totalCost;

    return { totalCost, profit };
  };

  const { totalCost, profit } = calculateEstimate();

  const faqs = [
    {
      question: '¿Qué marcas y laboratorios manejan?',
      answer: 'Trabajamos directamente con las principales cadenas farmacéuticas y laboratorios en México, garantizando productos originales de marcas reconocidas y genéricos de alta calidad con certificación sanitaria.'
    },
    {
      question: '¿Cómo se garantiza la fecha de vencimiento?',
      answer: 'Todos los lotes se adquieren bajo demanda. Aseguramos una vigencia mínima de 18 a 24 meses en todos los medicamentos, con inspección física de caducidad antes del envío.'
    },
    {
      question: '¿Cuáles son los métodos de pago aceptados?',
      answer: 'Aceptamos pagos en efectivo (USD/EUR) en La Habana al momento de la entrega, o mediante Zelle/Transferencia bancaria para familiares en el exterior.'
    },
    {
      question: '¿Venden al menudeo o solo lotes cerrados?',
      answer: 'Operamos exclusivamente con lotes cerrados mayoristas para garantizar los mejores precios y optimizar la logística aérea. Nuestro enfoque es el aprovisionamiento de botiqueros y distribuidores.'
    },
    {
      question: '¿Manejan sustancias controladas o psicotrópicos?',
      answer: 'No, operamos con estricto apego legal exclusivamente en productos OTC (de venta libre) y medicamentos de libre dispensación. No manejamos sustancias controladas.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header / Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-teal-600 text-white p-2 rounded-lg">
                <HeartHandshake size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 leading-none tracking-tight">FarmaEnlace</h1>
                <p className="text-sm font-semibold text-teal-600 tracking-widest uppercase">Caribe</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#catalogo" className="text-slate-600 hover:text-teal-700 font-medium transition-colors">Catálogo Mayorista</a>
              <a href="#calculadora" className="text-slate-600 hover:text-teal-700 font-medium transition-colors">Calculadora de Lotes</a>
              <a href="#seguridad" className="text-slate-600 hover:text-teal-700 font-medium transition-colors">Seguridad y Envíos</a>
              <a href="#faq" className="text-slate-600 hover:text-teal-700 font-medium transition-colors">Preguntas Frecuentes</a>
            </div>
            <a 
              href="https://wa.me/1234567890" 
              className="hidden md:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg"
            >
              <Phone size={18} />
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 text-teal-300 font-medium text-sm mb-8 border border-teal-500/30">
            <Plane size={16} /> Vuelos Directos Semanales Cancún ✈ La Habana
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl leading-tight">
            Suministro Mayorista Directo de Medicamentos <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Cancún – La Habana</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mb-10 leading-relaxed font-light">
            Lotes cerrados de fármacos esenciales garantizados. Origen 100% farmacéutico mexicano, fechas de caducidad certificadas y entrega coordinada sin intermediarios.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#catalogo" className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-teal-500/25 flex items-center justify-center gap-2">
              <PackageCheck size={20} />
              Ver Catálogo y Precios
            </a>
            <a href="https://wa.me/1234567890" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-sm flex items-center justify-center gap-2">
              <Phone size={20} />
              Hablar con un Asesor
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
            {[
              { icon: <ShieldCheck className="text-teal-400" size={24} />, text: "100% Originales Mexicanos" },
              { icon: <Plane className="text-cyan-400" size={24} />, text: "Entregas Aéreas Rápidas" },
              { icon: <TrendingUp className="text-emerald-400" size={24} />, text: "Pago Seguro en USD/Zelle" }
            ].map((badge, i) => (
              <div key={i} className="flex items-center justify-center gap-3 bg-white/5 rounded-lg py-3 px-4 border border-white/10 backdrop-blur-md">
                {badge.icon}
                <span className="font-medium text-slate-200">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Propuesta de Valor */}
      <section id="seguridad" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">¿Por qué elegir FarmaEnlace Caribe?</h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Garantizamos seguridad, rapidez y rentabilidad para tu negocio de distribución en Cuba.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck size={40} className="text-teal-600 mb-4" />,
                title: "Trazabilidad Garantizada",
                desc: "Compras directas en cadenas farmacéuticas mexicanas. Blísteres sellados de fábrica y vigencia certificada de 18 a 24 meses. Cero falsificaciones."
              },
              {
                icon: <Plane size={40} className="text-cyan-600 mb-4" />,
                title: "Logística Exprés Cancún–Habana",
                desc: "Enlace aéreo directo en menos de 24-48 horas desde la compra. Evita meses de espera marítima y asegúrate de tener stock cuando importa."
              },
              {
                icon: <TrendingUp size={40} className="text-emerald-600 mb-4" />,
                title: "Moneda Fuerte y Predecible",
                desc: "Facturación mayorista en USD/EUR o Zelle. Protege tus márgenes contra la devaluación local y opera con confianza desde el exterior o la isla."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300 group">
                <div className="bg-white w-16 h-16 rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catálogo */}
      <section id="catalogo" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Catálogo de Categorías Críticas</h3>
            <p className="text-slate-600 text-lg">Arma tus lotes combinando las categorías de mayor demanda.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Dolor y Antiinflamatorios", items: "Paracetamol, Ibuprofeno, Diclofenaco", color: "bg-orange-50 border-orange-200 text-orange-700" },
              { title: "Antibióticos Esenciales", items: "Azitromicina, Amoxicilina, Ciprofloxacino", color: "bg-blue-50 border-blue-200 text-blue-700" },
              { title: "Tratamientos Crónicos", items: "Losartán, Enalapril, Metformina, Omeprazol", color: "bg-teal-50 border-teal-200 text-teal-700" },
              { title: "Urgencias y Tópicos", items: "Clotrimazol, Hidrocortisona, Sueros orales", color: "bg-rose-50 border-rose-200 text-rose-700" }
            ].map((cat, i) => (
              <div key={i} className={`p-6 rounded-2xl border ${cat.color} hover:shadow-md transition-shadow`}>
                <Pill className="mb-4 opacity-80" size={32} />
                <h4 className="font-bold text-lg mb-2">{cat.title}</h4>
                <p className="opacity-90 text-sm leading-relaxed">{cat.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculadora */}
      <section id="calculadora" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-8">Calculadora de Rentabilidad Mayorista</h3>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-3">Selecciona el tipo de lote principal</label>
                    <select 
                      className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none"
                      value={loteType}
                      onChange={(e) => setLoteType(e.target.value)}
                    >
                      <option value="antidolor">Pack Esencial Antidolor</option>
                      <option value="antibiotico">Pack Antibióticos & Infecciones</option>
                      <option value="cronico">Pack Tratamiento Crónico Familiar</option>
                    </select>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-3">
                      <label className="text-sm font-medium text-slate-300">Cantidad (unidades/cajas)</label>
                      <span className="text-teal-400 font-bold">{loteQuantity} uds</span>
                    </div>
                    <input 
                      type="range" 
                      min="100" max="2000" step="50"
                      value={loteQuantity}
                      onChange={(e) => setLoteQuantity(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
                    />
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm">
                  <h4 className="text-sm font-medium text-slate-400 mb-6 uppercase tracking-wider">Proyección Estimada</h4>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-end border-b border-slate-700 pb-4">
                      <span className="text-slate-300">Inversión Lote</span>
                      <span className="text-2xl font-bold text-white">${totalCost.toFixed(2)} <span className="text-sm font-normal text-slate-500">USD</span></span>
                    </div>
                    <div className="flex justify-between items-end border-b border-slate-700 pb-4">
                      <span className="text-slate-300">Margen de Reventa (Est.)</span>
                      <span className="text-2xl font-bold text-emerald-400">+${profit.toFixed(2)} <span className="text-sm font-normal text-emerald-600">USD</span></span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-slate-400 text-sm flex items-center gap-1"><Plane size={14}/> Entrega est:</span>
                      <span className="text-white text-sm font-medium">3-5 días hábiles</span>
                    </div>
                  </div>
                  <a href={`https://wa.me/1234567890?text=Hola, quiero cotizar un ${loteType} de ${loteQuantity} unidades.`} className="w-full block text-center bg-green-600 hover:bg-green-500 text-white py-3 rounded-xl font-bold transition-colors">
                    Reservar Lote por WhatsApp
                  </a>
                  <p className="text-xs text-slate-500 mt-4 text-center">
                    *Valores referenciales. Sujetos a cotización final según disponibilidad y peso volumétrico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Proceso de Compra Transparente</h3>
            <p className="text-slate-600 text-lg">De Cancún a La Habana en 4 sencillos pasos.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Cotización", desc: "Seleccionas tu lote o nos envías tu lista de requerimientos específicos." },
              { step: "2", title: "Pago Seguro", desc: "Fijamos condiciones. Pago en USD físico en La Habana o Zelle desde el exterior." },
              { step: "3", title: "Logística Aérea", desc: "Compra en México y traslado aéreo inmediato con empaque normativo protector." },
              { step: "4", title: "Entrega Física", desc: "Inspección de sellos y entrega en mano en punto seguro acordado en La Habana." }
            ].map((s, i) => (
              <div key={i} className="relative">
                {i < 3 && <div className="hidden lg:block absolute top-6 left-1/2 w-full h-0.5 bg-slate-200" />}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-teal-600 text-white font-bold text-xl flex items-center justify-center mb-6 ring-4 ring-slate-50">
                    {s.step}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h4>
                  <p className="text-slate-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-slate-900 mb-10 text-center">Preguntas Frecuentes</h3>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                <button 
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-slate-50 hover:bg-slate-100 transition-colors"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <span className="font-semibold text-slate-900">{faq.question}</span>
                  <ChevronDown className={`transform transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} size={20} />
                </button>
                {activeFaq === i && (
                  <div className="px-6 py-4 bg-white text-slate-600 border-t border-slate-200 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="text-teal-500">
                  <HeartHandshake size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white leading-none tracking-tight">FarmaEnlace</h2>
                  <p className="text-sm font-semibold text-teal-500 tracking-widest uppercase">Caribe</p>
                </div>
              </div>
              <p className="text-sm mb-6">
                Tu socio logístico confiable para el aprovisionamiento mayorista de insumos médicos de México a Cuba.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors"><Mail size={24}/></a>
                <a href="#" className="hover:text-white transition-colors"><Phone size={24}/></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Contacto Directo</h4>
              <ul className="space-y-4">
                <li><a href="https://wa.me/1234567890" className="flex items-center gap-2 hover:text-green-400 transition-colors"><Phone size={18}/> WhatsApp (Recomendado)</a></li>
                <li><a href="#" className="flex items-center gap-2 hover:text-blue-400 transition-colors"><Mail size={18}/> Telegram</a></li>
                <li><span className="flex items-center gap-2"><Mail size={18}/> logística@farmaenlacecaribe.com</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Horarios de Atención</h4>
              <ul className="space-y-2 text-sm">
                <li><strong className="text-slate-300">Oficina Cancún:</strong> Lunes a Viernes (9:00 AM - 6:00 PM)</li>
                <li><strong className="text-slate-300">Logística La Habana:</strong> Entregas diarias coordinadas.</li>
                <li><strong className="text-slate-300">Soporte WhatsApp:</strong> 24/7 para emergencias logísticas.</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} FarmaEnlace Caribe. Todos los derechos reservados.</p>
            <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-800/50 p-3 rounded-lg">
              <AlertCircle size={16} className="text-amber-500 shrink-0" />
              <p>Aviso Legal: Operamos estrictamente con productos OTC y de libre dispensación. No manejamos medicamentos controlados o psicotrópicos. Cumplimos con las regulaciones de equipaje acompañado aduanales vigentes.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
