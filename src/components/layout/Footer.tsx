import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { lang } = useLanguage();
  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      padding: '3rem 5%',
      textAlign: 'center',
      color: 'var(--text-muted)',
      fontSize: '0.9rem'
    }}>
      <p>© {new Date().getFullYear()} Nik Syarg. {lang === 'ru' ? 'Все права защищены.' : lang === 'ka' ? 'ყველა უფლება დაცულია.' : 'All rights reserved.'}</p>
    </footer>
  );
};