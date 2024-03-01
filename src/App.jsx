import React, { Component } from 'react'
import AppHeader from "./components/appHeader/AppHeader";
import SearchTodo from "./components/searchTodo/SearchTodo";
import TodoAdd from "./components/todoAdd/TodoAdd";
import TodoList from './components/todoList/TodoList';
import TodoListitem from './components/todoListitem/TodoListitem';


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
  this.setState(({ todoData }) => ({
    todoData: todoData.filter((todo) => todo.id !== id),
  }));
};
  render() {
    return (
      <div style={{width: '500px', margin: '0 auto'}}>
        <AppHeader/>
        <SearchTodo/>
        <TodoList todos={this.state.todoData} onDelTodo={this.delTodo}/>
        <TodoAdd/>
      </div>
      
      
    )
  }
}
