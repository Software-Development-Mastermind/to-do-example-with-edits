const addButton = document.getElementById("add-btn");
addButton.addEventListener("click", (e) => {
    console.log("dsfdsf");
    e.preventDefault();
    const todoInput = document.getElementById("todo-input");
    createToDo(todoInput.value);
    todoInput.value = "";
    todoInput.focus();
});

function createToDo(todoText) {
    const liElement = document.createElement("li");

    const spanElement = document.createElement("span");
    spanElement.textContent = todoText;
    liElement.appendChild(spanElement);

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.style.cssFloat = "left";

    checkBox.addEventListener("click", (e) => {
        addLineThrough(spanElement);

        if (e.target.checked) {
            deleteButton.classList.remove("hidden");
        } else {
            deleteButton.classList.add("hidden");
        }
    });

    liElement.appendChild(checkBox);

    const deleteButton = document.createElement("input");
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("value", "X");
    deleteButton.classList.add("delete");
    deleteButton.classList.add("hidden");

    deleteButton.addEventListener("click", (e) => {
        unorderedListElement.removeChild(liElement);
    });

    liElement.appendChild(deleteButton);

    const unorderedListElement = document.getElementById("list");
    unorderedListElement.appendChild(liElement);
}

function addLineThrough(element) {
    element.classList.toggle("myLine");
}

function handleRemove(node) {
    const item = document.getElementById("list");
    item.removeChild(node);
}
