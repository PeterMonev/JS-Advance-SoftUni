window.addEventListener('load', solve);

function solve() {
    const [model,year,price] = document.querySelectorAll('input');
    const description = document.getElementById('description');
    const addBtn = document.getElementById('add')
    addBtn.addEventListener('click',onAdd);

    function onAdd(ev) {
        ev.preventDefault();
        
       if(model.value === "" || description.value === "" ) return;
       if(year.value <= 0 || price.value <= 0) return;

        const tbody = document.getElementById("furniture-list");
        let singlePrice = Number(price.value).toFixed(2)
 
        let trInfo = document.createElement("tr");
        trInfo.classList = 'info';
        let tdModel = document.createElement("td");
        tdModel.textContent = model.value;
        let tdPrice = document.createElement("td");
        tdPrice.textContent = singlePrice;
        let tdButtons = document.createElement("td");
        trInfo.appendChild(tdModel);
        trInfo.appendChild(tdPrice);
        
        let moreBtn = document.createElement("button");
        moreBtn.textContent = 'More Info';
        moreBtn.classList = 'moreBtn';
        moreBtn.addEventListener("click",onInfo);

        let buyBtn = document.createElement("button");
        buyBtn.textContent = 'Buy it';
        buyBtn.classList = 'buyBtn';
        buyBtn.addEventListener("click",onBuy);

        tdButtons.appendChild(moreBtn);
        tdButtons.appendChild(buyBtn);
        trInfo.appendChild(tdButtons);
        tbody.appendChild(trInfo);

        // trHide
        let trHide = document.createElement('tr');
        trHide.classList = 'hide'
        let tdYear = document.createElement('td');
        tdYear.textContent = 'Year: ' + year.value;
        let tdDescrip = document.createElement('td');
        tdDescrip.colSpan = 3;
        tdDescrip.textContent = 'Description: ' + description.value;
        trHide.appendChild(tdYear);
        trHide.appendChild(tdDescrip);
        tbody.appendChild(trHide);

        // Clear 
        model.value = '';
        year.value = '';
        price.value= '';
        description.value = '';

    }

    function onInfo(ev){
        let trHiden = document.getElementsByClassName('hide')[0]
        console.log(trHiden)
        // let tdMoreYear = document.createElement('td');
        // let years =  trHiden.childNodes[0].textContent
        // tdMoreYear.textContent = years; 
        // let tdMoreDescrip = document.createElement('td');
        // let descriptions = trHiden.childNodes[1].textContent
        // tdMoreDescrip.textContent = descriptions;
        // // trHiden.parentNode.removeChild(trHiden)

        // let tbody = ev.target.parentNode.parentNode.parentNode
        // let trMoreHidden = document.createElement('tr');
        // trMoreHidden.classList = 'hiden';
        // trMoreHidden.appendChild(tdMoreYear)
        // trMoreHidden.appendChild(tdMoreDescrip)
        // tbody.appendChild(trMoreHidden)
        

        if(ev.target.textContent === 'More Info'){
            trHiden.style.display = 'contents';
            ev.target.textContent = 'Less Info'
          
        } else {
            
            trHiden.style.display = 'none';
            ev.target.textContent = 'More Info'
            
        }
      
    }

    function onBuy (ev){
       let totalPrice = document.getElementsByClassName("total-price")[0];
       let oldSum = Number(totalPrice.textContent)
       let test = document.getElementsByClassName("info")[0]
       let parents = ev.target.parentNode.parentNode.parentNode.childNodes[1]
       console.log(test)
       let sum = Number(parents.childNodes[1].textContent)
       let newSum = Number(oldSum) + Number(sum);
       console.log(newSum)
       totalPrice.textContent =  newSum.toFixed(2)
       
       let trDel = document.getElementsByClassName("info")[0];
       trDel.remove();
       let trDel2 = document.getElementsByClassName("hide")[0]
       trDel2.remove();
      
   
       
    } 
}
