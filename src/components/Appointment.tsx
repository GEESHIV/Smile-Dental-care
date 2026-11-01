import { useState, type FormEvent } from 'react';
import { CalendarCheck, User, Phone, Stethoscope, CalendarDays, MessageSquare, Send } from 'lucide-react';
import {
  TREATMENTS,
  buildAppointmentMessage,
  buildWhatsAppUrl,
} from '@/config/site';

const initialForm = {
  name: '',
  phone: '',
  treatment: '',
  date: '',
  message: '',
};

export default function Appointment() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(): boolean {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = 'Please enter your full name.';
    if (!/^[0-9+\s-]{8,15}$/.test(form.phone.trim()))
      next.phone = 'Please enter a valid mobile number.';
    if (!form.treatment) next.treatment = 'Please select a treatment.';
    if (!form.date) next.date = 'Please choose a preferred date.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    const url = buildWhatsAppUrl(
      buildAppointmentMessage({
        name: form.name.trim(),
        phone: form.phone.trim(),
        treatment: form.treatment,
        date: form.date,
        message: form.message.trim(),
      }),
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  function update(field: keyof typeof initialForm, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: '' }));
  }

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="appointment" className="relative overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 gradient-navy opacity-95" />
      <div className="pointer-events-none absolute -right-20 -top-10 h-72 w-72 rounded-full bg-brand-teal-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-brand-teal-400/10 blur-3xl" />

      <div className="container-px relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="reveal text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal-200 backdrop-blur">
            Appointment
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Book Your Dental Appointment
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-brand-navy-100 lg:mx-0">
            Fill in your details and send your request straight to our clinic on
            WhatsApp. Our team will get back to you to confirm your visit.
          </p>

          <ul className="mt-8 flex flex-col gap-3 text-left">
            {[
              'Quick confirmation on WhatsApp',
              'Choose your preferred date and treatment',
              'Friendly support before your visit',
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm text-brand-navy-100">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-teal-400/20 text-brand-teal-200">
                  <CalendarCheck className="h-3.5 w-3.5" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          className="reveal glass-card relative space-y-5 p-6 sm:p-8"
          data-reveal-delay={120}
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Full Name"
              icon={<User className="h-4 w-4" />}
              error={errors.name}
            >
              <input
                type="text"
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                placeholder="Your full name"
                className="form-input"
              />
            </Field>

            <Field
              label="Mobile Number"
              icon={<Phone className="h-4 w-4" />}
              error={errors.phone}
            >
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => update('phone', e.target.value)}
                placeholder="e.g. 9876543210"
                className="form-input"
              />
            </Field>

            <Field
              label="Select Treatment"
              icon={<Stethoscope className="h-4 w-4" />}
              error={errors.treatment}
            >
              <select
                value={form.treatment}
                onChange={(e) => update('treatment', e.target.value)}
                className="form-input"
              >
                <option value="">Choose a treatment</option>
                {TREATMENTS.map((t) => (
                  <option key={t.id} value={t.title}>
                    {t.title}
                  </option>
                ))}
              </select>
            </Field>

            <Field
              label="Preferred Appointment Date"
              icon={<CalendarDays className="h-4 w-4" />}
              error={errors.date}
            >
              <input
                type="date"
                min={today}
                value={form.date}
                onChange={(e) => update('date', e.target.value)}
                className="form-input"
              />
            </Field>
          </div>

          <Field
            label="Message (optional)"
            icon={<MessageSquare className="h-4 w-4" />}
          >
            <textarea
              value={form.message}
              onChange={(e) => update('message', e.target.value)}
              placeholder="Tell us about your concern or any preferred time slot"
              rows={3}
              className="form-input resize-none"
            />
          </Field>

          <button type="submit" className="btn-primary w-full text-base">
            <Send className="h-4 w-4" />
            Book Appointment on WhatsApp
          </button>
          <p className="text-center text-xs text-brand-navy-500">
            You will be redirected to WhatsApp with your details pre-filled.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  icon,
  error,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-brand-navy-700">
        <span className="text-brand-teal-600">{icon}</span>
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}
