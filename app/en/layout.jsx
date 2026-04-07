import Link from "next/link";

export default function EnLayout({ children }) {
  return (
    <>
      {/* HEADER */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 40px",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        background: "#0a0a0a",
        color: "#fff"
      }}>
        
        {/* LOGO */}
        <Link href="/en" style={{ textDecoration: "none", color: "white" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img
              src="/logo.png"
              alt="Ascendant Auto Detailing"
              style={{
                height: "48px",
                width: "auto",
                objectFit: "contain"
              }}
            />
            <span style={{
              fontSize: "20px",
              fontWeight: "600",
              letterSpacing: "1px"
            }}>
              Ascendant
            </span>
          </div>
        </Link>

        {/* NAV */}
        <nav style={{ display: "flex", gap: "28px" }}>
          <Link href="/en" style={linkStyle}>Home</Link>
          <Link href="/en/services" style={linkStyle}>Services</Link>
          <Link href="/en/pricing" style={linkStyle}>Pricing</Link>
          <Link href="/en/booking" style={linkStyle}>Book</Link>
          <Link href="/en/contact" style={linkStyle}>Contact</Link>
          <Link href="/fr" style={linkStyle}>FR</Link>
        </nav>
      </header>

      <main>{children}</main>
    </>
  );
}

const linkStyle = {
  color: "#e5e5e5",
  textDecoration: "none",
  fontSize: "14px",
  letterSpacing: "1px"
};
