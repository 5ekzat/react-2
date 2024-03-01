import React, { Component } from 'react'

export default class TodoListitem extends Component {
  render() {
    return (
        <span className="d-flex align-items-center">
          <span className="flex-grow-1">{this.props.title}</span>
          <button className="btn btn-outline-danger" onClick={()=>this.props.onDel(this.props.id)}>
          <i className="bi bi-trash"></i> 
          </button>       
          <button className="btn btn-outline-warning"> 
          <i className="bi bi-exclamation-triangle"></i>
          </button>
        </span>
    )
  }
}
