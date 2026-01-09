
import React from 'react';
import { FINTECH_DATA } from '../constants';

const FintechSection: React.FC = () => {
  return (
    <section className="py-32 bg-[#0a0f1d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative order-2 lg:order-1">
           <div className="bg-slate-900 border border-white/10 rounded-2xl p-2 shadow-2xl rotate-2 group-hover:rotate-0 transition-transform">
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200" 
                alt="VLS Pay Dashboard" 
                className="rounded-xl grayscale hover:grayscale-0 transition-all"
              />
           </div>
           <div className="absolute -bottom-6 -right-6 bg-voltdrive-green p-8 rounded-2xl shadow-2xl">
              <div className="text-slate-950 font-black text-2xl tracking-tighter">VLS PAY</div>
              <div className="text-slate-950/60 text-[10px] font-bold uppercase">Dashboard Integrado</div>
           </div>
        </div>

        <div className="order-1 lg:order-2">
           <div className="w-12 h-1 bg-voltdrive-green mb-8"></div>
           <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none">
             FINTECH <br/> <span className="text-voltdrive-green">VLS PAY.</span>
           </h2>
           <p className="text-white/60 text-lg mb-10 leading-relaxed">
             Solução completa para pagamentos de pedágios licenciada pelo Banco Central. Esqueça a fragmentação: gerencie cartões, TAGs e analytics em um só lugar.
           </p>
           <div className="space-y-4">
              {FINTECH_DATA.features.map((f, i) => (
                <div key={i} className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-white/40">
                  <span className="text-voltdrive-green text-xl">✓</span>
                  {f}
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default FintechSection;
