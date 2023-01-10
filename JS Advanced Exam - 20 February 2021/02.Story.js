class Story {
  constructor(title, creator) {
    this.title = title;
    this.creator = creator;
    this._comments = [];
    this._likes = [];
  }

  get likes() {
    let name = this._likes[0];
    if (this._likes.length == 0) {
      return `${this.title} has 0 likes`;
    } else if (this._likes.length == 1) {
      return `${name} likes this story!`;
    } else {
      return `${name} and ${this._likes.length - 1} others like this story!`;
    }
  }

  like(username) {
    let like = this._likes.find((x) => x == username);
    if (like && username != this.creator) {
      throw new Error("You can't like the same story twice!");
    } else if (username == this.creator) {
      throw new Error("You can't like your own story!");
    }
    this._likes.push(username);
    return `${username} liked ${this.title}!`;
  }

  dislike(username) {
    let user = this._likes.some((x) => x === username);

    if (!user) {
      throw new Error(`You can't dislike this story!`);
    }
    this._likes = this._likes.filter((x) => x != username);
    return `${username} disliked ${this.title}`;
  }

  comment(username, content, id) {
    let commentObj = { id, username, content, replies: [] };
    if (!id || this._comments.find((c) => c.id == id) == undefined) {
      id = this._comments.length + 1;
      commentObj.id = id;
      let toFindid = this._comments.find((x) => x.id == id);
      if (!toFindid) {
        this._comments.push(commentObj);
        return `${username} commented on ${this.title}`;
      }
    }
    if (this._comments.find((c) => c.id == id)) {
      let obj = this._comments.find((x) => x.id == id);
      let repliesLength = obj.replies.length;
      let replyId = Number(id);
      if (repliesLength == 0) {
        replyId = replyId + "." + 1;
      } else {
        replyId = id + "." + Number(repliesLength + 1);
      }
      let replyObj = { id: Number(replyId), username, content };

      obj.replies.push(replyObj);

      return "You replied successfully";
    }
  }

  toString(sortingType) {
    let result = [];
    result.push(`Title: ${this.title}`);
    result.push(`Creator: ${this.creator}`);
    result.push(`Likes: ${this._likes.length}`);
    result.push(`Comments:`);

    if (sortingType == "asc") {
      this._comments
        .sort((a, b) => a.id - b.id)
        .forEach((element) => {
          if (element.replies.length > 0) {
            result.push(
              `-- ${element.id}. ${element.username}: ${element.content}`
            );
            element.replies
              .sort((f, s) => f.id - s.id)
              .forEach((reply) => {
                result.push(
                  `--- ${reply.id}. ${reply.username}: ${reply.content}`
                );
              });
          } else {
            result.push(
              `-- ${element.id}. ${element.username}: ${element.content}`
            );
          }
        });
    } else if (sortingType == "desc") {
      this._comments
        .sort((a, b) => b.id - a.id)
        .forEach((element) => {
          if (element.replies.length > 0) {
            result.push(
              `-- ${element.id}. ${element.username}: ${element.content}`
            );
            element.replies
              .sort((first, second) => second.id - first.id)
              .forEach((reply) => {
                result.push(
                  `--- ${reply.id}. ${reply.username}: ${reply.content}`
                );
              });
          } else {
            result.push(
              `-- ${element.id}. ${element.username}: ${element.content}`
            );
          }
        });
    } else if (sortingType == "username") {
      this._comments
        .sort((a, b) => a.username.localeCompare(b.username))
        .forEach((element) => {
          if (element.replies.length > 0) {
            result.push(
              `-- ${element.id}. ${element.username}: ${element.content}`
            );
            element.replies
              .sort((f, s) => f.username.localeCompare(s.username))
              .forEach((reply) => {
                result.push(
                  `--- ${reply.id}. ${reply.username}: ${reply.content}`
                );
              });
          } else {
            result.push(
              `-- ${element.id}. ${element.username}: ${element.content}`
            );
          }
        });
    }

    return result.join("\n");
  }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log();
console.log(art.toString("username"));
console.log();
art.like("Zane");
console.log(art.toString("desc"));
