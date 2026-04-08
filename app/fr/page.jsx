import Link from "next/link";

export default function HomeFR() {
  return (
    <main style={{ fontFamily: "sans-serif", backgroundColor: "#0a0a0a", color: "white" }}>
      
      {/* HERO SECTION */}
      <section style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "140px 20px",
        position: "relative"
      }}>
        
        {/* OVERLAY */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.4))"
        }} />

        <div style={{
          position: "relative",
          padding: "60px",
          maxWidth: "900px"
        }}>
          <p style={{
            letterSpacing: "3px",
            color: "#d4af37",
            fontSize: "14px",
            marginBottom: "10px"
          }}>
            SERVICE D’ESTHÉTIQUE AUTOMOBILE MOBILE À MONTRÉAL
          </p>

          <h1 style={{
            fontSize: "56px",
            margin: "20px 0",
            lineHeight: "1.1",
            fontWeight: "600"
          }}>
            Esthétique automobile professionnelle pour tous types de véhicules.
          </h1>

          <p style={{
            color: "#ccc",
            marginBottom: "40px",
            fontSize: "18px",
            maxWidth: "600px",
            lineHeight: "1.6"
          }}>
            Ascendant Auto Detailing offre un service d’esthétique automobile mobile haut de gamme à Montréal,
            incluant la Rive-Sud et la Rive-Nord.
          </p>

          <div style={{ display: "flex", gap: "20px" }}>
            
            <Link href="/fr/tarifs" style={{
              background: "linear-gradient(135deg, #d4af37, #f5d97a)",
              color: "black",
              padding: "14px 26px",
              borderRadius: "6px",
              fontWeight: "600",
              textDecoration: "none"
            }}>
              Voir les tarifs
            </Link>

            <Link href="/fr/booking" style={{
              color: "white",
              padding: "14px 26px",
              border: "1px solid #d4af37",
              borderRadius: "6px",
              fontWeight: "600",
              textDecoration: "none"
            }}>
              Réserver maintenant
            </Link>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{
        padding: "100px 20px",
        maxWidth: "1000px",
        margin: "auto"
      }}>
        <h2 style={{
          fontSize: "36px",
          marginBottom: "20px",
          color: "#d4af37"
        }}>
          Qu’est-ce que l’esthétique automobile professionnelle ?
        </h2>

        <div style={{
          width: "60px",
          height: "3px",
          backgroundColor: "#d4af37",
          marginBottom: "30px"
        }} />

        <p style={{ color: "#ccc", lineHeight: "1.9" }}>
          L’esthétique automobile est un processus complet de nettoyage, de restauration et de finition.
        </p>
      </section>

    </main>
  );
}
