import Header from "../../components/Header";

export default function EnglishLayout({ children }) {
  return (
    <div>
      <Header lang="en" />
      {children}
    </div>
  );
}
