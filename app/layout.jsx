import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Ascendant Auto Detailing",
  description: "Premium mobile car detailing in Montreal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: 0 }}>
        <Header />
        {children}
      </body>
    </html>
  );
}
