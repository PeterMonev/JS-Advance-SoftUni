class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guest = [];
  }

  addArticle(articleModel, articleName, quantity) {
    let model = articleModel.toLowerCase();
    let article = Object.keys(this.possibleArticles);

    if (!article.includes(model)) {
      throw new Error("This article model is not included in this gallery!");
    }

    let filtredArticle = this.listOfArticles.filter(
      (a) => a.articleName === articleName
    )[0];

    if (filtredArticle === undefined) {
      articleModel = articleModel.toLowerCase();
      this.listOfArticles.push({ articleModel, articleName, quantity });
    } else if (
      filtredArticle.articleName === articleName &&
      filtredArticle.articleModel === articleModel
    ) {
      filtredArticle.quantity += quantity;
    }

    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
  }

  inviteGuest(guestName, personality) {
    let filteredGuest = this.guest.filter((g) => g.guestName === guestName)[0];

    if (filteredGuest === undefined) {
      let points = 50;
      if (personality === "Vip") {
        points = 500;
      } else if (personality === "Middle") {
        points = 250;
      }

      this.guest.push({ guestName, points, purchaseArticle: 0 });
      return `You have successfully invited ${guestName}!`;
    } else {
      throw new Error(`${guestName} has already been invited.`);
    }
  }

  buyArticle(articleModel, articleName, guestName) {
    let filtredArticle = this.listOfArticles.filter(
      (a) => a.articleName === articleName
    )[0];

    if (
      filtredArticle === undefined ||
      filtredArticle.articleModel !== articleModel
    ) {
      throw new Error("This article is not found.");
    }

    if (filtredArticle.quantity === 0) {
      return `The ${articleName} is not available.`;
    }

    let filteredGuest = this.guest.filter((g) => g.guestName === guestName)[0];

    if (filteredGuest === undefined) {
     return "This guest is not invited.";
    }

    if (filteredGuest.points < this.possibleArticles[articleModel]) {
      return "You need to more points to purchase the article.";
    } else {
      filteredGuest.points -= this.possibleArticles[articleModel];
      filteredGuest.purchaseArticle += 1;
      filtredArticle.quantity -= 1;
      return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
    }
  }

  showGalleryInfo(criteria) {
    if (criteria === "article") {
      let result = ["Articles information:"];

      for (let token of this.listOfArticles) {
        result.push(
          `${token.articleModel} - ${token.articleName} - ${token.quantity}`
        );
      }

      return result.join("\n");
    } else if (criteria === "guest") {
      let result = ["Guests information:"];

      for (let token of this.guest) {
        result.push(`${token.guestName} - ${token.purchaseArticle}`);
      }

      return result.join("\n");
    }
  }
}

const artGallery = new ArtGallery("Curtis Mayfield");
artGallery.addArticle("picture", "Mona Liza", 3);
artGallery.addArticle("Item", "Ancient vase", 2);
artGallery.addArticle("picture", "Mona Liza", 1);
artGallery.inviteGuest("John", "Vip");
artGallery.inviteGuest("Peter", "Middle");
artGallery.buyArticle("picture", "Mona Liza", "John");
artGallery.buyArticle("item", "Ancient vase", "Peter");
console.log(artGallery.showGalleryInfo("article"));
console.log(artGallery.showGalleryInfo("guest"));
