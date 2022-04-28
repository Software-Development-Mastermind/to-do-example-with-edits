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
  
  
  //    const delete = document.createElement("input");

  //    delete.setAttribute("type", "button"); 
  //   node.appendChild(delete);
  //    checkBox.style.cssFloat = "right";

  document.getElementById("list").appendChild(node); 
}
