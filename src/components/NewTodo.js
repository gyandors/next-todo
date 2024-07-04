import { useRef } from "react";

export default function NewTodo() {
  const titleRef = useRef();

  function handleFormClick(event) {
    event.preventDefault();
    fetch("api/add-todo", {
      method: "POST",
      body: JSON.stringify({
        title: titleRef.current.value,
        isDone: false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      titleRef.current.value = "";
    });
  }

  return (
    <form className="w-50 m-auto" onSubmit={handleFormClick}>
      <label className="mb-1 fs-bold" htmlFor="title">
        Title
      </label>
      <input
        className="w-100 mb-1 rounded"
        type="text"
        id="title"
        ref={titleRef}
      />
      <button className="btn btn-dark" type="submit">
        Add
      </button>
    </form>
  );
}
