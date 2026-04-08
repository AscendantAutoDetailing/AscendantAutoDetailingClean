"use client";

const packages = [
  {
    name: "Ascendant Care",
    tag: "ESSENTIAL",
    subtitle: "Refined Maintenance",
    description:
      "Ideal for clients who want to keep their vehicle consistently clean, fresh, and well-presented.",
    prices: [
      { label: "Sedan", value: "$174.99" },
      { label: "SUV", value: "$209.99" },
      { label: "Large SUV / Truck", value: "$249.99" },
    ],
    duration: "Approx. 2 Hours",
    included: [
      "Safe foam hand wash",
      "Deep wheel cleaning",
      "Tire dressing",
      "Interior vacuum",
      "Glass cleaning",
    ],
  },
  {
    name: "Ascendant Elite",
    tag: "PREMIUM",
    badge: "MOST REQUESTED",
    subtitle: "Interior & Exterior Enhancement",
    description:
      "Perfect for clients looking for a more complete detail with deeper interior cleaning and protection.",
    prices: [
      { label: "Sedan", value: "$274.99" },
      { label: "SUV", value: "$309.99" },
      { label: "Large SUV / Truck", value: "$349.99" },
    ],
    duration: "Approx. 4 Hours",
    included: [
      "Everything in Care",
      "Steam cleaning",
      "Seat extraction",
      "Stain removal",
      "Paint sealant",
    ],
    featured: true,
  },
  {
    name: "Ascendant Signature",
    tag: "SIGNATURE",
    subtitle: "Complete Transformation",
    description:
      "Our most comprehensive package for vehicles that need full restoration-level attention.",
    prices: [
      { label: "Sedan", value: "$374.99" },
      { label: "SUV", value: "$409.99" },
      { label: "Large SUV / Truck", value: "$449.99" },
    ],
    duration: "Approx. 6 Hours",
    included: [
      "Everything in Elite",
      "Full extraction",
      "Salt removal",
      "Leather treatment",
      "Engine bay detail",
    ],
  },
];

export default function PackagesPage() {
  return (
    <div style={{ background: "#050505", color: "#fff", padding: "40px 0", fontFamily: "sans-serif" }}>

      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 20px" }}>

        {/* HERO */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr",
          border: "1px solid #222",
          borderRadius: "25px",
          overflow: "hidden",
          marginBottom: "40px",
          background: "#0a0a0a"
        }}>

          <div style={{ padding: "60px 70px 60px 60px" }}>
            <p style={{ color: "#d4af37", letterSpacing: "3px", fontSize: "12px" }}>
              PRICING
            </p>

            <h1 style={{ fontSize: "52px", margin: "15px 0" }}>
              Services & Pricing
            </h1>

            <p style={{ color: "#aaa", maxWidth: "450px" }}>
              Premium detailing packages designed for every level of care.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1600&q=80"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

        </div>

        {/* PACKAGES */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px"
        }}>

          {packages.map((pkg, i) => (
            <div key={i} style={{
              padding: "25px",
              borderRadius: "20px",
              border: pkg.featured ? "1px solid #d4af37" : "1px solid #222",
              background: pkg.featured ? "#1a1205" : "#0a0a0a",
              boxShadow: pkg.featured
                ? "0 0 40px rgba(212,175,55,0.15)"
                : "none"
            }}>
              <h3>{pkg.name}</h3>
              <p style={{ color: "#d4af37" }}>{pkg.subtitle}</p>

              <p style={{ color: "#aaa", marginTop: "10px" }}>
                {pkg.description}
              </p>

              <div style={{ marginTop: "20px" }}>
                {pkg.prices.map((p, idx) => (
                  <div key={idx} style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>{p.label}</span>
                    <span style={{ color: "#d4af37" }}>{p.value}</span>
                  </div>
                ))}
              </div>

              <p style={{ marginTop: "10px", color: "#777" }}>
                {pkg.duration}
              </p>

              <ul style={{ marginTop: "20px", color: "#aaa", fontSize: "14px" }}>
                {pkg.included.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}
