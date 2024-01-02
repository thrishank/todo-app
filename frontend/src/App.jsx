import { useState } from "react";
// import "./App.css";
import { Createtodo } from "./components/Createtodo";
import { Rendertodo } from "./components/Rendertodo";

function App() {
  const [todos, setTodo] = useState([]);

  fetch("http://localhost:3000/todos").then(async function (res) {
    const json = await res.json();
    setTodo(json);
  });

  return (
    <div>
      <Createtodo />
      <Rendertodo todos={todos} />
    </div>
  );
}

export default App;
