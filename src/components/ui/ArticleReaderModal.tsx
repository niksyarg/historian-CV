import React from 'react';
import { Article } from '../../types/portfolio';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

interface ArticleReaderModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({ article, onClose }) => {
  const { lang } = useLanguage();
  const t = translations[lang];

  if (!article) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.88)',
        zIndex: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        backdropFilter: 'blur(8px)'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '750px',
          width: '100%',
          maxHeight: '85vh',
          overflowY: 'auto',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--accent-gold)',
          borderRadius: '12px',
          padding: '2.5rem',
          position: 'relative'
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'var(--accent-gold)',
            color: '#0d0f12',
            border: 'none',
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '1.1rem'
          }}
        >
          ✕
        </button>
        <div style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.8rem' }}>
          {article.date}
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>
          {article.title[lang]}
        </h2>
        <div style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
          {article.fullText ? article.fullText[lang] : article.summary[lang]}
        </div>
      </div>
    </div>
  );
};