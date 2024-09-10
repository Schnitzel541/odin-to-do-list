const todoObjectsArray = [];

const modalFunctionality = (() => {
    const plusButton = document.querySelector(".plus-button");
    const modal = document.querySelector("dialog")
    const addToDoButton = document.querySelector(".add-to-do-button");

    plusButton.addEventListener('click', (e) => {
        e.preventDefault();
        modal.showModal();
    })

    addToDoButton.addEventListener('click', (e) => {
        e.preventDefault();
        modal.close();
    })
})();

export const createTodoObject = () => {
    const titleInput = document.querySelector("#title-input");
    const dueDateInput = document.querySelector("#due-date");
    const addToDoButton = document.querySelector(".add-to-do-button");

    function todoFactory(title, dueDate) {
        return { title, dueDate };
    }

    addToDoButton.addEventListener('click', (e) => {
        e.preventDefault();

        if (titleInput.value !== "" && dueDateInput.value !== "") {
            const newTodoObject = todoFactory(titleInput.value, dueDateInput.value);
            console.log(newTodoObject);
            todoObjectsArray.push(newTodoObject);
    
            titleInput.value = "";
            dueDateInput.value = "";
            
            console.log(todoObjectsArray);
    
            todoObjectsArray.forEach((todoObject, index) => {
                localStorage.setItem(index.toString(), `{ title: ${todoObject.title}, 
                                                          dueDate: ${todoObject.dueDate} }`);
           });
        }
    });
};