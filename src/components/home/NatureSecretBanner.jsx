import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';

function NatureSecretBanner() {
  return (
    <section
      dir="rtl"
      className="relative isolate min-h-[340px] overflow-hidden md:min-h-[480px]"
    >

      <img
        src="/images/hero-herbs.png"
        alt="گیاهان دارویی و عصاره‌های طبیعی"
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-[#071a11]/20 to-[#071a11]/95" />

      <div className="mx-auto flex min-h-[240px] max-w-[1500px] items-center justify-start px-6 py-8 md:min-h-[280px] md:px-12">

        <div className="max-w-[340px] text-right ">

          <h2 className="text-2xl font-extrabold leading-relaxed text-[#f0d69e] md:text-3xl">
            راز طبیعت در هر برگ
          </h2>

          <p className="mt-4 text-xs leading-7 text-[#f5efdf]/85 md:text-sm">
            هر برگ، یک داستان از سلامت و زندگی
            <br />
            با گیاهان دارویی اصیل ایرانی
          </p>

          <Link
            to="/blog"
            className="group mt-6 inline-flex items-center gap-2 rounded-full border border-[#c69a50]/70 px-5 py-2.5 text-xs font-semibold text-[#f0d69e] transition-all duration-300 hover:bg-[#c69a50] hover:text-[#071a11]"
          >
            مطالعه بیشتر

            <ArrowLeft
              size={15}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            <BookOpen size={15} />
          </Link>

        </div>

      </div>

      {/* ❌ بردر پایین حذف شد */}

    </section>
  );
}

export default NatureSecretBanner;