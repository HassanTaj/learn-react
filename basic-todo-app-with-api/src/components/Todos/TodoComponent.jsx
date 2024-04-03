import React, { useEffect, useState } from 'react';
import axious from '../../config/axios.client';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';
import Todo from './todo';

async function getTodos() {
    let result = await axious.get('todos');
    return result.data;
}

function TodoComponent() {
    let [todos, setTodos] = useState([]);
    let [todo, setTodo] = useState(new Todo(0, ''));

    useEffect(() => {
        getTodos().then(x => setTodos(x))
        return () => setTodos([]);
    }, [])

    let handleTodoSubmitEvent = async (todo) => {
        if (!!todo && !todo.id) {
            axious.post('todos', todo).then(async (response) => {
                setTodos(await getTodos())
                setTodo(new Todo(0, ''));
            });
        } else {
            axious.put(`todos/${todo.id}`, todo).then(async (response) => {
                setTodos(await getTodos());
                setTodo(new Todo(0, ''));
            });
        }
    }

    let handleDeleteEvent = (todo) => {
        if (!!todo && !!todo.id) {
            axious.delete(`todos/${todo.id}`).then(async (response) => {
                setTodos(await getTodos())
                setTodo(new Todo(0, ''));
            })
        }
    }

    let handleEditEvent = (todo) => {
        if (!!todo) {
            setTodos([...todos.filter(x => x != todo)]);
            setTodo(todo);
        }
    }

    return (
        <>
            <div class="row my-2" >
                <div class="col"> <TodoForm onTodoSubmitEvent={handleTodoSubmitEvent} todo={todo} setTodo={setTodo} /> </div>
            </div>

            <div class="row my-2" >
                <div class="col"><TodoList todos={todos} onTodoEdit={handleEditEvent} onTodoDelete={handleDeleteEvent} /></div>
            </div>
        </>
    )
}
export default TodoComponent
