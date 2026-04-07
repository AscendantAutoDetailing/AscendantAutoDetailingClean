import Link from "next/link";

export default function FrLayout({ children }) {
  return (
    <>
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 40px",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        background: "#0a0a0a",
        color: "#fff"
      }}>
        
        <Link href="/fr" style={{ textDecoration: "none", color: "white" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img
              src="/logo.png"
              alt="Ascendant Auto Detailing"
              style={{ height: "48px" }}
            />
            <span style={{ fontSize: "20px", fontWeight: "600" }}>
              Ascendant
            </span>
          </div>
        </Link>

        <nav style={{ display: "flex", gap: "28px" }}>
          <Link href="/fr">Accueil</Link>
          <Link href="/fr/services">Services</Link>
          <Link href="/fr/pricing">Tarifs</Link>
          <Link href="/fr/booking">Réserver</Link>
          <Link href="/fr/contact">Contact</Link>
          <Link href="/en">EN</Link>
        </nav>
      </header>

      <main>{children}</main>
    </>
  );
}
