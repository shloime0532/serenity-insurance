"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Jacob Stein",
    title: "Commercial Property Investor",
    text: "Serenity Insurance has been instrumental in protecting our growing portfolio. Their team took the time to understand every property and tailored coverage that gives us complete peace of mind.",
  },
  {
    name: "Ephraim Freedman",
    title: "General Contractor",
    text: "From workers comp to general liability, they handled everything seamlessly. Setting up coverage for our crew was hassle-free, and their response time on claims has been outstanding.",
  },
  {
    name: "Jacob Deutsche",
    title: "Retail Business Owner",
    text: "When we had a claim, the Serenity team was there every step of the way. They made a stressful situation manageable and got us back on track faster than we expected.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-amber-400"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Initials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <div className="shrink-0 w-11 h-11 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">
      {initials}
    </div>
  );
}

export default function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", startIndex: 0 }, [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
            What Our Clients Say
          </h2>
          <p className="text-text-light">
            Real feedback from businesses we&apos;ve helped protect.
          </p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t) => (
              <div key={t.name} className="flex-[0_0_100%] min-w-0 px-3 md:px-6">
                <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 max-w-2xl mx-auto border border-gray-100">
                  <Stars />
                  <p className="text-text leading-relaxed mb-6 text-[15px] md:text-base">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <Initials name={t.name} />
                    <div>
                      <p className="font-semibold text-secondary text-sm">
                        {t.name}
                      </p>
                      <p className="text-xs text-text-light">{t.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2.5 mt-8">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === selectedIndex
                  ? "bg-primary w-7"
                  : "bg-gray-300 w-2.5 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
