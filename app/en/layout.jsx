import Link from "next/link";

export default function EnglishLayout({ children }) {
  return (
    <div>
      {/* HEADER */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        borderBottom: "1px solid #ccc"
      }}>
        
        {/* LOGO */}
        <div>
          <strong>Ascendant Auto Detailing</strong>
        </div>

        {/* NAVIGATION */}
        <nav style={{ display: "flex", gap: "20px" }}>
          <Link href="/en/services">Services</Link>
          <Link href="/en/packages">Packages</Link>
          <Link href="/en/booking">Book Now</Link>
          <Link href="/en/contact">Contact Us</Link>
          <Link href="/en/about">About Us</Link>
        </nav>

        {/* LANGUAGE SWITCH */}
        <div style={{ display: "flex", gap: "10px" }}>
          <Link href="/fr">FR</Link>
          <Link href="/en">EN</Link>
        </div>

      </header>

      {/* PAGE CONTENT */}
      <main style={{ padding: "20px" }}>
        {children}
      </main>
    </div>
  );
}
