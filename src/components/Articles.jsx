import { useState } from 'react';
import articles from '../data/articles';

export default function Articles() {
  const [activeSlug, setActiveSlug] = useState(null);
  // Menampilkan 3 artikel pertama secara default
  const [visibleArticles, setVisibleArticles] = useState(3); 
  const activeArticle = articles.find((item) => item.slug === activeSlug) || null;

  function openArticle(slug) {
    setActiveSlug(slug);
    // Scroll mulus ke atas area artikel saat dibuka
    window.scrollTo({ top: document.getElementById('article')?.offsetTop - 90, behavior: 'smooth' });
  }

  function closeArticle() {
    setActiveSlug(null);
  }

  function handleLoadMore() {
    setVisibleArticles(articles.length); // Tampilkan semua artikel saat diklik
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Artikel Industri PT Shinrai Vision Engineering',
    blogPost: articles.map((article) => ({
      '@type': 'BlogPosting',
      headline: article.title,
      datePublished: article.date,
      description: article.excerpt,
      image: `https://shinraivisionengineering.com${article.image}`,
    })),
  };

  return (
    <section id="article" className="article py-5" aria-labelledby="article-heading">
      {/* Skrip SEO JSON-LD */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} 
      />
      
      <div className="container">
        {/* ================= HEADER SECTION ================= */}
      <div className="section-title" data-aos="fade-up">
        <h2>Keep Update With Our Articles</h2>
        <p>Articles</p>
    </div>

        {/* ================= LIST ARTIKEL ================= */}
        {!activeArticle && (
          <>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {articles.slice(0, visibleArticles).map((article, index) => (
                <div className="col" data-aos="zoom-in" data-aos-delay={100 * (index + 1)} key={article.id}>
                  <article className="card h-100 border rounded-0 shadow-sm" style={{ cursor: 'pointer' }} onClick={() => openArticle(article.slug)}>
                    <div className="card-img-wrap p-2 pb-0">
                      <img
                        src={article.image}
                        className="card-img-top rounded-0"
                        alt={article.alt}
                        title={article.title}
                        style={{ objectFit: 'cover', height: '280px', width: '100%' }}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="card-body text-center p-4">
                      <h5 className="card-title fw-bold mb-3" style={{ fontSize: '1.1rem' }}>
                        <span className="text-dark text-decoration-none">
                          {article.title}
                        </span>
                      </h5>
                      <p className="card-text text-muted" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                        {article.excerpt}
                      </p>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            {/* Tombol Load More */}
            {visibleArticles < articles.length && (
              <div className="text-center mt-5" data-aos="fade-up">
                <button className="btn btn-primary rounded-pill px-4" onClick={handleLoadMore} style={{ backgroundColor: '#0d6efd' }}>
                  Selengkapnya <i className="fas fa-arrow-right ms-2" style={{ fontSize: '0.8rem' }}></i>
                </button>
              </div>
            )}
          </>
        )}

        {/* ================= DETAIL ARTIKEL ================= */}
        {activeArticle && (
          <div className="article-detail" data-aos="fade-up">
            
            {/* Tombol Back */}
            <div className="text-start mb-4">
              <button type="button" className="btn btn-back" onClick={closeArticle}>
                <i className="fas fa-arrow-left me-2" aria-hidden="true"></i>Kembali
              </button>
            </div>

            {/* Konten Utama - Rata Tengah */}
            <article className="text-center">
              
              <h1 className="article-detail-title">{activeArticle.title}</h1>
              
              <div className="article-detail-img-wrap mx-auto">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.alt}
                  title={activeArticle.title}
                  className="article-detail-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Teks Konten - Dibatasi lebarnya dan rata kiri-kanan (justify) */}
              <div className="article-detail-body mx-auto text-start" style={{ maxWidth: '900px' }}>
                {activeArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
              
            </article>

            {/* Rekomendasi Bacaan */}
            <div className="article-suggestions mt-5 pt-5 border-top mx-auto" style={{ maxWidth: '900px' }}>
              <h3 className="mb-4 text-start fw-bold" style={{ fontSize: '1.5rem' }}>Rekomendasi Bacaan Lainnya</h3>
              <div className="row row-cols-1 row-cols-md-3 g-3">
                {articles
                  .filter((item) => item.slug !== activeArticle.slug)
                  .slice(0, 2)
                  .map((item) => (
                    <div className="col" key={item.id}>
                      <button
                        type="button"
                        className="suggestion-card w-100 text-start border-0 bg-transparent p-0"
                        onClick={() => openArticle(item.slug)}
                      >
                        <img 
                          src={item.image} 
                          alt={item.alt} 
                          loading="lazy" 
                          className="img-fluid rounded mb-2 shadow-sm" 
                          style={{ height: '160px', width: '100%', objectFit: 'cover' }} 
                        />
                        <span className="d-block fw-bold text-dark mt-2">{item.title}</span>
                      </button>
                    </div>
                  ))}
                <div className="col">
                  <a
                    href="https://shinraivision.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="suggestion-card suggestion-external text-decoration-none text-dark d-block"
                  >
                    <div 
                      className="bg-light d-flex align-items-center justify-content-center rounded mb-2 shadow-sm" 
                      style={{ height: '160px', width: '100%', border: '1px dashed #ccc' }}
                    >
                      <i className="fas fa-external-link-alt fa-2x text-primary" aria-hidden="true"></i>
                    </div>
                    <span className="d-block fw-bold mt-2">Referensi lain: Artikel di shinraivision</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </section>
  );
}