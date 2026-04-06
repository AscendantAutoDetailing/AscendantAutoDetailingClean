import Header from "../../components/Header";

export default function FrenchLayout({ children }) {
  return (
    <div>
      <Header lang="fr" />
      {children}
    </div>
  );
}
