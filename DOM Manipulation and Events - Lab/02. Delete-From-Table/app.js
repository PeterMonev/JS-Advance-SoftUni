function deleteByEmail() {
  const arg = document.querySelectorAll("tbody tr");
  const inputText = document.querySelector("input").value;
  const result = document.getElementById("result").textContent;

  for (let i = 0; i < arg.length; i++) {
    let text = arg[i].children[1].textContent;

    if (text === inputText) {
      arg[i].remove();
      document.getElementById("result").textContent = "Deleted.";
    } else {
      document.getElementById("result").textContent = "Not found.";
    }
  }
}
