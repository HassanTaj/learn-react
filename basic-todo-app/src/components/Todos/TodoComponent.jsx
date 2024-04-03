import React, { useState } from 'react'
import TodoList from './TodoList/TodoList';
import TodoForm from './TodoForm/TodoForm';

function TodoComponent() {
    let [todos, setTodos] = useState(["Get eggs", 'workout', `pamper lete ana`, 'hello']);
    let [task, setTask] = useState("");


    let handleTodoSubmitEvent = (task) => {
        if (!!task) {
            setTodos([...todos, task]);
            setTask('');
        }
    }

    let handleDeleteEvent = (task) => {
        if (!!task) {
            setTodos([...todos.filter(x => x != task)]);
        }
    }
    
    let handleEditEvent = (todo) => {
        if (!!todo) {
            setTodos([...todos.filter(x => x != todo)]);
            setTask(todo);
        }
    }

    return (
        <>
            <div class="row my-2" >
                <div class="col"> <TodoForm onTodoSubmitEvent={handleTodoSubmitEvent} task={task} setTask={setTask} /> </div>
            </div>

            <div class="row my-2" >
                <div class="col"><TodoList todos={todos} onTodoEdit={handleEditEvent} onTodoDelete={handleDeleteEvent} /></div>
            </div>
        </>
    )
}

export default TodoComponent
