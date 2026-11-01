import { CalendarCheck, ArrowRight, HeartHandshake, Smile, ShieldCheck } from 'lucide-react';
import { CLINIC } from '@/config/site';

const HIGHLIGHTS = [
  { icon: HeartHandshake, label: 'Personalized Dental Care' },
  { icon: Smile, label: 'Patient-Focused Approach' },
  { icon: ShieldCheck, label: 'Comprehensive Dental Services' },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden gradient-mesh pt-32 pb-20 sm:pt-36 lg:pt-40 lg:pb-28">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -right-20 top-24 h-72 w-72 rounded-full bg-brand-teal-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-brand-navy-200/30 blur-3xl" />

      <div className="container-px relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal text-center lg:text-left">
          <span className="section-eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-teal-500 animate-pulse-soft" />
            Sector 22 · Noida, India
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-brand-navy-900 text-balance sm:text-5xl lg:text-6xl">
            Your Smile,
            <br className="hidden sm:block" />{' '}
            <span className="bg-gradient-to-r from-brand-teal-500 to-brand-teal-700 bg-clip-text text-transparent">
              Our Priority
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-brand-navy-600 sm:text-lg lg:mx-0">
            Experience quality dental care with personalized attention and a
            comfortable approach at {CLINIC.name}.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#appointment" className="btn-primary w-full sm:w-auto">
              <CalendarCheck className="h-4 w-4" />
              Book an Appointment
            </a>
            <a href="#treatments" className="btn-outline w-full sm:w-auto">
              Explore Treatments
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
            {HIGHLIGHTS.map((h, i) => (
              <li
                key={h.label}
                className="reveal flex items-center gap-2 text-sm font-medium text-brand-navy-700"
                data-reveal-delay={i * 120}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-soft text-brand-teal-600">
                  <h.icon className="h-4.5 w-4.5" strokeWidth={2} />
                </span>
                {h.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div className="reveal relative" data-reveal-delay={150}>
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-brand-teal-400/30 to-brand-navy-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border-4 border-white shadow-card">
              <img
                src="https://images.pexels.com/photos/3881292/pexels-photo-3881292.jpeg?auto=compress&cs=tinysrgb&h=720&w=600"
                alt="Dentist providing gentle care to a patient in a modern dental clinic"
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-900/30 via-transparent to-transparent" />
            </div>

            {/* floating card */}
            <div className="absolute -left-4 bottom-8 hidden animate-float sm:block">
              <div className="glass-card flex items-center gap-3 px-4 py-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl gradient-teal text-white">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div className="text-left">
                  <p className="text-xs font-semibold text-brand-navy-900">
                    Safe & Hygienic
                  </p>
                  <p className="text-[11px] text-brand-navy-500">
                    Sterilized instruments
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 top-10 hidden animate-float sm:block" style={{ animationDelay: '1.5s' }}>
              <div className="glass-card flex items-center gap-3 px-4 py-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl gradient-navy text-white">
                  <Smile className="h-5 w-5" />
                </span>
                <div className="text-left">
                  <p className="text-xs font-semibold text-brand-navy-900">
                    Gentle Care
                  </p>
                  <p className="text-[11px] text-brand-navy-500">
                    Comfortable visits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
