import Link from "next/link";

export default function Header({ lang }) {
  const isFR = lang === "fr";

  return (
    <header style={{
      backgroundColor: "#000",
      padding: "30px 60px",
      display: "flex",
      alignItems: "center"
    }}>

      <div style={{ flex: 1 }}>
        <img
          src="/images/AscendantAutoDetailing.png"
          style={{ height: "100px" }}
        />
      </div>

      <div style={{
        flex: 2,
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        marginLeft: "200px"
      }}>
        {isFR ? (
          <>
            <Link href="/fr/services">Services</Link>
            <Link href="/fr/tarifs">Tarifs</Link>
            <Link href="/fr/reservation">Réservation</Link>
            <Link href="/fr/contact">Contact</Link>
            <Link href="/fr/a-propos">À propos</Link>
          </>
        ) : (
          <>
            <Link href="/en/services">Services</Link>
            <Link href="/en/packages">Packages</Link>
            <Link href="/en/booking">Book Now</Link>
            <Link href="/en/contact">Contact Us</Link>
            <Link href="/en/about">About Us</Link>
          </>
        )}
      </div>

      <div style={{ flex: 1 }}>
        <Link href="/fr">FR</Link> | <Link href="/en">EN</Link>
      </div>

    </header>
  );
}
