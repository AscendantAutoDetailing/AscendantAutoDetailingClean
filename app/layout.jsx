export const metadata = {
  title: "Ascendant Auto Detailing",
  description: "Premium car detailing service in Montreal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* PREMIUM FONT */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>

      <body style={{
        margin: 0,
        fontFamily: "Montserrat, sans-serif",
        backgroundColor: "#0a0a0a",
        color: "white"
      }}>
        {children}
      </body>
    </html>
  );
}
