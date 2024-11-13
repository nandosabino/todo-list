const TodoItem = ({ todo, removeTodo, editTodo, reorderTodos }) => {
  const highlightStyle = todo.cost >= 1000 ? { backgroundColor: "yellow" } : {};

  return (
    <div className="todo-item" style={highlightStyle}>
      <p>{todo.text}</p>
      <p>Custo: R${todo.cost}</p>
      <p>Data Limite: {todo.deadline}</p>
      <button onClick={() => editTodo(todo.id)}>Editar</button>
      <button onClick={() => removeTodo(todo.id)}>Excluir</button>
      <button
        onClick={() => reorderTodos(todo.id, "up")}
        disabled={todo.order === 1}
      >
        ▲
      </button>
      <button
        onClick={() => reorderTodos(todo.id, "down")}
        disabled={todo.isLast}
      >
        ▼
      </button>
    </div>
  );
};

export default TodoItem;
