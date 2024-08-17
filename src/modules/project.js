export class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
        saveToLocalStorage(projects);
    }

    removeTodo(todoTitle) {
        this.todos = this.todos.filter(todo => todo.title !== todoTitle);
        saveToLocalStorage(projects);
    }
}
