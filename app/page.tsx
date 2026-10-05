"use client";

import React, { useState } from 'react';
import { 
  TrendingUp, Users, Plane, Pill, ShieldAlert, BadgeDollarSign, 
  MapPin, CheckCircle2, AlertTriangle, CalendarDays, Wallet, FileText,
  BookOpen, ArrowRight, DollarSign
} from 'lucide-react';

export default function DashboardSocios() {
  const [activeTab, setActiveTab] = useState('finanzas');

  const top15 = [
    { id: 1, name: "Paracetamol (500/750mg)", cat: "Dolor/Fiebre", cost: "$0.60 - $0.90", sell: "$2.50 - $3.50", margin: "250%+" },
    { id: 2, name: "Ibuprofeno (400/600mg)", cat: "Dolor/Fiebre", cost: "$0.80 - $1.20", sell: "$3.00 - $4.00", margin: "230%+" },
    { id: 3, name: "Diclofenaco (100mg)", cat: "Dolor/Fiebre", cost: "$0.70 - $1.00", sell: "$3.00 - $4.00", margin: "280%+" },
    { id: 4, name: "Amoxicilina (500mg)", cat: "Antibiótico", cost: "$1.50 - $2.20", sell: "$5.50 - $7.50", margin: "240%+" },
    { id: 5, name: "Azitromicina (500mg, 3 tabs)", cat: "Antibiótico", cost: "$1.80 - $2.50", sell: "$6.00 - $8.50", margin: "230%+" },
    { id: 6, name: "Ciprofloxacino (500mg)", cat: "Antibiótico", cost: "$1.60 - $2.30", sell: "$5.50 - $7.50", margin: "220%+" },
    { id: 7, name: "Metformina (850mg)", cat: "Crónico", cost: "$1.20 - $1.80", sell: "$4.50 - $6.50", margin: "250%+" },
    { id: 8, name: "Enalapril / Captopril", cat: "Crónico", cost: "$1.00 - $1.50", sell: "$4.00 - $6.00", margin: "280%+" },
    { id: 9, name: "Losartán (50mg)", cat: "Crónico", cost: "$1.20 - $1.80", sell: "$5.00 - $7.00", margin: "280%+" },
    { id: 10, name: "Omeprazol (20mg)", cat: "Crónico", cost: "$0.90 - $1.40", sell: "$4.00 - $5.50", margin: "280%+" },
    { id: 11, name: "Loratadina (10mg)", cat: "Alergias", cost: "$0.60 - $0.90", sell: "$2.50 - $3.50", margin: "280%+" },
    { id: 12, name: "Dimenhidrinato (Gravinol)", cat: "Náuseas", cost: "$0.80 - $1.20", sell: "$3.50 - $5.00", margin: "300%+" },
    { id: 13, name: "Metronidazol (500mg)", cat: "Antiparasitario", cost: "$1.00 - $1.50", sell: "$4.00 - $5.50", margin: "260%+" },
    { id: 14, name: "Clotrimazol (Crema)", cat: "Antimicótico", cost: "$1.00 - $1.40", sell: "$3.50 - $5.00", margin: "250%+" },
    { id: 15, name: "Suero de Rehidratación Oral", cat: "Rehidratación", cost: "$0.30 - $0.50", sell: "$1.50 - $2.00", margin: "300%+" },
  ];

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900 selection:bg-teal-200">
      {/* Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-md border-b border-teal-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-16 py-4 md:py-0 gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-teal-600 p-2 rounded-lg text-white shadow-lg">
                <ShieldAlert size={24} />
              </div>
              <div>
                <h1 className="text-xl font-black tracking-tight leading-none text-white">FarmaEnlace Caribe</h1>
                <p className="text-xs font-bold text-teal-400 tracking-widest uppercase mt-1">Dashboard Socios (Privado)</p>
              </div>
            </div>
            
            <div className="flex bg-slate-800 rounded-lg p-1 shadow-inner overflow-x-auto w-full md:w-auto">
              <button onClick={() => setActiveTab('finanzas')} className={`px-4 py-2 text-sm font-semibold rounded-md transition-all whitespace-nowrap ${activeTab === 'finanzas' ? 'bg-teal-600 text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}>Finanzas y Roles</button>
              <button onClick={() => setActiveTab('logistica')} className={`px-4 py-2 text-sm font-semibold rounded-md transition-all whitespace-nowrap ${activeTab === 'logistica' ? 'bg-teal-600 text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}>Logística y Catálogo</button>
              <button onClick={() => setActiveTab('reglas')} className={`px-4 py-2 text-sm font-semibold rounded-md transition-all whitespace-nowrap ${activeTab === 'reglas' ? 'bg-teal-600 text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}>Reglas Críticas</button>
              <button onClick={() => setActiveTab('sop')} className={`px-4 py-2 text-sm font-semibold rounded-md transition-all whitespace-nowrap flex items-center gap-2 ${activeTab === 'sop' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}><BookOpen size={16}/> SOP Ejecutivo</button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* TAB 1: FINANZAS Y ROLES */}
        {activeTab === 'finanzas' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-blue-500">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Costo Fijo + Operación</p>
                <h3 className="text-3xl font-black text-slate-900">$2,770 <span className="text-lg font-medium text-slate-400">USD</span></h3>
                <p className="text-xs text-slate-500 mt-2">Gastos de vida de ambos + boletos y maletas</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-amber-500">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Inversión Fármacos (Mensual)</p>
                <h3 className="text-3xl font-black text-slate-900">$3,700 <span className="text-lg font-medium text-slate-400">USD</span></h3>
                <p className="text-xs text-slate-500 mt-2">Costo por 2 viajes (120kg totales / 2,600 uds)</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-teal-500">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Venta Mayorista (HAV)</p>
                <h3 className="text-3xl font-black text-teal-600">$11,800 <span className="text-lg font-medium text-teal-400">USD</span></h3>
                <p className="text-xs text-slate-500 mt-2">Retorno bruto total del mes</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-2xl shadow-lg border-l-4 border-l-emerald-500 text-white relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 opacity-10"><Wallet size={120} /></div>
                <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-1 relative z-10">Ganancia Neta (Limpia)</p>
                <h3 className="text-3xl font-black text-white relative z-10">+$5,330 <span className="text-lg font-medium text-slate-400">USD</span></h3>
                <p className="text-xs text-slate-300 mt-2 relative z-10">Beneficio a repartir (Sostenimiento ya pagado)</p>
              </div>
            </div>

            {/* Roles y Presupuesto Base */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Socio Playa del Carmen */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-blue-50 border-b border-blue-100 p-5 flex items-center gap-4">
                  <div className="bg-blue-600 text-white p-3 rounded-full"><MapPin size={20} /></div>
                  <div>
                    <h2 className="text-lg font-bold text-blue-900">Socio en Playa del Carmen (México)</h2>
                    <p className="text-sm text-blue-700">Responsable de Gestión, Compras y Empaque</p>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start gap-3"><CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} /><span className="text-sm text-slate-700">Comprar con descuento en farmacias los lunes (Similares).</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} /><span className="text-sm text-slate-700">Empaquetar al gramo exacto (3 maletas de 21.5 - 22 kg) en duffel bags.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} /><span className="text-sm text-slate-700">Dar alojamiento al socio de Cuba durante su visita exprés a MX.</span></li>
                  </ul>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <h4 className="text-xs font-bold uppercase text-slate-500 mb-3 tracking-wider border-b border-slate-200 pb-2">Gastos Mensuales Asignados</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-slate-600">Renta Depto Playa del Carmen</span><span className="font-semibold">$650</span></div>
                      <div className="flex justify-between"><span className="text-slate-600">Servicios (CFE, Internet, Gas)</span><span className="font-semibold">$150</span></div>
                      <div className="flex justify-between"><span className="text-slate-600">Alimentación / Gastos base</span><span className="font-semibold">$400</span></div>
                      <div className="flex justify-between"><span className="text-slate-600">Transporte local / Gasolina</span><span className="font-semibold">$120</span></div>
                      <div className="flex justify-between pt-2 border-t border-slate-200 font-bold"><span className="text-slate-900">Total Fijo México</span><span className="text-blue-600">$1,320 USD</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Socio La Habana */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-rose-50 border-b border-rose-100 p-5 flex items-center gap-4">
                  <div className="bg-rose-600 text-white p-3 rounded-full"><Plane size={20} /></div>
                  <div>
                    <h2 className="text-lg font-bold text-rose-900">Socio Viajero en La Habana (Cuba)</h2>
                    <p className="text-sm text-rose-700">Responsable de Viajes, Aduana y Cobros B2B</p>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start gap-3"><CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} /><span className="text-sm text-slate-700">Volar 2 veces al mes (CUN-HAV) y aplicar exención aduanera (Canal Verde).</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} /><span className="text-sm text-slate-700">Recibir la mercancía en casa propia en La Habana (Seguridad total).</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} /><span className="text-sm text-slate-700">Venta exclusiva mayorista a 2-3 clientes fijos y cobro estricto en divisa.</span></li>
                  </ul>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <h4 className="text-xs font-bold uppercase text-slate-500 mb-3 tracking-wider border-b border-slate-200 pb-2">Gastos Mensuales Asignados</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-slate-600">Sostenimiento personal HAB</span><span className="font-semibold">$250</span></div>
                      <div className="flex justify-between"><span className="text-slate-600">Gastos Casa HAB (Agua/Luz)</span><span className="font-semibold">$80</span></div>
                      <div className="flex justify-between"><span className="text-slate-600">Logística (2 Vuelos CUN-HAV-CUN)</span><span className="font-semibold">$520</span></div>
                      <div className="flex justify-between"><span className="text-slate-600">Facturación de 6 Maletas (23kg)</span><span className="font-semibold">$440</span></div>
                      <div className="flex justify-between pt-2 border-t border-slate-200 font-bold"><span className="text-slate-900">Total Fijo Cuba + Logística</span><span className="text-rose-600">$1,450 USD</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-4">
                <Users size={32} className="text-emerald-600" />
                <div>
                  <h3 className="text-lg font-bold text-emerald-900">Reparto 50/50 de la Utilidad Neta</h3>
                  <p className="text-emerald-700 text-sm">Tras cubrir el costo de reposición del inventario ($3,700) y todos los gastos de vida de ambos ($2,770).</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-emerald-600 uppercase">A cada socio (Mes)</p>
                <h4 className="text-2xl font-black text-emerald-700">+$2,665 USD</h4>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: LOGÍSTICA Y CATÁLOGO */}
        {activeTab === 'logistica' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-slate-900 p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2"><CalendarDays className="text-teal-400"/> Cronograma Quincenal (1 Viaje = 60 kg)</h2>
                  <p className="text-slate-400 text-sm mt-1">El ciclo se repite 2 veces por mes. Máximo perfil bajo migratorio.</p>
                </div>
              </div>
              <div className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                  <div className="p-5 hover:bg-slate-50 transition-colors">
                    <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded">Día 1 (Lunes)</span>
                    <h4 className="font-bold text-slate-800 mt-3 text-sm">Compra MX</h4>
                    <p className="text-xs text-slate-500 mt-1">Socio Playa compra con 25% descuento en farmacias. Embala 3 maletas (21.5kg c/u).</p>
                  </div>
                  <div className="p-5 hover:bg-slate-50 transition-colors">
                    <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-1 rounded">Día 2 (Martes)</span>
                    <h4 className="font-bold text-slate-800 mt-3 text-sm">Vuelo CUN-HAV</h4>
                    <p className="text-xs text-slate-500 mt-1">Socio Cuba vuela. Pasa aduana (exención). Mercancía a casa segura.</p>
                  </div>
                  <div className="p-5 hover:bg-slate-50 transition-colors">
                    <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">Día 3 (Miérc.)</span>
                    <h4 className="font-bold text-slate-800 mt-3 text-sm">Venta y Cobro</h4>
                    <p className="text-xs text-slate-500 mt-1">Entrega a mayoristas fijos. Cobro inmediato en efectivo USD/EUR.</p>
                  </div>
                  <div className="p-5 hover:bg-slate-50 transition-colors">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">Día 4 (Jueves)</span>
                    <h4 className="font-bold text-slate-800 mt-3 text-sm">Retorno CUN</h4>
                    <p className="text-xs text-slate-500 mt-1">Vuelo HAV-CUN. Ingreso con efectivo en mano (menos de $5,000 USD legales).</p>
                  </div>
                  <div className="p-5 hover:bg-slate-50 transition-colors col-span-2">
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">Días 5 a 14</span>
                    <h4 className="font-bold text-slate-800 mt-3 text-sm">Reposición y Descanso</h4>
                    <p className="text-xs text-slate-500 mt-1">Cierre de contabilidad. Pedidos adelantados por WhatsApp para el siguiente lote. Cero exposición pública.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2"><Pill className="text-teal-600"/> Los 15 Medicamentos de Máxima Rentabilidad</h3>
                <span className="text-xs font-bold uppercase bg-slate-200 text-slate-600 px-3 py-1 rounded-full">Exclusivo OTC</span>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 text-slate-600 uppercase text-xs border-b border-slate-200 font-semibold">
                    <tr>
                      <th className="px-6 py-4">Producto Estratégico</th>
                      <th className="px-6 py-4">Categoría</th>
                      <th className="px-6 py-4 bg-blue-50">Costo Base MX (USD)</th>
                      <th className="px-6 py-4 bg-teal-50">Venta B2B Cuba (USD)</th>
                      <th className="px-6 py-4 bg-emerald-50">Margen Bruto</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {top15.map(item => (
                      <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-3 font-medium text-slate-900">{item.name}</td>
                        <td className="px-6 py-3"><span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs">{item.cat}</span></td>
                        <td className="px-6 py-3 bg-blue-50/30 text-blue-800 font-semibold">{item.cost}</td>
                        <td className="px-6 py-3 bg-teal-50/30 text-teal-800 font-semibold">{item.sell}</td>
                        <td className="px-6 py-3 bg-emerald-50/30 text-emerald-700 font-bold">{item.margin}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* TAB 3: REGLAS CRÍTICAS */}
        {activeTab === 'reglas' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
            
            <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-r-xl shadow-sm flex items-start gap-4">
              <AlertTriangle className="text-rose-600 shrink-0" size={28} />
              <div>
                <h3 className="text-lg font-bold text-rose-900 mb-1">PROHIBICIÓN ABSOLUTA: Drogas y Psicotrópicos</h3>
                <p className="text-rose-800 text-sm leading-relaxed">
                  Llevar Tramadol, Clonazepam, Diazepam, Alprazolam o cualquier opioide/barbitúrico sin receta constituye delito de TRÁFICO INTERNACIONAL DE DROGAS en México y Cuba. <strong>Operamos exclusivamente OTC y genéricos no controlados. Sin excepciones.</strong>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2"><BadgeDollarSign className="text-amber-500"/> Política de Cobros en La Habana</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex gap-3"><CheckCircle2 className="text-teal-500 shrink-0 mt-0.5" size={18} /><p className="text-sm text-slate-600"><strong>Cero Menudeo:</strong> Nunca se vende al detalle. Se entregan lotes completos a 2 o 3 clientes preacordados.</p></li>
                  <li className="flex gap-3"><CheckCircle2 className="text-teal-500 shrink-0 mt-0.5" size={18} /><p className="text-sm text-slate-600"><strong>Cero CUP:</strong> No aceptar pesos cubanos. Si es inevitable, la tasa de cambio debe cubrir la recompra inmediata de USD en el mercado informal en las siguientes 2 horas para evitar devaluación.</p></li>
                  <li className="flex gap-3"><CheckCircle2 className="text-teal-500 shrink-0 mt-0.5" size={18} /><p className="text-sm text-slate-600"><strong>Cobro Limpio:</strong> Recibir pagos solo en billetes USD/EUR sanos o Zelle (previo a la entrega física).</p></li>
                  <li className="flex gap-3"><CheckCircle2 className="text-teal-500 shrink-0 mt-0.5" size={18} /><p className="text-sm text-slate-600"><strong>Límite Aduanal:</strong> No viajar de regreso a Cancún con más de $5,000 USD en efectivo por pasajero para no estar obligados a declarar origen de fondos (Aduana de Cuba).</p></li>
                </ul>
              </div>

              <div className="p-6 border-b border-slate-100 bg-slate-50">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2"><FileText className="text-blue-500"/> Reglas de Empaque y Aduana (Canal Verde)</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex gap-3"><CheckCircle2 className="text-teal-500 shrink-0 mt-0.5" size={18} /><p className="text-sm text-slate-600"><strong>No Mezclar:</strong> Las maletas deben llevar 100% medicinas. Nada de ropa, aseo o comida, para garantizar la exención de aranceles directa al pasar por la aduana de Cuba.</p></li>
                  <li className="flex gap-3"><CheckCircle2 className="text-teal-500 shrink-0 mt-0.5" size={18} /><p className="text-sm text-slate-600"><strong>Trazabilidad:</strong> Conservar empaques originales, lotes legibles y fechas de caducidad superior a 18 meses. Guardar los tickets de farmacia mexicanos para el escáner de salida en Cancún (SAT).</p></li>
                  <li className="flex gap-3"><CheckCircle2 className="text-teal-500 shrink-0 mt-0.5" size={18} /><p className="text-sm text-slate-600"><strong>Diversificar Sucursales MX:</strong> No comprar las 1,300 unidades en una sola farmacia en Playa del Carmen/Cancún. Rotar entre sucursales para no levantar alertas por desabastecimiento local.</p></li>
                </ul>
              </div>
            </div>

          </div>
        )}

        {/* TAB 4: SOP EJECUTIVO */}
        {activeTab === 'sop' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto">
            
            <div className="bg-indigo-900 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute -right-8 -top-8 opacity-10">
                <BookOpen size={200} />
              </div>
              <h2 className="text-3xl font-black mb-2 relative z-10">Procedimiento Operativo Estandarizado (SOP)</h2>
              <p className="text-indigo-200 text-lg relative z-10">Plan de Negocio Ejecutivo y Guía de Implementación Paso a Paso</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Bloque 1: Presupuesto Maestro */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">1. Presupuesto Maestro (Mes 0)</h3>
                <p className="text-sm text-slate-600 mb-4">Capital fundacional requerido para reubicación y primer viaje piloto (40 kg).</p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center p-2 bg-slate-50 rounded">
                    <span className="text-slate-700">Gastos Socio A (Europa ➔ MX)</span>
                    <span className="font-bold text-slate-900">$1,830 USD</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-slate-50 rounded">
                    <span className="text-slate-700">Gastos Socio B (Europa ➔ CU)</span>
                    <span className="font-bold text-slate-900">$830 USD</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-slate-50 rounded">
                    <span className="text-slate-700">Inversión Lote Piloto + Vuelos</span>
                    <span className="font-bold text-slate-900">$1,390 USD</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-slate-50 rounded">
                    <span className="text-slate-700">Fondo Reserva Conjunto</span>
                    <span className="font-bold text-slate-900">$1,000 USD</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-indigo-50 border border-indigo-100 rounded-lg mt-2">
                    <span className="font-bold text-indigo-900">Aporte Exacto por Socio (50%)</span>
                    <span className="font-black text-indigo-700">$2,525 USD</span>
                  </div>
                </div>
              </div>

              {/* Bloque 2: Fase Piloto */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">2. Resultados Lote Piloto (40 kg)</h3>
                <p className="text-sm text-slate-600 mb-4">Métrica de validación del primer viaje (2 maletas / 900 unidades).</p>
                
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="bg-blue-100 text-blue-700 p-2 rounded-lg"><TrendingUp size={20}/></div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-semibold">Costo en Cancún</p>
                      <p className="font-bold text-slate-900">$990 USD</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-teal-100 text-teal-700 p-2 rounded-lg"><DollarSign size={20}/></div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-semibold">Recaudación Bruta (La Habana)</p>
                      <p className="font-bold text-slate-900">$4,100 USD</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-emerald-100 text-emerald-700 p-2 rounded-lg"><Wallet size={20}/></div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-semibold">Ganancia Neta (Piloto)</p>
                      <p className="font-bold text-emerald-700">+$2,678 USD</p>
                    </div>
                  </li>
                </ul>
                <p className="text-xs text-slate-500 mt-4 italic">*Este margen absorbe automáticamente el capital necesario para saltar al Régimen Consolidado sin aportar más dinero desde Europa.</p>
              </div>
            </div>

            {/* Fases de Ejecución */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-6">3. Fases Cronológicas de Ejecución</h3>
              
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-indigo-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">1</div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm">
                    <h4 className="font-bold text-slate-900">Días 1-14: Preparación Remota</h4>
                    <p className="text-sm text-slate-600 mt-2">Consolidación del fondo ($5,050) en cuenta conjunta europea. Socio B prospecta clientes en HAV vía Telegram/WA. Socio A filtra 3 opciones de renta en MX.</p>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-indigo-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">2</div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm">
                    <h4 className="font-bold text-slate-900">Semana 3-4: Instalación</h4>
                    <p className="text-sm text-slate-600 mt-2">Viajes desde Europa. Socio A firma contrato en Playa del Carmen y pacta volumen con gerentes locales de farmacia. Socio B reacondiciona su casa en Cuba como almacén.</p>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-teal-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">3</div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm">
                    <h4 className="font-bold text-slate-900">Semana 5: Vuelo Piloto</h4>
                    <p className="text-sm text-slate-600 mt-2">Compra de 40 kg el Lunes con 25% off. Vuelo HAV-CUN-HAV de Socio B (Mártes a Jueves). Paso por Aduana y liquidación inmediata B2B.</p>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-emerald-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">4</div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm">
                    <h4 className="font-bold text-slate-900">Mes 2+: Régimen Consolidado</h4>
                    <p className="text-sm text-slate-600 mt-2">Escalamiento a 2 viajes por mes de 60 kg (120 kg/mes totales). 100% autofinanciado. Acumulación del Fondo de Reserva de $2,000 USD reteniendo $1,000 de los primeros 2 meses.</p>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        )}

      </main>
    </div>
  );
}
