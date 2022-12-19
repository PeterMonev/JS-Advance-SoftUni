function solve() {

  let text = document.getElementById('input').value
  let resultElement = document.getElementById('output')
  let textToReturn = '';
  let textArr = text.split('.').filter((p)=> p.length>0);
  for (let i = 0; i < textArr.length; i += 3) {
      let arr = [];
      for (let y = 0; y < 3; y++) {
        if (textArr[i + y]) {
          arr.push(textArr[i + y]);
        }
      }
  
 textToReturn = arr.join('. ')+".";
  
  resultElement.innerHTML+= `<p>${ textToReturn }</p>`;
  }
}