import { WHY_CHOOSE } from '@/config/site';

export default function WhyChooseUs() {
  return (
    <section id="why" className="relative overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-brand-teal-200/30 blur-3xl" />
      <div className="container-px relative">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Why Choose Us</span>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-brand-navy-900 sm:text-4xl">
            Why Choose {' '}
            <span className="bg-gradient-to-r from-brand-teal-500 to-brand-teal-700 bg-clip-text text-transparent">
              Smile Dental Care
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-navy-600">
            We are committed to making every visit comfortable, safe and
            effective — here is what sets our care apart.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map((item, i) => (
            <div
              key={item.title}
              className="reveal group relative overflow-hidden rounded-3xl border border-brand-navy-100 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-teal-200 hover:shadow-card"
              data-reveal-delay={(i % 3) * 100}
            >
              {/* hover gradient bg */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-teal-50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-teal-500 to-brand-teal-700 text-white shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <item.icon className="h-7 w-7" strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-brand-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-navy-600">
                  {item.description}
                </p>
              </div>
              <span className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-teal-100/40 blur-xl transition-all duration-500 group-hover:bg-brand-teal-200/50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
