import './style.css';
import { Project } from './modules/project';
import { Todo } from './modules/todo';
import { saveToLocalStorage, loadFromLocalStorage } from './modules/storage';
import { renderProjects, renderTodos } from './modules/ui';

const projects = loadFromLocalStorage();
renderProjects(projects);