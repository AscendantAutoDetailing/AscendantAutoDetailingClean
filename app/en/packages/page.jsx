"use client";

export default function PackagesPage() {
  return (
    <div style={{ background: "#000", color: "#fff", padding: "40px 20px", fontFamily: "sans-serif" }}>

      {/* HERO CARD */}
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto 60px",
        borderRadius: "20px",
        border: "1px solid #222",
        overflow: "hidden",
        display: "flex",
        flexWrap: "wrap",
        background: "#0a0a0a"
      }}>

        <div style={{ flex: 1, padding: "50px" }}>
          <p style={{ color: "#d4af37", letterSpacing: "3px", fontSize: "12px" }}>
            PRICING
          </p>

          <h1 style={{ fontSize: "42px", margin: "15px 0" }}>
            Services & Pricing
          </h1>

          <p style={{ color: "#aaa", maxWidth: "400px" }}>
            Premium detailing packages designed for every level of care — from regular maintenance to full transformation.
          </p>

          <div style={{ marginTop: "20px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {["Premium Finish", "Luxury Care", "Interior & Exterior"].map((tag, i) => (
              <span key={i} style={{
                border: "1px solid #333",
                padding: "8px 14px",
                borderRadius: "20px",
                fontSize: "12px"
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div style={{ flex: 1, minHeight: "250px" }}>
          <img
            src="https://images.unsplash.com/photo-1549921296-3ecfdf5c0d16?auto=format&fit=crop&w=1600&q=80"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* PACKAGES */}
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px"
      }}>

        {/* CARE */}
        <PackageCard
          title="Ascendant Care"
          subtitle="Refined Maintenance"
          price={["Sedan $174.99", "SUV $209.99", "Large SUV / Truck $249.99"]}
          items={[
            "Safe foam hand wash",
            "Deep wheel cleaning",
            "Tire dressing",
            "Interior vacuum",
            "Glass cleaning"
          ]}
        />

        {/* ELITE */}
        <PackageCard
          title="Ascendant Elite"
          subtitle="Interior & Exterior Enhancement"
          highlight
          price={["Sedan $274.99", "SUV $309.99", "Large SUV / Truck $349.99"]}
          items={[
            "Everything in Care",
            "Steam cleaning",
            "Seat extraction",
            "Light stain removal",
            "Paint sealant"
          ]}
        />

        {/* SIGNATURE */}
        <PackageCard
          title="Ascendant Signature"
          subtitle="Complete Transformation"
          price={["Sedan $374.99", "SUV $409.99", "Large SUV / Truck $449.99"]}
          items={[
            "Everything in Elite",
            "Full extraction",
            "Salt removal",
            "Leather treatment",
            "Engine bay detail"
          ]}
        />

      </div>

      {/* ADDITIONAL */}
      <div style={{
        maxWidth: "1100px",
        margin: "80px auto",
        padding: "40px",
        border: "1px solid #222",
        borderRadius: "20px",
        background: "#0a0a0a"
      }}>

        <p style={{ color: "#d4af37", fontSize: "12px", letterSpacing: "3px" }}>
          ADDITIONAL SERVICES
        </p>

        <h2 style={{ fontSize: "32px", margin: "10px 0 30px" }}>
          Popular Enhancements
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px"
        }}>

          <EnhancementCard title="Interior & Condition" items={[
            "Pet Hair Removal — $75",
            "Stain Removal — $80+",
            "Ozone Treatment — $150"
          ]} />

          <EnhancementCard title="Protection & Longevity" items={[
            "Fabric Protection — $120",
            "Leather Treatment — $150",
            "Hydrophobic Coating — $80"
          ]} />

          <EnhancementCard title="Specialized Services" items={[
            "Engine Bay — $80",
            "Iron Removal — $50",
            "Paint Correction — $800+"
          ]} />

        </div>

      </div>

      {/* FOOTER NOTE */}
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "20px",
        borderRadius: "12px",
        background: "#111",
        border: "1px solid #333",
        textAlign: "center"
      }}>
        <p style={{ color: "#d4af37" }}>
          A $50 retainer fee is required to secure your appointment.
        </p>
        <p style={{ color: "#888", marginTop: "5px" }}>
          Prices may vary depending on vehicle condition.
        </p>
      </div>

    </div>
  );
}

/* COMPONENTS */

function PackageCard({ title, subtitle, price, items, highlight }) {
  return (
    <div style={{
      padding: "25px",
      borderRadius: "20px",
      border: highlight ? "1px solid #d4af37" : "1px solid #222",
      background: highlight ? "#1a1205" : "#0a0a0a"
    }}>
      <h3 style={{ fontSize: "20px" }}>{title}</h3>
      <p style={{ color: "#d4af37", marginBottom: "15px" }}>{subtitle}</p>

      <div style={{ marginBottom: "20px" }}>
        {price.map((p, i) => (
          <p key={i} style={{ color: "#aaa" }}>{p}</p>
        ))}
      </div>

      <ul style={{ color: "#888", fontSize: "14px", lineHeight: "1.6" }}>
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

function EnhancementCard({ title, items }) {
  return (
    <div style={{
      padding: "20px",
      borderRadius: "15px",
      border: "1px solid #222",
      background: "#0a0a0a"
    }}>
      <h4 style={{ marginBottom: "10px" }}>{title}</h4>

      {items.map((item, i) => (
        <p key={i} style={{ color: "#aaa", fontSize: "14px" }}>
          {item}
        </p>
      ))}
    </div>
  );
}
