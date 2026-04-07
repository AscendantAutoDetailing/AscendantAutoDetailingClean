export const metadata = {
  title: "Ascendant Auto Detailing",
  description: "Premium car detailing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
