function solve() {
  const [author, title, category] = document.querySelectorAll("input");
  const content = document.getElementById("content");
  const createBtn = document.getElementsByClassName("btn create")[0];
  createBtn.addEventListener("click", onCreate);

  function onCreate(ev) {
    ev.preventDefault();

    const div = document.getElementsByClassName("site-content")[0];
    const section = div.childNodes[1].childNodes[1];
    let article = document.createElement("article");

    let h1Title = document.createElement("h1");
    h1Title.textContent = title.value;
    article.appendChild(h1Title);

    let pCategory = document.createElement("p");
    pCategory.textContent = "Category:";
    let strongCategory = document.createElement("strong");
    strongCategory.textContent = category.value;
    pCategory.appendChild(strongCategory);
    article.appendChild(pCategory);

    let pAuthor = document.createElement("p");
    pAuthor.textContent = "Creator:";
    let strongAuthor = document.createElement("strong");
    strongAuthor.textContent = author.value;
    pAuthor.appendChild(strongAuthor);
    article.appendChild(pAuthor);

    let pText = document.createElement("p");
    pText.textContent = content.value;
    article.appendChild(pText);

    //Buttons
    const divBtn = document.createElement("div");
    divBtn.classList = "buttons";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList = "btn delete";
    divBtn.appendChild(deleteBtn);
    divBtn.addEventListener("click", onDelete);

    let archiveBtn = document.createElement("button");
    archiveBtn.classList = "btn archive";
    archiveBtn.textContent = "Archive";
    divBtn.appendChild(archiveBtn);
    archiveBtn.addEventListener("click", onArchive);

    article.appendChild(divBtn);
    section.appendChild(article);
  }

  function onArchive(ev) {
    let articleArchive = ev.target.parentNode.parentNode;
    let h1Archive = articleArchive.childNodes[0];
    const ol = document.getElementsByTagName("ol")[0];
    let li = document.createElement("li");
    li.textContent = h1Archive.textContent;
    ol.appendChild(li);

    let liAllEle = Array.from(ol.children);
    liAllEle.sort((a, b) => a.textContent.localeCompare(b.textContent));

    for (let token of liAllEle) {
      ol.appendChild(token);
    }
  }

  function onDelete(ev) {
    ev.target.parentNode.parentNode.remove();
  }
}
