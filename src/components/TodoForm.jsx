import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");
  const [cost, setCost] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text && cost && deadline) {
      addTodo(text, cost, deadline);
      setText("");
      setCost("");
      setDeadline("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Nome da Tarefa"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="number"
        placeholder="Custo"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />
      <input
        type="date"
        placeholder="Prazo"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TodoForm;
