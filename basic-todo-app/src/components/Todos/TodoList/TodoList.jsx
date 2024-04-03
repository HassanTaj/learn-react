import React, { useCallback } from 'react'

const TodoList = ({ todos, onTodoDelete, onTodoEdit }) => {

  return (
    <>
      <ul class="list-group ">
        {todos?.map(x =>
          <li class="list-group-item d-flex justify-content-between text-align-left">
            <label>{x}</label>
            <div className='d-flex'>
              <button className='btn btn-outline-secondary me-2' onClick={() => onTodoEdit(x)}>Edit</button>
              <button className='btn btn-outline-danger' onClick={() => onTodoDelete(x)}>Delete</button>
            </div>
          </li>)}
        {todos.length == 0 && <li class="list-group-item">No data yet</li>}
      </ul>
    </>
  )
}

export default TodoList
