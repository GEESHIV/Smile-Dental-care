import { MessageCircle } from 'lucide-react';
import {
  buildEnquiryMessage,
  buildWhatsAppUrl,
} from '@/config/site';

export default function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl(buildEnquiryMessage('general enquiry'))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow transition-all duration-300 hover:scale-110"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <MessageCircle className="relative h-7 w-7" />
    </a>
  );
}
