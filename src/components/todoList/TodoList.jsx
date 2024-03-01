import React from 'react'
import TodoListitem from '../todoListitem/TodoListitem'

const TodoList = (props) => {
  if (props.todos.length === 0) {
    return <div className="text-center">Нет больше курсов :\</div>;
  }
  return (
    <ul className='list-group'>
       {props.todos.map((el) => ( 
        <li className='list-group-item' key={el.id}> 
           <TodoListitem 
          //  title={el.title} 
          //  id={el.id} 
          {...el}
           onDel={props.onDelTodo}
           onImpTodo={props.onImpTodo}
           />
           
        </li>
      ))}
    </ul>
  )
}

export default TodoList
