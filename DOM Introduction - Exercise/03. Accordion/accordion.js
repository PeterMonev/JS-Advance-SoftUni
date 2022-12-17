function toggle() {
    const button = document.getElementsByClassName("button")[0].textContent;
    const text = document.getElementById('extra');
   
   
     if(button === 'More'){
        document.getElementsByClassName("button")[0].textContent = 'Less';
        text.style.display = 'block';
     } else {
        document.getElementsByClassName("button")[0].textContent = 'More';
        text.style.display = 'none';
     }
}