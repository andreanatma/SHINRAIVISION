import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Articles from './components/Articles';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactWidget from './components/ContactWidget';

const SITE_URL = 'https://www.shinraivision.com/';
const SITE_TITLE = 'Jasa Machining & Fabrication Cikarang | PT Shinrai Vision Engineering';
const SITE_DESCRIPTION =
  'PT Shinrai Vision Engineering melayani jasa Machining, Fabrikasi, dan Customize Part presisi tinggi di Cikarang, Bekasi. Komitmen, Efisien & Integritas.';
const SITE_IMAGE = `${SITE_URL}bahan/img/Logo.png`;

const LOCAL_BUSINESS_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'PT Shinrai Vision Engineering',
  image: SITE_IMAGE,
  description:
    'Perusahaan yang bergerak di bidang Machining dan Fabrication, berkomitmen untuk memberikan solusi manufaktur berkualitas tinggi dan presisi.',
  url: SITE_URL,
  telephone: '+6288290497317',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jalan Ciantra Gang Pelangi RT.7/RW.4, Kampung Ciantra Pojok',
    addressLocality: 'Cikarang Selatan, Kab. Bekasi',
    addressRegion: 'Jawa Barat',
    postalCode: '17853',
    addressCountry: 'ID',
  },
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>{SITE_TITLE}</title>
        <meta name="title" content={SITE_TITLE} />
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta
          name="keywords"
          content="jasa machining cikarang, fabrikasi cikarang, customize part bekasi, jasa cnc cikarang, fabrikasi logam, PT Shinrai Vision Engineering"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="PT Shinrai Vision Engineering" />
        <link rel="canonical" href={SITE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={SITE_IMAGE} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={SITE_URL} />
        <meta property="twitter:title" content={SITE_TITLE} />
        <meta property="twitter:description" content={SITE_DESCRIPTION} />
        <meta property="twitter:image" content={SITE_IMAGE} />

        <script type="application/ld+json">
          {JSON.stringify(LOCAL_BUSINESS_JSON_LD)}
        </script>
      </Helmet>

      <Header />
      <Hero />

      <main id="main">
        <About />
        <Services />
        <Gallery />
        <Articles />
        <Testimonials />
        <Faq />
        <Contact />
      </main>

      <Footer />
      <ContactWidget />
    </>
  );
}

export default App;
