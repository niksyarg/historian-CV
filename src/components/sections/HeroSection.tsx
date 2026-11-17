import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { articlesData } from '../../data/articles';
import { conferencesData } from '../../data/conferences';
import { certificatesData } from '../../data/certificates';

export const HeroSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div style={{
      minHeight: '75vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      borderBottom: '1px solid var(--border-subtle)',
      paddingBottom: '4rem',
      marginBottom: '4rem'
    }}>
      <div style={{
        display: 'inline-block',
        width: 'fit-content',
        padding: '6px 14px',
        border: '1px solid var(--accent-gold)',
        background: 'var(--accent-gold-soft)',
        color: 'var(--accent-gold)',
        borderRadius: '4px',
        fontSize: '0.8rem',
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        marginBottom: '1.5rem'
      }}>
        {t.badge}
      </div>
      <h1 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
        lineHeight: 1.1,
        marginBottom: '1.2rem',
        background: 'linear-gradient(135deg, #fff 30%, var(--accent-gold) 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        {t.heroTitle}
      </h1>
      <p style={{
        fontSize: '1.15rem',
        color: 'var(--text-muted)',
        maxWidth: '680px',
        marginBottom: '2.5rem'
      }}>
        {t.heroSubtitle}
      </p>
      <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
        <div>
          <span style={{ display: 'block', fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent-gold)', lineHeight: 1 }}>
            {articlesData.length}
          </span>
          <small style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.statArticles}</small>
        </div>
        <div>
          <span style={{ display: 'block', fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent-gold)', lineHeight: 1 }}>
            {conferencesData.length}
          </span>
          <small style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.statConferences}</small>
        </div>
        <div>
          <span style={{ display: 'block', fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent-gold)', lineHeight: 1 }}>
            {certificatesData.length}
          </span>
          <small style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.statCertificates}</small>
        </div>
      </div>
    </div>
  );
};