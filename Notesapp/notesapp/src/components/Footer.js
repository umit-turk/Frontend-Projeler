import React, { useContext, useState } from "react";
import { DataContext } from "./DataProvider";
function Footer() {
  const [checkAll, setCheckAll] = useState(false);
  const [todos, setTodos] = useContext(DataContext);

  //hepsini seçme işlemi
  const handleCheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      todo.complete = !checkAll;
    });
    setTodos(newTodos);
    setCheckAll(!checkAll);
  };

  //silme işlemi
  const newTodosComplete = () => {
    return todos.filter((todo) => {
      return todo.complete === false;
    });
  };

  //silme işlemi
  const deleteTodo = () => {
    setTodos(newTodosComplete());
    setCheckAll(false);
  };

  return (
    <>
      {todos.length === 0 ? (
        <h2>Congrulations! Nothings To do</h2>
      ) : (
        <div className="row">
          <label htmlFor="all">
            <input
              type="checkbox"
              name="all"
              id="all"
              onChange={handleCheckAll}
              checked={checkAll}
            />
            ALL
          </label>
          <p>
            You have {newTodosComplete().length} to
            do
          </p>
          <button onClick={deleteTodo} id="delete">
            Delete
          </button>
        </div>
      )}
    </>
  );
}

export default Footer;
