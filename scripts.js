window.onload = init;


function init() {
  const addButton = document.getElementById("Add");
      addButton.onclick = handleAdd;
  
  const addItem = document.getElementById("entry");
      addItem.onkeydown = handleKeyPress;
  
  const removeItem = document.getElementById("Li"); 
        removeItem.onclick = handleRemove;
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
  
    //checkBox.checked.className = "strikethrough";
   

  document.getElementById("list").appendChild(node); 

  return checkBox;
}



function handleRemove(checkBox) {
  if (checkBox.checked) {
    document.getElementById("Li").style.textDecoration = "line-through";
  }
  else {
    document.getElementById("Li").style.textDecoration = "none";
  }
 }


  