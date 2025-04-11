import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex overflow-hidden rounded-xl border border-white/10 bg-white/20 shadow-inner shadow-white/10">
      <input
        type="text"
        placeholder="Write your task..."
        className="w-full px-4 py-2 bg-transparent text-white placeholder-white/60 focus:outline-none"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="bg-emerald-500 hover:bg-emerald-600 px-4 text-white font-semibold tracking-wide transition-colors"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
