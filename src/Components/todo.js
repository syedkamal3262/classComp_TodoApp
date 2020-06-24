import React from 'react';
import TodoItem from './todoItems'


function todo(props) {
  
  return ( 
      <div>
        {
          props.todo.map((todo)=>
          <TodoItem key={todo.id} todo={todo} markCompleted={props.markCompleted} ddeleteItem={props.ddeleteItem}/>  
          )
        }
      </div>
    )
}
export default todo;
