import React from "react";

const Form = ({inputValue, setInputValue, setTodos, todos}) => {

  //
    const textHandlerChange = (e) => {
    setInputValue(e.target.value)
   }

   //
   const addTodo = (e) =>{
    e.preventDefault();
    console.log('todo added')
    if(inputValue !=='')
    {
      setTodos([...todos, {
        text: inputValue,
        completed: false,
        id: (Math.floor(Math.random() * 1000) + 1) //Returns a random integer from 1 to 1000
    }
    ])
    setInputValue('')  
    }
    
   }

   return(
    
    <div>
        <form>
            <input type='text'
            placeholder="Add you Todos..."
            value={inputValue}
            onChange={textHandlerChange}/>
            <button type='button'
            onClick={addTodo}
            className='add'>+
            </button>
        </form>
    </div>
   )
}
export default Form;