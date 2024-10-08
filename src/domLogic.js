import { Button } from "bootstrap";
import { getTodoValues } from "./creationLogic";

export const contentDiv = document.querySelector(".content")
const plusButton = document.querySelector(".plus-button");
const addTodoButton = document.querySelector("#add-to-do-button");
const dialogBox = document.querySelector(".create-to-do-dialog");
const plusButtonProjects = document.querySelector(".project-create");
const addProjectDialog = document.querySelector(".create-project-dialog");
const addProjectButton = document.querySelector("#add-project-button");

export const deleteTodo = (todo, array) => {
    array.forEach((item) => {
        if (item.key === todo) {
            item.splice(1, 0);
        }
    localStorage.removeItem(`${todo}`);
    })
};

const toggleChecked = (todo, array, date) => {
    array.forEach((item) => {
        if (item.todoTitle === todo) {
            switch(item.checked) {
                case false:
                item.checked = true;
                localStorage.setItem(todo, `{"todoTitle":"${todo}","todoDueDate":"${date}","checked":true}`)
                break;
    
                case true:
                item.checked = false;
                localStorage.setItem(todo, `{"todoTitle":"${todo}","todoDueDate":"${date}","checked":false}`)
                break;
            }
        }
    })
}

// all dom manipulation happens here
export const modalLogicTodo = () => {

    plusButton.addEventListener('click', (e) => {
        clearDOM(".content");
        renderTodos();
        e.preventDefault();
        dialogBox.showModal();
    })

    addTodoButton.addEventListener('click', (e) => {
        clearDOM(".content");
        renderTodos();
        e.preventDefault();
        dialogBox.close();
    })
};

export const modalLogicProject = () => {

    plusButtonProjects.addEventListener("click", (e) => {
        e.preventDefault();
        addProjectDialog.showModal();
    })

    addProjectButton.addEventListener("click", (e) => {
        e.preventDefault();
        addProjectDialog.close();
    })
};

export const addTodoToList = () => {
    addTodoButton.addEventListener('click', (e) => {
        clearDOM(".content");
        
        e.preventDefault();
        const newTodo = getTodoValues();
        const newTodoTitle = newTodo.todoTitle;
        const newTodoTitleNoSpaces = newTodoTitle.replaceAll(" ", "_");

        localStorage.setItem(`${newTodoTitleNoSpaces}`, JSON.stringify({
            todoTitle: newTodoTitleNoSpaces,
            todoDueDate: newTodo.todoDueDate,
            checked: false
        })); 
        renderTodos();
    });
};


export const renderTodos = () => {
    const localStorageArray = [];

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const valueToStore = JSON.parse(localStorage.getItem(key));
        localStorageArray.push(valueToStore);
    }
    localStorageArray.forEach((item) => {
        const newTodoElement = document.createElement("div");
        let checkChecked;
        let strike;
        let strikeC;

        if (!item.checked) {
            checkChecked = " ";
            strike = "";
            strikeC = "";
        }
        else {
            checkChecked = "checked";
            strike = "<s>";
            strikeC = "</s>";
        }

        newTodoElement.classList.add("all");

        const todoTitleFix = item.todoTitle.replaceAll("_", " ");

        newTodoElement.innerHTML = `
        <input id="check-box" data-title=${item.todoTitle} due-date="${item.todoDueDate}" type="checkbox" ${checkChecked}>
        <h2 id="title-heading" data-title="${item.todoTitle}">${strike}${todoTitleFix}${strikeC}</h2>
        <div class="tools">
            <h5>${item.todoDueDate}</h5>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z"/></svg>            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"/></svg>
            <svg id="delete-button" data-title="${item.todoTitle}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
        </div>`


        contentDiv.appendChild(newTodoElement);
    });

    document.querySelectorAll("#delete-button").forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const todoTitle = button.getAttribute('data-title');
        deleteTodo(todoTitle, localStorageArray);
        clearDOM(".content");
        renderTodos();
      })  
    })

    document.querySelectorAll("#check-box").forEach(box => {
        box.addEventListener('click', (e) => {
            const boxTitle = box.getAttribute('data-title');
            const dueDate = box.getAttribute('due-date')
            toggleChecked(boxTitle, localStorageArray, dueDate);
            clearDOM('.content');
            renderTodos(); 
        })
    })
};

// Logic to clear the dom every time the page is reloaded.
export const clearDOM = (div) => {
    document.querySelector(div).innerHTML = "";
};

