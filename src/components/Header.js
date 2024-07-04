import Link from "next/link";

export default function Header() {
  return (
    <header className="d-flex justify-content-between align-items-center bg-light shadow-sm p-2">
      <h1>Todos</h1>
      <nav>
        <Link
          className="me-3 text-decoration-none border border-primary p-1 rounded"
          href="/"
        >
          All Todos
        </Link>
        <Link
          className="text-decoration-none border border-primary p-1 rounded"
          href="/add-todo"
        >
          Add Todo
        </Link>
      </nav>
    </header>
  );
}
