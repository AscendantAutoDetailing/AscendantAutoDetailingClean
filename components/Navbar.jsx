"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      width: "100%",
      background: "#0a0a0a",
      borderBottom: "1px solid #1f1f1f",
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "auto",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white"
      }}>
        <div style={{ fontWeight: "600" }}>
          Ascendant Auto Detailing
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          <Link href="/fr">Accueil</Link>
          <Link href="/fr/services">Services</Link>
          <Link href="/fr/tarifs">Tarifs</Link>
          <Link href="/fr/booking">Réserver</Link>
          <Link href="/fr/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
