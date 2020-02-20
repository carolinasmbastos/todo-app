import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList.js'

function App() {
  return (
    <div className="App">
      <TodoList />
      
    </div>
  );
}

export default App;
