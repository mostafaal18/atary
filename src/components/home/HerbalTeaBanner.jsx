import { Link } from 'react-router-dom';
import { ArrowLeft, CircleArrowLeft } from 'lucide-react';

function HerbalTeaBanner() {
  return (
    <section
      dir="rtl"
      className="relative isolate min-h-[330px] overflow-hidden md:min-h-[400px]"
    >

      <img
        src="/images/hero-tea.png"
        alt="دمنوش گیاهی"
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-[#071a11]/15 to-[#071a11]/90" />

      <div className="mx-auto flex min-h-[230px] max-w-[1500px] items-center justify-start px-6 py-8 md:min-h-[260px] md:px-12">

        <div className="max-w-[330px] text-right">

          <h2 className="text-2xl font-extrabold leading-relaxed text-[#f0d69e] md:text-3xl">
            دمنوش گیاهی
            <br />
            آرامش در هر جرعه
          </h2>

          <p className="mt-3 text-xs leading-7 text-[#f5efdf]/85 md:text-sm">
            طعم سلامتی، از دل طبیعت
          </p>

          <div className="mt-5 flex items-center justify-start gap-3">

            <span className="h-px w-12 bg-[#b9914d]/50" />

            <Link
              to="/categories/herbal-tea"
              className="group inline-flex items-center gap-2 text-xs font-medium text-[#f0d69e] transition-colors hover:text-white"
            >
              مشاهده دمنوش‌ها

              <CircleArrowLeft
                size={21}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            </Link>

          </div>

        </div>

      </div>

      {/* ❌ بردر پایین حذف شد */}

    </section>
  );
}

export default HerbalTeaBanner;