import React, { useState } from "react";
import './App.css';
import Form from './components/Formulaire';
import TodoListe from './components/TodoListe';

function App() {

  //value of the input text
  const [inputValue, setInputValue] = useState('');
  //an array of object contain all value of todos
  const [todos, setTodos] = useState([]);
  
  return(
    <div className='App'>
      <h2>My Todo List</h2>
      <Form 
       setInputValue={setInputValue} 
       inputValue={inputValue}
       setTodos={setTodos} 
       todos={todos} />
      <TodoListe 
       todos={todos}
       setTodos={setTodos}/>
    </div>
  )
}
export default App;