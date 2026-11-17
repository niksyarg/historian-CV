import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

export const Navbar: React.FC = () => {
  const { lang, setLang } = useLanguage();
  const t = translations[lang];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,
      backdropFilter: 'blur(14px)',
      background: 'rgba(13, 15, 18, 0.8)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '1rem 5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '1.5rem',
        fontWeight: 700,
        letterSpacing: '1px',
        color: 'var(--accent-gold)'
      }}>
        NIK SYARG
      </div>
      <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <a href="#articles" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.navArticles}</a>
        <a href="#conferences" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.navConferences}</a>
        <a href="#certificates" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.navCertificates}</a>
        
        <div style={{ display: 'flex', background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', borderRadius: '999px', padding: '3px' }}>
          {(['ru', 'ka', 'en'] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              style={{
                background: lang === l ? 'var(--accent-gold)' : 'transparent',
                border: 'none',
                color: lang === l ? '#0d0f12' : 'var(--text-muted)',
                padding: '5px 12px',
                borderRadius: '999px',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontWeight: 600,
                transition: 'all 0.3s ease'
              }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};