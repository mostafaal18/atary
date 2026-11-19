import { Link } from 'react-router-dom';
import {
  Leaf,
  MapPin,
  Phone,
  Mail,
  Send,
  ArrowLeft,
} from 'lucide-react';

const quickLinks = [
  { title: 'صفحه اصلی', path: '/' },
  { title: 'دسته‌بندی محصولات', path: '/categories' },
  { title: 'درباره ما', path: '/about' },
  { title: 'تماس با ما', path: '/contact' },
];

const customerLinks = [
  { title: 'پیگیری سفارش', path: '/profile/orders' },
  { title: 'سوالات متداول', path: '/faq' },
  { title: 'شرایط بازگشت کالا', path: '/return-policy' },
  { title: 'حریم خصوصی', path: '/privacy' },
];

function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#315c37]/15 blur-[100px]" />

      <div className="relative mx-auto max-w-[1500px] px-5 pb-6 pt-14 md:px-10 md:pt-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="text-right">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b9914d]/50 bg-[#10271a] text-[#d6aa63]">
                <Leaf size={27} strokeWidth={1.5} />
              </div>

              <span className="text-2xl font-black text-[#f5efdf]">
                گیاهزار
              </span>
            </Link>

            <p className="mt-5 text-sm leading-8 text-[#aebbaa]">
              همراه شما در مسیر سلامتی و آرامش. تجربه‌ای طبیعی از عطر و طعم
              گیاهان، با انتخابی آگاهانه و کیفیتی ارزشمند.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="اینستاگرام"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#b9914d]/30 text-[#d6aa63] transition-all hover:border-[#d6aa63] hover:bg-[#b9914d]/10"
              >
                <Mail size={18} />
              </a>

              <a
                href="#"
                aria-label="تلگرام"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#b9914d]/30 text-[#d6aa63] transition-all hover:border-[#d6aa63] hover:bg-[#b9914d]/10"
              >
                <Send size={18} />
              </a>
            </div>
          </div>

          <div className="text-right">
            <h3 className="mb-6 text-base font-bold text-[#e6c17e]">
              دسترسی سریع
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="group flex items-center gap-2 text-sm text-[#aebbaa] transition-colors hover:text-[#e6c17e]"
                  >
                    <ArrowLeft
                      size={14}
                      className="text-[#b9914d] transition-transform group-hover:-translate-x-1"
                    />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-right">
            <h3 className="mb-6 text-base font-bold text-[#e6c17e]">
              خدمات مشتریان
            </h3>

            <ul className="space-y-4">
              {customerLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="group flex items-center gap-2 text-sm text-[#aebbaa] transition-colors hover:text-[#e6c17e]"
                  >
                    <ArrowLeft
                      size={14}
                      className="text-[#b9914d] transition-transform group-hover:-translate-x-1"
                    />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-right">
            <h3 className="mb-6 text-base font-bold text-[#e6c17e]">
              ارتباط با ما
            </h3>

            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-sm leading-7 text-[#aebbaa]">
                <MapPin size={19} className="mt-1 shrink-0 text-[#d6aa63]" />
                <span>آدرس فروشگاه و اطلاعات تماس</span>
              </li>

              <li className="flex items-center gap-3 text-sm text-[#aebbaa]">
                <Phone size={18} className="shrink-0 text-[#d6aa63]" />
                <span dir="ltr">۰۹۱۲۱۲۳۴۵۶۷</span>
              </li>

              <li className="flex items-center gap-3 text-sm text-[#aebbaa]">
                <Mail size={18} className="shrink-0 text-[#d6aa63]" />
                <span dir="ltr">info@giyahzar.ir</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-[#b9914d]/50 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-right">
          <p className="text-xs leading-7 text-[#899487]">
            © تمامی حقوق این وب‌سایت متعلق به گیاهزار است.
          </p>

          <p className="text-xs text-[#899487]">
            ساخته شده با عشق به طبیعت
            <span className="mx-2 text-[#d6aa63]">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;