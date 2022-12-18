function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const inputText = document.getElementById("searchField").value;
    const tables = Array.from(document.querySelectorAll("tbody tr"));

    for (let i = 0; i < tables.length; i++) {
      let tokens = tables[i].textContent.toLocaleLowerCase();

      if (tokens.includes(inputText.toLocaleLowerCase())) {
        tables[i].classList.add("select");
      } else {
        tables[i].classList.remove("select");
      }
    }
  }
  document.getElementById("searchField").value = "";
}
