import React from "react";
import edit from "../img/edit.svg";
import cancel from "../img/trash.svg";

const Lists = (props) => {
  return (
    <>
    <div className="lists">
      <button onClick={ () => props.onSelect(props.id)}> <img src={cancel} alt="cancel"/> </button>
      <button onClick={ () => props.onSelectEdit(props.id)}> <img src={edit} alt="edit"/> </button>
      <li>{props.text}</li>
    </div>
    </>
  );
};

export default Lists;