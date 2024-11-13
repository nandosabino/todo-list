import { useState, useEffect } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";

import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, cost, deadline) => {
    const newTodos = [
      ...todos,
      {
        id: Date.now(),
        text,
        cost: parseFloat(cost),
        deadline,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const editTodo = (id, updatedText, updatedCost, updatedDeadline) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            text: updatedText,
            cost: parseFloat(updatedCost),
            deadline: updatedDeadline,
          }
        : todo
    );
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir esta tarefa?"
    );
    if (confirmDelete) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };

  const filteredTodos = todos
    .filter((todo) =>
      filter === "All"
        ? true
        : filter === "Completed"
        ? todo.isCompleted
        : !todo.isCompleted
    )
    .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "Asc") return a.text.localeCompare(b.text);
      if (sort === "Desc") return b.text.localeCompare(a.text);
      if (sort === "Cost") return a.cost - b.cost;
      if (sort === "Deadline")
        return new Date(a.deadline) - new Date(b.deadline);
      return 0;
    });

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            editTodo={editTodo}
          />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
