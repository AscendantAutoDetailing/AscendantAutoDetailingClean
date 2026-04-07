export const metadata = {
  title: "Ascendant Auto Detailing",
  description: "Premium car detailing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        
        <header style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
          <h2>Ascendant Auto Detailing</h2>

          <nav style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
            <a href="/en">EN</a>
            <a href="/fr">FR</a>
          </nav>
        </header>

        <main style={{ padding: "20px" }}>
          {children}
        </main>

      </body>
    </html>
  );
}
