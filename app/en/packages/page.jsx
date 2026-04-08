"use client";

const packages = [
  {
    name: "Ascendant Care",
    tag: "ESSENTIAL",
    subtitle: "Refined Maintenance",
    description:
      "Ideal for clients who want to keep their vehicle consistently clean, fresh, and well-presented. This package focuses on essential interior and exterior maintenance.",
    prices: [
      { label: "Sedan", value: "$174.99" },
      { label: "SUV", value: "$209.99" },
      { label: "Large SUV / Truck", value: "$249.99" },
    ],
    duration: "Approx. 2 Hours",
    included: [
      "Safe foam hand wash (two-bucket method)",
      "Deep wheel & brake dust cleaning",
      "Tire dressing (satin finish)",
      "Full interior vacuum",
      "Dashboard, console & panel wipe-down",
      "Door jamb cleaning",
      "Interior & exterior glass cleaning",
    ],
  },
  {
    name: "Ascendant Elite",
    tag: "PREMIUM",
    badge: "MOST REQUESTED",
    subtitle: "Interior & Exterior Enhancement",
    description:
      "Perfect for clients looking for a more complete detail with deeper interior cleaning, stain treatment, and added exterior protection for a more elevated finish.",
    prices: [
      { label: "Sedan", value: "$274.99" },
      { label: "SUV", value: "$309.99" },
      { label: "Large SUV / Truck", value: "$349.99" },
    ],
    duration: "Approx. 4 Hours",
    included: [
      "Everything in Ascendant Care",
      "Steam cleaning (high-touch areas)",
      "Carpet & seat spot extraction",
      "Light stain treatment",
      "Deep wheel detailing",
      "Trim & plastic conditioning",
      "4–6 month hydrophobic paint sealant",
      "Detailed vent & seam cleaning",
    ],
    featured: true,
  },
  {
    name: "Ascendant Signature",
    tag: "SIGNATURE",
    subtitle: "Complete Transformation",
    description:
      "Our most comprehensive package for vehicles that need full restoration-level attention. Best for heavily soiled interiors, neglected paint, salt buildup, and clients seeking the highest level of finish.",
    prices: [
      { label: "Sedan", value: "$374.99" },
      { label: "SUV", value: "$409.99" },
      { label: "Large SUV / Truck", value: "$449.99" },
    ],
    duration: "Approx. 6 Hours",
    included: [
      "Everything in Ascendant Elite",
      "Full carpet & upholstery extraction",
      "Advanced salt & heavy stain remediation",
      "Leather deep clean & conditioning",
      "Iron particle removal treatment",
      "Clay bar paint decontamination",
      "6–12 month premium sealant protection",
      "Engine bay detailing",
      "Exterior trim restoration",
    ],
  },
];

const enhancements = [
  {
    title: "Interior & Condition",
    items: [
      "Pet Hair Removal — $75 / $125+",
      "Targeted Stain Removal — $80–$150+",
      "Ozone Odor Treatment — $150",
    ],
  },
  {
    title: "Protection & Longevity",
    items: [
      "Interior Fabric Protection — $120–$180",
      "Leather Protection Treatment — $150–$250",
      "Windshield Hydrophobic Coating — $80–$120",
      "Wheel Protection Coating — $150–$275",
    ],
  },
  {
    title: "Specialized Services",
    items: [
      "Engine Bay Detail — $80–$120",
      "Iron Decontamination — $50–$80",
      "Undercarriage Winter Flush — $60–$100",
      "Multi-Stage Paint Correction — $800–$1,500",
    ],
  },
];

export default function PackagesPage() {
  return (
    <main
      style={{
        background: "#050505",
        color: "#f5f5f5",
        minHeight: "100vh",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        padding: "36px 18px 80px",
      }}
    >
      <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
        <HeroCard />

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "22px",
            marginTop: "28px",
          }}
        >
          {packages.map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} />
          ))}
        </section>

        <section
          style={{
            marginTop: "58px",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "28px",
            background:
              "linear-gradient(180deg, rgba(14,14,14,0.96) 0%, rgba(10,10,10,0.98) 100%)",
            padding: "34px",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.02) inset",
          }}
        >
          <p
            style={{
              color: "#b9911f",
              fontSize: "13px",
              letterSpacing: "0.35em",
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            Additional Services
          </p>

          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              lineHeight: 1.08,
              margin: "14px 0 12px",
              fontWeight: 700,
              letterSpacing: "-0.03em",
            }}
          >
            Popular Enhancements
          </h2>

          <p
            style={{
              color: "#9d9d9d",
              fontSize: "17px",
              lineHeight: 1.6,
              maxWidth: "760px",
              marginTop: 0,
              marginBottom: "30px",
            }}
          >
            Optional services recommended during inspection based on your
            vehicle&apos;s condition and your goals.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "18px",
            }}
          >
            {enhancements.map((group) => (
              <div
                key={group.title}
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "22px",
                  padding: "24px 22px",
                  background:
                    "linear-gradient(180deg, rgba(18,18,18,0.98) 0%, rgba(12,12,12,0.98) 100%)",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    margin: "0 0 18px",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {group.title}
                </h3>

                <div style={{ display: "grid", gap: "14px" }}>
                  {group.items.map((item) => (
                    <p
                      key={item}
                      style={{
                        margin: 0,
                        color: "#b8b8b8",
                        fontSize: "15px",
                        lineHeight: 1.55,
                      }}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            marginTop: "30px",
            borderRadius: "24px",
            border: "1px solid rgba(185,145,31,0.35)",
            background:
              "linear-gradient(90deg, rgba(34,25,5,0.85) 0%, rgba(22,18,8,0.92) 100%)",
            padding: "24px 26px",
            boxShadow: "0 0 0 1px rgba(185,145,31,0.06) inset",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#d7d7d7",
            }}
          >
            A <span style={{ color: "#ffcc33", fontWeight: 700 }}>$50 retainer fee</span> is required
            to secure your appointment. The retainer is applied to your total
            service cost.
          </p>
          <p
            style={{
              margin: "14px 0 0",
              color: "#898989",
              fontSize: "15px",
              lineHeight: 1.6,
            }}
          >
            Starting prices assume average vehicle condition. Excessive
            contamination or heavy soiling may require additional time.
          </p>
        </section>
      </div>
    </main>
  );
}

function HeroCard() {
  return (
    <section
      style={{
        borderRadius: "30px",
        overflow: "hidden",
        border: "1px solid rgba(185,145,31,0.28)",
        background:
          "linear-gradient(180deg, rgba(8,8,8,0.98) 0%, rgba(7,7,7,1) 100%)",
        display: "grid",
        gridTemplateColumns: "1.08fr 0.92fr",
        minHeight: "330px",
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.02) inset, 0 30px 80px rgba(0,0,0,0.45)",
      }}
    >
      <div
        style={{
          padding: "40px 42px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background:
            "linear-gradient(180deg, rgba(6,6,6,0.98) 0%, rgba(7,7,7,1) 100%)",
        }}
      >
        <p
          style={{
            color: "#b9911f",
            fontSize: "13px",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Pricing
        </p>

        <h1
          style={{
            margin: "14px 0 16px",
            fontSize: "clamp(42px, 5vw, 64px)",
            lineHeight: 1.02,
            fontWeight: 750,
            letterSpacing: "-0.045em",
          }}
        >
          Services & Pricing
        </h1>

        <p
          style={{
            color: "#a3a3a3",
            fontSize: "18px",
            lineHeight: 1.7,
            maxWidth: "560px",
            margin: 0,
          }}
        >
          Premium detailing packages designed for every level of care — from
          regular maintenance to full interior and exterior transformation.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            marginTop: "28px",
          }}
        >
          {["Premium Finish", "Luxury Care", "Interior & Exterior"].map(
            (item) => (
              <span
                key={item}
                style={{
                  padding: "12px 18px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.09)",
                  background: "rgba(18,18,18,0.95)",
                  color: "#cfcfcf",
                  fontSize: "14px",
                }}
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>

      <div
        style={{
          minHeight: "330px",
          position: "relative",
          background: "#070707",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1400&q=80"
          alt="Luxury sedan"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.45) contrast(1.05)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(7,7,7,0.35) 0%, rgba(7,7,7,0.05) 40%, rgba(7,7,7,0.45) 100%)",
          }}
        />
      </div>
    </section>
  );
}

function PackageCard({ pkg }) {
  const border = pkg.featured
    ? "1px solid rgba(185,145,31,0.55)"
    : "1px solid rgba(255,255,255,0.08)";

  const background = pkg.featured
    ? "linear-gradient(180deg, rgba(27,19,6,0.82) 0%, rgba(10,10,10,0.98) 100%)"
    : "linear-gradient(180deg, rgba(12,12,12,0.98) 0%, rgba(9,9,9,0.98) 100%)";

  return (
    <article
      style={{
        border,
        borderRadius: "28px",
        background,
        padding: "28px",
        boxShadow: pkg.featured
          ? "0 0 0 1px rgba(185,145,31,0.08) inset"
          : "0 0 0 1px rgba(255,255,255,0.02) inset",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "16px",
          marginBottom: "8px",
          flexWrap: "wrap",
        }}
      >
        <div>
          {pkg.badge && (
            <span
              style={{
                display: "inline-block",
                padding: "8px 16px",
                borderRadius: "999px",
                border: "1px solid rgba(185,145,31,0.45)",
                color: "#d2aa2d",
                fontSize: "12px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                marginBottom: "18px",
                background: "rgba(52,38,9,0.35)",
                fontWeight: 700,
              }}
            >
              {pkg.badge}
            </span>
          )}

          <h2
            style={{
              margin: 0,
              fontSize: "26px",
              lineHeight: 1.12,
              fontWeight: 750,
              letterSpacing: "-0.03em",
            }}
          >
            {pkg.name}
          </h2>
        </div>

        <span
          style={{
            padding: "8px 16px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#8e8e8e",
            fontSize: "12px",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            background: "rgba(18,18,18,0.95)",
            whiteSpace: "nowrap",
          }}
        >
          {pkg.tag}
        </span>
      </div>

      <p
        style={{
          margin: "10px 0 22px",
          color: "#d2aa2d",
          fontSize: "15px",
          lineHeight: 1.5,
        }}
      >
        {pkg.subtitle}
      </p>

      <p
        style={{
          color: "#a8a8a8",
          fontSize: "16px",
          lineHeight: 1.9,
          margin: 0,
        }}
      >
        {pkg.description}
      </p>

      <div
        style={{
          marginTop: "26px",
          border: pkg.featured
            ? "1px solid rgba(185,145,31,0.24)"
            : "1px solid rgba(255,255,255,0.07)",
          borderRadius: "20px",
          background: "rgba(15,15,15,0.88)",
          padding: "18px 18px 14px",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#7e7e7e",
            fontSize: "12px",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
          }}
        >
          Starting At
        </p>

        <div style={{ marginTop: "14px", display: "grid", gap: "12px" }}>
          {pkg.prices.map((row) => (
            <div
              key={row.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "16px",
                alignItems: "center",
              }}
            >
              <span style={{ color: "#d6d6d6", fontSize: "16px" }}>
                {row.label}
              </span>
              <span
                style={{
                  color: "#ffcc33",
                  fontWeight: 700,
                  fontSize: "16px",
                }}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "16px",
            paddingTop: "16px",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            color: "#7f7f7f",
            fontSize: "15px",
          }}
        >
          {pkg.duration}
        </div>
      </div>

      <div style={{ marginTop: "26px" }}>
        <p
          style={{
            margin: 0,
            color: "#f4f4f4",
            fontSize: "14px",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          What&apos;s Included
        </p>

        <ul
          style={{
            margin: "18px 0 0",
            paddingLeft: "0",
            listStyle: "none",
            display: "grid",
            gap: "14px",
          }}
        >
          {pkg.included.map((item) => (
            <li
              key={item}
              style={{
                color: "#b8b8b8",
                fontSize: "15px",
                lineHeight: 1.65,
              }}
            >
              • {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
