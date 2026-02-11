import type { Metadata } from "next";
import ServicesPillNav from "@/app/components/ServicesPillNav";

export const metadata: Metadata = {
  title: "Our Services",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 pt-[calc(70px+4rem)]">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            Comprehensive Property &amp; Casualty insurance solutions for your
            business
          </p>
        </div>
      </section>

      {/* Sticky Pill Navigation */}
      <ServicesPillNav />

      {/* Service Blocks */}
      <section className="py-16 bg-gray-50">
        <div className="container flex flex-col gap-12">
          {/* 1. General Liability */}
          <div id="general-liability" className="scroll-mt-36">
            <div className="md:flex border-l-4 border-primary bg-white rounded-lg shadow-sm p-6 md:p-8">
              <div className="flex-shrink-0 mb-3 md:mb-0 md:mr-5 text-primary">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-primary mb-3">
                  General Liability
                </h2>
                <p className="text-text-light text-sm leading-relaxed">
                  Protects your business against third-party claims for bodily
                  injury, property damage, and personal or advertising injury
                  resulting from your operations.
                </p>
                <h3 className="text-base font-semibold text-secondary mt-4 mb-2">
                  Why You Need It
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  General liability insurance is a core coverage for
                  organizations of all sizes. It provides protection when
                  unexpected incidents occur, such as bodily injury, property
                  damage, or other liabilities arising from day to day
                  operations, activities, or premises exposure.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Property Coverage */}
          <div id="property-coverage" className="scroll-mt-36">
            <div className="md:flex border-l-4 border-primary bg-white rounded-lg shadow-sm p-6 md:p-8">
              <div className="flex-shrink-0 mb-3 md:mb-0 md:mr-5 text-primary">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <path d="M9 22V12h6v10" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-primary mb-3">
                  Property Coverage
                </h2>
                <p className="text-text-light text-sm leading-relaxed">
                  <strong>Building Coverage:</strong> Covers damage to the
                  physical structure of your building caused by covered events
                  such as fire, wind, vandalism, or theft.
                </p>
                <p className="text-text-light text-sm leading-relaxed mt-2">
                  <strong>Business Personal Property (BPP):</strong> Covers your
                  business&apos;s movable property, including furniture,
                  equipment, inventory, and supplies, against covered causes of
                  loss.
                </p>
                <h3 className="text-base font-semibold text-secondary mt-4 mb-2">
                  Why You Need It
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Your physical assets are essential to your business operations.
                  Property coverage ensures you can recover and continue
                  operations after unexpected damage to your building or business
                  property.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Workers' Compensation */}
          <div id="workers-compensation" className="scroll-mt-36">
            <div className="md:flex border-l-4 border-primary bg-white rounded-lg shadow-sm p-6 md:p-8">
              <div className="flex-shrink-0 mb-3 md:mb-0 md:mr-5 text-primary">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M3 10h18" />
                  <path d="M9 16h6" />
                  <path d="M12 13v6" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-primary mb-3">
                  Workers&apos; Compensation
                </h2>
                <p className="text-text-light text-sm leading-relaxed">
                  Provides medical benefits and lost wage coverage for employees
                  injured on the job and helps protect employers from employee
                  injury lawsuits.
                </p>
                <h3 className="text-base font-semibold text-secondary mt-4 mb-2">
                  Why You Need It
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Workers&apos; compensation is required by law in most states.
                  It protects both your employees and your business by covering
                  medical expenses, rehabilitation costs, and lost wages for
                  work-related injuries or illnesses.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Disability & Paid Family Leave */}
          <div id="disability" className="scroll-mt-36">
            <div className="md:flex border-l-4 border-primary bg-white rounded-lg shadow-sm p-6 md:p-8">
              <div className="flex-shrink-0 mb-3 md:mb-0 md:mr-5 text-primary">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="5" r="2" />
                  <path d="M10 22v-5l-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4l-1 1v5" />
                  <path d="M20 10.5c0 1.5-2 3.5-2 3.5H6s-2-2-2-3.5c0-1 .5-1.5 1-1.5h14c.5 0 1 .5 1 1.5Z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-primary mb-3">
                  Disability &amp; Paid Family Leave
                </h2>
                <p className="text-text-light text-sm leading-relaxed">
                  Provides income replacement for employees who are unable to
                  work due to a non-work-related injury, illness, or qualifying
                  family leave.
                </p>
                <h3 className="text-base font-semibold text-secondary mt-4 mb-2">
                  Why You Need It
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Disability and paid family leave insurance helps your employees
                  maintain financial stability during difficult times, while
                  keeping your business compliant with state requirements.
                </p>
              </div>
            </div>
          </div>

          {/* 5. Umbrella / Excess Liability */}
          <div id="umbrella-coverage" className="scroll-mt-36">
            <div className="md:flex border-l-4 border-primary bg-white rounded-lg shadow-sm p-6 md:p-8">
              <div className="flex-shrink-0 mb-3 md:mb-0 md:mr-5 text-primary">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 12a10.06 10.06 0 0 0-20 0Z" />
                  <path d="M12 12v8a2 2 0 0 0 4 0" />
                  <path d="M12 2v1" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-primary mb-3">
                  Umbrella / Excess Liability
                </h2>
                <p className="text-text-light text-sm leading-relaxed">
                  Provides additional liability limits above your primary
                  policies, helping protect your business against large or
                  catastrophic claims.
                </p>
                <h3 className="text-base font-semibold text-secondary mt-4 mb-2">
                  Why You Need It
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  When a claim exceeds your primary policy limits, Umbrella /
                  Excess coverage steps in to provide an extra layer of
                  protection, safeguarding your business assets from significant
                  financial loss.
                </p>
              </div>
            </div>
          </div>

          {/* 6. Builders Risk */}
          <div id="builders-risk" className="scroll-mt-36">
            <div className="md:flex border-l-4 border-primary bg-white rounded-lg shadow-sm p-6 md:p-8">
              <div className="flex-shrink-0 mb-3 md:mb-0 md:mr-5 text-primary">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    width="16"
                    height="20"
                    x="4"
                    y="2"
                    rx="2"
                    ry="2"
                  />
                  <path d="M9 22v-4h6v4" />
                  <path d="M8 6h.01" />
                  <path d="M16 6h.01" />
                  <path d="M12 6h.01" />
                  <path d="M12 10h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 10h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 10h.01" />
                  <path d="M8 14h.01" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-primary mb-3">
                  Builders Risk
                </h2>
                <p className="text-text-light text-sm leading-relaxed">
                  Covers buildings and materials during construction or
                  renovation, protecting against losses from fire, theft,
                  vandalism, and certain weather events.
                </p>
                <h3 className="text-base font-semibold text-secondary mt-4 mb-2">
                  Why You Need It
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Construction projects involve significant investment in
                  materials and labor. Builders risk insurance ensures that your
                  project is protected from unexpected events that could cause
                  costly delays or losses.
                </p>
              </div>
            </div>
          </div>

          {/* 7. Inland Marine */}
          <div id="inland-marine" className="scroll-mt-36">
            <div className="md:flex border-l-4 border-primary bg-white rounded-lg shadow-sm p-6 md:p-8">
              <div className="flex-shrink-0 mb-3 md:mb-0 md:mr-5 text-primary">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                  <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76" />
                  <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
                  <path d="M12 10v4" />
                  <path d="M12 2v3" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-primary mb-3">
                  Inland Marine
                </h2>
                <p className="text-text-light text-sm leading-relaxed">
                  Covers tools, materials, and equipment while in transit or
                  temporarily stored at job sites or off-site locations.
                </p>
                <h3 className="text-base font-semibold text-secondary mt-4 mb-2">
                  Why You Need It
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Standard property insurance often doesn&apos;t cover items
                  that are moved between locations. Inland marine insurance fills
                  that gap, protecting your valuable tools and materials wherever
                  your work takes you.
                </p>
              </div>
            </div>
          </div>

          {/* 8. Contractors Equipment */}
          <div id="contractors-equipment" className="scroll-mt-36">
            <div className="md:flex border-l-4 border-primary bg-white rounded-lg shadow-sm p-6 md:p-8">
              <div className="flex-shrink-0 mb-3 md:mb-0 md:mr-5 text-primary">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m2 22 1-1h3l9-9" />
                  <path d="M3 21v-3l9-9" />
                  <path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-primary mb-3">
                  Contractors Equipment
                </h2>
                <p className="text-text-light text-sm leading-relaxed">
                  Protects construction equipment and machinery from damage,
                  theft, or loss, whether owned, rented, or leased.
                </p>
                <h3 className="text-base font-semibold text-secondary mt-4 mb-2">
                  Why You Need It
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Construction equipment represents a major investment. Whether
                  you own, rent, or lease your machinery, contractors equipment
                  insurance ensures you&apos;re protected against unexpected
                  damage, theft, or loss.
                </p>
              </div>
            </div>
          </div>

          {/* 9. Directors & Officers Liability (D&O) */}
          <div id="directors-officers" className="scroll-mt-36">
            <div className="md:flex border-l-4 border-primary bg-white rounded-lg shadow-sm p-6 md:p-8">
              <div className="flex-shrink-0 mb-3 md:mb-0 md:mr-5 text-primary">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 20a6 6 0 0 0-12 0" />
                  <circle cx="12" cy="10" r="4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-primary mb-3">
                  Directors &amp; Officers Liability (D&amp;O)
                </h2>
                <p className="text-text-light text-sm leading-relaxed">
                  Protects company directors and officers from claims alleging
                  wrongful acts, mismanagement, or breaches of fiduciary duty in
                  their leadership roles.
                </p>
                <h3 className="text-base font-semibold text-secondary mt-4 mb-2">
                  Why You Need It
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Directors and officers face personal liability for the
                  decisions they make on behalf of the company. D&amp;O insurance
                  provides critical protection against lawsuits that could
                  threaten their personal assets.
                </p>
              </div>
            </div>
          </div>

          {/* 10. Professional Liability */}
          <div id="professional-liability" className="scroll-mt-36">
            <div className="md:flex border-l-4 border-primary bg-white rounded-lg shadow-sm p-6 md:p-8">
              <div className="flex-shrink-0 mb-3 md:mb-0 md:mr-5 text-primary">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  <rect width="20" height="14" x="2" y="6" rx="2" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-primary mb-3">
                  Professional Liability
                </h2>
                <p className="text-text-light text-sm leading-relaxed">
                  Covers claims arising from errors, omissions, or negligence in
                  professional services provided to clients.
                </p>
                <h3 className="text-base font-semibold text-secondary mt-4 mb-2">
                  Why You Need It
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Even the most skilled professionals can face claims of
                  negligence or mistakes. Professional liability insurance
                  protects your business from the financial impact of such
                  claims, covering legal defense costs and potential settlements.
                </p>
              </div>
            </div>
          </div>

          {/* 11. Product Liability */}
          <div id="product-liability" className="scroll-mt-36">
            <div className="md:flex border-l-4 border-primary bg-white rounded-lg shadow-sm p-6 md:p-8">
              <div className="flex-shrink-0 mb-3 md:mb-0 md:mr-5 text-primary">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m7.5 4.27 9 5.15" />
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                  <path d="m3.3 7 8.7 5 8.7-5" />
                  <path d="M12 22V12" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-primary mb-3">
                  Product Liability
                </h2>
                <p className="text-text-light text-sm leading-relaxed">
                  Protects businesses against claims of bodily injury or property
                  damage caused by products they manufacture, distribute, or
                  sell.
                </p>
                <h3 className="text-base font-semibold text-secondary mt-4 mb-2">
                  Why You Need It
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  If your business manufactures, distributes, or sells products,
                  you could be held liable for injuries or damages those products
                  cause. Product liability insurance provides essential
                  protection against these costly claims.
                </p>
              </div>
            </div>
          </div>

          {/* 12. EPLI */}
          <div id="epli" className="scroll-mt-36">
            <div className="md:flex border-l-4 border-primary bg-white rounded-lg shadow-sm p-6 md:p-8">
              <div className="flex-shrink-0 mb-3 md:mb-0 md:mr-5 text-primary">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-primary mb-3">
                  EPLI
                </h2>
                <p className="text-text-light text-sm leading-relaxed">
                  Protects businesses against claims related to
                  employment-related issues such as discrimination, harassment,
                  wrongful termination, and retaliation.
                </p>
                <h3 className="text-base font-semibold text-secondary mt-4 mb-2">
                  Why You Need It
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Employment-related lawsuits are increasingly common and can be
                  extremely costly. EPLI coverage protects your business from the
                  financial impact of claims made by current, former, or
                  potential employees.
                </p>
              </div>
            </div>
          </div>

          {/* 13. Commercial Auto */}
          <div id="commercial-auto" className="scroll-mt-36">
            <div className="md:flex border-l-4 border-primary bg-white rounded-lg shadow-sm p-6 md:p-8">
              <div className="flex-shrink-0 mb-3 md:mb-0 md:mr-5 text-primary">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                  <circle cx="7" cy="17" r="2" />
                  <path d="M9 17h6" />
                  <circle cx="17" cy="17" r="2" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-primary mb-3">
                  Commercial Auto
                </h2>
                <p className="text-text-light text-sm leading-relaxed">
                  Provides liability and physical damage coverage for vehicles
                  used in business operations, protecting against accidents,
                  injuries, and property damage.
                </p>
                <h3 className="text-base font-semibold text-secondary mt-4 mb-2">
                  Why You Need It
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  If your business uses vehicles for any purpose, commercial auto
                  insurance is essential. It covers liability for accidents
                  involving company vehicles and can also protect the vehicles
                  themselves from damage or theft.
                </p>
              </div>
            </div>
          </div>

          {/* 14. Crime */}
          <div id="crime" className="scroll-mt-36">
            <div className="md:flex border-l-4 border-primary bg-white rounded-lg shadow-sm p-6 md:p-8">
              <div className="flex-shrink-0 mb-3 md:mb-0 md:mr-5 text-primary">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    width="18"
                    height="11"
                    x="3"
                    y="11"
                    rx="2"
                    ry="2"
                  />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-primary mb-3">
                  Crime
                </h2>
                <p className="text-text-light text-sm leading-relaxed">
                  Covers financial losses resulting from employee dishonesty,
                  theft, fraud, forgery, or other criminal acts committed against
                  your business.
                </p>
                <h3 className="text-base font-semibold text-secondary mt-4 mb-2">
                  Why You Need It
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Internal and external criminal acts can cause significant
                  financial damage to any business. Crime insurance helps protect
                  your bottom line from losses due to theft, fraud, and other
                  criminal activities.
                </p>
              </div>
            </div>
          </div>

          {/* 15. Bonds */}
          <div id="bonds" className="scroll-mt-36">
            <div className="md:flex border-l-4 border-primary bg-white rounded-lg shadow-sm p-6 md:p-8">
              <div className="flex-shrink-0 mb-3 md:mb-0 md:mr-5 text-primary">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-primary mb-3">
                  Bonds
                </h2>
                <p className="text-text-light text-sm leading-relaxed">
                  Bonds provide a financial guarantee that a business or
                  individual will fulfill contractual, legal, or regulatory
                  obligations. They protect the party requiring the bond by
                  ensuring work is completed, laws are followed, or payments are
                  made as agreed.
                </p>
                <h3 className="text-base font-semibold text-secondary mt-4 mb-2">
                  Why You Need It
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Many contracts and government regulations require bonds as a
                  condition of doing business. Having the right bond in place
                  demonstrates your reliability and financial responsibility to
                  clients, partners, and regulators.
                </p>
              </div>
            </div>
          </div>

          {/* 16. Pollution Coverage */}
          <div id="pollution-coverage" className="scroll-mt-36">
            <div className="md:flex border-l-4 border-primary bg-white rounded-lg shadow-sm p-6 md:p-8">
              <div className="flex-shrink-0 mb-3 md:mb-0 md:mr-5 text-primary">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
                  <path d="M12.56 14.69c1.1 0 2-.83 2-1.94 0-.56-.29-1.09-.87-1.53s-1-.78-1.13-1.22c-.13.44-.55.78-1.13 1.22s-.87.97-.87 1.53c0 1.11.9 1.94 2 1.94z" />
                  <path d="M17 18.5c1.65 0 3-1.38 3-3.08 0-.87-.42-1.7-1.29-2.4-.87-.7-1.43-1.17-1.71-1.89-.28.72-.84 1.19-1.71 1.89-.87.7-1.29 1.53-1.29 2.4 0 1.7 1.35 3.08 3 3.08z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-primary mb-3">
                  Pollution Coverage
                </h2>
                <p className="text-text-light text-sm leading-relaxed">
                  Provides coverage for claims arising from pollution conditions,
                  including bodily injury, property damage, and cleanup costs.
                </p>
                <h3 className="text-base font-semibold text-secondary mt-4 mb-2">
                  Why You Need It
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Environmental liabilities can be extremely costly and are often
                  excluded from standard insurance policies. Pollution liability
                  insurance provides specialized coverage for contamination
                  events, cleanup expenses, and related claims.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
