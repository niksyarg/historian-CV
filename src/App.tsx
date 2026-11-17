import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { ArticlesSection } from './components/sections/ArticlesSection';
import { ConferencesSection } from './components/sections/ConferencesSection';
import { CertificatesSection } from './components/sections/CertificatesSection';
import { ArticleReaderModal } from './components/ui/ArticleReaderModal';
import { CertLightboxModal } from './components/ui/CertLightboxModal';
import { Article, Certificate } from './types/portfolio';

export function App() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ maxWidth: '1140px', margin: '0 auto', padding: '7rem 1.5rem 4rem', width: '100%', flex: 1 }}>
        <HeroSection />
        <ArticlesSection onSelectArticle={setSelectedArticle} />
        <ConferencesSection />
        <CertificatesSection onSelectCert={setSelectedCert} />
      </main>
      <Footer />

      <ArticleReaderModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
      <CertLightboxModal certificate={selectedCert} onClose={() => setSelectedCert(null)} />
    </div>
  );
}

export default App;