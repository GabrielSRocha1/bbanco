
import React from 'react';
import { PLANS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-[#05151b]">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-[900] tracking-tighter uppercase mb-6 leading-none">
          ESCOLHA UM PLANO QUE <br/> SE ADAPTE ÀS SUAS <span className="text-[#58bcf0]">NECESSIDADES.</span>
        </h2>
        <p className="text-white/50 text-xs max-w-2xl mx-auto uppercase tracking-[0.2em] font-bold">
          Sem compromisso. Cancele a qualquer momento. Sem chamadas telefônicas e sem ressentimentos.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {PLANS.map((plan, i) => (
          <div key={i} className="bg-[#0a232b] border border-white/5 rounded-2xl overflow-hidden flex flex-col pricing-card-shadow transform hover:-translate-y-1 transition-all duration-300">
            <div className={`p-10 ${
              i === 0 ? 'bg-[#e5a034]' : 
              i === 1 ? 'bg-[#fbb03b]' : 
              'bg-[#ff9c4b]'
            } text-[#05151b]`}>
              <h3 className="text-3xl font-[1000] uppercase tracking-tighter leading-none mb-1">{plan.name}</h3>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-80">{plan.subtitle}</p>
            </div>
            
            <div className="p-10 flex-1 flex flex-col">
              <div className="mb-10">
                <div className="text-3xl font-[1000] uppercase tracking-tighter mb-1">{plan.savings}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#58bcf0]">Após taxas VoltDriver</div>
                <div className="text-white/30 text-[10px] font-bold mt-3 uppercase tracking-wider">{plan.milesIncluded}</div>
              </div>

              <div className="space-y-4 mb-12 flex-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4">Inclui:</p>
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-start text-[13px] font-medium leading-tight">
                    <svg className="w-4 h-4 text-[#58bcf0] mr-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-white/90">{f}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-[#58bcf0] text-[#05151b] py-5 rounded-lg font-black text-xs uppercase tracking-widest hover:bg-white hover:scale-[1.02] transition-all shadow-lg active:scale-95">
                Eletrificar Minha Frota
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
