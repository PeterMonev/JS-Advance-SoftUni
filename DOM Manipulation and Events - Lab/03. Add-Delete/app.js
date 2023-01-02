function addItem() {
  const ul = document.getElementById("items");
  const li = document.createElement("li");
  const text = document.getElementById("newItemText").value;
  li.textContent = text;
  ul.appendChild(li);

  const button = document.createElement("a");
  button.href = "#";
  button.textContent = "[Delete]";
  button.addEventListener("click", removeElement);

  li.appendChild(button);

  function removeElement(ev) {
    const parent = ev.target.parentNode;
    parent.remove();
  }
}
