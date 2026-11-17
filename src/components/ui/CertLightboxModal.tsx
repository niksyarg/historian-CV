import React from 'react';
import { Certificate } from '../../types/portfolio';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

interface CertLightboxModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertLightboxModal: React.FC<CertLightboxModalProps> = ({ certificate, onClose }) => {
  const { lang } = useLanguage();
  const t = translations[lang];

  if (!certificate) return null;

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
          maxWidth: '850px',
          maxHeight: '90vh',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--accent-gold)',
          borderRadius: '12px',
          padding: '1.5rem',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '-15px',
            right: '-15px',
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
        <img
          src={certificate.image}
          alt={certificate.title[lang]}
          style={{ maxWidth: '100%', maxHeight: '70vh', borderRadius: '6px' }}
        />
        <p style={{ marginTop: '1rem', color: 'var(--text-main)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem' }}>
          {certificate.title[lang]} ({certificate.issuer}, {certificate.year})
        </p>
      </div>
    </div>
  );
};