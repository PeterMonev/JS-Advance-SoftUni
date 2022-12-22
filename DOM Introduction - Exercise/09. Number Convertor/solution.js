function solve(){
    let numberElement = document.getElementById('input')
    let toFieldElement = document.getElementById('selectMenuTo');
    let result = document.getElementById('result');
   

   let binary = document.createElement('option');
   binary.value = 'binary';
   binary.innerHTML = 'Binary';
    let hexadecimal = document.createElement('option');
    hexadecimal.value = "hexadecimal";
    hexadecimal.innerHTML = 'Hexadecimal';
    toFieldElement.appendChild(binary);
    toFieldElement.appendChild(hexadecimal);

    document.getElementsByTagName('button')[0].addEventListener('click', onClick);
    function onClick(){
        if (toFieldElement.value === 'binary') {
            result.value = Number(numberElement.value).toString(2);
        } else if (toFieldElement.value === 'hexadecimal') {
            result.value = Number(numberElement.value).toString(16).toUpperCase();
        }
    }
}