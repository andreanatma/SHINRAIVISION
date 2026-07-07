import { useState } from 'react';

const INITIAL_FORM = { name: '', email: '', message: '' };

// Tujuan Email FormSubmit.co untuk mengirimkan pesan ke email
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/marketing@shinraivision.com';

export default function ContactWidget() {
  const [open, setOpen] = useState(false);
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
          message: form.message,
          _subject: `Pesan Cepat dari Website - ${form.name}`,
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
              <button type="submit" className="contact-widget-submit" disabled={isSubmitting}>
                <i className="fas fa-paper-plane" aria-hidden="true"></i>
                {isSubmitting ? ' Mengirim...' : ' Kirim'}
              </button>
              {status === 'success' && (
                <p className="contact-widget-status">
                  Pesan berhasil dikirim! Kami akan segera membalas.
                </p>
              )}
              {status === 'error' && (
                <p className="contact-widget-status contact-widget-status-error">
                  Gagal mengirim pesan, silakan coba lagi.
                </p>
              )}
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