export default function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="row align-items-stretch gy-5">
          <div
            className="col-lg-5 about-img-col"
            data-aos="fade-right"
          >
            <div className="about-img-frame">
              <img
                src="/bahan/img/Logo.png"
                className="img-fluid"
                alt="Logo PT Shinrai Vision Engineering, penyedia jasa machining dan fabrikasi di Cikarang"
                width="480"
                height="480"
                loading="lazy"
              />
              <span className="about-img-badge">
                <i className="fas fa-industry" aria-hidden="true"></i>
                Melayani Industri Cikarang &amp; Sekitarnya
              </span>
            </div>
          </div>

          <div
            className="col-lg-7 icon-boxes d-flex flex-column"
            data-aos="fade-left"
          >
            <h2 id="about-heading">Tentang Kami</h2>
            <p className="description-home" data-aos="zoom-in" data-aos-delay="100">
              <strong>PT Shinrai Vision Engineering</strong> adalah perusahaan jasa machining dan
              fabrikasi di Cikarang, Bekasi, yang berkomitmen memberikan solusi manufaktur
              berkualitas tinggi dan presisi. Kami melayani pengerjaan bubut CNC, milling, custom
              part, hingga fabrication project untuk memenuhi kebutuhan spesifik industri
              otomotif, packaging, dan manufaktur lain di kawasan Cikarang dan sekitarnya.
            </p>

            <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
              <h3 className="title">
                <i className="fas fa-eye" aria-hidden="true"></i> Visi
              </h3>
              <p className="description">
                Menjadi mitra jasa machining dan fabrikasi terpercaya dan inovatif di Cikarang,
                dengan solusi teknik yang presisi dan tepat waktu.
              </p>
            </div>

            <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
              <h3 className="title">
                <i className="fa fa-bullseye" aria-hidden="true"></i> Misi
              </h3>
              <ol className="description mission-list">
                <li>Mengutamakan kualitas pengerjaan machining dan fabrikasi.</li>
                <li>Berinovasi dalam teknologi manufaktur dan mesin CNC.</li>
                <li>Membangun kemitraan jangka panjang dengan integritas.</li>
              </ol>
            </div>

            <div className="text-center text-lg-start mt-3" data-aos="zoom-in" data-aos-delay="350">
              <a
                href="/bahan/pdf/Company-Profile-Shinrai-Vision-Engineering.pdf"
                download
                className="btn-download"
                title="Download Company Profile PT Shinrai Vision Engineering - Jasa Machining Cikarang"
              >
                <i className="fas fa-download" aria-hidden="true"></i> Download Company Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}