import { Camera } from 'lucide-react';
import { GALLERY_IMAGES } from '@/config/site';

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-20 lg:py-28">
      <div className="container-px">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">
            <Camera className="h-3.5 w-3.5" />
            Dental Gallery
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-brand-navy-900 sm:text-4xl">
            A Glimpse Into Our Practice
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-navy-600">
            Modern facilities, professional equipment and a calming environment
            designed around your comfort. Images are representative of the
            dental care experience we provide.
          </p>
        </div>

        <div className="reveal mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[240px] lg:grid-cols-4">
          {GALLERY_IMAGES.map((img, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl border border-white shadow-soft transition-all duration-500 hover:shadow-card ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute bottom-0 left-0 right-0 translate-y-3 p-4 text-left text-xs font-medium text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
