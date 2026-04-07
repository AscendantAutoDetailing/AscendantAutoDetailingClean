import Link from "next/link";

export const metadata = {
  title: "Ascendant Auto Detailing",
  description: "Premium car detailing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        fontFamily: "Arial, sans-serif",
        background: "#0a0a0a",
        color: "#fff"
      }}>

        {/* HEADER */}
        <header style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 50px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          background: "#0a0a0a"
        }}>

          {/* LOGO TEXT */}
          <Link href="/en" style={{
            textDecoration: "none",
            color: "#fff",
            fontWeight: "600",
            fontSize: "20px",
            letterSpacing: "1px"
          }}>
            Ascendant Auto Detailing
          </Link>

          {/* NAVIGATION */}
          <nav style={{
            display: "flex",
            gap: "28px",
            alignItems: "center"
          }}>
            <Link href="/en" style={navStyle}>Home</Link>
            <Link href="/en/services" style={navStyle}>Services</Link>
            <Link href="/en/pricing" style={navStyle}>Pricing</Link>
            <Link href="/en/booking" style={navStyle}>Book</Link>
            <Link href="/en/contact" style={navStyle}>Contact</Link>

            <span style={{ opacity: 0.3 }}>|</span>

            <Link href="/fr" style={navStyle}>FR</Link>
          </nav>

        </header>

        {/* PAGE CONTENT */}
        <main style={{ padding: "30px" }}>
          {children}
        </main>

      </body>
    </html>
  );
}

const navStyle = {
  color: "#e5e5e5",
  textDecoration: "none",
  fontSize: "14px",
  letterSpacing: "1px"
};
