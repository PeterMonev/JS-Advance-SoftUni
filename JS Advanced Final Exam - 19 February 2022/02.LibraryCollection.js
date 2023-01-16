class LibraryCollection {
  constructor(capacity) {
    this.capacity = capacity;
    this.books = [];
  }

  addBook(bookName, bookAuthor) {
    if (this.capacity === 0) {
      throw new Error("Not enough space in the collection.");
    } else {
      this.capacity -= 1;
      this.books.push({ bookName, bookAuthor, payed: false });
      return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }
  }

  payBook(bookName) {
    let isValid = this.books.filter((b) => b.bookName === bookName)[0];

    if (isValid === undefined) {
      throw new Error(`${bookName} is not in the collection.`);
    } else if (isValid.payed === true) {
      throw new Error(`${bookName} has already been paid.`);
    } else {
      isValid.payed = true;
      return `${bookName} has been successfully paid.`;
    }
  }

  removeBook(bookName) {
    let found = this.books.filter((b) => b.bookName === bookName)[0];

    if (found === undefined) {
      throw new Error("The book, you're looking for, is not found.");
    } else if (found.payed === false) {
      throw new Error(
        `${bookName} need to be paid before removing from the collection.`
      );
    } else {
      let index = this.books.indexOf(found);
      this.books.splice(index, 1);
      return `${bookName} remove from the collection.`;
    }
  }

  getStatistics(bookAuthor) {
    if (bookAuthor === undefined) {
      this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
      let result = [
        `The book collection has ${this.capacity} empty spots left.`,
      ];

      for (let tokens of this.books) {
        let pay = "";
        if (tokens.payed === true) {
          pay = "Has Paid";
        } else {
          pay = "Not Paid";
        }
        result.push([`${tokens.bookName} == ${tokens.bookAuthor} - ${pay}.`]);
      }
      return result.join("\n");
    } else {
      let isValid = this.books.filter((b) => b.bookAuthor === bookAuthor)[0];
      let pay = "";

      if (isValid === undefined) {
        throw new Error(`${bookAuthor} is not in the collection.`);
      }

      if (isValid.payed === true) {
        pay = "Has Paid";
      } else {
        pay = "Not Paid";
      }
    
      return `${isValid.bookName} == ${bookAuthor} - ${pay}.`;
    }
  }
}

const library = new LibraryCollection(2);
console.log(library.addBook("Don Quixote", "Miguel de Cervantes"));
console.log(library.getStatistics("Miguel de Cervantes"));
