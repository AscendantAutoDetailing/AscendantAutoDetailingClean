import Link from "next/link";

export default function EnLayout({ children }) {
  return (
    <div>
      <header style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
        <h2>Ascendant Auto Detailing</h2>

        <nav style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
          <Link href="/en">Home</Link>
          <Link href="/en/services">Services</Link>
          <Link href="/en/pricing">Pricing</Link>
          <Link href="/en/booking">Book</Link>
          <Link href="/en/contact">Contact</Link>
          <Link href="/fr">FR</Link>
        </nav>
      </header>

      <main style={{ padding: "20px" }}>
        {children}
      </main>
    </div>
  );
}
