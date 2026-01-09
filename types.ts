
export enum View {
  HOME = 'home',
  HARDWARE = 'hardware',
  FINTECH = 'fintech',
  DIGITAL = 'digital',
  PRICING = 'pricing',
  SAVINGS = 'savings',
  LETS_TALK = 'lets-talk'
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}
