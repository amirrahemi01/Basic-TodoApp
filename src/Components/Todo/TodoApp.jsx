import React, { useEffect, useState } from 'react';
import TodoForm from "./TodoForm"
import EditTodoForm from './EditTodoForm';
import Todo from './Todo';

import { v4 as uuidv4 } from 'uuid';

// dark ligh toggle
import DarkMode from '../DarkTheme/DarkMode';

// modal
import OpenModal from '../Modal/OpenModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

uuidv4()

function TodoApp() {

  


  const [todos, setTodos] = useState([])



  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  const addTodo = todo => {
    const newTodos = [...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const toggleComplete = id => {
    const newTodos = todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const deleteTodo = id => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const editTodo = id => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  }

  // modal

  const [isOpen, setIsOpen] = useState(false);

  // prevent auto zoom for input in ios
  // if (navigator.userAgent.indexOf('iPhone') > -1) {

  //   document.querySelector("body").setAttribute("device", "ios");

  //   document
  //     .querySelector("[name=viewport]")
  //     .setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1")
  // } else if (navigator.userAgentData.mobile) {
  //   document.querySelector("body").setAttribute("device", "mobile");
  }


  return (
    <div className='TodoWrapper' id='TodoWrapper'>

      <div className='Content'>

        <DarkMode />

        {todos.map((todo) =>
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo} onClose={() => setIsOpen(false)} />
          ) : (
            <>
              <Todo
                key={todo.id}
                task={todo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                toggleComplete={toggleComplete}
              />
              <br />
            </>
          )
        )}

        <OpenModal open={isOpen} onClose={() => setIsOpen(false)} >
          <TodoForm onClose={() => setIsOpen(false)} addTodo={addTodo} />
        </OpenModal>

      </div>
      <div onClick={() => setIsOpen(true)} className='FlexConBTN'>
        <svg id='AddToDo' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M44.8,-77.6C58.2,-69.9,69.3,-58.1,77,
          -44.5C84.8,-30.9,89.3,-15.5,90.3,0.6C91.3,16.6,88.8,33.2,80.9,46.5C72.
          9,59.9,59.5,69.9,45.1,77.7C30.8,85.5,15.4,91,-0.4,91.7C-16.1,92.3,-32.2,88,
          -45.9,79.8C-59.5,71.6,-70.6,59.4,-78.6,45.4C-86.5,31.5,-91.2,15.7,-90.8,
          0.3C-90.3,-15.2,-84.7,-30.5,-76.5,-43.8C-68.2,-57.2,-57.2,-68.6,-44,
          -76.5C-30.8,-84.3,-15.4,-88.4,0.2,-88.7C15.7,-89,31.4,-85.3,44.8,-77.6Z"
            transform="translate(100 100)" />
          <FontAwesomeIcon icon={faPlus} />
        </svg>
      </div>
    </div>
  )
}

export default TodoApp;
