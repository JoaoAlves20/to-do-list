const input = document.querySelector(".input");
const button = document.querySelector(".button");
const toDoList = document.querySelector(".to-do-list");

function createElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
};

function createToDoList() {
    const valueInput = input.value;
    
    const createDiv = createElement("div", "container-response");
    const createText = createElement("span", "span-created");
    const createButton = createElement("button", "button-created");

    createText.innerHTML = valueInput;
    createButton.innerHTML = "OK";

    createButton.addEventListener("click", () => toDoList.removeChild(createDiv));

    createDiv.appendChild(createText);
    createDiv.appendChild(createButton);

    toDoList.appendChild(createDiv);

    input.value = "";
};

button.addEventListener("click", createToDoList);