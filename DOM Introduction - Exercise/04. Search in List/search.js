function search() {
    const towns = Array.from(document.querySelectorAll('ul li'));
    const search = document.getElementById('searchText').value;
    let matches = 0;
    
    for(const town of towns){

      if(town.textContent.includes(search)){
         town.style.fontWeight = "bold";
         town.style.texDecoration = "underline";
         matches++;
      } else {
         town.style.fontWeight = "normal";
         town.style.textDecoration = "";
      }
    }

    return document.getElementById('result').textContent = `${matches} matches found`;
   
}
