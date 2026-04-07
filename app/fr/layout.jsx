import Link from "next/link";

export default function FrLayout({ children }) {
  return (
    <div>
      <header style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
        <h2>Ascendant Auto Detailing</h2>

        <nav style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
          <Link href="/fr">Accueil</Link>
          <Link href="/fr/services">Services</Link>
          <Link href="/fr/pricing">Tarifs</Link>
          <Link href="/fr/booking">Réserver</Link>
          <Link href="/fr/contact">Contact</Link>
          <Link href="/en">EN</Link>
        </nav>
      </header>

      <main style={{ padding: "20px" }}>
        {children}
      </main>
    </div>
  );
}
