export default function Footer() {
  const year = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer id="footer">
      <div className="container">
        <div className="row footer-top gy-4">
          
          {/* 1. Brand Section */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-brand">
              <h3>PT. Shinrai Vision Engineering</h3>
              <p>
                PT Shinrai Vision Engineering adalah perusahaan Jasa terbaik di Cikarang, Jawa
                Barat yang sudah memiliki pengalaman pada bidang Jasa Machining &amp; Fabrication.
                Jangan ragu untuk menghubungi tim kami perihal Fabrikasi dan Machining.
              </p>
            </div>
          </div>

          {/* 2. Navigation Section */}
          <div className="col-lg-2 col-md-6">
            <h4>Useful Links</h4>
            {/* SEO: Gunakan tag <nav> agar mesin pencari tahu ini adalah area navigasi pendukung */}
            <nav aria-label="Footer Navigation">
              <ul className="footer-links">
                <li>
                  <i className="bi bi-chevron-right" aria-hidden="true"></i>
                  <a href="#hero" title="Kembali ke Beranda">Home</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right" aria-hidden="true"></i>
                  <a href="#gallery" title="Lihat Galeri PT Shinrai">Gallery</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right" aria-hidden="true"></i>
                  <a href="#article" title="Baca Artikel Kami">Articles</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right" aria-hidden="true"></i>
                  <a href="#faq" title="Pertanyaan yang Sering Diajukan">FAQ</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* 3. Contact Section */}
          <div className="col-lg-3 col-md-6">
            <h4>Contact</h4>
            {/* SEO: Gunakan tag <address> untuk membungkus informasi kontak entitas bisnis */}
            <address style={{ fontStyle: 'normal' }}>
              <ul className="footer-contact">
                <li>
                  <i className="fab fa-whatsapp" aria-hidden="true"></i>
                  <a href="https://wa.me/6288290497317" target="_blank" rel="noopener noreferrer" title="Hubungi kami via WhatsApp">
                    0882-9049-7317
                  </a>
                </li>
                <li>
                  <i className="fas fa-phone-alt" aria-hidden="true"></i>
                  <a href="tel:+6288290497317" title="Telepon PT Shinrai">
                    0882-9049-7317
                  </a>
                </li>
                <li>
                  <i className="far fa-envelope" aria-hidden="true"></i>
                  <a href="mailto:Sales1@shinraivision.com" title="Kirim Email ke Sales">
                    Sales1@shinraivision.com
                  </a>
                </li>
              </ul>
            </address>
          </div>

          {/* 4. Social Media Section */}
          <div className="col-lg-3 col-md-6">
            <h4>Our Social Media</h4>
            <ul className="footer-social">
              <li>
                <i className="fab fa-facebook-square" aria-hidden="true"></i>
                {/* SEO: Hindari href="#" karena Google menganggapnya sebagai "Broken Link". Ganti dengan URL asli nantinya. */}
                <a href="https://facebook.com/shinraivision" target="_blank" rel="noopener noreferrer" title="Kunjungi Facebook PT Shinrai Vision Engineering">
                  Facebook
                </a>
              </li>
              <li>
                <i className="fab fa-instagram-square" aria-hidden="true"></i>
                <a href="https://instagram.com/shinraivision" target="_blank" rel="noopener noreferrer" title="Kunjungi Instagram PT Shinrai Vision Engineering">
                  Instagram
                </a>
              </li>
              <li>
                <i className="fab fa-linkedin" aria-hidden="true"></i>
                <a href="https://linkedin.com/company/shinraivision" target="_blank" rel="noopener noreferrer" title="Kunjungi LinkedIn PT Shinrai Vision Engineering">
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          © Copyright {year} <strong><span>PT Shinrai Vision Engineering</span></strong>. All
          Rights Reserved.
        </div>
      </div>

      <button
        type="button"
        className="back-to-top"
        onClick={scrollToTop}
        aria-label="Kembali ke atas halaman"
        title="Kembali ke atas halaman"
      >
        <i className="fas fa-arrow-up" aria-hidden="true"></i>
      </button>
    </footer>
  );
}