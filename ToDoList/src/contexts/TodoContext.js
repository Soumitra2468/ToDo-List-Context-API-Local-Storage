import { createContext, useContext } from "react";

// Initial context setup
export const TodoContext = createContext({
  todos: [],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleTodo: () => {},
});

// Custom hook to use context
export const useTodo = () => {
  return useContext(TodoContext);
};

// Export provider
export const TodoProvider = TodoContext.Provider;
