import Header from "../components/Header";

export const metadata = {
  title: "Ascendant Auto Detailing",
  description: "Premium car detailing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>

        <Header />

        {children}

      </body>
    </html>
  );
}
