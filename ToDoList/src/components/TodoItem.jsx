import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';
import ConfirmDialog from './ConfirmDialog';

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleTodo } = useTodo();

  const [confirm, setConfirm] = useState({
    show: false,
    type: "",
    title: "",
    message: "",
    action: () => {}
  });

  const handleToggle = () => {
    setConfirm({
      show: true,
      type: "success",
      title: "Toggle Todo",
      message: "Do you want to mark this todo as complete/incomplete?",
      action: () => toggleTodo(todo.id)
    });
  };

  const handleEdit = () => {
    setConfirm({
      show: true,
      type: "success",
      title: "Edit Todo",
      message: "Are you sure you want to save the changes?",
      action: () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg });
        setIsTodoEditable(false);
      }
    });
  };

  const handleDelete = () => {
    setConfirm({
      show: true,
      type: "danger",
      title: "Delete Todo",
      message: "Are you sure you want to delete this todo?",
      action: () => deleteTodo(todo.id)
    });
  };

  return (
    <>
      <ConfirmDialog
        show={confirm.show}
        title={confirm.title}
        message={confirm.message}
        type={confirm.type}
        onConfirm={() => {
          confirm.action();
          setConfirm({ ...confirm, show: false });
        }}
        onCancel={() => setConfirm({ ...confirm, show: false })}
      />

      <div
        className={`flex items-center justify-between gap-3 p-4 rounded-xl shadow-md border transition-all duration-200 ${
          todo.completed ? "bg-green-600/40 line-through" : "bg-white/10"
        }`}
      >
        <input
          type="checkbox"
          className="accent-emerald-400 w-5 h-5 cursor-pointer"
          checked={todo.completed}
          onChange={handleToggle}
        />
        <input
          type="text"
          className={`flex-1 bg-transparent text-white focus:outline-none px-2 rounded-lg ${
            isTodoEditable ? "border border-white/20" : "border-none"
          }`}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
        />
        <button
          className="text-white text-lg hover:scale-110 transition-transform"
          onClick={() => {
            if (todo.completed) return;
            isTodoEditable ? handleEdit() : setIsTodoEditable((prev) => !prev);
          }}
          disabled={todo.completed}
        >
          {isTodoEditable ? "💾" : "✏️"}
        </button>
        <button
          className="text-white text-lg hover:scale-110 transition-transform"
          onClick={handleDelete}
        >
          ❌
        </button>
      </div>
    </>
  );
}

export default TodoItem;
