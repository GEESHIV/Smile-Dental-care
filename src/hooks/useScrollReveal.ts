import { useEffect } from 'react';

/**
 * Adds `is-visible` to any element with the `reveal` class when it scrolls
 * into view. Supports a `data-reveal-delay` attribute (ms) for staggering.
 */
export function useScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.revealDelay ?? 0);
          window.setTimeout(() => el.classList.add('is-visible'), delay);
          observer.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
