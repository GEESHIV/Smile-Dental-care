import { ArrowUpRight, MessageCircle } from 'lucide-react';
import {
  TREATMENTS,
  buildEnquiryMessage,
  buildWhatsAppUrl,
} from '@/config/site';

export default function Treatments() {
  return (
    <section id="treatments" className="relative gradient-mesh py-20 lg:py-28">
      <div className="container-px">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Our Dental Treatments</span>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-brand-navy-900 sm:text-4xl">
            Comprehensive Care for Every Smile
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-navy-600">
            From preventive checkups to advanced restorative and cosmetic
            procedures — explore the full range of dental treatments we offer.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TREATMENTS.map((t, i) => (
            <article
              key={t.id}
              className="reveal group flex flex-col overflow-hidden rounded-3xl border border-white bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card"
              data-reveal-delay={(i % 3) * 100}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={t.image}
                  alt={t.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-900/55 via-brand-navy-900/10 to-transparent" />
                <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-brand-teal-600 shadow-soft backdrop-blur">
                  <t.icon className="h-5 w-5" strokeWidth={2.1} />
                </span>
                <h3 className="absolute bottom-3 left-4 right-4 font-display text-lg font-semibold text-white drop-shadow">
                  {t.title}
                </h3>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="flex-1 text-sm leading-relaxed text-brand-navy-600">
                  {t.description}
                </p>
                <a
                  href={buildWhatsAppUrl(buildEnquiryMessage(t.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-brand-teal-50 px-5 py-2.5 text-sm font-semibold text-brand-teal-700 transition-all duration-300 hover:bg-brand-teal-500 hover:text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  Enquire Now
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
