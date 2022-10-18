import React from "react";
import Todo from "./Todo";

const TodoListe = ({todos, setTodos}) => {

    return(
        <div className="todo-liste">
                    <ul>
                        {
                        todos.map((myTodoListe)=>
                        <Todo 
                        myTodoListe={myTodoListe}
                        key={myTodoListe.id} 
                        setTodos={setTodos}
                        todos={todos}/>
                        )
                        }
                    </ul>
        </div>
    )
   
}
export default TodoListe;