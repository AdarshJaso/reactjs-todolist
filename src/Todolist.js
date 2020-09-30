import React, { useState } from "react";
import Lists from "./components/Lists";
import Form from "./components/Form";
import "./css/Todolist.css";
import github from "./img/github.svg";
import clear from "./img/clear.svg";


const Todolist = () => {
  const [initInput, updateInput] = useState("");
  const [initItem, updateItem] = useState([]);

  const inputChange = (event) => {
    updateInput(event.target.value);
  };

  const addItem = () => {
    if (initInput !== "") {
      updateItem((oldItems) => {
        return [...oldItems, initInput];
      });
      updateInput("");
    }
  };

  const deleteItem = (id) => {
    updateItem((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return id !== index;
      });
    });
  };

  const editItem = (id) => {
    deleteItem(id);
    updateInput(initItem[id]);
    document.getElementById("inputbox").focus();
  };

  const clearAll = () => {
    updateItem([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  window.onload = function () {
    document.getElementById("inputbox").focus();
  };

  return (
    <>
      <div className="container">
        <a href="https://github.com/AdarshJaso" target="_blank">
          <img src={github} alt="github" width="9%" />
        </a>
        <div className="card">
          <form action="" onSubmit={handleSubmit}>
            <Form
              textValue={initInput}
              textInputChange={inputChange}
              textButtonClick={addItem}
            />
            <div id="list">
              <ul>
                {initItem.map((val, index) => {
                  return (
                    <Lists
                      text={val}
                      key={index}
                      id={index}
                      onSelect={deleteItem}
                      onSelectEdit={editItem}
                    />
                  );
                })}
              </ul>
            </div>
            <button className="clear-btn" onClick={clearAll}>
              <img src={clear} alt="clear-all" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Todolist;
