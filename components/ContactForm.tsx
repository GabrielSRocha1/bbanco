
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section className="py-24 bg-[#05151b] relative overflow-hidden">
      {/* Listras de fundo inclinadas */}
      <div className="absolute top-1/2 left-0 w-[200%] transform -translate-y-1/2 -rotate-12 flex flex-col gap-4 pointer-events-none opacity-20">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="h-4 w-full bg-[#fbb03b]"></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        <div className="flex flex-col justify-center">
          <h2 className="text-6xl md:text-[80px] font-[1000] tracking-tighter uppercase mb-10 leading-[0.85]">
            MANTENHA SEUS <br/> CAMINHÕES. <br/>
            <span className="text-[#58bcf0]">SEJA ELÉTRICO.</span>
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-md leading-relaxed">
            Comece a economizar instantaneamente com a VoltDriver. Acople como se fosse um trailer. Nenhuma integração necessária.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            <div>
              <h3 className="text-xl font-black uppercase tracking-tighter mb-2 italic">Reduza custos</h3>
              <p className="text-white/40 text-sm leading-snug">Renove sua frota instantaneamente e veja economia imediata de combustível.</p>
            </div>
            <div>
              <h3 className="text-xl font-black uppercase tracking-tighter mb-2 italic">Reduza emissões</h3>
              <p className="text-white/40 text-sm leading-snug">Atenda facilmente às demandas de descarbonização de carregadores e regulamentações.</p>
            </div>
            <div>
              <h3 className="text-xl font-black uppercase tracking-tighter mb-2 italic">Melhore a experiência</h3>
              <p className="text-white/40 text-sm leading-snug">Retenha motoristas com recursos extras de segurança e dirigibilidade.</p>
            </div>
          </div>
        </div>

        <div className="bg-[#0a232b] p-10 md:p-14 rounded-3xl border border-white/10 shadow-2xl relative">
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#58bcf0] rounded-full blur-3xl opacity-20"></div>
          
          <h3 className="text-2xl font-black tracking-tighter uppercase mb-2">Vamos conversar</h3>
          <p className="text-red-500 text-[10px] uppercase font-black tracking-[0.2em] mb-10">*Campo obrigatório</p>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1">
                <input type="text" placeholder="Nome*" className="w-full bg-white/5 border border-white/10 p-5 rounded-xl focus:outline-none focus:border-[#58bcf0] text-sm font-medium transition-colors" />
              </div>
              <div className="space-y-1">
                <input type="text" placeholder="Sobrenome*" className="w-full bg-white/5 border border-white/10 p-5 rounded-xl focus:outline-none focus:border-[#58bcf0] text-sm font-medium transition-colors" />
              </div>
            </div>
            <input type="email" placeholder="E-mail Corporativo*" className="w-full bg-white/5 border border-white/10 p-5 rounded-xl focus:outline-none focus:border-[#58bcf0] text-sm font-medium transition-colors" />
            <input type="text" placeholder="Nome da Empresa*" className="w-full bg-white/5 border border-white/10 p-5 rounded-xl focus:outline-none focus:border-[#58bcf0] text-sm font-medium transition-colors" />
            <textarea placeholder="Mensagem" rows={4} className="w-full bg-white/5 border border-white/10 p-5 rounded-xl focus:outline-none focus:border-[#58bcf0] text-sm font-medium transition-colors resize-none"></textarea>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
              <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-white/40">
                <span className="text-[#58bcf0] mr-2 text-lg">✓</span> Sem custo inicial.
              </div>
              <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-white/40">
                <span className="text-[#58bcf0] mr-2 text-lg">✓</span> Sem adaptações.
              </div>
              <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-white/40">
                <span className="text-[#58bcf0] mr-2 text-lg">✓</span> Sem fidelidade.
              </div>
            </div>

            <button className="w-full bg-[#58bcf0] text-[#05151b] py-6 rounded-xl font-black uppercase tracking-widest hover:bg-white hover:scale-[1.01] active:scale-95 transition-all shadow-xl text-sm">
              Enviar Solicitação
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
