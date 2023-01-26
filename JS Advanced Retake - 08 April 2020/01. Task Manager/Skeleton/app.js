function solve() {
    let addButton = document.getElementById('add');
    addButton.addEventListener('click', eventfunction)

    function eventfunction(e){
        e.preventDefault();

        let taskField = document.getElementById('task');
        if(taskField.value===""){
            window.alert("task must be filled")
            return
        }else{
            taskField=taskField.value;
        }
        let descriptionField = document.getElementById('description');
        if(descriptionField.value===""){

            window.alert("description must be filled ")
            return
        }else{
            descriptionField = descriptionField.value;
        }
        let dateField = document.getElementById('date');
        if(dateField.value ===""){
            window.alert("date must be filled ")
            return
        }else{
            dateField=dateField.value;
        }

        let openSectionElement = document.querySelectorAll("section")[1];
        let articleElement = document.createElement('article');

        let h3Element = document.createElement('h3');
        h3Element.textContent = taskField;
        
        let pElement = document.createElement("p");
        pElement.textContent ="Description: " +descriptionField;

        let pDateElement = document.createElement('p');
        pDateElement.textContent = "Due Date: " + dateField;

        let divElement = document.createElement('div');
        divElement.className = "flex";

        let buttonStartElement = document.createElement('button');
        buttonStartElement.className = "green";
        buttonStartElement.textContent = "Start";

        let buttonDeleteElement = document.createElement('button');
        buttonDeleteElement.className = "red";
        buttonDeleteElement.textContent = "Delete";

        divElement.appendChild(buttonStartElement);
        divElement.appendChild(buttonDeleteElement);

        articleElement.appendChild(h3Element);
        articleElement.appendChild(pElement);
        articleElement.appendChild(pDateElement);
        articleElement.appendChild(divElement);

        let sectionToAppent = openSectionElement.children[1];
        sectionToAppent.appendChild(articleElement);
        
        buttonStartElement.addEventListener('click', startFunction);
        buttonDeleteElement.addEventListener('click', deleteFunction)

        function startFunction(e){
            let inProgressSection = document.querySelectorAll("section")[2];
            let divElement = inProgressSection.children[1];
            divElement.appendChild(articleElement);

            let deleteButton = buttonStartElement;
            deleteButton.className = "red";
            deleteButton.textContent = "Delete";

            let finishButton = buttonDeleteElement;
            finishButton.className = 'orange';
            finishButton.textContent = "Finish";

            deleteButton.addEventListener('click', deleteFunction);
            finishButton.addEventListener('click', finishedFunction);

        }
        
        function deleteFunction(){
            articleElement.remove();
        }

        function finishedFunction(){
            let completeSection = document.querySelectorAll("section")[3];
            let completeDivElement = completeSection.children[1];
            articleElement.children[3].remove();
            completeDivElement.appendChild(articleElement);
            
        }
        taskField.value = "";
        descriptionField.value = "";
        dateField.value = "";
    } 

  

}