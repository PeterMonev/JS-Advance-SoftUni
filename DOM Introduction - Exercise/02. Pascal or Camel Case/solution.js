function solve() {
  const command = document.getElementById("naming-convention").value;
  const text = document.getElementById("text").value;
  let result = "";

  if (command === "Camel Case") {
    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") {
        result += text[i + 1].toUpperCase();
        i++;
      } else {
        result += text[i].toLowerCase();
      }
    }
  } else if (command === "Pascal Case") {
    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") {
        result += text[i + 1].toUpperCase();
        i++;
      } else if (i === 0) {
        result += text[i].toUpperCase();
      } else {
        result += text[i].toLowerCase();
      }
    }
  } else {
   return document.getElementById("result").textContent = "Error!";
  }
  document.getElementById("result").textContent = result;
}
