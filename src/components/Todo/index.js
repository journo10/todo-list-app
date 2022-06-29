import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import TodoList from "../TodoList";
import "./todo.css";

const Todo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!edit) {
      setTodos([
        ...todos,
        {
          id: nanoid(),
          title: text,
        },
      ]);
      setText("");
    } else {
      updateTodo(edit.id, text);
    }
  };

  //new todo update
  const updateTodo = (id, title) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { id, title } : todo
    );
    setTodos(newTodo);
    setEdit("");
  };

  useEffect(() => {
    if (edit) {
      setText(edit.title);
    } else {
      setText("");
    }
  }, [setText, edit]);

  //delete
  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  //edit
  const editTodo = (id) => {
    const findEditTodo = todos.find((todo) => todo.id === id);
    setEdit(findEditTodo);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          className="todo-input"
          name="todo"
          type="text"
          placeholder="Todo ekleyin..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button disabled={!text} className={edit ? "edit-btn " : "todo-btn"} type="submit">
          {edit ? "Güncelle": "Ekle"}
        </button>
      </form>
      <TodoList todos={todos} removeTodo={removeTodo} editTodo={editTodo} />
    </div>
  );
};

export default Todo;
