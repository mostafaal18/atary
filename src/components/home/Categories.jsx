import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper/modules';
import { categories } from '../../data/categories';

import 'swiper/css';

function Categories() {
  return (
    <section className="relative overflow-hidden ">

      <div className="relative mx-auto max-w-[1500px] px-4 py-5 md:py-4">

        <Swiper
          modules={[FreeMode, Mousewheel]}
          dir="rtl"
          slidesPerView={3}
          spaceBetween={12}
          freeMode={{
            enabled: true,
            sticky: false,
          }}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 0.7,
          }}
          grabCursor
          breakpoints={{
            480: {
              slidesPerView: 3.5,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 4.5,
              spaceBetween: 18,
            },
            1024: {
              slidesPerView: 5.5,
              spaceBetween: 20,
            },
          }}
          className="!overflow-visible"
        >

          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <Link
                to={`/categories/${category.slug}`}
                className="group flex flex-col items-center gap-2.5"
              >

                <div className="relative aspect-square w-full max-w-28 overflow-hidden rounded-full border border-[#c69a50]/40 bg-[#14291c]/50 p-1 backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:border-[#e5bd72] group-hover:shadow-[0_0_20px_rgba(214,168,92,0.25)]">

                  <img
                    src={category.image}
                    alt={category.title}
                    loading="lazy"
                    className="h-full w-full rounded-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-1 rounded-full border border-white/10" />

                </div>

                <h3 className="text-center text-xs font-medium text-[#f5efdf] transition-colors duration-300 group-hover:text-[#e5bd72] md:text-sm">
                  {category.title}
                </h3>

              </Link>
            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  );
}

export default Categories;