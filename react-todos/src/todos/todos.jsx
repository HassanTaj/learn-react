
import { useCallback, useEffect, useState } from 'react';
import TodoForm from './todo-form/todo-from';
import TodoList from './todo-list/todo-list'
import axios from '../config/axios.client';


async function getTodos() {
    let result = await axios.get('todos');
    return result.data;
}

function Todos(params) {
    var [todos, setTodo] = useState([]);

    const onTodoSubmitted = useCallback(async () => {
        // getTodos().then((data) => setTodo(data));
        setTodo(await getTodos());
    }, []);

    useEffect(() => {
        getTodos().then((data) => setTodo(data));
        return () => setTodo([]); // Cleanup after detachment, demount
    }, []);
    
    return (
        <>
            <TodoForm onSubmit={onTodoSubmitted} />
            <TodoList todos={todos} />
        </>
    );
}

export default Todos;