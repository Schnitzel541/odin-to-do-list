// all dom manipulation happens here
export const modalLogicTodo = () => {
    const plusButton = document.querySelector(".plus-button");
    const addTodoButton = document.querySelector("#add-to-do-button");
    const dialogBox = document.querySelector(".create-to-do-dialog");

    plusButton.addEventListener('click', (e) => {
        e.preventDefault();
        dialogBox.showModal();
    })

    addTodoButton.addEventListener('click', (e) => {
        e.preventDefault();
        dialogBox.close();
    })
};

export const modalLogicProject = () => {
    const plusButtonProjects = document.querySelector(".project-create");
    const addProjectDialog = document.querySelector(".create-project-dialog");
    const addProjectButton = document.querySelector("#add-project-button");
    
    plusButtonProjects.addEventListener("click", (e) => {
        addProjectDialog.showModal();
    })

    addProjectButton.addEventListener("click", (e) => {
        addProjectDialog.close();
    })
};