import React from "react";
import "./todolist.css";

const TodoList = ({ todos, removeTodo, editTodo, search }) => {
  return (
    <>
      <ul className="todo-list">
        {todos
          .filter((todo) =>
            todo.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          )
          .map((t) => (
            <li key={t.id} className="todo-item">
              {t.title}
              <div>
                <button className="todo-btn" onClick={() => editTodo(t.id)}>
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button className="todo-btn" onClick={() => removeTodo(t.id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </li>
          ))}
        {todos.length <= 0 && (
          <li className="todo-text">Yapılacaklar listesine eleman ekleyin.</li>
        )}
      </ul>
    </>
  );
};

export default TodoList;
