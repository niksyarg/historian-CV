import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { conferencesData } from '../../data/conferences';

export const ConferencesSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="conferences" style={{ marginBottom: '5.5rem' }}>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {t.navConferences}
        <span style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, var(--border-subtle), transparent)' }}></span>
      </h2>
      <div style={{ borderLeft: '2px solid var(--border-subtle)', paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {conferencesData.map((conf) => (
          <div key={conf.id} style={{
            position: 'relative',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '10px',
            padding: '1.5rem'
          }}>
            <div style={{
              position: 'absolute',
              left: '-2.45rem',
              top: '1.7rem',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: 'var(--accent-gold)',
              boxShadow: '0 0 10px var(--accent-gold)'
            }} />
            <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.6rem' }}>
              {conf.year} • {conf.location[lang]}
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '0.4rem', lineHeight: 1.3 }}>
              {conf.title[lang]}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              {conf.role[lang]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};