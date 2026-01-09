
import React from 'react';
import { View } from '../types';
import { VOLTDRIVE_LOGO } from '../constants';

interface FooterProps {
  setView: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-[#020617] pt-32 pb-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 mb-32">
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Soluções</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><button onClick={() => setView(View.HARDWARE)} className="hover:text-voltdrive-green transition-colors">VoltDrive HaaS</button></li>
              <li><button onClick={() => setView(View.FINTECH)} className="hover:text-voltdrive-green transition-colors">VLS Pay</button></li>
              <li><button onClick={() => setView(View.DIGITAL)} className="hover:text-voltdrive-green transition-colors">$BRT Token</button></li>
            </ul>
          </div>
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Empresa</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><button onClick={() => setView(View.HOME)} className="hover:text-voltdrive-green transition-colors">Investidores</button></li>
              <li><button onClick={() => setView(View.HOME)} className="hover:text-voltdrive-green transition-colors">Dubai Office</button></li>
              <li><button onClick={() => setView(View.LETS_TALK)} className="hover:text-voltdrive-green transition-colors">Contato</button></li>
            </ul>
          </div>
          <div className="space-y-8">
             <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Tecnologia</h4>
             <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
               <li><span className="text-white/60">Infraestrutura AWS</span></li>
               <li><span className="text-white/60">Blockchain L2</span></li>
               <li><span className="text-white/60">Governança Global</span></li>
             </ul>
          </div>
          <div className="flex flex-col justify-between items-start">
            <div className="text-xs font-black uppercase text-voltdrive-green mb-4">Dubai Free Zone</div>
            <p className="text-[10px] text-white/30 leading-relaxed mb-8">
              VoltDrive Holding Ltd. <br/>
              Logistics District, Dubai South <br/>
              United Arab Emirates
            </p>
            <button className="bg-white text-slate-950 px-8 py-3 rounded font-black uppercase tracking-widest text-[10px] hover:bg-voltdrive-green transition-all">
              Portal do Cliente
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full text-center py-16 border-t border-white/5">
             <span className="text-[12vw] font-black tracking-tighter leading-none text-white italic select-none opacity-5">
               VOLTDRIVE
             </span>
          </div>
          
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 mt-8 opacity-40">
            <p className="text-[10px] font-black uppercase tracking-[0.3em]">
              ©2025 VoltDrive. Sustentabilidade e Eficiência.
            </p>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.3em]">
              <a href="#" className="hover:text-white transition-colors">Termos</a>
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
