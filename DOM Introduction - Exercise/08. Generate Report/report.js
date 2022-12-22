function solve() {
    let buttonlements = document.querySelectorAll('button');
    let generateButton = buttonlements[0];
    generateButton.addEventListener('click', myfunc)
    
    let totalDecFactor  =0
    let result= [];
    let totalPrice=0;
    
    
    
    function myfunc(e){
     e.preventDefault();
    
     let textArea = document.querySelectorAll('textArea');
    let tableBodyElement =document.getElementsByTagName('tbody')[0];
     let arr = JSON.parse(textArea[0].value);
     for (const el of arr){
      let imgValue = el.img;
      let tdElementImg = document.createElement('td');
      let img = document.createElement('img');
     
      img.setAttribute('src', imgValue)
      tdElementImg.appendChild(img)
    
       let nameValue = el.name;
        let tdNameElement = document.createElement('td');
        tdNameElement.textContent = nameValue;
    
       let priceValue = Number(el.price);
       let tdPriceElement= document.createElement('td');
        tdPriceElement.textContent = priceValue;
       
        let decFactorValue = Number(el.decFactor);
        let tdDecFactorElement = document.createElement('td');
        tdDecFactorElement.textContent = decFactorValue;
        
    
        let tdCheckBoxElement = document.createElement('td');
        //tdCheckBoxElement.className="box";
        let input = document.createElement('input');
        input.setAttribute('type','checkbox');
        tdCheckBoxElement.appendChild(input);
    
        let rowElement = document.createElement('tr');
        rowElement.appendChild(tdElementImg);
        rowElement.appendChild(tdNameElement);
        rowElement.appendChild(tdPriceElement);
        rowElement.appendChild(tdDecFactorElement);
        rowElement.appendChild(tdCheckBoxElement);
        console.log(rowElement);
        tableBodyElement.appendChild(rowElement);
     
     }
    }
     let buyButtonelement = document.getElementsByTagName('button')[1];
    
     buyButtonelement.addEventListener('click', function (e){
    
      const allProduts =Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(input=>input.parentNode.parentNode);
      
      for (const product of allProduts) {
        let cell = product.children;
        let name = cell[1].textContent;
        result.push(name);
    
        let price = Number(cell[2].textContent);
        
        totalPrice+=price
        let dec = cell[3].textContent;
        totalDecFactor+=Number(dec);
            
      }
     
    
      let textareElement = document.querySelectorAll('textArea')[1]
      textareElement.value = `Bought furniture: ${result.join(", ")}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${( totalDecFactor/allProduts.length)}`
     });
    
    
    
      
    
    }