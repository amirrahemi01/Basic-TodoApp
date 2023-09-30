import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons'

import { ReactComponent as Logo } from "./square-regular.svg";

function Todo({ task, deleteTodo, editTodo, toggleComplete }) {

    function onClickCompleted() {
        toggleComplete(task.id)
    }

    return (
        <div className='Todo-Container'>
            <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{(task.task)}</p>
            <div className='RightRow'>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} className='IconMargin' />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} className='IconMargin' />

                {task.completed ? <FontAwesomeIcon icon={faSquareCheck} onClick={onClickCompleted} className='IconMargin' /> : <Logo onClick={onClickCompleted} className='IconMargin' />}

            </div>
        </div>
    )
}

export default Todo