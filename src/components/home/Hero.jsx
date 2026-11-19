
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  EffectFade,
} from 'swiper/modules';
import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    image: '/images/hero-main.png',
    title: 'بازگشت به',
    subtitle: 'ریشه‌های طبیعت',
    description: 'طبیعت، هزاران سال تجربه در هر محصول',
    button: 'کشف دنیای گیاهان',
    link: '/categories',
  },
  {
    id: 2,
    image: '/images/hero-nature.png',
    title: 'قدرت',
    subtitle: 'طبیعت',
    description: 'از دل طبیعت، برای سلامتی و آرامش شما',
    button: 'بیشتر بدانید',
    link: '/about',
  },
  {
    id: 3,
    image: '/images/hero-tea.png',
    title: 'دمنوش گیاهی',
    subtitle: 'آرامش در هر جرعه',
    description: 'طعم سلامتی، از دل طبیعت',
    button: 'مشاهده دمنوش‌ها',
    link: '/categories',
  },
  {
    id: 4,
    image: '/images/hero-herbs.png',
    title: 'راز طبیعت',
    subtitle: 'در هر برگ',
    description: 'یک داستان از سلامتی و زندگی با گیاهان دارویی',
    button: 'مطالعه بیشتر',
    link: '/blog',
  },
  {
    id: 5,
    image: '/images/hero-greenhouse.png',
    title: 'گیاهزار',
    subtitle: 'همراه شما در مسیر سلامتی',
    description: 'از دل گلخانه تا خانه شما',
    button: 'درباره ما',
    link: '/about',
  },
];

function Hero() {
  const [swiper, setSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="relative h-[560px] min-h-[500px] w-full overflow-hidden md:h-[680px]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={1000}
        onSwiper={setSwiper}
        onSlideChange={(instance) => setActiveSlide(instance.realIndex)}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full overflow-hidden">

              <img
                src={slide.image}
                alt={`${slide.title} ${slide.subtitle}`}
                fetchPriority={index === 0 ? 'high' : 'auto'}
                loading={index === 0 ? 'eager' : 'lazy'}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-l from-primary-dark/90 via-primary-dark/50 to-transparent" />

              <div className="absolute inset-0 flex items-center">
                <div className="container relative z-10 mx-auto w-full px-6 md:px-12 lg:px-[10%]">

                  <div className="max-w-[470px] text-right">

                    <div className="mb-5 flex items-center gap-3 text-xs text-[#d9cba9] md:text-sm">
                      <span className="h-px w-6 bg-secondary" />
                      زندگی در هماهنگی با طبیعت
                      <span className="h-px w-6 bg-secondary" />
                    </div>

                    <h1 className="flex flex-col gap-1 text-4xl leading-[1.5] font-extrabold text-secondary-light md:text-5xl lg:text-6xl">
                      {slide.title}
                      <span className="text-text">
                        {slide.subtitle}
                      </span>
                    </h1>

                    <p className="mt-5 text-sm leading-8 text-text/90 md:text-base">
                      {slide.description}
                    </p>

                    <Link
                      to={slide.link}
                      className="mt-7 inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-bold text-primary-dark shadow-lg shadow-secondary/20 transition-all duration-300 hover:-translate-y-1 hover:bg-secondary-light"
                    >
                      {slide.button}
                      <ChevronLeft size={19} />
                    </Link>

                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-7 left-6 z-20 flex items-center gap-3 md:bottom-11 md:left-[5%]">

        <button
          onClick={() => swiper?.slidePrev()}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-secondary text-secondary transition-all duration-300 hover:bg-secondary hover:text-primary-dark md:h-11 md:w-11"
          aria-label="اسلاید قبلی"
        >
          <ChevronRight size={21} />
        </button>

        <button
          onClick={() => swiper?.slideNext()}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-secondary text-secondary transition-all duration-300 hover:bg-secondary hover:text-primary-dark md:h-11 md:w-11"
          aria-label="اسلاید بعدی"
        >
          <ChevronLeft size={21} />
        </button>

      </div>

      <div className="absolute top-1/2 left-5 z-20 flex -translate-y-1/2 flex-col items-center gap-3 md:left-8">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => swiper?.slideToLoop(index)}
            aria-label={`رفتن به اسلاید ${index + 1}`}
            className={`rounded-full transition-all duration-500 ${
              activeSlide === index
                ? 'h-7 w-2.5 bg-secondary'
                : 'h-2.5 w-2.5 bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
