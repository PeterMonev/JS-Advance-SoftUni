function create(words) {
    const parentElement = document.getElementById('content');

    for(let i = 0; i < words.length; i++) {
       const div = document.createElement('div');
       const p = document.createElement('p');
       p.textContent = words[i];
       p.style.display = 'none';
       div.appendChild(p);
       div.addEventListener('click',onClick);
       parentElement.appendChild(div);

    }
    function onClick(ev){
        ev.target.children[0].style.display = 'inline';
    }
}