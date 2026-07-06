import articles from '../data/articles';

export default function Articles() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Artikel Industri PT Shinrai Vision Engineering',
    blogPost: articles.map((article) => ({
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.excerpt,
      image: `https://shinraivisionengineering.com${article.image}`,
    })),
  };

  return (
    <section id="article" className="article" aria-labelledby="article-heading">
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2 id="article-heading">Keep Update With Our Articles</h2>
          <p>Artikel Industri</p>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {articles.map((article, index) => (
            <div className="col" data-aos="zoom-in" data-aos-delay={100 * (index + 1)} key={article.id}>
              <article className="card h-100">
                <div className="article-img-wrap">
                  <img
                    src={article.image}
                    className="card-img-top"
                    alt={article.alt}
                    title={article.title}
                    width={400}
                    height={220}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title mt-3">
                    <a href="#" title={article.title}>
                      {article.title}
                    </a>
                  </h5>
                  <p className="card-text mt-3">{article.excerpt}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}