import React, { Component } from 'react'

export default class TodoAdd extends Component {
  state={
    inputText:'',
  };
  setInputText=(event)=>{
    console.log(event.target.value);
    this.setState({inputText:event.target.value})
  };
  render() {
    return (
        <div className="d-flex"> 
          <input 
          value={this.state.inputText} 
          onChange={this.setInputText}
          type="text" className="form-control"/>    
          <button 
          className="btn btn-info" 
          onClick={()=>this.props.onAddTodo(this.state.inputText)}>add</button>   
        </div>
    )
  }
}
