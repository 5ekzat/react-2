import React, { Component } from 'react';
import "./SearchTodo.css"

export default class SearchTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  handleSearchChange = event => {
    this.setState({ searchText: event.target.value });
  };

  handleSearch = () => {
    this.props.onSearch(this.state.searchText);
    this.setState({ searchText: '' }); // Сбрасываем текст поиска после выполнения поиска
  };

  

  render() {
    return (
      <div className='d-flex'>
        <input type="text" 
        className='form-control'
        value={this.state.searchText}
        onChange={this.handleSearchChange}/>
        <button onClick={this.handleSearch} className='btn btn-info'>Search</button>
        <button onClick={() => this.props.onFilter('all')} className='btn btn-info'>All</button>
        <button onClick={() => this.props.onFilter('active')} className=' btn btn-outline-secondary'>Active</button>
        <button onClick={() => this.props.onFilter('done')} className=' btn btn-outline-secondary'>Done</button>
      </div>
    )
  }
}
