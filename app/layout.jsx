import "./globals.css";

export const metadata = {
  title: "Ascendant Auto Detailing",
  description: "Premium mobile auto detailing in Montreal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
