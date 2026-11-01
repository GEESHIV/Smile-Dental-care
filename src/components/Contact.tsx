import { Phone, MessageCircle, MapPin, Navigation, Map } from 'lucide-react';
import {
  CLINIC,
  buildEnquiryMessage,
  buildWhatsAppUrl,
} from '@/config/site';

export default function Contact() {
  const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
    CLINIC.mapsEmbedQuery,
  )}&output=embed`;

  return (
    <section id="contact" className="relative py-20 lg:py-28">
      <div className="container-px">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Contact Us</span>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-brand-navy-900 sm:text-4xl">
            Visit {CLINIC.name}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-navy-600">
            We are here to help you with every smile. Reach out, get directions,
            or drop by our clinic in Sector 22, Noida.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* Info card */}
          <div className="reveal flex flex-col gap-5 rounded-3xl border border-brand-navy-100 bg-white p-7 shadow-soft sm:p-8">
            <InfoRow icon={<MapPin className="h-5 w-5" />} title="Our Address">
              <p className="text-sm leading-relaxed text-brand-navy-600">
                {CLINIC.address}
              </p>
            </InfoRow>

            <InfoRow icon={<Phone className="h-5 w-5" />} title="Phone Number">
              <a
                href={`tel:${CLINIC.phoneRaw}`}
                className="text-sm font-semibold text-brand-teal-700 transition-colors hover:text-brand-teal-800"
              >
                {CLINIC.phoneDisplay}
              </a>
            </InfoRow>

            <InfoRow icon={<Map className="h-5 w-5" />} title="Google Business Profile">
              <a
                href={CLINIC.googleProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-brand-teal-700 transition-colors hover:text-brand-teal-800 hover:underline"
              >
                View on Google Maps
              </a>
            </InfoRow>

            <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <a href={`tel:${CLINIC.phoneRaw}`} className="btn-navy w-full">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <a
                href={buildWhatsAppUrl(buildEnquiryMessage('general enquiry'))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1ebe57] w-full"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={CLINIC.googleProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full"
              >
                <Navigation className="h-4 w-4" />
                Directions
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="reveal overflow-hidden rounded-3xl border-4 border-white shadow-card" data-reveal-delay={120}>
            <iframe
              title={`Map showing the location of ${CLINIC.name}`}
              src={mapsEmbed}
              className="h-full min-h-[320px] w-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-teal-50 text-brand-teal-600">
        {icon}
      </span>
      <div className="flex-1">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-navy-400">
          {title}
        </p>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}
