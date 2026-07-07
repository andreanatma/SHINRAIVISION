import { useState, useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import galleryItems from '../data/gallery';

export default function Gallery() {
  // State untuk membatasi jumlah gambar yang tampil awal (misal: 6 gambar)
  const [visibleImages, setVisibleImages] = useState(6);

  useEffect(() => {
    // Inisialisasi ulang GLightbox setiap kali jumlah gambar yang tampil berubah
    const lightbox = GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
    });

    return () => {
      lightbox.destroy();
    };
  }, [visibleImages]); 

  function handleLoadMore() {
    setVisibleImages(galleryItems.length); // Tampilkan semua gambar saat diklik
  }

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

  return (
    <section id="gallery" className="gallery py-5" aria-labelledby="gallery-heading">
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} 
      />
      
      <div className="container">
        <div className="section-title text-center mb-5" data-aos="fade-up">
          <h2 id="gallery-heading" className="fw-bold text-primary">Gallery</h2>
          <p className="text-muted">Hasil Kerja Kami</p>
        </div>
        
        <div className="row g-4" data-aos="zoom-in">
          {/* Loop dibatasi menggunakan slice berdasarkan state visibleImages */}
          {galleryItems.slice(0, visibleImages).map((item) => (
            <div className="col-lg-4 col-md-6 col-sm-6" key={item.id}>
              
              <figure className="gallery-item card h-100 border rounded-0 shadow-sm p-3 mb-0" style={{ backgroundColor: '#fff' }}>
                <a
                  href={encodeURI(item.image)}
                  title={item.title}
                  className="glightbox d-block w-100 h-100"
                  data-gallery="gallery-img"
                  data-glightbox={`title: ${item.title}; description: ${item.alt}`}
                  aria-label={`Perbesar gambar: ${item.title}`}
                >
                  <div 
                    className="gallery-img-wrap d-flex align-items-center justify-content-center" 
                    style={{ height: '280px', width: '100%', backgroundColor: '#f9f9f9' }}
                  >
                    <img
                      src={encodeURI(item.image)}
                      alt={item.alt}
                      title={item.title}
                      className="img-fluid"
                      style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </a>
                
                <figcaption className="visually-hidden">{item.alt}</figcaption>
              </figure>

            </div>
          ))}
        </div>

        {/* Tombol Load More (Selengkapnya) */}
        {visibleImages < galleryItems.length && (
          <div className="text-center mt-5" data-aos="fade-up">
            <button className="btn btn-primary rounded-pill px-4" onClick={handleLoadMore} style={{ backgroundColor: '#0d6efd' }}>
              Selengkapnya <i className="fas fa-arrow-right ms-2" style={{ fontSize: '0.8rem' }}></i>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}