# Restore Service Cards & Testimonials

**Date:** 2026-02-15
**Project:** Serenity Insurance

## Problem

Client wants two design elements restored that were removed during the site redesign:
1. Red & white checkerboard service cards (replaced with a plain text list)
2. Testimonials carousel (removed entirely)

## Approach

Keep the current Next.js 16 + Tailwind v4 site. Add back both elements as React components.

### 1. Checkerboard Service Cards

**Replaces:** Plain 2-column text list in `page.tsx` (lines 134-156).

- 16 service cards in alternating red (`bg-primary text-white`) and white (`bg-white text-secondary border`) checkerboard pattern
- Each card: icon + service name + arrow, links to `/services#id`
- Hover: scale-up + shadow
- Responsive: 4 columns (desktop 1024px+), 2 columns (everything below including mobile)
- Checkerboard logic: `(row + col) % 2 === 0` = red, else white

### 2. Testimonials Carousel

**Placement:** After services section, before contact section.

- Embla Carousel (lightweight, React-native, ~5KB)
- 3 placeholder testimonials:
  - Jacob Stein, Commercial Property Investor
  - Ephraim Freedman, General Contractor
  - Jacob Deutsche, Retail Business Owner
- Each card: 5 gold stars, quote, name, title
- Autoplay (5s), pause on hover, navigation dots
- Mobile: 1 card visible, swipeable
- Desktop: 1 card visible with peek

### Dependencies

- `embla-carousel-react` — carousel engine
- `embla-carousel-autoplay` — autoplay plugin

### Files to Modify

- `src/app/page.tsx` — replace services list, add testimonials section
- `src/app/globals.css` — add checkerboard card styles if needed
- `package.json` — add embla dependencies

### Files to Create

- `src/app/components/TestimonialsCarousel.tsx` — new component
