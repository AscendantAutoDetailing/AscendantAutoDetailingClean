import Link from "next/link";

export default function HomeFR() {
  return (
    <main style={{ fontFamily: "sans-serif", backgroundColor: "#0a0a0a", color: "white" }}>
      
      {/* HERO SECTION */}
      <section style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "140px 20px",
        position: "relative"
      }}>
        
        {/* DARK + GRADIENT OVERLAY */}
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
            ESTHÉTIQUE AUTOMOBILE MOBILE À MONTRÉAL
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
            incluant la Rive-Sud et la Rive-Nord. Que vous conduisiez un véhicule quotidien,
            une voiture de luxe ou une voiture haute performance, nous vous offrons une précision inégalée directement chez vous.
          </p>

          <div style={{ display: "flex", gap: "20px" }}>
            
            <Link href="/fr/pricing">
              <button style={{
                background: "linear-gradient(135deg, #d4af37, #f5d97a)",
                color: "black",
                padding: "14px 26px",
                border: "none",
                borderRadius: "6px",
                fontWeight: "600",
                cursor: "pointer"
              }}>
                Voir les tarifs
              </button>
            </Link>

            <Link href="/fr/booking">
              <button style={{
                backgroundColor: "transparent",
                color: "white",
                padding: "14px 26px",
                border: "1px solid #d4af37",
                borderRadius: "6px",
                fontWeight: "600",
                cursor: "pointer"
              }}>
                Réserver maintenant
              </button>
            </Link>

          </div>
        </div>
      </section>

      {/* ABOUT DETAILING */}
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

        <p style={{ color: "#ccc", lineHeight: "1.9", fontSize: "17px" }}>
          L’esthétique automobile est un processus minutieux de nettoyage, de restauration et de finition
          qui va bien au-delà d’un simple lavage de voiture. Chez Ascendant Auto Detailing,
          chaque surface est traitée avec précision à l’aide de produits haut de gamme et de techniques expertes.
        </p>

        <p style={{ color: "#ccc", marginTop: "20px", lineHeight: "1.9", fontSize: "17px" }}>
          Nos services incluent le nettoyage intérieur en profondeur, l’extraction des taches,
          le traitement du cuir, la décontamination extérieure, le polissage et des protections
          conçues pour préserver la valeur de votre véhicule.
        </p>

        <p style={{ color: "#ccc", marginTop: "20px", lineHeight: "1.9", fontSize: "17px" }}>
          Nous desservons fièrement Montréal, la Rive-Sud et la Rive-Nord,
          en offrant un service entièrement mobile — directement à votre porte.
        </p>
      </section>

      {/* FEATURES */}
      <section style={{
        display: "flex",
        gap: "30px",
        padding: "60px 20px",
        justifyContent: "center",
        flexWrap: "wrap"
      }}>
        {[
          {
            title: "Service Mobile",
            text: "Nous nous déplaçons directement à votre domicile ou lieu de travail partout à Montréal."
          },
          {
            title: "Tous types de véhicules",
            text: "Des voitures du quotidien aux véhicules de luxe et haute performance."
          },
          {
            title: "Qualité Premium",
            text: "Produits haut de gamme et souci du détail irréprochable."
          }
        ].map((item, index) => (
          <div key={index} style={{
            background: "linear-gradient(145deg, #111, #0d0d0d)",
            padding: "40px",
            borderRadius: "12px",
            maxWidth: "320px",
            border: "1px solid #1f1f1f",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            transition: "0.3s"
          }}>
            <h3 style={{
              color: "#d4af37",
              marginBottom: "10px",
              fontSize: "20px"
            }}>
              {item.title}
            </h3>

            <p style={{
              color: "#aaa",
              lineHeight: "1.6"
            }}>
              {item.text}
            </p>
          </div>
        ))}
      </section>

    </main>
  );
}
