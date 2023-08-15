import React, { useState } from 'react'


const EditTodo = ({editTodo,task}) => {
        const [value, setValue] = useState(task.task);
      
        const handleSubmit = (e) => {
          e.preventDefault();
          editTodo(value,task.id);
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
         className='input'
          placeholder="Update Task"
        />
        <button className="btn" >Update Task</button>
      </form>
    </div>
  );


        }


export default EditTodo