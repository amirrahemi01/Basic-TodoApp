import React, { useState } from 'react'


function EditTodoForm({ editTodo, task, onClose }) {

  const [value, setValue] = useState(task.task);


  const handleSubmit = (e) => {

    // prevent default action
    e.preventDefault();

    // edti Todo value
    editTodo(value, task.id);

  }

  


  return (

    <div>
      <form onSubmit={handleSubmit} className='TodoForm'>
        <input type='text' value={value} onChange={(e) => setValue(e.target.value)} className='InputTodo' /> <br />
        <button onClick={onClose} type='submit' className='ButtonTodo'>Edit</button>
      </form>
    </div>
  )
}

export default EditTodoForm