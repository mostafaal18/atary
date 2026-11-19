import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Search,
  ShoppingCart,
  UserRound,
  Menu,
  X,
  Leaf,
} from 'lucide-react';

const navItems = [
  { title: 'صفحه اصلی', path: '/' },
  { title: 'دسته‌بندی‌ها', path: '/categories' },
  { title: 'درباره ما', path: '/about' },
  { title: 'وبلاگ', path: '/blog' },
  { title: 'تماس با ما', path: '/contact' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
<header className="sticky top-3 z-50 -mb-16 w-full px-4 md:px-[5%]">
        <div className="relative mx-auto flex min-h-16 max-w-[1450px] items-center justify-between rounded-full border border-white/15 bg-primary-dark/30 px-4 py-2 shadow-lg backdrop-blur-xl md:px-6">

        <Link
          to="/"
          className="flex shrink-0 items-center gap-1.5 text-2xl font-extrabold text-secondary-light"
        >
          <Leaf size={30} className="text-[#8ba84c]" />
          <span>گیاهزار</span>
        </Link>

        <nav
          className={`
            fixed top-0 z-[60] flex h-dvh w-[280px] flex-col items-stretch gap-3
            bg-primary-dark p-6 shadow-2xl transition-all duration-300
            md:static md:h-auto md:w-auto md:flex-row md:items-center
            md:gap-7 md:bg-transparent md:p-0 md:shadow-none
            ${isMenuOpen ? 'right-0' : '-right-[300px]'}
          `}
        >
          <div className="mb-6 flex items-center gap-2 text-xl font-bold text-secondary-light md:hidden">
            <Leaf size={25} />
            گیاهزار
          </div>

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `border-b border-white/10 py-3 text-sm transition-colors duration-300 md:border-0 md:py-2 ${
                  isActive
                    ? 'text-secondary-light md:after:mt-2 md:after:block md:after:h-0.5 md:after:w-full md:after:bg-secondary'
                    : 'text-text hover:text-secondary-light'
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3 md:gap-5">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-text transition-colors hover:text-secondary-light"
            aria-label="جستجو"
          >
            <Search size={21} />
          </button>

          <Link
            to="/account"
            className="text-text transition-colors hover:text-secondary-light"
            aria-label="حساب کاربری"
          >
            <UserRound size={21} />
          </Link>

          <Link
            to="/cart"
            className="relative text-text transition-colors hover:text-secondary-light"
            aria-label="سبد خرید"
          >
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-secondary px-1 text-[10px] font-bold text-primary-dark">
              ۰
            </span>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-text transition-colors hover:text-secondary-light md:hidden"
            aria-label="منوی اصلی"
          >
            {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {isSearchOpen && (
          <form
            onSubmit={(e) => e.preventDefault()}
            className="absolute top-[75px] left-2 flex w-[min(350px,calc(100vw-32px))] items-center gap-2 rounded-2xl border border-secondary/30 bg-primary p-3 shadow-2xl"
          >
            <input
              type="search"
              placeholder="جستجو در محصولات..."
              autoFocus
              className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-text outline-none placeholder:text-text-muted"
            />

            <button
              type="submit"
              className="text-secondary transition-colors hover:text-secondary-light"
              aria-label="جستجو"
            >
              <Search size={20} />
            </button>
          </form>
        )}
      </div>

      {isMenuOpen && (
        <button
          onClick={() => setIsMenuOpen(false)}
          aria-label="بستن منو"
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
        />
      )}
    </header>
  );
}

export default Header;