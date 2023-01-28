window.addEventListener("load", solve);

function solve() {
  const publishBtn = document
    .getElementById("publish-btn")
    .addEventListener("click", onPublish);
  const title = document.getElementById("post-title");
  const category = document.getElementById("post-category");
  const content = document.getElementById("post-content");
  let btnEdit = document.createElement("button");
  let btnApprove = document.createElement("button");
  let ulReview = document.getElementById("review-list");
  let liReviiew = document.createElement("li");
  liReviiew.classList = "rpost";
  let article = document.createElement("article");
  let titleReview = document.createElement("h4");
  let categoryReview = document.createElement("p");
  let contentReview = document.createElement("p");
  btnEdit.addEventListener("click", onEdit);
  let categoryStr = "";
  let contentStr = "";

  btnApprove.addEventListener("click", onApprove);
  let ulApprove = document.getElementById("published-list");
  let liApprove = document.createElement("li");
  liApprove.classList = "rpost";
  let articleApprove = document.createElement("article");

  let clearBtn = document.getElementById("clear-btn");
  clearBtn.addEventListener("click", onClear);

  function onPublish(ev) {
    if (
      title.value.trim() === "" ||
      category.value.trim() === "" ||
      content.value.trim() === ""
    ) {
      return;
    }

    titleReview.textContent = title.value;
    categoryReview.textContent = "Category: " + category.value;
    contentReview.textContent = "Content: " + content.value;
    categoryStr = category.value;
    contentStr = content.value;

    article.appendChild(titleReview);
    article.appendChild(categoryReview);
    article.appendChild(contentReview);
    liReviiew.appendChild(article);
    btnEdit.classList = "action-btn edit";
    btnApprove.classList = "action-btn approve";
    btnEdit.textContent = "Edit";
    btnApprove.textContent = "Approve";
    liReviiew.appendChild(btnApprove);
    liReviiew.appendChild(btnEdit);
    ulReview.appendChild(liReviiew);
    title.value = "";
    category.value = "";
    content.value = "";
  }

  function onEdit(ev) {
    title.value = titleReview.textContent;
    category.value = categoryStr;
    content.value = contentStr;
    titleReview.textContent = "";
    categoryReview.textContent = "";
    contentReview.textContent = "";
    ulReview.removeChild(liReviiew);
  }

  function onApprove(ev) {
    articleApprove.appendChild(titleReview);
    articleApprove.appendChild(categoryReview);
    articleApprove.appendChild(contentReview);
    liApprove.appendChild(articleApprove);
    ulApprove.appendChild(liApprove);
    ulReview.removeChild(liReviiew);
  }

  function onClear(ev) {
    ulApprove.removeChild(liApprove);
  }
}
