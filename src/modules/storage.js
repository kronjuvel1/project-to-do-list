export function saveToLocalStorage(projects) {
    localStorage.setItem('projects', JSON.stringify(projects));
}

export function loadFromLocalStorage() {
    const data = localStorage.getItem('projects');
    return data ? JSON.parse(data) : [];
}