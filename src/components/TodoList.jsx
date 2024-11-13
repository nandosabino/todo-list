import Todo from "./Todo";

const TodoList = ({ todos, removeTodo, completeTodo, editTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
