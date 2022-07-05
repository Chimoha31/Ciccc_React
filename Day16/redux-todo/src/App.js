import React from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="App">
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default App

