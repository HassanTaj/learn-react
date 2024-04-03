import React, { useCallback } from 'react';
import Todo from '../todo';

function TodoForm({
  todo,
  setTodo,
  onTodoSubmitEvent
}) {
  var model = new Todo(todo?.id, todo.task);
  return (
    <>
      <div class="card">
        <div class="card-body">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="enter text here.."
              aria-label="Button"
              value={todo?.task}
              onChange={(e) => {
                e.preventDefault();

                model.task = e.target.value;
                setTodo(model);
              }}

              onKeyUp={(e) => {
                if (e.key === 'Enter') {
                  onTodoSubmitEvent(todo)
                }
              }}
            />

            <button class="btn btn-outline-primary" disabled={todo?.task == ''} type="button" onClick={useCallback(() => onTodoSubmitEvent(todo), [onTodoSubmitEvent, todo])}>
              save
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TodoForm
