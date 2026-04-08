import "./globals.css";
import Header from "@/components/Header"; // or Navbar if that's your file

export const metadata = {
  title: "Ascendant Auto Detailing",
  description: "Premium mobile car detailing in Montreal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#050505] text-white antialiased">
        
        {/* ✅ THIS WAS MISSING */}
        <Header />

        {/* ✅ YOUR PAGES */}
        {children}

      </body>
    </html>
  );
}
