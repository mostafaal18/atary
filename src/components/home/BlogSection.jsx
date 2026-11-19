import { Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays, Clock, UserRound } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper/modules';
import { blogs } from '../../data/blogs';

import 'swiper/css';

function BlogSection() {
  return (
    <section className="relative overflow-hidden border-y border-[#c69a50]/25">

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#173522]/10 via-transparent to-[#06140d]/20" />

      <div className="relative mx-auto max-w-[1500px] px-4 py-8 md:px-6 md:py-10">

        {/* عنوان سکشن */}
        <div className="mb-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#b9914d]/60" />

            <h2 className="text-base font-bold text-[#e8bd75] md:text-lg">
              آخرین مقالات
            </h2>

            <span className="h-px w-8 bg-[#b9914d]/60" />
          </div>

          <Link
            to="/blog"
            className="group inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#e5bd72] transition-colors hover:text-white md:text-xs"
          >
            مشاهده همه
            <ArrowLeft
              size={13}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
          </Link>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[FreeMode, Mousewheel]}
          dir="rtl"
          slidesPerView={1.6}
          spaceBetween={10}
          freeMode={{ enabled: true, momentum: true }}
          mousewheel={{ forceToAxis: true }}
          grabCursor
          breakpoints={{
            480: { slidesPerView: 2.2, spaceBetween: 12 },
            640: { slidesPerView: 2.8, spaceBetween: 14 },
            768: { slidesPerView: 3.2, spaceBetween: 14 },
            1024: { slidesPerView: 4, spaceBetween: 16 },
          }}
          className="!overflow-visible"
        >

          {blogs.map((post) => (
            <SwiperSlide key={post.id} className="!h-auto">

              <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-[#182e20]/60 to-[#0c1e14]/60 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#c69a50]/60 hover:shadow-[0_8px_20px_rgba(0,0,0,0.35)]">

                <Link
                  to={`/blog/${post.slug}`}
                  className="block overflow-hidden"
                  aria-label={post.title}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#203b29]/70">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                    <span className="absolute right-2 top-2 rounded-full border border-[#c69a50]/50 bg-[#071a11]/80 px-2 py-0.5 text-[9px] font-semibold text-[#e5bd72] backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </Link>

                <div className="flex flex-1 flex-col p-2.5 md:p-3">

                  <div className="mb-1.5 flex items-center gap-2.5 text-[10px] text-[#c9c2ad]">
                    <span className="inline-flex items-center gap-0.5">
                      <CalendarDays size={10} />
                      {post.date}
                    </span>

                    <span className="inline-flex items-center gap-0.5">
                      <Clock size={10} />
                      {post.readTime} دقیقه
                    </span>
                  </div>

                  <h3 className="mb-1.5 line-clamp-2 text-[11px] font-bold leading-5 text-[#f5efdf] transition-colors group-hover:text-[#e5bd72] md:text-xs">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="mb-2 line-clamp-2 text-[10px] leading-5 text-[#c9c2ad] md:text-[11px]">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-2">

                    <span className="inline-flex items-center gap-1 text-[10px] text-[#c9c2ad]">
                      <UserRound size={11} className="text-[#d6aa63]" />
                      {post.author}
                    </span>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="group/btn inline-flex items-center gap-1 text-[10px] font-semibold text-[#e5bd72] transition-colors hover:text-white"
                    >
                      بیشتر
                      <ArrowLeft
                        size={11}
                        className="transition-transform duration-300 group-hover/btn:-translate-x-1"
                      />
                    </Link>

                  </div>
                </div>

              </article>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  );
}

export default BlogSection;