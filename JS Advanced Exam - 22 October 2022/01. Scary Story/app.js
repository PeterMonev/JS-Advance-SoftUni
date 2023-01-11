window.addEventListener("load", solve);

function solve() {
   const [firstName,lastName,age,title] = document.querySelectorAll('input');
   const genre = document.getElementById('genre');
   const text = document.getElementById('story');
   const publishBtn = document.getElementById("form-btn")
   publishBtn.addEventListener("click", onPublish);

   function onPublish(ev) {
    ev.preventDefault();
 
     if(firstName.value.trim() === '' || lastName.value.trim() === '' || age.value.trim() === '' || title.value.trim() === '' || text.value.trim() === '') return;

      const ul = document.getElementById('preview-list');
      let li = document.createElement('li');
      li.classList = 'story-info';
      
      let article = document.createElement('article');

      let h4 = document.createElement('h4');
      h4.textContent = 'Name: ' + firstName.value + ' ' +lastName.value;
      article.appendChild(h4);

      let pAge = document.createElement('p');
      pAge.textContent = 'Age: ' + age.value;
      article.appendChild(pAge);

      let pTitle = document.createElement('p');
      pTitle.textContent = 'Title: ' + title.value;
      article.appendChild(pTitle);

      let pGenre = document.createElement('p');
      pGenre.textContent = 'Genre: ' + genre.options[genre.selectedIndex].value;
      article.appendChild(pGenre);
      // let genreSelect = document.getElementById('genre').options[genre.selectedIndex]
      
      let pText = document.createElement('p');
      pText.textContent = text.value;
      article.appendChild(pText);

      li.appendChild(article);

      //Buttons 

      let saveBtn = document.createElement('button');
      saveBtn.textContent = 'Save Story';
      saveBtn.classList = 'save-btn';
      saveBtn.addEventListener('click', onSave)
      li.appendChild(saveBtn);
      saveBtn.disabled = false;
    

      let editBtn = document.createElement('button');
      editBtn.textContent = 'Edit Story';
      editBtn.classList = 'edit-btn';
      editBtn.addEventListener('click', onEdit);
      li.appendChild(editBtn);
      editBtn.disabled = false;

      let deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete Story';
      deleteBtn.classList = 'delete-btn';
      deleteBtn.addEventListener('click', onDelete);
      li.appendChild(deleteBtn);
      deleteBtn.disabled = false;

      ul.appendChild(li);
      publishBtn.disabled = true;

 
      //CLear

      firstName.value = '';
      lastName.value = '';
      age.value = '';
      title.value = '';
      text.value = '';
      genre.value = '';
     

   }

   function onEdit(ev) {
      publishBtn.disabled = false;
      document.getElementsByClassName('save-btn')[0].disabled = true;
      document.getElementsByClassName('edit-btn')[0].disabled = true;
      document.getElementsByClassName('delete-btn')[0].disabled = true;
      console.log(document.getElementsByClassName('edit-btn')[0])

       let articleEdit = ev.target.parentNode.children[0];
       
      
       let firstNameText = articleEdit.children[0].textContent.split(' ')[1];
       firstName.value = firstNameText;

       let lastNameText = articleEdit.children[0].textContent.split(' ')[2];
       lastName.value = lastNameText;

       let ageText = articleEdit.children[1].textContent.split(' ')[1]
       age.value = Number(ageText)

       let titleText = articleEdit.children[2].textContent.substring(7,)
       title.value = titleText

       let genreText  = articleEdit.children[3].textContent.split(' ')[1];
       genre.value = genreText;
   
       let textText = articleEdit.children[4].textContent;
       text.value = textText;
      
    
       ev.target.parentNode.parentNode.children[1].remove()
       
       
   }

   function onSave(ev){
      const divMain = document.getElementById('main');

      divMain.innerHTML = ""

      let h1Main = document.createElement('h1');
      h1Main.textContent = "Your scary story is saved!"
      divMain.appendChild(h1Main);
     
   }

   function onDelete(ev){
     publishBtn.disabled = false;
     console.log(   ev.target.parentNode.parentNode.children[1])
    ev.target.parentNode.parentNode.children[1].remove()
  
    
   }
}