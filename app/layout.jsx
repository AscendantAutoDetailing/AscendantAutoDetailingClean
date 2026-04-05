export const metadata = {
  title: "Ascendant Auto Detailing",
  description: "Premium car detailing service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
