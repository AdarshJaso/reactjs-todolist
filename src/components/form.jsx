import React from "react";

const Form = (props) => {
  return (
    <>
      <div>
        <h2>TO-DO-LIST</h2>
      </div>
      <div className="inputfield">
        <input
          type="text"
          id="inputbox"
          onChange={props.textInputChange}
          placeholder="Add an item"
          value={props.textValue}
        />
        <button onClick={props.textButtonClick}>ADD</button>
      </div>
    </>
  );
};

export default Form;
