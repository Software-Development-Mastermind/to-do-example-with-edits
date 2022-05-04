function init() {
    const addButton = document.getElementById("Add");
        addButton.onclick = handleAdd;
  
    const addItem = document.getElementById("entry");
        addItem.onkeydown = handleKeyPress;
}

function handleKeyPress(e) {
    const addButton = document.getElementById("Add");
        if (e.keyCode === 13) {
        addButton.click();
        return false;
  }
}

function handleAdd(){

    const node = document.createElement("Li");

    const text = document.getElementById("entry").value;
        node.textContent = text;  

    const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox"); 
        node.appendChild(checkBox)
        checkBox.style.cssFloat = "left";

        checkBox.addEventListener("click", () => 
            addLineThrough(node));

    const button = document.createElement("input");
        button.setAttribute("type","button");
        button.setAttribute("value", "X");
        node.appendChild(button)
        button.classList.add("delete");

        button.addEventListener("click", () => 
        handleRemove(node));

    document.getElementById("list").appendChild(node); 
}

function addLineThrough(element) {
        element.classList.toggle("myLine");
 }

function handleRemove(node) {
    const item = document.getElementById("list");
        item.removeChild(node);
 }

window.onload = init;