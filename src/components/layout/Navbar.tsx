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
      left: 0,
      width: '100%',
      zIndex: 100,
      backdropFilter: 'blur(14px)',
      background: 'rgba(13, 15, 18, 0.85)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '0.8rem 4%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '0.75rem'
    }}>
      {/* Логотип */}
      <div style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
        fontWeight: 700,
        letterSpacing: '1px',
        color: 'var(--accent-gold)'
      }}>
        NIK SYARG
      </div>

      {/* Навигация и переключатель языков */}
      <nav style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: 'clamp(0.8rem, 2vw, 1.5rem)', 
        alignItems: 'center' 
      }}>
        <div style={{ display: 'flex', gap: 'clamp(0.5rem, 1.5vw, 1.2rem)' }}>
          <a href="#articles" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{t.navArticles}</a>
          <a href="#conferences" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{t.navConferences}</a>
          <a href="#certificates" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{t.navCertificates}</a>
        </div>
        
        {/* Кнопки переключения языка */}
        <div style={{ display: 'flex', background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', borderRadius: '999px', padding: '2px' }}>
          {(['ru', 'ka', 'en'] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              style={{
                background: lang === l ? 'var(--accent-gold)' : 'transparent',
                border: 'none',
                color: lang === l ? '#0d0f12' : 'var(--text-muted)',
                padding: '4px 9px',
                borderRadius: '999px',
                cursor: 'pointer',
                fontSize: '0.75rem',
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