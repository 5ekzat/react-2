import React, { Component } from 'react'
import "./TodoListitem.css"

export default class TodoListitem extends Component {
  
  render() {
    let clazz=""; 
      if (this.props.important){
         clazz+='imp';
      } 
      
    return (
        <span className="d-flex align-items-center">
          <span className={`flex-grow-1 ${clazz}`}>{this.props.title}</span>
          <button 
          className="btn btn-outline-danger" 
          onClick={()=>this.props.onDel(this.props.id)}>
          <i className="bi bi-trash"></i> 
          </button>       
          <button 
          className="btn btn-outline-warning" 
          onClick={()=>this.props.onImpTodo(this.props.id)}> 
          <i className="bi bi-exclamation-triangle"></i>
          </button>
        </span>
    )
  }
}
