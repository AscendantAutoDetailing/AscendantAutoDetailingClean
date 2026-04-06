import Link from "next/link";

export default function HomeEN() {
  return (
    <main style={{ fontFamily: "sans-serif", backgroundColor: "#0a0a0a", color: "white" }}>
      
      {/* HERO SECTION */}
      <section style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "120px 20px",
        position: "relative"
      }}>
        <div style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          padding: "60px",
          maxWidth: "900px"
        }}>
          <p style={{ letterSpacing: "2px", color: "#d4af37" }}>
            MOBILE AUTO DETAILING IN MONTREAL
          </p>

          <h1 style={{ fontSize: "48px", margin: "20px 0" }}>
            Professional detailing for all types of vehicles.
          </h1>

          <p style={{ color: "#ccc", marginBottom: "30px" }}>
            Ascendant Auto Detailing provides premium mobile car detailing services across Montreal,
            including the South Shore and North Shore. Whether you drive a daily commuter,
            luxury vehicle, or high-performance car, we deliver unmatched precision, care, and attention to detail.
          </p>

          <div style={{ display: "flex", gap: "15px" }}>
            <Link href="/en/packages">
              <button style={{
                backgroundColor: "#d4af37",
                color: "black",
                padding: "12px 20px",
                border: "none",
                cursor: "pointer"
              }}>
                View Prices
              </button>
            </Link>

            <Link href="/en/booking">
              <button style={{
                backgroundColor: "white",
                color: "black",
                padding: "12px 20px",
                border: "none",
                cursor: "pointer"
              }}>
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT DETAILING */}
      <section style={{ padding: "80px 20px", maxWidth: "1000px", margin: "auto" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px", color: "#d4af37" }}>
          What is Professional Car Detailing?
        </h2>

        <p style={{ color: "#ccc", lineHeight: "1.8" }}>
          Car detailing is a meticulous cleaning, restoration, and finishing process that goes far beyond a regular car wash.
          At Ascendant Auto Detailing, we focus on both the interior and exterior of your vehicle, ensuring every surface is treated with precision.
        </p>

        <p style={{ color: "#ccc", marginTop: "20px", lineHeight: "1.8" }}>
          Our services include deep interior cleaning, stain removal, leather conditioning,
          exterior decontamination, polishing, and protection treatments. The goal is to restore your vehicle to a near-new condition,
          while protecting its value over time.
        </p>

        <p style={{ color: "#ccc", marginTop: "20px", lineHeight: "1.8" }}>
          We proudly serve Montreal and surrounding areas, including the South Shore and North Shore,
          offering a fully mobile experience — meaning we come directly to you.
        </p>
      </section>

      {/* FEATURES */}
      <section style={{
        display: "flex",
        gap: "20px",
        padding: "40px",
        justifyContent: "center",
        flexWrap: "wrap"
      }}>
        {[
          {
            title: "Mobile Service",
            text: "We come directly to your home or workplace anywhere in Montreal."
          },
          {
            title: "All Vehicle Types",
            text: "From daily drivers to luxury and performance vehicles."
          },
          {
            title: "Premium Quality",
            text: "High-end products and meticulous attention to detail."
          }
        ].map((item, index) => (
          <div key={index} style={{
            backgroundColor: "#111",
            padding: "30px",
            borderRadius: "10px",
            maxWidth: "300px",
            border: "1px solid #222"
          }}>
            <h3 style={{ color: "#d4af37" }}>{item.title}</h3>
            <p style={{ color: "#aaa" }}>{item.text}</p>
          </div>
        ))}
      </section>

    </main>
  );
}
