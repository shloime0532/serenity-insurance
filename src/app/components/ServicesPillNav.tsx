"use client";

import { useEffect, useState } from "react";

const services = [
  { id: "general-liability", label: "General Liability" },
  { id: "property-coverage", label: "Property Coverage" },
  { id: "workers-compensation", label: "Workers Compensation" },
  { id: "disability", label: "Disability & PFL" },
  { id: "umbrella-coverage", label: "Umbrella Coverage" },
  { id: "builders-risk", label: "Builders Risk" },
  { id: "inland-marine", label: "Inland Marine" },
  { id: "contractors-equipment", label: "Contractors Equipment" },
  { id: "directors-officers", label: "Directors & Officers" },
  { id: "professional-liability", label: "Professional Liability" },
  { id: "product-liability", label: "Product Liability" },
  { id: "epli", label: "EPLI" },
  { id: "commercial-auto", label: "Commercial Auto" },
  { id: "crime", label: "Crime" },
  { id: "bonds", label: "Bonds" },
  { id: "pollution-coverage", label: "Pollution Coverage" },
];

export default function ServicesPillNav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    if (window.location.hash) {
      setActive(window.location.hash.replace("#", ""));
    }

    const onHash = () => setActive(window.location.hash.replace("#", ""));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  function handleClick(id: string) {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      const offset = 140; // header + pill nav height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      history.pushState(null, "", `#${id}`);
    }
  }

  return (
    <div className="sticky top-[70px] z-30 bg-white border-b border-gray-100 py-3">
      <div className="container overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => handleClick(s.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                active === s.id
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-text-light hover:bg-gray-200"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
