
export function Rendertodo({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div>
            <h1>{todo.Title}</h1>
            <h2>{todo.Notes}</h2>
            <h2>{todo.isCompleted}</h2>
          </div>
        );
      })}
    </div>
  );
}
