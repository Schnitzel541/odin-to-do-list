const domLogic = (() => {
    const listItemsArray = [];
    const newProjectInput = document.createElement("input");
    const newProjectButton = document.createElement("button");
    const unorderedProjectList = document.querySelector(".project-list");

    let projectsArray = [];


    const renderProjects = (arr) => {
        arr.forEach((item) => {
            unorderedProjectList.appendChild(item);
        })
    }
    
    const addProjectToList = (projectName) => {
        const newProject = document.createElement("li");
        newProject.className = "project-list-item";
        newProject.textContent = projectName;
        newProjectInput.remove();
        newProjectButton.remove();
        listItemsArray.pop(newProjectInput);
        projectsArray.push(newProject);
        renderProjects(projectsArray);
    }

    const createProjectLogic = () => {
        const listItems = document.querySelectorAll(".project-list-item");
        listItems.forEach((item) => {
            listItemsArray.push(item);
        });

        if (!listItemsArray.includes(newProjectInput)) {
            newProjectInput.value = "New Project";
            newProjectButton.textContent = "Create Project"
            unorderedProjectList.appendChild(newProjectInput);
            unorderedProjectList.appendChild(newProjectButton);
            listItemsArray.push(newProjectInput);
            newProjectButton.addEventListener('click', (e) => {
                e.preventDefault();
                addProjectToList(newProjectInput.value)
            })
        }
    }
    return { createProjectLogic }
})();


export const createProject = () => {
    const createProjectButton = document.querySelector(".project-create");
    createProjectButton.addEventListener("click", (e) => {
        e.preventDefault;
        domLogic.createProjectLogic();
    })
};

