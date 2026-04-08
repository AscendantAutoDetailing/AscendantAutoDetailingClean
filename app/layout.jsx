import "./globals.css";
import Navbar from "../components/Navbar"; // adjust path if needed

export const metadata = {
  title: "Ascendant Auto Detailing",
  description: "Premium car detailing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, backgroundColor: "#0a0a0a" }}>
        
        {/* ✅ YOUR PREMIUM NAVBAR */}
        <Navbar />

        {/* ✅ YOUR PAGES */}
        {children}

      </body>
    </html>
  );
}
