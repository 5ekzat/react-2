
import React from 'react'
import "./AppHeader.css"

const AppHeader = ({done, active}) => {
  return (
  <div className='d-flex align-items-center justifu-content-between'>
         <h3>Todo List</h3>
         <h4 className='header-h4'>{active} more todo {done} done</h4>
       </div>
  )
}

export default AppHeader