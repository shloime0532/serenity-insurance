"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          service: data.get("service"),
          message: data.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  const inputClass =
    "w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

  return (
    <form onSubmit={handleSubmit} className="relative flex flex-col gap-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className={inputClass}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className={inputClass}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Your Phone"
        className={inputClass}
      />
      <select name="service" className={inputClass}>
        <option value="">Select a Service</option>
        <option value="General Liability">General Liability</option>
        <option value="Professional Liability">Professional Liability</option>
        <option value="Property Insurance">Property Insurance</option>
        <option value="Workers Compensation">Workers Compensation</option>
        <option value="Commercial Auto">Commercial Auto</option>
        <option value="Other">Other</option>
      </select>
      <textarea
        name="message"
        placeholder="Your Message"
        rows={4}
        className={inputClass}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/90 rounded-lg">
          <p className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium text-sm">
            Message sent successfully! We&apos;ll be in touch soon.
          </p>
        </div>
      )}
      {status === "error" && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/90 rounded-lg">
          <p className="bg-red-500 text-white px-6 py-3 rounded-lg font-medium text-sm">
            Something went wrong. Please try again.
          </p>
        </div>
      )}
    </form>
  );
}
