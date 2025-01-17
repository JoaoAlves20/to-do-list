const input = document.querySelector(".input");
const button = document.querySelector(".button");
const toDoList = document.querySelector(".to-do-list");
const form = document.querySelector(".container");

function createElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
};

function validationInput({ target }) {
    if (target.value.length > 2) {
        button.removeAttribute("disabled");
        return;
    };

    button.setAttribute("disabled", "");
};

function createToDoList(event) {
    event.preventDefault();
    
    const valueInput = input.value;

    const createDiv = createElement("div", "container-response");
    const createText = createElement("span", "span-created");
    const createButton = createElement("button", "button-created");

    createText.innerHTML = valueInput;
    createButton.innerHTML = "Finalizar";

    createButton.addEventListener("click", () => toDoList.removeChild(createDiv));

    createDiv.appendChild(createText);
    createDiv.appendChild(createButton);

    toDoList.appendChild(createDiv);

    input.value = "";

    button.setAttribute("disabled", "");
};

input.addEventListener("input", validationInput);
form.addEventListener("submit", createToDoList);