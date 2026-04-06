import Link from "next/link";

export default function Header({ lang }) {
  const isFR = lang === "fr";

  return (
    <header style={{
      backgroundColor: "#000",
      padding: "20px 60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }}>

      {/* LOGO */}
      <div>
        <img
          src="/logo.png"
          style={{ height: "60px" }}
        />
      </div>

      {/* NAV */}
      <nav style={{
        display: "flex",
        gap: "40px",
        fontSize: "13px",
        letterSpacing: "2px",
        textTransform: "uppercase"
      }}>
        {isFR ? (
          <>
            <Link href="/fr/services">Services</Link>
            <Link href="/fr/tarifs">Tarifs</Link>
            <Link href="/fr/reservation">Réservation</Link>
            <Link href="/fr/contact">Contact</Link>
            <Link href="/fr/a-propos">À propos</Link>
          </>
        ) : (
          <>
            <Link href="/en/services">Services</Link>
            <Link href="/en/packages">Packages</Link>
            <Link href="/en/booking">Book Now</Link>
            <Link href="/en/contact">Contact Us</Link>
            <Link href="/en/about">About Us</Link>
          </>
        )}
      </nav>

      {/* LANG SWITCH */}
      <div style={{
        display: "flex",
        gap: "10px",
        fontSize: "13px",
        letterSpacing: "2px"
      }}>
        <Link href="/fr">FR</Link>
        <span>|</span>
        <Link href="/en">EN</Link>
      </div>

    </header>
  );
}
