function solve() {
  const titleInput = document.getElementById("title");
  const emailInput = document.getElementById("recipientName");
  const textInput = document.getElementById("message");
  const addButton = document.getElementById("add");
  const resetButton = document.getElementById("reset");
  addButton.addEventListener("click", onAddToList);
  resetButton.addEventListener("click", onReset);
  const recipient = "Recipient Name: ";

  function onAddToList(ev) {
    ev.preventDefault();
    console.log(ev.target.parentNode.parentNode.parentNode);
    if (
      titleInput.value != "" &&
      emailInput.value != "" &&
      textInput.value != ""
    ) {
      //Text
      const ul = document.getElementById("list");
      const li = document.createElement("li");
      const div = document.createElement("div");
      const titleH4 = document.createElement("h4");
      const emailH4 = document.createElement("h4");
      const span = document.createElement("span");
      div.id = "list-action";

      titleH4.textContent = "Title: " + titleInput.value;
      emailH4.textContent = recipient + emailInput.value;
      span.textContent = textInput.value;

      li.appendChild(titleH4);
      li.appendChild(emailH4);
      li.appendChild(span);

      //Buttons
      const addBtn = document.createElement("button");
      addBtn.type = "submit";
      addBtn.id = "send";
      addBtn.textContent = "Send";
      addBtn.addEventListener("click", onSend);
      const deleteBtn = document.createElement("button");
      deleteBtn.type = "submit";
      deleteBtn.id = "delete";
      deleteBtn.textContent = "Delete";
      div.appendChild(addBtn);
      div.appendChild(deleteBtn);
      deleteBtn.addEventListener("click", deleteBeforeSent);

      li.appendChild(div);
      ul.appendChild(li);

      titleInput.value = "";
      emailInput.value = "";
      textInput.value = "";
    }
  }

  function onReset(ev) {
    ev.preventDefault();

    titleInput.value = "";
    emailInput.value = "";
    textInput.value = "";
  }

  function onSend(ev) {
    const ul = document.querySelector(".sent-list");
    const li = document.createElement("li");
    const spanEmail = document.createElement("span");
    const spanTitle = document.createElement("span");
    const div = document.createElement("div");
    div.classList = "btn";
    const deleteButton = document.createElement("button");
    deleteButton.type = "submit";
    deleteButton.className = "delete";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", onDelete);

    spanEmail.textContent =
      ev.target.parentNode.parentNode.childNodes[1].textContent.replace(
        "Recipient Name: ",
        "To: "
      );
    spanTitle.textContent =
      ev.target.parentNode.parentNode.childNodes[0].textContent;
    div.appendChild(deleteButton);
    li.appendChild(spanEmail);
    li.appendChild(spanTitle);
    li.appendChild(div);
    ul.appendChild(li);
    ev.target.parentNode.parentNode.parentNode.removeChild(
      ev.target.parentNode.parentNode
    );
  }

  function onDelete(ev) {
    const ul = document.querySelector(".delete-list");
    const li = document.createElement("li");
    const spanEmail = document.createElement("span");
    const spanTitle = document.createElement("span");
    spanEmail.textContent =
      ev.target.parentNode.parentNode.childNodes[0].textContent;
    spanTitle.textContent =
      ev.target.parentNode.parentNode.childNodes[1].textContent;
    li.appendChild(spanEmail);
    li.appendChild(spanTitle);
    ul.appendChild(li);
    ev.target.parentNode.parentNode.parentNode.removeChild(
      ev.target.parentNode.parentNode
    );
  }

  function deleteBeforeSent(ev) {
    const ul = document.querySelector(".delete-list");
    const li = document.createElement("li");
    const spanEmail = document.createElement("span");
    const spanTitle = document.createElement("span");
    spanEmail.textContent =
      ev.target.parentNode.parentNode.childNodes[1].textContent.replace(
        "Recipient Name: ",
        "To: "
      );
    spanTitle.textContent =
      ev.target.parentNode.parentNode.childNodes[0].textContent;
    li.appendChild(spanEmail);
    li.appendChild(spanTitle);
    ul.appendChild(li);
    ev.target.parentNode.parentNode.parentNode.removeChild(
      ev.target.parentNode.parentNode
    );
  }
}
solve();
