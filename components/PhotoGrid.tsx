'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import Icon from '@/components/Icon';
import type { Photo } from '@/content/events';

const SWIPE_DISTANCE = 50; // horizontal pointer travel (CSS px) that counts as a swipe

/** Event photo thumbnails that open a modal lightbox: arrows, arrow keys and swipe step; no wrap at the ends. */
export default function PhotoGrid({ photos, eventName }: { photos: Photo[]; eventName: string }) {
  const n = photos.length;
  const [index, setIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const prev = useRef<HTMLButtonElement>(null);
  const next = useRef<HTMLButtonElement>(null);
  const thumbs = useRef<(HTMLButtonElement | null)[]>([]);
  const swipeFrom = useRef<number | null>(null);
  const opener = useRef(0); // focus goes back to the thumbnail that opened the lightbox

  const step = (d: number) => {
    const j = Math.min(n - 1, Math.max(0, index + d));
    if (j === index) return;
    // Hand focus to the other arrow before the focused one disables, so it never drops to the page.
    if (j === 0 && document.activeElement === prev.current) next.current?.focus();
    if (j === n - 1 && document.activeElement === next.current) prev.current?.focus();
    setIndex(j);
  };

  return (
    <>
      <ul className="fs-thumbs">
        {photos.map((p, i) => (
          <li key={p.src.src}>
            <button
              ref={(el) => { thumbs.current[i] = el; }}
              type="button"
              className="fs-thumb"
              aria-label={`Open photo ${i + 1} of ${n}: ${p.alt}`}
              onClick={() => {
                opener.current = i;
                setIndex(i);
                dialog.current?.showModal();
              }}
            >
              <Image src={p.src} alt="" fill sizes="(max-width: 700px) 50vw, 25vw" />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        className="fs-lightbox fs-on-dark"
        aria-label={`Photos: ${eventName}`}
        onClose={() => thumbs.current[opener.current]?.focus()}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') step(-1);
          else if (e.key === 'ArrowRight') step(1);
        }}
        onPointerDown={(e) => { swipeFrom.current = e.clientX; }}
        onPointerUp={(e) => {
          const dx = swipeFrom.current === null ? 0 : e.clientX - swipeFrom.current;
          swipeFrom.current = null;
          if (Math.abs(dx) >= SWIPE_DISTANCE) step(dx < 0 ? 1 : -1);
        }}
      >
        <div className="fs-wrap fs-lightbox-top">
          <p className="font-bold" aria-live="polite">Photo {index + 1} of {n}</p>
          <button type="button" className="fs-iconbtn" aria-label="Close photos" onClick={() => dialog.current?.close()}>
            <Icon name="close" />
          </button>
        </div>
        <div className="fs-wrap fs-lightbox-stage">
          <div className="fs-lightbox-photos">
            {photos.map((p, i) => (
              <Image key={p.src.src} src={p.src} alt={i === index ? p.alt : ''} fill sizes="100vw" className={i === index ? 'is-current' : undefined} />
            ))}
          </div>
          {n > 1 && (
            <>
              <button ref={prev} type="button" className="fs-iconbtn fs-lb-prev" aria-label="Previous photo" disabled={index === 0} onClick={() => step(-1)}>
                <Icon name="prev" />
              </button>
              <button ref={next} type="button" className="fs-iconbtn fs-lb-next" aria-label="Next photo" disabled={index === n - 1} onClick={() => step(1)}>
                <Icon name="next" />
              </button>
            </>
          )}
        </div>
        <p className="fs-wrap fs-lightbox-caption">{photos[index].alt}</p>
      </dialog>
    </>
  );
}
