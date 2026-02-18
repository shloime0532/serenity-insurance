"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    image: "/assets/workerslooking.png",
    title: "Reliable Property & Casualty coverage tailored to your industry",
    subtitle:
      "Minimize risks and maintain business continuity with insurance solutions built for companies of all sizes.",
  },
  {
    image: "/assets/coolbuilding.png",
    title: "Comprehensive protection for your business assets",
    subtitle:
      "From property to liability and operational risks, our insurance solutions are designed to safeguard what matters most.",
  },
  {
    image: "/assets/businessins.png",
    title: "Flexible insurance options from trusted carriers",
    subtitle:
      "We partner with multiple providers to deliver coverage that aligns with your goals, scale, and operational needs.",
  },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: false, stopOnMouseEnter: true }),
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
    <section id="home" className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div key={slide.image} className="flex-[0_0_100%] min-w-0 relative">
              <div
                className="relative min-h-[80vh] flex items-center bg-cover bg-center"
                style={{ backgroundImage: `url('${slide.image}')` }}
              >
                <div className="absolute inset-0 bg-black/50" />
                <div className="container relative z-10 py-24 pt-[calc(70px+6rem)] md:pt-[calc(85px+6rem)]">
                  <div className="max-w-2xl text-white">
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 mb-8">
                      {slide.subtitle}
                    </p>
                    <a
                      href="#contact"
                      className="inline-block px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-lg"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center gap-2.5">
        {slides.map((slide, i) => (
          <button
            key={slide.image}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === selectedIndex
                ? "bg-white w-7"
                : "bg-white/50 w-2.5 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
