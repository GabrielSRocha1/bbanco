
import React from 'react';

const DigitalSection: React.FC = () => {
  return (
    <section className="py-32 bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none italic">
            ECOSSISTEMA <br /> <span className="text-voltdrive-green">DIGITAL.</span>
          </h2>
          <p className="text-white/40 text-xs font-black uppercase tracking-[0.4em]">Blockchain L2 | $BRT Token | Dubai Free Zone</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-10 bg-slate-900/30 border border-white/5 rounded-3xl hover:border-voltdrive-green/30 transition-all group">
            <div className="text-voltdrive-green font-black text-4xl mb-6 group-hover:scale-110 transition-transform">$BRT</div>
            <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter">Token Utilitário</h4>
            <p className="text-white/50 text-sm leading-relaxed">
              Utilizado para descontos operacionais e fidelidade dentro do ecossistema VoltDrive.
            </p>
          </div>
          <div className="p-10 bg-slate-900/30 border border-white/5 rounded-3xl hover:border-voltdrive-green/30 transition-all group">
            <div className="text-voltdrive-green font-black text-4xl mb-6 group-hover:scale-110 transition-transform">10%</div>
            <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter">Buyback & Burn</h4>
            <p className="text-white/50 text-sm leading-relaxed">
              Reinvestimos 10% dos lucros da holding em Dubai para sustentabilidade financeira do token.
            </p>
          </div>
          <div className="p-10 bg-slate-900/30 border border-white/5 rounded-3xl hover:border-voltdrive-green/30 transition-all group">
            <div className="text-voltdrive-green font-black text-4xl mb-6 group-hover:scale-110 transition-transform">L2</div>
            <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter">Blockchain Security</h4>
            <p className="text-white/50 text-sm leading-relaxed">
              Transparência e segurança de padrão internacional hospedado em AWS.
            </p>
          </div>
        </div>

        <div className="mt-24 p-12 bg-voltdrive-green rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-slate-950">
            <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mb-2">Visão para Investidores</h3>
            <p className="text-slate-950/70 font-bold uppercase text-xs tracking-widest">Meta de USD 500k MRR em 24 meses</p>
          </div>
          <a
            href="/Pitch_Deck__BRUTOS_&_VoltDrive.pptx.pdf"
            download
            className="bg-slate-950 text-white px-10 py-5 rounded-lg font-black uppercase tracking-widest hover:scale-105 transition-transform inline-block"
          >
            Baixar Pitch Deck
          </a>
        </div>
      </div>
    </section>
  );
};

export default DigitalSection;
