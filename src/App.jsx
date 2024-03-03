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
    filter: 'all',
    searchText: ''
 };
 searchTodos = searchText => {
  this.setState({ searchText });
};

  
 filterTodos = filter => {
  this.setState({ filter });
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

  doneTodo=(id)=>{
    const index = this.state.todoData.findIndex((el) => el.id === id);
    const before = this.state.todoData.slice(0, index);
    const after = this.state.todoData.slice(index + 1);
    const todo = this.state.todoData[index]
    const updTodo={...todo, done: !todo.done};
    this.setState({todoData:[...before, updTodo, ...after]}); 
  }

  render() {
    const { todoData, filter, searchText } = this.state;

    let filteredTodos = todoData;
    if (filter === 'active') {
      filteredTodos = todoData.filter(todo => !todo.done);
    } else if (filter === 'done') {
      filteredTodos = todoData.filter(todo => todo.done);
    }
  
    if (searchText) {
      filteredTodos = filteredTodos.filter(todo =>
        todo.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

  const done = todoData.filter(el => el.done).length;
  const active = todoData.length - done;

    return (
      <div style={{width: '500px', margin: '0 auto'}}>
        <AppHeader done={done} active={active}/>
        <SearchTodo onSearch={this.searchTodos} onFilter={this.filterTodos}/>
        <TodoList 
        todos={filteredTodos}  
        onDelTodo={this.delTodo} 
        onImpTodo={this.importantTodo}
        onDoneTodo={this.doneTodo}
        />
        <TodoAdd onAddTodo={this.addTodo}/>
      </div>
      
      
    )
  }
}
