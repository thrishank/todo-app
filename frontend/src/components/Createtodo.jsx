import { useState } from "react";

export function Createtodo() {
  const [title, setTitle] = useState("");
  return (
    <div>
      <input type="text" id="first" placeholder="Title" />
      <br />
      <input type="text" placeholder="Enter the description" />
      <br />
      <button
        onClick={() => {
          fetch("http://localhost:3000/todos", {
            method: "POST",
            body: {
              // title: document.getElementById("first")
            },
          }).then(async function (res) {
            const json = await res.json();
            setTodos(json.todos);
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
