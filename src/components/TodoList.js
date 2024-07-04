export default function TodoList(props) {
  return (
    <ul className="list-unstyled w-50 m-auto">
      {props.todos.map((t) => {
        return (
          <li
            className="border border-secondary m-2 p-1 rounded fs-5"
            key={t.id}
          >
            {t.title}
          </li>
        );
      })}
    </ul>
  );
}
