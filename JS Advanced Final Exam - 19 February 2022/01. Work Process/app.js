function solve() {
  const firstName = document.getElementById("fname");
  const lastName = document.getElementById("lname");
  const email = document.getElementById("email");
  const birthDate = document.getElementById("birth");
  const position = document.getElementById("position");
  const salary = document.getElementById("salary");
  const hireWorkerBtn = document.getElementById("add-worker");
  hireWorkerBtn.addEventListener("click", onHired);

  function onHired(ev) {
    ev.preventDefault();
    if (
      firstName.value != "" &&
      lastName.value != "" &&
      email.value != "" &&
      birthDate.value != "" &&
      position.value != "" &&
      salary.value != ""
    ) {
      const tbody = document.getElementById("tbody");
      let tr = document.createElement("tr");
      let tdFirstName = document.createElement("td");
      let tdLastName = document.createElement("td");
      let tdEmail = document.createElement("td");
      let tdBirth = document.createElement("td");
      let tdPosition = document.createElement("td");
      let tdSalary = document.createElement("td");
      tdFirstName.textContent = firstName.value;
      tdLastName.textContent = lastName.value;
      tdEmail.textContent = email.value;
      tdBirth.textContent = birthDate.value;
      tdPosition.textContent = position.value;
      tdSalary.textContent = Number(salary.value);
      tr.appendChild(tdFirstName);
      tr.appendChild(tdLastName);
      tr.appendChild(tdEmail);
      tr.appendChild(tdBirth);
      tr.appendChild(tdPosition);
      tr.appendChild(tdSalary);

      // Button
      const btnFired = document.createElement("button");
      btnFired.textContent = "Fired";
      btnFired.classList = "fired";
      const btnEdin = document.createElement("button");
      btnEdin.textContent = "Edit";
      btnEdin.classList = "edit";
      let tdButtons = document.createElement("td");
      tdButtons.appendChild(btnFired);
      tdButtons.appendChild(btnEdin);
      tr.appendChild(tdButtons);
      tbody.appendChild(tr);

      const sum = document.getElementById("sum");
      let value = Number(sum.textContent);
      value += Number(tdSalary.textContent);
      sum.textContent = value.toFixed(2);

      // Clear
      firstName.value = "";
      lastName.value = "";
      email.value = "";
      birthDate.value = "";
      position.value = "";
      salary.value = "";

      btnEdin.addEventListener("click", onEdit);
      btnFired.addEventListener("click", onFired);
    } else {
      return;
    }
  }

  function onEdit(ev) {
    let parentNode = ev.target.parentNode.parentNode;
    firstName.value = parentNode.childNodes[0].textContent;
    lastName.value = parentNode.childNodes[1].textContent;
    email.value = parentNode.childNodes[2].textContent;
    birthDate.value = parentNode.childNodes[3].textContent;
    position.value = parentNode.childNodes[4].textContent;
    salary.value = parentNode.childNodes[5].textContent;

    const sum = document.getElementById("sum");
    let value = Number(sum.textContent);
    value -= Number(parentNode.childNodes[5].textContent);
    sum.textContent = value.toFixed(2);
    const tbody = document.getElementById("tbody");
    tbody.removeChild(parentNode);
  }

  function onFired(ev) {
    let parentNode = ev.target.parentNode.parentNode;
    const sum = document.getElementById("sum");
    let value = Number(sum.textContent);
    value -= Number(parentNode.childNodes[5].textContent);
    sum.textContent = value.toFixed(2);
    const tbody = document.getElementById("tbody");
    tbody.removeChild(parentNode);
  }
}
solve();
