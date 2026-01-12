import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import FeatureSection from './components/FeatureSection';
import FintechSection from './components/FintechSection';
import DigitalSection from './components/DigitalSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { View } from './types';
import { HARDWARE_FEATURES } from './constants';

const App: React.FC = () => {
  const [currentView, setView] = useState<View>(View.HOME);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="flex flex-col min-h-screen selection:bg-voltdrive-green selection:text-slate-900">
      <Navbar setView={setView} />

      <main className="flex-grow">
        <Hero />

        <ProblemSection />

        {/* Hardware Section */}
        <section className="py-32 bg-[#020617] relative overflow-hidden">
          {/* Subtle background element */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-voltdrive-green/5 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-20">
              <span className="text-voltdrive-green font-bold text-[10px] tracking-[0.5em] uppercase mb-4 block">Hardware as a Service</span>
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-16 italic">
                O Módulo <span className="text-voltdrive-green">VoltDrive.</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {HARDWARE_FEATURES.map((item: any, i) => (
                  <div key={i} className="group flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-voltdrive-green text-4xl font-black italic opacity-30 group-hover:opacity-100 transition-opacity duration-500">{item.step}</div>
                      <div className="h-px flex-grow bg-white/10"></div>
                    </div>

                    <h3 className="text-2xl font-black mb-4 italic uppercase tracking-tighter">{item.title}</h3>
                    <p className="text-white/50 mb-8 leading-relaxed text-sm">{item.desc}</p>

                    <div className="aspect-video rounded-2xl overflow-hidden transition-all border border-white/10 bg-slate-900/50 relative shadow-2xl group-hover:border-voltdrive-green/30">
                      {item.video ? (
                        <video
                          src={item.video}
                          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ease-out"
                          loop
                          muted
                          playsInline
                          autoPlay
                        />
                      ) : (
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                        />
                      )}

                      {!item.video && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20 flex items-end p-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                            VoltDrive Technology Lab
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FintechSection />

        <DigitalSection />

        <ContactForm />
      </main>

      <Footer setView={setView} />
    </div>
  );
};

export default App;