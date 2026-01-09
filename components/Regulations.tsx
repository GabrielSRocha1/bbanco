
import React from 'react';
import { REGULATIONS } from '../constants';

const Regulations: React.FC = () => {
  return (
    <section className="py-24 bg-[#05151b]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tighter uppercase text-center">
          ATENDA ÀS REGULAMENTAÇÕES <br/><span className="text-[#58bcf0]">DE FRENTE.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REGULATIONS.map((reg) => (
            <div key={reg.id} className="p-8 border-l border-white/10 bg-white/5 hover:bg-white/10 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[#fbb03b] font-bold text-sm">ATÉ {reg.year}</span>
                <h3 className="text-xl font-bold mt-2 mb-4 leading-tight">{reg.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{reg.description}</p>
              </div>
              <button className="mt-8 text-xs font-bold text-[#58bcf0] uppercase tracking-widest flex items-center hover:translate-x-2 transition-transform">
                Leia Mais 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Regulations;
