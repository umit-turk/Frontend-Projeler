import React from "react";

function ListItem({todo, id}) {
  return (
    <li>
      <label htmlFor={id}>
        <input type="checkbox" id={id} />
        {todo.name}
      </label>
      <button>Edit</button>
    </li>
  );
}

export default ListItem;
