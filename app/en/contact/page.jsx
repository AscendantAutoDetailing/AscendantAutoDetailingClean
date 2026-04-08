"use client";

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff", fontFamily: "sans-serif" }}>

      {/* HERO */}
      <div
        style={{
          height: "320px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80"
          alt="Luxury Car"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div>
            <p style={{ fontSize: "12px", letterSpacing: "4px", color: "#aaa" }}>
              CONTACT
            </p>
            <h1 style={{ fontSize: "36px", marginTop: "10px" }}>
              Get In Touch
            </h1>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 20px" }}>

        {/* INTRO */}
        <p
          style={{
            textAlign: "center",
            color: "#bbb",
            lineHeight: "1.7",
            marginBottom: "60px",
          }}
        >
          Whether you're ready to book a premium detailing service or have a question,
          our team is here to assist you. Reach out anytime and we’ll respond quickly.
        </p>

        {/* CONTACT + SOCIAL */}
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "60px" }}>

          {/* CONTACT */}
          <div
            style={{
              flex: 1,
              minWidth: "250px",
              background: "#111",
              padding: "25px",
              borderRadius: "10px",
              border: "1px solid #222",
            }}
          >
            <h3 style={{ marginBottom: "20px" }}>Direct Contact</h3>

            <p style={{ color: "#888", fontSize: "12px" }}>PHONE</p>
            <p style={{ marginBottom: "15px" }}>Your Phone Number</p>

            <p style={{ color: "#888", fontSize: "12px" }}>EMAIL</p>
            <p>Your Email</p>
          </div>

          {/* SOCIAL */}
          <div
            style={{
              flex: 1,
              minWidth: "250px",
              background: "#111",
              padding: "25px",
              borderRadius: "10px",
              border: "1px solid #222",
            }}
          >
            <h3 style={{ marginBottom: "20px" }}>Social Platforms</h3>

            <p>Facebook</p>
            <p>Instagram</p>
            <p>TikTok</p>
          </div>

        </div>

        {/* FORM */}
        <div
          style={{
            background: "#111",
            padding: "30px",
            borderRadius: "10px",
            border: "1px solid #222",
            marginBottom: "60px",
          }}
        >
          <h3 style={{ marginBottom: "20px", textAlign: "center" }}>
            Request a Service
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>

            <input
              placeholder="Full Name"
              style={inputStyle}
            />

            <input
              placeholder="Phone Number"
              style={inputStyle}
            />

            <input
              placeholder="Email Address"
              style={inputStyle}
            />

            <textarea
              placeholder="Tell us about your vehicle and needs..."
              rows="4"
              style={inputStyle}
            />

            <button
              style={{
                background: "#fff",
                color: "#000",
                padding: "12px",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Submit Request
            </button>

          </div>
        </div>

        {/* MAP */}
        <div>
          <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
            We are serving Montreal, the South Shore, the North Shore
          </h3>

          <div style={{ borderRadius: "10px", overflow: "hidden" }}>
            <iframe
              src="https://maps.google.com/maps?q=Montreal,Longueuil,Laval&t=&z=10&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  background: "#000",
  border: "1px solid #333",
  borderRadius: "6px",
  color: "#fff",
};
