import { Todo } from './todo.js';

export class Project {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.todos = [];
    }

    addTodo(todo) {
        // Create the main div
        const collapseDiv = document.createElement('div');
        collapseDiv.setAttribute('tabindex', '0');
        collapseDiv.classList.add('collapse', 'collapse-arrow', 'border-base-300', 'bg-base-200', 'border');

        // Create the title div
        const collapseTitleDiv = document.createElement('div');
        collapseTitleDiv.classList.add('collapse-title', 'text-xl', 'font-medium');

        // Create the content div
        const collapseContentDiv = document.createElement('div');
        collapseContentDiv.classList.add('collapse-content');

        // Create the paragraph inside the content div
        const contentParagraph = document.createElement('p');

        // Append the paragraph to the content div
        collapseContentDiv.appendChild(contentParagraph);

        // Append the title and content divs to the main div
        collapseDiv.appendChild(collapseTitleDiv);
        collapseDiv.appendChild(collapseContentDiv);

        // Finally, append the main div to the body or any other container
        document.body.appendChild(collapseDiv);
    }
}