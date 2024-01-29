import { useState } from 'react';
import './todo-form.css'
import axios from '../../config/axios.client';

class Todo {
    constructor({ id, task, description, isDone, startDate,isDeleted } = {}) {
        this.id = id ?? 0;
        this.task = task ?? '';
        this.description = description ?? '';
        this.isDone = isDone ?? false;
        this.isDeleted = isDeleted ?? false;
        this.startDate = startDate;
    }
}


function TodoForm({ onSubmit }) {
    const [model, setTodo] = useState(new Todo());
    var modelIm = new Todo();

    const submitTodo = (event) => {
        event.preventDefault();
        axios.post('todos', model);
        // alert(`The name you entered was: ${model.task}`);
        setTodo(new Todo());
        onSubmit();
    };

    return <>
        <form onSubmit={submitTodo} method="post">
            <div class="mb-3">
                <label for="" class="form-label">Name</label>
                <input
                    id="name"
                    type="text"
                    class="form-control"
                    name="name"
                    aria-describedby="name"
                    value={model.task ?? ""}
                    onChange={(e) => {
                        modelIm.task = e.target.value;
                        setTodo(modelIm);
                    }}
                />
                <small id="helpId" class="form-text text-muted">
                    Help text
                </small>
            </div>
            <button
                type="submit"
                class="btn btn-primary">
                Save
            </button>
        </form>
    </>
}
export default TodoForm;