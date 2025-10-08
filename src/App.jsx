import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import WhyChooseUs from '@/components/WhyChooseUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const [language, setLanguage] = useState('fr');

  return (
    <>
      <Helmet>
        <title>Africa Global Engineering - Ingénierie et Conseil | Engineering & Consulting</title>
        <meta name="description" content="Cabinet d'ingénierie et conseil basé à Casablanca. Expertise en AMO, MOD, études techniques, OPC, topographie et ingénierie minière. Your trusted partner in engineering and consulting." />
      </Helmet>
      <div className="min-h-screen">
        <Header language={language} setLanguage={setLanguage} />
        <Hero language={language} />
        <About language={language} />
        <Services language={language} />
        <Projects language={language} />
        <WhyChooseUs language={language} />
        <Contact language={language} />
        <Footer language={language} />
        <Toaster />
      </div>
    </>
  );
}

export default App;