function solution() {
    const input = document.querySelector('input');
    const section = document.getElementsByClassName("card")[0];
    const divBtn = section.children[1];
    const addBtn = divBtn.children[1]
    addBtn.addEventListener('click', onAdd);
    let index = 0;

    function onAdd(ev){
        ev.preventDefault();
        
        const div = document.getElementsByClassName("container")[0]
        const sectionList = div.children[1]
        const ulList = sectionList.children[1]
        
        let liList = document.createElement("li");
        liList.classList = "gift";
        liList.textContent = input.value
        
        let sendBtn = document.createElement("button");
        sendBtn.id = "sendButton";
        sendBtn.textContent = "Send";
        liList.appendChild(sendBtn);
        sendBtn.addEventListener("click",onSend);

        let discardBtn = document.createElement("button");
        discardBtn.id = "discardButton";
        discardBtn.textContent = "Discard";
        liList.appendChild(discardBtn);
        discardBtn.addEventListener('click',onDiscard);

        ulList.appendChild(liList);
        
        let sorted = Array.from(ulList.children);
        sorted.sort((a,b)=> a.textContent.localeCompare(b.textContent))

        for(let token of sorted) {
            ulList.appendChild(token);
        }

        ulList.appendChild
        input.value = '';
    }

    function onSend (ev){
        let text = ev.target.parentNode.textContent
        text = text.replace('Discard','')
        text = text.replace('Send','')
        text.trim()
       
              
        const div = document.getElementsByClassName("container")[0]
        const sectionSent = div.children[2]
        const ulList = sectionSent.children[1]

        let liSent = document.createElement("li");
        liSent.classList = "gift";
        liSent.textContent = text
        ulList.appendChild(liSent)
        console.log(ulList)

        ev.target.parentNode.remove()
       
    }

    function onDiscard(ev){
        let text = ev.target.parentNode.textContent
        text = text.replace('Discard','')
        text = text.replace('Send','')
        text.trim()
       
              
        const div = document.getElementsByClassName("container")[0]
        const sectionSent = div.children[3]
        const ulList = sectionSent.children[1]

        let liSent = document.createElement("li");
        liSent.classList = "gift";
        liSent.textContent = text
        ulList.appendChild(liSent)
        console.log(ulList)

        ev.target.parentNode.remove()
    }
}