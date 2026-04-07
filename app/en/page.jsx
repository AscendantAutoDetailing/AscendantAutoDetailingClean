export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section style={{
        position: "relative",
        height: "85vh",
        display: "flex",
        alignItems: "center",
        padding: "0 60px",
        overflow: "hidden"
      }}>

        {/* BACKGROUND IMAGE */}
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
            filter: "brightness(0.5)"
          }}
        />

        {/* CONTENT */}
        <div style={{
          position: "relative",
          maxWidth: "700px",
          color: "#fff"
        }}>
          <p style={{
            letterSpacing: "3px",
            fontSize: "12px",
            opacity: 0.7
          }}>
            MOBILE AUTO DETAILING IN MONTREAL
          </p>

          <h1 style={{
            fontSize: "56px",
            fontWeight: "700",
            lineHeight: "1.1",
            margin: "20px 0"
          }}>
            Professional detailing for all types of vehicles.
          </h1>

          <p style={{
            opacity: 0.85,
            lineHeight: "1.6",
            maxWidth: "600px"
          }}>
            Ascendant Auto Detailing brings professional mobile detailing directly to you.
            Whether you drive a daily commuter, a family SUV, or a high-end vehicle,
            we provide the same level of care and attention to every car.
          </p>

          {/* BUTTONS */}
          <div style={{
            marginTop: "30px",
            display: "flex",
            gap: "15px"
          }}>
            <a href="/en/pricing" style={primaryBtn}>
              View Pricing
            </a>

            <a href="/en/booking" style={secondaryBtn}>
              Book Appointment
            </a>
          </div>
        </div>

      </section>

    </div>
  );
}

const primaryBtn = {
  background: "#111",
  color: "#fff",
  padding: "14px 24px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "500"
};

const secondaryBtn = {
  background: "#fff",
  color: "#111",
  padding: "14px 24px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "500"
};
