window.addEventListener("load", solve);

function solve() {
  const makeInput = document.getElementById("make");
  const modelInput = document.getElementById("model");
  const yearInput = document.getElementById("year");
  const fuelInput = document.getElementById("fuel");
  const originalCost = document.getElementById("original-cost");
  const sellingCost = document.getElementById("selling-price");
  const publishButton = document
    .getElementById("publish")
    .addEventListener("click", onPublish);
  const tbody = document.getElementById("table-body");
 
  let allProfit = 0;

  

  function onPublish(ev) {
    ev.preventDefault();
     let tr = document.createElement("tr");
  tr.className = "row";
  let tdMake = document.createElement("td");
  let tdModel = document.createElement("td");
  let tdYear = document.createElement("td");
  let tdFuel = document.createElement("td");
  let tdOrigCost = document.createElement("td");
  let tdSellCost = document.createElement("td");
  let tdButtons = document.createElement("td");
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList = "action-btn edit";
  const sellButton = document.createElement("button");
  sellButton.textContent = "Sell";
  sellButton.classList = "action-btn sell";
    if(makeInput.value !== "" && modelInput.value !== "" && yearInput.value !== "" && fuelInput.value !== "" && sellingCost.value !== "" && originalCost.value !== "" && originalCost.value < sellingCost.value) {
    tdMake.textContent = makeInput.value;
    tr.appendChild(tdMake);
    tdModel.textContent = modelInput.value;
    tr.appendChild(tdModel);
    tdYear.textContent = yearInput.value;
    tr.appendChild(tdYear);
    tdFuel.textContent = fuelInput.value;
    tr.appendChild(tdFuel);
    tdOrigCost.textContent = originalCost.value;
    tr.appendChild(tdOrigCost);
    tdSellCost.textContent = sellingCost.value;
    tr.appendChild(tdSellCost);
    tdButtons.appendChild(editButton);
    tdButtons.appendChild(sellButton);
    tr.appendChild(tdButtons);
   
    tbody.appendChild(tr);

    makeInput.value = "";
    modelInput.value = "";
    yearInput.value = "";
    fuelInput.value = "";
    originalCost.value = "";
    sellingCost.value = "";

    editButton.addEventListener("click", onEdit);
    sellButton.addEventListener("click", onSell);
    }
  }

  function onEdit(ev) {
    makeInput.value = document.getElementsByTagName("td")[0].textContent;
    modelInput.value = document.getElementsByTagName("td")[1].textContent;
    yearInput.value = document.getElementsByTagName("td")[2].textContent;
    fuelInput.value = document.getElementsByTagName("td")[3].textContent;
    originalCost.value = document.getElementsByTagName("td")[4].textContent;
    sellingCost.value = document.getElementsByTagName("td")[5].textContent;
    let row = ev.target
    tbody.removeChild(row.parentNode.parentNode)
    // tbody.removeChild(tr);
  }

  function onSell(ev) {
    let row = ev.target
    let currentRow = row.parentNode.parentNode
    
  const li = document.createElement("li");
  li.classList = "each-list";
  let spanModel = document.createElement("span");
  let spanYear = document.createElement("span");
  let spanPrice = document.createElement("span");
    
    spanModel.textContent = currentRow.childNodes[0].textContent+" "+currentRow.childNodes[1].textContent
      // document.getElementsByTagName("td")[0].textContent +
      // " " +
      // document.getElementsByTagName("td")[1].textContent;
    li.appendChild(spanModel);
    spanYear.textContent = currentRow.childNodes[2].textContent;
    li.appendChild(spanYear);
    spanPrice.textContent =Number(currentRow.childNodes[5].textContent) - Number(currentRow.childNodes[4].textContent)
    //  Number(document.getElementsByTagName("td")[5].textContent) -
    //  Number(document.getElementsByTagName("td")[4].textContent);
    li.appendChild(spanPrice);
    document.getElementById("cars-list").appendChild(li);
    

    allProfit += Number(spanPrice.textContent);

    let price = document.getElementById("profit");
  
    price.textContent = Math.round(allProfit).toFixed(2);
    
    tbody.removeChild(row.parentNode.parentNode)
    // tbody.removeChild(tr);
    
 
  }
}
