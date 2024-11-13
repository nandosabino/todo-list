import { useState } from "react";
import { FaEdit, FaTrashAlt, FaCheckCircle } from "react-icons/fa";

const Todo = ({ todo, removeTodo, completeTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);
  const [updatedCost, setUpdatedCost] = useState(todo.cost);
  const [updatedDeadline, setUpdatedDeadline] = useState(todo.deadline);

  const handleSaveEdit = () => {
    editTodo(todo.id, updatedText, updatedCost, updatedDeadline);
    setIsEditing(false);
  };

  const isHighCost = todo.cost >= 1000;

  const handleComplete = () => {
    completeTodo(todo.id);
  };

  return (
    <div className={`todo ${todo.isCompleted ? "completed" : ""} ${isHighCost ? "highlighted" : ""}`}>
      {isEditing ? (
        <div className="todo-edit-form">
          <input
            type="text"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
          />
          <input
            type="number"
            value={updatedCost}
            onChange={(e) => setUpdatedCost(e.target.value)}
          />
          <input
            type="date"
            value={updatedDeadline}
            onChange={(e) => setUpdatedDeadline(e.target.value)}
          />
          <button onClick={handleSaveEdit}>Salvar</button>
        </div>
      ) : (
        <div className="todo-content">
          <p className={todo.isCompleted ? "completed-text" : ""}>{todo.text}</p>
          <span>{todo.cost} R$</span>
          <span>{todo.deadline}</span>
        </div>
      )}
      <div className="todo-actions">
        <FaCheckCircle
          className="icon complete-icon"
          onClick={handleComplete}
        />
        <FaEdit
          className="icon edit-icon"
          onClick={() => setIsEditing(!isEditing)}
        />
        <FaTrashAlt
          className="icon delete-icon"
          onClick={() => removeTodo(todo.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
