import React from 'react'

function Todo({myTodoListe, index, setTodos, todos}) {
  
  //function 
  const completedTodo = ()=>{
    setTodos(todos.map((item)=>{
      if(item.id === myTodoListe.id)
      { 
        return {
        ...item, completed: !item.completed
      }
      }
     return item
    }
    ))
    console.log('item checked')

  }

  //
  const deletedTodo = ()=>{
    setTodos(todos.filter((item)=> 
       item.id !== myTodoListe.id))
  }
    console.log('item deleted')

  return (
    <div className='todo-items'>
        <li className={`item ${myTodoListe.completed ? "todo-completed" : ''}`}>{myTodoListe.text}</li>
      <div className='btn-flex'>
          <button 
          onClick={completedTodo}
          className='checked-btn'>
          ✔</button>
          <button 
          onClick={deletedTodo}
          className='del-btn fa fa-trash-o'>
          </button>
      </div>
    </div>
  )
}

export default Todo