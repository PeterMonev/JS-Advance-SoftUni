window.addEventListener('load', solve);

function solve() {
    const genre = document.getElementById('genre');
    const name = document.getElementById('name');
    const author = document.getElementById('author');
    const date = document.getElementById('date');
    const addBtn = document.getElementById("add-btn");
    addBtn.addEventListener('click', onAdd);



    function onAdd(ev) {

        if(genre.value === '' || name.value === ''  || author.value === ''  || date.value === '') return

        ev.preventDefault();
        const allDiv = document.getElementsByClassName('all-hits-container')[0];
        const divHits = document.createElement('div');
        divHits.classList = 'hits-info';
        let img = document.createElement('img');
        let h2Genre = document.createElement('h2');
        let h2Name = document.createElement('h2');
        let h2Author = document.createElement('h2');
        let h3Date = document.createElement('h3');
        
        img.src = './static/img/img.png'
        h2Genre.textContent = 'Genre: ' + genre.value;
        h2Name.textContent = 'Name: ' + name.value;
        h2Author.textContent = 'Author: ' + author.value;
        h3Date.textContent = 'Date: ' + date.value;
        
        divHits.appendChild(img);
        divHits.appendChild(h2Genre);
        divHits.appendChild(h2Name);
        divHits.appendChild(h2Author);
        divHits.appendChild(h3Date);
        
        const saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save song';
        saveBtn.classList = 'save-btn';
        divHits.appendChild(saveBtn);
        saveBtn.addEventListener('click',onSave);

        const likeBtn = document.createElement('button');
        likeBtn.textContent = 'Like song';
        likeBtn.classList = 'like-btn';
        divHits.appendChild(likeBtn);
        likeBtn.addEventListener('click', onLike);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList = 'delete-btn';
        divHits.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', onDelete);

        allDiv.appendChild(divHits);

        genre.value = '';
        name.value = '';
        author.value = '';
        date.value = '';

    }

    let coutnerLike = 0;

    function onLike (ev){
        coutnerLike++;
        let div = document.getElementsByClassName("likes")[0]
        let p = div.childNodes[1]
        p.textContent = 'Total Likes: ' + coutnerLike;
        ev.target.disabled = true;
      
    }

    function onSave(ev){
       
       const div = document.getElementsByClassName("saved-container")[0];
       const divSave = document.createElement("div");
       divSave.classList = 'hits-info'

       let imgSave = document.createElement("img");
       imgSave.src = './static/img/img.png';
       let h2Genre = document.createElement("h2");
       h2Genre.textContent = ev.target.parentNode.childNodes[1].textContent
       let h2Name = document.createElement('h2');
       h2Name.textContent = ev.target.parentNode.childNodes[2].textContent;
       let h2Author = document.createElement('h2');
       h2Author.textContent = ev.target.parentNode.childNodes[3].textContent;
       let h3Date = document.createElement('h3');
       h3Date.textContent = ev.target.parentNode.childNodes[4].textContent;
       let delBtn = ev.target.parentNode.childNodes[7];

       divSave.appendChild(imgSave)
       divSave.appendChild(h2Genre);
       divSave.appendChild(h2Name);
       divSave.appendChild(h2Author);
       divSave.appendChild(h3Date);
       divSave.appendChild(delBtn);

       div.appendChild(divSave);
       ev.target.parentNode.parentNode.removeChild(ev.target.parentNode);
       
       
    }

    function onDelete(ev){
        const div = document.getElementsByClassName("saved-container")[0];
        ev.target.parentNode.parentNode.removeChild(ev.target.parentNode);
   }

}