import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import articles from '../data/articles';

const SITE_URL = 'https://www.shinraivision.com/';

const INITIAL_VISIBLE = 3;

export default function Articles() {
  const [activeSlug, setActiveSlug] = useState(null);
  // Menampilkan 3 artikel pertama secara default
  const [visibleArticles, setVisibleArticles] = useState(INITIAL_VISIBLE);
  const activeArticle = articles.find((item) => item.slug === activeSlug) || null;
  const isExpanded = visibleArticles >= articles.length;

  // Sinkronkan slug artikel dengan URL hash (#article/slug-nya) supaya artikel
  // punya alamat unik yang bisa dibagikan, di-bookmark, dan diikuti crawler.
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash.startsWith('article/')) {
      const slugFromUrl = hash.replace('article/', '');
      if (articles.some((item) => item.slug === slugFromUrl)) {
        setActiveSlug(slugFromUrl);
      }
    }
  }, []);

  function openArticle(slug) {
    setActiveSlug(slug);
    window.history.pushState(null, '', `#article/${slug}`);
    window.scrollTo({ top: document.getElementById('article')?.offsetTop - 90, behavior: 'smooth' });
  }

  function closeArticle() {
    setActiveSlug(null);
    window.history.pushState(null, '', '#article');
  }

  function handleToggleArticles() {
    if (isExpanded) {
      // Kembali ke tampilan awal (Lebih Sedikit)
      setVisibleArticles(INITIAL_VISIBLE);
      document.getElementById('article')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Tampilkan semua artikel (Selengkapnya)
      setVisibleArticles(articles.length);
    }
  }

  const blogListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Artikel Industri PT Shinrai Vision Engineering',
    url: `${SITE_URL}#article`,
    blogPost: articles.map((article) => ({
      '@type': 'BlogPosting',
      headline: article.title,
      url: `${SITE_URL}#article/${article.slug}`,
      mainEntityOfPage: `${SITE_URL}#article/${article.slug}`,
      datePublished: article.date,
      dateModified: article.date,
      description: article.excerpt,
      image: `${SITE_URL}${article.image.replace(/^\//, '')}`,
      author: { '@type': 'Organization', name: 'PT Shinrai Vision Engineering' },
      publisher: {
        '@type': 'Organization',
        name: 'PT Shinrai Vision Engineering',
        logo: { '@type': 'ImageObject', url: `${SITE_URL}bahan/img/Logo.png` },
      },
    })),
  };

  const breadcrumbJsonLd = activeArticle && {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Beranda', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE_URL}#article` },
      { '@type': 'ListItem', position: 3, name: activeArticle.title, item: `${SITE_URL}#article/${activeArticle.slug}` },
    ],
  };

  return (
    <section id="article" className="article py-5" aria-labelledby="article-heading">
      {/* Meta title/description berubah dinamis saat sebuah artikel dibuka,
          supaya judul tab & hasil share sesuai artikel yang sedang dibaca. */}
      {activeArticle && (
        <Helmet>
          <title>{`${activeArticle.title} | PT Shinrai Vision Engineering`}</title>
          <meta name="description" content={activeArticle.excerpt} />
          <link rel="canonical" href={`${SITE_URL}#article/${activeArticle.slug}`} />
          <meta property="og:title" content={activeArticle.title} />
          <meta property="og:description" content={activeArticle.excerpt} />
          <meta property="og:image" content={`${SITE_URL}${activeArticle.image.replace(/^\//, '')}`} />
          <meta property="og:type" content="article" />
        </Helmet>
      )}

      {/* Skrip SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListJsonLd) }}
      />
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      )}

      <div className="container">
        {/* ================= HEADER SECTION ================= */}
        <div className="section-title" data-aos="fade-up">
          <h2 id="article-heading">Keep Update With Our Articles</h2>
          <p>Articles</p>
        </div>

        {/* ================= LIST ARTIKEL ================= */}
        {!activeArticle && (
          <>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {articles.slice(0, visibleArticles).map((article, index) => (
                <div className="col" data-aos="zoom-in" data-aos-delay={100 * (index + 1)} key={article.id}>
                  <article className="card h-100 border rounded-0 shadow-sm">
                    {/* Diperbaiki: Menambahkan tag pembuka <a> */}
                    <a
                      href={`#article/${article.slug}`}
                      onClick={(e) => { e.preventDefault(); openArticle(article.slug); }}
                      style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
                    >
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
                        <h3 className="card-title fw-bold mb-3" style={{ fontSize: '1.1rem' }}>
                          <span className="text-dark text-decoration-none">
                            {article.title}
                          </span>
                        </h3>
                        <p className="card-text text-muted" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                          {article.excerpt}
                        </p>
                      </div>
                    </a>
                  </article>
                </div>
              ))}
            </div>

            {/* Tombol Load More / Lebih Sedikit */}
            {articles.length > INITIAL_VISIBLE && (
              <div className="text-center mt-5" data-aos="fade-up">
                <button type="button" className="load-more-btn" onClick={handleToggleArticles}>
                  {isExpanded ? (
                    <>Lebih Sedikit <i className="fas fa-arrow-up load-more-icon" aria-hidden="true"></i></>
                  ) : (
                    <>Selengkapnya <i className="fas fa-arrow-right load-more-icon" aria-hidden="true"></i></>
                  )}
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
            {/* h2, bukan h1 - satu halaman hanya boleh punya 1 h1 (sudah dipakai Hero) */}
            <article className="text-center">

              <h2 className="article-detail-title">{activeArticle.title}</h2>

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
                      {/* Diperbaiki: Menambahkan tag pembuka <a> */}
                      <a
                        href={`#article/${item.slug}`}
                        onClick={(e) => { e.preventDefault(); openArticle(item.slug); }}
                        className="suggestion-card w-100 text-start d-block text-decoration-none text-dark"
                      >
                        <img 
                          src={item.image} 
                          alt={item.alt} 
                          loading="lazy" 
                          className="img-fluid rounded mb-2 shadow-sm" 
                          style={{ height: '160px', width: '100%', objectFit: 'cover' }} 
                        />
                        <span className="d-block fw-bold text-dark mt-2">{item.title}</span>
                      </a>
                    </div>
                  ))}
                <div className="col">
                  {/* Diperbaiki: Menambahkan tag pembuka <a> */}
                  <a
                    href="https://shinraivision.com/"
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