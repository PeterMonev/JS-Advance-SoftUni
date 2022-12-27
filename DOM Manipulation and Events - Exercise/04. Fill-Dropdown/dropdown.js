function addItem() {
  const text = document.getElementById("newItemText").value;
  const value = document.getElementById("newItemValue").value;
  const menu = document.getElementById("menu");
  const optionsElement = document.createElement("option");

  optionsElement.textContent = text;
  optionsElement.value = value;
  menu.appendChild(optionsElement);
  document.getElementById("newItemText").value = "";
  document.getElementById("newItemValue").value = "";
}
