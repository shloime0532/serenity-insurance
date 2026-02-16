import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about Serenity Insurance Brokerage - Founded in 2022 to provide proper protection for businesses. Dedicated service, personalized solutions, and long-term relationships.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 pt-[calc(70px+4rem)] md:pt-[calc(85px+4rem)]">
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            About Serenity Insurance
          </h1>
          <p className="text-white/80 text-lg">
            Proper protection for businesses since 2022
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/assets/conferenceroom.png"
                alt="Serenity Insurance Team"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
                Who We Are
              </h2>
              <p className="text-text-light leading-relaxed mb-4">
                Serenity Insurance Brokerage was established in 2022 with the
                goal to provide proper protection for businesses.
              </p>
              <p className="text-text-light leading-relaxed">
                We specialize in Property and Casualty insurance solutions
                tailored to meet the unique needs of each client. Our team
                brings deep expertise and a commitment to excellence in every
                interaction, working closely with our clients to simplify the
                insurance process and deliver coverage that truly fits their
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary text-center mb-12">
            Why Work With Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Dedicated Service",
                text: "As your trusted insurance partner, we're committed to providing exceptional service and support at every step of the process. We work hand in hand with our clients from policy selection and implementation to financing, servicing, audits, claims assistance and risk management advice. We're here to help you navigate the complexities of commercial insurance with confidence and ease.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                ),
              },
              {
                title: "Personalized Solutions",
                text: "We recognize that every business is different, which is why we take a personalized approach to insurance. Whether you're a small startup or a large corporation, we'll work with you to modify insurance solutions that align with your goals, budget, and risk tolerance.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                ),
              },
              {
                title: "Long-Term Relationships",
                text: "Building lasting relationships with our clients is at the heart of what we do. We strive to earn your trust and confidence by delivering value, reliability, and peace of mind through our insurance products and services. Your satisfaction is our top priority!",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-8 shadow-sm text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-red-50 text-primary rounded-xl">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-text-light leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
