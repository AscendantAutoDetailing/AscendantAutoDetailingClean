import Link from "next/link";

export const metadata = {
  title: "Ascendant Auto Detailing",
  description: "Premium car detailing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        
        {/* HEADER */}
        <header style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: "1px solid #ddd"
        }}>
          
          {/* LOGO / NAME */}
          <Link href="/en" style={{ textDecoration: "none", color: "black" }}>
            <strong style={{ fontSize: "20px" }}>
              Ascendant Auto Detailing
            </strong>
          </Link>

          {/* NAV */}
          <nav style={{ display: "flex", gap: "20px" }}>
            <Link href="/en">Home</Link>
            <Link href="/en/services">Services</Link>
            <Link href="/en/pricing">Pricing</Link>
            <Link href="/en/booking">Book</Link>
            <Link href="/en/contact">Contact</Link>
            <span>|</span>
            <Link href="/fr">FR</Link>
          </nav>

        </header>

        {/* PAGE */}
        <main style={{ padding: "20px" }}>
          {children}
        </main>

      </body>
    </html>
  );
}
