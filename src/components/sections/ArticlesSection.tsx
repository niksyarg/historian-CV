import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { articlesData } from '../../data/articles';
import { Article } from '../../types/portfolio';

interface ArticlesSectionProps {
  onSelectArticle: (article: Article) => void;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({ onSelectArticle }) => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="articles" style={{ marginBottom: '5.5rem' }}>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {t.navArticles}
        <span style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, var(--border-subtle), transparent)' }}></span>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {articlesData.map((art) => (
          <div key={art.id} style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '12px',
            padding: '1.75rem',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transition: 'transform 0.35s ease, border-color 0.35s ease'
          }}>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.6rem' }}>
                {art.date}
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '0.8rem', lineHeight: 1.3 }}>
                {art.title[lang]}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.4rem' }}>
                {art.summary[lang]}
              </p>
            </div>
            <button
              onClick={() => onSelectArticle(art)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--accent-gold)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                padding: 0
              }}
            >
              {t.readMore}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};