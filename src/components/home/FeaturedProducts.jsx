import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, ShoppingCart, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper/modules';
import { products } from '../../data/products';

import 'swiper/css';

function FeaturedProducts() {
  return (
    <section className="relative isolate overflow-hidden ">

      {/* لایه‌ی گرادیان فقط برای خوانایی متن‌ها؛ خیلی شفاف */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-l from-[#071a11]/50 via-[#071a11]/20 to-transparent" />

      {/* اورلی موبایل: خیلی ملایم تا بک‌گراند دیده بشه */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#071a11]/20 lg:hidden" />

      <div className="relative mx-auto grid max-w-[1500px] grid-cols-1 lg:grid-cols-[2fr_1fr]">

        <div className="order-1 min-w-0 px-4 py-8 md:px-6 lg:py-10">

          <div className="mb-6 flex items-center justify-center gap-3 lg:justify-start">
            <span className="h-px w-10 bg-[#b9914d]/60" />

            <h2 className="text-lg font-bold text-[#e8bd75] md:text-xl">
              محصولات برگزیده
            </h2>

            <span className="h-px w-10 bg-[#b9914d]/60" />
          </div>

          <Swiper
            modules={[FreeMode, Mousewheel]}
            dir="rtl"
            slidesPerView={2}
            spaceBetween={12}
            freeMode={{
              enabled: true,
              momentum: true,
            }}
            mousewheel={{
              forceToAxis: true,
            }}
            grabCursor
            breakpoints={{
              480: {
                slidesPerView: 2.5,
                spaceBetween: 14,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
            }}
            className="!overflow-visible"
          >

            {products.map((product) => (
              <SwiperSlide key={product.id} className="!h-auto">

                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#182e20]/60 to-[#0c1e14]/60 p-2.5 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#c69a50]/60 hover:shadow-[0_8px_25px_rgba(0,0,0,0.3)] md:p-3">

                  <Link to={`/products/${product.slug}`} className="block">

                    <div className="relative aspect-square overflow-hidden rounded-xl bg-[#203b29]/70">
                      <img
                        src={product.image}
                        alt={product.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    <h3 className="mt-3 truncate text-center text-xs font-bold text-[#f5efdf] transition-colors group-hover:text-[#e5bd72] md:text-sm">
                      {product.title}
                    </h3>

                  </Link>

                  <div className="mt-2 flex items-center justify-center gap-1 text-xs text-[#e5bd72]">
                    <Star size={13} fill="currentColor" />
                    <span>{product.rating}</span>
                  </div>

                  <p className="mt-2 text-center text-xs font-semibold text-white md:text-sm">
                    {product.price.toLocaleString('fa-IR')}
                    <span className="mr-1 text-[10px] font-normal text-white/60">
                      تومان
                    </span>
                  </p>

                  <button
                    type="button"
                    className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#d3a65c] to-[#e8bd75] px-2 py-2 text-[10px] font-bold text-[#172315] transition-all duration-300 hover:brightness-110 md:text-xs"
                  >
                    <ShoppingCart size={13} />
                    افزودن به سبد
                    <Plus size={13} />
                  </button>

                </div>

              </SwiperSlide>
            ))}

          </Swiper>

        </div>

        <div className="order-2 hidden flex-col justify-center px-7 py-12 text-right md:flex md:px-12 lg:px-8">

          <span className="mb-3 text-xs font-medium tracking-widest text-[#d6aa63]">
            GIAHYAR
          </span>

          <h2 className="text-4xl font-extrabold leading-tight text-[#e8c783] drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] md:text-5xl">
            قدرت
            <br />
            طبیعت
          </h2>

          <p className="mt-5 max-w-[250px] text-xs leading-7 text-[#f5efdf]/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)] md:text-sm">
            راز دل طبیعت، برای سلامتی و آرامش شما
            <br />
            با عشق و اصالت ایرانی
          </p>

          <Link
            to="/about"
            className="mt-6 inline-flex w-fit items-center gap-2 text-xs font-semibold text-[#e5bd72] transition-colors hover:text-white"
          >
            بیشتر بدانید

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#d6aa63]/70">
              <ArrowLeft size={15} />
            </span>
          </Link>

        </div>

      </div>

    </section>
  );
}

export default FeaturedProducts;