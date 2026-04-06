import Header from "../../components/Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header lang="fr" />
      {children}
    </div>
  );
}
