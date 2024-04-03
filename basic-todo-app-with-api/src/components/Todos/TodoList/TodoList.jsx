import React from 'react'

const TodoList = ({ todos, onTodoDelete, onTodoEdit }) => {

  return (
    <>
      <ul class="list-group ">
        {todos?.map(todo =>
          <li class="list-group-item d-flex justify-content-between text-align-left">
            <label>{todo?.task}</label>
            <div className='d-flex'>
              <button className='btn btn-outline-secondary me-2' onClick={() => onTodoEdit(todo)}>Edit</button>
              <button className='btn btn-outline-danger' onClick={() => onTodoDelete(todo)}>Delete</button>
            </div>
          </li>)}
        {todos.length == 0 && <li class="list-group-item">No data yet</li>}
      </ul>
    </>
  )
}

export default TodoList
