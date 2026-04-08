"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/95 border-b border-white/10">
      <div className="flex items-center justify-between px-6 py-4 lg:px-12">
        
        {/* Logo */}
        <Link href={isEnglish ? "/en" : "/"} className="text-lg font-semibold tracking-wide">
          Ascendant Auto Detailing
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {isEnglish ? (
            <>
              <Link href="/en/services">SERVICES</Link>
              <Link href="/en/pricing">PACKAGES</Link>
              <Link href="/en/booking">BOOK NOW</Link>
              <Link href="/en/contact">CONTACT US</Link>
              <Link href="/en/about">ABOUT US</Link>
            </>
          ) : (
            <>
              <Link href="/services">SERVICES</Link>
              <Link href="/pricing">TARIFS</Link>
              <Link href="/booking">RÉSERVER</Link>
              <Link href="/contact">CONTACTEZ-NOUS</Link>
              <Link href="/about">À PROPOS</Link>
            </>
          )}
        </nav>

        {/* Language Switch */}
        <div className="flex items-center gap-2 text-sm">
          <Link href="/">FR</Link>
          <span className="text-yellow-500">●</span>
          <Link href="/en">EN</Link>
        </div>

      </div>
    </header>
  );
}
