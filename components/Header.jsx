"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isFrench = pathname.startsWith("/fr");

  const navItems = isFrench
    ? [
        { href: "/fr/services", label: "Services" },
        { href: "/fr/tarifs", label: "Tarifs" },
        { href: "/fr/booking", label: "Réserver" },
        { href: "/fr/contact", label: "Contactez-nous" },
        { href: "/fr/about", label: "À propos" },
      ]
    : [
        { href: "/en/services", label: "Services" },
        { href: "/en/pricing", label: "Packages" },
        { href: "/en/booking", label: "Book Now" },
        { href: "/en/contact", label: "Contact Us" },
        { href: "/en/about", label: "About Us" },
      ];

  const switchHref = isFrench ? "/en" : "/fr";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        background: "rgba(5, 5, 5, 0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "18px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        <Link
          href={isFrench ? "/fr" : "/en"}
          style={{
            color: "#ffffff",
            textDecoration: "none",
            fontSize: "1.15rem",
            fontWeight: 700,
            letterSpacing: "0.02em",
            whiteSpace: "nowrap",
          }}
        >
          Ascendant Auto Detailing
        </Link>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                color: "#f5f5f5",
                textDecoration: "none",
                fontSize: "0.95rem",
                fontWeight: 500,
                letterSpacing: "0.03em",
                textTransform: "uppercase",
              }}
            >
              {item.label}
            </Link>
          ))}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginLeft: "8px",
            }}
          >
            <span
              style={{
                color: isFrench ? "#d4af37" : "#bdbdbd",
                fontSize: "0.92rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
              }}
            >
              FR
            </span>

            <Link
              href={switchHref}
              aria-label="Switch language"
              style={{
                width: "44px",
                height: "24px",
                borderRadius: "999px",
                background: "#1b1b1b",
                border: "1px solid rgba(255,255,255,0.14)",
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                padding: "2px",
                boxSizing: "border-box",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  background: "#d4af37",
                  transform: isFrench ? "translateX(0)" : "translateX(20px)",
                  transition: "transform 0.2s ease",
                  display: "block",
                }}
              />
            </Link>

            <span
              style={{
                color: !isFrench ? "#d4af37" : "#bdbdbd",
                fontSize: "0.92rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
              }}
            >
              EN
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}
