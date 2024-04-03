export default class Todo {
    constructor(id, task) {
        if (!!id) {
            this.id = id;
        }
        this.task = task;
    }
}