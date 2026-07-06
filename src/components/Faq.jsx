import { useState, useRef } from 'react';
import faqs from '../data/faq';

export default function Faq() {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null);
  const answerRefs = useRef({});

  function toggle(id) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="faq" aria-labelledby="faq-heading">
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2 id="faq-heading">F.A.Q</h2>
          <p>Frequently Asked Questions</p>
        </div>

        <div className="faq-list">
          {faqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div className={`faq-item ${isOpen ? 'faq-item-active' : ''}`} key={item.id}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`${item.id}-answer`}
                  id={`${item.id}-question`}
                >
                  <i className="fas fa-question-circle faq-icon" aria-hidden="true"></i>
                  <h3>{item.question}</h3>
                  <i className="fas fa-chevron-down faq-chevron" aria-hidden="true"></i>
                </button>
                <div
                  className="faq-answer"
                  id={`${item.id}-answer`}
                  role="region"
                  aria-labelledby={`${item.id}-question`}
                  ref={(el) => (answerRefs.current[item.id] = el)}
                  style={{
                    maxHeight: isOpen ? `${answerRefs.current[item.id]?.scrollHeight ?? 500}px` : '0px',
                  }}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}