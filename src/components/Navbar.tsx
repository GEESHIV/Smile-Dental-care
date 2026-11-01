import { useEffect, useState } from 'react';
import { Menu, X, CalendarCheck } from 'lucide-react';
import { ToothIcon } from '@/components/ToothIcon';
import { CLINIC, NAV_LINKS } from '@/config/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex h-20 items-center justify-between">
        <a href="#home" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl gradient-teal text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
            <ToothIcon className="h-6 w-6" />
          </span>
          <span className="flex flex-col leading-tight">
            <span
              className={`font-display text-lg font-semibold tracking-tight transition-colors ${
                scrolled ? 'text-brand-navy-900' : 'text-brand-navy-900'
              }`}
            >
              {CLINIC.name}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-brand-teal-600">
              Dental Care
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm font-medium text-brand-navy-700 transition-colors hover:text-brand-teal-600"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-brand-teal-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a href="#appointment" className="btn-primary">
            <CalendarCheck className="h-4 w-4" />
            Book Appointment
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-navy-100 bg-white/70 text-brand-navy-800 backdrop-blur lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-white/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 ease-out lg:hidden ${
          open ? 'max-h-[480px] opacity-100 shadow-soft' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-px flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-brand-navy-700 transition-colors hover:bg-brand-teal-50 hover:text-brand-teal-700"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="#appointment"
              onClick={() => setOpen(false)}
              className="btn-primary w-full"
            >
              <CalendarCheck className="h-4 w-4" />
              Book Appointment
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
