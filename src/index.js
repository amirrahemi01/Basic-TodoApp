import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoWrapper from './Components/Todo/TodoApp';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <TodoWrapper />

  </React.StrictMode>
);

