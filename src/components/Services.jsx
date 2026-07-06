import services from '../data/services';

export default function Services() {
  return (
    <section id="service" className="service">
      <div className="container">
        <div className="section-title text-center mt-3" data-aos="fade-up">
          <h3>Our Services</h3>
        </div>
        <div className="row justify-content-center g-3" data-aos="fade-left">
          {services.map((service, index) => (
            <div className="col-lg-3 col-md-6 col-6" key={service.id}>
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
