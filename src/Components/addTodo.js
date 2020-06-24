import React, { Component } from 'react';

class addTodo extends Component {
    constructor(props){
        super(props)
        this.onchange=this.onchange.bind(this)
        this.ATodo=this.ATodo.bind(this)
    }
    state={
        value:''
    }
    onchange(e){
        this.setState({value:e.target.value})
    }
    ATodo=(a)=>{
        a.preventDefault();
        this.props.todoAdd(this.state.value);
        this.setState({value:''})
    }
render(){
    return(
        <div style={{margin:"0px auto",textAlign:"center"}}>
            <form onSubmit={this.ATodo}>
            <input type="text"
            placeholder="Enter todo..."
            style={{width:"70%",height:"50%"}}
            onChange={this.onchange}
            value={this.state.value}
            ></input>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}
}

export default addTodo; 