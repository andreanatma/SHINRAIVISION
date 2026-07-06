export default function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div
            className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1"
            data-aos="zoom-out"
            data-aos-duration="1000"
          >
            <h1>Jasa Machining dan Fabrication</h1>
            <h2>Komitmen, Efisien, Presisi &amp; Integritas untuk Kebutuhan Industri Anda</h2>
            <ul>
              <li>
                <i className="fas fa-check-circle"></i> Customize Parts
              </li>
              <li>
                <i className="fas fa-check-circle"></i> Fabrication Projects
              </li>
              <li>
                <i className="fas fa-check-circle"></i> High Precision Manufacturing
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="https://wa.me/6288290497317"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-cta-wa me-2"
                title="Hubungi kami via WhatsApp"
              >
                <i className="fab fa-whatsapp fa-lg me-1"></i> WhatsApp
              </a>
              <a
                href="mailto:sales1@shinraivision.com"
                className="btn btn-cta-quote"
                title="Minta Penawaran Harga"
              >
                <i className="far fa-envelope fa-lg me-1"></i> Quotation
              </a>
            </div>
          </div>
          <div
            className="col-lg-5 order-1 order-lg-2 hero-img"
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <img
              src="/bahan/img/Logo.png"
              className="img-fluid animated hero-logo-float"
              alt="Logo PT Shinrai Vision Engineering - Machining & Fabrication Cikarang"
            />
          </div>
        </div>
      </div>

      <div
        className="hero-silhouette"
        style={{ backgroundImage: "url('/bahan/img/hero-silhouette.jpg')" }}
        aria-hidden="true"
      ></div>

      <svg
        className="hero-waves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          ></path>
        </defs>
        <g className="wave1">
          <use href="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)"></use>
        </g>
        <g className="wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)"></use>
        </g>
        <g className="wave3">
          <use href="#wave-path" x="50" y="9" fill="#fff"></use>
        </g>
      </svg>
    </section>
  );
}
