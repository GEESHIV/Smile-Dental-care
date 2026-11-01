import {
  Brush,
  Shield,
  Sparkles,
  Stethoscope,
  Smile,
  Activity,
  Wrench,
  Crown,
  HeartHandshake,
  Scissors,
} from 'lucide-react';

export const CLINIC = {
  name: 'Smile Dental Care',
  phoneDisplay: '+91 9968574694',
  phoneRaw: '+919968574694',
  whatsappRaw: '919968574694',
  address:
    'ESI Road, Near Dharam Public School and R S Jewellers, Village Choura, Chaura Raghunathpur, Raghunathpur, Sector 22, Noida, Uttar Pradesh 201307.',
  addressShort: 'Sector 22, Noida, Uttar Pradesh 201307',
  googleProfile: 'https://maps.app.goo.gl/DnwhvTsYsiAHdExZ8',
  mapsEmbedQuery:
    'Smile Dental Care, ESI Road, Sector 22, Noida, Uttar Pradesh 201307',
  tagline: 'Your Smile, Our Priority',
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Why Choose Us', href: '#why' },
  { label: 'Contact', href: '#contact' },
];

export type Treatment = {
  id: string;
  title: string;
  description: string;
  icon: typeof Smile;
  image: string;
};

export const TREATMENTS: Treatment[] = [
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    description:
      'Permanent, natural-looking replacements for missing teeth that restore full chewing function and confidence.',
    icon: Activity,
    image:
      'https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    id: 'root-canal',
    title: 'Root Canal Treatment',
    description:
      'Painless, precision treatment to save damaged or infected teeth while relieving pain and preserving your natural smile.',
    icon: Stethoscope,
    image:
      'https://images.pexels.com/photos/6682979/pexels-photo-6682979.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    description:
      'Professional whitening that safely brightens your smile by several shades in a single, comfortable session.',
    icon: Sparkles,
    image:
      'https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    id: 'braces-orthodontics',
    title: 'Braces & Orthodontics',
    description:
      'Modern braces and aligners that gently straighten teeth and correct bites for a balanced, confident smile.',
    icon: Smile,
    image:
      'https://images.pexels.com/photos/6682768/pexels-photo-6682768.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    id: 'cleaning-scaling',
    title: 'Teeth Cleaning & Scaling',
    description:
      'Thorough scaling and polishing that removes plaque and tartar, keeping your gums healthy and breath fresh.',
    icon: Brush,
    image:
      'https://images.pexels.com/photos/6682735/pexels-photo-6682735.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    id: 'crowns-bridges',
    title: 'Dental Crowns & Bridges',
    description:
      'Custom crowns and bridges that rebuild damaged or missing teeth with strength and a natural appearance.',
    icon: Crown,
    image:
      'https://images.pexels.com/photos/6682914/pexels-photo-6682914.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    id: 'tooth-extraction',
    title: 'Tooth Extraction',
    description:
      'Carefully performed extractions, including wisdom teeth, with gentle techniques for a smooth recovery.',
    icon: Wrench,
    image:
      'https://images.pexels.com/photos/4687906/pexels-photo-4687906.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    description:
      'Veneers, bonding and smile makeovers designed to refine shape, colour and harmony for a radiant smile.',
    icon: Sparkles,
    image:
      'https://images.pexels.com/photos/3762441/pexels-photo-3762441.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    id: 'dentures',
    title: 'Dentures',
    description:
      'Comfortable, well-fitted complete and partial dentures that restore your ability to eat and speak naturally.',
    icon: Shield,
    image:
      'https://images.pexels.com/photos/3821359/pexels-photo-3821359.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    id: 'general-checkup',
    title: 'General Dental Checkups',
    description:
      'Routine examinations and preventive care to catch concerns early and keep your smile healthy for life.',
    icon: HeartHandshake,
    image:
      'https://images.pexels.com/photos/8224633/pexels-photo-8224633.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
];

export const WHY_CHOOSE = [
  {
    title: 'Patient-Centred Dental Care',
    description:
      'Every plan is built around your comfort, needs and goals — never a one-size-fits-all approach.',
    icon: HeartHandshake,
  },
  {
    title: 'Personalized Treatment Plans',
    description:
      'We tailor each treatment to your unique oral health, lifestyle and aesthetic expectations.',
    icon: Stethoscope,
  },
  {
    title: 'Focus on Hygiene and Safety',
    description:
      'Strict sterilization protocols and single-use materials keep every patient protected at every visit.',
    icon: Shield,
  },
  {
    title: 'Comfortable Patient Experience',
    description:
      'A calming environment and gentle techniques make dental visits something to look forward to.',
    icon: Smile,
  },
  {
    title: 'Comprehensive Dental Treatments',
    description:
      'From preventive care to advanced procedures, a full range of treatments under one roof.',
    icon: Scissors,
  },
  {
    title: 'Friendly Patient Support',
    description:
      'Our team is always ready to answer questions and guide you before, during and after treatment.',
    icon: Sparkles,
  },
];

export const GALLERY_IMAGES = [
  {
    src: 'https://images.pexels.com/photos/305567/pexels-photo-305567.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Bright, modern dental clinic room with advanced dental equipment',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/6812463/pexels-photo-6812463.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Modern dental office displaying dental tools and equipment',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/5355863/pexels-photo-5355863.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Clean dental clinic with blue chairs and essential equipment',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3881292/pexels-photo-3881292.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Dentist treating a patient with assistant in a modern clinic',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/4562895/pexels-photo-4562895.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Modern dental clinic with advanced equipment and comfortable seating',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3762441/pexels-photo-3762441.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Close-up of a confident smile with white, healthy teeth',
    span: '',
  },
];

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${CLINIC.whatsappRaw}?text=${encodeURIComponent(message)}`;
}

export function buildEnquiryMessage(treatmentTitle: string): string {
  return `Hello ${CLINIC.name}, I would like to enquire about your ${treatmentTitle} service. Please share more details.`;
}

export function buildAppointmentMessage(data: {
  name: string;
  phone: string;
  treatment: string;
  date: string;
  message: string;
}): string {
  return [
    `Hello ${CLINIC.name}, I would like to book an appointment.`,
    ``,
    `Name: ${data.name}`,
    `Mobile: ${data.phone}`,
    `Treatment: ${data.treatment}`,
    `Preferred Date: ${data.date}`,
    data.message ? `Message: ${data.message}` : '',
  ]
    .filter(Boolean)
    .join('\n');
}
