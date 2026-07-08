import { useState } from 'react';

const INITIAL_FORM = { name: '', email: '', telephone: '', message: '' };
const MAPS_QUERY = encodeURIComponent(
  'PT Shinrai Vision Engineering, Jl. Raya Ciantra, Ciantra, Cikarang Selatan, Kabupaten Bekasi, Jawa Barat 17530'
);
// Tujuan Email FormSubmit.co untuk mengirimkan pesan ke email
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/marketing@shinraivision.com';

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          telephone: form.telephone,
          message: form.message,
          _subject: `Pesan Baru dari Website - ${form.name}`,
          _template: 'table',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setForm(INITIAL_FORM);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>Hubungi Kami</p>
        </div>

        <div className="row justify-content-center align-items-center">
          <div className="col-lg-12 mb-5" data-aos="zoom-in" data-aos-delay="100">
            <div className="map-box">
              {/* Diperbaiki: URL Google Maps dan penambahan simbol $ pada MAPS_QUERY */}
              <iframe
                src={`https://maps.google.com/maps?q=${MAPS_QUERY}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                title="Lokasi PT Shinrai Vision Engineering di Google Maps"
                allowFullScreen
                loading="lazy"
                style={{ width: '100%', height: '400px', border: 0 }}
              ></iframe>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 mb-5 mb-lg-0" data-aos="fade-right" data-aos-delay="100">
            <div className="info h-100">
              <div className="address mb-4">
                <div className="row">
                  <div className="col-1">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="col-11 ps-4">
                    <h4>Location:</h4>
                    <p>
                      Jalan Ciantra Gang Pelangi RT.7/RW.4, Kampung Ciantra Pojok, Cikarang
                      Selatan, Kab. Bekasi, Jawa Barat, 17853.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="phone mb-4">
                <div className="row">
                  <div className="col-1">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div className="col-11 ps-4">
                    <h4>Whatsapp:</h4>
                    <p>
                      {/* Diperbaiki: Menambahkan tag pembuka <a> */}
                      <a
                        href="https://wa.me/6288290497317"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Hubungi Bayu via WhatsApp"
                        className="text-dark"
                      >
                        0882-9049-7317 (Bayu)
                      </a>
                    </p>
                    <p>
                      {/* Diperbaiki: Menambahkan tag pembuka <a> */}
                      <a
                        href="https://wa.me/6282123077455"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Hubungi Arif via WhatsApp"
                        className="text-dark"
                      >
                        0821-2307-7455 (Arif)
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="email">
                <div className="row">
                  <div className="col-1">
                    <i className="far fa-envelope-open"></i>
                  </div>
                  <div className="col-11 ps-4">
                    <h4>Email:</h4>
                    <p>
                      {/* Diperbaiki: Menambahkan tag pembuka <a> */}
                      <a
                        href="mailto:sales1@shinraivision.com"
                        title="Email Sales PT Shinrai"
                        className="text-dark"
                      >
                        sales1@shinraivision.com
                      </a>
                    </p>
                    <p>
                      {/* Diperbaiki: Menambahkan tag pembuka <a> */}
                      <a
                        href="mailto:marketing@shinraivision.com"
                        title="Email Marketing PT Shinrai"
                        className="text-dark"
                      >
                        marketing@shinraivision.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6" data-aos="fade-left" data-aos-delay="200">
            <div className="form-box h-100">
              <div className="text-center mb-4">
                <h4 className="text-dark fw-bold">
                  <i className="fa fa-paper-plane me-2 text-primary"></i>Send Message
                </h4>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    maxLength={30}
                    required
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    required
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    name="telephone"
                    id="telephone"
                    required
                    placeholder="Telephone"
                    value={form.telephone}
                    onChange={handleChange}
                  />
                  <label htmlFor="telephone">Telephone</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Your message here"
                    name="message"
                    id="message"
                    required
                    style={{ height: '120px' }}
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>
                  <label htmlFor="message">Message</label>
                </div>
                <button type="submit" className="contact-send-btn" disabled={isSubmitting}>
                  <i className="fa fa-paper-plane" aria-hidden="true"></i>
                  {isSubmitting ? 'Mengirim...' : 'Send'}
                </button>
                {status === 'success' && (
                  <p className="text-success mt-3 mb-0 text-center">
                    Pesan berhasil dikirim ke tim kami!
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-danger mt-3 mb-0 text-center">
                    Gagal mengirim pesan, silakan coba lagi atau hubungi kami via WhatsApp.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}