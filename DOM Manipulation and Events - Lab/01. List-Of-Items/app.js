function addItem() {
   const liElement = document.createElement('li');
   liElement.textContent = document.getElementById('newItemText').value;
   let ul = document.getElementById('items');
   ul.appendChild(liElement);
   
}