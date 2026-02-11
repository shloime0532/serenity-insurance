import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/logo.jpg"
            alt="Serenity Insurance Brokerage"
            width={80}
            height={32}
            className="h-8 w-auto rounded"
          />
          <span className="font-semibold">Serenity Insurance Brokerage</span>
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <a href="tel:+16469924399" className="hover:text-white transition-colors">
            646-992-4399
          </a>
          <span>|</span>
          <a
            href="mailto:servicing@serenityins.com"
            className="hover:text-white transition-colors"
          >
            servicing@serenityins.com
          </a>
        </div>
        <div className="flex items-center gap-4 text-gray-300">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
