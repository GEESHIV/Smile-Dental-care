import { Phone, MapPin, MessageCircle, ArrowUpRight, Heart } from 'lucide-react';
import { ToothIcon } from '@/components/ToothIcon';
import {
  CLINIC,
  NAV_LINKS,
  TREATMENTS,
  buildEnquiryMessage,
  buildWhatsAppUrl,
} from '@/config/site';

const FOOTER_SERVICES = TREATMENTS.slice(0, 6).map((t) => t.title);

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-navy-950 text-brand-navy-100">
      <div className="pointer-events-none absolute -top-20 left-1/2 h-60 w-[600px] -translate-x-1/2 rounded-full bg-brand-teal-500/10 blur-3xl" />

      <div className="container-px relative py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl gradient-teal text-white shadow-soft">
                <ToothIcon className="h-6 w-6" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-lg font-semibold text-white">
                  {CLINIC.name}
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-brand-teal-300">
                  Dental Care
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-brand-navy-200">
              Quality dental care with personalized attention and a comfortable
              approach — helping you maintain healthy, confident smiles for
              life.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-brand-navy-200 transition-colors hover:text-brand-teal-300"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Dental Services
            </h4>
            <ul className="mt-5 space-y-3">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="#treatments"
                    className="text-sm text-brand-navy-200 transition-colors hover:text-brand-teal-300"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h4>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal-300" />
                <span className="text-sm leading-relaxed text-brand-navy-200">
                  {CLINIC.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand-teal-300" />
                <a
                  href={`tel:${CLINIC.phoneRaw}`}
                  className="text-sm text-brand-navy-200 transition-colors hover:text-brand-teal-300"
                >
                  {CLINIC.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 shrink-0 text-brand-teal-300" />
                <a
                  href={buildWhatsAppUrl(buildEnquiryMessage('general enquiry'))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-navy-200 transition-colors hover:text-brand-teal-300"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
            <a
              href={CLINIC.googleProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10"
            >
              <MapPin className="h-3.5 w-3.5" />
              Google Business Profile
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-brand-navy-300">
              &copy; {new Date().getFullYear()} {CLINIC.name}. All rights reserved.
            </p>
            <p className="flex items-center gap-1.5 text-xs text-brand-navy-300">
              Crafted with <Heart className="h-3.5 w-3.5 text-brand-teal-300" /> for healthier smiles
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
