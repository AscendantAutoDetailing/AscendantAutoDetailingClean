import Header from "../components/Header";


export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-20">
        {/* your content */}
      </main>
    </>
  );
}
      
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
            MOBILE AUTO DETAILING IN MONTREAL
          </p>

          <h1 style={{
            fontSize: "56px",
            margin: "20px 0",
            lineHeight: "1.1",
            fontWeight: "600"
          }}>
            Professional detailing for all types of vehicles.
          </h1>

          <p style={{
            color: "#ccc",
            marginBottom: "40px",
            fontSize: "18px",
            maxWidth: "600px",
            lineHeight: "1.6"
          }}>
            Ascendant Auto Detailing delivers premium mobile car detailing across Montreal,
            including the South Shore and North Shore. Whether you drive a daily commuter,
            luxury vehicle, or high-performance car, we bring unmatched precision directly to you.
          </p>

          <div style={{ display: "flex", gap: "20px" }}>
            
            <Link href="/en/packages">
              <button style={{
                background: "linear-gradient(135deg, #d4af37, #f5d97a)",
                color: "black",
                padding: "14px 26px",
                border: "none",
                borderRadius: "6px",
                fontWeight: "600",
                cursor: "pointer"
              }}>
                View Prices
              </button>
            </Link>

            <Link href="/en/booking">
              <button style={{
                backgroundColor: "transparent",
                color: "white",
                padding: "14px 26px",
                border: "1px solid #d4af37",
                borderRadius: "6px",
                fontWeight: "600",
                cursor: "pointer"
              }}>
                Book Now
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
          What is Professional Car Detailing?
        </h2>

        <div style={{
          width: "60px",
          height: "3px",
          backgroundColor: "#d4af37",
          marginBottom: "30px"
        }} />

        <p style={{ color: "#ccc", lineHeight: "1.9", fontSize: "17px" }}>
          Car detailing is a meticulous cleaning, restoration, and finishing process that goes far beyond a regular car wash.
          At Ascendant Auto Detailing, every surface is treated with precision, using high-end products and expert techniques.
        </p>

        <p style={{ color: "#ccc", marginTop: "20px", lineHeight: "1.9", fontSize: "17px" }}>
          Our services include deep interior cleaning, stain extraction, leather conditioning,
          exterior decontamination, polishing, and protective treatments designed to preserve your vehicle’s value.
        </p>

        <p style={{ color: "#ccc", marginTop: "20px", lineHeight: "1.9", fontSize: "17px" }}>
          We proudly serve Montreal, the South Shore, and the North Shore, offering a fully mobile experience —
          delivering luxury detailing directly to your doorstep.
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
