import React from 'react'
import TodoListitem from '../todoListitem/TodoListitem'

const TodoList = (props) => {
  console.log(props.todos);
  return (
    <ul className='list-group'>
       {props.todos.map((el) => ( 
        <li className='list-group-item' key={el.id}> 
           <TodoListitem title={el.title} id={el.id} onDel={props.onDelTodo}/>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
