import Link from "next/link";

export const metadata = {
  title: "Ascendant Auto Detailing",
  description: "Premium car detailing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#0a0a0a", color: "#fff" }}>
        
        {/* HEADER */}
        <header style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 40px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          background: "#0a0a0a"
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

          {/* NAVIGATION */}
          <nav style={{ display: "flex", gap: "28px", alignItems: "center" }}>
            
            {/* ENGLISH */}
            <Link href="/en" style={linkStyle}>Home</Link>
            <Link href="/en/services" style={linkStyle}>Services</Link>
            <Link href="/en/pricing" style={linkStyle}>Pricing</Link>
            <Link href="/en/booking" style={linkStyle}>Book</Link>
            <Link href="/en/contact" style={linkStyle}>Contact</Link>

            {/* SEPARATOR */}
            <span style={{ opacity: 0.3 }}>|</span>

            {/* FRENCH */}
            <Link href="/fr" style={linkStyle}>FR</Link>

          </nav>
        </header>

        {/* PAGE */}
        <main>{children}</main>

      </body>
    </html>
  );
}

const linkStyle = {
  color: "#e5e5e5",
  textDecoration: "none",
  fontSize: "14px",
  letterSpacing: "1px"
};
