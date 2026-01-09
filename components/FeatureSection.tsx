import React from 'react';

interface FeatureSectionProps {
  tag?: string;
  title: string;
  description: string;
  imageSrc: string;
  reverse?: boolean;
  bgDark?: boolean;
  highlights?: string[];
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ tag, title, description, imageSrc, reverse, bgDark, highlights }) => {
  return (
    <section className={`py-32 px-6 md:px-12 ${bgDark ? 'bg-[#05151b]' : 'bg-[#0a232b]'}`}>
      <div className={`max-w-7xl mx-auto flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-20`}>
        <div className="flex-1 space-y-10">
          {tag && (
            <div className="w-12 h-1 bg-[#58bcf0]"></div>
          )}
          <h2 className="text-5xl md:text-6xl font-revoy-heavy leading-[0.9]">
            {title}
          </h2>
          <p className="text-white/50 text-lg leading-relaxed max-w-lg">
            {description}
          </p>
          
          {highlights && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#58bcf0] mt-2 shrink-0"></div>
                  <span className="text-xs font-black uppercase tracking-widest text-white/80">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex-1 w-full relative group">
          <div className="absolute inset-0 bg-[#58bcf0]/10 rounded-3xl transform rotate-2 -z-10 transition-transform group-hover:rotate-0"></div>
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full rounded-2xl shadow-3xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;