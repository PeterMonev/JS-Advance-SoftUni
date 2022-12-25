function extract(content) {
    const text = document.getElementById(content).textContent;
    const pattern = /\((.+?)\)/gm;
    let result = '';
 
    let match = pattern.exec(text);
 
    while(match){
      result += match[1];
      result += '; ';
      match = pattern.exec(text);
    }
   return result;
 }