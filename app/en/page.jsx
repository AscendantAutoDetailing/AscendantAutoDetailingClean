export default function Home() {
  return (
    <div style={{ background: "#0a0a0a", color: "#fff" }}>

      {/* HERO */}
      <section style={{
        position: "relative",
        height: "85vh",
        display: "flex",
        alignItems: "center",
        padding: "0 60px",
        overflow: "hidden"
      }}>

        {/* IMAGE */}
        <img
          src="/hero.jpg"
          alt="Luxury Car"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            top: 0,
            left: 0,
            filter: "brightness(0.45)"
          }}
        />

        {/* DARK OVERLAY (makes text readable) */}
        <div style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2))"
        }} />

        {/* CONTENT */}
        <div style={{ position: "relative", maxWidth: "700px" }}>
          <p style={{ color: "#c9a84f", letterSpacing: "2px", fontSize: "12px" }}>
            MOBILE AUTO DETAILING IN MONTREAL
          </p>

          <h1 style={{
            fontSize: "60px",
            fontWeight: "700",
            lineHeight: "1.1",
            margin: "20px 0"
          }}>
            Professional detailing for all types of vehicles.
          </h1>

          <p style={{ opacity: 0.85, lineHeight: "1.7" }}>
            Ascendant Auto Detailing delivers premium mobile car detailing across Montreal,
            including the South Shore and North Shore.
          </p>

          {/* BUTTONS */}
          <div style={{ marginTop: "30px", display: "flex", gap: "15px" }}>
            <a href="/en/pricing" style={goldBtn}>View Prices</a>
            <a href="/en/booking" style={outlineBtn}>Book Now</a>
          </div>
        </div>

      </section>

    </div>
  );
}

const goldBtn = {
  background: "#c9a84f",
  color: "#000",
  padding: "14px 26px",
  borderRadius: "6px",
  textDecoration: "none",
  fontWeight: "600"
};

const outlineBtn = {
  border: "1px solid #c9a84f",
  color: "#fff",
  padding: "14px 26px",
  borderRadius: "6px",
  textDecoration: "none"
};
