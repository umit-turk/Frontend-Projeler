import React, {useState, useContext, useRef, useEffect} from "react";
import { DataContext } from "./DataProvider";

function FormInput() {
    const [todos, setTodos] = useContext(DataContext);
    const [todoName, setTodoName] = useState('');
    const todoInput = useRef();

    const addTodo = e => {
        e.preventDefault()
        setTodos([...todos, {name: todoName, complete: false}])
        setTodoName("");
    }

    useEffect(() => {
      todoInput.current.focus();
    }, [])

  return (
    <form autoComplete="off" onSubmit={addTodo}>
      <input
      ref={todoInput}
        type="text"
        name="todos"
        id="todos"
        required
        placeholder="What needs to be done?"
        value={todoName}
        onChange={e => setTodoName(e.target.value.toLocaleLowerCase())}
      />
      <button type="submit">Create</button>
    </form>
  );
}

export default FormInput;
