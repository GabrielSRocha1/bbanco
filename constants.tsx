import React from 'react';

export const VOLTDRIVE_LOGO = (className?: string) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="w-8 h-8 bg-[#85bb65] rounded-sm flex items-center justify-center font-black text-slate-900">V</div>
    <span className="font-black text-2xl tracking-tighter italic">VOLTDRIVE</span>
  </div>
);

export const HARDWARE_FEATURES = [
  {
    step: '01',
    title: 'CONECTAR',
    desc: ' NÓS Disponibilizamos os modulos eletricos da VoltDrive que estão totalmente carregados e prontos para uso nas paradas ao longo da sua rota.',
    img: 'https://i.ibb.co/NgHrF35q/Whats-App-Image-2026-01-08-at-08-21-22-1.jpg',
    video: '/0108.mp4'
  },
  {
    step: '02',
    title: 'ECONOMIZAR',
    desc: 'VOCÊ DIRIGE a VoltDive adiciona propulsão elétrica e maior eficienecia na frenagem. Você queima menos diesel e economiza dinheiro.',
    img: 'https://i.ibb.co/YBYvxg76/Whats-App-Image-2026-01-08-at-08-21-22-c.jpg',
    video: '/0108(1).mp4'
  },
  {
    step: '03',
    title: 'ESCALAR',
    desc: 'Troque seu VoltDrive por uma unidade carregada em minutos. Sem tempo de inatividade, pague apenas pelos quilômetros que usar!',
    img: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=800',
    video: '/0108(3).mp4'
  },
];

export const FINTECH_DATA = {
  title: 'VLS PAY',
  subtitle: 'Sua carteira digital de logística',
  features: [
    'Pagamento de pedágios (TAG e Cartão)',
    'Licenciado pelo Banco Central',
    'Analytics de gastos em tempo real',
    'Dashboards integrados para frotas'
  ]
};

export const DIGITAL_ECOSYSTEM = {
  token: '$BRT Token',
  blockchain: 'L2 Blockchain Security',
  mechanism: 'Buyback & Burn (10% lucros)',
  hosting: 'Dubai Free Zone Operation'
};

export const REGULATIONS = [
  {
    id: 1,
    year: '2026',
    title: 'Zonas de Baixa Emissão (LEZ)',
    description: 'Novas restrições para veículos a diesel em grandes centros urbanos como SP e RJ.'
  },
  {
    id: 2,
    year: '2028',
    title: 'Metas ESG Corporativas',
    description: 'Grandes embarcadores exigem 50% da frota com emissão zero até 2028.'
  },
  {
    id: 3,
    year: '2030',
    title: 'Carbon Tax Brasil',
    description: 'Implementação de impostos sobre emissão de CO2 para transportadoras de carga.'
  },
  {
    id: 4,
    year: '2032',
    title: 'Renovação de Frota Obrigatória',
    description: 'Subsídios e exigências para a transição energética total de frotas pesadas.'
  }
];

export const PLANS = [
  {
    name: 'Piloto',
    subtitle: 'Teste a tecnologia',
    savings: 'R$ 5.000/mês',
    milesIncluded: 'Até 2.000 km inclusos',
    features: [
      '1 Módulo VoltDrive',
      'VLS Pay Básico',
      'Dashboard de Telemetria',
      'Suporte 24/7'
    ]
  },
  {
    name: 'Frota',
    subtitle: 'Otimização real',
    savings: 'R$ 25.000/mês',
    milesIncluded: 'Até 10.000 km inclusos',
    features: [
      '5 Módulos VoltDrive',
      'VLS Pay Premium',
      'Analytics Avançado',
      'Integração via API',
      'Consultoria ESG'
    ]
  },
  {
    name: 'Enterprise',
    subtitle: 'Escala total',
    savings: 'Sob consulta',
    milesIncluded: 'Quilometragem ilimitada',
    features: [
      'Módulos ilimitados',
      'Customização de Hardware',
      'Gestão Dedicada',
      'Governança via Blockchain',
      'White-label VLS Pay'
    ]
  }
];