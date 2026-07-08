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
                alt="Logo PT Shinrai Vision Engineering, spesialis jasa machining dan fabrikasi skala nasional"
                width="480"
                height="480"
                loading="lazy"
              />
              <span className="about-img-badge">
                <i className="fas fa-industry" aria-hidden="true"></i>
                Melayani Industri di Seluruh Indonesia
              </span>
            </div>
          </div>

          <div
            className="col-lg-7 icon-boxes d-flex flex-column"
            data-aos="fade-left"
          >
            <h2 id="about-heading">Tentang Kami</h2>
            <p className="description-home" data-aos="zoom-in" data-aos-delay="100">
              <strong>PT Shinrai Vision Engineering</strong> adalah perusahaan spesialis jasa
              machining dan fabrikasi yang berkomitmen memberikan solusi manufaktur presisi
              berkualitas tinggi. Didukung mesin berteknologi tinggi dan sumber daya manusia yang
              kompeten, kami melayani pengerjaan bubut CNC, milling, custom part, hingga
              fabrication project untuk memenuhi kebutuhan industri otomotif, packaging, dan
              manufaktur lainnya di seluruh Indonesia.
            </p>

            <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
              <h3 className="title">
                <i className="fas fa-eye" aria-hidden="true"></i> Visi
              </h3>
              <p className="description">
                Menjadi perusahaan terdepan dalam segmen bisnis machining dan fabrikasi yang
                berkelanjutan, memberikan nilai tambah melalui kualitas unggul, kepuasan
                pelanggan, dan inovasi berkelanjutan.
              </p>
            </div>

            <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
              <h3 className="title">
                <i className="fa fa-bullseye" aria-hidden="true"></i> Misi
              </h3>
              <ol className="description mission-list">
                <li>Mengembangkan jasa machining dan fabrikasi berkualitas tinggi dan kompetitif yang berfokus pada kepuasan pelanggan.</li>
                <li>Memperkuat posisi perusahaan sebagai pemimpin pasar melalui efisiensi, teknologi, dan peningkatan kualitas yang konsisten.</li>
                <li>Membangun perusahaan yang terpercaya dengan profesionalisme dan etika bisnis dalam mencapai tujuan bersama.</li>
              </ol>
            </div>

            <div className="text-center text-lg-start mt-3" data-aos="zoom-in" data-aos-delay="350">
              <a
                href="/bahan/pdf/Company-Profile-Shinrai-Vision-Engineering.pdf"
                download
                className="btn-download"
                title="Download Company Profile PT Shinrai Vision Engineering - Machining and Fabrication Specialist"
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