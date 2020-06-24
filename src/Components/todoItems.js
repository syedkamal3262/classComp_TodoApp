import React from 'react';

function todoItems(props) {
  
function styleChange(){
    if(props.todo.completed!==true){
        return {
            textDecoration:"line-through"
        }
    }
    }
    const btnStyle={
        backgroundColor:"red",
        color:"white",
        float:"right",
        borderRadius:"50%"

    }
    
    
    return (
    <div  style={styleChange()}>
        <p>
        <input  type="checkbox"  
        onChange={props.markCompleted.bind(this,props.todo.id)}/>
        {props.todo.title}
        <button onClick={props.ddeleteItem.bind(this,props.todo.id)} 
        style={btnStyle}>
        X</button>
        </p>     
    </div>
   
  )
}
export default todoItems;
