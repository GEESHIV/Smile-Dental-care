import { CheckCircle2, HeartHandshake, Sparkles, ShieldCheck, Smile } from 'lucide-react';
import { CLINIC } from '@/config/site';

const PILLARS = [
  {
    icon: HeartHandshake,
    title: 'Compassionate Care',
    text: 'We listen first, then treat — making sure you feel understood and at ease at every step.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Hygienic',
    text: 'Rigorous sterilization and modern protocols protect you through every procedure.',
  },
  {
    icon: Sparkles,
    title: 'Modern Techniques',
    text: 'Up-to-date treatments and equipment help deliver precise, comfortable results.',
  },
];

const POINTS = [
  'Personalized treatment plans for every patient',
  'A calm, welcoming environment for all ages',
  'Honest advice and transparent guidance',
];

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28">
      <div className="container-px grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image collage */}
        <div className="reveal relative order-2 lg:order-1">
          <div className="relative grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-3xl border-4 border-white shadow-card">
              <img
                src="https://images.pexels.com/photos/8413334/pexels-photo-8413334.jpeg?auto=compress&cs=tinysrgb&h=600&w=480"
                alt="Dentist carefully treating a patient in a bright clinic"
                className="aspect-[3/4] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-10 space-y-4">
              <div className="overflow-hidden rounded-3xl border-4 border-white shadow-card">
                <img
                  src="https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&h=400&w=480"
                  alt="Modern dental office with clean, sleek design"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-3xl border-4 border-white shadow-card">
                <img
                  src="https://images.pexels.com/photos/4687416/pexels-photo-4687416.jpeg?auto=compress&cs=tinysrgb&h=400&w=480"
                  alt="Close-up of a dental impression model"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          {/* badge */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
            <div className="glass-card flex items-center gap-3 px-5 py-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl gradient-teal text-white">
                <Smile className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-brand-navy-900">
                  Healthy, Confident Smiles
                </p>
                <p className="text-xs text-brand-navy-500">Our everyday promise</p>
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="reveal order-1 lg:order-2" data-reveal-delay={120}>
          <span className="section-eyebrow">About Us</span>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-brand-navy-900 sm:text-4xl">
            Welcome to {CLINIC.name}
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-brand-navy-600">
            <p>
              At {CLINIC.name}, we believe a healthy smile is at the heart of
              overall well-being. Our practice is dedicated to providing quality
              dental care in a calm, welcoming environment where every patient
              feels heard, respected and genuinely cared for.
            </p>
            <p>
              From routine checkups to advanced treatments, we focus on
              personalized attention and a comfortable approach — helping you
              and your family maintain healthy, confident smiles for life. We
              combine modern techniques with a gentle touch, so every visit is
              as stress-free as it is effective.
            </p>
          </div>

          <ul className="mt-7 space-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal-500" />
                <span className="text-sm font-medium text-brand-navy-700">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {PILLARS.map((pillar, i) => (
              <div
                key={pillar.title}
                className="reveal rounded-2xl border border-brand-navy-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                data-reveal-delay={i * 100}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-teal-50 text-brand-teal-600">
                  <pillar.icon className="h-5 w-5" />
                </span>
                <p className="mt-3 text-sm font-semibold text-brand-navy-900">
                  {pillar.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-brand-navy-500">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
