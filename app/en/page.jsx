import Header from "../../components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-20">

        {/* HERO */}
        <section
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "140px 20px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.4))",
            }}
          />

          <div style={{ position: "relative", padding: "60px", maxWidth: "900px" }}>
            <p style={{ letterSpacing: "3px", color: "#d4af37" }}>
              MOBILE AUTO DETAILING IN MONTREAL
            </p>

            <h1 style={{ fontSize: "56px", margin: "20px 0" }}>
              Professional auto detailing for all vehicles.
            </h1>

            <p style={{ color: "#ccc", marginBottom: "40px" }}>
              Premium mobile detailing service delivered directly to your door.
            </p>

            <div style={{ display: "flex", gap: "20px" }}>
              <Link href="/en/pricing">
                <button style={{ padding: "14px 26px" }}>
                  View Prices
                </button>
              </Link>

              <Link href="/en/booking">
                <button style={{ padding: "14px 26px" }}>
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section style={{ display: "flex", gap: "30px", padding: "60px" }}>
          {[
            { title: "Mobile Service", text: "We come to you." },
            { title: "All Vehicles", text: "Luxury or daily." },
            { title: "Premium Quality", text: "Top products." },
          ].map((item, index) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </section>

      </main>
    </>
  );
}
