window.addEventListener('load', solution);

function solution() {
   let [name,email,phone,address,code] = document.querySelectorAll('input');
   const submitBtn = document.getElementById('submitBTN');
   submitBtn.addEventListener('click',onSubmit);

   function onSubmit(ev) {
    ev.preventDefault();
    
    if(name.value === "" || email.value === '') return;

     const ul = document.getElementById('infoPreview');
     let liName = document.createElement('li');
     let liEmail = document.createElement('li');
     let liPhone = document.createElement('li');
     let liAddress = document.createElement('li');
     let liCode = document.createElement('li');

     liName.textContent = 'Full Name: ' + name.value;
     liEmail.textContent = 'Email: ' + email.value;
     liPhone.textContent = 'Phone Number: ' + phone.value;
     liAddress.textContent = 'Address: ' + address.value;
     liCode.textContent = 'Postal Code: ' + code.value;

     ul.appendChild(liName);
     ul.appendChild(liEmail);
     ul.appendChild(liPhone);
     ul.appendChild(liAddress);
     ul.appendChild(liCode);

     //Buttons
     submitBtn.disabled = true;
     const editBtn = document.getElementById('editBTN');
     const continueBtn = document.getElementById('continueBTN');
     editBtn.disabled = false;
     continueBtn.disabled = false;

     editBtn.addEventListener('click',onEdit);
     continueBtn.addEventListener('click',onContinue);

    //  Clear 
     name.value = '';
     email.value = '';
     phone.value = '';
     address.value = '';
     code.value = '';
   }

   function onEdit(ev) {
    submitBtn.disabled = false;
    let parents = ev.target.parentNode.parentNode.childNodes[1]
    ev.target.parentNode.childNodes[1].disabled = true;
    ev.target.parentNode.childNodes[3].disabled = true;
   
    name.value = parents.childNodes[0].textContent.slice(11);
    email.value = parents.childNodes[1].textContent.slice(6);
    phone.value = Number(parents.childNodes[2].textContent.slice(13));
    address.value = parents.childNodes[3].textContent.slice(8);
    code.value = Number(parents.childNodes[4].textContent.slice(12));

    ev.target.parentNode.parentNode.childNodes[1];

    while(ev.target.parentNode.parentNode.childNodes[1].childNodes[0]){
      ev.target.parentNode.parentNode.childNodes[1].removeChild(ev.target.parentNode.parentNode.childNodes[1].childNodes[0])
    }
   
   }

   function onContinue(ev){
      console.log(ev.target.parentNode.parentNode.parentNode.parentNode.parentNode)
      let div = document.getElementById('block');
      div.remove()
      let h3 = document.createElement('h3')
      h3.textContent = "Thank you for your reservation!"
      div.appendChild(h3)
      let body = document.getElementsByTagName('body')[0]
      let divNew = document.createElement('div')
      divNew.id = 'block'
      divNew.appendChild(h3);
      body.appendChild(divNew)
    
   }
}
