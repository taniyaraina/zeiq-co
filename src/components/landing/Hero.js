/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper';
import Image from 'next/image';

const heroSlider = [
  {
    image: '/images/landing/ecommerce1.png',
    alt: 'Ecommerce Zeiq',
  },
  {
    image: '/images/landing/ecommerce2.png',
    alt: 'Ecommerce Zeiq',
  },
  {
    image: '/images/landing/ecommerce3.png',
    alt: 'E-commerce Zeiq',
  },
];

const PageHero = () => (
  <section className="mt-5 pt-3">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-md-6">
          <div className="about-me-slider">
            <div className="pr-0 pr-lg-3 is-hero-fade">
              <div className="swiper-slider">
                <Swiper
                  modules={[EffectFade, Autoplay]}
                  effect="fade"
                  loop
                  autoplay
                >
                  {heroSlider.map((item) => {
                    if (!item?.image) return null;
                    return (
                      <SwiperSlide key={item.image}>
                        <Image
                          height={1786}
                          width={1455}
                          layout="intrinsic"
                          className="img-fluid slider-item"
                          src={item.image}
                          alt={item.alt}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 d-flex flex-column align-self-center">
          <div className="pl-0 pl-lg-4">
            <div className="about-me-block text-white">
              <h2 className="text-white font-weight-500 ">
                Start Selling  <br /> Your Business Online.
              </h2>
              <p className="mb-3 font-weight-500 text-light">
                Grow Your Ecommerce Sales Quicker, Smarter &amp; Further
              </p>

              <div className="mt-4">
                <p>
                  Take the next step for Your Business with an online shop where you can easily manage products and orders and take payments securely.
                </p>
              </div>
            </div>

            {/* <div className="about-me-block">
              <h2 className="h4 about-me-title text-underline text-white font-weight-light font-italic text-monospace">
                Main expertise:
              </h2>
              <div className="row text-white">
                <div className="col-sm-6">
                  <p className="h5 mt-0 font-weight-light mb-3 has-anim ">
                    <span className="text-muted">–</span>&nbsp; UI/UX Design
                  </p>
                  <p className="h5 mt-0 font-weight-light mb-3 has-anim  anim-delay-1">
                    <span className="text-muted">–</span>&nbsp; Branding
                  </p>
                  <p className="h5 mt-0 font-weight-light mb-3 has-anim  anim-delay-2">
                    <span className="text-muted">–</span>&nbsp; Identity
                  </p>
                  <p className="h5 mt-0 font-weight-light mb-3 has-anim  anim-delay-3">
                    <span className="text-muted">–</span>&nbsp; Animation
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="h5 mt-0 font-weight-light mb-3 has-anim ">
                    <span className="text-muted">–</span>&nbsp; Art Direction
                  </p>
                  <p className="h5 mt-0 font-weight-light mb-3 has-anim  anim-delay-1">
                    <span className="text-muted">–</span>&nbsp; Illustration
                  </p>
                </div>
              </div>
            </div> */}

            {/* <div className="about-me-block">
              <h2 className="h4 about-me-title text-underline text-white font-weight-light font-italic text-monospace has-anim ">
                Work experiances:
              </h2>
              <div className="row">
                <div className="col-lg-10 mb-3">
                  <div className="mb-4 has-anim ">
                    <p className="h5 font-weight-light text-white mb-2">
                      Art Direction{' '}
                      <span
                        className="font-italic small font-weight-600"
                        style={{
                          opacity: '.6',
                        }}
                      >
                        (2020 – present)
                      </span>
                    </p>
                    <p className="text-light">
                      Aolestiae voluptates placeat at, ex exercitationem tenetur
                      deserunt molestias quaerat libero voluptate reprehenderit
                      dolorum!
                    </p>
                  </div>
                  <div className="mb-4 has-anim  anim-delay-1">
                    <p className="h5 font-weight-light text-white mb-2">
                      UI/UX Design{' '}
                      <span
                        className="font-italic small font-weight-600"
                        style={{
                          opacity: '.6',
                        }}
                      >
                        (2018 – 2020)
                      </span>
                    </p>
                    <p className="text-light">
                      Voluptatum animi rem saepe ab delectus perspiciatis sunt
                      quasi temporibus tenetur consectetur distinctio beatae
                      earum quibusdam excepturi!
                    </p>
                  </div>
                  <div className="has-anim  anim-delay-2">
                    <p className="h5 font-weight-light text-white mb-2">
                      Junior UI/UX Design{' '}
                      <span
                        className="font-italic small font-weight-600"
                        style={{
                          opacity: '.6',
                        }}
                      >
                        (2017 – 2018)
                      </span>
                    </p>
                    <p className="text-light">
                      Reiciendis optio velit culpa voluptatibus voluptatem
                      minima quam, placeat aspernatur. Ex dolorum dolorem aut.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PageHero;
