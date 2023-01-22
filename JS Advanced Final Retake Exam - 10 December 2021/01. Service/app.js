window.addEventListener("load", solve);

function solve() {
  const options = document.getElementById("type-product");
  const problem = document.getElementById("description");
  const name = document.getElementById("client-name");
  const phone = document.getElementById("client-phone");
  const sendBtn = document.querySelector('button[type="submit"]');
  sendBtn.addEventListener("click", onAdd);

  function onAdd(ev) {
    ev.preventDefault();

    if (name.value !== "" && phone.value !== "" && problem.value !== "") {
      const section = document.getElementById("received-orders");
      let div = document.createElement("div");
      div.className = "container";
      let h2 = document.createElement("h2");
      let h3 = document.createElement("h3");
      let h4 = document.createElement("h4");
      h2.textContent = "Product type for repair: " + options.value;
      h3.textContent = "Client information: " + name.value + ", " + phone.value;
      h4.textContent = "Description of the problem: " + problem.value;
      div.appendChild(h2);
      div.appendChild(h3);
      div.appendChild(h4);

      // Buttons
      const startBtn = document.createElement("button");
      startBtn.classList = "start-btn";
      startBtn.textContent = "Start repair";
      startBtn.addEventListener("click", onStart);

      const finishBtn = document.createElement("button");
      finishBtn.classList = "finish-btn";
      finishBtn.textContent = "Finish repair";
      finishBtn.disabled = true;
      div.appendChild(startBtn);
      div.appendChild(finishBtn);
      section.appendChild(div);

      //Clear
      name.value = "";
      phone.value = "";
      problem.value = "";
    } else {
      return;
    }
  }

  function onStart(ev) {
    const parent = ev.target.parentNode;
    ev.target.disabled = true;

    //Finish Button
    parent.children[4].disabled = false;
    parent.children[4].addEventListener("click", onFinish);
  }

  function onFinish(ev) {
    let parent = ev.target.parentNode;
    const section = document.getElementById("completed-orders");
    const div = document.createElement("div");
    div.classList = "container";
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");
    let h4 = document.createElement("h4");
    h2.textContent = parent.children[0].textContent;
    h3.textContent = parent.children[1].textContent;
    h4.textContent = parent.children[2].textContent;
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(h4);
    section.appendChild(div);

    parent.parentNode.removeChild(parent.parentNode.children[2]);
    const clearBtn = document.getElementsByClassName("clear-btn");
    clearBtn[0].addEventListener("click", onClear);
  }

  function onClear(ev) {
    const section = document.getElementById("completed-orders");

    while (section.children[3]) {
      section.removeChild(section.children[3]);
    }
  }
}
