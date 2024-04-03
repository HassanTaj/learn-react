import React, { useCallback, useState } from 'react'

function TodoForm({
  task,
  setTask,
  onTodoSubmitEvent
}) {
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
              value={task}
              onChange={(e) => setTask(e.target.value)} />

            <button class="btn btn-outline-primary" disabled={task == ''} type="button" onClick={useCallback(() => onTodoSubmitEvent(task), [onTodoSubmitEvent, task])}>
              save
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TodoForm
