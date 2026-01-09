
import React from 'react';
import { View } from '../types';
import { VOLTDRIVE_LOGO } from '../constants';

interface NavbarProps {
  setView: (view: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setView }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-glass h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <button onClick={() => setView(View.HOME)}>
          {VOLTDRIVE_LOGO()}
        </button>

        <div className="hidden lg:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-widest text-white/50">
          <button onClick={() => setView(View.HARDWARE)} className="hover:text-voltdrive-green transition-colors">Hardware</button>
          <button onClick={() => setView(View.FINTECH)} className="hover:text-voltdrive-green transition-colors">Fintech</button>
          <button onClick={() => setView(View.DIGITAL)} className="hover:text-voltdrive-green transition-colors">Blockchain</button>
          <button onClick={() => setView(View.SAVINGS)} className="hover:text-voltdrive-green transition-colors">Economia</button>
        </div>

        <button 
          onClick={() => setView(View.LETS_TALK)}
          className="bg-voltdrive-green text-slate-900 px-6 py-2.5 rounded font-black text-[11px] uppercase tracking-widest hover:bg-white transition-all shadow-lg"
        >
          Solicite um Piloto
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
