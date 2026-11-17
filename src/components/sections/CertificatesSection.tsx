import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { certificatesData } from '../../data/certificates';
import { Certificate } from '../../types/portfolio';

interface CertificatesSectionProps {
  onSelectCert: (cert: Certificate) => void;
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({ onSelectCert }) => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="certificates" style={{ marginBottom: '5.5rem' }}>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {t.navCertificates}
        <span style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, var(--border-subtle), transparent)' }}></span>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {certificatesData.map((cert) => (
          <div key={cert.id} style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '12px',
            padding: '1.75rem',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <img
                src={cert.image}
                alt={cert.title[lang]}
                onClick={() => onSelectCert(cert)}
                style={{
                  width: '100%',
                  height: '180px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '1rem',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  cursor: 'pointer'
                }}
              />
              <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.6rem' }}>
                {cert.year} • {cert.issuer}
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '0.8rem', lineHeight: 1.3 }}>
                {cert.title[lang]}
              </h3>
            </div>
            <button
              onClick={() => onSelectCert(cert)}
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
                padding: 0,
                textAlign: 'left'
              }}
            >
              {t.viewCert}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};