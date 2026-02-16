# Restore Service Cards & Testimonials — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add back the red/white checkerboard service cards and a testimonials carousel to the Serenity Insurance homepage.

**Architecture:** Replace the plain text service list in `page.tsx` with a 4-col (desktop) / 2-col (mobile) checkerboard grid of red and white cards. Add a new `TestimonialsCarousel` component using Embla Carousel with autoplay, placed between the services and contact sections.

**Tech Stack:** Next.js 16, React 19, Tailwind v4, embla-carousel-react, embla-carousel-autoplay

---

## Task 1: Install Embla Carousel Dependencies

**Files:**
- Modify: `package.json`

**Step 1: Install packages**

Run:
```bash
cd /Users/shloimyrokeachpropertymanagement/Desktop/Website_Projects/Serenity_Insurance/code
npm install embla-carousel-react embla-carousel-autoplay
```

**Step 2: Verify install**

Run: `npm ls embla-carousel-react embla-carousel-autoplay`
Expected: Both packages listed without errors.

**Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "Add embla-carousel-react and embla-carousel-autoplay"
```

---

## Task 2: Replace Service Text List with Checkerboard Cards

**Files:**
- Modify: `src/app/page.tsx` (lines 134–156 — the services section)

**Context:** The current services section is a plain 2-column text list. Replace it with a grid of 16 cards in alternating red/white checkerboard pattern.

**Step 1: Replace the services section**

In `src/app/page.tsx`, replace the entire `{/* Services List */}` section (lines 134–156) with:

```tsx
      {/* Services */}
      <section id="services" className="py-20">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary">
              Lines of Business We Offer
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {serviceItems.map(({ id, label, Icon }, i) => {
              const cols = typeof window !== "undefined" && window.innerWidth >= 1024 ? 4 : 2;
              const row = Math.floor(i / cols);
              const col = i % cols;
              const isRed = (row + col) % 2 === 0;

              return (
                <Link
                  key={id}
                  href={`/services#${id}`}
                  className={`group flex flex-col items-center justify-center gap-3 rounded-xl p-5 md:p-6 text-center transition-all hover:scale-[1.03] hover:shadow-lg ${
                    isRed
                      ? "bg-primary text-white"
                      : "bg-white text-secondary border border-gray-200"
                  }`}
                >
                  <span className={`w-10 h-10 flex items-center justify-center ${isRed ? "text-white" : "text-primary"}`}>
                    <Icon />
                  </span>
                  <span className="text-sm font-semibold leading-tight">{label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
```

**IMPORTANT:** The `window` check above won't work with SSR. Instead, use a simpler approach — compute checkerboard based on a fixed 4-column assumption for the pattern, since 4-col and 2-col checkerboard with the same index math produce visually correct patterns:

```tsx
              const isRed = (() => {
                const row = Math.floor(i / 4);
                const col = i % 4;
                return (row + col) % 2 === 0;
              })();
```

This works because: in a 4-col grid R W R W / W R W R is correct. In a 2-col grid the same items appear as R W / R W / W R / W R which still produces alternation. It won't be a perfect 2-col checkerboard but keeps the pattern visually interesting.

If a true 2-col checkerboard is needed on mobile, use two separate grids with CSS `hidden`/`block` at breakpoints. But start with the simpler approach first.

**Step 2: Verify visually**

Run: `npm run dev`
Open: `http://localhost:3000`
Expected: 16 service cards in alternating red/white grid. 4 columns on desktop, 2 on mobile.

**Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds with no errors.

**Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "Replace service text list with red/white checkerboard cards"
```

---

## Task 3: Create TestimonialsCarousel Component

**Files:**
- Create: `src/app/components/TestimonialsCarousel.tsx`

**Step 1: Create the component**

Create `src/app/components/TestimonialsCarousel.tsx` with this content:

```tsx
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
    <div className="flex gap-1 text-amber-400 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [
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
    return () => { emblaApi.off("select", onSelect); };
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
                <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 max-w-2xl mx-auto">
                  <Stars />
                  <p className="text-text leading-relaxed mb-5 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-secondary">{t.name}</p>
                    <p className="text-sm text-text-light">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === selectedIndex ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Verify it compiles**

Run: `npm run build`
Expected: Build succeeds (component isn't used yet, but should compile).

**Step 3: Commit**

```bash
git add src/app/components/TestimonialsCarousel.tsx
git commit -m "Create TestimonialsCarousel component with Embla + autoplay"
```

---

## Task 4: Add Testimonials Section to Homepage

**Files:**
- Modify: `src/app/page.tsx` (add import + section between services and contact)

**Step 1: Add import**

At the top of `src/app/page.tsx`, add after the existing imports:

```tsx
import TestimonialsCarousel from "./components/TestimonialsCarousel";
```

**Step 2: Add the component between services and contact**

In `page.tsx`, between the closing `</section>` of the services section and the opening `{/* Contact */}` comment, add:

```tsx
      {/* Testimonials */}
      <TestimonialsCarousel />
```

**Step 3: Verify visually**

Run: `npm run dev`
Open: `http://localhost:3000`
Expected:
- Testimonials carousel appears between services and contact
- 3 cards cycle on autoplay every 5 seconds
- Dots navigation works
- Pauses on mouse hover
- Swipeable on mobile

**Step 4: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 5: Commit**

```bash
git add src/app/page.tsx
git commit -m "Add testimonials carousel to homepage"
```

---

## Task 5: Mobile Verification & Deploy

**Files:** None (verification only)

**Step 1: Check mobile at 375px**

Run: `npm run dev`
Open Chrome DevTools → toggle device toolbar → iPhone SE (375px)
Verify:
- Service cards: 2 columns, readable text, icons visible
- Testimonials: single card, swipeable, dots visible
- No horizontal overflow

**Step 2: Build and deploy**

Run:
```bash
cd /Users/shloimyrokeachpropertymanagement/Desktop/Website_Projects/Serenity_Insurance/code
npm run build && vercel --prod --yes
```

Expected: Deployment succeeds.

**Step 3: Push to GitHub**

```bash
git push origin main
```

---

## Summary

| Task | What | Files |
|------|------|-------|
| 1 | Install Embla Carousel | `package.json` |
| 2 | Checkerboard service cards | `src/app/page.tsx` |
| 3 | Testimonials component | `src/app/components/TestimonialsCarousel.tsx` |
| 4 | Wire testimonials to homepage | `src/app/page.tsx` |
| 5 | Mobile check + deploy | None |
