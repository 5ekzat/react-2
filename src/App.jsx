import React, { Component } from 'react'
import AppHeader from "./components/appHeader/AppHeader";
import SearchTodo from "./components/searchTodo/SearchTodo";
import TodoAdd from "./components/todoAdd/TodoAdd";
import TodoList from './components/todoList/TodoList';



export default class App extends Component {

 state={
  todoData:[
    {title:'Learn React', id:1, done:false, important:false},
    {title:'Learn Redux', id:2, done:false, important:false},
    {title:'Learn Vue', id:3, done:false, important:false},
    {title:'Learn Angular', id:4, done:false, important:false},
  ],
 };

  delTodo = (id) => {
    const newTodoData=this.state.todoData.filter((el)=>el.id!==id)
    this.setState({todoData:newTodoData})
  };

 addTodo=(text)=>{
  const trimmedText = text.trim();
  if (trimmedText) {
    const ids = this.state.todoData.map((el) => el.id);
    const newTodo = {
      title: trimmedText,
      done: false,
      important: false,
      id: ids.length ? ids.at(-1) + 1 : 1 
    };
    this.setState({todoData: [...this.state.todoData, newTodo]});
  }
  
 };

 importantTodo=(id)=>{
  console.log(id);
  const index = this.state.todoData.findIndex((el) => el.id === id);
  const before = this.state.todoData.slice(0, index);
  const after = this.state.todoData.slice(index + 1);
  const todo = this.state.todoData[index]
  const updTodo={...todo, important: !todo.important};
  this.setState({todoData:[...before, updTodo, ...after]}); 
  };


  render() {
    return (
      <div style={{width: '500px', margin: '0 auto'}}>
        <AppHeader/>
        <SearchTodo/>
        <TodoList 
        todos={this.state.todoData} 
        onDelTodo={this.delTodo} 
        onImpTodo={this.importantTodo}
        />
        <TodoAdd onAddTodo={this.addTodo}/>
      </div>
      
      
    )
  }
}
