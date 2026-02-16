import Image from "next/image";
import Link from "next/link";
import ContactForm from "./components/ContactForm";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import {
  Shield, Home as HomeIcon, Calendar, User, Umbrella, Building,
  Ship, Wrench, UserCircle, Briefcase, Box, Users,
  Car, Lock, FileText, Droplets,
} from "./components/icons";

const serviceItems = [
  { id: "general-liability", label: "General Liability", Icon: Shield },
  { id: "property-coverage", label: "Property Coverage", Icon: HomeIcon },
  { id: "workers-compensation", label: "Workers Compensation", Icon: Calendar },
  { id: "disability", label: "Disability & Paid Family Leave", Icon: User },
  { id: "umbrella-coverage", label: "Umbrella / Excess", Icon: Umbrella },
  { id: "builders-risk", label: "Builders Risk", Icon: Building },
  { id: "inland-marine", label: "Inland Marine", Icon: Ship },
  { id: "contractors-equipment", label: "Contractors Equipment", Icon: Wrench },
  { id: "directors-officers", label: "Directors & Officers", Icon: UserCircle },
  { id: "professional-liability", label: "Professional Liability", Icon: Briefcase },
  { id: "product-liability", label: "Product Liability", Icon: Box },
  { id: "epli", label: "EPLI", Icon: Users },
  { id: "commercial-auto", label: "Commercial Auto", Icon: Car },
  { id: "crime", label: "Crime", Icon: Lock },
  { id: "bonds", label: "Bonds", Icon: FileText },
  { id: "pollution-coverage", label: "Pollution Coverage", Icon: Droplets },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        id="home"
        className="relative min-h-[80vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/workerslooking.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 py-24 pt-[calc(70px+6rem)]">
          <div className="max-w-2xl text-white">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Reliable Property &amp; Casualty coverage tailored to your industry
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Minimize risks and maintain business continuity with insurance
              solutions built for companies of all sizes.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section id="about" className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/assets/conferenceroom.png"
                alt="Business Meeting"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
                We Protect What Matters Most to You
              </h2>
              <p className="text-text-light leading-relaxed mb-6">
                At Serenity Insurance, we provide comprehensive Property &amp;
                Casualty insurance solutions designed to protect what matters
                most to your business. We work closely with each client to
                deliver tailored coverage that fits their unique needs and risk
                profile.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m12 16 4-4-4-4"/><path d="M8 12h8"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary">
              Why Businesses Choose Serenity Insurance
            </h2>
            <div className="flex flex-col gap-6">
              {[
                {
                  title: "Comprehensive Protection",
                  text: "A wide range of P&C insurance products to support business continuity and minimize risk.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>,
                },
                {
                  title: "Tailored Coverage",
                  text: "We understand your business and deliver coverage that fits your specific risks and priorities.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>,
                },
                {
                  title: "Dedicated Support",
                  text: "From policy selection to claims assistance — we're with you every step of the way.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-red-50 text-primary rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">{item.title}</h3>
                    <p className="text-sm text-text-light">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services — Checkerboard Cards */}
      <section id="services" className="py-20">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary">
              Lines of Business We Offer
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-3">
            {serviceItems.map(({ id, label, Icon }, i) => {
              const row = Math.floor(i / 4);
              const col = i % 4;
              const isRed = (row + col) % 2 === 0;

              return (
                <Link
                  key={id}
                  href={`/services#${id}`}
                  className={`group relative flex flex-col items-center justify-center gap-2.5 md:gap-3 rounded-xl p-4 md:p-6 text-center transition-all duration-200 hover:scale-[1.03] hover:shadow-lg ${
                    isRed
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "bg-white text-secondary border border-gray-200 shadow-sm"
                  }`}
                >
                  <span
                    className={`w-9 h-9 md:w-10 md:h-10 flex items-center justify-center transition-transform duration-200 group-hover:scale-110 ${
                      isRed ? "text-white/90" : "text-primary"
                    }`}
                  >
                    <Icon />
                  </span>
                  <span className="text-xs md:text-sm font-semibold leading-tight">
                    {label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
                Get In Touch
              </h2>
              <p className="text-text-light mb-8">
                Ready to protect your business? Contact us today for a free
                consultation and personalized quote.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-red-50 text-primary rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <p className="text-xs text-text-light">Phone</p>
                    <a href="tel:+16469924399" className="font-medium text-text hover:text-primary transition-colors">646-992-4399</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-red-50 text-primary rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <p className="text-xs text-text-light">Email</p>
                    <a href="mailto:servicing@serenityins.com" className="font-medium text-text hover:text-primary transition-colors">servicing@serenityins.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
