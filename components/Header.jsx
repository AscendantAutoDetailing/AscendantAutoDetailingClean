import Link from "next/link";

export default function Header({ lang }) {
  const isFR = lang === "fr";

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "14px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontWeight: "500"
  };

  return (
    <header style={{
      backgroundColor: "#000",
      padding: "30px 80px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }}>

      {/* LOGO */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/logo.png"
          alt="Ascendant Auto Detailing"
          style={{
            height: "75px",
            objectFit: "contain"
          }}
        />
      </div>

      {/* NAV CENTER */}
      <nav style={{
        display: "flex",
        gap: "50px",
        alignItems: "center"
      }}>
        {isFR ? (
          <>
            <Link href="/fr/services" style={linkStyle}>Services</Link>
            <Link href="/fr/tarifs" style={linkStyle}>Tarifs</Link>
            <Link href="/fr/reservation" style={linkStyle}>Réservation</Link>
            <Link href="/fr/contact" style={linkStyle}>Contact</Link>
            <Link href="/fr/a-propos" style={linkStyle}>À propos</Link>
          </>
        ) : (
          <>
            <Link href="/en/services" style={linkStyle}>Services</Link>
            <Link href="/en/packages" style={linkStyle}>Packages</Link>
            <Link href="/en/booking" style={linkStyle}>Book Now</Link>
            <Link href="/en/contact" style={linkStyle}>Contact Us</Link>
            <Link href="/en/about" style={linkStyle}>About Us</Link>
          </>
        )}
      </nav>

      {/* LANGUAGE SWITCH */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "10px"
      }}>
        <Link href="/fr" style={linkStyle}>FR</Link>
        <span style={{ color: "#666" }}>|</span>
        <Link href="/en" style={linkStyle}>EN</Link>
      </div>

    </header>
  );
}
