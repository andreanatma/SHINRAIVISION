// src/components/Gallery.jsx
import { useState, useEffect, useRef } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import galleryItems from '../data/gallery';

const INITIAL_COUNT = 6;

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const lightboxRef = useRef(null);

  useEffect(() => {
    lightboxRef.current = GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
    });

    return () => {
      lightboxRef.current?.destroy();
    };
  }, []);

  // refresh instance GLightbox tiap kali jumlah gambar yang tampil berubah
  useEffect(() => {
    lightboxRef.current?.reload();
  }, [showAll]);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Galeri Hasil Kerja PT Shinrai Vision Engineering',
    image: galleryItems.map((item) => ({
      '@type': 'ImageObject',
      contentUrl: `https://shinraivisionengineering.com${encodeURI(item.image)}`,
      name: item.title,
      description: item.alt,
    })),
  };

  const hiddenCount = galleryItems.length - INITIAL_COUNT;

  return (
    <section id="gallery" className="gallery" aria-labelledby="gallery-heading">
      {/* 1. Perbaikan SEO JSON-LD */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2 id="gallery-heading">Gallery</h2>
          <p>Hasil Kerja Kami - Fabrikasi &amp; Industrial Part</p>
        </div>
        
        <div className="row g-3" data-aos="zoom-in">
          {galleryItems.map((item, index) => {
            const isExtra = index >= INITIAL_COUNT;
            return (
              <div
                className={`col-lg-4 col-md-4 gallery-col ${
                  isExtra && !showAll ? 'gallery-hidden' : ''
                }`}
                key={item.id}
              >
                <figure className="gallery-item" data-aos="zoom-in">
                  {/* 2. Perbaikan Tag Anchor pembuka (<a>) yang terpotong */}
                  <a
                    href={encodeURI(item.image)}
                    title={item.title}
                    className="glightbox"
                    data-gallery="gallery-img"
                    data-glightbox={`title: ${item.title}; description: ${item.alt}`}
                  >
                    <img
                      src={encodeURI(item.image)}
                      alt={item.alt}
                      title={item.title}
                      className="img-fluid w-100"
                      width={item.width}
                      height={item.height}
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                  <figcaption className="visually-hidden">{item.title}</figcaption>
                </figure>
              </div>
            );
          })}
        </div>

        {hiddenCount > 0 && (
          <div className="text-center mt-4" data-aos="fade-up">
            <button
              type="button"
              className="btn btn-gallery-more"
              onClick={() => setShowAll((prev) => !prev)}
              aria-expanded={showAll}
              aria-controls="gallery-heading"
            >
              {showAll ? 'Tampilkan Lebih Sedikit' : `Lihat Selengkapnya`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}