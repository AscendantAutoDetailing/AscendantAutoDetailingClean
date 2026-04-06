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
      padding: "28px 60px",
      display: "flex",
      alignItems: "center"
    }}>

      {/* LOGO */}
      <div style={{ flex: "1" }}>
        <img
          src="/logo.png"
          alt="logo"
          style={{ height: "70px" }}
        />
      </div>

      {/* NAV CENTER */}
      <nav style={{
        display: "flex",
        gap: "45px",
        justifyContent: "center",
        flex: "2"
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

      {/* RIGHT SIDE (LANG) */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        flex: "1",
        justifyContent: "flex-end"
      }}>

        {/* SEPARATOR AFTER NAV */}
        <div style={{
          height: "18px",
          width: "1px",
          backgroundColor: "#444",
          marginRight: "10px"
        }} />

        <Link href="/fr" style={linkStyle}>FR</Link>

        {/* SUBTLE SEPARATOR */}
        <div style={{
          height: "12px",
          width: "1px",
          backgroundColor: "#333"
        }} />

        <Link href="/en" style={linkStyle}>EN</Link>

      </div>

    </header>
  );
}
