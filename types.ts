
export type Language = 'pt' | 'en' | 'es';

export interface Translation {
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
  };
  comparison: {
    title: string;
    headers: [string, string, string];
    rows: {
      cost: [string, string, string];
      time: [string, string, string];
      versatility: [string, string, string];
    };
  };
  benefits: {
    title: string;
    items: { title: string; desc: string }[];
  };
  portfolio: {
    title: string;
    desc: string;
  };
  faq: {
    title: string;
    items: { q: string; a: string }[];
  };
  floating: {
    whatsapp: string;
    email: string;
  };
}
