const getTodoValues = () => {
    const todoTitle = document.querySelector("#title-input");
    const todoDueDate = document.querySelector("#due-date");
    const todoTitleValue = todoTitle.value;
    const todoDueDateValue = todoDueDate.value;

    let toDoObject = {
        todoTitle: todoTitleValue,
        todoDueDate: todoDueDateValue
    }

    return toDoObject;
}

const getProjectValues = () => {
    const projectTitle = document.querySelector("#project-title-input");
    const projectTitleValue = projectTitle.value;

    let projectObject = {
        projectTitleValue: projectTitleValue
    };

    return projectObject;
}

export const createProject = () => {
    const createProjectButton = document.querySelector("#add-project-button");
    const createTodoButton = document.querySelector("#add-to-do-button");

    createProjectButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(getProjectValues());
    });

    createTodoButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(getTodoValues());
    });
};