import { useState } from "react";

export function Createtodo() {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <div>
      <input
        type="text"
        id="first"
        placeholder="Title"
        onChange={function (e) {
          setTitle(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Enter the description"
        onChange={function (e) {
          setNotes(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          fetch("http://localhost:3000/todos", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              notes: notes,
              isCompleted: false
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            // setTodos(json.todos);
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
