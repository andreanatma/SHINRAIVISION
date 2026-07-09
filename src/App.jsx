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
import faqs from './data/faq';

const SITE_URL = 'https://shinraivision.com/';
const SITE_TITLE = 'Machining and Fabrication Specialist | PT Shinrai Vision Engineering';
const SITE_DESCRIPTION =
  'Machining and Fabrication Specialist yang melayani jasa machining, fabrikasi, dan customize part presisi tinggi untuk klien industri di seluruh Indonesia. Melayani spare part industri, dies, mold, jig & fixture untuk industri Packaging & Automotive. Komitmen, Efisien & Integritas.';
const SITE_IMAGE = `${SITE_URL}bahan/img/Logo.png`;

const LOCAL_BUSINESS_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}#organization`,
  name: 'PT Shinrai Vision Engineering',
  image: SITE_IMAGE,
  logo: SITE_IMAGE,
  description:
    'Machining and Fabrication Specialist yang berkomitmen memberikan solusi manufaktur berkualitas tinggi dan presisi untuk industri Packaging dan Automotive di seluruh Indonesia.',
  url: SITE_URL,
  telephone: '+6288290497317',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jalan Ciantra Gang Pelangi RT.7/RW.4, Kampung Ciantra Pojok',
    addressLocality: 'Cikarang Selatan, Kab. Bekasi',
    addressRegion: 'Jawa Barat',
    postalCode: '17853',
    addressCountry: 'ID',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '-6.3418',
    longitude: '107.1499',
  },
  areaServed: 'ID',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:00',
    closes: '17:00',
  },
  sameAs: [
    'https://facebook.com/shinraivision',
    'https://instagram.com/shinraivision',
    'https://linkedin.com/company/shinraivision',
  ],
};

const SERVICE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Jasa Machining dan Fabrication',
  provider: { '@id': `${SITE_URL}#organization` },
  areaServed: {
    '@type': 'Country',
    name: 'Indonesia',
  },
  description:
    'Layanan Machining, Fabrikasi, Customize Parts, dan High Precision Manufacturing untuk kebutuhan industri di seluruh Indonesia.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Layanan Shinrai Vision Engineering',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Jasa Machining CNC & Bubut' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Jasa Fabrication & Custom Part' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pembuatan Dies, Mold, Jig & Fixture' } },
    ],
  },
};

const FAQ_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
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
          content="machining and fabrication specialist, jasa machining indonesia, fabrikasi logam nasional, bengkel bubut cnc, customize part, jig fixture, dies mold, PT Shinrai Vision Engineering"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="PT Shinrai Vision Engineering" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.placename" content="Indonesia" />
        <link rel="canonical" href={SITE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
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
        <script type="application/ld+json">
          {JSON.stringify(SERVICE_JSON_LD)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(FAQ_JSON_LD)}
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