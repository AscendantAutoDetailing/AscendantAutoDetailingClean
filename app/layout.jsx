export const metadata = {
  title: "Ascendant Auto Detailing",
  description: "Premium mobile car detailing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        style={{
          margin: 0,
          backgroundColor: "#0a0a0a",
        }}
      >
        <Header />
        <div style={{ paddingTop: "84px" }}>{children}</div>
      </body>
    </html>
  );
}
