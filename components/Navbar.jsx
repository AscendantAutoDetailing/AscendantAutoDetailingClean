"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <header className="w-full border-b border-white/10 bg-black/85 backdrop-blur-md">
      <div className="mx-auto flex h-32 max-w-6xl items-center justify-between px-6">

        <Link href={isEnglish ? "/en" : "/"} className="flex items-center">
          <img
            src="/logo.png"
            alt="Ascendant Auto Detailing"
            className="h-52 w-auto mt-4 md:h-60"
          />
        </Link>

        <div className="flex items-center gap-10">

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80 uppercase">

            <Link href={isEnglish ? "/en/services" : "/services"} className="whitespace-nowrap hover:text-yellow-400">
              Services
            </Link>

            <Link href={isEnglish ? "/en/pricing" : "/pricing"} className="whitespace-nowrap hover:text-yellow-400">
              {isEnglish ? "Packages" : "Tarifs"}
            </Link>

            <Link href={isEnglish ? "/en/booking" : "/booking"} className="whitespace-nowrap hover:text-yellow-400">
              {isEnglish ? "Book Now" : "Réservation"}
            </Link>

            <Link href={isEnglish ? "/en/contact" : "/contact"} className="whitespace-nowrap hover:text-yellow-400">
              {isEnglish ? "Contact Us" : "Contactez-nous"}
            </Link>

            <Link href={isEnglish ? "/en/about" : "/about"} className="whitespace-nowrap hover:text-yellow-400">
              {isEnglish ? "About Us" : "À propos"}
            </Link>

          </nav>

          <div className="hidden md:block h-5 w-px bg-white/20" />

          <Link href="/" className="text-sm font-semibold text-white hover:text-yellow-400">
            FR
          </Link>

          <Link href="/en" className="text-sm font-semibold text-white hover:text-yellow-400">
            EN
          </Link>

        </div>

      </div>
    </header>
  );
}
