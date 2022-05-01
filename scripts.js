
window.onload = init;


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
        button.setAttribute("type","button", "class=button2");
        node.appendChild(button)
        button.style.cssFloat = "right";

        button.addEventListener("click", () => 
        handleRemove(node));


  document.getElementById("list").appendChild(node); 
}

 function addLineThrough(element) {
        element.classList.toggle("myLine");
 }

 function handleRemove() {
       //item.parentNode.removeChild(item);
       //item.textContent = '';
       //item.removeChild(item.childNodes[i]);
      //item = this.parentNode;
      //let ul = item.parentNode;
      //ul.removeChild(item);
      const item = document.querySelectorAll("Li");
        for(var i=0; Li=item[i]; i++) {
            Li.parentNode.removeChild(Li);
        }
 }