import Navbar from "../components/Navbar";

export const metadata = {
  title: "Ascendant Auto Detailing",
  description: "Premium car detailing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0 }}>
        
        <Navbar />

        <div style={{ paddingTop: "80px" }}>
          {children}
        </div>

      </body>
    </html>
  );
}
