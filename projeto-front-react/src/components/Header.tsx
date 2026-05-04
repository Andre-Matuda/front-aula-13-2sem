import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>TEMP</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/users">Users</Link> |{" "}
        <Link to="/produtos">Produtos</Link> | <Link to="/alunos">Alunos</Link>
      </nav>
    </header>
  );
}
