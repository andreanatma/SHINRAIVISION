import { useState } from 'react';

const INITIAL_FORM = { name: '', email: '', message: '' };

export default function ContactWidget() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: hubungkan ke endpoint backend / layanan email (mis. Formspree, EmailJS, API sendiri)
    setStatus('Pesan berhasil dikirim! Kami akan segera membalas.');
    setForm(INITIAL_FORM);
  }

  return (
    <div className="contact-widget">
      {open && (
        <div className="contact-widget-panel" role="dialog" aria-label="Formulir Kontak Cepat">
          <div className="contact-widget-header">
            <button
              type="button"
              className="contact-widget-close"
              onClick={() => setOpen(false)}
              aria-label="Tutup formulir"
            >
              &times;
            </button>
            <p>Mohon isi formulir di bawah dan kami akan membalasnya sesegera mungkin.</p>
          </div>

          <div className="contact-widget-body">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="* Nama"
                required
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="* Email"
                required
                value={form.email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="* Pesan"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="contact-widget-submit">
                <i className="fas fa-paper-plane" aria-hidden="true"></i> Kirim
              </button>
              {status && <p className="contact-widget-status">{status}</p>}
            </form>
          </div>
        </div>
      )}

      <button
        type="button"
        className="contact-widget-toggle"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? 'Tutup formulir kontak' : 'Buka formulir kontak'}
        aria-expanded={open}
      >
        <i className={`fas ${open ? 'fa-chevron-down' : 'fa-comment-dots'}`} aria-hidden="true"></i>
      </button>
    </div>
  );
}