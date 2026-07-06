export default function About() {
  return (
    <section id="about" className="about">
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 d-flex justify-content-center align-items-stretch"
            data-aos="fade-right"
          >
            <img
              src="/bahan/img/Logo.png"
              className="img-fluid w-75 rounded"
              alt="Profil Perusahaan PT Shinrai Vision Engineering Machining Cikarang"
            />
          </div>

          <div
            className="col-xl-6 col-lg-6 icon-boxes d-flex flex-column py-3 px-4"
            data-aos="fade-left"
          >
            <h2>Tentang Kami</h2>
            <p className="description-home" data-aos="zoom-in" data-aos-delay="100">
              <strong>PT Shinrai Vision Engineering</strong> adalah perusahaan yang bergerak di
              bidang Machining dan Fabrication, berkomitmen untuk memberikan solusi manufaktur
              berkualitas tinggi dan presisi. Kami menyediakan layanan customize part serta
              pengerjaan fabrication project untuk memenuhi kebutuhan spesifik industri klien.
            </p>

            <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
              <h4 className="title">
                <i className="fas fa-eye"></i> Visi
              </h4>
              <p className="description">
                Menjadi mitra manufaktur yang terpercaya dan inovatif dalam memberikan solusi
                teknik yang presisi dan tepat waktu.
              </p>
            </div>

            <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
              <h4 className="title">
                <i className="fa fa-bullseye"></i> Misi
              </h4>
              <p className="description">
                1. Mengutamakan kualitas pengerjaan.
                <br />
                2. Berinovasi dalam teknologi manufaktur.
                <br />
                3. Membangun kemitraan jangka panjang dengan integritas.
              </p>
            </div>

            <div className="text-center text-lg-start mt-3" data-aos="zoom-in" data-aos-delay="350">
              <a
                href="/bahan/pdf/Company-Profile-Shinrai-Vision-Engineering.pdf"
                download
                className="btn-download"
                title="Download Company Profile PT Shinrai Vision"
              >
                <i className="fas fa-download"></i> Download Company Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
