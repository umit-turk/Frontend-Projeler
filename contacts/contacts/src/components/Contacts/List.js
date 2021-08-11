import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { contactSelectors, removeAllContacts } from "../../redux/contactSlice";
import Item from "./Item";

function List() {
  const contacts = useSelector(contactSelectors.selectAll);
  const total = useSelector(contactSelectors.selectTotal);

  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    if (window.confirm("are you sure?")) {
      dispatch(removeAllContacts());
    }
  };

  console.log(contacts);
  return (
    <div>
      {total > 0 && (
        <div onClick={handleDeleteAll} className="deleteAllBtn">
          Delete All
        </div>
      )}

      <ul className="list">
        {contacts.map((contact) => (
          <Item key={contact.id} item={contact} />
        ))}
      </ul>
    </div>
  );
}

export default List;
