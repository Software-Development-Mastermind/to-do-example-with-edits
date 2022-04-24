window.onload = init;

function init() {
  var addButton = document.getElementById("Add");
  addButton.onclick = handleAdd;
}

 function handleAdd(){
  
  var node = document.createElement("Li");

  var text = document.getElementById("entry").value;

  var textnode = document.createTextNode(text);

  node.appendChild(textnode);

  document.getElementById("list").appendChild(node);
}

