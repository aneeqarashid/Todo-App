import React, { useState } from "react";



const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <div>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className="input"
          placeholder="Enter your todo list"
        />
        <button className="btn">Add Task</button>
      </form>
    </div>
  );
};

export default TodoForm;
