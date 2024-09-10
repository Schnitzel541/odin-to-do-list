const domLogic = (() => {
    const unorderedProjectList = document.querySelector(".project-list");
    const createProjectLogic = () => {
        const textField = document.createElement("input");
        textField.type = "text";
        unorderedProjectList.append(textField);
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

