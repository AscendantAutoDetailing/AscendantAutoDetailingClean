import Link from "next/link";

export default function FrenchLayout({ children }) {
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
          <Link href="/fr/services">Services</Link>
          <Link href="/fr/tarifs">Tarifs</Link>
          <Link href="/fr/reservation">Réservation</Link>
          <Link href="/fr/contact">Contactez-nous</Link>
          <Link href="/fr/a-propos">À propos</Link>
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
