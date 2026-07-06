import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import testimonials from '../data/testimonials';

export default function Testimonials() {
  return (
    <section id="ourcustomer" className="testimonials" aria-labelledby="testimonials-heading">
      <img
        src="/bahan/img/bg-testimonials.jpg"
        alt="Tim PT Shinrai Vision Engineering sedang bekerja"
        className="testimonials-bg"
        loading="lazy"
        decoding="async"
      />
      <div className="testimonials-overlay"></div>

      <div className="container position-relative">
        <div className="section-title" data-aos="fade-up">
          <h2 id="testimonials-heading" className="text-white">Our Customers</h2>
          <p className="text-white">Apa Kata Klien Kami</p>
        </div>
        <div className="testimonials-slider" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay, Pagination]}
            speed={800}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ el: '.swiper-pagination', type: 'bullets', clickable: true }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="testimonial-item">
                  <img
                    src={item.image}
                    className="testimonial-img bg-white"
                    alt={item.alt}
                    title={item.name}
                    width={100}
                    height={100}
                    loading="lazy"
                    decoding="async"
                  />
                  <h3>{item.name}</h3>
                  <p>
                    <i className="fas fa-quote-left quote-icon-left" aria-hidden="true"></i>
                    {item.quote}
                    <i className="fas fa-quote-right quote-icon-right" aria-hidden="true"></i>
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}