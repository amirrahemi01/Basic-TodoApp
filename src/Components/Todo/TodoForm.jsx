import React, { useState } from 'react'

function TodoFrom({ addTodo, onClose }) {

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (value) {
            addTodo(value);
            setValue('');
            onClose();
        }
    }

    return (
        <div>
            <div className='TodoFormBox'>
                <form onSubmit={handleSubmit} className='TodoForm'>
                    <input type='text' value={value} onChange={(e) => setValue(e.target.value)} className='InputTodo' placeholder='Write a task' autofocus onfocus="this.select();" maxLength="28" /> <br />
                    <button type='submit' className='ButtonTodo'>Add Task</button>
                </form>
            </div>
        </div>
    )
}

export default TodoFrom