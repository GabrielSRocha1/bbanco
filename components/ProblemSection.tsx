
import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-32 bg-[#020617] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
           <span className="text-voltdrive-green font-bold text-xs tracking-widest uppercase mb-4 block">O Desafio Logístico</span>
           <h2 className="text-5xl font-black tracking-tighter uppercase mb-8 leading-none">Margens baixas <br/> e <span className="opacity-40">diesel volátil.</span></h2>
           <p className="text-white/60 text-lg mb-8 leading-relaxed">
             O mercado brasileiro movimenta até R$ 490 bilhões anuais, mas opera com margens críticas de 3-5%. Somente em pedágios, são R$ 40 bilhões anuais de fricção operacional.
           </p>
           <div className="grid grid-cols-2 gap-8">
              <div className="border-l-2 border-voltdrive-green pl-6">
                <div className="text-3xl font-black">R$ 490B</div>
                <div className="text-xs font-bold text-white/40 uppercase tracking-widest mt-2">Mercado Total</div>
              </div>
              <div className="border-l-2 border-red-500 pl-6">
                <div className="text-3xl font-black">70%</div>
                <div className="text-xs font-bold text-white/40 uppercase tracking-widest mt-2">Custo Operacional</div>
              </div>
           </div>
        </div>
        <div className="bg-slate-900/50 p-12 rounded-3xl border border-white/10 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-4 opacity-10">
              <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24"><path d="M7 11h2v10H7zm4-3h2v13h-2zm4-6h2v19h-2z"/></svg>
           </div>
           <h3 className="text-2xl font-black mb-6 italic">A Solução VoltDrive:</h3>
           <ul className="space-y-4">
              {['Redução drástica no consumo de combustível', 'Automação de pedágios com VLS Pay', 'Eficiência tributária via Dubai', 'Ecossistema Tokenizado'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white/70">
                  <div className="w-1.5 h-1.5 bg-voltdrive-green rounded-full"></div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
           </ul>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
