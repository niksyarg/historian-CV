export type Language = 'ru' | 'ka' | 'en';

export interface LocalizedText {
  ru: string;
  ka: string;
  en: string;
}

export interface Article {
  id: string;
  date: string;
  link?: string;
  title: LocalizedText;
  summary: LocalizedText;
  fullText?: LocalizedText;
}

export interface Conference {
  id: string;
  year: string;
  location: LocalizedText;
  title: LocalizedText;
  role: LocalizedText;
}

export interface Certificate {
  id: string;
  year: string;
  issuer: string;
  image: string;
  title: LocalizedText;
}