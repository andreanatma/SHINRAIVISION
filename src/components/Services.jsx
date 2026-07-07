import services from '../data/services';

export default function Services() {
  return (
    <section id="service" className="service">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>What We Do</h2>
          <p>Our Services</p>
        </div>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3 justify-content-center" data-aos="fade-left">
          {services.map((service, index) => (
            <div className="col" key={service.id}>
              <div
                className="service-item"
                data-aos="zoom-in"
                data-aos-delay={100 * (index + 1)}
              >
                <div className="pic">
                  <img src={service.image} alt={service.alt} loading="lazy" />
                </div>
                <div className="service-info">
                  <h4>{service.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}