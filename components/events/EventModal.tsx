import { useEffect } from 'react';
import Image from 'next/image';
import { Event } from '@data/interface/eventsData';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface EventModalProps {
  event: Event | null;
  onClose: () => void;
}

const EventModal = ({ event, onClose }: EventModalProps) => {
  // close on ESC
  useEffect(() => {
    if (!event) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [event, onClose]);

  if (!event) return null;

  const galleryImages = (
    event.images && event.images.length > 0
      ? event.images
      : [{ src: event.coverImage, alt: event.coverImageAlt }]
  ).filter(
    (img): img is { src: string; alt?: string } =>
      typeof img?.src === 'string' && img.src.length > 0
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative z-10 max-h-[90vh] w-[90%] max-w-3xl overflow-y-auto rounded-xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-start justify-between">
          <h2 className="text-2xl font-bold text-[#002750]">{event.name}</h2>
          <button
            onClick={onClose}
            className="text-xl font-bold text-gray-500 hover:text-black"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <div className="mb-4">
          <Carousel
            swipeable
            draggable
            showDots={galleryImages.length > 1}
            responsive={{
              all: { breakpoint: { max: 4000, min: 0 }, items: 1 },
            }}
            ssr={false}
            infinite={false}
          >
            {galleryImages.map((img, idx) => (
              <div key={idx} className="relative aspect-[16/9] w-full">
                {img.src && (
                  <Image
                    src={img.src}
                    alt={img.alt ?? event.name}
                    layout="fill"
                    className="rounded-lg object-cover"
                  />
                )}
              </div>
            ))}
          </Carousel>
        </div>

        <div className="mb-3 text-sm text-gray-600">
          <p>
            <strong>Date:</strong> {event.date}
          </p>
          <p>
            <strong>Location:</strong> {event.location}
          </p>
          <p>
            <strong>Type:</strong> {event.type}
          </p>
        </div>

        <p className="text-gray-700">{event.cardDescription}</p>
      </div>
    </div>
  );
};

export default EventModal;