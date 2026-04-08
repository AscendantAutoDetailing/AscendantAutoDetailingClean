import "./globals.css";
import Header from "../components/header"; // ✅ lowercase + relative path

export const metadata = {
  title: "Ascendant Auto Detailing",
  description: "Premium mobile car detailing in Montreal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#050505] text-white antialiased">
        
        <Header />

        {children}

      </body>
    </html>
  );
}
