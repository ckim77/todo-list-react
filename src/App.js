import React, {useState} from 'react';
import './App.css';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Todo List</p>
        <TodoForm addTodo={addTodo} />
      </header>
    </div>
  );
}

export default App;
