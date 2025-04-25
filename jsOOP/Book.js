export default class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get title() {
    return this._title;
  }
  set title(titleValue) {
    if (titleValue.length < 2) {
      console.log('Ooops! Too short name!');
    }
    else {
      this._title = titleValue;

    }

  }

  get author() {
    return this._author;
  }
  set author(authorValue) {
    if (authorValue.length < 5) {
      console.log('Ooops! Too short author"s name!');
    }
    else {
      this._author = authorValue;

    }

  }

  get year() {
    return this._year;
  }
  set year(yearValue) {
    if (yearValue > 2025) {
      console.log('Ooops! Incorrect year value!');
    }
    else {
      this._year = yearValue;

    }

  }

  printInfo() {
    console.log(`${this.title} is written by ${this.author} in ${this.year}`);
  }

  static oldestBook(books) {

    let oldestOne = books[0];

    for (let i = 1; i < books.length; i++) {
      if (books[i].year < oldestOne.year) {
        oldestOne = books[i];
      }
    }

    return oldestOne;
  }

}