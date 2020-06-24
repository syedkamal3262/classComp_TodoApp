import React, { Component ,Fragment} from 'react';
import './App.css';
import Todo from './Components/todo'
import  AddTodo from './Components/addTodo'
import Header from './Components/header' 
import About from './pages/about'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import _404 from './pages/_404'
class App extends Component {
  state={
    todos:[]
  }
  markCompleted=(id)=>{
    this.setState({todos: this.state.todos.map((todo)=>{
      if(todo.id===id){
        todo.completed =! todo.completed;
      }
      return todo;
    })})
  }
  ddeleteItem=(id)=>{
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=>this.setState({todos:[...this.state.todos.filter(a=>a.id!==id)]}))
  }
    
  AddTodo=(title)=>{
    axios.post('https://jsonplaceholder.typicode.com/todos',
    {
      title,
      completed:false
    })
    .then(res=>this.setState({todos:[...this.state.todos,res.data]}))
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res=>this.setState({todos:res.data}))
  }
  render() {
  return (
    <Fragment>
    <Router>
    <Header />
      <Switch>
      <Route exact path="/">
          <div className="Container">
          <AddTodo todoAdd={this.AddTodo}/>
           <Todo 
           todo={this.state.todos} 
           markCompleted={this.markCompleted} 
           ddeleteItem={this.ddeleteItem} 
           />
           </div>
        </Route>
        <Route path="/about" component={About} />
        <Route path='**' component={_404} />
      </Switch>
    </Router>
    </Fragment>
  )
}
}
export default App;
