
import React, { useState } from 'react';

const SavingsCalculator: React.FC = () => {
  const [start, setStart] = useState('');
  const [dest, setDest] = useState('');

  const routes = [
    { from: 'São Paulo', to: 'Rio de Janeiro', miles: '435 km' },
    { from: 'Curitiba', to: 'Porto Alegre', miles: '711 km' },
    { from: 'Belo Horizonte', to: 'Vitória', miles: '524 km' }
  ];

  return (
    <section className="min-h-screen pt-20 flex items-center bg-[#05151b] overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img src="https://picsum.photos/2000/1200?grayscale" alt="Mapa" className="w-full h-full object-cover" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        <div className="bg-glass p-12 rounded-2xl border border-white/10 shadow-2xl">
          <div className="mb-12">
            <h2 className="text-sm font-bold tracking-widest uppercase text-[#58bcf0] mb-2">Calculadora de Economia</h2>
            <div className="w-12 h-1 bg-[#58bcf0]"></div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-70">Local de origem</label>
              <input 
                type="text" 
                value={start}
                onChange={e => setStart(e.target.value)}
                placeholder="Ponto de Partida"
                className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded focus:outline-none focus:border-[#58bcf0]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-70">Destino</label>
              <input 
                type="text" 
                value={dest}
                onChange={e => setDest(e.target.value)}
                placeholder="Destino Final"
                className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded focus:outline-none focus:border-[#58bcf0]"
              />
            </div>
            <button className="w-full bg-[#58bcf0] text-[#05151b] py-5 rounded font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl">
              Próximo
            </button>
          </div>

          <div className="mt-12 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest opacity-70">Rotas populares</h3>
            {routes.map((r, i) => (
              <div key={i} className="flex items-center justify-between p-4 border border-white/10 rounded hover:bg-white/5 transition-all cursor-pointer group">
                <span className="font-bold flex items-center">
                  {r.from} <span className="mx-3 opacity-30 group-hover:opacity-100 group-hover:text-[#58bcf0]">→</span> {r.to}
                </span>
                <span className="text-[#58bcf0] font-bold">{r.miles}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex flex-col justify-center text-white">
          <h1 className="text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
            Veja o <br/>
            <span className="text-[#58bcf0]">ROI em tempo real</span> <br/>
            em cada rota.
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-md">
            A VoltDriver oferece a primeira unidade de propulsão elétrica paga por quilômetro do setor que se integra à sua frota existente em minutos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;
