import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background Image - Clean with no overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/Myf98bVV/Whats-App-Image-2026-01-08-at-08-21-23.jpg" 
          alt="Frota VoltDrive" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="inline-block mb-6">
           <span className="bg-voltdrive-green text-slate-950 text-[10px] font-black uppercase tracking-[0.4em] px-4 py-1.5 rounded-sm shadow-xl">
             Logística 4.0
           </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter mb-10 italic uppercase [text-shadow:_0_4px_24px_rgba(0,0,0,0.8)]">
          Revolucionando a <br />
          Logística <br />
          <span className="text-voltdrive-green">Brasileira.</span>
        </h1>
        
        <p className="text-white text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-bold [text-shadow:_0_2px_12px_rgba(0,0,0,0.8)]">
          Combinamos hardware elétrico plugável, soluções fintech integradas e tecnologia blockchain para transformar o transporte de carga no Brasil.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="px-10 py-5 bg-voltdrive-green text-slate-950 rounded-lg text-[12px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all shadow-2xl hover:scale-105 active:scale-95">
            Conheça a Solução
          </button>
          <button className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-[12px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-xl hover:scale-105 active:scale-95">
            Solicite um Piloto
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-end opacity-60">
        <div className="h-px w-24 bg-white mb-4"></div>
        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-white [text-shadow:_0_2px_8px_rgba(0,0,0,0.5)]">Dubai | Brazil | AWS</div>
      </div>
    </section>
  );
};

export default Hero;