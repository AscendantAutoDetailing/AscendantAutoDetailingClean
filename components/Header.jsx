import Link from "next/link";

export default function Header({ lang }) {
  const isFR = lang === "fr";

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "15px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: "Montserrat, sans-serif",
    whiteSpace: "nowrap"
  };

  return (
    <header
      style={{
        backgroundColor: "#000",
        padding: "30px 60px",
        display: "flex",
        alignItems: "center"
      }}
    >
      {/* LOGO */}
      <div style={{ flex: "1" }}>
        <img
          src="/images/AscendantAutoDetailing.png"
          alt="Ascendant Auto Detailing"
          style={{ height: "70px" }}
        />
      </div>

      {/* NAV + LANG */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
          flex: "2",
          justifyContent: "center",
          marginLeft: "200px"
        }}
      >
        {/* NAV */}
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

        {/* DIVIDER BETWEEN NAV AND FR */}
        <div
          style={{
            height: "20px",
            width: "1px",
            backgroundColor: "#555"
          }}
        />

        {/* LANG */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}
        >
          <Link href="/fr" style={linkStyle}>FR</Link>

          {/* SMALL DIVIDER */}
          <div
            style={{
              height: "12px",
              width: "1px",
              backgroundColor: "#333"
            }}
          />

          <Link href="/en" style={linkStyle}>EN</Link>
        </div>
      </div>

      {/* RIGHT BALANCE */}
      <div style={{ flex: "1" }} />
    </header>
  );
}
