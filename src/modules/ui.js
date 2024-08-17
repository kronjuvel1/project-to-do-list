export function renderProjects(projects) {
    const projectContainer = document.getElementById('projectContainer');
    projectContainer.innerHTML = '';

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.textContent = project.name;
        projectItem.addEventListener('click', () => renderTodos(project));
        projectContainer.appendChild(projectItem);
    });
}

export function renderTodos(project) {
    const todoContainer = document.getElementById('todoContainer');
    todoContainer.innerHTML = '';

    project.todos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.textContent = `${todo.title} - ${todo.dueDate}`;
        todoItem.style.color = getPriorityColor(todo.priority);
        todoContainer.appendChild(todoItem);
    });
}

function getPriorityColor(priority) {
    switch (priority) {
        case 'high':
            return 'red';
        case 'medium':
            return 'orange';
        case 'low':
            return 'green';
        default:
            return 'black';
    }
}