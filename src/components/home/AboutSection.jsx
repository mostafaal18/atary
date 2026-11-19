import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function AboutSection() {
  return (
    <section className="relative isolate overflow-hidden ">

      {/* تصویر پس‌زمینه */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-greenhouse.png')" }}
      />

      {/* گرادینت برای خوانایی متن (از راست تیره، به چپ شفاف) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-l from-[#06150d]/95 via-[#06150d]/70 to-[#06150d]/10" />

      {/* روی موبایل کل تصویر کمی تیره‌تر شود */}
      <div className="absolute inset-0 -z-10 bg-[#06150d]/30 md:hidden" />

      <div className="relative mx-auto grid max-w-[1500px] grid-cols-1 items-center px-5 py-20 md:grid-cols-2 md:px-10 md:py-28">

        {/* ستون اول در RTL سمت راست قرار می‌گیرد */}
        <div className="text-right">

          <div className="mb-5 flex items-center justify-start gap-3">
            <span className="h-px w-10 bg-[#d6aa63]" />
            <span className="text-xs font-medium tracking-wider text-[#d6aa63]">
              داستان ما
            </span>
          </div>

          <h2 className="text-3xl font-black leading-relaxed text-[#f5efdf] md:text-4xl">
            درباره <span className="text-[#d6aa63]">گیاهزار</span>
          </h2>

          <h3 className="mt-3 text-lg font-semibold leading-8 text-[#d7c9a9] md:text-xl">
            همراه شما در مسیر سلامتی و آرامش
          </h3>

          <p className="mt-6 max-w-xl text-sm leading-9 text-[#d3dacf] md:text-base">
            در گیاهزار، طبیعت را با عشق و دقت به زندگی روزمره شما می‌آوریم.
            ما باور داریم که محصولات گیاهی باکیفیت، حاصل احترام به طبیعت،
            انتخاب آگاهانه و توجه به جزئیات هستند.
          </p>

          <p className="mt-3 max-w-xl text-sm leading-9 text-[#d3dacf] md:text-base">
            هدف ما فراهم کردن تجربه‌ای دلنشین از خرید محصولات طبیعی و گیاهی
            است؛ تا بتوانید با اطمینان، عطر و طعم طبیعت را به خانه خود ببرید.
          </p>

          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-3 rounded-full border border-[#b9914d]/60 bg-[#06150d]/30 px-6 py-3 text-sm font-bold text-[#e6c17e] backdrop-blur-sm transition-all duration-300 hover:border-[#e6c17e] hover:bg-[#b9914d]/15"
          >
            بیشتر درباره ما
            <ArrowLeft
              size={17}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
          </Link>

        </div>

        {/* ستون دوم خالی می‌ماند تا تصویر دیده شود */}
        <div className="hidden md:block" />

      </div>
    </section>
  );
}

export default AboutSection;