"use client";

export default function Header() {
  return (
    <header style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 50px",
      background: "#000",
      color: "#fff"
    }}>

      {/* LOGO */}
      <a href="/en">
        <img
          src="/logo.png"
          alt="Ascendant"
          style={{ height: "60px", objectFit: "contain" }}
        />
      </a>

      {/* NAV */}
      <nav style={{
        display: "flex",
        gap: "30px",
        alignItems: "center",
        fontSize: "14px",
        letterSpacing: "1px"
      }}>
        <a href="/en/services" style={navStyle}>SERVICES</a>
        <a href="/en/pricing" style={navStyle}>PACKAGES</a>
        <a href="/en/booking" style={navStyle}>BOOK NOW</a>
        <a href="/en/contact" style={navStyle}>CONTACT US</a>
        <a href="/en/about" style={navStyle}>ABOUT US</a>

        <span style={{ opacity: 0.4 }}>|</span>

        <a href="/fr" style={navStyle}>FR</a>
        <a href="/en" style={navStyle}>EN</a>
      </nav>

    </header>
  );
}

const navStyle = {
  color: "#e5e5e5",
  textDecoration: "none"
};
