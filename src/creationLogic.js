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
};

const getProjectValues = () => {
    const projectTitle = document.querySelector("#project-title-input");
    const projectTitleValue = projectTitle.value;

    let projectObject = {
        projectTitle: projectTitleValue
    };

    return projectObject;
};

export { getTodoValues, getProjectValues };