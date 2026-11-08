import type { Partner } from '@/content/partners';

/**
 * One partner wordmark at its optical height, in rem so it scales with the reader's text size. Lazy, because on
 * Home the band is far down the page and eager images get preloaded ahead of the hero photo.
 */
export default function PartnerLogo({ p, alt }: { p: Partner; alt: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- small SVG wordmarks; the image optimiser doesn't resize SVGs
    <img src={`/images/partners/${p.slug}.svg`} alt={alt} loading="lazy" className="fs-logo" style={{ height: `${p.height / 16}rem` }} />
  );
}
